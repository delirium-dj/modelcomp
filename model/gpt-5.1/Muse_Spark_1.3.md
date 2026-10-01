# GPT-5.1 — findings by Muse Spark 1.3

- Source: OpenAI/GPT-5.1 (`gpt-5.1`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1
- **Short description:** OpenAI's Nov 2025 usability-focused flagship revision of GPT-5: warmer adaptive-reasoning default (Instant + Thinking variants), stronger coding/science gains over GPT-5; held the flagship spot until GPT-5.2 (Dec 11 2025).
- **Provider / access:** OpenAI API (`gpt-5.1`, snapshot `gpt-5.1-2025-11-13`; reasoning effort none/low/medium/high; Responses + Chat Completions APIs; default in Codex CLI). OpenCode Zen `opencode/gpt-5.1`.
- **Release / knowledge:** Released 2025-11-12/13 (aireleasetracker Nov 12; OpenAI docs snapshot Nov 13; modelbenchmark.io Nov 13). Knowledge cutoff Sep 30, 2024 (OpenAI API docs model page).
- **IDs:** `gpt-5.1` (OpenAI API); `opencode/gpt-5.1` (Zen catalogue / meta.json)
- **Context window:** 400,000 total (272,000 max input + 128,000 max output) — verified via OpenAI API docs page and modelbenchmark.io host table
- **Modalities:** Text and image in; text out; reasoning yes (configurable + adaptive); tool calls yes; structured JSON schemas supported
- **Pricing (as of 2026-10-01):** $1.25 per 1M input / $10.00 per 1M output; cached input $0.125; batch $0.625/$5.00 (OpenAI docs + modelbenchmark.io host table). No $0 tier — scored on paid pricing.
- **Architecture:** Proprietary dense Transformer (undisclosed parameters; test-time CoT scaling)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **52.4%** (benchmarklist.com, rank 64/182, 65th percentile; TB 2.0 44.9% alongside; automatio.ai aggregator claims 55% — vendor-adjacent, not scored)
- MCP-Atlas: **44.54%** (airank.dev model page, unverified compilation — provisional tool-use proxy)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **88.1%** (aireleasetracker.com + automatio.ai + airank.dev release compilations; evals.report official 87.6% and benchmarklist 86.6% alongside — same band)
- HLE: **28.5%** (benchmarklist.com, rank 70/466, 85th percentile; text-only 24.6% alongside)
- MMLU-Pro: **87.0%** (benchmarklist.com, rank 18/312, 95th percentile)
- Artificial Analysis Intelligence Index: **37.5** (benchmarklist.com, rank 74/418, 82nd percentile)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified: **76.3%** (aireleasetracker.com + anotherwrapper.com + themodelverse.in release compilations, Nov 2025; Epoch AI 66.9 high / SWE-board 66.0 medium and benchmarklist 69.8% are different harnesses — noted, not scored)
- LiveCodeBench: **86.5%** (benchmarklist.com, rank 15/123, 89th percentile; evals.report 86.8% Pass@1 unverified and automatio 94% aggregator alongside — same high band)
- SciCode: **43.3%** (benchmarklist.com, rank 75/458, 84th percentile)
- Vibe Code Bench v1.1: **24.6%** (benchmarklist.com, rank 37/71, 49th percentile)
- Aider Polyglot: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found** (LiveCodeBench Pro 2269 Codeforces Elo official per evals.report is adjacent, not the Coding Index harness — not scored)

Long context:

- No verified MRCR / RULER / GraphWalks score found; 400K (272K in / 128K out) is a documented ceiling only

### Normalized scores (1–100)

- **Tool use: 70/100.** Terminal-Bench 2.1 52.4% sits upper-mid (45-60% band top) with MCP-Atlas 44.5% as agency proxy; capped by missing Tau/GDPval/Claw/Toolathon coverage.
- **Reasoning: 85/100.** GPQA 88.1% near-frontier (90%+ band edge) plus MMLU-Pro 87.0% and HLE 28.5% (85th percentile) with AA Index 37.5 (82nd percentile); capped by missing LCR/CritPt/Omniscience and sub-40 HLE.
- **Context window: 82/100.** 400K total in the 200K-500K 65-84 tier upper end (272K usable in); capped by zero measured at-limit retrieval (no MRCR/RULER/GraphWalks).
- **Multimodal: 78/100.** MMMU 76.0-76.4% and MMMU-Pro 79.0-83.2% college-level vision-language strength push above the +image-in 60-70 band into lower video/PDF territory; no audio in or non-text out found.
- **Coding: 86/100.** SWE-bench Verified 76.3% (above GPT-5 74.9%) plus LiveCodeBench 86.5% and SciCode 43.3% (84th percentile) show flagship coding; capped by Vibe 24.6% and missing Aider/DeepSWE.
- **Cost efficiency: 72/100.** $1.25/$10.00 per 1M interpolates between the ~$1.25/$4.25 ~88 tier and the $3/$15 ~60 tier on output weight; cached $0.125 and batch $0.625/$5.00 soften, no $0 tier.
- **Overall Score: 80/100.** Mean of the five quality dims (70+85+82+78+86)/5 = 80.2; best fit as late-2025 flagship coding/reasoning default, escalate to 5.2+/Codex-Max for harder agentic runs.

---

## Signature

- Provided by: **Muse Spark 1.3 (opencode/muse-spark-1.3-contributor-free)** — 2026-10-01
- Method: public internet research (OpenAI API docs GPT-5.1 page, aireleasetracker.com 2025-11-12, modelbenchmark.io specs/lifecycle, anotherwrapper.com vs-Codex comparison, themodelverse.in review, automatio.ai + airank.dev compilations, evals.report 37-score table, benchmarklist.com percentiles); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
