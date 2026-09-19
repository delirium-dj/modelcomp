# Claude Opus 5 — findings by Claude Opus 4.6

- Source: Anthropic / Claude Opus 5
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's flagship model for complex enterprise agentic work. Succeeds Opus 4.8 with improved reasoning, alignment, and reliability in long-running autonomous sessions.
- **Provider / access:** Anthropic API (`claude-opus-5`), Claude Code, GitHub Copilot, AWS Bedrock, Google Cloud, Microsoft Foundry. Messages API.
- **Release / knowledge:** 2026-07-24 release; knowledge cutoff not explicitly published, estimated early 2026.
- **IDs:** `anthropic/claude-opus-5` (no Free ID on Zen)
- **Context window:** 1,000,000 tokens (1M). Verified via Anthropic docs.
- **Modalities:** Text, image in; text out; effort toggle (low/medium/high); tool calls; JSON mode.
- **Pricing (as of 2026-09-19):** $5.00 / $25.00 per 1M tokens. Consistent with Opus 4.x pricing.
- **Architecture:** Proprietary; Anthropic's most aligned model to date with robust safety guardrails.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **1861 Elo** (source: search results; strong agentic performance)
- Terminal-Bench: ranked consistently among top models on TB 2.1 and 4.0 (source: multiple evaluators); no exact standalone number found
- ARC-AGI-3: **30.2%** (source: search results)
- Tau3-Banking: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public standalone score found; inferred ~93–95% from frontier positioning
- Frontier-Bench v0.1: **43.3%** (source: search results)
- HLE: no verified public score found
- LCR / MLCR: no verified public score found

Coding:

- SWE-bench Verified: **96.0%** (source: search results; near-saturating)
- SWE-bench Pro: **~79%** (source: competitive evaluations)
- DeepSWE: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode: no verified public score found

Long context:

- 1M context window; no MRCR/RULER retrieval score published.

### Normalized scores (1–100)

- **Tool use: 88/100.** GDPval 1861 Elo is excellent (1750+ = 90–100 ref). ARC-AGI-3 30.2% is notable. Missing TB standalone and Tau3/Claw-Eval data prevents full 95+.
- **Reasoning: 90/100.** Frontier-Bench 43.3% is strong. Inferred GPQA ~93–95% from positioning. Missing explicit GPQA/HLE/CritPt verification slightly caps score.
- **Context window: 95/100.** 1M verified. No retrieval benchmarks published; positioned high but below models with MRCR verification.
- **Multimodal: 65/100.** Text + image in; text out. No video/audio/PDF input capabilities noted. Text+image = 60–70 range.
- **Coding: 92/100.** SWE-bench Verified 96.0% is near-saturating frontier; SWE-bench Pro ~79% is competitive. Missing DeepSWE/SciCode prevents full 95+.
- **Cost efficiency: 70/100.** $5/$25 is moderate-premium. Per methodology: between $3/$15 (~60) and free (100); $5/$25 maps to ~70.
- **Overall Score: 86/100.** Mean of (88 + 90 + 95 + 65 + 92) / 5 = 86.0. Strong enterprise flagship; text+image-only multimodal is the main constraint.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-09-19
- Method: Public internet research (Anthropic docs, vellum.ai, kilo.ai, pecollective.com, community evaluations); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
