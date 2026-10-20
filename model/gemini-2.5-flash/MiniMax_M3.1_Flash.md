# Gemini 2.5 Flash — findings by MiniMax M3.1 Flash

- Source: Google (Gemini 2.5 Flash), `gemini-2.5-flash`
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash
- **Short description:** Google's June 2025 multimodal workhorse — 1M context, native thinking, text/image/audio/video/PDF input — long the cheapest capable route for bulk multimodal processing. Google has restricted access for users who actively used the 2.5 line and steers new projects to Gemini 3.5/3.8 Flash; it is **not** on OpenCode Zen (Zen's Gemini catalogue starts at Gemini 3 Flash and 3.1 Pro).
- **Provider / access:** Google Gemini API (`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash`), Vertex AI, Google AI Studio (`generateContent` with `thinkingConfig`); also `google/gemini-2.5-flash` on OpenRouter and dozens of gateways.
- **Release / knowledge:** GA **2025-06-17** (Vertex/AI Studio changelog). Knowledge cutoff **January 2025** (AI Studio model page; AA agrees).
- **IDs:** `gemini-2.5-flash` (AI Studio / Gemini API), `google/gemini-2.5-flash` (OpenRouter), `gemini-2.5-flash-image` (separate image-output SKU), `gemini-2.5-flash-native-audio-preview-12-2025`, `gemini-2.5-flash-preview-09-2025` (retired preview).
- **Context window:** **1,048,576** tokens total, **65,536** max output (AI Studio and Vertex model pages; corroborated by models.dev and OpenRouter).
- **Modalities:** input text, image, video, audio and PDF; output text only (image generation lives in the separate `-image` SKU); thinking supported with thinking budgets; native tool calling and structured outputs.
- **Pricing (as of 2026-10-20):** AI Studio paid **$0.30/M input** (text/image/video), **$1.00/M audio input**, **$2.50/M output** (thinking tokens billed as output), cached input **$0.03/M** ($0.10/M for audio). **Free tier available** with standard rate limits. Vertex: standard $0.30/$2.50, Priority $0.54/$4.50, Flex $0.15/$1.25.
- **Architecture:** proprietary.

### Raw benchmarks found

> Google publishes 2.5 Flash numbers inside the model card of a later SKU (Gemini 3.1 Flash-Lite, March 2026) and in the Vertex AI benchmark tables; Artificial Analysis runs the model directly in thinking and non-reasoning modes.

Agent / tool use:

- Tau2-bench: **31.58%** (AA, thinking build) vs **14.91%** (non-reasoning) — Tau3-banking: no verified public score found
- Terminal-Bench Hard: **13.64%** (AA thinking) vs **12.12%** (non-reasoning) · Terminal-Bench 2.1: no verified public score found
- GDPval-AA: no verified public score found (AA field null) · OSWorld / AutomationBench / Toolathlon / MCP-Atlas / Claw-Eval: no verified public score found
- IFBench: **38.98%** (AA, non-reasoning)

Reasoning / knowledge:

- GPQA Diamond: **82.8%** (Google benchmark table) vs **78.99%** (AA thinking) vs **68.28%** (non-reasoning) · BenchLM: 78.3% (display only)
- HLE: **11.0%** (Google table) vs **12.14%** (AA thinking) vs **4.73%** (non-reasoning)
- Artificial Analysis Intelligence Index: **13.11** (thinking) vs **9.85** (non-reasoning) — vs **15.47** for the Sep-2025 preview
- AA-LCR: **49.9%** (AA non-reasoning) · MMLU-Pro: **86.2%** (Vals AI / BenchLM) · MMMLU: **86.6%** (Google table)
- AIME 2025: **73.33%** (AA thinking) vs **60.33%** (non-reasoning) · AIME 2025 (Sep-25 preview): **78.33%**
- Omniscience Accuracy / Hallucination Rate: **26.1% / 93.0%** (AA) · CritPt: **1.4%** (AA) · MLCR: **8.3%** (AA)

Coding:

- LiveCodeBench: **62.6%** (Google table) vs **69.52%** (AA thinking) vs **49.52%** (non-reasoning)
- SWE-bench Verified: no verified public score found for Gemini 2.5 Flash — Google publishes none and no tracker has one
- SciCode: no verified public score found (AA field null) · Vibe Code Bench: no verified public score found

Long context:

- MRCR v2 128k: **54.3%** · MRCR v2 1M: **21.0%** (Google benchmark table) — retrieval degrades sharply at the top of the window
- Output speed: **249 tok/s** (Google table)

### Normalized scores (1–100)

- **Tool use: 42/100.** τ²-bench 31.6% (14.9% without thinking), Terminal-Bench Hard 13.6% and no published GDPval/OSWorld/MCP-Atlas numbers put the model below the mid band on agentic work, despite being a capable general model.
- **Reasoning: 62/100.** GPQA 79–83%, MMLU-Pro 86.2% and AIME 2025 73.3% are solid mid-band knowledge/reasoning results, capped by HLE 11–12%, an AA Intelligence Index of 13.1, CritPt 1.4% and a 93.0% hallucination rate.
- **Context window: 78/100.** The window is genuinely 1,048,576 tokens, but MRCR v2 falls from 54.3% at 128k to 21.0% at 1M, so the score sits below the 95+ "1M with real retrieval" band.
- **Multimodal: 92/100.** Text, image, audio, video and PDF input with text out, measured MMMU-Pro 66.7–69.1% and Video-MMMU 79.2% — audio and video input place it in the top multimodal tier.
- **Coding: 58/100.** LiveCodeBench 62.6–69.5% is mid-band and no SWE-bench Verified number exists at all, so repo-scale coding is unproven; that absence caps the score.
- **Cost efficiency: 93/100.** $0.30/M in and $2.50/M out with a $0.03/M cache read remains one of the cheapest 1M-context multimodal routes; a free AI Studio tier exists (would score 100).
- **Overall Score: 66/100.** Mean of the five quality dims = (42 + 62 + 78 + 92 + 58) / 5 = 66.4 → **66**. Best fit: bulk multimodal ingestion, summarisation and extraction at scale — it is being phased out of Google's own catalogue in favour of 3.5/3.8 Flash.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-20
- Method: public internet research (Google AI Studio / Vertex AI model pages, benchmark tables and pricing pages, Artificial Analysis, BenchLM + Vals AI, OpenRouter API, models.dev); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.5_Flash.md`, using the same headings.
