# Step 5 Preview — findings by GPT 6.1 Sol

- Source: StepFun / `step-5-preview`
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Step 5 Preview
- **Short description:** StepFun's open-weight sparse MoE for general software engineering, long-horizon agents and professional knowledge work, with an emphasis on finance. It is a general-purpose model rather than a finance-only endpoint [S1,S2].
- **Provider / access:** Official OpenAI-compatible Chat Completions at `https://api.stepfun.ai/v1`, model `step-5-preview`; official docs also describe Messages API effort control. OpenRouter serves `stepfun/step-5-preview` through several providers; local weights support vLLM/SGLang [S1,S2,S5,S6]. The repository's `opencode/step-5-preview` prefix is not itself verified as a current Zen route.
- **Release / knowledge:** September 2026. AA dates release **September 18** while Vals dates it **September 28**; HF repositories were created September 20 and the inspected OpenRouter serving snapshot is **20261008** [S3–S6]. These are distinct dated records, not a confidently resolved single worldwide release date. Knowledge cutoff not verified.
- **IDs:** `step-5-preview`, `stepfun/step-5-preview`, weights `stepfun-ai/Step-5-Preview` (FP8) and `stepfun-ai/Step-5-Preview-BF16`; separate NVFP4 artifact also found in publisher search. No free hosted ID verified [S1,S2,S6].
- **Context window:** Official hosted docs: **1M** context, maximum input **1M**, maximum output **64K** [S2]. The weights card instead advertises output up to **1M**, with serving examples explicitly counting input+output together [S1]. Vals advertises **1M** context/output and requests **1,024,000** output tokens in its settings [S4]. These are configuration claims, not proof that an arbitrary 1M input plus 1M output request is accepted. Current OpenRouter examples: StepFun **1,000,000/64,000** context/output, DeepInfra **1,048,576/65,536**, InferenceNet **1,048,576/131,072**, Featherless **262,144/32,768** [S6].
- **Modalities:** Official model/developer guides confirm native text/image/video input and text output, including actual `video_url` examples. HF specification table and AA/Vals summaries list only text/image, despite HF introductory prose also mentioning video [S1–S4,S5]. Video support is verified for the official service, not assumed for every evaluator/provider. Tool calling, streaming, JSON Schema/JSON mode, cache and low/medium/high reasoning effort are documented [S2]. No native audio input/output or image generation established.
- **Pricing (as of 2026-10-20):** Official **$1.00 input / $2.70 output / $0.10 cache-hit input per 1M**; cache-miss pricing includes cache writing, and reasoning tokens are billed as output [S7]. AA and Vals corroborate input/output prices [S3,S4]. OpenRouter InferenceNet advertises **$0.05/M** cache reads, distinct from the first-party **$0.10** [S6]. AA measures about **$1.03/task** on its Intelligence Index [S3]. Open weights do not make self-hosted hardware free.
- **Architecture:** **600B total / 27B active** sparse MoE, FP8/BF16 weights [S1,S3]. **StepFun Model License 1.0**, described as Apache-style with additional attribution/commercial conditions; it is not plain Apache 2.0 or MIT [S1,S8].

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **33.3%**, directly viewed official weights-card chart, **High** reasoning [S1]. Independent Vals measures **31.82% ±2.62**, rank **18/51**, a compatible nearby estimate rather than an identical number [S4].
- Agents' Last Exam ALE-CLI: **29.5** reported score; GDPval-AA **v2.1 1566 Elo**; DRACO **83.3**, directly viewed official chart [S1]. The card says GDPval is sourced from AA as of **2026-09-20**, so its repetition is not an independent StepFun rerun.
- Vendor-attributed Terminal-Bench 2.1 **85.0%**, Toolathlon **74.1%**, MCP Atlas **85.6%**, AutomationBench **44.0%**, BrowseComp **88.7%** and JobBench **59.0%** appear in BenchLM [S9]. The official marketing page rendered only an app shell, and those rows were not in the directly viewed HF chart; retained as secondary-attributed evidence, not claimed primary extraction.
- Vals professional work: Finance Agent v2.1 **58.90% ±2.05** (rank **21/27**), EMB v1.1 **69.55% ±2.49**, SRE Bench **0.38% ±0.38** [S4]. Broad capability is uneven despite strong marketing.
- Claw-Eval / ClawProBench / Tau3-Banking: no verified public score found in inspected material.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **44**, independent **v4.3.2**, not a percentage. AA measures **92.9 output tokens/s**, **2.55s TTFT** and **160M** evaluation output tokens [S3]. BenchLM's **43.7** is compatible with rounding; its own **69.57/100** aggregate and rank **19/956** use another method [S9].
- GPQA Diamond **93.5%**, HLE **46.5%**, CritPt **20.9%**: BenchLM's source-attributed figures [S9], not independently exposed in the rendered AA summary or inspected HF chart. They are supporting secondary evidence and are not silently promoted into three independent measurements.
- Vals ProofBench v1.1: **42.00% ±4.96**, Vals Science Index **29.58% ±1.10**, MysteryMechanism **18.47% ±2.61** [S4]. These illustrate a harder-science/reliability ceiling despite high GPQA/HLE reports.
- Omniscience accuracy **41.5%**, hallucination rate **43.0%** and MLCR **16.7%** are secondary AA-attributed BenchLM rows only [S9]; no direct submetric replication claimed.

