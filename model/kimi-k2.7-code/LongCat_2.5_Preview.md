# Kimi K2.7 Code — findings by LongCat 2.5 Preview

- Source: Moonshot AI/Kimi K2.7 Code (`kimi-k2.7-code`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code
- **Short description:** Moonshot AI's open-source, coding-focused agentic model built for long-horizon software engineering. Reduces thinking-token usage by ~30% vs K2.6 while improving end-to-end task completion.
- **Provider / access:** Moonshot AI API `kimi-k2.7-code`; open-weight on HuggingFace (`moonshotai/Kimi-K2.7-Code`). Chat Completions API (OpenAI-compatible).
- **Release / knowledge:** 2026-06-12; knowledge cutoff not publicly specified.
- **IDs:** `moonshotai/kimi-k2.7-code`
- **Context window:** 262,144 tokens (262K) (verified via HuggingFace).
- **Modalities:** Text, image in; text out; reasoning yes (forced thinking mode); tool calls yes.
- **Pricing (as of 2026-09-29):** $0.660/$3.00 per 1M in/out (cached $0.142); open-weight available for self-hosting.
- **Architecture:** MoE, ~1T params, ~32B active, 384 experts (8 active + 1 shared); open-weight (Modified MIT).

### Raw benchmarks found

Agent / tool use:

- Kimi Claw 24/7 Bench: **46.9%** (vs K2.6's 42.9%, GPT-5.5's 52.8%, Opus 4.8's 50.4%) (HuggingFace)

Reasoning / knowledge:

- GPQA: **89.6%** (PricePerToken)
- AA Intelligence Index: **43.0** (PricePerToken)

Coding:

- Kimi Code Bench v2: **62.0%** (vs K2.6's 50.9%, GPT-5.5's 69.0%, Opus 4.8's 67.4%) (HuggingFace)
- Program Bench: **53.6%** (vs K2.6's 48.3%, GPT-5.5's 69.1%, Opus 4.8's 63.8%) (HuggingFace)
- MLS Bench Lite: **35.1%** (vs K2.6's 26.7%, GPT-5.5's 35.5%, Opus 4.8's 42.8%) (HuggingFace)
- SWE-bench Verified: **89%** (Vals AI)
- AA Coding Index: **60.8** (PricePerToken)

Long context:

- 262K token context window; no specific long-context retrieval benchmark found.

### Normalized scores (1–100)

- **Tool use: 55/100.** Kimi Claw 24/7 Bench at 46.9% is moderate. Capped by limited agentic benchmark coverage.
- **Reasoning: 72/100.** GPQA at 89.6% is strong; AA Intelligence Index at 43.0% is moderate. Capped by limited reasoning benchmark diversity.
- **Context window: 70/100.** 262K token context window is decent but below the 1M+ frontier standard.
- **Multimodal: 70/100.** Text and image input with text output. Capped by no video/audio input.
- **Coding: 75/100.** Kimi Code Bench v2 at 62.0% and SWE-bench Verified at 89% are strong. Capped by MLS Bench Lite at 35.1%.
- **Cost efficiency: 85/100.** $0.660/$3.00 per 1M is cheap for a frontier-tier model; excellent value.
- **Overall Score: 68/100.** Mean of (55+72+70+70+75)/5 = 68.4 → 68. Best-fit recommendation: excellent value open-weight coding-focused model with strong coding and reasoning; held back by moderate agentic tool use and smaller context window.

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
