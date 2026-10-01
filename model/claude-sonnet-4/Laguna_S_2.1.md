# Claude Sonnet 4 — findings by Laguna S 2.1

- Source: Anthropic (`https://www.anthropic.com/news/claude-4`), OpenCode Zen docs (`https://opencode.ai/docs/zen`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4
- **Short description:** Anthropic's May 2025 balanced Claude 4 model; state-of-the-art 72.7% on SWE-bench Verified at $3/$15; legacy tier superseded by Sonnet 4.5/4.6/5 but still served. Deprecated on Zen: June 15, 2026.
- **Provider / access:** Anthropic API at `https://api.anthropic.com`; OpenCode Zen: `opencode/claude-sonnet-4` at $3/$15 per 1M tokens (deprecated June 15, 2026)
- **Release / knowledge:** Released May 22, 2025; knowledge cutoff not published
- **IDs:** `anthropic/claude-sonnet-4` (per `meta.json` and Zen docs)
- **Context window:** 200K total (per `meta.json` and Anthropic announcement)
- **Modalities:** Text and image input, text output (per `meta.json` and Anthropic announcement)
- **Pricing (as of 2026-10-01):** $3.00 input / $15.00 output per 1M tokens (Anthropic API and Zen); deprecated on Zen as of June 15, 2026
- **Reasoning:** Hybrid model; supports extended thinking with tool use (beta)
- **Speed:** Not specified in announcement (no tokens/s figure published)
- **Status:** Deprecated (superseded by Claude Sonnet 4.5/4.6/5)

### Raw benchmarks found

> Sources: Anthropic Claude 4 announcement (`https://www.anthropic.com/news/claude-4`). No AA Intelligence Index or BenchLM page available (both return 404; model deprecated June 15, 2026). Benchmarks are from the official announcement blog post. No extended thinking used for the below scores.

Coding / agentic:

- **SWE-bench Verified:** **72.7%** — (Anthropic: Claude 4 announcement)
- **SWE-bench (high-compute):** **80.2%** — (Anthropic: Claude 4 announcement appendix; uses multiple parallel attempts with internal scoring to select best candidate)
- **Terminal-bench:** no verified public score found (Anthropic only reports 43.2% for Claude Opus 4, not Sonnet 4)
- **τ²-bench:** no verified public score found
- **GDPval-AA:** no verified public score found

Reasoning / knowledge:

- **AA-GPQA Diamond:** **70.0%** — (Anthropic: Claude 4 announcement; "w/o extended thinking")
- **MMMLU:** **85.4%** — (Anthropic: Claude 4 announcement; "w/o extended thinking")
- **MMMU:** **72.6%** — (Anthropic: Claude 4 announcement; "w/o extended thinking")
- **AIME:** **33.1%** — (Anthropic: Claude 4 announcement; "w/o extended thinking")
- **Artificial Analysis Intelligence Index:** no verified public score found (AA model page returns 404; BenchLM has no entry)
- **HLE:** no verified public score found
- **LCR:** no verified public score found

Multimodal:

- Supports text and image input; text output (per `meta.json` and Anthropic announcement)
- **MMMU (no extended thinking):** **72.6%** — (Anthropic: Claude 4 announcement)
- **AA-MMMU-Pro:** no verified public score found

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of the five quality dims (see `RULES.md`). Cost excluded.
  > Confidence: medium — 5 verified public benchmarks from the official Anthropic announcement. No AA Intelligence Index available (AA page 404, BenchLM has no entry for this deprecated model). No Terminal-bench, TAU-bench, HLE, or LCR data found.

- **Tool use: 50/100.** No agentic tool-use benchmarks found (Terminal-bench, TAU-bench, GDPval-AA, OSWorld, Claw-Eval all not published for Claude Sonnet 4). SWE-bench Verified at 72.7% reflects coding agent capability (involves file editing and test execution), but SWE-bench is categorized under Coding in the methodology. Baseline score for a model with tool-use capability but no verified agentic benchmark data.

- **Reasoning: 55/100.** GPQA Diamond at 70.0% is solid for a non-extended-thinking evaluation (comparable to Claude Opus 4.5 which scored 74.9% with II 25 → reasoning 55). MMMLU at 85.4% is strong. AIME at 33.1% is moderate. MMMU at 72.6% is decent for vision reasoning. However, no AA Intelligence Index is available (deprecated model, AA page 404), and no HLE or LCR data found. Without II, GPQA 70.0% serves as the primary reasoning proxy — comparable to Claude Opus 4.5's GPQA 74.9% (which scored 55 reasoning with II 25).

- **Context window: 65/100.** 200K tokens (per `meta.json` and Anthropic announcement). At the methodology's 200K tier (65). Note: Claude 4 models support extended thinking with up to 64K tokens of thinking budget, but this doesn't increase the total context window.

- **Multimodal: 65/100.** Text and image input, text output (per `meta.json` and announcement). MMMU (no extended thinking) at 72.6% is the sole multimodal benchmark found. Scores in the +image input tier (60–70) per methodology.

- **Coding: 75/100.** SWE-bench Verified at 72.7% (standard scaffold) is a state-of-the-art result cited by Anthropic. High-compute SWE-bench at 80.2% (using multiple parallel attempts with rejection sampling and internal candidate scoring) is excellent. No other coding benchmarks (LiveCodeBench, DeepSWE, SciCode) found from public sources for this model. Strong SWE-bench performance justifies a high coding score.

- **Cost efficiency: 60/100.** $3.00 input / $15.00 output per 1M tokens — in the methodology's $3–5 / $15–25 tier (≈60). No cache discount specified in the announcement. No free tier available (noFreeId: true per `meta.json`).

- **Overall Score: 62/100.** Mean of five non-cost dimensions: (50 + 55 + 65 + 65 + 75) / 5 = 310 / 5 = 62. Strong coding (SWE-bench Verified 72.7%, high-compute 80.2%) drives the score, but lack of agentic benchmarks, Intelligence Index, HLE, and LCR data limits confidence. Deprecated model — Claude Sonnet 4.5 or later recommended for active use.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-01
- Method: public internet research via Anthropic Claude 4 announcement and OpenCode Zen docs; scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `model/` findings files during research.
- Future sources: add a new file next to this one, e.g. `Anthropic_Clause_4.md`, using the same headings.

---
