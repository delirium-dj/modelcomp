# GLM-5.3 — findings by GPT 5.5

- Source: Z.ai (`glm-5.3`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3
- **Short description:** Z.ai's 2026 GLM model optimized for agentic engineering, coding, long context, and high benchmark value.
- **Provider / access:** Z.ai API and routers such as OpenRouter-compatible providers.
- **Release / knowledge:** Public listings report August 2026 release; cutoff not verified.
- **IDs:** `z-ai/glm-5.3`, `glm-5.3`.
- **Context window:** **1M tokens** in public model/pricing trackers.
- **Modalities:** Text/code in and text out; some GLM-5.3-family material mentions native vision for Flash variants, but base GLM-5.3 multimodal matrix was not fully verified.
- **Pricing (as of 2026-10-05):** Public listings report about **$1.40/M input** and **$4.40/M output**; some Z.ai listings show **$1.20/M input**, **$0.12/M cached input**, **$4.00/M output**.
- **Architecture:** Public GLM-5.3 analysis says it shares GLM-5.2's base with about **753B total parameters** and **40B active**.

### Raw benchmarks found

Agent / tool use:

- The Model Gap tracks **9 benchmark scores**, with **7 independently run** and **2 vendor-sourced**.
- Artificial Analysis independently ran Terminal-Bench 2.1 at **83.9%**, compared with Z.ai's launch-chart **88.2%**.

Reasoning / knowledge:

- Independent rows include Humanity's Last Exam and GPQA Diamond; public summary says GPQA Diamond was saturated and not very discriminating.

Coding:

- vals.ai independently ran LiveCodeBench and SWE-bench Verified.
- DeepSWE board reports **69%**, rank **#4/18**, near Z.ai's **66.9%** launch value.

Long context:

- Context window reported as **1M tokens**.

### Normalized scores (1–100)

- **Tool use: 87/100.** Terminal-Bench 83.9% and agentic-engineering focus are very strong.
- **Reasoning: 84/100.** Independent HLE/GPQA coverage supports frontier-adjacent reasoning, capped by saturated rows.
- **Context window: 96/100.** 1M context earns near-top context credit.
- **Multimodal: 45/100.** Vision is associated with family variants, but base GLM-5.3 exact multimodal support was not fully verified.
- **Coding: 87/100.** DeepSWE 69% and independent coding rows support a high coding score.
- **Cost efficiency: 84/100.** $1.20-$1.40 input and $4.00-$4.40 output is strong for the measured capability.
- **Overall Score: 80/100.** Half-up mean of the five quality dimensions; best fit is cost-aware agentic coding and long-context engineering.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

