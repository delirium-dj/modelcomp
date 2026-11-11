# Gemini 3 Flash — findings by Ernie 5.5 Flash

- Source: Google DeepMind/Gemini 3 Flash (`gemini-3-flash`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash
- **Short description:** Google's fast Gemini model (released 2025-12-17) balancing multimodal reasoning, tool use and cost — the first Gemini 3 Flash, now three Flash generations old.
- **Provider / access:** Google Gemini API / AI Studio (`gemini-3-flash`), Vertex AI, OpenRouter, OpenCode Zen (`opencode/gemini-3-flash`), Poe, Neon, Vercel.
- **Release / knowledge:** 2025-12-17; knowledge cutoff 2025-03 (models.dev).
- **IDs:** `gemini-3-flash`, `google/gemini-3-flash`, `opencode/gemini-3-flash`.
- **Context window:** 1,000,000 tokens (1,048,576 on OpenRouter/OpenCode); max output 65,000 (65,536).
- **Modalities:** text, image and PDF in; text out; thinking and tool calls.
- **Pricing (as of 2026-11-11):** $0.50 / $3.00 per 1M input/output; cache read $0.05.
- **Architecture:** proprietary sparse MoE (undisclosed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (Vals AI): **53.9%**; Claw-Eval: **49.2%**; JobBench: **11.4%** (near-floor)
- OTelBench: **18.8%**; Gert Labs composite: **56.63%**
- SkillsBench v1.1 (BenchFlow): **54.6%**
- Toolathlon / MCP-Atlas / OSWorld: no verified public rows published

Reasoning / knowledge:

- GPQA Diamond (Vals AI): **87.9%**; MMLU-Pro (Vals AI): **88.6%**
- FrontierMath v2 Tiers 1–3: **51.228%**; Tier 4: **17.073%**
- NYT Connections: **83.1%**; Chess Puzzles: **40.0%**; Mystery Game Puzzles: **20.0%**
- BinaryAudit (backdoor detection): **36.8%**; DAYJOB / DAYJOB Healthcare: **0.0%**

Coding:

- LiveCodeBench (Vals AI): **85.6%**; SWE-bench (Vals AI): **75.0%**
- Vibe Code Bench v1.1: **20.20%** (weak); ParseBench: **74.07%**
- Terminal-Bench 4.x / DeepSWE / SWE-bench Pro: no verified public rows published

Long context:

- 1M context declared; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 65/100.** TB2.1 (Vals) 53.9% and Claw-Eval 49.2% are mid, JobBench 11.4% and OTelBench 18.8% are near-floor — this is not an agent model.
- **Reasoning: 80/100.** GPQA Diamond 87.9% and MMLU-Pro 88.6% are still respectable for a 2025 model; FrontierMath 51.2%/17.1% and DAYJOB 0% show the ceiling.
- **Context window: 100/100.** 1,000,000 tokens with 65,000 max output.
- **Multimodal: 75/100.** Text, image and PDF in with ParseBench 74.07% for documents; no audio/video.
- **Coding: 78/100.** LiveCodeBench 85.6% and SWE-bench 75.0% (Vals) are decent, Vibe Code Bench 20.2% is very weak.
- **Cost efficiency: 90/100.** $0.50/$3.00 per 1M with $0.05 cache reads.
- **Overall Score: 79.6/100.** Best fit for cheap multimodal document/knowledge tasks; superseded by Gemini 3.7/3.8 Flash at the same price.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Google DeepMind model card, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Gemini 3 Flash — Google DeepMind model card](https://deepmind.google/models/model-cards/gemini-3-flash/)
  - [Gemini 3 Flash benchmarks & sources — BenchLM](https://benchlm.ai/models/gemini-3-flash)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Gemini_3_Flash_v2.md`, using the same headings.