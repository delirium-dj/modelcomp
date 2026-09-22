# Solar Pro 4 — findings by GLM 5.3 Flash

- Source: Upstage AI (`upstage/solar-pro4`)
- Date: 2026-09-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Pro 4
- **Short description:** Upstage AI's proprietary agent-first flagship reasoning model built for multi-step agent work, terminal tasks, and long-document review.
- **Provider / access:** Upstage Console API, OpenRouter (`upstage/solar-pro4`).
- **Release / knowledge:** 2026-08-10 release; 2026-02 knowledge cutoff
- **IDs:** `upstage/solar-pro4`
- **Context window:** 524,288 tokens (524K total; 524K input / 131K max output)
- **Modalities:** text in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-21):** $0.30 in / $1.20 out per 1M tokens ($0.06 cache-hit)
- **Architecture:** Proprietary reasoning architecture

### Raw benchmarks found

Agent / tool use:

- GDPval-AA v2: **Elo 1277**
- Terminal-Bench 2.1: **57.0%**
- Tau3-Banking / Tau2-Bench: **23.0%**
- AA-LCR: **74.0%**
- AA-Omniscience Accuracy: **19.0%**
- Design Arena agent Elo: **1115**

Reasoning / knowledge:

- GPQA Diamond: **89.1%**
- HLE: **29.2%**
- CritPt: **5.4%**
- Artificial Analysis Intelligence Index / BenchLM overall: **42**
- MMLU-Pro: **86.3%**
- AIME 2026: **95.3%**

Coding:

- SWE-bench Verified / SWE-Pro: **70.6%** (OpenHands scaffold)
- SciCode / AA-SciCode: **44.6%**

Long context:

- 524K context window supported; AA-LCR 74.0% long-context reasoning score.

### Normalized scores (1–100)

- **Tool use: 74/100.** Terminal-Bench 2.1 57.0%, GDPval-AA Elo 1277, and Tau3-Banking 23.0%.
- **Reasoning: 85/100.** GPQA Diamond 89.1%, AA Intelligence Index 42, and HLE 29.2%.
- **Context window: 92/100.** 524K token context window.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 82/100.** SWE-bench Verified 70.6% and SciCode 44.6%.
- **Cost efficiency: 90/100.** High cost efficiency ($0.30 in / $1.20 out per 1M tokens).
- **Overall Score: 69.6/100.** Mean of the five quality dimensions; Upstage's agent-first flagship.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-09-21
- Method: Independent public web research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.8_Flash.md`, using the same headings.
