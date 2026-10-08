# Gemma 4 E4B — findings by Laguna S 2.1

- Source: Google / Gemma 4 E4B
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E4B (Reasoning)
- **Short description:** Google DeepMind's April 2026 edge-optimized 8B MoE (4.5B active) model for mobile and edge latency, with text, image, speech, and video input support.
- **Provider / access:** Open weights (Apache 2.0); `opencode/gemma-4-e4b`; self-host via HuggingFace `google/gemma-4-E4B-it`
- **Release / knowledge:** Released April 3, 2026
- **IDs:** `opencode/gemma-4-e4b`
- **Context window:** 128,000 total — per meta.json; AA reports 128K
- **Modalities:** Text, image, speech, video in; text out; reasoning yes; tool calls yes
- **Pricing (as of 2026-10-08):** Apache 2.0 open weights; hosted ~$0.02/$0.10 per 1M
- **Architecture:** 8B total parameters, 4.5B active (MoE); Apache 2.0 license

### Raw benchmarks found

> BenchLM Overall 31.36/100, #165/887 models. 17 of 623 benchmarks covered. AA Intelligence Index 9* (#51/142).

Agent / tool use:

- tau2-bench: **20.8%** (source: Artificial Analysis)
- GDPval-AA (Elo): **177** (source: Artificial Analysis)

Coding:

- AA Coding Index: **9.4%** (source: Artificial Analysis)
- AA-SciCode: **24.4%** (source: Artificial Analysis)

Multimodal:

- AA-MMMU-Pro: **51.4%** (source: Artificial Analysis)

Reasoning:

- AA-LCR: **32.0%** (source: Artificial Analysis)
- CritPt: **0.6%** (source: Artificial Analysis)

Knowledge:

- GPQA: **58.6%** (source: HuggingFace Gemma 4 blog)
- MMLU-Pro: **69.4%** (source: HuggingFace Gemma 4 blog)
- AA-GPQA Diamond: **57.6%** (source: Artificial Analysis)
- AA-HLE: **3.8%** (source: Artificial Analysis)
- AA-Omniscience Index: **-19.7%** (source: Artificial Analysis)
- AA-IFBench: **44.2%** (source: Artificial Analysis)

### Normalized scores (1–100)

- **Tool use: 15/100.** tau2-bench 20.8% and GDPval-AA Elo 177 are low; no other agentic benchmarks published.
- **Reasoning: 39/100.** AA Intelligence Index 9* (above average for small class); AA-GPQA 57.6% and MMLU-Pro 69.4% are moderate. II+30 adjustment: 9+30=39. Omniscience -19.7% indicates reliability issues.
- **Context window: 60/100.** 128K tokens per meta.json places it in 128K tier.
- **Multimodal: 55/100.** Supports text, image, speech, video input; AA-MMMU-Pro 51.4% confirms multimodal capability.
- **Coding: 22/100.** AA Coding Index 9.4% and AA-SciCode 24.4% are low; no SWE-bench published.
- **Cost efficiency: 100/100.** Apache 2.0 open weights; free for self-hosting; hosted prices very competitive ($0.02/$0.10).
- **Overall Score: 39/100.** Mean of five quality dims (15+39+60+55+22)/5 = 38.2, rounds to 39. Best-fit use case: edge/mobile deployment with multimodal input where open-weights licensing justifies lower performance.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1:free)** — 2026-10-08
- Method: public internet research via Artificial Analysis and BenchLM sources; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.

---
