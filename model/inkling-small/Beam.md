# Inkling Small — findings by Beam

- Source: Thinking Machines/Inkling Small, `thinkingmachines/inkling-small`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling Small
- **Short description:** Thinking Machines' efficient open-weight model (Jul 30, 2026): 276B total / 12B active MoE, 1M context, native multimodal (text/image/audio), Apache 2.0. Matches Inkling at ~1/4 size.
- **Provider / access:** Thinking Machines (Tinker); HuggingFace (open weights); NVIDIA NIM; AIMLAPI.
- **Release / knowledge:** Released 2026-07-30; knowledge cutoff not stated.
- **IDs:** `thinkingmachines/inkling-small`
- **Context window:** 1,000,000 tokens; max output 262,144 (AIMLAPI) / 131,072 (OpenRouter).
- **Modalities:** text, image, audio in; text out; reasoning yes (variable effort); tool calling yes. Open weights (Apache 2.0).
- **Pricing (as of 2026-10-17):** $3.00 / 1M input, $0.30 / 1M cached, $15.00 / 1M output (Fireworks); $0.80/$1.98 (AIMLAPI). Paid.
- **Architecture:** 276B total / 12B active, MoE (6 of 256 experts + 2 shared), 42-layer decoder, Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- AA Intelligence Index: **40.0%**
- HLE with tools: **47.8%**
- Terminal-Bench 2.1: **64.7%** (vs Inkling 63.8%)
- IFBench: not individually reported
- Tau2 Airline: Ember-1 wins vs Inkling Small (single shared benchmark)

Reasoning / knowledge:

- HLE text only: **31.6%**
- GPQA Diamond: **88.3%**
- AIME 2026: **95.5%**
- HMMT Feb 2026: **90.2%**
- CritPt: **8.3%**
- ARC-AGI-1: **84.0%**
- AA Intelligence Index: **40.0%**

Coding:

- SWE-bench Verified: **80.2%** (vs Inkling 77.6%)
- SWE-bench Pro Public: **53.2%** (vs Inkling 54.3%)
- Terminal-Bench 2.1: **64.7%**
- LLM Stats Coding: **29.0** (#60)
- SciCode: not reported for Small (Inkling 29.7%)

Long context:

- 1M window; MRCR: not reported.

Multimodal:

- MMMU-Pro (Standard 10): **73.3%**
- Global-MMLU-Lite: not reported for Small
- Native multimodal (text/image/audio).

### Normalized scores (1–100)

- **Tool use: 76/100.** Terminal-Bench 2.1 64.7%, HLE with tools 47.8%, AA Intelligence 40.0%; caps at no published MCP Atlas/OSWorld.
- **Reasoning: 78/100.** GPQA 88.3%, AIME 95.5%, HMMT 90.2%, HLE 31.6%, ARC-AGI-1 84.0%; caps at CritPt 8.3%.
- **Context window: 86/100.** 1M window; caps at no published MRCR.
- **Multimodal: 82/100.** Text/image/audio in; MMMU-Pro 73.3%.
- **Coding: 78/100.** SWE-bench Verified 80.2%, SWE-bench Pro 53.2%, Terminal-Bench 2.1 64.7%, LLM Stats Coding 29.0; caps at SciCode not reported.
- **Cost efficiency: 82/100.** $0.80-$3.00 / 1M input.
- **Overall Score: 80/100.** Mean of five quality dims (AA Intelligence 40.0%); best-fit for efficient open-weight multimodal reasoning.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Thinking Machines blog/model card, VentureBeat, AIMLAPI, NVIDIA forums, Epoch AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.