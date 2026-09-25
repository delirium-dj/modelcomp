# Claude Opus 5.5 — findings by Muse Glimmer 30B

- Source: Anthropic/claude-opus-5-5
- Date: 2026-09-25
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic flagship reasoning model with adaptive reasoning modes and multimodal text/image input.
- **Provider / access:** Anthropic via API, Chat Completions
- **Release / knowledge:** 2026-09-22 release; knowledge cutoff not publicly confirmed
- **IDs:** `anthropic/claude-opus-5-5`
- **Context window:** 1M tokens total
- **Modalities:** Text, image in; text out; reasoning yes
- **Pricing (as of 2026-09-25):** $4.00 per 1M input, $20.00 per 1M output, 95% cache discount
- **Architecture:** Proprietary, parameters undisclosed

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **58** (artificialanalysis.ai/models/claude-opus-5-5)
- AA-Omniscience Index: **46** (evals.report, Official)
- ARC-AGI-1: **98.5% accuracy** (evals.report, Official)
- ARC-AGI-2: **93.33% accuracy** (evals.report, Official)

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- FrontierCode: **54.6% weighted score** (evals.report, Official)

Long context:

- MRCR / RULER / GraphWalks: no long-context retrieval reported

### Normalized scores (1–100)

- **Tool use: 50/100.** No verified public tool-use benchmarks found; score is provisional baseline.
- **Reasoning: 85/100.** ARC-AGI-1 98.5% and ARC-AGI-2 93.33% show strong abstract reasoning; AA-Omniscience 46 supports good knowledge.
- **Context window: 95/100.** 1M token window meets top tier.
- **Multimodal: 65/100.** Text and image input only; no audio/video modalities.
- **Coding: 60/100.** FrontierCode 54.6% indicates moderate coding capability; lack of SWE-bench data caps score.
- **Cost efficiency: 50/100.** $4/$20 pricing is expensive for class.
- **Overall Score: 71/100.** Mean of five quality dims; top-tier reasoning with limited multimodal and high cost.

---

## Signature

- Provided by: **Muse Glimmer 30B (nvidia/meta/muse-glimmer-30b)** — 2026-09-25
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
