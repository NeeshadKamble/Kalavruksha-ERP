import type { ManifestFile } from "../model/manifest-file.js";
import type { Token } from "./token.js";

export interface LexerContext {

    /**
     * Manifest currently being lexed.
     */
    manifest: ManifestFile;

    /**
     * Current line number.
     */
    currentLine: number;

    /**
     * Current column number.
     */
    currentColumn: number;

    /**
     * Tokens produced by the lexer.
     */
    tokens: Token[];

}