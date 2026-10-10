# Grok 4.7 — findings by Space Bunny

- Source: SpaceXAI / xAI (`grok-4.7`; reasoning effort low / medium / high (default) / xhigh — xhigh on the published benchmarks)
- Date: 2026-10-10 (UTC) — second-pass research; first pass 2026-09-25
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7
- **Short description:** SpaceXAI's most powerful model for coding and knowledge work, released **2026-09-21** after at least five public delays since late July. Marketed as "twice as fast, at half the price of comparable models." It works longer on difficult tasks, checks its own work more carefully, and ships the company's best-calibrated safeguards to date. **Served at the identical $2/$6 price and 500K context as Grok 4.6.**
- **Provider / access:** xAI API — `https://api.x.ai/v1/chat/completions` (Chat Completions) and `https://api.x.ai/v1/responses` (Responses API, where `reasoning.encrypted_content` is always returned); US regional endpoint; Cursor, Grok Build, third-party coding harnesses, model routers, and cloud platforms. **Batch API is not supported.**
- **Release / knowledge:** **2026-09-21**. **Knowledge cutoff May 2026** (xAI docs — note this is 3 months newer than Grok 4.6's February 2026).
- **IDs:** `grok-4.7`, no date suffix; the alias resolves to this build. Reasoning effort is a request parameter, not a separate model ID. **Grok 4.7 Fast** — same model, twice the output speed — costs **2× standard token rates (1.5× for long-context requests)** and exists **only inside Cursor and Grok Build, not on the public xAI API**, and is excluded from Grok Build's free tier.
- **Context window:** **500,000 tokens**, unchanged from Grok 4.6, with **no text output limit**. Artificial Analysis independently reports 500k (~750 A4 pages).
- **Modalities:** **Text and image input; text output.** Reasoning with configurable effort; function calling, **web search, X search, and code execution**. No video, PDF, or audio input; no non-text output. `logprobs` / `top_logprobs` are not supported on `grok-4.20` and newer.
- **Pricing (verified 2026-10-10):** Below 200K prompt tokens — **$2.00 input / $0.50 cached / $6.00 output** per 1M. **At or above 200K prompt tokens the whole request is billed at $4.00 / $1.00 / $12.00** — not just the overflow. Artificial Analysis blended 7:2:1 rate **$1.40 per 1M**; cost per Intelligence Index task **$2.73 (high) / ~$3.74 (xhigh)**.
- **Architecture:** Proprietary. **New, larger base model than Grok 4.6**, trained with a **longer reinforcement-learning run on a harder mix of tasks weighted toward problems that take many hours**, and **trained natively to understand the Grok Bot harness**. **Unconfirmed, flagged:** CNET reports **~2.1 trillion parameters (+40% over 4.6's 1.5T)** and supplemental training on SpaceX engineering data (Starlink telemetry, manufacturing and failure logs) — both trace to press and Musk's posts, **not** to any xAI page, so they are recorded but not scored. Rate limits: 150 requests/s, 50M tokens/min, `us-east-1`.

### Raw benchmarks found

**Official — xAI "Introducing Grok 4.7" table (2026-09-21). Critical methodological note: the Grok 4.7 column is labelled `xhigh` and the Grok 4.6 column `high`, so every "gain over 4.6" is measured across an effort gap. Only DeepSWE is footnoted as a high-effort run for 4.7.**

| Benchmark | Grok 4.7 (xhigh) | Grok 4.6 (high) | GPT-5.6 Sol (max) | Fable 5.1 (max) |
| --- | --- | --- | --- | --- |
| CursorBench 4.0 | **46.3%** | 40.4% | 41.7% | **51.8%** |
| DeepSWE v1.1 | **71.0%**\* | 65.2% | **72.7%** | 70.0% |
| EEBench (electrical engineering) | **64.0%** | 53.0% | 39.4% | 56.4% |
| AA Briefcase v1.1 | **1,657** Elo | 1,546 | 1,487 | **1,678** |
| Terminal-Bench 4.0 | **38.0%** | 20.3% | 37.3% | **57.9%** |
| Harvey Legal Agent Benchmark | **19.6%** | 15.8% | 2.5% | 6.7% |
| HealthBench Professional | **56.7%** | 48.5% | 60.5% | 62.1% |

\* high-effort run. Also from xAI: **GDPval 1,695 Elo** (4.6 1,605; Fable 5.1 1,735; GPT-6 Astra max 1,542) — CNET-reported; **LatchBio biosafety 62.4%, top of the leaderboard**; **HackerBench v0.3: 3.3% of risky dual-use prompts allowed through** (xAI's own safety benchmark).

**Independent — Artificial Analysis "Benchmarking Grok 4.7" (2026-09-21, evaluated at xhigh):**

- Intelligence Index **46**, up 2 over Grok 4.6 — the highest of any SpaceXAI model and enough to place the lab in the "top 4" (#28 of 673)
- AA-Briefcase **1,657 Elo** (+111 over Grok 4.6 high), just behind Claude Opus 5 and Claude Fable 5.1
- GDPval-AA **1,695 Elo** (+90)
- **Coding Agent Index improvements: DeepSWE v1.1 65% → 73%; Terminal-Bench 4.0 18% → 33%; SWE-Atlas-QnA 58% → 63%**
- **Regressions: AA-LCR −3.7 pp; AutomationBench-AA −1.1 pp.** Improvement: GDP.pdf +3.0 pp
- **Token burn: 81,000 output tokens per Index task at xhigh vs. 38,000 for Grok 4.6 at high — more than double.** For comparison, Muse Spark 1.3 max uses 60k and GPT-6 Astra max 27k. This is what pushes effective cost to **~$3.74/task** despite the identical $2/$6 list price.
- Throughput: **58 t/s (high), 47 t/s (xhigh)**; TTFT **1.00s** at high

**Other independent:**

- Cognition **FrontierCode slightly below Grok 4.6**
- **Vals Index revised #24 → #10 after an SDK fix**
- Fable 5.1 leads Grok 4.7 on CursorBench 4.0, AA-Briefcase, HealthBench Professional, and by **19.9 points on Terminal-Bench 4.0**
- Batch API unsupported; docs last updated 2026-10-05

**Conflicts retained:** Terminal-Bench 4.0 **38.0% (xAI, xhigh) vs. 33% (Artificial Analysis, xhigh)**; DeepSWE **71.0% (xAI, high) vs. 73% (AA, xhigh)**.

Sources consulted: [Introducing Grok 4.7 (SpaceXAI, 2026-09-21)](https://x.ai/news/grok-4-7), [Grok 4.7 Developer Guide (xAI docs, last updated 2026-10-05)](https://docs.x.ai/developers/grok-4-7), [Artificial Analysis — Benchmarking Grok 4.7 (2026-09-21)](https://artificialanalysis.ai/articles/benchmarking-grok-4-7), [PacketNebula — Grok 4.7 same price, xhigh vs high (2026-09-22)](https://packetnebula.com/articles/grok-4-7-same-price-xhigh-versus-high/), [promptblueprints — Grok 4.7 pricing and availability (2026-09-21)](https://promptblueprints.tech/ai-releases/grok-4-7-pricing-benchmarks-and-availability/), [ai-study.wiki — Grok 4.7 release (verified 2026-10-09)](https://ai-study.wiki/model-releases/grok/grok-4-7/), and [ARMES Docs Grok 4.7](https://armes.ai/docs/models/x-ai/grok-4.7), accessed 2026-10-10.

### Normalized scores (1–100)

- **Tool use: 92/100.** Raised from 90. GDPval **1,695 Elo** and AA-Briefcase **1,657** place it just behind Claude Opus 5 and Fable 5.1 at the agentic-knowledge-work frontier, up 90 and 111 Elo respectively over Grok 4.6. **Terminal-Bench 4.0 at 38.0%** (AA: 33%) is level with GPT-5.6 Sol max and nearly double Grok 4.6's 20.3%. The **Harvey Legal Agent Benchmark at 19.6%** beats every other model on xAI's own table, including Fable 5.1 at 6.7%. Held below the mid-90s by the **19.9-point gap to Fable 5.1 on Terminal-Bench 4.0** — xAI's own multi-hour terminal benchmark — the **AutomationBench-AA regression**, and the absence of any τ-bench, Toolathlon, MCP-Atlas or Claw-Eval figure.
- **Reasoning: 88/100.** Raised from 85. **AA Intelligence Index of 46 at #28 of 673** is the strongest score any SpaceXAI model has posted and is what placed the lab in the top four. **HealthBench Professional 56.7%** and **LatchBio 62.4% (top of the leaderboard)** support it. Held below 90 because Fable 5.1 and GPT-6 Astra sit at 53, because **AA-LCR regressed 3.7 points**, and because no standalone GPQA Diamond, HLE, or CritPt figure is published — the component detail simply is not available.
- **Context window: 88/100.** Reduced from 89. The 500,000-token window with no output cap is unchanged and well-documented, and xAI claims the longer RL run improved long-context management. The reduction reflects **Artificial Analysis measuring AA-LCR down 3.7 points** versus Grok 4.6 — a direct regression on the one long-context component that is published — plus the **double-rate tier above 200K prompt tokens**, which makes the second half of the window roughly unusable as advertised.
- **Multimodal: 68/100.** Raised from 67. Documented text-and-image input with a 20 MiB per-image limit, plus **web search, X search, and code execution** as native tools, and a Grok Bot multi-agent harness the model was trained to understand natively. Not raised further: no video, PDF, or audio input; no non-text output; no image-understanding benchmark.
- **Coding: 92/100.** Raised from 90. **DeepSWE v1.1 at 71.0% (xAI, high effort) / 73% (Artificial Analysis, xhigh)** beats Fable 5.1 max, **CursorBench 4.0 at 46.3%** beats GPT-5.6 Sol max, and **SWE-Atlas-QnA rose 58% → 63%**. The xAI table shows Grok 4.7 beating GPT-5.6 Sol on five of seven rows and Fable 5.1 on three. Deducted because **Fable 5.1 leads on CursorBench 4.0 at 51.8%**, **Cognition FrontierCode came in slightly below Grok 4.6**, no SWE-bench Verified / LiveCodeBench / SciCode figure is published, and the whole comparison against 4.6 is confounded by the xhigh-vs-high effort gap.
- **Cost efficiency: 70/100.** Reduced from 72. The list price is genuinely excellent — **$2/$6 identical to Grok 4.6**, a 75% cache discount, and a **$1.40 blended rate** — and xAI's "half the price of comparable models" claim checks out against frontier rates. Two real deductions: **at xhigh the model burns ~81,000 output tokens per task versus Grok 4.6's ~38,000 at high**, more than double and worse than every comparable model (Muse Spark 1.3 max 60k, GPT-6 Astra max 27k), pushing effective cost to **~$3.74/task** and making list price a poor proxy for task cost; and **the fast variant is 2× price (1.5× long-context)** while the **above-200K band doubles every rate** with no in-response warning.
- **Overall Score: 85.6/100.** (92 + 88 + 88 + 68 + 92) / 5 = 428 / 5 = 85.6, up from 84.2. The prior pass lacked the Artificial Analysis Coding Agent Index breakdown, which is what supplied the Terminal-Bench 4.0 and SWE-Atlas-QnA gains. **Best fit:** multi-hour terminal and office automation on a $2/$6 entry price, and legal-agent workflows where it beats everything on xAI's own table. **Two cautions before adopting:** xAI's entire launch comparison runs 4.7 at xhigh against 4.6 at high, so **run both at the same effort on your own tasks**; and **batch API is unsupported**, which matters if you depend on asynchronous jobs.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: Public web research of SpaceXAI's official Grok 4.7 launch post and developer guide, Artificial Analysis's benchmarking article, plus Cognition, Vals AI, CNET-sourced reporting, and independent pricing/analysis pieces; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Audit note: the **~2.1T parameter count and SpaceX engineering-data training** are recorded as unconfirmed press claims — they appear in no xAI document and are not scored. Two benchmark conflicts retained: **Terminal-Bench 4.0 38.0% (xAI) vs. 33% (AA)** and **DeepSWE 71.0% at high vs. 73% at xhigh**. The xhigh-vs-high effort mismatch in xAI's own launch table is flagged wherever it affects a conclusion.
- Future sources: add a new file next to this one, e.g. `Grok_4_7_Recheck.md`, using the same headings.