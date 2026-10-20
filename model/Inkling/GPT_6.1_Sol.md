# Inkling — findings by GPT 6.1 Sol

- Source: Thinking Machines Lab / `thinkingmachines/Inkling`
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling
- **Short description:** Thinking Machines Lab's open-weight multimodal MoE, designed as a customizable generalist for fine-tuning and tool-using applications. This is the 975B model, not Inkling-Small; controllable effort and native audio understanding are useful differentiators [S1,S2].
- **Provider / access:** First-party Tinker sampling and OpenAI-compatible Completions/Chat Completions at `https://tinker.thinkingmachines.dev/services/tinker-prod/oai/api/v1`, using sampler checkpoint paths; third-party OpenRouter Chat Completions serves `thinkingmachines/inkling` [S5,S6]. The local `opencode/Inkling` label is not independently established as a current Zen route.
- **Release / knowledge:** Released **2026-07-15** [S1,S3,S4]. Exact knowledge cutoff not disclosed in inspected sources.
- **IDs:** Weights `thinkingmachines/Inkling`; first-party serverless `thinkingmachines/Inkling:peft:262144:sampling-nvfp4`; OpenRouter `thinkingmachines/inkling` and verified `thinkingmachines/inkling:free` [S2,S5,S6]. No Free ID verified on Zen.
- **Context window:** Official checkpoint config sets `model_max_length: 1048576`; launch advertises up to **1M**. Tinker training offers **64K/256K**, serverless **256K**; Vals evaluates **256K** context and maximum output. OpenRouter paid DeepInfra/Together endpoints currently specify **524,288** context with **262,144/471,859** maximum completion respectively; its free first-party NVFP4 endpoint lists **1,048,576** context / **262,144** output [S1,S4–S7]. Limits belong to configurations and cannot be combined into one universal endpoint promise.
- **Modalities:** Verified text, image and audio input; text output, reasoning and tool use [S1,S2,S6]. Training includes video, and architecture mentions temporal image encoding, but the explicit supported-input contract does not establish a general native video API. Audio is **16 kHz WAV**, ideally under **20 minutes**, on the official card [S2]. No native speech generation claimed.
- **Pricing (as of 2026-10-20):** Evaluated paid inference **$1.00 input / $4.05 output / $0.17 cached input per 1M**, directly confirmed in first-party serverless pricing; DeepInfra lists **$0.95/$4.05/$0.16**, Together **$1.00/$4.05/$0.17** [S5,S6]. A real OpenRouter `:free` NVFP4 endpoint lists **$0/$0**; it is an alternative serving tier, not evidence that all paid deployments or self-hosted compute are free [S6]. Cost score below uses the paid evaluation lane, with the free alternative disclosed separately.
- **Architecture:** **975B total / 41B active**, **66** decoder layers, **6 of 256** routed experts plus **2** shared experts, hybrid local/global attention, BF16 and NVFP4 weights, **Apache 2.0** [S1,S2,S7]. No assumption of identical numerical quality across quantizations.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **63.8%**, vendor internal/best harness, effort **0.99**, temperature **1.0**, **256K** trajectory limit. Vendor assigns contaminated web-search solutions zero [S1,S2].
- Terminal-Bench 2.1 independent Vals launch evaluation: **47.57% across three full trials**, at effort **0.99**, temperature/top-p **1**, up to **256K** output [S4]. This is materially below the vendor result and is retained, not averaged away.
- MCP Atlas: official launch **76.0%**, official HF card **74.1%** [S1,S2]. Different official snapshots disagree; use the interval and preserve provenance.
- Tau3-Banking: official launch/card **23.7%**; Toolathlon Verified **45.5%**, BrowseComp with context management **77.1%** [S1,S2].
- GDPval-AA v2: official launch **1238 Elo**, HF card **1233 Elo** [S1,S2]. BenchLM later reports **1076 Elo**, AA-attributed [S8]; benchmark version and date prevent assuming an accuracy regression.
- Current Vals Index: **28.96% ±1.12**, rank **21/22**, **$1.848/test** and **17m13s** latency. Its July update preserves an older **34.10%** index and rank **30/43** [S4]. Different index populations/versions must not be compared as a controlled model change.
- Vals Terminal-Bench 4.0: **0.51% ±0.51**, rank **48/51**; SkillsBench **26.09% ±3.86**, rank **34/35** [S4]. Near-zero results are actual task measurements, not zero normalized dimension scores.
- Claw-Eval / ClawProBench: no verified public score found in inspected sources.

