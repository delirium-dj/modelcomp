# Claude Haiku 4.5 — findings by GPT-6 Luna

- Source: Anthropic/Claude Haiku 4.5
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 4.5
- **Short description:** Anthropic's fast, lower-cost proprietary Claude model, suitable for responsive coding assistance and agent workflows. It is the October 2025 Haiku generation, not the current Haiku flagship.
- **Provider / access:** Anthropic Claude Messages API (`/v1/messages`); also available through Bedrock and Vertex AI.
- **Release / knowledge:** Released 2025-10-15. Anthropic lists a reliable knowledge cutoff of 2025-02 and training-data cutoff of 2025-07; these describe different cutoff definitions.
- **IDs:** Anthropic API `claude-haiku-4-5-20251001` (convenience alias `claude-haiku-4-5`). No Zen free ID verified in the sources checked.
- **Context window:** 200K tokens, with 64K maximum output; verified in Anthropic's model reference.
- **Modalities:** Text and image input; text output; extended thinking and tool calls supported. No audio or video input/output documented for this model.
- **Pricing (as of 2026-10-28):** $1/M input, $5/M output; cache reads $0.10/M. Paid, proprietary access.
- **Architecture:** Proprietary; parameter count and weights are not public.

### Raw benchmarks found

Agent / tool use:

- Berkeley Function Calling Leaderboard: **68.70%** accuracy (evals.report labels the result Official; 2025-10-15).
- Terminal-Bench 2.1: **40.21%** without thinking and **41.75%** with a 32K thinking budget; Anthropic reports 11 runs using Terminus 2.
- τ²-bench Telecom: **54.7%** pass^1 (evals.report labels the result Official; 2025-10-15). Anthropic's launch footnote describes prompt addenda and 10-run averaging, so this is not a vanilla-prompt result.
- GDPval: **1171 Elo** (evals.report labels the result Official; 2025-10-15).
- Claw-Eval: **no verified public score found**.

Reasoning / knowledge:

- GPQA Diamond: **71.2%** (evals.report labels the result Official; 2025-10-15).
- AIME (OTIS Mock): **66.7%**; FrontierMath: **5.9%** (evals.report, both marked Official).
- Artificial Analysis Intelligence Index: **no current score reported**; its model page says the model is deprecated and only the default 10K-input workload continues to be benchmarked.

Coding:

- SWE-bench Verified: **73.3%** over 50 trials, reported by Anthropic using a two-tool bash/string-replacement scaffold, no test-time compute, and a 128K thinking budget.
- SWE-bench Pro: **39.45%** (evals.report labels the result Official; 2025-10-15).
- LiveCodeBench: **51.1%** and SciCode: **43.3%** (evals.report labels both Unverified; treat as provisional).
- DeepSWE: **0.22% resolved** (evals.report labels Official; the task/harness is not directly comparable to SWE-bench Verified).

Long context:

- 200K advertised context is verified, but **no verified long-context retrieval score found** (for example, MRCR/RULER at a stated long input length).

### Normalized scores (1–100)

- **Tool use: 63/100.** BFCL 68.70%, GDPval 1171, and τ² Telecom 54.7% show functional tool/agent performance, while Terminal-Bench 2.1 remains around 40–42%; the small/modified-harness results cap the score.
- **Reasoning: 67/100.** GPQA Diamond 71.2% and AIME 66.7% support solid mid-to-upper performance, but FrontierMath 5.9% and the lack of a current independent Intelligence Index score limit confidence.
- **Context window: 70/100.** The verified 200K window maps to 70 under the project's tier scale; there is no measured retrieval evidence to justify a higher score, and output is capped at 64K.
- **Multimodal: 65/100.** Official specifications confirm image input in addition to text, but not audio/video input or non-text output.
- **Coding: 73/100.** Anthropic reports 73.3% SWE-bench Verified; the lower 39.45% SWE-bench Pro and provisional LiveCodeBench/SciCode results show that performance is harness- and task-dependent.
- **Cost efficiency: 86/100.** $1/$5 per million input/output tokens is materially below premium pricing, but it is not free and output is five times input price.
- **Overall Score: 68/100.** (63 + 67 + 70 + 65 + 73) / 5 = 67.6, rounded half-up; best suited to fast, cost-conscious coding/agent work when image input is useful, not the strongest choice for frontier reasoning or long-context retrieval.

---

## Evidence comparison and source notes

- Anthropic's launch post reports **73.3% SWE-bench Verified** and documents the two-tool scaffold, 50-trial averaging, and 128K thinking budget. BenchLM separately lists **66.6% SWE-bench** from Vals AI, but its linked Vals record is for `anthropic_claude-haiku-4-5-20251001-thinking`; the model variant and harness differ, so this is not a like-for-like contradiction and the figures are not averaged.
- Anthropic reports Terminal-Bench 2.1 at **40.21%** without thinking and **41.75%** with a 32K thinking budget (Terminus 2). BenchLM lists **43.8%** from Vals AI and links the same thinking-variant ID; this supports the general range but not a directly comparable replacement for Anthropic's result.
- Evals.report's GPQA Diamond figure is **71.2%**. BenchLM lists **72.2%** from Vals for the thinking-variant ID. The small difference is consistent with distinct run/harness/variant conditions; retain the exact-model listing and do not merge the values.
- Artificial Analysis now reports no Intelligence Index value for this deprecated model, rather than a low score. Its current page retains speed and pricing observations but says only the default 10K-input workload remains under active measurement.

## Sources

- Anthropic, [Introducing Claude Haiku 4.5](https://www.anthropic.com/news/claude-haiku-4-5) — release, pricing, SWE-bench Verified and Terminal-Bench methodology.
- Anthropic, [Claude Haiku 4.5 model reference](https://platform.claude.com/docs/en/models/haiku-4-5/overview) — exact API IDs, lifecycle, context/output limits, modalities, knowledge cutoffs and pricing.
- Anthropic, [Claude Haiku 4.5 system card](https://www.anthropic.com/claude-haiku-4-5-system-card) — safety and evaluation documentation (PDF).
- evals.report, [Claude Haiku 4.5 benchmark results](https://evals.report/models/anthropic-claude-haiku-4-5) — benchmark figures, source-status labels, and dates.
- BenchLM, [Claude Haiku 4.5 benchmark scores](https://benchlm.ai/models/claude-haiku-4-5) — independent tracker with linked Vals AI results; note that several listed scores are for the Thinking variant.
- Artificial Analysis, [Claude 4.5 Haiku (Reasoning)](https://artificialanalysis.ai/models/claude-4-5-haiku-reasoning) — current deprecated-model caveat, price, context and modality details.
- LLM Stats, [Claude Haiku 4.5](https://llm-stats.com/models/claude-haiku-4-5-20251001) — secondary model identity, provider availability and pricing cross-check.
- Bing searches performed on 2026-10-28: [official benchmarks and context](https://www.bing.com/search?q=Claude+Haiku+4.5+Anthropic+official+benchmarks+context+window), [SWE-bench and Artificial Analysis](https://www.bing.com/search?q=Claude+Haiku+4.5+SWE-bench+Verified+Artificial+Analysis+benchmarks), [GPQA and independent reviews](https://www.bing.com/search?q=Claude+Haiku+4.5+GPQA+Diamond+independent+benchmark+review).

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna-fast)** — 2026-10-28
- Method: Three successful Bing searches followed by direct review of Anthropic documentation and independent benchmark trackers; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
