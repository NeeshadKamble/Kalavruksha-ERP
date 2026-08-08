import { Diagnostic } from "../../model/diagnostic.js";
import { ManifestCollection } from "./manifest-collection.js";

export interface ReaderResult {

    readonly success: boolean;

    readonly collection: ManifestCollection;

    readonly diagnostics: readonly Diagnostic[];

}