# Claude Opus 4.8 — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Anthropic's mid-2026 flagship upgrade focusing on improved reliability in long-running agentic workflows, with better self-calibration and reduced over-defensiveness.
- **Provider / access:** Anthropic API (`claude-opus-4-8`); AWS Bedrock, Google Cloud, Microsoft Foundry; Messages API.
- **Release / knowledge:** Released 2026-05-28; knowledge cutoff estimated early 2026.
- **IDs:** `anthropic/claude-opus-4-8` (no Free-tier ID verified).
- **Context window:** 1,000,000 tokens (1M); verified via Anthropic docs.
- **Modalities:** Text and image in; text out; native tool calling; JSON mode support.
- **Pricing (as of 2026-10-01):** $5 input / $25 output per 1M tokens; cached input $0.50; Fast mode at $10/$50 premium.
- **Architecture:** Proprietary; legacy Opus architecture superseded by Opus 5 and Fable 5.1.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.7%** (community benchmarks)
- OSWorld-Verified: **83.4%** (community evaluations)
- Agentic RankedAGI: **87.5%** (community evaluations)
- GDPval-AA, Tau3-Banking, Claw-Eval: **no verified public scores found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public standalone score** (inferred ~90-93% from Anthropic family positioning)
- HLE: **no verified public score found**

Coding:

- SWE-bench Pro: **69.2%** (leaderboard evaluations)
- DeepSWE, LiveCodeBench, SciCode: **no verified public scores found**

Long context:

- 1M context window verified; no public MRCR/RULER retrieval scores published.

### Normalized scores (1-100)

Derived from benchmarks above using methodology in `model-comparison.md`:

- **Tool use: 85/100.** Terminal-Bench 82.7% places in upper-mid tier (frontier refs 88%+); OSWorld 83.4% and RankedAGI 87.5% excellent; capped by missing GDPval, Tau3, Claw-Eval.
- **Reasoning: 85/100.** Inferred GPQA ~90-93% from family positioning; strong between Opus 4.6 and Opus 5; missing explicit HLE/GPQA/LCR verification.
- **Context window: 95/100.** Full 1M verified; no retrieval benchmarks means upper-mid tier; stable implementation.
- **Multimodal: 65/100.** Text + image input; text-only output; 60-70 tier; no video/audio.
- **Coding: 83/100.** SWE-Pro 69.2% strong; better than Opus 4.6's SWE-V 80.8% on harder benchmark; missing DeepSWE/SciCode independent verification.
- **Cost efficiency: 70/100.** $5/$25 standard pricing; same as Opus 5; fast mode $10/$50 premium; not competitive with free tiers.
- **Overall Score: 83/100.** Mean of (85 + 85 + 95 + 65 + 83) / 5 = 82.6 → 83. Reliable mid-tier model; superseded by Opus 5 at identical pricing.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: public-internet research (community benchmarks, RankedAGI, SWE-bench leaderboard); scores normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.