KALAVRUKSHA ERP — CANONICAL REPOSITORY MANIFEST
PART 2 — Workspace Tooling, IDE, Git Hooks, & CI/CD Pipelines
DIRECTORY SPECIFICATION
Directory Path: tooling/
Purpose: Centralized workspace directory housing shared static analysis rules, code formatting configurations, and TypeScript compiler inheritance presets shared across all applications, worker microservices, and workspace packages.
Architectural Layer: Workspace Tooling
Package: Tooling Workspace (tooling/*)
Bounded Context: N/A (Platform Tooling)
Responsibilities:
Exports ESLint 9 Flat Config static analysis presets (@kalavruksha/eslint-config).
Exports Prettier formatting standard configurations (@kalavruksha/prettier-config).
Exports base TypeScript configuration inheritance presets (@kalavruksha/tsconfig).
Contained Files: None (Directory container)
Contained Directories:
tooling/eslint-config/
tooling/prettier-config/
tooling/tsconfig/
Relationships:
Parent: ./ (Repository Root)
Children: tooling/eslint-config/, tooling/prettier-config/, tooling/tsconfig/
Dependencies: None
Dependents: All apps/*, services/*, packages/*, database/, infrastructure/, tests/*
Implementation Phase: Phase 1 (Tooling Foundation)
Freeze Status: Frozen
Notes: Changes here propagate to all TypeScript builds across the entire monorepo.
DIRECTORY SPECIFICATION
Directory Path: tooling/eslint-config/
Purpose: Package providing shared ESLint 9 Flat Config static analysis rule presets enforcing Clean Architecture 5-tier layer boundaries, strict import types, zero console.log statements, and cognitive complexity caps.
Architectural Layer: Workspace Tooling
Package: @kalavruksha/eslint-config
Bounded Context: N/A
Responsibilities:
Enforces Clean Architecture dependency boundaries via eslint-plugin-boundaries.
Enforces strict import type syntax (import type).
Forbids unhandled promises, unsafe type assertions, and console logging.
Contained Files:
package.json
base.js
react.js
nextjs.js
nestjs.js
README.md
Contained Directories: None
Relationships:
Parent: tooling/
Children: None
Dependencies: ESLint plugins
Dependents: All monorepo applications, services, and packages
Implementation Phase: Phase 1 (Tooling Foundation)
Freeze Status: Frozen
Notes: Modernized for ESLint 9 Flat Config.
File ID: FILE-TOOL-001
Path: tooling/eslint-config/package.json
Purpose: Package manifest for @kalavruksha/eslint-config, registering ESLint 9 Flat Config plugins and exporting configuration subpaths (./base, ./react, ./nextjs, ./nestjs).
Architectural Layer: Tooling
Package: @kalavruksha/eslint-config
Bounded Context: N/A
DDD Building Block: Configuration
Owner Module: Platform Engineering
Public API: Yes (Workspace tooling API)
Internal Only: Yes (Workspace scope)
Exports: Subpath exports for ESLint rules
Imports: None
Used By: All package.json files in workspace
Depends On: ESLint 9, @typescript-eslint/eslint-plugin, eslint-plugin-boundaries, eslint-plugin-unicorn
Implementation Prerequisites: None
Reverse Dependencies: All monorepo packages
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
Expected Change Frequency: Low
Implementation Order: 14
Current Status: Frozen
Security Classification: Internal
Notes: Centralized static analysis package.
File ID: FILE-TOOL-002
Path: tooling/eslint-config/base.js
Purpose: Base ESLint 9 Flat Config rule array enforcing Clean Architecture boundary rules, maximum cognitive complexity (
≤
15
≤15
), max function length (
≤
80
≤80
 lines), strict import type rules, and zero warnings allowed (--max-warnings 0).
Architectural Layer: Tooling
Package: @kalavruksha/eslint-config
Bounded Context: N/A
DDD Building Block: Configuration
Owner Module: Platform Engineering
Public API: Yes
Internal Only: Yes
Exports: Base ESLint configuration array
Imports: @typescript-eslint, eslint-plugin-boundaries, eslint-plugin-unicorn
Used By: All Node.js backend packages, domain core, application layer, infrastructure adapters
Depends On: None
Implementation Prerequisites: tooling/eslint-config/package.json
Reverse Dependencies: All non-React packages
Generated or Handwritten: Handwritten
Estimated LOC: 140 lines
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
Implementation Order: 15
Current Status: Frozen
Security Classification: Internal
Notes: Enforces Clean Architecture boundary import rules at lint time.
File ID: FILE-TOOL-003
Path: tooling/eslint-config/react.js
Purpose: ESLint 9 Flat Config preset for React component packages (packages/ui, packages/api-client), enforcing React Hooks rules, JSX accessibility (eslint-plugin-jsx-a11y), and component display names.
Architectural Layer: Tooling
Package: @kalavruksha/eslint-config
Bounded Context: N/A
DDD Building Block: Configuration
Owner Module: Platform Engineering
Public API: Yes
Internal Only: Yes
Exports: React ESLint configuration array
Imports: ./base.js, eslint-plugin-react, eslint-plugin-react-hooks, eslint-plugin-jsx-a11y
Used By: packages/ui, packages/api-client
Depends On: tooling/eslint-config/base.js
Implementation Prerequisites: tooling/eslint-config/base.js
Reverse Dependencies: React library packages
Generated or Handwritten: Handwritten
Estimated LOC: 65 lines
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
Implementation Order: 16
Current Status: Frozen
Security Classification: Internal
Notes: Guarantees WCAG 2.1 AA accessibility compliance across React components.
File ID: FILE-TOOL-004
Path: tooling/eslint-config/nextjs.js
Purpose: ESLint 9 Flat Config preset for Next.js 14 App Router web applications (apps/web-*), extending React rules with Next.js specific image, font, and server component constraints.
Architectural Layer: Tooling
Package: @kalavruksha/eslint-config
Bounded Context: N/A
DDD Building Block: Configuration
Owner Module: Platform Engineering
Public API: Yes
Internal Only: Yes
Exports: Next.js ESLint configuration array
Imports: ./react.js, @next/eslint-plugin-next
Used By: All apps/web-* applications
Depends On: tooling/eslint-config/react.js
Implementation Prerequisites: tooling/eslint-config/react.js
Reverse Dependencies: Next.js applications
Generated or Handwritten: Handwritten
Estimated LOC: 50 lines
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
Implementation Order: 17
Current Status: Frozen
Security Classification: Internal
Notes: Optimizes Next.js App Router static analysis.
File ID: FILE-TOOL-005
Path: tooling/eslint-config/nestjs.js
Purpose: ESLint 9 Flat Config preset for NestJS REST/WebSocket API gateways (apps/api, apps/mobile-api), enforcing NestJS module injection standards, decorator placement, and route documentation.
Architectural Layer: Tooling
Package: @kalavruksha/eslint-config
Bounded Context: N/A
DDD Building Block: Configuration
Owner Module: Platform Engineering
Public API: Yes
Internal Only: Yes
Exports: NestJS ESLint configuration array
Imports: ./base.js
Used By: apps/api, apps/mobile-api
Depends On: tooling/eslint-config/base.js
Implementation Prerequisites: tooling/eslint-config/base.js
Reverse Dependencies: NestJS backend applications
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
Versioning Strategy: Static
Expected Change Frequency: Low
Implementation Order: 18
Current Status: Frozen
Security Classification: Internal
Notes: Enforces NestJS architectural purity.
File ID: FILE-TOOL-006
Path: tooling/eslint-config/README.md
Purpose: Documentation for @kalavruksha/eslint-config detailing rules, preset usage, and Clean Architecture boundary enforcement settings.
Architectural Layer: Documentation
Package: @kalavruksha/eslint-config
Bounded Context: N/A
DDD Building Block: Documentation
Owner Module: Platform Engineering
Public API: Yes
Internal Only: No
Exports: Documentation text
Imports: None
Used By: Developers
Depends On: None
Implementation Prerequisites: None
Reverse Dependencies: None
Generated or Handwritten: Handwritten
Estimated LOC: 50 lines
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
Implementation Order: 19
Current Status: Frozen
Security Classification: Public
PACKAGE METADATA: @kalavruksha/eslint-config
Package Dependency Graph: @kalavruksha/eslint-config 
→
→
 ESLint 9 plugins (No internal workspace package dependencies).
Allowed Imports: ESLint plugins, @typescript-eslint/*.
Forbidden Imports: All @kalavruksha/* workspace packages (Tooling must remain independent).
Public Surface: ./base, ./react, ./nextjs, ./nestjs.
Internal Surface: None.
Barrel Export Rules: Subpath exports defined in package.json.
Layer Validation: Tooling Layer (Level 0).
Circular Dependency Status: Clean (Zero circular dependencies).
QUALITY VALIDATION: @kalavruksha/eslint-config
Architecture Validation: 100% Compliant
Dependency Validation: 100% Compliant
Boundary Validation: 100% Compliant
Type Safety: N/A (JavaScript Config)
Coverage Target: N/A
Mutation Target: N/A
Performance Target: 
<
1.5
s
<1.5s
 execution time across monorepo
Static Analysis Status: Clean
Security Status: Clean
DIRECTORY SPECIFICATION
Directory Path: tooling/prettier-config/
Purpose: Package providing shared Prettier formatting rules and Tailwind CSS class sorting plugins across all monorepo assets.
Architectural Layer: Workspace Tooling
Package: @kalavruksha/prettier-config
Bounded Context: N/A
Responsibilities:
Exports standardized Prettier configuration object.
Configures Tailwind CSS class sorting via prettier-plugin-tailwindcss.
Contained Files:
package.json
index.js
README.md
Contained Directories: None
Relationships:
Parent: tooling/
Children: None
Dependencies: Prettier plugins
Dependents: All monorepo workspace modules
Implementation Phase: Phase 1 (Tooling Foundation)
Freeze Status: Frozen
Notes: Enforces Unix LF line endings and 100-character line width.
File ID: FILE-TOOL-007
Path: tooling/prettier-config/package.json
Purpose: Package manifest for @kalavruksha/prettier-config, registering prettier-plugin-tailwindcss and exporting configuration subpaths.
Architectural Layer: Tooling
Package: @kalavruksha/prettier-config
Bounded Context: N/A
DDD Building Block: Configuration
Owner Module: Platform Engineering
Public API: Yes
Internal Only: Yes
Exports: ./index.js
Imports: None
Used By: Monorepo root package.json, Husky hooks
Depends On: Prettier, prettier-plugin-tailwindcss
Implementation Prerequisites: None
Reverse Dependencies: All workspace formatting commands
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
Versioning Strategy: Workspace Version (1.0.0)
Expected Change Frequency: Low
Implementation Order: 20
Current Status: Frozen
Security Classification: Internal
File ID: FILE-TOOL-008
Path: tooling/prettier-config/index.js
Purpose: Prettier formatting configuration enforcing printWidth: 100, tabWidth: 2, single quotes, trailing commas (all), Unix LF line endings, and custom class merger functions (cn, clsx, cva).
Architectural Layer: Tooling
Package: @kalavruksha/prettier-config
Bounded Context: N/A
DDD Building Block: Configuration
Owner Module: Platform Engineering
Public API: Yes
Internal Only: Yes
Exports: Prettier config object
Imports: prettier-plugin-tailwindcss
Used By: All monorepo formatting scripts
Depends On: None
Implementation Prerequisites: tooling/prettier-config/package.json
Reverse Dependencies: Monorepo code formatter
Generated or Handwritten: Handwritten
Estimated LOC: 40 lines
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
Implementation Order: 21
Current Status: Frozen
Security Classification: Internal
File ID: FILE-TOOL-009
Path: tooling/prettier-config/README.md
Purpose: Documentation for @kalavruksha/prettier-config detailing code formatting guidelines.
Architectural Layer: Documentation
Package: @kalavruksha/prettier-config
Bounded Context: N/A
DDD Building Block: Documentation
Owner Module: Platform Engineering
Public API: Yes
Internal Only: No
Exports: None
Imports: None
Used By: Developers
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
Security Review Required: No
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Low
Implementation Order: 22
Current Status: Frozen
Security Classification: Public
PACKAGE METADATA: @kalavruksha/prettier-config
Package Dependency Graph: @kalavruksha/prettier-config 
→
→
 prettier-plugin-tailwindcss.
Allowed Imports: Prettier plugins.
Forbidden Imports: All @kalavruksha/* workspace packages.
Public Surface: index.js.
Internal Surface: None.
Barrel Export Rules: Exported via package.json.
Layer Validation: Tooling Layer.
Circular Dependency Status: Clean.
QUALITY VALIDATION: @kalavruksha/prettier-config
Architecture Validation: 100% Compliant
Dependency Validation: 100% Compliant
Boundary Validation: 100% Compliant
Type Safety: N/A
Coverage Target: N/A
Mutation Target: N/A
Performance Target: Instant format evaluation
Static Analysis Status: Clean
Security Status: Clean
DIRECTORY SPECIFICATION
Directory Path: tooling/tsconfig/
Purpose: Package providing inheritable base TypeScript configurations for Node.js backend services, Next.js web applications, NestJS gateways, React libraries, and Vitest test suites.
Architectural Layer: Workspace Tooling
Package: @kalavruksha/tsconfig
Bounded Context: N/A
Responsibilities:
Exports base strict compiler options (base.json).
Exports build preset supporting composite project references (build.json).
Exports target-specific presets (nextjs.json, nestjs.json, react-library.json, node-library.json, vitest.json).
Contained Files:
package.json
base.json
build.json
nextjs.json
nestjs.json
react-library.json
node-library.json
vitest.json
README.md
Contained Directories: None
Relationships:
Parent: tooling/
Children: None
Dependencies: None
Dependents: All tsconfig.json files monorepo-wide
Implementation Phase: Phase 1 (Tooling Foundation)
Freeze Status: Frozen
Notes: Enforces noImplicitAny: true, strictNullChecks: true, exactOptionalPropertyTypes: true, noUncheckedIndexedAccess: true.
File ID: FILE-TOOL-010
Path: tooling/tsconfig/package.json
Purpose: Package manifest for @kalavruksha/tsconfig, exporting configuration json presets.
Architectural Layer: Tooling
Package: @kalavruksha/tsconfig
Bounded Context: N/A
DDD Building Block: Configuration
Owner Module: Platform Engineering
Public API: Yes
Internal Only: Yes
Exports: Subpath json exports for tsconfig presets
Imports: None
Used By: All workspace tsconfig.json files
Depends On: None
Implementation Prerequisites: None
Reverse Dependencies: TypeScript compiler across all projects
Generated or Handwritten: Handwritten
Estimated LOC: 35 lines
Complexity: Low
Unit Test Required: No
Integration Test Required: No
Mutation Test Required: No
Performance Test Required: No
Security Review Required: Yes
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Workspace Version (1.0.0)
Expected Change Frequency: Low
Implementation Order: 23
Current Status: Frozen
Security Classification: Internal
File ID: FILE-TOOL-011
Path: tooling/tsconfig/base.json
Purpose: Base TypeScript compiler configuration preset enforcing strict type checking, ES2022 output, NodeNext module resolution, and path aliases.
Architectural Layer: Tooling
Package: @kalavruksha/tsconfig
Bounded Context: N/A
DDD Building Block: Configuration
Owner Module: Platform Engineering
Public API: Yes
Internal Only: Yes
Exports: Base compiler options
Imports: None
Used By: All other tsconfig presets
Depends On: None
Implementation Prerequisites: tooling/tsconfig/package.json
Reverse Dependencies: All tsconfig presets
Generated or Handwritten: Handwritten
Estimated LOC: 45 lines
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
Implementation Order: 24
Current Status: Frozen
Security Classification: Internal
File ID: FILE-TOOL-012
Path: tooling/tsconfig/build.json
Purpose: Build-specific TypeScript preset enabling composite: true, declaration: true, declarationMap: true, sourceMap: true, and .tsbuildinfo incremental build outputs.
Architectural Layer: Tooling
Package: @kalavruksha/tsconfig
Bounded Context: N/A
DDD Building Block: Configuration
Owner Module: Platform Engineering
Public API: Yes
Internal Only: Yes
Exports: Build compiler options
Imports: ./base.json
Used By: Production build tasks
Depends On: tooling/tsconfig/base.json
Implementation Prerequisites: tooling/tsconfig/base.json
Reverse Dependencies: All build pipelines
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
Implementation Order: 25
Current Status: Frozen
Security Classification: Internal
File ID: FILE-TOOL-013
Path: tooling/tsconfig/nextjs.json
Purpose: TypeScript preset tailored for Next.js 14 App Router applications (apps/web-*), configuring DOM libraries and Next.js plugin type-checking.
Architectural Layer: Tooling
Package: @kalavruksha/tsconfig
Bounded Context: N/A
DDD Building Block: Configuration
Owner Module: Platform Engineering
Public API: Yes
Internal Only: Yes
Exports: Next.js compiler options
Imports: ./base.json
Used By: All apps/web-*/tsconfig.json files
Depends On: tooling/tsconfig/base.json
Implementation Prerequisites: tooling/tsconfig/base.json
Reverse Dependencies: Next.js applications
Generated or Handwritten: Handwritten
Estimated LOC: 30 lines
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
Implementation Order: 26
Current Status: Frozen
Security Classification: Internal
File ID: FILE-TOOL-014
Path: tooling/tsconfig/nestjs.json
Purpose: TypeScript preset tailored for NestJS backend applications (apps/api, apps/mobile-api), enabling experimental decorators and metadata emission.
Architectural Layer: Tooling
Package: @kalavruksha/tsconfig
Bounded Context: N/A
DDD Building Block: Configuration
Owner Module: Platform Engineering
Public API: Yes
Internal Only: Yes
Exports: NestJS compiler options
Imports: ./base.json
Used By: apps/api, apps/mobile-api
Depends On: tooling/tsconfig/base.json
Implementation Prerequisites: tooling/tsconfig/base.json
Reverse Dependencies: NestJS backend applications
Generated or Handwritten: Handwritten
Estimated LOC: 30 lines
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
Implementation Order: 27
Current Status: Frozen
Security Classification: Internal
File ID: FILE-TOOL-015
Path: tooling/tsconfig/react-library.json
Purpose: TypeScript preset for React component libraries (packages/ui), configuring react-jsx and DOM typings.
Architectural Layer: Tooling
Package: @kalavruksha/tsconfig
Bounded Context: N/A
DDD Building Block: Configuration
Owner Module: Platform Engineering
Public API: Yes
Internal Only: Yes
Exports: React library compiler options
Imports: ./base.json
Used By: packages/ui/tsconfig.json
Depends On: tooling/tsconfig/base.json
Implementation Prerequisites: tooling/tsconfig/base.json
Reverse Dependencies: React shared packages
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
Implementation Order: 28
Current Status: Frozen
Security Classification: Internal
File ID: FILE-TOOL-016
Path: tooling/tsconfig/node-library.json
Purpose: TypeScript preset for pure Node.js backend libraries (packages/domain, packages/application, packages/infrastructure, packages/solver), stripping DOM libraries to prevent window/document usage in backend code.
Architectural Layer: Tooling
Package: @kalavruksha/tsconfig
Bounded Context: N/A
DDD Building Block: Configuration
Owner Module: Platform Engineering
Public API: Yes
Internal Only: Yes
Exports: Node library compiler options
Imports: ./base.json
Used By: All backend shared packages
Depends On: tooling/tsconfig/base.json
Implementation Prerequisites: tooling/tsconfig/base.json
Reverse Dependencies: Backend shared packages
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
Implementation Order: 29
Current Status: Frozen
Security Classification: Internal
File ID: FILE-TOOL-017
Path: tooling/tsconfig/vitest.json
Purpose: TypeScript preset for Vitest unit/integration test files, enabling test globals (describe, it, expect).
Architectural Layer: Tooling
Package: @kalavruksha/tsconfig
Bounded Context: N/A
DDD Building Block: Configuration
Owner Module: Platform Engineering
Public API: Yes
Internal Only: Yes
Exports: Vitest test compiler options
Imports: ./base.json
Used By: Test suites across all packages
Depends On: tooling/tsconfig/base.json
Implementation Prerequisites: tooling/tsconfig/base.json
Reverse Dependencies: Vitest test files
Generated or Handwritten: Handwritten
Estimated LOC: 20 lines
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
Implementation Order: 30
Current Status: Frozen
Security Classification: Internal
File ID: FILE-TOOL-018
Path: tooling/tsconfig/README.md
Purpose: Documentation for @kalavruksha/tsconfig detailing compiler options inheritance rules.
Architectural Layer: Documentation
Package: @kalavruksha/tsconfig
Bounded Context: N/A
DDD Building Block: Documentation
Owner Module: Platform Engineering
Public API: Yes
Internal Only: No
Exports: None
Imports: None
Used By: Developers
Depends On: None
Implementation Prerequisites: None
Reverse Dependencies: None
Generated or Handwritten: Handwritten
Estimated LOC: 40 lines
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
Implementation Order: 31
Current Status: Frozen
Security Classification: Public
PACKAGE METADATA: @kalavruksha/tsconfig
Package Dependency Graph: @kalavruksha/tsconfig (Independent root config package).
Allowed Imports: None.
Forbidden Imports: All @kalavruksha/* workspace packages.
Public Surface: base.json, build.json, nextjs.json, nestjs.json, react-library.json, node-library.json, vitest.json.
Internal Surface: None.
Barrel Export Rules: Subpath JSON exports defined in package.json.
Layer Validation: Tooling Layer.
Circular Dependency Status: Clean.
QUALITY VALIDATION: @kalavruksha/tsconfig
Architecture Validation: 100% Compliant
Dependency Validation: 100% Compliant
Boundary Validation: 100% Compliant
Type Safety: Strict Compiler Presets
Coverage Target: N/A
Mutation Target: N/A
Performance Target: Instant compilation
Static Analysis Status: Clean
Security Status: Clean
PART SUMMARY
Directories completed: 4 (tooling/, tooling/eslint-config/, tooling/prettier-config/, tooling/tsconfig/)
Files completed: 31 (Cumulative: 44 files)
Packages completed: 4 (Root Workspace, @kalavruksha/eslint-config, @kalavruksha/prettier-config, @kalavruksha/tsconfig)
Remaining directories: 182
Remaining files: 1,456
Implementation progress: 5 / 186 directories completed
Repository completion percentage: 2.68%
Estimated remaining parts: 12 sequential parts
NEXT PART:
apps/api/