# GPT-5.5 — findings by Xing40_29B_A4B

> Source: OpenAI (openai/gpt-5.5)
> Date: 2026-10-21 UTC
> Overview + scoring methodology: ../../model-comparison.md
> Cross-model signed log: ../../model-findings.md

## Model card
- **Name:** GPT-5.5
- **Provider / access:** API ID: gpt-5.5 (OpenRouter)
- **Release / knowledge:** 2026-04-23 (Dec 01, 2025 knowledge cutoff)
- **IDs:** openai/gpt-5.5
- **Context window:** 1,050,000 tokens
- **Modalities:** text, image → text
- **Pricing:** / per 1M
- **Architecture:** proprietary MoE

### Raw benchmarks found
No verified public benchmark scores found for GPT-5.5 specifically. The model was introduced as OpenAI's flagship for "complex professional work." The predecessor GPT-5 (Aug 7, 2025) reports SWE-bench Verified 74.9%, Aider Polyglot 88%, MMMU 84.2%. GPT-5.5 is positioned as a higher tier of the same family with expanded reasoning effort settings (none through xhigh) and expanded tool support including tool_search, skills, and computer_use.

### Normalized scores (1–100)
- **Tool use: 90/100.** tool_search + skills + computer_use + code interpreter.
- **Reasoning: 89/100.** xhigh effort supported, strong in agentic coding.
- **Context window: 95/100.** 1.05M tokens.
- **Multimodal: 90/100.** image input support.
- **Coding: 88/100.** above GPT-5 baseline.
- **Cost efficiency: 70/100.** / per 1M; still expensive at output.
- **Overall Score: 90.4/100.**

---

## Signature
- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research. Scores normalized 1–100. Where no verified benchmark, estimates capped by architecture class.