Reasoning / knowledge:

- GPQA Diamond: official launch/card **87.2%**, Vals **87.12% ±1.78** [S1,S2,S4]. BenchLM's vendor-attributed **87.9%** disagrees with the inspected current primary and is not preferred [S8].
- HLE text-only: official launch/card **29.7%**; HLE with tools **46.0%** [S1,S2]. Tool-augmented HLE is not unaided reasoning accuracy. BenchLM rounds no-tools to **30%** and reports later AA HLE **31.9%** secondarily [S8].
- AIME 2026: **97.1%**; IFBench **79.8%**; Global-MMLU-Lite **88.7%**, official [S1,S2].
- Artificial Analysis Intelligence Index: **25**, independently measured **v4.3.2**, xhigh. AA reports **224.0 output tokens/s**, **1.73s TTFT**, and **140M** evaluation output tokens [S3]. An index of 25 is not 25% benchmark accuracy or a percentile.
- Vals MMLU Pro: **86.30% ±0.34**; ProofBench v1.1 **0.00%**, demonstrating uneven performance across reasoning tasks [S4].
- BenchLM AA-attributed Omniscience accuracy **41.6%**, hallucination rate **67.7%**, CritPt **5.4%**, MLCR **12.2%** are secondary-only in this investigation [S8]; not independently recovered from AA's rendered submetric table and not used as precise normalization anchors.

Coding:

- SWE-bench Verified: **77.6%** official bash-only harness, corroborated by Vals **77.60% ±1.87** [S1,S2,S4]. The vendor launch explicitly sources some evaluations from external evaluators, so numerical agreement is not necessarily an independent rerun.
- SWE-bench Pro public: **54.3%**, official [S1,S2].
- LiveCodeBench: **85.52% ±1.00**, Vals [S4].
- Vibe Code Bench v1.1: **19.21% ±3.66**; Vibe Code Bench 1–100: **7.33% ±1.84**; Code Migration v1.1 **8.82% ±2.71**, Vals [S4]. These end-to-end results temper the high contest/SWE scores.
- SciCode **47.0%**, AA-attributed BenchLM secondary [S8]; DeepSWE / SWE Atlas Codebase QnA: no verified public score found in inspected sources.

Long context:

- **1,048,576** configured checkpoint tokens verified directly [S7]; real hosted limits differ as detailed above.
- AA-LCR **77.3%**, secondary BenchLM attribution [S8]. No inspected MRCR/RULER result proves **98% retrieval at 512K+**, so advertised/configured capacity is not treated as full-window retrieval accuracy.

Multimodal:

- MMMU-Pro Standard 10: **73.5%**, official; Vals MMMU Pro **78.50% ±0.99** [S1,S2,S4]. Different evaluator settings/subsets are not interchangeable.
- CharXiv RQ: **78.1% unaided / 82.0% with Python** [S1,S2].
- Audio MC **56.6%**, MMAU **77.2%**, VoiceBench **91.4%**, official at effort **0.99**. Vendor notes VoiceBench's string-matching sensitivity and an added answer-format instruction [S1,S2]. Strong speech-input tasks do not establish speech output.

### Research trail and conflicting results

