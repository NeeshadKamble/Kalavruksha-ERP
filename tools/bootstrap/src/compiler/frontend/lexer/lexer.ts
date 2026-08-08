import { KEYWORD_MAP } from "./keyword-map.js";
import { CharacterStream } from "./character-stream.js";
import { LexerResult } from "./lexer-result.js";
import { Token } from "./token.js";
import { TokenCategory } from "./token-category.js";
import { TokenLocation } from "./token-location.js";
import { TokenType } from "./token-type.js";
import { DiagnosticCode } from "../../model/diagnostic-code.js";
import {
    Diagnostic,
    DiagnosticSeverity
} from "../../model/diagnostic.js";

export class Lexer {

    public lex(
        source: string,
        file: string
    ): LexerResult {

        const stream = new CharacterStream(
            source,
            file
        );

        const tokens: Token[] = [];
        const diagnostics: Diagnostic[] = [];

        while (!stream.isEOF()) {

            const character = stream.peek();

            // Ignore whitespace for now.
            if (this.isWhitespace(character)) {

                stream.advance();

                continue;

            }
            // Comments
            if (
                character === "/" &&
                (
                    stream.peek(1) === "/" ||
                    stream.peek(1) === "*"
                )
            ) {
            
                tokens.push(
                    this.readComment(
                        stream,
                        diagnostics,
                        file
                    )
                );
            
                continue;
            
            }

            // Word / Keyword / Path
            if (
            
                this.isIdentifierStart(character) ||
            
                (
                    character === "." &&
                    this.isIdentifierStart(stream.peek(1))
                )
            
            ) {
            
                tokens.push(
                    this.readWordOrPath(stream)
                );
            
                continue;
            
            }
            // String literals
            if (
                character === "\"" ||
                character === "'"
            ) {
            
                tokens.push(
                    this.readString(
                        stream,
                        diagnostics,
                        file
                    )
                );
            
                continue;
            
            }
            // Numbers
            if (this.isDigit(character)) {
            
                tokens.push(
                    this.readNumber(stream)
                );
            
                continue;
            
            }
            
            
            // Symbols
            if (this.isSymbol(character)) {
            
                tokens.push(
                    this.readSymbol(stream)
                );
            
                continue;

            }

            // Unknown character
            const line = stream.currentLine;
            const column = stream.currentColumn;
                    
            const unknown = stream.advance();
                    
            this.reportErrorAt(
            
                diagnostics,
            
                DiagnosticCode.LEX003,
            
                `Unexpected character '${unknown}'.`,
            
                file,
            
                line,
            
                column
            
            );

            tokens.push(
            
                this.createToken(
                
                    TokenType.Unknown,
                
                    TokenCategory.Unknown,
                
                    unknown,
                
                    stream
                
                )
            
            );

        }

        tokens.push(
            this.createToken(
                TokenType.EndOfFile,
                TokenCategory.EndOfFile,
                "",
                stream
            )
        );

        return {

        tokens,
            
        diagnostics
            
    };

    }
    private readWordOrPath(
        stream: CharacterStream
    ): Token{

        let lexeme = "";

        let isPath = false;

        if (stream.peek() === ".") {
                
            isPath = true;
                
            lexeme += stream.advance();
                
        }

        while (!stream.isEOF()) {

            const character = stream.peek();

            if (

                /^[A-Za-z0-9_-]$/.test(character)

            ) {

                lexeme += stream.advance();

                continue;

            }

            if (character === ".") {

                const next = stream.peek(1);

                if (
                    this.isIdentifierStart(next) ||
                    this.isDigit(next)
                ) {
                
                    isPath = true;
                
                    lexeme += stream.advance();
                
                    continue;
                
                }
            
                break;
            
            }

            if (character === "/") {
            
                isPath = true;
            
                lexeme += stream.advance();
            
                continue;
            
            }

            break;

        }

        // Remove trailing slash from directories
        // but keep it inside the token.

        if (

            lexeme.endsWith("/")

        ) {

            return this.createToken(

                TokenType.Path,

                TokenCategory.Literal,

                lexeme,

                stream

            );

        }

        if (isPath) {

            return this.createToken(

                TokenType.Path,

                TokenCategory.Literal,

                lexeme,

                stream

            );

        }

        const keyword = KEYWORD_MAP.get(

            lexeme.toLowerCase()

        );

        if (keyword !== undefined) {

            return this.createToken(

                keyword,

                TokenCategory.Keyword,

                lexeme,

                stream

            );

        }

        if (

            lexeme === "true" ||

            lexeme === "false"

        ) {

            return this.createToken(

                TokenType.Boolean,

                TokenCategory.Literal,

                lexeme,

                stream

            );

        }

        if (

            lexeme === "null"

        ) {

            return this.createToken(

                TokenType.Null,

                TokenCategory.Literal,

                lexeme,

                stream

            );

        }

        return this.createToken(

            TokenType.Identifier,

            TokenCategory.Identifier,

            lexeme,

            stream

        );

    }

