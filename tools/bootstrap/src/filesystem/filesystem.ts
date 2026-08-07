import { promises as fs } from "node:fs";
import path from "node:path";

export class FileSystem {

    public async directoryExists(
        directory: string
    ): Promise<boolean> {

        try {

            const stat = await fs.stat(directory);

            return stat.isDirectory();

        } catch {

            return false;

        }

    }

    public async fileExists(
        file: string
    ): Promise<boolean> {

        try {

            const stat = await fs.stat(file);

            return stat.isFile();

        } catch {

            return false;

        }

    }

    public async createDirectory(
        directory: string
    ): Promise<void> {

        await fs.mkdir(directory, {
            recursive: true
        });

    }

    public async deleteDirectory(
        directory: string
    ): Promise<void> {

        await fs.rm(directory, {
            recursive: true,
            force: true
        });

    }

    public async readTextFile(
        file: string
    ): Promise<string> {

        return await fs.readFile(
            file,
            "utf8"
        );

    }

    public async writeTextFile(
        file: string,
        contents: string
    ): Promise<void> {

        await fs.mkdir(
            path.dirname(file),
            {
                recursive: true
            }
        );

        await fs.writeFile(
            file,
            contents,
            "utf8"
        );

    }

    public async readDirectory(
        directory: string
    ): Promise<string[]> {

        return await fs.readdir(
            directory
        );

    }

    public async getFilesRecursively(
        directory: string
    ): Promise<string[]> {

        const result: string[] = [];

        await this.walk(
            directory,
            result
        );

        return result.sort();

    }

    private async walk(
        directory: string,
        files: string[]
    ): Promise<void> {

        const entries = await fs.readdir(
            directory,
            {
                withFileTypes: true
            }
        );

        for (const entry of entries) {

            const fullPath = path.join(
                directory,
                entry.name
            );

            if (entry.isDirectory()) {

                await this.walk(
                    fullPath,
                    files
                );

                continue;

            }

            files.push(
                fullPath
            );

        }

    }

}