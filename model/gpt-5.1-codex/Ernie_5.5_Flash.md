# GPT-5.1 Codex — findings by Ernie 5.5 Flash

- Source: OpenAI/GPT-5.1 Codex (`gpt-5.1-codex`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1 Codex
- **Short description:** OpenAI's coding-optimized GPT (released 2025-11-14) for repository edits, reviews and agentic software work — the Codex-tuned GPT-5.1.
- **Provider / access:** OpenAI API/Responses (`gpt-5.1-codex`), Azure OpenAI, OpenRouter, LLM Gateway, Vercel, ZenMux, plus ~17 routes.
- **Release / knowledge:** 2025-11-14; knowledge cutoff 2024-09-30 (models.dev).
- **IDs:** `gpt-5.1-codex`, `openai/gpt-5.1-codex`, `azure/gpt-5.1-codex`.
- **Context window:** 400,000 total (272,000 input / 128,000 max output).
- **Modalities:** text, image and PDF in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11):** $1.25 / $10.00 per 1M input/output; cache read $0.125.
- **Architecture:** proprietary (undisclosed).

### Raw benchmarks found

> BenchLM holds only 4 displayable rows for this checkpoint.

Agent / tool use:

- JobBench: **26.2%**; Gert Labs composite: **49.68**
- Terminal-Bench / OSWorld / Toolathlon / MCP-Atlas: no verified public rows published
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond / HLE / ARC-AGI / FrontierMath: no verified public rows published for the Codex tier
- BenchLM ranks Instruction Following as its strongest category (#52)
- Omniscience accuracy / hallucination rate: no verified public score found

Coding:

- LiveCodeBench (Vals AI): **85.6%**
- Vibe Code Bench v1.1: **13.12%** (near-floor)
- SWE-bench Verified / SWE-bench Pro / DeepSWE: no verified public rows published

Long context:

- 400K context (272K input) documented; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 55/100.** JobBench 26.2% is weak and Gert Labs 49.68 mid; with no Terminal-Bench/OSWorld row published the score is a low-confidence floor.
- **Reasoning: 60/100.** No public reasoning benchmark exists for the Codex tier; the score is a conservative inference — low confidence.
- **Context window: 85/100.** 400,000 tokens with 272,000 input.
- **Multimodal: 72/100.** Text, image and PDF in; no public multimodal benchmark rows for this tier.
- **Coding: 75/100.** LiveCodeBench (Vals) 85.6% is the only solid coding row and it is good; Vibe Code Bench 13.1% is near-floor and no SWE-bench row was published.
- **Cost efficiency: 80/100.** $1.25/$10 per 1M — mid, and the same rate as GPT-5.1.
- **Overall Score: 69.4/100.** Best fit for repository edits inside the Codex harness; GPT-5.2/5.3 Codex and the GPT-5.6 tiers are better at lower prices.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (OpenAI model documentation, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [GPT-5.1 Codex — OpenAI](https://openai.com/index/gpt-5-1-codex/)
  - [GPT-5.1 Codex benchmarks & sources — BenchLM](https://benchlm.ai/models/gpt-5-1-codex)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `GPT_5.1_Codex_v2.md`, using the same headings.