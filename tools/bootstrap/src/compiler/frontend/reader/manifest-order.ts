export enum ManifestOrder {

    /**
     * Uses the MANIFEST-INDEX.md file as the source of truth.
     */
    ManifestIndex = "manifest-index",

    /**
     * Orders files numerically.
     *
     * Example:
     * PART-01.md
     * PART-02.md
     * PART-03.md
     */
    Numerical = "numerical",

    /**
     * Standard alphabetical ordering.
     */
    Alphabetical = "alphabetical"

}