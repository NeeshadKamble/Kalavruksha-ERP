import type { Diagnostic } from "../model/diagnostic.js";
import type { RepositoryManifest } from "../model/repository-manifest.js";

export interface ParserResult {

    /**
     * Parsed repository manifest.
     */
    manifest: RepositoryManifest;

    /**
     * Diagnostics generated during parsing.
     */
    diagnostics: Diagnostic[];

    /**
     * Indicates whether parsing completed successfully.
     */
    success: boolean;

}