import type { DirectorySpecification } from "./directory-specification.js";
import type { FileSpecification } from "./file-specification.js";

export interface RepositoryManifest {

    metadata: RepositoryManifestMetadata;

    directories: DirectorySpecification[];

    files: FileSpecification[];

}

export interface RepositoryManifestMetadata {

    title: string;

    version: string;

}