# Contributing Guide

Thank you for your interest in improving the DevOps Foundation Roadmap.

## Principles

- Progressive learning flow (Foundations → Fundamentals → Linux → Containers → Automation → Monitoring → Advanced)
- Tooling follows concepts (introduce *why* before *how*)
- Keep tone professional, concise, and vendor-neutral
- Avoid emojis; use clear headings
- Provide forward-looking "Next Steps" (no backwards redundancy)

## Structure Overview

    /docs
      introduction/   # DevOps mindset & principles (Foundations)
      concepts/       # Internet, web, protocols, DNS, hosting
      linux/          # OS & system operations
      containers/     # Containerization & orchestration
      automation/     # CI/CD & infrastructure automation
      monitoring/     # Observability foundations
      advanced/       # Placeholders for future advanced topics
      resources/      # External references & podcast context

## Adding Content

1. Identify correct section. If unsure, open an issue first.
2. Create or update a Markdown file using existing files as style references.
3. Include: brief intro, learning objectives (plain list), core sections, optional diagram, Next Steps.
4. Keep headings shallow (prefer 2–3 levels).
5. Use Mermaid `flowchart` for simple flows.

## Placeholders

When expertise or depth is pending, use the following format to indicate areas for future expansion:

    > Placeholder: This section will be expanded with examples covering X, Y, Z.

### Example Placeholder Usage

- **GitOps for Reconciliation**: Placeholder for advanced GitOps practices, including Argo CD and progressive delivery.
- **Policy as Code for Compliance**: Placeholder for tools like OPA and Conftest, focusing on automated governance.

Do not leave empty headings.

## Style Conventions

- Heading capitalization: Sentence case (e.g., "Learning objectives")
- Lists: Use `-` markers
- Tables: Surround with one blank line before and after
- Diagrams: Keep minimal and purposeful
- Terminology: Prefer generic (e.g., "container registry" not specific vendor unless needed)

## Commit Hygiene

- Group related doc changes per commit
- Use conventional summary style: `docs: add hosting evolution section`

## Link Guidelines

- Relative links for internal docs: `../linux/introduction.md`
- Avoid linking backwards in progression unless reference context
- External links must be reputable sources; avoid SEO farms

## Diagrams (Mermaid)

Prefer small, readable flows:

    flowchart LR
      A[Input] --> B[Process] --> C[Outcome]

## Advanced Topics Roadmap Contributions

If proposing a new advanced topic (e.g., GitOps, Policy as Code):

- Open an issue titled: `proposal: add GitOps section`
- Provide: scope, prerequisites, outline, references
- On approval, add placeholder under `advanced/`.

## Bilingual (Deferred)

Arabic summaries are planned but not yet included. When enabled:

- Add a short Arabic abstract under the main H1 separated by a horizontal rule.

## Quality Checklist Before PR


- No emojis
- No trailing spaces / inconsistent blank lines
- Forward-looking Next Steps align with nav order
- Build passes: `mkdocs build`
- Internal links resolve (link checker plugin covers this)

## Questions
Open a GitHub issue or start a discussion.

Thank you for helping improve the roadmap.
