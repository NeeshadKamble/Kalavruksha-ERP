# Chapter 17 — Formal Grammar

---

# 17.1 Grammar Notation

KRML grammar is defined using Extended Backus–Naur Form (EBNF).

Notation:

```
A ::= B C

A?
Optional

A*
Zero or More

A+
One or More

A | B
Alternative

"keyword"
Terminal

Identifier
Non-terminal
```

---

# 17.2 Root Rule

Every KRML repository begins with a Repository.

```
Repository
    ::= MetadataSection
        DirectorySection*
        FileSection*
        ValidationSection?
```

---

# 17.3 Metadata

```
MetadataSection
    ::=
        RepositoryDeclaration
        VersionDeclaration
```

Repository declaration

```
repository "Repository Name"
```

Version declaration

```
version "1.0.0"
```

---

# 17.4 Directory Declaration

```
DirectorySection
    ::=
        DirectoryDeclaration
```

```
directory "src"
```

Nested example

```
directory "src/app"

directory "src/core"

directory "src/modules"
```

---

# 17.5 File Declaration

```
FileSection
    ::=
        FileDeclaration
```

```
file "src/main.ts"
```

---

# 17.6 Purpose Block

```
PurposeBlock
    ::=
        purpose
        TripleString
```

Example

```
purpose

"""
Application Entry Point
"""
```

---

# 17.7 Layer Declaration

```
LayerDeclaration
    ::=
        layer Identifier
```

Example

```
layer Application
```

---

# 17.8 Dependency Block

```
DependenciesBlock
    ::=
        dependencies
        "{"
            Identifier*
        "}"
```

Example

```
dependencies
{
    "database"

    "authentication"

    "logger"
}
```

---

# 17.9 Validation Block

```
ValidationSection
    ::=
        validation
        "{"
            ValidationRule*
        "}"
```

Example

```
validation
{
    UniqueDirectories

    UniqueFiles

    NoCircularDependencies
}
```

---

# 17.10 Complete File Rule

```
FileSpecification
    ::=

        file

        PurposeBlock?

        LayerDeclaration?

        DependenciesBlock?

        ValidationBlock?
```

---

# 17.11 Repository Grammar

```
Repository

├── Metadata

├── Directories*

├── Files*

└── Validation?
```

---

# 17.12 Abstract Syntax Tree

```
Repository

├── MetadataNode

├── DirectoryNode[]

├── FileNode[]

├── ValidationNode

└── Diagnostics
```

---

# 17.13 Reserved Words

```
repository

version

directory

file

purpose

layer

dependencies

validation

generate

metadata

module

service

component

class

interface

enum

type

constant
```

Reserved words cannot be used as identifiers.

---

# 17.14 Future Grammar Extensions

Future versions of KRML may introduce:

```
namespace

import

export

package

configuration

template

rule

constraint

annotation

plugin
```

These are reserved for future use.

---

# End of Grammar