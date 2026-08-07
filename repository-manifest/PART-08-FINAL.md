KALAVRUKSHA ERP — CANONICAL REPOSITORY MANIFEST
PART 8 — Infrastructure Layer Package (packages/infrastructure/)
DIRECTORY SPECIFICATION
Directory Path: packages/infrastructure/
Purpose: Package providing the Tier 3 Infrastructure Layer (@kalavruksha/infrastructure). Houses concrete Prisma database repositories, Unit of Work transaction manager, Redis cache adapters, BullMQ queue publishers, Transactional Outbox pattern writer/processor, and Third-Party Network Transports (SendGrid Email, Twilio SMS, Firebase Push).
Architectural Layer: Tier 3 Infrastructure Layer (Adapters & Persistence)
Package: @kalavruksha/infrastructure
Bounded Context: All Bounded Contexts (Infrastructure Layer)
Responsibilities:
Implements Domain Repository interfaces (ISchoolRepository, ITeacherProfileRepository, ITimetableHeaderRepository, ITimetableDayGridRepository, etc.) via Dependency Inversion.
Implements Application Layer Output Ports (IEmailServicePort, ISmsServicePort, IPushNotificationPort).
Manages atomic multi-aggregate database transactions via Prisma Unit of Work (unit-of-work.ts).
Provides 
O
(
1
)
O(1)
 grid matrix caching and cache invalidation via Redis cluster adapter (redis-cache.service.ts).
