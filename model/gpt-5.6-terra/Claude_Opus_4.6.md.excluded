# GPT-5.6 Terra — findings by Claude Opus 4.6

- Source: OpenAI / GPT-5.6 Terra
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** OpenAI's balanced mid-tier model positioned between the flagship Sol and cost-efficient Luna. Offers GPT-5.5-class performance at roughly half the Sol cost. Strong for everyday enterprise workloads.
- **Provider / access:** OpenAI API, ChatGPT, AWS Bedrock, Azure. Responses API + Chat Completions API.
- **Release / knowledge:** 2026-07-09 release; knowledge cutoff February 2026.
- **IDs:** `openai/gpt-5.6-terra` (no Free ID on Zen)
- **Context window:** 1,050,000 tokens (~1.05M); max output 128,000 tokens. Verified via OpenAI docs and OpenRouter.
- **Modalities:** Text, image in; text out; adjustable reasoning effort (none/low/medium/high/xhigh/max); tool calls; JSON mode.
- **Pricing (as of 2026-09-19):** $2.00 / $12.00 per 1M tokens (standard); $0.20 cached input. Fast Mode: $4.00/$18.00. Batch: $1.00/$6.00 short context.
- **Architecture:** Proprietary; part of GPT-5.6 family architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: no verified public standalone score found for Terra specifically
- GDPval-AA: no verified public score found
- Tau3-Banking: no verified public score found
- OSWorld: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found for Terra specifically
- HLE: no verified public score found
- Intelligence Index: no verified public score found
- LCR / MLCR: no verified public score found

Coding:

- SWE-bench Verified: no verified public standalone score found for Terra
- DeepSWE: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode: no verified public score found

Long context:

- 1.05M context window with 128K max output; no MRCR/RULER retrieval score published.

### Normalized scores (1–100)

- **Tool use: 85/100.** Described as offering GPT-5.5-class performance with strong agentic capabilities. Adjustable reasoning effort enables sophisticated tool workflows. Missing explicit benchmarks limits precision; positioned as upper-mid based on OpenAI family performance trajectory.
- **Reasoning: 87/100.** GPT-5.6 series represents significant reasoning improvements over 5.5. Adjustable effort levels (up to max) enable deep analysis. Positioned between Sol (frontier) and mid-tier. Missing GPQA/HLE data.
- **Context window: 98/100.** 1.05M tokens with 128K max output — industry-leading output. Same context specs as GPT-6 Astra.
- **Multimodal: 65/100.** Text + image in; text out. No video/audio input. Text+image = 60–70 range.
- **Coding: 85/100.** Part of GPT-5.6 series positioned as strong for coding/agentic enterprise work. Described as GPT-5.5-class which was already capable. Missing standalone benchmarks limit precision.
- **Cost efficiency: 82/100.** $2/$12 is moderate pricing, well below Astra ($10/$50) and Sol. Batch at $1/$6 is attractive. Per methodology: ~$2/$12 ≈ 82.
- **Overall Score: 84/100.** Mean of (85 + 87 + 98 + 65 + 85) / 5 = 84.0. Well-balanced enterprise workhorse; multimodal limitations and missing benchmarks cap the score.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-09-19
- Method: Public internet research (OpenAI docs, OpenRouter, Azure docs, finout.io, Wikipedia); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
