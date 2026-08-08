# Bootstrap Compiler Public API

API Version: 1.0

Compiler Version: 0.2.0

Status: Draft

---

# Table of Contents

1. Overview
2. Design Principles
3. Public Modules
4. Compiler API
5. Reader API
6. Lexer API
7. Parser API
8. AST API
9. Semantic API
10. Generator API
11. Validator API
12. Reporter API
13. Diagnostics API
14. Future API

---

# 1. Overview

The Bootstrap Compiler exposes a public API for programmatic access.

The API enables

CLI

IDE

Language Server

Automation

Plugins

CI/CD

Third-party integrations

---

# 2. Design Principles

The API shall

Be Stable

Be Typed

Be Deterministic

Be Versioned

Be Documented

Remain Backward Compatible

---

# 3. Public Modules

```
compiler/

lexer/

parser/

ast/

semantic/

generator/

validator/

reporter/

filesystem/

shared/
```

Each package exports

```
index.ts
```

Only public interfaces are exported.

---

# 4. Compiler API

Main entry point

```ts
class BootstrapCompiler
```

Methods

```ts
compile()

generate()

validate()

report()
```

Example

```ts
const compiler = new BootstrapCompiler();

await compiler.compile();
```

---

# 5. Reader API

```ts
ManifestReader
```

Methods

```ts
load()

read()

discover()
```

Returns

```ts
ManifestCollection
```

---

# 6. Lexer API

```ts
Lexer
```

Methods

```ts
lex()
```

Input

```ts
string
```

Output

```ts
Token[]
```

---

# 7. Parser API

```ts
Parser
```

Methods

```ts
parse()
```

Input

```ts
Token[]
```

Output

```ts
RepositoryNode
```

---

# 8. AST API

Root

```ts
RepositoryNode
```

Common Interface

```ts
ASTNode
```

Methods

```ts
accept()

children()

parent()
```

---

# 9. Semantic API

```ts
SemanticAnalyzer
```

Methods

```ts
analyze()
```

Output

```ts
ValidatedRepository
```

---

# 10. Generator API

```ts
RepositoryGenerator
```

Methods

```ts
generate()
```

Input

```ts
ValidatedRepository
```

Output

```ts
GenerationResult
```

---

# 11. Validator API

```ts
RepositoryValidator
```

Methods

```ts
validate()
```

Returns

```ts
ValidationResult
```

---

# 12. Reporter API

```ts
Reporter
```

Methods

```ts
summary()

statistics()

diagnostics()

markdown()

json()
```

---

# 13. Diagnostics API

```ts
Diagnostic
```

Fields

```ts
code

severity

message

suggestion

location
```

DiagnosticCollection

```ts
add()

remove()

clear()

hasErrors()

warnings()

errors()
```

---

# 14. Future API

Future versions may expose

```
Language Server

Plugin SDK

Incremental Compiler

Compiler Daemon

Compiler Service

Remote Compiler

Compiler Cache

Compiler Graph API
```

---

# API Stability

Public APIs

Never break within a major version.

Internal APIs

May change without notice.

---

# API Layer

```
CLI

↓

Public API

↓

Compiler Core

↓

Filesystem
```

Applications should communicate only through the Public API.

---

# Example

```ts
const compiler = new BootstrapCompiler();

const result = await compiler.compile({
    manifestDirectory: "./repository-manifest",
    outputDirectory: "./generated"
});

console.log(result.success);
```

---

# Design Rules

Every public API

Must be documented

Must be typed

Must return deterministic results

Must report diagnostics

Must be independently testable

---

# End of Public API Specification