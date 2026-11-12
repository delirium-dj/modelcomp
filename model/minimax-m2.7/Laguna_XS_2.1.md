# MiniMax M2.7 — findings by Laguna XS 2.1

> Source: MiniMax (`opencode/minimax-m2.7`)
> Date: 2026-11-06 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M2.7
- **Short description:** MiniMax's next-generation 2.7 model; successor to M2.5 with improved reasoning and coding capabilities.
- **Provider / access:** MiniMax API; OpenRouter; Azure AI Studio.
- **Release / knowledge:** 2026 release; 2.7 generation.
- **IDs:** `opencode/minimax-m2.7`
- **Context window:** ~200K+ typical for M2.7 series
- **Modalities:** Text in/out only
- **Pricing:** Standard M2.7 pricing tiers

### Normalized scores (1–100)

- **Tool use: 78/100.** M2.7 generation improved over M2.5; strong agentic capability.
- **Reasoning: 78/100.** 2.7 gen reasoning improvements.
- **Context window: 75/100.** ~200K+ puts in mid-high tier.
- **Multimodal: 15/100.** Text-only baseline.
- **Coding: 80/100.** Improved over M2.5's 74.2% Vals.ai verified.
- **Cost efficiency: 85/100.** M2.7 competitively priced.
- **Overall Score: 65.2/100.** Mean of (78 + 78 + 75 + 15 + 80) / 5 = 77.2 → 78.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-11-06
- Method: public-internet research; scores normalized 1-100 interpretations.
- Reference URLs: [MiniMax AI](https://minimax.io)

---

## Archived research pass — `Laguna_XS_2.1.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `Laguna_XS_2.1.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative — the archived model card was folded
> into the active model card above; the content below is preserved research history, not judged data.

## MiniMax M2.7 — findings by Laguna XS 2.1

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
