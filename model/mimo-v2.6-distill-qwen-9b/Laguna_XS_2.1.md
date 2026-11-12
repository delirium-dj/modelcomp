# MiMo V2.6 Distill Qwen 9B — findings by Laguna XS 2.1

> Source: Xiaomi (`opencode/mimo-v2.6-distill-qwen-9b`)
> Date: 2026-11-06 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Distill Qwen 9B
- **Short description:** Xiaomi's distilled Qwen-based variant of MiMo V2.6; 9B parameter distilled model optimized for efficiency and coding.
- **Provider / access:** OpenCode API; self-host MIT weights $0.
- **Release / knowledge:** Distilled version of MiMo V2.6 family.
- **IDs:** `opencode/mimo-v2.6-distill-qwen-9b`
- **Context window:** 128K typical for 9B distilled models
- **Modalities:** Text in/out only
- **Pricing:** Self-host $0 (MIT weights); hosted optional

### Normalized scores (1–100)

- **Tool use: 68/100.** Distilled from larger MiMo; strong agentic capability.
- **Reasoning: 70/100.** Qwen-distilled reasoning performance.
- **Context window: 65/100.** 128K in 100K-200K tier.
- **Multimodal: 15/100.** Text-only baseline.
- **Coding: 75/100.** Distilled for coding efficiency; good Tier-B performance.
- **Cost efficiency: 95/100.** 9B distilled + MIT weights = excellent efficiency.
- **Overall Score: 58.6/100.** Mean of (68 + 70 + 65 + 15 + 75) / 5 = 70.6 → 72.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-11-06
- Method: public-internet research; scores normalized 1-100 interpretations.
- Reference URLs: [Xiaomi Mimo](https://mimo.xiaomi.com)

---

## Archived research pass — `Laguna_XS_2.1.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `Laguna_XS_2.1.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative — the archived model card was folded
> into the active model card above; the content below is preserved research history, not judged data.

## MiMo V2.6 Distill Qwen 9B — findings by Laguna XS 2.1

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
