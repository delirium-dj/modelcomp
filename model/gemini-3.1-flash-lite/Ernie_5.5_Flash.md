# Gemini 3.1 Flash-Lite — findings by Ernie 5.5 Flash

- Source: Google DeepMind/Gemini 3.1 Flash-Lite (`gemini-3.1-flash-lite`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash-Lite
- **Short description:** Google's low-latency Gemini (released 2026-05-07) for high-volume multimodal and agent workloads, with a 1M context and the full Gemini input set.
- **Provider / access:** Google Gemini API / AI Studio (`gemini-3.1-flash-lite`), Vertex AI, SAP AI Core, LLM Gateway, Merge Gateway, Kenari, plus ~26 routes.
- **Release / knowledge:** 2026-05-07; knowledge cutoff 2025-01 (models.dev).
- **IDs:** `gemini-3.1-flash-lite`, `google/gemini-3.1-flash-lite`, `opencode/gemini-3.1-flash-lite`.
- **Context window:** 1,048,576 tokens (1M); max output 65,536.
- **Modalities:** text, image, video, audio and PDF in; text out; thinking and tool calls.
- **Pricing (as of 2026-11-11):** $0.25 / $1.50 per 1M input/output; cache read $0.025 (Kenari $0.286/$1.714).
- **Architecture:** proprietary sparse MoE (undisclosed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (Vals AI): **34.1%** (below the agent baseline)
- SkillsBench v1.1 (BenchFlow): **20.1**; JevBench 1.4: **14.26**; JevBench 1.5: **19.58**
- Gert Labs composite: **38.46**
- Terminal-Bench 4.x / OSWorld / Toolathlon / MCP-Atlas: no verified public rows published

Reasoning / knowledge:

- MMLU-Pro (Vals AI): **86.2%**; GPQA Diamond (Vals AI): **81.1%**
- FrontierMath v2 Tiers 1–3: **27.719%**; NYT Connections: **8.2%** (near-floor)
- HLE / ARC-AGI: no verified public rows published

Coding:

- LiveCodeBench (Vals AI): **80.1%**; SWE-bench (Vals AI): **62.8%**
- Vibe Code Bench v1.1: **0.00%** (near-floor)
- DeepSWE / SWE-bench Pro: no verified public rows published

Long context:

- 1M context declared; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 50/100.** TB2.1 (Vals) 34.1%, SkillsBench 20.1 and JevBench 14–20 are all below the agent baseline — this is not an agent model.
- **Reasoning: 68/100.** MMLU-Pro 86.2% and GPQA 81.1% are respectable, but FrontierMath 27.7% and NYT Connections 8.2% are near-floor.
- **Context window: 100/100.** 1,048,576 tokens with 65,536 max output.
- **Multimodal: 82/100.** Full input set (text, image, video, audio, PDF) with CharXiv 73.2% and ParseBench 56.66% for documents; no public video/audio row.
- **Coding: 65/100.** LiveCodeBench (Vals) 80.1% is decent, SWE-bench (Vals) 62.8% mid, Vibe Code Bench 0.00% is a floor.
- **Cost efficiency: 92/100.** $0.25/$1.50 per 1M with $0.025 cache reads.
- **Overall Score: 73.0/100.** Best fit for high-volume multimodal classification and document extraction at 1M context; a poor choice for agents or coding.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Google DeepMind model card, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Gemini 3.1 Flash-Lite — Google DeepMind model card](https://deepmind.google/models/model-cards/gemini-3.1-flash-lite/)
  - [Gemini 3.1 Flash-Lite benchmarks & sources — BenchLM](https://benchlm.ai/models/gemini-3-1-flash-lite)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Gemini_3.1_Flash_Lite_v2.md`, using the same headings.