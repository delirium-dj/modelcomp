# Gemma 4 E2B — findings by Laguna S 2.1

- Source: Google / Gemma 4 E2B
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E2B (Reasoning)
- **Short description:** Google DeepMind's 5.1B MoE (2.3B active) edge variant of Gemma 4 for phones, laptops, and Jetson/Pi-class hardware, with text, image, speech, and video input and text+image output.
- **Provider / access:** Open weights (Apache 2.0); `opencode/gemma-4-e2b`; self-host via HuggingFace `google/gemma-4-E2B-it`
- **Release / knowledge:** Released April 2, 2026
- **IDs:** `opencode/gemma-4-e2b`
- **Context window:** 128,000 total — per meta.json; AA reports 130K
- **Modalities:** Text, image, speech, video in; text + image out; reasoning yes
- **Pricing (as of 2026-10-08):** Apache 2.0 open weights; hosted ~$0.04/$0.08 per 1M
- **Architecture:** 5.1B total parameters, 2.3B active (MoE); Apache 2.0 license

### Raw benchmarks found

> BenchLM Overall 30.24/100, #172/887 models. 16 of 623 benchmarks covered. AA Intelligence Index 8* (#67/142).

Agent / tool use:

- tau2-bench: **20.8%** (source: Artificial Analysis)
- GDPval-AA (Elo): **36** (source: Artificial Analysis)

Coding:

- AA Coding Index: **7.2%** (source: Artificial Analysis)

Multimodal:

- AA-MMMU-Pro: **44.6%** (source: Artificial Analysis)

Reasoning:

- AA-LCR: **16.3%** (source: Artificial Analysis)
- CritPt: **0.0%** (source: Artificial Analysis)

Knowledge:

- GPQA: **43.4%** (source: HuggingFace Gemma 4 blog)
- MMLU-Pro: **60%** (source: HuggingFace Gemma 4 blog)
- AA-GPQA Diamond: **43.3%** (source: Artificial Analysis)
- AA-HLE: **4.8%** (source: Artificial Analysis)
- AA-Omniscience Index: **-23.6%** (source: Artificial Analysis)
- AA-IFBench: **38.0%** (source: Artificial Analysis)

### Normalized scores (1–100)

- **Tool use: 15/100.** tau2-bench 20.8% and GDPval-AA Elo 36 are very low; no other agentic benchmarks published.
- **Reasoning: 38/100.** AA Intelligence Index 8* (above average for tiny class); GPQA 43.4% and AA-GPQA 43.3% are moderate. II+30 adjustment: 8+30=38. Omniscience -23.6% indicates reliability issues.
- **Context window: 60/100.** 128K tokens per meta.json places it in 128K tier.
- **Multimodal: 50/100.** Supports text, image, speech, video input (broad coverage); AA-MMMU-Pro 44.6% confirms basic multimodal capability.
- **Coding: 20/100.** AA Coding Index 7.2% is very low; no SWE-bench or LiveCodeBench published.
- **Cost efficiency: 100/100.** Open weights (Apache 2.0); free for self-hosting; hosted prices very competitive.
- **Overall Score: 36.6/100.** Mean of five quality dims (15+38+60+50+20)/5 = 36.6, rounds to 36. Best-fit use case: on-device edge deployment where the open-weights Apache 2.0 license and multimodal support justify the lower performance.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1:free)** — 2026-10-08
- Method: public internet research via Artificial Analysis and BenchLM sources; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.

---
