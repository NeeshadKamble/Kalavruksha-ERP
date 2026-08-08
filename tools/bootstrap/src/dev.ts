import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

import { Lexer } from "./compiler/frontend/lexer/lexer.js";

async function main(): Promise<void> {

    console.clear();

    console.log("========================================");
    console.log("Kalavruksha Bootstrap Compiler");
    console.log("Development Mode");
    console.log("========================================");
    console.log("");

    const manifest = resolve(
        process.cwd(),
        "../../repository-manifest/PART-01-FINAL.md"
    );

    const source = await readFile(
        manifest,
        "utf8"
    );

    const lexer = new Lexer();

    const result = lexer.lex(
        source,
        manifest
    );

    const tokens = result.tokens;

    console.log(`Tokens: ${tokens.length}`);
    console.log("");

    for (const token of tokens) {

        console.log(
            `${token.type.padEnd(18)} ${token.lexeme}`
        );

    }

    console.log("");
    console.log(`Diagnostics: ${result.diagnostics.length}`);

    for (const diagnostic of result.diagnostics) {

        console.log("");
        console.log(`${diagnostic.code} ${diagnostic.severity}`);
        console.log(diagnostic.message);
        console.log(`File   : ${diagnostic.file}`);
        console.log(`Line   : ${diagnostic.line}`);
        console.log(`Column : ${diagnostic.column}`);

    }

}

main().catch(console.error);