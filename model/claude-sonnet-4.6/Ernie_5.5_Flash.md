# Claude Sonnet 4.6 — findings by Ernie 5.5 Flash

- Source: Anthropic/Claude Sonnet 4.6 (`claude-sonnet-4.6`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6
- **Short description:** Anthropic's Claude workhorse (released 2026-02-17) for coding agents, careful analysis and production cost control — the last Claude 4 Sonnet, superseded by Sonnet 5.
- **Provider / access:** Anthropic API (`claude-sonnet-4-6`), Amazon Bedrock, Google Vertex (`claude-sonnet-4-6@default`), plus ~45 gateway routes (OpenRouter, LLM Gateway, Vercel, Prime, FastRouter, Kenari, GmiCloud).
- **Release / knowledge:** 2026-02-17; knowledge cutoff 2025-08-31 (models.dev).
- **IDs:** `claude-sonnet-4-6`, `anthropic/claude-sonnet-4.6`, `google-vertex/claude-sonnet-4-6@default`, `opencode/claude-sonnet-4.6`.
- **Context window:** 1,000,000 tokens total; 128,000 max output.
- **Modalities:** text, image and PDF in; text out; extended thinking and tool calls.
- **Pricing (as of 2026-11-11):** $3.00 / $15.00 per 1M input/output; cache read $0.30.
- **Architecture:** proprietary (undisclosed).

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **72.1%**; Terminal-Bench 2.0: **59.1%**; Terminal-Bench 2.1 (Vals): **57.3%**
- Claw-Eval: **67.8%**; CyberGym: **65.2%**; JobBench: **36.9%**; Gert Labs composite: **62.92**
- OSWorld 2.0: **8.3%**; ApprenticeBench: **2%** (near-floor); MazeBench: **0%**

Reasoning / knowledge:

- ARC-AGI-1 (semi-private): **86.00%**; ARC-AGI-2: **58.3%**
- GPQA Diamond / HLE / FrontierMath: no verified public rows published
- Omniscience accuracy / hallucination rate: no verified public score found

Coding:

- SWE-bench Verified: **79.6%** (Vals **77.4%**); LiveCodeBench (Vals AI): **82.1%**; React Native Evals: **80.6%**
- SWE-Rebench: **60.7%**; Vibe Code Bench v1.1: **51.48%**; cursorBench31: **48.8%**
- FrontierCode 1.1 Main: **24.3%** (weak); Terminal-Bench 2.0: **59.1%**

Long context:

- 1M context documented; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 68/100.** OSWorld-Verified 72.1% and Claw-Eval 67.8% are mid, TB2.1 (Vals) 57.3% acceptable; OSWorld 2.0 8.3%, ApprenticeBench 2% and MazeBench 0% are near-floor on the modern harnesses.
- **Reasoning: 72/100.** ARC-AGI-1 86.0% and ARC-AGI-2 58.3% are mid-frontier for early 2026; no HLE/GPQA/FrontierMath row was published.
- **Context window: 100/100.** 1,000,000 tokens with 128,000 max output.
- **Multimodal: 72/100.** Text, image and PDF in; BenchLM ranks Multimodal & Grounded as its strongest category (#49) but publishes no multimodal benchmark row.
- **Coding: 78/100.** SWE-bench Verified 79.6% and LiveCodeBench 82.1% are decent, Vibe Code Bench 51.5% mid, but FrontierCode 1.1 24.3% is very weak for a "coding agent" model.
- **Cost efficiency: 85/100.** $3/$15 per 1M is 50% more than Sonnet 5 for clearly less capability.
- **Overall Score: 78.0/100.** Best fit for legacy Claude 4.6 pipelines; Sonnet 5.5 costs half as much and scores far higher.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Anthropic model documentation, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Sonnet 4.6 — Anthropic model overview](https://docs.anthropic.com/en/docs/about-claude/models/overview)
  - [Claude Sonnet 4.6 benchmarks & sources — BenchLM](https://benchlm.ai/models/claude-sonnet-4-6)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Claude_Sonnet_4.6_v2.md`, using the same headings.