Guarantees event delivery reliability via Transactional Outbox Pattern (outbox-writer.service.ts, outbox-processor.service.ts).
Contained Files:
package.json
tsconfig.json
README.md
Contained Directories:
packages/infrastructure/src/
Relationships:
Parent: packages/
Children: packages/infrastructure/src/
Dependencies: @kalavruksha/domain, @kalavruksha/application, @kalavruksha/types, @kalavruksha/errors, @kalavruksha/events, @kalavruksha/utils, @kalavruksha/config, @kalavruksha/logger, @prisma/client, ioredis, bullmq
Dependents: apps/api, apps/mobile-api, services/worker-*
Implementation Phase: Phase 3 (Infrastructure Layer & Database Adapters)
Freeze Status: Approved
Notes: Implements Dependency Inversion Principle. The domain layer has zero awareness of Prisma, SQL, or Redis.
File ID: FILE-INFRA-001
Path: packages/infrastructure/package.json
Purpose: Package manifest for @kalavruksha/infrastructure, declaring dependencies on @kalavruksha/domain, @kalavruksha/application, @prisma/client, ioredis, bullmq, @sendgrid/mail, twilio, and firebase-admin.
Architectural Layer: Infrastructure Layer
Package: @kalavruksha/infrastructure
Bounded Context: All Bounded Contexts
DDD Building Block: Configuration
Owner Module: Infrastructure Architecture Team
Public API: Yes (Workspace Package)
Internal Only: No
Exports: ./persistence, ./cache, ./queue, ./outbox, ./transport
Imports: Workspace packages, Database drivers
Used By: apps/api, apps/mobile-api, services/worker-*
Depends On: @kalavruksha/domain, @kalavruksha/application, Prisma Client
Implementation Prerequisites: @kalavruksha/domain, @kalavruksha/application
Reverse Dependencies: API Gateways and Workers
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
Versioning Strategy: Workspace Version (1.0.0)
Expected Change Frequency: Medium
Implementation Order: 174
Current Status: Approved
Security Classification: Internal
Notes: Infrastructure package manifest.
File ID: FILE-INFRA-002
Path: packages/infrastructure/tsconfig.json
Purpose: TypeScript configuration extending @kalavruksha/tsconfig/node-library.json, configuring Prisma Client typings and Node.js target.
Architectural Layer: Infrastructure Layer
Package: @kalavruksha/infrastructure
Bounded Context: All Bounded Contexts
DDD Building Block: Configuration
Owner Module: Infrastructure Architecture Team
Public API: No
Internal Only: Yes
Exports: TypeScript options
Imports: tooling/tsconfig/node-library.json
Used By: TypeScript Compiler (tsc), Turborepo
Depends On: tooling/tsconfig/node-library.json
Implementation Prerequisites: tooling/tsconfig/node-library.json
Reverse Dependencies: packages/infrastructure/src/**/*
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
Implementation Order: 175
Current Status: Approved
Security Classification: Internal
Notes: Strips DOM typings for server purity.
File ID: FILE-INFRA-003
Path: packages/infrastructure/README.md
Purpose: Documentation for @kalavruksha/infrastructure detailing Prisma repository implementations, Redis caching strategy, BullMQ queue definitions, and outbox event processing.
Architectural Layer: Documentation
Package: @kalavruksha/infrastructure
Bounded Context: All Bounded Contexts
DDD Building Block: Documentation
Owner Module: Infrastructure Architecture Team
Public API: Yes
Internal Only: No
Exports: None
Imports: None
Used By: Developers, DevOps Engineers
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
Expected Change Frequency: Medium
Implementation Order: 176
Current Status: Approved
Security Classification: Public
Notes: Documentation artifact.
DIRECTORY SPECIFICATION
Directory Path: packages/infrastructure/src/
Purpose: Source root directory housing persistence adapters, Redis caching, BullMQ queues, transactional outbox, third-party transports, and package index.
Architectural Layer: Infrastructure Layer / Adapter Layer
Package: @kalavruksha/infrastructure
Bounded Context: All Bounded Contexts
Responsibilities:
Implements concrete data access and network transport adapters.
Contained Files:
index.ts
Contained Directories:
packages/infrastructure/src/persistence/
packages/infrastructure/src/cache/
packages/infrastructure/src/queue/
packages/infrastructure/src/outbox/
packages/infrastructure/src/transport/
Relationships:
Parent: packages/infrastructure/
Children: Sub-directories under packages/infrastructure/src/
Dependencies: @kalavruksha/domain, @kalavruksha/application, @prisma/client, ioredis, bullmq
Dependents: apps/api, services/worker-*
Implementation Phase: Phase 3
Freeze Status: Approved
Notes: Root source directory for infrastructure layer.
File ID: FILE-INFRA-004
Path: packages/infrastructure/src/index.ts
Purpose: Main package barrel export exporting persistence repositories, unit of work, cache service, queue publisher, outbox writer, and transport adapters.
Architectural Layer: Infrastructure Layer
Package: @kalavruksha/infrastructure
Bounded Context: All Bounded Contexts
DDD Building Block: Configuration
Owner Module: Infrastructure Architecture Team
Public API: Yes
Internal Only: No
Exports: All infrastructure adapters
Imports: ./persistence, ./cache, ./queue, ./outbox, ./transport
Used By: apps/api, services/worker-*
Depends On: Internal infrastructure subpath barrels
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
Implementation Order: 177
Current Status: Approved
Security Classification: Internal
Notes: Master barrel export file.
DIRECTORY SPECIFICATION
Directory Path: packages/infrastructure/src/persistence/
Purpose: Houses concrete Prisma repository implementations and the Prisma Unit of Work transaction manager. Converts database records into domain aggregate roots and persists domain aggregate state changes.
Architectural Layer: Infrastructure Layer / Persistence Layer
Package: @kalavruksha/infrastructure
Bounded Context: All Bounded Contexts
Responsibilities:
Implements domain repository interfaces declared in @kalavruksha/domain.
Executes Prisma queries mapped to PostgreSQL schema (database/prisma/schema.prisma).
Enforces optimistic concurrency checks via ConcurrencyVersion on SQL update queries.
Manages atomic multi-repository database transactions via UnitOfWork.
Contained Files:
unit-of-work.ts
index.ts
Contained Directories:
packages/infrastructure/src/persistence/repositories/
Relationships:
Parent: packages/infrastructure/src/
Children: Sub-directories under persistence/
Dependencies: @kalavruksha/domain, @prisma/client
Dependents: Application Command & Query Handlers
Implementation Phase: Phase 3
Freeze Status: Approved
Notes: Prisma persistence adapter layer.
File ID: FILE-INFRA-005
Path: packages/infrastructure/src/persistence/unit-of-work.ts
Purpose: Concrete Unit of Work transaction manager wrapping Prisma transactions (prisma.$transaction()). Guarantees that multi-aggregate writes and event outbox records commit atomically within a single SQL transaction.
Architectural Layer: Infrastructure Layer
Package: @kalavruksha/infrastructure
Bounded Context: All Bounded Contexts
DDD Building Block: Adapter
Owner Module: Infrastructure Architecture Team
Public API: Yes
Internal Only: No
Exports: PrismaUnitOfWork
Imports: @prisma/client, @kalavruksha/domain, @kalavruksha/errors
Used By: Application Command Handlers
Depends On: Prisma Client, @kalavruksha/domain
Implementation Prerequisites: Prisma schema
Reverse Dependencies: Command Handlers
Generated or Handwritten: Handwritten
Estimated LOC: 85 lines
Complexity: Medium
Unit Test Required: Yes
Integration Test Required: Yes (Database transaction test)
Mutation Test Required: Yes
Performance Test Required: Yes (
O
(
1
)
O(1)
 transaction commit overhead test)
