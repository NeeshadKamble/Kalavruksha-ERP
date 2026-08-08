import { readdir } from "node:fs/promises";
import { join, basename } from "node:path";

import { ManifestOrder } from "./manifest-order.js";

export class ManifestDiscovery {

    public async discover(
        manifestDirectory: string,
        recursive = false,
        includeHiddenFiles = false,
        extensions: readonly string[] = [".md"],
        order: ManifestOrder = ManifestOrder.Numerical
    ): Promise<readonly string[]> {

        const manifests: string[] = [];

        await this.scan(
            manifestDirectory,
            manifests,
            recursive,
            includeHiddenFiles,
            extensions
        );

        return this.sort(
            manifests,
            order
        );

    }

    private async scan(
        directory: string,
        manifests: string[],
        recursive: boolean,
        includeHiddenFiles: boolean,
        extensions: readonly string[]
    ): Promise<void> {

        const entries = await readdir(directory, {
            withFileTypes: true
        });

        for (const entry of entries) {

            if (!includeHiddenFiles && entry.name.startsWith(".")) {
                continue;
            }

            const absolutePath = join(
                directory,
                entry.name
            );

            if (entry.isDirectory()) {

                if (recursive) {

                    await this.scan(
                        absolutePath,
                        manifests,
                        recursive,
                        includeHiddenFiles,
                        extensions
                    );

                }

                continue;

            }

            const extension =
                entry.name.substring(
                    entry.name.lastIndexOf(".")
                );

            if (!extensions.includes(extension)) {
                continue;
            }

            manifests.push(absolutePath);

        }

    }

    private sort(
        manifests: string[],
        order: ManifestOrder
    ): readonly string[] {

        switch (order) {

            case ManifestOrder.Alphabetical:

                return manifests.sort((a, b) =>
                    basename(a).localeCompare(basename(b))
                );

            case ManifestOrder.Numerical:

                return manifests.sort((a, b) =>
                    this.compareNumerically(
                        basename(a),
                        basename(b)
                    )
                );

            case ManifestOrder.ManifestIndex:

                return manifests.sort((a, b) =>
                    this.compareManifestPriority(
                        basename(a),
                        basename(b)
                    )
                );

            default:

                return manifests;

        }

    }

    private compareNumerically(
        left: string,
        right: string
    ): number {

        const leftMatch =
            left.match(/PART-(\d+)/i);

        const rightMatch =
            right.match(/PART-(\d+)/i);

        if (leftMatch && rightMatch) {

            return (
                Number(leftMatch[1]) -
                Number(rightMatch[1])
            );

        }

        return left.localeCompare(right);

    }

    private compareManifestPriority(
        left: string,
        right: string
    ): number {

        const priority = (name: string): number => {

            const upper = name.toUpperCase();

            if (upper === "MANIFEST-INDEX.MD") return 0;

            if (upper === "VERSION.MD") return 1;

            if (upper === "README.MD") return 2;

            if (upper.startsWith("PART-")) return 10;

            if (
                upper ===
                "FINAL-REPOSITORY-VALIDATION-AND-CERTIFICATION.MD"
            ) {
                return 100;
            }

            return 1000;

        };

        const difference =
            priority(left) - priority(right);

        if (difference !== 0) {
            return difference;
        }

        return this.compareNumerically(
            left,
            right
        );

    }

}