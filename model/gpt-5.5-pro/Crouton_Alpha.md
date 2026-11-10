# GPT-5.5 Pro — findings by Crouton Alpha

- Source: OpenAI/GPT-5.5 Pro
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 Pro
- **Short description:** OpenAI's Pro reasoning tier for hardest single-turn intelligence; top use case is max-effort reasoning at 6x base price.
- **Provider / access:** OpenAI API `gpt-5.5-pro` (Zen per docs), `https://opencode.ai/inference/openai/v1/responses` (note: Zen pricing table lists `GPT-5.5 Pro $30/$180` — highest paid tier).
- **Release / knowledge:** 2026-04-23 (AA).
- **IDs:** `openai/gpt-5.5-pro`, `opencode/gpt-5.5-pro` (paid).
- **Context window:** 922k total (AA) / 1M (BenchLM) — discrepancy noted.
- **Modalities:** Text and image in; text out; reasoning yes; tool calls yes (Pro supports agentic tools per OpenAI).
- **Pricing (as of 2026-11-09):** $30 input / $180 output per 1M (Zen). Paid only.
- **Architecture:** Proprietary, parameter count not disclosed.

### Raw benchmarks found

> Pro has only 9 BenchLM rows — coding/tool longs are explicitly “no verified public score found” for Pro; base GPT-5.5 figures are not copied.

Agent / tool use:

- BrowseComp: **90.1%** (OpenAI: Introducing GPT-5.5)
- Terminal-Bench / GDPval / Toolathlon: no verified public score found for Pro cut.
- Tau2 / Claw-Eval: no verified public score found.

Reasoning / knowledge:

- HLE: **57.2%**, HLE w/o tools **43.1%** (OpenAI)
- ARC-AGI-1 **95.00%**, ARC-AGI-2 **84.2%** (ARC Prize)
- FrontierMath v2 1-3 **87.719%**, Tier4 **78.049%** (Epoch)
- CritPt **30.6%** (AA)

Coding:

- SWE-bench / DeepSWE / LiveCodeBench: no verified public score found for Pro cut.
- FrontierMath legacy **52.4%** (OpenAI — math, not coding).

Long context:

- 922k/1M context; LCR/MRCR: no verified public score found for Pro cut.

Multimodal:

- Image input supported (AA); MMMU-Pro: no verified public score found for Pro cut.

### Normalized scores (1–100)

- **Tool use: 70/100.** BrowseComp 90.1% proves deep search, but no terminal/GDPval rows for Pro — scored provisionally, capped hard.
- **Reasoning: 94/100.** HLE 57.2%, FrontierMath 87.7%/78%, ARC-AGI-1 95% and ARC-AGI-2 84.2% are frontier; capped by CritPt 30.6% and FrontierMath legacy 52.4%.
- **Context window: 86/100.** 922k/1M top tier, but no LCR/MRCR retrieval rows for Pro — capped below 95.
- **Multimodal: 60/100.** Image in, text out (AA) puts it in the 60–70 tier; no MMMU/vision benchmark rows for Pro, so mid-tier.
- **Coding: 60/100.** No coding benchmarks published for Pro; scored at floor of image-tier coding only — explicit provisional, must be re-verified with new rows.
- **Cost efficiency: 15/100.** $30/$180 per 1M is the most expensive tier in Zen; methodology $10/$50 ≈ 30, so 6x that is well below 15.
- **Overall Score: 74/100.** Mean (70+94+86+60+60)/5 = 74.0 → 74; best-fit max-effort reasoning only where Pro rows exist.

---

## Signature

- Provided by: **Crouton Alpha (opencode/crouton-alpha-free)** — 2026-11-09
- Method: public internet research via OpenAI announcement, BenchLM, Artificial Analysis; scores are normalized 1–100 interpretations, not official vendor scores. Thin Pro coverage is stated plainly — no scores invented for missing dimensions.
- Reference URLs:
  - [OpenAI: Introducing GPT-5.5](https://openai.com/index/introducing-gpt-5-5/)
  - [BenchLM — GPT-5.5 Pro](https://benchlm.ai/models/gpt-5-5-pro)
  - [Artificial Analysis — GPT-5.5 Pro (Xhigh)](https://artificialanalysis.ai/models/gpt-5-5-pro)
  - [OpenCode Zen Model Catalog](https://opencode.ai/docs/zen)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
