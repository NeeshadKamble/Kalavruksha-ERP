import type { BootstrapContext } from "../compiler/model/bootstrap-context.js";

import { DiagnosticSeverity } from "../compiler/model/diagnostic.js";

import { FileSystem } from "../filesystem/filesystem.js";

export class RepositoryValidator {

    public constructor(

        private readonly filesystem: FileSystem

    ) {}

    public async validate(

        context: BootstrapContext

    ): Promise<boolean> {

        let valid = true;

        valid &&= await this.validateManifestDirectory(

            context

        );

        valid &&= await this.validateDirectories(

            context

        );

        return valid;

    }

    private async validateManifestDirectory(

        context: BootstrapContext

    ): Promise<boolean> {

        const exists = await this.filesystem.directoryExists(

            context.manifestDirectory

        );

        if (!exists) {

            context.diagnostics.push({

                severity: DiagnosticSeverity.Error,

                message: `Manifest directory not found: ${context.manifestDirectory}`

            });

            return false;

        }

        return true;

    }

    private async validateDirectories(

        context: BootstrapContext

    ): Promise<boolean> {

        let valid = true;

        for (

            const directory

            of context.manifest.directories

        ) {

            const exists = await this.filesystem.directoryExists(

                directory.path

            );

            if (!exists) {

                context.diagnostics.push({

                    severity: DiagnosticSeverity.Warning,

                    message: `Directory does not exist: ${directory.path}`,

                    manifest: directory.sourceManifest,

                    line: directory.sourceLine

                });

                valid = false;

            }

        }

        context.statistics.diagnosticsGenerated =

            context.diagnostics.length;

        return valid;

    }

}