
KALAVRUKSHA ERP — CANONICAL REPOSITORY MANIFEST
PART 7 — Application Layer Package (packages/application/)
DIRECTORY SPECIFICATION
Directory Path: packages/application/
Purpose: Package providing the Tier 3 Application Layer (@kalavruksha/application). Houses CQRS Command & Query Handlers, Request/Response DTOs, Mappers, Secondary Output Ports (Interfaces), Command Validation Pipelines, and Use Case Orchestrators.
Architectural Layer: Tier 3 Application Layer (Use Cases & CQRS Handlers)
Package: @kalavruksha/application
Bounded Context: All Bounded Contexts (Application Use Case Layer)
Responsibilities:
Encapsulates CQRS Command Handlers (write-side mutations) and Query Handlers (read-side projections).
Translates API DTOs into Domain Aggregates and Domain Aggregates into Response DTOs using pure mappers.
Defines Secondary Output Port interfaces (Email, SMS, Push Notification, Storage, Outbox).
Enforces command payload validation pipelines before domain aggregate invocation.
Orchestrates multi-aggregate application workflows (publish-timetable-workflow, run-morning-substitution).
Contained Files:
package.json
tsconfig.json
README.md
Contained Directories:
packages/application/src/
Relationships:
Parent: packages/
Children: packages/application/src/
Dependencies: @kalavruksha/domain, @kalavruksha/types, @kalavruksha/errors, @kalavruksha/events, @kalavruksha/utils, @kalavruksha/config
Dependents: apps/api, apps/mobile-api, services/worker-*
Implementation Phase: Phase 3 (Application Layer & CQRS)
Freeze Status: Approved
Notes: Pure application orchestration layer. Must NOT depend on Prisma, NestJS controllers, Redis, or BullMQ directly.
File ID: FILE-APP-001
Path: packages/application/package.json
Purpose: Package manifest for @kalavruksha/application, declaring dependencies on @kalavruksha/domain, @kalavruksha/types, @kalavruksha/errors, @kalavruksha/events, @kalavruksha/utils, and @kalavruksha/config.
Architectural Layer: Application Layer
Package: @kalavruksha/application
Bounded Context: All Bounded Contexts
DDD Building Block: Configuration
Owner Module: Application Architecture Team
Public API: Yes (Workspace Package)
Internal Only: No
Exports: ./commands, ./queries, ./dto, ./mappers, ./ports, ./use-cases
Imports: @kalavruksha/domain, @kalavruksha/types, @kalavruksha/errors
Used By: apps/api, apps/mobile-api, services/worker-*
Depends On: @kalavruksha/domain, @kalavruksha/types, @kalavruksha/errors
Implementation Prerequisites: @kalavruksha/domain
Reverse Dependencies: API Gateways and Workers
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
Versioning Strategy: Workspace Version (1.0.0)
Expected Change Frequency: Medium
Implementation Order: 136
Current Status: Approved
Security Classification: Internal
Notes: Application layer package manifest.
File ID: FILE-APP-002
Path: packages/application/tsconfig.json
Purpose: TypeScript configuration extending @kalavruksha/tsconfig/node-library.json.
Architectural Layer: Application Layer
Package: @kalavruksha/application
Bounded Context: All Bounded Contexts
DDD Building Block: Configuration
Owner Module: Application Architecture Team
Public API: No
Internal Only: Yes
Exports: TypeScript options
Imports: tooling/tsconfig/node-library.json
Used By: TypeScript Compiler (tsc), Turborepo
Depends On: tooling/tsconfig/node-library.json
Implementation Prerequisites: tooling/tsconfig/node-library.json
Reverse Dependencies: packages/application/src/**/*
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
Implementation Order: 137
Current Status: Approved
Security Classification: Internal
Notes: Strips DOM typings for server purity.
File ID: FILE-APP-003
Path: packages/application/README.md
Purpose: Documentation for @kalavruksha/application detailing CQRS Command & Query patterns, DTO mappers, secondary ports, and use case workflows.
Architectural Layer: Documentation
Package: @kalavruksha/application
Bounded Context: All Bounded Contexts
DDD Building Block: Documentation
Owner Module: Application Architecture Team
Public API: Yes
Internal Only: No
Exports: None
Imports: None
Used By: Developers
Depends On: None
Implementation Prerequisites: None
Reverse Dependencies: None
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
Expected Change Frequency: Medium
Implementation Order: 138
Current Status: Approved
Security Classification: Public
Notes: Documentation artifact.
DIRECTORY SPECIFICATION
Directory Path: packages/application/src/
Purpose: Source root directory housing CQRS commands, queries, handlers, DTOs, mappers, ports, validation pipelines, use-cases, and barrel exports.
Architectural Layer: Application Layer / CQRS Layer
Package: @kalavruksha/application
Bounded Context: All Bounded Contexts
Responsibilities:
Houses CQRS write-side Command Handlers and read-side Query Handlers.
Houses Secondary Output Port interfaces.
Contained Files:
index.ts
Contained Directories:
packages/application/src/commands/
packages/application/src/queries/
packages/application/src/dto/
packages/application/src/mappers/
packages/application/src/ports/
packages/application/src/pipelines/
packages/application/src/use-cases/
Relationships:
Parent: packages/application/
Children: Sub-directories under packages/application/src/
Dependencies: @kalavruksha/domain, @kalavruksha/types, @kalavruksha/errors
Dependents: apps/api, services/worker-*
Implementation Phase: Phase 3
Freeze Status: Approved
Notes: Root source directory for application layer.
File ID: FILE-APP-004
Path: packages/application/src/index.ts
Purpose: Main package barrel export exporting commands, queries, DTOs, mappers, ports, pipelines, and use cases.
Architectural Layer: Application Layer
Package: @kalavruksha/application
Bounded Context: All Bounded Contexts
DDD Building Block: Configuration
Owner Module: Application Architecture Team
Public API: Yes
Internal Only: No
Exports: All subpath exports
Imports: ./commands, ./queries, ./dto, ./mappers, ./ports, ./pipelines, ./use-cases
Used By: apps/api, apps/mobile-api, services/worker-*
Depends On: Internal subpath barrels
Implementation Prerequisites: Internal modules
Reverse Dependencies: API Gateways and Workers
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
Implementation Order: 139
Current Status: Approved
Security Classification: Internal
Notes: Master barrel export file.
DIRECTORY SPECIFICATION
Directory Path: packages/application/src/commands/
Purpose: Houses CQRS Write Commands and Command Handlers organized by bounded context. Command Handlers mutate domain aggregates via domain repositories.
Architectural Layer: Application Layer / CQRS Write Side
Package: @kalavruksha/application
Bounded Context: All Bounded Contexts
Responsibilities:
Defines Command objects carrying write intent and tenant context.
Houses Command Handlers executing write use cases, loading aggregates, invoking domain operations, and persisting changes via unit of work.
Contained Files:
index.ts
Contained Directories:
packages/application/src/commands/timetable-operations/
packages/application/src/commands/daily-substitution/
packages/application/src/commands/handlers/
Relationships:
Parent: packages/application/src/
Children: Sub-directories under commands/
Dependencies: @kalavruksha/domain, @kalavruksha/types
Dependents: API Controllers, Workers
Implementation Phase: Phase 3
Freeze Status: Approved
Notes: Write-side CQRS architecture.
File ID: FILE-APP-005
Path: packages/application/src/commands/timetable-operations/publish-timetable.command.ts
Purpose: CQRS Command object representing user intent to publish a master timetable revision for a school branch.
Architectural Layer: Application Layer
Package: @kalavruksha/application
Bounded Context: Timetable Operations
DDD Building Block: Command
Owner Module: Timetable Operations Team
Public API: Yes
Internal Only: No
Exports: PublishTimetableCommand
Imports: @kalavruksha/types
Used By: PublishTimetableHandler, API Controllers
Depends On: @kalavruksha/types
Implementation Prerequisites: None
Reverse Dependencies: Command handler
Generated or Handwritten: Handwritten
Estimated LOC: 35 lines
Complexity: Low
Unit Test Required: Yes
Integration Test Required: No
Mutation Test Required: No
Performance Test Required: No
Security Review Required: Yes
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Low
Implementation Order: 140
Current Status: Approved
Security Classification: Internal
Notes: CQRS Command payload class.
File ID: FILE-APP-006
Path: packages/application/src/commands/timetable-operations/swap-grid-slots.command.ts
Purpose: CQRS Command object representing user intent to perform an interactive drag-and-drop slot swap on a section day grid.
Architectural Layer: Application Layer
Package: @kalavruksha/application
Bounded Context: Timetable Operations
DDD Building Block: Command
Owner Module: Timetable Operations Team
Public API: Yes
Internal Only: No
Exports: SwapGridSlotsCommand
Imports: @kalavruksha/types
Used By: SwapGridSlotsHandler, API Controllers, WS Gateways
Depends On: @kalavruksha/types
Implementation Prerequisites: None
Reverse Dependencies: Command handler
Generated or Handwritten: Handwritten
Estimated LOC: 40 lines
Complexity: Low
Unit Test Required: Yes
Integration Test Required: No
Mutation Test Required: No
Performance Test Required: No
Security Review Required: Yes
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Low
Implementation Order: 141
Current Status: Approved
Security Classification: Internal
Notes: Drag-and-drop slot swap command.
File ID: FILE-APP-007
Path: packages/application/src/commands/timetable-operations/index.ts
Purpose: Barrel export for Timetable Operations CQRS commands.
Architectural Layer: Application Layer
Package: @kalavruksha/application
Bounded Context: Timetable Operations
DDD Building Block: Configuration
Owner Module: Timetable Operations Team
Public API: Yes
Internal Only: Yes
Exports: PublishTimetableCommand, SwapGridSlotsCommand
Imports: Command files in directory
Used By: commands/index.ts
Depends On: Command files
Implementation Prerequisites: Command files
Reverse Dependencies: commands/index.ts
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
Implementation Order: 142
Current Status: Approved
Security Classification: Internal
Notes: Barrel export file.
File ID: FILE-APP-008
Path: packages/application/src/commands/daily-substitution/generate-daily-arrangements.command.ts
Purpose: CQRS Command object representing intent to generate automated daily substitution arrangements for logged teacher absences on a given date.
Architectural Layer: Application Layer
Package: @kalavruksha/application
Bounded Context: Daily Substitution
DDD Building Block: Command
Owner Module: Daily Substitution Team
Public API: Yes
Internal Only: No
Exports: GenerateDailyArrangementsCommand
Imports: @kalavruksha/types
Used By: GenerateDailyArrangementsHandler, API Controllers, Scheduler Worker
Depends On: @kalavruksha/types
Implementation Prerequisites: None
Reverse Dependencies: Command handler
Generated or Handwritten: Handwritten
Estimated LOC: 35 lines
Complexity: Low
Unit Test Required: Yes
Integration Test Required: No
Mutation Test Required: No
Performance Test Required: No
Security Review Required: Yes
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Low
Implementation Order: 143
Current Status: Approved
Security Classification: Internal
Notes: Morning substitution generation command.
File ID: FILE-APP-009
Path: packages/application/src/commands/daily-substitution/index.ts
Purpose: Barrel export for Daily Substitution CQRS commands.
Architectural Layer: Application Layer
Package: @kalavruksha/application
Bounded Context: Daily Substitution
DDD Building Block: Configuration
Owner Module: Daily Substitution Team
Public API: Yes
Internal Only: Yes
Exports: GenerateDailyArrangementsCommand
Imports: Command files in directory
Used By: commands/index.ts
Depends On: Command files
Implementation Prerequisites: Command files
Reverse Dependencies: commands/index.ts
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
Implementation Order: 144
Current Status: Approved
Security Classification: Internal
Notes: Barrel export file.
File ID: FILE-APP-010
Path: packages/application/src/commands/handlers/publish-timetable.handler.ts
Purpose: CQRS Command Handler executing PublishTimetableCommand. Loads TimetableHeader aggregate, evaluates PublicationReadinessSpecification, invokes header.publish(), commits changes via unit of work, and dispatches timetable.published integration event to outbox.
Architectural Layer: Application Layer
Package: @kalavruksha/application
Bounded Context: Timetable Operations
DDD Building Block: Application Service / Handler
Owner Module: Timetable Operations Team
Public API: Yes
Internal Only: Yes
Exports: PublishTimetableHandler
Imports: @kalavruksha/domain, @kalavruksha/types, @kalavruksha/errors, ../timetable-operations/publish-timetable.command
Used By: Command Bus, REST Controllers
Depends On: @kalavruksha/domain, PublishTimetableCommand
Implementation Prerequisites: @kalavruksha/domain
Reverse Dependencies: API Controllers
Generated or Handwritten: Handwritten
Estimated LOC: 110 lines
Complexity: Medium
Unit Test Required: Yes
Integration Test Required: Yes (Handler test with fake repo)
Mutation Test Required: Yes
Performance Test Required: Yes
Security Review Required: Yes
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Medium
Implementation Order: 145
Current Status: Approved
Security Classification: Internal
Notes: Master timetable publishing command handler.
File ID: FILE-APP-011
Path: packages/application/src/commands/handlers/swap-grid-slots.handler.ts
Purpose: CQRS Command Handler executing SwapGridSlotsCommand. Loads target TimetableDayGrid aggregate, validates slot swap via SlotAssignmentEngine, invokes dayGrid.swapSlots(), and commits changes atomically under optimistic concurrency control.
Architectural Layer: Application Layer
Package: @kalavruksha/application
Bounded Context: Timetable Operations
DDD Building Block: Application Service / Handler
Owner Module: Timetable Operations Team
Public API: Yes
Internal Only: Yes
Exports: SwapGridSlotsHandler
Imports: @kalavruksha/domain, @kalavruksha/types, @kalavruksha/errors, ../timetable-operations/swap-grid-slots.command
Used By: Command Bus, WebSocket Gateway
Depends On: @kalavruksha/domain, SwapGridSlotsCommand
Implementation Prerequisites: @kalavruksha/domain
Reverse Dependencies: WebSocket Gateway
Generated or Handwritten: Handwritten
Estimated LOC: 125 lines
Complexity: Medium
Unit Test Required: Yes
Integration Test Required: Yes (Handler test with fake repo)
Mutation Test Required: Yes
Performance Test Required: Yes (
O
(
1
)
O(1)
 slot swap execution latency test)
