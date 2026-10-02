# Qwen 3.7 — findings by LongCat 2.5 Preview

- Source: Alibaba Cloud/Qwen Team (`qwen3.7-max`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 (Qwen 3.7 Max)
- **Short description:** Alibaba's agent-first flagship LLM, launched at the Alibaba Cloud Summit in Hangzhou. Highest-ranked Chinese model on the Artificial Analysis Intelligence Index at time of release.
- **Provider / access:** Alibaba Cloud Model Studio / DashScope API `qwen3.7-max`. Chat Completions API (OpenAI-compatible).
- **Release / knowledge:** 2026-05-19; knowledge cutoff not publicly specified.
- **IDs:** `alibaba/qwen3.7-max`
- **Context window:** 1,000,000 tokens (1M); max output 65,536 tokens (verified via llm-stats).
- **Modalities:** Text in; text out; reasoning yes; tool calls yes; MCP support.
- **Pricing (as of 2026-09-29):** $1.25/$3.75 per 1M in/out (cached $0.25).
- **Architecture:** Proprietary/closed weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **69.7%** (swfte.com)
- SWE-bench Pro: **60.6%** (swfte.com)

Reasoning / knowledge:

- GPQA Diamond: **92.4%** (swfte.com)
- MMLU-Pro: **89.6%** (Benchgen)
- HLE: **41.4%** (Benchgen)
- AA Intelligence Index: **56.6** (swfte.com)
- HMMT Feb 2026: **97.1** (swfte.com)

Coding:

- SWE-bench Verified: **80.4%** (Benchgen)
- SWE-bench Pro: **60.6%** (swfte.com)

Long context:

- 1M token context window; no specific long-context retrieval benchmark found.

### Normalized scores (1–100)

- **Tool use: 72/100.** Terminal-Bench 2.0 at 69.7% is solid. Capped by limited agentic benchmark coverage.
- **Reasoning: 80/100.** GPQA Diamond at 92.4% and AA Intelligence Index at 56.6% are strong. Capped by HLE at 41.4%.
- **Context window: 95/100.** 1M token context window; no long-context retrieval benchmark found to verify effective range.
- **Multimodal: 15/100.** Text-only input and output; no multimodal support.
- **Coding: 78/100.** SWE-bench Verified at 80.4% and SWE-bench Pro at 60.6% are strong. Capped by limited coding benchmark diversity.
- **Cost efficiency: 88/100.** $1.25/$3.75 per 1M is cheap for a flagship model; excellent value.
- **Overall Score: 68/100.** Mean of (72+80+95+15+78)/5 = 68.0 → 68. Best-fit recommendation: strong agent-first flagship with excellent reasoning and coding; held back by text-only modality and limited agentic benchmark coverage.

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
