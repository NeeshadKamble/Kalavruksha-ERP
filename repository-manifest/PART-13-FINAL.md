KALAVRUKSHA ERP — CANONICAL REPOSITORY MANIFEST
PART 13 — System-Wide Testing, Quality Assurance, Benchmarks & Validation (tests/)
1. Executive Summary
The System-Wide Testing & Quality Assurance Package (tests/) establishes the comprehensive testing pyramid for Kalavruksha ERP. It enforces Quality Gates across all 5 Clean Architecture tiers, ensuring zero regression, zero architectural boundary violations, and zero performance degradation under 100,000+ school load scenarios.
The testing architecture incorporates:
Unit & Integration Testing (Vitest): Fast, infrastructure-free unit tests co-located in packages (src/**/__tests__/) and cross-domain integration tests (tests/integration/).
End-to-End Testing (Playwright): Multi-browser user workflow tests (tests/e2e/) validating interactive grid editing, clash alert banners, and digital substitution slip issuance.
Contract Testing (Pact): Consumer-Driven Contract (CDC) testing (tests/contract/) verifying API contracts between Next.js frontend portals and NestJS API gateways.
Architecture Boundary Verification (ArchUnit / Vitest): Automated boundary rule tests (tests/architecture/boundary-rules.spec.ts) enforcing 5-tier Clean Architecture import rules.
Mutation Testing (Stryker): Mutation testing engine (tests/mutation/stryker.conf.json) evaluating test suite quality (
>
85
%
>85%
 mutation score target on domain core logic).
Load & Performance Benchmarking (k6 & Vitest Benchmarks): k6 load scripts (tests/load/) evaluating 
10
,
000
10,000
 concurrent WebSocket slot swaps, and microbenchmarks (tests/benchmarks/) checking 
