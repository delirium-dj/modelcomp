# Grok 4 Fast — findings by GPT-6 Luna

- Source: xAI/Grok 4 Fast Reasoning
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4 Fast
- **Short description:** xAI's cost-efficient, 2M-context model family, advertised for reasoning and search-heavy tasks. xAI described reasoning and non-reasoning modes as one unified architecture, while exposing separate API model IDs for the two modes; this report scores the reasoning ID.
- **Provider / access:** xAI API; launch announcement listed `grok-4-fast-reasoning` and `grok-4-fast-non-reasoning`. xAI also announced listings on OpenRouter and Vercel AI Gateway. Current direct xAI availability is unconfirmed: the current xAI public Models and Pricing pages no longer list Grok 4 Fast; OpenRouter retains a model page, while Artificial Analysis marks its entry deprecated and recommends Grok 4.1 Fast. No xAI retirement notice was found.
- **Release / knowledge:** Announced **2025-09-19**. OpenRouter lists a **2025-09** knowledge cutoff; xAI's announcement does not specify one.
- **IDs:** `grok-4-fast-reasoning` and `grok-4-fast-non-reasoning` per xAI's launch announcement. The OpenRouter catalog entry is `x-ai/grok-4-fast`, with reasoning configurable. No currently maintained xAI model-specific documentation page was found.
- **Context window:** **2,000,000 tokens**, per xAI's announcement and OpenRouter listing. Vals AI reports 2M max output, but xAI's launch page does not specify an output cap; that max-output figure is not treated as vendor-confirmed.
- **Modalities:** Text and image input, text output (Artificial Analysis); Vals also lists file input. xAI describes image/video understanding when using X search, which is not evidence of direct video-input support. Reasoning and non-reasoning modes, web/X search and code-execution tool use were described at launch.
- **Pricing (as of 2026-10-30; launch pricing):** Below 128K prompt tokens, **$0.20 input / $0.50 output per MTok**; at or above 128K, **$0.40 / $1.00**. Cached input is **$0.05/MTok**. The current xAI public pricing table omits Grok 4 Fast, so these are launch-announced prices, not a verified current direct-API quote. Tool calls can incur separate invocation charges.
- **Architecture:** Proprietary; parameter count and weights are undisclosed. xAI described a unified architecture for reasoning and non-reasoning modes, served via separate API IDs.
- **Lifecycle caveat:** Artificial Analysis labels the model deprecated and recommends Grok 4.1 Fast. That is the evaluator's lifecycle designation, not a verified xAI shutdown announcement.

### Raw benchmarks found

The xAI launch table reports vendor-run **pass@1** results. Vals AI reports independent tests of the **Grok 4 Fast (Reasoning)** route; its Terminal-Bench entry is version 2.0 and must not be compared as though it were Terminal-Bench 2.1. Artificial Analysis' current page says it no longer has publicly available API results for this model. Third-party benchmark aggregations sometimes surface older snapshots, which are labeled below and not conflated with current AA results.

Agent / tool use:

- BrowseComp: **44.9%**; Reka Research Eval: **66.0%**; X Bench Deepsearch (Chinese): **74.0%**; X Browse (internal xAI benchmark): **58.0%** (xAI launch table, pass@1). These search results are vendor-reported and are not equivalent to general computer-use or business-agent benchmarks.
- Tau-squared-bench: **65.8%**, as listed by BenchLM with its source linked to Artificial Analysis' Grok 4 Fast page. Artificial Analysis currently reports no publicly available API result on that page, so this is retained as a third-party historical listing, not a current AA result.
- No verified Terminal-Bench 2.1, Tau3-Banking, GDPval-AA, OSWorld/AutomationBench, or Claw-Eval result found.

Reasoning / knowledge:

- GPQA Diamond: **85.7%**; AIME 2025, no tools: **92.0%**; HMMT 2025, no tools: **93.3%**; HLE, no tools: **20.0%** (xAI launch table, pass@1).
- GPQA Diamond: **85.35% ± 1.79**; MMLU-Pro: **79.70% ± 0.39** (Vals AI, Grok 4 Fast Reasoning route). Vals' GPQA and xAI's 85.7% are separately sourced measurements, not a single result.
- BenchLM's 2026-10-29 page relays older Artificial Analysis-linked entries of **84.7% GPQA**, **19.1% HLE**, and **17.9% Intelligence Index**. The AA model page now reports no publicly available API result for this model; these figures are not used to replace the launch or Vals results.
- No verified LCR/MRCR or CritPt score from a current, directly inspectable evaluation result found.

