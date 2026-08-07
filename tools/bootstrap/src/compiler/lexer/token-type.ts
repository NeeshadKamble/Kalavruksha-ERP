export enum TokenType {

    /**
     * Markdown headings.
     */
    Heading = "HEADING",

    /**
     * Plain text.
     */
    Text = "TEXT",

    /**
     * Empty line.
     */
    Empty = "EMPTY",

    /**
     * Markdown list item.
     */
    ListItem = "LIST_ITEM",

    /**
     * Opening or closing code fence.
     */
    CodeFence = "CODE_FENCE",

    /**
     * Manifest section.
     */
    Section = "SECTION",

    /**
     * Metadata key/value.
     */
    Metadata = "METADATA",

    /**
     * Directory specification.
     */
    DirectorySpecification = "DIRECTORY_SPECIFICATION",

    /**
     * File specification.
     */
    FileSpecification = "FILE_SPECIFICATION",

    /**
     * Table row.
     */
    TableRow = "TABLE_ROW",

    /**
     * YAML block.
     */
    Yaml = "YAML",

    /**
     * Code block content.
     */
    Code = "CODE",

    /**
     * End of file.
     */
    EndOfFile = "EOF"

}