Security Review Required: Yes
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Low
Implementation Order: 178
Current Status: Approved
Security Classification: Internal
Notes: Atomic database transaction manager.
File ID: FILE-INFRA-006
Path: packages/infrastructure/src/persistence/repositories/prisma-school.repository.ts
Purpose: Concrete Prisma implementation of ISchoolRepository declared in @kalavruksha/domain/institutional-structure. Maps SQL records to School aggregate root, handles child Shift and AcademicYear entities, and enforces ConcurrencyVersion optimistic locking.
Architectural Layer: Infrastructure Layer
Package: @kalavruksha/infrastructure
Bounded Context: Institutional Structure
DDD Building Block: Adapter / Repository
Owner Module: Institutional Structure Team
Public API: Yes
Internal Only: No
Exports: PrismaSchoolRepository
Imports: @kalavruksha/domain, @prisma/client, @kalavruksha/errors
Used By: Application Command Handlers, NestJS Modules
Depends On: @kalavruksha/domain, Prisma Client
Implementation Prerequisites: @kalavruksha/domain, Prisma schema
Reverse Dependencies: Command Handlers
Generated or Handwritten: Handwritten
Estimated LOC: 140 lines
Complexity: Medium
Unit Test Required: Yes
Integration Test Required: Yes (PostgreSQL integration test)
Mutation Test Required: Yes
Performance Test Required: Yes (
O
(
1
)
O(1)
 indexed query latency check)
Security Review Required: Yes (TenantId query filter verification)
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Low
Implementation Order: 179
Current Status: Approved
Security Classification: Internal
Notes: Prisma implementation for School aggregate.
File ID: FILE-INFRA-007
Path: packages/infrastructure/src/persistence/repositories/prisma-campus.repository.ts
Purpose: Concrete Prisma implementation of ICampusRepository. Maps SQL records to Campus aggregate root.
Architectural Layer: Infrastructure Layer
Package: @kalavruksha/infrastructure
Bounded Context: Institutional Structure
DDD Building Block: Adapter / Repository
Owner Module: Institutional Structure Team
Public API: Yes
Internal Only: No
Exports: PrismaCampusRepository
Imports: @kalavruksha/domain, @prisma/client
Used By: Application Handlers
Depends On: @kalavruksha/domain, Prisma Client
Implementation Prerequisites: @kalavruksha/domain, Prisma schema
Reverse Dependencies: Command Handlers
Generated or Handwritten: Handwritten
Estimated LOC: 95 lines
Complexity: Low
Unit Test Required: Yes
Integration Test Required: Yes
Mutation Test Required: Yes
Performance Test Required: No
Security Review Required: Yes
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Low
Implementation Order: 180
Current Status: Approved
Security Classification: Internal
Notes: Prisma implementation for Campus aggregate.
File ID: FILE-INFRA-008
Path: packages/infrastructure/src/persistence/repositories/prisma-teacher-profile.repository.ts
Purpose: Concrete Prisma implementation of ITeacherProfileRepository. Maps SQL records to TeacherProfile aggregate root and child TeacherQualification entities.
Architectural Layer: Infrastructure Layer
Package: @kalavruksha/infrastructure
Bounded Context: Faculty Management
DDD Building Block: Adapter / Repository
Owner Module: Faculty Management Team
Public API: Yes
Internal Only: No
Exports: PrismaTeacherProfileRepository
Imports: @kalavruksha/domain, @prisma/client
Used By: Application Handlers
Depends On: @kalavruksha/domain, Prisma Client
Implementation Prerequisites: @kalavruksha/domain, Prisma schema
Reverse Dependencies: Command Handlers
Generated or Handwritten: Handwritten
Estimated LOC: 130 lines
Complexity: Medium
Unit Test Required: Yes
Integration Test Required: Yes
Mutation Test Required: Yes
Performance Test Required: Yes
Security Review Required: Yes
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Low
Implementation Order: 181
Current Status: Approved
Security Classification: Internal
Notes: Prisma implementation for TeacherProfile.
File ID: FILE-INFRA-009
Path: packages/infrastructure/src/persistence/repositories/prisma-timetable-header.repository.ts
Purpose: Concrete Prisma implementation of ITimetableHeaderRepository. Maps SQL records to TimetableHeader aggregate root and child TimetableDraftVersion entities.
Architectural Layer: Infrastructure Layer
Package: @kalavruksha/infrastructure
Bounded Context: Timetable Operations
DDD Building Block: Adapter / Repository
Owner Module: Timetable Operations Team
Public API: Yes
Internal Only: No
Exports: PrismaTimetableHeaderRepository
Imports: @kalavruksha/domain, @prisma/client
Used By: Application Handlers
Depends On: @kalavruksha/domain, Prisma Client
Implementation Prerequisites: @kalavruksha/domain, Prisma schema
Reverse Dependencies: Command Handlers
Generated or Handwritten: Handwritten
Estimated LOC: 125 lines
Complexity: Medium
Unit Test Required: Yes
Integration Test Required: Yes
Mutation Test Required: Yes
Performance Test Required: Yes
Security Review Required: Yes
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Low
Implementation Order: 182
Current Status: Approved
Security Classification: Internal
Notes: Prisma implementation for TimetableHeader.
File ID: FILE-INFRA-010
Path: packages/infrastructure/src/persistence/repositories/prisma-timetable-day-grid.repository.ts
Purpose: Concrete Prisma implementation of ITimetableDayGridRepository. Maps SQL records to TimetableDayGrid aggregate root and 10 period coordinate slots (TimetableSlot), enforcing optimistic concurrency version checks on grid updates.
Architectural Layer: Infrastructure Layer
Package: @kalavruksha/infrastructure
Bounded Context: Timetable Operations
DDD Building Block: Adapter / Repository
Owner Module: Timetable Operations Team
Public API: Yes
Internal Only: No
Exports: PrismaTimetableDayGridRepository
Imports: @kalavruksha/domain, @prisma/client, @kalavruksha/errors
Used By: Application Handlers, WS Gateway
Depends On: @kalavruksha/domain, Prisma Client
Implementation Prerequisites: @kalavruksha/domain, Prisma schema
Reverse Dependencies: Command Handlers
Generated or Handwritten: Handwritten
Estimated LOC: 150 lines
Complexity: Medium
Unit Test Required: Yes
Integration Test Required: Yes (High concurrency day grid save test)
Mutation Test Required: Yes
Performance Test Required: Yes (
O
(
1
)
O(1)
 single-row grid update latency test)
