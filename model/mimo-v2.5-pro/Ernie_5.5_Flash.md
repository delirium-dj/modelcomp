# MiMo-V2.5-Pro — findings by Ernie 5.5 Flash

- Source: Xiaomi/MiMo-V2.5-Pro (`mimo-v2.5-pro`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.5-Pro
- **Short description:** Xiaomi's stronger MiMo Pro tier (released 2026-04-22) for multimodal reasoning and coding-agent execution, at roughly $0.44/$0.87 per 1M.
- **Provider / access:** Xiaomi MiMo Open Platform (`mimo-v2.5-pro`), OpenRouter, OpenCode Go (`opencode-go/mimo-v2.5-pro`), DeepInfra, AI/ML API, Xiaomi token plans, plus ~20 routes. Open weights.
- **Release / knowledge:** 2026-04-22; knowledge cutoff 2024-12 (models.dev).
- **IDs:** `mimo-v2.5-pro`, `xiaomi/mimo-v2.5-pro`, `XiaomiMiMo/MiMo-V2.5-Pro`.
- **Context window:** 1,048,576 tokens; max output 131,072.
- **Modalities:** models.dev lists **text in / text out only** for this tier, while the vendor description says "multimodal reasoning" — treat the modality as unverified/conflicting. Reasoning and tool calls supported.
- **Pricing (as of 2026-11-11/12):** $0.435 / $0.87 per 1M input/output; cache read $0.0036 (DeepInfra $1.00/$3.00, AI/ML API $0.46/$0.92). The Xiaomi token-plan route lists a $0 allowance tier.
- **Architecture:** open-weight sparse MoE (Xiaomi MiMo).

### Raw benchmarks found

Agent / tool use:

- τ³-Bench: **72.9**; Claw-Eval: **63.8%**; Terminal-Bench 2.0: **68.4%**; Terminal-Bench 2.1 (Vals): **57.3%**
- Gert Labs composite: **62.70**; MazeBench: **0%**
- Terminal-Bench 4.x / OSWorld / MCP-Atlas: no verified public rows published

Reasoning / knowledge:

- HLE: **48%** with tools, **34%** without
- MMLU-Pro (Vals AI): **84.6%**
- GPQA Diamond / ARC-AGI / FrontierMath: no verified public rows published for this tier

Coding:

- LiveCodeBench (Vals AI): **81.4%**; SWE-bench (Vals AI): **74.0%**; SWE-bench Pro: **57.2%**
- DeepSWE / FrontierCode: no verified public rows published

Long context:

- 1M context declared; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 70/100.** τ³ 72.9 and TB2.0 68.4% are mid, Claw-Eval 63.8% decent, TB2.1 (Vals) 57.3% weak; MazeBench 0% is a floor.
- **Reasoning: 65/100.** HLE 48% with tools and MMLU-Pro 84.6% are mid for a 2026 Pro tier; no GPQA/ARC/FrontierMath row was published.
- **Context window: 100/100.** 1,048,576 tokens with 131,072 max output.
- **Multimodal: 15/100.** models.dev lists text-only for this tier, so it scores at the text-only floor — flagged: the vendor description claims multimodal reasoning and this needs verification before use.
- **Coding: 75/100.** LiveCodeBench (Vals) 81.4% and SWE-bench (Vals) 74.0% are decent for the price, SWE-bench Pro 57.2% mid.
- **Cost efficiency: 92/100.** $0.435/$0.87 per 1M with $0.0036 cache reads and a $0 allowance tier.
- **Overall Score: 65.0/100.** Best fit for cost-dominated coding-agent work at 1M context; verify the modality claim yourself — the catalog and the vendor description disagree.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12
- Method: public internet research (Xiaomi MiMo platform and model card, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [XiaomiMiMo/MiMo-V2.5-Pro — Hugging Face](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro)
  - [MiMo-V2.5-Pro benchmarks & sources — BenchLM](https://benchlm.ai/models/mimo-v2-5-pro)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `MiMo_V2.5_Pro_v2.md`, using the same headings.