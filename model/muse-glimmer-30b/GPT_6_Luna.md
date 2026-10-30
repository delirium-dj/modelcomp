# Muse Glimmer 30B — findings by GPT-6 Luna

- Source: Meta Superintelligence Labs/Muse Glimmer 30B
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Glimmer 30B
- **Short description:** Meta Superintelligence Labs' Apache-2.0 open-weight, dense 30B model distilled from Muse Spark and optimized for local agentic work on consumer hardware. It combines tool use, multi-step reasoning, failure recovery, coding, and image understanding; it is not a Muse Spark tier or hosted-only alias.
- **Provider / access:** Downloadable BF16 and quantized weights on Hugging Face as `meta-models/Muse-Glimmer-30B`, under Apache 2.0. OpenRouter serves it as `meta/muse-glimmer-30b` through Chat Completions; OpenRouter is a third-party host, not a Meta API ID. Meta also lists partner hosts. No OpenCode Zen route verified. The model supports tool calls and configurable reasoning strength (`low`, `medium`, `high`, `xhigh`).
- **Release / knowledge:** Released **2026-08-10**; technical report first submitted 2026-10-17 and revised 2026-10-23. Knowledge cutoff **2026-01-04**.
- **IDs:** Hugging Face repository `meta-models/Muse-Glimmer-30B`; OpenRouter API ID `meta/muse-glimmer-30b`. These are distinct repository/host identifiers, not different model variants.
- **Context window:** **131,072+ tokens** in Meta's model card / technical report (described as 128K+ in the paper); OpenRouter's listing caps the served route at 131,072 context and 16,384 max completion tokens. Meta reports Beam 128K and AA-LCR results, but neither establishes ≥98% retrieval accuracy at 512K+.
- **Modalities:** Text and image input; text output. The model card says video may be handled as individual frames but the model is not explicitly optimized for video; do not treat video as a supported native modality. Audio input/output is unsupported.
- **Pricing (as of 2026-10-30):** The weights are available under Apache 2.0 without token-based licensing fees; local hardware and power still cost money. OpenRouter and Artificial Analysis currently list hosted pricing at **$0.30/MTok input and $1.20/MTok output**. Hosted rates vary by provider.
- **Architecture:** Dense causal Transformer with a dedicated ~1.8B-parameter ViT-G/14 perception encoder; ~29.6B parameters total, including the encoder. The language model has 52 layers, grouped-query attention (32 query / 2 KV heads), repeating local/local/local/global attention with a 2,048-token local window, and a 128K+ context. Meta's 4-bit quantized builds target 24–32 GB devices; its DFlash drafter reports 3.1× speculative-decoding speedup on RTX 5090 (74.9 to 233.4 tokens/s) in its stated setup.
- **Evaluation caveat:** Meta's scores below are the vendor's high-reasoning results, not independent replications; agentic scores depend on their scaffolds and benchmark harnesses. The comparison rows are Gemma4-31B Thinking and Qwen3.6-27B Thinking. Artificial Analysis' current composite Intelligence Index is a different, newer suite and rates this model far below its benchmark-specific Meta results; BenchLM's aggregate is explicitly partial-coverage. BenchLM lists AA-LCR 83.3 versus Meta's 80.0 and GDPval-AA 893 versus Meta's GDPval-AA v2 953; these are not silently merged because benchmark version/source differences are unresolved.

### Raw benchmarks found

Agent / tool use (Meta technical report, high reasoning):

- **MCP-Atlas (public): 75.5**; **DeepSearchQA: 74.6**; **τ³-Banking: 23.5**; **WildClawBench: 47.6**; **GAIA2: 43.3**; **GDPval-AA: 953** (the Hugging Face card labels this GDPval-AA v2); **SkillsBench with skills: 44.3**; **OSWorld-Verified: 65.9**.
- **TerminalBench 2.1 (Terminus2): 51.7%**. This is an agent/harness result, not isolated function-call accuracy.
- Artificial Analysis currently reports **Intelligence Index 6** (v5.0 composite), **AA-Briefcase** and **AutomationBench-AA** among its evaluation suite, and a median hosted speed of **115.9 output tokens/s**. The 6-point composite is not comparable to Meta's individual benchmark percentages or an intelligence percentile.

Reasoning / knowledge (Meta, high reasoning):