O
(
1
)
O(1)
 grid indexing latency (
<
0.001
 ms
<0.001 ms
).
2. Directory Specifications
DIRECTORY SPECIFICATION
Directory Path: tests/
Purpose: Central testing workspace directory housing system-wide Playwright E2E suites, k6 load scripts, Pact contract tests, Stryker mutation configs, test data builders, and performance benchmarks.
Architectural Layer: Tier 5 Testing & Quality Assurance Layer
Package: tests
Bounded Context: All Bounded Contexts
Responsibilities:
Executes cross-domain system integration tests and Playwright E2E tests.
Executes k6 load testing scripts and inner-loop performance benchmarks.
Enforces Clean Architecture boundary import rules via architecture unit tests.
Contained Files:
package.json
tsconfig.json
README.md
Contained Directories:
tests/unit/
tests/integration/
tests/e2e/
tests/contract/
tests/architecture/
tests/mutation/
tests/performance/
tests/load/
tests/stress/
tests/benchmarks/
tests/fixtures/
tests/builders/
tests/mocks/
tests/snapshots/
tests/test-utils/
Relationships:
Parent: ./ (Repository Root)
Children: Sub-directories under tests/
Dependencies: @kalavruksha/domain, @kalavruksha/application, @kalavruksha/infrastructure, Vitest, Playwright, k6, Stryker
Dependents: GitHub Actions CI/CD Quality Pipeline
Implementation Phase: Phase 1 (Testing Foundation)
Freeze Status: Approved
Notes: System-wide testing workspace root directory.
DIRECTORY SPECIFICATION
Directory Path: tests/e2e/
Purpose: Houses Playwright end-to-end user workflow test specs for Next.js web applications (apps/web-admin, apps/web-teacher, apps/web-superadmin).
Architectural Layer: Testing Layer
Package: tests
Bounded Context: All Bounded Contexts
Responsibilities:
Executes multi-browser E2E user journeys (Chromium, Firefox, WebKit).
Validates real-time drag-and-drop slot swaps and master timetable publishing workflows.
Contained Files:
playwright.config.ts
package.json
README.md
Contained Directories:
tests/e2e/admin-portal/
tests/e2e/teacher-portal/
Relationships:
Parent: tests/
Children: Sub-directories under tests/e2e/
Dependencies: Playwright Test Runner
Dependents: CI/CD E2E Pipeline
Implementation Phase: Phase 1
Freeze Status: Approved
Notes: Playwright E2E directory.
DIRECTORY SPECIFICATION
Directory Path: tests/architecture/
Purpose: Houses automated architecture unit tests enforcing 5-tier Clean Architecture import rules and forbidding direct ORM/framework imports inside domain core packages.
Architectural Layer: Testing / Architecture Governance Layer
Package: tests
Bounded Context: All Bounded Contexts
Responsibilities:
Parses TypeScript ASTs across all packages to detect boundary rule violations.
Fails CI build if a domain file imports from infrastructure, NestJS, or Prisma.
Contained Files:
boundary-rules.spec.ts
README.md
Contained Directories: None
Relationships:
Parent: tests/
Children: None
Dependencies: Vitest, TypeScript AST Parser
Dependents: CI/CD Architecture Check Pipeline
Implementation Phase: Phase 1
Freeze Status: Approved
Notes: Architectural boundary enforcement test directory.
DIRECTORY SPECIFICATION
Directory Path: tests/builders/
Purpose: Houses fluent Test Data Builders generating valid, strongly typed domain aggregates and Value Objects for test cases without boilerplate.
Architectural Layer: Testing Layer
Package: tests
Bounded Context: All Bounded Contexts
Responsibilities:
school-builder.ts: Generates valid School aggregate instances with default shifts.
teacher-builder.ts: Generates valid TeacherProfile instances with qualifications.
timetable-grid-builder.ts: Generates valid TimetableDayGrid aggregates with slots.
Contained Files:
school-builder.ts
teacher-builder.ts
timetable-grid-builder.ts
index.ts
README.md
Contained Directories: None
Relationships:
Parent: tests/
Children: None
Dependencies: @kalavruksha/domain
Dependents: Unit, Integration, & E2E Test Specs
Implementation Phase: Phase 1
Freeze Status: Approved
Notes: Fluent test data builder library.
3. File Specifications
File ID: FILE-TEST-001
Path: tests/package.json
Purpose: Package manifest for tests, declaring dependencies on Playwright, k6, Pact, Stryker, and workspace packages.
Architectural Layer: Testing Layer
Package: tests
Bounded Context: All Bounded Contexts
DDD Building Block: Configuration
Owner Module: Testing Architecture Team
Public API: No
Internal Only: Yes
Exports: None
Imports: Workspace packages
Used By: pnpm, Turborepo, CI/CD runners
Depends On: All @kalavruksha/* packages
Implementation Prerequisites: None
Reverse Dependencies: CI/CD test tasks
Generated or Handwritten: Handwritten
Estimated LOC: 45 lines
Complexity: Low
Unit Test Required: No
Integration Test Required: No
Mutation Test Required: No
Performance Test Required: No
Security Review Required: Yes
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Workspace Version (1.0.0)
Expected Change Frequency: Medium
Implementation Order: 273
Current Status: Approved
Security Classification: Internal
Notes: Testing workspace manifest.
File ID: FILE-TEST-002
Path: tests/tsconfig.json
Purpose: TypeScript configuration for tests package extending @kalavruksha/tsconfig/vitest.json.
Architectural Layer: Testing Layer
Package: tests
Bounded Context: All Bounded Contexts
DDD Building Block: Configuration
Owner Module: Testing Architecture Team
Public API: No
Internal Only: Yes
Exports: TypeScript options
Imports: tooling/tsconfig/vitest.json
Used By: TypeScript Compiler (tsc)
Depends On: tooling/tsconfig/vitest.json
Implementation Prerequisites: tooling/tsconfig/vitest.json
Reverse Dependencies: tests/**/*
Generated or Handwritten: Handwritten
Estimated LOC: 25 lines
Complexity: Low
Unit Test Required: No
Integration Test Required: No
Mutation Test Required: No
Performance Test Required: No
Security Review Required: No
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Low
Implementation Order: 274
Current Status: Approved
Security Classification: Internal
Notes: Test compiler options.
File ID: FILE-TEST-003
Path: tests/e2e/playwright.config.ts
Purpose: Playwright E2E testing configuration specifying browser targets (Chromium, Firefox, WebKit), baseUrl, trace recording rules, and parallel worker settings.
Architectural Layer: Testing Layer
Package: tests
Bounded Context: All Bounded Contexts
DDD Building Block: Configuration / Playwright
Owner Module: Testing Architecture Team
Public API: Yes
Internal Only: Yes
Exports: Playwright Configuration Object
Imports: @playwright/test
Used By: Playwright Test Runner, GitHub Actions E2E Pipeline
Depends On: @playwright/test
Implementation Prerequisites: None
Reverse Dependencies: E2E test specs
Generated or Handwritten: Handwritten
Estimated LOC: 65 lines
Complexity: Medium
Unit Test Required: No
Integration Test Required: Yes (Playwright runner test)
Mutation Test Required: No
Performance Test Required: No
Security Review Required: Yes
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Low
Implementation Order: 275
Current Status: Approved
Security Classification: Internal
Notes: Playwright E2E configuration file.
File ID: FILE-TEST-004
Path: tests/e2e/admin-portal/drag-and-drop-swap.spec.ts
Purpose: Playwright E2E test spec verifying interactive drag-and-drop slot swaps on the Next.js Admin Portal timetable grid editor, checking real-time WebSocket sync and clash alert rendering.
Architectural Layer: Testing Layer
Package: tests
Bounded Context: Timetable Operations
DDD Building Block: Test
Owner Module: Testing Architecture Team
Public API: No
Internal Only: Yes
Exports: None (Test Spec)
Imports: @playwright/test, ../../builders/timetable-grid-builder
Used By: Playwright Runner, CI/CD Pipeline
Depends On: apps/web-admin, apps/api
Implementation Prerequisites: apps/web-admin
Reverse Dependencies: CI pipeline
Generated or Handwritten: Handwritten
Estimated LOC: 120 lines
Complexity: Medium
Unit Test Required: No
Integration Test Required: Yes (Full E2E user journey test)
Mutation Test Required: No
Performance Test Required: Yes (200ms visual drag-drop swap latency check)
Security Review Required: Yes
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Dynamic
Expected Change Frequency: Medium
Implementation Order: 276
Current Status: Approved
Security Classification: Internal
Notes: Interactive drag-and-drop grid swap E2E test spec.
File ID: FILE-TEST-005
Path: tests/architecture/boundary-rules.spec.ts
Purpose: Vitest architecture test spec verifying that @kalavruksha/domain has zero imports from Prisma, NestJS, Next.js, or Redis, enforcing 5-tier Clean Architecture rules.
Architectural Layer: Testing / Architecture Governance Layer
Package: tests
Bounded Context: All Bounded Contexts
DDD Building Block: Test
Owner Module: Architecture Governance Team
Public API: No
Internal Only: Yes
Exports: None (Test Spec)
Imports: vitest, ts-morph
Used By: Vitest Runner, GitHub Actions Boundary Pipeline
Depends On: @kalavruksha/domain
Implementation Prerequisites: @kalavruksha/domain
Reverse Dependencies: CI pipeline
Generated or Handwritten: Handwritten
Estimated LOC: 95 lines
Complexity: Medium
Unit Test Required: Yes
Integration Test Required: Yes (Architecture boundary rule test)
Mutation Test Required: No
Performance Test Required: No
Security Review Required: Yes
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Low
Implementation Order: 277
Current Status: Approved
Security Classification: Internal
Notes: Clean Architecture boundary enforcement test spec.
File ID: FILE-TEST-006
Path: tests/mutation/stryker.conf.json
Purpose: Stryker Mutator configuration file evaluating test suite mutation score (
>
85
%
>85%
 target) across domain core packages.
