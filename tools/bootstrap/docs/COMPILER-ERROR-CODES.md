# Bootstrap Compiler Error Codes

Specification Version: 1.0

Compiler Version: 0.2.0

Status: Draft

---

# Table of Contents

1. Overview
2. Diagnostic Model
3. Severity Levels
4. Error Code Format
5. Reader Errors
6. Lexer Errors
7. Parser Errors
8. Semantic Errors
9. Generator Errors
10. Validator Errors
11. Internal Errors
12. Exit Codes
13. Error Reporting
14. Future Extensions

---

# 1. Overview

Every compiler diagnostic has a stable identifier.

Error codes never change once released.

Messages may improve.

Codes remain permanent.

---

# 2. Diagnostic Model

Every diagnostic contains

```
Code

Severity

Phase

Message

Suggestion

Manifest

Line

Column

Length
```

Example

```
LEX002

Error

Lexer

Unterminated string literal.

Close the string with a quotation mark.

PART-03.md

Line 125

Column 17
```

---

# 3. Severity Levels

```
Information

Warning

Error

Fatal
```

Definitions

Information

Compiler continues.

Warning

Compilation continues.

Error

Compilation phase fails.

Fatal

Compiler terminates.

---

# 4. Error Code Format

```
REA

Reader

LEX

Lexer

PAR

Parser

SEM

Semantic

GEN

Generator

VAL

Validator

INT

Internal
```

Example

```
LEX001

PAR004

SEM008
```

---

# 5. Reader Errors

REA001

Manifest not found

REA002

Cannot read manifest

REA003

Invalid encoding

REA004

Permission denied

REA005

Manifest empty

---

# 6. Lexer Errors

LEX001

Unknown character

LEX002

Unterminated string

LEX003

Unterminated multiline string

LEX004

Invalid number

LEX005

Unexpected character

LEX006

Invalid escape sequence

LEX007

Invalid identifier

LEX008

Unexpected end of file

---

# 7. Parser Errors

PAR001

Unexpected token

PAR002

Missing token

PAR003

Unexpected EOF

PAR004

Invalid block

PAR005

Duplicate declaration

PAR006

Invalid keyword

PAR007

Missing section

PAR008

Unexpected nesting

---

# 8. Semantic Errors

SEM001

Duplicate directory

SEM002

Duplicate file

SEM003

Unknown dependency

SEM004

Circular dependency

SEM005

Missing parent directory

SEM006

Duplicate repository

SEM007

Invalid path

SEM008

Invalid layer

SEM009

Unknown symbol

SEM010

Invalid repository structure

---

# 9. Generator Errors

GEN001

Cannot create directory

GEN002

Cannot create file

GEN003

Permission denied

GEN004

Template failure

GEN005

Invalid output directory

GEN006

Write failure

GEN007

Existing file conflict

GEN008

Generation cancelled

---

# 10. Validator Errors

VAL001

Missing directory

VAL002

Unexpected directory

VAL003

Missing file

VAL004

Unexpected file

VAL005

Metadata mismatch

VAL006

Invalid repository

VAL007

Encoding error

VAL008

Permission error

VAL009

Content mismatch

VAL010

Validation timeout

---

# 11. Internal Errors

INT001

Unexpected compiler state

INT002

Null compiler context

INT003

Unsupported AST node

INT004

Plugin failure

INT005

Assertion failed

INT006

Unknown exception

INT999

Internal compiler error

---

# 12. Exit Codes

```
0

Success
```

```
1

Reader Failure
```

```
2

Lexer Failure
```

```
3

Parser Failure
```

```
4

Semantic Failure
```

```
5

Generation Failure
```

```
6

Validation Failure
```

```
7

Internal Failure
```

---

# 13. Error Reporting

Diagnostics should include

```
Error Code

Severity

Message

Suggestion

Location

Compiler Phase
```

Example

```
SEM003

Unknown dependency "Database"

PART-05.md

Line 81

Column 12

Suggestion

Declare the dependency before use.
```

---

# 14. Future Extensions

Future versions may support

Localization

Quick Fixes

Machine-readable diagnostics

IDE integration

LSP diagnostics

Clickable documentation

Automatic repair

---

# Design Rules

Error codes

Never change

Never reuse

Never overlap

Always remain backward compatible

Every compiler phase owns its own codes.

---

# End of Error Code Specification
