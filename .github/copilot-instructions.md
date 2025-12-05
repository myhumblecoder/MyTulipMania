# GitHub Copilot Instructions for BMAD Method

This document provides essential guidance for working efficiently with the BMAD (Business-to-Market Agile Development) framework using GitHub Copilot.

## Overview

BMAD is an AI-driven agile development framework with specialized agents, workflows, and comprehensive testing infrastructure. This workspace has BMAD v6.0.0-alpha.13 installed with:

- **Core Module**: Base platform with BMad Master orchestrator
- **BMM Module**: Complete agile development lifecycle (12 agents, 26 workflows)
- **TestArch**: Production-ready testing infrastructure with 32 knowledge documents

## Quick Start

### Activating BMAD Agents

1. **Open Copilot Chat**: Click the Copilot icon in the VS Code sidebar
2. **Select Chat Mode**: Click the mode selector at the top of the chat panel
3. **Choose Your Agent**: Select from available BMAD agents:
   - `bmad master` - Master orchestrator and workflow navigator
   - `pm` - Product Manager (John) for PRD creation
   - `architect` - System Architect (Winston) for technical design
   - `quick flow solo dev` - Barry for rapid end-to-end development
   - `dev` - Developer Agent (Amelia) for story implementation
   - `tea` - Test Architect (Murat) for testing workflows

### Project Configuration

Your BMAD installation is configured with:
- **Project Name**: MyTulipMania
- **User Name**: TulipMaster
- **Skill Level**: Intermediate
- **Language**: English
- **Output Folder**: `{project-root}/docs`
- **Sprint Artifacts**: `{project-root}/docs/sprint-artifacts`

## Core Workflows

### 🚀 Quick Flow (Fastest Path)

For rapid feature development without formal ceremonies:

1. **Switch to Barry** (Quick Flow Solo Dev)
2. **Create Tech Spec**: Choose menu option 1 or type `*create-tech-spec`
3. **Implement**: Choose menu option 2 or type `*quick-dev`
4. **Code Review**: Choose menu option 3 or type `*code-review` (recommended: fresh context)

### 📋 Full BMM Method (Enterprise Projects)

For complete lifecycle with documentation and formal phases:

#### Phase 1: Planning
1. **PM (John)** → `*create-prd` → Create Product Requirements Document
2. **PM (John)** → `*validate-prd` → Validate PRD (use fresh context)

#### Phase 2: Architecture
3. **Architect (Winston)** → `*create-architecture` → Design system architecture
4. **Architect (Winston)** → `*validate-architecture` → Validate design (fresh context)

#### Phase 3: Solutioning
5. **PM (John)** → `*create-epics-and-stories` → Break down into user stories
6. **Architect (Winston)** → `*implementation-readiness` → Final validation before dev

#### Phase 4: Implementation
7. **Dev (Amelia)** → `*develop-story` → Implement stories with TDD
8. **Dev (Amelia)** → `*code-review` → Adversarial code review (fresh context)

### 🧪 Testing Workflows

Switch to **TEA (Murat)** for comprehensive testing:

- `*framework` - Initialize Playwright/Cypress test framework
- `*atdd` - Generate E2E tests before implementation (red-green-refactor)
- `*automate` - Generate comprehensive test automation suite
- `*test-design` - Create test scenarios and strategies
- `*trace` - Requirements-to-tests traceability matrix
- `*nfr-assess` - Non-functional requirements validation
- `*ci` - Scaffold CI/CD quality pipeline
- `*test-review` - Review test quality with best practices

## Key Principles

### Agent Interaction Rules

1. **Always Load Config First**: Agents load `.bmad/bmm/config.yaml` on activation
2. **Menu-Driven**: Agents present numbered menus - select by number or command trigger
3. **Workflow Execution**: Workflows load `.bmad/core/tasks/workflow.xml` as the execution engine
4. **Never Pre-load**: Resources load at runtime only when needed
5. **Fresh Context for Validation**: Use new chat sessions with different models for reviews

### Development Standards

#### For Dev Agent (Amelia)
- **Story File is Truth**: Tasks/subtasks sequence is authoritative
- **Red-Green-Refactor**: Write failing test → implement → refactor
- **100% Test Coverage**: Every task/subtask requires passing tests
- **No Hallucinations**: Only implement what's in the story file
- **Project Context**: Use `**/project-context.md` for coding standards only

#### For Quick Flow (Barry)
- **Plan + Execute**: Specs and code happen together
- **Ship Fast**: Working code beats perfect code
- **Docs Alongside**: Documentation during development, not after

#### For Test Architect (Murat)
- **Risk-Based**: Testing depth scales with impact
- **Usage Patterns**: Tests mirror how users actually interact
- **No Flakiness**: Flaky tests are critical technical debt
- **Data-Driven Gates**: Quality decisions backed by evidence

## Advanced Features

### Party Mode

Bring multiple agents into a group chat:
- Available from any agent menu
- Command: `*party-mode`
- Use for: Complex decisions, cross-functional discussions, brainstorming

### Workflow Status

Check your current phase and next steps:
- Command: `*workflow-status`
- Available from: PM, Architect agents
- Use: Navigate long-running projects

### Course Correction

When implementation goes off track:
- Agent: PM (John)
- Command: `*correct-course`
- Analyzes impact and routes solutions

### Diagrams

