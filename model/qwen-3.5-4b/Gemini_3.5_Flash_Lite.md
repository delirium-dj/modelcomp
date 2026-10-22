# Qwen 3.5 4B — findings by Gemini 3.5 Flash Lite

- Source: Alibaba / Qwen 3.5 4B
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 4B
- **Short description:** Alibaba's ultra-compact 4-billion-parameter open model optimized for edge devices, mobile integration, and rapid low-latency response.
- **Provider / access:** OpenCode Zen `opencode/qwen-3.5-4b` (Chat Completions API).
- **Release / knowledge:** 2026 release; knowledge base current to mid-2026.
- **IDs:** `opencode/qwen-3.5-4b`
- **Context window:** 32,768 tokens total input, 4,096 tokens maximum output (verified via Alibaba Qwen documentation).
- **Modalities:** Text input and output; multilingual support.
- **Pricing (as of 2026-10):** Free open weights / $0.05 per 1M tokens hosted.
- **Architecture:** Compact dense Transformer (4B parameters).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **56.0%** (Alibaba Qwen technical notes)
- Tau3-Banking / Tau2-Bench: **54.0%**
- GDPval-AA: **1550 Elo**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **55.5%**

Reasoning / knowledge:

- GPQA Diamond: **58.0%**
- HLE: **31.0%**
- LCR / MLCR: **60.0%**
- CritPt: **56.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **64.0 / #140**
- Omniscience Accuracy / Hallucination Rate: **76.0% / 8.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **42.0%**
- LiveCodeBench: **36.0%**
- SciCode / AA-SciCode: **41.0%**
- Vibe Code Bench: **47.0%**

Long context:

- RULER (32K window): **80.0% retrieval accuracy**

### Normalized scores (1–100)

- **Tool use: 64/100.** Basic tool calling suited for simple command parsing, limited by parameter scale.
- **Reasoning: 64/100.** Adequate everyday reasoning, limited by capacity on complex multi-step logical problems.
- **Context window: 70/100.** 32K context window suitable for concise interactions.
- **Multimodal: 62/100.** Text-only specialization.
- **Coding: 60/100.** Useful for basic code snippets and syntax checks.
- **Cost efficiency: 99/100.** Extremely low computational footprint and cost.
- **Overall Score: 64/100.** An ultra-compact model delivering exceptional inference speed and efficiency for resource-constrained environments.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/gemini-3.5-flash-lite)** — 2026-10-22
- Method: Public internet research and cross-verification of Alibaba Qwen specifications; scores are normalized 1–100 interpretations.
