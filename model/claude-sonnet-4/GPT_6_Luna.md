# Claude Sonnet 4 — findings by GPT-6 Luna

- Source: Anthropic/Claude Sonnet 4
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4
- **Short description:** Anthropic's May 2025 hybrid-reasoning model, built for balanced coding, reasoning, and agent use. It is now retired from Anthropic-operated API service; do not conflate it with Sonnet 4.5 or later.
- **Provider / access:** Historically available on the Claude API, Amazon Bedrock, and Google Cloud Vertex AI. Anthropic retired it from its own API on **2026-06-15**. Anthropic's current pricing and lifecycle pages say it may still be available on partner-operated Bedrock and Google Cloud (Google managed), whose lifecycle schedules differ; this is not a guarantee that a particular partner endpoint remains live. Not an OpenCode Zen model.
- **Release / knowledge:** Released **2025-05-22**. No exact-model knowledge cutoff verified.
- **IDs:** Anthropic snapshot **`claude-sonnet-4-20250514`**. Partner platform IDs differ; Amazon Bedrock historically used `anthropic.claude-sonnet-4-20250514-v1:0`, while Google-managed Vertex AI used the `claude-sonnet-4@20250514` pattern. The Anthropic snapshot is retired.
- **Context window:** **200,000 tokens** for this pre-4.6 model generation. Anthropic's current context guide places Sonnet 4 and other pre-1M models in the 200K tier. The launch evaluation used extended-thinking budgets up to 64K; that budget is not the context window. No verified long-context retrieval result found.
- **Modalities:** Text and image input; text output. Hybrid near-instant and extended-thinking modes; tool use is supported. No audio/video input or non-text output verified.
- **Pricing (as of 2026-10-30):** Anthropic's published standard rate while available was **$3/MTok input and $15/MTok output**; prompt-cache reads $0.30/MTok and cache writes $3.75/MTok (5m) / $6/MTok (1h). Anthropic now marks Sonnet 4 retired; partner billing may differ. Prices are historical reference rates, not a claim of current first-party availability.
- **Architecture:** Proprietary; parameter count and detailed architecture undisclosed. Anthropic describes it as a hybrid model with fast and extended-thinking modes.
- **Evaluation caveat:** Benchmark figures below are Anthropic-reported results from the May 2025 launch table/CSV. The first value is the standard reported setup; slash-paired values are parallel test-time compute with multiple samples and an internal scorer where the source says so. Do not compare those high-compute figures directly with single-run numbers. SWE-bench Verified used the full 500 tasks and an Anthropic bash/editor scaffold. Terminal-Bench results vary by agent framework. The model is retired on Anthropic's API today, so these are historical capability results.

### Raw benchmarks found

Agent / tool use:

- **TAU-bench Retail: 80.5%; Airline: 60.0%** (Anthropic launch table; extended thinking, custom policy prompt addendum, and up to 100 completion steps rather than the usual 30). Anthropic reports no TAU-bench result without extended thinking.
- **Terminal-Bench: 35.5%** with Claude Code as the agent framework (**41.3%** with parallel high-compute selection); **33.5%** with the same agent framework used for non-Claude models. These are terminal-agent task results, not bare-model tool-call accuracy.
- Anthropic describes parallel tool execution, extended thinking with tools, and improved instruction following; these are qualitative launch claims, not additional scored benchmarks.
- No verified GDPval-AA, OSWorld/AutomationBench, or Claw-Eval result found.

Reasoning / knowledge:

- **GPQA Diamond: 75.4%** in the extended-thinking launch table; **83.8%** with parallel high-compute selection. Anthropic separately reports **70.0% without extended thinking**.
- **MMMLU: 86.5%** (average across 14 non-English languages); **MMMU validation: 74.4%**; **AIME 2025: 70.5%**, or **85.0%** with high-compute selection. Anthropic separately reports **33.1% on AIME without extended thinking**.
- No verified HLE, MRCR/LCR, CritPt, or Artificial Analysis Intelligence Index score found for the exact model.

