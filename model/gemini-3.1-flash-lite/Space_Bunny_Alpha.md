# Gemini 3.1 Flash-Lite — findings by Space Bunny Alpha

- Source: Google (`gemini-3.1-flash-lite`; stable successor to deprecated preview)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash-Lite
- **Short description:** Google's cost-efficient multimodal Flash-Lite model for high-volume extraction, subagents, and lightweight multimodal reasoning.
- **Provider / access:** Google Gemini API (`gemini-3.1-flash-lite`); Google AI Studio and supported Gemini endpoints. The older `gemini-3.1-flash-lite-preview` ID was shut down on 2026-05-25.
- **Release / knowledge:** BenchLM lists March 3, 2026 for the stable model. The deprecated preview page says it was updated in March 2026; no knowledge cutoff was shown.
- **IDs:** `gemini-3.1-flash-lite`; deprecated `gemini-3.1-flash-lite-preview`.
- **Context window:** 1,048,576 input tokens; 65,536 output tokens (Google documentation for the corresponding model family; BenchLM reports 1M).
- **Modalities:** Text, image, video, audio, and PDF input; text output; thinking, function calling, structured outputs, code execution, search grounding, file search, URL context, and computer use (preview) supported. Image/audio generation is not supported.
- **Pricing (as of 2026-09-24):** BenchLM reports $0.25 per 1M input, $0.025 cached input, and $1.50 output. Pricing varies by provider and inference tier.
- **Architecture:** Proprietary; Google has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (Vals AI): **34.1%** (BenchLM, Vals AI leaderboard)
- Gert Labs Composite Game Benchmark: **38.46%** (BenchLM, exact benchmark source)
- Toolathlon, GDPval-AA, Tau3-Banking, Claw-Eval, and MCP-Atlas: **no verified public exact value found**

Reasoning / knowledge:

- GPQA Diamond (Vals AI): **81.1%** (BenchLM, Vals AI leaderboard)
- MMLU-Pro (Vals AI): **86.2%** (BenchLM, Vals AI leaderboard)
- HLE, LCR/MLCR, CritPt, and hallucination metrics: **no verified public exact value found**

Coding:

- LiveCodeBench (Vals AI): **80.1%** (BenchLM, Vals AI leaderboard)
- SWE-bench (Vals AI): **62.8%** (BenchLM, Vals AI leaderboard)
- Vibe Code Bench v1.1: **0.00%** (BenchLM, Vals AI leaderboard)
- SWE-bench Pro, DeepSWE, SciCode, and exact SWE-bench Verified: **no verified public exact value found**

Long context:

- No exact-model retrieval-at-length score was found. The reported context capacity is 1M tokens.

Sources consulted: [Google deprecated Gemini 3.1 Flash-Lite preview documentation](https://ai.google.dev/gemini-api/docs/models/gemini-3.1-flash-lite-preview), [Google current model index](https://ai.google.dev/gemini-api/docs/models), and [BenchLM Gemini 3.1 Flash-Lite](https://benchlm.ai/models/gemini-3-1-flash-lite), accessed 2026-09-24. The preview retirement and stable-model distinction are kept explicit.

### Normalized scores (1–100)

- **Tool use: 62/100.** The model documents broad tools, but Terminal-Bench Vals 34.1% and Composite Game 38.46% show limited measured agent performance; Tau/GDPval/MCP values are missing.
- **Reasoning: 75/100.** GPQA 81.1% and MMLU-Pro 86.2% are solid, but HLE/LCR/CritPt values are unavailable and the profile's reasoning coverage is sparse.
- **Context window: 95/100.** A 1M context is reported, though no exact-model retrieval-at-length result was found.
- **Multimodal: 95/100.** Google explicitly documents text, image, video, audio, and PDF input with text output.
- **Coding: 70/100.** LiveCodeBench 80.1% and SWE Vals 62.8% provide some coding evidence, but Vibe Code Bench is 0.00% and SWE-Pro/DeepSWE/SciCode are absent.
- **Cost efficiency: 96/100.** The $0.25/$1.50 rate and $0.025 cached input are highly competitive for a 1M multimodal model.
- **Overall Score: 79.4/100.** (62 + 75 + 95 + 95 + 70) / 5 = 79.4. Best fit: inexpensive high-volume multimodal extraction and subagent tasks, with less evidence for hard agentic coding.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-24
- Method: Public web research of Google's current/deprecated model documentation and BenchLM; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
