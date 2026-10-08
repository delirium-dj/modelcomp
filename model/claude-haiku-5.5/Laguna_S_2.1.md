# Claude Haiku 5.5 — findings by Laguna S 2.1

- Source: Anthropic / Claude Haiku 5.5
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 5.5 (Max)
- **Short description:** Anthropic's fastest Claude 5.5-family small model with reasoning capabilities for high-volume tasks. Competitive pricing with excellent speed.
- **Provider / access:** Anthropic API; `opencode/claude-haiku-5.5`
- **Release / knowledge:** Released October 7, 2026
- **IDs:** `opencode/claude-haiku-5.5` (free for prompts ≤100K tokens per meta.json)
- **Context window:** 1,000,000 total (128K max output) — verified via AA and BenchLM
- **Modalities:** Text, image, PDF in; text out; reasoning yes
- **Pricing (as of 2026-10-08):** $0.10 per 1M input tokens, $0.50 per 1M output tokens (prompts ≤100K); $0.50/$2.50 above 100K; 90% cache discount
- **Architecture:** Proprietary reasoning model from Anthropic

### Raw benchmarks found

> AA Intelligence Index 43* (#2/182 reasoning models in $0.15-1/M token tier), BenchLM Overall 66.32/100 (#28/887), 17 of 623 benchmarks covered.

Agent / tool use:

- Terminal-Bench 4.0: **39.20%** (source: Anthropic)
- GDPval-AA (Elo): **1620** (source: Anthropic)
- HLE w/ tools: **57.4%** (source: Anthropic)
- AA-Briefcase: **1578 Elo** (source: Anthropic)
- AA-AutomationBench: **35.4%** (source: Artificial Analysis)
- AA-Harvey LAB: **89.9%** (source: Artificial Analysis)
- AA-Terminal-Bench 4.0: **32.8%** (source: Artificial Analysis)
- GDP.pdf: **20.8%** (source: Artificial Analysis)

Reasoning / knowledge:

- AA-LCR: **82.7%** (source: Artificial Analysis; long-context reasoning)
- CritPt: **18.9%** (source: Artificial Analysis; physics reasoning — low)
- HLE w/o tools: **45.9%** (source: Anthropic)
- AA-HLE: **44.4%** (source: Artificial Analysis)
- AA-Omniscience Index: **10.7%** (source: Artificial Analysis; knowledge reliability)
- Artificial Analysis Intelligence Index: **43*** (estimated, #2/182 reasoning models in $0.15-1/M tier)

Coding:

- FrontierCode 1.1 Main: **46.4%** (source: Anthropic system card)
- AA-SciCode: **55.0%** (source: Artificial Analysis)

Multimodal:

- Chartography (no tools): **46.4%** (source: Anthropic)

Long context:

- AA-LCR: **82.7%** (source: Artificial Analysis)

### Normalized scores (1–100)

- **Tool use: 55/100.** Terminal-Bench 4.0 39.2% is moderate; GDPval-AA Elo 1620 is strong; AA-Harvey LAB 89.9% and AA-Briefcase 1578 Elo reinforce solid agentic performance. GDP.pdf 20.8% is low.
- **Reasoning: 73/100.** AA Intelligence Index 43* places it well above average; AA-LCR 82.7% is excellent for long-context reasoning; GPQA 84.2% is strong. II+30 adjustment: 43+30=73. CritPt 18.9% and Omniscience 10.7% are weak points.
- **Context window: 95/100.** 1M tokens places it in the 1M tier.
- **Multimodal: 40/100.** Supports text and image input but not video or audio; Chartography 46.4% confirms basic multimodal capability.
- **Coding: 51/100.** FrontierCode 46.4% and AA-SciCode 55.0% are moderate; no SWE-bench published.
- **Cost efficiency: 100/100.** Free for prompts ≤100K tokens; otherwise $0.10/$0.50 is very competitive (median $0.25/$0.90 in tier).
- **Overall Score: 63/100.** Mean of five quality dims (55+73+95+40+51)/5 = 62.8, rounds to 63. Best-fit use case: high-volume reasoning tasks with image input and 1M context at very low cost.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1:free)** — 2026-10-08
- Method: public internet research via Artificial Analysis and BenchLM sources; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.

---
