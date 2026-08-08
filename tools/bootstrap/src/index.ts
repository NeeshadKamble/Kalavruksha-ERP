import { ManifestReader } from "./compiler/frontend/reader/index.js";

async function main(): Promise<void> {

    console.log("");

    console.log("Kalavruksha Bootstrap Compiler");
    console.log("--------------------------------");
    console.log("");

    const reader = new ManifestReader();

    const result = await reader.read({

        rootDirectory: process.cwd(),

        manifestDirectory: "repository-manifest",

        configuration: {

            recursive: false,

            encoding: "utf8",

            includeHiddenFiles: false,

            extensions: [".md"]

        },

        diagnostics: []

    });

    if (!result.success) {

        console.error("Manifest Reader failed.");

        for (const diagnostic of result.diagnostics) {

            console.error(diagnostic);

        }

        process.exit(1);

    }

    console.log("Manifest Reader");
    console.log("----------------");
    console.log("");

    console.log(
        `Loaded Manifests : ${result.collection.statistics.manifestCount}`
    );

    console.log(
        `Total Size       : ${result.collection.statistics.totalBytes} bytes`
    );

    console.log(
        `Total Lines      : ${result.collection.statistics.totalLines}`
    );

    console.log(
        `Total Tokens     : ${result.collection.statistics.totalTokens}`
    );

    console.log("");

    console.log("Manifest Files");
    console.log("----------------");

    for (const manifest of result.collection.manifests) {

        console.log(
            `${manifest.relativePath} (${manifest.size} bytes)`
        );

    }

    console.log("");

}

main().catch((error) => {

    console.error(error);

    process.exit(1);

});