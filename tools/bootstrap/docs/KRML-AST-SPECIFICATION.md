# KRML Abstract Syntax Tree Specification

Specification Version: 0.2.0

Status: Draft

Compiler Stage: AST

---

# Table of Contents

1. Introduction
2. Goals
3. AST Principles
4. Compiler Pipeline
5. Root Node
6. Node Hierarchy
7. Common Node Properties
8. Metadata Nodes
9. Directory Nodes
10. File Nodes
11. Dependency Nodes
12. Validation Nodes
13. Diagnostic Nodes
14. AST Traversal
15. Visitor Pattern
16. Serialization
17. Future Extensions

---

# 1. Introduction

The Abstract Syntax Tree (AST) is the canonical in-memory representation of a KRML repository.

Every successful parse produces exactly one AST.

The AST is independent of the source Markdown.

---

# 2. Goals

The AST shall

• Preserve repository structure

• Remove formatting

• Preserve semantic information

• Be deterministic

• Be immutable after construction

• Support traversal

• Support validation

• Support generation

---

# 3. AST Principles

The AST contains semantic information only.

The AST never stores

• whitespace

• comments

• formatting

• markdown syntax

unless explicitly requested.

---

# 4. Compiler Pipeline

```
Manifest

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

↓

Generator
```

---

# 5. Root Node

Every tree begins with

```
RepositoryNode
```

```
RepositoryNode

├── Metadata

├── Directories

├── Files

├── Validation

└── Diagnostics
```

---

# 6. Node Hierarchy

```
ASTNode

│

├── RepositoryNode

├── MetadataNode

├── DirectoryNode

├── FileNode

├── PurposeNode

├── LayerNode

├── DependencyNode

├── ValidationNode

├── RuleNode

└── DiagnosticNode
```

---

# 7. Common Node Properties

Every node contains

```
Node Id

Node Type

Source File

Start Line

End Line

Start Column

End Column

Parent

Children
```

Example

```
ASTNode

id

kind

file

line

column

children[]
```

---

# 8. Metadata Node

Represents repository metadata.

```
MetadataNode

repositoryName

version

author

description
```

---

# 9. Directory Node

Represents a repository directory.

```
DirectoryNode

name

path

parent

children
```

Example

```
src

src/app

src/core
```

---

# 10. File Node

Represents a repository file.

```
FileNode

name

path

purpose

layer

dependencies

metadata
```

---

# 11. Dependency Node

Represents one dependency.

```
DependencyNode

identifier

required

optional
```

---

# 12. Validation Node

Represents repository validation rules.

```
ValidationNode

rules[]
```

Example

```
UniqueFiles

UniqueDirectories

NoCircularDependencies
```

---

# 13. Diagnostic Node

Represents parser diagnostics.

```
DiagnosticNode

severity

code

message

file

line

column
```

---

# 14. AST Traversal

Traversal order

```
Preorder

Repository

↓

Metadata

↓

Directories

↓

Files
```

Supported

```
Preorder

Postorder

Breadth First
```

---

# 15. Visitor Pattern

The AST supports visitors.

```
RepositoryVisitor

DirectoryVisitor

FileVisitor

ValidationVisitor

GeneratorVisitor

DiagnosticVisitor
```

Purpose

```
Validation

Generation

Analysis

Statistics

Documentation
```

---

# 16. Serialization

AST can be serialized to

```
JSON

YAML

Binary

XML
```

JSON is the canonical format.

---

# 17. Future Extensions

Future versions may include

```
NamespaceNode

ImportNode

AnnotationNode

AttributeNode

TemplateNode

MacroNode

PluginNode
```

---

# Example AST

```
Repository

├── Metadata

│

├── Directory

│   ├── src

│   ├── app

│   └── core

│

├── File

│   ├── index.ts

│   ├── app.ts

│   └── config.ts

│

└── Validation
```

---

# Design Rules

1.

Nodes are immutable.

2.

Nodes always know their parent.

3.

Children preserve declaration order.

4.

AST contains no generated information.

5.

Generation occurs after semantic analysis.

---

# End of AST Specification