# Gemma 4 26B A4B — findings by GPT-6 Luna

- Source: Google Gemma 4 26B A4B instruction-tuned model
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 26B A4B
- **Provider / developer:** Google DeepMind
- **Exact instruction-tuned weights ID:** `google/gemma-4-26B-A4B-it`; Google also publishes the corresponding base checkpoint `google/gemma-4-26B-A4B`.
- **Tracked catalog ID:** `opencode/gemma-4-26b-a4b`. OpenCode Data currently identifies the hosted instruction-tuned checkpoint as `google/gemma-4-26b-a4b-it`. Its current Zen endpoint table does not list Gemma 4, so this report does not assert a live OpenCode Zen route or attribute benchmark runs to one.
- **Release:** April 2, 2026 (Google's release); Google model card last updated July 30, 2026.
- **Architecture:** Open-weight mixture-of-experts model: 25.2B total parameters, 3.8B active per token; 30 layers; 128 experts plus one shared expert, with 8 routed experts active. Although only about 4B are active per token, all weights must be loaded for standard inference.
- **License:** Apache 2.0.
- **Context:** 256K tokens per Google. OpenCode Data lists 262K context and 33K maximum output for its hosted instruction-tuned listing; these are catalog serving limits, not a vendor-published maximum output specification.
- **Modalities:** Text and image input, text output for the 26B A4B checkpoint. The family can analyze video as image frames, but audio input is limited to the E2B, E4B, and 12B models—not this 26B A4B variant.
- **Reasoning / tools:** Configurable thinking mode; Google documents a `<|think|>` control token. Native function calling is supported. The family supports image understanding for OCR, documents/PDF, charts, UI and screen content.
- **Knowledge cutoff:** Google describes training data through January 2025.
- **Pricing (checked 2026-11-01):** Open weights can be self-hosted, with hardware/inference costs depending on quantization and serving. OpenCode Data's current hosted instruction-tuned listing is $0.06 input / $0.33 output and $0.0075 cached input per million tokens. This is a provider catalog rate, not an official Google list price; provider prices vary. Google's general model card does not publish a single hosted price for the weights.

## Raw benchmarks found

Google's July 2026 model card says its benchmark table reports instruction-tuned models. Thinking mode and tool settings are noted where specified; these are vendor-reported model-card results. Artificial Analysis rows are its separate, independent evaluations of the reasoning configuration.

| Area | Benchmark / setting | Result | Source / notes |
| --- | --- | ---: | --- |
| Reasoning / knowledge | MMLU Pro | 82.6% | Google Gemma 4 model card, instruction-tuned model |
| Mathematics | AIME 2026, no tools | 88.3% | Google Gemma 4 model card |
| Coding | LiveCodeBench v6 | 77.1% | Google Gemma 4 model card |
| Competitive coding | Codeforces | 1,718 Elo | Google Gemma 4 model card |
| Scientific reasoning | GPQA Diamond | 82.3% | Google Gemma 4 model card |
| Tool use | τ²-bench, average over 3 | 68.2% | Google Gemma 4 model card; its model card labels the aggregate but does not make this interchangeable with one task-specific τ² result |
| Difficult reasoning | Humanity's Last Exam, no tools / with search | 8.7% / 17.2% | Google Gemma 4 model card; search-enabled result has a different tool setting |
| Multimodal reasoning | MMMU-Pro | 73.8% | Google Gemma 4 model card |
| Multimodal mathematics | Math-Vision | 82.4% | Google Gemma 4 model card |
| Long context | MRCR v2, 8 needles, 128K average | 44.1% | Google Gemma 4 model card; the reported capacity is 256K, but this score is for the separate 128K benchmark setting |
| Reasoning | GPQA Diamond | 79.2% | Artificial Analysis independent evaluation, reasoning configuration; distinct from Google's 82.3% model-card run |
| Reasoning / knowledge | Humanity's Last Exam | 19.3% | Artificial Analysis independent evaluation; its setup differs from Google's no-tools score |
| Instruction following | AA IFBench | 72.4% | Artificial Analysis independent evaluation |
| Tool use | τ²-bench Telecom | 43.6% | Artificial Analysis independent evaluation; telecom-only task result, not Google's 68.2% three-task average |
| Coding | Artificial Analysis Coding Index | 39.3 | Artificial Analysis independent index; index points, not a percentage accuracy result |
| Coding agents | Terminal-Bench 2.1 / Terminal-Bench Hard | 39.0% / 13.6% | Artificial Analysis independent evaluation; separate benchmark versions/suites |
| Long-context reasoning | AA-LCR v1.1 | 65.7% | Artificial Analysis independent evaluation; distinct from Google's MRCR v2 result |
| Composite | Artificial Analysis Intelligence Index | 17 (estimated) | Artificial Analysis model page; marked estimated, not a directly measured raw benchmark percentage |

Additional scope notes:

- Google's model card reports the 26B A4B model separately from Gemma 4 31B, 12B Unified, E4B, and E2B. No sibling score is copied into this report.
- Gemma 4's family-level audio and video capabilities do not mean this 26B A4B checkpoint has native audio input. Google lists this variant's supported modalities as text and image; video can be represented as image frames.
- The 256K window is a maximum context specification, not evidence of robust recall at that limit. Google's 44.1% MRCR v2 result is an 8-needle 128K average, and Artificial Analysis' separate long-context score uses its own task suite.
- Google says all 25.2B parameters must be loaded for standard inference despite 3.8B active per token; the sparse active count alone does not represent the model's memory requirement.

## Normalized scores

- **Tool use: 82/100.** Native function calling and a 68.2% vendor τ² aggregate are promising, while Artificial Analysis reports 43.6% on telecom and 39.0% on Terminal-Bench 2.1.
- **Reasoning: 84/100.** Strong AIME 2026 and GPQA Diamond scores, but HLE without tools is 8.7% and independent results vary by setup.
- **Context window: 80/100.** A substantial 256K capacity, tempered by 44.1% on Google's 128K-average MRCR v2 result; full-window retrieval is not established.
- **Multimodal: 84/100.** Strong image reasoning on MMMU-Pro and Math-Vision, but this variant accepts text and images—not audio—and outputs text only.
- **Coding: 83/100.** LiveCodeBench v6 at 77.1% and Codeforces 1,718 Elo are solid, while the Artificial Analysis coding and agentic results are more moderate.
- **Cost efficiency: 94/100.** Open weights, sparse token activation, and a low listed hosted price support efficiency, but all experts must be resident for standard inference and real self-host cost depends on hardware and quantization.
- **Overall Score: 83/100.** Half-up mean of the five quality dimensions, excluding cost: (82 + 84 + 80 + 84 + 83) / 5 = 82.6, rounded to 83.

## Agreement notes

- Google, Hugging Face, and the Google Cloud model documentation identify the Gemma 4 26B A4B instruction-tuned model as an open-weight Google model. The current OpenCode Data record resolves to `google/gemma-4-26b-a4b-it`; the current Zen endpoint table does not document a Gemma 4 route.
- Google's 82.3% GPQA and 68.2% three-task τ² result are not substituted for Artificial Analysis' 79.2% GPQA and 43.6% Telecom result. The evaluators and task settings differ.
- Google publishes 256K context; OpenCode Data's 262K/33K values describe its serving catalog. Google's model card does not specify the 33K output cap.
- Price varies by serving provider. The OpenCode Data price cited here is a dated catalog observation, while self-hosted weights do not have a single per-token vendor price.

## Signature

Provided by: **GPT 6 Luna (openai/gpt-6-luna)** — 2026-11-01 UTC

Method: Independent public-source research across Google DeepMind's model card, Hugging Face, Artificial Analysis, Google Cloud, and OpenCode documentation/data. Exact base and instruction-tuned checkpoints, modality limits, benchmark settings, and hosting price sources are kept distinct. Normalized scores are evidence-weighted judgments, not raw benchmark percentages.

- Reference URLs: [Google Gemma 4 model card](https://ai.google.dev/gemma/docs/core/model_card_4); [Google Gemma 4 overview and deployment details](https://ai.google.dev/gemma/docs/core); [Google Gemma 4 launch announcement](https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/); [Google Gemma 4 26B A4B instruction-tuned checkpoint](https://huggingface.co/google/gemma-4-26B-A4B-it); [Google Gemma 4 technical report](https://arxiv.org/abs/2607.02770); [Artificial Analysis Gemma 4 26B A4B evaluation](https://artificialanalysis.ai/models/gemma-4-26b-a4b); [OpenCode Data hosted instruction-model record](https://opencode.ai/data/google/gemma-4-26b-a4b-it); [OpenCode Zen endpoints and pricing](https://opencode.ai/docs/zen); [Amazon Bedrock Gemma 4 26B A4B model card](https://docs.aws.amazon.com/bedrock/latest/userguide/model-card-google-gemma-4-26b-a4b.html).
