# Claude Opus 4.7 — findings by Ernie 5.5 Flash

- Source: Anthropic/Claude Opus 4.7 (`claude-opus-4.7`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.7
- **Short description:** Stronger Opus tier for advanced software work and high-stakes reasoning (released 2026-04-16), the third-generation Claude 4 Opus. Now well behind the Claude 5 line.
- **Provider / access:** Anthropic API (`claude-opus-4-7`), Amazon Bedrock, Google Vertex (`claude-opus-4-7@default`), plus ~40 gateway routes (OpenRouter, LLM Gateway, Vercel, Prime, Kenari, Auriko, GmiCloud).
- **Release / knowledge:** 2026-04-16; knowledge cutoff 2026-01-31 (models.dev).
- **IDs:** `claude-opus-4-7`, `anthropic/claude-opus-4.7`, `google-vertex/claude-opus-4-7@default`, `opencode/claude-opus-4.7`.
- **Context window:** 1,000,000 tokens total; 128,000 max output (one gateway lists 409,600).
- **Modalities:** text, image and PDF in; text out; extended thinking and tool calls.
- **Pricing (as of 2026-11-11):** $5.00 / $25.00 per 1M input/output; cache read $0.50.
- **Architecture:** proprietary (undisclosed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (Vals AI): **68.5%**; OSWorld 2.0: **13.9%**; ApprenticeBench: **7%** (near-floor)
- ResearchClawBench: **20.7%**; Gert Labs composite: **65.59%**
- Toolathlon / MCP-Atlas / Claw-Eval: no verified public rows published

Reasoning / knowledge:

- GPQA Diamond (Vals AI): **90.2%**; MMLU-Pro (Vals AI): **89.9%**
- FrontierMath v2 Tiers 1–3: **70.175%**; Tier 4: **31.707%**
- ARC-AGI-3: **0.2%**; NYT Connections: **10.8%**; Chess Puzzles: **41.0%**; Mystery Game Puzzles: **28.0%**
- HLE / ARC-AGI-1 / ARC-AGI-2: no verified public rows published

Coding:

- LiveCodeBench (Vals AI): **85.1%**; SWE-bench (Vals AI): **82.0%**; React Native Evals: **82.8%**
- Vibe Code Bench v1.1: **71.00%**; FrontierCode 1.1 Main: **38.5%**; PostTrainBench v1.1: **28.6%**
- MirrorCode (Epoch AI/METR): **31.1%**; SWE-bench Pro / DeepSWE: no verified public rows published

Long context:

- 1M context documented; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 65/100.** TB2.1 (Vals) 68.5% is acceptable, but OSWorld 2.0 13.9%, ApprenticeBench 7% and ResearchClawBench 20.7% are near-floor — this model cannot run modern computer-use or research agents.
- **Reasoning: 82/100.** GPQA Diamond 90.2% and MMLU-Pro 89.9% are still good, FrontierMath T1–3 70.2% decent, but Tier 4 31.7%, ARC-AGI-3 0.2% and NYT Connections 10.8% expose a low ceiling.
- **Context window: 100/100.** 1,000,000 tokens with 128,000 max output.
- **Multimodal: 65/100.** Text, image and PDF in only; no public multimodal benchmark rows for 4.7.
- **Coding: 80/100.** LiveCodeBench 85.1% and SWE-bench (Vals) 82.0% remain respectable, Vibe Code Bench 71.0% good, but FrontierCode 1.1 38.5% and MirrorCode 31.1% show the agentic gap to Claude 5.
- **Cost efficiency: 45/100.** $5/$25 per 1M — identical to Opus 5/5.5 pricing for a model that is 2–3 generations behind.
- **Overall Score: 78.4/100.** Best fit for legacy Claude 4 pipelines and knowledge work; there is no reason to pick it over Opus 4.8 (same price, better scores) or Opus 5.5.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Anthropic model documentation, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Opus 4.7 — Anthropic model overview](https://docs.anthropic.com/en/docs/about-claude/models/overview)
  - [Claude Opus 4.7 benchmarks & sources — BenchLM](https://benchlm.ai/models/claude-opus-4-7)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Claude_Opus_4.7_v2.md`, using the same headings.