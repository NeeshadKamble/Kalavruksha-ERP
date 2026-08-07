import path from "node:path";

/**
 * Normalizes a repository path to POSIX format.
 */
export function normalizePath(
    value: string
): string {

    return value
        .replace(/\\/g, "/")
        .replace(/\/+/g, "/")
        .trim();

}

/**
 * Returns the parent directory of a repository path.
 */
export function getParentDirectory(
    value: string
): string | null {

    const normalized = normalizePath(value);

    const index = normalized.lastIndexOf("/");

    if (index === -1) {

        return null;

    }

    return normalized.substring(0, index);

}

/**
 * Returns the file name from a path.
 */
export function getFileName(
    value: string
): string {

    return path.basename(value);

}

/**
 * Returns true if the path is a markdown file.
 */
export function isMarkdownFile(
    value: string
): boolean {

    return value.toLowerCase().endsWith(".md");

}

/**
 * Removes markdown heading markers.
 */
export function stripHeading(
    value: string
): string {

    return value.replace(/^#+\s*/, "").trim();

}

/**
 * Returns true if a string is empty after trimming.
 */
export function isBlank(
    value: string
): boolean {

    return value.trim().length === 0;

}

/**
 * Parses a boolean value.
 */
export function parseBoolean(
    value: string
): boolean {

    return value.trim().toLowerCase() === "true";

}

/**
 * Parses a number safely.
 */
export function parseNumber(
    value: string,
    fallback = 0
): number {

    const number = Number(value);

    return Number.isNaN(number)
        ? fallback
        : number;

}

/**
 * Creates a timestamp.
 */
export function timestamp(): string {

    return new Date().toISOString();

}