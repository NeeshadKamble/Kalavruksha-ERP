export interface ManifestStatistics {

    readonly manifestCount: number;

    readonly totalBytes: number;

    readonly totalLines: number;

    readonly totalTokens: number;

    readonly averageManifestSize: number;

    readonly largestManifestSize: number;

    readonly smallestManifestSize: number;

}