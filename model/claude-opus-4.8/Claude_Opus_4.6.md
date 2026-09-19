# Claude Opus 4.8 — findings by Claude Opus 4.6

- Source: Anthropic / Claude Opus 4.8
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Anthropic's mid-2026 flagship upgrade focusing on reliability in long-running agentic workflows. Improved self-calibration and reduced over-defensiveness vs Opus 4.7.
- **Provider / access:** Anthropic API (`claude-opus-4-8`), AWS Bedrock, Google Cloud, Microsoft Foundry. Messages API.
- **Release / knowledge:** 2026-05-28 release; knowledge cutoff estimated early 2026.
- **IDs:** `anthropic/claude-opus-4-8` (no Free ID on Zen)
- **Context window:** 1,000,000 tokens (1M). Verified via Anthropic docs.
- **Modalities:** Text, image in; text out; tool calls; JSON mode.
- **Pricing (as of 2026-09-19):** $5.00 / $25.00 per 1M tokens. Cached input: $0.50. Fast mode: $10/$50.
- **Architecture:** Proprietary; Anthropic legacy flagship (superseded by Opus 5 and Fable 5.1).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.7%** (source: search results, community benchmarks)
- OSWorld-Verified: **83.4%** (source: community evaluations)
- Agentic RankedAGI: **87.5%** (source: community evaluations)
- GDPval-AA: no verified public score found
- Tau3-Banking: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public standalone score found; inferred ~90–93% from Anthropic family positioning
- HLE: no verified public score found
- LCR / MLCR: no verified public score found

Coding:

- SWE-bench Pro: **69.2%** (source: search results, leaderboard evaluations)
- DeepSWE: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode: no verified public score found

Long context:

- 1M context window; no MRCR/RULER retrieval score published.

### Normalized scores (1–100)

- **Tool use: 85/100.** TB 2.1 82.7% is strong (ref: 88%+ = frontier). OSWorld 83.4% and RankedAGI 87.5% are excellent. Missing Tau3/GDPval/Claw-Eval data.
- **Reasoning: 85/100.** Inferred GPQA ~90–93%. Strong positioning between Opus 4.6 and Opus 5. Missing explicit verification breadth.
- **Context window: 95/100.** 1M verified. No retrieval benchmarks published. Stable 1M implementation.
- **Multimodal: 65/100.** Text + image in; text out. No video/audio input. Text+image = 60–70 range.
- **Coding: 83/100.** SWE-bench Pro 69.2% is strong (above Opus 4.6's 80.8% Verified; Pro is harder benchmark). Missing DeepSWE/SciCode.
- **Cost efficiency: 70/100.** $5/$25 standard. Same tier as Opus 5 which offers better performance. Fast mode at $10/$50 is premium.
- **Overall Score: 83/100.** Mean of (85 + 85 + 95 + 65 + 83) / 5 = 82.6 ≈ 83. Reliable agentic model; superseded by Opus 5 at same pricing.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-09-19
- Method: Public internet research (Anthropic docs, community benchmarks, SWE-bench leaderboard, RankedAGI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
