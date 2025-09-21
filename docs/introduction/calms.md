# CALMS Framework

CALMS is a heuristic to evaluate and guide DevOps adoption. It stands for: Culture • Automation • Lean • Measurement • Sharing.

## Overview

| Element | Key Question | Indicators |
|---------|--------------|------------|
| Culture | Do we trust & collaborate across roles? | Blameless postmortems, psychological safety |
| Automation | Are repetitive paths codified? | IaC, CI pipelines, policy as code |
| Lean | Are we reducing waste in flow? | Small batch size, low WIP, value stream mapping |
| Measurement | Do we have actionable telemetry? | DORA metrics, SLOs, error budgets |
| Sharing | Is knowledge diffused & reusable? | Runbooks, inner source, guilds |

## Using CALMS

- Baseline current state (qualitative + a few metrics)
- Pick one constraint per quarter; avoid chasing all dimensions simultaneously
- Reassess after improvements; document learning

## Example Assessment (Simplified)

| Dimension | Current State | Target |
|-----------|--------------|--------|
| Culture | Postmortems assign blame | Blameless retros in 3 months |
| Automation | Manual infra provisioning | Terraform + pipelines |
| Lean | Large release bundles | Move to feature flags & trunk-based |
| Measurement | Ad-hoc logs only | Metrics + traces + error budget |
| Sharing | Tribal knowledge | Central runbook repo |

## Common Pitfalls

- Treating CALMS as a checklist certification
- Over-rotating on tooling before culture
- Tracking vanity metrics (deployment count without context)

## Practical Starting Moves

- Introduce lightweight postmortem template
- Automate one painful manual deployment path
- Map value stream; identify largest wait state
- Define 2 SLOs with stakeholders
- Create shared doc space for operations knowledge

Next: [Core Practices & Principles](practices.md)
