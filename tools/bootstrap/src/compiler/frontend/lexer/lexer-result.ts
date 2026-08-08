import { Diagnostic } from "../../model/diagnostic.js";
import { Token } from "./token.js";

export interface LexerResult {

    /**
     * Tokens produced by the lexer.
     */
    tokens: Token[];

    /**
     * Diagnostics produced during lexing.
     */
    diagnostics: Diagnostic[];

}