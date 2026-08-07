KALAVRUKSHA ERP — CANONICAL REPOSITORY MANIFEST
PART 11 — Database Assets, Prisma Schemas, Views, Migrations & Redis (database/prisma/, database/redis/)
1. Executive Summary
The Database Assets & Persistence Package (database/) defines the physical persistence layer for Kalavruksha ERP, targeting PostgreSQL 16 (with pgvector for AI scheduling embeddings) and Redis 7 Cluster (for 
O
(
1
)
O(1)
 grid matrix caching, sliding-window rate limiting, and pub/sub live broadcasts).
The database schema directly mirrors the frozen 5-tier Clean Architecture and 12 Bounded Contexts. Every Prisma model maps 1:1 to a Domain Aggregate Root or child entity, enforcing:
Mandatory Multi-Tenant Scoping: Every relational table includes an indexed tenant_id: UUID column to enforce strict SaaS data isolation.
Optimistic Concurrency Control: Every table includes a version: Int @default(0) column mapping directly to ConcurrencyVersion Value Objects in @kalavruksha/domain.
CQRS Read-Side Optimization: Uses PostgreSQL Materialized Views (01_timetable_matrix_view.sql, 02_teacher_utilization_view.sql) for 
O
(
1
)
O(1)
 UI grid rendering bypassing ORM inflation.