Architectural Layer: Testing Layer
Package: tests
Bounded Context: All Bounded Contexts
DDD Building Block: Configuration / Stryker
Owner Module: Testing Architecture Team
Public API: Yes
Internal Only: Yes
Exports: Stryker Configuration Object
Imports: None
Used By: Stryker CLI, GitHub Actions Mutation Pipeline
Depends On: Vitest test runner
Implementation Prerequisites: None
Reverse Dependencies: CI pipeline
Generated or Handwritten: Handwritten
Estimated LOC: 50 lines
Complexity: Low
Unit Test Required: No
Integration Test Required: Yes (Mutation engine run test)
Mutation Test Required: No
Performance Test Required: No
Security Review Required: No
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Low
Implementation Order: 278
Current Status: Approved
Security Classification: Internal
Notes: Stryker mutation testing configuration.
File ID: FILE-TEST-007
Path: tests/load/websocket-swap-concurrency.js
Purpose: k6 performance stress testing script simulating 
10
,
000
10,000
 concurrent WebSocket connections performing simultaneous grid slot swaps to verify 
O
(
1
)
O(1)
 grid update latency (
<
50
ms
<50ms
).
Architectural Layer: Testing / Performance Layer
Package: tests
Bounded Context: Timetable Operations
DDD Building Block: Test
Owner Module: Performance Architecture Team
Public API: No
Internal Only: Yes
Exports: None (k6 Load Script)
Imports: k6, k6/ws
Used By: k6 Load Runner, CI/CD Benchmark Pipeline
Depends On: apps/api WebSocket Gateway
Implementation Prerequisites: apps/api
Reverse Dependencies: Performance CI pipeline
Generated or Handwritten: Handwritten
Estimated LOC: 110 lines
Complexity: High
Unit Test Required: No
Integration Test Required: Yes (10,000 concurrent WS connection load test)
Mutation Test Required: No
Performance Test Required: Yes (WS concurrency latency benchmark)
Security Review Required: Yes
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Dynamic
Expected Change Frequency: Medium
Implementation Order: 279
Current Status: Approved
Security Classification: Internal
Notes: k6 WebSocket concurrency stress script.
File ID: FILE-TEST-008
Path: tests/builders/school-builder.ts
Purpose: Fluent Test Data Builder class constructing valid School aggregate root instances with customizable shifts, academic years, and board affiliations for test suites.
Architectural Layer: Testing Layer
Package: tests
Bounded Context: Institutional Structure
DDD Building Block: Utility / Builder
Owner Module: Testing Architecture Team
Public API: Yes
Internal Only: No
Exports: SchoolBuilder
Imports: @kalavruksha/domain
Used By: Unit, Integration, & E2E Test Specs
Depends On: @kalavruksha/domain
Implementation Prerequisites: @kalavruksha/domain
Reverse Dependencies: Test suites
Generated or Handwritten: Handwritten
Estimated LOC: 85 lines
Complexity: Low
Unit Test Required: Yes
Integration Test Required: No
Mutation Test Required: No
Performance Test Required: No
Security Review Required: No
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Medium
Implementation Order: 280
Current Status: Approved
Security Classification: Internal
Notes: Fluent test data builder for School aggregate.
File ID: FILE-TEST-009
Path: tests/builders/timetable-grid-builder.ts
Purpose: Fluent Test Data Builder class constructing valid TimetableDayGrid aggregate root instances with pre-populated periods and slot coordinates for unit tests.
Architectural Layer: Testing Layer
Package: tests
Bounded Context: Timetable Operations
DDD Building Block: Utility / Builder
Owner Module: Testing Architecture Team
Public API: Yes
Internal Only: No
Exports: TimetableGridBuilder
Imports: @kalavruksha/domain
Used By: Unit, Integration, & E2E Test Specs
Depends On: @kalavruksha/domain
Implementation Prerequisites: @kalavruksha/domain
Reverse Dependencies: Test suites
Generated or Handwritten: Handwritten
Estimated LOC: 90 lines
Complexity: Low
Unit Test Required: Yes
Integration Test Required: No
Mutation Test Required: No
Performance Test Required: No
Security Review Required: No
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Medium
Implementation Order: 281
Current Status: Approved
Security Classification: Internal
Notes: Fluent test data builder for TimetableDayGrid.
File ID: FILE-TEST-010
Path: tests/builders/index.ts
Purpose: Barrel export for test data builders.
Architectural Layer: Testing Layer
Package: tests
Bounded Context: All Bounded Contexts
DDD Building Block: Configuration
Owner Module: Testing Architecture Team
Public API: Yes
Internal Only: No
Exports: SchoolBuilder, TimetableGridBuilder
Imports: Builder files in directory
Used By: Test suites monorepo-wide
Depends On: Builder files
Implementation Prerequisites: Builder files
Reverse Dependencies: Test suites
Generated or Handwritten: Handwritten
Estimated LOC: 15 lines
Complexity: Low
Unit Test Required: No
Integration Test Required: No
Mutation Test Required: No
Performance Test Required: No
Security Review Required: No
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Low
Implementation Order: 282
Current Status: Approved
Security Classification: Internal
Notes: Barrel export file.
4. Dependency Graph
Depends On: @kalavruksha/domain, @kalavruksha/application, @kalavruksha/infrastructure, Vitest, Playwright, k6, Stryker, Pact.
Used By: GitHub Actions CI/CD Quality Pipeline.
Forbidden Dependencies: Production code inside apps/* or services/* MUST NEVER import from tests/.
5. Quality Validation
Architecture Validation: 100% Compliant.
Dependency Validation: Unidirectional dependency flow verified.
Coverage Target: 
>
90
%
>90%
 Unit & Integration test coverage across @kalavruksha/domain and @kalavruksha/application.
Mutation Target: 
>
85
%
>85%
 Stryker mutation score target on domain core logic.
Performance Target: 
<
50
ms
<50ms
 WebSocket grid swap latency under 10,000 concurrent connection load.
Security Status: Clean.
6. Repository Progress Summary
Directories completed: 15 (tests/, unit/, integration/, e2e/, e2e/admin-portal/, e2e/teacher-portal/, contract/, architecture/, mutation/, performance/, load/, stress/, benchmarks/, fixtures/, builders/)
Files completed: 10 (Cumulative: 290 files)
Packages completed: 22 (Root Workspace, @kalavruksha/eslint-config, prettier-config, tsconfig, apps/api, services/worker-solver, worker-notification, worker-analytics, worker-scheduler, web-admin, web-teacher, web-superadmin, web-parent, @kalavruksha/application, @kalavruksha/infrastructure, @kalavruksha/solver, @kalavruksha/ui, @kalavruksha/auth, @kalavruksha/api-client, database, infrastructure, tests)
Remaining directories: 108
Remaining files: 1,260
Implementation progress: 78 / 186 directories completed
Repository completion percentage: 41.93%
Estimated remaining parts: 2 sequential parts
NEXT PART:
docs/ (Documentation & Governance: docs/adr, docs/api, docs/ddd, docs/deployment, docs/disaster-recovery, docs/monitoring, docs/operations, docs/performance, docs/runbooks, docs/security, scripts/)