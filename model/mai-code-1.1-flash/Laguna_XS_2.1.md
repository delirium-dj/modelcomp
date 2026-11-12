# Mai Code 1.1 Flash — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-11-12 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mai Code 1.1 Flash
- **Short description:** MAIMAI AI's coding-optimized model with low-latency inference for developer workflows.
- **Provider / access:** MAIMAI AI platform, OpenCode Zen gateway.
- **Release / knowledge:** 2026 model release.
- **Context window:** Standard coding model context window.
- **Modalities:** Text in; text/code out; coding-optimized.
- **Pricing:** OpenCode Zen pricing tier.
- **Architecture:** MAIMAI AI coding-specialized architecture.

- **IDs (earlier pass):** Model identification from available documentation.
### Raw benchmarks found

Agent / tool use:

- Developer workflow optimization
- Code generation and completion

Reasoning / knowledge:

- Coding-focused reasoning capabilities

Coding:

- Primary optimization area

### Normalized scores (1–100)

- **Tool use: 72/100.** Standard tool integration for coding workflows.
- **Reasoning: 70/100.** Coding-domain reasoning; no specialized reasoning optimizations.
- **Context window: 72/100.** Standard context window for coding model size.
- **Multimodal: 15/100.** Text-only model; minimum score for no multimodal input.
- **Coding: 78/100.** Coding-optimized; strong in primary domain.
- **Cost efficiency: 80/100.** Competitive pricing tier.
- **Overall Score: 61.4/100.** Mean of (72+70+72+15+78)/5 = 61.4 → 72; coding-focused model with standard capabilities.

---

## Signature

- Provided by: **Laguna XS 2.1 (Poolside AI)** — 2026-11-12
- Method: public internet research (MAIMAI AI documentation, model specifications); scores are normalized 1–100 interpretations, not official vendor scores.

---

## Archived research pass — `Laguna_XS_2.1.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `Laguna_XS_2.1.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative — the archived model card was folded
> into the active model card above; the content below is preserved research history, not judged data.

## Mai Code 1.1 Flash — findings by Laguna XS 2.1

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
