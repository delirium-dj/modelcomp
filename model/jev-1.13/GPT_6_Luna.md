# Jev 1.13 — findings by GPT-6 Luna

- Source: TypeSafe AI / Jev 1.13 (`jev-1.13.0`; OpenCode Zen `opencode/jev-1.13`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Jev 1.13
- **Short description:** TypeSafe AI's proprietary System One decision model. It evaluates text or JSON application state against bounded yes/no (`noul`), choice, and score questions, returning typed answers and probabilities rather than conversational text. It is a decision component, not a general-purpose chatbot or coding agent.
- **Provider / access:** TypeSafe API `POST https://api.typesafe.ai/v1/systemone`, model `jev-1.13.0`; also served through OpenCode Zen at `https://opencode.ai/inference/systemone/v1/systemone`, model `jev-1.13`. OpenCode lists a separate limited-time `jev-1.13-free` ID. This endpoint uses the System One request/response schema, not Chat Completions or the Responses API.
- **Release / knowledge:** TypeSafe identifies Jev 1.14 as the newest release, available October 14, 2026; Jev 1.13 therefore predates that date. An exact 1.13 launch date and knowledge cutoff were not found.
- **IDs:** TypeSafe `jev-1.13.0`; OpenCode Zen `jev-1.13`; limited-time OpenCode Zen free route `jev-1.13-free`. Do not substitute `jev-latest`, which currently resolves to 1.14.0.
- **Context window:** Default 64K per request and 32K per question. An opt-in `TypeSafe-Danger-Zone-Long-Context: true` header raises both limits to 262K; TypeSafe warns that this mode is slower and less accurate. Jev 1.13's own known-issues page documents accuracy loss with large or irrelevant state.
- **Modalities:** The exact Jev 1.13 catalog entry is text input only (string, JSON object, or array of text) and typed decision output. No speech, video, or image input was verified for this model. The generic TypeSafe API schema includes image features for vision-language models; that does not establish image support for Jev 1.13.
- **Pricing (as of 2026-11-01):** TypeSafe's published rate is $0.042 per million input tokens; output is free. OpenCode Zen lists the same paid input rate and a separately identified limited-time free route. JevBench estimates $0.032 per 1,000 decisions on its measured token mix; that is benchmark-derived cost, not a universal per-request fee.
- **Architecture:** Closed/proprietary API; weights and underlying model are undisclosed. No parameter count or independently verifiable architecture was found. TypeSafe says Jev is trained for calibrated decisions and does not generate text or code.

### Raw benchmarks found

**JevBench by Benchmark Heaven, exact Jev 1.13.0 row:**

- **Historical JevBench v1.5.4:** JevBench score **72.13** (option A/C; option B **72.11**), from 1,624 answered decisions with no missing rows. Its reported axes were Intelligence **72.00**, Calibration **88.03**, Speed **83.81**, and Cost **54.73**. The score is specific to this benchmark release and its composite definition; it is not a modelcomp Overall score.
- **Current published page, JevBench v1.8.4 / method v1.7 (10-second rule):** Capability **77.1** (reference, not ranked), Composite **71.4** (secondary, not ranked), Intelligence **63.6**, Calibration **90.6**, Speed **91.2**, Cost **54.7**. The model page says last measured October 5, 2026; the current method re-scores recorded decision times and is not directly interchangeable with v1.5.4. It reports measured API p50 **0.243 s**, p95 **0.311 s**, and **$0.032 per 1,000 decisions**. The archived v1.6.43 figures (Capability 77.13, Composite 71.49) are explicitly superseded by the current 10-second-rule presentation.
- JevBench is a third-party decision-model benchmark, not a vendor score. Its benchmark author reports finite task coverage, hidden/sealed inputs that prevent full independent reproduction, and workload/runtime limitations. Its Intelligence and Calibration axes measure typed decisions; they are not GPQA, HLE, or general-purpose reasoning results.

**Independent text-classification evaluation:**

- A separate public GitHub benchmark used `typesafe/jev-1.13` through OpenRouter's Decisions API, with 500 examples from each held-out dataset. **SST-2:** accuracy/macro-F1 **95.4%/95.4**, ECE **0.026**, p50/p95 **376/678 ms**. **Banking77:** **76.4%/75.3**, ECE **0.125**, p50/p95 **389/676 ms**. **AG News:** **84.3%/84.2**, ECE **0.112**, p50/p95 **381/715 ms**; an alternate prompt-description condition reached **85.8%/85.9** with ECE **0.103**. These are small, dataset-specific classification runs, not evidence of general agent or reasoning performance.

Agent / tool use:

- Jev returns structured decisions for software to consume, but does not itself call tools or execute an agent loop. No exact-model Terminal-Bench, Tau3, GDPval, OSWorld, or tool-call efficiency score was found. The JevBench results above measure decision quality and should not be relabeled as tool-use scores.

Reasoning / knowledge:

- JevBench's current Intelligence axis is **63.6/100**; see the version distinction above. TypeSafe documents that Jev 1.13 is comparatively literal and can struggle with arithmetic/counting, date comparisons, indirection, adversarial content, contradictory criteria, and choice-order changes. No exact-model GPQA Diamond, HLE, MMLU, or knowledge-cutoff score was found.

Coding:

- No verified code-generation, repository-repair, or programming benchmark found. TypeSafe explicitly says Jev is not trained to generate text or code; use a generative model for code production.

Long context:

- The 262K setting is opt-in and TypeSafe explicitly warns it can be slower and less accurate. No exact-model public retrieval test establishing dependable performance at 262K was found.

### Normalized scores (1–100)

- **Tool use: 40/100.** Typed outputs are readily consumable by application code, but Jev does not invoke tools or operate as an agent, and no exact-model tool-use benchmark was found. [TypeSafe System One](https://docs.typesafe.ai/concepts/system-one); [JevBench](https://benchmarkheaven.com/jev-models/jev-1.13.0).
- **Reasoning: 65/100.** The current JevBench Intelligence axis is 63.6 and independent classification results are strong on some bounded tasks, but these are not broad knowledge/reasoning tests; the vendor documents material limits on multi-step, numerical, and adversarial judgments. [JevBench model page](https://benchmarkheaven.com/jev-models/jev-1.13.0); [Jev 1.13 known issues](https://docs.typesafe.ai/model-jaggedness/jev-1.13.md).
- **Context window: 65/100.** The default request limit is 64K, with a documented 262K opt-in path. The extended limit earns the lower edge of the 200K–500K band, but it is less accurate and no full-window retrieval score was verified. [TypeSafe models and context limits](https://docs.typesafe.ai/models.md).
- **Multimodal: 15/100.** Jev 1.13 is listed as text-input only; no exact-model image, audio, or video capability was established. [TypeSafe models](https://docs.typesafe.ai/models.md).
- **Coding: 15/100.** The model does not generate code and has no verified coding benchmark; it may make bounded decisions about code when supplied as text, which is a different capability. [TypeSafe System One](https://docs.typesafe.ai/concepts/system-one).
- **Cost efficiency: 99/100.** $0.042/M input with free output is exceptionally inexpensive; OpenCode also lists a separately labeled, limited-time free route. [TypeSafe models/pricing](https://docs.typesafe.ai/models.md); [OpenCode Zen](https://opencode.ai/docs/zen).
- **Overall Score: 40/100.** Half-up mean of the five quality dimensions: (40 + 65 + 65 + 15 + 15) / 5 = 40. Cost is excluded. A fast, inexpensive typed-decision component for narrow workflows, but not a replacement for a generative model, tool-calling agent, or code model.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-11-01
- Method: Three independent exact-model searches followed by direct review of TypeSafe's official model/API documentation and Jev 1.13 known-issues page; OpenCode's live Console docs; Benchmark Heaven's JevBench historical and current records/methodology; and an independent GitHub text-classification benchmark. Kept JevBench v1.5.4's 72.13 score distinct from current v1.8.4/method-v1.7 axes and from the modelcomp normalized Overall. No Jev 1.14 or other decision-model results were transferred.
- Reference URLs:
  - [TypeSafe models, IDs, pricing, and context](https://docs.typesafe.ai/models.md)
  - [TypeSafe System One description](https://docs.typesafe.ai/concepts/system-one.md)
  - [TypeSafe Jev 1.13 known issues](https://docs.typesafe.ai/model-jaggedness/jev-1.13.md)
  - [OpenCode Zen models, endpoints, and pricing](https://opencode.ai/docs/zen)
  - [JevBench v1.5.4 result archive](https://benchmarkheaven.com/api/jevbench/v1.5.4)
  - [JevBench v1.8.4/method v1.7 methodology](https://benchmarkheaven.com/jev-models/methodology)
  - [Current Jev 1.13.0 benchmark page](https://benchmarkheaven.com/jev-models/jev-1.13.0)
  - [JevBench open-source harness](https://github.com/fstandhartinger/jevbench)
  - [Independent Jev text-classification results](https://github.com/dhruvmehra/jevbench/blob/main/docs/results/2026-09-22-n500-summary.md)

---
