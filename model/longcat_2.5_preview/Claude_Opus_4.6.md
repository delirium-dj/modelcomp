# LongCat 2.5 Preview — findings by Claude Opus 4.6

- Source: Meituan / LongCat 2.5 Preview (`opencode/longcat_2.5_preview`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat 2.5 Preview
- **Short description:** Meituan's open-weights MoE preview model for autonomous coding agents with 1M context. A follow-up to LongCat 2.0 with expected improvements. Preview status — full benchmarks not yet published.
- **Provider / access:** Various API hosts `opencode/longcat_2.5_preview`. No Zen Free ID.
- **Release / knowledge:** Late 2026 preview; knowledge cutoff approximately mid-2026.
- **IDs:** `opencode/longcat_2.5_preview` (no Free ID on Zen)
- **Context window:** 1,048,576 tokens (1M). Verified via meta.json.
- **Modalities:** Text input/output (image input listed on some routers, unverified for this checkpoint). Tool calls supported.
- **Pricing (as of 2026-10-19):** ~$0.30/$1.20 per 1M in/out (reseller input ~$0.20). No free tier.
- **Architecture:** Open-weights MoE. Preview checkpoint — specific parameter counts not publicly disclosed for 2.5 variant. Likely evolution of LongCat 2.0's 1.6T architecture with improvements. MIT license (inherited from LongCat family).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found for 2.5 Preview specifically
- Tau3-Banking: no verified public score found
- Note: Preview status — full benchmarks not yet published

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- MMLU: no verified public score found

Coding:

- SWE-bench Pro: no verified public score found for 2.5 Preview (LongCat 2.0 scored 59.5%)
- SWE-bench Verified: no verified public score found
- Note: As a preview, improvement over 2.0 is expected but unverified

Long context:

- 1M native context (inherited from LongCat architecture with LSA). No RULER/MRCR reported.

### Normalized scores (1–100)

- **Tool use: 60/100.** Preview of LongCat 2.5 should improve on 2.0's Terminal-Bench 70.8%. Estimated slightly higher based on expected iterative improvements. Capped by preview status and zero published benchmarks.
- **Reasoning: 58/100.** Expected improvement over LongCat 2.0 but no published reasoning benchmarks. Estimated from the trajectory of the LongCat family. Capped by zero benchmark data.
- **Context window: 92/100.** 1M tokens per tier mapping (1M = 90-95). Inherits LongCat's LSA architecture. Scored at 92.
- **Multimodal: 18/100.** Primarily text-only; image input is listed on some routers but unverified. Scored slightly above 15 for potential unverified image support, but conservatively low.
- **Coding: 62/100.** Expected to improve on LongCat 2.0's SWE-bench Pro 59.5%. Preview checkpoint likely in the 62-68% range. Capped by preview status and no published scores.
- **Cost efficiency: 78/100.** ~$0.30/$1.20 per 1M is affordable. No free tier. Open weights for self-hosting.
- **Overall Score: 58/100.** Mean of (60 + 58 + 92 + 18 + 62) / 5 = 58.0 → 58. A promising preview of LongCat's next generation with expected improvements over 2.0. Limited by preview status and lack of published benchmarks. Users should monitor for full release benchmarks.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-19
- Method: Public internet research cross-referencing LongCat documentation and LongCat 2.0 benchmark trajectory; scores are normalized 1–100 interpretations, not official vendor scores. Preview model — scores are provisional estimates.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
