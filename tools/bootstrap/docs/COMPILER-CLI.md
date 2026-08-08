# Bootstrap Compiler Command Line Interface

CLI Version: 1.0

Compiler Version: 0.2.0

Status: Draft

---

# Table of Contents

1. Overview
2. Command Structure
3. Global Options
4. Commands
5. Configuration
6. Exit Codes
7. Diagnostics
8. Examples

---

# 1. Overview

The Bootstrap Compiler is executed from the command line.

```
bootstrap [command] [options]
```

The CLI provides access to every compiler phase.

---

# 2. Command Structure

```
bootstrap

compile

validate

generate

report

clean

doctor

version

help
```

---

# 3. Global Options

```
--input

Repository Manifest Directory
```

```
--output

Generated Repository Directory
```

```
--config

Compiler Configuration File
```

```
--verbose
```

```
--quiet
```

```
--dry-run
```

```
--watch
```

```
--force
```

```
--no-color
```

```
--help
```

```
--version
```

---

# 4. Commands

## compile

Runs the complete compiler pipeline.

```
bootstrap compile
```

Pipeline

```
Read

↓

Lex

↓

Parse

↓

Semantic

↓

Generate

↓

Validate

↓

Report
```

---

## generate

Generates a repository without validation.

```
bootstrap generate
```

---

## validate

Validates an existing repository.

```
bootstrap validate
```

---

## report

Produces compiler statistics.

```
bootstrap report
```

---

## doctor

Checks compiler installation.

```
bootstrap doctor
```

Checks

Compiler Version

Node Version

Configuration

Manifest

Permissions

Output Directory

---

## clean

Removes generated output.

```
bootstrap clean
```

---

## version

Displays compiler version.

```
bootstrap version
```

---

## help

Displays command help.

```
bootstrap help
```

---

# 5. Configuration

Compiler configuration file

```
bootstrap.config.json
```

Example

```
{
    "manifestDirectory": "repository-manifest",
    "outputDirectory": "./generated",
    "watch": false,
    "validate": true,
    "verbose": false
}
```

---

# 6. Exit Codes

```
0

Success
```

```
1

Compiler Error
```

```
2

Lexical Error
```

```
3

Parser Error
```

```
4

Semantic Error
```

```
5

Generation Error
```

```
6

Validation Error
```

---

# 7. Diagnostics

```
INFO

WARNING

ERROR

FATAL
```

Every diagnostic includes

```
Code

Message

Location

Suggestion
```

---

# 8. Examples

Compile

```
bootstrap compile
```

Compile with output

```
bootstrap compile --output ./ERP
```

Generate only

```
bootstrap generate
```

Validate only

```
bootstrap validate
```

Watch mode

```
bootstrap compile --watch
```

Dry run

```
bootstrap compile --dry-run
```

Verbose

```
bootstrap compile --verbose
```

---

# Future Commands

```
bootstrap format

bootstrap graph

bootstrap ast

bootstrap tokens

bootstrap benchmark

bootstrap plugin

bootstrap init

bootstrap migrate
```

---

# End of CLI Specification