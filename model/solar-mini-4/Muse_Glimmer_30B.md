# Solar Mini 4 — findings by Muse Glimmer 30B

- Source: Upstage / solar-mini4
- Date: 2026-10-27
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Solar Mini 4
- **Short description:** Upstage's cost-efficient compact MoE language model built for agentic use with fluent Korean/English/Japanese support, 35B total / 3B active parameters and 512K context.
- **Provider / access:** Upstage Console `upstage/solar-mini4`; OpenRouter `upstage/solar-mini4`; Playground / On-premises. Chat Completions API.
- **Release / knowledge:** Released 2026-09-22; training data cut-off Feb 2026.
- **IDs:** `upstage/solar-mini4`
- **Context window:** 524,288 total tokens, max output 131,072. Verified via Upstage console docs and models.dev; Artificial Analysis reports 512K.
- **Modalities:** Text in/out only. Reasoning supported, tool calling supported, structured outputs supported. No image/audio/video input.
- **Pricing (as of 2026-10-27):** List $0.10/1M input, $0.40/1M output, $0.01/1M cached. Promo $0.05/1M in / $0.20/1M out through 2026-10-23 per Upstage pricing. Proprietary, no free tier.
- **Architecture:** 35B total parameters MoE with 3B active parameters. Proprietary weights, no open weights.

### Raw benchmarks found

> List measured numbers with source for traceability.

Agent / tool use:

- Terminal-Bench 4.0: 1.0% (Artificial Analysis, 2026-09-30)
- AutomationBench-AA 1.0.6: 22.3% (Artificial Analysis via Model Menu, 2026-10-26)
- GDPval-AA v2.1 Elo: 1085 (Benchmark Atlas, 2026-10-26)
- GDP.pdf all-pass: 5.0% (Artificial Analysis)

Reasoning / knowledge:

- Humanity's Last Exam Text-Only: 25.8% (Artificial Analysis)
- AA-LCR v1.1: 83.3% (Artificial Analysis)
- CritPt (avg@5): 1.4% (Artificial Analysis)
- Artificial Analysis Intelligence Index v4.3.2: 24.1 (Artificial Analysis, 2026-09-30; vendor reports 24)
- AA-Omniscience Accuracy: 18.4% / Non-Hallucination Rate: 64.2% (Artificial Analysis)
- AA-Omniscience Index: -10.8 (Benchmark Atlas)

Coding:

- SciCode 1.0.1 (Artificial Analysis): 47.6%
- Terminal-Bench 4.0: 1.0% (see above)
- SWE-bench Verified: no verified public score found
- LiveCodeBench: no verified public score found

Long context:

- AA-LCR v1.1 83.3% at 512K context (Artificial Analysis)

### Normalized scores (1–100)

- **Tool use: 35/100.** Terminal-Bench 1.0% and AutomationBench-AA 22.3% indicate very limited autonomous tool execution; GDPval Elo 1085 is low-mid. Caps at poor agentic coding.
- **Reasoning: 60/100.** Intelligence Index 24.1 sits in the mid 20-35 band, HLE 25.8% modest, LCR 83.3% strong long-context reasoning offsets CritPt 1.4%. Caps at modest index with weak physics reasoning.
- **Context window: 90/100.** 524K total / 131K output verified, tier 500K-1M per methodology. No measured retrieval degradation reported. Caps below 1M tier.
- **Multimodal: 15/100.** Text-only input/output; no image/audio/video support.
- **Coding: 50/100.** SciCode 47.6% is moderate; Terminal-Bench 1.0% is poor and no public SWE-bench/LiveCodeBench exists. Caps at mixed scientific coding with no agent coding.
- **Cost efficiency: 95/100.** List $0.10/$0.40 per 1M with promo $0.05/$0.20; strong price for 3B active MoE. Slightly below $0.10/$0.20 ideal.
- **Overall Score: 50/100.** Mean of Tool 35, Reasoning 60, Context 90, Multimodal 15, Coding 50. Best-fit: long-context reasoning on a budget, not an agentic coder.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-27
- Method: public internet research; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
