import type { BootstrapContext } from "../model/bootstrap-context.js";
import type { ManifestFile } from "../model/manifest-file.js";

export class MetadataBuilder {

    public build(

        context: BootstrapContext

    ): void {

        for (const manifest of context.manifestFiles) {

            this.extractMetadata(

                manifest,

                context

            );

        }

    }

    private extractMetadata(

        manifest: ManifestFile,

        context: BootstrapContext

    ): void {

        if (!manifest.contents) {

            return;

        }

        const lines = manifest.contents.split(/\r?\n/);

        for (const line of lines) {

            const trimmed = line.trim();

            if (

                context.manifest.metadata.title === "" &&

                trimmed.startsWith("#")

            ) {

                context.manifest.metadata.title =

                    trimmed.replace(/^#+\s*/, "");

            }

            if (

                context.manifest.metadata.version === "" &&

                trimmed.toLowerCase().startsWith("version")

            ) {

                const parts = trimmed.split(":");

                if (parts.length > 1) {

                    context.manifest.metadata.version =

                        parts.slice(1).join(":").trim();

                }

            }

        }

    }

}