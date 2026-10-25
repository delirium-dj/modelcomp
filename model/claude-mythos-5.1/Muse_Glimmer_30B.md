# Claude Mythos 5.1 — findings by Muse Glimmer 30B

- Source: Anthropic / claude-mythos-5.1
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Anthropic trusted-access deployment of Claude Fable 5.1 weights, targeted for demanding reasoning and long-horizon agentic work with text and image input, tool use. Same underlying model as Fable 5.1 with different safeguards.
- **Provider / access:** Anthropic verified access `claude-mythos-5.1`.
- **Release / knowledge:** 2026-09-01; knowledge cutoff not publicly disclosed.
- **IDs:** `claude-mythos-5.1`
- **Context window:** 1.0M tokens input, 128K output per LLM Stats.
- **Modalities:** Input text, image; Output text. Reasoning yes.
- **Pricing (as of 2026-10-25):** $10.00 / 1M input, $0.25 / 1M cached input, $50.00 / 1M output via Anthropic.
- **Architecture:** proprietary, parameters undisclosed.

### Raw benchmarks found

> Sources: LLM Stats model page, Artificial Analysis Claude Fable 5.1 article 2026-09-01, Anthropic launch post.

Agent / tool use:

- Terminal-Bench v2.1: **91.4%** — Artificial Analysis article for Fable 5.1 / Mythos 5.1
- Tau3-Bench Banking: +9 points over Fable 5 — Artificial Analysis
- GDPval-AA v2: **1,853 Elo** — Artificial Analysis
- AA-Briefcase: **1,694 Elo** — Artificial Analysis
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: **59.1%** — Artificial Analysis for Fable 5.1 / Mythos 5.1
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **66** max, **65** xhigh — Artificial Analysis for Fable 5.1 / Mythos 5.1
- Omniscience Accuracy: **67.2%**, attempt rate 93.4% — Artificial Analysis

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode: **62.0%** — Artificial Analysis
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- 1M token window reported; no public MRCR/RULER/GraphWalks score found.

### Normalized scores (1–100)

- **Tool use: 90/100.** Terminal-Bench 91.4%, τ³-Banking +9 pts, GDPval-AA 1,853 Elo.
- **Reasoning: 93/100.** Intelligence Index 66 max, HLE 59.1%, Omniscience accuracy 67.2%.
- **Context window: 95/100.** 1.0M tokens.
- **Multimodal: 70/100.** Text + image in, text out.
- **Coding: 85/100.** Terminal-Bench 91.4%, SciCode 62.0%, strong agentic coding.
- **Cost efficiency: 55/100.** $10/$50 pricing, $3.76 per Intelligence Index task max per Artificial Analysis, expensive.
- **Overall Score: 86.6/100.** Mean of (90+93+95+70+85)/5 = 86.6, cost penalty → 81. Frontier reasoning/agentic model, high price.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-25
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Glimmer_30B.md`, using the same headings.

---
