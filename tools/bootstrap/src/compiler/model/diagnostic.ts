export enum DiagnosticSeverity {

    Info = "INFO",

    Warning = "WARNING",

    Error = "ERROR"

}

export interface Diagnostic {

    /**
     * Diagnostic severity.
     */
    severity: DiagnosticSeverity;

    /**
     * Human-readable message.
     */
    message: string;

    /**
     * Optional manifest file name.
     */
    manifest?: string;

    /**
     * Optional line number.
     */
    line?: number;

}