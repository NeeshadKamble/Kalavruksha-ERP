import { Diagnostic } from "../../model/diagnostic.js";
import { Token } from "../../lexer/token.js";

export interface Manifest {

    readonly name: string;

    readonly path: string;

    readonly relativePath: string;

    readonly extension: string;

    readonly content: string;

    readonly size: number;

    readonly hash: string;

    readonly encoding: string;

    readonly tokens: readonly Token[];

    readonly diagnostics: readonly Diagnostic[];

}