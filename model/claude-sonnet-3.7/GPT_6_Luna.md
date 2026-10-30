# Claude 3.7 Sonnet — findings by GPT-6 Luna

- Source: Anthropic/Claude 3.7 Sonnet
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude 3.7 Sonnet
- **Short description:** Anthropic's February 2025 hybrid-reasoning Sonnet, able to respond normally or use user-visible extended thinking under the same model ID. It was a strong coding and agent model, but is now retired from Anthropic-operated API service.
- **Provider / access:** Historically available on the Claude API, Amazon Bedrock, and Google Cloud Vertex AI. Anthropic retired its API snapshot on **2026-02-19**. Anthropic states partner-operated Bedrock and Google-managed Vertex AI set their own lifecycle schedules, so availability there may differ; current partner availability was not verified. OpenRouter's current model query returned no Claude 3.7 listing. Do not describe the Anthropic API route as currently callable.
- **Release / knowledge:** Announced **2025-02-24**; dated snapshot ID encodes **2025-02-19**. Artificial Analysis lists a knowledge cutoff of **2024-10-01**; Anthropic's launch page does not publish a cutoff.
- **IDs:** Anthropic snapshot `claude-3-7-sonnet-20250219`; AWS historically used `anthropic.claude-3-7-sonnet-20250219-v1:0`, and Google-managed Vertex AI uses a provider-specific dated ID. The Anthropic snapshot is retired.
- **Context window:** **200,000 input tokens**, with **128,000 max output tokens** announced by Anthropic. No verified long-context retrieval accuracy at 512K+; the model's supported context is 200K.
- **Modalities:** Text and image input; text output. Extended thinking can be enabled or disabled on the same model. No audio/video input or non-text output verified.
- **Pricing (historical first-party rate):** Anthropic launch pricing was **$3/MTok input and $15/MTok output**, including thinking tokens. Anthropic API service is retired; partner billing and any continuing access are provider-specific.
- **Architecture:** Proprietary; parameter count and detailed architecture are undisclosed. Anthropic says extended thinking is not a separate model—it allows the same model to spend more inference-time compute.
- **Evaluation caveat:** Anthropic's benchmark table is embedded in launch-page graphics; the figures below are source-displayed values indexed by BenchLM plus Anthropic's methodology text. Keep the full 500-task SWE-bench result (62.3%) separate from the 489 internally solvable subset (63.7%), and from the 70.3% high-compute, best-of-many result on that subset. GPQA's 84.8% result uses 256 parallel samples, a learned scorer, and up to 64K thinking tokens; it is not the ordinary single-run API score. Artificial Analysis' archived model page is for its non-reasoning configuration and reports a different test suite.

### Raw benchmarks found

Agent / tool use:

- Anthropic reports state-of-the-art **TAU-bench** performance. Its Airline evaluation used a prompt addendum encouraging a planning tool and raised the completion-step cap from 30 to 100; Anthropic does not expose the numeric chart value in accessible page text.
- Artificial Analysis/BenchLM lists **τ²-bench: 50%**. This is a different benchmark variant from Anthropic's TAU-bench result and is not used as if it were the same score.
- No verified Terminal-Bench 2.1, GDPval-AA, OSWorld, or Claw-Eval result found for this exact snapshot.

Reasoning / knowledge:

- **GPQA: 68%** in the launch-table transcription; Artificial Analysis' separate GPQA Diamond run is **65.6%**. The precise test setup differs, so retain both attributions rather than averaging them.
- **GPQA: 84.8%** with 256 parallel samples, a learned scoring model, and up to 64K thinking tokens (Anthropic). This is a high-compute research result, not a standard single-sample score.
- **AIME 2024: 23.3%**; **MATH-500: 82.2%**; **MMMLU: 83.2%**; **IFEval: 90.8%** (launch-table values indexed by BenchLM). Artificial Analysis' archived HLE result is **4.2%**.
- No verified exact-model MRCR, HLE official-launch score, CritPt, or current Artificial Analysis Intelligence Index result found. AA marks its current index N/A for this retired model.

