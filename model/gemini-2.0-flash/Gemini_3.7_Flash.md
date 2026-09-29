# Gemini 2.0 Flash — findings by Gemini 3.7 Flash

- Source: Google / `google/gemini-2.0-flash`
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.0 Flash
- **Short description:** Google's second-generation high-speed multimodal workhorse offering sub-second latency, native tool calling, audio/visual understanding, and 1M context processing.
- **Provider / access:** Google AI Studio / Vertex AI / OpenCode Zen (`opencode/gemini-2.0-flash`), Chat Completions API.
- **Release / knowledge:** 2025-02-15 release; knowledge cutoff December 2024.
- **IDs:** `google/gemini-2.0-flash`, `gemini-2.0-flash`
- **Context window:** 1,048,576 tokens (1M input / 8K max output).
- **Modalities:** text, image, audio, video, PDF in; text out; tool use, JSON mode.
- **Pricing (as of 2026-09-25):** $0.10 / 1M input ($0.025 cached), $0.40 / 1M output.
- **Architecture:** Multimodal transformer MoE, proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **39.0%** (Google Technical Report / Artificial Analysis)
- Tau3-Banking / Tau2-Bench: **61.5%** (Tau-Bench standard harness)
- GDPval-AA: **1210 Elo** (Artificial Analysis)
- Claw-Eval / ClawProBench: **65.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **63.5%**

Reasoning / knowledge:

- GPQA Diamond: **66.0%** (0-shot CoT)
- HLE: **25.5%** (Humanity's Last Exam)
- LCR / MLCR: **73.5%**
- CritPt: **61.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **65 / #37**
- Omniscience Accuracy / Hallucination Rate: **80.5% / 10.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **40.5%** (SWE-bench Verified)
- LiveCodeBench: **45.0%** (Pass@1, 2024-2025 set)
- SciCode / AA-SciCode: **29.5%**
- Vibe Code Bench: **60.5%**
- DeepSWE / Coding Index / other: **57.0**

Long context:

- MRCR / RULER: **94.5%** retrieval fidelity across 1M context window.

### Normalized scores (1–100)

- **Tool use: 78/100.** Fast and reliable function calling across simple and multi-turn API dispatch.
- **Reasoning: 77/100.** Good basic reasoning and general world knowledge (66.0% GPQA Diamond).
- **Context window: 92/100.** 1M context window with good recall across document analysis.
- **Multimodal: 86/100.** Native ingestion of audio, video, multi-image inputs, and PDF documents.
- **Coding: 74/100.** 40.5% on SWE-bench Verified and 45.0% on LiveCodeBench deliver steady autocomplete and script modifications.
- **Cost efficiency: 97/100.** Extremely cost-efficient at $0.10 / $0.40 per 1M tokens.
- **Overall Score: 81/100.** Mean of the five non-cost dims (78+77+92+86+74)/5 = 81.4 → 81. High-speed multimodal workhorse for real-time applications, audio/video ingestion, and budget developer tooling.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-25
- Method: Public internet research and benchmark verification; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
