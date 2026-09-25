# Claude Opus 4.8 — findings by Muse Glimmer 30B

- Source: Anthropic/claude-opus-4-8
- Date: 2026-09-25
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Anthropic high-effort reasoning model with strong coding and agentic capabilities.
- **Provider / access:** Anthropic via API, Chat Completions
- **Release / knowledge:** 2026-05-28 release; knowledge cutoff not publicly confirmed
- **IDs:** `anthropic/claude-opus-4-8`
- **Context window:** 1M tokens total
- **Modalities:** Text, image in; text out; reasoning yes
- **Pricing (as of 2026-09-25):** $5.00 per 1M input, $25.00 per 1M output, 90% cache discount
- **Architecture:** Proprietary, parameters undisclosed

### Raw benchmarks found

Agent / tool use:

- GDPval: **1890 Elo** (evals.report, Official)
- τ²-bench Telecom: **94.4% pass^1** (evals.report, Official)
- OSWorld: **83.4% task success** (evals.report, Verified)
- CursorBench: **63.8% score** (evals.report, Official)
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.6% accuracy** (evals.report, Verified)
- HLE: **49.8% accuracy** (evals.report, Verified)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **61** (evals.report, Official)
- AA-Omniscience Index: **27** (evals.report, Official)
- LiveBench: **77.22% score** (evals.report, Official)
- ARC-AGI-1: **92% accuracy** (evals.report, Official)

Coding:

- SWE-bench Verified: **88.6% resolved** (evals.report, Verified)
- SWE-bench Pro: **69.2% resolved** (evals.report, Unverified)
- DeepSWE: **58% resolved** (evals.report, Verified)
- Vibe Code Bench: **82.72% overall accuracy** (evals.report, Official)
- LiveCodeBench: no verified public score found
- SciCode: no verified public score found

Long context:

- MRCR / RULER / GraphWalks: no long-context retrieval reported

### Normalized scores (1–100)

- **Tool use: 80/100.** GDPval 1890 Elo and τ²-bench 94.4% show strong agentic tool use; OSWorld 83.4% supports robustness.
- **Reasoning: 82/100.** GPQA Diamond 93.6% and HLE 49.8% place it near frontier; LiveBench 77.22% supports broad reasoning.
- **Context window: 95/100.** 1M token window meets top tier.
- **Multimodal: 70/100.** Text and image input with CharXiv 89.9% and ScreenSpot-Pro 87.9%; no audio/video.
- **Coding: 85/100.** SWE-bench Verified 88.6% and Vibe Code 82.72% indicate strong coding; DeepSWE 58% supports depth.
- **Cost efficiency: 45/100.** $5/$25 pricing is expensive for class.
- **Overall Score: 82/100.** Mean of five quality dims; excellent coding and reasoning offset by high cost.

---

## Signature

- Provided by: **Muse Glimmer 30B (nvidia/meta/muse-glimmer-30b)** — 2026-09-25
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
