# Qwen3 Max — findings by Laguna S 2.1

- Source: Alibaba / Qwen3 Max
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3 Max
- **Short description:** Alibaba's proprietary Qwen3-generation flagship for coding agents, complex reasoning and tool use, with thinking mode. Flagship-tier model with 262K context window.
- **Provider / access:** Alibaba API (`opencode/qwen3-max`); 2 API providers available per AA
- **Release / knowledge:** Released September 23, 2025
- **IDs:** `opencode/qwen3-max` (no Free ID on Zen per meta.json); tiered pricing above 32K/128K
- **Context window:** 262,144 total (65,536 output) — verified via AA and BenchLM
- **Modalities:** Text in/out only; thinking/reasoning mode available
- **Pricing (as of 2026-10-08):** $1.20 per 1M input tokens, $6.00 per 1M output tokens (Alibaba); better than average vs. peers in >$1/M token tier
- **Architecture:** Proprietary; parameter count not disclosed by Alibaba

### Raw benchmarks found

> BenchLM Overall 40.16/100, #134/887 models. AA Intelligence Index 16* (estimated), #29/61 non-reasoning models in $1-2/M token tier. 13 of 623 benchmarks covered.

Agent / tool use:

- tau2-bench: **74.3%** (source: Artificial Analysis)
- Gert Labs: **43.74%** (source: Gert Labs rankings)

Reasoning / knowledge:

- AA-LCR: **50.0%** (source: Artificial Analysis; long-context reasoning)
- CritPt: **0.0%** (source: Artificial Analysis; physics reasoning — extremely low)
- HLE w/o tools: **11.9%** (source: Artificial Analysis)
- AA-Omniscience Index: **-43.5%** (source: Artificial Analysis; severe hallucination issues)
- AA-Omniscience Accuracy: **24.4%** (source: Artificial Analysis)
- AA-Omniscience Hallucination Rate: **89.9%** (source: Artificial Analysis)
- AA-IFBench: **44.1%** (source: Artificial Analysis)
- AA-GPQA Diamond: **76.4%** (source: Artificial Analysis)

Coding:

- Vibe Code Bench: **3.51%** (source: Vals AI)

Long context:

- AA-LCR: **50.0%** (source: Artificial Analysis)

### Normalized scores (1–100)

- **Tool use: 55/100.** tau2-bench 74.3% is strong; Gert Labs 43.74% is mid-tier. Limited agentic benchmark coverage.
- **Reasoning: 46/100.** AA Intelligence Index 16* (above average in price tier); AA-GPQA 76.4% is excellent; but AA-HLE 11.9%, CritPt 0.0%, and AA-Omniscience -43.5% show severe knowledge reliability issues. II+30 adjustment: 16+30=46.
- **Context window: 95/100.** 262K tokens places it in 262K tier.
- **Multimodal: 15/100.** Text-only model per meta.json; 15 per methodology.
- **Coding: 20/100.** Vibe Code Bench 3.51% is extremely poor; no other coding benchmarks published beyond.
- **Cost efficiency: 33/100.** $1.20/$6.00 is better than average vs. peers (median $1.75/$9.00) but still expensive.
- **Overall Score: 46/100.** Mean of five quality dims (55+46+95+15+20)/5 = 46.2, rounds to 46. Best-fit use case: complex reasoning and agentic tasks where the 262K context and GPQA 76.4% justify the cost; avoid for coding workloads.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1:free)** — 2026-10-08
- Method: public internet research via Artificial Analysis and BenchLM sources; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.

---
