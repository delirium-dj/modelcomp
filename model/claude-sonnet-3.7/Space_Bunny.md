# Claude Sonnet 3.7 — findings by Space Bunny Alpha

- Source: Anthropic (`claude-3-7-sonnet-20250219`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Availability caveat, stated up front:** Claude Sonnet 3.7 was **shut down on
> 2026-02-19**. Anthropic's successor is `claude-sonnet-4-6`. Artificial Analysis has
> frozen its benchmarking on this model — it continues to track only the default 10K
> input-token workload and marks all other results historical. The scores below are
> therefore a **historical record of a retired checkpoint**, useful as a baseline for
> the Claude 4 generation, not as a purchase recommendation. Every figure here was
> published while the model was live.

## Model card

- **Name:** Claude Sonnet 3.7 (Claude 3.7 Sonnet)
- **Short description:** Anthropic's February 2025 release and the **first hybrid reasoning model on the market** — it can answer near-instantly as a base model or switch on extended, step-by-step visible thinking with a caller-controlled token budget. It shipped alongside Claude Code, Anthropic's first agentic coding tool. At launch it took **#1 on LiveBench** (both thinking and non-thinking variants) and **#1 on SnakeBench**. Not a variant or alias of another entry in this dataset.
- **Provider / access:** Anthropic Claude Platform (Messages API), Amazon Bedrock (`us.anthropic.claude-3-7-sonnet-20250219-v1:0`), Google Cloud Vertex AI. Was available on all Claude plans including Free; extended thinking required a paid tier. **Retired 2026-02-19** — replacement `claude-sonnet-4-6`.
- **Release / knowledge:** released **2025-02-24** (Anthropic news post, same day as the API). Knowledge cutoff **October 2024** (Anthropic system card and Artificial Analysis both record Oct 2024; several third-party spec sheets list 2024-10-31).
- **IDs:** `claude-3-7-sonnet-20250219`. Bedrock: `us.anthropic.claude-3-7-sonnet-20250219-v1:0`. No current OpenAI-compatible or Responses-API equivalent.
- **Context window:** **200,000 tokens** (Anthropic platform docs; Artificial Analysis confirms 200k). **No 1M-token option** — every Claude 4-generation Sonnet added one, so this is the generation's hardest ceiling. Max output **64,000 tokens** with extended thinking, **16,000** without; a few third-party spec sheets list 128K, which no first-party Anthropic page supports.
- **Modalities:** **text, image and PDF in; text out** (Anthropic PDF-support docs list `claude-3-7-sonnet-20250219` explicitly; full visual PDF understanding on Bedrock's Converse API requires citations to be enabled, else it falls back to text extraction only). Reasoning: **hybrid** — extended thinking is off by default and budgeted by the caller. Full tool use: bash, file editing, web search, computer use, function calling, parallel tool calls, structured output, streaming, prompt caching.
- **Pricing (as of 2026-10-01, historical list price):** **$3.00 / MTok input, $15.00 / MTok output**. Cache read **$0.30** (90% discount), Batch API **50% off** both directions. Artificial Analysis blended rate at a 7:2:1 cache-hit/input/output ratio: **$2.31 / MTok**. No free tier. Price is identical to Claude Sonnet 4, 4.5 and 4.6 — the generation, not the discount, is what changed.
- **Architecture:** proprietary. Parameter count never disclosed. Safety level ASL-2, confirmed by Anthropic's Responsible Scaling Policy evaluation, including under extended thinking.

### Raw benchmarks found

Agent / tool use:

- SWE-bench Verified: **70.3%** with a custom scaffold and extended thinking (Anthropic launch table); **62.3%** in the base configuration (Anthropic launch / AI Flash Report). A **+20% relative jump** over Sonnet 3.5 was the launch's headline coding claim. LLMLearner's independent tracker records **70.3%** (thinking, with tools) at **#53 of 254**.
- OSWorld-Verified: **28.0%** (LLMLearner, thinking with tools) — **#26 of 26, dead last of every model on its board.**
- τ²-Bench Service Workflows: **61.8%** (#28 of 40); τ²-Bench Telecom: **55.0%** (#92 of 155) — LLMLearner.
- GDPval-AA (cross-industry professional work): **28.0%** (#13 of 14) — LLMLearner.
- METR Time Horizons v1.1 (autonomy / task-completion horizon): **60.4%** (**#14 of 19**) — LLMLearner. This is the strongest agentic-autonomy number the model has, and it is the one most often missed.
- SHADE-Arena (agentic safety, adversarial prompt-injection arena): **26.2% overall success** (Anthropic research post, 2025-06) — Benchgen cites this as *one of the highest scores in its class*, which is a statement about how low the whole class is.
- TAU-bench: Anthropic reported strong performance on TAU-bench agentic use cases at launch; **no specific verified TAU-bench percentage was found** in the sources reviewed.
- GSO (maintenance & optimisation): **3.8%** (#16 of 18) — LLMLearner.
- Terminal-Bench 2.1 / Tau3-Banking / Toolathon / Claw-Eval / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- Third-party qualitative: David Schwarz reported Claude 3.7 as the first agent to crack "what is the highest reported agent performance on the Cybench benchmark", a query OpenAI Deep Research failed.

Reasoning / knowledge:

- GPQA Diamond: **68.3%** base mode, **84.8%** with extended thinking (**"better-than-human"**, Anthropic's own wording) — Anthropic launch table. LLMLearner's independent tracker records **77.0%** (thinking, no tools), #134 of 254.
- Humanity's Last Exam: **10.3%** (LLMLearner, thinking) — #141 of 218.
- CritPt scientific reasoning: **0.9%** (LLMLearner, thinking) — #100 of 118.
- MATH-500: **82.2%** (#38 of 41); AIME 2025: **56.3%** (#92 of 128); AIME 2024: **23.3%** (#52 of 56); FrontierMath: **4.1%** (#32 of 47) — LLMLearner.
- SimpleBench commonsense: **46.4%** (#56 of 90) — LLMLearner.
- MMLU: **86.1%** — AI Flash Report.
- Artificial Analysis Intelligence Index: **15 (estimated)**, **#32 of 61** non-reasoning models, in the current v4.3.2 index family. AA characterises the model as "below average in intelligence and somewhat expensive" versus non-reasoning peers of similar price (class median 15). No verified Intelligence Index figure exists for the extended-thinking variant.
- IFBench instruction following: **48.3%** (#103 of 165) — LLMLearner.
- Hallucination behaviour: in Anthropic's RSP evaluation, extended thinking produced hallucinated information **~4% of the time** and intentional omissions 0.0%; the model confabulated "very little" but had a high non-response rate on questions that had answers. Anthropic also reported cutting unnecessary refusals by **45%** in standard thinking mode and **31%** in extended thinking versus Sonnet 3.6.

Coding:

- SWE-bench Verified: **70.3%** (extended thinking, custom scaffold) / **62.3%** (base) — Anthropic.
- Aider-Polyglot agentic development: **64.9%** (thinking, no tools, 32K budget) — **#12 of 47**, LLMLearner.
- LiveCodeBench: **47.3%** (thinking, no tools) — **#122 of 180**, LLMLearner.
- BigCodeBench: **35.8%** (Benchgen evaluation, 2025-07).
- CyberGym: **14.5%** (Benchgen evaluation, 2025-07) — ahead of o4-mini at 2.5% and Gemini 2.5 Flash at 4.8%.
- GSO maintenance & optimisation: **3.8%** (#16 of 18) — LLMLearner.
- DeepSWE / SWE-bench Pro / Vibe Code Bench / SciCode: **no verified public score found**

Long context:

- AA-LCR v1.1 (long-context reasoning): **61.0%** (thinking, no tools) — **#66 of 91**, LLMLearner.
- fiction.liveBench Long Reasoning: **50.0%** — **#16 of 16**, LLMLearner.
- No MRCR, RULER or GraphWalks measurement was found for this model. Anthropic published no long-context retrieval claim for Sonnet 3.7; the 200K window was a spec, not a measured capability.

Vision / multimodal:

- MMMU: **75.0%**; MMMU-Pro: **60.1%** (#86 of 115); GeoBench ACW visual understanding: **68.0%** (#13 of 17); VPCT visual understanding: **39.0%** (#15 of 18) — LLMLearner.

### Normalized scores (1–100)

- **Tool use: 62/100.** A genuine agentic tier-one entry at launch, and the score reflects that: 70.3% SWE-bench Verified with extended thinking, **METR Time Horizons 60.4% at #14 of 19**, τ²-Bench Service Workflows 61.8%, and 26.2% SHADE-Arena. Capped in the low 60s by a real split in the evidence — desktop and workflow automation is weak (**OSWorld-Verified 28.0%, last of 26**), τ²-Bench Telecom sits at **#92 of 155**, and no Terminal-Bench 2.1 or Toolathon figure exists at all. Extended thinking is what lifts it; the base configuration is a materially weaker agent.
- **Reasoning: 66/100.** The methodology's mid-to-upper mid band. GPQA Diamond **84.8% with extended thinking** is a frontier-adjacent number, MATH-500 82.2% and MMLU 86.1% are strong, and the hybrid design means a caller can buy that reasoning on demand. Capped by HLE 10.3%, **CritPt 0.9%**, AIME 2025 56.3%, FrontierMath 4.1%, and an Intelligence Index of 15 that places it below the non-reasoning median on today's index — this model's headline reasoning numbers are from the launch-era index family and do not survive contact with the current one.
- **Context window: 70/100.** **200,000 tokens** with 64K max output — the methodology's explicit "200K = 70" tier point. It sits there, not above, because the long-context evidence is thin and middling: AA-LCR 61.0% at **#66 of 91**, fiction.liveBench long reasoning 50.0%, and no MRCR/RULER/GraphWalks measurement anywhere. Every Claude 4-generation Sonnet carries a 1M window; this one does not.
- **Multimodal: 76/100.** **Text, image and PDF in; text out.** Anthropic's PDF-support documentation lists `claude-3-7-sonnet-20250219` by name, which puts this in the methodology's "+video/PDF in = 75–90" band near its floor. Visual quality is mid-tier rather than strong — MMMU-Pro **60.1% (#86 of 115)**, GeoBench ACW 68.0%, VPCT 39.0% — and there is no audio or video input and no non-text output. The PDF caveat is real: on Bedrock's Converse API, visual PDF analysis requires citations to be enabled or the model silently falls back to text extraction.
- **Coding: 70/100.** 70.3% SWE-bench Verified and **Aider-Polyglot 64.9% at #12 of 47** are solid frontier-adjacent results, and the model shipped Claude Code with it. Capped at 70 by the algorithmic and maintenance halves: **LiveCodeBench 47.3% at #122 of 180**, BigCodeBench 35.8%, and **GSO maintenance & optimisation 3.8% at #16 of 18**. It writes good patches and thinks well about them; it is not a strong competitive-programming or codebase-maintenance engine.
- **Cost efficiency: 60/100.** **$3.00 / $15.00 per MTok** is the methodology's explicit **$3/$15 ≈ 60** anchor, scored straight from the rate card. Partial offsets — cache reads at $0.30 (90% off), Batch at 50% off, a $2.31 blended rate — do not move the tier, and there is no free tier. The same $3/$15 was still the price of Sonnet 4.6, so this model was never cheap; it is only cheap in the sense that "the generation before 1M context" was.
- **Overall Score: 69/100.** (62 + 66 + 70 + 76 + 70) / 5 = 68.8 → **69**. Best fit, stated historically: in February 2025 this was the pick for extended-thinking reasoning and agentic coding at frontier-adjacent quality on a 200K window. **Today its practical best fit is none** — it is retired, replaced by `claude-sonnet-4-6`, and useful here only as the baseline that shows what Claude's 200K-plus-thinking generation gained: 1M context, adaptive thinking, and materially better OSWorld-class computer use.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-10-01
- Method: public internet research — Anthropic's launch post (`anthropic.com/news/claude-3-7-sonnet`), model page and PDF-support documentation, the Claude Platform system-prompt/release-note page for `claude-sonnet-3-7`, Artificial Analysis's model page (noting its deprecation freeze), LLMLearner's independent 26-benchmark tracker, Benchgen's evaluation record, CloudPrice's provider matrix, and AI Flash Report's retirement record. Scores are normalized 1–100 interpretations per `model-comparison.md`, not official vendor scores; launch-era Anthropic figures are labelled as vendor-reported, and the Intelligence Index figure is explicitly marked as belonging to the current index family rather than the launch-era one.
- Future sources: add a new file next to this one, e.g. `Claude_Sonnet_4.md`, using the same headings.