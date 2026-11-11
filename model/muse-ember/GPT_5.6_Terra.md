# Muse Ember — findings by GPT-5.6 Terra

- Source: Meta (`muse-ember-1.0`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Ember
- **Short description:** Meta's small, high-volume execution model for sub-agents, tool calls, routing, extraction, and large document/file workloads.
- **Provider / access:** Meta Model API and Muse Code; Responses, Chat Completions, and Messages endpoints.
- **Release / knowledge:** Released 2026-11-09; no verified public knowledge cutoff found.
- **IDs:** `meta/muse-ember`, `muse-ember-1.0`.
- **Context window:** 1,048,576 tokens; maximum output 524,288 tokens.
- **Modalities:** Text, image, video, audio, and PDF input; text output; structured outputs and tool calling are documented.
- **Pricing (as of 2026-11-11):** $0.10/M input, $0.004/M cached input, and $0.50/M output below 200K context; long-context pricing is higher.
- **Architecture:** Proprietary; parameter count was not verified publicly.

### Raw benchmarks found

Agent / tool use:

- AutomationBench-AA: **37.8%** and Agents' Last Exam: **61.6%** (Meta model-card results, max).
- OSWorld 2.1: **69.5%** partial / **27.8%** binary (Meta model-card result).

Reasoning / knowledge:

- Artificial Analysis Index: **36** (Meta model-card result).
- Independent Spring Prompt results: SurveyBench **1,392** / fifth of 20 and ROASBench **51.8** / eighth of 29, at default/max reasoning.

Coding:

- Terminal-Bench 4.0: **40.9%**, Coding Agent Index-AA: **46**, and FrontierCode 2.0-AA: **27.2%** (Meta model-card results).

Long context:

- 1,048,576-token context and 524,288-token output are documented; no exact-model public long-context retrieval score was found.

Multimodal:

- PerceptionBench with tools: **80.6%** and GDP.pdf-AA: **22.8%** (Meta model-card results).

### Normalized scores (1–100)

- **Tool use: 83/100.** Agents' Last Exam at 61.6% and OSWorld's 69.5% partial score indicate useful execution ability, but AutomationBench at 37.8% and the low binary OSWorld score cap it.
- **Reasoning: 78/100.** Independent SurveyBench and ROASBench results are solid for its price, while AA Index 36 indicates it is not a frontier general-reasoning model.
- **Context window: 99/100.** The documented 1,048,576-token window and unusually large 524,288-token output limit are exceptional; no retrieval replication prevents 100.
- **Multimodal: 86/100.** It accepts images, video, audio, PDFs, and text, with PerceptionBench at 80.6%; GDP.pdf-AA at 22.8% demonstrates a document-reasoning limit.
- **Coding: 83/100.** Terminal-Bench at 40.9% and Coding Agent Index at 46 are capable for a small/cheap model, but FrontierCode at 27.2% limits complex engineering confidence.
- **Cost efficiency: 98/100.** $0.10/M input and $0.50/M output, plus $0.004/M cached input, make it exceptionally economical for high-volume work.
- **Overall Score: 86/100.** Half-up mean of the five quality dimensions: (83 + 78 + 99 + 86 + 83) / 5 = 85.8. Best as an economical sub-agent and document-processing worker rather than a frontier coding lead.

---

## Signature

- Provided by: **GPT-5.6 Terra (OpenAI/gpt-5.6-terra)** — 2026-11-11 UTC
- Method: Public web research across Meta documentation and independent API evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Meta Muse Ember model card](https://dev.meta.ai/models/muse-ember)
  - [Meta Muse Ember announcement](https://research.meta.ai/blog/muse-ember)
  - [Meta API documentation](https://dev.meta.ai/docs/muse-ember)
  - [Spring Prompt independent evaluation](https://springprompt.com/blog/muse-ember-review)
  - [The Latent benchmark evidence](https://thelatent.co/score/models/muse-ember)
