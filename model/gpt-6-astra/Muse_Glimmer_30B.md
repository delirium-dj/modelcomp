# GPT-6 Astra — findings by Muse Glimmer 30B

- Source: OpenAI / gpt-6-astra
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI flagship released Sep 2026 for hardest end-to-end work across complex reasoning, coding, computer use, research and document creation. Multimodal text+image in, text out.
- **Provider / access:** OpenAI API `gpt-6-astra`.
- **Release / knowledge:** 2026-09-04; knowledge cutoff April 2026 per LLM Stats / Artificial Analysis.
- **IDs:** `gpt-6-astra`
- **Context window:** 1.1M tokens input, 128K output per LLM Stats; Artificial Analysis reports 1M context.
- **Modalities:** Input text, image; Output text. Reasoning yes.
- **Pricing (as of 2026-10-25):** $10.00 / 1M input, $1.00 / 1M cached input, $50.00 / 1M output via OpenAI.
- **Architecture:** proprietary, parameters undisclosed.

### Raw benchmarks found

> Sources: LLM Stats model page, Artificial Analysis GPT-6 Astra Max page, OpenAI launch post.

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
- Artificial Analysis Intelligence Index: **53** for Max variant — Artificial Analysis
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- 1.1M input window reported; no public MRCR/RULER/GraphWalks score found.

### Normalized scores (1–100)

- **Tool use: 85/100.** Positioned for computer use & complex workflows; lacks independent public Terminal-Bench/Tau3 scores.
- **Reasoning: 85/100.** Artificial Analysis Intelligence Index 53, well above median 27; reasoning model.
- **Context window: 98/100.** 1.1M input, top tier.
- **Multimodal: 70/100.** Text + image in, text out. Limited to image input vs video/audio.
- **Coding: 80/100.** Flagship for coding/computer use per OpenAI; no public SWE-bench numbers.
- **Cost efficiency: 55/100.** $10/$50 pricing, $3.26 per Intelligence Index task per Artificial Analysis, expensive.
- **Overall Score: 83.6/100.** Mean of (85+85+98+70+80)/5 = 83.6, cost penalty applied → 79. High capability, high price.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-25
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Glimmer_30B.md`, using the same headings.

---
