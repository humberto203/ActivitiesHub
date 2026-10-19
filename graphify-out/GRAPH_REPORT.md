# Graph Report - EventsHub  (2026-10-06)

## Corpus Check
- 68 files · ~50,978 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 16 file(s) not represented in the graph (top: (none) 8, .toml 6, .nswag 1)

## Summary
- 119 nodes · 110 edges · 23 communities (8 shown, 15 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `ce1d9465`
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
1. `scripts` - 5 edges
2. `OpenSpec Awareness` - 4 edges
3. `OpenSpec Awareness` - 4 edges
4. `OpenSpec Awareness` - 4 edges
5. `@mui/material` - 3 edges
6. `react` - 3 edges
7. `App()` - 3 edges
8. `NavBar()` - 3 edges
9. `@fontsource/roboto` - 2 edges
10. `@mui/icons-material` - 2 edges

## Surprising Connections (you probably didn't know these)
- `App()` --calls--> `NavBar()`  [EXTRACTED]
  web/EventsHub/src/app/layout/App.tsx → web/EventsHub/src/app/layout/NavBar.tsx

## Import Cycles
- None detected.

## Communities (23 total, 15 thin omitted)

### Community 0 - "package.json"
Cohesion: 0.08
Nodes (23): @babel/core, babel-plugin-react-compiler, @emotion/react, @emotion/styled, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh (+15 more)

### Community 1 - "devDependencies"
Cohesion: 0.11
Nodes (18): devDependencies, @babel/core, babel-plugin-react-compiler, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals (+10 more)

### Community 2 - "App.tsx"
Cohesion: 0.22
Nodes (9): axios, @fontsource/roboto, @mui/icons-material, @mui/material, react, react-dom, Activity, App() (+1 more)

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
- **82 isolated node(s):** `The Stance`, `Planning a Change`, `What You Might Do`, `Check for context`, `When no change exists` (+77 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 98 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **15 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.145) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.074) - this node is a cross-community bridge._
- **Why does `scripts` connect `scripts` to `package.json`?**
  _High betweenness centrality (0.038) - this node is a cross-community bridge._
- **What connects `The Stance`, `Planning a Change`, `What You Might Do` to the rest of the system?**
  _82 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.08333333333333333 - nodes in this community are weakly interconnected._
- **Should `devDependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.1111111111111111 - nodes in this community are weakly interconnected._