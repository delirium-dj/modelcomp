# Fledge Alpha — findings by Step 5 Preview

- Source: stealth (`fledge-alpha` / `fledge-alpha-free` on OpenCode Zen; catalog ID `stealth/fledge-alpha`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Fledge Alpha (free on OpenCode Zen as `fledge-alpha-free`)
- **Short description:** A deliberately undocumented free stealth preview that appeared on OpenCode Zen on **2026-10-01** and has already been deprecated/delisted (absent from the live Zen endpoint; the models.dev catalog entry is marked deprecated). No lab has claimed it — the OpenCode models.dev entry was added by the opencode-agent bot, the catalog describes only "a free-tier preview reasoning model with text and image input and tool use," and the community's leading hypothesis (stealthmodels.com) is that it is a **router** rather than a single model, based on inconsistent input-token counts for identical prompts (7,536/7,536/6,499) and uneven output quality. Despite the thin documentation it briefly ran hot: #7 by tokens on OpenCode's weekly ranking (2.2T tokens, 32K unique users, 974K completed sessions, 92.6% cache-hit ratio, $0 total spend).
- **Provider / access:** Was OpenCode Zen free tier only ($0/$0); never listed on OpenRouter; closed weights.
- **Release:** 2026-10-01; deprecated within days.
- **Context window:** 1,048,576 tokens (1M); max output 131,072 tokens (input, output and reasoning tokens share the context budget).
- **Modalities:** Text and image in → text out; reasoning with `reasoning_effort` low/high/max; tool calling.
- **Pricing (as of 2026-10-09):** was free ($0/$0); now deprecated.
- **Identity evidence:** tokenizer/route inconsistency suggests a router; early community guesses (a DeepSeek V4.x build, Thinking Machines' Inkling) are unconfirmed rumors — treat as unverified.

### Raw benchmarks found

Third-party only — the stealth trackers' own runs (small samples, single-tracker):

- GPQA Diamond: **92.3%** (36/39; 95% CI 79.7–97.3) — vs Space Bunny's 82.1% in the same run
- MMLU-Pro: **92.0%** (92/100; CI 85.0–95.9) — vs Space Bunny's 77.0%
- Humanity's Last Exam (text-only): **25.4%** (17/67; CI 16.5–36.9) — vs Space Bunny's 30.3% (i.e., Fledge trailed on HLE while leading on GPQA/MMLU-Pro)
- Output speed: ~61 tok/s (6 runs × 2,048 tokens, low effort)
- OpenVibeEval: 81/100 average frontend accessibility (axe-core, 8 runs) — not a capability benchmark
- SWE-bench, Terminal-Bench, τ³, MCP Atlas, GDPval, Artificial Analysis Intelligence Index: **no verified public score found** (AA page 404; the model was never independently benchmarked at scale)

### Normalized scores (1–100)

- **Tool use: 45/100.** The catalog confirms tool calling and a 1M context aimed at agent sessions, and usage was overwhelmingly coding-agent traffic (OpenCode) — but zero agentic benchmark data exists (no TB2.1, τ³, MCP Atlas or GDPval run), so this is a structural estimate.
- **Reasoning: 73/100.** GPQA Diamond 92.3% and MMLU-Pro 92.0% are frontier-cluster numbers — the best stealth-model third-party results measured to date — tempered by tiny samples (39 and 100 questions, wide confidence intervals), HLE 25.4%, and the fact that one tracker's run contradicts another (Fledge led Space Bunny on GPQA but trailed on HLE).
- **Context window: 88/100.** A 1M-token window with 131K output is the ≥1M band worth 95–100; docked because no MRCR/RULER/needle-retrieval evaluation exists and the router hypothesis means the window may be an upstream model's, with token-accounting inconsistencies already observed.
- **Multimodal: 62/100.** Text + image in → text out is the 60–70 band; image input is catalog-confirmed, but no vision benchmark (MMMU, OCRBench, CharXiv) was ever run.
- **Coding: 40/100.** No SWE-bench, Terminal-Bench or LiveCodeBench score exists — the model's heavy use inside OpenCode's coding agent is a usage signal, not an eval; "no verified public score found" applies.
- **Cost efficiency: 100/100.** It was literally free ($0/$0, 92.6% of input tokens served from cache) — the methodology's $0 = 100 tier — but the route is now deprecated, so the price no longer buys anything.
- **Overall Score: 62/100.** Best-fit recommendation: while it lasted, a free 1M-context multimodal reasoning preview that out-scored other stealth models on GPQA/MMLU-Pro in third-party spot checks; deprecated as of October 2026, and every capability number rests on one tracker's small-sample runs of an unidentified (possibly routed) endpoint.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (models.dev catalog JSON + TOML source, AnyRouter release note, stealthmodels.com and OpenVibeEval third-party runs, OpenCode data endpoint); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Fledge_2.md`, using the same headings.
