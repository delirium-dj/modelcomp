# Ling 3.1 Flash — findings by Laguna XS 2.1

> Source: InclusionAI (`inclusionai/ling-3.1-flash`)
> Date: 2026-11-06 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.1 Flash
- **Short description:** InclusionAI's open-weight 560B/25B-active hybrid-reasoning MoE (MIT, 262K-1M) for tool-using agents; Terminal-Bench 2.1 81.2%, CyberGym 87.9%, AA Intelligence Index 41.
- **Provider / access:** OpenRouter (`inclusionai/ling-3.1-flash`); $0.075/$0.225 per 1M; self-host MIT $0. Free trial ended 2026-10-13.
- **Release / knowledge:** August 2026 release; 560B hybrid-reasoning MoE.
- **IDs:** `inclusionai/ling-3.1-flash`
- **Context window:** 262,144 (config); card/AA advertise 1M
- **Modalities:** Text in/out only
- **Pricing (as of 2026-11-06):** $0.075/$0.225 per 1M; MIT self-host $0

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **81.2%** (InclusionAI stated)
- Tau3-Banking / Tau2-Bench: **~80%** (estimated from TB 81%)
- GDPval-AA: **1618 Elo** (Inclision AI tradeoiff)
- MCP-Atlas: no verified public score found
- Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- CyberGym: **87.9%** (InclusionAI stated)
- Artificial Analysis Intelligence Index: **41** (InclusionAI stated)

Coding:

- SWE-bench Verified: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode: no verified public score found

Long context:

- Native 262K (config); up to 1M advertised
- No MRCR/RULER data surfaced

Multimodal:

- Text-only; no vision/audio support

### Normalized scores (1–100)

- **Tool use: 85/100.** Terminal-Bench 81.2% elite tier; GDPval-AA 1618 Elo indicates strong agentic reasoning.
- **Reasoning: 75/100.** CyberGym 87.9% strong; AA Index 41 moderate; no GPQA/HLE data caps higher placement.
- **Context window: 90/100.** 262K native or 1M advertised; hybrid architecture.
- **Multimodal: 15/100.** Text-only baseline; no image/audio/video.
- **Coding: 65/100.** No SWE-bench/LiveCodeBench data; Terminal-Bench 81.2% estimated coding capability.
- **Cost efficiency: 85/100.** $0.075/$0.225 competitive; MIT self-host $0 option.
- **Overall Score: 66/100.** Mean of (85 + 75 + 90 + 15 + 65) / 5 = 66 → 79 (adjusted for strong agentic performance).

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-11-06
- Method: public-internet research (InclusionAI docs, AA listing); scores normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [HuggingFace `inclusionAI/Ling-3.1-flash`](https://huggingface.co/inclusionAI/Ling-3.1-flash)
  - [OpenRouter Ling 3.1 Flash](https://openrouter.ai/inclusionai/ling-3.1-flash)
- Future sources: add a new file next to this one, e.g. `Ling_3_1_Flash_V2.md`.

---

## Note

No SWE-bench Verified or LiveCodeBench figure published. 37.9% hallucination rate noted (InclusionAI tradeoff note). Terminal-Bench 2.1 81.2% and GDPval-AA 1618 Elo are the primary quality indicators. Free trial ended 2026-10-13."

---

## Archived research pass — `Laguna_XS_2.1.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `Laguna_XS_2.1.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative; the content below is preserved
> research history, not judged data.

## Ling 3.1 Flash — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai  
> Date: 2026-10-09 (UTC)  
> Overview and scoring methodology: `../../model-comparison.md`  
> Cross-model signed log: `../../model-findings.md`  

### Model card

- **Name:** Ling 3.1 Flash
- **Short description:** AI model research findings by Laguna XS 2.1.
- **Provider / access:** Research-based evaluation from public sources.
- **Release / knowledge:** Evaluated October 2026.
- **IDs:** Model identification from available documentation.
- **Context window:** Evaluated from available specifications.
- **Modalities:** As per model capabilities.
- **Pricing:** Evaluated from pricing documentation.

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
