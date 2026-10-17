# Mercury 2.5 — findings by Space Bunny

- Source: Inception (`inception/mercury-2.5`)
- Date: **2026-10-17 (UTC) — second pass.** First pass 2026-10-02 (Overall 49).
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **What this pass changed: three scores down, Overall 49 → 47.** The price and the speed
> story survived intact; the *measured quality* got worse, not better, as independent
> coverage arrived.
>
> | Dimension | Was | Now | Driver |
> |---|---|---|---|
> | Tool use | 45 | **44** | BenchLM agentic lane **12 (#119 of 128)** — first lane score ever published, and very low |
> | Reasoning | 58 | **56** | Mixed: BenchLM **Reasoning lane 72.6** and **Instruction Following 81.1 (#58/148)**, against **Knowledge lane 34.4 (#136/184)**, AA index still 12.3 |
> | Context window | 74 | **74** | Unchanged: 260K, AA-LCR 71.7% |
> | Multimodal | 15 | **15** | Unchanged; AA now confirms text-only as an independent source |
> | Coding | 52 | **46** | BenchLM **Coding lane 16.1 (#130 of 150)**; LM Market Cap Coding composite **40/100, #239 of 441** |
> | Cost efficiency | 99 | **99** | Unchanged — the 80% launch discount is **still live** with no end date published |
>
> (44 + 56 + 74 + 15 + 46) / 5 = 47.0 → **47**.
>
> **Two findings this pass that the first pass got wrong or missed.**
> 1. **The speed claim does not survive independent measurement — on latency.** Inception's
>    headline is 1,107 tok/s and **sub-300 ms TTFT**. **Artificial Analysis measures
>    ~856.6 t/s output (still excellent, so the throughput claim roughly holds) but a
>    time-to-first-token of ~3,464 ms** — computeprices calls this out explicitly as "slow
>    for interactive chat where users expect immediate streaming to begin." **A diffusion
>    decoder that takes 3.5 s to start streaming is a very different product from one that
>    starts in 300 ms**, and no source reconciles the two. The first pass recorded the
>    vendor's sub-300 ms figure without an independent counterweight.
> 2. **The instruction-following question is now resolved, and against the pessimistic
>    reading.** The first pass noted benchable.ai reporting **0.0% Instruction Following** and
>    flagged it as disagreeing with the 77% IFBench row. **BenchLM now publishes an
>    Instruction Following lane score of 81.1 at #58 of 148**, corroborating IFBench 77% and
>    making the benchable.ai 0.0% the outlier. That is a point *for* the model.

## Model card

- **Name:** Mercury 2.5
- **Short description:** Inception's flagship production **diffusion LLM (dLLM)** — instead of emitting tokens left-to-right, it denoises many token positions in parallel over multiple passes, which is where its headline speed comes from. It is positioned explicitly against the *cost-optimized* frontier tier (GPT-5.6 Luna at low effort, Gemini 3.5 Flash-Lite, Claude Haiku 4.5), not against flagship reasoning models. **Variant note, unchanged:** Mercury 2.5 and Mercury 2.5 Preview (2026-08-31) are the same engine eight days apart; call the production name. **Company note:** Inception's portfolio now spans Mercury 2.5, **Mercury Voice** (2026-09-29, a dLLM for voice agents with TTFT under 170 ms — a *speech* model and therefore correctly outside this dataset's `model/` scope), **Mercury Router**, and **Mercury Decide** (2026-10-08, a System One decision model which Inception says Vals AI rates "more accurate and more affordable than Jev"). Inception also teases: *"Coming soon, we'll be releasing our most capable model to date."*
- **Provider / access:** **Inception API** (`mercury-2.5`, OpenAI-compatible at `https://api.inceptionlabs.ai/v1/chat/completions`, supported via AISuite / LiteLLM / LangChain), plus **OpenRouter**, **Baseten**, **Vercel AI Gateway** and **Kilo Gateway**. Chat Completions style; `tools` / `tool_choice` function calling, **parallel tool calls**, and JSON-schema `response_format` all supported. **New API keys come with 10 million free tokens.** Enterprise deployments offer dedicated capacity, autoscaling, compliance controls and configurable data retention. Mercury 1, 2 and Mercury Edit 2 remain supported for existing customers.
- **Release / knowledge:** **2026-09-08** (Inception blog and Business Wire release, same day); Preview channel opened 2026-08-31. Knowledge cutoff listed as **2025-11** by modelcompare.dev — still the only published figure, and still not confirmed by Inception.
- **IDs:** `mercury-2.5` (Inception API); `inception/mercury-2.5` (OpenRouter / Vercel AI Gateway canonical IDs). No Zen ID, no open-weights identifier.
- **Context window:** **260,000 tokens**, doubled from Mercury 2's 128K (Inception models page; OpenRouter; Vercel AI Gateway; BenchLM; LM Market Cap; Krater all agree). **Maximum output 65,536 tokens.** Per modelcompare.dev the 260K figure is the *combined* prompt + completion budget. Long context remains the one dimension where this model has real independent measurement: **AA-LCR 71.7%** (Artificial Analysis, current row) / 68.0% (older BenchLM row).
- **Modalities:** **text in, text out — text-only, and structurally so.** A diffusion LM that generates text in parallel has no image or audio input path. **Artificial Analysis now lists it as "Modalities: Text"**, corroborating modelcompare.dev (attachments unsupported) and Venice ("no vision or multimodal input — text-only model") as a design boundary rather than an omission. Reasoning yes, with tunable reasoning levels. Tool calling, parallel tool calls, and schema-aligned JSON all supported. Web search available. No non-text output modality of any kind.
- **Pricing (as of 2026-10-17):** **unchanged and the 80% launch discount is still live.** List **$0.20 input / $0.75 output per 1M**, cached input **$0.02**; **discounted to $0.04 / $0.15, cache read $0.004.** The Inception models page as of 2026-10-08 still shows the "**80% OFF**" badge beside Mercury 2.5, and BenchLM's provider page (2026-10-16) carries $0.04 / $0.15 as the current price. **Inception has still published no end date for the discount**, so it must be treated as promotional. OpenRouter is the only priced route on computeprices ($0.04 / $0.15 / $0.004).
- **Architecture:** **proprietary, API-only, no open weights** — self-hosting and fine-tuning are both impossible today. Diffusion (parallel denoising) rather than autoregressive decoding. **Parameter count and topology remain undisclosed by Inception.** AI BENCHY carries a "~100B, low confidence" figure explicitly derived from existing Mercury family records rather than any vendor statement, and that estimate is **not** treated as specification here. Inception's "largest diffusion LLM ever trained" claim still has no published parameter count behind it.
- **Production evidence:** Inception reports **Augment Code switched to Mercury for context compression**, taking processing from ~150 seconds to **27 seconds — a 90% cost reduction** — and reports enterprise Mercury usage growing "by over an order of magnitude" to "thousands of developers and dozens of enterprises." **Mercury 2** (not 2.5) was named to **TIME's Best Inventions of 2026** in the AI category on 2026-10-15.

### Raw benchmarks found

> Provenance is mixed and is labelled per row. **Inception's own launch numbers are
> vendor-reported**; the Artificial Analysis, BenchLM and LM Market Cap rows are third-party
> figures whose internal sourcing is not always disclosed.

**NEW — BenchLM category lanes** (2026-10-16), the first per-category scores ever published for this model. It is now **ranked** where the first pass recorded it as unranked: **public score 33.8 / 33.77, confidence "Limited", 6 of 639 benchmarks covered**, context 260K, $0.04 / $0.15.

| Lane | Score | Rank | Underlying rows |
|---|---|---|---|
| Reasoning | **72.6** | Unranked (2 rankable rows) | — |
| **Instruction Following** | **81.1** | **#58 / 148** | IFBench 77% |
| Knowledge | **34.4** | **#136 / 184** | GPQA-D 79.0% |
| **Coding** | **16.1** | **#130 / 150** (Estimated) | SciCode 38% |
| **Agentic** | **12** | **#119 / 128** (Supported) | τ³-bench 96.0%, **DeepSearchQA 34.0%**, **Terminal-Bench 2.1 (Vals) 34.5%** |

- The Reasoning and Instruction Following lanes are the model's best showing; the Knowledge,
  Coding and Agentic lanes are near the bottom of their fields. **That internal spread is
  the real story of this model** and no single composite captures it.
- Terminal-Bench 2.1 (Vals) is now listed at **34.5%**, marginally up from the 34.1% the first
  pass recorded.
- **DeepSearchQA 34.0%** is a new row and is the more informative agentic number: real
  multi-step web research at a third completion.

**Artificial Analysis** (independent, current):

- **Intelligence Index 12.3.** For scale, the current leader GPT-6.6 Sol-era models sit near 50–60. Still a low absolute placement, still pulled down by the two suspect zeros.
- **Output speed ~856.6 t/s** (computeprices, citing AA) / **661 t/s observed on OpenRouter's Inception route**. The throughput claim substantially survives.
- **TTFT ~3,464 ms** (computeprices, citing AA) / 2.8 s on the OpenRouter route. **This is the single most important new independent finding and it directly contradicts Inception's advertised sub-300 ms.**
- HLE **11.8%**; SciCode **38.5%**; Long-Context Reasoning (AA-LCR) **71.7%**; context 260K; modalities text.
- **The two suspect zeros from the first pass persist and are still unresolved:** **GDPval-AA 0.0%** and **CritPt 0.0%**. A hard zero on a graded professional-work benchmark still reads more like a failed evaluation run than a model that solves nothing, and it still drags the composite index down. Not treated as capability measurements.
- **AA-Omniscience Accuracy 22.7%** / **Non-Hallucination Rate 19.7%** (AA) against BenchLM's earlier **22.0% accuracy / 67.0% hallucination rate**. **The two aggregators remain unreconcilable** — 19.7% non-hallucination implies ~80% hallucination against BenchLM's 67%. This model's factual reliability is still genuinely uncharacterised after 15 more days.

**LM Market Cap** (2026-10-15, "High confidence" per its own label): **Overall Score 40, #239 of 441** in Coding, top 54%; **Coding category #239 with a composite of 40/100**; signal breakdown Pricing 100/100 (25% weight), Recency 100/100, Context Window 86/100, Output Capacity 77/100, **Capabilities 67/100** (30% weight). Max output 65.5K confirmed. Context 260.0K confirmed. Status "stable."

**Krater** confirms the same figures independently: context 260K, max output 65.5K, $0.04 / $0.15, tool calling and structured outputs supported, **Intelligence index score 12.3**, and an explicit note that the listed benchmarks are "catalog data, not Krater benchmarks."

**AI BENCHY** now tracks Mercury 2.5 at two effort configurations: **(high) #225** and **(low) #336**. Mercury 2.5 Preview appears at (medium) #199, (high) #224, (low) #341 and (default) #358. **The first pass cited AI BENCHY at "7.1 overall, rank #138" at the `high` setting** — the rank has moved to #225 because AI BENCHY has grown to roughly 426 configurations, so the earlier figure is lineage, not a regression.

Retained vendor figures from the first pass: GPQA Diamond 79%, IFBench 77%, **70.2% average gain over Mercury 2 on ten named benchmarks (vendor-reported, per-benchmark levels unpublished)**. Inception names **Tau3Bench Telecom, AA-LCR and DSQA** among the ten but publishes no per-benchmark value for any of them. Notably, the Business Wire release describes the gain as "**jumps 10 points**" while the blog reframes it as "**a 40% increase**" — two framings of one delta, and neither publishes the underlying rows.

**Still absent:** SWE-bench Verified/Pro, LiveCodeBench, Vibe Code Bench, DeepSWE, AA Coding Index, Tau3-Banking, Tau2-Bench, Claw-Eval, Toolathlon, MCP-Atlas, SWE Atlas Codebase QnA, GPQA from an independent run, MRCR/RULER/GraphWalks. **Repository-scale autonomous coding is entirely unmeasured.**

### Normalized scores (1–100)

- **Tool use: 44/100.** Down one, and the reason is new evidence rather than revised judgement. The two anchors from the first pass still disagree — **Terminal-Bench 2.1 at 34.5%** (Vals harness) is below the methodology's mid band, while **τ³-bench at 96.0%** would be frontier if its harness were identified. What this pass adds is the **first ever category lane score for this model: BenchLM agentic at 12, ranked #119 of 128** — a bottom-quintile placement on a supported (not estimated) lane — plus **DeepSearchQA at 34.0%**, which is the more honest read of real multi-step web research than τ³'s unlabelled 96%. Still capped by the two unresolved hard zeros on GDPval-AA and CritPt, by no Tau3, MCP-Atlas or Claw-Eval figure that can be trusted, and by the fact that parallel tool calling remains a *mechanism* advantage no published harness has converted into an agentic score. A 34.5% terminal completion rate is not what an agentic tool tier looks like, and 44 says so.
- **Reasoning: 56/100.** Down two, because the new data splits the dimension cleanly in two and neither half is strong. **Up: BenchLM's Reasoning lane at 72.6** and its **Instruction Following lane at 81.1 (#58 of 148)** — the latter resolves the benchable.ai 0.0% outlier flagged in the first pass in the model's favour, and is now corroborated by two independent sources against IFBench 77%. **Down: BenchLM's Knowledge lane at 34.4 (#136 of 184)**, the unchanged **HLE 11.8%**, the unchanged **AA Intelligence Index 12.3**, and **AA-Omniscience accuracy 22.7%** against a non-hallucination rate near 20%. GPQA Diamond 79% remains the strongest single number and remains Inception's own, carrying an aggregator's label rather than an independent run. The aggregator disagreement on hallucination rate is **still unresolved** — 19.7% non-hallucination against BenchLM's 67% hallucination cannot both be true. A score above the mid band is not defensible while a third of the composite index rests on two zeros that are more likely failed runs than measurements.
- **Context window: 74/100.** *(unchanged.)* Tier mapping: 200K–500K = 65–84, with 200K as the 70 anchor. **260,000 tokens** sits above that anchor, and this remains the one dimension where the model has genuine third-party evidence rather than a vendor claim: **AA-LCR 71.7%**, now corroborated by four sources agreeing on the 260K figure (Inception, OpenRouter, Vercel, BenchLM, LM Market Cap, Krater) and a 65.5K max output. Capped because there is still **no MRCR / RULER / GraphWalks run** and no retrieval figure at any specific window length, and because a 260K ceiling is **less than half** the 1M available from several peers at comparable or lower cost.
- **Multimodal: 15/100.** *(unchanged.)* **Text-only in, text-only out** — the methodology's explicit floor, and architectural rather than an oversight. **Artificial Analysis has now joined** modelcompare.dev and Venice as an independent confirmation, listing the model as text-modality. There is no image, video, PDF or audio input path and no non-text output, so no evidence exists that could support any score above the floor.
- **Coding: 46/100.** Down six — the largest change in this file besides the Overall itself, and driven by two new independent composites that both place coding near the bottom of the field. **BenchLM's Coding lane is 16.1, ranked #130 of 150** (Estimated), and **LM Market Cap scores the Coding category 40/100 at #239 of 441**. Consistent with the long-standing picture: **SciCode 38%**, the one coding row two aggregators agreed on, and **Terminal-Bench 2.1 34.5%**. What caps it is unchanged and severe: **no SWE-bench Verified or Pro, no LiveCodeBench, no Vibe Code Bench, no DeepSWE, no AA Coding Index** — repository-scale autonomous coding is entirely unmeasured — while LM Market Cap's own Capabilities sub-signal is only 67/100. Coding subagents are an explicit Inception target use case, so this remains the dimension where the marketing and the measurements diverge most.
- **Cost efficiency: 99/100.** *(unchanged.)* The strongest dimension by a wide margin and the one the model is actually built for. **The 80% launch discount is still live** — the Inception models page carries the badge as of 2026-10-08 and BenchLM carries $0.04 / $0.15 as current on 2026-10-16. **$0.04 input / $0.15 output with $0.004 cache read** is below the methodology's ~$0.10/$0.20 = 97–99 rung, and even the $0.20/$0.75 list rate sits in that band. Independently corroborated by LM Market Cap's **Pricing signal at 100/100**, the highest-weight signal in its composite, and by AI BENCHY's earlier 22-test run for $0.031. Also new and material to real deployments: **10 million free tokens with a new API key**, and **Augment Code's measured 90% cost reduction** on context compression with processing time falling from ~150 s to 27 s. Held at 99 rather than lower only because **Inception still publishes no end date for the discount**, so it remains promotional rather than structural.
- **Overall Score: 47/100.** *(was 49.)* Half-up mean of the five quality dims (44 + 56 + 74 + 15 + 46) / 5 = 47.0 → **47**. The mean is dragged down almost entirely by the text-only Multimodal floor of 15; on the four text dimensions alone the model averages 55.0, which is the more useful way to read it. **Best fit, with the latency caveat now added:** a very cheap, very fast **text-only** reasoning model for high-volume, batch inner-loop work — search reranking, query rewriting, classification, extraction, **context compaction** (the one production use case with a published measurement behind it), tool selection and subagent steps. **The first pass's "anywhere a 2,000-token answer landing in under two seconds changes the product" framing has to be qualified: Artificial Analysis measures ~3.5 s to first token.** For long generations the 850+ tok/s throughput still dominates total latency and the product still wins; for short interactive replies where time-to-first-token is the whole experience, it does not. **Not** a fit for anything multimodal (no vision path at all), not for long-context above 260K, and not for repository-scale autonomous coding on current evidence.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-17
- Method: **second pass**, public internet research. Four searches. **New sources this pass:**
  - **[BenchLM `mercury-2-5`](https://benchlm.ai/compare/mercury-2-5-vs-mercury-2-5-preview) and its Inception provider page** (both 2026-10-16) — the model is **no longer unranked** (**33.8 / 33.77, Limited confidence, 6 of 639**), and the **first per-category lanes ever published for it**: Reasoning 72.6, **Instruction Following 81.1 (#58/148)**, Knowledge 34.4 (#136/184), **Coding 16.1 (#130/150)**, **Agentic 12 (#119/128)**, plus DeepSearchQA 34.0% and Terminal-Bench 2.1 (Vals) revised to 34.5%. This resolved the benchable.ai instruction-following outlier in the model's favour.
  - **[computeprices.com/models/mercury-2-5](https://computeprices.com/models/mercury-2-5)** — the load-bearing independent performance measurement: **Artificial Analysis output speed ~856.6 t/s** and **TTFT ~3,464 ms**, with the explicit finding that the latency is "slow for interactive chat where users expect immediate streaming to begin" and that "the speed advantage is diluted on short responses, where the initial latency dominates total time." Also OpenRouter's observed 661 t/s and 2.8 s TTFT at $0.04/$0.15.
  - **[lmmarketcap.com](https://lmmarketcap.com/model/inception-mercury-2-5-preview)** (2026-10-15) — Coding composite **40/100 at #239 of 441**, Overall 40, with a published signal breakdown (Pricing 100, Recency 100, Context Window 86, Output Capacity 77, **Capabilities 67**), 65.5K max output and "stable" status.
  - **[Inception models page](https://www.inceptionlabs.ai/models)** — the **80% OFF badge still present as of 2026-10-08**, 10 million free tokens per new API key, the Mercury family roster (**Mercury Voice** at 50% off with TTFT under 170 ms and 128K context, **Mercury Router**, **Mercury Decide** rated by Vals AI above Jev), and the teaser of a more capable model to come.
  - **[Inception's TIME announcement](https://www.inceptionlabs.ai/blog/mercury-2-named-to-time-s-best-inventions-of-2026)** (2026-10-15) — Mercury 2 named to TIME's Best Inventions of 2026; the **1,000+ tok/s** restatement; the portfolio timeline (Mercury 2 Feb, 2.5 Sep 8, Voice Sep 29, Router, Decide); and the "most capable model to date" teaser.
  - **[Morningstar / Business Wire](https://www.morningstar.com/news/business-wire/20260908593295/inception-launches-mercury-25-the-next-tier-of-intelligence-for-diffusion-llms)** and **[GIGAZINE](https://gigazine.net/gsc_news/en/20260909-mercury-2-5)** — the launch release restating **"jumps 10 points in intelligence"** where the blog says "40% increase," the ¥ price conversions ($0.75 ≈ ¥120/M output; $0.04 ≈ ¥6/M input), and the **Augment Code context-compression deployment at ~150 s → 27 s with a 90% cost reduction**.
  - **[krater.ai/models/mercury-2-5](https://krater.ai/models/mercury-2-5)** — independent confirmation of 260K context, 65.5K max output, $0.04/$0.15, tool calling and structured outputs, and index 12.3, with the honest caveat that the listed benchmarks are "catalog data, not Krater benchmarks."
  - **[AI BENCHY](https://aibenchy.com/)** leaderboard — Mercury 2.5 now at (high) #225 and (low) #336, replacing the first pass's "7.1, #138" citation; the rank moved because the board grew to ~426 configurations, so this is re-ranking rather than regression.
  - Retained from the first pass: Inception's launch post and Business Wire release, OpenRouter and Vercel records, Artificial Analysis figures as published on OpenRouter, modelcompare.dev, Venice, and orcarouter.ai's Mercury 2.5 vs Preview analysis.
  - Conflicts recorded and their resolution: **TTFT sub-300 ms vendor claim vs ~3,464 ms measured** (measurement preferred, and the reason the fit statement changed); **benchable.ai 0.0% Instruction Following vs BenchLM's 81.1 lane and IFBench 77%** (the 0.0% is now treated as the outlier); **AA 19.7% non-hallucination vs BenchLM 67% hallucination** (still unreconcilable after 15 more days); **"10 points" vs "40% increase"** as two framings of one vendor delta; **856.6 t/s vs 661 t/s** as first-party vs routed throughput. Scores are normalized 1–100 interpretations per `../../model-comparison.md`, not official vendor scores.
- Future sources: add a new file next to this one using the same headings. **Re-run when:** (1) Inception publishes per-benchmark values for the ten benchmarks it references — Tau3Bench Telecom, AA-LCR and DSQA are named but still unlevelled, which is the single biggest remaining gap; (2) the 80% launch discount's end date is published, or the price snaps back to $0.20/$0.75; (3) Artificial Analysis resolves the ~3.5 s TTFT measurement, since the entire latency proposition depends on it; (4) an independent lab reproduces the throughput claim; (5) Inception ships "our most capable model to date," which by its own framing would supersede this one. **Note for any re-check:** BenchLM's GPQA-D 79% and IFBench 77% are Inception's own launch numbers carrying aggregator labels — still not independent measurements, and orcarouter.ai flags exactly this. AI BENCHY's "~100B parameters" figure for this model is a family-record estimate, not a vendor count.