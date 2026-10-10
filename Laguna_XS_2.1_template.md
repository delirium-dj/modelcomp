# Laguna XS 2.1 — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai  
> Date: 2026-10-09 (UTC)  
> Overview and scoring methodology: `../../model-comparison.md`  
> Cross-model signed log: `../../model-findings.md`  

## Model card

- **Name:** <Model Name>
- **Short description:** <Brief description of the model>
- **Provider / access:** <Host(s) with exact API ID>
- **Release / knowledge:** <YYYY-MM-DD release; knowledge cutoff if known>
- **IDs:** <provider>/<model-id>
- **Context window:** <total tokens>
- **Modalities:** <text/image/audio/video in; text out>
- **Pricing:** <pricing details>

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **<value>%**
- Tau3-Banking / Tau2-Bench: **<value>%**
- GDPval-AA: **<Elo>**
- Toolathon / MCP-Atlas: **<value>**

Reasoning / knowledge:

- GPQA Diamond: **<value>%**
- HLE: **<value>%**
- LCR / MLCR: **<value>%**
- CritPt: **<value>%**
- Artificial Analysis Intelligence Index: **<value>**

Coding:

- SWE-bench Verified / SWE-Pro: **<value>%**
- LiveCodeBench: **<value>%**
- SciCode: **<value>%**
- DeepSWE / Coding Index: **<value>**

Long context:

- MRCR / RULER: **<value>**

### Normalized scores (1–100)

- **Tool use: <N>/100.** <evidence + what caps it>
- **Reasoning: <N>/100.** <evidence + what caps it>
- **Context window: <N>/100.** <per tier mapping>
- **Multimodal: <N>/100.** <input/output coverage>
- **Coding: <N>/100.** <evidence + what caps it>
- **Cost efficiency: <N>/100.** <$0 = 100>
- **Overall Score: <N>/100.** <mean of five non-cost dims>

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-09
- Method: public internet research; scores normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Commission_1.0.md`, using the same headings.