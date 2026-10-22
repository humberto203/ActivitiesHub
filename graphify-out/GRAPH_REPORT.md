# Graph Report - EventsHub (2026-10-20)

## Corpus Check

- 74 files · ~88,165 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 17 file(s) not represented in the graph (top: (none) 9, .toml 6, .nswag 1)

## Summary

- 197 nodes · 200 edges · 28 communities (12 shown, 16 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness

- Built from commit: `f5388ea7`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)

- package.json
- devDependencies
- ActivityDashboard.tsx
- .claude/skills/openspec-explore/SKILL.md
- .gemini/skills/openspec-explore/SKILL.md
- explore.md
- dependencies
- scripts
- Part 2: .NET only (Husky.Net)
- Part 1: .NET + npm in the same repo (e.g. EventsHub)
- Part 3: npm only, `package.json` in the repo root (Husky v9)
- Part 4: npm only, `package.json` in a subfolder (Husky v9)

## God Nodes (most connected - your core abstractions)

1. `Part 1: .NET + npm in the same repo (e.g. EventsHub)` - 14 edges
2. `Part 2: .NET only (Husky.Net)` - 14 edges
3. `Part 3: npm only, `package.json` in the repo root (Husky v9)` - 14 edges
4. `Part 4: npm only, `package.json` in a subfolder (Husky v9)` - 13 edges
5. `@mui/material` - 8 edges
6. `ActivityDashboard()` - 6 edges
7. `scripts` - 5 edges
8. `ActivityList()` - 4 edges
9. `OpenSpec Awareness` - 4 edges
10. `OpenSpec Awareness` - 4 edges

## Surprising Connections (you probably didn't know these)

- `App()` --calls--> `NavBar()` [EXTRACTED]
  web/EventsHub/src/app/layout/App.tsx → web/EventsHub/src/app/layout/NavBar.tsx
- `App()` --calls--> `ActivityDashboard()` [EXTRACTED]
  web/EventsHub/src/app/layout/App.tsx → web/EventsHub/src/features/activities/dashboard/ActivityDashboard.tsx
- `ActivityList()` --calls--> `ActivityCard()` [EXTRACTED]
  web/EventsHub/src/features/activities/dashboard/ActivityList.tsx → web/EventsHub/src/features/activities/dashboard/ActivityCard.tsx
- `ActivityDashboard()` --calls--> `ActivityList()` [EXTRACTED]
  web/EventsHub/src/features/activities/dashboard/ActivityDashboard.tsx → web/EventsHub/src/features/activities/dashboard/ActivityList.tsx
- `ActivityDashboard()` --calls--> `ActivityDetail()` [EXTRACTED]
  web/EventsHub/src/features/activities/dashboard/ActivityDashboard.tsx → web/EventsHub/src/features/activities/details/ActivityDetail.tsx

## Import Cycles

- None detected.

## Communities (28 total, 16 thin omitted)

### Community 0 - "package.json"

Cohesion: 0.07
Nodes (26): @babel/core, babel-plugin-react-compiler, @emotion/react, @emotion/styled, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh (+18 more)

### Community 1 - "devDependencies"

Cohesion: 0.11
Nodes (18): devDependencies, @babel/core, babel-plugin-react-compiler, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals (+10 more)

### Community 2 - "ActivityDashboard.tsx"

Cohesion: 0.16
Nodes (16): axios, @mui/icons-material, @mui/material, App(), NavBar(), Props, ActivityCard(), Props (+8 more)

### Community 3 - ".claude/skills/openspec-explore/SKILL.md"

Cohesion: 0.17
Nodes (11): Check for context, Ending Discovery, Guardrails, Handling Different Entry Points, OpenSpec Awareness, Planning a Change, The Stance, What You Don't Have To Do (+3 more)

### Community 4 - ".gemini/skills/openspec-explore/SKILL.md"