Security Review Required: Yes
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Low
Implementation Order: 183
Current Status: Approved
Security Classification: Internal
Notes: High-frequency day grid repository adapter.
File ID: FILE-INFRA-011
Path: packages/infrastructure/src/persistence/repositories/index.ts
Purpose: Barrel export for Prisma concrete repository implementations.
Architectural Layer: Infrastructure Layer
Package: @kalavruksha/infrastructure
Bounded Context: All Bounded Contexts
DDD Building Block: Configuration
Owner Module: Infrastructure Architecture Team
Public API: Yes
Internal Only: Yes
Exports: All Prisma repositories
Imports: Repository files in directory
Used By: persistence/index.ts
Depends On: Repositories in directory
Implementation Prerequisites: Repositories
Reverse Dependencies: persistence/index.ts
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
Implementation Order: 184
Current Status: Approved
Security Classification: Internal
Notes: Barrel export file.
File ID: FILE-INFRA-012
Path: packages/infrastructure/src/persistence/index.ts
Purpose: Barrel export for persistence layer adapters and unit of work.
Architectural Layer: Infrastructure Layer
Package: @kalavruksha/infrastructure
Bounded Context: All Bounded Contexts
DDD Building Block: Configuration
Owner Module: Infrastructure Architecture Team
Public API: Yes
Internal Only: No
Exports: All repositories and UnitOfWork
Imports: ./unit-of-work, ./repositories
Used By: src/index.ts
Depends On: Persistence components
Implementation Prerequisites: Persistence components
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
Implementation Order: 185
Current Status: Approved
Security Classification: Internal
Notes: Barrel export file.
DIRECTORY SPECIFICATION
Directory Path: packages/infrastructure/src/cache/
Purpose: Houses Redis Caching Adapters providing high-performance 
O
(
1
)
O(1)
 read-model caching for weekly/daily timetable matrices and teacher workload schedules.
Architectural Layer: Infrastructure Layer / Cache Layer
Package: @kalavruksha/infrastructure
Bounded Context: Timetable Operations, Daily Substitution
Responsibilities:
Stores and retrieves serialized JSON grid matrix response projections in Redis.
Handles targeted cache invalidation upon receiving slot.swapped or timetable.published domain events.
Contained Files:
redis-cache.service.ts
cache-keys.builder.ts
index.ts
Contained Directories: None
Relationships:
Parent: packages/infrastructure/src/
Children: None
Dependencies: ioredis, @kalavruksha/types
Dependents: Query Handlers, Application Layer
Implementation Phase: Phase 3
Freeze Status: Approved
Notes: Redis 
O
(
1
)
O(1)
 grid matrix caching adapter.
