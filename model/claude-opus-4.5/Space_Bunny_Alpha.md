# Claude Opus 4.5 — findings by Space Bunny Alpha

- Source: Anthropic (`claude-opus-4-5-20251101`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.5 (Anthropic flagship, November 2025 generation)
- **Short description:** Anthropic's late-2025 flagship, released 2025-11-24 as the
  SWE-bench record holder at launch and still a strong agentic/coding workhorse. Two
  serving variants exist — a non-reasoning base and a hybrid "extended thinking" mode —
  and they score differently on independent indexes; the base variant is the entry scored
  here unless a row states otherwise.
- **Provider / access:** Anthropic Messages API, model ID `claude-opus-4-5-20251101`;
  also on Amazon Bedrock and Google Vertex AI. Chat Completions-style Messages API
  (Anthropic's own schema, not OpenAI-compatible).
- **Release / knowledge:** released 2025-11-24; knowledge cutoff reported as August 2025
  (Artificial Analysis model page).
- **IDs:** `claude-opus-4-5-20251101` (Anthropic/Bedrock/Vertex). On OpenCode Zen the
  corresponding ID is `anthropic/claude-opus-4.5`-class; no Free-tier ID exists.
- **Context window:** 200,000 tokens (Anthropic system card: 200K context window used for
  the GPQA Diamond run; Artificial Analysis lists 200k). A 1M-token context beta existed
  for the Claude 4.x family but is not the default limit — the 200K figure is what the
  public evals above were run at.
- **Modalities:** text + image in (PDF via document blocks, image via vision), text out;
  extended thinking / interleaved reasoning yes; tool calls (server-side `tools` +
  computer-use and memory tools); strict JSON mode not advertised for this generation.
- **Pricing (as of 2026-09-27):** $5.00 / 1M input, $25.00 / 1M output (Anthropic list;
  Artificial Analysis confirms $5.00/$25.00, flagging both as "expensive" vs. $2/$10
  class medians). Prompt caching and batch discounts exist but are not the list rate.
- **Architecture:** proprietary — no weights, no parameter count published.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **59.3%** (Anthropic Opus 4.5 system card, Terminus-2 harness in
  Harbor, 128k thinking budget, 59.27% ±1.34% over 1,335 trials; 57.8% at a 64k thinking
  budget). BenchLM reproduces 59.3%.
- Terminal-Bench 2.1: **no verified public score found** (absent from the BenchLM
  Terminal-Bench 2.1 leaderboard, 61 models).
- Tau3-Banking / Tau2-Bench: τ²-bench (Anthropic system card) Retail **88.9%**, Telecom
  **98.2%**, Airline-original **70.1%**, Airline-corrected **87.8%**; τ³-bench results
  **70.2%** (BenchLM).
- GDPval-AA: **no verified public score found** (absent from the 105-model GDPval-AA
  leaderboard, whose floor is 1862 at the top and whose lowest listed entry is −171).
- Claw-Eval / ClawProBench: Claw-Eval **59.6%** (BenchLM); QwenClawBench **52.3%** (same).
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: Toolathlon **43.5%**, MCP Atlas
  **42.3%**, MCP-Tasks **71.8%** (all BenchLM). No SWE Atlas Codebase QnA row found.
- OSWorld / OSWorld-Verified: **66.3%** (BenchLM); Anthropic system card reports 66.26%
  P@1 avg@5 at 1080p, 100 steps. WebArena **65.3%** (system card).
- Other agentic: WideResearch **76.4%**, Gert Labs **64.23%**, CyberGym **50.6%**,
  JobBench **32.3%**, VITA-Bench **23.3%**, DeepPlanning **26.4%** (BenchLM).

Reasoning / knowledge:

- GPQA Diamond: **86.95%** (Anthropic system card, 64k thinking budget, interleaved
  scratchpads, 200K window, high effort, avg of 5 trials). BenchLM reports **87%**;
  AA-GPQA Diamond (Artificial Analysis, independent) **81.0%**.
- HLE: **30.8%** (BenchLM); AA-HLE **13.2%** (Artificial Analysis).
- LCR / MLCR: AA-LCR **70.7%** (BenchLM).
- CritPt: **0.3%** (BenchLM) — treated as a harness artifact, not a capability signal;
  the model is not listed on the CritPt leaderboard.
- Artificial Analysis Intelligence Index / BenchLM overall: AA Intelligence Index
  **36** non-reasoning (#10/65) and **34** reasoning (Artificial Analysis, both
  estimated; one comparison page shows 42 for the reasoning variant under v4.2).
  BenchLM overall **55.09/100, #54 of 508** (partial-coverage, conservative).
- Omniscience Accuracy / Hallucination Rate: **40.9% / 76.2%**; AA-Omniscience Index
  **−4.1%** (BenchLM).
- Other knowledge: MMLU-Pro **89.5%**, MMLU-Redux **96.6%**, SuperGPQA **70.6%**,
  C-Eval **92.2%**, MMLU-ProX **85.7%** (BenchLM). Math: AIME26 **95.1%**,
  HMMT Nov 2025 **93.3%** (BenchLM).

Coding:

- SWE-bench Verified / SWE-Pro: Verified **80.9%** (no thinking) / **80.6%** (64k
  thinking), averaged over 5 trials (Anthropic system card, Table 2.4.A); the launch
  number that topped the leaderboard. SWE-bench Pro **52.0%** no-thinking / **51.6%**
  64k-thinking (system card); BenchLM reports **57.1%** for SWE-bench Pro.
  SWE-bench Multilingual **76.2%**.
- LiveCodeBench: **84.8%** (LiveCodeBench v6, BenchLM).
- SciCode / AA-SciCode: **no verified public score found** (absent from the 27-model
  SciCode leaderboard; leader is Sakana Fugu at 60.1%).
- Vibe Code Bench: **no verified public score found**.
- DeepSWE / Coding Index / other: NL2Repo **43.2%**; Aider Polyglot **89.4%**
  (reported by a third-party roundup, vs Sonnet 4.5's 78.8% — provisional, single source).
  No DeepSWE v1.1 row and no Artificial Analysis Coding Agent Index score found for this model.

Long context:

- 200K is the evaluated ceiling. BenchLM long-context rows: LongBench v2 **64.4%**,
  AI-Needle **74%**. **No MRCR, RULER, or GraphWalks retrieval result at window length
  was reported** for this model, so the 200K tier is scored on the documented limit
  rather than on measured long-context retrieval.

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal-Bench 2.0 59.3% (Anthropic, 1,335 trials) plus
  OSWorld 66.3%, τ²-bench Retail 88.9%/Telecom 98.2% and Claw-Eval 59.6% put it firmly
  in the upper-mid agentic band; capped there by Toolathlon 43.5% and MCP Atlas 42.3%,
  and by the absence of any Terminal-Bench 2.1 or GDPval-AA row to confirm it on the
  current harnesses.
- **Reasoning: 80/100.** GPQA Diamond 86.95% (Anthropic, 5 trials) and 81.0% on the
  independent AA-GPQA run, MMLU-Pro 89.5%, AIME26 95.1% and AA-LCR 70.7% are all
  frontier-adjacent; HLE 30.8% (13.2% on AA-HLE) and an AA Intelligence Index of only
  34–36 keep it under the 90+ band reserved for GPQA 90%+ / HLE 40%+ / Index 60+.
- **Context window: 72/100.** Documented and evaluated at 200K total, which the
  methodology maps to 200K = 70; the small uplift reflects LongBench v2 64.4% and
  AI-Needle 74% showing the window is genuinely usable, offset by the lack of any
  measured MRCR/RULER retrieval evidence and a 64K max-output ceiling (Anthropic's
  runs used 64k thinking budgets).
- **Multimodal: 70/100.** Text and image in, text out, with document/PDF blocks; the
  methodology's "+image in" band is 60–70 and the grounded numbers back the top of it
  (MMMU-Pro 70.6%, AA-MMMU-Pro 71.2%, CharXiv 68.5%). Capped because nothing leaves the
  text channel and there is no native audio or video input — the 84.4% VideoMMVU row
  reflects frame sampling, not a video-input capability.
- **Coding: 85/100.** The launch SWE-bench Verified record of 80.9% (5 trials) plus
  LiveCodeBench v6 84.8% and Aider Polyglot 89.4% are genuine frontier coding numbers;
  it stays below the 90+ band because SWE-bench Pro is only 52.0% (system card) /
  57.1% (BenchLM), Terminal-Bench 2.0 is a mid-band 59.3%, and there is no SciCode,
  DeepSWE, or Vibe Code Bench row to corroborate.
- **Cost efficiency: 42/100.** $5.00 in / $25.00 out per 1M is among the most expensive
  tiers in the comparison set — the methodology's $10/$50 ≈ 30 anchor with an upward
  adjustment for being 2× cheaper than that anchor; Artificial Analysis independently
  flags both legs as "expensive" against $2/$10 medians.
- **Overall Score: 77/100.** (78 + 80 + 72 + 70 + 85) / 5 = 77.0 — best-fit as a
  high-end agentic/coding model for organizations that can absorb premium pricing, and
  as of 2026-09 clearly superseded on this dataset's axes by later Opus generations
  (Opus 4.6/4.7/4.8, Opus 5/5.5), which lead the same Terminal-Bench 2.1 and
  GDPval-AA lanes where Opus 4.5 has no row at all.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-27
- Method: public internet research (Anthropic Opus 4.5 system card, Artificial Analysis
  model pages and Intelligence Index methodology, BenchLM model and benchmark
  leaderboards, DataCamp/LLM-Stats/third-party roundups for cross-checks). Scores are
  normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Opus_4_5_Recheck.md`, using the
  same headings.
