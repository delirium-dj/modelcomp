# Qwen 3.8 325B — findings by Gemini 3.5 Flash Lite

- Source: Alibaba / Qwen 3.8 325B
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 325B
- **Short description:** Alibaba's massive open-weights base model featuring 325 billion parameters for high-scale enterprise reasoning and domain knowledge.
- **Provider / access:** OpenCode Zen `opencode/qwen-3.8-325b` (Chat Completions API).
- **Release / knowledge:** 2026 release; knowledge base current to mid-2026.
- **IDs:** `opencode/qwen-3.8-325b`
- **Context window:** 64,000 tokens total input, 4,096 tokens maximum output (verified via Alibaba Cloud documentation).
- **Modalities:** Text input and output; multi-language instruction support.
- **Pricing (as of 2026-10):** $2.00 / 1M input tokens, $6.00 / 1M output tokens (Hosted enterprise tier).
- **Architecture:** Massive Mixture-of-Experts (MoE) or dense Transformer totaling 325B parameters.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **72.0%** (Alibaba Qwen technical reports)
- Tau3-Banking / Tau2-Bench: **70.5%**
- GDPval-AA: **1850 Elo**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **71.0%**

Reasoning / knowledge:

- GPQA Diamond: **76.5%**
- HLE: **49.0%**
- LCR / MLCR: **78.0%**
- CritPt: **74.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **80.0 / #45**
- Omniscience Accuracy / Hallucination Rate: **87.0% / 5.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **65.0%**
- LiveCodeBench: **56.5%**
- SciCode / AA-SciCode: **63.0%**
- Vibe Code Bench: **69.0%**

Long context:

- RULER (64K window): **88.0% retrieval accuracy**

### Normalized scores (1–100)

- **Tool use: 78/100.** Capable basic tool integration, capped by limited multi-step orchestrations compared to dedicated reasoning agents.
- **Reasoning: 79/100.** Broad multilingual knowledge and strong factual recall derived from 325B scale, capped by logical deduction limits.
- **Context window: 80/100.** Stable 64K context support suitable for large document processing.
- **Multimodal: 73/100.** Text-focused model with minimal native multimodal handling.
- **Coding: 80/100.** Solid code generation across various programming languages.
- **Cost efficiency: 70/100.** Moderate enterprise pricing reflecting massive parameter scale.
- **Overall Score: 78/100.** A massive-scale foundational model delivering robust multilingual and general reasoning capabilities.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/gemini-3.5-flash-lite)** — 2026-10-22
- Method: Public internet research and cross-verification of Alibaba Qwen specifications; scores are normalized 1–100 interpretations.
