# Gemini 3.1 Pro Preview — findings by Ernie 5.5 Flash

- Source: Google DeepMind/Gemini 3.1 Pro Preview (`gemini-3.1-pro`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro Preview
- **Short description:** Google's reasoning-first Gemini 3.1 Pro preview (2026-02-19), aimed at agentic coding and complex problem solving. A preview checkpoint superseded within the 3.x line by later Flash/Pro releases and by the Gemini 4 family.
- **Provider / access:** Google Gemini API (`gemini-3.1-pro`), OpenRouter (`google/gemini-3.1-pro`), OpenCode Zen (`opencode/gemini-3.1-pro`), Vertex AI, Snowflake Cortex, Poe, Neon, Kenari.
- **Release / knowledge:** 2026-02-19; knowledge cutoff 2025-01 (models.dev).
- **IDs:** `gemini-3.1-pro`, `google/gemini-3.1-pro`, `opencode/gemini-3.1-pro`, `kenari/gemini-3-1-pro`.
- **Context window:** 1,048,576 tokens (1M); max output 65,536.
- **Modalities:** text, image, video, audio and PDF in; text out; reasoning and tool calls supported.
- **Pricing (as of 2026-11-11):** $2.00 / $12.00 per 1M input/output (Google/OpenRouter); cache read $0.12. Some gateways (Kenari) list $1.20/$7.14.
- **Architecture:** proprietary sparse MoE (undisclosed).

### Raw benchmarks found

Agent / tool use:

- τ²-Bench (Tool-Agent-User): **95.6%** — best-in-class tool-agent interaction
- Claw-Eval: **57.8%**; DeepSearchQA: **69.7%**
- ResearchClawBench: **13.3%** (very weak research-agent score)
- Terminal-Bench 2.1 (Vals AI): **70.8%**; Gert Labs composite game benchmark: **56.87%**
- Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- MMLU-Pro (Vals AI): **91.0%**
- ARC-AGI-2: **77.1%**; ARC-AGI-3: **0.4%** (near-total failure on the interactive reasoning set)
- Humanity's Last Exam without tools: **45.4%** (well behind 2026 H2 frontier)
- MMMU-Pro: **83.9%**; CharXiv Reasoning: **80.2%**; ZeroBench: **29.0%**
- SimpleVQA: **72.4%**; MedXpertQA (MM): **81.3%**; ERQA: **69.4%**
- ScreenSpot Pro: **84.4%**; ParseBench: **67.32%**
- GPQA Diamond / CritPt: no verified public score found

Coding:

- LiveCodeBench (Vals AI): **88.5%**; LiveCodeBench Pro: **82.9%**
- SWE-bench (Vals AI): **78.8%**; React Native Evals: **78.9%**
- Vibe Code Bench v1.1: **32.03%**; ScarfBench: **37.6%**; PostTrainBench v1.1: **22.0%**
- Terminal-Bench 4.x / SWE-bench Verified / DeepSWE: no verified public row published

Long context:

- Long-context retrieval (MRCR / RULER / GraphWalks): no verified public score found for this preview
- MazeBench (visual spatial reasoning): **1%**

### Normalized scores (1–100)

- **Tool use: 78/100.** τ²-Bench 95.6% is elite for tool-agent-user loops and Terminal-Bench 2.1 (Vals) 70.8% is respectable, but ResearchClawBench 13.3% and Claw-Eval 57.8% show a narrow, uneven agent profile.
- **Reasoning: 75/100.** MMLU-Pro 91.0% and MMMU-Pro 83.9% are solid, but ARC-AGI-2 77.1%, ARC-AGI-3 0.4% and HLE 45.4% place it a generation behind the 2026 H2 frontier.
- **Context window: 100/100.** 1,048,576 tokens with 65,536 max output.
- **Multimodal: 88/100.** Broadest input set (text, image, video, audio, PDF) with strong grounded scores (MMMU-Pro 83.9%, CharXiv 80.2%, ScreenSpot Pro 84.4%); ZeroBench 29.0% and MazeBench 1% cap it.
- **Coding: 78/100.** LiveCodeBench 88.5% (Vals) and SWE-bench 78.8% (Vals) are good, but Vibe Code Bench 32.0% and PostTrainBench 22.0% show it is not a competitive 2026 coding agent.
- **Cost efficiency: 80/100.** $2/$12 per 1M with $0.12 cache reads — cheap for the capability, but it is superseded by newer models at similar prices.
- **Overall Score: 83.8/100.** Best fit for multimodal document/video understanding and structured tool-agent workflows; a poor choice for hard reasoning or repo-scale coding.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Google DeepMind model card, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Gemini 3.1 Pro — Google DeepMind model card](https://deepmind.google/models/model-cards/gemini-3.1-pro/)
  - [Gemini 3.1 Pro benchmarks & sources — BenchLM](https://benchlm.ai/models/gemini-3-1-pro)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Gemini_3.1_Pro_v2.md`, using the same headings.