import type { BootstrapContext } from "../model/bootstrap-context.js";
import type { FileSpecification } from "../model/file-specification.js";

import { TokenType } from "../lexer/token-type.js";

export class FileBuilder {

    public build(
        context: BootstrapContext
    ): void {

        context.manifest.files = [];

        for (const manifest of context.manifestFiles) {

            if (!manifest.tokens) {
                continue;
            }

            for (let index = 0; index < manifest.tokens.length; index++) {

                const token = manifest.tokens[index];

                if (
                    token.type !== TokenType.Metadata ||
                    token.value !== "Path:"
                ) {
                    continue;
                }

                const pathToken = manifest.tokens[index + 1];

                if (
                    !pathToken ||
                    pathToken.type !== TokenType.Text
                ) {
                    continue;
                }

                const specification: FileSpecification = {

                    id: "",

                    path: pathToken.value.trim(),

                    purpose: "",

                    layer: "",

                    packageName: "",

                    subDomain: "",

                    buildingBlock: "",

                    publicApi: false,

                    internalOnly: false,

                    exports: [],

                    imports: [],

                    forbiddenImports: [],

                    usedBy: [],

                    dependsOn: [],

                    implementationOrder: 0,

                    generationType: "",

                    estimatedLoc: 0,

                    cognitiveComplexity: 0,

                    maxFunctionLength: 0,

                    unitTestRequired: false,

                    integrationTestRequired: false,

                    mutationTarget: 0,

                    performanceTarget: "",

                    securityClassification: "",

                    freezeProtected: false,

                    status: "",

                    sourceManifest: manifest.name,

                    sourceLine: token.line

                };

                this.populateMetadata(
                    specification,
                    manifest.tokens,
                    index
                );

                context.manifest.files.push(
                    specification
                );

            }

        }

        context.statistics.filesDiscovered =
            context.manifest.files.length;

    }

    private populateMetadata(

        file: FileSpecification,

        tokens: readonly {

            type: TokenType;

            value: string;

        }[],

        startIndex: number

    ): void {

        for (

            let index = startIndex;

            index < tokens.length;

            index++

        ) {

            const token = tokens[index];

            if (
                token.type !== TokenType.Metadata
            ) {
                continue;
            }

            switch (token.value) {

                case "File ID:":

                    file.id = this.readValue(
                        tokens,
                        index
                    );

                    break;

                case "Purpose:":

                    file.purpose = this.readValue(
                        tokens,
                        index
                    );

                    break;

                case "Architectural Layer:":

                    file.layer = this.readValue(
                        tokens,
                        index
                    );

                    break;

                case "Package:":

                    file.packageName = this.readValue(
                        tokens,
                        index
                    );

                    break;

                case "Sub-domain:":

                    file.subDomain = this.readValue(
                        tokens,
                        index
                    );

                    break;

                case "DDD Building Block:":

                    file.buildingBlock = this.readValue(
                        tokens,
                        index
                    );

                    break;

                case "Implementation Order:":

                    file.implementationOrder =
                        Number(
                            this.readValue(
                                tokens,
                                index
                            )
                        );

                    break;

                case "Estimated LOC:":

                    file.estimatedLoc =
                        Number(
                            this.readValue(
                                tokens,
                                index
                            )
                        );

                    break;

                case "Current Status:":

                    file.status =
                        this.readValue(
                            tokens,
                            index
                        );

                    break;

            }

        }

    }

    private readValue(

        tokens: readonly {

            type: TokenType;

            value: string;

        }[],

        index: number

    ): string {

        const next = tokens[index + 1];

        if (!next) {
            return "";
        }

        if (next.type !== TokenType.Text) {
            return "";
        }

        return next.value.trim();

    }

}