Coding:

- LiveCodeBench (January–May): **80.0%** (xAI launch table, pass@1).
- LiveCodeBench: **78.97% ± 1.10**; Vibe Code Bench v1.1: **0.00% ± 0.00**; SWE-bench (Vals table, benchmark name shown without a Verified suffix): **45.40% ± 2.23**; Terminal-Bench 2.0: **29.21% ± 4.85** (Vals AI, Grok 4 Fast Reasoning route).
- BenchLM lists **83.2% AA LiveCodeBench**, sourced to an Artificial Analysis leaderboard; this is a distinct aggregator/measurement from both xAI's January–May table and Vals AI's result.
- No verified SWE-bench Verified, SWE-bench Pro, SciCode, or DeepSWE result for this exact endpoint found.

Long context / multimodal:

- xAI and OpenRouter state a 2M-token context window. No verified MRCR, RULER, or other retrieval accuracy at a stated long input length was found.
- Image input is listed by Artificial Analysis; Vals lists text, image, and file input. Text output only is listed by Artificial Analysis. No direct video-input support or non-text output was verified for this API route.

### Normalized scores (1–100)

- **Tool use: 65/100.** xAI reports strong search results (BrowseComp 44.9%, Reka Research Eval 66.0%), and BenchLM relays a historical Tau² result; the low Vals Terminal-Bench 2.0 result and missing TB2.1/Tau3/GDPval-AA/OSWorld/Claw-Eval cap the general agent score.
- **Reasoning: 84/100.** GPQA Diamond is 85.7% (xAI) / 85.35% (Vals), with AIME 92.0% and HMMT 93.3%; HLE is 20.0%, below the project's frontier reference, and no current AA Index or verified long-context reasoning score is available.
- **Context window: 96/100.** The vendor-announced 2M window is in the ≥1M tier; no retrieval accuracy at 512K+ supports a 100.
- **Multimodal: 65/100.** Image input is documented by independent model listings; output is text-only, and search-based video understanding does not establish direct video input.
- **Coding: 70/100.** LiveCodeBench is around 79–80% across xAI and Vals measurements, but Vals reports 0% Vibe Code Bench, 45.40% generic SWE-bench, and 29.21% Terminal-Bench 2.0; no verified Pro/Verified/SciCode/DeepSWE result supports a frontier rating.
- **Cost efficiency: 99/100.** Launch rates of $0.20/$0.50 per MTok plus $0.05 cached input are exceptionally low; the prompt rate doubles at 128K and current direct availability/pricing is unconfirmed.
- **Overall Score: 76/100.** Half-up mean of the five quality dimensions: `(65 + 84 + 96 + 65 + 70) / 5 = 76`. A strong value-oriented search/reasoning model with a large stated context; weak Vals coding-agent results and uncertain current direct availability are material caveats.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-30
- Method: Independent public research across xAI's launch announcement, Vals AI's exact reasoning-route benchmark page, Artificial Analysis' model page, OpenRouter's model listing, and BenchLM's sourced benchmark rollup. Vendor-reported figures, independent measurements, and older aggregator snapshots are identified separately. Current xAI catalog omission is treated as an availability caveat, not proof that the endpoint was shut down. Scores are normalized interpretations, not official ratings.
- Sources: [xAI Grok 4 Fast announcement and vendor benchmark tables](https://x.ai/news/grok-4-fast); [Vals AI Grok 4 Fast Reasoning benchmarks](https://www.vals.ai/models/grok_grok-4-fast-reasoning); [Artificial Analysis Grok 4 Fast Reasoning](https://artificialanalysis.ai/models/grok-4-fast-reasoning); [OpenRouter model listing](https://openrouter.ai/x-ai/grok-4-fast/benchmarks); [BenchLM sourced benchmark rollup](https://benchlm.ai/models/grok-4-fast-reasoning); [xAI current Models page](https://docs.x.ai/developers/models); [xAI current Pricing page](https://docs.x.ai/developers/pricing).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
