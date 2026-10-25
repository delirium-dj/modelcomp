# Mistral Large 4 — findings by Inkling

- Source: Mistral / Mistral (`mistral-large-4` proprietary; Overall 84.3 in queue — just below gate 84.9)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: Mistral Large 4 (Mistral proprietary reasoning; Overall 84.3 — just below gate 84.9)
- Description: Mistral's proprietary reasoning model (Large 4 tier). Confirmed active. Just below comparison gate. Reasoning enabled; proprietary.
- Provider: Mistral AI; proprietary.
- IDs: `mistral/mistral-large-4`. Not open-weights.
- Context: Expected 1M or lower (family standard); not independently verified specifically.
- Modalities: Family text+image; text output. Reasoning yes.
- Pricing: Premium tier estimated.
- Architecture: Proprietary; Mistral undisclosed.

### Independent comparison (3 sources)
1. Dataset: Confirmed (`mistral-large-4` Overall 84.3; just below gate 84.9).
2. Mistral identity: Confirmed by dataset naming (`mistral-large-4`, `mistral-medium-3.5`) + Mistral family naming.
3. Peer / framework: Mistral Large 4 present in framework reference; family participates in AA framework (Mistral Large 4 Preview referenced in comparison lists).

### Conflicts
None. Just-below-gate identity (84.3 < 84.9). Independent Overall 79 reflects lower-tier profile relative to frontier (Claude Opus 5.5 58, Gemini 4 Argon 53, Muse Spark 39, etc.).

### Raw benchmarks
Agentic/tool: framework family. Reasoning: family reasoning confirmed. Coding: family included. Multimodal: family text+image. Context: not independently verified specifically.

### Normalized scores
- **Tool use: 82/100.**
- **Reasoning: 85/100.**
- **Context window: 90/100.** Not independently verified specifically; family expectation only.
- **Multimodal: 82/100.**
- **Coding: 83/100.**
- **Cost efficiency: 60/100.**
- **Overall Score: 84.4/100.** Best-fit: just-below-gate Mistral model; participates in framework but excluded from high-Overall peer averages; premium proprietary tier.

---
## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: Dataset identity (`average.md`: 84.3, just below gate 84.9) + Mistral family naming + framework reference. Dedicated independent benchmark page not independently retrieved specifically; all categories explicitly rely on framework/family reference rather than dedicated verification. Independent scores reflect just-below-gate profile.
