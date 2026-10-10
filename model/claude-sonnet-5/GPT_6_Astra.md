# Claude Sonnet 5

## Research refresh — 2026-10-10

Compared with 2026-10-04. Sources accessed today; access dates are not evaluation execution dates. This section supersedes conflicting statements or missing-data claims in the preserved snapshot. No local model benchmark was run.

[Current specifications](https://platform.claude.com/docs/en/models/sonnet-5/overview) reconfirm 1M context, 128K standard output, separate 300K batch beta, January 2026 cutoff and active legacy status. Cache writes are $2.50/M for five minutes or $4/M for one hour, alongside $0.20/M cache reads. [Anthropic's updated announcement](https://www.anthropic.com/news/claude-sonnet-5) retains permanent $2/$10 input/output pricing. [Visual PDF support](https://platform.claude.com/docs/en/build-with-claude/pdf-support) corrects the old image-only scope.

[SWE-Bench Pro V2 Full](https://labs.scale.com/leaderboard/swe_bench_pro_public_v2?tab=full): Claude Code/xhigh **93.15 ± 1.71%**, on the revised 642-task benchmark. This is not original SWE-Pro, Verified, or the AA max harness.

Vibe Code Bench v1.1 / OpenHands: **81.33%, $25.39/test**. [Vals](https://www.vals.ai/benchmarks/vibe-code).

The [retrieved AA comparison](https://artificialanalysis.ai/models/comparisons/inkling-vs-claude-sonnet-5) is an older indexed snapshot: Index v4.3 38, GDPval v2 1501 and Briefcase 1355, rather than the prior report's v4.3.2/v2.1 1466/1358. It does not independently reverify those newer values. HLE 41%, CritPt 17%, SciCode 54%, Terminal 4.0 14% and LCR 82% agree. Neither snapshot should be silently relabeled as the other.

Tool use 79→82 and coding 83→91 reflect new independent evidence; multimodal 70→80 recognizes PDFs. Remaining gaps: exact-model GPQA/AIME, current AA snapshot, full-window retrieval and immutable run IDs. No Sonnet 5.5 result is substituted.

### Score comparison

Order: tool use, reasoning, context, multimodal, coding, cost. Previous: **79, 86, 95, 70, 83, 70**; current: **82, 86, 95, 80, 91, 70**. Overall: **83 → 87**. Changes reflect revised evidence, not necessarily changed model weights.

## Prior research snapshot — 2026-10-04

Preserved for comparison; current corrections are above.

### Model card

Anthropic released Claude Sonnet 5 on June 30, 2026. The API identifier is `claude-sonnet-5`. It remains active as a legacy model, with retirement no sooner than June 30, 2027. Its January 2026 knowledge cutoff is separate from the research date below. The model accepts text and images and produces text, with a 1M-token context window and 128K maximum output; a batch-only beta raises output to 300K. Adaptive thinking defaults to high effort. Native audio generation is not documented. [Official model documentation](https://platform.claude.com/docs/en/models/sonnet-5/overview).

Standard API pricing is $2 input and $10 output per million tokens, with $0.20 cache reads and a 50% batch discount. The August 10 update made the launch pricing permanent, superseding the originally announced later increase. Availability in free Claude applications does not establish a free API entitlement. Anthropic notes that tokenizer changes and reasoning effort can alter billed token usage. [Launch and pricing update](https://www.anthropic.com/news/claude-sonnet-5).

## Raw benchmarks

### Agent / tool use

Artificial Analysis reports **GDPval-AA v2.1: 1466**, **AA-Briefcase v1.1: 1358**, and **AA-Automation: 37%** for **Claude Sonnet 5 Max**. These are different benchmark scales, not percentages that can be averaged together. Max-effort measurements also do not describe the default high-effort operating point. [Independent comparison](https://artificialanalysis.ai/models/comparisons/inkling-vs-claude-sonnet-5).

### Reasoning / knowledge

The same Max configuration has **Artificial Analysis Intelligence Index v4.3.2: 38**, **Humanity's Last Exam: 41%**, **CritPt: 17%**, and **AA-Omniscience: 16 index points**. The current index version must not be numerically equated to earlier index generations. Exact-model GPQA Diamond and AIME results: no verified public score found in the sources used here. [Independent comparison](https://artificialanalysis.ai/models/comparisons/inkling-vs-claude-sonnet-5).

### Coding

**SciCode: 54%** and **Terminal-Bench 4.0: 14%** are reported for Sonnet 5 Max. Terminal-Bench 4.0 is a distinct, harder evaluation; its result is not a Terminal-Bench 2.1 result. Exact-model SWE-bench Verified and LiveCodeBench results: no verified public score found in the sources used here. [Independent comparison](https://artificialanalysis.ai/models/comparisons/inkling-vs-claude-sonnet-5).

### Long context

**AA-LCR v1.1: 82%** and **GDP.pdf: 13%** provide task-level evidence, while the documented 1M-token limit establishes capacity. Neither establishes near-perfect retrieval throughout that window. Exact-model MRCR v2 result: no verified public score found. [Independent comparison](https://artificialanalysis.ai/models/comparisons/inkling-vs-claude-sonnet-5).

## Normalized scores

- **Tool use: 82/100.** New independent repository-agent evidence complements mixed automation results.
- **Reasoning: 86/100.** HLE supports strong reasoning; exact-model GPQA remains unverified here.
- **Context window: 95/100.** 1M capacity, without qualifying full-window retrieval.
- **Multimodal: 80/100.** Visual PDF/image inputs, text output.
- **Coding: 91/100.** Independent V2 repository and app-building results fill major gaps; harness dependence remains.
- **Cost efficiency: 70/100.** Permanent $2/$10 list rates; effort affects total usage.
- **Overall Score: 87/100.** Half-up mean (82 + 86 + 95 + 80 + 91) / 5; cost excluded. Previous overall 83.

## Signature

Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-10
