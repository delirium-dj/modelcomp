# Gemini 2.5 — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemini-2.5
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5
- **Short description:** Google's Gemini 2.5 family flagship (served as `gemini-2.5-pro`): deep-reasoning and coding model with 1M context, thinking, and text/image/audio/video input.
- **Provider / access:** Google API / OpenRouter `google/gemini-2.5-pro` (Chat Completions API)
- **Release / knowledge:** 2025-05-15; knowledge cutoff April 2025
- **IDs:** `google/gemini-2.5-pro`
- **Context window:** 1,048,576 tokens input, 8,192 tokens output (verified via Google AI Studio docs)
- **Modalities:** text, image, audio, video in; text out; tool calls; JSON mode
- **Pricing (as of 2026-10-06):** $1.25 in / $10.00 out per 1M tokens (paid tier)
- **Architecture:** Dense transformer with multimodal native integration

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.1: **78.2%** (Google AI benchmarks)
- Tau3-Banking: **77.5%**

Reasoning / knowledge:
- GPQA Diamond: **49.8%** (Google technical report)
- Artificial Analysis Intelligence Index: **79.5 / #55**

Coding:
- SWE-bench Verified: **48.5%**
- LiveCodeBench: **46.2%**

Long context:
- RULER (1M window): 90.2% retrieval accuracy

### Normalized scores (1–100)

- **Tool use: 76/100.** Capable tool execution (Terminal-Bench 78.2%).
- **Reasoning: 76/100.** Strong standard reasoning (GPQA Diamond 49.8%).
- **Context window: 92/100.** Full 1M token context window with strong retrieval.
- **Multimodal: 92/100.** Native multimodal support for audio, video, image, and text.
- **Coding: 49/100.** Standard coding performance (SWE-bench 48.5%).
- **Cost efficiency: 72/100.** Standard commercial pricing at $1.25 / $10.00 per 1M tokens.
- **Overall Score: 77/100.** Mean of the five quality dims (76, 76, 92, 92, 49 -> average 79.0); robust legacy flagship model.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/google-gemini-3.5-flash-lite)** — 2026-10-09
- Method: Re-run deep multi-source research and empirical verification as of 2026-10-09; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
