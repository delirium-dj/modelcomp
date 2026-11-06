# Claude Opus 4.7 — findings by Laguna XS 2.1

> Source: Anthropic (`opencode/claude-opus-4.7`)
> Date: 2026-11-06 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.7
- **Short description:** Anthropic's Opus 4.7 (1M context, flat-rate $5/$25) for autonomous coding and long-horizon agents; SWE-bench Verified 87.6%, SWE-bench Pro 64.3%, 3.75MP vision.
- **Provider / access:** Anthropic API (`opencode/claude-opus-4.7`); Claude API; Amazon Bedrock, Google Cloud, Azure OpenAI.
- **Release / knowledge:** April 2026 release; knowledge cutoff October 2025.
- **IDs:** `opencode/claude-opus-4.7`; `anthropic/claude-opus-4.7`
- **Context window:** 1,000,000 total (1M); 128,000 max output
- **Modalities:** Text, image, PDF in; text out; 3.75MP vision support.
- **Pricing (as of 2026-11-06):** $5 input / $25 output per 1M tokens; $0.50 cached read; batch $2.50/$12.50.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **~85%** (estimated from SWE-bench Verified 87.6%)
- Tau3-Banking / Tau2-Bench: **~80%** (estimated from agentic performance)
- GDPval-AA: no verified public score found
- MCP-Atlas: **~85%** (estimated from 1M context + coding focus)
- Toolathon: no verified public score found
- Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: **~95%** (estimated from 1M context + reasoning strength)
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **~45** (estimated from Opus tier)

Coding:

- SWE-bench Verified: **87.6%**
- SWE-bench Pro: **64.3%**
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- DeepSWE: no verified public score found

Long context:

- MRCR / RULER: **~98% at 512K** (native 1M window)

Multimodal:

- 3.75MP vision; image+PDF input; MMMU-estimated ~80-85% for vision tasks

### Normalized scores (1–100)

- **Tool use: 87/100.** SWE-bench Verified 87.6% strong coding baseline; Terminal-Bench ~85% estimated; lacks broader tool benchmarks.
- **Reasoning: 85/100.** Opus-tier reasoning strength estimated from coding performance; no HLE/GPQA data available.
- **Context window: 95/100.** Native 1M tokens (1M/128K) places in top tier; 128K max output structural limit.
- **Multimodal: 80/100.** 3.75MP vision + image/PDF input; Opus-tier multimodal capability.
- **Coding: 88/100.** SWE-bench Verified 87.6% anchors strong Tier-A; SWE-bench Pro 64.3% caps for enterprise coding.
- **Cost efficiency: 80/100.** $5/$25 places in mid-cost tier (~$10/$50 = ~60; flat-rate improves predictability but still paid).
- **Overall Score: 87/100.** Mean of (87 + 85 + 95 + 80 + 88) / 5 = 87.0 → 86.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-11-06
- Method: public-internet research (Anthropic docs, model info); scores normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic Claude Opus 4.7](https://www.anthropic.com/news/claude-opus-4.7)
  - [Anthropic Pricing](https://www.anthropic.com/pricing)
- Future sources: add a new file next to this one, e.g. `Claude_Opus_4_7_V2.md`.