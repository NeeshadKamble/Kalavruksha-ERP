# KRML Semantic Analysis Specification

Specification Version: 0.2.0

Status: Draft

Compiler Stage: Semantic Analysis

---

# Table of Contents

1. Overview
2. Responsibilities
3. Compiler Pipeline
4. Input
5. Output
6. Semantic Context
7. Symbol Table
8. Repository Rules
9. Directory Rules
10. File Rules
11. Dependency Rules
12. Validation Rules
13. Diagnostics
14. Future Extensions

---

# 1. Overview

Semantic Analysis validates the correctness of a parsed repository.

The parser guarantees syntax.

Semantic Analysis guarantees correctness.

---

# 2. Responsibilities

Semantic Analysis shall

• Build symbol tables

• Resolve identifiers

• Detect duplicates

• Validate hierarchy

• Validate dependencies

• Produce diagnostics

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

Generator

↓

Validator

---

# 4. Input

Input

```
Repository AST
```

---

# 5. Output

Output

```
Validated Repository AST
```

The AST is enriched with semantic information.

---

# 6. Semantic Context

Semantic Analysis maintains

Repository

Directory Table

File Table

Dependency Table

Validation Table

Diagnostic Collection

---

# 7. Symbol Table

Every declared object is registered.

```
Repository

Directories

Files

Layers

Modules

Services

Interfaces

Classes
```

Each symbol contains

```
Identifier

Kind

Location

Declaration

References
```

---

# 8. Repository Rules

Repository name must exist.

Repository version must exist.

Repository name must be unique.

Repository version must follow semantic versioning.

---

# 9. Directory Rules

Directory path must be unique.

Directory names cannot be empty.

Directory paths must be normalized.

Parent directories must exist.

Circular directory structures are illegal.

---

# 10. File Rules

File path must be unique.

Every file belongs to one directory.

Duplicate file declarations are illegal.

File extensions must be valid.

Generated file paths must be deterministic.

---

# 11. Dependency Rules

Dependencies must reference existing symbols.

Circular dependencies are illegal.

Duplicate dependencies are ignored.

Optional dependencies are allowed.

Required dependencies must resolve successfully.

---

# 12. Validation Rules

Validate

Unique Directories

Unique Files

Unique Repository

Unique Identifiers

No Cycles

No Missing Parents

Valid Paths

Valid Names

Consistent Layers

Consistent Dependencies

---

# 13. Diagnostics

Semantic diagnostics include

```
SEM001

Duplicate Directory
```

```
SEM002

Duplicate File
```

```
SEM003

Unknown Dependency
```

```
SEM004

Circular Dependency
```

```
SEM005

Missing Parent Directory
```

```
SEM006

Duplicate Repository
```

```
SEM007

Invalid Path
```

```
SEM008

Invalid Layer
```

Severity

```
Information

Warning

Error

Fatal
```

---

# 14. Semantic Analysis Algorithm

```
Repository

↓

Register Repository

↓

Register Directories

↓

Register Files

↓

Resolve Dependencies

↓

Validate Rules

↓

Emit Diagnostics

↓

Validated AST
```

---

# Example

Input

```
Repository

Directories

Files
```

Output

```
Validated Repository

Diagnostics

Resolved Symbols
```

---

# Future Extensions

Future versions may support

Namespaces

Imports

Plugins

Templates

Cross Repository References

Incremental Semantic Analysis

---

# End of Semantic Analysis Specification