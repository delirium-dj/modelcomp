# Gemini 2.5 Flash — findings by Ernie 5.5 Flash

- Source: Google DeepMind/Gemini 2.5 Flash (`gemini-2.5-flash`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash
- **Short description:** Google's fast Gemini model (released 2025-06-17) balancing multimodal reasoning, tool use and cost — the long-serving 2.5 Flash tier, now four Flash generations old.
- **Provider / access:** Google Gemini API / AI Studio (`gemini-2.5-flash`), Vertex AI, plus ~30 gateway routes (FastRouter, SAP AI Core, Kenari, Qiniu, LLM Gateway).
- **Release / knowledge:** 2025-06-17; knowledge cutoff 2025-01 (models.dev).
- **IDs:** `gemini-2.5-flash`, `google/gemini-2.5-flash`, `opencode/gemini-2.5-flash`.
- **Context window:** 1,048,576 tokens (1M); max output 65,536.
- **Modalities:** text, image, audio, video and PDF in; text out; thinking and tool calls.
- **Pricing (as of 2026-11-11):** $0.30 / $2.50 per 1M input/output; cache read $0.03.
- **Architecture:** proprietary sparse MoE (undisclosed).

### Raw benchmarks found

> BenchLM holds only 2 displayable rows for this checkpoint — both weak.

Agent / tool use:

- CompileBench (building real projects from source, pass@1): **40.0%**
- Terminal-Bench / Toolathlon / OSWorld / MCP-Atlas: no verified public rows published for 2.5 Flash
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- FailureSensorIQ: **65.5%**
- GPQA Diamond / HLE / ARC-AGI / FrontierMath: no verified public rows published for this checkpoint
- Omniscience accuracy / hallucination rate: no verified public score found

Coding:

- CompileBench: **40.0%** (the only coding-adjacent row)
- SWE-bench Verified / LiveCodeBench / DeepSWE: no verified public rows published

Long context:

- 1M context declared; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 50/100.** CompileBench 40.0% is the only verified agentic row and it is weak; the score is a low-confidence floor, not a measurement.
- **Reasoning: 60/100.** FailureSensorIQ 65.5% is mid; no GPQA/HLE/ARC row was published for this checkpoint.
- **Context window: 100/100.** 1,048,576 tokens with 65,536 max output.
- **Multimodal: 85/100.** Text, image, audio, video and PDF in — the broadest input set in this dataset — but no public multimodal benchmark rows were reached for this checkpoint.
- **Coding: 55/100.** CompileBench 40.0% is the only coding row and it is weak; no SWE-bench or LiveCodeBench row was published.
- **Cost efficiency: 92/100.** $0.30/$2.50 per 1M with $0.03 cache reads.
- **Overall Score: 70.0/100.** Best fit for cheap multimodal document/audio work at 1M context; every 2026 Flash model outscores it at a similar price.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Google DeepMind model card, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Gemini 2.5 Flash — Google DeepMind model card](https://deepmind.google/models/model-cards/gemini-2.5-flash/)
  - [Gemini 2.5 Flash benchmarks & sources — BenchLM](https://benchlm.ai/models/gemini-2-5-flash)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Gemini_2.5_Flash_v2.md`, using the same headings.