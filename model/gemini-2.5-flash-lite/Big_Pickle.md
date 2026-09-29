# Google Gemini 2.5 Flash-Lite — findings by Big Pickle

- Source: Google/Gemini 2.5 Flash-Lite (`gemini-2.5-flash-lite`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash-Lite
- **Short description:** Google's cost-efficient multimodal lane for high-volume classification, simple extraction and low-latency work — the cheap sibling under Gemini 2.5 Flash. Not an alias: a distinct stable model ID with its own thinking and non-thinking modes, predecessor to Gemini 3.5 Flash-Lite.
- **Provider / access:** Google Gemini API `gemini-2.5-flash-lite` (generateContent), stable alias; the preview ID `gemini-2.5-flash-lite-preview-09-2025` is shut down. Also served by 23 providers per models.dev, including OpenRouter and Vercel AI Gateway under the prefixed ID `google/gemini-2.5-flash-lite`. Note: no OpenCode Zen listing found — this folder's `meta.json` id `opencode/google-gemini-2.5-flash-lite` is unverified and matches the OpenRouter-style prefix convention rather than a Zen id; flagged for the orchestrator, not edited here.
- **Release / knowledge:** preview 2025-06-17, stable July 2025; knowledge cutoff January 2025.
- **IDs:** `gemini-2.5-flash-lite` (Google Gemini API / AI Studio / Vertex); `google/gemini-2.5-flash-lite` (OpenRouter, Vercel AI Gateway, Kilo, Merge, NEAR AI Cloud, Ofox, OrcaRouter, AnyAPI, Impossibl).
- **Context window:** 1,048,576 input tokens / 65,536 output tokens, verified from the Google AI for Developers model card and models.dev. Note the measured retrieval behaviour is far below that nominal window (see Long context).
- **Modalities:** text, image, video, audio and PDF in; text out. Thinking supported; function calling, parallel tool calls, structured outputs, caching, code execution, file search, search grounding and URL context supported. Audio generation, image generation and the Live API are not supported.
- **Pricing (as of 2026-09-29):** $0.10 input / $0.40 output per 1M; cached input $0.01 (litellm-sourced pricing, verified 2026-08-06). Poe lists a cheaper $0.07 / $0.28 tier. Paid only; no free tier advertised by the vendor.
- **Architecture:** proprietary; weights not published.

### Raw benchmarks found

Agent / tool use:

- SWE-bench Verified, single attempt: **31.6%** non-thinking / **27.6%** thinking (Google's published comparison table).
- SWE-bench Verified, multiple attempts: **42.6%** non-thinking / **44.9%** thinking.
- FACTS grounding: **84.1%** non-thinking / **86.8%** thinking — the only direct tool-grounding measure published.
- Terminal-Bench 2.1: **no verified public score found** (not on any leaderboard for this ID).
- Tau3-Banking / Tau2-Bench: **no verified public score found.**
- GDPval-AA: **no verified public score found.**
- Claw-Eval / ClawProBench: **no verified public score found.**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found.**

Reasoning / knowledge:

- GPQA Diamond: **64.6%** non-thinking / **66.7%** thinking (Google's table).
- HLE (no tools): **5.1%** non-thinking / **6.9%** thinking.
- AIME 2025: **49.8%** non-thinking / **63.1%** thinking.
- Global MMLU (Lite): **81.1%** / **84.5%**. Third-party MMLU-Pro 63.0%.
- SimpleQA: **10.7%** / **13.0%** — very weak factual recall.
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** for this ID (AA tracks 2.5 Flash, not Flash-Lite).
- Omniscience Accuracy / Hallucination Rate: **no verified public score found** for this ID.
- Chatbot Arena Elo: **1230** (third-party aggregator, entry-tier).

Coding:

- SWE-bench Verified: **31.6%** single attempt (see above).
- LiveCodeBench: **33.7%** non-thinking / **34.3%** thinking.
- Aider Polyglot (code editing): **26.7%** / **27.1%**.
- SciCode / AA-SciCode: **no verified public score found.**
- Vibe Code Bench: **no verified public score found.**
- DeepSWE / Coding Index: **no verified public score found.**

Long context:

- MRCR v2 (8-needle, 128K avg): **16.6%** non-thinking / **30.6%** thinking.
- MRCR v2 (1M, pointwise): **4.1%** non-thinking / **5.4%** thinking. The nominal 1M window therefore carries essentially no usable retrieval — this is a spec, not a measured capability.

Vision:

- MMMU: **72.9%** (both modes). Vibe-Eval (Reka): **51.3%** / **57.5%**.

> Third-party aggregators publish materially different figures for this model (e.g. GPQA Diamond 32.0%, SWE-bench Verified 22.0%, LiveCodeBench 28.0%, ARC-AGI 14.0% on one benchmark portal). Google's own published table is used above as the primary source because it is model-specific and mode-aware; the aggregator spread is noted rather than averaged.

### Normalized scores (1–100)

- **Tool use: 35/100.** Grounding is respectable (FACTS 84.1–86.8%) and function calling with parallel calls is supported, but there is no published Terminal-Bench, Tau2/Tau3, GDPval or Claw-Eval number at all, and SWE-bench Verified single-attempt is only 31.6%. A missing agentic-tool benchmark set is scored as a real limitation, never as a phantom high score.
- **Reasoning: 55/100.** GPQA Diamond 64.6–66.7% and AIME 2025 63.1% sit in the mid band, matching the methodology's 55–65 reference (GPQA 60–80%, HLE <10%, LCR <40%). HLE at 6.9% and SimpleQA at 10.7% cap it; thinking mode barely moves the needle on either.
- **Context window: 62/100.** The nominal 1,048,576-token window is the top tier on paper, but measured MRCR v2 retrieval is 4.1–5.4% at 1M and only 16.6–30.6% at a 128K average — nowhere near the ~98%-at-512K+ bar for a top-tier score. Scored on effective retrieval, not on the printed spec.
- **Multimodal: 92/100.** Google documents text, image, video, audio and PDF input with text output, which is the highest coverage band short of audio generation (unsupported here). Backed by MMMU 72.9%, though Vibe-Eval at 51.3–57.5% shows the visual reasoning is not sharp.
- **Coding: 32/100.** LiveCodeBench 33.7–34.3%, Aider Polyglot 26.7–27.1% and SWE-bench Verified 31.6% single-attempt place it in the low tier — usable for trivial edits and snippets, not for real repository work.
- **Cost efficiency: 97/100.** $0.10 in / $0.40 out with cached input at $0.01 is one of the cheapest paid lanes in the dataset, only marginally above the ~$0.10/$0.20 reference band. Poe's $0.07/$0.28 route is cheaper still.
- **Overall Score: 55/100.** (35 + 55 + 62 + 92 + 32) / 5 = 55.2 → 55. Best fit: high-volume classification, extraction, routing and latency-critical multimodal preprocessing at 1M nominal context — explicitly not for agentic tool use, coding or long-context retrieval, where the measured numbers are the weakest part of the card.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-29
- Method: public internet research (Google AI for Developers model card for capability and token limits, Google's published 2.5 Flash-Lite benchmark comparison table, models.dev provider/pricing matrix, litellm-sourced pricing verified 2026-08-06, third-party aggregator pages for cross-checking). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Big_Pickle_Gemini_2.5_Flash_Lite.md`, using the same headings.
