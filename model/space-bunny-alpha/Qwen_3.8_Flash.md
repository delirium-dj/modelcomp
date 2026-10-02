# Space Bunny Alpha — findings by Qwen 3.8 Flash

- Source: Anonymous third-party stealth model (`stealth/space-bunny-alpha` on OpenRouter; `opencode/space-bunny-free` on OpenCode Zen)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Space Bunny Alpha (identity **not yet claimed** by any lab as of 2026-10-02 — unlike Ox Alpha→GLM-5.3-Flash or Union Alpha→Pareto 26.9)
- **Short description:** Stealth preview listed 2026-09-23: true 1M-token linear context with an unprecedented 524,288-token max completion, native text/image/video input, mandatory non-disableable chain-of-thought (low→max ladder, default max) at 118.5 tok/s / ~380 ms TTFT. Top-3 worldwide OpenRouter weekly call volume within days. Speculation (tokenizer forensics: high-density Chinese/code BPE, not OpenAI's) points at Moonshot Kimi-next or a MiniMax multimodal MoE — unconfirmed.
- **Provider / access:** OpenRouter `stealth/space-bunny-alpha` (Chat Completions; tools, response_format, reasoning_effort accepted but reasoning cannot be disabled); OpenCode Zen `space-bunny-free` (limited-time $0, free list since 2026-09-23).
- **Release / knowledge:** listed 2026-09-23; knowledge cutoff undisclosed.
- **IDs:** `opencode/space-bunny-free`, `stealth/space-bunny-alpha`.
- **Context window:** **1,000,000 total / 524,288 max output** (OpenRouter catalog; corroborated by pi.dev tracker "1M tokens" and margrop forensics) — matches the curated `meta.json` (524K in / 524K out).
- **Modalities:** text + image + video in; text out; reasoning always on; tool calls; JSON mode without schema enforcement. No audio input or non-text output documented.
- **Pricing (as of 2026-10-02):** **$0 / $0** on both gateways during the free preview (time-limited; Zen lists it among free models and it is NOT in the train-on-your-data caveat list — provider states zero retention, does not train on submissions). No paid rate card yet.
- **Architecture:** undisclosed (anonymous); runtime: P50 ≈87 tok/s, availability ~95% (OpenRouter dashboard snapshot 2026-09-24).

### Raw benchmarks found

> No BenchLM (`space-bunny-alpha` → 404) or benchmarklist page exists yet, and trackers mark it "not yet scored" — all capability evidence comes from small independent subset runs and a private suite; the rater cohort has the same constraint. Scores are explicitly provisional.

Agent / tool use:

- AI BENCHY (private 22-test suite, run 2026-09-24, `::high`): **7.0/10 overall** — **Tool Calling 10/10**, Data parsing 10/10, API reliability 10/10; Trivia 3.0, General Intelligence 4.2
- Terminal-Bench / Tau3 / GDPval-AA / Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- HLE (300-question subset, indep.): **46.1%** (95% CI 40.4–51.8; same evaluator's refs: GPT-5.6 Sol 49.5, MiniMax M3 39.0)
- GPQA Diamond (60-question subset): **82.0%**; MMLU-Pro (same evaluator): **75%**
- Token efficiency: ~67% fewer output tokens than Qwen3.8 Flash on the same set (306K vs 914K)

Coding:

- AI BENCHY Coding category: **6.2/10**; SWE-bench Verified / LiveCodeBench / SciCode: **no verified public score found**

Long context / multimodal:

- Independent 200K-token stealthprint test: **3/3 hidden codes recovered in order** in one 200,187-token run
- MRCR / RULER ≥98%-at-length: **no verified row**; MMMU-Pro / video suites: **no published visual benchmark row** despite documented image+video input.

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded. All capability inputs are unaudited subset/private runs → band floors preferred over invented ceilings.

- **Tool use: 68/100.** Perfect Tool-Calling and extraction in AI BENCHY plus catalog-confirmed function calling are real signals, but a 22-test private suite with 7.0/10 overall and zero leaderboard agentic rows (TB/Tau/GDPval) can't support the 75+ tier.
- **Reasoning: 75/100.** HLE 46.1% (subset, CI up to 51.8) clears the 40% frontier bar and GPQA 82% is mid-high — but both are small unaudited runs, MMLU-Pro 75% is only mid, and Trivia 3.0/10 hints at factual-recall weakness; provisional upper-mid.
- **Context window: 95/100.** Verified 1M window meets the ≥1M tier with an extraordinary 524K output budget and a positive independent 200K retrieval check; no ≥98%-at-512K+ retrieval evidence → band floor.
- **Multimodal: 78/100.** Text+image+video in / text out is the 75–90 band per the catalog; not higher because zero visual benchmark rows have been published for this ID.
- **Coding: 55/100.** Only AI BENCHY Coding 6.2/10 exists; no SWE-bench/LiveCodeBench/SciCode row. Scored on the thin evidence rather than borrowing the community's "strong coding" hype.
- **Cost efficiency: 100/100.** $0/$0 free preview on both gateways with zero retention and no training use — strictly better than the training-consent free tiers; time-limited, re-score when a paid rate card lands. Cost is excluded from Overall.
- **Overall Score: 74/100.** Mean of Tool 68, Reasoning 75, Context 95, Multimodal 78, Coding 55 = 371/5 = 74.2 → 74. Best fit: while the preview lasts, the cheapest way to get 1M-context + 524K-output multimodal reasoning with disciplined tool calling at $0; unproven on repo-grade coding and factual recall, and everything is provisional until the vendor reveals itself or audited leaderboards add rows.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (OpenRouter model catalog + llms.txt API doc for `stealth/space-bunny-alpha`; OpenCode Zen docs free-model list — verified $0 tier absent from the train-on-data caveat list; blog.margrop.net forensic analysis 2026-09-24; pi.dev/commandcode.ai trackers; AI BENCHY + HLE/GPQA subset independent runs as compiled 2026-09-25; BenchLM page 404 → no aggregate). Scores are normalized 1–100 interpretations, not official vendor scores, and are explicitly provisional for an unclaimed stealth model.
- Revisit trigger: if the vendor reveals the model (e.g., a Kimi or MiniMax relaunch) or BenchLM/leaderboards add audited rows (TB 2.1, SWE-bench, MRCR, MMMU-Pro), research deeper and write a fresh report; keep this file as history.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
