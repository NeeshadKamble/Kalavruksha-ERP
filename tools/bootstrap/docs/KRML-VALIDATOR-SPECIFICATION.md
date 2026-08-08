# KRML Repository Validator Specification

Specification Version: 0.2.0

Status: Draft

Compiler Stage: Validation

---

# Table of Contents

1. Overview
2. Responsibilities
3. Validation Pipeline
4. Input
5. Output
6. Validation Levels
7. Repository Validation
8. Directory Validation
9. File Validation
10. Metadata Validation
11. Diagnostics
12. Validation Report
13. Performance
14. Future Extensions

---

# 1. Overview

The Repository Validator verifies that a generated repository
matches the Repository AST and conforms to the KRML specification.

Validation is deterministic.

Validation never modifies the repository.

---

# 2. Responsibilities

The validator shall

• Verify repository structure

• Verify directories

• Verify files

• Verify metadata

• Detect inconsistencies

• Produce diagnostics

• Generate validation reports

---

# 3. Validation Pipeline

```
Generated Repository

↓

Repository Scan

↓

Structure Validation

↓

Metadata Validation

↓

Consistency Validation

↓

Diagnostics

↓

Validation Report
```

---

# 4. Input

Validated Repository AST

Generated Repository

Compiler Configuration

---

# 5. Output

Validation Report

Validation Statistics

Diagnostics

Pass / Fail Result

---

# 6. Validation Levels

Level 1

Repository

↓

Level 2

Directories

↓

Level 3

Files

↓

Level 4

Metadata

↓

Level 5

Consistency

---

# 7. Repository Validation

Verify

Repository Root Exists

Repository Metadata Exists

Repository Structure Matches AST

Repository Version Matches Manifest

Repository Encoding Is UTF-8

---

# 8. Directory Validation

Every directory declared in the AST

must

Exist

Be Unique

Be Reachable

Match Expected Path

Unexpected directories are reported.

---

# 9. File Validation

Every file declared in the AST

must

Exist

Be Readable

Be Located Correctly

Have Correct Name

Have Correct Extension

Unexpected files are reported.

Missing files are reported.

---

# 10. Metadata Validation

Verify

Manifest Version

Compiler Version

Repository Metadata

Generation Timestamp

Statistics

Checksum (future)

---

# 11. Diagnostics

Validator diagnostics

VAL001

Missing Directory

VAL002

Unexpected Directory

VAL003

Missing File

VAL004

Unexpected File

VAL005

Metadata Mismatch

VAL006

Invalid Repository

VAL007

Encoding Error

VAL008

Permission Error

Severity

Information

Warning

Error

Fatal

---

# 12. Validation Report

Validation report includes

Repository Summary

Directory Count

File Count

Diagnostics

Warnings

Errors

Execution Time

Validation Result

Example

```
Repository

PASS

Directories

127

Files

842

Warnings

2

Errors

0

Execution Time

245 ms
```

---

# 13. Performance

Validation should scale linearly.

Target repositories

10 directories

100 directories

1,000 directories

10,000 directories

100,000 files

Validation should avoid redundant scanning.

---

# 14. Future Extensions

Checksum Validation

Content Validation

Schema Validation

Incremental Validation

Distributed Validation

Cloud Validation

Plugin Validators

Repository Policies

Security Validation

Compliance Validation

---

# Validation Algorithm

```
Repository

↓

Scan Filesystem

↓

Compare With AST

↓

Generate Diagnostics

↓

Generate Report

↓

PASS / FAIL
```

---

# Example

Manifest

↓

AST

↓

Generator

↓

Repository

↓

Validator

↓

PASS

---

# End of Validator Specification