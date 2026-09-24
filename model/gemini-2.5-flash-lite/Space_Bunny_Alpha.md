# Gemini 2.5 Flash-Lite — findings by Space Bunny Alpha

- Source: Google (`gemini-2.5-flash-lite`; stable)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash-Lite
- **Short description:** Google's cost-efficient, low-latency multimodal model for high-volume classification, extraction, and lightweight thinking tasks, now a legacy-access model.
- **Provider / access:** Google Gemini API (`gemini-2.5-flash-lite`); Google AI Studio. Google limits access to users who have actively used 2.5 models; the preview ID is shut down.
- **Release / knowledge:** Google documentation lists a July 2025 stable update and a January 2025 knowledge cutoff. The model was released in 2025; no separate day-level date was shown.
- **IDs:** `gemini-2.5-flash-lite`; preview `gemini-2.5-flash-lite-preview-09-2025` is shut down.
- **Context window:** 1,048,576 input tokens; 65,536 output tokens (Google model documentation).
- **Modalities:** Text, image, video, audio, and PDF input; text output; thinking, function calling, structured outputs, code execution, file search, Google Search grounding, URL context, and computer use supported. Live API and image/audio generation are not supported.
- **Pricing (as of 2026-09-24):** BenchLM reports $0.30 per 1M input, $2.50 per 1M output, and $0.03 cached input. Google pricing varies by tier and inference mode.
- **Architecture:** Proprietary; Google has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench, Tau3-Banking, GDPval-AA, Claw-Eval, Toolathlon, and MCP-Atlas: **no verified public score found**
- Google documents function calling, code execution, file search, search grounding, URL context, and computer use, but no exact model scores were shown.

Reasoning / knowledge:

- FrontierMath v2 Tiers 1–3: **4.844%**; Tier 4: **4.167%** (Epoch AI leaderboard via BenchLM)
- GPQA, HLE, LCR/MLCR, CritPt, hallucination metrics, and an independent composite: **no verified public score found**

Coding:

- SWE-bench Verified, SWE-Pro, LiveCodeBench, SciCode, Vibe Code Bench, and DeepSWE: **no verified public score found**

Long context:

- Native context: **1,048,576 input tokens / 65,536 output** (Google model documentation); no exact-model retrieval-at-length result was found.

Sources consulted: [Google Gemini 2.5 Flash-Lite model documentation](https://ai.google.dev/gemini-api/docs/models/gemini-2.5-flash-lite) and [BenchLM Gemini 2.5 Flash profile](https://benchlm.ai/models/gemini-2-5-flash-lite), accessed 2026-09-24. The BenchLM page exposes only FrontierMath rows; sibling-model scores are not transferred.

### Normalized scores (1–100)

- **Tool use: 68/100.** Google documents a broad tool set, but no exact-model agent/tool benchmark was found.
- **Reasoning: 52/100.** Thinking is supported, while the only measured rows are weak FrontierMath values and standard reasoning benchmarks are absent.
- **Context window: 95/100.** Google verifies 1M input and 65K output; retrieval quality is unmeasured.
- **Multimodal: 95/100.** Text, image, video, audio, and PDF input with text output are explicitly documented.
- **Coding: 58/100.** The model supports code execution and is intended for lightweight tasks, but no exact SWE/LiveCodeBench/SciCode score is available.
- **Cost efficiency: 98/100.** The $0.30/$2.50 rate and $0.03 cached input are exceptionally low for a 1M multimodal model, subject to legacy access and tier limits.
- **Overall Score: 73.6/100.** (68 + 52 + 95 + 95 + 58) / 5 = 73.6. Best fit: inexpensive high-volume multimodal extraction and classification, not frontier coding or deep reasoning.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-24
- Method: Public web research of Google's official model documentation and BenchLM; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
