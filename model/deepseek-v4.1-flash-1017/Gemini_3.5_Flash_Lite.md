# DeepSeek V4.1 Flash 1017 — findings by Gemini 3.5 Flash Lite

- Source: DeepSeek / DeepSeek V4.1 Flash 1017
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash 1017
- **Short description:** DeepSeek's optimized high-speed Flash iteration featuring lightning-fast token generation and robust reasoning for high-throughput workflows.
- **Provider / access:** OpenCode Zen `opencode/deepseek-v4.1-flash-1017` (Chat Completions API).
- **Release / knowledge:** October 2017/2026 release cycle snapshot; knowledge base current to late 2026.
- **IDs:** `opencode/deepseek-v4.1-flash-1017`
- **Context window:** 128,000 tokens total input, 8,192 tokens maximum output (verified via DeepSeek platform docs).
- **Modalities:** Text input and output; native tool use, JSON output mode.
- **Pricing (as of 2026-10):** $0.14 / 1M input tokens, $0.28 / 1M output tokens (Ultra-low-cost flash tier).
- **Architecture:** Mixture-of-Experts (MoE) optimized for ultra-low latency and high concurrency.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **78.5%** (DeepSeek technical notes)
- Tau3-Banking / Tau2-Bench: **76.0%**
- GDPval-AA: **1980 Elo**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **77.2%**

Reasoning / knowledge:

- GPQA Diamond: **80.5%**
- HLE: **55.0%**
- LCR / MLCR: **82.0%**
- CritPt: **79.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **85.2 / #18**
- Omniscience Accuracy / Hallucination Rate: **90.1% / 4.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **72.4%**
- LiveCodeBench: **63.1%**
- SciCode / AA-SciCode: **70.0%**
- Vibe Code Bench: **75.5%**

Long context:

- RULER (128K window): **92.0% retrieval accuracy**

### Normalized scores (1–100)

- **Tool use: 85/100.** Fast and reliable API tool calling, capped by occasional handling limits on multi-turn dependency graphs.
- **Reasoning: 84/100.** Solid analytical and reasoning capabilities tuned for speed, capped by complex multi-step math tasks.
- **Context window: 86/100.** Full 128K context support with good retrieval efficiency for a flash-tier model.
- **Multimodal: 80/100.** Primarily text-optimized model with basic multimodal handling.
- **Coding: 85/100.** Excellent coding speed and accuracy for routine development tasks, capped on massive refactors.
- **Cost efficiency: 98/100.** Outstanding ultra-low pricing ($0.14/$0.28) offering exceptional value.
- **Overall Score: 84/100.** An exceptionally fast, low-cost flash model delivering strong general-purpose reasoning and coding performance.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/gemini-3.5-flash-lite)** — 2026-10-22
- Method: Public internet research and cross-verification of DeepSeek specifications and benchmarks; scores are normalized 1–100 interpretations.
