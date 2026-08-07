KALAVRUKSHA ERP — CANONICAL REPOSITORY MANIFEST
PART 4 — BullMQ Solver Worker Microservice (services/worker-solver/)
DIRECTORY SPECIFICATION
Directory Path: services/worker-solver/
Purpose: Asynchronous BullMQ Solver Worker Microservice directory. Houses the distributed worker process responsible for consuming timetable generation jobs (solve_timetable), executing parallel genetic search and backtracking optimization algorithms via @kalavruksha/solver, emitting progress snapshots, and returning solution vectors.
Architectural Layer: Tier 2 Asynchronous Worker Microservice Layer
Package: services/worker-solver
Bounded Context: Solver Orchestration Sub-Domain
Responsibilities:
Consumes asynchronous solve_timetable queue jobs from Redis BullMQ queues.
De-serializes problem matrices and constraint policies into @kalavruksha/solver vector structures.
Executes parallel population search iterations using worker threads/clusters.
Publishes real-time iteration progress metrics and soft penalty score improvements to Redis pub/sub.
Commits generated timetable solution vectors back to Timetable Operations Sub-Domain via Application Layer commands.
Contained Files:
package.json
tsconfig.json
README.md
Contained Directories:
services/worker-solver/src/
Relationships:
Parent: services/
Children: services/worker-solver/src/
Dependencies: @kalavruksha/domain, @kalavruksha/application, @kalavruksha/infrastructure, @kalavruksha/solver, @kalavruksha/types, @kalavruksha/errors, @kalavruksha/events, @kalavruksha/logger, @kalavruksha/config
Dependents: Kubernetes Solver Deployment Cluster
Implementation Phase: Phase 3 (Asynchronous Workers & Solver Engine)
Freeze Status: Approved
Notes: Designed for horizontal auto-scaling in Kubernetes up to 50+ worker pods based on queue depth metrics.
File ID: FILE-WRK-SOLVER-001
Path: services/worker-solver/package.json
Purpose: Package manifest for services/worker-solver, declaring dependencies on @kalavruksha/* packages, BullMQ queue engine, IORedis, and Node.js worker thread pools.
Architectural Layer: Worker Microservice
Package: services/worker-solver
Bounded Context: Solver Orchestration
DDD Building Block: Configuration
Owner Module: Timetable Solver Team
Public API: No (Deployable Microservice)
Internal Only: Yes
Exports: None
Imports: Workspace packages
Used By: pnpm, Turborepo, Docker build engine
Depends On: All @kalavruksha/* packages
Implementation Prerequisites: @kalavruksha/solver, @kalavruksha/infrastructure
Reverse Dependencies: Kubernetes deployment manifests
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
Versioning Strategy: Application Version (1.0.0)
Expected Change Frequency: Medium
Implementation Order: 71
Current Status: Approved
Security Classification: Internal
Notes: Deployable worker microservice manifest.
File ID: FILE-WRK-SOLVER-002
Path: services/worker-solver/tsconfig.json
Purpose: TypeScript configuration for the solver worker extending @kalavruksha/tsconfig/node-library.json, configuring Node22 target and worker thread typings.
Architectural Layer: Worker Microservice
Package: services/worker-solver
Bounded Context: Solver Orchestration
DDD Building Block: Configuration
Owner Module: Timetable Solver Team
Public API: No
Internal Only: Yes
Exports: TypeScript options
Imports: tooling/tsconfig/node-library.json
Used By: TypeScript Compiler (tsc), Turborepo
Depends On: tooling/tsconfig/node-library.json
Implementation Prerequisites: tooling/tsconfig/node-library.json
Reverse Dependencies: services/worker-solver/src/**/*
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
Implementation Order: 72
Current Status: Approved
Security Classification: Internal
Notes: Strips DOM typings for server purity.
File ID: FILE-WRK-SOLVER-003
Path: services/worker-solver/README.md
Purpose: Documentation for services/worker-solver detailing BullMQ queue consumption, concurrency settings, environment variables, local Docker testing, and Kubernetes scaling metrics.
Architectural Layer: Documentation
Package: services/worker-solver
Bounded Context: Solver Orchestration
DDD Building Block: Documentation
Owner Module: Timetable Solver Team
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
Implementation Order: 73
Current Status: Approved
Security Classification: Public
Notes: Documentation artifact.
DIRECTORY SPECIFICATION
Directory Path: services/worker-solver/src/
Purpose: Source root directory housing worker bootstrap logic, BullMQ queue configurations, job consumers, execution processors, and unit test suites.
Architectural Layer: Worker Microservice / Execution Layer
Package: services/worker-solver
Bounded Context: Solver Orchestration
Responsibilities:
Bootstraps worker process and connects to Redis BullMQ queue.
Manages worker concurrency and graceful shutdown handlers (SIGTERM, SIGINT).
Contained Files:
main.ts
index.ts
Contained Directories:
services/worker-solver/src/consumers/
services/worker-solver/src/processors/
services/worker-solver/src/queues/
services/worker-solver/src/__tests__/
Relationships:
Parent: services/worker-solver/
Children: Sub-directories under services/worker-solver/src/
Dependencies: @kalavruksha/* workspace packages
Dependents: Kubernetes worker pods
Implementation Phase: Phase 3
Freeze Status: Approved
Notes: Worker process entry point.
File ID: FILE-WRK-SOLVER-004
Path: services/worker-solver/src/main.ts
Purpose: Bootstrap entry point for services/worker-solver. Initializes Redis connection, attaches BullMQ worker listeners, sets process concurrency (
concurrency
=
4
concurrency=4
), registers OpenTelemetry tracing, and establishes graceful termination signal handlers.
Architectural Layer: Worker Microservice
Package: services/worker-solver
Bounded Context: Solver Orchestration
DDD Building Block: Adapter
Owner Module: Timetable Solver Team
Public API: No (Executable Bootstrap)
Internal Only: Yes
Exports: None
Imports: bullmq, @kalavruksha/logger, @kalavruksha/config, ./consumers/solver-job.consumer
Used By: Node.js process runner, Docker container entrypoint
Depends On: ./consumers/solver-job.consumer.ts
Implementation Prerequisites: ./consumers/solver-job.consumer.ts
Reverse Dependencies: K8s pod deployments
Generated or Handwritten: Handwritten
Estimated LOC: 80 lines
Complexity: Medium
Unit Test Required: No
Integration Test Required: Yes (Worker process lifecycle test)
Mutation Test Required: No
Performance Test Required: Yes (Worker startup latency check)
Security Review Required: Yes
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Dynamic
Expected Change Frequency: Low
Implementation Order: 74
Current Status: Approved
Security Classification: Internal
Notes: Executable worker entry point.
File ID: FILE-WRK-SOLVER-005
Path: services/worker-solver/src/index.ts
Purpose: Barrel export file for services/worker-solver.
Architectural Layer: Worker Microservice
Package: services/worker-solver
Bounded Context: Solver Orchestration
DDD Building Block: Configuration
Owner Module: Timetable Solver Team
Public API: Yes
Internal Only: Yes
Exports: Worker configuration and consumer references
Imports: Internal worker subpaths
Used By: main.ts, Test suites
Depends On: Internal worker subpaths
Implementation Prerequisites: Internal modules
Reverse Dependencies: main.ts
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
Implementation Order: 75
Current Status: Approved
Security Classification: Internal
Notes: Barrel export file.
DIRECTORY SPECIFICATION
Directory Path: services/worker-solver/src/consumers/
Purpose: Houses BullMQ Job Consumers receiving solve_timetable jobs from Redis queues.
Architectural Layer: Worker Microservice / Consumer Layer
Package: services/worker-solver
Bounded Context: Solver Orchestration
Responsibilities:
Listens for incoming solve_timetable queue events.
Extracts TenantId, SchoolId, SolverJobId, problem matrices, and policy weights from job payload.
Delegates job execution to SolverExecutionProcessor.
Contained Files:
solver-job.consumer.ts
index.ts
Contained Directories: None
Relationships:
Parent: services/worker-solver/src/
Children: None
Dependencies: bullmq, @kalavruksha/domain, @kalavruksha/application
Dependents: main.ts
Implementation Phase: Phase 3
Freeze Status: Approved
Notes: BullMQ queue listener layer.
File ID: FILE-WRK-SOLVER-006
Path: services/worker-solver/src/consumers/solver-job.consumer.ts
Purpose: BullMQ queue consumer class registering solve_timetable job handler. Parses job payload, instantiates tenant isolation context, and invokes SolverExecutionProcessor.
Architectural Layer: Worker Microservice
Package: services/worker-solver
Bounded Context: Solver Orchestration
DDD Building Block: Adapter
Owner Module: Timetable Solver Team
Public API: Yes
Internal Only: Yes
Exports: SolverJobConsumer
Imports: bullmq, @kalavruksha/domain, @kalavruksha/application, ../processors/solver-execution.processor
Used By: main.ts
Depends On: ../processors/solver-execution.processor.ts
Implementation Prerequisites: ../processors/solver-execution.processor.ts
Reverse Dependencies: main.ts
Generated or Handwritten: Handwritten
Estimated LOC: 85 lines
Complexity: Medium
Unit Test Required: Yes
Integration Test Required: Yes (BullMQ job consumer test)
Mutation Test Required: No
Performance Test Required: Yes (
O
(
1
)
O(1)
 job deserialization overhead)
Security Review Required: Yes
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Medium
Implementation Order: 76
Current Status: Approved
Security Classification: Internal
Notes: Consumes BullMQ solve_timetable jobs.
File ID: FILE-WRK-SOLVER-007
Path: services/worker-solver/src/consumers/index.ts
Purpose: Barrel export for worker job consumers.
Architectural Layer: Worker Microservice
Package: services/worker-solver
Bounded Context: Solver Orchestration
DDD Building Block: Configuration
Owner Module: Timetable Solver Team
Public API: Yes
Internal Only: Yes
Exports: SolverJobConsumer
Imports: ./solver-job.consumer
Used By: main.ts
Depends On: Consumers in directory
Implementation Prerequisites: Consumers
Reverse Dependencies: main.ts
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
Implementation Order: 77
Current Status: Approved
Security Classification: Internal
Notes: Barrel export file.
DIRECTORY SPECIFICATION
Directory Path: services/worker-solver/src/processors/
Purpose: Houses computational job execution processors executing optimization algorithms using @kalavruksha/solver.
Architectural Layer: Worker Microservice / Processor Layer
Package: services/worker-solver
Bounded Context: Solver Orchestration
Responsibilities:
Executes parallel genetic search and backtracking solvers via @kalavruksha/solver.
Emits real-time iteration progress snapshots to Redis pub/sub channels.
Dispatches completion commands to @kalavruksha/application.
Contained Files:
solver-execution.processor.ts
index.ts
Contained Directories: None
Relationships:
Parent: services/worker-solver/src/
Children: None
Dependencies: @kalavruksha/solver, @kalavruksha/application, @kalavruksha/domain
Dependents: solver-job.consumer.ts
Implementation Phase: Phase 3
Freeze Status: Approved
Notes: Computational core processor.
File ID: FILE-WRK-SOLVER-008
Path: services/worker-solver/src/processors/solver-execution.processor.ts
Purpose: Execution processor running the genetic search optimization loop via @kalavruksha/solver. Converts problem matrices into solution vectors, evaluates hard/soft constraints, emits progress metrics, and commits generated solution vectors.
Architectural Layer: Worker Microservice
Package: services/worker-solver
Bounded Context: Solver Orchestration
DDD Building Block: Adapter
Owner Module: Timetable Solver Team
Public API: Yes
Internal Only: Yes
Exports: SolverExecutionProcessor
Imports: @kalavruksha/solver, @kalavruksha/application, @kalavruksha/domain
Used By: solver-job.consumer.ts
Depends On: @kalavruksha/solver, @kalavruksha/application
Implementation Prerequisites: @kalavruksha/solver, @kalavruksha/application
Reverse Dependencies: solver-job.consumer.ts
Generated or Handwritten: Handwritten
Estimated LOC: 140 lines
Complexity: High
Unit Test Required: Yes
Integration Test Required: Yes (Full solver execution test)
Mutation Test Required: Yes
Performance Test Required: Yes (Benchmark solver run latency)
Security Review Required: Yes
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Medium
Implementation Order: 78
Current Status: Approved
Security Classification: Internal
Notes: Main solver computational loop runner.
File ID: FILE-WRK-SOLVER-009
Path: services/worker-solver/src/processors/index.ts
Purpose: Barrel export for worker job processors.
Architectural Layer: Worker Microservice
Package: services/worker-solver
Bounded Context: Solver Orchestration
DDD Building Block: Configuration
Owner Module: Timetable Solver Team
Public API: Yes
Internal Only: Yes
Exports: SolverExecutionProcessor
Imports: ./solver-execution.processor
Used By: solver-job.consumer.ts
Depends On: Processors in directory
Implementation Prerequisites: Processors
Reverse Dependencies: Consumer files
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
Implementation Order: 79
Current Status: Approved
Security Classification: Internal
Notes: Barrel export file.
DIRECTORY SPECIFICATION
Directory Path: services/worker-solver/src/queues/
Purpose: Houses BullMQ queue configurations, retry policies, backoff strategies, and dead-letter queue (DLQ) settings for solver jobs.
Architectural Layer: Worker Microservice / Queue Configuration Layer
Package: services/worker-solver
Bounded Context: Solver Orchestration
Responsibilities:
Configures BullMQ queue parameters (attempts: 3, exponential backoff).
Configures Dead Letter Queue (DLQ) routing for failed solver attempts.
Contained Files:
solver-queue.config.ts
index.ts
Contained Directories: None
Relationships:
Parent: services/worker-solver/src/
Children: None
Dependencies: bullmq
Dependents: main.ts, solver-job.consumer.ts
Implementation Phase: Phase 3
Freeze Status: Approved
Notes: Queue configuration layer.
File ID: FILE-WRK-SOLVER-010
Path: services/worker-solver/src/queues/solver-queue.config.ts
Purpose: BullMQ queue configuration object defining queue name (solve_timetable), attempt limits, exponential retry backoff, job timeout limits (
15
 minutes
15 minutes
), and Redis connection settings.
Architectural Layer: Worker Microservice
Package: services/worker-solver
Bounded Context: Solver Orchestration
DDD Building Block: Configuration
Owner Module: Timetable Solver Team
Public API: Yes
Internal Only: Yes
Exports: SOLVER_QUEUE_CONFIG, SOLVER_QUEUE_NAME
Imports: bullmq
Used By: main.ts, solver-job.consumer.ts
Depends On: None
Implementation Prerequisites: None
Reverse Dependencies: Queue listeners and producers
Generated or Handwritten: Handwritten
Estimated LOC: 45 lines
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
Implementation Order: 80
Current Status: Approved
Security Classification: Internal
Notes: Queue parameters and retry policy.
File ID: FILE-WRK-SOLVER-011
Path: services/worker-solver/src/queues/index.ts
Purpose: Barrel export for queue configurations.
Architectural Layer: Worker Microservice
Package: services/worker-solver
Bounded Context: Solver Orchestration
DDD Building Block: Configuration
Owner Module: Timetable Solver Team
Public API: Yes
Internal Only: Yes
Exports: All queue configurations
Imports: Config files in directory
Used By: Worker files
Depends On: Config files
Implementation Prerequisites: Config files
Reverse Dependencies: Worker files
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
Implementation Order: 81
Current Status: Approved
Security Classification: Internal
Notes: Barrel export file.
DIRECTORY SPECIFICATION
Directory Path: services/worker-solver/src/__tests__/
Purpose: Houses Vitest unit and integration test specs for solver worker consumers, execution processors, and queue configurations.
Architectural Layer: Testing Layer
Package: services/worker-solver
Bounded Context: Solver Orchestration
Responsibilities:
Verifies solve_timetable job consumption and payload parsing.
Verifies solver execution loop invocation and completion command dispatching.
Contained Files:
solver-worker.spec.ts
Contained Directories: None
Relationships:
Parent: services/worker-solver/src/
Children: None
Dependencies: @kalavruksha/testing, Vitest
Dependents: CI/CD test runner
Implementation Phase: Phase 3
Freeze Status: Approved
Notes: Worker test suite.
File ID: FILE-WRK-SOLVER-012
Path: services/worker-solver/src/__tests__/solver-worker.spec.ts
Purpose: Vitest integration test spec verifying solver job consumer handling, job deserialization, execution processor invocation, and completion event emission using in-memory mock repositories.
Architectural Layer: Testing
Package: services/worker-solver
Bounded Context: Solver Orchestration
DDD Building Block: Test
Owner Module: Timetable Solver Team
Public API: No
Internal Only: Yes
Exports: None (Test Spec)
Imports: vitest, @kalavruksha/testing, ../processors/solver-execution.processor
Used By: Vitest test runner, GitHub Actions CI
Depends On: Solver worker source modules
Implementation Prerequisites: Solver worker modules
Reverse Dependencies: CI pipeline
Generated or Handwritten: Handwritten
Estimated LOC: 110 lines
Complexity: Medium
Unit Test Required: Yes
Integration Test Required: Yes
Mutation Test Required: No
Performance Test Required: Yes
Security Review Required: No
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Dynamic
Expected Change Frequency: Medium
Implementation Order: 82
Current Status: Approved
Security Classification: Internal
Notes: Worker integration test suite.
PACKAGE METADATA: services/worker-solver
Package Dependency Graph: services/worker-solver 
→
→
 @kalavruksha/solver, @kalavruksha/application, @kalavruksha/infrastructure, @kalavruksha/domain, @kalavruksha/logger, @kalavruksha/config, @kalavruksha/types, @kalavruksha/errors.
Allowed Imports: Workspace packages, bullmq, ioredis.
Forbidden Imports: @kalavruksha/ui, Next.js, React, NestJS controllers (Workers do not serve HTTP REST endpoints).
Public Surface: Executable BullMQ Worker process (main.ts).
Internal Surface: Consumers, Processors, Queue configs.
Barrel Export Rules: Internal subpath exports defined in package.json.
Layer Validation: Worker Microservice Layer (Tier 2).
Circular Dependency Status: Clean (Zero circular dependencies).
QUALITY VALIDATION: services/worker-solver
Architecture Validation: 100% Compliant
Dependency Validation: 100% Compliant
Boundary Validation: 100% Compliant
Type Safety: Strict Node22 TypeScript
Coverage Target: 
>
85
%
>85%
 Consumer & Processor integration coverage
Mutation Target: 
>
80
%
>80%
 Solver execution processor mutation coverage
Performance Target: 
<
15
 minutes
<15 minutes
 maximum solver execution timeout cap
Static Analysis Status: Clean
Security Status: Clean (Isolated execution sandbox)
PART SUMMARY
Directories completed: 6 (services/worker-solver/, services/worker-solver/src/, services/worker-solver/src/consumers/, services/worker-solver/src/processors/, services/worker-solver/src/queues/, services/worker-solver/src/__tests__/)
Files completed: 12 (Cumulative: 94 files)
Packages completed: 6 (Root Workspace, @kalavruksha/eslint-config, @kalavruksha/prettier-config, @kalavruksha/tsconfig, apps/api, services/worker-solver)
Remaining directories: 169
Remaining files: 1,406
Implementation progress: 22 / 186 directories completed
Repository completion percentage: 11.82%
Estimated remaining parts: 10 sequential parts
NEXT PART:
services/worker-notification/