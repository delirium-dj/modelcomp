# Claude Sonnet 5 — findings by Ernie 5.5 Flash

- Source: Anthropic/Claude Sonnet 5 (`claude-sonnet-5`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Anthropic's everyday Claude agent model (released 2026-06-30) for coding, planning, browsing and general work — the first Claude 5 Sonnet, superseded by Sonnet 5.5.
- **Provider / access:** Anthropic API (`claude-sonnet-5`), Amazon Bedrock, Google Vertex (`claude-sonnet-5@default`), plus ~40 gateway routes (OpenRouter, LLM Gateway, Vercel, Prime, AI/ML API, Kenari, Unorouter).
- **Release / knowledge:** 2026-06-30; knowledge cutoff 2026-01-31 (models.dev).
- **IDs:** `claude-sonnet-5`, `anthropic/claude-sonnet-5`, `google-vertex/claude-sonnet-5@default`, `opencode/claude-sonnet-5`.
- **Context window:** 1,000,000 tokens total; 128,000 max output.
- **Modalities:** text, image and PDF in; text out; extended thinking and tool calls.
- **Pricing (as of 2026-11-11):** $2.00 / $10.00 per 1M input/output; cache read $0.20.
- **Architecture:** proprietary (undisclosed).

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **81.2%**; Terminal-Bench 2.1: **80.4%** (Vals **74.5%**)
- BrowseComp: **84.7%**; OSWorld 2.1 (108 tasks): **57.0%**
- Terminal-Bench 3.0: **14.6%**; Terminal-Bench 4.1: **12.10%**; ApprenticeBench: **16%**; MazeBench: **0%**

Reasoning / knowledge:

- HLE with tools: **57.4%**; CharXiv Reasoning: **88.3%**
- GPQA Diamond / ARC-AGI / FrontierMath: no verified public rows published
- Omniscience accuracy / hallucination rate: no verified public score found

Coding:

- VulcanBench CII v1: **89.2%**; SWE-bench Verified: **85.2%** (Vals **79.6%**); LiveCodeBench (Vals AI): **82.4%**
- SWE-bench Pro: **63.2%**; SWE Multilingual: **78.3%**; SWE-bench Multimodal: **28.1%**
- CursorBench 3.2: **61.5%**; CursorBench 4.0: **34.1%**; FrontierCode 1.1 Main: **42.7%**; ParseBench: **61.16%**

Long context:

- 1M context documented; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 72/100.** OSWorld-Verified 81.2% and TB2.1 80.4% are decent, but TB3.0 14.6%, TB4.1 12.1% and ApprenticeBench 16% show it cannot run the modern agentic harnesses.
- **Reasoning: 78/100.** HLE 57.4% with tools and CharXiv 88.3% are mid-tier; no GPQA/ARC/FrontierMath rows exist for this checkpoint.
- **Context window: 100/100.** 1,000,000 tokens with 128,000 max output.
- **Multimodal: 72/100.** Text, image and PDF in; SWE-bench Multimodal 28.1% suggests weak image-grounded coding and no multimodal evaluation rows were published.
- **Coding: 80/100.** VulcanBench CII 89.2%, SWE-bench Verified 85.2% and LiveCodeBench 82.4% are respectable, but SWE-bench Pro 63.2% and CursorBench 4.0 34.1% trail Sonnet 5.5.
- **Cost efficiency: 88/100.** $2/$10 per 1M — identical to Sonnet 5.5, which beats it on every measured axis.
- **Overall Score: 80.4/100.** Best fit for legacy Claude 5 pipelines; choose Sonnet 5.5 unless a pinned dependency requires Sonnet 5.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Anthropic model documentation, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Sonnet 5 — Anthropic model overview](https://docs.anthropic.com/en/docs/about-claude/models/overview)
  - [Claude Sonnet 5 benchmarks & sources — BenchLM](https://benchlm.ai/models/claude-sonnet-5)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Claude_Sonnet_5_v2.md`, using the same headings.