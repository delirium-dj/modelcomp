# GPT-5.2 Codex — findings by GPT 5.6 Luna

- Source: OpenAI / `gpt-5.2-codex`
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2 Codex
- **Short description:** OpenAI's reasoning model optimized for long-horizon, agentic coding tasks in Codex and similar environments. It is a distinct coding model from GPT-5.2 Pro and GPT-5.3 Codex.
- **Provider / access:** OpenAI Responses API, exact ID `gpt-5.2-codex`; OpenRouter also exposes `openai/gpt-5.2-codex` through a compatibility Chat Completions route.
- **Release / knowledge:** Default snapshot `gpt-5.2-codex`; Artificial Analysis dates the release to December 2025. OpenAI lists an 2025-08-31 knowledge cutoff.
- **IDs:** `gpt-5.2-codex` (OpenAI); `openai/gpt-5.2-codex` (OpenRouter).
- **Context window:** 400,000 tokens, with 272,000 maximum input and 128,000 maximum output tokens, verified in OpenAI's official model documentation.
- **Modalities:** Text and image input, text output, reasoning, streaming, structured outputs, function calling, hosted shell, skills, and web search. No audio/video modality was verified.
- **Pricing (as of 2026-10-23):** $1.75 per 1M input tokens, $0.175 cached input, and $14 per 1M output tokens. Paid model; no Free ID verified.
- **Architecture:** Proprietary; parameter count is undisclosed.

### Raw benchmarks found

> OpenAI's official page supplies model/API specifications but no public numeric benchmarks. Artificial Analysis and BenchLM provide independent measurements, with BenchLM noting partial coverage and a conservative aggregate. Their results are retained by benchmark and harness rather than treated as an official score.

Agent / tool use:

- Tau2-bench: **92.1%** (BenchLM, source attributed to Artificial Analysis).
- JobBench: **26.0%** (BenchLM, JobBench paper).
- Artificial Analysis reports a composite Intelligence Index of **29 estimated** for the xhigh route; this index includes agentic evaluations but is not a tool-only score.

Reasoning / knowledge:

- GPQA Diamond: **89.9%** (BenchLM, Artificial Analysis).
- Humanity's Last Exam: **35.7%** (BenchLM, Artificial Analysis).
- AA-LCR: **82.3%** (BenchLM, Artificial Analysis).
- CritPt: **8.7%** (BenchLM, Artificial Analysis).
- AA-Omniscience accuracy / hallucination rate / index: **41.1% / 73.4% / -2.2** (BenchLM, Artificial Analysis).

Coding:

- LiveCodeBench: **88.0%** (Vals AI leaderboard, via BenchLM).
- SWE-bench Verified: **72.4%** (Vals AI leaderboard, via BenchLM).
- Vibe Code Bench v1.1: **37.91%** (Vals AI leaderboard, via BenchLM).
- Artificial Analysis's Intelligence Index is **29 estimated**, substantially lower than the coding-specific scores because it combines coding with knowledge, agentic, and reliability evaluations.

Multimodal:

- AA-MMMU-Pro: **76.3%** (BenchLM, Artificial Analysis).
- Official OpenAI documentation confirms image input and text output; no audio/video benchmark was found.

Long context:

- 400K advertised context, 272K maximum input, and AA-LCR **82.3%**. No public MRCR/RULER score at the maximum context was verified.

### Normalized scores (1–100)

- **Tool use: 88/100.** Tau2-bench at 92.1% supports strong function/tool behavior, but JobBench at 26.0% shows that performance is sensitive to task type and harness.
- **Reasoning: 84/100.** GPQA 89.9%, HLE 35.7%, and LCR 82.3% are strong, while the low CritPt and negative AA-Omniscience index cap reliability.
- **Context window: 90/100.** The 400K window and 82.3% AA-LCR result are well supported; no maximum-window retrieval score prevents a higher rating.
- **Multimodal: 75/100.** Image input and MMMU-Pro 76.3% establish useful vision support, but the model is text-output-only and has no verified audio/video capability.
- **Coding: 86/100.** LiveCodeBench 88.0% and SWE-bench Verified 72.4% are strong, but Vibe Code Bench at 37.91% indicates weaker end-to-end product-building reliability.
- **Cost efficiency: 84/100.** $1.75/$14 pricing is reasonable for an agentic coding model and cached input is inexpensive, but the output price remains material for long reasoning runs.
- **Overall Score: 85/100.** Half-up mean of the five quality dimensions: (88 + 84 + 90 + 75 + 86) / 5 = 84.6. Best fit is structured Codex-style software engineering with tool access and long-running repository work.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-10-23
- Method: Four independent web searches and source comparisons across OpenAI's official model documentation, Artificial Analysis, BenchLM, OpenRouter, Vals AI, and JobBench. Composite and task-specific benchmark conflicts were kept separate; scores are normalized interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