Coding:

- DeepSWE v1.1: **67.7%**, directly viewed official chart; card specifies SWE-agent, temperature **1.0**, top-p **0.95**, High reasoning [S1].
- ProgramBench: **80.5**, StepCodeBench **49.0**, directly viewed official chart [S1]. Exact task-set/scoring definition for ProgramBench is not exposed there; do not compare its 80.5 mechanically with another evaluator's similarly named suite.
- Vals Vibe Code Bench v1.1: **70.40% ±4.27**, rank **41/115**; Code Migration v1.1 **47.00% ±3.43**; SWE-bench Multimodal **40.83% ±2.25** [S4].
- SciCode **58.9%**, sweMarathon **72.7%**, MLS-Bench Lite **40.5%** are vendor-attributed/AA-attributed BenchLM rows, not numbers extracted from the inspected primary chart [S9].
- Conventional SWE-bench Verified / SWE-Pro / LiveCodeBench: no verified exact-model number found in inspected primary/independent pages. Vals IOI **38.06% ±6.69** is retained under its actual benchmark name [S4].

Long context:

- **1M** capacity supported by official docs, weights deployment instructions and AA [S1–S3].
- AA-LCR **88.3%** appears in BenchLM with vendor attribution [S9]; no verified **98% retrieval at 512K+**, MRCR or RULER result directly inspected. LCR is not automatically a full-window needle-retrieval score.

Multimodal:

- Vals SWE-bench Multimodal **40.83% ±2.25**, direct independent evidence [S4].
- MMMU-Pro vendor-attributed **76.0%** versus AA-attributed **76.4%** on BenchLM [S9]; different harness/subset/rounding could explain the difference, but no controlled rerun establishes the cause.
- Official video input is supported in MP4/QuickTime/Matroska, URL/Base64/Files API, with under **128 MB** individual MP4 URLs and under **5 minutes** recommended [S2,S5]. No inspected LVBench/native-audio result justifies extrapolating beyond that documented coverage.

### Search trail and conflicts