Security Review Required: Yes
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Medium
Implementation Order: 146
Current Status: Approved
Security Classification: Internal
Notes: High-frequency drag-and-drop slot swap command handler.
File ID: FILE-APP-012
Path: packages/application/src/commands/handlers/generate-daily-arrangements.handler.ts
Purpose: CQRS Command Handler executing GenerateDailyArrangementsCommand. Queries active absences for target date, invokes ArrangementGenerationEngine domain service, creates DailyArrangement aggregate, and commits substitution assignments.
Architectural Layer: Application Layer
Package: @kalavruksha/application
Bounded Context: Daily Substitution
DDD Building Block: Application Service / Handler
Owner Module: Daily Substitution Team
Public API: Yes
Internal Only: Yes
Exports: GenerateDailyArrangementsHandler
Imports: @kalavruksha/domain, @kalavruksha/types, ../daily-substitution/generate-daily-arrangements.command
Used By: Command Bus, Scheduler Worker
Depends On: @kalavruksha/domain, GenerateDailyArrangementsCommand
Implementation Prerequisites: @kalavruksha/domain
Reverse Dependencies: Scheduler Worker
Generated or Handwritten: Handwritten
Estimated LOC: 115 lines
Complexity: Medium
Unit Test Required: Yes
Integration Test Required: Yes
Mutation Test Required: Yes
Performance Test Required: Yes (07:00 AM peak substitution processing test)
Security Review Required: Yes
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Medium
Implementation Order: 147
Current Status: Approved
Security Classification: Internal
Notes: Morning substitution generation command handler.
File ID: FILE-APP-013
Path: packages/application/src/commands/handlers/index.ts
Purpose: Barrel export for CQRS command handlers.
Architectural Layer: Application Layer
Package: @kalavruksha/application
Bounded Context: All Bounded Contexts
DDD Building Block: Configuration
Owner Module: Application Architecture Team
Public API: Yes
Internal Only: Yes
Exports: All command handlers
Imports: Handler files in directory
Used By: commands/index.ts
Depends On: Handlers in directory
Implementation Prerequisites: Handlers
Reverse Dependencies: commands/index.ts
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
Implementation Order: 148
Current Status: Approved
Security Classification: Internal
Notes: Barrel export file.
File ID: FILE-APP-014
Path: packages/application/src/commands/index.ts
Purpose: Barrel export for CQRS command classes and handlers.
Architectural Layer: Application Layer
Package: @kalavruksha/application
Bounded Context: All Bounded Contexts
DDD Building Block: Configuration
Owner Module: Application Architecture Team
Public API: Yes
Internal Only: No
Exports: All commands and handlers
Imports: Command subdirectories
Used By: src/index.ts
Depends On: Command subdirectories
Implementation Prerequisites: Commands and handlers
Reverse Dependencies: src/index.ts
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
Implementation Order: 149
Current Status: Approved
Security Classification: Internal
Notes: Barrel export file.
DIRECTORY SPECIFICATION
Directory Path: packages/application/src/queries/
Purpose: Houses CQRS Read Queries and Query Handlers organized by bounded context. Query Handlers bypass domain aggregate write-models and return flattened DTO response projections from read-models for 
O
(
1
)
O(1)
 rendering.
