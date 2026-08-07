import type { BootstrapContext } from "../model/bootstrap-context.js";
import type { DirectorySpecification } from "../model/directory-specification.js";
import { TokenType } from "../lexer/token-type.js";

export class DirectoryBuilder {

    public build(
        context: BootstrapContext
    ): void {

        context.manifest.directories = [];

        for (const manifest of context.manifestFiles) {

            if (!manifest.tokens) {
                continue;
            }

            for (let index = 0; index < manifest.tokens.length; index++) {

                const token = manifest.tokens[index];

                if (
                    token.type !== TokenType.Metadata ||
                    token.value !== "Directory Path:"
                ) {
                    continue;
                }

                const nextToken = manifest.tokens[index + 1];

                if (
                    !nextToken ||
                    nextToken.type !== TokenType.Text
                ) {
                    continue;
                }

                const path = nextToken.value.trim();

                const parent =
                    this.getParentDirectory(path);

                const specification: DirectorySpecification = {

                    path,

                    parent,

                    children: [],

                    sourceManifest: manifest.name,

                    sourceLine: token.line

                };

                context.manifest.directories.push(
                    specification
                );

            }

        }

        this.populateChildren(
            context.manifest.directories
        );

        context.statistics.directoriesDiscovered =
            context.manifest.directories.length;

    }

    private getParentDirectory(
        path: string
    ): string | null {

        const separator = path.lastIndexOf("/");

        if (separator === -1) {
            return null;
        }

        return path.substring(
            0,
            separator
        );

    }

    private populateChildren(
        directories: DirectorySpecification[]
    ): void {

        const lookup = new Map<string, DirectorySpecification>();

        for (const directory of directories) {

            lookup.set(
                directory.path,
                directory
            );

        }

        for (const directory of directories) {

            if (!directory.parent) {
                continue;
            }

            const parent = lookup.get(
                directory.parent
            );

            if (!parent) {
                continue;
            }

            parent.children.push(
                directory.path
            );

        }

    }

}