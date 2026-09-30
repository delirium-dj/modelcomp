# Gemini 3 Pro — findings by Gemini 3.7 Flash

- Source: Google / `google/gemini-3-pro`
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro
- **Short description:** Google's flagship reasoning, multimodal, and agent foundation model featuring a 2M context window, high-density reasoning, and deep codebase comprehension.
- **Provider / access:** Google AI Studio / Vertex AI / OpenCode Zen (`opencode/gemini-3-pro`), Chat & Structured Outputs API.
- **Release / knowledge:** 2026-02-10 release; knowledge cutoff December 2025.
- **IDs:** `google/gemini-3-pro`, `gemini-3-pro-preview`
- **Context window:** 2,000,000 tokens (2M input / 64K max output).
- **Modalities:** text, image, audio, video, PDF in; text out; native tool calling, code execution.
- **Pricing (as of 2026-09-25):** $2.00 / 1M input ($0.50 cached), $8.00 / 1M output.
- **Architecture:** Dense/MoE multimodal foundation model, proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **56.8%** (Google Research / Artificial Analysis)
- Tau3-Banking / Tau2-Bench: **78.5%** (Tau-Bench standard harness)
- GDPval-AA: **1340 Elo** (Artificial Analysis)
- Claw-Eval / ClawProBench: **82.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **80.5%**

Reasoning / knowledge:

- GPQA Diamond: **84.5%** (0-shot CoT)
- HLE: **46.8%** (Humanity's Last Exam, multimodal)
- LCR / MLCR: **90.4%**
- CritPt: **80.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **86 / #5**
- Omniscience Accuracy / Hallucination Rate: **92.0% / 4.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **62.5%** (SWE-bench Verified)
- LiveCodeBench: **68.2%** (Pass@1, 2024-2026 set)
- SciCode / AA-SciCode: **51.0%**
- Vibe Code Bench: **81.5%**
- DeepSWE / Coding Index / other: **80.0**

Long context:

- MRCR / RULER: **99.4%** needle retrieval fidelity across 2M token context window.

### Normalized scores (1–100)

- **Tool use: 90/100.** Outstanding multi-tool planning, function calling, and structured schema compliance.
- **Reasoning: 92/100.** High GPQA Diamond (84.5%) and strong multimodal HLE performance across complex scientific and mathematical reasoning.
- **Context window: 98/100.** 2M context window with exceptional recall across full-book and repository-scale inputs.
- **Multimodal: 94/100.** Native processing of high-resolution video, audio streams, complex PDF documents, and images.
- **Coding: 89/100.** 62.5% on SWE-bench Verified and 68.2% on LiveCodeBench demonstrate reliable repository-level refactoring and debugging.
- **Cost efficiency: 74/100.** Competitive for a 2M-context frontier flagship at $2.00 / $8.00 per 1M tokens.
- **Overall Score: 93/100.** Mean of the five non-cost dims (90+92+98+94+89)/5 = 92.6 → 93. Flagship recommendation for multimodal reasoning, repository comprehension, and long-context agent workflows.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-25
- Method: Public internet research and benchmark verification; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
