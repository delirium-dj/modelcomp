# Claude Opus 5 — findings by Muse Glimmer 30B

- Source: Anthropic / claude-opus-5
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic flagship general-access model released Jul 2026, built for efficient agentic coding, knowledge work, scientific research, computer use and problem-solving. Anthropic reports state-of-the-art results on Frontier-Bench v0.1.
- **Provider / access:** Anthropic API `claude-opus-5`.
- **Release / knowledge:** 2026-07-24; knowledge cutoff not publicly disclosed.
- **IDs:** `claude-opus-5`
- **Context window:** 1.0M tokens input/output per LLM Stats.
- **Modalities:** Input text, image; Output text. Reasoning yes.
- **Pricing (as of 2026-10-25):** $5.00 / 1M input, $0.50 / 1M cached input, $25.00 / 1M output via Anthropic.
- **Architecture:** proprietary, parameters undisclosed.

### Raw benchmarks found

> Sources: LLM Stats model page, Artificial Analysis Claude Opus 5 Max page, Anthropic system card.

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- Tau3-Bench Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **51** for Max variant — Artificial Analysis
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- 1M token window reported; no public MRCR/RULER/GraphWalks score found.

### Normalized scores (1–100)

- **Tool use: 82/100.** Flagship agentic coding/computer use per Anthropic; lack independent public Terminal-Bench scores.
- **Reasoning: 82/100.** Intelligence Index 51, well above median 27; reasoning model.
- **Context window: 95/100.** 1.0M tokens.
- **Multimodal: 70/100.** Text + image in, text out.
- **Coding: 82/100.** Positioned for agentic coding; no public SWE-bench numbers.
- **Cost efficiency: 60/100.** $5/$25 pricing, $5.86 per Intelligence Index task per Artificial Analysis, expensive.
- **Overall Score: 82.2/100.** Mean of (82+82+95+70+82)/5 = 82.2, cost penalty → 78. Strong capability, high price and verbosity.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-25
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Glimmer_30B.md`, using the same headings.

---
