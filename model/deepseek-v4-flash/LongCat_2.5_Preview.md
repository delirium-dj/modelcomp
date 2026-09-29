# DeepSeek V4 Flash — findings by LongCat 2.5 Preview

- Source: DeepSeek/DeepSeek-V4-Flash (`deepseek-v4-flash`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Flash
- **Short description:** DeepSeek's speed and value-oriented V4 model with 284B total params and 13B active per token. Supports 1M context, 384K max output, and three reasoning modes (Non-Think / Think High / Think Max).
- **Provider / access:** DeepSeek API `deepseek-v4-flash`; open-weight on HuggingFace (MIT). Chat Completions API (OpenAI-compatible).
- **Release / knowledge:** 2026-04 (V4 Flash 0731 released July 31, 2026); knowledge cutoff not publicly specified.
- **IDs:** `deepseek/deepseek-v4-flash`
- **Context window:** 1,000,000 tokens (1M); max output 384K tokens (verified via DeepSeekV4.tech).
- **Modalities:** Text in; text out; reasoning yes (Non-Think / Think High / Think Max); tool calls yes.
- **Pricing (as of 2026-09-29):** $0.14/$0.28 per 1M in/out (cached $0.0028) off-peak; $0.22/$0.66 peak; open-weight available for self-hosting.
- **Architecture:** MoE, 284B total params, 13B active; open-weight (MIT).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.7%** (BenchLM)
- Terminal-Bench 2.0: **56.9%** (BenchLM)
- MCP Atlas: **69%** (BenchLM)
- Toolathlon-Verified: **70.3%** (BenchLM)
- CyberGym: **76.7%** (BenchLM)
- BrowseComp: **73.2%** (BenchLM)

Reasoning / knowledge:

- GPQA: **88.1%** (BenchLM)
- GPQA Diamond: **89.9%** (Vals), **90.8%** (AA) (BenchLM)
- HLE: **34.8%** (BenchLM)
- MMLU-Pro: **86.2%** (BenchLM)
- AA Intelligence Index: **51.8%** (BenchLM)
- HMMT Feb 2026: **94.8%** (BenchLM)

Coding:

- SWE-bench Verified: **79%** (BenchLM)
- SWE-bench Pro: **52.6%** (BenchLM)
- LiveCodeBench: **91.6%** (Pass@1-COT), **87.3%** (Vals) (BenchLM)
- deepSwe: **54.4%** (BenchLM)
- AA Coding Index: **69.1%** (BenchLM)
- VulcanBench v3: **88.4%** (BenchLM)

Long context:

- 1M token context window; MRCR 1M at 78.7% shows solid long-context retrieval.

### Normalized scores (1–100)

- **Tool use: 75/100.** Terminal-Bench 2.1 at 82.7% and Toolathlon-Verified at 70.3% are strong. Capped by Terminal-Bench 2.0 at 56.9%.
- **Reasoning: 78/100.** GPQA at 88.1% and GPQA Diamond at 89.9% are strong. Capped by HLE at 34.8%.
- **Context window: 95/100.** 1M token context window with MRCR 1M at 78.7% showing solid long-context retrieval.
- **Multimodal: 15/100.** Text-only input and output; no multimodal support.
- **Coding: 75/100.** SWE-bench Verified at 79% and LiveCodeBench at 91.6% are strong. Capped by SWE-bench Pro at 52.6%.
- **Cost efficiency: 95/100.** $0.14/$0.28 per 1M is among the cheapest models in the frontier tier; exceptional value for capability.
- **Overall Score: 68/100.** Mean of (75+78+95+15+75)/5 = 67.6 → 68. Best-fit recommendation: excellent value open-weight model with strong agentic tool use, reasoning, and coding; held back by text-only modality.

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
