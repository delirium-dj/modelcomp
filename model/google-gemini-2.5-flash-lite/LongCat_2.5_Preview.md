# Google Gemini 2.5 Flash Lite — findings by LongCat 2.5 Preview

- Source: Google/Gemini 2.5 Flash-Lite (`gemini-2.5-flash-lite`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Google Gemini 2.5 Flash Lite
- **Short description:** Google's most cost-efficient multimodal model, offering the fastest performance for high-frequency, lightweight tasks. Best for high-volume classification, simple data extraction, and extremely low-latency applications.
- **Provider / access:** Google Gemini API `gemini-2.5-flash-lite`. Chat Completions API (OpenAI-compatible).
- **Release / knowledge:** 2025-06-17; knowledge cutoff January 2025.
- **IDs:** `google/gemini-2.5-flash-lite`
- **Context window:** 1,048,576 tokens (1M); max output 65,536 tokens (verified via Google Cloud docs).
- **Modalities:** Text, image, video, audio, PDF in; text out; reasoning yes (switchable thinking); tool calls yes.
- **Pricing (as of 2026-09-29):** $0.10/$0.40 per 1M in/out.
- **Architecture:** Proprietary/closed weights.

### Raw benchmarks found

Agent / tool use:

- No verified public agentic benchmark found for Gemini 2.5 Flash Lite specifically.

Reasoning / knowledge:

- GPQA Diamond: **64.6%** (non-thinking), **66.7%** (thinking) (model card via stampr-ai.com)
- AIME 2025: **49.8%** (non-thinking), **63.1%** (thinking) (model card via stampr-ai.com)
- FACTS Grounding: **84.1%** (non-thinking), **86.8%** (thinking) (model card via stampr-ai.com)
- HLE: **5.1%** (non-thinking), **6.9%** (thinking) (model card via stampr-ai.com)

Coding:

- SWE-Bench Verified: **31.6%** single attempt (non-thinking), **27.6%** (thinking); **42.6%** multiple attempts (non-thinking), **44.9%** (thinking) (model card via stampr-ai.com)
- LiveCodeBench v5: **33.7%** (non-thinking), **34.3%** (thinking) (model card via stampr-ai.com)

Long context:

- 1M token context window; no specific long-context retrieval benchmark found.

### Normalized scores (1–100)

- **Tool use: 40/100.** No verified public agentic benchmark found for Gemini 2.5 Flash Lite. Capped by absence of data.
- **Reasoning: 60/100.** GPQA Diamond at 64.6% and AIME 2025 at 49.8% are moderate. Capped by HLE at 5.1%.
- **Context window: 95/100.** 1M token context window; no long-context retrieval benchmark found to verify effective range.
- **Multimodal: 85/100.** Text, image, video, audio, and PDF input with text output; strong multimodal support.
- **Coding: 45/100.** SWE-Bench Verified at 31.6% and LiveCodeBench v5 at 33.7% are moderate. Capped by limited coding benchmark coverage.
- **Cost efficiency: 90/100.** $0.10/$0.40 per 1M is very cheap for a frontier-tier model.
- **Overall Score: 65/100.** Mean of (40+60+95+85+45)/5 = 65.0 → 65. Best-fit recommendation: budget-friendly multimodal model with strong modality support and cost efficiency; held back by moderate reasoning and coding benchmarks.

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