File ID: FILE-INFRA-013
Path: packages/infrastructure/src/cache/redis-cache.service.ts
Purpose: Redis cache service implementing string get, set with TTL, and key pattern invalidation for read-side CQRS projections.
Architectural Layer: Infrastructure Layer
Package: @kalavruksha/infrastructure
Bounded Context: All Bounded Contexts
DDD Building Block: Adapter
Owner Module: Infrastructure Architecture Team
Public API: Yes
Internal Only: No
Exports: RedisCacheService
Imports: ioredis, @kalavruksha/config, @kalavruksha/logger
Used By: Query Handlers, Command Handlers
Depends On: ioredis
Implementation Prerequisites: Redis connection
Reverse Dependencies: Query Handlers
Generated or Handwritten: Handwritten
Estimated LOC: 110 lines
Complexity: Medium
Unit Test Required: Yes
Integration Test Required: Yes (Redis cache integration test)
Mutation Test Required: Yes
Performance Test Required: Yes (
O
(
1
)
O(1)
 Redis read/write latency test)
Security Review Required: Yes
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Low
Implementation Order: 186
Current Status: Approved
Security Classification: Internal
Notes: Redis cache adapter.
File ID: FILE-INFRA-014
Path: packages/infrastructure/src/cache/cache-keys.builder.ts
Purpose: Helper utility class building standardized, tenant-isolated Redis cache key strings (tenant:{tenantId}:school:{schoolId}:grid:{timetableId}).
Architectural Layer: Infrastructure Layer
Package: @kalavruksha/infrastructure
Bounded Context: All Bounded Contexts
DDD Building Block: Utility
Owner Module: Infrastructure Architecture Team
Public API: Yes
Internal Only: Yes
Exports: CacheKeysBuilder
Imports: @kalavruksha/types
Used By: RedisCacheService
Depends On: @kalavruksha/types
Implementation Prerequisites: None
Reverse Dependencies: RedisCacheService
Generated or Handwritten: Handwritten
Estimated LOC: 40 lines
Complexity: Low
Unit Test Required: Yes
Integration Test Required: No
Mutation Test Required: Yes
Performance Test Required: No
Security Review Required: Yes (Tenant key isolation check)
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Low
Implementation Order: 187
Current Status: Approved
Security Classification: Internal
Notes: Tenant-isolated cache key builder.
File ID: FILE-INFRA-015
Path: packages/infrastructure/src/cache/index.ts
Purpose: Barrel export for Redis caching adapters.
Architectural Layer: Infrastructure Layer
Package: @kalavruksha/infrastructure
Bounded Context: All Bounded Contexts
DDD Building Block: Configuration
Owner Module: Infrastructure Architecture Team
Public API: Yes
Internal Only: No
Exports: RedisCacheService, CacheKeysBuilder
Imports: ./redis-cache.service, ./cache-keys.builder
Used By: src/index.ts
Depends On: Cache components
Implementation Prerequisites: Cache components
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
Implementation Order: 188
Current Status: Approved
Security Classification: Internal
Notes: Barrel export file.
DIRECTORY SPECIFICATION
Directory Path: packages/infrastructure/src/queue/
Purpose: Houses BullMQ Queue Publishers and Queue Definition constants.
Architectural Layer: Infrastructure Layer / Queue Adapter Layer
Package: @kalavruksha/infrastructure
Bounded Context: All Bounded Contexts
Responsibilities:
Publishes asynchronous background jobs (solve_timetable, send_notification, aggregate_analytics) to Redis BullMQ queues.
Contained Files:
bullmq-publisher.service.ts
queue-definitions.ts
index.ts
Contained Directories: None
Relationships:
Parent: packages/infrastructure/src/
Children: None
Dependencies: bullmq, ioredis
Dependents: Application Command Handlers, Domain Event Subscribers
Implementation Phase: Phase 3
Freeze Status: Approved
Notes: BullMQ queue publisher adapter.
File ID: FILE-INFRA-016
Path: packages/infrastructure/src/queue/bullmq-publisher.service.ts
Purpose: Queue publisher service instantiating BullMQ Queue instances and enqueueing jobs with exponential retry backoff parameters.
Architectural Layer: Infrastructure Layer
Package: @kalavruksha/infrastructure
Bounded Context: All Bounded Contexts
DDD Building Block: Adapter
Owner Module: Infrastructure Architecture Team
Public API: Yes
Internal Only: No
Exports: BullMQPublisherService
Imports: bullmq, @kalavruksha/config, @kalavruksha/logger
Used By: Command Handlers, Outbox Processors
Depends On: bullmq
Implementation Prerequisites: Redis connection
Reverse Dependencies: Outbox processor
Generated or Handwritten: Handwritten
Estimated LOC: 85 lines
Complexity: Medium
Unit Test Required: Yes
Integration Test Required: Yes (BullMQ publisher test)
Mutation Test Required: Yes
Performance Test Required: Yes
Security Review Required: Yes
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Low
Implementation Order: 189
Current Status: Approved
Security Classification: Internal
Notes: BullMQ job enqueueing service.
File ID: FILE-INFRA-017
Path: packages/infrastructure/src/queue/queue-definitions.ts
Purpose: Constants declaring all BullMQ queue names (SOLVER_QUEUE, NOTIFICATION_QUEUE, ANALYTICS_QUEUE, SCHEDULER_QUEUE).
Architectural Layer: Infrastructure Layer
Package: @kalavruksha/infrastructure
Bounded Context: All Bounded Contexts
DDD Building Block: Configuration
Owner Module: Infrastructure Architecture Team
Public API: Yes
Internal Only: No
Exports: Queue name constants
Imports: None
Used By: BullMQPublisherService, Worker microservices
Depends On: None
Implementation Prerequisites: None
Reverse Dependencies: Workers
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
Implementation Order: 190
Current Status: Approved
Security Classification: Internal
Notes: Queue name constants.
File ID: FILE-INFRA-018
Path: packages/infrastructure/src/queue/index.ts
Purpose: Barrel export for queue publisher adapters.
Architectural Layer: Infrastructure Layer
Package: @kalavruksha/infrastructure
Bounded Context: All Bounded Contexts
DDD Building Block: Configuration
Owner Module: Infrastructure Architecture Team
Public API: Yes
Internal Only: No
Exports: BullMQPublisherService, Queue constants
Imports: ./bullmq-publisher.service, ./queue-definitions
Used By: src/index.ts
Depends On: Queue components
Implementation Prerequisites: Queue components
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
Implementation Order: 191
Current Status: Approved
Security Classification: Internal
Notes: Barrel export file.
DIRECTORY SPECIFICATION
Directory Path: packages/infrastructure/src/outbox/
Purpose: Houses Transactional Outbox Pattern writer and background processor services. Guarantees that domain events are written atomically within the local SQL transaction before dispatching to Redis/BullMQ.
Architectural Layer: Infrastructure Layer / Outbox Pattern Layer
Package: @kalavruksha/infrastructure
Bounded Context: All Bounded Contexts
Responsibilities:
Writes serialized domain events to OutboxMessage SQL table within local Prisma unit of work transaction.
Periodically polls unprocessed outbox records and publishes them to BullMQ queues / Event Bus.
Marks outbox records as PROCESSED upon successful queue confirmation.
Contained Files:
outbox-writer.service.ts
outbox-processor.service.ts
index.ts
Contained Directories: None
Relationships:
Parent: packages/infrastructure/src/
Children: None
Dependencies: @prisma/client, @kalavruksha/events, @kalavruksha/logger
Dependents: PrismaUnitOfWork, Background Outbox Worker
Implementation Phase: Phase 3
Freeze Status: Approved
Notes: Transactional Outbox Pattern implementation.
File ID: FILE-INFRA-019
Path: packages/infrastructure/src/outbox/outbox-writer.service.ts
Purpose: Outbox writer service inserting serialized BaseEvent<T> payloads into OutboxMessage table inside active Prisma transaction context.
Architectural Layer: Infrastructure Layer
Package: @kalavruksha/infrastructure
Bounded Context: All Bounded Contexts
DDD Building Block: Adapter
Owner Module: Infrastructure Architecture Team
Public API: Yes
Internal Only: No
Exports: OutboxWriterService
Imports: @prisma/client, @kalavruksha/events
Used By: PrismaUnitOfWork
Depends On: @prisma/client, @kalavruksha/events
Implementation Prerequisites: Prisma schema
Reverse Dependencies: PrismaUnitOfWork
Generated or Handwritten: Handwritten
Estimated LOC: 60 lines
Complexity: Low
Unit Test Required: Yes
Integration Test Required: Yes (Atomic outbox write test)
Mutation Test Required: Yes
Performance Test Required: Yes (
O
(
1
)
O(1)
 outbox write overhead)