Cohesion: 0.17
Nodes (11): Check for context, Ending Discovery, Guardrails, Handling Different Entry Points, OpenSpec Awareness, Planning a Change, The Stance, What You Don't Have To Do (+3 more)

### Community 5 - "explore.md"

Cohesion: 0.18
Nodes (10): Check for context, Ending Discovery, Guardrails, OpenSpec Awareness, Planning a Change, The Stance, What You Don't Have To Do, What You Might Do (+2 more)

### Community 6 - "dependencies"

Cohesion: 0.22
Nodes (9): dependencies, axios, @emotion/react, @emotion/styled, @fontsource/roboto, @mui/icons-material, @mui/material, react (+1 more)

### Community 7 - "scripts"

Cohesion: 0.40
Nodes (5): scripts, build, dev, lint, preview

### Community 24 - "Part 2: .NET only (Husky.Net)"

Cohesion: 0.11
Nodes (17): How to use this guide, Installing Husky in a Project: .NET and npm, Part 2: .NET only (Husky.Net), Skipping hooks (use sparingly), Step 10: Commit the Husky files, Step 11: Setup for a new teammate or CI, Step 1: Check prerequisites, Step 2: Create a local tool manifest (+9 more)

### Community 25 - "Part 1: .NET + npm in the same repo (e.g. EventsHub)"

Cohesion: 0.13
Nodes (15): Optional: add Prettier (code formatting), Part 1: .NET + npm in the same repo (e.g. EventsHub), Skipping hooks (use sparingly), Step 10: Commit the Husky files, Step 11: Setup for a new teammate or CI, Step 1: Check prerequisites, Step 2: Install Husky.Net as a local tool, Step 3: Install the Git hooks (+7 more)

### Community 26 - "Part 3: npm only, `package.json` in the repo root (Husky v9)"

Cohesion: 0.13
Nodes (15): Optional: add Prettier (code formatting), Part 3: npm only, `package.json` in the repo root (Husky v9), Skipping hooks (use sparingly), Step 10: Commit the Husky files, Step 11: Setup for a new teammate or CI, Step 1: Check prerequisites, Step 2: Make sure `package.json` and `.gitignore` exist, Step 3: Install Husky (+7 more)

### Community 27 - "Part 4: npm only, `package.json` in a subfolder (Husky v9)"

Cohesion: 0.14
Nodes (14): Optional: add Prettier (code formatting), Part 4: npm only, `package.json` in a subfolder (Husky v9), Skipping hooks (use sparingly), Step 10: Setup for a new teammate or CI, Step 1: Check prerequisites, Step 2: Install Husky, Step 3: Point the `prepare` script at the subfolder, Step 4: Install the hooks (+6 more)

## Knowledge Gaps

- **140 isolated node(s):** `How to use this guide`, `Where to run the commands (read this once)`, `Step 1: Check prerequisites`, `Step 2: Install Husky.Net as a local tool`, `Step 3: Install the Git hooks` (+135 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 157 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **16 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions

_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.066) - this node is a cross-community bridge._
- **Why does `@mui/material` connect `ActivityDashboard.tsx` to `package.json`?**
  _High betweenness centrality (0.055) - this node is a cross-community bridge._
- **Why does `Part 1: .NET + npm in the same repo (e.g. EventsHub)` connect `Part 1: .NET + npm in the same repo (e.g. EventsHub)` to `Part 2: .NET only (Husky.Net)`?**
  _High betweenness centrality (0.039) - this node is a cross-community bridge._
- **What connects `How to use this guide`, `Where to run the commands (read this once)`, `Step 1: Check prerequisites` to the rest of the system?**
  _140 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.07389162561576355 - nodes in this community are weakly interconnected._
- **Should `devDependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.1111111111111111 - nodes in this community are weakly interconnected._
- **Should `Part 2: .NET only (Husky.Net)` be split into smaller, more focused modules?**
  _Cohesion score 0.1111111111111111 - nodes in this community are weakly interconnected._
