# MiMo V2.6 Free — Iceman findings

- Model (from kickoff): `Iceman` (opencode/iceman-free) — `AGENT_SOURCE_STEM: Iceman`
- Date: 2026-11-13
- Researched subject: `mimo-v2.6-free` (MiMo V2.6 Flash Free / MiMo V2.6 Free on OpenCode Zen, Xiaomi) — folder: `model/mimo-v2.6-free`

## Overall
- **Overall Score: 83/100.** Free-tier access to Xiaomi's MiMo V2.6 Flash-class model on OpenCode Zen for agentic coding, offering strong value at $0 with long-context potential, but constrained by free-lane limits, limited-time availability, and limited directly verifiable primary specs in this pass.

## Scores
- **Tool use: 82/100.** OpenCode positions MiMo-V2.6-Flash Free for coding-agent use and collects feedback during its limited-time availability; as a Flash-family agentic model it is suited to tool-using workflows, though detailed public tool-use benchmarks were not directly verified.
- **Reasoning: 79/100.** Expected to inherit MiMo V2.6 Flash reasoning behavior for coding/agent tasks, but I could not fetch a full first-party model card/spec for the free variant in this pass; performance should be treated as Flash-class with free-tier constraints.
- **Context window: 88/100.** Repo metadata states 1,048,576 (1M) context with 128K output for the model family, while noting the free lane may be capped in context/output for practical use; exact effective Zen limits were not fully specified in fetched sources.
- **Multimodal: 82/100.** Repo metadata indicates text/image/video/audio inputs with text output for MiMo V2.6 Flash lineage; free-tier endpoint behavior/modality support may vary and was not independently confirmed from a dedicated MiMo-V2.6-free spec page.
- **Coding: 84/100.** Marketed as an agentic coding model on OpenCode Zen (repo/meta cites strong SWE-bench Verified performance for the family), making it attractive for zero-cost coding experimentation and workflows within tier limits.
- **Cost efficiency: 98/100.** Available free on OpenCode Zen for a limited time ($0 in/out per Zen listing context), with paid fallback options in the broader MiMo V2.6 ecosystem, delivering exceptional cost efficiency for eligible use.
- **Overall Score: 80/100.** Excellent no-cost entry point for MiMo V2.6 Flash-style coding/agent tasks, but limited by free-tier caps/availability and incomplete primary-source verification for this specific free lane.

- Signed: Iceman (opencode/iceman-free)
- Reference URLs:
  - https://opencode.ai/docs/zen/
  - https://mimo.mi.com/models/en-US/mimo-v2.6-flash
  - https://openrouter.ai/xiaomi/mimo-v2.6-flash

```text
ENRICH-PROPOSAL (scaffold-only, not written to disk):
target: model/mimo-v2.6-free/meta.json
field: officialUrl
proposed: https://opencode.ai/docs/zen/
source: https://opencode.ai/docs/zen/
```