# Gemini 3.6 Flash — findings by Ernie 5.5 Flash

- Source: Google DeepMind/Gemini 3.6 Flash (`gemini-3.6-flash`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Google's fast Gemini (released 2026-07-21) balancing multimodal reasoning, tool use and cost, with a 1M context — the value Flash tier of the Gemini 3 line.
- **Provider / access:** Google Gemini API / AI Studio (`gemini-3.6-flash`), Vertex AI, plus ~31 gateway routes.
- **Release / knowledge:** 2026-07-21; knowledge cutoff 2026-03 (models.dev).
- **IDs:** `gemini-3.6-flash`, `google/gemini-3.6-flash`, `opencode/gemini-3.6-flash`.
- **Context window:** 1,048,576 tokens; max output 65,536.
- **Modalities:** text, image, video, audio and PDF in; text out; thinking and tool calls.
- **Pricing (as of 2026-11-11/12):** $0.75 / $3.75 per 1M input/output; cache read $0.075.
- **Architecture:** proprietary sparse MoE (undisclosed).

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **83%** (best verified row); Terminal-Bench 2.1 (Vals AI): **73.8%**
- CursorBench 3.2: **53.5%**; MazeBench: **0%**
- Terminal-Bench 4.x / Toolathlon / MCP-Atlas: no verified public rows published

Reasoning / knowledge:

- ARC-AGI-1 (semi-private): **91.17%**; ARC-AGI-2: **60.4%**
- GPQA Diamond / HLE / FrontierMath: no verified public rows published for 3.6 Flash
- ParseBench: **69.12%**

Coding:

- LiveCodeBench (Vals AI): **88.1%**; SWE-bench (Vals AI): **79.6%**
- DeepSWE: **49.0%**; CursorBench 3.2: **53.5%**
- SWE-bench Pro: no verified public row published

Long context:

- 1M context; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 78/100.** OSWorld-Verified 83% is strong and TB2.1 (Vals) 73.8% mid; no Terminal-Bench 4.x row was published.
- **Reasoning: 72/100.** ARC-AGI-1 91.17% is strong but ARC-AGI-2 60.4% mid; no HLE/GPQA/FrontierMath row was published.
- **Context window: 100/100.** 1,048,576 tokens with 65,536 max output.
- **Multimodal: 88/100.** Full input set (text, image, video, audio, PDF); BenchLM ranks Multimodal & Grounded as its strongest category (#21).
- **Coding: 78/100.** LiveCodeBench 87.6→88.1% (Vals) and SWE-bench (Vals) 79.6% are decent, DeepSWE 49.0% mid.
- **Cost efficiency: 92/100.** $0.75/$3.75 per 1M with $0.075 cache reads.
- **Overall Score: 83.2/100.** Best fit for high-volume multimodal and agent work at Flash pricing; the best value Gemini Flash in this dataset.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12
- Method: public internet research (Google DeepMind model card, BenchLM profile, models.dev); normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Gemini 3.6 Flash — Google DeepMind model card](https://deepmind.google/models/model-cards/gemini-3.6-flash/)
  - [Gemini 3.6 Flash benchmarks — BenchLM](https://benchlm.ai/models/gemini-3-6-flash)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add `Gemini_3.6_Flash_v2.md` next to this file.