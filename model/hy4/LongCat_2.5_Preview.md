# Hy4 — findings by LongCat 2.5 Preview

- Source: Tencent/Hy4 Preview (`hy4-preview`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy4 Preview
- **Short description:** Tencent Hunyuan's most capable model to date, a 770B-parameter MoE with 49B active params and 1M context. Makes the largest generation-over-generation gain measured, at the open-source frontier for agentic coding.
- **Provider / access:** Tencent Cloud / OpenRouter `tencent/Hy4-preview`; open-weight on HuggingFace. Chat Completions API (OpenAI-compatible).
- **Release / knowledge:** 2026-08-28; knowledge cutoff not publicly specified.
- **IDs:** `tencent/Hy4-preview`
- **Context window:** 1,000,000 tokens (1M) (verified via BenchLM).
- **Modalities:** Text in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-09-29):** $0.834/$2.501 per 1M in/out (cached $0.042); open-weight available for self-hosting.
- **Architecture:** MoE, 770B total params, 49B active; open-weight (Apache 2.0).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.4%** (BenchLM comparison)
- MCP Atlas: **83.7%** (BenchLM MCP Atlas leaderboard)
- WideSearch: **83.9%** (BenchLM comparison)

Reasoning / knowledge:

- GPQA Diamond: **92.3%** (Tencent Hy website, BenchLM comparison)
- HLE: **43.4%** (Benchgen)

Coding:

- SWE-bench Multilingual: **82.9%** (Tencent Hy website)
- SWE-bench Pro: **65.7%** (Tencent Hy website, BenchLM comparison)
- DeepSWE: **64.3%** (Benchgen)

Long context:

- 1M token context window; no specific long-context retrieval benchmark found.

### Normalized scores (1–100)

- **Tool use: 82/100.** Terminal-Bench 2.1 at 85.4% and MCP Atlas at 83.7% are strong. Capped by limited agentic benchmark diversity.
- **Reasoning: 78/100.** GPQA Diamond at 92.3% is elite. Capped by HLE at 43.4%.
- **Context window: 95/100.** 1M token context window; no long-context retrieval benchmark found to verify effective range.
- **Multimodal: 15/100.** Text-only input and output; no multimodal support.
- **Coding: 72/100.** SWE-bench Multilingual at 82.9% and SWE-bench Pro at 65.7% are solid. Capped by DeepSWE at 64.3%.
- **Cost efficiency: 75/100.** $0.834/$2.501 per 1M is moderate for a flagship model.
- **Overall Score: 68/100.** Mean of (82+78+95+15+72)/5 = 68.4 → 68. Best-fit recommendation: excellent open-weight flagship with strong agentic tool use and elite reasoning; held back by text-only modality.

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
