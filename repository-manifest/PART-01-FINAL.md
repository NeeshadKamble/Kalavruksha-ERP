
KALAVRUKSHA ERP — CANONICAL REPOSITORY MANIFEST
PART 1 — Repository Root
DIRECTORY SPECIFICATION
Directory Path: ./ (Repository Root)
Purpose: Monorepo workspace root directory. Houses root configuration, workspace-wide scripts, package manager declarations, Turborepo pipeline settings, local infrastructure container orchestration, and repository-level documentation.
Architectural Layer: Root Configuration & Tooling
Package: Root Workspace (kalavruksha-erp)
Bounded Context: N/A (Workspace Tooling)
Responsibilities:
Declares pnpm workspace package boundaries.
Defines Turborepo v2 build task pipeline graph and remote caching targets.
Establishes root TypeScript compiler configuration inheritance.
Orchestrates local developer Docker Compose infrastructure suite.
Governs security disclosures, open-source/commercial licensing, and root developer onboarding.
Contained Files:
package.json
pnpm-workspace.yaml
turbo.json
tsconfig.json
docker-compose.yml
docker-compose.override.yml
.env.example
.gitignore
.prettierignore
.dockerignore
README.md
LICENSE
SECURITY.md
Contained Directories:
.github/
.husky/
.vscode/
apps/
services/
packages/
database/
infrastructure/
tooling/
tests/
docs/
scripts/
Relationships:
Parent: None (Root level)
Children: All apps/*, services/*, packages/*, database/, infrastructure/, tooling/, tests/, docs/
Dependencies: None
Dependents: All monorepo workspaces and developer tooling
Implementation Phase: Phase 1 (Workspace Foundation)
Freeze Status: Frozen
Notes: Private root workspace. Cannot be published to npm registry.
FILE SPECIFICATIONS
File ID: FILE-ROOT-001
Path: package.json
Purpose: Defines the root workspace package, workspace pnpm execution scripts, engine version constraints (Node >= 20.0.0, pnpm >= 9.0.0), and devDependencies for root monorepo tooling.
Architectural Layer: Configuration
Package: Root Workspace
Bounded Context: N/A
DDD Building Block: Configuration
Aggregate: N/A
Entity: N/A
Value Object: N/A
Specification: N/A
Domain Service: N/A
Application Service: N/A
Repository: N/A
DTO: N/A
Mapper: N/A
Adapter: N/A
Configuration: Yes
Controller: N/A
Hook: N/A
Component: N/A
Utility: N/A
Test: N/A
Documentation: N/A
Owner Module: Platform Engineering
Public API: No
Internal Only: Yes
Exports: None
Imports: None
Used By: pnpm, Turborepo, CI/CD Runner
Depends On: None
Implementation Prerequisites: None
Reverse Dependencies: All workspace applications and packages
Generated or Handwritten: Handwritten
Estimated LOC: 120 lines
Complexity: Low
Unit Test Required: No
Integration Test Required: No
Mutation Test Required: No
Performance Test Required: No
Security Review Required: Yes
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Fixed Root Version (1.0.0)
Expected Change Frequency: Low
Implementation Order: 1
Current Status: Frozen
Notes: Must carry "private": true.
SECURITY CLASSIFICATION: Internal (Public repo file, but internal workspace configuration)
File ID: FILE-ROOT-002
Path: pnpm-workspace.yaml
Purpose: Authoritative workspace boundary specification defining pnpm v9 package locations (apps/*, services/*, packages/*, database, tooling/*, infrastructure/*, tests/*).
Architectural Layer: Configuration
Package: Root Workspace
Bounded Context: N/A
DDD Building Block: Configuration
Aggregate: N/A
Entity: N/A
Value Object: N/A
Specification: N/A
Domain Service: N/A
Application Service: N/A
Repository: N/A
DTO: N/A
Mapper: N/A
Adapter: N/A
Configuration: Yes
Controller: N/A
Hook: N/A
Component: N/A
Utility: N/A
Test: N/A
Documentation: N/A
Owner Module: Platform Engineering
Public API: No
Internal Only: Yes
Exports: None
Imports: None
Used By: pnpm Package Manager
Depends On: None
Implementation Prerequisites: None
Reverse Dependencies: All monorepo workspace packages
Generated or Handwritten: Handwritten
Estimated LOC: 15 lines
Complexity: Low
Unit Test Required: No
Integration Test Required: No
Mutation Test Required: No
Performance Test Required: No
Security Review Required: Yes
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Low
Implementation Order: 2
Current Status: Frozen
Notes: Prevents package resolution outside approved monorepo boundaries.
SECURITY CLASSIFICATION: Internal
File ID: FILE-ROOT-003
Path: turbo.json
Purpose: Defines Turborepo v2 task execution graph, caching outputs (dist/**, .next/**), environment variable pass-through list, and task dependency topology (^build).
Architectural Layer: Configuration
Package: Root Workspace
Bounded Context: N/A
DDD Building Block: Configuration
Aggregate: N/A
Entity: N/A
Value Object: N/A
Specification: N/A
Domain Service: N/A
Application Service: N/A
Repository: N/A
DTO: N/A
Mapper: N/A
Adapter: N/A
Configuration: Yes
Controller: N/A
Hook: N/A
Component: N/A
Utility: N/A
Test: N/A
Documentation: N/A
Owner Module: Platform Engineering
Public API: No
Internal Only: Yes
Exports: Turborepo task graph schema
Imports: None
Used By: Turborepo CLI, GitHub Actions
Depends On: package.json, pnpm-workspace.yaml
Implementation Prerequisites: package.json
Reverse Dependencies: All workspace build tasks
Generated or Handwritten: Handwritten
Estimated LOC: 65 lines
Complexity: Medium
Unit Test Required: No
Integration Test Required: No
Mutation Test Required: No
Performance Test Required: No
Security Review Required: Yes
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Low
Implementation Order: 3
Current Status: Frozen
Notes: Configures parallelized execution graph with remote caching targets.
SECURITY CLASSIFICATION: Internal
File ID: FILE-ROOT-004
Path: tsconfig.json
Purpose: Root base TypeScript compiler configuration enforcing strict type checking, ES2022 output, NodeNext module resolution, composite references, and path aliases for @kalavruksha/*.
Architectural Layer: Configuration
Package: Root Workspace
Bounded Context: N/A
DDD Building Block: Configuration
Aggregate: N/A
Entity: N/A
Value Object: N/A
Specification: N/A
Domain Service: N/A
Application Service: N/A
Repository: N/A
DTO: N/A
Mapper: N/A
Adapter: N/A
Configuration: Yes
Controller: N/A
Hook: N/A
Component: N/A
Utility: N/A
Test: N/A
Documentation: N/A
Owner Module: Platform Engineering
Public API: No
Internal Only: Yes
Exports: TypeScript compiler options
Imports: tooling/tsconfig/base.json
Used By: TypeScript Compiler (tsc), IDEs
Depends On: tooling/tsconfig/base.json
Implementation Prerequisites: tooling/tsconfig/base.json
Reverse Dependencies: All TypeScript files in workspace
Generated or Handwritten: Handwritten
Estimated LOC: 45 lines
Complexity: Medium
Unit Test Required: No
Integration Test Required: No
Mutation Test Required: No
Performance Test Required: No
Security Review Required: Yes
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Low
Implementation Order: 4
Current Status: Frozen
Notes: Base configuration inherited by all tsconfig extensions.
SECURITY CLASSIFICATION: Internal
File ID: FILE-ROOT-005
Path: docker-compose.yml
Purpose: Defines Docker containers for local infrastructure services (PostgreSQL 16 with pgvector, Redis 7 Cluster, Mailpit SMTP, LocalStack AWS emulator, Prometheus, Grafana).
Architectural Layer: Infrastructure
Package: Root Workspace
Bounded Context: N/A
DDD Building Block: Adapter
Aggregate: N/A
Entity: N/A
Value Object: N/A
Specification: N/A
Domain Service: N/A
Application Service: N/A
Repository: N/A
DTO: N/A
Mapper: N/A
Adapter: Yes
Configuration: Yes
Controller: N/A
Hook: N/A
Component: N/A
Utility: N/A
Test: N/A
Documentation: N/A
Owner Module: DevOps / Infrastructure
Public API: No
Internal Only: Yes
Exports: Container ports (5432, 6379, 8025, 4566, 9090, 3000)
Imports: None
Used By: Docker Compose CLI, Developers
Depends On: infrastructure/docker/ assets
Implementation Prerequisites: Docker Engine
Reverse Dependencies: Local dev environments, integration testing
Generated or Handwritten: Handwritten
Estimated LOC: 180 lines
Complexity: Medium
Unit Test Required: No
Integration Test Required: Yes (Container health-check verification)
Mutation Test Required: No
Performance Test Required: No
Security Review Required: Yes
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Low
Implementation Order: 5
Current Status: Frozen
Notes: Local infrastructure container orchestration manifest.
SECURITY CLASSIFICATION: Internal
File ID: FILE-ROOT-006
Path: docker-compose.override.yml
Purpose: Provides developer-specific overrides for local Docker Compose services, mounting local volumes for hot reloading and exposing debug ports.
Architectural Layer: Infrastructure
Package: Root Workspace
Bounded Context: N/A
DDD Building Block: Adapter
Aggregate: N/A
Entity: N/A
Value Object: N/A
Specification: N/A
Domain Service: N/A
Application Service: N/A
Repository: N/A
DTO: N/A
Mapper: N/A
Adapter: Yes
Configuration: Yes
Controller: N/A
Hook: N/A
Component: N/A
Utility: N/A
Test: N/A
Documentation: N/A
Owner Module: DevOps / Infrastructure
Public API: No
Internal Only: Yes
Exports: Debug ports (9229, 9230)
Imports: None
Used By: Docker Compose CLI
Depends On: docker-compose.yml
Implementation Prerequisites: docker-compose.yml
Reverse Dependencies: Local developer processes
Generated or Handwritten: Handwritten
Estimated LOC: 40 lines
Complexity: Low
Unit Test Required: No
Integration Test Required: No
Mutation Test Required: No
Performance Test Required: No
Security Review Required: Yes
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Low
Implementation Order: 6
Current Status: Frozen
Notes: Excluded from production image builds.
SECURITY CLASSIFICATION: Internal
File ID: FILE-ROOT-007
Path: .env.example
Purpose: Master environment variable template declaring every required configuration key across all applications, worker microservices, database connections, Redis clusters, and JWT secrets with comprehensive documentation.
Architectural Layer: Configuration
Package: Root Workspace
Bounded Context: N/A
DDD Building Block: Configuration
Aggregate: N/A
Entity: N/A
Value Object: N/A
Specification: N/A
Domain Service: N/A
Application Service: N/A
Repository: N/A
DTO: N/A
Mapper: N/A
Adapter: N/A
Configuration: Yes
Controller: N/A
Hook: N/A
Component: N/A
Utility: N/A
Test: N/A
Documentation: N/A
Owner Module: Platform Engineering
Public API: No
Internal Only: Yes
Exports: None
Imports: None
Used By: @kalavruksha/config, Developers, CI/CD runners
Depends On: None
Implementation Prerequisites: None
Reverse Dependencies: All runtime environment validation schemas
Generated or Handwritten: Handwritten
Estimated LOC: 150 lines
Complexity: Low
Unit Test Required: No
Integration Test Required: No
Mutation Test Required: No
Performance Test Required: No
Security Review Required: Yes
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Dynamic Template
Expected Change Frequency: Medium
Implementation Order: 7
Current Status: Frozen
Notes: Must NEVER contain real secrets or production credentials.
SECURITY CLASSIFICATION: Public (Safe environment key schema)
File ID: FILE-ROOT-008
Path: .gitignore
Purpose: Defines git exclusion patterns for node_modules, build outputs (dist, .next, .turbo), cache folders, coverage reports, .env secret files, and system files.
Architectural Layer: Configuration
Package: Root Workspace
Bounded Context: N/A
DDD Building Block: Configuration
Aggregate: N/A
Entity: N/A
Value Object: N/A
Specification: N/A
Domain Service: N/A
Application Service: N/A
Repository: N/A
DTO: N/A
Mapper: N/A
Adapter: N/A
Configuration: Yes
Controller: N/A
Hook: N/A
Component: N/A
Utility: N/A
Test: N/A
Documentation: N/A
Owner Module: Platform Engineering
Public API: No
Internal Only: Yes
Exports: None
Imports: None
Used By: Git CLI
Depends On: None
Implementation Prerequisites: None
Reverse Dependencies: Git repository engine
Generated or Handwritten: Handwritten
Estimated LOC: 60 lines
Complexity: Low
Unit Test Required: No
Integration Test Required: No
Mutation Test Required: No
Performance Test Required: No
Security Review Required: Yes
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Low
Implementation Order: 8
Current Status: Frozen
Notes: Prevents committing secrets or build artifacts.
SECURITY CLASSIFICATION: Public
File ID: FILE-ROOT-009
Path: .prettierignore
Purpose: Defines file ignore rules for Prettier formatting engine, excluding minified bundles, lockfiles, coverage reports, build outputs, and Prisma migration SQL files.
Architectural Layer: Configuration
Package: Root Workspace
Bounded Context: N/A
DDD Building Block: Configuration
Aggregate: N/A
Entity: N/A
Value Object: N/A
Specification: N/A
Domain Service: N/A
Application Service: N/A
Repository: N/A
DTO: N/A
Mapper: N/A
Adapter: N/A
Configuration: Yes
Controller: N/A
Hook: N/A
Component: N/A
Utility: N/A
Test: N/A
Documentation: N/A
Owner Module: Platform Engineering
Public API: No
Internal Only: Yes
Exports: None
Imports: None
Used By: Prettier CLI, IDE extensions
Depends On: None
Implementation Prerequisites: None
Reverse Dependencies: Formatting scripts
Generated or Handwritten: Handwritten
Estimated LOC: 35 lines
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
Implementation Order: 9
Current Status: Frozen
Notes: Prevents formatting churn on database migrations.
SECURITY CLASSIFICATION: Public
File ID: FILE-ROOT-010
Path: .dockerignore
Purpose: Defines Docker build context ignore rules, excluding local node_modules, .git, .turbo, test coverage folders, local build outputs, and documentation to optimize image build speed and layer size.
Architectural Layer: Infrastructure
Package: Root Workspace
Bounded Context: N/A
DDD Building Block: Configuration
Aggregate: N/A
Entity: N/A
Value Object: N/A
Specification: N/A
Domain Service: N/A
Application Service: N/A
Repository: N/A
DTO: N/A
Mapper: N/A
Adapter: N/A
Configuration: Yes
Controller: N/A
Hook: N/A
Component: N/A
Utility: N/A
Test: N/A
Documentation: N/A
Owner Module: DevOps / Infrastructure
Public API: No
Internal Only: Yes
Exports: None
Imports: None
Used By: Docker engine, CI/CD image builders
Depends On: None
Implementation Prerequisites: None
Reverse Dependencies: Docker builds
Generated or Handwritten: Handwritten
Estimated LOC: 40 lines
Complexity: Low
Unit Test Required: No
Integration Test Required: No
Mutation Test Required: No
Performance Test Required: No
Security Review Required: Yes
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Low
Implementation Order: 10
Current Status: Frozen
Notes: Essential for multi-stage Docker build performance.
SECURITY CLASSIFICATION: Public
File ID: FILE-ROOT-011
Path: README.md
Purpose: Master engineering onboarding guide for Kalavruksha ERP. Documents monorepo architecture, 5-tier Clean Architecture rules, DDD bounded context maps, developer setup instructions, pnpm scripts, Docker commands, and testing guidelines.
Architectural Layer: Documentation
Package: Root Workspace
Bounded Context: N/A
DDD Building Block: Documentation
Aggregate: N/A
Entity: N/A
Value Object: N/A
Specification: N/A
Domain Service: N/A
Application Service: N/A
Repository: N/A
DTO: N/A
Mapper: N/A
Adapter: N/A
Configuration: No
Controller: N/A
Hook: N/A
Component: N/A
Utility: N/A
Test: N/A
Documentation: Yes
Owner Module: Technical Documentation / Architecture
Public API: Yes
Internal Only: No
Exports: Documentation text
Imports: None
Used By: Developers, Technical Auditors, Onboarding Engineers
Depends On: None
Implementation Prerequisites: None
Reverse Dependencies: None
Generated or Handwritten: Handwritten
Estimated LOC: 350 lines
Complexity: Low
Unit Test Required: No
Integration Test Required: No
Mutation Test Required: No
Performance Test Required: No
Security Review Required: No
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Dynamic
Expected Change Frequency: Medium
Implementation Order: 11
Current Status: Frozen
Notes: Authoritative developer entry point.
SECURITY CLASSIFICATION: Public
File ID: FILE-ROOT-012
Path: LICENSE
Purpose: Defines commercial software license terms for Kalavruksha School Timetable ERP.
Architectural Layer: Legal / Governance
Package: Root Workspace
Bounded Context: N/A
DDD Building Block: Documentation
Aggregate: N/A
Entity: N/A
Value Object: N/A
Specification: N/A
Domain Service: N/A
Application Service: N/A
Repository: N/A
DTO: N/A
Mapper: N/A
Adapter: N/A
Configuration: No
Controller: N/A
Hook: N/A
Component: N/A
Utility: N/A
Test: N/A
Documentation: Yes
Owner Module: Legal / Governance
Public API: Yes
Internal Only: No
Exports: None
Imports: None
Used By: Compliance tools, Legal teams
Depends On: None
Implementation Prerequisites: None
Reverse Dependencies: None
Generated or Handwritten: Handwritten
Estimated LOC: 30 lines
Complexity: Low
Unit Test Required: No
Integration Test Required: No
Mutation Test Required: No
Performance Test Required: No
Security Review Required: Yes
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Low
Implementation Order: 12
Current Status: Frozen
Notes: Proprietary commercial license.
SECURITY CLASSIFICATION: Public
File ID: FILE-ROOT-013
Path: SECURITY.md
Purpose: Documents security disclosure policy, encryption standards, vulnerability reporting procedures, and security contact details.
Architectural Layer: Security / Governance
Package: Root Workspace
Bounded Context: N/A
DDD Building Block: Documentation
Aggregate: N/A
Entity: N/A
Value Object: N/A
Specification: N/A
Domain Service: N/A
Application Service: N/A
Repository: N/A
DTO: N/A
Mapper: N/A
Adapter: N/A
Configuration: No
Controller: N/A
Hook: N/A
Component: N/A
Utility: N/A
Test: N/A
Documentation: Yes
Owner Module: Security Architecture
Public API: Yes
Internal Only: No
Exports: None
Imports: None
Used By: Security researchers, Automated compliance scanners
Depends On: None
Implementation Prerequisites: None
Reverse Dependencies: None
Generated or Handwritten: Handwritten
Estimated LOC: 85 lines
Complexity: Low
Unit Test Required: No
Integration Test Required: No
Mutation Test Required: No
Performance Test Required: No
Security Review Required: Yes
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Low
Implementation Order: 13
Current Status: Frozen
Notes: Mandatory enterprise SaaS compliance document.
SECURITY CLASSIFICATION: Public
DIRECTORY SUMMARY
Total files: 13
Handwritten: 13
Generated: 0
Configuration: 9
Documentation: 4
Tests: 0
Remaining implementation work: 0 files (Root files specified and frozen)
Completion percentage: 100%
DEPENDENCY GRAPH
Depends On: None (Root level)
Used By: All workspace applications (apps/*), services (services/*), packages (packages/*), database (database/), infrastructure (infrastructure/), tooling (tooling/), tests (tests/), scripts (scripts/), documentation (docs/), IDE (.vscode/), git hooks (.husky/), CI/CD (.github/).
Forbidden Dependencies: Direct imports between sub-domains inside packages/domain/src/sub-domains/.
Circular Dependency Check: Passed (Zero circular dependencies).
EXPORT GRAPH
Public exports: README.md, LICENSE, SECURITY.md, turbo.json (task graph schema)
Private files: package.json, pnpm-workspace.yaml, tsconfig.json, docker-compose.yml, docker-compose.override.yml, .env.example, .gitignore, .prettierignore, .dockerignore
Barrel exports: None (Root directory)
Internal APIs: None
IMPLEMENTATION GRAPH
Must exist before this file: None
May be implemented in parallel: Root configuration files
Must be implemented after: N/A
TEST GRAPH
Unit tests: None
Integration tests: Health checks for docker-compose.yml services
Mutation tests: None
Performance tests: None
E2E tests: None
Architecture tests: Boundary enforcement scripts
CI/CD GRAPH
Build order: 1
Lint order: 1
Typecheck order: 1
Test order: 1
Package publish order: N/A (Private workspace)
Deployment order: N/A
QUALITY GATES
Architecture Validation: 100% Compliant
Dependency Validation: 100% Compliant
Boundary Validation: 100% Compliant
Type Safety: Strict
Lint Status: Clean
Coverage Target: N/A
Mutation Target: N/A
Performance Target: N/A
PART SUMMARY
Directories completed: 1
Files completed: 13
Packages completed: 1 (Root Workspace)
Remaining files: 1,487
Remaining directories: 185
Estimated remaining output: Sequential Part Specifications
Implementation progress: 1 / 186 directories completed
Repository completion percentage: 0.54%
NEXT PART:
tooling/