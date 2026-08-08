import { Diagnostic } from "../../model/diagnostic.js";
import { CharacterStream } from "./character-stream.js";
import { Token } from "./token.js";

/**
 * Internal mutable state used during lexical analysis.
 *
 * This context exists only while the lexer is processing
 * a single source file.
 */
export interface LexerContext {

    /**
     * Character stream being scanned.
     */
    readonly stream: CharacterStream;

    /**
     * Tokens produced so far.
     */
    readonly tokens: Token[];

    /**
     * Diagnostics produced during lexing.
     */
    readonly diagnostics: Diagnostic[];

}