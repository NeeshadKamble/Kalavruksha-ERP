import { Diagnostic } from "../../model/diagnostic.js";
import { Manifest } from "./manifest.js";
import { ManifestStatistics } from "./manifest-statistics.js";

export interface ManifestCollection {

    readonly manifests: readonly Manifest[];

    readonly statistics: ManifestStatistics;

    readonly diagnostics: readonly Diagnostic[];

}