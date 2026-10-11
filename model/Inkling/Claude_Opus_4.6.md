# Inkling — findings by Claude Opus 4.6

- Source: Thinking Machines Lab / Inkling
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling
- **Short description:** Thinking Machines Lab's flagship 975B-parameter open-weight MoE model (Jul 2026). Founded by former OpenAI CTO Mira Murati. Natively multimodal (text/image/audio), with controllable reasoning effort dial. Pretrained on 45T tokens.
- **Provider / access:** Thinking Machines Tinker platform, Baseten, DeepInfra, OpenRouter. Hugging Face open weights. Apache 2.0.
- **Release / knowledge:** 2026-07-15 release.
- **IDs:** `thinkingmachines/inkling` (HuggingFace); various provider IDs
- **Context window:** 1,000,000 tokens (1M).
- **Modalities:** Text, image, audio in; text out; tool calls. Reasoning effort dial (0.00–0.99). Hierarchical patch encoder for images, discrete dMel token encoding for audio.
- **Pricing (as of 2026-10-11):** $0 self-hosted (Apache 2.0 open weights). API pricing varies by provider.
- **Architecture:** 975B total parameters, 41B active per token. 66-layer decoder-only sparse MoE transformer. Routes to 6 of 256 experts + 2 shared. Pretrained on 45T tokens of text, images, audio, video. Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **63.8%** (source: reddit.com, regolo.ai)
- FORTRESS (Adversarial): **78.0%** (source: reddit.com)
- GDPval-AA: no verified public score found
- Tau3-Banking: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **87.2%** (source: regolo.ai)
- AIME 2026: **97.1%** (source: regolo.ai)
- HLE (Humanity's Last Exam): no verified public score found
- ARC-AGI-2: no verified public score found

Coding:

- SWE-bench Verified: **77.6%** (source: reddit.com, regolo.ai)
- LiveCodeBench: no verified standalone score found
- SciCode: no verified public score found
- DeepSWE: no verified public score found

Long context:

- 1,000,000 token context window. No MRCR/RULER retrieval score published.

### Normalized scores (1–100)

- **Tool use: 80/100.** TB 2.1 63.8% is solid (ref: 60–70% on TB 2.1 = 78–85 range). FORTRESS 78.0% shows adversarial robustness. Missing GDPval/Tau3 data. Smaller sibling (Inkling-Small) actually scores slightly higher on some benchmarks.
- **Reasoning: 87/100.** GPQA Diamond 87.2% is strong. AIME 2026 97.1% is near-perfect math reasoning. Missing HLE/ARC-AGI data. Controllable reasoning dial allows quality-cost tradeoffs.
- **Context window: 90/100.** 1M verified. Open-weight model with 1M context is exceptional. 45T pretraining tokens provide strong foundation. No retrieval benchmarks published.
- **Multimodal: 70/100.** Text + image + audio in; text out. Triple-modality native input (hierarchical patch + dMel encoding). No video input. Audio adds significant value over image-only = 65–75 range.
- **Coding: 82/100.** SWE-bench Verified 77.6% is strong. Positioned for agentic coding workflows with self-directed post-training capability. Missing LiveCodeBench/DeepSWE verification.
- **Cost efficiency: 92/100.** Apache 2.0 open weights — free self-hosting. 41B active params = reasonably efficient MoE inference. Extraordinary for a model of this quality.
- **Overall Score: 82/100.** Mean of (80 + 87 + 90 + 70 + 82) / 5 = 81.8, rounded to 82. Milestone open-weight model from Mira Murati's lab; strong across all dimensions, especially math reasoning.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-11
- Method: Public internet research (thinkingmachines.ai, regolo.ai, reddit.com, datacamp.com, baseten.co, sebastianraschka.com, kie.ai, sourceforge.net); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
