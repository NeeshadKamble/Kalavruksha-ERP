# KRML Parser Specification

Specification Version: 0.2.0

Status: Draft

Compiler Stage: Parser

---

# Table of Contents

1. Overview
2. Responsibilities
3. Compiler Pipeline
4. Input
5. Output
6. Parsing Strategy
7. Parser Context
8. AST Construction
9. Grammar Rules
10. Error Recovery
11. Diagnostics
12. Examples

---

# 1. Overview

The KRML Parser converts lexical tokens into an Abstract Syntax Tree (AST).

The parser performs syntax analysis.

It does not generate files.

It does not perform semantic validation.

---

# 2. Responsibilities

The parser shall

• Consume Token[]

• Validate syntax

• Construct AST

• Preserve source locations

• Produce diagnostics

• Recover from syntax errors

---

# 3. Compiler Pipeline

Manifest

↓

Reader

↓

Lexer

↓

Tokens

↓

Parser

↓

AST

↓

Semantic Analysis

↓

Repository Model

---

# 4. Input

Input

```
Token[]
```

Example

```
Repository

String

Directory

String

File

String

EOF
```

---

# 5. Output

Output

```
RepositoryNode
```

The AST becomes the input for Semantic Analysis.

---

# 6. Parsing Strategy

KRML uses

```
Recursive Descent Parsing
```

Characteristics

• Predictive

• LL(1)

• Single Token Lookahead

• Deterministic

No parser generators are used.

---

# 7. Parser Context

The parser maintains

Current Token

Current Position

Lookahead

Diagnostics

AST Builder

Repository Context

---

# 8. AST Construction

Parser creates

RepositoryNode

MetadataNode

DirectoryNode

FileNode

PurposeNode

DependencyNode

ValidationNode

---

# 9. Grammar Rules

Repository

```
Repository

::=

MetadataSection

DirectorySection*

FileSection*

ValidationSection?

EOF
```

Metadata

```
Metadata

::=

RepositoryDeclaration

VersionDeclaration
```

Directory

```
Directory

::=

DIRECTORY

STRING
```

File

```
File

::=

FILE

STRING

Purpose?

Layer?

Dependencies?
```

Purpose

```
Purpose

::=

PURPOSE

TripleString
```

Layer

```
Layer

::=

LAYER

Identifier
```

Dependencies

```
Dependencies

::=

DEPENDENCIES

{

Identifier*

}
```

Validation

```
Validation

::=

VALIDATION

{

Rule*

}
```

---

# 10. Error Recovery

Parser never aborts immediately.

Instead

Record Diagnostic

↓

Skip Invalid Tokens

↓

Continue Parsing

↓

Produce Partial AST

Recovery points

EOF

Directory

File

Validation

Repository

---

# 11. Diagnostics

Parser reports

Unexpected Token

```
PAR001
```

Missing Token

```
PAR002
```

Unexpected EOF

```
PAR003
```

Invalid Block

```
PAR004
```

Duplicate Declaration

```
PAR005
```

Severity

Information

Warning

Error

Fatal

---

# 12. Example

Input

```
repository

"Kalavruksha"

directory

"src"

file

"src/index.ts"
```

AST

```
Repository

├── Metadata

│

├── Directory

│

└── File
```

---

# Parser Architecture

```
Token Stream

↓

Recursive Descent

↓

Node Builder

↓

AST

↓

Semantic Analysis
```

---

# Future Extensions

Future versions may include

Attributes

Annotations

Imports

Namespaces

Conditional Blocks

Templates

Macros

Plugins

---

End of Parser Specification