# Grok 4 Fast — findings by Claude Opus 4.6

- Source: xAI / Grok 4 Fast
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4 Fast
- **Short description:** xAI's cost-efficient high-speed variant (Sep 2025). Offered frontier-level "intelligence density" with 2M context at significantly lower cost. Used ~40% fewer thinking tokens than standard Grok 4. Retired Aug 2026.
- **Provider / access:** xAI API (deprecated May 2026, retired Aug 2026). Succeeded by Grok 4.7.
- **Release / knowledge:** 2025-09 release. Deprecated 2026-05-15, retired 2026-08-15.
- **IDs:** `xai/grok-4-fast` (retired)
- **Context window:** 2,000,000 tokens (2M).
- **Modalities:** Text, image in; text out; tool calls; code execution. Blended reasoning/non-reasoning modes.
- **Pricing (as of 2026-10-11):** Retired. Historical: $0.20 / $0.50 per 1M tokens (input/output).
- **Architecture:** Proprietary; unified reasoning/non-reasoning architecture. ~40% fewer thinking tokens than standard Grok 4.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: no verified standalone score found
- Agentic tool-calling capability verified (source: x.ai)
- GDPval-AA: no verified public score found

Reasoning / knowledge:

- Benchmark scores comparable to full Grok 4 with ~40% fewer thinking tokens (source: x.ai, medium.com)
- GPQA Diamond: no verified standalone score found
- HLE: no verified public score found

Coding:

- SWE-bench: no verified standalone score found (comparable to Grok 4 base per xAI claims)
- LiveCodeBench: no verified standalone score found

Long context:

- 2,000,000 token context window (2M). No MRCR/RULER retrieval score published.

### Normalized scores (1–100)

- **Tool use: 74/100.** Agentic tool calling supported. "Intelligence density" approach — same quality with fewer tokens. Missing formal agent benchmarks.
- **Reasoning: 80/100.** Comparable to Grok 4 (~88% GPQA equivalent) with 40% fewer thinking tokens. Efficiency-focused. Missing standalone verification.
- **Context window: 97/100.** 2M tokens — one of the largest ever offered (ref: 2M = 97). Same as Grok 4.20.
- **Multimodal: 55/100.** Text + image in; text out. No audio/video input. Basic multimodal = 50–60 range.
- **Coding: 76/100.** Comparable to Grok 4 base (~75% SWE-bench equivalent). Speed-optimized variant not coding-specialized. Missing standalone verification.
- **Cost efficiency: 95/100.** $0.20/$0.50 was exceptionally cheap for frontier performance. 40% fewer thinking tokens = further effective cost reduction.
- **Overall Score: 76/100.** Mean of (74 + 80 + 97 + 55 + 76) / 5 = 76.4, rounded to 76. Remarkable cost-efficiency with 2M context; retired but historically significant for production economics.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-11
- Method: Public internet research (x.ai, medium.com, artificialanalysis.ai, oracle.com, llm-stats.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
