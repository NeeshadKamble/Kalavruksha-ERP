# KRML Repository Generator Specification

Specification Version: 0.2.0

Status: Draft

Compiler Stage: Repository Generation

---

# Table of Contents

1. Overview
2. Responsibilities
3. Compiler Pipeline
4. Input
5. Output
6. Generation Phases
7. Repository Generation Rules
8. Directory Generation
9. File Generation
10. Metadata Generation
11. Template Processing
12. Incremental Generation
13. Error Handling
14. Diagnostics
15. Performance Goals
16. Future Extensions

---

# 1. Overview

The Repository Generator converts a validated Repository AST into a physical
repository on disk.

The generator performs deterministic generation.

The same AST must always produce the same repository.

---

# 2. Responsibilities

The generator shall

• Create directories

• Create files

• Write generated content

• Preserve deterministic ordering

• Generate reports

• Record generation statistics

---

# 3. Compiler Pipeline

Manifest

↓

Lexer

↓

Parser

↓

AST

↓

Semantic Analysis

↓

Repository Generator

↓

Generated Repository

↓

Validator

---

# 4. Input

Input

Repository AST

Output Directory

Compiler Configuration

---

# 5. Output

Generated Repository

Generation Report

Generation Statistics

Diagnostics

---

# 6. Generation Phases

Phase 1

Validate Output Directory

↓

Phase 2

Create Repository Root

↓

Phase 3

Generate Directories

↓

Phase 4

Generate Files

↓

Phase 5

Generate Metadata

↓

Phase 6

Finalize Repository

↓

Generation Complete

---

# 7. Repository Generation Rules

Repository generation must

Be deterministic

Be repeatable

Never overwrite without permission

Preserve hierarchy

Generate UTF-8 files

Normalize line endings

---

# 8. Directory Generation

Directory nodes are generated first.

Generation order

Root

↓

Children

↓

Grandchildren

Directories must exist before any contained files.

Duplicate directory generation is ignored.

---

# 9. File Generation

Each FileNode generates exactly one file.

Generation process

Create Parent Directory

↓

Generate Content

↓

Write UTF-8 File

↓

Record Statistics

Existing files may be

Overwrite

Skip

Merge

depending on configuration.

---

# 10. Metadata Generation

Repository metadata includes

Repository Name

Compiler Version

Manifest Version

Generation Timestamp

Repository Statistics

Generated metadata is stored inside

```
.repository/
```

Example

```
.repository/

manifest.json

statistics.json

compiler.json
```

---

# 11. Template Processing

Generator supports templates.

Template Variables

Repository Name

Version

Directory

File Name

Compiler Version

Generation Date

Future versions may support

Conditional Templates

Loops

Expressions

Plugins

---

# 12. Incremental Generation

Future versions may regenerate only changed nodes.

Generation Modes

Full

Incremental

Dry Run

Preview

---

# 13. Error Handling

Generation errors

GEN001

Cannot Create Directory

GEN002

Cannot Create File

GEN003

Permission Denied

GEN004

Template Failure

GEN005

Invalid Output Directory

GEN006

Write Failure

Severity

Information

Warning

Error

Fatal

---

# 14. Diagnostics

Every generation action is recorded.

Example

Directory Created

File Created

Directory Skipped

File Updated

Template Applied

Generation Completed

---

# 15. Performance Goals

Generation should support

Repositories

10 directories

100 directories

1,000 directories

10,000 directories

100,000 files

without architecture changes.

Generation should scale linearly.

---

# 16. Future Extensions

Parallel Generation

Remote Repository Generation

Cloud Generation

Plugin Architecture

Incremental Compilation

Template Packages

Repository Presets

Generation Hooks

---

# Example Generation

Repository AST

↓

Repository Root

↓

src/

↓

src/app/

↓

src/core/

↓

src/index.ts

↓

README.md

↓

package.json

↓

Repository Complete

---

# End of Generator Specification