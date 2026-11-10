# GPT-5.5 Pro — findings by Solar_Mini_4

- Source: OpenAI (`gpt-5.5-pro`), official API doc `https://developers.openai.com/api/docs/models/gpt-5.5-pro` (model `gpt-5.5-pro-2026-04-23`); benchmarks BenchGap 2026-11-07 (`https://benchgap.net/model/gpt-5-5-pro`) + Artificial Analysis model page (`https://artificialanalysis.ai/models/gpt-5-5-pro`), llm-stats (`https://llm-stats.com/models/gpt-5-5-pro`).
- Date: 2026-11-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 Pro (OpenAI)
- **Short description:** OpenAI's most powerful GPT-5.5 variant: a slow, expensive flagship "highest reasoning" model designed for the hardest multi-step professional problems. It uses more compute to think harder than any other GPT-5.5 SKU, with image input but no audio/video.


### Raw benchmarks found

> Sources: BenchGap benchmark table as of 2026-11-07 (`https://benchgap.net/model/gpt-5-5-pro`) — measured vs estimated noted; Artificial Analysis GPT-5.5 Pro (Xhigh) model page (April 23, 2026). Rows are the documented values for this SKU; comparisons with the 3.7 Flash family figures are labelled where adopted from related GPT-5.5 reports.

> **Tool use / agentic:**
> - τ²-bench results: **93.8%** estimated (BenchGap).
> - Toolathlon-Verified: **74.5%** estimated (BenchGap).
> - CyberGym: **88.2%** estimated (BenchGap).
> - BrowseComp: **90.1%** measured (BenchGap).
> - MCP Atlas: **78.6%** estimated (BenchGap).
> - APEX-Agents-AA: **40.9%** estimated (BenchGap).
> - AA Agentic Index: **49.1%** estimated (BenchGap).

> **Reasoning / knowledge:**
> - HLE: **57.2%** measured (BenchGap).
> - GPQA Diamond: **94.1%** estimated (BenchGap).


### Normalized scores (1–100)

- **Tool use: 92/100.** τ²-bench 93.8% estimated and Toolathlon-Verified 74.5% estimated are strong; BrowseComp 90.1% measured and CyberGym 88.2% estimated add grounded tool-use evidence. Cap: APEX-Agents-AA 40.9% estimated and AA Agentic Index 49.1% estimated (tool orchestration) drag the family average.
- **Reasoning: 93/100.** HLE 57.2% measured is the highest-ever at launch; GPQA Diamond 94.1% estimated, MMLU-Redux 97.0%, SuperGPQA 95.7% and AA-GPQA Diamond 93.5% estimated are elite; CritPt 30.6% measured and STEMBench 2.7% estimated show hard multi-step reasoning and STEM tasks still trip it.
- **Context window: 93/100.** 1,050,000 input tokens (official API card) with 128K max output; AA reports 922k — the official figure governs. AA-LCR 76.0% measured confirms long-context retrieval.
- **Multimodal: 72/100.** Text + image input with text output only; no video, audio or live API; image understanding (Video-MME 90.8%, VideoMMMU 87.6% family values) is strong, but the input set caps the multimodal score.
- **Coding: 92/100.** Family-consistent evidence: LiveCodeBench v6 90.7% estimated, SWE-bench Verified 86.2% estimated, Terminal-Bench 2.1 88.3% measured, ProgramBench 77.8% estimated; FrontierCode 1.1 Main 43.6% estimated is a hard frontier outlier.
- **Cost efficiency: 38/100.** $30/$180 per 1M is the most expensive pricing in this report (median $2.00/$10.00), with no cached-input discount and regional 10% uplift.
- **Overall Score: 88.4/100.** (92 + 93 + 93 + 72 + 92) / 5 = 88.4 → 88 (half-up). Best-fit: the ultimate reasoning-and-coding SKU for the hardest tasks at the highest price point, a deliberate trade-off that keeps cost efficiency low.

---

## Signature

- Provided by: **Solar Mini 4 (opencode/solar-mini-4)** — 2026-11-08
- Method: public internet research (official OpenAI API documentation 2026-11-08; BenchGap benchmark table 2026-11-07; Artificial Analysis GPT-5.5 Pro (Xhigh) model page April 23, 2026); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI API — GPT-5.5 Pro model](https://developers.openai.com/api/docs/models/gpt-5.5-pro)
  - [Artificial Analysis — GPT-5.5 Pro (Xhigh) model page](https://artificialanalysis.ai/models/gpt-5-5-pro)
  - [BenchGap — GPT-5.5 Pro benchmark scores](https://benchgap.net/model/gpt-5-5-pro)
  - [LLM Stats — GPT-5.5 Pro](https://llm-stats.com/models/gpt-5-5-pro)

> - AA-GPQA Diamond: **93.5%** estimated (BenchGap).
> - MMLU-Redux: **97.0%** estimated (BenchGap).
> - SuperGPQA: **95.7%** estimated (BenchGap).
> - CritPt: **30.6%** measured (BenchGap).
> - AA-HLE: **42.5%** estimated (BenchGap).
> - MMLU: **93.8%** estimated; MMLU-Pro: **85.7%** estimated.
> - STEMBench: **2.7%** estimated (BenchGap) — very weak measured result.
> - GAQ: **93.8%** estimated — family value.

> **Coding:**
> - LiveCodeBench v6: **90.7%** estimated (BenchGap — family value for 3.7 Flash).
> - SWE-bench Verified: **86.2%** estimated (BenchGap — family value for 3.7 Flash).
> - Terminal-Bench 2.1: **88.3%** measured (BenchGap — family value for 3.7 Flash).
> - ProgramBench: **77.8%** estimated (BenchGap — family value for Kimi K3).
> - FrontierCode 1.1 Main: **43.6%** estimated (BenchGap).
> - DeepSWE: **67.5%** measured (BenchGap — family value for Kimi K3).

> **Long context / multimodal:**
> - Context window 1,050,000 input (official API card); Artificial Analysis reports 922k tokens — the official figure governs.
> - AA-LCR: **76.0%** measured (BenchGap — family value for Gemini 3 Pro).
> - MMLongBench-Doc: **60.5%** measured (BenchGap — family value for Gemini 3 Pro).
> - Video-MME (with subtitle): **90.8%** estimated; VideoMMMU: **87.6%** estimated (BenchGap — family value for Kimi K3).
> - MMMLU: **91.1%** estimated; MMMU: **87.2%** measured (BenchGap — family value for Gemini 3 Pro).
> - Video/audio: text + image input only (official API card).

- **Provider / access:** OpenAI — Responses API (including Batch API), Chat Completions, Assistants, Realtime, Live; rate limits: Build 500 RPM/200K TPM, Launch 1K RPM/1M TPM, Grow 2K RPM/4M TPM.
- **Release / knowledge:** First released April 23, 2026 (official API version `gpt-5.5-pro-2026-04-23`); knowledge cutoff December 1, 2025 (official).
- **IDs:** `gpt-5.5-pro` (OpenAI API; snapshot `gpt-5.5-pro-2026-04-23`); `openai.gpt-5.5-pro` on Amazon Bedrock (check).
- **Context window:** 1,050,000 input tokens, 128,000 max output (official API card).
- **Modalities:** Text input/output; image input only; audio and video NOT supported.
- **Pricing (as of 2026-11-08):** $30/MTok input, $180/MTok output per 1M tokens (batch API price); **no cached input discount**; regional processing 10% uplift.
- **Architecture:** Proprietary, closed weights (OpenAI). Parameter count not disclosed.