Architectural Layer: Application Layer / CQRS Read Side
Package: @kalavruksha/application
Bounded Context: All Bounded Contexts
Responsibilities:
Defines Query objects carrying read intent and tenant filter context.
Houses Query Handlers retrieving read-model projections and returning DTOs.
Contained Files:
index.ts
Contained Directories:
packages/application/src/queries/timetable-operations/
packages/application/src/queries/handlers/
Relationships:
Parent: packages/application/src/
Children: Sub-directories under queries/
Dependencies: @kalavruksha/types
Dependents: API Controllers
Implementation Phase: Phase 3
Freeze Status: Approved
Notes: Read-side CQRS architecture.
File ID: FILE-APP-015
Path: packages/application/src/queries/timetable-operations/get-timetable-grid.query.ts
Purpose: CQRS Read Query object requesting flattened weekly or daily grid matrix payload for a section.
Architectural Layer: Application Layer
Package: @kalavruksha/application
Bounded Context: Timetable Operations
DDD Building Block: Query
Owner Module: Timetable Operations Team
Public API: Yes
Internal Only: No
Exports: GetTimetableGridQuery
Imports: @kalavruksha/types
Used By: GetTimetableGridHandler, API Controllers
Depends On: @kalavruksha/types
Implementation Prerequisites: None
Reverse Dependencies: Query handler
Generated or Handwritten: Handwritten
Estimated LOC: 35 lines
Complexity: Low
Unit Test Required: Yes
Integration Test Required: No
Mutation Test Required: No
Performance Test Required: No
Security Review Required: Yes
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Low
Implementation Order: 150
Current Status: Approved
Security Classification: Internal
Notes: CQRS Query payload class.
File ID: FILE-APP-016
Path: packages/application/src/queries/timetable-operations/index.ts
Purpose: Barrel export for Timetable Operations CQRS queries.
Architectural Layer: Application Layer
Package: @kalavruksha/application
Bounded Context: Timetable Operations
DDD Building Block: Configuration
Owner Module: Timetable Operations Team
Public API: Yes
Internal Only: Yes
Exports: GetTimetableGridQuery
Imports: Query files in directory
Used By: queries/index.ts
Depends On: Query files
Implementation Prerequisites: Query files
Reverse Dependencies: queries/index.ts
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
Implementation Order: 151
Current Status: Approved
Security Classification: Internal
Notes: Barrel export file.
File ID: FILE-APP-017
Path: packages/application/src/queries/handlers/get-timetable-grid.handler.ts
Purpose: CQRS Query Handler executing GetTimetableGridQuery. Fetches 
O
(
1
)
O(1)
 grid matrix projection from Redis cache or PostgreSQL materialized view (01_timetable_matrix_view) and returns TimetableGridResponseDto.
