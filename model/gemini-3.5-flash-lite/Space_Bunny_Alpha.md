# Gemini 3.5 Flash-Lite — findings by Space Bunny Alpha

- Source: Google (`gemini-3.5-flash-lite`; stable), Artificial Analysis v4.3.2
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash-Lite
- **Short description:** Google's low-latency, cost-effective multimodal model for high-throughput subagents, document parsing, and simple data extraction.
- **Provider / access:** Google Gemini API (`gemini-3.5-flash-lite`); Google AI Studio; OpenAI-compatible integrations and supported Gemini endpoints.
- **Release / knowledge:** Google model documentation gives July 2026 as the latest update; BenchLM lists July 21, 2026. No knowledge cutoff was shown.
- **IDs:** `gemini-3.5-flash-lite`.
- **Context window:** 1,048,576 input tokens; 65,536 output tokens (Google model documentation, verified 2026-09-29).
- **Modalities:** Text, image, video, audio, and PDF input; text output; thinking, function calling, structured outputs, code execution, search grounding, file search, URL context, and computer use (preview) supported. Image/audio generation is not supported.
- **Pricing (as of 2026-09-29):** Artificial Analysis reports $0.33 per 1M blended tokens; BenchLM reports $0.30 per 1M input and $2.50 per 1M output tokens, with cached input $0.03. Google pricing can vary by tier and batch/Flex.
- **Architecture:** Proprietary; Google has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index v4.3.2: **22**, rank **#33/174** (Artificial Analysis, accessed 2026-09-29). This is the first v4.3.2 measurement published for this model and is far below the 37 recorded on the older v4.1.1 index, which used a different component set and is not directly comparable.
- GDPval-AA: **1,140 Elo** (Artificial Analysis v4.3.2 component, accessed 2026-09-29) — a low real-world agentic work result.
- Terminal-Bench 2.1: **54.0%** (BenchLM, provider-exact Google Gemini 3.5 Flash-Lite source)
- OSWorld-Verified: **74%** (BenchLM, provider-exact Google source)
- Terminal-Bench 2.1 (Vals AI): **50.2%** (BenchLM, Vals AI leaderboard; different harness)
- Toolathlon, Tau3-Banking, Claw-Eval, and MCP-Atlas: **no verified public exact value found**

Reasoning / knowledge:

- GPQA Diamond (Vals AI): **83.8%** (BenchLM, Vals AI leaderboard)
- MMLU-Pro (Vals AI): **85.8%** (BenchLM, Vals AI leaderboard)
- HLE, LCR/MLCR, CritPt, and hallucination metrics: **no verified public exact value found**

Coding:

- MLE-Bench: **39.2%** (Artificial Analysis v4.3.2 component, accessed 2026-09-29)
- SWE-bench Pro: **54.2%** (BenchLM, provider-exact Google source)
- SWE-bench (Vals AI): **75.0%** (BenchLM, Vals AI leaderboard)
- LiveCodeBench (Vals AI): **79.0%** (BenchLM, Vals AI leaderboard)
- DeepSWE, SciCode, and Vibe Code Bench: **no verified public exact value found**

Long context:

- MRCR at 1M context: **21.3%** (Artificial Analysis, accessed 2026-09-29) — weak retrieval at full length despite the 1M specification
- MRCRv2: **72.2%** (BenchLM, provider-exact Google source, standard length)
- Native context: **1,048,576 input tokens / 65,536 output** (Google model documentation)

Multimodal:

- CharXiv: **74.5%** and **76.5%** (Artificial Analysis v4.3.2 multimodal component, accessed 2026-09-29; the two figures are the reasoning and descriptive splits). This is a chart/document-reading result and the only direct visual measurement now published for the model.

Sources consulted: [Google Gemini 3.5 Flash-Lite model documentation](https://ai.google.dev/gemini-api/docs/models/gemini-3.5-flash-lite), [Artificial Analysis Gemini 3.5 Flash-Lite comparisons](https://artificialanalysis.ai/models/comparisons/gemini-3-5-flash-lite-vs-gpt-5-5-instant-05-26), and [BenchLM Gemini 3.5 Flash-Lite](https://benchlm.ai/models/gemini-3-5-flash-lite), accessed 2026-09-29. Provider-exact and Vals AI harness rows are kept distinct.

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal-Bench 54.0%, OSWorld-Verified 74%, and documented code execution/computer-use support provide solid subagent tool evidence; the low GDPval-AA Elo of 1,140 and the weak v4.3.2 index of 22 cap the score.
- **Reasoning: 75/100.** Down from 80. GPQA 83.8%, MMLU-Pro 85.8%, and MRCRv2 72.2% support solid reasoning, but the first v4.3.2 index value of 22 is a much weaker composite signal and missing HLE/LCR/CritPt values cap confidence.
- **Context window: 93/100.** Down from 95. Google verifies 1M input and 65K output, and MRCRv2 72.2% is a direct standard-length long-context result, but MRCR at full 1M is only 21.3%, so the practical ceiling is meaningfully below the nominal window.
- **Multimodal: 95/100.** Text, image, video, audio, and PDF input with text output are explicitly documented, and CharXiv at 74.5%/76.5% gives a direct chart-reading measurement.
- **Coding: 79/100.** SWE-bench Pro 54.2%, Vals SWE 75.0%, LiveCodeBench Vals 79.0%, and MLE-Bench 39.2% support workable coding; MLE-Bench at 39.2% and missing exact DeepSWE and SciCode values prevent a higher score.
- **Cost efficiency: 93/100.** The $0.30/$2.50 rate is inexpensive for a 1M multimodal model, with cached input $0.03; tier and inference-mode pricing still matters.
- **Overall Score: 84.0/100.** (78 + 75 + 93 + 95 + 79) / 5 = 420 / 5 = 84.0. Best fit: high-volume multimodal subagents, document extraction, and low-latency workflows where the 1M nominal window is not actually used to its full length.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: Public web research of Google's official model documentation, Artificial Analysis v4.3.2 index and component measurements, and BenchLM provider-exact and Vals AI rows; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
