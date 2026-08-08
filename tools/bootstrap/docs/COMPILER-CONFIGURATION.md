# Bootstrap Compiler Configuration

Configuration Version: 1.0

Compiler Version: 0.2.0

Status: Draft

---

# Table of Contents

1. Overview
2. Configuration Sources
3. Configuration File
4. Compiler Options
5. Lexer Options
6. Parser Options
7. Generator Options
8. Validator Options
9. Reporter Options
10. Environment Variables
11. Configuration Priority
12. Future Extensions

---

# 1. Overview

The Bootstrap Compiler is configured using a JSON configuration file.

Default filename

```
bootstrap.config.json
```

Configuration controls compiler behavior without modifying source code.

---

# 2. Configuration Sources

Configuration may originate from

```
Command Line

↓

Configuration File

↓

Environment Variables

↓

Compiler Defaults
```

Higher priority sources override lower priority sources.

---

# 3. Configuration File

Example

```json
{
    "compiler": {
        "watch": false,
        "verbose": true,
        "dryRun": false
    },

    "manifest": {
        "directory": "./repository-manifest"
    },

    "output": {
        "directory": "./generated"
    },

    "generator": {
        "overwrite": false
    },

    "validator": {
        "enabled": true
    }
}
```

---

# 4. Compiler Options

```
watch

verbose

quiet

dryRun

incremental

threads

cache
```

---

# 5. Lexer Options

```
normalizeLineEndings

allowUnicode

allowTabs

preserveWhitespace

emitComments
```

---

# 6. Parser Options

```
recoverErrors

maximumErrors

buildDiagnostics

buildAst
```

---

# 7. Generator Options

```
overwrite

cleanOutput

createMetadata

createStatistics

createManifest

normalizePaths
```

---

# 8. Validator Options

```
enabled

strict

warningsAsErrors

verifyMetadata

verifyChecksums

verifyEncoding
```

---

# 9. Reporter Options

```
summary

statistics

json

markdown

html

performance
```

---

# 10. Environment Variables

```
KRML_OUTPUT

KRML_MANIFEST

KRML_CACHE

KRML_THREADS

KRML_VERBOSE
```

---

# 11. Configuration Priority

Highest

```
Command Line
```

↓

```
Environment Variables
```

↓

```
bootstrap.config.json
```

↓

```
Compiler Defaults
```

Lowest

---

# 12. Future Extensions

Future versions may support

```
Workspace Configuration

Profiles

Named Configurations

Configuration Inheritance

Remote Configuration

Plugin Configuration
```

---

# Default Configuration

```json
{
    "compiler": {
        "watch": false,
        "verbose": false,
        "dryRun": false,
        "incremental": false
    },

    "generator": {
        "overwrite": false
    },

    "validator": {
        "enabled": true
    }
}
```

---

# Design Principles

Configuration shall

• Be deterministic

• Be human readable

• Support defaults

• Support validation

• Be backward compatible

• Support future expansion

---

# End of Configuration Specification