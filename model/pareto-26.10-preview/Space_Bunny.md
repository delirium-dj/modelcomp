# Pareto 26.10 Preview — findings by Space Bunny

- Source: Unbiased (`unbiased/pareto-26.10-preview`, direct model id `pareto`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pareto 26.10 Preview
- **Short description:** Unbiased's blended/composite multimodal model — one request fans out to several upstream LLMs in parallel and the service synthesizes a single answer. Aimed at research, coding and agentic workflows; 26.10 Preview is the current release behind the stable string `pareto` and "may change without notice". Not a single upstream checkpoint, so it cannot be compared 1:1 against a base model. It is a new release of the existing Pareto line (previous: Pareto 26.9), not a separate model family.
- **Provider / access:** Unbiased AI platform (run by Circuit & Chisel), Chat Completions-compatible and Responses-compatible endpoints; also `unbiased/pareto-26.10-preview` on OpenRouter (Chat Completions). Third-party BYOK routers (AnyRouter) expose it read-only.
- **Release / knowledge:** released 2026-10-01 (preview); knowledge cutoff not disclosed in any reviewed first-party material.
- **IDs:** `unbiased/pareto-26.10-preview` (OpenRouter), `pareto` (Unbiased direct). No free tier ID on OpenCode Zen — `meta.noFreeId` is set, so cost is scored on paid rates.
- **Context window:** 1,048,576 tokens input; 131,072 tokens max output. Verified from the OpenRouter model listing (public technical listing); Unbiased's own docs do not state the figure. 4x the 262,144 of Pareto 26.9.
- **Modalities:** text + image in; text out; reasoning yes (reasoning-type model per BenchLM classification); tool calls / `tools` + `tool_choice` supported; `max_tokens`, `temperature`, `top_p` control; **no enforced structured output** — OpenRouter's listing does not support `response_format`, so JSON mode is not guaranteed at the API layer.
- **Pricing (as of 2026-10-05):** $0.80 / $3.20 per 1M in / out, cached input $0.03 / 1M. Paid, no free tier. Versus Pareto 26.9 ($2.50 / $7.50, cached $0.25) that is 68% / 57% / 88% cheaper per token. Measured vendor cost per task: $0.004 (GPQA-D), $0.008 (HLE), $0.24 (DeepSWE), $0.48 (Terminal-Bench 4.0). No data-usage caveat published for a free tier because none exists.
- **Architecture:** proprietary blended composite service — several LLMs run per request and results are combined; no published parameter counts, no downloadable weights. Server-side tools (web search, image generation, patch application, tool discovery) are enabled by default on eligible Messages/Responses traffic — service-layer capabilities, not model features.

### Raw benchmarks found

All figures below are **vendor-run and preliminary by the vendor's own label** (Unbiased model card, 2026-10-01 runs: "may change before final publication"; comparator rows "not independently validated"). No third-party rerun of any of these exists. Unbiased publishes a public `pareto-evals` harness but nobody has published a reproduction.

Agent / tool use:

- Terminal-Bench 4.0: **50.8%** (Unbiased model card, 2026-10-01 run, $0.48/task). For scale in the same vendor sheet: GPT-6 Astra 58, Fable 5.1 56, GPT-6.1 Sol 56.1, Claude Sonnet 5.5 70.6 — Pareto is below every listed leader here.
- Tau3-Banking / Tau2-Bench: **no verified public score found** (no Tau2/Tau3 row in any reviewed source).
- GDPval-AA: **no verified public score found** (no Artificial Analysis page for Pareto at all).
- Claw-Eval / ClawProBench: **no verified public score found**.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**.
- Function calling spot checks (Recruitly "results by job" harness, 18/18 tasks passed): **100% passed**, judge 42–100, incl. explicit `tool_call` and multi-turn tool-call tasks — **provisional proxy**, not a standardized harness.
- Structured-output / classification robustness, independent (QuanticData, 2026-10-02, 134 hand-labelled scraper responses): **125/134 correct (93.3%)**, 9 bad pages accepted and 0 good pages rejected; misses carried 0.95–1.0 confidence, i.e. no usable routing band. Same test: September Pareto 131/134, GPT-6 Luna 134/134. This is the only independent measurement found.

Reasoning / knowledge:

- GPQA Diamond: **92.4%** (Unbiased model card, 2026-10-01, $0.004/task). For scale in the same sheet: Claude Sonnet 5.5 95.6, GPT-6.1 Sol 95.4.
- HLE: **49.9%** text-only (Unbiased model card, 2026-10-01, $0.008/task). For scale: Claude Sonnet 5.5 55.0, GPT-6.1 Sol 52.9 — Pareto trails both, its argument being the ~10x lower cost per task.
- LCR / MLCR: **no verified public score found**.
- CritPt: **no verified public score found**.
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** — BenchLM lists 3 source-displayable benchmark rows, no public overall score, rank "Unranked"; Artificial Analysis has no Pareto page.
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**.
- ArXivMath, MMMU-Pro: published for **Pareto 26.9** only (88 / 78) — **provisional proxy for 26.10**, not a verified 26.10 number.

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**.
- LiveCodeBench: **no verified public score found**.
- SciCode / AA-SciCode: **no verified public score found**.
- Vibe Code Bench: **no verified public score found**.
- DeepSWE v1.1 (agentic coding): **69.9%** (Unbiased model card, 2026-10-01, $0.24/task). For scale: Claude Sonnet 5.5 71.0, GPT-6.1 Sol 75.2, Fable 5 70.0, GLM-5.3 69.0, Kimi K3 69.0 — Pareto sits mid-cluster at a fraction of the cost.

Long context:

- **no long-context retrieval reported** — no MRCR / RULER / GraphWalks figure published for 26.10 Preview by any source. Only the 1,048,576-token per-request limit is documented; the 4x context bump over 26.9 is claimed by the vendor but unmeasured publicly.

### Normalized scores (1–100)

- **Tool use: 72/100.** Terminal-Bench 4.0 at 50.8% is the only standardized agentic/tool score and it lands below every leader in the vendor's own sheet (Astra 58, Fable 5.1 56, Sol 56.1); function calling demonstrably works (100% on 18 spot-check tasks) but the independent QuanticData run shows overconfident, unrouteable failures (9 false accepts at 0.95–1.0). Capped by a single unreproduced vendor number plus the absence of any Tau-bench/MCP-Atlas evidence.
- **Reasoning: 88/100.** GPQA-Diamond 92.4% is near the top of the field (Sonnet 5.5 95.6, Sol 95.4) and HLE text-only 49.9% is respectable, though below both of those leaders. Held to 88 rather than low-90s because every number is vendor-run, preliminary by the vendor's own admission, and no independent harness has reproduced it.
- **Context window: 95/100.** 1,048,576 tokens in / 131,072 out is the top documented tier on OpenRouter and 4x the previous release, but the vendor publishes no retrieval benchmark at that length, so it cannot score into the high 90s.
- **Multimodal: 72/100.** Text + image in, text out — image understanding is supported but there is no 26.10 vision number; the closest is MMMU-Pro 78 on Pareto 26.9 (provisional). No audio, video or PDF input, and no enforced JSON/structured-output mode.
- **Coding: 76/100.** DeepSWE v1.1 at 69.9% is a genuine agentic-coding result level with Fable 5 (70.0) and above GLM-5.3/Kimi K3 (69.0), but below Sol (75.2); no SWE-bench, LiveCodeBench or SciCode figure exists, and the harness caveat notes denominators need confirmation.
- **Cost efficiency: 95/100.** $0.80/$3.20 per 1M with $0.03 cached input is among the cheapest frontier-adjacent rates available, and measured cost per task ($0.24 DeepSWE, $0.48 Terminal-Bench) is 1–2 orders of magnitude below the comparators in the vendor sheet. Not 100 because it is a paid model, not free.
- **Overall Score: 80.6/100.** Strong, cheap and unusually long-context composite whose four headline scores are all vendor-preliminary — best fit as a low-cost high-volume reasoning/agentic workhorse, with independent validation wanted before any migration decision.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-05
- Method: public internet research (vendor model card and launch post, OpenRouter listing, third-party model directories, two independent evaluation write-ups); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.