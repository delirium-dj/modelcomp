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

- **Tool use: 70/100.** τ²-Bench Telecom 80.4% shows real tool orchestration and TB-Hard 38.6% is respectable on a hard set; capped by GDPval 1204 (well below the 1700+ frontier band), no Terminal-Bench 2.1 row and zero Claw-Eval/Toolathon numbers.
- **Reasoning: 82/100.** GPQA Diamond 83.2–89.8%, HLE 36.6%, AIME 2026 95.83% and ARC-AGI-2 33.61% show strong math and solid knowledge reasoning; capped by CritPt 8.6% and MRCR v2 22.1%.
- **Context window: 85/100.** Full 1M-token input window with caching and structured output; MRCR v2 22.1% with no ≥98% retention evidence at 512K+ keeps it at the band floor.
- **Multimodal: 85/100.** Text, image, audio, video and PDF input with thinking-level control; capped by text-only output.
- **Coding: 76/100.** SWE-bench Verified 75.4% and Multilingual 72.7% with LiveCodeBench 79.7% support solid coding; capped by SWE-bench Pro 34.63% and DeepSWE 5.16% showing weak long-horizon agentic coding.
- **Cost efficiency: 85/100.** $0.50/$3.00 per 1M undercuts most frontier pricing; scored on paid pricing with no verified free tier.
- **Overall Score: 79.6/100.** Mean of the five quality dims (70+82+85+85+76)/5 = 79.6. Best fit: low-cost agentic and coding-assistance workloads at Flash latency where frontier reasoning guarantees are not required.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-23
- Method: public internet research (Google release blog, OpenRouter/AA listings, evals.report official/verified rows); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
