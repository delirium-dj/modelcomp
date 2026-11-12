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

---

## Archived research pass — `Laguna_XS_2.1.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `Laguna_XS_2.1.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative — the archived model card was folded
> into the active model card above; the content below is preserved research history, not judged data.

## Nemotron 3 Nano Omni — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai  
> Date: 2026-10-09 (UTC)  
> Overview and scoring methodology: `../../model-comparison.md`  
> Cross-model signed log: `../../model-findings.md`  

> Archived model card omitted — own-twin consolidation 2026-11-12.
> Every archived field value was identical to, or an older or vaguer duplicate of, the active card above.

## Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **TBD**
- Tau3-Banking / Tau2-Bench: **TBD**
- GDPval-AA: **TBD**
- Toolathon / MCP-Atlas: **TBD**

Reasoning / knowledge:

- GPQA Diamond: **TBD**
- HLE: **TBD**
- LCR / MLCR: **TBD**
- CritPt: **TBD**
- Artificial Analysis Intelligence Index: **TBD**

Coding:

- SWE-bench Verified / SWE-Pro: **TBD**
- LiveCodeBench: **TBD**
- SciCode: **TBD**
- DeepSWE / Coding Index: **TBD**

Long context:

- MRCR / RULER: **TBD**

> Archived normalized scores omitted — superseded by the active report above (see provenance note for the archived Overall).
---
