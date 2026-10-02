# Union Alpha — findings by DeepSeek 4 Flash

- Source: Unbiased / Circuit & Chisel (`stealth/union-alpha`, later branded Pareto 26.9)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Union Alpha (aliased as Pareto 26.9 on the Unbiased model card)
- **Short description:** Anonymous stealth multimodal model served through OpenCode and OpenRouter from 2026-09-16, pitched for coding, research and agentic workflows. Community forensics describe it as a possible fusion/router service rather than a single set of weights, so treat identity as provisional.
- **Provider / access:** OpenCode and OpenRouter (`stealth/union-alpha`); free during the limited preview.
- **Release / knowledge:** appeared 2026-09-16 (stealth); Pareto 26.9 model card dated late September 2026.
- **IDs:** `stealth/union-alpha`
- **Context window:** 262,144 tokens (131,072 max output) — per the Pareto 26.9 model card as reported.
- **Modalities:** text + image in; text out; tools and structured output.
- **Pricing (as of 2026-10-02):** Free during preview (OpenCode/OpenRouter); anticipated ~$4–5 per task once paid.
- **Architecture:** undisclosed (anonymized); community evidence suggests an orchestrated/router service.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **51%** (Unbiased Pareto 26.9 model card, via union-alpha.com)
- Private 22-test attempt pass rate: **86.4%** (union-alpha.com; misses puzzles/domain/trivia)
- AI BENCHY: **8.9/10**, rank #34, 18/22 fully passed (aibenchy.com, 2026-09-18)

Reasoning / knowledge:

- HLE (without tools): **49%** (Unbiased model card)
- ArXivMath: **88%** (Unbiased model card)

Coding:

- DeepSWE: **74%** (DeepSWE leaderboard, 2026-09-17; reported by explainx.ai and union-alpha.com)

Multimodal:

- MMMU-Pro: **78%** (Unbiased model card)

Long context:

- no long-context retrieval benchmark found (262,144-token window claimed)

### Normalized scores (1–100)

- **Tool use: 62/100.** Terminal-Bench 4.0 51% and an 86.4% private-suite pass rate; the mid Terminal-Bench score and unspecified harness cap it.
- **Reasoning: 78/100.** HLE 49% and ArXivMath 88% are solid; no GPQA/AIME confirmed.
- **Context window: 72/100.** 262,144 tokens (131,072 output) is mid-high; no measured retrieval limit.
- **Multimodal: 78/100.** MMMU-Pro 78% with image input; no video/audio.
- **Coding: 78/100.** DeepSWE 74% is a strong agentic-coding result; no SWE-bench Verified/Pro.
- **Cost efficiency: 90/100.** Free during preview; anticipated paid price not yet set.
- **Overall Score: 74/100.** Mean of (62 + 78 + 72 + 78 + 78) / 5 = 73.6 → 74. Best-fit: agentic coding and multimodal research during the free preview; vendor/SEO figures are directional only.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-02
- Method: public internet research (explainx.ai, union-alpha.com, aibenchy.com, OpenRouter/OpenCode listings); scores are normalized 1–100 interpretations, not official vendor scores; stealth-identity disclaimer applies.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
