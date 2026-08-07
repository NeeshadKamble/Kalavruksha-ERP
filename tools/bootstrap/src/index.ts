import { performance } from "node:perf_hooks";

import { FileSystem } from "./filesystem/index.js";

import { ManifestParser } from "./compiler/parser/index.js";

import { RepositoryGenerator } from "./generator/index.js";

import { RepositoryValidator } from "./validator/index.js";

import { RepositoryReporter } from "./reporter/index.js";

import type { BootstrapContext } from "./compiler/model/index.js";

import {
    BOOTSTRAP_TOOL_NAME,
    MANIFEST_DIRECTORY
} from "./shared/index.js";

async function main(): Promise<void> {

    const start = performance.now();

    console.log("");

    console.log(BOOTSTRAP_TOOL_NAME);

    console.log("=".repeat(BOOTSTRAP_TOOL_NAME.length));

    console.log("");

    const filesystem = new FileSystem();

    const context: BootstrapContext = {

        manifestDirectory: MANIFEST_DIRECTORY,

        manifestFiles: [],

        manifest: {

            metadata: {

                title: "",

                version: ""

            },

            directories: [],

            files: []

        },

        diagnostics: [],

        statistics: {

            manifestFilesDiscovered: 0,

            manifestFilesParsed: 0,

            tokensGenerated: 0,

            directoriesDiscovered: 0,

            filesDiscovered: 0,

            diagnosticsGenerated: 0,

            executionTimeMs: 0

        }

    };

    console.log("Stage 1  Discovering manifest files...");

    const parser = new ManifestParser();

    await parser.parse(context);

    console.log("✓ Manifest parsing complete");

    console.log("");

    console.log("Stage 2  Validating repository...");

    const validator = new RepositoryValidator(

        filesystem

    );

    await validator.validate(

        context

    );

    console.log("✓ Validation complete");

    console.log("");

    console.log("Stage 3  Generating repository...");

    const generator = new RepositoryGenerator(

        filesystem

    );

    await generator.generate(

        context

    );

    console.log("✓ Generation complete");

    console.log("");

    console.log("Stage 4  Writing report...");

    const reporter = new RepositoryReporter();

    await reporter.generate(

        context

    );

    console.log("✓ Report complete");

    console.log("");

    context.statistics.executionTimeMs =

        Math.round(

            performance.now() - start

        );

    console.log("Execution Summary");

    console.log("-----------------");

    console.log(

        `Manifest Files : ${context.statistics.manifestFilesDiscovered}`

    );

    console.log(

        `Parsed Files   : ${context.statistics.manifestFilesParsed}`

    );

    console.log(

        `Tokens         : ${context.statistics.tokensGenerated}`

    );

    console.log(

        `Directories    : ${context.statistics.directoriesDiscovered}`

    );

    console.log(

        `Files          : ${context.statistics.filesDiscovered}`

    );

    console.log(

        `Diagnostics    : ${context.statistics.diagnosticsGenerated}`

    );

    console.log(

        `Execution Time : ${context.statistics.executionTimeMs} ms`

    );

    console.log("");

    console.log("Bootstrap completed successfully.");

    console.log("");

}

main().catch(

    (error: unknown) => {

        console.error("");

        console.error("Bootstrap failed.");

        console.error("");

        console.error(error);

        process.exit(1);

    }

);