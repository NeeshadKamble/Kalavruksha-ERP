import type { BootstrapContext } from "../model/bootstrap-context.js";
import type { ManifestFile } from "../model/manifest-file.js";
import type { ParserContext } from "./parser-context.js";
import type { ParserResult } from "./parser-result.js";

import { ManifestLexer } from "../lexer/lexer.js";

export class ManifestParser {

    private readonly lexer: ManifestLexer;

    public constructor() {

        this.lexer = new ManifestLexer();

    }

    public parse(

        context: BootstrapContext

    ): ParserResult {

        context.statistics.manifestFilesParsed = 0;

        for (const manifest of context.manifestFiles) {

            this.parseManifest(

                manifest,

                context

            );

        }

        return {

            manifest: context.manifest,

            diagnostics: context.diagnostics,

            success: !context.diagnostics.some(

                diagnostic => diagnostic.severity === "ERROR"

            )

        };

    }

    private parseManifest(

        manifest: ManifestFile,

        context: BootstrapContext

    ): void {

        if (!manifest.contents) {

            return;

        }

        const tokens = this.lexer.lex(
            manifest
            );

            manifest.tokens = tokens;

            context.statistics.tokensGenerated +=
            tokens.length;

        context.statistics.manifestFilesParsed++;

        const parserContext: ParserContext = {

            bootstrap: context,

            tokens,

            currentToken: 0

        };

        while (

            !this.isEnd(

                parserContext

            )

        ) {

            this.advance(

                parserContext

            );

        }

    }

    private advance(

        context: ParserContext

    ): void {

        context.currentToken++;

    }

    private isEnd(

        context: ParserContext

    ): boolean {

        return (

            context.currentToken >=

            context.tokens.length

        );

    }

}