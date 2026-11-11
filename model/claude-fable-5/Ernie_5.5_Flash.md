# Claude Fable 5 — findings by Ernie 5.5 Flash

- Source: Anthropic/Claude Fable 5 (`claude-fable-5`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic's creative-writing / analysis-oriented Claude 5 model (released 2026-06-09) with controlled agent workflows. Superseded by Fable 5.1 in September 2026.
- **Provider / access:** Anthropic API (`claude-fable-5`), Amazon Bedrock, Google Vertex (`claude-fable-5@default`), plus ~40 gateway routes (OpenRouter, DeepInfra, LLM Gateway, Vercel, Prime, AI/ML API, Kenari).
- **Release / knowledge:** 2026-06-09; knowledge cutoff 2026-01-31 (models.dev).
- **IDs:** `claude-fable-5`, `anthropic/claude-fable-5`, `google-vertex/claude-fable-5@default`, `opencode/claude-fable-5`.
- **Context window:** 1,000,000 tokens total; 128,000 max output.
- **Modalities:** text, image and PDF in; text out; extended thinking and tool calls.
- **Pricing (as of 2026-11-11):** $10.00 / $50.00 per 1M input/output; cache read $1.00.
- **Architecture:** proprietary (undisclosed).

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **85%**
- Terminal-Bench 2.1: **84.3%** (Vals AI run: **80.5%**); Terminal-Bench 3.0: **34.0%**; Terminal-Bench 4.1: **44.90%**
- ApprenticeBench: **34%**; MazeBench: **11%**
- Toolathlon / Claw-Eval: no verified public rows published

Reasoning / knowledge:

- GPQA Diamond (Vals AI): **93.2%**; MMLU-Pro (Vals AI): **91.5%**
- ARC-AGI-1 (semi-private): **98.50%**; ARC-AGI-2: **89.2%**
- FrontierMath v2 Tiers 1–3: **87.018%**
- OfficeQA Pro: **57.9%**; ParseBench: **69.79%**; Blueprint-Bench 2: **38.6%**
- HLE / CritPt: no verified public score found

Coding:

- SWE-bench Verified: **95%** (Vals AI run: **95.0%**)
- SWE-bench Pro: **80%**; LiveCodeBench (Vals AI): **89.8%**; VulcanBench v3: **89.5%**
- CursorBench 3.2: **70.5%** / cursorBench31: **70.6%**; FrontierCode 1.1 Main: **53.5%**
- FrontierSWE v2: **47.0%**; DeepSWE: no verified public row published

Long context:

- 1M context documented; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 82/100.** OSWorld-Verified 85% is strong and TB2.1 84.3% solid, but Terminal-Bench 3.0 (34.0%) and 4.1 (44.9%) show a steep harness cliff, and ApprenticeBench 34% is weak.
- **Reasoning: 90/100.** GPQA Diamond 93.2%, MMLU-Pro 91.5%, FrontierMath v2 87.0% and ARC-AGI-2 89.2% form the best verified reasoning cluster of any Fable checkpoint; only the missing HLE row keeps it under 92.
- **Context window: 100/100.** 1,000,000 tokens with 128,000 max output.
- **Multimodal: 70/100.** Text, image and PDF input only; no public multimodal benchmark rows for Fable 5.
- **Coding: 86/100.** SWE-bench Verified 95% and LiveCodeBench 89.8% are elite; FrontierSWE v2 47.0% and the TB3/4 drop-off cap it below Opus-class agents.
- **Cost efficiency: 35/100.** $10/$50 per 1M matches GPT-6 Astra and is 5× Sonnet 5.5.
- **Overall Score: 85.6/100.** Best fit for analysis-heavy knowledge work and controlled agent workflows that need top-tier science reasoning; superseded by Fable 5.1 on agentic tasks.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Anthropic model documentation, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Fable 5 — Anthropic model overview](https://docs.anthropic.com/en/docs/about-claude/models/overview)
  - [Claude Fable 5 benchmarks & sources — BenchLM](https://benchlm.ai/models/claude-fable-5)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Claude_Fable_5_v2.md`, using the same headings.