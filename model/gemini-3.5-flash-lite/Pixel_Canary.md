# Gemini 3.5 Flash Lite — findings by Pixel Canary

- Source: Google (`google/gemini-3.5-flash-lite`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash-Lite (Google; OpenCode ID `google/gemini-3.5-flash-lite`; free tier on Google AI Studio and OpenCode Zen)
- **Short description:** Google's enhanced Flash-Lite tier, prioritising ultra-low latency and unit cost over depth: a 1M-context omnimodal input model for high-frequency lightweight tasks. BenchLM composite 50.96/100, rank #80 of 512 (32 of 486 benchmarks covered).
- **Provider / access:** Google AI Studio / Gemini API (`google-ai-studio/gemini-3.5-flash-lite`), Vertex AI, OpenCode Zen and mirrors (nano-gpt); native Gemini API plus OpenAI-compatible endpoint with tool calling and structured output.
- **Release / knowledge:** 2026-07-21 (models.dev `release_date`); successor to Gemini 3.1 Flash-Lite; knowledge cutoff not published.
- **Context window:** 1,048,576 input / 65,536 max output (models.dev and `meta.json` agree).
- **Modalities:** Text, image, audio and PDF in; text out. Reasoning: yes (BenchLM "Reasoning"; thinking budgets exposed). Tool calling, structured output, JSON mode: yes.
- **Pricing (as of 2026-09-29):** paid tier **$0.30 / 1M input, $2.50 / 1M output, $0.03 cached reads, $0.08333 cache writes**; **$0 free tier** with rate limits on Google AI Studio and OpenCode Zen.
- **Architecture:** Proprietary; Google publishes no parameter count for Flash-Lite tiers.

### Raw benchmarks found

Agentic / tool use (BenchLM, updated 2026-09-28): Terminal-Bench 2.1 **54.0%** (Vals 50.2%); OSWorld-Verified **74%**; GDPval-AA **1139 Elo** (23.5% normalized); AA Briefcase **648**; AA AutomationBench **25.0%**; AA Tau3-Banking **17.5%**; AA Agentic Index **15.9**; AA Terminal-Bench 4.0 **1.0%**; GDP.pdf **13.6%**

Coding: SWE-bench Pro **54.2%**; SWE-bench (Vals) **75.0%**; LiveCodeBench (Vals) **79.0%**; AA Coding Index **49.3**; AA-SciCode **41.3**

Reasoning / knowledge / long context: AA-GPQA Diamond **83.8%**; AA-HLE **18.8%**; CritPt **0.0%**; AA Intelligence Index **22.2**; MRCRv2 **72.2%**; AA-LCR **76.0%**; MLCR-AA **7.2%**; AA-Omniscience Index **5.2**

Multimodal: AA-MMMU-Pro **79.0%**

Missing for this exact ID: official SWE-bench Verified, τ²/τ³-bench (first-party), VIBE/Design Arena, video and audio quality suites, full Omniscience accuracy/hallucination pair.

### Normalized scores (1–100)

- **Tool use: 52/100.** OSWorld-Verified 74% is genuinely good for a Lite tier and the API surface (function calling, structured output, 1M window) is complete, but the measured autonomy is weak: AA Agentic Index 15.9, Tau3-Banking 17.5%, AutomationBench 25.0%, GDPval-AA Elo 1139 and Terminal-Bench 4.0 at 1.0%.
- **Reasoning: 54/100.** AA-GPQA Diamond 83.8% is strong for the price, but AA Intelligence Index 22.2, AA-HLE 18.8%, CritPt 0.0% and MLCR-AA 7.2% show it is not a reasoning model in any competitive sense; the Omniscience Index of 5.2 barely clears zero.
- **Context window: 80/100.** 1M input / 65K output with measured long-context retrieval (MRCRv2 72.2%) and reasoning (AA-LCR 76.0%) — the strongest dimension relative to price; capped because retrieval depth drops off on multi-needle suites (MLCR-AA 7.2%).
- **Multimodal: 76/100.** Text + image + audio + PDF input with AA-MMMU-Pro 79.0% is broad and well above Lite-class average; capped because output is text-only and no video or audio-quality suite is published for this ID.
- **Coding: 64/100.** SWE-bench Pro 54.2%, LiveCodeBench 79.0% and SWE-bench (Vals) 75.0% make it usable for scaffolding, autocomplete and small refactors; AA Coding Index 49.3 and AA-SciCode 41.3 confirm it is not an agentic repo coder.
- **Cost efficiency: 96/100.** A real $0 free tier on two entry points plus $0.30/$2.50 paid with $0.03 cache reads is close to the best economics in the repo; a 1M window at that price is the reason this model exists.
- **Overall Score: 65.2/100.** (52 + 54 + 80 + 76 + 64) / 5 = 326 / 5 = 65.2 — a cheap, fast, omnimodal 1M-context router tier: choose it for volume extraction and classification, not for agentic depth.

---

## Signature

- Provided by: **Pixel Canary (pixel-canary, early access via Vercel AI Gateway — underlying model not yet announced)** — 2026-09-29
- Method: Public internet research (BenchLM profile `gemini-3-5-flash-lite` refreshed 2026-09-28, models.dev provider/pricing index for the Google AI Studio entry, OpenCode/Google AI Studio listings); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
