import type { BootstrapContext } from "../compiler/model/bootstrap-context.js";

import { FileSystem } from "../filesystem/filesystem.js";

export class RepositoryGenerator {

    public constructor(

        private readonly filesystem: FileSystem

    ) {}

    public async generate(

        context: BootstrapContext

    ): Promise<void> {

        await this.generateDirectories(

            context

        );

        // File generation will be implemented later.

    }

    private async generateDirectories(

        context: BootstrapContext

    ): Promise<void> {

        for (

            const directory

            of context.manifest.directories

        ) {

            await this.filesystem.createDirectory(

                directory.path

            );

        }

    }

}