Security Review Required: Yes
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Low
Implementation Order: 192
Current Status: Approved
Security Classification: Internal
Notes: Outbox database writer.
File ID: FILE-INFRA-020
Path: packages/infrastructure/src/outbox/outbox-processor.service.ts
Purpose: Background outbox polling processor reading unprocessed OutboxMessage records, publishing them to BullMQ queues, and setting processedAt timestamps.
Architectural Layer: Infrastructure Layer
Package: @kalavruksha/infrastructure
Bounded Context: All Bounded Contexts
DDD Building Block: Adapter
Owner Module: Infrastructure Architecture Team
Public API: Yes
Internal Only: No
Exports: OutboxProcessorService
Imports: @prisma/client, @kalavruksha/logger, ../queue/bullmq-publisher.service
Used By: Background Worker processes
Depends On: @prisma/client, BullMQPublisherService
Implementation Prerequisites: Outbox writer & queue publisher
Reverse Dependencies: Worker microservices
Generated or Handwritten: Handwritten
Estimated LOC: 90 lines
Complexity: Medium
Unit Test Required: Yes
Integration Test Required: Yes (Outbox polling integration test)
Mutation Test Required: Yes
Performance Test Required: Yes
Security Review Required: Yes
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Low
Implementation Order: 193
Current Status: Approved
Security Classification: Internal
Notes: Outbox background polling worker.
File ID: FILE-INFRA-021
Path: packages/infrastructure/src/outbox/index.ts
Purpose: Barrel export for Transactional Outbox pattern services.
Architectural Layer: Infrastructure Layer
Package: @kalavruksha/infrastructure
Bounded Context: All Bounded Contexts
DDD Building Block: Configuration
Owner Module: Infrastructure Architecture Team
Public API: Yes
Internal Only: No
Exports: OutboxWriterService, OutboxProcessorService
Imports: ./outbox-writer.service, ./outbox-processor.service
Used By: src/index.ts
Depends On: Outbox services
Implementation Prerequisites: Outbox services
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
Implementation Order: 194
Current Status: Approved
Security Classification: Internal
Notes: Barrel export file.
DIRECTORY SPECIFICATION
Directory Path: packages/infrastructure/src/transport/
Purpose: Houses concrete Third-Party Network Transport Adapters implementing Application Layer Output Ports (IEmailServicePort, ISmsServicePort, IPushNotificationPort).
Architectural Layer: Infrastructure Layer / Transport Adapter Layer
Package: @kalavruksha/infrastructure
Bounded Context: Notification & Workflow
Responsibilities:
Transmits email messages via SendGrid Mail API.
Transmits SMS messages via Twilio REST API.
Transmits mobile push notifications via Firebase Cloud Messaging (FCM) Admin SDK.
Contained Files:
sendgrid-email.adapter.ts
twilio-sms.adapter.ts
firebase-push.adapter.ts
index.ts
Contained Directories: None
Relationships:
Parent: packages/infrastructure/src/
Children: None
Dependencies: @kalavruksha/application (Ports), @sendgrid/mail, twilio, firebase-admin
Dependents: services/worker-notification
Implementation Phase: Phase 3
Freeze Status: Approved
Notes: Concrete transport adapters for external network gateways.
File ID: FILE-INFRA-022
Path: packages/infrastructure/src/transport/sendgrid-email.adapter.ts
Purpose: Concrete implementation of IEmailServicePort sending email notifications via SendGrid REST API.
Architectural Layer: Infrastructure Layer
Package: @kalavruksha/infrastructure
Bounded Context: Notification & Workflow
DDD Building Block: Adapter
Owner Module: Notification & Workflow Team
Public API: Yes
Internal Only: No
Exports: SendGridEmailAdapter
Imports: @kalavruksha/application, @sendgrid/mail, @kalavruksha/logger
Used By: services/worker-notification
Depends On: @kalavruksha/application Ports, @sendgrid/mail
Implementation Prerequisites: SendGrid SDK
Reverse Dependencies: Notification Worker
Generated or Handwritten: Handwritten
Estimated LOC: 70 lines
Complexity: Low
Unit Test Required: Yes
Integration Test Required: Yes (Mocked SendGrid API test)
Mutation Test Required: No
Performance Test Required: No
Security Review Required: Yes (API Key protection & PII sanitization)
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Low
Implementation Order: 195
Current Status: Approved
Security Classification: PII Handling
Notes: SendGrid email adapter.
File ID: FILE-INFRA-023
Path: packages/infrastructure/src/transport/twilio-sms.adapter.ts
Purpose: Concrete implementation of ISmsServicePort sending SMS notifications via Twilio REST API.
Architectural Layer: Infrastructure Layer
Package: @kalavruksha/infrastructure
Bounded Context: Notification & Workflow
DDD Building Block: Adapter
Owner Module: Notification & Workflow Team
Public API: Yes
Internal Only: No
Exports: TwilioSmsAdapter
Imports: @kalavruksha/application, twilio, @kalavruksha/logger
Used By: services/worker-notification
Depends On: @kalavruksha/application Ports, twilio
Implementation Prerequisites: Twilio SDK
Reverse Dependencies: Notification Worker
Generated or Handwritten: Handwritten
Estimated LOC: 65 lines
Complexity: Low
Unit Test Required: Yes
Integration Test Required: Yes (Mocked Twilio API test)
Mutation Test Required: No
Performance Test Required: No
Security Review Required: Yes (PII sanitization)
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Low
Implementation Order: 196
Current Status: Approved
Security Classification: PII Handling
Notes: Twilio SMS adapter.
File ID: FILE-INFRA-024
Path: packages/infrastructure/src/transport/firebase-push.adapter.ts
Purpose: Concrete implementation of IPushNotificationPort sending FCM push alerts to mobile applications.
Architectural Layer: Infrastructure Layer
Package: @kalavruksha/infrastructure
Bounded Context: Notification & Workflow
DDD Building Block: Adapter
Owner Module: Notification & Workflow Team
Public API: Yes
Internal Only: No
Exports: FirebasePushAdapter
Imports: @kalavruksha/application, firebase-admin, @kalavruksha/logger
Used By: services/worker-notification
Depends On: @kalavruksha/application Ports, firebase-admin
Implementation Prerequisites: Firebase SDK
Reverse Dependencies: Notification Worker
Generated or Handwritten: Handwritten
Estimated LOC: 75 lines
Complexity: Low
Unit Test Required: Yes
Integration Test Required: Yes (Mocked FCM test)
Mutation Test Required: No
Performance Test Required: No
Security Review Required: Yes
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Low
Implementation Order: 197
Current Status: Approved
Security Classification: PII Handling
Notes: Firebase Cloud Messaging push adapter.
File ID: FILE-INFRA-025
Path: packages/infrastructure/src/transport/index.ts
Purpose: Barrel export for transport adapters.
Architectural Layer: Infrastructure Layer
Package: @kalavruksha/infrastructure
Bounded Context: All Bounded Contexts
DDD Building Block: Configuration
Owner Module: Infrastructure Architecture Team
Public API: Yes
Internal Only: No
Exports: All transport adapters
Imports: Adapter files in directory
Used By: src/index.ts
Depends On: Adapter files
Implementation Prerequisites: Adapter files
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
Implementation Order: 198
Current Status: Approved
Security Classification: Internal
Notes: Barrel export file.
PACKAGE METADATA: @kalavruksha/infrastructure
Package Dependency Graph: @kalavruksha/infrastructure 
→
→
 @kalavruksha/domain, @kalavruksha/application, @kalavruksha/types, @kalavruksha/errors, @kalavruksha/events, @kalavruksha/utils, @kalavruksha/config, @kalavruksha/logger, @prisma/client, ioredis, bullmq.
