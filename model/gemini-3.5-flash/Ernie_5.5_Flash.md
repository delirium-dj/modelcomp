# Gemini 3.5 Flash — findings by Ernie 5.5 Flash

- Source: Google DeepMind/Gemini 3.5 Flash (`gemini-3.5-flash`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Google's fast Gemini (released 2026-05-19) balancing multimodal reasoning, tool use and cost, with a 1M context.
- **Provider / access:** Google Gemini API / AI Studio (`gemini-3.5-flash`), Vertex AI, plus ~36 gateway routes.
- **Release / knowledge:** 2026-05-19; knowledge cutoff 2025-01 (models.dev).
- **IDs:** `gemini-3.5-flash`, `google/gemini-3.5-flash`, `opencode/gemini-3.5-flash`.
- **Context window:** 1,048,576 tokens; max output 65,536.
- **Modalities:** text, image, video, audio and PDF in; text out; thinking and tool calls.
- **Pricing (as of 2026-11-11/12):** $1.50 / $9.00 per 1M input/output; cache read $0.15.
- **Architecture:** proprietary sparse MoE (undisclosed).

### Raw benchmarks found

Agent / tool use:

- MCP Atlas: **83.6%**; OSWorld-Verified: **78.4%**; Terminal-Bench 2.1: **76.2%** (Vals **74.2%**)
- CursorBench 3.2: **48.8%**; Vibe Code Bench v1.1: **48.68%**
- Terminal-Bench 4.x: no verified public row published

Reasoning / knowledge:

- GPQA Diamond / HLE / ARC-AGI / FrontierMath: no verified public rows published for 3.5 Flash
- BenchLM ranks Multimodal & Grounded as its strongest category (#16)

Coding:

- LiveCodeBench (Vals AI): **87.6%**; SWE-bench (Vals AI): **78.8%**
- SWE-bench Pro: **55.1%**; DeepSWE: not published for this model
- CursorBench 3.2: **48.8%**

Long context:

- 1M context; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 80/100.** MCP Atlas 83.6% and OSWorld-Verified 78.4% are strong, TB2.1 76.2% good; no Terminal-Bench 4.x row was published.
- **Reasoning: 78/100.** No public reasoning benchmark was published; the score is derived from its agentic and coding rows — low confidence.
- **Context window: 100/100.** 1,048,576 tokens with 65,536 max output.
- **Multimodal: 88/100.** Full input set (text, image, video, audio, PDF) with BenchLM's strongest category being Multimodal & Grounded (#16).
- **Coding: 75/100.** LiveCodeBench 87.6% and SWE-bench (Vals) 78.8% are decent, SWE-bench Pro 55.1% and CursorBench 48.8% mid.
- **Cost efficiency: 88/100.** $1.50/$9.00 per 1M.
- **Overall Score: 84.2/100.** Best fit for multimodal agent work at a mid price; Gemini 3.6 Flash is cheaper and better on the same axes.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12
- Method: public internet research (Google DeepMind model card, BenchLM profile, models.dev); normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Gemini 3.5 Flash — Google DeepMind model card](https://deepmind.google/models/model-cards/gemini-3.5-flash/)
  - [Gemini 3.5 Flash benchmarks — BenchLM](https://benchlm.ai/models/gemini-3-5-flash)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add `Gemini_3.5_Flash_v2.md` next to this file.