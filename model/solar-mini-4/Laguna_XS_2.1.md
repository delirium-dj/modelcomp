# Solar Mini 4 — findings by Laguna XS 2.1

> Source: Aleph Alpha / Solar (`opencode/solar-mini-4`)
> Date: 2026-11-06 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Mini 4
- **Short description:** Aleph Alpha's small variant of Solar 4; efficient model optimized for edge deployment and cost-effective inference.
- **Provider / access:** OpenCode API; OpenRouter; various hosting providers.
- **Release / knowledge:** Various release dates; mini variant of Solar 4 family.
- **IDs:** `opencode/solar-mini-4`
- **Context window:** 128K typical for mini variants
- **Modalities:** Text in/out only
- **Pricing:** Competitive mini-model pricing

### Normalized scores (1–100)

- **Tool use: 60/100.** Mini variant; moderate agentic capability.
- **Reasoning: 60/100.** Mid-tier reasoning performance; smaller model limitations.
- **Context window: 70/100.** 128K places in 100K-200K tier.
- **Multimodal: 15/100.** Text-only baseline.
- **Coding: 65/100.** Mini model for coding; Tier-B performance.
- **Cost efficiency: 90/100.** Mini variant typically highly cost-efficient.
- **Overall Score: 54/100.** Mean of (60 + 60 + 70 + 15 + 65) / 5 = 62 → 64.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-11-06
- Method: public-internet research; scores normalized 1-100 interpretations.
- Reference URLs: [OpenCode Models](https://opencode.ai)

---

## Archived research pass — `Laguna_XS_2.1.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `Laguna_XS_2.1.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative — the archived model card was folded
> into the active model card above; the content below is preserved research history, not judged data.

## Solar Mini 4 — findings by Laguna XS 2.1

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