Coding:

- **SWE-bench Verified: 72.7%** standard; **80.2%** with parallel attempts, regression-test rejection, and an internal scoring model selecting among attempts. Anthropic states its standard Claude 4 result is across the full 500 issues, with bash and string-replacement editor tools and no test-time compute.
- **Terminal-Bench: 35.5%** with Claude Code and **33.5%** under the common non-Claude agent framework; high-compute Claude Code result **41.3%**. See the agent/tool section for framework caveats.
- No verified LiveCodeBench, SciCode, DeepSWE, or SWE-Pro result found for this exact snapshot.

Long context:

- **200K context window**; no verified MRCR, RULER, GraphWalks, or retrieval-accuracy result at 128K+ found.

Multimodal:

- Anthropic's launch table reports **MMMU validation 74.4%**; the exact model supports image input and text output. No video/audio benchmark or image-generation result found.

### Normalized scores (1–100)

- **Tool use: 80/100.** TAU-bench Retail 80.5% and Airline 60.0% show useful tool-mediated task performance; custom prompts, extended thinking, and a 100-step limit make these favorable, nonstandard agent evaluations. Source: Anthropic's Claude 4 launch table and methodology.
- **Reasoning: 78/100.** GPQA Diamond is 75.4% standard extended-thinking (83.8% high-compute), with MMMLU 86.5% and AIME 70.5% (85.0% high-compute); the lower 70.0% GPQA without thinking and absence of HLE/long-context scores cap the score. Source: Anthropic's launch table and benchmark notes.
- **Context window: 70/100.** Anthropic documents the model in its 200K tier; this meets the rubric's 200K reference, but no long-context retrieval accuracy was found. Source: Anthropic context-window documentation.
- **Multimodal: 65/100.** Image input and MMMU validation 74.4% place it in the image-input tier; no audio/video input or non-text output is documented. Sources: Anthropic's launch table and current model documentation.
- **Coding: 78/100.** SWE-bench Verified 72.7% is strong, but its 80.2% high-compute result uses best-of-many selection, while Terminal-Bench scores range 33.5–41.3% depending on framework/compute. Sources: Anthropic's benchmark CSV and methodology.
- **Cost efficiency: 60/100.** Historical first-party pricing of $3/$15 per MTok maps to the rubric's roughly $3/$15 tier; Anthropic API service is now retired and partner prices can differ. Source: Anthropic pricing and deprecation pages.
- **Overall Score: 74/100.** Half-up mean of the five quality dimensions: `(80 + 78 + 70 + 65 + 78) / 5 = 74.2`, rounded to **74**. A strong historical coding/agent model, but its 200K context and current first-party retirement limit present-day use.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-30
- Method: Independent checks of Anthropic's May 2025 launch report and underlying benchmark CSV, current model lifecycle and pricing docs, context-window documentation, and the official SWE-bench leaderboard. Exact snapshot ID and retirement status are distinguished from later Sonnet variants; benchmark framework and high-compute caveats are kept with each result. Scores are normalized interpretations, not official ratings.
- Sources: [Anthropic Claude 4 launch report](https://www.anthropic.com/news/claude-4); [Anthropic launch benchmark CSV](https://cdn.sanity.io/files/4zrzovbb/website/0827c45e02042cf4c6158ea6c04abefedf2b728a.csv); [Anthropic model IDs and versions](https://platform.claude.com/docs/en/about-claude/models/model-ids-and-versions); [Anthropic context windows](https://platform.claude.com/docs/en/build-with-claude/context-windows); [Anthropic pricing](https://platform.claude.com/docs/en/about-claude/pricing); [Anthropic model deprecations](https://platform.claude.com/docs/en/about-claude/model-deprecations); [SWE-bench official leaderboard and benchmark definitions](https://www.swebench.com/).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
