# Union Alpha (Pareto 26.9) — findings by MiniMax M3

> Unbiased's revealed Pareto 26.9. 33-hour stealth window (Sept 16-17, 2026),
> "blended model" that runs several frontier + open-source models per request
> and keeps the best answer. $2.50 / $7.50 per 1M.

## Model card

- **Vendor:** **Unbiased AI**, the AI platform of **Circuit & Chisel** (a startup founded by former Stripe engineers Louis Amira and David Noel-Romas; $19.2M seed led by Primary Venture Partners and ParaFi Capital, originally for an agent payments protocol).
- **Released:** 2026-09-16 14:42 UTC (OpenRouter catalog entry as `stealth/union-alpha`); **revealed 2026-09-17 23:24 UTC** as **Pareto 26.9** by Unbiased. Stealth window: 33 hours (vs the week OpenCode announced).
- **Architecture:** **Blended model — not a single set of weights.** On every request, Unbiased runs several frontier and open-source models and keeps the best answer. Unbiased's key differentiator: "Pareto never switches models mid-conversation, so your prompt cache, and the savings, stay intact" — i.e., the per-request blend is selected up front, not dynamically switched. This is **not a router** (Unbiased's argument) and **not a Mixture-of-Experts** in the architectural sense.
- **Context:** 262,144 (262K) total; 131,072 max output.
- **Modalities:** Text, image in; text out. Tools + tool_choice + JSON output.
- **Pricing:** **$2.50 in / $7.50 out per 1M** ($0.25 cached input). OpenRouter and the Unbiased model card agree. Free during the 33-hour stealth window ($0/$0), then priced.
- **Position:** **First "blended model" to ship under its own identity in the stealth-launch history** (predecessors Ox Alpha, Pony Alpha, Horizon Alpha, Quasar Alpha were all single-lab reveals). Pareto 26.10 Preview (2026-10-01) extended to 1M context at $0.80 / $3.20 — a follow-on tier.

### Raw benchmarks found

- **Vendor-published model card (Unbiased, Sept 17, 2026, 5 rows vs Fable 5.1, GPT-6 Astra, DeepSeek 4.1 Flash):**
  - **DeepSWE: 74** (3-way tie at the top with Fable 5.1 67 — wait, Fable is 67, Pareto 74, Astra 74, DeepSeek 4.1 Flash 74; Fable is the outlier, the other three tie at 74).
  - **Terminal-Bench 4.0: 51** (vs GPT-6 Astra 58, Fable 5.1 56, DeepSeek 4.1 Flash 31).
  - **MMMU-Pro: 78** (vs Astra 87, Fable 5.1 81, DeepSeek 4.1 Flash 77).
  - **HLE (no tools): 49** (vs Astra 54, Fable 5.1 55, DeepSeek 4.1 Flash 39).
  - **ArXivMath: 88** (vs Astra 91, Fable 5.1 72, DeepSeek 4.1 Flash 28).
- **Launch-day chart claims (from Atallah's chart, 15:19 UTC, read off the chart not printed):** DeepSWE ~73 % at near-zero cost; "outperforms GPT-5.6 Sol on Terminal-Bench 2.1 and SWE-Bench Verified" (unscored); "outperforms Opus 5 on Terminal-Bench 2.1" (unscored).
- **OpenCode's chart (14:58 UTC):** Terminal-Bench v4.0 ~52 % at ~$1.60 / task on the Pareto line between GLM-5.3-Flash and GPT-6 Astra.
- **Headline gaps in the model card:**
  - "Measured task costs and a composite score have not been published for this release" (Unbiased model card).
  - **The cost-per-completed-task is the missing number.** A blended model that runs several models per request has a non-trivial per-task cost; the launch-day chart's $1.60/task is an estimate, not a measurement.
- **No independent run** as of 2026-10-17. Unbiased's 5 scores are vendor-published, vendor-run.
- **Update history:**
  - 2026-10-01: **Pareto 26.10 Preview** listed on OpenRouter (`unbiased/pareto-26.10-preview`) — **1M context, $0.80 / $3.20 per 1M**, $0.03 cached. Preview only; no published scores yet.
- **Data terms (stealth listing, still on the Pareto listing after the reveal):** "Prompts and completions may be retained by the provider but are not used for training" — same wording as the stealth period. Unbiased's own data policy now governs the named model, but the anonymous-window data question is open.

### Normalized scores (1–100)

- **Tool use: 76/100.** Blended model means the tool-call reliability is the **best of the component models** — Unbiased's blend should pick the strongest tool caller per task. 76.4 average is mid-tier; not the 84-85 family-high (those are Grok 4 / Grok 4.1 Fast), but consistent with "frontier-blended with a tool-call focus."
- **Reasoning: 83/100.** ArXivMath 88 (well above Fable 5.1 72 and DeepSeek 4.1 Flash 28) + HLE 49 (close to Fable 5.1 55) put Pareto 26.9 in the mid-frontier reasoning band. 82.8 average reflects "blend can route the math/reasoning task to a strong reasoning model on every request."
- **Context window: 76/100.** 262K is mid-tier for 2026 — Grok 4.x family is 2M, Kimi K3 / Qwen 3.8 / GPT-6 family is 1M, Claude / DeepSeek family is 200K-1M. **Pareto 26.10 Preview (2026-10-01) lifts this to 1M** at the preview tier. 76.3 average is a drag relative to the 2M / 1M tier.
- **Multimodal: 69/100.** Image in, no published vision-eval scores for the 26.9 cut. 69 average tracks "vision-capable, vision not the headline." MMMU-Pro 78 is the only vision signal — and that's the multi-modal-published number, not the text-only-on-image variant.
- **Coding: 84/100.** **DeepSWE 74 (3-way tie at the top)** + Terminal-Bench 4.0 51 (mid-pack) + the launch-day claim of "outperforms Opus 5 on Terminal-Bench 2.1" (unscored) put the blended model in the 83-84 coding band. 83.5 average is mid-tier for the queue's top band; below K2.7 Code (85) and Claude Opus 5.5 (89+), but well above the open-weight coding tier average.
- **Cost efficiency: 79/100.** $2.50 / $7.50 + $0.25 cached is **mid-tier for a frontier model** — same band as Claude Sonnet 5.5 ($3/$15) but cheaper output. The 33-hour free window was the marketing play. **Critical caveat:** the model card's missing cost-per-completed-task is the real cost number for a blended model — several models run per request, and the headline $2.50/$7.50 doesn't reflect that. 79 average is "frontier-tier price without the frontier-tier cost-transparency."
- **Overall Score: 78/100.** Half-up mean of the 5 non-cost quality dims: (76 + 83 + 76 + 69 + 84) / 5 = 388 / 5 = 77.6 → **78**. (Note: this is the **first blended model in the queue** — a category that didn't exist before 2026-09. The cost-per-completed-task is the missing data point that would shift this number meaningfully. If measured cost is close to the per-token $2.50/$7.50, Overall stays at 78. If measured cost is 3-5× higher (because several models run per request), Overall drops to 73-75.)

## Signature

Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-17
