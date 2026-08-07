KALAVRUKSHA ERP — CANONICAL REPOSITORY MANIFEST
PART 9 — Constraint Solver Package (packages/solver/)
DIRECTORY SPECIFICATION
Directory Path: packages/solver/
Purpose: Autonomous Constraint Solver Engine package (@kalavruksha/solver). Houses mathematical search algorithms (Genetic Population Search, Mixed-Integer Linear Programming / MILP Backtracking, Simulated Annealing), hard constraint evaluators, soft penalty heuristic scoring functions, and solution vector converters.
Architectural Layer: Tier 3 Domain Computational Microservice Layer (Constraint Engine)
Package: @kalavruksha/solver
Bounded Context: Solver Orchestration & Constraint Optimization
Responsibilities:
Executes multi-dimensional population search algorithms over 4D grid slot coordinates.
Evaluates non-negotiable hard constraints (zero hard clash tolerance) and computes soft constraint penalty score vectors (
1..1000
1..1000
).
Converts domain problem matrices into serialized solution vectors for distributed worker execution.
Emits real-time population fitness metrics and progress snapshots during execution iterations.
Contained Files:
package.json
tsconfig.json
README.md
Contained Directories:
packages/solver/src/
Relationships:
Parent: packages/
Children: packages/solver/src/
Dependencies: @kalavruksha/types, @kalavruksha/errors, @kalavruksha/utils
Dependents: services/worker-solver, packages/application
Implementation Phase: Phase 3 (Constraint Solver Engine)
Freeze Status: Approved
Notes: Pure mathematical optimization engine completely decoupled from database ORMs, HTTP frameworks, or Web UI libraries.
File ID: FILE-SOLVER-001
Path: packages/solver/package.json
Purpose: Package manifest for @kalavruksha/solver, declaring dependencies on workspace primitive packages (@kalavruksha/types, @kalavruksha/errors, @kalavruksha/utils) and exporting subpaths (./algorithms, ./evaluators, ./heuristics, ./vectors).
Architectural Layer: Solver Layer
Package: @kalavruksha/solver
Bounded Context: Solver Orchestration
DDD Building Block: Configuration
Owner Module: Timetable Solver Team
Public API: Yes (Workspace Package)
Internal Only: No
Exports: Subpath exports for solver facade, algorithms, evaluators, heuristics, and vectors
Imports: Workspace foundation packages
Used By: services/worker-solver, packages/application
Depends On: @kalavruksha/types, @kalavruksha/errors, @kalavruksha/utils
Implementation Prerequisites: @kalavruksha/types, @kalavruksha/utils
Reverse Dependencies: Solver worker microservices
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
Implementation Order: 199
Current Status: Approved
Security Classification: Internal
Notes: Solver engine package manifest.
File ID: FILE-SOLVER-002
Path: packages/solver/tsconfig.json
Purpose: TypeScript configuration extending @kalavruksha/tsconfig/node-library.json, stripping DOM typings and configuring mathematical optimization compiler optimizations.
Architectural Layer: Solver Layer
Package: @kalavruksha/solver
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
Reverse Dependencies: packages/solver/src/**/*
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
Implementation Order: 200
Current Status: Approved
Security Classification: Internal
Notes: Node library TS config.
File ID: FILE-SOLVER-003
Path: packages/solver/README.md
Purpose: Documentation for @kalavruksha/solver detailing Genetic Algorithm population search, MILP backtracking algorithms, soft penalty heuristic functions, and solution vector conversion specifications.
Architectural Layer: Documentation
Package: @kalavruksha/solver
Bounded Context: Solver Orchestration
DDD Building Block: Documentation
Owner Module: Timetable Solver Team
Public API: Yes
Internal Only: No
Exports: None
Imports: None
Used By: Developers, Optimization Engineers
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
Implementation Order: 201
Current Status: Approved
Security Classification: Public
Notes: Documentation artifact.
DIRECTORY SPECIFICATION
Directory Path: packages/solver/src/
Purpose: Source root directory housing solver facade entry point, search algorithms, constraint evaluators, heuristics, solution vector converters, and unit test suites.
Architectural Layer: Solver Layer / Computational Core
Package: @kalavruksha/solver
Bounded Context: Solver Orchestration
Responsibilities:
Houses master solver facade (SolverEngineFacade).
Houses optimization algorithms, hard constraint evaluators, and heuristics.
Contained Files:
solver-engine.facade.ts
index.ts
Contained Directories:
packages/solver/src/algorithms/
packages/solver/src/evaluators/
packages/solver/src/heuristics/
packages/solver/src/vectors/
packages/solver/src/__tests__/
Relationships:
Parent: packages/solver/
Children: Sub-directories under packages/solver/src/
Dependencies: @kalavruksha/types, @kalavruksha/utils
Dependents: services/worker-solver
Implementation Phase: Phase 3
Freeze Status: Approved
Notes: Root source folder for solver engine.
File ID: FILE-SOLVER-004
Path: packages/solver/src/solver-engine.facade.ts
Purpose: Master facade class unifying algorithm selection (Genetic Search, MILP Backtracking, Simulated Annealing), orchestrating population search iterations, and returning optimized solution vectors.
Architectural Layer: Solver Layer
Package: @kalavruksha/solver
Bounded Context: Solver Orchestration
DDD Building Block: Domain Service / Facade
Owner Module: Timetable Solver Team
Public API: Yes
Internal Only: No
Exports: SolverEngineFacade
Imports: ./algorithms/*, ./evaluators/*, ./vectors/*, @kalavruksha/types
Used By: services/worker-solver, packages/application
Depends On: Algorithms, Evaluators, Vectors
Implementation Prerequisites: Algorithms, Evaluators, Vectors
Reverse Dependencies: Worker microservices
Generated or Handwritten: Handwritten
Estimated LOC: 130 lines
Complexity: High
Unit Test Required: Yes
Integration Test Required: Yes (Facade optimization run test)
Mutation Test Required: Yes
Performance Test Required: Yes (
O
(
1
)
O(1)
 iteration initialization latency)
Security Review Required: Yes
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Medium
Implementation Order: 202
Current Status: Approved
Security Classification: Internal
Notes: Primary entry facade for solver execution.
File ID: FILE-SOLVER-005
Path: packages/solver/src/index.ts
Purpose: Main package barrel export exporting solver facade, algorithm classes, evaluators, heuristics, and vector converters.
Architectural Layer: Solver Layer
Package: @kalavruksha/solver
Bounded Context: Solver Orchestration
DDD Building Block: Configuration
Owner Module: Timetable Solver Team
Public API: Yes
Internal Only: No
Exports: All public solver components
Imports: ./solver-engine.facade, ./algorithms, ./evaluators, ./heuristics, ./vectors
Used By: services/worker-solver, packages/application
Depends On: Subpath exports
Implementation Prerequisites: All subpath modules
Reverse Dependencies: Worker microservices
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
Implementation Order: 203
Current Status: Approved
Security Classification: Internal
Notes: Master barrel export file.
DIRECTORY SPECIFICATION
Directory Path: packages/solver/src/algorithms/
Purpose: Houses mathematical search algorithms executing population search, backtracking, and local annealing optimization over timetable grid matrices.
Architectural Layer: Solver Layer / Algorithm Sub-Package
Package: @kalavruksha/solver
Bounded Context: Solver Orchestration
Responsibilities:
GeneticAlgorithmSolver: Multi-chromosome population search with crossover and mutation operators.
MilpBacktrackingSolver: Backtracking solver with constraint propagation.
SimulatedAnnealingSolver: Local search optimizer reducing soft constraint penalties.
Contained Files:
genetic-algorithm.solver.ts
milp-backtracking.solver.ts
simulated-annealing.solver.ts
index.ts
Contained Directories: None
Relationships:
Parent: packages/solver/src/
Children: None
Dependencies: @kalavruksha/types, @kalavruksha/utils
Dependents: SolverEngineFacade
Implementation Phase: Phase 3
Freeze Status: Approved
Notes: Search algorithm implementation layer.
File ID: FILE-SOLVER-006
Path: packages/solver/src/algorithms/genetic-algorithm.solver.ts
Purpose: Genetic Algorithm solver class implementing multi-chromosome population initialization, tournament selection, single/multi-point crossover, and mutation operators for timetable generation.
Architectural Layer: Solver Layer
Package: @kalavruksha/solver
Bounded Context: Solver Orchestration
DDD Building Block: Domain Service
Owner Module: Timetable Solver Team
Public API: Yes
Internal Only: Yes
Exports: GeneticAlgorithmSolver
Imports: @kalavruksha/types, @kalavruksha/utils, ../evaluators/*
Used By: SolverEngineFacade
Depends On: Evaluators, @kalavruksha/utils
Implementation Prerequisites: Evaluators
Reverse Dependencies: SolverEngineFacade
Generated or Handwritten: Handwritten
Estimated LOC: 180 lines
Complexity: High
Unit Test Required: Yes
Integration Test Required: Yes (Population search convergence test)
Mutation Test Required: Yes
Performance Test Required: Yes (High-speed chromosome iteration benchmark)
Security Review Required: Yes
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Medium
Implementation Order: 204
Current Status: Approved
Security Classification: Internal
Notes: Primary genetic algorithm search implementation.
File ID: FILE-SOLVER-007
Path: packages/solver/src/algorithms/milp-backtracking.solver.ts
Purpose: Backtracking solver with forward constraint propagation for proving hard constraint satisfiability.
Architectural Layer: Solver Layer
Package: @kalavruksha/solver
Bounded Context: Solver Orchestration
DDD Building Block: Domain Service
Owner Module: Timetable Solver Team
Public API: Yes
Internal Only: Yes
Exports: MilpBacktrackingSolver
Imports: @kalavruksha/types, ../evaluators/*
Used By: SolverEngineFacade
Depends On: Evaluators
Implementation Prerequisites: Evaluators
Reverse Dependencies: SolverEngineFacade
Generated or Handwritten: Handwritten
Estimated LOC: 140 lines
Complexity: High
Unit Test Required: Yes
Integration Test Required: Yes
Mutation Test Required: Yes
Performance Test Required: Yes
Security Review Required: Yes
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Medium
Implementation Order: 205
Current Status: Approved
Security Classification: Internal
Notes: Backtracking search implementation.
File ID: FILE-SOLVER-008
Path: packages/solver/src/algorithms/simulated-annealing.solver.ts
Purpose: Local search optimizer utilizing simulated annealing cooling schedules to escape local minima and minimize soft constraint penalty scores.
Architectural Layer: Solver Layer
Package: @kalavruksha/solver
Bounded Context: Solver Orchestration
DDD Building Block: Domain Service
Owner Module: Timetable Solver Team
Public API: Yes
Internal Only: Yes
Exports: SimulatedAnnealingSolver
Imports: @kalavruksha/types, @kalavruksha/utils
Used By: SolverEngineFacade
Depends On: @kalavruksha/utils
Implementation Prerequisites: None
Reverse Dependencies: SolverEngineFacade
Generated or Handwritten: Handwritten
Estimated LOC: 110 lines
Complexity: High
Unit Test Required: Yes
Integration Test Required: Yes
Mutation Test Required: Yes
Performance Test Required: Yes
Security Review Required: Yes
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Medium
Implementation Order: 206
Current Status: Approved
Security Classification: Internal
Notes: Local search annealing optimizer.
File ID: FILE-SOLVER-009
Path: packages/solver/src/algorithms/index.ts
Purpose: Barrel export for solver algorithms.
Architectural Layer: Solver Layer
Package: @kalavruksha/solver
Bounded Context: Solver Orchestration
DDD Building Block: Configuration
Owner Module: Timetable Solver Team
Public API: Yes
Internal Only: Yes
Exports: All search algorithm classes
Imports: Algorithm files in directory
Used By: solver-engine.facade.ts
Depends On: Algorithm files
Implementation Prerequisites: Algorithm files
Reverse Dependencies: Facade class
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
Implementation Order: 207
Current Status: Approved
Security Classification: Internal
Notes: Barrel export file.
DIRECTORY SPECIFICATION
Directory Path: packages/solver/src/evaluators/
Purpose: Houses high-speed, allocation-free constraint evaluators computing hard clash fitness and soft penalty scores over solution chromosomes.
Architectural Layer: Solver Layer / Evaluator Sub-Package
Package: @kalavruksha/solver
Bounded Context: Solver Orchestration
Responsibilities:
HardConstraintEvaluator: Evaluates teacher, room, section double bookings (
0
0
 hard clashes = valid candidate).
SoftPenaltyEvaluator: Computes weighted penalty scores for soft rules (workload distribution, continuous periods, morning subject difficulty preference).
Contained Files:
hard-constraint.evaluator.ts
soft-penalty.evaluator.ts
index.ts
Contained Directories: None
Relationships:
Parent: packages/solver/src/
Children: None
Dependencies: @kalavruksha/types, @kalavruksha/utils
Dependents: Search Algorithms
Implementation Phase: Phase 3
Freeze Status: Approved
Notes: Inner-loop hot-path evaluators.
File ID: FILE-SOLVER-010
Path: packages/solver/src/evaluators/hard-constraint.evaluator.ts
Purpose: Inner-loop evaluator class verifying zero hard clashes (teacher, room, section, parallel batch, group lock) on a candidate solution vector in 
O
(
1
)
O(1)
 time per slot coordinate.
Architectural Layer: Solver Layer
Package: @kalavruksha/solver
Bounded Context: Solver Orchestration
DDD Building Block: Domain Service
Owner Module: Timetable Solver Team
Public API: Yes
Internal Only: Yes
Exports: HardConstraintEvaluator
Imports: @kalavruksha/types, @kalavruksha/utils
Used By: Search Algorithms
Depends On: @kalavruksha/utils
Implementation Prerequisites: None
Reverse Dependencies: Search Algorithms
Generated or Handwritten: Handwritten
Estimated LOC: 130 lines
Complexity: High
Unit Test Required: Yes
Integration Test Required: Yes
Mutation Test Required: Yes
Performance Test Required: Yes (Allocation-free inner-loop benchmark: 
<
0.001
 ms
<0.001 ms
)
Security Review Required: Yes
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Low
Implementation Order: 208
Current Status: Approved
Security Classification: Internal
Notes: Critical inner-loop hard clash evaluator.
File ID: FILE-SOLVER-011
Path: packages/solver/src/evaluators/soft-penalty.evaluator.ts
Purpose: Inner-loop evaluator class computing cumulative soft penalty scores (
1..1000
1..1000
) across soft rules (workload distribution, teacher movement, difficulty spacing).
Architectural Layer: Solver Layer
Package: @kalavruksha/solver
Bounded Context: Solver Orchestration
DDD Building Block: Domain Service
Owner Module: Timetable Solver Team
Public API: Yes
Internal Only: Yes
Exports: SoftPenaltyEvaluator
Imports: @kalavruksha/types, @kalavruksha/utils
Used By: Search Algorithms
Depends On: @kalavruksha/utils
Implementation Prerequisites: None
Reverse Dependencies: Search Algorithms
Generated or Handwritten: Handwritten
Estimated LOC: 120 lines
Complexity: High
Unit Test Required: Yes
Integration Test Required: Yes
Mutation Test Required: Yes
Performance Test Required: Yes (
O
(
1
)
O(1)
 penalty calculation speed test)
Security Review Required: Yes
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Low
Implementation Order: 209
Current Status: Approved
Security Classification: Internal
Notes: Soft penalty fitness function.
File ID: FILE-SOLVER-012
Path: packages/solver/src/evaluators/index.ts
Purpose: Barrel export for constraint evaluators.
Architectural Layer: Solver Layer
Package: @kalavruksha/solver
Bounded Context: Solver Orchestration
DDD Building Block: Configuration
Owner Module: Timetable Solver Team
Public API: Yes
Internal Only: Yes
Exports: HardConstraintEvaluator, SoftPenaltyEvaluator
Imports: Evaluator files in directory
Used By: Search Algorithms
Depends On: Evaluator files
Implementation Prerequisites: Evaluator files
Reverse Dependencies: Search Algorithms
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
Implementation Order: 210
Current Status: Approved
Security Classification: Internal
Notes: Barrel export file.
DIRECTORY SPECIFICATION
Directory Path: packages/solver/src/heuristics/
Purpose: Houses domain heuristics guiding chromosome mutation and crossover selection operators.
Architectural Layer: Solver Layer / Heuristics Sub-Package
Package: @kalavruksha/solver
Bounded Context: Solver Orchestration
Responsibilities:
DifficultyWeightHeuristic: Prioritizes assigning high cognitive difficulty subjects (Math/Physics) to early morning periods 1–4.
Contained Files:
difficulty-weight.heuristic.ts
index.ts
Contained Directories: None
Relationships:
Parent: packages/solver/src/
Children: None
Dependencies: @kalavruksha/types
Dependents: GeneticAlgorithmSolver
Implementation Phase: Phase 3
Freeze Status: Approved
Notes: Domain heuristic guide for search algorithms.
File ID: FILE-SOLVER-013
Path: packages/solver/src/heuristics/difficulty-weight.heuristic.ts
Purpose: Domain heuristic class prioritizing morning period allocations for subjects with high cognitive difficulty weights.
Architectural Layer: Solver Layer
Package: @kalavruksha/solver
Bounded Context: Solver Orchestration
DDD Building Block: Domain Service
Owner Module: Timetable Solver Team
Public API: Yes
Internal Only: Yes
Exports: DifficultyWeightHeuristic
Imports: @kalavruksha/types
Used By: GeneticAlgorithmSolver
Depends On: @kalavruksha/types
Implementation Prerequisites: None
Reverse Dependencies: Search Algorithms
Generated or Handwritten: Handwritten
Estimated LOC: 75 lines
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
Implementation Order: 211
Current Status: Approved
Security Classification: Internal
Notes: Morning subject difficulty preference heuristic.
File ID: FILE-SOLVER-014
Path: packages/solver/src/heuristics/index.ts
Purpose: Barrel export for solver heuristics.
Architectural Layer: Solver Layer
Package: @kalavruksha/solver
Bounded Context: Solver Orchestration
DDD Building Block: Configuration
Owner Module: Timetable Solver Team
Public API: Yes
Internal Only: Yes
Exports: DifficultyWeightHeuristic
Imports: Heuristic files in directory
Used By: Search Algorithms
Depends On: Heuristic files
Implementation Prerequisites: Heuristic files
Reverse Dependencies: Search Algorithms
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
Implementation Order: 212
Current Status: Approved
Security Classification: Internal
Notes: Barrel export file.
DIRECTORY SPECIFICATION
Directory Path: packages/solver/src/vectors/
Purpose: Houses solution vector converters serializing domain problem matrices into integer chromosome vectors for population search and deserializing solution vectors back into domain slot coordinates.
Architectural Layer: Solver Layer / Vector Converter Sub-Package
Package: @kalavruksha/solver
Bounded Context: Solver Orchestration
Responsibilities:
Converts domain allocations and constraint rules into compact integer chromosome vectors.
Deserializes best-fit solution vectors back into TimetableSlot assignment payloads.
Contained Files:
solution-vector.converter.ts
index.ts
Contained Directories: None
Relationships:
Parent: packages/solver/src/
Children: None
Dependencies: @kalavruksha/types
Dependents: SolverEngineFacade
Implementation Phase: Phase 3
Freeze Status: Approved
Notes: Vector converter sub-package.
File ID: FILE-SOLVER-015
Path: packages/solver/src/vectors/solution-vector.converter.ts
Purpose: Converter class transforming domain aggregate matrices into flattened integer chromosome vectors for high-speed population crossover/mutation iterations.
Architectural Layer: Solver Layer
Package: @kalavruksha/solver
Bounded Context: Solver Orchestration
DDD Building Block: Mapper
Owner Module: Timetable Solver Team
Public API: Yes
Internal Only: Yes
Exports: SolutionVectorConverter
Imports: @kalavruksha/types
Used By: SolverEngineFacade
Depends On: @kalavruksha/types
Implementation Prerequisites: None
Reverse Dependencies: Facade class
Generated or Handwritten: Handwritten
Estimated LOC: 95 lines
Complexity: Medium
Unit Test Required: Yes
Integration Test Required: Yes
Mutation Test Required: Yes
Performance Test Required: Yes (
O
(
N
)
O(N)
 vector conversion latency test)
Security Review Required: Yes
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Static
Expected Change Frequency: Low
Implementation Order: 213
Current Status: Approved
Security Classification: Internal
Notes: Solution vector serialization converter.
File ID: FILE-SOLVER-016
Path: packages/solver/src/vectors/index.ts
Purpose: Barrel export for solution vector converters.
Architectural Layer: Solver Layer
Package: @kalavruksha/solver
Bounded Context: Solver Orchestration
DDD Building Block: Configuration
Owner Module: Timetable Solver Team
Public API: Yes
Internal Only: Yes
Exports: SolutionVectorConverter
Imports: ./solution-vector.converter
Used By: SolverEngineFacade
Depends On: Converter files
Implementation Prerequisites: Converter files
Reverse Dependencies: Facade class
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
Implementation Order: 214
Current Status: Approved
Security Classification: Internal
Notes: Barrel export file.
DIRECTORY SPECIFICATION
Directory Path: packages/solver/src/__tests__/
Purpose: Vitest unit, integration, and performance benchmark test specs for solver algorithms, evaluators, heuristics, and vector converters.
Architectural Layer: Testing Layer
Package: @kalavruksha/solver
Bounded Context: Solver Orchestration
Responsibilities:
Verifies genetic algorithm population search convergence.
Benchmarks inner-loop evaluator execution latency (
<
0.001
 ms
<0.001 ms
).
Contained Files:
solver-engine.spec.ts
Contained Directories: None
Relationships:
Parent: packages/solver/src/
Children: None
Dependencies: @kalavruksha/testing, Vitest
Dependents: CI/CD test runner
Implementation Phase: Phase 3
Freeze Status: Approved
Notes: Solver engine unit and benchmark test suite.
File ID: FILE-SOLVER-017
Path: packages/solver/src/__tests__/solver-engine.spec.ts
Purpose: Vitest test spec verifying population search convergence, hard clash elimination (
0
0
 hard clashes), soft penalty score reduction, and inner-loop evaluator latency benchmarks.
Architectural Layer: Testing
Package: @kalavruksha/solver
Bounded Context: Solver Orchestration
DDD Building Block: Test
Owner Module: Timetable Solver Team
Public API: No
Internal Only: Yes
Exports: None (Test Spec)
Imports: vitest, @kalavruksha/testing, ../solver-engine.facade
Used By: Vitest test runner, GitHub Actions CI
Depends On: Solver source modules
Implementation Prerequisites: Solver source modules
Reverse Dependencies: CI pipeline
Generated or Handwritten: Handwritten
Estimated LOC: 125 lines
Complexity: Medium
Unit Test Required: Yes
Integration Test Required: Yes
Mutation Test Required: Yes
Performance Test Required: Yes (High-speed population benchmark)
Security Review Required: No
Architecture Review Required: Yes
Freeze Protected: Yes
Versioning Strategy: Dynamic
Expected Change Frequency: Medium
Implementation Order: 215
Current Status: Approved
Security Classification: Internal
Notes: Comprehensive solver benchmark and unit test suite.
PACKAGE METADATA: @kalavruksha/solver
Package Dependency Graph: @kalavruksha/solver 
→
→
 @kalavruksha/types, @kalavruksha/errors, @kalavruksha/utils.
Allowed Imports: Workspace primitive packages (@kalavruksha/types, @kalavruksha/errors, @kalavruksha/utils).
Forbidden Imports: Prisma, PostgreSQL drivers, Redis, BullMQ, NestJS, Next.js, React, @kalavruksha/ui, @kalavruksha/infrastructure. (Solver engine remains a pure mathematical optimization package).
Public Surface: SolverEngineFacade, Algorithms, Evaluators, Heuristics, SolutionVectorConverter.
Internal Surface: Internal chromosome operators and vector arrays.
Barrel Export Rules: Subpath exports defined in package.json.
Layer Validation: Tier 3 Constraint Solver Microservice Layer.
Circular Dependency Status: Clean (Zero circular dependencies).
QUALITY VALIDATION: @kalavruksha/solver
Architecture Validation: 100% Compliant
Dependency Validation: 100% Compliant
Boundary Validation: 100% Compliant
Type Safety: Strict Node22 TypeScript
Coverage Target: 
>
90
%
>90%
 Algorithm & Evaluator unit test coverage
Mutation Target: 
>
85
%
>85%
 Fitness evaluator mutation coverage
Performance Target: 
<
0.001
 ms
<0.001 ms
 hard clash evaluation latency per coordinate slot
Static Analysis Status: Clean
Security Status: Clean (Isolated mathematical computation sandbox)
PART SUMMARY
Directories completed: 6 (packages/solver/, src/, algorithms/, evaluators/, heuristics/, vectors/, __tests__/)
Files completed: 17 (Cumulative: 215 files)
Packages completed: 16 (Root Workspace, @kalavruksha/eslint-config, prettier-config, tsconfig, apps/api, services/worker-solver, worker-notification, worker-analytics, worker-scheduler, web-admin, web-teacher, web-superadmin, web-parent, @kalavruksha/application, @kalavruksha/infrastructure, @kalavruksha/solver)
Remaining directories: 110
Remaining files: 1,285
Implementation progress: 76 / 186 directories completed
Repository completion percentage: 40.86%
Estimated remaining parts: 5 sequential parts
NEXT PART:
packages/ui/ (and shared UI/Auth packages: @kalavruksha/ui, @kalavruksha/auth, @kalavruksha/api-client)