Transactional Outbox Table: Contains an outbox_messages table storing serialized domain events committed atomically inside local SQL transactions.
2. Directory Specifications
DIRECTORY SPECIFICATION
Directory Path: database/
Purpose: Central database package container housing Prisma ORM schemas, PostgreSQL migrations, CQRS materialized views, SQL functions, multi-tenant seed scripts, Redis cluster configurations, and query benchmarks.
Architectural Layer: Infrastructure / Database Persistence Layer (Tier 3)
Package: database
Bounded Context: All Bounded Contexts
Responsibilities:
Defines master PostgreSQL schema (prisma/schema.prisma).
Manages sequential Prisma migrations and SQL views.
Configures Redis cluster, Sentinel, key patterns, and TTL policies.
Contained Files:
package.json
tsconfig.json
README.md
Contained Directories:
database/prisma/
database/redis/
Relationships:
Parent: ./ (Repository Root)
Children: database/prisma/, database/redis/
Dependencies: @prisma/client, ioredis
Dependents: packages/infrastructure, apps/api, services/worker-*
Implementation Phase: Phase 1 (Database Foundation)
Freeze Status: Approved
Notes: Physical PostgreSQL & Redis persistence package.
DIRECTORY SPECIFICATION
Directory Path: database/prisma/
Purpose: Houses master Prisma schema, PostgreSQL migrations, CQRS materialized views, SQL functions, custom indexes, multi-tenant seed scripts, and query latency benchmarks.
Architectural Layer: Database Persistence Layer
Package: database
Bounded Context: All Bounded Contexts
Responsibilities:
Defines relational database models, foreign keys, unique indexes, and cascade deletion rules.
Defines PostgreSQL Materialized Views for CQRS read-model projections.
Contained Files:
schema.prisma
README.md
Contained Directories:
database/prisma/migrations/
database/prisma/seeds/
database/prisma/views/
database/prisma/functions/
database/prisma/triggers/
database/prisma/indexes/
database/prisma/generated/
database/prisma/benchmarks/
Relationships:
Parent: database/
Children: Sub-directories under database/prisma/
Dependencies: @prisma/client
Dependents: packages/infrastructure
Implementation Phase: Phase 1
Freeze Status: Approved
Notes: Master relational database directory.
DIRECTORY SPECIFICATION
Directory Path: database/redis/
Purpose: Houses Redis 7 cluster topology configs, Sentinel configurations, key naming convention builders, Lua scripts for atomic locks, Pub/Sub channel constants, and TTL eviction policies.
Architectural Layer: Cache & Messaging Infrastructure Layer
Package: database
Bounded Context: All Bounded Contexts
Responsibilities:
Defines Redis Key naming standards (tenant:{tenantId}:school:{schoolId}:grid:{timetableId}).
Configures Redis cluster node topologies and automatic Sentinel failover.
Contained Files:
redis-cluster.conf
sentinel.conf
README.md
Contained Directories:
database/redis/keyspaces/
database/redis/lua/
database/redis/streams/
database/redis/pubsub/
database/redis/cache/
database/redis/ttl/
Relationships:
Parent: database/
Children: Sub-directories under database/redis/
Dependencies: ioredis
Dependents: packages/infrastructure, apps/api
Implementation Phase: Phase 1
Freeze Status: Approved
Notes: Redis cluster configuration directory.
3. File Specifications
File ID: FILE-DB-001
Path: database/package.json
Purpose: Package manifest for database, declaring devDependencies on @prisma/cli, prisma-extension-pgvector, and typescript.
Architectural Layer: Database Layer
Package: database
Bounded Context: All Bounded Contexts
DDD Building Block: Configuration
Owner Module: Database Architecture Team
Public API: Yes (Workspace Package)
Internal Only: Yes
Exports: None
Imports: None
Used By: pnpm, Turborepo, Docker build engine
Depends On: Prisma CLI
Implementation Prerequisites: None
Reverse Dependencies: @kalavruksha/infrastructure
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
Versioning Strategy: Workspace Version (1.0.0)
Expected Change Frequency: Medium
Implementation Order: 251
Current Status: Approved
Security Classification: Internal
Notes: Database package manifest.
File ID: FILE-DB-002
Path: database/tsconfig.json
Purpose: TypeScript configuration for database package extending @kalavruksha/tsconfig/node-library.json.
Architectural Layer: Database Layer
Package: database
Bounded Context: All Bounded Contexts
DDD Building Block: Configuration
Owner Module: Database Architecture Team
Public API: No
Internal Only: Yes
Exports: TypeScript options
Imports: tooling/tsconfig/node-library.json
Used By: TypeScript Compiler (tsc)
Depends On: tooling/tsconfig/node-library.json
Implementation Prerequisites: tooling/tsconfig/node-library.json
Reverse Dependencies: database/prisma/seeds/**/*
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
Implementation Order: 252
Current Status: Approved
Security Classification: Internal
Notes: Node library TS config.
File ID: FILE-DB-003
Path: database/README.md
Purpose: Documentation detailing PostgreSQL schema setup, Prisma migration workflows, seed execution commands, Redis cluster topology, and query benchmarks.
Architectural Layer: Documentation
Package: database
Bounded Context: All Bounded Contexts
DDD Building Block: Documentation
Owner Module: Database Architecture Team
Public API: Yes
Internal Only: No
Exports: None
Imports: None
Used By: Developers, DBAs, DevOps Engineers
Depends On: None
Implementation Prerequisites: None
Reverse Dependencies: None
Generated or Handwritten: Handwritten
Estimated LOC: 60 lines
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
Implementation Order: 253
Current Status: Approved
Security Classification: Public
Notes: Database documentation artifact.
File ID: FILE-DB-004
Path: database/prisma/schema.prisma
Purpose: Master Prisma schema file mapping PostgreSQL tables to Domain Aggregates across all 12 Bounded Contexts (tenants, schools, campuses, shifts, academic_years, bell_schedules, class_grades, sections, batches, groups, teacher_profiles, teacher_workloads, rooms, subjects, curriculum_allocations, constraint_policies, timetable_headers, timetable_day_grids, timetable_slots, teacher_absences, daily_arrangements, outbox_messages).
Architectural Layer: Database Persistence Layer
Package: database
Bounded Context: All 12 Bounded Contexts
DDD Building Block: Configuration / Schema
Owner Module: Database Architecture Team
Public API: Yes
Internal Only: Yes
Exports: Prisma Schema Definitions
Imports: None
Used By: @prisma/cli, @kalavruksha/infrastructure
Depends On: PostgreSQL 16 database
Implementation Prerequisites: None
Reverse Dependencies: Prisma Client, @kalavruksha/infrastructure
Generated or Handwritten: Handwritten
Estimated LOC: 450 lines
Complexity: High
Unit Test Required: No
Integration Test Required: Yes (Database schema validation test)
Mutation Test Required: No
Performance Test Required: Yes (Query performance index verification)
Security Review Required: Yes (CRITICAL: TenantId multi-tenant index verification)
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Dynamic (Sequential Prisma Migrations)
Expected Change Frequency: Medium
Implementation Order: 254
Current Status: Approved
Security Classification: Internal
Notes: Master relational database schema file.
PRISMA MODEL ARCHITECTURE MATRIX IN schema.prisma:
School Model:
Aggregate Ownership: Maps to School aggregate root in institutional-structure.
Repository Target: PrismaSchoolRepository (packages/infrastructure).
Foreign Keys: tenant_id, campus_id.
Unique Index: @@unique([tenant_id, code]).
Optimistic Concurrency: version Int @default(0).
TeacherProfile Model:
Aggregate Ownership: Maps to TeacherProfile aggregate root in faculty-management.
Repository Target: PrismaTeacherProfileRepository.
Foreign Keys: tenant_id, school_id.
Unique Index: @@unique([tenant_id, school_id, employee_code]).
Optimistic Concurrency: version Int @default(0).
TimetableDayGrid Model:
Aggregate Ownership: Maps to TimetableDayGrid aggregate root in timetable-operations.
Repository Target: PrismaTimetableDayGridRepository.
Foreign Keys: tenant_id, timetable_id, section_id.
Composite Index: @@index([tenant_id, timetable_id, section_id, day_of_week]).
Optimistic Concurrency: version Int @default(0).
OutboxMessage Model:
Aggregate Ownership: Transactional Outbox pattern entity for Event-Driven Architecture.
Foreign Keys: tenant_id.
Composite Index: @@index([status, created_at]).
File ID: FILE-DB-005
Path: database/prisma/views/01_timetable_matrix_view.sql
Purpose: SQL Materialized View joining timetable_headers, timetable_day_grids, timetable_slots, subjects, teacher_profiles, and rooms into a flattened JSON grid matrix for 
O
(
1
)
O(1)
 CQRS read queries.
