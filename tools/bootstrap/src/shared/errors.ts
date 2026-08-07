/**
 * Base class for all bootstrap tool errors.
 */
export class BootstrapError extends Error {

    public constructor(
        message: string
    ) {

        super(message);

        this.name = "BootstrapError";

    }

}

/**
 * Thrown when the repository manifest cannot be found.
 */
export class ManifestNotFoundError extends BootstrapError {

    public constructor(
        manifestDirectory: string
    ) {

        super(
            `Repository manifest directory not found: ${manifestDirectory}`
        );

        this.name = "ManifestNotFoundError";

    }

}

/**
 * Thrown when a manifest file cannot be read.
 */
export class ManifestReadError extends BootstrapError {

    public constructor(
        file: string
    ) {

        super(
            `Unable to read manifest file: ${file}`
        );

        this.name = "ManifestReadError";

    }

}

/**
 * Thrown when the lexer encounters invalid syntax.
 */
export class LexerError extends BootstrapError {

    public constructor(

        file: string,

        line: number,

        message: string

    ) {

        super(

            `${file}:${line} - ${message}`

        );

        this.name = "LexerError";

    }

}

/**
 * Thrown when the parser encounters invalid grammar.
 */
export class ParserError extends BootstrapError {

    public constructor(

        file: string,

        line: number,

        message: string

    ) {

        super(

            `${file}:${line} - ${message}`

        );

        this.name = "ParserError";

    }

}

/**
 * Thrown when repository generation fails.
 */
export class GenerationError extends BootstrapError {

    public constructor(
        message: string
    ) {

        super(message);

        this.name = "GenerationError";

    }

}

/**
 * Thrown when repository validation fails.
 */
export class ValidationError extends BootstrapError {

    public constructor(
        message: string
    ) {

        super(message);

        this.name = "ValidationError";

    }

}