- **GPQA Diamond (AA): 83.5%**; **HLE Text (AA): 22.0%**; **AIME 2026: 94.7%**; **IFBench: 77.0%**. Meta's report also gives **AA-LCR: 80.0%** and **Beam 128K: 65.1%** under memory/long-context.
- Artificial Analysis' separate current Intelligence Index is **6**; BenchLM reports the index as **6.3** and covers only 29 of 724 possible benchmarks. These are versioned composite/coverage signals, not replacements for GPQA or HLE raw scores.

Coding:

- **SWE-bench Verified: 76.0%**; **SWE-bench Pro: 51.2%**; **TerminalBench 2.1 (Terminus2): 51.7%**; **SciCode: 43.6%** (Meta high-reasoning table).
- BenchLM repeats those Meta-sourced coding results; its overall **31.68/100** is a partial-coverage aggregate, not a vendor benchmark or a normalized score used here.

Long context:

- Meta reports **Beam 128K: 65.1** and **AA-LCR: 80.0**; BenchLM reports AA-LCR 83.3. The model context is 131,072+ tokens, not 1M; neither result demonstrates the ≥98% retrieval accuracy at 512K+ needed for the top context tier.

Multimodal:

- **CharXiv Reasoning: 78.8**; **MMMU-Pro: 74**; **OmniDocBench v1.5: 75.8**; **ScreenSpot Pro: 75.4** (Meta high-reasoning table). These support image/document/screenshot understanding, not audio or native video input.

### Normalized scores (1–100)

- **Tool use: 70/100.** MCP-Atlas 75.5 and several end-to-end agent results are strong, but τ³-Banking 23.5 and GDPval-AA 953 are mixed/mid-tier, and reported outcomes are scaffold-dependent. Source: Meta's technical report.
- **Reasoning: 75/100.** GPQA Diamond 83.5 and AIME 2026 94.7 are strong, with HLE Text 22.0 and AA-LCR 80.0 as useful counterpoints; Artificial Analysis' distinct composite Index is only 6. Sources: Meta technical report; Artificial Analysis model page. The Index is not averaged with the raw results.
- **Context window: 60/100.** 131,072+ tokens falls in the rubric's 100K–200K tier; Beam 128K 65.1 and AA-LCR 80.0 show long-context evaluation, but there is no 512K+ retrieval evidence. Sources: Meta model card and technical report.
- **Multimodal: 67/100.** Text/image input with text output fits the image-input band; CharXiv 78.8, MMMU-Pro 74, and document/screen results provide task evidence, but audio is unsupported and video is not an optimized modality. Sources: Meta model card and technical report.
- **Coding: 75/100.** SWE-bench Verified 76.0 is strong, while SWE-bench Pro 51.2, TerminalBench 2.1 51.7, and SciCode 43.6 indicate solid but not frontier-general coding. Source: Meta technical report.
- **Cost efficiency: 94/100.** Apache-2.0 weights enable self-hosting without a per-token model fee, though hardware costs remain; hosted OpenRouter/Artificial Analysis pricing is $0.30/$1.20 per MTok, well below the rubric's roughly $0.60/$2.20 reference. Sources: Meta model card, OpenRouter, Artificial Analysis.
- **Overall Score: 69/100.** Arithmetic mean of the five quality dimensions, excluding cost: `(70 + 75 + 60 + 67 + 75) / 5 = 69.4`, rounded to **69**. This is a capable small agent/coding model with image understanding and low-cost deployment, but a 131K context and mixed general-agent/composite results keep it below frontier overall.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-30
- Method: Compared Meta's release post, Hugging Face model card, and arXiv technical report (three distinct primary publication surfaces) with OpenRouter's live route listing, Artificial Analysis' independent evaluation/pricing page, and BenchLM's partial-coverage aggregation. Used Meta's exact high-reasoning benchmark table; preserved benchmark names, versions, and harness labels; did not treat the AA composite as an individual benchmark or transfer scores from Muse Spark.
- Sources: [Meta Research release post](https://research.meta.ai/blog/introducing-muse-glimmer-open-agentic-model); [Meta Muse Glimmer 30B model card and weights](https://huggingface.co/meta-models/Muse-Glimmer-30B); [Muse Glimmer technical report, arXiv:2610.24628](https://arxiv.org/abs/2610.24628); [OpenRouter model route and pricing](https://openrouter.ai/meta/muse-glimmer-30b); [Artificial Analysis Muse Glimmer (High)](https://artificialanalysis.ai/models/muse-glimmer); [BenchLM Muse Glimmer 30B benchmark aggregation](https://benchlm.ai/models/muse-glimmer-30b).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
