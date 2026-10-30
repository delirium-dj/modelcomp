# GPT-5.1 Codex — findings by GPT-6 Luna

- Source: OpenAI/GPT-5.1 Codex
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1 Codex
- **Short description:** OpenAI's GPT-5.1 variant optimized for agentic software engineering, interactive coding, and long-running coding tasks. It is a distinct model ID from GPT-5.1, GPT-5.1 Codex Mini, and GPT-5.1 Codex Max; no scores from those siblings are transferred here.
- **Provider / access:** OpenAI's native `gpt-5.1-codex` Responses API route is shut down (2026-07-23). As of this report date, OpenRouter lists `openai/gpt-5.1-codex` via an Azure endpoint, with a 400K context and function/tool support. OpenAI's original API was Responses-only; OpenRouter provides its own normalized interface. No current OpenCode Zen route verified.
- **Release / knowledge:** Released **2025-11-13**. OpenAI documents a **2024-09-30** knowledge cutoff; Artificial Analysis independently lists the same date.
- **IDs:** OpenAI model ID `gpt-5.1-codex`; OpenRouter route `openai/gpt-5.1-codex` (current endpoint suffix `gpt-5.1-codex-20251113`). The first-party snapshot is shut down; the separately hosted OpenRouter/Azure route was listed as available when checked.
- **Context window:** **400,000 total tokens; 128,000 maximum output** in OpenAI's model documentation and OpenRouter's endpoint record.
- **Modalities:** Text and image input; text output. Reasoning effort is supported. OpenAI documents function calling and web search tools through Responses; OpenRouter lists function/tool-choice support and an `apply_patch` native tool. No audio or video input/output verified.
- **Pricing (as of 2026-10-30):** OpenAI's historical first-party rate was **$1.25/MTok input, $0.125 cached input, and $10/MTok output**. OpenRouter's currently listed Azure endpoint is **$1.25/$10 per MTok**, with cached input at **$0.13/MTok**. The native API is shut down; do not present its old rate as currently purchasable from OpenAI. No free tier verified.
- **Architecture:** Proprietary, closed weights; OpenAI publishes no parameter count or detailed architecture. It supports reasoning and is tuned for code/agent workflows.
- **Evaluation caveat:** Scores below combine Artificial Analysis' historical exact-model measurements (some transcribed in BenchLM), Vals AI's exact-model leaderboards, and OpenRouter's Design Arena data. They are third-party tests with different prompts, harnesses, and reasoning settings. Artificial Analysis says this model is deprecated and only continues the default 10K-input workload; its current Intelligence Index is N/A. BenchLM's 53.43/100 aggregate covers only 16 of 724 benchmarks and is partial, so it is not used as this report's Overall.

### Raw benchmarks found

Agent / tool use:

- **τ²-bench: 83%** (Artificial Analysis result as transcribed by BenchLM; τ² is not τ³-Banking).
- **Gert Labs: 49.68%** (Gert Labs ranking as transcribed by BenchLM).
- **JobBench: 26.2%** (JobBench paper, as transcribed by BenchLM).
- No verified Terminal-Bench 2.1, GDPval-AA, OSWorld, or Claw-Eval result found for this exact model ID.

Reasoning / knowledge:

- **AA-GPQA Diamond: 86.0%**; **AA-HLE: 25.7%**; **CritPt: 5.7%**; **AA-IFBench: 70.0%** (Artificial Analysis historical benchmark record as transcribed by BenchLM).
- **AA-Omniscience Accuracy: 39.9%**; **Hallucination Rate: 77.2%**; **AA-LCR: 69.3%** (same historical AA record). The LCR figure is an AA long-context evaluation, not proof of high-accuracy retrieval across the entire 400K window.
- BenchLM lists an Artificial Analysis Intelligence Index value, but AA's current page marks the index unavailable/N/A for this deprecated model; I do not use that stale composite as a current score.

Coding:

- **LiveCodeBench (Vals): 85.55% ± 1.00, rank 31/143**.
- **Vibe Code Bench v1.1 (Vals): 13.12% ± 3.16, rank 101/122**.
- No verified exact-model SWE-bench Verified, SWE-bench Pro, Terminal-Bench, DeepSWE, SciCode, or SWE-Atlas result found. Do not substitute a GPT-5.1 or Codex sibling's coding score.

