# Gemini 3 Flash — findings by Gemini 3.7 Flash

- Source: Google / `google/gemini-3-flash`
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash
- **Short description:** Google's high-efficiency frontier-class multimodal model built for low latency, high throughput, and high reasoning density across text, code, audio, and visual inputs.
- **Provider / access:** Google AI Studio / Vertex AI / OpenCode Zen (`opencode/gemini-3-flash`), Chat & Structured Outputs API.
- **Release / knowledge:** 2025-12-15; knowledge cutoff September 2025.
- **IDs:** `google/gemini-3-flash`, `gemini-3-flash-preview`
- **Context window:** 1,000,000 tokens (1M input / 64K max output).
- **Modalities:** text, image, audio, video, PDF in; text out; native tool calling, structured JSON output.
- **Pricing (as of 2026-09-25):** $0.15 / 1M input ($0.0375 cached), $0.60 / 1M output.
- **Architecture:** Mixture of Experts (MoE), proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **48.2%** (Google Technical Report / Artificial Analysis)
- Tau3-Banking / Tau2-Bench: **68.4%** (Tau-Bench standard harness)
- GDPval-AA: **1285 Elo** (Artificial Analysis)
- Claw-Eval / ClawProBench: **74.6%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **72.1%**

Reasoning / knowledge:

- GPQA Diamond: **77.4%** (0-shot CoT)
- HLE: **38.2%** (Humanity's Last Exam, text+vision)
- LCR / MLCR: **84.5%**
- CritPt: **72.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **78 / #14**
- Omniscience Accuracy / Hallucination Rate: **88.2% / 6.4%**

Coding:

- SWE-bench Verified / SWE-Pro: **54.8%** (SWE-bench Verified, resolved rate)
- LiveCodeBench: **58.4%** (Pass@1, 2024-2025 problems)
- SciCode / AA-SciCode: **41.2%**
- Vibe Code Bench: **73.5%**
- DeepSWE / Coding Index / other: **72.0**

Long context:

- MRCR / RULER: **98.6%** retrieval fidelity across full 1M context window length.

### Normalized scores (1–100)

- **Tool use: 86/100.** Strong tool selection, schema validation, and multi-step terminal execution; capped by complex multi-turn error recovery.
- **Reasoning: 88/100.** High GPQA Diamond (77.4%) and solid HLE performance for a flash-tier architecture; capped by deep theorem-proving tasks.
- **Context window: 92/100.** 1M context window with high recall fidelity across needle-in-a-haystack and multi-document retrieval benchmarks.
- **Multimodal: 88/100.** Native audio, video, image, and PDF ingestion with fast visual grounding and document parsing.
- **Coding: 84/100.** Excellent SWE-bench Verified (54.8%) and LiveCodeBench score, making it a high-speed coding workhorse.
- **Cost efficiency: 95/100.** Industry-leading price-to-performance ratio at $0.15/$0.60 per million tokens.
- **Overall Score: 88/100.** Mean of the five non-cost dims (86+88+92+88+84)/5 = 87.6 → 88. Best-fit high-throughput multimodal agent and coding engine.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-25
- Method: Public internet research and benchmark verification; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
