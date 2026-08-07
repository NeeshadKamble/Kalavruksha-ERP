import type { Diagnostic } from "./diagnostic.js";
import type { ManifestFile } from "./manifest-file.js";
import type { RepositoryManifest } from "./repository-manifest.js";
import type { BootstrapStatistics } from "./statistics.js";

/**
 * Shared state that flows through every stage of the bootstrap compiler.
 *
 * Every compiler stage receives the same context instance and enriches it.
 *
 * Filesystem
 *      ↓
 * Discovery
 *      ↓
 * Lexer
 *      ↓
 * Parser
 *      ↓
 * Builders
 *      ↓
 * Generator
 *      ↓
 * Validator
 *      ↓
 * Reporter
 */
export interface BootstrapContext {

    /**
     * Absolute or relative path to repository-manifest/
     */
    manifestDirectory: string;

    /**
     * Every markdown manifest discovered.
     */
    manifestFiles: ManifestFile[];

    /**
     * Parsed repository manifest.
     */
    manifest: RepositoryManifest;

    /**
     * Compiler diagnostics.
     */
    diagnostics: Diagnostic[];

    /**
     * Compiler statistics.
     */
    statistics: BootstrapStatistics;

}