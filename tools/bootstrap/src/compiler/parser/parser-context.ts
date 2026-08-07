import type { BootstrapContext } from "../model/bootstrap-context.js";
import type { Token } from "../lexer/token.js";

export interface ParserContext {

    /**
     * Shared bootstrap context.
     */
    bootstrap: BootstrapContext;

    /**
     * Token stream currently being parsed.
     */
    tokens: readonly Token[];

    /**
     * Current token index.
     */
    currentToken: number;

}