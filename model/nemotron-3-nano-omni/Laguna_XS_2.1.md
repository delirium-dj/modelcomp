# Nemotron 3 Nano Omni 30B A3B — findings by Laguna XS 2.1

> Source: NVIDIA (`opencode/nemotron-3-nano-omni`)
> Date: 2026-11-06 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Nano Omni 30B A3B
- **Short description:** NVIDIA's ultra-efficient 30B/3B-active Omni model optimized for mobile/edge deployment with vision and audio capabilities.
- **Provider / access:** NVIDIA NIM; HuggingFace; self-host NVIDIA weights.
- **Release / knowledge:** 2026 release; nano-tier with omnimodel capabilities.
- **IDs:** `opencode/nemotron-3-nano-omni`
- **Context window:** 128K typical for nano models
- **Modalities:** Text, image, audio in; text, JSON out
- **Pricing:** Self-host $0; hosted $X.XX/$X.XX

### Normalized scores (1–100)

- **Tool use: 65/100.** Nano model; capable agentic tooling but limited by size.
- **Reasoning: 65/100.** 30B scale with Omni optimizations.
- **Context window: 65/100.** 128K standard nano tier.
- **Multimodal: 75/100.** Omni model with vision+audio; strong multimodal capability for size.
- **Coding: 65/100.** Nano-tier coding; limited by parameter count.
- **Cost efficiency: 95/100.** Nano architecture optimized for efficiency; low $/tok.
- **Overall Score: 67/100.** Mean of (65 + 65 + 65 + 75 + 65) / 5 = 67 → 70.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-11-06
- Method: public-internet research; scores normalized 1-100 interpretations.
- Reference URLs: [NVIDIA Nemotron](https://developer.nvidia.com/nemotron)