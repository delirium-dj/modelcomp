# Gemini 2.5 Pro — findings by GPT 6.1 Sol

- Source: Google DeepMind / `gemini-2.5-pro` (standard GA model)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google's proprietary multimodal thinking model for text/code analysis and large mixed-media inputs. This assessment targets standard Pro GA, keeping March/May previews, Deep Think and Pro TTS separate [S1,S2].
- **Provider / access:** Google AI Studio/Gemini API and Vertex AI; Google-native GenerateContent/function calling, with OpenRouter Chat Completions `google/gemini-2.5-pro` [S1,S2,S5]. No current `opencode/gemini-2.5-pro` route independently established merely from the local metadata.
- **Release / knowledge:** Initial experimental model **2025-03-25**, May preview **05-06**, June GA-era evaluation **06-05**, and model card updated **2025-06-27** [S1]. AA dates its tracked release **June 5**, while Vals lists **July 17** [S3,S4]; those records do not supersede Google's dated card. Knowledge cutoff **January 2025** [S1,S2].
- **IDs:** `gemini-2.5-pro`; the card explicitly distinguishes `gemini-2.5-pro-exp-03-25`, `gemini-2.5-pro-preview-05-06` and `gemini-2.5-pro-preview-06-05`. Bare `Gemini 2.5` is family shorthand, not another model [S1,S2]. No free Zen ID verified; historical AI Studio free-access claims were not verified as current account terms.
- **Context window:** Official card **1M input context / 64K output**; current provider listing **1,048,576** context / **65,536** maximum completion [S1,S5]. Vals' rounded **66K** output is consistent with its explicit **65,536** evaluation setting [S4]. No standard-Pro 2M endpoint verified.
- **Modalities:** Text, images, audio and video input, text output; OpenRouter also lists file input [S1,S3,S5]. Function/tool use and structured output supported. Native voice/TTS and Deep Think are separate offerings; the Gemini-family report's preview audio-output footnotes do not establish audio generation on this ID [S2].
- **Pricing (as of 2026-10-20):** Standard OpenRouter Google routes list **$1.25 input / $10 output per 1M**, cache read **$0.125**; long-prompt override **$2.50/$15/$0.25** with `min_prompt_tokens: 200000` [S5]. Flex/priority offers differ. The review describes long pricing as **>200K**, whereas machine-readable routing uses a **200,000** threshold; confirm the endpoint's boundary rule. AA and Vals independently corroborate standard input/output prices [S3,S4]. Google's direct pricing page was inaccessible in this run, so provider terms are not represented as freshly read official pricing.
- **Architecture:** Proprietary sparse MoE Transformer with native multimodal processing, trained on Google TPUs; total/active parameter counts not publicly established in inspected sources [S1,S2].

### Raw benchmarks found

Agent / tool use:

- Vals Terminal-Bench **2.0: 30.34% ±4.90**, rank **44/67**, temperature **1**, max output **65,536** [S4]. This is not Terminal-Bench 2.1 or 4.0.
- SWE-agent behavior is measured by Google's GA SWE-bench **59.6% single attempt / 67.2% multiple attempts**; Google's multi-attempt scaffold samples trajectories and re-scores them with model judgment [S1]. Not a single-rollout 67.2% success rate.
- Tau2 **54.1%**, GDPval-AA **616 Elo** and AA Agentic Index **3.5** are BenchLM's secondary AA-attributed rows [S6]. Not independently recovered from AA's rendered detailed table here, and Tau2 is not Tau3-Banking.
- Exact TB2.1 / Tau3-Banking / Claw-Eval / MCP-Atlas: no verified public score found in inspected primary/independent pages.

Reasoning / knowledge:

