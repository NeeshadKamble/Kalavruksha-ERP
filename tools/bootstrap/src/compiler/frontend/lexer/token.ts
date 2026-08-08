import { TokenCategory } from "./token-category.js";
import { TokenLocation } from "./token-location.js";
import { TokenType } from "./token-type.js";

/**
 * Immutable lexical token produced by the lexer.
 */
export interface Token {

    /**
     * Token classification.
     */
    readonly type: TokenType;

    /**
     * High-level token group.
     */
    readonly category: TokenCategory;

    /**
     * Original source text.
     */
    readonly lexeme: string;

    /**
     * Parsed value.
     *
     * Examples:
     * Number -> 42
     * String -> "hello"
     * Boolean -> true
     */
    readonly value: unknown;

    /**
     * Exact source location.
     */
    readonly location: TokenLocation;

}