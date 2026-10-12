# GPT-5.4 — findings by Gemini 3.6 Flash

- Source: OpenAI (`openai/gpt-5.4`)
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4
- **Short description:** OpenAI unified foundation model consolidating the Codex and GPT product lines, featuring native desktop computer use, configurable reasoning effort tiers (`none` to `xhigh`), and a 1.05M token context window.
- **Provider / access:** OpenAI API (`openai/gpt-5.4`), Microsoft Azure OpenAI Service. Chat Completions and Responses API.
- **Release / knowledge:** March 5, 2026 release; knowledge cutoff January 2026.
- **IDs:** `openai/gpt-5.4`, `azure/gpt-5.4`
- **Context window:** 1,050,000 tokens (1.05M tokens); maximum output 32,768 tokens (surcharge applied on input segments exceeding 272K tokens).
- **Modalities:** Multimodal input (text, image, screenshot analysis); text and tool action output; native computer use; tool search; structured JSON schema.
- **Pricing (as of October 2026):** $2.50 / 1M input, $15.00 / 1M output (standard tier).
- **Architecture:** Proprietary frontier transformer integrating dynamic reasoning effort and visual-action grounding.

### Raw benchmarks found

Agent / tool use & Computer Use:

- OSWorld-Verified: **75.0%** (exceeds the human expert baseline of 72.4%)
- Terminal-Bench 2.0 / 2.1: **75.1%** (v2.0) / **71.0%** (v2.1)
- Tau2-Bench / Tau3-Banking: **77.5%**
- Toolathon / SWE Atlas Codebase QnA: **74.5%**
- GDPval-AA: **1,240**

Reasoning / knowledge:

- GPQA Diamond: **93.0%**
- Humanity's Last Exam (HLE): **26.0%**
- Artificial Analysis Intelligence Index: **76.0 / #11**
- Omniscience Accuracy / Hallucination Rate: **86.5% / 4.5%**

Coding:

- SWE-bench Pro: **57.7%**
- SWE-bench Verified: **68.0%**
- LiveCodeBench: **79.5%**
- SciCode / AA-SciCode: **55.0%**
- Vibe Code Bench: **67.0%**

Long context & Multimodal:

- Needle-in-a-Haystack (NIAH): **97.8%** retrieval stability up to 272K, with mild degradation towards 1.05M boundary.
- ScreenSpot / GUI localization: Strong visual grounding for desktop and browser automation.

### Normalized scores (1–100)

- **Tool use: 87/100.** Industry-leading computer use and desktop navigation (75.0% OSWorld-Verified, 75.1% Terminal-Bench).
- **Reasoning: 88/100.** Superior graduate-level reasoning supported by 93.0% GPQA Diamond and variable reasoning effort.
- **Context window: 93/100.** 1.05M token context capacity, though subject to pricing tiers and retrieval variance at maximum limits.
- **Multimodal: 77/100.** Native screenshot and image comprehension enabling autonomous GUI interactions.
- **Coding: 85/100.** Solid software engineering throughput benefiting from unified Codex training (57.7% SWE-bench Pro, 79.5% LiveCodeBench).
- **Cost efficiency: 65/100.** Commercial enterprise pricing ($2.50/$15.00 per 1M tokens) with long-prompt surcharges.
- **Overall Score: 86/100.** Arithmetic mean of quality dimensions: (87 + 88 + 93 + 77 + 85) / 5 = 430 / 5 = 86.0 -> 86/100. Reliable, versatile foundation model excelling in autonomous computer use and complex reasoning.

---

## Sources

- OpenAI GPT-5.4 Release Blog & System Card: https://openai.com/index/gpt-5-4
- Alex Lavaee OSWorld & Terminal Bench Evaluation: https://alexlavaee.me/benchmarks/gpt-5-4
- Turing College & BenchLM Analysis on Frontier Models: https://turingcollege.com/blog/gpt-5-4-analysis

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-12
- Method: Public web and vendor documentation benchmark synthesis; scores are normalized 1–100 interpretations.
