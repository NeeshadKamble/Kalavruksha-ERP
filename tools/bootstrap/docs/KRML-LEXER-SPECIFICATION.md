# KRML Lexer Specification

Specification Version: 0.2.0

Status: Draft

---

# Table of Contents

1. Overview
2. Responsibilities
3. Compiler Stage
4. Input
5. Output
6. Character Set
7. Character Classes
8. Tokenization Rules
9. Token Types
10. Lexer State Machine
11. Token Priority
12. Error Handling
13. Examples

---

# 1. Overview

The KRML Lexer is responsible for converting KRML source into a sequence of lexical tokens.

The lexer performs no semantic analysis.

It only recognizes lexical structures.

---

# 2. Responsibilities

The lexer shall:

• Read UTF-8 source

• Normalize line endings

• Ignore insignificant whitespace

• Produce lexical tokens

• Preserve source locations

• Detect lexical errors

---

# 3. Compiler Stage

```
Manifest Files

↓

Reader

↓

Lexer

↓

Tokens

↓

Parser
```

---

# 4. Input

Input consists of UTF-8 text extracted from repository manifest documents.

Example

```
repository "Kalavruksha ERP"

version "1.0.0"

directory "src"

file "src/main.ts"
```

---

# 5. Output

The lexer produces

```
Token[]
```

Each token contains

```
Type

Value

Line

Column

File
```

---

# 6. Character Set

Supported

```
Unicode UTF-8
```

Supported line endings

```
LF

CRLF
```

Tabs are normalized.

---

# 7. Character Classes

Alphabetic

```
A-Z

a-z
```

Digits

```
0-9
```

Whitespace

```
Space

Tab

Newline
```

Symbols

```
{

}

(

)

[

]

:

;

,

.

=

"

'

#
```

---

# 8. Tokenization Rules

Identifiers begin with

```
Letter

_
```

Identifiers continue with

```
Letter

Digit

_
```

Strings

```
"Text"
```

Triple Strings

```
"""

Multi Line

String

"""
```

Numbers

```
123

45.67
```

Comments

```
#

Comment
```

---

# 9. Token Types

```
Identifier

Keyword

String

TripleString

Integer

Float

Boolean

Directory

File

Repository

Version

Purpose

Layer

Dependencies

Validation

LeftBrace

RightBrace

LeftBracket

RightBracket

LeftParen

RightParen

Colon

Semicolon

Comma

Dot

NewLine

EOF
```

---

# 10. Lexer State Machine

```
Start

↓

Whitespace

↓

Identifier

↓

Keyword

↓

String

↓

Triple String

↓

Number

↓

Comment

↓

EOF
```

---

# 11. Token Priority

Priority

```
Triple String

↓

String

↓

Keyword

↓

Identifier

↓

Number

↓

Comment

↓

Whitespace
```

Earlier matches have higher priority.

---

# 12. Error Handling

The lexer reports

Unknown Character

```
LEX001
```

Unterminated String

```
LEX002
```

Unterminated Triple String

```
LEX003
```

Invalid Number

```
LEX004
```

Unexpected Character

```
LEX005
```

---

# 13. Example

Input

```
repository "Kalavruksha ERP"

directory "src"

file "src/main.ts"
```

Output

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

# Future Work

Future versions will include

Raw Strings

Annotations

Attributes

Template Literals

Macro Tokens

Plugin Tokens

---

End of Lexer Specification