# Muse Spark 1.1 — findings by GPT 6 Astra

- Source: Meta / `muse-spark-1.1`
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** Muse Spark 1.1, Standard tier.
- **Short description:** Meta's multimodal reasoning model for coding and agent workflows.
- **Provider / access:** Meta Model API supports Chat Completions, Responses and Anthropic Messages formats. [Developer launch](https://dev.meta.ai/resources/blog/build-with-muse-spark).
- **Release / knowledge:** July 9, 2026 according to [independent evaluator](https://artificialanalysis.ai/models/muse-spark-1-1); cutoff not verified.
- **IDs:** `muse-spark-1.1`; no verified Zen Free ID or 1.1 Contributor variant.
- **Context window:** 1,048,576 tokens; exact maximum output not verified from primary documentation.
- **Modalities:** Text, image, video, audio and PDF input; text output. [Official models](https://dev.meta.ai/docs/models).
- **Pricing (2026-10-04):** USD 1.25 input / 0.15 cached input / 4.25 output per million tokens. Standard-tier prompts and completions are not used for model training; later versions' Contributor discounts do not apply to 1.1. [Official pricing](https://dev.meta.ai/docs/pricing-rate-limits).
- **Architecture:** Proprietary, undisclosed parameter count. [Evaluator model profile](https://artificialanalysis.ai/models/muse-spark-1-1).

### Raw benchmarks found

Current independent results below use **xhigh** from one [AA comparison snapshot](https://artificialanalysis.ai/models/comparisons/muse-spark-1-1-vs-mistral-medium-3-5); changing Elo pools and index revisions prevent direct comparison with launch-era composites.

Agent / tool use:

- GDPval-AA v2.1 **1215 Elo**; AA-Briefcase v1.1 **848 Elo**; AutomationBench-AA **39%**; Terminal-Bench **4.0: 6%**.
- Terminal-Bench 2.1, Tau3/Tau2, Claw-Eval, Toolathlon and MCP-Atlas: no verified exact public score found in the primary pages retrieved.

Reasoning / knowledge:

- Intelligence Index **34**, HLE **46%**, CritPt **15%**, Omniscience **28** (index, not accuracy). [Current AA](https://artificialanalysis.ai/models/comparisons/muse-spark-1-1-vs-mistral-medium-3-5).
- GPQA Diamond: no verified public score found in the retrieved primary evidence.
- The [July launch analysis](https://artificialanalysis.ai/articles/muse-spark-1-1-everything-you-need-to-know) reported Omniscience accuracy **41%**, hallucination rate **38%** and attempt rate **82%**; historical protocol, not a current rerun.

Coding:

- SciCode **59%** in the current comparison.
- AA Coding Agent Index **69**, xhigh in OpenCode, in the [July 17 analysis](https://artificialanalysis.ai/articles/four-frontier-launches-in-eight-days-six-labs-now-field-a-model-above-50-on-the-artificial-analysis-intelligence-index).
- SWE-bench Verified/Pro, LiveCodeBench, Vibe Code Bench and full DeepSWE: no verified public score found. A vendor demo evaluating a subset is not a full benchmark result.

Long context:

- AA-LCR v1.1 **78%**; GDP.pdf **14%**. [AA](https://artificialanalysis.ai/models/comparisons/muse-spark-1-1-vs-mistral-medium-3-5).
- No verified public score found for full-window MRCR/RULER retrieval.

### Normalized scores (1–100)

- **Tool use: 74/100.** Workflow and GDPval results support useful agents, with weak hard-terminal performance limiting the rating.
- **Reasoning: 86/100.** Strong HLE and useful long-context reasoning; missing verified GPQA and modest CritPt cap confidence.
- **Context window: 95/100.** Million-token capacity, without evidence for near-perfect retrieval.
- **Multimodal: 95/100.** Verified audio/video/image/PDF inputs; native output remains text.
- **Coding: 82/100.** Strong SciCode and measured OpenCode agent performance, tempered by missing repository benchmarks and newer terminal weakness.
- **Cost efficiency: 88/100.** Paid pricing matches the methodology's good-value reference; no free-tier assumption.
- **Overall Score: 86/100.** Half-up mean: (74 + 86 + 95 + 95 + 82) / 5 = 86.4; a useful paid option for mixed-media reasoning and supervised agents.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-04
- Method: Fresh official product documentation and independent evaluation research; scores are normalized interpretations.

