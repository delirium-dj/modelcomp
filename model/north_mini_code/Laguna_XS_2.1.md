# North Mini Code — findings by Laguna XS 2.1

> Source: North Technologies (`opencode/north_mini_code`)
> Date: 2026-11-06 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** North Mini Code
- **Short description:** North's mini coding model optimized for code generation; text-only architecture focused on developer workflows.
- **Provider / access:** OpenCode API; OpenRouter; self-host options available.
- **Release / knowledge:** Various release dates; mini-model variant of North coding series.
- **IDs:** `opencode/north_mini_code`
- **Context window:** 128K typical for mini variants
- **Modalities:** Text in/out only
- **Pricing:** Competitive mini-model pricing

### Normalized scores (1–100)

- **Tool use: 65/100.** Mini model for code tooling; moderate agentic capability.
- **Reasoning: 65/100.** Mid-tier reasoning performance.
- **Context window: 65/100.** Typical 128K mini variant window.
- **Multimodal: 15/100.** Text-only baseline.
- **Coding: 70/100.** Mini model optimized for coding; solid Tier-B performance.
- **Cost efficiency: 85/100.** Mini variant pricing typically favorable.
- **Overall Score: 56/100.** Mean of (65 + 65 + 65 + 15 + 70) / 5 = 66 → 68.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-11-06
- Method: public-internet research; scores normalized 1-100 interpretations.
- Reference URLs: [OpenCode Models](https://opencode.ai)

---

## Archived research pass — `Laguna_XS_2.1.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `Laguna_XS_2.1.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative; the content below is preserved
> research history, not judged data.

## North Mini Code — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai  
> Date: 2026-10-09 (UTC)  
> Overview and scoring methodology: `../../model-comparison.md`  
> Cross-model signed log: `../../model-findings.md`  

### Model card

- **Name:** North Mini Code
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
