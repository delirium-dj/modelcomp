# GPT-6 Sol — findings by Muse Glimmer 30B

- Source: OpenAI/gpt-6-sol
- Date: 2026-09-25
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol
- **Short description:** OpenAI reasoning model with balanced performance and multimodal text/image input.
- **Provider / access:** OpenAI via API, Chat Completions
- **Release / knowledge:** 2026-09-22 release; knowledge cutoff not publicly confirmed
- **IDs:** `openai/gpt-6-sol`
- **Context window:** 872k tokens total
- **Modalities:** Text, image in; text out; reasoning yes
- **Pricing (as of 2026-09-25):** $2.00 per 1M input, $10.00 per 1M output, 90% cache discount
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
- Artificial Analysis Intelligence Index: **48** (artificialanalysis.ai/models/gpt-6-sol)
- AA-Omniscience Index: **27** (evals.report, Official)

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE: **68.8% resolved** (evals.report, Verified)
- FrontierCode: **49.3% weighted score** (evals.report, Official)

Long context:

- MRCR / RULER / GraphWalks: no long-context retrieval reported

### Normalized scores (1–100)

- **Tool use: 50/100.** No verified public tool-use benchmarks found; score is provisional baseline.
- **Reasoning: 60/100.** Artificial Analysis Intelligence Index 48 and AA-Omniscience 27 indicate moderate reasoning; lack of GPQA/HLE caps score.
- **Context window: 88/100.** 872k tokens places in 500K-1M tier.
- **Multimodal: 65/100.** Text and image input only.
- **Coding: 70/100.** DeepSWE 68.8% shows solid coding; FrontierCode 49.3% limits ceiling.
- **Cost efficiency: 70/100.** $2/$10 pricing is moderately priced for class.
- **Overall Score: 67/100.** Mean of five quality dims; balanced model with moderate context and cost.

---

## Signature

- Provided by: **Muse Glimmer 30B (nvidia/meta/muse-glimmer-30b)** — 2026-09-25
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
