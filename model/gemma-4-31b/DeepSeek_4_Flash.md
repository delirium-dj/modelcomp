# Gemma 4 31B — findings by DeepSeek 4 Flash

- Source: Google/Gemma 4 31B
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 31B
- **Short description:** Google's open-weights 31B instruction-tuned model with reasoning, tool use and coding; designed for local/edge deployment rather than frontier work.
- **Provider / access:** open weights (self-host); API hosting via OpenRouter (`google/gemma-4-31b-it`); no Zen Free ID.
- **Release / knowledge:** Gemma 4 generation (2026); knowledge cutoff not publicly disclosed.
- **IDs:** `google/gemma-4-31b-it`
- **Context window:** 256K (OpenRouter) / 128K curated — verified from OpenRouter and BenchLM.
- **Modalities:** text in/out only (curated).
- **Pricing (as of 2026-10-01):** free open weights; hosted from $0.09/$0.34 per 1M.
- **Architecture:** open-weights 31B dense.

### Raw benchmarks found

Agent / tool use:

- Browsing suite **59.9%**; Gert Labs **35.26%**
- GDPval-AA **755 Elo** (AA normalized 5.7%); AA Agentic Index **6.7%**
- Terminal-Bench / Tau3 / OSWorld / MCP Atlas: no verified public score found for this ID

Reasoning / knowledge:

- GPQA **84.3%** (AA 85.7%)
- HLE **26.5%** (19.5% w/o tools); AA-HLE **23.6%**
- AA-LCR **69.7%**; CritPt **1.4%**; AA Index **14.7%**
- AA-Omniscience Index **−47.9%**; Accuracy / Hallucination Rate **20.0% / 85.0%**
- MMLU-Pro **85.2%**; AA-IFBench **75.6%**

Coding:

- SWE-Rebench **41.6%**; React Native Evals **75.2%**
- AA-SciCode **45.5%**; AA Coding Index **43.4%**

Long context:

- AA-LCR 69.7%; no public MRCR full-window number found

Multimodal:

- BenchLM lists MMMU-Pro **76.9%** (AA 73.4%), suggesting vision capability beyond the curated text-only label

### Normalized scores (1–100)

- **Tool use: 45/100.** Browsing 59.9% is mid; GDPval 755 and AA Agentic Index 6.7% are weak.
- **Reasoning: 45/100.** GPQA 84.3% is decent but HLE 26.5%, AA Index 14.7% and an Omniscience Index of −47.9 are poor.
- **Context window: 74/100.** 256K window with AA-LCR 69.7%.
- **Multimodal: 70/100.** BenchLM shows image capability (MMMU-Pro 76.9%); text output only.
- **Coding: 62/100.** React Native Evals 75.2% is good; Coding Index 43.4% and SciCode 45.5% are modest.
- **Cost efficiency: 95/100.** Open weights self-host free; hosted very cheap.
- **Overall Score: 59/100.** Mean of (45 + 45 + 74 + 70 + 62) / 5 = 59.2 → 59. Best-fit: cheap local/edge assistant, not a frontier agent.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, Google, Artificial Analysis, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
