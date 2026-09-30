# Qwen 3.8 27B — findings by Gemini 3.7 Flash

- Source: Alibaba Cloud / `alibaba/qwen-3.8-27b`
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 27B
- **Short description:** Alibaba Cloud's dense 27-billion parameter open-weights model delivering near-frontier multimodal perception, local coding agent execution, and strong STEM reasoning on single-GPU hardware.
- **Provider / access:** Alibaba Cloud DashScope / OpenCode Zen (`opencode/qwen-3.8-27b`), OpenAI-compatible API.
- **Release / knowledge:** 2026-02-18 release; knowledge cutoff November 2025.
- **IDs:** `alibaba/qwen-3.8-27b`, `qwen-3.8-27b`
- **Context window:** 262,144 tokens (256K total, 8K max output).
- **Modalities:** text, image in; text out; tool use, function calling.
- **Pricing (as of 2026-09-25):** $0.20 / 1M input, $0.60 / 1M output (or free self-hosted under Apache 2.0).
- **Architecture:** Dense 27B transformer, open weights (Apache 2.0).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **44.8%** (Alibaba Research / OpenCode Evaluation)
- Tau3-Banking / Tau2-Bench: **66.5%** (Tau-Bench standard harness)
- GDPval-AA: **1255 Elo** (Artificial Analysis)
- Claw-Eval / ClawProBench: **71.8%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **70.2%**

Reasoning / knowledge:

- GPQA Diamond: **74.0%** (0-shot CoT)
- HLE: **33.5%** (Humanity's Last Exam)
- LCR / MLCR: **81.5%**
- CritPt: **70.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **74 / #19**
- Omniscience Accuracy / Hallucination Rate: **86.0% / 7.6%**

Coding:

- SWE-bench Verified / SWE-Pro: **50.8%** (SWE-bench Verified)
- LiveCodeBench: **55.6%** (Pass@1, 2024-2025 set)
- SciCode / AA-SciCode: **39.0%**
- Vibe Code Bench: **71.0%**
- DeepSWE / Coding Index / other: **69.0**

Long context:

- MRCR / RULER: **96.8%** needle retrieval fidelity across 256k context window.

### Normalized scores (1–100)

- **Tool use: 82/100.** Strong tool calling and UI grounding for a 27B dense model; dependable single-GPU agent execution.
- **Reasoning: 84/100.** Impressive STEM and logic reasoning (74.0% GPQA Diamond) rivaling much larger architectures.
- **Context window: 88/100.** 256K context window with stable needle retrieval across codebase files.
- **Multimodal: 82/100.** High-quality vision and OCR parsing on charts, diagrams, and technical documents.
- **Coding: 81/100.** 50.8% on SWE-bench Verified and 55.6% on LiveCodeBench make it one of the premier open 27B coders.
- **Cost efficiency: 94/100.** Highly affordable hosted pricing ($0.20 / $0.60 per 1M) and fully free for self-hosting.
- **Overall Score: 83/100.** Mean of the five non-cost dims (82+84+88+82+81)/5 = 83.4 → 83. Premier 27B open-weight model for local deployment, private coding agents, and cost-effective multimodal pipelines.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-25
- Method: Public internet research and benchmark verification; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