Three fresh search engines were queried: [Bing `"Step 5 Preview" benchmark official`](https://www.bing.com/search?q=%22Step+5+Preview%22+benchmark+official&setlang=en&cc=us) (no results), [Google `"step-5-preview" model card StepFun`](https://www.google.com/search?q=%22step-5-preview%22+model+card+StepFun&hl=en) (JavaScript interstitial), and [Brave `"Step 5 Preview" independent benchmark review`](https://search.brave.com/search?q=%22Step+5+Preview%22+independent+benchmark+review) (429). An additional [official-publisher HF search](https://huggingface.co/api/models?author=stepfun-ai&search=Step-5&limit=10) located actual weights/cards. Direct official developer documentation, the primary benchmark image, AA, Vals and provider APIs supplied the usable evidence.

Key distinctions: **September 18 vs September 28** release metadata remains unresolved; **1M output weights/evaluator claims vs 64K first-party API** are configuration-specific; **video enabled in official API vs absent from evaluator summaries** is directly resolved through current request examples. **33.3% vs 31.82% TB4** is a small evaluator difference, not a contradiction warranting cherry-picking. The $1/$2.70 token tariff does not imply fast or cheap completion on every task: Vals displays **69m29s** aggregate latency, while AA's token-rate metric measures only output emission [S3,S4].

### Normalized scores (1–100)

- **Tool use: 88/100.** Primary TB4 33.3% and independent 31.82%, GDPval 1566 and varied work evaluations support strong agents; weak SRE and mixed professional-task ranks cap frontier claims [S1,S4].
- **Reasoning: 90/100.** Independent AA index 44, secondary GPQA/HLE evidence and direct Vals proof results support strong reasoning; uneven harder-science results and source coverage prevent a maximum [S3,S4,S9].
- **Context window: 95/100.** Verified 1M model/official-service capacity meets the 95–100 tier; no high-accuracy 512K+ retrieval result supports 100, and actual provider output/context caps vary [S1–S3,S6].
- **Multimodal: 83/100.** Official image/video API plus measured multimodal coding qualify for the visual/video band; audio/non-text output and broad video-accuracy measurements are absent [S2,S4,S5].
- **Coding: 89/100.** Exact DeepSWE 67.7%, measured Vibe 70.40% and migration 47% support substantial engineering skill; incomplete mainstream SWE/LCB coverage and task variability cap the score [S1,S4].
- **Cost efficiency: 90/100.** $1/$2.70 with $0.10 cache and AA $1.03/task offers good paid value; reasoning-token billing, verbosity and long agent completion times limit efficiency [S3,S4,S7].
- **Overall Score: 89/100.** Half-up mean `(88 + 90 + 95 + 83 + 89) / 5 = 89`; cost excluded. Best fit: long-context software/analytical agents with explicit provider limits and measured workload latency.

### Sources

- [S1] https://huggingface.co/stepfun-ai/Step-5-Preview/raw/main/README.md and https://cdn-uploads.huggingface.co/production/uploads/65dc9de42a6348b052a3286e/mfY2eltwq9TlXWlK6lx7K.png — official card, directly viewed chart, deployment and evaluation notes.
- [S2] https://platform.stepfun.ai/docs/en/guides/models/step-5-preview — exact model ID, input/output limits and supported service features.
- [S3] https://artificialanalysis.ai/models/step-5 — independent model evaluation and correct evaluator slug.
- [S4] https://www.vals.ai/models/stepfun_step-5-preview — independent detailed results, uncertainty, settings and date.
- [S5] https://platform.stepfun.ai/docs/en/quickstart/overview — actual official Chat Completions URL and image/video request examples.
- [S6] https://openrouter.ai/api/v1/models/stepfun/step-5-preview/endpoints — actual provider-specific context/output, rates, precision and dated serving snapshot.
- [S7] https://platform.stepfun.ai/docs/en/guides/pricing/details — official prices, cache/reasoning billing and rate tiers.
- [S8] https://huggingface.co/stepfun-ai/Step-5-Preview/raw/main/LICENSE.txt — exact custom model licence.
- [S9] https://benchlm.ai/models/step-5-preview — secondary benchmark discovery and provenance, updated 2026-10-19; attributed rows explicitly separated from directly verified measurements.

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-20
- Method: Independent sequential public-web research, at least three engine searches plus official-publisher search, primary model/docs/benchmark-image inspection, independent AA/Vals comparison and live provider inspection. No peer findings read. Scores are normalized interpretations, not official performance percentages.
