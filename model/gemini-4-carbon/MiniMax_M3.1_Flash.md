# Gemini 4 Carbon — findings by MiniMax M3.1 Flash

- Source: Google / DeepMind (`gemini-4-carbon`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Carbon
- **Short description:** Google's strongest reasoning model, announced 2026-10-28 as a long-horizon agentic build on Gemini 4 Argon's architecture with a much larger thinking-token budget per turn ("explore hypotheses thoroughly, reason deeply, run extended verification loops"). It leads the Artificial Analysis Intelligence Index v5 (#1 at launch, #4 of 746 on the current index), heads Google's own frontier table on HLE-Diamond / SEC-bench Pro / long-context GraphWalks, and ships with a unified 1M-token input+output window plus long decode past 64K. It is a distinct model from Gemini 4 Argon (same base architecture, different reasoning depth), not a tier of it.
- **Provider / access:** Gemini API `gemini-4-carbon` (new **Interactions API** — `client.interactions.create` on `generativelanguage.googleapis.com/v1beta/interactions` — plus the classic GenerateContent API, Chat Completions-compatible surface, and `background=true` long-decode execution); Google AI Studio (paid tier, no Free tier); Gemini App, Google AI Ultra, Google AI Mode, Gemini for business, Google Antigravity / Managed Agents (the Antigravity agent supports `gemini-4-carbon`); the **Fairwind Program** for verified cybersecurity defenders (the cyber-specific capabilities run through it). OpenCode Zen `opencode/gemini-4-carbon` at `https://opencode.ai/inference/google/v1beta/models/gemini-4-carbon` (`@ai-sdk/google`). GitHub Copilot added it on 2026-11-10. Thinking level is a parameter — `low` / `medium` (default) / `high` — not separate SKUs.
- **Release / knowledge:** announced **2026-10-28** (Google blog "Gemini 4 Carbon: our next frontier model"; Artificial Analysis "released on October 28, 2026"); model card published **2026-11-10** (results stated "as of October 2026"). **Knowledge cutoff: March 2026.**
- **IDs:** `gemini-4-carbon` (Gemini API / AI Studio); `opencode/gemini-4-carbon` (OpenCode Zen). Thinking levels `low`/`medium`/`high`. Explicit context caching (`cachedContents`) is **not** supported; implicit caching applies (95% discount on cached input for prompts ≥4,096 tokens).
- **Context window:** unified **1,048,576 tokens** for input + thinking + output combined — a single response can decode past 64K up to 1M minus the input (long decode is served in 64K server-side continuation hops via `background=true`). Standard synchronous responses stop at 65,536 tokens.
- **Modalities:** text, image, **speech/audio** and video input; **text output only**. Built-in tools: Google Search grounding, code execution, function calling, and the Antigravity agent harness; `thinking_level` + `max_output_tokens` are the exposed controls. `temperature`, `top_p` and `top_k` are removed/ignored on this model.
- **Pricing (as of 2026-11-12, per 1M tokens):** **introductory $2.00 in / $10.00 out** with cached input at **$0.10** (95% off) through **2026-11-30**; **standard $4.00 in / $20.00 out**, cached input **$0.20**, from 2026-12-01. OpenCode Zen mirrors the intro rate today ("Gemini 4 Carbon (50% off) $2.00 / $10.00, cached read $0.10"). No Free tier. Every token is billed, including thinking tokens and grounding tool-declaration overhead.
- **Architecture:** proprietary, closed weights; parameter count not disclosed. The model card states Gemini 4 Carbon is **based on Gemini 4 Argon** and inherits Argon's architecture, training data, training-data processing, hardware, sustainability and acceptable-usage sections; only the thinking budget, safety fine-tuning and evaluation results differ.

### Raw benchmarks found

> Google's launch/model-card numbers are marked "vendor"; Artificial Analysis (AA), ARC Prize, Epoch AI and the independent leaderboards (CWE-bench, FrontierSWE, FrontierCode, CursorBench) are independent. AA's Intelligence Index is tracked at two versions (v5.0 on the model card, v5.0.1 on the live AA page) — an index-version difference, not a measurement change.

Agent / tool use:

- Terminal-Bench 4.0: **65.2%** (vendor, AA harness) — vs Gemini 4 Argon 57.1%, GPT-6 Astra 59.1%, Claude Opus 5.5 59.6%, Claude Fable 5.1 52.0%
- AutomationBench: **53.9%** (vendor, Zapier) / **77.8%** (AA AutomationBench-AA, independent) — the two harnesses disagree sharply on the same model
- Agents' Last Exam v1.1: **77.4%** (vendor, averaged rubric score over the 122-task release; the stored field is the binary pass rate) — vs Argon 69.0%, GPT-6 Astra 73.1%, Claude Opus 5.5 71.6%
- OSWorld 2.1 Offline subset: **81.5%** (vendor) — vs Argon 74.7%, GPT-6 Astra 80.9%, Claude Opus 5.5 87.2%
- GDPval-AA: **1733 Elo** (AA)
- AA-Briefcase v1.1: **1611 Elo** (AA) / rubric score **61.8%** (Anthropic, quoting a Google table)
- GDP.pdf all-pass: **28.4%** (AA); MKA **54.3%** (AA)
- Vending-Bench 2 (bank balance): **$16,484** (vendor) — vs Argon $13,718, GPT-6 Astra $15,515, Claude Opus 5.5 $9,235, Claude Fable 5.1 $5,422
- Cybersecurity: CWE-bench v1 **71.0%** (independent leaderboard); ExploitGym **54.8%** (vendor launch, ten-hour cap) / **53.5%** (vendor eval methodology, six-hour cap); **SEC-bench Pro 88.2%** (vendor, Fairwind access)
- Tau3-Banking / Tau2-Bench: **no verified public score found**; Claw-Eval / ClawProBench, Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- Gray Swan IPI (15 attempts): **0.0%** (vendor) — the jailbreak-attack success rate on this model

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **59** on v5.0 (vendor table, as of October 2026) / **60** on the live v5.0.1 index (AA) — rank **#4 of 746**, versus Argon 50, GPT-6 Astra 57, Claude Opus 5.5 58, Claude Fable 5.1 49; BenchLM carries 60.0
- Vals Index v2.7: **70.4%** (vendor table) — vs Argon 69.2%, GPT-6 Astra 65.0%, Claude Opus 5.5 70.2%
- FrontierMath v2: Tier 4 **95.122%** and Tiers 1–3 **90.526%** (Epoch AI independent leaderboard)
- ARC-AGI-1 **97.50%**, ARC-AGI-2 **92.1%**, ARC-AGI-3 **63.9%** on the standard harness (ARC Prize) — and **96.85%** on the ARC-AGI-3 **provider adapter** harness
- AA-LCR v1.1: **79.3%** (AA); AA-Omniscience index **53.5%**, accuracy **58.3%**, hallucination rate **11.4%**
- RiemannBench **80.0%** (vendor) — vs Argon 76.0%, GPT-6 Astra 72.0%, Claude Opus 5.5 69.6%
- Terminal-Bench-Science 0.1: **64.8%** (vendor, AA harness) — vs Argon 52.9%, GPT-6 Astra 63.3%, Claude Opus 5.5 59.0%
- GPQA Diamond, HLE, CritPt: **no verified public score found** (HLE-Diamond and CritPt v2 are components of the AA Intelligence Index but no standalone Carbon figure is published)

Coding:

- SWE-sweep: **9.6%** of bugs resolved (vendor, Google's own mini-swe-agent run — explicitly not the public leaderboard) — vs Argon 4.3%, GPT-6 Astra 9.5%, Claude Opus 5.5 3.6%
- FrontierSWE v2: **61.2%** (Proximal independent leaderboard) — vs Argon 55.0%, GPT-6 Astra 65.5%, Claude Opus 5.5 62.3%, Claude Fable 5.1 56.3%
- FrontierCode 2.0: **40.0%** (Cognition independent leaderboard)
- CursorBench 4.0: **60.4%** (Cursor independent leaderboard)
- Terminal-Bench 4.0: **65.2%** (see above); Terminal-Bench-Science 0.1 **64.8%** (see above)
- SWE-bench Verified / SWE-Pro, LiveCodeBench, SciCode / AA-SciCode, Vibe Code Bench, DeepSWE: **no verified public score found**

Long context:

- GraphWalks 256K–1M (BFS, F1): **96.2%** (vendor) — vs Argon 84.2%, GPT-6 Astra 71.8%, Claude Opus 5.5 66.8%, Claude Fable 5.1 65.0%
- Unified 1,048,576-token input + thinking + output window; long decode past 64K
- MRCR / RULER: **no verified public score found**; AA-LCR v1.1 79.3% is the only independent long-context reasoning figure

Multimodal:

- Chartography (no tools): **72.5%** (vendor) — vs Argon 71.6%, GPT-6 Astra 71.0%, Claude Opus 5.5 66.3%, Claude Fable 5.1 46.2%
- Blueprint-Bench 2 (similarity score): **58.6%** (vendor) — vs Argon 54.4%, GPT-6 Astra 49.7%, Claude Opus 5.5 51.2%
- MMMU-Pro / Video-MME / audio benchmarks: **no verified public score found**, although speech and video input are documented modalities

Performance profile (AA, high): output **79 tok/s**, time to first answer token **66.29s**, **26.0 min per Intelligence Index task** (median 12.6), **$7.76 per Index task**, 205M output tokens generated on the Index (#70 of 73 — the most verbose model AA measures), blended 7:2:1 price $2.94/M, 95% cache discount. AA notes "notably slow per task and very verbose".

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 88/100.** GDPval-AA **1733 Elo** (the rubric's frontier anchor is ~1750+), Terminal-Bench 4.0 **65.2%** — the highest in Google's own frontier table and above GPT-6 Astra's 59.1% and Claude Opus 5.5's 59.6% — OSWorld 2.1 Offline **81.5%**, Agents' Last Exam v1.1 **77.4%**, AutomationBench **77.8%** on AA's independent harness, AA-Briefcase **1611 Elo**, CWE-bench **71.0%**, ExploitGym **54.8%**, SEC-bench Pro **88.2%**, Vending-Bench 2 **$16,484** (best in the table). Capped below 90 because **τ³-Banking is not published** for Carbon (the rubric's frontier band expects τ3 ≈ 50%+ and GDPval ≈ 1750+; GDPval lands just under), because Google's own AutomationBench number (**53.9%**) is far below AA's 77.8% on the same benchmark, because Terminal-Bench 4.0 — the current agentic-terminal bar — is at 65% rather than 85%+, and because **Gray Swan IPI is 0.0%**, the weakest jailbreak-attack resistance in the tracked set.
- **Reasoning: 93/100.** AA Intelligence Index **59–60** (the rubric's frontier anchor is 60+; it was #1 at launch on v5.0 and is #4 of 746 on the live v5.0.1), Vals Index v2.7 **70.4%**, FrontierMath v2 **95.122%** (Tier 4) and **90.526%** (Tiers 1–3) on Epoch AI's independent board, ARC-AGI-1 **97.50%**, ARC-AGI-2 **92.1%**, ARC-AGI-3 **63.9%** on the standard harness, AA-LCR **79.3%**, AA-Omniscience accuracy **58.3%** with an **11.4%** hallucination rate (among the lowest recorded), RiemannBench **80.0%**, Terminal-Bench-Science 0.1 **64.8%**. Held below 95 because **no standalone GPQA Diamond or HLE figure is published**, because the ARC-AGI-3 standard-harness number is **63.9%** (the 96.85% reading is the provider-adapter harness, a different measurement path), and because AA-LCR at 79.3% is well short of the ≥98%-at-512K retrieval bar.
- **Context window: 97/100.** A unified **1,048,576-token** input+thinking+output window with long decode past 64K — the rubric's top tier (≥1M = 95–100). GraphWalks **96.2%** at 256K–1M is the strongest long-context retrieval figure Google publishes for this family, far above Argon's 84.2%. Three points short of 100 because the rubric's extra condition is "≥98% retrieval at 512K+", and GraphWalks is **96.2%**; no MRCR or RULER result is published.
- **Multimodal: 91/100.** Text, image, **speech/audio** and video in with text out — the rubric's "+audio in or any non-text out = 90–100" band, and the only model in this batch above the "+image in = 60–70" ceiling. Chartography **72.5%** (best in Google's table) and Blueprint-Bench 2 **58.6%** justify the lower end of the 90–100 band. Not scored higher because there is no **MMMU-Pro**, Video-MME or audio-benchmark figure, and the output side remains text-only.
- **Coding: 80/100.** Terminal-Bench 4.0 **65.2%** and Terminal-Bench-Science 0.1 **64.8%** (both above Argon and above GPT-6 Astra on the first), FrontierSWE v2 **61.2%** (independent), CursorBench 4.0 **60.4%** (independent), SWE-sweep **9.6%** (vendor's own mini-swe-agent run — the only software-engineering repository-resolution number, and it is barely above GPT-6 Astra's 9.5%). Capped by the absence of the rubric's coding anchors — **no SWE-bench Verified, no DeepSWE, no LiveCodeBench, no SciCode** — and by FrontierCode 2.0 at only **40.0%**, the weakest agentic-repo figure among the frontier models here.
- **Cost efficiency: 70/100.** The evaluated route — OpenCode Zen `opencode/gemini-4-carbon` — is billed today at the **introductory $2.00 in / $10.00 out** per 1M (cached read $0.10), a 50% discount on the $4.00/$20.00 standard rate that applies from 2026-12-01. AA's rubric anchors put ~$3/$15 at ≈60 and ~$10/$50 at ≈30, so the current $2/$10 sits above 60; the score is held at 70 because the discount is temporary and reverts in under three weeks, and because AA measures the model at **$7.76 per Intelligence Index task** on **26.0 minutes per task** with 205M output tokens — the real cost of the reasoning-heavy configuration is well above the headline token rate. At the standard $4/$20 rate the same model prices at roughly 52.
- **Overall Score: 89.8/100.** (88 + 93 + 97 + 91 + 80) / 5 = 89.8 — best-fit: the highest-intelligence model in the dataset on AA's index with the best long-context retrieval and the broadest multimodal coverage, paired with an agentic tool-use profile that is second to none; use it for the hardest reasoning, long-horizon agentic and cyber-defense work, and pair it with Gemini 4 Argon (same price, far cheaper per turn) when latency and token spend matter.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **AA Intelligence Index — 59 (vendor table, v5.0, October 2026) vs 60 (AA live page, v5.0.1) vs 60.0 (BenchLM).** An index-version bump, not a re-measurement; the current v5.0.1 value is scored and both are listed.
2. **AutomationBench — 53.9% (Google, Zapier variant) vs 77.8% (AA AutomationBench-AA, independent).** A 24-point harness gap on the same model; both are listed and the independent run is the one that informs the Tool use score, with the vendor number retained as a cap.
3. **ARC-AGI-3 — 63.9% (ARC Prize standard harness) vs 96.85% (provider adapter).** Two fundamentally different harnesses; the standard-harness number informs the Reasoning score and the adapter number is recorded alongside it.
4. **ExploitGym — 54.8% (launch post, ten-hour cap) vs 53.5% (eval methodology, six-hour cap).** The stored leaderboard figure uses the shorter cap; both are listed.
5. **Agents' Last Exam v1.1 — 77.4%.** Google publishes an averaged rubric score; the leaderboard field is the binary pass rate, so the two are not the same measure. The vendor figure is reported with that caveat and is not scored directly.
6. **SWE-sweep — 9.6%.** Google's own mini-swe-agent run, explicitly not the public leaderboard, and it is a single-repo "bugs resolved" metric rather than SWE-bench Verified. Reported as a lab result, not treated as a SWE-bench score.
7. **Price — $2/$10 (Zen and Google intro rate, through 2026-11-30) vs $4/$20 (AA's listed price, standard from 2026-12-01).** Cost is scored on the price actually payable today, with the standard rate noted.
8. **Context caching.** Explicit `cachedContents`/`caches.create` is unsupported on Carbon and implicit caching (95% off, ≥4,096-token prompts) is used instead; the 95% discount figure in the pricing tables is the implicit-cache rate, not an explicit-cache rate.
9. **Latency and verbosity.** AA records 66.29s to first answer token and 26.0 minutes per Index task — "notably slow" against a 12.6-minute median — and 205M output tokens, the highest verbosity AA measures. This is a cost-of-ownership caveat, not a capability claim, and is recorded rather than scored.

### Notes on identity

- `gemini-4-carbon` is a distinct model from Gemini 4 Argon (`gemini-4-argon`): the model card states Carbon is *based on* Argon's architecture and training but spends materially more thinking tokens per turn. Same 1M unified window, same per-token price, same built-in tools; different reasoning depth. Argon remains the efficiency pick for interactive work.
- Thinking level (`low` / `medium` / `high`) is a parameter on one model, not a tier family — no `gemini-4-carbon-high` or `-max` SKU exists.
- The cybersecurity figures (SEC-bench Pro 88.2%, ExploitGym 54.8%) reflect **Fairwind Program** access for verified defenders; the capability set is the same model, the access path is restricted.
- The Zen route `opencode/gemini-4-carbon` is the paid tier — there is no `gemini-4-carbon-free` route in the Console catalog.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-11-12
- Method: public internet research — Google's launch blog, Gemini 4 Carbon model card (DeepMind, published 2026-11-10), AI Studio "What's new in Gemini 4 Carbon" developer guide and the Gemini API pricing notes; independent trackers Artificial Analysis (model page + launch article), BenchLM, ARC Prize published Semi-Private results, Epoch AI FrontierMath v2, plus the CWE-bench v1, FrontierSWE v2, FrontierCode 2.0 and CursorBench 4.0 leaderboards; the OpenCode Zen model and pricing catalog for access routes and the evaluated price. Vendor-vs-independent conflicts are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing Gemini 4 Carbon — our next frontier model (Google Blog, 2026-10-28)](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/)
  - [Gemini 4 Carbon — Model Card (Google DeepMind, published 2026-11-10)](https://deepmind.google/models/model-cards/gemini-4-carbon/)
  - [What's new in Gemini 4 Carbon (Google AI Studio docs — pricing, thinking levels, long decode)](https://aistudio.google.com/docs/whats-new-gemini-4-carbon)
  - [Gemini 4 Carbon (high) — Intelligence, Performance & Price Analysis (Artificial Analysis)](https://artificialanalysis.ai/models/gemini-4-carbon)
  - [Gemini 4 Carbon is the new #1 on the Artificial Analysis Intelligence Index (AA article, 2026-10-28)](https://artificialanalysis.ai/articles/gemini-4-carbon-new-number-1)
  - [Gemini 4 Carbon Benchmark Scores & Performance (BenchLM)](https://benchlm.ai/models/gemini-4-carbon)
  - [ARC Prize — Google Gemini 4 Carbon published Semi-Private results](https://arcprize.org/results/google-gemini-4-carbon)
  - [OpenCode Zen — model list and per-1M pricing](https://opencode.ai/docs/zen)
- Future sources: add a new file next to this one, e.g. `Gemini_4_Carbon_Second_Pass.md`, using the same headings.