- GPQA Diamond GA: **86.4% pass@1**; AIME **2025 88.0%**; HLE **21.6%**, official June model card [S1].
- March experimental GPQA **84.0%**, AIME 2025 **86.7%**, HLE **18.8%**; May preview GPQA **83.0%**, AIME **83.0%**, HLE **17.8%** [S1]. These dated snapshots are retained as lineage, not combined into a synthetic GA result.
- AA Intelligence Index: **16**, independently measured **v4.3.2**, with **116.3 output tokens/s**, **25.90s TTFT**, **55M** evaluation output tokens and approximately **$0.33/task** [S3]. BenchLM's **16.1** rounds compatibly; its own **49.13/100** aggregate is a different index [S6].
- Official GA SimpleQA **54.0%**, FACTS Grounding **87.8%**, Global-MMLU-Lite **89.2%** [S1]. Different factuality suites do not measure a universal hallucination probability.
- BenchLM AA-attributed GPQA **84.4%**, HLE **22.5%**, CritPt **2.6%**, Omniscience accuracy **39.1%** / hallucination rate **90.9%** are secondary only [S6]. Neither the 90.9% attribution nor FACTS Grounding can substitute for the other's dataset/metric.

Coding:

- SWE-bench Verified GA: **59.6% single attempt**, **67.2% multiple attempts**, official [S1]. March **63.8%** and May **63.2%** are different snapshot/harness records, not GA measurements [S1].
- Independent Vals SWE-bench: **54.40% ±2.23**, rank **82/88** [S4]; a lower independent result, not silently replaced by a vendor maximum.
- LiveCodeBench GA **69.0%**, **2025-01-01 to 2025-05-01** problem window, official card. Report prose separately mentions **74.2%**; different date windows/settings are material, so the 74.2 figure is not presented as a controlled correction to the dated 69.0 result [S1,S2].
- Aider Polyglot: **82.2% diff-fenced**, average of **3 trials**, official [S1,S2].
- Vals Vibe Code Bench v1.1: **0.40% ±0.40**, rank **111/115** [S4]. This end-to-end app measure is not Reka's similarly named visual Vibe-Eval.
- SciCode **46.3%**, AA Coding Index **33.3**: secondary BenchLM attribution [S6]. No verified exact GA DeepSWE/SWE-Pro/Atlas result found in inspected pages.

Long context:

- Official harder **MRCR v2, 8 needles: 58.0% up-to-128K average / 16.4% exactly-1M pointwise**, GA [S1, PDF p.6]. The card explicitly notes changed methodology from easier earlier MRCR variants.
- Older preview/experimental MRCR **82.9/83.1% at 1M** and **93.0/94.5% at 128K** are from an easier benchmark and different snapshots [S1]. They do not disprove the harder GA result or establish 98% reliable million-token recall.
- AA-LCR **69.0%** is a secondary BenchLM attribution [S6]. Capacity, easy retrieval and harder long-context reasoning remain separate.

Multimodal:

- Official GA MMMU **82.0%**, Reka Vibe-Eval **67.2%**, VideoMME with audio/visual/subtitles **86.9%**, VideoMMMU **83.6%** [S1]. MMMU is not MMMU-Pro; visual Vibe-Eval is not Vals Vibe Code Bench.
- The technical report discusses up to **3 hours** of video using lower media resolution, not an unconditional guarantee at any frame/token setting [S2].
- BenchLM AA MMMU-Pro **74.9%** is secondary, under a different suite [S6]. No native non-text generation is assigned to standard Pro.

### Research trail and conflicts

