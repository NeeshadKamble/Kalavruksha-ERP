export interface FileSpecification {

    /**
     * Globally unique file identifier.
     * Example:
     * FILE-DOMAIN-001
     */
    id: string;

    /**
     * Repository-relative file path.
     * Example:
     * packages/domain/src/index.ts
     */
    path: string;

    /**
     * File purpose extracted from the manifest.
     */
    purpose: string;

    /**
     * Architectural layer.
     * Example:
     * Tier 1, Tier 2, Tier 3...
     */
    layer: string;

    /**
     * Owning package.
     * Example:
     * @kalavruksha/domain
     */
    packageName: string;

    /**
     * Sub-domain / bounded context.
     */
    subDomain: string;

    /**
     * DDD building block.
     */
    buildingBlock: string;

    /**
     * Public API exposure.
     */
    publicApi: boolean;

    /**
     * Internal implementation only.
     */
    internalOnly: boolean;

    /**
     * Exported symbols.
     */
    exports: string[];

    /**
     * Imported modules.
     */
    imports: string[];

    /**
     * Forbidden imports.
     */
    forbiddenImports: string[];

    /**
     * Files that depend on this file.
     */
    usedBy: string[];

    /**
     * Files required before this one.
     */
    dependsOn: string[];

    /**
     * Generation order.
     */
    implementationOrder: number;

    /**
     * Generated or handwritten.
     */
    generationType: string;

    /**
     * Estimated lines of code.
     */
    estimatedLoc: number;

    /**
     * Maximum cognitive complexity.
     */
    cognitiveComplexity: number;

    /**
     * Maximum function length.
     */
    maxFunctionLength: number;

    /**
     * Unit test required.
     */
    unitTestRequired: boolean;

    /**
     * Integration test required.
     */
    integrationTestRequired: boolean;

    /**
     * Mutation testing target.
     */
    mutationTarget: number;

    /**
     * Performance target.
     */
    performanceTarget: string;

    /**
     * Security classification.
     */
    securityClassification: string;

    /**
     * Freeze protected.
     */
    freezeProtected: boolean;

    /**
     * Current implementation status.
     */
    status: string;

    /**
     * Source manifest file.
     */
    sourceManifest: string;

    /**
     * Source line number.
     */
    sourceLine: number;

}