# Gemini 3 Flash — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind/Gemini 3 Flash (`gemini-3-flash-preview`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash (Preview)
- **Short description:** Google DeepMind's speed-optimized Gemini 3 tier, marketed for agentic workflows, multi-turn chat and coding assistance with near-Pro reasoning at Flash latency/cost. Announced 2025-12-17 and rolled out as the default model in the Gemini app and AI Mode in Search. Not an alias: Gemini 3 Pro and Gemini 3 Deep Think are separate IDs.
- **Provider / access:** Google (`gemini-3-flash-preview` via Gemini API, AI Studio, Vertex AI, Gemini CLI, Antigravity); OpenCode Zen route `opencode/gemini-3-flash`. GenAI SDK and OpenAI-compatible entry points; structured output, function calling and automatic context caching documented.
- **Release / knowledge:** 2025-12-17 (Google release blog). Knowledge cutoff not verified on the pages checked.
- **IDs:** `google/gemini-3-flash-preview` (Google); `opencode/gemini-3-flash` (Zen). No Free ID verified → cost scored on paid pricing.
- **Context window:** 1,000,000 input tokens (OpenRouter + Google listings, checked 2026-09-23); max output not stated on the pages checked.
- **Modalities:** text, image, audio, video and PDF in → text out; thinking levels minimal/low/medium/high; tool use/function calling; structured output; reasoning yes.
- **Pricing (as of 2026-09-23):** $0.50 in / $3.00 out per 1M tokens (OpenRouter listing). Cached-input rate not published there. Paid tier only; no free tier verified.
- **Architecture:** proprietary, no parameter disclosure.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Terminal-Bench Hard (AA): **38.6%** (Artificial Analysis via OpenRouter)
- τ²-Bench Telecom: **80.4%** (Artificial Analysis via OpenRouter)
- GDPval: **1204 Elo** (official, via evals.report)
- GAIA: **35.2%** (unverified, evals.report)
- MCP-Atlas / Toolathon / SWE Atlas Codebase QnA / Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **83.2%** official (evals.report); **89.8%** reasoning mode and **81.2%** non-reasoning (Artificial Analysis via OpenRouter — harness differs, both listed)
- HLE: **36.6%** (evals.report official; same figure at Artificial Analysis)
- LCR / MLCR: **AA-LCR 78.0%** (AA); OpenAI-MRCR v2 **22.1%** mean SequenceMatcher similarity (verified, evals.report)
- CritPt: **8.6%** (AA via OpenRouter)
- Artificial Analysis Intelligence Index: **35** (unverified, evals.report); Epoch Capabilities Index **150.9** (official)
- Omniscience / hallucination: AA-Omniscience accuracy **53.4%** with **7.0%** non-hallucination rate (AA); Vectara Hallucination Rate **13.5%** (official)
- AIME 2026 **95.83%**; AIME (OTIS mock) **92.8%**; MathArena HMMT February 2026 **89.39%**; FrontierMath **35.64%** (Tier 4 **4.2%**); ARC-AGI-1 **84.67%**, ARC-AGI-2 **33.61%** (official, evals.report)
- MMLU-Pro **89.0%** (verified); Global-MMLU **91.4%** (unverified); IFBench **78.0%** (AA)

Coding:

- SWE-bench Verified: **75.4%** (official, evals.report)
- SWE-bench Pro: **34.63%**; SWE-bench Multilingual **72.7%**; SWE-rebench **57.6%** (official, evals.report)
- DeepSWE: **5.16%** resolved (official, evals.report) — long-horizon agentic coding is the clear weak spot
- LiveCodeBench: **79.7%** pass@1 (unverified); LiveCodeBench Pro **2316** Codeforces Elo (official)
- SciCode **50.6%** (unverified); WeirdML **61.6%**; Vibe Code Bench **20.20%** (verified); GSO **9.8%**; ProgramBench **0.0%**
- LMArena **1466**; WebDev Arena **1437** Elo (verified)

Long context:

- OpenAI-MRCR v2 **22.1%** at the listed setting — no ≥98% retention evidence at 512K+, so the 1M window is scored at the band floor.

### Normalized scores (1–100)

- **Tool use: 72/100.** τ²-Bench Telecom 80.4% plus GDPval 1204 Elo (top of the 900–1200 mid band) show real tool use, but Terminal-Bench 2.1, Tau3-Banking/τ³ and every MCP/Claw-family harness score could not be verified — that gap holds it well below the 83–88% Terminal-Bench frontier band.
- **Reasoning: 78/100.** GPQA Diamond 83.2% (89.8% in reasoning mode) and AA index 35 with HLE 36.6% sit above the mid band (GPQA 60–80%, Index 20–35 → 55–65); capped by HLE <40%, CritPt 8.6% and FrontierMath Tier 4 4.2%.
- **Context window: 95/100.** 1M-token input lands in the ≥1M tier (95–100); held at the floor because no ≥98% retention at 512K+ is published (MRCR v2 22.1%).
- **Multimodal: 92/100.** Text, image, audio, video and PDF in with text-only out puts it in the "+audio in = 90–100" band (Video-MMMU 86.9%, CharXiv 80.3%, ScreenSpot-Pro 69.1%); capped by text-only output and no audio-generation capability.
- **Coding: 80/100.** SWE-bench Verified 75.4% and LiveCodeBench 79.7% are strong and Vibe Code Bench 20.2% clears the "<10%" trap in the mid band, but SciCode 50.6% (below the 55% frontier reference) and DeepSWE 5.16% cap the score.
- **Cost efficiency: 89/100.** $0.50/$3.00 per 1M sits between the ~$0.60/$2.20 ≈ 92 and $1.25/$4.25 ≈ 88 anchors; paid-only tier, no $0 route verified.
- **Overall Score: 83/100.** (72 + 78 + 95 + 92 + 80) / 5 = 83.4 → **83**. Best fit: the cheapest verified route to 1M-context multimodal reasoning with real (if not frontier) tool use — avoid it for long-horizon autonomous coding, where DeepSWE 5.16% is the tell.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-09-23 (UTC)
- Method: public internet research (Google release blog, Google Gemini API model docs, OpenRouter model page with Artificial Analysis rows, evals.report 38-row benchmark table); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
