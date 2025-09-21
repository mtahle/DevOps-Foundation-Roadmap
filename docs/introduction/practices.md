# Core Practices & Principles

These practices operationalize DevOps values and create sustainable delivery performance.

## Foundational Principles

| Principle | Summary | Example |
|-----------|---------|---------|
| Shift Left | Surface issues earlier | Security scanning on PR |
| Automate Everything Repetitive | Reduce toil / error | Infra pipelines |
| Build Quality In | Continuous verification | Test pyramid + contracts |
| Small Batch Size | Faster feedback & rollback | Feature flags |
| Trunk-Based Flow | Avoid long-lived divergence | Daily main merges |
| Observability First | Know what's happening internally | Structured logs + traces |
| Everything as Code | Declarative, versioned state | Git-managed infra, policies |

## Technical Practices

- Version control everything (infra, schemas, policies)
- Continuous Integration (frequent mainline integration, fast tests)
- Continuous Delivery (automated promotion, environment parity)
- Infrastructure as Code & Immutable artifacts
- Configuration Management + Secret Management hygiene
- GitOps for reconciliation (future advanced topic placeholder): This will include practices like declarative configurations, reconciliation loops, and tools such as Argo CD.
- Policy as Code for compliance (placeholder): This will cover automated policy enforcement using tools like OPA and Conftest, with examples for CI/CD pipelines.

## Reliability & Resilience

| Aspect | Practice |
|--------|----------|
| Reliability | SLOs + Error Budgets |
| Resilience | Chaos experiments, graceful degradation |
| Capacity | Autoscaling policies, load shedding |
| Disaster Recovery | Run failover game days |

## Security & Governance (DevSecOps Lens)

- Threat modeling early in design
- Dependency scanning & SBOM generation
- Least privilege & Just-in-time access
- Runtime security (container & cluster hardening)
- Policy gates in pipelines (OPA / Conftest)

## Continuous Improvement Mechanisms

| Mechanism | Purpose |
|----------|---------|
| Blameless Postmortems | Process + systemic learning |
| Value Stream Mapping | Flow optimization |
| Engineering Health Metrics | Detect burnout/toil |
| Technical Debt Register | Prioritize remediation |

## When to Introduce Each

| Stage | Focus |
|-------|-------|
| Just Starting | CI + version control + small deploys |
| Scaling Teams | IaC, observability, CD, SLOs |
| Growing Surface Area | Platform patterns, policy as code |
| Operating at Scale | Error budgets, chaos, governance automation |

Next: [Culture & Collaboration](culture.md)
