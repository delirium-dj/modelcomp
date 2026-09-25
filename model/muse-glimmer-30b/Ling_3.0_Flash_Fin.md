# Muse Glimmer 30B — findings by Ling 3.0 Flash

- Source: Meta Superintelligence Labs / Muse (`meta-models/muse-glimmer-30b`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Glimmer 30B
- **Short description:** Meta's open-weight dense 30B multimodal model distilled from Muse Spark, optimized for local agentic workflows on consumer hardware with vision input and ~20GB memory footprint.
- **Provider / access:** HuggingFace (`meta-models/Muse-Glimmer-30B`), Apache 2.0 license. Text and image in; text out.
- **Release / knowledge:** 2026-08-10. Knowledge cutoff January 4, 2026.
- **IDs:** `meta-models/Muse-Glimmer-30B` (HuggingFace)
- **Context window:** 131,072 tokens total
- **Modalities:** Text and image in; text out; reasoning enabled; tool calls; ~4-bit quantized to <20GB
- **Pricing (as of 2026-09-23):** $0 (open weights, self-hosted)
- **Architecture:** ~29.6B dense parameters, ViT-G/14 perception encoder, Apache 2.0 license

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:
- MCP Atlas: **75.5%** (Meta official, 13-pt margin over Qwen3.6-27B)
- DeepSearch QA: **74.6%** (Meta official)
- τ³-Banking: **23.5%** (Meta official)
- WildClawBench: **47.6%** (Meta official)
- OSWorld-Verified: **65.9%** (Meta official)
- SkillsBench (with skills): **44.3%** (Meta official)

Reasoning / knowledge:
- GPQA Diamond: **83.5%** (Meta official, AA)
- HLE Text: **22.0%** (Meta official, AA)
- AA-LCR: **80.0%** (Meta official, class-leading)
- AIME 2026: **94.7%** (Meta official, highest absolute in comparison)
- IFBench: **77.0%** (Meta official)
- Artificial Analysis Intelligence Index: **35** (rank 5th of 140 open-weight models)

Coding:
- SWE-Bench Pro: **51.2%** (Meta official)
- SWE-Bench Verified: **76.0%** (Meta official)
- Terminal-Bench 2.1: **51.7%** (Meta official)
- SciCode: **43.6%** (Meta official)
- AA Coding Index: **49.0** (Artificial Analysis)

Long context:
- AA-LCR: **80.0%** (Meta official, class-leading)
- Context window: 131,072 tokens total
- Beam128K: **65.1%** (Meta official)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`.
> **OVERALL SCORE FORMULA:** Overall = (Tool + Reasoning + Context + Multimodal + Coding) / 5 (half-up). Cost efficiency is scored independently.

- **Tool use: 75/100.** Excellent MCP Atlas (75.5%, 13-pt margin), DeepSearch QA (74.6%), τ³-Banking (23.5%), WildClawBench (47.6%). Agentic tool use is a standout strength.
- **Reasoning: 72/100.** Strong GPQA Diamond (83.5%), AIME 2026 (94.7%), IFBench (77.0%), AA-LCR (80.0%). AA Intelligence Index 35 is 5th among open-weight models.
- **Context window: 78/100.** 128K context with AA-LCR at 80.0% — class-leading for its size. Beam128K at 65.1% confirms long-context retrieval strength.
- **Multimodal: 75/100.** Text + image input via dedicated ViT perception encoder. CharXiv 78.8%, ScreenSpot Pro 75.4%, OmniDocBench 75.8%. Strong for a 30B model.
- **Coding: 68/100.** Solid coding: SWE-bench Verified 76%, Terminal-Bench 2.1 51.7%, SWE-bench Pro 51.2%, SciCode 43.6%. Coding Agent Index 49.0 on AA.
- **Cost efficiency: 100/100.** $0 (open weights, self-hosted). Free to download and run locally with 4-bit quantization under 20GB. 100/100 cost efficiency.
- **Overall Score: 74/100.** Mean of the five non-cost dimensions (75 + 72 + 78 + 75 + 68) / 5 = 73.6, rounded half-up to 74.

---

## Signature

- Provided by: **Ling 3.0 Flash Fin (inclusionai/ling-3-0-flash-fin-free)** — 2026-09-23
- Method: Public internet research via Meta AI research blog, HuggingFace, Artificial Analysis, Qubrid AI, and official model card; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
