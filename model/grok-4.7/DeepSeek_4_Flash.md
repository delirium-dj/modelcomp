# Grok 4.7 — findings by DeepSeek 4 Flash

- Source: xAI/Grok 4.7
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7
- **Short description:** xAI's frontier reasoning model with 500K context, strong GDPval/agentic and coding scores; a step beyond Grok 4.6.
- **Provider / access:** xAI API / OpenRouter (`x-ai/grok-4.7`); OpenCode Zen (`opencode/grok-4.7`); no Free ID.
- **Release / knowledge:** Grok 4.7 generation (2026); knowledge cutoff not publicly disclosed.
- **IDs:** `x-ai/grok-4.7`
- **Context window:** 500,000 tokens — verified from OpenRouter and BenchLM.
- **Modalities:** text/image/file in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** $2.00 in / $6.00 out per 1M (OpenRouter).
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **38.0%** (AA 25.8%); Vals Terminal-Bench 2.1 **73.4%**
- GDPval-AA: **1695 Elo** (xAI); AA normalized **59.8%**
- AA AutomationBench **65.6%**; AA Briefcase **1657**; AA ITBench **42.1%**
- CWE-bench v1 **68.0%**; EEBench **64.0%**
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- HLE (AA): **43.1%**
- AA-LCR **76.7%**; CritPt **17.7%**; MLCR-AA **15.0%**; AA Index **46.5%**
- AA-Omniscience Accuracy / Hallucination Rate: **47.4% / 29.3%** (good non-hallucination)

Coding:

- DeepSWE: **71.0%**; AA-SciCode **57.4%**
- CursorBench 4.0 **46.3%**; FrontierSWE v2 **29.5%**; EEBench **64.0%**
- SWE-bench: no verified public score found for this ID

Long context:

- AA-LCR 76.7%; no public MRCR full-window number found

Multimodal:

- Design Arena Website **1222 Elo**

### Normalized scores (1–100)

- **Tool use: 88/100.** GDPval 1695, AA AutomationBench 65.6% and AA Briefcase 1657 are strong; TB 4.0 38% and ITBench 42.1% cap it.
- **Reasoning: 80/100.** AA Index 46.5% and a 29.3% hallucination rate are good; HLE 43.1% and CritPt 17.7% are mid-high.
- **Context window: 85/100.** 500K window with AA-LCR 76.7%.
- **Multimodal: 80/100.** Text + image/file in; text-only output.
- **Coding: 84/100.** DeepSWE 71% and SciCode 57.4% are solid; CursorBench 4.0 46.3% and FrontierSWE 29.5% trail.
- **Cost efficiency: 78/100.** $2/$6 per 1M is good value.
- **Overall Score: 83/100.** Mean of (88 + 80 + 85 + 80 + 84) / 5 = 83.4 → 83. Best-fit: GDPval-style real-world knowledge work and coding.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, xAI, Artificial Analysis, OpenRouter, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
