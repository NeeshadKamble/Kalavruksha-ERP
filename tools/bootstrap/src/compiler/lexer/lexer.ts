import { TokenType } from "./token-type.js";
import type { LexerContext } from "./lexer-context.js";
import type { ManifestFile } from "../model/manifest-file.js";
import type { Token } from "./token.js";

export class ManifestLexer {

    public lex(
        manifest: ManifestFile
    ): readonly Token[] {

        if (!manifest.contents) {
            return [];
        }

        const context: LexerContext = {

            manifest,

            currentLine: 0,

            currentColumn: 1,

            tokens: []

        };

        const lines = manifest.contents.split(/\r?\n/);

        for (let index = 0; index < lines.length; index++) {

            context.currentLine = index + 1;

            context.currentColumn = 1;

            const line = lines[index];

            this.lexLine(
                line,
                context
            );

        }

        context.tokens.push({

            type: TokenType.EndOfFile,

            value: "",

            line: context.currentLine + 1,

            column: 1,

            file: manifest.name

        });

        return context.tokens;

    }

    private lexLine(

        line: string,

        context: LexerContext

    ): void {

        const trimmed = line.trim();

        if (trimmed.length === 0) {

            this.emit(

                TokenType.Empty,

                "",

                context

            );

            return;

        }

        if (trimmed.startsWith("```")) {

            this.emit(

                TokenType.CodeFence,

                trimmed,

                context

            );

            return;

        }

        if (trimmed.startsWith("#")) {

            this.emit(

                TokenType.Heading,

                trimmed,

                context

            );

            return;

        }

        if (

            trimmed.startsWith("-") ||

            trimmed.startsWith("*")

        ) {

            this.emit(

                TokenType.ListItem,

                trimmed,

                context

            );

            return;

        }

        if (

            trimmed.startsWith("|") &&

            trimmed.endsWith("|")

        ) {

            this.emit(

                TokenType.TableRow,

                trimmed,

                context

            );

            return;

        }

        if (

            trimmed.includes(":") &&

            !trimmed.startsWith("http")

        ) {

            this.emit(

                TokenType.Metadata,

                trimmed,

                context

            );

            return;

        }

        this.emit(

            TokenType.Text,

            trimmed,

            context

        );

    }

    private emit(

        type: TokenType,

        value: string,

        context: LexerContext

    ): void {

        context.tokens.push({

            type,

            value,

            line: context.currentLine,

            column: context.currentColumn,

            file: context.manifest.name

        });

    }

}