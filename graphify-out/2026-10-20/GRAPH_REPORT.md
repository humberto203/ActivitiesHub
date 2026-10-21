# Graph Report - EventsHub  (2026-10-18)

## Corpus Check
- 72 files · ~82,271 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 17 file(s) not represented in the graph (top: (none) 9, .toml 6, .nswag 1)

## Summary
- 131 nodes · 130 edges · 24 communities (8 shown, 16 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `53da1fff`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- package.json
- devDependencies
- App.tsx
- .claude/skills/openspec-explore/SKILL.md
- .gemini/skills/openspec-explore/SKILL.md
- explore.md
- dependencies
- scripts

## God Nodes (most connected - your core abstractions)
1. `@mui/material` - 6 edges
2. `ActivityDashboard()` - 5 edges
3. `scripts` - 5 edges
4. `ActivityList()` - 4 edges
5. `OpenSpec Awareness` - 4 edges
6. `OpenSpec Awareness` - 4 edges
7. `OpenSpec Awareness` - 4 edges
8. `App()` - 3 edges
9. `NavBar()` - 3 edges
10. `ActivityCard()` - 3 edges

## Surprising Connections (you probably didn't know these)
- `App()` --calls--> `NavBar()`  [EXTRACTED]
  web/EventsHub/src/app/layout/App.tsx → web/EventsHub/src/app/layout/NavBar.tsx
- `App()` --calls--> `ActivityDashboard()`  [EXTRACTED]
  web/EventsHub/src/app/layout/App.tsx → web/EventsHub/src/features/activities/dashboard/ActivityDashboard.tsx
- `ActivityList()` --calls--> `ActivityCard()`  [EXTRACTED]
  web/EventsHub/src/features/activities/dashboard/ActivityList.tsx → web/EventsHub/src/features/activities/dashboard/ActivityCard.tsx
- `ActivityDashboard()` --calls--> `ActivityList()`  [EXTRACTED]
  web/EventsHub/src/features/activities/dashboard/ActivityDashboard.tsx → web/EventsHub/src/features/activities/dashboard/ActivityList.tsx
- `ActivityDashboard()` --calls--> `ActivityDetail()`  [EXTRACTED]
  web/EventsHub/src/features/activities/dashboard/ActivityDashboard.tsx → web/EventsHub/src/features/activities/details/ActivityDetail.tsx

## Import Cycles
- None detected.

## Communities (24 total, 16 thin omitted)

### Community 0 - "package.json"
Cohesion: 0.07
Nodes (27): axios, @babel/core, babel-plugin-react-compiler, @emotion/react, @emotion/styled, eslint, @eslint/js, eslint-plugin-react-hooks (+19 more)

### Community 1 - "devDependencies"
Cohesion: 0.11
Nodes (18): devDependencies, @babel/core, babel-plugin-react-compiler, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals (+10 more)

### Community 2 - "App.tsx"
Cohesion: 0.20
Nodes (12): @mui/icons-material, @mui/material, App(), NavBar(), ActivityCard(), Props, ActivityDashboard(), Props (+4 more)

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

## Knowledge Gaps
- **86 isolated node(s):** `Props`, `Props`, `Props`, `Props`, `name` (+81 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 103 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **16 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.142) - this node is a cross-community bridge._
- **Why does `@mui/material` connect `App.tsx` to `package.json`?**
  _High betweenness centrality (0.100) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.071) - this node is a cross-community bridge._
- **What connects `Props`, `Props`, `Props` to the rest of the system?**
  _86 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.07126436781609195 - nodes in this community are weakly interconnected._
- **Should `devDependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.1111111111111111 - nodes in this community are weakly interconnected._