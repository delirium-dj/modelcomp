# Gemini 3.5 Flash-Lite — findings by Ernie 5.5 Flash

- Source: Google DeepMind/Gemini 3.5 Flash-Lite (`gemini-3.5-flash-lite`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash-Lite
- **Short description:** Google's fastest Gemini (released 2026-07-21) balancing multimodal reasoning, tool use and cost, with a 1M context and the full Gemini input set.
- **Provider / access:** Google Gemini API / AI Studio (`gemini-3.5-flash-lite`), Vertex AI, SAP AI Core, LLM Gateway, Vercel, Merge Gateway, plus ~28 routes.
- **Release / knowledge:** 2026-07-21; knowledge cutoff 2026-03 (models.dev).
- **IDs:** `gemini-3.5-flash-lite`, `google/gemini-3.5-flash-lite`, `opencode/gemini-3.5-flash-lite`.
- **Context window:** 1,048,576 tokens (1M on Vercel); max output 65,536.
- **Modalities:** text, image, video, audio and PDF in; text out; thinking and tool calls.
- **Pricing (as of 2026-11-11):** $0.30 / $2.50 per 1M input/output; cache read $0.03.
- **Architecture:** proprietary sparse MoE (undisclosed).

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **74%**; Terminal-Bench 2.1: **54.0%** (Vals **50.2%**)
- MRCRv2: **72.2%**; ParseBench: **59.49%**
- Terminal-Bench 4.x / Toolathlon / MCP-Atlas: no verified public rows published

Reasoning / knowledge:

- GPQA Diamond (Vals AI): **83.8%**; MMLU-Pro (Vals AI): **85.8%**
- FrontierMath v2 Tiers 1–3: **25.965%**; Tier 4: **0.000%**
- HLE / ARC-AGI / CritPt: no verified public rows published

Coding:

- LiveCodeBench (Vals AI): **79.0%**; SWE-bench (Vals AI): **75.0%**
- SWE-bench Pro: **54.2%**
- DeepSWE / FrontierCode: no verified public rows published

Long context:

- MRCRv2: **72.2%** — mid-pack long-range retrieval; 1M window declared

### Normalized scores (1–100)

- **Tool use: 62/100.** OSWorld-Verified 74% is decent for a Lite model, TB2.1 54.0% mid, TB2.1 (Vals) 50.2% weak; no modern-harness row was published.
- **Reasoning: 65/100.** GPQA Diamond 83.8% and MMLU-Pro 85.8% are respectable, but FrontierMath 26.0%/0.0% is near-floor for a 2026 model.
- **Context window: 100/100.** 1,048,576 tokens with 65,536 max output.
- **Multimodal: 88/100.** Full input set (text, image, video, audio, PDF) with ParseBench 59.49% for documents; no public video/audio benchmark rows.
- **Coding: 72/100.** LiveCodeBench 79.0% and SWE-bench (Vals) 75.0% are mid, SWE-bench Pro 54.2% weak.
- **Cost efficiency: 92/100.** $0.30/$2.50 per 1M with $0.03 cache reads.
- **Overall Score: 77.4/100.** Best fit for high-volume multimodal classification and document work at 1M context; not a reasoning or coding model.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Google DeepMind model card, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Gemini 3.5 Flash-Lite — Google DeepMind model card](https://deepmind.google/models/model-cards/gemini-3.5-flash-lite/)
  - [Gemini 3.5 Flash-Lite benchmarks & sources — BenchLM](https://benchlm.ai/models/gemini-3-5-flash-lite)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Gemini_3.5_Flash_Lite_v2.md`, using the same headings.