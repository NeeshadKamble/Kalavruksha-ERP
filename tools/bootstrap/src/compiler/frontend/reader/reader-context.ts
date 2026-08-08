import { Diagnostic } from "../../model/diagnostic.js";

export interface ReaderConfiguration {

    readonly recursive: boolean;

    readonly encoding: BufferEncoding;

    readonly includeHiddenFiles: boolean;

    readonly extensions: readonly string[];

}

export interface ReaderContext {

    readonly rootDirectory: string;

    readonly manifestDirectory: string;

    readonly configuration: ReaderConfiguration;

    readonly diagnostics: Diagnostic[];

}