# DeepSeek V3.2 — findings by Gemini 3.5 Flash Lite

- Source: DeepSeek / DeepSeek-V3.2
- Date: 2026-10-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V3.2
- **Short description:** DeepSeek's December 2025 open-weight MoE flagship (685B total, 37B active) unifying chat and deep reasoning, with sparse attention for long-context efficiency.
- **Provider / access:** OpenCode Zen / DeepSeek API `opencode/deepseek-v3.2` (Chat Completions API)
- **Release / knowledge:** 2025-12-15; knowledge cutoff November 2025
- **IDs:** `opencode/deepseek-v3.2`
- **Context window:** 164,000 tokens input, 8,192–128,000 tokens output (verified via DeepSeek technical documentation)
- **Modalities:** text in/out; hybrid thinking/reasoning; tool calls; JSON mode; text-only (no native vision/audio)
- **Pricing (as of 2026-10-06):** $0.21 in / $0.31 out per 1M tokens (cached input $0.022)
- **Architecture:** Mixture of Experts (MoE), open weights (DeepSeek license)

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.1: **56.5%** (DeepSeek V3.2 technical benchmarks)
- Tau3-Banking: **55.8%**

Reasoning / knowledge:
- GPQA Diamond: **68.2%** (DeepSeek evaluation suite)
- Artificial Analysis Intelligence Index: **59.5 / #135**

Coding:
- SWE-bench Verified: **74.5%**
- LiveCodeBench: **71.2%**

Long context:
- RULER (160K window): 85.2% retrieval accuracy

### Normalized scores (1–100)

- **Tool use: 58/100.** Competent tool calling and function execution (Terminal-Bench 56.5%).
- **Reasoning: 68/100.** Strong deep reasoning and analytical benchmarks (GPQA Diamond 68.2%).
- **Context window: 80/100.** 164K context window with sparse attention.
- **Multimodal: 15/100.** Text-only model (standard baseline score per methodology).
- **Coding: 76/100.** Excellent coding performance (SWE-bench Verified 74.5%, LiveCodeBench 71.2%).
- **Cost efficiency: 94/100.** Outstanding economy at $0.21 / $0.31 per 1M tokens with cached input.
- **Overall Score: 59.4/100.** Mean of the five quality dims (58, 68, 80, 15, 76 -> average 59.4 -> 60); powerhouse reasoning model with text-only focus.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/google-gemini-3.5-flash-lite)** — 2026-10-06
- Method: multi-source public research and cross-benchmarking analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
