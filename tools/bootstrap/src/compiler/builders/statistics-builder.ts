import type { BootstrapContext } from "../model/bootstrap-context.js";

export class StatisticsBuilder {

    public build(
        context: BootstrapContext
    ): void {

        context.statistics.manifestFilesDiscovered =
            context.manifestFiles.length;

        context.statistics.manifestFilesParsed =
            context.manifestFiles.filter(
                manifest => manifest.contents !== undefined
            ).length;

        context.statistics.tokensGenerated =
            context.manifestFiles.reduce(
                (total, manifest) =>
                    total + (manifest.tokens?.length ?? 0),
                0
            );

        context.statistics.directoriesDiscovered =
            context.manifest.directories.length;

        context.statistics.filesDiscovered =
            context.manifest.files.length;

        context.statistics.diagnosticsGenerated =
            context.diagnostics.length;

    }

}