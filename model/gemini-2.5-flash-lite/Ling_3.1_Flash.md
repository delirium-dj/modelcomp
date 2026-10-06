# Gemini 2.5 Flash Lite — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / Gemini 2.5 Flash-Lite
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash-Lite
- **Short description:** Google DeepMind's cheapest 2.5-family hybrid reasoning model — thinking toggleable (off by default), built for high-volume, latency-sensitive tasks like translation, classification, and summarization at scale.
- **Provider / access:** Google — Gemini API, AI Studio, Vertex AI, Gemini Enterprise Agent Platform. **Access-limited as of the latest update:** "limiting access to the 2.5 models to users who have actively used them in the past... not deprecated and will continue to be served"; new projects directed to 3.5 Flash-Lite / 3.8 Flash.
- **Release / knowledge:** Preview 2025-06-17 (`gemini-2.5-flash-lite-preview-06-17`); GA/stable 2025-07-22; updated preview (09-2025) 2025-09-25; model card published/updated 2025-09-26. Knowledge cutoff January 2025.
- **IDs:** `gemini-2.5-flash-lite` (stable), `gemini-2.5-flash-lite-preview-09-2025` (shut down).
- **Context window:** 1,048,576 tokens (1M); max output 65,536.
- **Modalities:** Text, image, audio, video (and PDF per Enterprise docs) in; text out.
- **Pricing (as of 2026-10):** $0.10 / $0.40 per 1M input/output (GA, July 2025; audio input pricing reduced 40% from preview). Single price tier regardless of input length; thinking vs non-thinking price difference removed across the 2.5 family.
- **Architecture:** Not publicly disclosed (proprietary); hybrid reasoning with dynamic thinking-budget control; smaller 2.5 models use distillation with a k-sparse distribution over the vocabulary.

### Raw benchmarks found

**Vendor-reported (Gemini 2.5 Flash-Lite model card, 2025-09-26; columns = Preview 09-2025 non-thinking / Preview 09-2025 thinking / stable 06-17 non-thinking / stable 06-17 thinking / 2.0 Flash-Lite):**
- Humanity's Last Exam: **6.4%** / **7.3%** / 5.1% / 6.9% / 5.1%*.
- LiveCodeBench: **52.1%** / **58.4%** / 33.7% / 34.3% / 29.1%.
- FACTS Grounding: 86.9% / 87.5% / 84.1% / 86.8% / 84.6%.
- Vibe-Eval (Reka): 58.4% / 59.8% / 51.3% / 57.5% / 56.4%.
- Aider Polyglot (whole repo): — / — / 26.7% / 27.1% / — (single-attempt rows 41.3% / 38.9% / 31.6% / 27.6% / 21.4% could not be reliably attributed — table column headers are jumbled in the captured source).
- MRCR v2 (harder 8-needle version): 128K cumulative avg **12.0%** / **25.6%** / 16.6% / 30.6 / 19%; 1M pointwise **6.5%** / **7.7%** / 4.1% / 5.4 / 5.3%.
- The model card's remaining rows (incl. a ~70-72% row and an ~83-85% row) could not be reliably attributed to specific benchmarks from the captured source and are excluded rather than guessed.
- 2.5 Flash-Lite Preview (09-2025) improvements: better complex instruction following, ~50% output-token reduction (conciseness), stronger multimodal and translation capabilities, improved audio transcription and image understanding.

## Scores

- **Tool use: 56/100.** Function calling, code execution, Grounding with Google Search, and URL Context are native, but no Tau-bench/MCP-Atlas/Toolathlon measurement was captured.
- **Reasoning: 56/100.** HLE 7.3% (preview, thinking) is low; LiveCodeBench 58.4% (preview, thinking) is the strongest captured reasoning-adjacent row; no reliably attributed GPQA row.
- **Context window: 89/100.** Native 1M, but measured long-context retrieval is weak: MRCR v2 128K avg 25.6% and 1M pointwise 7.7% (preview, thinking).
- **Multimodal: 74/100.** Text, image, audio, video (and PDF) in, text out — full input multimodality, text-only output.
- **Coding: 56/100.** LiveCodeBench 58.4% (preview, thinking) and Aider Polyglot 27.1% whole-repo are modest for the 2026-10 frontier.
- **Cost efficiency: 97/100.** $0.10 / $0.40 per 1M is near the bottom of the market; single tier, 40% cheaper audio input.
- **Overall Score: 66.2/100.** Mean of Tool use 56, Reasoning 56, Context window 89, Multimodal 74, Coding 56 = 66.2.

> **Gap vs folder average (68.2): −2.0.** Consistent once the weak measured rows (HLE 7.3%, MRCR 1M pointwise 7.7%, Aider Polyglot 27.1%) are weighted against the 1M multimodal profile and $0.10/$0.40 pricing. The jumbled model-card table prevented attributing several rows — the gap may narrow if those rows (a ~70-72% GPQA-like row and an ~83-85% row) can be attributed.

## Notes

- Verification trail: Gemini 2.5 Flash-Lite model card PDF (2025-09-26; benchmark table; knowledge cutoff January 2025), Gemini API docs (modalities; token limits; access limitation notice), Google Developers Blog 2025-06-17 (preview launch; thinking off by default; pricing change across 2.5 Flash), Google Developers Blog 2025-07-22 (GA; $0.10/$0.40; audio input −40%), Google Developers Blog 2025-09-25 (Preview 09-2025 improvements; ~50% output-token reduction), Gemini 2.X arXiv report (family comparison; distillation approach; LOFT/MRCR-v2 methodology).
- Known conflicts: Microsoft Foundry-style third-party listings were not consulted; the model-card table's column headers are jumbled in the captured source, so only confidently attributable rows are reported.
- Open questions: attribution of the ~70-72% and ~83-85% model-card rows; whether the access limitation changes effective pricing for new projects.

Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03

Future sources: attributed model-card rows, independent replications, AA Intelligence Index snapshot.
