# Union Alpha — findings by LongCat 2.5 Preview

- Source: Stealth/Union Alpha (`stealth/union-alpha`; identified as unbiased.ai Pareto 26.9)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Union Alpha
- **Short description:** A stealth multimodal model for coding, research, and agentic workflows, built on a Mixture-of-Agents (MoA) architecture with multiple specialized models and a consensus layer. Identified as unbiased.ai's Pareto 26.9.
- **Provider / access:** OpenRouter `stealth/union-alpha`; OpenCode, Cloudflare AI. Chat Completions API (OpenAI-compatible).
- **Release / knowledge:** 2026-09-16; knowledge cutoff not publicly specified.
- **IDs:** `stealth/union-alpha` (OpenRouter), `pareto-26-9` (unbiased.ai)
- **Context window:** 262,144 tokens (256K) (verified via OpenRouter).
- **Modalities:** Text, image in; text out; reasoning yes; tool calls yes; structured output yes.
- **Pricing (as of 2026-09-29):** Free during preview; anticipated ~$4-5 per task.
- **Architecture:** MoA (Mixture of Agents); multiple specialized models with consensus layer.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench v4.0: **50-60%** (Artificial Analysis, via union-alpha.io)

Reasoning / knowledge:

- No verified public reasoning benchmark found for Union Alpha specifically.

Coding:

- SWE-bench Verified: **74.2%** (union-alpha.org)
- DeepSWE: **74.0%** (union-alpha.org)

Long context:

- 262K token context window; no specific long-context retrieval benchmark found.

### Normalized scores (1–100)

- **Tool use: 58/100.** Terminal-Bench v4.0 at 50-60% is moderate. Capped by limited agentic benchmark coverage.
- **Reasoning: 60/100.** No verified public reasoning benchmark found for Union Alpha. Capped by absence of data.
- **Context window: 70/100.** 262K token context window is below the 1M+ frontier standard.
- **Multimodal: 70/100.** Text and image input with text output. Capped by no video/audio input.
- **Coding: 72/100.** SWE-bench Verified at 74.2% and DeepSWE at 74.0% are solid. Capped by limited coding benchmark diversity.
- **Cost efficiency: 85/100.** Free during preview; anticipated ~$4-5 per task is very competitive.
- **Overall Score: 66/100.** Mean of (58+60+70+70+72)/5 = 66.0 → 66. Best-fit recommendation: promising stealth model with solid coding and innovative MoA architecture; held back by limited public benchmark coverage and smaller context window.

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