Fresh searches: [Bing official card/benchmark](https://www.bing.com/search?q=%22Gemini+2.5+Pro%22+official+model+card+benchmark&setlang=en&cc=us) returned broad Gemini links; [Google independent reasoning evaluation](https://www.google.com/search?q=%22Gemini+2.5+Pro%22+independent+benchmark+reasoning&hl=en) returned an interstitial; [DuckDuckGo review/coding/long-context](https://html.duckduckgo.com/html/?q=%22Gemini+2.5+Pro%22+review+coding+long+context) produced usable links to the original technical report and review. A fourth exact-ID SWE/GPQA search encountered a bot challenge. Official model/pricing API pages had transport failures; the full **21-page official model-card PDF**, technical report's relevant sections, AA, Vals and provider API supplied usable evidence.

The discovered [RockB review](https://baeseokjae.github.io/posts/gemini-2-5-pro-coding-review-2026/) has a **2M** title but repeatedly says **1M** in its body, quotes approximate SWE **~62%**, mixes preview AIME **86.7%** with newer comparisons, and supplies no controlled independent benchmark run [S7]. Its broad “most capable in 2026”/price-superiority claims are not scoring evidence. Primary GA/preview tables and current independent results take precedence.

BenchLM labels the model non-reasoning, contradicted by Google's model card and AA's explicit reasoning description. AA's deprecated-evaluation notice is not proof all serving routes have shut down. Most importantly, different checkpoints, candidate-selection budgets, LCB date windows, and MRCR difficulty explain why the apparent numerical conflicts must remain labelled instead of averaged.

### Normalized scores (1–100)

- **Tool use: 55/100.** Independent TB2.0 30.34%, modest GA single-attempt repository success and weak newer end-to-end coverage constrain autonomy despite working tool APIs [S1,S4].
- **Reasoning: 75/100.** GA GPQA 86.4%, AIME 88% and HLE 21.6% demonstrate substantial reasoning; AA's current index 16 and benchmark/snapshot variation cap frontier claims [S1,S3].
- **Context window: 95/100.** Verified 1M capacity meets the repository's capacity tier; hard 8-needle MRCR at 1M is only 16.4%, so this is expressly a capacity rating, not a guarantee of reliable full-window reasoning or a basis for 100 [S1,S5].
- **Multimodal: 93/100.** Native audio/image/video inputs and measured video/vision results support the broad input-modality tier; standard text-only output and input-resolution dependence cap breadth [S1,S2].
- **Coding: 68/100.** GA SWE 59.6% single-attempt, independent 54.4%, dated LCB 69% and strong Aider edits support useful interactive coding; Vals Vibe 0.4% and weak terminal agency cap unsupervised engineering [S1,S4].
- **Cost efficiency: 78/100.** Paid $1.25/$10 standard output-heavy pricing and long-context surcharge are material for an older model; caching, flex and AA's $0.33/task help but do not establish high success-adjusted value [S3–S5].
- **Overall Score: 77/100.** Half-up mean `(55 + 75 + 95 + 93 + 68) / 5 = 77.2 → 77`; cost excluded. Best fit: supervised large mixed-media analysis, with retrieval checks and explicit checkpoint/harness qualification for code agents.

### Sources

- [S1] https://storage.googleapis.com/deepmind-media/Model-Cards/Gemini-2-5-Pro-Model-Card.pdf — official June 27 card, all 21 pages read; GA/preview distinctions and exact tables on pp.4–6.
- [S2] https://arxiv.org/html/2507.06261v1 — original Gemini 2.5 technical report; model IDs, architecture, reasoning, dated benchmark methodology and separate audio/Deep Think offerings.
- [S3] https://artificialanalysis.ai/models/gemini-2-5-pro — independent current index, cost/runtime metrics, reasoning flag and historical/deprecated status.
- [S4] https://www.vals.ai/models/google_gemini-2.5-pro — independent exact-model results, uncertainty and evaluation settings.
- [S5] https://openrouter.ai/api/v1/models/google/gemini-2.5-pro/endpoints — current provider-listed context/output, modalities, features and tiered serving prices; no inference call made.
- [S6] https://benchlm.ai/models/gemini-2-5-pro — secondary source discovery and submetrics, updated 2026-10-19; its reasoning classification explicitly disputed.
- [S7] https://baeseokjae.github.io/posts/gemini-2-5-pro-coding-review-2026/ — independently authored review compared against primary evidence, not an independent measured run.

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-20
- Method: Sequential independent web research, at least three distinct searches, full official model card and relevant original technical-report sections, direct AA/Vals/provider checks and review-conflict comparison. No peer findings read. Scores are editorial normalized interpretations, not official benchmark percentages.
