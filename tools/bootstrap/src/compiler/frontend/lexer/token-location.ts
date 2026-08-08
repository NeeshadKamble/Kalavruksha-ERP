/**
 * Represents the exact location of a token
 * within a source manifest.
 */
export interface TokenLocation {

    /**
     * Absolute file path.
     */
    readonly file: string;

    /**
     * Relative manifest path.
     */
    readonly relativePath: string;

    /**
     * 1-based line number.
     */
    readonly line: number;

    /**
     * 1-based column number.
     */
    readonly column: number;

    /**
     * Absolute character offset
     * from the beginning of the file.
     */
    readonly offset: number;

    /**
     * Length of the token in characters.
     */
    readonly length: number;

}