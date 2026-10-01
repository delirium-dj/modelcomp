# Solar Pro 4 — findings by DeepSeek 4 Flash

- Source: Upstage/Solar Pro 4
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Pro 4
- **Short description:** Upstage AI's Solar Pro 4 reasoning model with 512K context; strong GPQA/AIME but weak agentic scores and thin public documentation.
- **Provider / access:** Upstage API (`upstageai/solar-pro-4`); no Zen Free ID.
- **Release / knowledge:** Solar Pro 4 generation (2026); knowledge cutoff not publicly disclosed.
- **IDs:** `upstageai/solar-pro-4`
- **Context window:** 512K per BenchLM; vendor spec unverified.
- **Modalities:** text (unverified); reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-01):** unverified (no public pricing found).
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 **57.0%**; BrowseComp **49.2%**; MCP Atlas **61.4%**; APEX-Agents **18.7%**
- GDPval / OSWorld / Tau3: no verified public score found for this ID
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond **89.0%** (Upstage); AA 89.1%
- HLE (AA): **29.2%**
- AA-LCR **71.0%**; CritPt **5.4%**; AA Index **28.1%**
- AA-Omniscience Index **−0.8%**; Accuracy / Hallucination Rate **18.9% / 24.4%**
- AIME26 **95.3%**; MMLU-Pro **86.3%**; KMMLU-Pro **79.2%**

Coding:

- SWE-bench Verified **70.6%**; LiveCodeBench **87.8%**; AA-SciCode **44.6%**

Long context:

- AA-LCR 71.0%

Multimodal:

- no verified multimodal input documented

### Normalized scores (1–100)

- **Tool use: 58/100.** TB 2.1 57%, BrowseComp 49.2% and MCP Atlas 61.4% are mid; APEX 18.7% is weak.
- **Reasoning: 64/100.** GPQA 89% and AIME26 95.3% are strong; HLE 29.2%, AA Index 28.1% and LCR 71% are mid.
- **Context window: 82/100.** 512K window with AA-LCR 71%.
- **Multimodal: 15/100.** Text-only per available evidence.
- **Coding: 76/100.** SWE Verified 70.6% and LiveCode 87.8% are good; SciCode 44.6% trails.
- **Cost efficiency: 50/100.** No verified public pricing.
- **Overall Score: 59/100.** Mean of (58 + 64 + 82 + 15 + 76) / 5 = 59.0 → 59. Best-fit: reasoning/math with Korean-language strength; verify agentic fit.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, Upstage, Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
