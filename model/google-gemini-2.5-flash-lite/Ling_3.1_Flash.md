# Gemini 2.5 Flash-Lite (Google namespace) — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / Gemini 2.5 Flash-Lite
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **IDENTITY NOTE:** This folder tracks the **same model** as `gemini-2.5-flash-lite` — Gemini 2.5 Flash-Lite listed on OpenRouter under the `google/` namespace (slug `google/gemini-2.5-flash-lite`), served by two providers (Google Vertex and Google AI Studio, with automatic failover). Scores below are identical to the `gemini-2.5-flash-lite` report; the folder-average difference (66.4 here vs 68.2 there) reflects peer-set composition, not a different model. See `model/gemini-2.5-flash-lite/Ling_3.1_Flash.md` for the full benchmark table.

## Model card

- **Name:** Gemini 2.5 Flash-Lite
- **Short description:** Google DeepMind's cheapest 2.5-family hybrid reasoning model — thinking toggleable (off by default), built for high-volume, latency-sensitive tasks.
- **Provider / access:** Google — Gemini API, AI Studio, Vertex AI (OpenRouter: Google Vertex + Google AI Studio). Access-limited: "limiting access to the 2.5 models to users who have actively used them in the past... not deprecated"; new projects directed to 3.5 Flash-Lite / 3.8 Flash.
- **Release / knowledge:** Preview 2025-06-17; GA 2025-07-22; Preview (09-2025) 2025-09-25; model card 2025-09-26. Knowledge cutoff January 2025.
- **IDs:** `gemini-2.5-flash-lite`; OpenRouter `google/gemini-2.5-flash-lite`; folder `google-gemini-2.5-flash-lite`.
- **Context window:** 1,048,576 tokens (1M); max output 65,536.
- **Modalities:** Text, image, audio, video (PDF per Enterprise docs) in; text out.
- **Pricing (as of 2026-10):** $0.10 / $0.40 per 1M input/output; single tier; audio input 40% cheaper than preview.
- **Architecture:** Not publicly disclosed; hybrid reasoning with dynamic thinking-budget control; distillation with k-sparse vocabulary distribution.

### Raw benchmarks found

Vendor-reported (model card 2025-09-26; Preview 09-2025 non-thinking / thinking, stable 06-17 non-thinking / thinking, 2.0 Flash-Lite): HLE 6.4% / 7.3% / 5.1% / 6.9% / 5.1%*; LiveCodeBench 52.1% / 58.4% / 33.7% / 34.3% / 29.1%; FACTS Grounding 86.9% / 87.5% / 84.1% / 86.8% / 84.6%; Vibe-Eval 58.4% / 59.8% / 51.3% / 57.5% / 56.4%; MRCR v2 128K avg 12.0% / 25.6% / 16.6% / 30.6 / 19% and 1M pointwise 6.5% / 7.7% / 4.1% / 5.4 / 5.3%; Aider Polyglot 26.7% / 27.1% whole-repo (stable). Remaining model-card rows could not be reliably attributed (jumbled column headers in the captured source) and are excluded rather than guessed.

## Scores

- **Tool use: 56/100.** Native function calling, code execution, Grounding with Google Search, URL Context; no Tau-bench/MCP-Atlas/Toolathlon captured.
- **Reasoning: 56/100.** HLE 7.3% (preview, thinking); LiveCodeBench 58.4% (preview, thinking); no reliably attributed GPQA row.
- **Context window: 89/100.** Native 1M; measured retrieval weak (MRCR v2 128K avg 25.6%, 1M pointwise 7.7%, preview thinking).
- **Multimodal: 74/100.** Text, image, audio, video (PDF) in, text out.
- **Coding: 56/100.** LiveCodeBench 58.4% (preview, thinking); Aider Polyglot 27.1% whole-repo.
- **Cost efficiency: 97/100.** $0.10 / $0.40 per 1M.
- **Overall Score: 66.2/100.** Mean of Tool use 56, Reasoning 56, Context window 89, Multimodal 74, Coding 56 = 66.2.

> **Gap vs folder average (66.4): −0.2.** Essentially in agreement with the peer set; the same evidence gaps (jumbled model-card rows) apply here as in the `gemini-2.5-flash-lite` folder.

## Notes

- Verification trail: Gemini 2.5 Flash-Lite model card PDF (2025-09-26), Gemini API docs (modalities; token limits; access limitation), Google Developers Blog (2025-06-17 preview, 2025-07-22 GA at $0.10/$0.40, 2025-09-25 Preview 09-2025), Gemini 2.X arXiv report, OpenRouter listing (google/gemini-2.5-flash-lite; providers Google Vertex + Google AI Studio).
- Known conflicts: none beyond the attribution limits documented in the `gemini-2.5-flash-lite` report.
- Open questions: attribution of the unattributed model-card rows; whether the access limitation changes effective pricing for new projects.

Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03

Future sources: attributed model-card rows, independent replications.
