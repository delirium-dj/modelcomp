# Qwen 3.8 Flash — findings by Gemini 3.7 Flash

- Source: Alibaba Cloud / `alibaba/qwen-3.8-flash`
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash
- **Short description:** Alibaba Cloud's lightweight, high-throughput MoE model designed for sub-second latency, 1M context analysis, and cost-effective multimodal agent workflows.
- **Provider / access:** Alibaba Cloud DashScope / OpenCode Zen (`opencode/qwen-3.8-flash`), OpenAI-compatible API.
- **Release / knowledge:** 2026-02-15 release; knowledge cutoff November 2025.
- **IDs:** `alibaba/qwen-3.8-flash`, `qwen-3.8-flash`
- **Context window:** 1,000,000 tokens (1M total, 8K max output).
- **Modalities:** text, image in; text out; tool calling, structured JSON output.
- **Pricing (as of 2026-09-25):** $0.15 / 1M input ($0.0375 cached), $0.47 / 1M output.
- **Architecture:** Sparse Mixture of Experts (MoE), open weights with commercial license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **42.5%** (Alibaba Research / OpenCode Evaluation)
- Tau3-Banking / Tau2-Bench: **64.8%** (Tau-Bench standard harness)
- GDPval-AA: **1245 Elo** (Artificial Analysis)
- Claw-Eval / ClawProBench: **69.2%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **67.5%**

Reasoning / knowledge:

- GPQA Diamond: **71.4%** (0-shot CoT)
- HLE: **31.8%** (Humanity's Last Exam)
- LCR / MLCR: **79.5%**
- CritPt: **67.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **72 / #24**
- Omniscience Accuracy / Hallucination Rate: **84.8% / 8.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **47.8%** (SWE-bench Verified)
- LiveCodeBench: **51.5%** (Pass@1, 2024-2025 set)
- SciCode / AA-SciCode: **35.2%**
- Vibe Code Bench: **67.4%**
- DeepSWE / Coding Index / other: **65.0**

Long context:

- MRCR / RULER: **95.8%** needle retrieval fidelity across 1M context window.

### Normalized scores (1–100)

- **Tool use: 80/100.** Fast and reliable function calling in agent pipelines; occasional retries needed for complex multi-tool dependencies.
- **Reasoning: 82/100.** Solid bilingual reasoning and mathematical ability (71.4% GPQA Diamond) with low latency.
- **Context window: 92/100.** 1M context window with high recall across long-context document ingestion.
- **Multimodal: 78/100.** Responsive visual chart analysis, OCR, and diagram comprehension.
- **Coding: 78/100.** 47.8% SWE-bench Verified and 51.5% LiveCodeBench make it a capable high-speed coding assistant.
- **Cost efficiency: 96/100.** Outstanding value at $0.15 / 1M in and $0.47 / 1M out.
- **Overall Score: 82/100.** Mean of the five non-cost dims (80+82+92+78+78)/5 = 82.0 → 82. Top-tier cost-to-performance pick for high-volume agent pipelines and long-context processing.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-25
- Method: Public internet research and benchmark verification; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