    private readString(
        stream: CharacterStream,
        diagnostics: Diagnostic[],
        file: string
    ): Token {
    
        const quote = stream.advance();
    
        let lexeme = quote;
    
        while (!stream.isEOF()) {
        
            const character = stream.advance();
        
            lexeme += character;
        
            // Escape sequence
            if (
                character === "\\" &&
                !stream.isEOF()
            ) {
            
                lexeme += stream.advance();
            
                continue;
            
            }
        
            // Closing quote
            if (character === quote) {
            
                return this.createToken(
                
                    TokenType.String,
                
                    TokenCategory.Literal,
                
                    lexeme,
                
                    stream
                
                );
            
            }
        
        }
        this.reportErrorAt(

            diagnostics,
                
            DiagnosticCode.LEX001,
                
            "Unterminated string literal.",
                
            file,
                
            stream.currentLine,
                
            stream.currentColumn
                
        );

        return this.createToken(
        
            TokenType.String,
        
            TokenCategory.Literal,
        
            lexeme,
        
            stream
        
        );
    
    }

   private readComment(
    stream: CharacterStream,
    diagnostics: Diagnostic[],
    file: string
): Token {
    
        let lexeme = "";
    
        // Single-line comment
        if (
            stream.peek() === "/" &&
            stream.peek(1) === "/"
        ) {
        
            lexeme += stream.advance();
            lexeme += stream.advance();
        
            while (
                !stream.isEOF() &&
                stream.peek() !== "\n"
            ) {
            
                lexeme += stream.advance();
            
            }
        
            return this.createToken(
            
                TokenType.Comment,
            
                TokenCategory.Comment,
            
                lexeme,
            
                stream
            
            );
        
        }
    
        // Multi-line comment
        lexeme += stream.advance();
        lexeme += stream.advance();
    
        while (!stream.isEOF()) {

    const character = stream.advance();

            lexeme += character;

            if (
                character === "*" &&
                stream.peek() === "/"
            ) {
            
                lexeme += stream.advance();
            
                return this.createToken(
                    TokenType.Comment,
                    TokenCategory.Comment,
                    lexeme,
                    stream
                );
            
            }
        
        }

        // EOF reached before */
        this.reportErrorAt(

            diagnostics,

            DiagnosticCode.LEX002,

            "Unterminated block comment.",

            file,

            stream.currentLine,

            stream.currentColumn

        );

        return this.createToken(
            TokenType.Comment,
            TokenCategory.Comment,
            lexeme,
            stream
        );
    
    }
    
    private readNumber(
        stream: CharacterStream
    ): Token {

        let lexeme = "";

        let hasDecimal = false;

        while (!stream.isEOF()) {

            const character = stream.peek();

            if (this.isDigit(character)) {

                lexeme += stream.advance();

                continue;

            }

            if (
                character === "." &&
                !hasDecimal
            ) {

                hasDecimal = true;

                lexeme += stream.advance();

                continue;

            }

            break;

        }

        return this.createToken(
            TokenType.Number,
            TokenCategory.Literal,
            lexeme,
            stream
        );

    }

