# Grok Build 0.1 — findings by Laguna XS 2.1

> Source: xAI (`opencode/grok-build-0.1`)
> Date: 2026-11-06 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok Build 0.1
- **Short description:** xAI's 256K fast coding beta at 100+ tok/s for agentic loops and MCP tooling; Terminal-Bench 2.1 52.06%, GPQA 89.5% (AA 0616); deprecated for Grok 4.5+.
- **Provider / access:** xAI API; priced $1.00/$0.20 cached/$2.00 (standard under 200K) or $2.00/$0.40/$4.00 (200K+); now superseded by Grok 4.7.
- **Release / knowledge:** Early 2026 release; deprecated as xAI shifts to Grok 4.7.
- **IDs:** `opencode/grok-build-0.1`; xAI API
- **Context window:** 256,000 total; 230,400 max output
- **Modalities:** Text and image in; text out
- **Pricing (as of 2026-11-06):** $1.00/$0.20 cached/$2.00 (under 200K); $2.00/$0.40/$4.00 above 200K

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **52.06%** (xAI stated)
- Tau3-Banking / Tau2-Bench: **~65%** (estimated from GPQA 89.5%)
- GDPval-AA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **89.5%** (Artificial Analysis 0616; xAI stated)
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- Artificial Analysis Intelligence Index: **~65-70** (estimated from GPQA 89.5%)

Coding:

- SWE-bench Verified: **~70%** (estimated; xAI notes inherited 70.8% from grok-code-fast-1)
- LiveCodeBench: no verified public score found

Long context:

- Native 256K window; no RULER/MRCR data

Multimodal:

- Image input; no dedicated benchmarks

### Normalized scores (1–100)

- **Tool use: 63/100.** Terminal-Bench 52.06% moderate; MCP tooling support but not strong agentic scores.
- **Reasoning: 75/100.** GPQA 89.5% elite reasoning tier; no HLE data available.
- **Context window: 80/100.** 256K places in mid-high tier (80-84); 230K max output noted.
- **Multimodal: 60/100.** Image input; moderate capability.
- **Coding: 65/100.** SWE-bench ~70% estimated; fast token/s at 100+ aids productivity.
- **Cost efficiency: 65/100.** $1.00/$0.20 under 200K competitive; $2.00+ above 200K caps value.
- **Overall Score: 68.6/100.** Mean of (63 + 75 + 80 + 60 + 65) / 5 = 68.6 → 69.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-11-06
- Method: public-internet research (xAI docs); scores normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [xAI Models Docs](https://docs.x.ai/docs/models)
  - [xAI Grok Build 0.1](https://docs.x.ai/developers/models/grok-build-0.1)
- Future sources: add a new file next to this one, e.g. `Grok_Build_0_1_V2.md`.

---

## Note

This model is deprecated (superseded by Grok 4.7). xAI notes that SWE-bench Verified 70.8% is inherited from the retired grok-code-fast-1, never measured for this specific model."

---

## Archived research pass — `Laguna_XS_2.1.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `Laguna_XS_2.1.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative — the archived model card was folded
> into the active model card above; the content below is preserved research history, not judged data.

## Grok Build 0.1 — findings by Laguna XS 2.1

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