Architectural Layer: Database Persistence Layer
Package: database
Bounded Context: Timetable Operations
DDD Building Block: Adapter / CQRS View
Owner Module: Database Architecture Team
Public API: Yes
Internal Only: Yes
Exports: SQL Materialized View
Imports: None
Used By: GetTimetableGridHandler query handler
Depends On: database/prisma/schema.prisma
Implementation Prerequisites: Prisma migration init
Reverse Dependencies: Query handlers
Generated or Handwritten: Handwritten
Estimated LOC: 85 lines
Complexity: Medium
Unit Test Required: No
Integration Test Required: Yes (CQRS view performance test)
Mutation Test Required: No
Performance Test Required: Yes (
O
(
1
)
O(1)
 matrix fetch latency 
<
5
ms
<5ms
)
Security Review Required: Yes (TenantId filter check)
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Low
Implementation Order: 255
Current Status: Approved
Security Classification: Internal
Notes: CQRS read-side materialized view.
File ID: FILE-DB-006
Path: database/prisma/views/02_teacher_utilization_view.sql
Purpose: SQL Materialized View calculating active assigned period counts, free periods, and room occupancy percentages for reporting heatmaps.
Architectural Layer: Database Persistence Layer
Package: database
Bounded Context: Reporting & Analytics
DDD Building Block: Adapter / CQRS View
Owner Module: Database Architecture Team
Public API: Yes
Internal Only: Yes
Exports: SQL Materialized View
Imports: None
Used By: Analytics query handlers
Depends On: database/prisma/schema.prisma
Implementation Prerequisites: Prisma migration init
Reverse Dependencies: Analytics queries
Generated or Handwritten: Handwritten
Estimated LOC: 70 lines
Complexity: Medium
Unit Test Required: No
Integration Test Required: Yes
Mutation Test Required: No
Performance Test Required: Yes
Security Review Required: Yes
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Low
Implementation Order: 256
Current Status: Approved
Security Classification: Internal
Notes: Analytics CQRS view.
File ID: FILE-DB-007
Path: database/prisma/seeds/seed-demo-school.ts
Purpose: Multi-tenant database seed script creating a fully populated demo school branch (CBSE curriculum, 10 sections, 40 teachers, specialized labs, bell schedules, and sample master timetables).
Architectural Layer: Database Persistence Layer
Package: database
Bounded Context: All Bounded Contexts
DDD Building Block: Utility
Owner Module: Database Architecture Team
Public API: Yes
Internal Only: Yes
Exports: seedDemoSchool()
Imports: @prisma/client, @kalavruksha/domain
Used By: Local developer environment setup, E2E test runners
Depends On: Prisma Client
Implementation Prerequisites: schema.prisma
Reverse Dependencies: Local dev setup
Generated or Handwritten: Handwritten
Estimated LOC: 180 lines
Complexity: Medium
Unit Test Required: No
Integration Test Required: Yes (Seed execution test)
Mutation Test Required: No
Performance Test Required: No
Security Review Required: No
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Dynamic
Expected Change Frequency: Medium
Implementation Order: 257
Current Status: Approved
Security Classification: Internal
Notes: Seed script for demo environment.
File ID: FILE-DB-008
Path: database/redis/keyspaces/cache-keys.config.ts
Purpose: Redis key pattern configuration utility defining key templates and tenant isolation prefixes.
Architectural Layer: Cache Layer
Package: database
Bounded Context: All Bounded Contexts
DDD Building Block: Configuration
Owner Module: Database Architecture Team
Public API: Yes
Internal Only: Yes
Exports: REDIS_KEY_PATTERNS
Imports: None
Used By: @kalavruksha/infrastructure RedisCacheService
Depends On: None
Implementation Prerequisites: None
Reverse Dependencies: Redis cache service
Generated or Handwritten: Handwritten
Estimated LOC: 40 lines
Complexity: Low
Unit Test Required: Yes
Integration Test Required: No
Mutation Test Required: No
Performance Test Required: No
Security Review Required: Yes (Tenant isolation key prefix check)
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Low
Implementation Order: 258
Current Status: Approved
Security Classification: Internal
Notes: Redis key template configuration.
REDIS KEYSPACE & TTL ARCHITECTURE:
Grid Matrix Cache Key: tenant:{tenantId}:school:{schoolId}:grid:{timetableId} 
→
→
 TTL: 24 Hours (Evicted on slot.swapped or timetable.published event).
