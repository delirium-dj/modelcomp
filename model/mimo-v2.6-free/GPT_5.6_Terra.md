# MiMo V2.6 Free - findings by GPT 5.6 Terra

- Source: OpenAI/gpt-5.6-terra
- Date: 2026-10-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Free
- **Short description:** OpenCode's temporary free route for Xiaomi MiMo-V2.6-Flash. The available benchmark evidence is for the released MiMo-V2.6-Flash-RL checkpoint, not for a separately trained free-tier model.
- **Provider / access:** OpenCode documents `opencode/mimo-v2.6-flash-free` through its OpenAI-compatible Chat Completions endpoint; the target's legacy `opencode/mimo-v2-6-free` label is treated as this Flash free route. Xiaomi publishes the checkpoint as `XiaomiMiMo/MiMo-V2.6-Flash-RL`.
- **Release / knowledge:** MiMo-V2.6 Flash was released in September 2026; no knowledge-cutoff date was found.
- **IDs:** `opencode/mimo-v2.6-flash-free`; `XiaomiMiMo/MiMo-V2.6-Flash-RL`
- **Context window:** 1,000,000 tokens for the released Flash checkpoint, confirmed by Xiaomi and Artificial Analysis. OpenCode does not publish a route-specific free-tier cap in its current model table.
- **Modalities:** Xiaomi lists text, image, video, and audio input with text output. Artificial Analysis independently lists text and image input; the route-specific free endpoint's full media matrix is not published.
- **Pricing (as of 2026-10-18):** OpenCode lists the temporary Flash Free route as free for input, output, and cached reads. Xiaomi's paid Flash API is $0.14 input and $0.28 output per 1M tokens.
- **Architecture:** MIT-licensed sparse MoE with 309B total and 15B active parameters, as documented by Xiaomi and Artificial Analysis.

### Raw benchmarks found

Agent / tool use:

- Toolathlon-Verified: **73.6%** (Xiaomi MiMo-V2.6-Flash-RL model card; also indexed by BenchLM).
- AutomationBench v1.0.6: **52.3%** (Xiaomi model card; vendor-run result).
- Terminal-Bench 2.1: **87.6%** (Xiaomi model card; vendor-run result).
- Terminal-Bench 4.0: **28.8%** (Xiaomi model card; vendor-run result; distinct benchmark generation and harness).
- OSWorld-Verified: **80.8%** (Xiaomi model card; vendor-run result).

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **38** (Artificial Analysis independent composite evaluation).
- AA-LCR: **74.3%** (Artificial Analysis result indexed by BenchLM).
- AA-HLE: **35.1%** (Artificial Analysis result indexed by BenchLM).
- CritPt: **12.0%** (Artificial Analysis result indexed by BenchLM).

Coding:

- DeepSWE v1.1: **67.9%** (Xiaomi model card; vendor-run result).
- ProgramBench: **26.0%** (Xiaomi model card; vendor-run result).
- AA-SciCode: **51.3%** (Artificial Analysis result indexed by BenchLM).

Long context and multimodal:

- Context window: **1M tokens** (Xiaomi model card and Artificial Analysis).
- AA-MMMU-Pro: **73.1%** (Artificial Analysis result indexed by BenchLM).

Evidence reconciliation: Xiaomi's table is checkpoint-specific but vendor-run. Artificial Analysis independently measures the Flash checkpoint, with a 38 Intelligence Index and separate long-context, coding, and visual results. The 87.6% Terminal-Bench 2.1 and 28.8% Terminal-Bench 4.0 values are not a contradiction because they are different benchmark generations. The free route is a billing/access tier, not a separately benchmarked checkpoint; scores therefore describe the mapped Flash model and flag unverified route-specific limits.

### Normalized scores (1-100)

- **Tool use: 84/100.** Toolathlon 73.6%, OSWorld 80.8%, and Terminal-Bench 2.1 87.6% show strong tooling, tempered by AutomationBench 52.3% and Terminal-Bench 4.0 28.8%.
- **Reasoning: 70/100.** AA-LCR 74.3% supports capable long-context reasoning, but the independently measured Index of 38, HLE 35.1%, and CritPt 12.0% do not support a frontier reasoning score.
- **Context window: 95/100.** The underlying released checkpoint has a verified 1M-token context window; the score is capped below 100 because no reproducible retrieval-at-length result for the OpenCode free route was found.
- **Multimodal: 76/100.** Xiaomi advertises image, video, and audio input, while the independent evaluator confirms text/image support and 73.1% MMMU-Pro. The route-specific free endpoint's audio/video availability is unverified.
- **Coding: 87/100.** DeepSWE 67.9%, Terminal-Bench 2.1 87.6%, and AA-SciCode 51.3% support strong coding performance, but not the methodology's top coding tier.
- **Cost efficiency: 100/100.** OpenCode currently lists the mapped Flash Free route at $0 for input, output, and cached reads; it is temporary and data may be used to improve the model.
- **Overall Score: 82/100.** Half-up mean of Tool, Reasoning, Context, Multimodal, and Coding: (84 + 70 + 95 + 76 + 87) / 5 = 82.4; a high-value free option when its temporary data-use terms are acceptable.

---

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** - 2026-10-18
- Method: Public internet research using Xiaomi's official model card, OpenCode's current model documentation, Artificial Analysis, BenchLM, and an independent access/pricing review. Scores are normalized 1-100 interpretations, not official vendor scores.
- Sources: https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL ; https://opencode.ai/docs/zen ; https://artificialanalysis.ai/models/mimo-v2-6-flash ; https://benchlm.ai/models/mimo-v2-6-flash ; https://omidsaffari.com/blog/is-mimo-v2-6-free
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
