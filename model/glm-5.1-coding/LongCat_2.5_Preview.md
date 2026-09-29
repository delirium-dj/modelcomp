# GLM-5.1 Coding — findings by LongCat 2.5 Preview

- Source: Zhipu AI/GLM-5.1 (`glm-5.1`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.1 Coding
- **Short description:** Z.AI's next-generation flagship foundation model designed for long-horizon agentic engineering tasks. Can work autonomously on a single task for up to 8 hours with full plan-execute-test-fix-optimize loops.
- **Provider / access:** Z.AI API `glm-5.1`; open-weight on HuggingFace. Chat Completions API (OpenAI-compatible).
- **Release / knowledge:** 2026-04-07; knowledge cutoff not publicly specified.
- **IDs:** `z.ai/glm-5.1`
- **Context window:** 202,752 tokens (200K); max output 131K tokens (verified via CloudPrice).
- **Modalities:** Text in; text out; reasoning yes; tool calls yes; structured output yes.
- **Pricing (as of 2026-09-29):** $1.40/$4.40 per 1M in/out (cached $0.26); open-weight available for self-hosting.
- **Architecture:** MoE, 754B total params, 40B active; open-weight (MIT).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **63.5%** (BenchLM)
- MCP Atlas: **71.8%** (BenchLM)
- τ²-bench: **97.7%** (BenchLM)
- CyberGym: **68.7%** (BenchLM)

Reasoning / knowledge:

- GPQA-D: **86.2%** (BenchLM)
- AIME26: **95.3%** (BenchLM)
- HLE: **52.3%** (BenchLM)
- AA Intelligence Index: **41.0%** (BenchLM)

Coding:

- SWE-bench Pro: **58.4%** (llm-stats, B.AI docs, ApXML)
- AA Coding Index: **55.8%** (BenchLM)
- LiveCodeBench (Vals): **81.4%** (BenchLM)
- SWE-bench (Vals): **76.4%** (BenchLM)

Long context:

- 200K token context window; no specific long-context retrieval benchmark found.

### Normalized scores (1–100)

- **Tool use: 72/100.** Terminal-Bench 2.0 at 63.5% and MCP Atlas at 71.8% are solid. Capped by τ²-bench at 97.7%.
- **Reasoning: 78/100.** GPQA-D at 86.2% and AIME26 at 95.3% are strong. Capped by HLE at 52.3%.
- **Context window: 65/100.** 200K token context window is below the 1M+ frontier standard.
- **Multimodal: 15/100.** Text-only input and output; no multimodal support.
- **Coding: 68/100.** SWE-bench Pro at 58.4% and LiveCodeBench at 81.4% are solid. Capped by AA Coding Index at 55.8%.
- **Cost efficiency: 75/100.** $1.40/$4.40 per 1M is moderate for a flagship model.
- **Overall Score: 60/100.** Mean of (72+78+65+15+68)/5 = 59.6 → 60. Best-fit recommendation: solid open-weight flagship with strong coding and reasoning; held back by text-only modality and smaller context window.

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
