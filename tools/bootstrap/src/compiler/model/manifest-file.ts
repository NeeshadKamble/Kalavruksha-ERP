import type { Token } from "../lexer/token.js";

export interface ManifestFile {

    name: string;

    path: string;

    contents?: string;

    tokens?: readonly Token[];

}