        private createToken(
        type: TokenType,
        category: TokenCategory,
        lexeme: string,
        stream: CharacterStream
    ): Token {

        const location: TokenLocation = {

            file: stream.filename,

            relativePath: stream.filename,

            line: stream.currentLine,

            column: Math.max(
                1,
                stream.currentColumn - lexeme.length
            ),

            offset: Math.max(
                0,
                stream.offset - lexeme.length
            ),

            length: lexeme.length

        };

        return {

            type,

            category,

            lexeme,

            value: lexeme,

            location

        };

    }
    private reportErrorAt(
        diagnostics: Diagnostic[],
        code: DiagnosticCode,
        message: string,
        file: string,
        line: number,
        column: number
    ): void {

        diagnostics.push({

            code,

            severity: DiagnosticSeverity.Error,

            message,

            file,

            line,

            column

        });

    }

    private isWhitespace(
        character: string
    ): boolean {

        return (
            character === " " ||
            character === "\t" ||
            character === "\r" ||
            character === "\n"
        );

    }

    private isIdentifierStart(
        character: string
    ): boolean {

        return /^[A-Za-z_]$/.test(
            character
        );

    }

    
    private isDigit(
        character: string
    ): boolean {

        return /^[0-9]$/.test(
            character
        );

    }
    private readSymbol(
    stream: CharacterStream
): Token {

    const character = stream.advance();

    switch (character) {

        case "{":
            return this.createToken(
                TokenType.LeftBrace,
                TokenCategory.Delimiter,
                character,
                stream
            );

        case "}":
            return this.createToken(
                TokenType.RightBrace,
                TokenCategory.Delimiter,
                character,
                stream
            );

        case "[":
            return this.createToken(
                TokenType.LeftBracket,
                TokenCategory.Delimiter,
                character,
                stream
            );

        case "]":
            return this.createToken(
                TokenType.RightBracket,
                TokenCategory.Delimiter,
                character,
                stream
            );

        case "(":
            return this.createToken(
                TokenType.LeftParenthesis,
                TokenCategory.Delimiter,
                character,
                stream
            );

        case ")":
            return this.createToken(
                TokenType.RightParenthesis,
                TokenCategory.Delimiter,
                character,
                stream
            );

        case ":":
            return this.createToken(
                TokenType.Colon,
                TokenCategory.Delimiter,
                character,
                stream
            );

        case ";":
            return this.createToken(
                TokenType.Semicolon,
                TokenCategory.Delimiter,
                character,
                stream
            );

        case ",":
            return this.createToken(
                TokenType.Comma,
                TokenCategory.Delimiter,
                character,
                stream
            );

        case ".":
            return this.createToken(
                TokenType.Dot,
                TokenCategory.Delimiter,
                character,
                stream
            );

        case "/":
            return this.createToken(
                TokenType.Slash,
                TokenCategory.Operator,
                character,
                stream
            );

        case "\\":
            return this.createToken(
                TokenType.Backslash,
                TokenCategory.Operator,
                character,
                stream
            );

        case "=":
            return this.createToken(
                TokenType.Equal,
                TokenCategory.Operator,
                character,
                stream
            );

        case "@":
            return this.createToken(
                TokenType.At,
                TokenCategory.Operator,
                character,
                stream
            );

        case "#":
            return this.createToken(
                TokenType.Hash,
                TokenCategory.Operator,
                character,
                stream
            );

        case "?":
            return this.createToken(
                TokenType.Question,
                TokenCategory.Operator,
                character,
                stream
            );

        case "!":
            return this.createToken(
                TokenType.Exclamation,
                TokenCategory.Operator,
                character,
                stream
            );
        case "*":
            return this.createToken(
                TokenType.Asterisk,
                TokenCategory.Operator,
                character,
                stream
            );
        
        case "%":
            return this.createToken(
                TokenType.Percent,
                TokenCategory.Operator,
                character,
                stream
            );

    }

    return this.createToken(
        TokenType.Unknown,
        TokenCategory.Unknown,
        character,
        stream
    );

}
private isSymbol(
    character: string
): boolean {

    return "{}[]():;,./\\=@#!?*%".includes(character);

}


}
