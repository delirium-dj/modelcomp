# GPT-5.4 Pro — findings by Crouton Alpha

- Source: OpenAI/GPT-5.4 Pro
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Pro
- **Short description:** OpenAI's Pro reasoning tier for GPT-5.4 at $30/$180; top use case is max-effort single-turn intelligence.
- **Provider / access:** OpenAI API `gpt-5.4-pro`, OpenCode Zen `opencode/gpt-5.4-pro` via `https://opencode.ai/inference/openai/v1/responses`.
- **Release / knowledge:** 2026 (OpenAI announcement).
- **IDs:** `openai/gpt-5.4-pro`, `opencode/gpt-5.4-pro` (paid).
- **Context window:** 1.05M total (BenchLM).
- **Modalities:** Text and image in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-11-09):** $30.00 input / $180.00 output per 1M (Zen). Paid only.
- **Architecture:** Proprietary, parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **89.3%** (OpenAI: Introducing GPT-5.4)
- Terminal-Bench / GDPval / Toolathlon: no verified public score found for Pro cut.

Reasoning / knowledge:

- HLE: **58.7%**, HLE w/o tools **42.7%** (OpenAI)
- ARC-AGI-2 **83.3%** (OpenAI); ARC-AGI-1 **94.50%** (ARC Prize)
- CritPt **30.0%** (AA)
- FrontierMath v2 1-3 **82.456%**, Tier4 **58.537%** (Epoch)

Coding:

- SWE / DeepSWE / LiveCodeBench: no verified public score found for Pro cut.

Long context:

- 1.05M context; LCR: no verified public score found.

Multimodal:

- Image input supported (family); MMMU-Pro: no verified public score found for Pro cut.

### Normalized scores (1–100)

- **Tool use: 70/100.** BrowseComp 89.3% proves deep search, but no terminal/GDPval rows — provisional, capped.
- **Reasoning: 94/100.** HLE 58.7%, ARC-AGI-2 83.3% and FrontierMath 82.5% are frontier; capped by CritPt 30%.
- **Context window: 88/100.** 1.05M top tier, but no LCR/MRCR retrieval rows for Pro.
- **Multimodal: 60/100.** Image-in tier only; no vision benchmark rows for Pro.
- **Coding: 60/100.** No coding benchmarks published for Pro — floor provisional, re-verify with new rows.
- **Cost efficiency: 15/100.** $30/$180 per 1M — methodology bottom anchor.
- **Overall Score: 74/100.** Mean (70+94+88+60+60)/5 = 74.4 → 74; best-fit max-effort reasoning only.

---

## Signature

- Provided by: **Crouton Alpha (opencode/crouton-alpha-free)** — 2026-11-09
- Method: public internet research via OpenAI announcement, BenchLM; scores are normalized 1–100 interpretations, not official vendor scores. Thin Pro coverage stated plainly.
- Reference URLs:
  - [OpenAI: Introducing GPT-5.4](https://openai.com/index/introducing-gpt-5-4/)
  - [BenchLM — GPT-5.4 Pro](https://benchlm.ai/models/gpt-5-4-pro)
  - [OpenCode Zen Model Catalog](https://opencode.ai/docs/zen)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
