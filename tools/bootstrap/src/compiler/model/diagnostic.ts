export enum DiagnosticSeverity {

    Info = "INFO",

    Warning = "WARNING",

    Error = "ERROR"

}

/**
 * Compiler diagnostic.
 */
export interface Diagnostic {

    /**
     * Optional diagnostic identifier.
     */
    code?: string;

    /**
     * Severity.
     */
    severity: DiagnosticSeverity;

    /**
     * Human-readable message.
     */
    message: string;

    /**
     * Absolute source file.
     */
    file?: string;

    /**
     * Manifest name.
     */
    manifest?: string;

    /**
     * Line number (1-based).
     */
    line?: number;

    /**
     * Column number (1-based).
     */
    column?: number;

    /**
     * Character offset.
     */
    offset?: number;

    /**
     * Length of the affected span.
     */
    length?: number;

    /**
     * Optional suggested fix.
     */
    suggestion?: string;

}