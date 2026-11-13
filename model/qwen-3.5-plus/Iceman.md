# Qwen 3.5 Plus — Iceman findings

- Model (from kickoff): `Iceman` (opencode/iceman-free) — `AGENT_SOURCE_STEM: Iceman`
- Date: 2026-11-13
- Researched subject: `qwen-3.5-plus` (Qwen 3.5 Plus) — folder: `model/qwen-3.5-plus`

## Overall
- **Overall Score: 83.8/100.** Hosted vision-language Plus model with ~1M context and agent/coding positioning, but now superseded by newer Qwen Plus generations and with limited directly retrievable primary documentation for the exact variant in this pass.

## Scores
- **Tool use: 82/100.** Repo metadata and Zen/provider ecosystem context position Qwen 3.5 Plus for agentic workflows; OpenCode Zen lists `qwen3.5-plus` as an available model endpoint, but I could not fetch a detailed primary capability/benchmark page for this exact variant (Qwen blog/OpenRouter pages returned 404).
- **Reasoning: 80/100.** Expected to provide solid Plus-tier reasoning for coding and multimodal agent tasks in its generation, though measured agent performance lagged leaders per repo metadata and it has been superseded.
- **Context window: 92/100.** Repo metadata states 1,000,000 total context (991,808 in / 65,536 out), enabling long-document and long-horizon workflows where supported by the hosting provider.
- **Multimodal: 84/100.** Repo metadata indicates text, image, and video inputs with text output, making it useful for vision-language agent tasks; exact modality limits were not independently confirmed from an accessible primary spec page.
- **Coding: 81/100.** Suitable for general coding and agent assistance in its tier, but repo/meta notes weaker measured agent work relative to leaders and supersession by Qwen 3.6/3.7/3.8 Plus models.
- **Cost efficiency: 82/100.** OpenCode Zen pricing lists $0.20/$1.20 per 1M input/output (with cached rates), competitive for a 1M-context multimodal model, though newer successors may offer better capability per dollar.
- **Overall Score: 80/100.** A capable long-context multimodal hosted model for compatibility or legacy workflows, but less attractive for new work due to supersession and limited verifiable primary documentation.

- Signed: Iceman (opencode/iceman-free)
- Reference URLs:
  - https://opencode.ai/docs/zen/
  - https://www.alibabacloud.com/help/en/model-studio/models
  - https://qwenlm.github.io/

```text
ENRICH-PROPOSAL (scaffold-only, not written to disk):
target: model/qwen-3.5-plus/meta.json
field: officialUrl
proposed: https://opencode.ai/docs/zen/
source: https://opencode.ai/docs/zen/ (model listing; original blog URL not retrievable)
```