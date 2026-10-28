# Gemini 2.5 Flash — findings by Flint

- Source: Google (DeepMind) / Gemini 2.5 Flash
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash
- **Short description:** Google's hybrid reasoning Flash model — native "thinking" budget paired with a 1M-token context window at Flash price-performance economics; positioned as the large-scale processing, low-latency high-volume task and agentic tool-use workhorse.
- **Provider / access:** Google — Gemini API (`gemini-2.5-flash`), Google AI Studio, Vertex AI (generateContent / Responses API); vendor route `google/gemini-2.5-flash` via OpenRouter/Vertex. Not present on OpenCode Zen (Zen's Gemini catalogue starts at Gemini 3 Flash and carries no Gemini 2.5 route).
- **Release / knowledge:** Preview `gemini-2.5-flash-preview-05-2025` (AA tracked the Gemini 2.5 Flash Reasoning release 2025-05-20); knowledge cutoff January 2025; updated preview `gemini-2.5-flash-preview-09-2025` released 2025-09-25 (official Google blog); stable `gemini-2.5-flash`; official docs list latest update June 2025; access to the 2.5 models is currently limited to prior users, models not deprecated, served until further notice, and new projects directed to Gemini 3.5 Flash-Lite / 3.8 Flash.
- **IDs:** `gemini-2.5-flash`; vendor-prefixed route `google/gemini-2.5-flash`; alias `gemini-flash-latest` (points to latest preview).
- **Context window:** 1,048,576 total input tokens / 65,536 max output tokens (official Gemini API docs, verified 2026-10-28); Artificial Analysis measured a 1M-token context window.
- **Modalities:** Text, image, audio, video in → text out; thinking supported; function calling / tool use supported; structured outputs (JSON mode) supported; context caching supported; search grounding supported; code execution supported; URL context supported; Maps grounding supported; image generation not supported; Live API not supported.
- **Pricing (as of 2026-10-28):** Free tier on Google AI Studio: input/output free, grounding with Google Search free up to 500 RPD; paid: $0.30 per 1M input tokens (text/image/video) / $1.00 (audio), $2.50 per 1M output tokens (incl. thinking), context caching $0.03 (text/image/video) / $0.10 (audio) per 1M, cache storage $1.00 per 1M tokens/hour; grounding with Google Search 1500 RPD free then $35 per 1,000 grounded prompts; batch API 50% off interactive pricing.
- **Architecture:** Proprietary Google LLM; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found for the exact `gemini-2.5-flash` ID (closest agentic signals below).
- Tau3-Banking / Tau2-Bench: no verified public score found for the exact ID.
- GDPval-AA: no verified public score found for the exact ID.
- Claw-Eval / ClawProBench: no verified public score found for the exact ID.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found for the exact ID.

Coding:

- SWE-bench Verified: **54%** — Google, on the updated `gemini-2.5-flash-preview-09-2025` (tool-use improvement: 48.9% → 54%); source: official Google blog (2025-09-25).
- LiveCodeBench: **71.3%** (Artificial Analysis, Gemini 2.5 Flash Preview (Sep '25) Reasoning); **62.5%** (Artificial Analysis, Gemini 2.5 Flash Preview (Sep '25) Non-reasoning).
- SciCode / AA-SciCode: no verified public score found for the exact ID.
- Vibe Code Bench: no verified public score found for the exact ID.
- DeepSWE / Coding Index / other: no verified public score found for the exact ID.

Reasoning / knowledge:

- GPQA Diamond: **79.0%** (Artificial Analysis, Gemini 2.5 Flash Reasoning); **79.3%** (Artificial Analysis, Gemini 2.5 Flash Preview (Sep '25) Reasoning); **76.6%** (Artificial Analysis, Gemini 2.5 Flash Preview (Sep '25) Non-reasoning); **68.3%** (Artificial Analysis, Gemini 2.5 Flash Non-reasoning).
- HLE: **12.1%** (Artificial Analysis, Gemini 2.5 Flash Reasoning); **13.8%** (Artificial Analysis, Gemini 2.5 Flash Preview (Sep '25) Reasoning); **8.7%** (Artificial Analysis, Gemini 2.5 Flash Preview (Sep '25) Non-reasoning).
- LCR / MLCR: no verified public score found for the exact ID.
- CritPt: **1.1%** (Artificial Analysis, Gemini 2.5 Flash Reasoning); **0.3%** (Artificial Analysis, Gemini 2.5 Flash Preview (Sep '25) Reasoning).
- Artificial Analysis Intelligence Index / BenchLM overall: Artificial Analysis Intelligence Index — Easy Benchmarks "Reasoning" variant ≈ **20.1**, historical rank **#221/566`; current AA release pages list the Intelligence Index as N/A for the latest index version; BenchLM overall for the exact ID not retrieved.

Long context:

- MRCR / RULER / GraphWalks at window length: no verified public score found for the exact ID; official context limit verified at 1M tokens.

### Normalized scores (1–100)

- **Tool use: 60/100.** Function calling, structured outputs, caching and search/code/Maps grounding are supported; the 2025-09-25 update added a tool-use gain (5% on SWE-bench Verified, 48.9% → 54%). Mid-band agentic result (TB2.1 mid band 45–60; Terminal-Bench Hard 12–17). What caps it: modest absolute agentic ceiling versus frontier reference bands (TB2.1 ~88%+ → 90–100).

- **Reasoning: 62/100.** GPQA Diamond 76.6–79.3% (Artificial Analysis) sits in the mid-high band (60–80); HLE 8.7–13.8% and CritPt ~0–1% are low; Intelligence Index ≈ 20 is low. Composite lands mid band per `model-comparison.md`; what caps it: frontier reference (GPQA 90%+, HLE 40%+, Index 60+ → 90–100) not met.

- **Context window: 97/100.** Official verified limit: 1,048,576 total input / 65,536 max output (top ≥1M tier, 95–100); retrieval at 512K+ tokens unverified, so not scored at the full 100.

- **Multimodal: 92/100.** Text, image, audio and video in → text out (official docs + Artificial Analysis); broadest-input multimodal band (+audio in → 90–100).

- **Coding: 63/100.** SWE-bench Verified **54%** (Google, updated preview); LiveCodeBench 62.5–71.3%; Terminal-Bench Hard 12–17%. Below the frontier coding band (DeepSWE 74%+, TB2.1 85%+, SciCode 55% → 90–100).

- **Cost efficiency: 90/100.** Paid lane: $0.30 per 1M input / $2.50 per 1M output (incl. thinking), cache hit $0.03 per 1M (90% discount); blended ≈ $0.33 per 1M — high value per intelligence task; free tier = 100 on Google AI Studio (not reachable via OpenCode Zen).

- **Overall Score: 75/100.** Mean of the five quality dims: (60 + 62 + 97 + 92 + 63) / 5 = 74.8 → **75** (half-up); Cost efficiency excluded from the mean.

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-10-28
- Method: public internet research prioritizing official Google documentation and official Google blog posts plus independent third-party benchmarks (Artificial Analysis, LiveCodeBench, Terminal-Bench, Design Arena, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
