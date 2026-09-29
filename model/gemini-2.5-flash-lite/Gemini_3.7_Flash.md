# Google Gemini 2.5 Flash Lite — findings by Gemini 3.7 Flash

- Source: Google / `google/gemini-2.5-flash-lite`
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Google Gemini 2.5 Flash Lite
- **Short description:** Google's ultra-lightweight, high-speed multimodal inference model optimized for high-volume classification, edge agent routing, and sub-second token delivery.
- **Provider / access:** Google AI Studio / Vertex AI / OpenCode Zen (`opencode/google-gemini-2.5-flash-lite`), Chat Completions API.
- **Release / knowledge:** 2025-06-20 release; knowledge cutoff April 2025.
- **IDs:** `google/gemini-2.5-flash-lite`, `google-gemini-2.5-flash-lite`
- **Context window:** 1,048,576 tokens (1M input / 8K max output).
- **Modalities:** text, image, audio, video in; text out; tool use, structured output.
- **Pricing (as of 2026-09-25):** $0.075 / 1M input ($0.01875 cached), $0.30 / 1M output.
- **Architecture:** Compact multimodal MoE, proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **36.5%** (Google Technical Report / Artificial Analysis)
- Tau3-Banking / Tau2-Bench: **59.5%** (Tau-Bench standard harness)
- GDPval-AA: **1195 Elo** (Artificial Analysis)
- Claw-Eval / ClawProBench: **63.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **61.5%**

Reasoning / knowledge:

- GPQA Diamond: **63.5%** (0-shot CoT)
- HLE: **23.0%** (Humanity's Last Exam)
- LCR / MLCR: **71.0%**
- CritPt: **59.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **62 / #42**
- Omniscience Accuracy / Hallucination Rate: **78.5% / 11.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **37.5%** (SWE-bench Verified)
- LiveCodeBench: **42.5%** (Pass@1, 2024-2025 set)
- SciCode / AA-SciCode: **27.0%**
- Vibe Code Bench: **57.5%**
- DeepSWE / Coding Index / other: **54.0**

Long context:

- MRCR / RULER: **94.0%** retrieval accuracy across 1M context window.

### Normalized scores (1–100)

- **Tool use: 76/100.** Fast and reliable function calling in high-throughput automation pipelines.
- **Reasoning: 75/100.** Balanced general reasoning and basic problem solving for an ultra-compact model (63.5% GPQA Diamond).
- **Context window: 92/100.** 1M context window with high recall across document summarization.
- **Multimodal: 84/100.** Responsive audio, video, and image parsing with fast latency.
- **Coding: 71/100.** 37.5% on SWE-bench Verified and 42.5% on LiveCodeBench deliver quick script fixes and autocomplete.
- **Cost efficiency: 98/100.** Market-leading low-cost pricing at $0.075 / $0.30 per 1M tokens.
- **Overall Score: 80/100.** Mean of the five non-cost dims (76+75+92+84+71)/5 = 79.6 → 80. Ultra-low-cost, high-speed multimodal model for high-volume routing, audio transcription, and lightweight agent tasks.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-25
- Method: Public internet research and benchmark verification; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
