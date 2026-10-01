# Grok 4.3 — findings by DeepSeek 4 Flash

- Source: xAI/Grok 4.3
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.3
- **Short description:** xAI's Grok 4.3 reasoning model with a 1M window and very cheap pricing; strong browsing but mid reasoning/agentic scores for a 2026 model.
- **Provider / access:** xAI API / OpenRouter (`x-ai/grok-4.3`); OpenCode Zen (`opencode/grok-4.3`); no Free ID.
- **Release / knowledge:** Grok 4.3 generation; knowledge cutoff not publicly disclosed.
- **IDs:** `x-ai/grok-4.3`
- **Context window:** 1,000,000 tokens (1M) — verified from OpenRouter and BenchLM.
- **Modalities:** text in/out (curated); image input on OpenRouter; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-01):** $1.25 in / $2.50 out per 1M.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Browsing suite **97.7%** (BenchLM)
- GDPval-AA **1018 Elo** (AA normalized 29.2%); AA Agentic Index **17.2%**
- APEX-Agents-AA **17.0%**; Gert Labs **43.86%**; ResearchClawBench **12.4%**; Vals Terminal-Bench 2.1 **41.9%**
- Claw-Eval / Tau3 / OSWorld: no verified public score found for this ID

Reasoning / knowledge:

- GPQA Diamond **90.1%** (xAI); AA 90.1%; Vals 91.4%
- HLE **35%** (AA 37.2%)
- AA-LCR **64.3%**; CritPt **8.0%**; AA Index **37.6%**
- AA-Omniscience Accuracy / Hallucination Rate: **34.6% / 25.0%** (good non-hallucination)
- MMLU-Pro (Vals) **85.8%**; IFBench **81.3%**

Coding:

- LiveCodeBench (Vals) **84.5%**; SWE-bench (Vals) **71.4%**
- AA-SciCode **48.3%**; SciCode **47.3%**; AA Coding Index **42.3%**

Long context:

- AA-LCR 64.3%; no public MRCR full-window number found

Multimodal:

- MMMU-Pro **78.1%** (AA 78.1%); Design Arena **1204 Elo**

### Normalized scores (1–100)

- **Tool use: 65/100.** Browsing 97.7% is excellent, but AA Agentic Index 17.2%, APEX 17% and Tau3/Vals TB ~42% show weak general agency.
- **Reasoning: 70/100.** GPQA 90.1% is strong; HLE 35–37%, AA Index 37.6% and LCR 64.3% are mid.
- **Context window: 88/100.** 1M window but AA-LCR only 64.3%.
- **Multimodal: 76/100.** Text/image in with MMMU-Pro 78.1%; text-only output.
- **Coding: 68/100.** LiveCode 84.5% is good; SWE (Vals) 71.4% and Coding Index 42.3% trail.
- **Cost efficiency: 90/100.** $1.25/$2.50 per 1M is excellent value, especially cheap output.
- **Overall Score: 73/100.** Mean of (65 + 70 + 88 + 76 + 68) / 5 = 73.4 → 73. Best-fit: cheap high-volume browsing/search tasks.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, xAI, Artificial Analysis, OpenRouter, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
