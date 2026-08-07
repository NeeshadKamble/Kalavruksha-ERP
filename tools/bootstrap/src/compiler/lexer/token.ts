import { TokenType } from "./token-type.js";

export interface Token {

    /**
     * Token classification.
     */
    readonly type: TokenType;

    /**
     * Raw token value.
     */
    readonly value: string;

    /**
     * Original line number in the manifest.
     */
    readonly line: number;

    /**
     * Original column number.
     */
    readonly column: number;

    /**
     * Source manifest filename.
     */
    readonly file: string;

}