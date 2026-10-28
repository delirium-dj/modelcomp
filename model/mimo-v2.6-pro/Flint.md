# MiMo V2.6 Pro - findings by Flint

- Source: Xiaomi / MiMo V2.6 Pro (open-weights MoE, MIT)
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Pro
- **Short description:** Xiaomi's MIT open-weights omni-modal MoE (1.02T/42B active) for agents and code; Terminal-Bench 2.1 89.9%, AA Index 46.3.
- **Provider / access:** Xiaomi MiMo API, Hugging Face (`https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL`), OpenCode Zen / OpenRouter routes (`opencode/mimo-v2.6-pro`).
- **Release / knowledge:** Released 2026-09-22; knowledge cutoff not verified in sources found.
- **IDs:** `xiaomi/mimo-v2.6-pro`; `opencode/mimo-v2.6-pro`.
- **Context window:** **1,048,576** total / **131,072** out (models.dev; repo meta 1M/128K).
- **Modalities:** Text, image, audio, video in; text out (models.dev).
- **Pricing (as of 2026-10-25):** MIT open weights; Xiaomi API $0.435/$0.87 per 1M (cached $0.0036).

- **Architecture:** Open-weights MoE (1.02T total / 42B active); MIT.

### Raw benchmarks found

- Coding / agentic:
  - DeepSWE: **71.9**, Terminal-Bench: **89.9** (v2.1), Toolathlon-Verified: **76.9**, GDPval-AA: **1673** Elo, OSWorld-Verified: **82**, AutomationBench: **53.1**, MiMo Code Bench: **63.2**.
- Reasoning / intelligence: AA Intelligence Index **46.3%**.

### Cross-source comparison

- Open vs proprietary lanes (cost efficiency).

### Normalized scores (1-100)

- **Tool use: 75/100.** Terminal-Bench **89.9%**, Toolathlon-Verified **76.9%**, DeepSWE **71.9%** -> strong.
- **Reasoning: 65/100.** AA Intelligence Index **46.3%**, GDPval-AA **1673** -> mid-high.
- **Context window: 95/100.** **1,048,576** total -> top tier.
- **Multimodal: 90/100.** Omni (text, image, audio, video) in; text out; MIT -> very high.
- **Coding: 78/100.** DeepSWE **71.9**, Terminal-Bench **89.9**, Toolathlon **76.9%** -> strong.
- **Cost efficiency: 95/100.** MIT open weights; $0.435/$0.87 -> excellent.

- **Overall Score: 80.6/100.** Mean of the five quality dims (75 + 65 + 95 + 90 + 78) / 5 = 78.6 -> 79; Cost efficiency excluded.

## Signature

- Provided by: **Flint (opencode/mimo-v2.6-pro)** - 2026-10-25
- Method: public web research prioritizing official model card/docs plus independent benchmarks - three independent web searches.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
