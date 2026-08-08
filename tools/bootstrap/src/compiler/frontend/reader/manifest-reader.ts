import { Diagnostic } from "../../model/diagnostic.js";

import { Manifest } from "./manifest.js";
import { ManifestCollection } from "./manifest-collection.js";
import { ManifestStatistics } from "./manifest-statistics.js";
import { ManifestDiscovery } from "./manifest-discovery.js";
import { ManifestLoader } from "./manifest-loader.js";
import { ManifestOrder } from "./manifest-order.js";
import { ReaderContext } from "./reader-context.js";
import { ReaderResult } from "./reader-result.js";

export class ManifestReader {

    private readonly discovery: ManifestDiscovery;

    private readonly loader: ManifestLoader;

    public constructor() {

        this.discovery = new ManifestDiscovery();

        this.loader = new ManifestLoader();

    }

    public async read(
        context: ReaderContext
    ): Promise<ReaderResult> {

        const diagnostics: Diagnostic[] = [
            ...context.diagnostics
        ];

        const manifestDirectory =
            this.resolveManifestDirectory(context);

        const manifestPaths =
            await this.discovery.discover(
                manifestDirectory,
                context.configuration.recursive,
                context.configuration.includeHiddenFiles,
                context.configuration.extensions,
                ManifestOrder.ManifestIndex
            );

        const manifests: Manifest[] = [];

        for (const manifestPath of manifestPaths) {

            const manifest =
                await this.loader.load(
                    context.rootDirectory,
                    manifestPath,
                    context.configuration.encoding
                );

            manifests.push(manifest);

            diagnostics.push(
                ...manifest.diagnostics
            );

        }

        const statistics =
            this.buildStatistics(
                manifests
            );

        const collection: ManifestCollection = {

            manifests,

            statistics,

            diagnostics

        };

        return {

            success:
                diagnostics.length === 0,

            collection,

            diagnostics

        };

    }

    private resolveManifestDirectory(
        context: ReaderContext
    ): string {

        return `${context.rootDirectory}/${context.manifestDirectory}`;

    }

    private buildStatistics(
        manifests: readonly Manifest[]
    ): ManifestStatistics {

        const totalBytes =
            manifests.reduce(
                (sum, manifest) =>
                    sum + manifest.size,
                0
            );

        const totalLines =
            manifests.reduce(
                (sum, manifest) =>
                    sum +
                    this.loader.countLines(
                        manifest
                    ),
                0
            );

        const totalTokens =
            manifests.reduce(
                (sum, manifest) =>
                    sum +
                    manifest.tokens.length,
                0
            );

        const sizes =
            manifests.map(
                manifest => manifest.size
            );

        const largestManifestSize =
            sizes.length > 0
                ? Math.max(...sizes)
                : 0;

        const smallestManifestSize =
            sizes.length > 0
                ? Math.min(...sizes)
                : 0;

        const averageManifestSize =
            manifests.length > 0
                ? Math.round(
                    totalBytes /
                    manifests.length
                )
                : 0;

        return {

            manifestCount:
                manifests.length,

            totalBytes,

            totalLines,

            totalTokens,

            averageManifestSize,

            largestManifestSize,

            smallestManifestSize

        };

    }

}