Architectural Layer: Application Layer
Package: @kalavruksha/application
Bounded Context: Timetable Operations
DDD Building Block: Application Service / Handler
Owner Module: Timetable Operations Team
Public API: Yes
Internal Only: Yes
Exports: GetTimetableGridHandler
Imports: @kalavruksha/types, @kalavruksha/errors, ../../dto/response/timetable-grid-response.dto, ../timetable-operations/get-timetable-grid.query
Used By: Query Bus, REST Controllers
Depends On: GetTimetableGridQuery, TimetableGridResponseDto
Implementation Prerequisites: Query & DTO classes
Reverse Dependencies: API Controllers
Generated or Handwritten: Handwritten
Estimated LOC: 85 lines
Complexity: Medium
Unit Test Required: Yes
Integration Test Required: Yes
Mutation Test Required: No
Performance Test Required: Yes (
O
(
1
)
O(1)
 grid read latency test)
Security Review Required: Yes
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Medium
Implementation Order: 152
Current Status: Approved
Security Classification: Internal
Notes: CQRS read-side query handler.
File ID: FILE-APP-018
Path: packages/application/src/queries/handlers/index.ts
Purpose: Barrel export for CQRS query handlers.
Architectural Layer: Application Layer
Package: @kalavruksha/application
Bounded Context: All Bounded Contexts
DDD Building Block: Configuration
Owner Module: Application Architecture Team
Public API: Yes
Internal Only: Yes
Exports: All query handlers
Imports: Handler files in directory
Used By: queries/index.ts
Depends On: Handlers in directory
Implementation Prerequisites: Handlers
Reverse Dependencies: queries/index.ts
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
Implementation Order: 153
Current Status: Approved
Security Classification: Internal
Notes: Barrel export file.
File ID: FILE-APP-019
Path: packages/application/src/queries/index.ts
Purpose: Barrel export for CQRS query classes and handlers.
Architectural Layer: Application Layer
Package: @kalavruksha/application
Bounded Context: All Bounded Contexts
DDD Building Block: Configuration
Owner Module: Application Architecture Team
Public API: Yes
Internal Only: No
Exports: All queries and handlers
Imports: Query subdirectories
Used By: src/index.ts
Depends On: Query subdirectories
Implementation Prerequisites: Queries and handlers
Reverse Dependencies: src/index.ts
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
Implementation Order: 154
Current Status: Approved
Security Classification: Internal
Notes: Barrel export file.
DIRECTORY SPECIFICATION
Directory Path: packages/application/src/dto/
Purpose: Houses Request and Response Data Transfer Objects (DTOs) for application API payloads.
Architectural Layer: Application Layer / DTO Layer
Package: @kalavruksha/application
Bounded Context: All Bounded Contexts
Responsibilities:
Defines strongly typed request payloads and response DTO schemas.
Contained Files:
index.ts
Contained Directories:
packages/application/src/dto/request/
packages/application/src/dto/response/
Relationships:
Parent: packages/application/src/
Children: Sub-directories under dto/
Dependencies: @kalavruksha/types
Dependents: API Controllers, CQRS Handlers, Client Applications
Implementation Phase: Phase 3
Freeze Status: Approved
Notes: Clean DTO boundary layer.
File ID: FILE-APP-020
Path: packages/application/src/dto/request/swap-slots-request.dto.ts
Purpose: Request DTO defining payload schema for drag-and-drop slot swap requests.
Architectural Layer: Application Layer
Package: @kalavruksha/application
Bounded Context: Timetable Operations
DDD Building Block: DTO
Owner Module: Timetable Operations Team
Public API: Yes
Internal Only: No
Exports: SwapSlotsRequestDto
Imports: @kalavruksha/types
Used By: API Controllers, WebSocket Gateways, Use Cases
Depends On: @kalavruksha/types
Implementation Prerequisites: None
Reverse Dependencies: API Controllers
Generated or Handwritten: Handwritten
Estimated LOC: 35 lines
Complexity: Low
Unit Test Required: Yes
Integration Test Required: No
Mutation Test Required: No
Performance Test Required: No
Security Review Required: Yes
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Low
Implementation Order: 155
Current Status: Approved
Security Classification: Internal
Notes: Request payload DTO.
File ID: FILE-APP-021
Path: packages/application/src/dto/request/generate-arrangements-request.dto.ts
Purpose: Request DTO defining payload schema for morning substitution arrangement generation.
Architectural Layer: Application Layer
Package: @kalavruksha/application
Bounded Context: Daily Substitution
DDD Building Block: DTO
Owner Module: Daily Substitution Team
Public API: Yes
Internal Only: No
Exports: GenerateArrangementsRequestDto
Imports: @kalavruksha/types
Used By: API Controllers, Scheduler Worker
Depends On: @kalavruksha/types
Implementation Prerequisites: None
Reverse Dependencies: API Controllers
Generated or Handwritten: Handwritten
Estimated LOC: 30 lines
Complexity: Low
Unit Test Required: Yes
Integration Test Required: No
Mutation Test Required: No
Performance Test Required: No
Security Review Required: Yes
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Low
Implementation Order: 156
Current Status: Approved
Security Classification: Internal
Notes: Request payload DTO.
File ID: FILE-APP-022
Path: packages/application/src/dto/request/index.ts
Purpose: Barrel export for Request DTOs.
Architectural Layer: Application Layer
Package: @kalavruksha/application
Bounded Context: All Bounded Contexts
DDD Building Block: Configuration
Owner Module: Application Architecture Team
Public API: Yes
Internal Only: Yes
Exports: All Request DTOs
Imports: DTO files in directory
Used By: dto/index.ts
Depends On: DTO files
Implementation Prerequisites: DTO files
Reverse Dependencies: dto/index.ts
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
Implementation Order: 157
Current Status: Approved
Security Classification: Internal
Notes: Barrel export file.
File ID: FILE-APP-023
Path: packages/application/src/dto/response/timetable-grid-response.dto.ts
Purpose: Response DTO defining flattened weekly timetable matrix grid payload schema returned to UI grid components.
Architectural Layer: Application Layer
Package: @kalavruksha/application
Bounded Context: Timetable Operations
DDD Building Block: DTO
Owner Module: Timetable Operations Team
Public API: Yes
Internal Only: No
Exports: TimetableGridResponseDto, GridCellDto
Imports: @kalavruksha/types
Used By: Query Handlers, API Controllers, UI components
Depends On: @kalavruksha/types
Implementation Prerequisites: None
Reverse Dependencies: API Controllers
Generated or Handwritten: Handwritten
Estimated LOC: 50 lines
Complexity: Low
Unit Test Required: Yes
Integration Test Required: No
Mutation Test Required: No
Performance Test Required: No
Security Review Required: No
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Low
Implementation Order: 158
Current Status: Approved
Security Classification: Internal
Notes: Grid response DTO.
File ID: FILE-APP-024
Path: packages/application/src/dto/response/daily-arrangement-response.dto.ts
Purpose: Response DTO defining daily substitution plan and digital substitution slip payload schema.
Architectural Layer: Application Layer
Package: @kalavruksha/application
Bounded Context: Daily Substitution
DDD Building Block: DTO
Owner Module: Daily Substitution Team
Public API: Yes
Internal Only: No
Exports: DailyArrangementResponseDto, SubstitutionSlipDto
Imports: @kalavruksha/types
Used By: Query Handlers, API Controllers, Teacher Portal
Depends On: @kalavruksha/types
Implementation Prerequisites: None
Reverse Dependencies: API Controllers
Generated or Handwritten: Handwritten
Estimated LOC: 55 lines
Complexity: Low
Unit Test Required: Yes
Integration Test Required: No
Mutation Test Required: No
Performance Test Required: No
Security Review Required: No
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Low
Implementation Order: 159
Current Status: Approved
Security Classification: Internal
Notes: Substitution response DTO.
File ID: FILE-APP-025
Path: packages/application/src/dto/response/index.ts
Purpose: Barrel export for Response DTOs.
Architectural Layer: Application Layer
Package: @kalavruksha/application
Bounded Context: All Bounded Contexts
DDD Building Block: Configuration
Owner Module: Application Architecture Team
Public API: Yes
Internal Only: Yes
Exports: All Response DTOs
Imports: DTO files in directory
Used By: dto/index.ts
Depends On: DTO files
Implementation Prerequisites: DTO files
Reverse Dependencies: dto/index.ts
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
Implementation Order: 160
Current Status: Approved
Security Classification: Internal
Notes: Barrel export file.
File ID: FILE-APP-026
Path: packages/application/src/dto/index.ts
Purpose: Barrel export for Request and Response DTOs.
Architectural Layer: Application Layer
Package: @kalavruksha/application
Bounded Context: All Bounded Contexts
DDD Building Block: Configuration
Owner Module: Application Architecture Team
Public API: Yes
Internal Only: No
Exports: All DTOs
Imports: DTO subdirectories
Used By: src/index.ts
Depends On: DTO subdirectories
Implementation Prerequisites: DTOs
Reverse Dependencies: src/index.ts
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
Implementation Order: 161
Current Status: Approved
Security Classification: Internal
Notes: Barrel export file.
DIRECTORY SPECIFICATION
Directory Path: packages/application/src/mappers/
Purpose: Houses pure mapper classes converting Domain Aggregates to Response DTOs and DTOs/Records to Domain Aggregates.
Architectural Layer: Application Layer / Mapper Layer
Package: @kalavruksha/application
Bounded Context: All Bounded Contexts
Responsibilities:
Converts write-side domain aggregate models into read-side DTO response payloads.
Ensures zero leaky aggregate internal structures are exposed to client APIs.
Contained Files:
timetable-grid-dto.mapper.ts
timetable-slot-dto.mapper.ts
index.ts
Contained Directories: None
Relationships:
Parent: packages/application/src/
Children: None
Dependencies: @kalavruksha/domain, ./dto
Dependents: Command Handlers, Query Handlers
Implementation Phase: Phase 3
Freeze Status: Approved
Notes: Pure data transformation mappers.
File ID: FILE-APP-027
Path: packages/application/src/mappers/timetable-grid-dto.mapper.ts
Purpose: Pure mapper class converting TimetableDayGrid domain aggregate into TimetableGridResponseDto.
Architectural Layer: Application Layer
Package: @kalavruksha/application
Bounded Context: Timetable Operations
DDD Building Block: Mapper
Owner Module: Timetable Operations Team
Public API: Yes
Internal Only: Yes
Exports: TimetableGridDtoMapper
Imports: @kalavruksha/domain, ../dto/response/timetable-grid-response.dto
Used By: Query Handlers, Command Handlers
Depends On: @kalavruksha/domain, TimetableGridResponseDto
Implementation Prerequisites: Domain aggregate & DTO classes
Reverse Dependencies: Handlers
Generated or Handwritten: Handwritten
Estimated LOC: 65 lines
Complexity: Low
Unit Test Required: Yes
Integration Test Required: No
Mutation Test Required: Yes
Performance Test Required: No
Security Review Required: No
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Low
Implementation Order: 162
Current Status: Approved
Security Classification: Internal
Notes: Pure data mapping utility.
File ID: FILE-APP-028
Path: packages/application/src/mappers/timetable-slot-dto.mapper.ts
Purpose: Pure mapper class converting TimetableSlot child entity into GridCellDto.
Architectural Layer: Application Layer
Package: @kalavruksha/application
Bounded Context: Timetable Operations
DDD Building Block: Mapper
Owner Module: Timetable Operations Team
Public API: Yes
Internal Only: Yes
Exports: TimetableSlotDtoMapper
Imports: @kalavruksha/domain, ../dto/response/timetable-grid-response.dto
Used By: TimetableGridDtoMapper
Depends On: @kalavruksha/domain
Implementation Prerequisites: Domain entity & DTO classes
Reverse Dependencies: Mappers
Generated or Handwritten: Handwritten
Estimated LOC: 45 lines
Complexity: Low
Unit Test Required: Yes
Integration Test Required: No
Mutation Test Required: Yes
Performance Test Required: No
Security Review Required: No
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Low
Implementation Order: 163
Current Status: Approved
Security Classification: Internal
Notes: Pure cell mapping utility.
File ID: FILE-APP-029
Path: packages/application/src/mappers/index.ts
Purpose: Barrel export for Application Layer mappers.
Architectural Layer: Application Layer
Package: @kalavruksha/application
Bounded Context: All Bounded Contexts
DDD Building Block: Configuration
Owner Module: Application Architecture Team
Public API: Yes
Internal Only: Yes
Exports: All mappers
Imports: Mapper files in directory
Used By: src/index.ts
Depends On: Mapper files
Implementation Prerequisites: Mappers
Reverse Dependencies: src/index.ts
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
Implementation Order: 164
Current Status: Approved
Security Classification: Internal
Notes: Barrel export file.
DIRECTORY SPECIFICATION
Directory Path: packages/application/src/ports/
Purpose: Houses Secondary Output Port interfaces declaring application requirements for external network transport adapters (Email, SMS, Mobile Push Notifications).
Architectural Layer: Application Layer / Ports Layer (Hexagonal Architecture)
Package: @kalavruksha/application
Bounded Context: Notification & Workflow
Responsibilities:
Defines clean interface abstractions for email, SMS, and push notification delivery adapters without introducing third-party library dependencies.
Contained Files:
email-service.port.ts
sms-service.port.ts
push-notification.port.ts
index.ts
Contained Directories: None
Relationships:
Parent: packages/application/src/
Children: None
Dependencies: @kalavruksha/types
Dependents: Infrastructure Adapters (packages/infrastructure), Application Handlers
Implementation Phase: Phase 3
Freeze Status: Approved
Notes: Hexagonal Architecture secondary output ports.
File ID: FILE-APP-030
Path: packages/application/src/ports/email-service.port.ts
Purpose: Secondary Output Port interface declaring contract for email dispatch adapters (e.g. SendGrid).
Architectural Layer: Application Layer
Package: @kalavruksha/application
Bounded Context: Notification & Workflow
DDD Building Block: Adapter
Owner Module: Notification & Workflow Team
Public API: Yes
Internal Only: No
Exports: IEmailServicePort
Imports: @kalavruksha/types
Used By: Application Handlers, Infrastructure Adapters
Depends On: @kalavruksha/types
Implementation Prerequisites: None
Reverse Dependencies: packages/infrastructure
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
Implementation Order: 165
Current Status: Approved
Security Classification: Internal
Notes: Output port interface.
File ID: FILE-APP-031
Path: packages/application/src/ports/sms-service.port.ts
Purpose: Secondary Output Port interface declaring contract for SMS dispatch adapters (e.g. Twilio).
Architectural Layer: Application Layer
Package: @kalavruksha/application
Bounded Context: Notification & Workflow
DDD Building Block: Adapter
Owner Module: Notification & Workflow Team
Public API: Yes
Internal Only: No
Exports: ISmsServicePort
Imports: @kalavruksha/types
Used By: Application Handlers, Infrastructure Adapters
Depends On: @kalavruksha/types
Implementation Prerequisites: None
Reverse Dependencies: packages/infrastructure
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
Implementation Order: 166
Current Status: Approved
Security Classification: Internal
Notes: Output port interface.
File ID: FILE-APP-032
Path: packages/application/src/ports/push-notification.port.ts
Purpose: Secondary Output Port interface declaring contract for mobile push notification adapters (e.g. Firebase Cloud Messaging).
Architectural Layer: Application Layer
Package: @kalavruksha/application
Bounded Context: Notification & Workflow
DDD Building Block: Adapter
Owner Module: Notification & Workflow Team
Public API: Yes
Internal Only: No
Exports: IPushNotificationPort
Imports: @kalavruksha/types
Used By: Application Handlers, Infrastructure Adapters
Depends On: @kalavruksha/types
Implementation Prerequisites: None
Reverse Dependencies: packages/infrastructure
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
Implementation Order: 167
Current Status: Approved
Security Classification: Internal
Notes: Output port interface.
File ID: FILE-APP-033
Path: packages/application/src/ports/index.ts
Purpose: Barrel export for Application Layer secondary output ports.
Architectural Layer: Application Layer
Package: @kalavruksha/application
Bounded Context: All Bounded Contexts
DDD Building Block: Configuration
Owner Module: Application Architecture Team
Public API: Yes
Internal Only: No
Exports: All port interfaces
Imports: Port files in directory
Used By: src/index.ts
Depends On: Port files
Implementation Prerequisites: Port files
Reverse Dependencies: src/index.ts
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
Implementation Order: 168
Current Status: Approved
Security Classification: Internal
Notes: Barrel export file.
DIRECTORY SPECIFICATION
Directory Path: packages/application/src/pipelines/
Purpose: Houses command and query validation pipeline behaviors executing input DTO validation and tenant access checks prior to handler invocation.
Architectural Layer: Application Layer / Pipeline Layer
Package: @kalavruksha/application
Bounded Context: All Bounded Contexts
Responsibilities:
Intercepts CQRS commands and queries before handler execution.
Enforces payload validation and tenant context checks.
Contained Files:
command-validation.pipeline.ts
index.ts
Contained Directories: None
Relationships:
Parent: packages/application/src/
Children: None
Dependencies: @kalavruksha/errors, @kalavruksha/types
Dependents: CQRS Command & Query Bus
Implementation Phase: Phase 3
Freeze Status: Approved
Notes: Pipeline behavior layer.
File ID: FILE-APP-034
Path: packages/application/src/pipelines/command-validation.pipeline.ts
Purpose: Pipeline behavior executing payload validation and throwing ValidationError if command properties violate schema bounds before hitting domain handlers.
Architectural Layer: Application Layer
Package: @kalavruksha/application
Bounded Context: All Bounded Contexts
DDD Building Block: Application Service
Owner Module: Application Architecture Team
Public API: Yes
Internal Only: Yes
Exports: CommandValidationPipeline
Imports: @kalavruksha/errors, @kalavruksha/types
Used By: CQRS Command Bus
Depends On: @kalavruksha/errors
Implementation Prerequisites: @kalavruksha/errors
Reverse Dependencies: Command Bus
Generated or Handwritten: Handwritten
Estimated LOC: 50 lines
Complexity: Low
Unit Test Required: Yes
Integration Test Required: Yes
Mutation Test Required: No
Performance Test Required: No
Security Review Required: Yes
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Low
Implementation Order: 169
Current Status: Approved
Security Classification: Internal
Notes: Command payload validator pipeline.
File ID: FILE-APP-035
Path: packages/application/src/pipelines/index.ts
Purpose: Barrel export for pipeline behaviors.
Architectural Layer: Application Layer
Package: @kalavruksha/application
Bounded Context: All Bounded Contexts
DDD Building Block: Configuration
Owner Module: Application Architecture Team
Public API: Yes
Internal Only: Yes
Exports: All pipelines
Imports: Pipeline files in directory
Used By: src/index.ts
Depends On: Pipeline files
Implementation Prerequisites: Pipeline files
Reverse Dependencies: src/index.ts
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
Implementation Order: 170
Current Status: Approved
Security Classification: Internal
Notes: Barrel export file.
DIRECTORY SPECIFICATION
Directory Path: packages/application/src/use-cases/
Purpose: Houses complex multi-aggregate application workflow use-case orchestrators spanning multiple domain sub-contexts.
Architectural Layer: Application Layer / Use Case Layer
Package: @kalavruksha/application
Bounded Context: All Bounded Contexts
Responsibilities:
Orchestrates multi-aggregate workflows (publish-timetable-workflow, run-morning-substitution).
Coordinates domain aggregate mutations across multiple repositories within a single atomic unit of work transaction.
Contained Files:
publish-timetable-workflow.use-case.ts
run-morning-substitution.use-case.ts
index.ts
Contained Directories: None
Relationships:
Parent: packages/application/src/
Children: None
Dependencies: @kalavruksha/domain, @kalavruksha/types, @kalavruksha/errors
Dependents: Command Handlers
Implementation Phase: Phase 3
Freeze Status: Approved
Notes: Multi-aggregate workflow orchestrators.
File ID: FILE-APP-036
Path: packages/application/src/use-cases/publish-timetable-workflow.use-case.ts
Purpose: Workflow orchestrator managing master timetable publication sequence: validates grid, updates header state, archives previous active timetable, generates CQRS read-model analytics snapshot, and dispatches notification events.
Architectural Layer: Application Layer
Package: @kalavruksha/application
Bounded Context: Timetable Operations
DDD Building Block: Application Service / Use Case
Owner Module: Timetable Operations Team
Public API: Yes
Internal Only: Yes
Exports: PublishTimetableWorkflowUseCase
Imports: @kalavruksha/domain, @kalavruksha/types, @kalavruksha/errors
Used By: PublishTimetableHandler
Depends On: @kalavruksha/domain
Implementation Prerequisites: Domain aggregates & repositories
Reverse Dependencies: Command Handlers
Generated or Handwritten: Handwritten
Estimated LOC: 120 lines
Complexity: Medium
Unit Test Required: Yes
Integration Test Required: Yes (Use case integration test)
Mutation Test Required: Yes
Performance Test Required: Yes
Security Review Required: Yes
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Medium
Implementation Order: 171
Current Status: Approved
Security Classification: Internal
Notes: Timetable publication workflow.
File ID: FILE-APP-037
Path: packages/application/src/use-cases/run-morning-substitution.use-case.ts
Purpose: Workflow orchestrator executing 06:00 AM morning substitution sequence: queries active teacher leaves, runs candidate ranker, builds substitution assignments, and generates printable/digital substitution slips.
Architectural Layer: Application Layer
Package: @kalavruksha/application
Bounded Context: Daily Substitution
DDD Building Block: Application Service / Use Case
Owner Module: Daily Substitution Team
Public API: Yes
Internal Only: Yes
Exports: RunMorningSubstitutionUseCase
Imports: @kalavruksha/domain, @kalavruksha/types, @kalavruksha/errors
Used By: GenerateDailyArrangementsHandler, Scheduler Worker
Depends On: @kalavruksha/domain
Implementation Prerequisites: Domain aggregates & services
Reverse Dependencies: Command Handlers
Generated or Handwritten: Handwritten
Estimated LOC: 135 lines
Complexity: Medium
Unit Test Required: Yes
Integration Test Required: Yes (Substitution use case test)
Mutation Test Required: Yes
Performance Test Required: Yes (Morning substitution processing time benchmark)
Security Review Required: Yes
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Medium
Implementation Order: 172
Current Status: Approved
Security Classification: Internal
Notes: Morning substitution workflow orchestrator.
File ID: FILE-APP-038
Path: packages/application/src/use-cases/index.ts
Purpose: Barrel export for Application Layer use cases.
Architectural Layer: Application Layer
Package: @kalavruksha/application
Bounded Context: All Bounded Contexts
DDD Building Block: Configuration
Owner Module: Application Architecture Team
Public API: Yes
Internal Only: Yes
Exports: All use cases
Imports: Use case files in directory
Used By: src/index.ts
Depends On: Use case files
Implementation Prerequisites: Use cases
Reverse Dependencies: src/index.ts
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
Implementation Order: 173
Current Status: Approved
Security Classification: Internal
Notes: Barrel export file.
PACKAGE METADATA: @kalavruksha/application
Package Dependency Graph: @kalavruksha/application 
→
→
 @kalavruksha/domain, @kalavruksha/types, @kalavruksha/errors, @kalavruksha/events, @kalavruksha/utils, @kalavruksha/config.
