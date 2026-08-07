KALAVRUKSHA ERP — CANONICAL REPOSITORY MANIFEST
PART 5 — BullMQ Notification, Analytics, & Scheduler Workers (services/worker-notification/, services/worker-analytics/, services/worker-scheduler/)
DIRECTORY SPECIFICATION
Directory Path: services/worker-notification/
Purpose: Asynchronous BullMQ Notification & Substitution Slip Dispatcher Worker Microservice directory. Consumes notification requests (send_notification, dispatch_substitution_slip) from Redis queues and dispatches SMS (Twilio), Email (SendGrid), and Mobile Push alerts (Firebase).
Architectural Layer: Tier 2 Asynchronous Worker Microservice Layer
Package: services/worker-notification
Bounded Context: Notification & Workflow Sub-Domain
Responsibilities:
Consumes outbound notification dispatch requests from Redis BullMQ queues.
Renders notification handlebars templates using @kalavruksha/domain TemplateRenderer.
Dispatches multi-channel messages (Twilio SMS, SendGrid Email, Firebase Push) via @kalavruksha/infrastructure.
Logs delivery attempts and updates notification delivery status in the database.
Contained Files:
package.json
tsconfig.json
README.md
Contained Directories:
services/worker-notification/src/
Relationships:
Parent: services/
Children: services/worker-notification/src/
Dependencies: @kalavruksha/domain, @kalavruksha/application, @kalavruksha/infrastructure, @kalavruksha/types, @kalavruksha/errors, @kalavruksha/events, @kalavruksha/logger, @kalavruksha/config
Dependents: Kubernetes Notification Worker Cluster
Implementation Phase: Phase 3 (Asynchronous Workers)
Freeze Status: Approved
Notes: Non-blocking notification transport worker isolating external gateway latencies.
File ID: FILE-WRK-NOTIF-001
Path: services/worker-notification/package.json
Purpose: Package manifest for services/worker-notification, declaring dependencies on BullMQ, Twilio, SendGrid, Firebase Admin SDK, and workspace infrastructure packages.
Architectural Layer: Worker Microservice
Package: services/worker-notification
Bounded Context: Notification & Workflow
DDD Building Block: Configuration
Owner Module: Notification & Workflow Team
Public API: No
Internal Only: Yes
Exports: None
Imports: Workspace packages
Used By: pnpm, Turborepo, Docker build engine
Depends On: All @kalavruksha/* packages
Implementation Prerequisites: @kalavruksha/infrastructure
Reverse Dependencies: K8s deployment manifests
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
Implementation Order: 83
Current Status: Approved
Security Classification: Internal
Notes: Deployable notification worker manifest.
File ID: FILE-WRK-NOTIF-002
Path: services/worker-notification/tsconfig.json
Purpose: TypeScript configuration for notification worker extending @kalavruksha/tsconfig/node-library.json.
Architectural Layer: Worker Microservice
Package: services/worker-notification
Bounded Context: Notification & Workflow
DDD Building Block: Configuration
Owner Module: Notification & Workflow Team
Public API: No
Internal Only: Yes
Exports: TypeScript options
Imports: tooling/tsconfig/node-library.json
Used By: TypeScript Compiler (tsc), Turborepo
Depends On: tooling/tsconfig/node-library.json
Implementation Prerequisites: tooling/tsconfig/node-library.json
Reverse Dependencies: services/worker-notification/src/**/*
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
Implementation Order: 84
Current Status: Approved
Security Classification: Internal
Notes: Compiler options inheritance.
File ID: FILE-WRK-NOTIF-003
Path: services/worker-notification/README.md
Purpose: Documentation for services/worker-notification detailing BullMQ queue consumption, Twilio/SendGrid gateway credentials, and local testing.
Architectural Layer: Documentation
Package: services/worker-notification
Bounded Context: Notification & Workflow
DDD Building Block: Documentation
Owner Module: Notification & Workflow Team
Public API: Yes
Internal Only: No
Exports: None
Imports: None
Used By: Developers, DevOps Engineers
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
Implementation Order: 85
Current Status: Approved
Security Classification: Public
Notes: Documentation artifact.
DIRECTORY SPECIFICATION
Directory Path: services/worker-notification/src/
Purpose: Source root directory housing worker bootstrap logic, BullMQ queue consumers, dispatch processors, queue configurations, and unit test specs.
Architectural Layer: Worker Microservice / Execution Layer
Package: services/worker-notification
Bounded Context: Notification & Workflow
Responsibilities:
Bootstraps process and attaches BullMQ queue listeners.
Delegates notification rendering and transport dispatching to processors.
Contained Files:
main.ts
index.ts
Contained Directories:
services/worker-notification/src/consumers/
services/worker-notification/src/processors/
services/worker-notification/src/queues/
services/worker-notification/src/__tests__/
Relationships:
Parent: services/worker-notification/
Children: Sub-directories under services/worker-notification/src/
Dependencies: @kalavruksha/* workspace packages
Dependents: K8s notification worker pods
Implementation Phase: Phase 3
Freeze Status: Approved
Notes: Notification worker entry point.
File ID: FILE-WRK-NOTIF-004
Path: services/worker-notification/src/main.ts
Purpose: Bootstrap entry point for services/worker-notification. Attaches BullMQ worker listeners, sets process concurrency (
concurrency
=
10
concurrency=10
), connects to Redis cluster, and registers OpenTelemetry tracing.
Architectural Layer: Worker Microservice
Package: services/worker-notification
Bounded Context: Notification & Workflow
DDD Building Block: Adapter
Owner Module: Notification & Workflow Team
Public API: No
Internal Only: Yes
Exports: None
Imports: bullmq, @kalavruksha/logger, @kalavruksha/config, ./consumers/notification.consumer
Used By: Node.js process runner, Docker container entrypoint
Depends On: ./consumers/notification.consumer.ts
Implementation Prerequisites: ./consumers/notification.consumer.ts
Reverse Dependencies: K8s pod deployments
Generated or Handwritten: Handwritten
Estimated LOC: 75 lines
Complexity: Medium
Unit Test Required: No
Integration Test Required: Yes (Worker bootstrap test)
Mutation Test Required: No
Performance Test Required: Yes
Security Review Required: Yes
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Dynamic
Expected Change Frequency: Low
Implementation Order: 86
Current Status: Approved
Security Classification: Internal
Notes: Executable worker entry point.
File ID: FILE-WRK-NOTIF-005
Path: services/worker-notification/src/index.ts
Purpose: Barrel export file for services/worker-notification.
Architectural Layer: Worker Microservice
Package: services/worker-notification
Bounded Context: Notification & Workflow
DDD Building Block: Configuration
Owner Module: Notification & Workflow Team
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
Implementation Order: 87
Current Status: Approved
Security Classification: Internal
Notes: Barrel export file.
DIRECTORY SPECIFICATION
Directory Path: services/worker-notification/src/consumers/
Purpose: Houses BullMQ Job Consumers receiving outbound notification dispatch jobs.
Architectural Layer: Worker Microservice / Consumer Layer
Package: services/worker-notification
Bounded Context: Notification & Workflow
Responsibilities:
Consumes send_notification and dispatch_substitution_slip queue jobs.
Parses tenant context, recipient address, channel type, and template variables.
Contained Files:
notification.consumer.ts
index.ts
Contained Directories: None
Relationships:
Parent: services/worker-notification/src/
Children: None
Dependencies: bullmq, @kalavruksha/domain
Dependents: main.ts
Implementation Phase: Phase 3
Freeze Status: Approved
Notes: Queue listener layer.
File ID: FILE-WRK-NOTIF-006
Path: services/worker-notification/src/consumers/notification.consumer.ts
Purpose: Consumer class registering send_notification job handler. Parses notification requests and invokes NotificationDispatchProcessor.
Architectural Layer: Worker Microservice
Package: services/worker-notification
Bounded Context: Notification & Workflow
DDD Building Block: Adapter
Owner Module: Notification & Workflow Team
Public API: Yes
Internal Only: Yes
Exports: NotificationConsumer
Imports: bullmq, @kalavruksha/domain, ../processors/notification-dispatch.processor
Used By: main.ts
Depends On: ../processors/notification-dispatch.processor.ts
Implementation Prerequisites: ../processors/notification-dispatch.processor.ts
Reverse Dependencies: main.ts
Generated or Handwritten: Handwritten
Estimated LOC: 80 lines
Complexity: Medium
Unit Test Required: Yes
Integration Test Required: Yes (Notification consumer test)
Mutation Test Required: No
Performance Test Required: Yes
Security Review Required: Yes
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Medium
Implementation Order: 88
Current Status: Approved
Security Classification: Internal
Notes: Consumes send_notification queue jobs.
------------------------------------------------ structure: services/worker-notification/src/consumers/index.ts
File ID: FILE-WRK-NOTIF-007
Path: services/worker-notification/src/consumers/index.ts
Purpose: Barrel export for notification worker consumers.
Architectural Layer: Worker Microservice
Package: services/worker-notification
Bounded Context: Notification & Workflow
DDD Building Block: Configuration
Owner Module: Notification & Workflow Team
Public API: Yes
Internal Only: Yes
Exports: NotificationConsumer
Imports: ./notification.consumer
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
Implementation Order: 89
Current Status: Approved
Security Classification: Internal
Notes: Barrel export file.
DIRECTORY SPECIFICATION
Directory Path: services/worker-notification/src/processors/
Purpose: Houses dispatch processors executing message body token rendering and invoking transport adapters in @kalavruksha/infrastructure.
Architectural Layer: Worker Microservice / Processor Layer
Package: services/worker-notification
Bounded Context: Notification & Workflow
Responsibilities:
Renders template variables using @kalavruksha/domain TemplateRenderer.
Invokes SendGrid (Email), Twilio (SMS), or Firebase (Push) transport adapters.
Logs delivery attempts and outcomes.
Contained Files:
notification-dispatch.processor.ts
index.ts
Contained Directories: None
Relationships:
Parent: services/worker-notification/src/
Children: None
Dependencies: @kalavruksha/domain, @kalavruksha/infrastructure
Dependents: notification.consumer.ts
Implementation Phase: Phase 3
Freeze Status: Approved
Notes: Transport dispatch processor.
File ID: FILE-WRK-NOTIF-008
Path: services/worker-notification/src/processors/notification-dispatch.processor.ts
Purpose: Execution processor executing template token substitution and routing message delivery to SendGrid, Twilio, or Firebase transport adapters.
Architectural Layer: Worker Microservice
Package: services/worker-notification
Bounded Context: Notification & Workflow
DDD Building Block: Adapter
Owner Module: Notification & Workflow Team
Public API: Yes
Internal Only: Yes
Exports: NotificationDispatchProcessor
Imports: @kalavruksha/domain, @kalavruksha/infrastructure
Used By: notification.consumer.ts
Depends On: @kalavruksha/domain, @kalavruksha/infrastructure
Implementation Prerequisites: Transport adapters
Reverse Dependencies: notification.consumer.ts
Generated or Handwritten: Handwritten
Estimated LOC: 110 lines
Complexity: Medium
Unit Test Required: Yes
Integration Test Required: Yes (Dispatch processor test)
Mutation Test Required: No
Performance Test Required: Yes (
O
(
1
)
O(1)
 token substitution latency)
Security Review Required: Yes (CRITICAL: PII handling during message dispatch)
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Medium
Implementation Order: 90
Current Status: Approved
Security Classification: PII Handling
Notes: Handles message rendering and transport routing.
File ID: FILE-WRK-NOTIF-009
Path: services/worker-notification/src/processors/index.ts
Purpose: Barrel export for notification dispatch processors.
Architectural Layer: Worker Microservice
Package: services/worker-notification
Bounded Context: Notification & Workflow
DDD Building Block: Configuration
Owner Module: Notification & Workflow Team
Public API: Yes
Internal Only: Yes
Exports: NotificationDispatchProcessor
Imports: ./notification-dispatch.processor
Used By: notification.consumer.ts
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
Implementation Order: 91
Current Status: Approved
Security Classification: Internal
Notes: Barrel export file.
DIRECTORY SPECIFICATION
Directory Path: services/worker-notification/src/queues/
Purpose: Houses BullMQ queue configurations, attempt limits, and retry policies for notification jobs.
Architectural Layer: Worker Microservice / Queue Configuration Layer
Package: services/worker-notification
Bounded Context: Notification & Workflow
Responsibilities:
Configures BullMQ queue parameters (attempts: 5, exponential backoff).
Contained Files:
notification-queue.config.ts
index.ts
Contained Directories: None
Relationships:
Parent: services/worker-notification/src/
Children: None
Dependencies: bullmq
Dependents: main.ts, notification.consumer.ts
Implementation Phase: Phase 3
Freeze Status: Approved
Notes: Queue parameters.
File ID: FILE-WRK-NOTIF-010
Path: services/worker-notification/src/queues/notification-queue.config.ts
Purpose: BullMQ queue configuration defining queue name (send_notification), retry parameters, exponential backoff, and dead-letter queue routing.
Architectural Layer: Worker Microservice
Package: services/worker-notification
Bounded Context: Notification & Workflow
DDD Building Block: Configuration
Owner Module: Notification & Workflow Team
Public API: Yes
Internal Only: Yes
Exports: NOTIFICATION_QUEUE_CONFIG, NOTIFICATION_QUEUE_NAME
Imports: bullmq
Used By: main.ts, notification.consumer.ts
Depends On: None
Implementation Prerequisites: None
Reverse Dependencies: Queue consumers and producers
Generated or Handwritten: Handwritten
Estimated LOC: 40 lines
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
Implementation Order: 92
Current Status: Approved
Security Classification: Internal
Notes: Queue parameters and retry policies.
File ID: FILE-WRK-NOTIF-011
Path: services/worker-notification/src/queues/index.ts
Purpose: Barrel export for notification queue configs.
Architectural Layer: Worker Microservice
Package: services/worker-notification
Bounded Context: Notification & Workflow
DDD Building Block: Configuration
Owner Module: Notification & Workflow Team
Public API: Yes
Internal Only: Yes
Exports: All queue configs
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
Implementation Order: 93
Current Status: Approved
Security Classification: Internal
Notes: Barrel export file.
DIRECTORY SPECIFICATION
Directory Path: services/worker-notification/src/__tests__/
Purpose: Vitest test specs for notification worker consumers, template rendering, and transport adapter routing.
Architectural Layer: Testing Layer
Package: services/worker-notification
Bounded Context: Notification & Workflow
Responsibilities:
Verifies notification template rendering and transport dispatch routing.
Contained Files:
notification-worker.spec.ts
Contained Directories: None
Relationships:
Parent: services/worker-notification/src/
Children: None
Dependencies: @kalavruksha/testing, Vitest
Dependents: CI/CD test runner
Implementation Phase: Phase 3
Freeze Status: Approved
Notes: Worker test suite.
File ID: FILE-WRK-NOTIF-012
Path: services/worker-notification/src/__tests__/notification-worker.spec.ts
Purpose: Vitest integration test spec verifying notification consumer job handling, template variable rendering, and transport dispatching using mock transports.
Architectural Layer: Testing
Package: services/worker-notification
Bounded Context: Notification & Workflow
DDD Building Block: Test
Owner Module: Notification & Workflow Team
Public API: No
Internal Only: Yes
Exports: None (Test Spec)
Imports: vitest, @kalavruksha/testing, ../processors/notification-dispatch.processor
Used By: Vitest test runner
Depends On: Worker source modules
Implementation Prerequisites: Worker modules
Reverse Dependencies: CI pipeline
Generated or Handwritten: Handwritten
Estimated LOC: 95 lines
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
Implementation Order: 94
Current Status: Approved
Security Classification: Internal
Notes: Integration test suite.
PACKAGE METADATA: services/worker-notification
Package Dependency Graph: services/worker-notification 
→
→
 @kalavruksha/domain, @kalavruksha/application, @kalavruksha/infrastructure, @kalavruksha/logger, @kalavruksha/config, @kalavruksha/types, @kalavruksha/errors.
Allowed Imports: Workspace packages, bullmq, twilio, @sendgrid/mail, firebase-admin.
Forbidden Imports: @kalavruksha/ui, Next.js, React, NestJS controllers.
Public Surface: Executable BullMQ Worker process (main.ts).
Internal Surface: Consumers, Processors, Queue configs.
Barrel Export Rules: Internal subpath exports defined in package.json.
Layer Validation: Worker Microservice Layer (Tier 2).
Circular Dependency Status: Clean.
QUALITY VALIDATION: services/worker-notification
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
 Dispatch processor mutation coverage
Performance Target: 
<
100
ms
<100ms
 dispatch latency per notification
Static Analysis Status: Clean
Security Status: Clean (PII protection during transport dispatch)
DIRECTORY SPECIFICATION
Directory Path: services/worker-analytics/
Purpose: Asynchronous BullMQ CQRS Analytics Snapshot Worker Microservice directory. Consumes domain events from Redis pub/sub or outbox topics, aggregates metrics, and builds time-bucketed AnalyticsSnapshot read models.
Architectural Layer: Tier 2 Asynchronous Worker Microservice Layer
Package: services/worker-analytics
Bounded Context: Reporting & Analytics Sub-Domain
Responsibilities:
Consumes published domain events (timetable.published, teacher-absence.reported, substitution.slip.issued).
Aggregates workload distribution metrics, room utilization rates, and substitution frequencies.
Persists time-bucketed AnalyticsSnapshot aggregates to PostgreSQL via @kalavruksha/application.
Contained Files:
package.json
tsconfig.json
README.md
Contained Directories:
services/worker-analytics/src/
Relationships:
Parent: services/
Children: services/worker-analytics/src/
Dependencies: @kalavruksha/domain, @kalavruksha/application, @kalavruksha/infrastructure, @kalavruksha/types, @kalavruksha/logger, @kalavruksha/config
Dependents: Kubernetes Analytics Worker Cluster
Implementation Phase: Phase 3
Freeze Status: Approved
Notes: CQRS read-model projection worker process.
File ID: FILE-WRK-ANALYT-001
Path: services/worker-analytics/package.json
Purpose: Package manifest for services/worker-analytics, declaring dependencies on BullMQ, Redis, and workspace packages.
Architectural Layer: Worker Microservice
Package: services/worker-analytics
Bounded Context: Reporting & Analytics
DDD Building Block: Configuration
Owner Module: Reporting & Analytics Team
Public API: No
Internal Only: Yes
Exports: None
Imports: Workspace packages
Used By: pnpm, Turborepo, Docker build engine
Depends On: All @kalavruksha/* packages
Implementation Prerequisites: @kalavruksha/infrastructure
Reverse Dependencies: K8s deployment manifests
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
Versioning Strategy: Application Version (1.0.0)
Expected Change Frequency: Medium
Implementation Order: 95
Current Status: Approved
Security Classification: Internal
Notes: Deployable analytics worker manifest.
File ID: FILE-WRK-ANALYT-002
Path: services/worker-analytics/tsconfig.json
Purpose: TypeScript configuration for analytics worker extending @kalavruksha/tsconfig/node-library.json.
Architectural Layer: Worker Microservice
Package: services/worker-analytics
Bounded Context: Reporting & Analytics
DDD Building Block: Configuration
Owner Module: Reporting & Analytics Team
Public API: No
Internal Only: Yes
Exports: TypeScript options
Imports: tooling/tsconfig/node-library.json
Used By: TypeScript Compiler (tsc), Turborepo
Depends On: tooling/tsconfig/node-library.json
Implementation Prerequisites: tooling/tsconfig/node-library.json
Reverse Dependencies: services/worker-analytics/src/**/*
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
Implementation Order: 96
Current Status: Approved
Security Classification: Internal
Notes: Compiler options inheritance.
File ID: FILE-WRK-ANALYT-003
Path: services/worker-analytics/README.md
Purpose: Documentation for services/worker-analytics detailing CQRS read-model event projection logic, snapshot aggregation periods, and deployment.
Architectural Layer: Documentation
Package: services/worker-analytics
Bounded Context: Reporting & Analytics
DDD Building Block: Documentation
Owner Module: Reporting & Analytics Team
Public API: Yes
Internal Only: No
Exports: None
Imports: None
Used By: Developers, DevOps Engineers
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
Implementation Order: 97
Current Status: Approved
Security Classification: Public
Notes: Documentation artifact.
DIRECTORY SPECIFICATION
Directory Path: services/worker-analytics/src/
Purpose: Source root directory housing analytics worker bootstrap, consumers, snapshot processors, queue configs, and unit test specs.
Architectural Layer: Worker Microservice / Execution Layer
Package: services/worker-analytics
Bounded Context: Reporting & Analytics
Responsibilities:
Bootstraps analytics worker process.
Processes domain event streams and updates analytics snapshots.
Contained Files:
main.ts
index.ts
Contained Directories:
services/worker-analytics/src/consumers/
services/worker-analytics/src/processors/
services/worker-analytics/src/queues/
services/worker-analytics/src/__tests__/
Relationships:
Parent: services/worker-analytics/
Children: Sub-directories under services/worker-analytics/src/
Dependencies: @kalavruksha/* workspace packages
Dependents: K8s analytics worker pods
Implementation Phase: Phase 3
Freeze Status: Approved
Notes: Analytics worker entry point.
File ID: FILE-WRK-ANALYT-004
Path: services/worker-analytics/src/main.ts
Purpose: Bootstrap entry point for services/worker-analytics. Attaches BullMQ event queue consumers, connects to Redis, and sets up OpenTelemetry.
Architectural Layer: Worker Microservice
Package: services/worker-analytics
Bounded Context: Reporting & Analytics
DDD Building Block: Adapter
Owner Module: Reporting & Analytics Team
Public API: No
Internal Only: Yes
Exports: None
Imports: bullmq, @kalavruksha/logger, @kalavruksha/config, ./consumers/analytics.consumer
Used By: Node.js process runner, Docker container entrypoint
Depends On: ./consumers/analytics.consumer.ts
Implementation Prerequisites: ./consumers/analytics.consumer.ts
Reverse Dependencies: K8s pod deployments
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
Versioning Strategy: Dynamic
Expected Change Frequency: Low
Implementation Order: 98
Current Status: Approved
Security Classification: Internal
Notes: Executable worker entry point.
File ID: FILE-WRK-ANALYT-005
Path: services/worker-analytics/src/index.ts
Purpose: Barrel export file for services/worker-analytics.
Architectural Layer: Worker Microservice
Package: services/worker-analytics
Bounded Context: Reporting & Analytics
DDD Building Block: Configuration
Owner Module: Reporting & Analytics Team
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
Implementation Order: 99
Current Status: Approved
Security Classification: Internal
Notes: Barrel export file.
DIRECTORY SPECIFICATION
Directory Path: services/worker-analytics/src/consumers/
Purpose: Houses BullMQ Consumer processing domain events for read-model projections.
Architectural Layer: Worker Microservice / Consumer Layer
Package: services/worker-analytics
Bounded Context: Reporting & Analytics
Responsibilities:
Listens for aggregate_analytics_snapshot queue jobs.
Passes event metrics to AnalyticsSnapshotProcessor.
Contained Files:
analytics.consumer.ts
index.ts
Contained Directories: None
Relationships:
Parent: services/worker-analytics/src/
Children: None
Dependencies: bullmq, @kalavruksha/domain
Dependents: main.ts
Implementation Phase: Phase 3
Freeze Status: Approved
Notes: Event projection consumer.
File ID: FILE-WRK-ANALYT-006
Path: services/worker-analytics/src/consumers/analytics.consumer.ts
Purpose: BullMQ consumer receiving domain event aggregation tasks and delegating snapshot calculations to AnalyticsSnapshotProcessor.
Architectural Layer: Worker Microservice
Package: services/worker-analytics
Bounded Context: Reporting & Analytics
DDD Building Block: Adapter
Owner Module: Reporting & Analytics Team
Public API: Yes
Internal Only: Yes
Exports: AnalyticsConsumer
Imports: bullmq, @kalavruksha/domain, ../processors/analytics-snapshot.processor
Used By: main.ts
Depends On: ../processors/analytics-snapshot.processor.ts
Implementation Prerequisites: ../processors/analytics-snapshot.processor.ts
Reverse Dependencies: main.ts
Generated or Handwritten: Handwritten
Estimated LOC: 75 lines
Complexity: Medium
Unit Test Required: Yes
Integration Test Required: Yes
Mutation Test Required: No
Performance Test Required: Yes
Security Review Required: Yes
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Medium
Implementation Order: 100
Current Status: Approved
Security Classification: Internal
Notes: Consumes analytics aggregation tasks.
File ID: FILE-WRK-ANALYT-007
Path: services/worker-analytics/src/consumers/index.ts
Purpose: Barrel export for analytics consumers.
Architectural Layer: Worker Microservice
Package: services/worker-analytics
Bounded Context: Reporting & Analytics
DDD Building Block: Configuration
Owner Module: Reporting & Analytics Team
Public API: Yes
Internal Only: Yes
Exports: AnalyticsConsumer
Imports: ./analytics.consumer
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
Implementation Order: 101
Current Status: Approved
Security Classification: Internal
Notes: Barrel export file.
DIRECTORY SPECIFICATION
Directory Path: services/worker-analytics/src/processors/
Purpose: Houses computational snapshot processors calculating Gini coefficients, room occupancy rates, and substitution frequencies.
Architectural Layer: Worker Microservice / Processor Layer
Package: services/worker-analytics
Bounded Context: Reporting & Analytics
Responsibilities:
Calculates time-bucketed workload, utilization, and substitution metrics.
Persists AnalyticsSnapshot aggregates via @kalavruksha/application.
Contained Files:
analytics-snapshot.processor.ts
index.ts
Contained Directories: None
Relationships:
Parent: services/worker-analytics/src/
Children: None
Dependencies: @kalavruksha/domain, @kalavruksha/application
Dependents: analytics.consumer.ts
Implementation Phase: Phase 3
Freeze Status: Approved
Notes: Analytics calculation processor.
File ID: FILE-WRK-ANALYT-008
Path: services/worker-analytics/src/processors/analytics-snapshot.processor.ts
Purpose: Processor executing time-bucketed metric calculations (AnalyticsAggregationEngine, UtilizationCalculator) and writing updated snapshots.
Architectural Layer: Worker Microservice
Package: services/worker-analytics
Bounded Context: Reporting & Analytics
DDD Building Block: Adapter
Owner Module: Reporting & Analytics Team
Public API: Yes
Internal Only: Yes
Exports: AnalyticsSnapshotProcessor
Imports: @kalavruksha/domain, @kalavruksha/application
Used By: analytics.consumer.ts
Depends On: @kalavruksha/domain, @kalavruksha/application
Implementation Prerequisites: Application layer commands
Reverse Dependencies: analytics.consumer.ts
Generated or Handwritten: Handwritten
Estimated LOC: 105 lines
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
 time-bucket aggregation performance)
Security Review Required: Yes
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Medium
Implementation Order: 102
Current Status: Approved
Security Classification: Internal
Notes: Snapshot calculation processor.
File ID: FILE-WRK-ANALYT-009
Path: services/worker-analytics/src/processors/index.ts
Purpose: Barrel export for analytics processors.
Architectural Layer: Worker Microservice
Package: services/worker-analytics
Bounded Context: Reporting & Analytics
DDD Building Block: Configuration
Owner Module: Reporting & Analytics Team
Public API: Yes
Internal Only: Yes
Exports: AnalyticsSnapshotProcessor
Imports: ./analytics-snapshot.processor
Used By: analytics.consumer.ts
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
Implementation Order: 103
Current Status: Approved
Security Classification: Internal
Notes: Barrel export file.
DIRECTORY SPECIFICATION
Directory Path: services/worker-analytics/src/queues/
Purpose: BullMQ queue configurations for analytics aggregation jobs.
Architectural Layer: Worker Microservice / Queue Configuration Layer
Package: services/worker-analytics
Bounded Context: Reporting & Analytics
Responsibilities:
Configures BullMQ aggregate_analytics_snapshot queue settings.
Contained Files:
analytics-queue.config.ts
index.ts
Contained Directories: None
Relationships:
Parent: services/worker-analytics/src/
Children: None
Dependencies: bullmq
Dependents: main.ts, analytics.consumer.ts
Implementation Phase: Phase 3
Freeze Status: Approved
Notes: Queue parameters.
File ID: FILE-WRK-ANALYT-010
Path: services/worker-analytics/src/queues/analytics-queue.config.ts
Purpose: BullMQ queue configuration defining queue name (aggregate_analytics_snapshot), retry limits, and dead-letter queue routing.
Architectural Layer: Worker Microservice
Package: services/worker-analytics
Bounded Context: Reporting & Analytics
DDD Building Block: Configuration
Owner Module: Reporting & Analytics Team
Public API: Yes
Internal Only: Yes
Exports: ANALYTICS_QUEUE_CONFIG, ANALYTICS_QUEUE_NAME
Imports: bullmq
Used By: main.ts, analytics.consumer.ts
Depends On: None
Implementation Prerequisites: None
Reverse Dependencies: Queue consumers and producers
Generated or Handwritten: Handwritten
Estimated LOC: 40 lines
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
Implementation Order: 104
Current Status: Approved
Security Classification: Internal
Notes: Queue parameters and retry policy.
File ID: FILE-WRK-ANALYT-011
Path: services/worker-analytics/src/queues/index.ts
Purpose: Barrel export for analytics queue configs.
Architectural Layer: Worker Microservice
Package: services/worker-analytics
Bounded Context: Reporting & Analytics
DDD Building Block: Configuration
Owner Module: Reporting & Analytics Team
Public API: Yes
Internal Only: Yes
Exports: All queue configs
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
Implementation Order: 105
Current Status: Approved
Security Classification: Internal
Notes: Barrel export file.
DIRECTORY SPECIFICATION
Directory Path: services/worker-analytics/src/__tests__/
Purpose: Vitest unit and integration test specs for analytics worker.
Architectural Layer: Testing Layer
Package: services/worker-analytics
Bounded Context: Reporting & Analytics
Responsibilities:
Verifies CQRS analytics snapshot aggregation logic.
Contained Files:
analytics-worker.spec.ts
Contained Directories: None
Relationships:
Parent: services/worker-analytics/src/
Children: None
Dependencies: @kalavruksha/testing, Vitest
Dependents: CI/CD test runner
Implementation Phase: Phase 3
Freeze Status: Approved
Notes: Worker test suite.
File ID: FILE-WRK-ANALYT-012
Path: services/worker-analytics/src/__tests__/analytics-worker.spec.ts
Purpose: Vitest integration test spec verifying event aggregation, time-bucketed metric calculations, and snapshot creation.
Architectural Layer: Testing
Package: services/worker-analytics
Bounded Context: Reporting & Analytics
DDD Building Block: Test
Owner Module: Reporting & Analytics Team
Public API: No
Internal Only: Yes
Exports: None (Test Spec)
Imports: vitest, @kalavruksha/testing, ../processors/analytics-snapshot.processor
Used By: Vitest test runner
Depends On: Worker source modules
Implementation Prerequisites: Worker modules
Reverse Dependencies: CI pipeline
Generated or Handwritten: Handwritten
Estimated LOC: 90 lines
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
Implementation Order: 106
Current Status: Approved
Security Classification: Internal
Notes: Integration test suite.
PACKAGE METADATA: services/worker-analytics
Package Dependency Graph: services/worker-analytics 
→
→
 @kalavruksha/domain, @kalavruksha/application, @kalavruksha/infrastructure, @kalavruksha/logger, @kalavruksha/config, @kalavruksha/types.
Allowed Imports: Workspace packages, bullmq, ioredis.
Forbidden Imports: @kalavruksha/ui, Next.js, React, NestJS controllers.
Public Surface: Executable BullMQ Worker process (main.ts).
Internal Surface: Consumers, Processors, Queue configs.
Barrel Export Rules: Internal subpath exports defined in package.json.
Layer Validation: Worker Microservice Layer (Tier 2).
Circular Dependency Status: Clean.
QUALITY VALIDATION: services/worker-analytics
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
 Analytics snapshot processor mutation coverage
Performance Target: 
<
50
ms
<50ms
 snapshot calculation latency
Static Analysis Status: Clean
Security Status: Clean (Tenant isolation on read-model projections)
DIRECTORY SPECIFICATION
Directory Path: services/worker-scheduler/
Purpose: Asynchronous BullMQ Cron & Scheduled Jobs Worker Microservice directory. Executes cron jobs (nightly substitution pre-scans at 06:00 AM, weekly analytics snapshot triggers, database vacuum tasks).
Architectural Layer: Tier 2 Asynchronous Worker Microservice Layer
Package: services/worker-scheduler
Bounded Context: Daily Substitution, Reporting & Analytics
Responsibilities:
Executes cron jobs for recurring background tasks.
Dispatches nightly morning substitution pre-scan triggers at 06:00 AM.
Dispatches weekly CQRS analytics snapshot aggregation triggers.
Contained Files:
package.json
tsconfig.json
README.md
Contained Directories:
services/worker-scheduler/src/
Relationships:
Parent: services/
Children: services/worker-scheduler/src/
Dependencies: @kalavruksha/domain, @kalavruksha/application, @kalavruksha/infrastructure, @kalavruksha/types, @kalavruksha/logger, @kalavruksha/config
Dependents: Kubernetes Scheduler Worker Cluster
Implementation Phase: Phase 3
Freeze Status: Approved
Notes: Cron job and scheduled task worker process.
File ID: FILE-WRK-SCHED-001
Path: services/worker-scheduler/package.json
Purpose: Package manifest for services/worker-scheduler, declaring dependencies on BullMQ repeatability extensions, Redis, and workspace packages.
Architectural Layer: Worker Microservice
Package: services/worker-scheduler
Bounded Context: Scheduler / Cron
DDD Building Block: Configuration
Owner Module: Platform Engineering
Public API: No
Internal Only: Yes
Exports: None
Imports: Workspace packages
Used By: pnpm, Turborepo, Docker build engine
Depends On: All @kalavruksha/* packages
Implementation Prerequisites: @kalavruksha/infrastructure
Reverse Dependencies: K8s deployment manifests
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
Versioning Strategy: Application Version (1.0.0)
Expected Change Frequency: Medium
Implementation Order: 107
Current Status: Approved
Security Classification: Internal
Notes: Deployable scheduler worker manifest.
File ID: FILE-WRK-SCHED-002
Path: services/worker-scheduler/tsconfig.json
Purpose: TypeScript configuration for scheduler worker extending @kalavruksha/tsconfig/node-library.json.
Architectural Layer: Worker Microservice
Package: services/worker-scheduler
Bounded Context: Scheduler / Cron
DDD Building Block: Configuration
Owner Module: Platform Engineering
Public API: No
Internal Only: Yes
Exports: TypeScript options
Imports: tooling/tsconfig/node-library.json
Used By: TypeScript Compiler (tsc), Turborepo
Depends On: tooling/tsconfig/node-library.json
Implementation Prerequisites: tooling/tsconfig/node-library.json
Reverse Dependencies: services/worker-scheduler/src/**/*
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
Implementation Order: 108
Current Status: Approved
Security Classification: Internal
Notes: Compiler options inheritance.
File ID: FILE-WRK-SCHED-003
Path: services/worker-scheduler/README.md
Purpose: Documentation for services/worker-scheduler detailing cron schedules (06:00 AM substitution scan, Sunday 00:00 AM analytics snapshot trigger).
Architectural Layer: Documentation
Package: services/worker-scheduler
Bounded Context: Scheduler / Cron
DDD Building Block: Documentation
Owner Module: Platform Engineering
Public API: Yes
Internal Only: No
Exports: None
Imports: None
Used By: Developers, DevOps Engineers
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
Implementation Order: 109
Current Status: Approved
Security Classification: Public
Notes: Documentation artifact.
DIRECTORY SPECIFICATION
Directory Path: services/worker-scheduler/src/
Purpose: Source root directory housing scheduler worker bootstrap, cron jobs, queue configurations, and test specs.
Architectural Layer: Worker Microservice / Execution Layer
Package: services/worker-scheduler
Bounded Context: Scheduler / Cron
Responsibilities:
Registers repeat BullMQ jobs using cron expressions.
Dispatches nightly substitution scan jobs and weekly analytics jobs.
Contained Files:
main.ts
index.ts
Contained Directories:
services/worker-scheduler/src/jobs/
services/worker-scheduler/src/queues/
services/worker-scheduler/src/__tests__/
Relationships:
Parent: services/worker-scheduler/
Children: Sub-directories under services/worker-scheduler/src/
Dependencies: @kalavruksha/* workspace packages
Dependents: K8s scheduler worker pods
Implementation Phase: Phase 3
Freeze Status: Approved
Notes: Scheduler worker entry point.
File ID: FILE-WRK-SCHED-004
Path: services/worker-scheduler/src/main.ts
Purpose: Bootstrap entry point for services/worker-scheduler. Registers repeatable cron jobs with BullMQ and connects to Redis.
Architectural Layer: Worker Microservice
Package: services/worker-scheduler
Bounded Context: Scheduler / Cron
DDD Building Block: Adapter
Owner Module: Platform Engineering
Public API: No
Internal Only: Yes
Exports: None
Imports: bullmq, @kalavruksha/logger, @kalavruksha/config, ./jobs/morning-substitution-scan.job
Used By: Node.js process runner, Docker container entrypoint
Depends On: ./jobs/morning-substitution-scan.job.ts
Implementation Prerequisites: ./jobs/morning-substitution-scan.job.ts
Reverse Dependencies: K8s pod deployments
Generated or Handwritten: Handwritten
Estimated LOC: 70 lines
Complexity: Medium
Unit Test Required: No
Integration Test Required: Yes
Mutation Test Required: No
Performance Test Required: No
Security Review Required: Yes
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Dynamic
Expected Change Frequency: Low
Implementation Order: 110
Current Status: Approved
Security Classification: Internal
Notes: Executable worker entry point.
File ID: FILE-WRK-SCHED-005
Path: services/worker-scheduler/src/index.ts
Purpose: Barrel export file for services/worker-scheduler.
Architectural Layer: Worker Microservice
Package: services/worker-scheduler
Bounded Context: Scheduler / Cron
DDD Building Block: Configuration
Owner Module: Platform Engineering
Public API: Yes
Internal Only: Yes
Exports: Worker configuration and job references
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
Implementation Order: 111
Current Status: Approved
Security Classification: Internal
Notes: Barrel export file.
DIRECTORY SPECIFICATION
Directory Path: services/worker-scheduler/src/jobs/
Purpose: Houses repeatable cron job triggers for scheduled tasks.
Architectural Layer: Worker Microservice / Job Layer
Package: services/worker-scheduler
Bounded Context: Scheduler / Cron
Responsibilities:
Defines 0 6 * * * (06:00 AM) cron job triggering daily substitution pre-scans.
Defines 0 0 * * 0 (Sunday 00:00 AM) cron job triggering weekly analytics snapshot aggregations.
Contained Files:
morning-substitution-scan.job.ts
analytics-snapshot-cron.job.ts
index.ts
Contained Directories: None
Relationships:
Parent: services/worker-scheduler/src/
Children: None
Dependencies: bullmq, @kalavruksha/application
Dependents: main.ts
Implementation Phase: Phase 3
Freeze Status: Approved
Notes: Cron job triggers.
File ID: FILE-WRK-SCHED-006
Path: services/worker-scheduler/src/jobs/morning-substitution-scan.job.ts
Purpose: Cron job trigger running at 06:00 AM IST daily. Scans active school branches for approved teacher leave records on the current date and enqueues daily arrangement generation tasks.
Architectural Layer: Worker Microservice
Package: services/worker-scheduler
Bounded Context: Daily Substitution
DDD Building Block: Adapter
Owner Module: Daily Substitution Team
Public API: Yes
Internal Only: Yes
Exports: MorningSubstitutionScanJob
Imports: bullmq, @kalavruksha/application
Used By: main.ts
Depends On: @kalavruksha/application
Implementation Prerequisites: Application layer commands
Reverse Dependencies: main.ts
Generated or Handwritten: Handwritten
Estimated LOC: 80 lines
Complexity: Medium
Unit Test Required: Yes
Integration Test Required: Yes
Mutation Test Required: No
Performance Test Required: Yes
Security Review Required: Yes
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Medium
Implementation Order: 112
Current Status: Approved
Security Classification: Internal
Notes: 06:00 AM substitution pre-scan trigger.
File ID: FILE-WRK-SCHED-007
Path: services/worker-scheduler/src/jobs/analytics-snapshot-cron.job.ts
Purpose: Cron job trigger running every Sunday at 00:00 AM. Triggers weekly CQRS analytics snapshot aggregation for all active schools.
Architectural Layer: Worker Microservice
Package: services/worker-scheduler
Bounded Context: Reporting & Analytics
DDD Building Block: Adapter
Owner Module: Reporting & Analytics Team
Public API: Yes
Internal Only: Yes
Exports: AnalyticsSnapshotCronJob
Imports: bullmq, @kalavruksha/application
Used By: main.ts
Depends On: @kalavruksha/application
Implementation Prerequisites: Application layer commands
Reverse Dependencies: main.ts
Generated or Handwritten: Handwritten
Estimated LOC: 70 lines
Complexity: Medium
Unit Test Required: Yes
Integration Test Required: Yes
Mutation Test Required: No
Performance Test Required: No
Security Review Required: Yes
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Medium
Implementation Order: 113
Current Status: Approved
Security Classification: Internal
Notes: Weekly analytics cron trigger.
File ID: FILE-WRK-SCHED-008
Path: services/worker-scheduler/src/jobs/index.ts
Purpose: Barrel export for scheduler cron jobs.
Architectural Layer: Worker Microservice
Package: services/worker-scheduler
Bounded Context: Scheduler / Cron
DDD Building Block: Configuration
Owner Module: Platform Engineering
Public API: Yes
Internal Only: Yes
Exports: MorningSubstitutionScanJob, AnalyticsSnapshotCronJob
Imports: Job files in directory
Used By: main.ts
Depends On: Job files
Implementation Prerequisites: Job files
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
Implementation Order: 114
Current Status: Approved
Security Classification: Internal
Notes: Barrel export file.
DIRECTORY SPECIFICATION
Directory Path: services/worker-scheduler/src/queues/
Purpose: BullMQ queue configurations for repeatable cron jobs.
Architectural Layer: Worker Microservice / Queue Configuration Layer
Package: services/worker-scheduler
Bounded Context: Scheduler / Cron
Responsibilities:
Configures BullMQ scheduler_cron_queue settings.
Contained Files:
scheduler-queue.config.ts
index.ts
Contained Directories: None
Relationships:
Parent: services/worker-scheduler/src/
Children: None
Dependencies: bullmq
Dependents: main.ts
Implementation Phase: Phase 3
Freeze Status: Approved
Notes: Queue parameters.
File ID: FILE-WRK-SCHED-009
Path: services/worker-scheduler/src/queues/scheduler-queue.config.ts
Purpose: BullMQ queue configuration defining queue name (scheduler_cron_queue), repeat options, and Redis connection settings.
Architectural Layer: Worker Microservice
Package: services/worker-scheduler
Bounded Context: Scheduler / Cron
DDD Building Block: Configuration
Owner Module: Platform Engineering
Public API: Yes
Internal Only: Yes
Exports: SCHEDULER_QUEUE_CONFIG, SCHEDULER_QUEUE_NAME
Imports: bullmq
Used By: main.ts
Depends On: None
Implementation Prerequisites: None
Reverse Dependencies: main.ts
Generated or Handwritten: Handwritten
Estimated LOC: 40 lines
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
Implementation Order: 115
Current Status: Approved
Security Classification: Internal
Notes: Queue parameters.
File ID: FILE-WRK-SCHED-010
Path: services/worker-scheduler/src/queues/index.ts
Purpose: Barrel export for scheduler queue config.
Architectural Layer: Worker Microservice
Package: services/worker-scheduler
Bounded Context: Scheduler / Cron
DDD Building Block: Configuration
Owner Module: Platform Engineering
Public API: Yes
Internal Only: Yes
Exports: All queue configs
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
Implementation Order: 116
Current Status: Approved
Security Classification: Internal
Notes: Barrel export file.
DIRECTORY SPECIFICATION
Directory Path: services/worker-scheduler/src/__tests__/
Purpose: Vitest unit and integration test specs for scheduler cron jobs.
Architectural Layer: Testing Layer
Package: services/worker-scheduler
Bounded Context: Scheduler / Cron
Responsibilities:
Verifies cron job triggers and repeat schedule registrations.
Contained Files:
scheduler-worker.spec.ts
Contained Directories: None
Relationships:
Parent: services/worker-scheduler/src/
Children: None
Dependencies: @kalavruksha/testing, Vitest
Dependents: CI/CD test runner
Implementation Phase: Phase 3
Freeze Status: Approved
Notes: Worker test suite.
File ID: FILE-WRK-SCHED-011
Path: services/worker-scheduler/src/__tests__/scheduler-worker.spec.ts
Purpose: Vitest integration test spec verifying cron schedule registration, repeat job execution, and command triggering.
Architectural Layer: Testing
Package: services/worker-scheduler
Bounded Context: Scheduler / Cron
DDD Building Block: Test
Owner Module: Platform Engineering
Public API: No
Internal Only: Yes
Exports: None (Test Spec)
Imports: vitest, @kalavruksha/testing, ../jobs/morning-substitution-scan.job
Used By: Vitest test runner
Depends On: Worker source modules
Implementation Prerequisites: Worker modules
Reverse Dependencies: CI pipeline
Generated or Handwritten: Handwritten
Estimated LOC: 85 lines
Complexity: Medium
Unit Test Required: Yes
Integration Test Required: Yes
Mutation Test Required: No
Performance Test Required: No
Security Review Required: No
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Dynamic
Expected Change Frequency: Medium
Implementation Order: 117
Current Status: Approved
Security Classification: Internal
Notes: Integration test suite.
PACKAGE METADATA: services/worker-scheduler
Package Dependency Graph: services/worker-scheduler 
→
→
 @kalavruksha/domain, @kalavruksha/application, @kalavruksha/infrastructure, @kalavruksha/logger, @kalavruksha/config, @kalavruksha/types.
Allowed Imports: Workspace packages, bullmq, ioredis.
Forbidden Imports: @kalavruksha/ui, Next.js, React, NestJS controllers.
Public Surface: Executable BullMQ Worker process (main.ts).
Internal Surface: Jobs, Queues, Config.
Barrel Export Rules: Internal subpath exports defined in package.json.
Layer Validation: Worker Microservice Layer (Tier 2).
Circular Dependency Status: Clean.
QUALITY VALIDATION: services/worker-scheduler
Architecture Validation: 100% Compliant
Dependency Validation: 100% Compliant
Boundary Validation: 100% Compliant
Type Safety: Strict Node22 TypeScript
Coverage Target: 
>
85
%
>85%
 Cron job integration coverage
Mutation Target: 
>
80
%
>80%
 Scheduler job mutation coverage
Performance Target: 
<
10
ms
<10ms
 cron trigger dispatch overhead
Static Analysis Status: Clean
Security Status: Clean
PART SUMMARY
Directories completed: 18 (services/worker-notification/, services/worker-notification/src/, consumers/, processors/, queues/, __tests__/, services/worker-analytics/, src/, consumers/, processors/, queues/, __tests__/, services/worker-scheduler/, src/, jobs/, queues/, __tests__/)
Files completed: 35 (Cumulative: 117 files)
Packages completed: 9 (Root Workspace, @kalavruksha/eslint-config, prettier-config, tsconfig, apps/api, services/worker-solver, services/worker-notification, services/worker-analytics, services/worker-scheduler)
Remaining directories: 151
Remaining files: 1,383
Implementation progress: 34 / 186 directories completed
Repository completion percentage: 18.28%
Estimated remaining parts: 9 sequential parts
NEXT PART:
apps/web-admin/