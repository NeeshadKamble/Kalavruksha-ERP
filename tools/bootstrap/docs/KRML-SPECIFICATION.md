# Kalavruksha Repository Manifest Language (KRML)

**Specification Version:** 0.2.0

**Status:** Draft

**Compiler Version:** Bootstrap Compiler v0.1.0+

**Last Updated:** 2026-08-08

---

# Table of Contents

1. Introduction
2. Design Goals
3. Terminology
4. Language Overview
5. Repository Model
6. Lexical Structure
7. Reserved Keywords
8. Token Types
9. Grammar Overview
10. Semantic Rules
11. Compiler Pipeline
12. Repository Generation
13. Validation
14. Error Reporting
15. Versioning
16. Future Roadmap

---

# 1. Introduction

The Kalavruksha Repository Manifest Language (KRML) is a domain-specific language (DSL) designed to describe an entire software repository in a deterministic and machine-readable manner.

Instead of manually creating hundreds or thousands of files, a repository is described using KRML, and the Bootstrap Compiler generates the repository structure automatically.

KRML is stored inside Markdown (`.md`) files for documentation compatibility, but the compiler interprets the KRML language—not Markdown itself.

---

# 2. Design Goals

KRML is designed around the following principles.

## Deterministic

The same manifest always generates the same repository.

---

## Human Readable

Repository architecture should be understandable by developers.

---

## Machine Parsable

Every construct has a formal grammar.

---

## Extensible

New language features should not break existing manifests.

---

## Version Controlled

Every specification revision is versioned.

---

# 3. Terminology

| Term | Meaning |
|-------|----------|
| Manifest | Complete repository description |
| Compiler | Bootstrap compiler |
| Repository Model | Internal representation of repository |
| AST | Abstract Syntax Tree |
| Generator | Creates repository |
| Validator | Validates generated repository |

---

# 4. Language Overview

A KRML repository consists of one or more manifest documents.

Example:

```
repository-manifest/

PART-01.md

PART-02.md

...

PART-14.md
```

These documents together describe a single repository.

---

# 5. Repository Model

A repository consists of:

```
Repository

├── Metadata

├── Directories

├── Files

├── Dependencies

├── Validation Rules

└── Generation Rules
```

---

# 6. Lexical Structure

KRML source is divided into tokens.

Whitespace is ignored except where required.

Line endings are normalized.

Unicode is supported.

UTF-8 encoding is required.

---

# 7. Reserved Keywords

Current reserved keywords:

```
repository

version

directory

file

metadata

layer

purpose

dependency

dependencies

generate

validation

section

module

component

service

interface

class

enum

type

constant
```

These keywords cannot be used as identifiers.

---

# 8. Token Types

The lexer produces the following token types.

```
Identifier

Keyword

String

Integer

Float

Boolean

Comment

Heading

List

CodeFence

NewLine

Whitespace

Colon

Comma

Dot

LeftBrace

RightBrace

LeftBracket

RightBracket

EOF
```

---

# 9. Grammar Overview

The repository grammar begins with a Repository node.

```
Repository

    → Metadata

    → Directory*

    → File*

    → Validation*

```

The complete EBNF grammar will be defined in future versions.

---

# 10. Semantic Rules

Repository names must be unique.

Directory paths must be unique.

File paths must be unique.

Duplicate identifiers are illegal.

Circular dependencies are not allowed.

Every file belongs to exactly one directory.

Every generated path must be deterministic.

---

# 11. Compiler Pipeline

```
Markdown Files

↓

Manifest Reader

↓

KRML Source

↓

Lexer

↓

Tokens

↓

Parser

↓

AST

↓

Repository Model

↓

Validator

↓

Generator

↓

Generated Repository

↓

Report
```

---

# 12. Repository Generation

The generator performs the following stages.

1. Load Manifest

2. Lexical Analysis

3. Parsing

4. AST Construction

5. Semantic Analysis

6. Repository Generation

7. Validation

8. Report Generation

---

# 13. Validation

The validator verifies:

• Duplicate directories

• Duplicate files

• Missing metadata

• Invalid paths

• Circular dependencies

• Invalid identifiers

• Invalid hierarchy

• Missing required sections

---

# 14. Error Reporting

Compiler diagnostics consist of:

```
Severity

File

Line

Column

Error Code

Message

Suggestion
```

Severity levels:

```
Information

Warning

Error

Fatal
```

---

# 15. Versioning

KRML follows semantic versioning.

```
Major.Minor.Patch
```

Example:

```
0.2.0

0.3.0

1.0.0
```

Language revisions must remain backward compatible within the same major version.

---

# 16. Future Roadmap

Version 0.3.0

• Complete lexical grammar

• Lexer implementation

Version 0.4.0

• Recursive-descent parser

Version 0.5.0

• AST specification

Version 0.6.0

• Repository generator

Version 0.7.0

• Validation engine

Version 1.0.0

• Stable KRML language

• Production bootstrap compiler

---

# Appendix A

This document defines the language specification.

It is the single source of truth for the Bootstrap Compiler.

Compiler implementations must conform to this specification.

---

End of Specification