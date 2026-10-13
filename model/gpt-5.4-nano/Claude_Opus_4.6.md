# GPT-5.4 Nano — findings by Claude Opus 4.6

- Source: OpenAI / GPT-5.4 Nano
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Nano
- **Short description:** OpenAI's latest ultra-lightweight model (Mar 2026). Generational upgrade from GPT-5 Nano. Used as "Executor" subagent in multi-agent architectures. SWE-bench Pro 52.4%, GPQA Diamond 81.6%. $0.20/$1.25 pricing.
- **Provider / access:** OpenAI API. Active.
- **Release / knowledge:** 2026-03-17 release. Knowledge cutoff Aug 2025.
- **IDs:** `openai/gpt-5.4-nano` (snapshot: `gpt-5.4-nano-2026-03-17`)
- **Context window:** 400,000 tokens.
- **Modalities:** Text, image in; text out; tool calling; function calling; structured outputs.
- **Pricing (as of 2026-10-13):** $0.20 / $1.25 per 1M tokens. Cached: $0.02 input.
- **Architecture:** Proprietary lightweight multimodal transformer. OpenAI GPT-5.4 family.

### Raw benchmarks found

- SWE-bench Pro: **~52.4%** (source: openai.com)
- Terminal-Bench 2.0: **~38.2%** (source: openai.com)
- Toolathlon: **~26.9%** (source: openai.com)
- GPQA Diamond: **~81.6%** (source: openai.com)
- OSWorld-Verified: **~42.0%** (source: openai.com)

### Normalized scores (1–100)

- **Tool use: 70/100.** TB 2.0 38.2%, Toolathlon 26.9%. Designed as executor subagent. Tool calling supported. Lightweight limits complex orchestration.
- **Reasoning: 78/100.** GPQA Diamond 81.6% is remarkably strong for a Nano model. Significant upgrade from GPT-5 Nano.
- **Context window: 88/100.** 400K verified (ref: 400K ≈ 85-88).
- **Multimodal: 55/100.** Text + image in; text out. No audio/video. Basic vision = 50-60.
- **Coding: 72/100.** SWE-bench Pro 52.4% is impressive for a Nano model. OSWorld 42%. Strong generational upgrade.
- **Cost efficiency: 94/100.** $0.20/$1.25 is very affordable. $0.02 cached. Designed for concurrent multi-instance deployment.
- **Overall Score: 73/100.** Mean of (70 + 78 + 88 + 55 + 72) / 5 = 72.6, rounded to 73. Remarkable capability in a Nano form factor; GPQA 81.6% shows frontier reasoning compressed into an efficient model.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-13
- Method: Public internet research (openai.com, openrouter.ai, apxml.com, datacamp.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
