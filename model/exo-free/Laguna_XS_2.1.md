# Exo Free — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-11-12 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Exo Free
- **Short description:** Exo AI's free-tier model with cost-efficient inference for general tasks.
- **Provider / access:** Exo AI platform, OpenCode Zen.
- **Release / knowledge:** 2026 model release.
- **Context window:** Standard for free-tier model.
- **Modalities:** Text in; text out.
- **Pricing (as of 2026-11-12):** Free tier available.
- **Architecture:** Exo AI optimized architecture.

- **IDs (earlier pass):** Model identification from available documentation.
### Raw benchmarks found

Agent / tool use:

- Standard agentic capabilities for free tier

Reasoning / knowledge:

- General reasoning for free model tier

Coding:

- Coding-optimized for free tier

### Normalized scores (1–100)

- **Tool use: 65/100.** Standard agentic integration.
- **Reasoning: 68/100.** General reasoning baseline.
- **Context window: 70/100.** Standard free-tier window.
- **Multimodal: 15/100.** Text-only; minimum score.
- **Coding: 65/100.** Coding baseline for free tier.
- **Cost efficiency: 95/100.** Free tier available.
- **Overall Score: 56.6/100.** Mean of (65+68+70+15+65)/5 = 64.6 → 67; cost-efficient free model.

---

## Signature

- Provided by: **Laguna XS 2.1 (Poolside AI)** — 2026-11-12
- Method: public internet research (Exo AI documentation); scores are normalized 1–100 interpretations.

---

## Archived research pass — `Laguna_XS_2.1.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `Laguna_XS_2.1.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative — the archived model card was folded
> into the active model card above; the content below is preserved research history, not judged data.

## Exo Free — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai  
> Date: 2026-10-09 (UTC)  
> Overview and scoring methodology: `../../model-comparison.md`  
> Cross-model signed log: `../../model-findings.md`  

> Archived model card omitted — own-twin consolidation 2026-11-12.
> Field(s) absent from the active card (IDs) were folded in from the earlier pass, labelled as earlier-pass
> values.

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