Long context:

- Context limit is 400K. **AA-LCR: 69.3%** is the exact-model result listed by Artificial Analysis/BenchLM; no verified ≥512K retrieval measurement is possible within the documented 400K window.

Multimodal:

- **AA-MMMU-Pro: 72.5%** (Artificial Analysis historical result as transcribed by BenchLM), consistent with the documented image-input capability.
- OpenRouter's Design Arena listing gives **Website ELO 1160** (win rate 56.1%, rank 89 in that category). This is a third-party visual/web-generation preference result, not a vendor benchmark.

### Normalized scores (1–100)

- **Tool use: 74/100.** The exact-model τ²-bench result is strong at 83%, while Gert Labs 49.68% and JobBench 26.2% are mixed; no Terminal-Bench, GDPval-AA, or OSWorld result verifies broader agent performance. Sources: Artificial Analysis via BenchLM; JobBench paper.
- **Reasoning: 76/100.** AA-GPQA Diamond 86.0% and HLE 25.7% are solid, while CritPt 5.7% and Omniscience accuracy 39.9% cap the score; AA's current overall index is unavailable. Source: historical Artificial Analysis results via BenchLM.
- **Context window: 78/100.** A 400K context fits the upper 200K–500K rubric tier; AA-LCR is 69.3%, but no 512K+ retrieval evidence applies and the 400K maximum itself prevents the 1M tier. Sources: OpenAI model documentation; Artificial Analysis via BenchLM.
- **Multimodal: 65/100.** Text/image input with text output belongs in the image-input band; AA-MMMU-Pro is 72.5%, with no verified audio or video support. Sources: OpenAI model documentation; Artificial Analysis via BenchLM.
- **Coding: 77/100.** Vals LiveCodeBench is strong at 85.55%, but Vibe Code Bench v1.1 is 13.12% (rank 101/122) and no SWE-bench or terminal-coding result was verified. Sources: Vals AI; BenchLM source-linked benchmark index.
- **Cost efficiency: 79/100.** The historical/current hosted listed price is $1.25/$10 per MTok: moderate input cost but expensive output relative to the rubric's ~$0.60/$2.20 reference. First-party pricing is no longer purchasable from OpenAI; OpenRouter's Azure route was listed at that rate. Sources: OpenAI model page; OpenRouter endpoint record.
- **Overall Score: 74/100.** Arithmetic mean of the five quality dimensions, excluding cost: `(74 + 76 + 78 + 65 + 77) / 5 = 74`. A good fit for image-aware, reasoning-intensive coding agents where the third-party route is available; evidence gaps on SWE-bench and broader terminal/desktop tasks, plus first-party shutdown, are important caveats.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-30
- Method: Checked OpenAI's exact model documentation and deprecation schedule, OpenRouter's current model and endpoint API records, Artificial Analysis' archived exact-model page, BenchLM's source-linked benchmark table, and Vals AI's exact-model leaderboard. Kept the first-party July 2026 shutdown separate from the currently listed OpenRouter/Azure endpoint; did not transfer results from GPT-5.1, Codex Mini, or Codex Max.
- Sources: [OpenAI GPT-5.1-Codex model documentation](https://developers.openai.com/api/docs/models/gpt-5.1-codex); [OpenAI API deprecations](https://developers.openai.com/api/docs/deprecations); [OpenRouter GPT-5.1-Codex model page](https://openrouter.ai/openai/gpt-5.1-codex); [OpenRouter endpoint record](https://openrouter.ai/api/v1/models/openai/gpt-5.1-codex-20251113/endpoints); [Artificial Analysis GPT-5.1 Codex (High)](https://artificialanalysis.ai/models/gpt-5-1-codex); [BenchLM benchmark index and source links](https://benchlm.ai/models/gpt-5-1-codex); [Vals AI GPT 5.1 Codex benchmarks](https://www.vals.ai/models/openai_gpt-5.1-codex); [JobBench paper](https://arxiv.org/abs/2605.26329).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
