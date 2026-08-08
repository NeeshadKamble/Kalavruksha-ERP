import { TokenType } from "./token-type.js";

/**
 * Maps every reserved KRML keyword
 * to its corresponding token type.
 */
export const KEYWORD_MAP: ReadonlyMap<string, TokenType> = new Map([

    // ============================================================
    // Repository
    // ============================================================

    ["repository", TokenType.Repository],
    ["version", TokenType.Version],
    ["metadata", TokenType.Metadata],
    ["description", TokenType.Description],
    ["author", TokenType.Author],
    ["license", TokenType.License],

    // ============================================================
    // Structure
    // ============================================================

    ["directory", TokenType.Directory],
    ["file", TokenType.File],
    ["folder", TokenType.Folder],
    ["module", TokenType.Module],
    ["package", TokenType.Package],
    ["layer", TokenType.Layer],
    ["extension", TokenType.Extension],

    // ============================================================
    // File Properties
    // ============================================================

    ["template", TokenType.Template],
    ["content", TokenType.Content],
    ["encoding", TokenType.Encoding],
    ["permissions", TokenType.Permissions],
    ["visibility", TokenType.Visibility],
    ["generated", TokenType.Generated],
    ["readonly", TokenType.Readonly],
    ["executable", TokenType.Executable],

    // ============================================================
    // Dependencies
    // ============================================================

    ["dependson", TokenType.DependsOn],
    ["requires", TokenType.Requires],
    ["imports", TokenType.Imports],
    ["includes", TokenType.Includes],
    ["excludes", TokenType.Excludes],

    // ============================================================
    // Generator
    // ============================================================

    ["generate", TokenType.Generate],
    ["validate", TokenType.Validate],
    ["statistics", TokenType.Statistics],
    ["report", TokenType.Report],

    // ============================================================
    // Literals
    // ============================================================

    ["true", TokenType.Boolean],
    ["false", TokenType.Boolean],
    ["null", TokenType.Null]

]);