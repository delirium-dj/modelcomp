# Claude Haiku 4.5 — findings by Fledge Alpha

- Source: Anthropic (`claude-haiku-4-5`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 4.5
- **Short description:** Anthropic's Oct 15, 2025 fastest/cheapest Claude — matches Sonnet 4 on coding/agent benchmarks at $1/$5.
- **Provider / access:** Claude API (`claude-haiku-4-5-20251001`), Bedrock, GCP Vertex, Foundry; available to paid plans.
- **Release / knowledge:** 2025-10-15; knowledge cutoff Feb 2025.
- **IDs:** `anthropic/claude-haiku-4-5-20251001`
- **Context window:** 200,000 tokens; 64K max output; 128K thinking budget.
- **Modalities:** text + image in; text out; manual extended thinking, tool calling & computer use support.
- **Pricing:** $1/M in, $0.10/M cache read, $5/M out; Batch 50% off; tooluse system tokens 496/588.
- **Architecture:** Proprietary hybrid reasoning; successor to Haiku 3.5 retirement tier on Oct 15, 2026.

### Raw benchmarks found

Agent / tool use:

- τ²-Bench Telecom: 54.7% (AA Reasoning); Terminal-Bench Hard: 27.3%
- Computer-use: claims parity with Sonnet 4 (no independent OSWorld row for this ID)

Reasoning / knowledge:

- GPQA Diamond: **67.2%** (AA Reasoning); HLE: **10.4%**; AA-LCR: 74.3%; IFBench: 54.3%
- AA Intelligence Index: **16.9** (Reasoning)
- CritPt: 0.0% (Reasoning)

Coding:

- SWE-bench Verified: **73.3%** (Anthropic, 50-trial avg, 128K thinking budget, no test-time compute) — parity with Sonnet 4 at 1/3 cost
- AA Coding Index: **43.9** (Reasoning); SciCode: 42.2%; Terminal-Bench: 41.75% class

Long context: no 1M tier; named in 200K window class.

### Normalized scores (1–100)

- **Tool use: 66/100.** τ²-Telecom 54.7% and Terminal-Bench Hard 27.3% are mini-tier; matches Sonnet 4's computer-use press claim.
- **Reasoning: 62/100.** GPQA 67.2% and AA-LCR 74.3% carry the row; HLE 10.4% and AA Index 16.9 put it mid-tier today.
- **Context window: 55/100.** 200K window now, matching Claude 3.7 Sonnet tier; no 1M variant.
- **Multimodal: 62/100.** Text + image input; no audio/video surface.
- **Coding: 74/100.** SWE-bench Verified 73.3% — high for the price tier, parity-claimed with Sonnet 4 at launch.
- **Cost efficiency: 92/100.** $1/$5 with 10% cache-read and 50% Batch discount — cheapest Anthropic frontier row.
- **Overall Score: 64/100.** Half-up mean of the five non-cost dims: (66+62+55+62+74)/5 = 63.8 → 64.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (Anthropic Haiku 4.5 launch post, platform docs AA via OpenRouter table, AI/TLDR card, Vercel AI Gateway); scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one using the same headings.