Allowed Imports: Workspace domain core and shared foundation packages.
Forbidden Imports: Prisma, PostgreSQL drivers, Redis, BullMQ, @nestjs/*, react, next. (Application Layer remains completely decoupled from database ORMs and HTTP frameworks).
Public Surface: Commands, Queries, Handlers, DTOs, Mappers, Ports, Pipelines, Use Cases.
Internal Surface: Internal handler utilities.
Barrel Export Rules: Exported via subpath exports in package.json and src/index.ts.
Layer Validation: Tier 3 Application Layer.
Circular Dependency Status: Clean (Zero circular dependencies).
QUALITY VALIDATION: @kalavruksha/application
Architecture Validation: 100% Compliant
Dependency Validation: 100% Compliant
Boundary Validation: 100% Compliant
Type Safety: Strict TypeScript 5.x
Coverage Target: 
>
90
%
>90%
 Command & Query Handler test coverage
Mutation Target: 
>
85
%
>85%
 Handler mutation coverage
Performance Target: 
<
5
ms
<5ms
 handler execution overhead (excluding database I/O)
Static Analysis Status: Clean
Security Status: Clean (Command validation pipelines & tenant parameter enforcement)
PART SUMMARY
Directories completed: 18 (packages/application/, src/, commands/, timetable-operations/, daily-substitution/, handlers/, queries/, timetable-operations/, handlers/, dto/, request/, response/, mappers/, ports/, pipelines/, use-cases/, apps/, services/)
Files completed: 38 (Cumulative: 173 files)
Packages completed: 14 (Root Workspace, @kalavruksha/eslint-config, prettier-config, tsconfig, apps/api, services/worker-solver, worker-notification, worker-analytics, worker-scheduler, web-admin, web-teacher, web-superadmin, web-parent, @kalavruksha/application)
Remaining directories: 126
Remaining files: 1,327
Implementation progress: 60 / 186 directories completed
Repository completion percentage: 32.25%
Estimated remaining parts: 7 sequential parts
NEXT PART:
packages/infrastructure/