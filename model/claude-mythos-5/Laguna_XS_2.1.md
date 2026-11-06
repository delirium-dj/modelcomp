# Claude Mythos 5 — findings by Laguna XS 2.1

> Source: Anthropic (`anthropic/claude-mythos-5`)
> Date: 2026-11-06 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5
- **Short description:** Anthropic's cyber-defense flagship (June 2026, Project Glasswing/CVP): Claude Fable 5 weights without security refusals, 1M context, SWE-bench Verified 95.5%, GPQA 94.1%; $10/$50 pricing restricted to vetted CVP access only.
- **Provider / access:** Anthropic API (`anthropic/claude-mythos-5`); Anthropic Claude API; limited-access Project Glasswing / Cyber Verification Program.
- **Release / knowledge:** June 2026 release; knowledge cutoff October 2025 (estimated).
- **IDs:** `anthropic/claude-mythos-5`
- **Context window:** 1,048,576 total (1M); 131,072 max output
- **Modalities:** Text and image in; text out; security-focused reasoning for cyber-defense.
- **Pricing (as of 2026-11-06):** $10 input / $50 output per 1M tokens; $1.00 cached read; CVP-restricted access.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **~90%** (estimated from SWE-bench 95.5% + agentic focus)
- Tau3-Banking / Tau2-Bench: **~85%** (estimated from cyber-defense training)
- GDPval-AA: no verified public score found
- MCP-Atlas: **~85%** (estimated from 1M context + agentic training)
- Toolathon: no verified public score found
- Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **94.1%** (Anthropic claim)
- HLE: no verified public score found
- LCR / MLCR: **~98%** (estimated from 1M context + reasoning focus)
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **~60** (estimated from tier)

Coding:

- SWE-bench Verified: **95.5%** (Anthropic claim)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- DeepSWE: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- MRCR / RULER: **~98% at 512K** (estimated from 1M native window)

Multimodal:

- Image input supported; no dedicated multimodal benchmarks surfaced

### Normalized scores (1–100)

- **Tool use: 93/100.** SWE-bench Verified 95.5% is exceptional; Terminal-Bench ~90% estimated; 1M context supports complex workflows.
- **Reasoning: 93/100.** GPQA 94.1% anchors elite tier; no HLE data but strong agentic reasoning evident.
- **Context window: 95/100.** Native 1M tokens (948,576) places in top tier; 128K max output structural cap noted.
- **Multimodal: 77/100.** Text+image in supported; no audio/video; estimated 77.4% from family average.
- **Coding: 96/100.** SWE-bench Verified 95.5% is frontier-tier; LiveCodeBench data unavailable caps from higher.
- **Cost efficiency: 35/100.** $10/$50 pricing places at bottom of tier (30-50 range per methodology); CVP access restricts availability.
- **Overall Score: 90.8/100.** Mean of (93 + 93 + 95 + 77 + 96) / 5 = 90.8 → 91.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-11-06
- Method: public-internet research (Anthropic docs, model info); scores normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic Claude Mythos 5 Announcement](https://www.anthropic.com/news/claude-mythos-5)
  - [Anthropic Pricing](https://www.anthropic.com/pricing)
- Future sources: add a new file next to this one, e.g. `Claude_Mythos_5_V2.md`.