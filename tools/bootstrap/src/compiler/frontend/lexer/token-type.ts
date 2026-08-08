/**
 * Every lexical token supported by KRML.
 *
 * Tokens are grouped by category for readability.
 */
export enum TokenType {

    // ============================================================
    // Special
    // ============================================================

    Unknown = "Unknown",

    EndOfFile = "EndOfFile",

    EndOfLine = "EndOfLine",

    Whitespace = "Whitespace",

    Comment = "Comment",

    Asterisk = "Asterisk",

    Percent = "Percent",

    // ============================================================
    // Identifiers
    // ============================================================

    Identifier = "Identifier",

    QualifiedIdentifier = "QualifiedIdentifier",

    // ============================================================
    // Literals
    // ============================================================

    String = "String",

    Number = "Number",

    Path = "Path",

    Boolean = "Boolean",

    Null = "Null",

    // ============================================================
    // Repository Keywords
    // ============================================================

    Repository = "Repository",

    Version = "Version",

    Metadata = "Metadata",

    Description = "Description",

    Author = "Author",

    License = "License",

    // ============================================================
    // Structure Keywords
    // ============================================================

    Directory = "Directory",

    File = "File",

    Folder = "Folder",

    Extension = "Extension",

    Layer = "Layer",

    Module = "Module",

    Package = "Package",

    // ============================================================
    // File Attributes
    // ============================================================

    Template = "Template",

    Content = "Content",

    Encoding = "Encoding",

    Permissions = "Permissions",

    Visibility = "Visibility",

    Generated = "Generated",

    Readonly = "Readonly",

    Executable = "Executable",

    // ============================================================
    // Dependency Keywords
    // ============================================================

    DependsOn = "DependsOn",

    Requires = "Requires",

    Imports = "Imports",

    Includes = "Includes",

    Excludes = "Excludes",

    // ============================================================
    // Generator Keywords
    // ============================================================

    Generate = "Generate",

    Validate = "Validate",

    Statistics = "Statistics",

    Report = "Report",

    // ============================================================
    // Symbols
    // ============================================================

    LeftBrace = "LeftBrace",

    RightBrace = "RightBrace",

    LeftBracket = "LeftBracket",

    RightBracket = "RightBracket",

    LeftParenthesis = "LeftParenthesis",

    RightParenthesis = "RightParenthesis",

    Colon = "Colon",

    Semicolon = "Semicolon",

    Comma = "Comma",

    Dot = "Dot",

    Slash = "Slash",

    Backslash = "Backslash",

    Equal = "Equal",

    Arrow = "Arrow",

    At = "At",

    Hash = "Hash",

    Question = "Question",

    Exclamation = "Exclamation",

    // ============================================================
    // Markdown
    // ============================================================

    Heading = "Heading",

    Bullet = "Bullet",

    NumberedItem = "NumberedItem",

    CodeFence = "CodeFence",

    HorizontalRule = "HorizontalRule",

    BlockQuote = "BlockQuote",

    TableSeparator = "TableSeparator",

    // ============================================================
    // Text
    // ============================================================

    Text = "Text"

}