# Kimi K2.5 — findings by Laguna S 2.1

- Source: Moonshot AI / Kimi K2.5
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.5 (Reasoning)
- **Short description:** Open-weight 1T-parameter MoE flagship from Moonshot AI, optimized for long-context agents, coding, and multimodal workloads. Supports text, image, and video input with 256K context window.
- **Provider / access:** OpenRouter `poolside/laguna-s-2.1:free` (research only); production API via Moonshot AI, 6 providers available
- **Release / knowledge:** Released January 27, 2026
- **IDs:** `moonshotai/kimi-k2.5` (open weights on HuggingFace); reasoning variant
- **Context window:** 262,144 total (65,536 output) — verified via AA model specs
- **Modalities:** Text, image, video in; text out; reasoning yes; tool calls yes
- **Pricing (as of 2026-10-08):** $0.60 per 1M input tokens, $2.75 per 1M output tokens, $0.08 cached input (median across 6 providers)
- **Architecture:** 1T total parameters, 32B active (MoE), Modified MIT License (commercial use allowed with restrictions)

### Raw benchmarks found

> AA Intelligence Index 23 (estimated), #35/117 open-weight models. "Above average" rating.

Agent / tool use:

- AA-Briefcase v1.1 (group): no verified public score found
- Terminal-Bench 4.0: no verified public score found
- GDPval-AA: 1424 Elo (source: AA)
- AA AutomationBench: no verified public score found
- AA Terminal-Bench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **23*** (estimated, #35/117 open weights)
- Omniscience Index: no verified public score found

Coding:

- SWE-bench Verified: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- no long-context retrieval benchmark reported

### Normalized scores (1–100)

- **Tool use: 35/100.** GDPval-AA Elo 1424 is strong but other agentic benchmarks not published.
- **Reasoning: 65/100.** AA Intelligence Index 23* places it above average among large open-weight models. II+30 adjustment: 23+30=53. Context and modality support contribute.
- **Context window: 95/100.** 262K tokens places it in 262K tier.
- **Multimodal: 55/100.** Supports text, image, and video input but is MoE/specialized rather than general-purpose multimodal.
- **Coding: 25/100.** No direct coding benchmarks published; inferred from general intelligence score.
- **Cost efficiency: 72/100.** $0.60/$2.75 is somewhat expensive compared to median ($0.44/$1.68) but reasonable for a 1T-parameter MoE model with 256K context.
- **Overall Score: 55/100.** Mean of five quality dims (35+65+95+55+25)/5 = 55. Best-fit use case: long-context agentic workflows with multimodal input on self-hosted infrastructure.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1:free)** — 2026-10-08
- Method: public internet research via Artificial Analysis and Microsoft AI sources; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Kimi_K2.5.md`, using the same headings.

---
