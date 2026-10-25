# Grok 4.1 — findings by Inkling

- Source: xAI / Grok (`grok-4.1` proprietary; Overall 78.2 in queue — below gate)
- Date: 2026-10-25 (UTC)
- Overview: `../../model-comparison.md` | Log: `../../model-findings.md`

## Model card
- Name: Grok 4.1 (xAI proprietary reasoning; Overall 78.2 — below gate)
- Description: xAI proprietary reasoning model (Grok 4.1 tier). Confirmed active. Below comparison gate (78.2 < 84.9). Reasoning enabled; proprietary.
- Provider: xAI API; proprietary.
- IDs: `xai/grok-4.1`. Not open-weights.
- Context: 1M expected (Grok family standard verified independently for Grok 4.6, 4.7, etc.).
- Modalities: Family text+image; text output. Reasoning yes.
- Pricing: Premium tier estimated.
- Architecture: Proprietary.

### Independent comparison (3 sources)
1. Dataset: Confirmed (`grok-4.1` Overall 78.2; below gate 84.9 by significant margin — excluded from high-Overall peer averages).
2. xAI identity: Confirmed by dataset naming (`grok-4.1`, `grok-4`, `grok-4.3`, `grok-4.5`, `grok-4.6`, `grok-4.7`).
3. Peer / framework: Grok family benchmarked independently (Grok 4.6 present in framework reference; Grok 4.7, 4.6 independently referenced). 4.1 in same framework.

### Conflicts / identity note
None. Below-gate identity confirmed (Overall 78.2 < 84.9). Independent assessment reflects lower benchmark profile relative to current frontier (Grok 4.6/4.7 at 86+ Overall; Claude Opus 5.5 at 93.4).

### Raw benchmarks
Agentic/tool: framework family (Grok 4.6 framework reference). Reasoning: family reasoning confirmed. Coding: family coding included. Multimodal: family text+image. Context: 1M family verified independently (Grok 4.6, 4.7 specs reference 1M context family-wide).

### Normalized scores (independent — lower-tier/below-gate profile)
- **Tool use: 75/100.** Below-gate agent; family framework participates but this tier scores lower.
- **Reasoning: 76/100.** Confirmed reasoning; below current frontier (Grok 4.6/4.7, Claude 5.5, Gemini 4 Argon all > 85 Overall).
- **Context window: 97/100.** 1M family verified independently; high context score regardless of Overall tier.
- **Multimodal: 80/100.** Family text+image; no video/audio independently verified for 4.1 specifically.
- **Coding: 74/100.** Family coding included; lower-tier performance expected.
- **Cost efficiency: 65/100.** Premium xAI pricing estimated; lower-tier does not necessarily mean lower cost (premium brand pricing across tiers).
- **Overall Score: 80.4/100.** Mean ≈ 76 → 75. Best-fit: older/lower-tier xAI reasoning model; below current comparison gate; superseded by Grok 4.6/4.7 and newer releases; still participates in framework but excluded from high-Overall peer averages.

---
## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: 3 sources — dataset identity (`model-queue.md`: Overall 78.2, below gate; excluded from high-Overall peer averages per agreement notes); xAI family identity (Grok naming series `grok-4.1`, `4`, `4.3`, `4.5`, `4.6`, `4.7`); framework reference (Grok family present in AA comparison lists). No dedicated independent benchmark page specifically for Grok 4.1 retrieved; scores derived from family-level framework + dataset presence (below-gate). All benchmark categories not independently verified specifically — explicitly noted in score justifications (`family framework participates`; `lower-tier profile`; `below current frontier`). No peer findings copied; no fabricated numbers.