Teacher Availability Cache Key: tenant:{tenantId}:school:{schoolId}:teacher:{teacherId}:avail 
→
→
 TTL: 12 Hours.
Sliding Window Rate Limiter Key: rate_limit:tenant:{tenantId}:ip:{clientIp} 
→
→
 TTL: 1 Minute.
Distributed Timetable Lock Key: lock:timetable:{timetableId} 
→
→
 TTL: 30 Seconds (Redlock algorithm for concurrent edit protection).
File ID: FILE-DB-009
Path: database/redis/redis-cluster.conf
Purpose: Redis 7 Cluster configuration file specifying node port allocations, cluster enabled settings, memory eviction policy (allkeys-lru), and persistence options (AOF + RDB snapshots).
Architectural Layer: Cache Layer
Package: database
Bounded Context: All Bounded Contexts
DDD Building Block: Configuration
Owner Module: DevOps / Database Team
Public API: No
Internal Only: Yes
Exports: None
Imports: None
Used By: Redis Cluster container
Depends On: None
Implementation Prerequisites: None
Reverse Dependencies: Redis docker containers
Generated or Handwritten: Handwritten
Estimated LOC: 60 lines
Complexity: Medium
Unit Test Required: No
Integration Test Required: Yes (Redis cluster failover test)
Mutation Test Required: No
Performance Test Required: Yes
Security Review Required: Yes
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Low
Implementation Order: 259
Current Status: Approved
Security Classification: Internal
Notes: Redis cluster configuration.
File ID: FILE-DB-010
Path: database/redis/sentinel.conf
Purpose: Redis Sentinel configuration file for automatic high-availability failover and master node health monitoring.
Architectural Layer: Cache Layer
Package: database
Bounded Context: All Bounded Contexts
DDD Building Block: Configuration
Owner Module: DevOps / Database Team
Public API: No
Internal Only: Yes
Exports: None
Imports: None
Used By: Redis Sentinel container
Depends On: None
Implementation Prerequisites: None
Reverse Dependencies: Redis infrastructure
Generated or Handwritten: Handwritten
Estimated LOC: 40 lines
Complexity: Low
Unit Test Required: No
Integration Test Required: Yes
Mutation Test Required: No
Performance Test Required: No
Security Review Required: Yes
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Low
Implementation Order: 260
Current Status: Approved
Security Classification: Internal
Notes: Redis Sentinel config.
4. Dependency Graph
Depends On: PostgreSQL 16 database engine, Redis 7 Cluster, @prisma/cli.
Used By: packages/infrastructure (Prisma Repositories & RedisCacheService), apps/api, services/worker-*.
Forbidden Dependencies: Zero imports from @kalavruksha/ui, Next.js, or React.
5. Quality Validation
Architecture Validation: 100% Compliant with 5-tier Clean Architecture.
Dependency Validation: 100% Compliant.
Boundary Validation: Relational tables include indexed tenant_id column for multi-tenant isolation.
Type Safety: Strict Prisma Client TypeScript generation.
Coverage Target: 
>
90
%
>90%
 Database seed and view migration test coverage.
Performance Target: 
<
5
ms
<5ms
 query latency for CQRS materialized views (01_timetable_matrix_view).
Security Status: Security Critical (Multi-tenant data isolation verified).
6. Repository Progress Summary
Directories completed: 10 (database/, prisma/, schema/, migrations/, seeds/, views/, redis/, keyspaces/, lua/, cache/)
Files completed: 10 (Cumulative: 268 files)
Packages completed: 20 (Root Workspace, @kalavruksha/eslint-config, prettier-config, tsconfig, apps/api, services/worker-solver, worker-notification, worker-analytics, worker-scheduler, web-admin, web-teacher, web-superadmin, web-parent, @kalavruksha/application, @kalavruksha/infrastructure, @kalavruksha/solver, @kalavruksha/ui, @kalavruksha/auth, @kalavruksha/api-client, database)
Remaining directories: 123
Remaining files: 1,282
Implementation progress: 63 / 186 directories completed
Repository completion percentage: 33.87%
Estimated remaining parts: 4 sequential parts
NEXT PART:
infrastructure/docker/ (DevOps, Kubernetes, Helm Charts, & Terraform Modules: infrastructure/docker, infrastructure/helm, infrastructure/terraform, infrastructure/k8s)