Create visual documentation with Architect (Winston):
- `*create-excalidraw-diagram` - Architecture, ERD, UML
- `*create-excalidraw-dataflow` - Data flow diagrams
- `*create-excalidraw-flowchart` - Process flows
- `*create-excalidraw-wireframe` - UI wireframes

## Testing Infrastructure

### TestArch Knowledge Base

TEA agent has access to 32 specialized knowledge documents covering:

**Framework & Setup**
- Playwright/Cypress configuration guardrails
- Fixture architecture patterns
- CI burn-in strategies
- Environment management

**Best Practices**
- Network-first safeguards
- Data factories and API setup
- Component TDD loop
- Selective test execution

**Advanced Topics**
- Contract testing (Pact)
- Email authentication flows
- Feature flag governance
- Visual debugging toolkit

**Quality & Risk**
- Risk governance matrix
- Test priorities (P0-P3)
- NFR assessment criteria
- Test quality definition of done

### Playwright Utils (MCP Enhanced)

Your config enables MCP enhancements and Playwright utilities:
- Typed HTTP client with schema validation
- HAR record/playback with CRUD detection
- Auth session management
- Network spy/stub with JSON parsing
- Async polling utilities
- Structured logging for reports
- File validation (CSV, XLSX, PDF, ZIP)
- Smart burn-in runner with git diff
- HTTP error monitoring (4xx/5xx)

## Command Reference

### Common Commands Across Agents

- `*menu` or `[M]` - Redisplay menu options
- `*dismiss` or `[D]` - Exit agent and return to normal chat
- `*party-mode` - Group chat with expert agents

### BMad Master Specific

- `*list-tasks` - Show all available tasks
- `*list-workflows` - Show all workflows

### Best Practices

1. **Start with BMad Master** if unsure which agent to use
2. **Use validation workflows** with fresh context (different LLM if possible)
3. **Check project-context.md** if it exists - it's the project bible
4. **Follow the menu** - agents are designed for guided workflows
5. **Save often** - workflows auto-save after each major step
6. **Run tests continuously** - never proceed with failing tests
7. **Document decisions** - agents maintain records of choices made

## Troubleshooting

### Agent Not Loading Config
- Check `.bmad/bmm/config.yaml` exists
- Verify all required fields present
- Agent will stop if config fails to load

### Workflow Path Not Found
- Verify workflow exists in `.bmad/_cfg/workflow-manifest.csv`
- Check path uses `{project-root}` variable correctly
- If path is "todo", workflow isn't implemented yet

### Tests Failing
- Dev agent MUST NOT proceed with failing tests
- Run full test suite after each task completion
- Check project-context.md for test standards

### Need Help Choosing Workflow
1. Use `*workflow-status` to see current phase
2. Consult BMad Master with `*list-workflows`
3. Refer to phase-based workflow guide above

## File Locations

### Configuration
- `.bmad/bmm/config.yaml` - BMM module configuration
- `.bmad/core/config.yaml` - Core platform configuration
- `.bmad/_cfg/manifest.yaml` - Installation manifest

### Manifests
- `.bmad/_cfg/agent-manifest.csv` - All available agents
- `.bmad/_cfg/workflow-manifest.csv` - All workflows
- `.bmad/_cfg/task-manifest.csv` - Core tasks
- `.bmad/_cfg/tool-manifest.csv` - Available tools

### Agents
- `.bmad/core/agents/` - Core agents (BMad Master)
- `.bmad/bmm/agents/` - BMM agents (PM, Dev, Architect, etc.)
- `.github/chatmodes/` - Copilot chat mode definitions

### Workflows
- `.bmad/bmm/workflows/1-analysis/` - Analysis phase workflows
- `.bmad/bmm/workflows/2-plan-workflows/` - Planning (PRD, etc.)
- `.bmad/bmm/workflows/3-solutioning/` - Architecture & stories
- `.bmad/bmm/workflows/4-implementation/` - Development & review
- `.bmad/bmm/workflows/bmad-quick-flow/` - Quick Flow workflows
- `.bmad/bmm/workflows/testarch/` - Testing workflows
- `.bmad/bmm/workflows/diagrams/` - Diagram generation

### Testing Resources
- `.bmad/bmm/testarch/knowledge/` - 32 testing knowledge documents
- `.bmad/bmm/testarch/tea-index.csv` - Knowledge fragment index

### Documentation
- `.bmad/bmm/docs/` - Complete BMM user documentation
- `.bmad/docs/github-copilot-instructions.md` - Basic activation guide

## Getting Started Checklist

- [ ] Review this instructions file
- [ ] Activate BMad Master to see available options
- [ ] Choose your path: Quick Flow (fast) or Full BMM (enterprise)
- [ ] Check if `project-context.md` exists in your workspace
- [ ] Select appropriate agent for your task
- [ ] Follow agent menu for guided workflow execution
- [ ] Use validation workflows with fresh context
- [ ] Run tests continuously during development
- [ ] Save documentation in `docs/` folder
- [ ] Use `docs/sprint-artifacts/` for sprint tracking

## Resources

- **BMM Documentation Hub**: `.bmad/bmm/docs/README.md`
- **Quick Start Guide**: `.bmad/bmm/docs/quick-start.md`
- **Agents Guide**: `.bmad/bmm/docs/agents-guide.md`
- **FAQ**: `.bmad/bmm/docs/faq.md`
- **Glossary**: `.bmad/bmm/docs/glossary.md`

---

**Version**: BMAD 6.0.0-alpha.13  
**Project**: MyTulipMania  
**User**: TulipMaster  
**Last Updated**: December 5, 2025