Fresh searches: [Bing `"Inkling" "Thinking Machines" benchmark`](https://www.bing.com/search?q=%22Inkling%22+%22Thinking+Machines%22+benchmark&setlang=en&cc=us) returned no results; [Google `"Inkling" AI model official model card`](https://www.google.com/search?q=%22Inkling%22+AI+model+official+model+card&hl=en) returned an interstitial; [Brave `"Inkling" model independent benchmark review`](https://search.brave.com/search?q=%22Inkling%22+model+independent+benchmark+review) returned 429. An additional [official HF publisher search](https://huggingface.co/api/models?author=thinkingmachines&search=Inkling&limit=10) found exact checkpoints. Direct primary, Vals, AA and provider pages supplied the substantive evidence.

The important contradictions are not cosmetic: vendor **63.8%** versus independent **47.57%** Terminal-Bench, official **74.1/76.0%** MCP Atlas, different GDPval snapshots, and **1M** weights versus **256K/512K** hosted configurations. These remain separately labelled. The launch says some reasoning/agent results are sourced from AA, so the launch, HF and BenchLM do not constitute three independent measurements of the same number. The vendor's forecasting table explicitly uses a different earlier checkpoint; those figures are excluded from this release's quality assessment [S1].

### Normalized scores (1–100)

- **Tool use: 72/100.** Useful MCP/Toolathlon and vendor terminal performance are tempered by independent TB2.1 47.57% and TB4 0.51%; broad autonomy is not frontier-level [S1,S2,S4].
- **Reasoning: 78/100.** GPQA around 87%, unaided HLE 29.7% and AIME 97.1% support capable reasoning; AA index 25 and weak harder workflow/proof results cap consistency [S1–S4].
- **Context window: 95/100.** Publisher/configuration support 1M at the model level; no demonstrated 98% long-range retrieval justifies 100, and common hosted routes have smaller limits [S1,S5–S7].
- **Multimodal: 91/100.** Native image/audio understanding and measured vision/audio quality reach the audio-input tier; text-only output, uncertain general video contract and evaluator variation cap the score [S1,S2,S4].
- **Coding: 77/100.** SWE Verified 77.6%, SWE-Pro 54.3% and LiveCodeBench 85.52% indicate useful coding; weak Vibe, migration and terminal-generalization results cap repository-scale reliability [S1,S2,S4].
- **Cost efficiency: 86/100.** Paid $1/$4.05 inference is moderate rather than leading value for the measured quality; fast output helps, but Vals task cost/latency and extra reasoning constrain efficiency. Verified NVFP4 `:free` is disclosed separately rather than pretending this paid evaluation was free [S3–S6].
- **Overall Score: 83/100.** Half-up mean `(72 + 78 + 95 + 91 + 77) / 5 = 82.6 → 83`; cost excluded. Best fit: customizable open-weight image/audio assistants and fine-tuning, with task-specific validation for long-running coding agents.

### Sources

- [S1] https://thinkingmachines.ai/news/introducing-inkling/ — official release, measured tables, harnesses and checkpoint caveats.
- [S2] https://huggingface.co/thinkingmachines/Inkling/raw/main/README.md — official weights card, architecture, input contract and release measurements.
- [S3] https://artificialanalysis.ai/models/inkling — independent current index, modalities, throughput and prices.
- [S4] https://www.vals.ai/models/thinkingmachines_inkling — independent detailed current results, uncertainty, settings and historical launch update.
- [S5] https://tinker-docs.thinkingmachines.ai/tinker/models/ and https://tinker-docs.thinkingmachines.ai/tinker/compatible-apis/openai/ — first-party limits, exact IDs, inference versus training prices and API.
- [S6] https://openrouter.ai/api/v1/models/thinkingmachines/inkling/endpoints and https://openrouter.ai/api/v1/models/thinkingmachines/inkling:free/endpoints — actual paid/free provider limits, precision and prices.
- [S7] https://huggingface.co/thinkingmachines/Inkling/raw/main/config.json — exact 1M model-length configuration and architecture.
- [S8] https://benchlm.ai/models/inkling — secondary collection, updated 2026-10-19; discrepancies explicitly compared, not silently preferred.

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-20
- Method: Independent sequential research, three search engines plus official-publisher model search, direct official release/card/config/API docs, live provider endpoints, AA and detailed Vals evaluations. No peer findings read. Normalized scores are editorial interpretations, not official benchmark percentages.