Allowed Imports: Workspace packages, Database drivers, Transport SDKs (@sendgrid/mail, twilio, firebase-admin).
Forbidden Imports: @kalavruksha/ui, Next.js, React, NestJS controllers.
Public Surface: Prisma Repositories, PrismaUnitOfWork, RedisCacheService, BullMQPublisherService, OutboxWriterService, OutboxProcessorService, Transport Adapters.
Internal Surface: Internal SQL mappers and key builders.
Barrel Export Rules: Subpath exports defined in package.json.
Layer Validation: Tier 3 Infrastructure Layer.
Circular Dependency Status: Clean.
QUALITY VALIDATION: @kalavruksha/infrastructure
Architecture Validation: 100% Compliant
Dependency Validation: 100% Compliant
Boundary Validation: 100% Compliant
Type Safety: Strict TypeScript 5.x + Prisma Client
Coverage Target: 
>
85
%
>85%
 Repository & Adapter integration test coverage
Mutation Target: 
>
80
%
>80%
 Persistence & Outbox mutation coverage
Performance Target: 
<
20
ms
<20ms
 database query latency (99th percentile)
Static Analysis Status: Clean
Security Status: Clean (TenantId mandatory filter enforcement on all Prisma queries)
PART SUMMARY
Directories completed: 10 (packages/infrastructure/, src/, persistence/, repositories/, cache/, queue/, outbox/, transport/, database/, infrastructure/)
Files completed: 25 (Cumulative: 198 files)
Packages completed: 15 (Root Workspace, @kalavruksha/eslint-config, prettier-config, tsconfig, apps/api, services/worker-solver, worker-notification, worker-analytics, worker-scheduler, web-admin, web-teacher, web-superadmin, web-parent, @kalavruksha/application, @kalavruksha/infrastructure)
Remaining directories: 116
Remaining files: 1,302
Implementation progress: 70 / 186 directories completed
Repository completion percentage: 37.63%
Estimated remaining parts: 6 sequential parts
NEXT PART:
packages/solver/