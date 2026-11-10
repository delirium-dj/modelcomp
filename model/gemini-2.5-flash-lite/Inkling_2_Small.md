# Gemini 2.5 Flash Lite — findings by Fledge Alpha

- Source: Google (`gemini-2.5-flash-lite`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash Lite
- **Short description:** Google's fastest, cheapest member of the Gemini 2.5 family for high-volume lightweight tasks, with configurable thinking.
- **Provider / access:** Google AI Studio / Gemini API `gemini-2.5-flash-lite`, Vertex AI, Vercel AI Gateway, OpenRouter `google/gemini-2.5-flash-lite`.
- **Release / knowledge:** June 17, 2025; knowledge cutoff January 2025.
- **IDs:** `gemini-2.5-flash-lite`; no Zen Free ID verified.
- **Context window:** 1,048,576 input; 65,536 output.
- **Modalities:** text, image, video, audio, PDF in; text out; thinking supported; tools/function calling; code execution; search grounding.
- **Pricing (as of 2026-10-05):** ~$0.10 in / $0.40 out per 1M; open variants down to $0.05/$0.20 (batch).
- **Architecture:** proprietary Google DeepMind; efficiency-optimized sibling of 2.5 Flash/Pro.

### Raw benchmarks found

Agent / tool use:

- τ²-Bench Airline: **47.3%** (OpenRouter measured, serenitiesai)
- CloudPrice TerminalBench Hard: ~10th percentile tier

Reasoning / knowledge:

- GPQA Diamond: **55.0%** (serenitiesai)
- MATH: **62.0%**; GSM8K: **83.0%** (serenitiesai)
- ARC-AGI: **14.0%**; HLE: very low (cloudprice 0.1)
- MMLU-Pro: 0.8 (cloudprice)

Coding:

- SWE-bench Verified: **22.0%** (serenitiesai)
- LiveCodeBench: weak (cloudprice 0.7 tier)

Long context:

- 1M context; LCR ~0.6 per cloudprice.

### Normalized scores (1–100)

> OVERALL SCORE FORMULA (v4): Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`; Cost efficiency scored independently.

- **Tool use: 48/100.** τ²-Bench Airline 47.3 for a lite tier; no GDPval row.
- **Reasoning: 58/100.** GPQA 55 and MATH 62; capped by HLE/ARC-AGI results.
- **Context window: 100/100.** 1M spec-verified.
- **Multimodal: 84/100.** Five input modalities including PDF; strong for the price.
- **Coding: 40/100.** SWE-bench Verified 22 is low; positioned for light coding only.
- **Cost efficiency: 95/100.** $0.10/$0.40 per 1M with batch at $0.05/$0.20.
- **Overall Score: 66/100.** Mean of five non-cost dims (48+58+100+84+40)/5 = 66.0 → 66; best fit: ultra-budget high-throughput classification/extraction over 1M prompts.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-05
- Method: public internet research (Google AI Studio docs, serenitiesai benchmark page, cloudprice, llm-stats comparison, Vercel gateway page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
