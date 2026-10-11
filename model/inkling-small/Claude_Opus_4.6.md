# Inkling Small — findings by Claude Opus 4.6

- Source: Thinking Machines Lab / Inkling Small
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling Small
- **Short description:** Thinking Machines Lab's efficient open-weight multimodal MoE model (Jul 2026). 276B total / 12B active parameters per token. Deployment-friendly variant of the flagship 975B Inkling, designed by Mira Murati's lab.
- **Provider / access:** Thinking Machines Tinker platform, DeepInfra, OpenRouter, Hugging Face (self-hosted). Apache 2.0 open weights.
- **Release / knowledge:** 2026-07-30 release.
- **IDs:** `thinkingmachines/inkling-small` (HuggingFace); available on multiple inference providers
- **Context window:** 1,000,000 tokens (1M).
- **Modalities:** Text, image, audio in; text out; tool calls. Variable thinking effort dial.
- **Pricing (as of 2026-10-11):** $0 self-hosted (Apache 2.0). API pricing varies by provider (DeepInfra, Tinker platform).
- **Architecture:** 276B total parameters, 12B active per token. 42-layer decoder-only sparse MoE transformer. Routes each token to 6 of 256 experts + 2 shared experts. Open weights (Apache 2.0). BF16 and NVFP4 checkpoints.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **64.7%** (source: vast.ai, thinkingmachines.ai)
- IFBench (instruction following): **82.2%** (source: vast.ai)
- GDPval-AA: no verified public score found
- Tau3-Banking: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **89.5%** (source: atlabyte.com, vast.ai)
- HLE (Humanity's Last Exam): **31.6%** (source: explainx.ai, atlabyte.com)
- AIME 2026: **95.5%** (source: vast.ai)
- HMMT February 2026: **90.2%** (source: vast.ai)
- ARC-AGI-2: no verified public score found

Coding:

- SWE-bench Verified: **80.2%** (source: vast.ai, thinkingmachines.ai; bash-only harness)
- SWE-bench Pro (public): **55.9%** (source: vast.ai, therundown.ai)
- LiveCodeBench: no verified standalone score found
- SciCode: no verified public score found

Long context:

- 1,000,000 token context window. No MRCR/RULER retrieval score published.

### Normalized scores (1–100)

- **Tool use: 82/100.** TB 2.1 64.7% is strong (ref: 60–70% on TB 2.1 = 78–85 range). IFBench 82.2% shows excellent instruction following. Variable thinking effort dial adds flexibility. Missing Tau3/GDPval data.
- **Reasoning: 89/100.** GPQA Diamond 89.5% is near-frontier. AIME 2026 95.5% and HMMT 90.2% are exceptional math performance. HLE 31.6% is moderate. Strong reasoning across domains.
- **Context window: 90/100.** 1M verified. Open-weight model with 1M context is exceptional. No published retrieval benchmarks reduce confidence slightly.
- **Multimodal: 70/100.** Text + image + audio in; text out. Hierarchical patch encoder for images, discrete token encoding for audio. No video input. Triple-modality input = 65–75 range.
- **Coding: 85/100.** SWE-bench Verified 80.2% is near-frontier (bash-only harness). SWE-bench Pro 55.9% shows solid real-world coding. Very strong for an open-weight model with 12B active params.
- **Cost efficiency: 95/100.** Apache 2.0 open weights — free self-hosting. 12B active params = very efficient inference. Extraordinary performance-per-dollar for self-hosted deployments.
- **Overall Score: 83/100.** Mean of (82 + 89 + 90 + 70 + 85) / 5 = 83.2, rounded to 83. Outstanding open-weight model with frontier-class performance at a fraction of the active parameter count.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-11
- Method: Public internet research (thinkingmachines.ai, vast.ai, huggingface.co, explainx.ai, atlabyte.com, eigent.ai, therundown.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
