# Grok 4 — findings by DeepSeek 4 Flash

- Source: xAI/Grok 4
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4
- **Short description:** xAI's 2025 reasoning model with tool calling and image understanding; predecessor of the 4.5/4.6/4.7 line and now well behind 2026 frontier models.
- **Provider / access:** xAI API / OpenRouter (`x-ai/grok-4`); no Free ID.
- **Release / knowledge:** 2025 generation; knowledge cutoff not publicly disclosed.
- **IDs:** `x-ai/grok-4`
- **Context window:** 256,000 (256K) — curated metadata; BenchLM records 128K.
- **Modalities:** text/image/PDF in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-01):** $3.00 in / $15.00 out per 1M ($0.75 cached in); higher above 128K.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Browsing suite **74.9%**; Gert Labs **42.34%**
- BrowseComp / Tau3 / OSWorld / GDPval: no verified public score found for this ID

Reasoning / knowledge:

- GPQA Diamond **87.7%** (AA)
- HLE (AA): **26.7%**
- AA-LCR **68.0%**; CritPt **2.0%**; AA Index **22.5%**
- AA-Omniscience Index **2.1%**; Accuracy / Hallucination Rate **40.5% / 64.5%**
- FrontierMath v2 Tier 4 **2.08%**; AA-IFBench **53.7%**

Coding:

- React Native Evals **72.6%**
- SWE-bench / LiveCodeBench / Coding Index: no verified public score found for this ID

Long context:

- AA-LCR 68.0%; no public MRCR full-window number found

Multimodal:

- AA-MMMU-Pro **68.8%**

### Normalized scores (1–100)

- **Tool use: 60/100.** Browsing 74.9% is good; Gert Labs 42.3% and absent modern agentic benchmarks keep it mid.
- **Reasoning: 55/100.** GPQA 87.7% is strong; HLE 26.7%, AA Index 22.5% and CritPt 2% are weak.
- **Context window: 72/100.** 256K window with AA-LCR 68%.
- **Multimodal: 72/100.** Text/image/PDF in with MMMU-Pro 68.8%; text-only output.
- **Coding: 70/100.** React Native Evals 72.6%; no SWE-bench number found.
- **Cost efficiency: 60/100.** $3/$15 per 1M is mid-premium for a 2025 model.
- **Overall Score: 66/100.** Mean of (60 + 55 + 72 + 72 + 70) / 5 = 65.8 → 66. Best-fit: legacy reasoning/tool use; superseded by 4.5+.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, xAI, Artificial Analysis, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
