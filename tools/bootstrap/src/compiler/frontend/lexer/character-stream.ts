/**
 * CharacterStream provides a sequential view over source text
 * while tracking the current lexer position.
 */
export class CharacterStream {

    private readonly source: string;

    private readonly file: string;

    private position = 0;

    private line = 1;

    private column = 1;

    public constructor(
        source: string,
        file: string
    ) {

        this.source = source;

        this.file = file;

    }

    /**
     * Returns true if the end of the stream has been reached.
     */
    public isEOF(): boolean {

        return this.position >= this.source.length;

    }

    /**
     * Returns the current character without advancing.
     */
    public peek(offset = 0): string {

        const index = this.position + offset;

        if (index >= this.source.length) {
            return "\0";
        }

        return this.source[index];

    }

    /**
     * Returns the next character.
     */
    public peekNext(): string {

        return this.peek(1);

    }

    /**
     * Advances one character.
     */
    public advance(): string {

        if (this.isEOF()) {
            return "\0";
        }

        const character = this.source[this.position++];

        if (character === "\n") {

            this.line++;

            this.column = 1;

        } else {

            this.column++;

        }

        return character;

    }

    /**
     * Moves backwards by one character.
     */
    public rewind(): void {

        if (this.position === 0) {
            return;
        }

        this.position--;

        this.recalculatePosition();

    }

    /**
     * Checks whether the next characters match.
     */
    public match(text: string): boolean {

        return this.source.startsWith(
            text,
            this.position
        );

    }

    /**
     * Returns remaining source.
     */
    public remaining(): string {

        return this.source.substring(
            this.position
        );

    }

    /**
     * Current offset.
     */
    public get offset(): number {

        return this.position;

    }

    /**
     * Current line.
     */
    public get currentLine(): number {

        return this.line;

    }

    /**
     * Current column.
     */
    public get currentColumn(): number {

        return this.column;

    }

    /**
     * Current filename.
     */
    public get filename(): string {

        return this.file;

    }

    /**
     * Recalculate line/column after rewind.
     */
    private recalculatePosition(): void {

        this.line = 1;

        this.column = 1;

        for (let i = 0; i < this.position; i++) {

            if (this.source[i] === "\n") {

                this.line++;

                this.column = 1;

            } else {

                this.column++;

            }

        }

    }

}