Coding:

- **SWE-bench Verified: 62.3%** on the full 500-task benchmark, counting 11 infrastructure-incompatible cases as failures for leaderboard parity. Anthropic reports **63.7%** on the internally solvable subset of 489 tasks.
- Anthropic's **70.3%** result uses parallel attempts, discards patches failing visible regression tests, and selects with a learned scoring model; it is on the 489-task subset, not the standard full-benchmark score.
- No verified Terminal-Bench, SWE-bench Pro, LiveCodeBench, DeepSWE, or SciCode result found for this exact snapshot.

Long context:

- The model supports **200K context**. Artificial Analysis reports **AA-LCR 51.7%** for its archived non-reasoning run; this does not establish reliable retrieval at 512K+.

Multimodal:

- **MMMU: 71.8%** in the launch table; Artificial Analysis reports **AA-MMMU-Pro: 60.1%** on its separate archived evaluation. Image input is supported, with text output only.

### Normalized scores (1–100)

- **Tool use: 68/100.** Anthropic's TAU-bench result is described as state-of-the-art but is tied to a planning-tool prompt and 100-step cap; the available 50% τ²-bench result is a separate variant. No modern terminal/desktop benchmark was verified. Sources: Anthropic launch/methodology; Artificial Analysis via BenchLM.
- **Reasoning: 72/100.** The 68% GPQA launch result and 23.3% AIME 2024 are moderate; MATH-500 82.2% and MMMLU 83.2% are stronger. The 84.8% GPQA result requires 256-sample high-compute selection, so it is not scored as a standard run. Sources: Anthropic launch/reasoning research; BenchLM transcription; Artificial Analysis.
- **Context window: 70/100.** Anthropic documents 200K input, matching the rubric's 200K reference. AA-LCR 51.7% is useful but does not support a higher retrieval tier. Sources: Anthropic launch; Artificial Analysis.
- **Multimodal: 65/100.** Image input and MMMU 71.8% place it in the image-input tier; no audio/video input or non-text output verified. Sources: Anthropic launch table; Artificial Analysis.
- **Coding: 74/100.** SWE-bench Verified 62.3% on the full set is strong; 63.7% is on a reduced 489-task subset and 70.3% uses high-compute selection. Sources: Anthropic's official methodology and launch page.
- **Cost efficiency: 60/100.** Historical first-party pricing of $3/$15 per MTok matches the rubric's $3/$15 reference. This is historical pricing; Anthropic API access is retired. Source: Anthropic launch page.
- **Overall Score: 70/100.** Arithmetic mean of the five quality dimensions, excluding cost: `(68 + 72 + 70 + 65 + 74) / 5 = 69.8`, rounded to **70**. Strong historical coding and reasoning, tempered by a 200K context window, mixed benchmark configurations, and current first-party retirement.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-30
- Method: Cross-checked Anthropic's launch article, visible-thinking research, model-ID and lifecycle documentation, and current pricing docs against Artificial Analysis' archived entry and BenchLM's source-linked benchmark transcription. Distinguished full-set from reduced-set/high-compute SWE-bench values, and τ²-bench from Anthropic's custom TAU-bench setup. Partner platform lifecycles are not assumed to match Anthropic's.
- Sources: [Anthropic Claude 3.7 Sonnet launch and benchmark methodology](https://www.anthropic.com/news/claude-3-7-sonnet); [Anthropic extended-thinking research](https://www.anthropic.com/research/visible-extended-thinking); [Anthropic model IDs and versioning](https://platform.claude.com/docs/en/about-claude/models/model-ids-and-versions); [Anthropic model deprecations](https://platform.claude.com/docs/en/about-claude/model-deprecations); [Anthropic pricing](https://platform.claude.com/docs/en/about-claude/pricing); [Artificial Analysis archived Claude 3.7 Sonnet page](https://artificialanalysis.ai/models/claude-3-7-sonnet); [BenchLM source-linked benchmark table](https://benchlm.ai/models/claude-3-7-sonnet).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
