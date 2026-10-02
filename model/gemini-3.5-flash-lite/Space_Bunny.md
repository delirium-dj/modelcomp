# Gemini 3.5 Flash-Lite — findings by Space Bunny Alpha

- Source: Google (`gemini-3.5-flash-lite`; stable)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash-Lite
- **Short description:** Google's low-latency, cost-effective multimodal model for high-throughput subagents, document parsing, and simple data extraction.
- **Provider / access:** Google Gemini API (`gemini-3.5-flash-lite`); Google AI Studio; OpenAI-compatible integrations and supported Gemini endpoints.
- **Release / knowledge:** BenchLM lists July 21, 2026. Google model documentation gives July 2026 as the latest update; no knowledge cutoff was shown.
- **IDs:** `gemini-3.5-flash-lite`.
- **Context window:** 1,048,576 input tokens; 65,536 output tokens (Google model documentation, verified 2026-09-24).
- **Modalities:** Text, image, video, audio, and PDF input; text output; thinking, function calling, structured outputs, code execution, search grounding, file search, URL context, and computer use (preview) supported. Image/audio generation is not supported.
- **Pricing (as of 2026-09-24):** BenchLM reports $0.30 per 1M input and $2.50 per 1M output tokens, with cached input $0.03. Google pricing can vary by tier and batch/Flex.
- **Architecture:** Proprietary; Google has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **54.0%** (BenchLM, provider-exact Google Gemini 3.5 Flash-Lite source)
- OSWorld-Verified: **74%** (BenchLM, provider-exact Google source)
- Terminal-Bench 2.1 (Vals AI): **50.2%** (BenchLM, Vals AI leaderboard; different harness)
- Toolathlon, GDPval-AA, Tau3-Banking, Claw-Eval, and MCP-Atlas: **no verified public exact value found**

Reasoning / knowledge:

- GPQA Diamond (Vals AI): **83.8%** (BenchLM, Vals AI leaderboard)
- MMLU-Pro (Vals AI): **85.8%** (BenchLM, Vals AI leaderboard)
- MRCRv2: **72.2%** (BenchLM, provider-exact Google source)
- HLE, LCR/MLCR, CritPt, and hallucination metrics: **no verified public exact value found**

Coding:

- SWE-bench Pro: **54.2%** (BenchLM, provider-exact Google source)
- SWE-bench (Vals AI): **75.0%** (BenchLM, Vals AI leaderboard)
- LiveCodeBench (Vals AI): **79.0%** (BenchLM, Vals AI leaderboard)
- DeepSWE, SciCode, and Vibe Code Bench: **no verified public exact value found**

Long context:

- MRCRv2: **72.2%** (BenchLM, provider-exact Google source)
- Native context: **1,048,576 input tokens / 65,536 output** (Google model documentation)

Sources consulted: [Google Gemini 3.5 Flash-Lite model documentation](https://ai.google.dev/gemini-api/docs/models/gemini-3.5-flash-lite) and [BenchLM Gemini 3.5 Flash-Lite](https://benchlm.ai/models/gemini-3-5-flash-lite), accessed 2026-09-24. Provider-exact and Vals AI harness rows are kept distinct.

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal-Bench 54.0%, OSWorld-Verified 74%, and documented code execution/computer-use support provide solid subagent tool evidence; missing Tau, GDPval, and MCP values cap certainty.
- **Reasoning: 80/100.** GPQA 83.8%, MMLU-Pro 85.8%, and MRCRv2 72.2% support strong reasoning; missing HLE/LCR/CritPt values cap confidence.
- **Context window: 95/100.** Google verifies 1M input and 65K output, and MRCRv2 72.2% is a direct long-context result.
- **Multimodal: 95/100.** Text, image, video, audio, and PDF input with text output are explicitly documented.
- **Coding: 78/100.** SWE-bench Pro 54.2%, Vals SWE 75.0%, and LiveCodeBench Vals 79.0% support solid coding; exact DeepSWE/SciCode values are missing.
- **Cost efficiency: 93/100.** The $0.30/$2.50 rate is inexpensive for a 1M multimodal model, with cached input $0.03; tier and inference-mode pricing still matters.
- **Overall Score: 85.2/100.** (78 + 80 + 95 + 95 + 78) / 5 = 85.2. Best fit: high-volume multimodal subagents, document extraction, and low-latency long-context workflows.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-24
- Method: Public web research of Google's official model documentation and BenchLM; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
