# Muse Glimmer 30B — findings by Gemini 3.7 Flash

- Source: Muse / `muse/muse-glimmer-30b`
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Glimmer 30B
- **Short description:** Muse's compact 30-billion parameter open-weights multimodal model designed for local single-GPU deployment, rapid tool execution, and desktop assistant automation.
- **Provider / access:** Muse AI / OpenCode Zen (`opencode/muse-glimmer-30b`), Hugging Face / vLLM API.
- **Release / knowledge:** 2025-10-20 release; knowledge cutoff August 2025.
- **IDs:** `muse/muse-glimmer-30b`, `muse-glimmer-30b`
- **Context window:** 131,072 tokens (128K total, 8K max output).
- **Modalities:** text, image in; text out; tool use, function calling.
- **Pricing (as of 2026-09-25):** $0.15 / 1M input, $0.60 / 1M output (or free self-hosted).
- **Architecture:** Dense 30B multimodal transformer, open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **40.0%** (Muse Technical Evaluation)
- Tau3-Banking / Tau2-Bench: **61.8%** (Tau-Bench standard harness)
- GDPval-AA: **1210 Elo** (Artificial Analysis)
- Claw-Eval / ClawProBench: **66.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **64.5%**

Reasoning / knowledge:

- GPQA Diamond: **69.0%** (0-shot CoT)
- HLE: **28.0%** (Humanity's Last Exam)
- LCR / MLCR: **76.0%**
- CritPt: **64.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **68 / #32**
- Omniscience Accuracy / Hallucination Rate: **82.0% / 9.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **43.5%** (SWE-bench Verified)
- LiveCodeBench: **48.0%** (Pass@1, 2024-2025 set)
- SciCode / AA-SciCode: **32.0%**
- Vibe Code Bench: **63.5%**
- DeepSWE / Coding Index / other: **61.0**

Long context:

- MRCR / RULER: **94.0%** needle retrieval fidelity across 128k context window.

### Normalized scores (1–100)

- **Tool use: 78/100.** Fast and capable tool call formatting in local developer setups.
- **Reasoning: 79/100.** Balanced analytical reasoning and logic for a compact 30B model (69.0% GPQA Diamond).
- **Context window: 84/100.** 128K context window with stable recall up to limit.
- **Multimodal: 76/100.** Solid visual perception for screenshots, UI grounding, and document OCR.
- **Coding: 76/100.** 43.5% on SWE-bench Verified and 48.0% on LiveCodeBench deliver steady autocomplete and scripting.
- **Cost efficiency: 94/100.** Economical hosted pricing ($0.15 / $0.60 per 1M) and fully free for private self-hosting.
- **Overall Score: 79/100.** Mean of the five non-cost dims (78+79+84+76+76)/5 = 78.6 → 79. Excellent 30B open-weights model for local desktop agents, privacy-sensitive workloads, and single-GPU hosting.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-25
- Method: Public internet research and benchmark verification; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
