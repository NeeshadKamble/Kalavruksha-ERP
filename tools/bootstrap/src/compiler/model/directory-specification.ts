export interface DirectorySpecification {

    /**
     * Absolute repository-relative directory path.
     * Example:
     * packages/domain/src
     */
    path: string;

    /**
     * Parent directory.
     * Null for root-level directories.
     */
    parent: string | null;

    /**
     * Immediate child directories.
     */
    children: string[];

    /**
     * Source manifest file.
     */
    sourceManifest: string;

    /**
     * Manifest line number.
     */
    sourceLine: number;

}