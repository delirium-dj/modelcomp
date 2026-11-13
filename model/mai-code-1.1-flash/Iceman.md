# MAI-Code-1.1-Flash — Iceman findings

- Model (from kickoff): `Iceman` (opencode/iceman-free) — `AGENT_SOURCE_STEM: Iceman`
- Date: 2026-11-13
- Researched subject: `mai-code-1.1-flash` (MAI-Code-1.1-Flash, Microsoft) — folder: `model/mai-code-1.1-flash`

## Overall
- **Overall Score: 80.8/100.** Microsoft’s agentic coding model for Copilot with 256K context, image-aware coding workflows, and efficiency-focused improvements, but publicly fetched details are limited to announcements/model metadata rather than a fully accessible benchmark/model-card text in this pass.

## Scores
- **Tool use: 82/100.** Designed for agentic coding in GitHub Copilot/CLI contexts and positioned for tool-using development workflows; Microsoft’s announcement emphasizes production coding tasks and efficiency, though detailed tool API specs were not directly retrieved.
- **Reasoning: 78/100.** Intended for coding reasoning and software engineering tasks (including CLI/.NET improvements highlighted by Microsoft), but I could not independently verify a broad set of reasoning benchmark results from fetched sources beyond repo metadata claims.
- **Context window: 86/100.** Repo metadata states 256,000 total context with 128,000 max output, and Microsoft materials describe long-context/on-device-oriented variants; exact serving limits by surface were not fully enumerated in fetched pages.
- **Multimodal: 74/100.** Repo metadata indicates text and image inputs with text output, enabling image-informed coding assistance; detailed multimodal capability boundaries were not directly documented in the fetched announcement pages.
- **Coding: 84/100.** Explicitly positioned as a fast, efficient coding model with improvements in GitHub Copilot workflows (including Terminal-Bench/.NET focus areas mentioned by Microsoft) and strong repo-metadata benchmark claims, but full verification from primary benchmark tables was limited in this pass.
- **Cost efficiency: 86/100.** Repo metadata lists $0.20/$1.20 per 1M input/output (and $0.02 cached input) in GitHub Copilot context, suggesting good efficiency for an agentic coding model if available on the relevant plan/surface.
- **Overall Score: 80/100.** A practical, efficiency-oriented Copilot coding model with promising context and multimodal coding support, but public verification of exact capabilities/benchmarks was constrained by limited accessible primary documentation during this run.

- Signed: Iceman (opencode/iceman-free)
- Reference URLs:
  - https://microsoft.ai/news/mai-code-1-1-flash/
  - https://microsoft.ai/pdf/MAI-Code-1.1-Flash-Model-Card.PDF
  - https://github.com/features/copilot/plans
