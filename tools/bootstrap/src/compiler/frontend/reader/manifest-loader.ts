import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { basename, extname, relative } from "node:path";
import { DiagnosticCode } from "../../model/diagnostic-code.js";
import { Diagnostic, DiagnosticSeverity } from "../../model/diagnostic.js";
import { Manifest } from "./manifest.js";

export class ManifestLoader {

    public async load(
        rootDirectory: string,
        filePath: string,
        encoding: BufferEncoding = "utf8"
    ): Promise<Manifest> {

        const diagnostics: Diagnostic[] = [];

        const buffer = await readFile(filePath);

        if (!Buffer.isEncoding(encoding)) {

            diagnostics.push({

                code: DiagnosticCode.REA003,
                    
                severity: DiagnosticSeverity.Error,
                    
                message: `Unsupported encoding '${encoding}'.`,
                    
                file: filePath,
                    
                line: 0,
                    
                column: 0
                    
            });

        }

        let content = buffer.toString(encoding);

        content = this.normalizeLineEndings(content);

        const manifest: Manifest = {

            name: basename(filePath),

            path: filePath,

            relativePath: relative(
                rootDirectory,
                filePath
            ),

            extension: extname(filePath),

            content,

            size: buffer.byteLength,

            hash: this.calculateHash(buffer),

            encoding,

            tokens: [],

            diagnostics

        };

        return manifest;

    }

    public countLines(
        manifest: Manifest
    ): number {

        if (manifest.content.length === 0) {
            return 0;
        }

        return manifest.content.split("\n").length;

    }

    public countWords(
        manifest: Manifest
    ): number {

        return manifest.content
            .trim()
            .split(/\s+/)
            .filter(Boolean)
            .length;

    }

    public countCharacters(
        manifest: Manifest
    ): number {

        return manifest.content.length;

    }

    public isEmpty(
        manifest: Manifest
    ): boolean {

        return manifest.content.trim().length === 0;

    }

    public hasUtf8Bom(
        manifest: Manifest
    ): boolean {

        return manifest.content.charCodeAt(0) === 0xfeff;

    }

    private normalizeLineEndings(
        content: string
    ): string {

        return content.replace(/\r\n/g, "\n");

    }

    private calculateHash(
        buffer: Buffer
    ): string {

        return createHash("sha256")
            .update(buffer)
            .digest("hex");

    }

}