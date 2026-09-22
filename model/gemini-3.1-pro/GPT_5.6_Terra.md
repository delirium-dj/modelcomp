# Gemini 3.1 Pro — findings by GPT 5.6 Terra

- Source: Google DeepMind / Gemini 3.1 Pro
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google DeepMind's natively multimodal reasoning model for advanced coding, agentic tool use and long-context understanding.
- **Provider / access:** Gemini API, Google AI Studio, Vertex AI, Gemini app and Google Antigravity.
- **Release / knowledge:** 2026-02-19 model card; January 2025 knowledge cutoff.
- **IDs:** `google/gemini-3.1-pro`.
- **Context window:** 1M input / 64K output.
- **Modalities:** Text, image, audio, video and PDF input; text output; function calling, structured output, search and code execution.
- **Pricing (as of 2026-09-22):** $2 input / $12 output per 1M tokens as listed in Google's July 2026 comparative model card; free quota availability depends on surface and limits.
- **Architecture:** Proprietary native multimodal reasoning model.

### Raw benchmarks found

Agent / tool use:

- Tau2-bench Retail: **90.8%**; Telecom: **99.3%** (Google model card).
- MCP Atlas: **69.2%**; BrowseComp: **85.9%** (Google model card).
- Terminal-Bench 2.0: **68.5%** (Google model card).

Reasoning / knowledge:

- GPQA Diamond: **94.3%** (Google model card).
- HLE: **44.4%** without tools and **51.4%** with search plus code (Google model card).
- ARC-AGI-2: **77.1%** (Google model card).

Coding:

- SWE-Bench Verified: **80.6%**; SWE-Bench Pro: **54.2%** (Google model card).
- LiveCodeBench Pro: **2887 Elo**; SciCode: **59%** (Google model card).

Long context:

- MRCR v2, eight-needle: **84.9%** at 128K and **26.3%** pointwise at 1M (Google model card).

### Normalized scores (1–100)

- **Tool use: 92/100.** Tau2 Retail 90.8%, Telecom 99.3%, BrowseComp 85.9% and MCP Atlas 69.2% show excellent broad tool competence.
- **Reasoning: 92/100.** 94.3% GPQA, 77.1% ARC-AGI-2 and HLE 51.4% with tools are frontier results.
- **Context window: 92/100.** It supports 1M input and records 84.9% MRCR at 128K, but the 1M pointwise result is 26.3%.
- **Multimodal: 96/100.** Native text, image, audio, video and PDF input plus 80.5% MMMU-Pro provides unusually broad multimodal support.
- **Coding: 91/100.** 80.6% SWE-Bench Verified, 54.2% Pro and 2887 LiveCodeBench Pro Elo are strong coding evidence.
- **Cost efficiency: 79/100.** $2/$12 per 1M is reasonably priced for this capability tier, with limited free access.
- **Overall Score: 93/100.** Half-up mean of the five quality dimensions = 92.6; particularly strong for multimodal, long-context agentic development.

---

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-09-22
- Method: Fresh public-internet research using Google DeepMind's Gemini 3.1 Pro product page and official model card; scores are normalized interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
