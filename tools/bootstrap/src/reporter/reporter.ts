import { promises as fs } from "node:fs";
import path from "node:path";

import type { BootstrapContext } from "../compiler/model/bootstrap-context.js";

export class RepositoryReporter {

    public async generate(

        context: BootstrapContext

    ): Promise<void> {

        const report = {

            generatedAt: new Date().toISOString(),

            statistics: context.statistics,

            diagnostics: context.diagnostics,

            manifest: {

                title: context.manifest.metadata.title,

                version: context.manifest.metadata.version,

                directories: context.manifest.directories.length,

                files: context.manifest.files.length

            }

        };

        const outputDirectory = "output";

        await fs.mkdir(

            outputDirectory,

            {

                recursive: true

            }

        );

        const reportPath = path.join(

            outputDirectory,

            "bootstrap-report.json"

        );

        await fs.writeFile(

            reportPath,

            JSON.stringify(

                report,

                null,

                4

            ),

            "utf8"

        );

        console.log("");

        console.log(

            `Report generated: ${reportPath}`

        );

    }

}