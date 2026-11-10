# Beam 1.0 — findings by Iceman

- Source: Reflection AI/Beam-1.0-501B-A23B
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Beam 1.0 (501B-A23B)
- **Short description:** Reflection AI’s Beam 1.0 is an open-weight 501B/23B-active sparse MoE reasoning/coding/agent model (Apache 2.0) with 1M context, optimized for token-efficient reasoning, software engineering, and agentic tool use.
- **Provider / access:** Open weights on Hugging Face (`reflection/Beam-1.0-501B-A23B`, Apache 2.0 license), free on OpenCode Zen as `beam-free` and Reflection API beta, plus hosted providers. Local metadata lists aliases including Cat Jam/Fledge-era stealth naming context.
- **Release / knowledge:** Hugging Face model card reviewed 2026-11-10. Knowledge cutoff stated as June 30, 2026 in card.
- **IDs:** `Beam-1.0-501B-A23B`, `reflection/Beam-1.0-501B-A23B`, `beam-free`, `Beam 1.0`.
- **Context window:** 1,048,576 tokens total; 131,072 max output (local metadata/card).
- **Modalities:** Text input/output (text-only).
- **Pricing (as of 2026-11-10):** Free on Zen/Reflection API beta (limits apply); hosted ~$0.25-$1.30 / $1.00-$4.30 per 1M in/out; self-host $0 (Apache 2.0) per local metadata.
- **Architecture:** Sparse MoE transformer, 501.3B total / 23.4B active parameters, 52 layers (3 dense + 49 MoE), gated GQA + sliding window attention, 1M context, modified Harmony chat format (HF card).

### Raw benchmarks found

> Verified figures below are from the Hugging Face model card for `reflection/Beam-1.0-501B-A23B` (BF16 column primary) unless noted.

Agent / tool use:

- Terminal Bench v2.1: **80.1%** (BF16) / 78.9% (FP8) / 78.4% (NVFP4)
- SWE Atlas Codebase QnA: **31.8%**
- AutomationBench (public split only): **39.3%**
- MCP Atlas: **80.8%**
- Tau3 Banking: **36.1%**
- BrowseComp w/ context management: **76.8%**
- DeepSearchQA w/ context management: **80.5%**

Reasoning / knowledge:

- AIME 2026: **97.7%**
- HLE (no tools): **36.0%**
- HLE (with tools): **51.1%**
- SciCode: **49.2%**
- CriPT AA: **16.3%**
- GPQA Diamond: **90.6%**
- LiveCodeBench: **88.3%**
- AA-LCR: **78.2%**
- LongBench v2: **67.5%**
- IFBench: **79.6%**
- AA Omniscience (index, public split only): **10.8**

Coding:

- DeepSWE v1.1: **43.3%**
- SWE Bench Pro v2-Hard: **76.5%**
- SWE Bench Pro v1: **66.1%**
- Terminal Bench v2.1: **80.1%**
- SWEBench Multilingual: **78.3%**
- SWEBench Verified: **81.6%**
- LiveCodeBench: **88.3%**

Long context:

- AA-LCR: **78.2%**
- LongBench v2: **67.5%**
- 1M-token context supported.

Multimodal:

- Text-only model.

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded).

- **Tool use: 89/100.** Strong agentic/tool/search performance (Terminal Bench v2.1 80.1%, MCP Atlas 80.8%, BrowseComp 76.8%, DeepSearchQA 80.5%, AutomationBench 39.3%, Tau3 Banking 36.1%).
- **Reasoning: 90/100.** Excellent reasoning profile (AIME 2026 97.7%, GPQA Diamond 90.6%, HLE 36.0/51.1% without/with tools, SciCode 49.2%, AA-LCR 78.2%, LongBench v2 67.5%, IFBench 79.6%).
- **Context window: 95/100.** 1M-token context with strong long-context results (AA-LCR 78.2%, LongBench v2 67.5%).
- **Multimodal: 40/100.** Text-only model; no multimodal input capability.
- **Coding: 91/100.** Very strong coding and software engineering results (SWE-bench Verified 81.6%, SWE Bench Pro v1 66.1% / v2-Hard 76.5%, Terminal Bench v2.1 80.1%, SWEBench Multilingual 78.3%, LiveCodeBench 88.3%, DeepSWE 43.3%).
- **Cost efficiency: 92/100.** Apache 2.0 open weights, free Zen/Reflection API beta routes, and competitive hosted pricing with 23B active parameters provide strong value.
- **Overall Score: 81/100.** Mean of the five non-cost dims (89, 90, 95, 40, 91) = 81.0 → 81. Best fit for long-context, text-only coding, reasoning, and agentic tool-use workflows with strong open-weight availability.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Hugging Face model card; scores are normalized 1–100 interpretations from verified benchmark figures, not official vendor scores.
- Reference URLs:
  - [Beam-1.0-501B-A23B model card (Hugging Face)](https://huggingface.co/reflection/Beam-1.0-501B-A23B)
  - Local repository metadata consulted: `model/beam/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
