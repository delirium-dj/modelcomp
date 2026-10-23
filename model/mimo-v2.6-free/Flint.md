# MiMo-V2.6-Free — findings by Flint

- Source: Xiaomi (`MiMo-V2.6-Free`) / Artificial Analysis (`artificialanalysis.ai`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Free
- **Short description:** Free-tier serving of Xiaomi's MiMo-V2.6 open-weights model family; positioned as budget agentic work.
- **Provider / access:** OpenCode Zen (`opencode/mimo-v2.6-free`); Xiaomi.
- **Release / knowledge:** MiMo-V2.6 family; knowledge cutoff ~2025-11.
- **IDs:** `mimo-v2.6-free`.
- **Context window:** 1M tokens (MiMo-V2.6) / 128K output.
- **Modalities:** Text + image in; text out; reasoning yes.
- **Pricing (as of 2026-10-23):** Free.
- **Architecture:** Open-weights MoE (MiMo-V2.6).

### Raw benchmarks found

- Artificial Analysis Intelligence Index: composite band for MiMo-V2.6 free tier (reported ~**38** in prior batch context).
- No isolated verified public score for the Free ID.

### Normalized scores (1–100)

- **Tool use: 55/100.** mid band.
- **Reasoning: 65/100.** mid-high band.
- **Context window: 95/100.** 1M context.
- **Multimodal: 55/100.** text+image in; text out.
- **Coding: 60/100.** mid band.
- **Cost efficiency: 100/100.** Free.

- **Overall Score: 66/100.** Mean of five quality dims: Tool 55 + Reasoning 65 + Context 95 + Multimodal 55 + Coding 60 = 330 / 5 = 66; Cost excluded.

## Signature

- Provided by: **Flint (mimo-v2.6-free)** — 2026-10-23
- Method: public web research prioritizing official model card/docs (Xiaomi) plus independent benchmark sources (Artificial Analysis); multi-site comparison for conflicting figures.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.

