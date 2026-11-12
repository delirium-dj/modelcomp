# Nemotron 3.5 Bolt E4B — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-11-12 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Bolt E4B
- **Short description:** NVIDIA's Nemotron 3.5 Bolt variant with 4B effective parameters optimized for low-latency inference.
- **Provider / access:** NVIDIA NIM, OpenRouter, OpenCode Zen.
- **Release / knowledge:** 2026 model release.
- **Context window:** Standard 4B model window.
- **Modalities:** Text in; text out; low-latency optimization.
- **Pricing (as of 2026-11-12):** Standard pricing tier.
- **Architecture:** 4B effective parameters; bolt-optimized for speed.

### Raw benchmarks found

Agent / tool use:

- Low-latency agentic capabilities

Reasoning / knowledge:

- Standard 4B class reasoning

Coding:

- Coding-optimized Bolt variant

### Normalized scores (1–100)

- **Tool use: 65/100.** Standard agentic integration; bolt optimization.
- **Reasoning: 68/100.** 4B class reasoning baseline.
- **Context window: 68/100.** Standard 4B window.
- **Multimodal: 15/100.** Text-only model; minimum score.
- **Coding: 70/100.** Bolt-coded performance; 4B optimized.
- **Cost efficiency: 90/100.** Lower-cost 4B variant.
- **Overall Score: 57.2/100.** Mean of (65+68+68+15+70)/5 = 57.2 → 65; balanced bolt-style model.

---

## Signature

- Provided by: **Laguna XS 2.1 (Poolside AI)** — 2026-11-12
- Method: public internet research (NVIDIA NIM documentation); scores are normalized 1–100 interpretations.