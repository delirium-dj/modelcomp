# Gemini 3.1 Flash — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind / Gemini 3.1 Flash (requested tier; resolved to Gemini 3.1 Flash-Lite)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash — **requested-name resolution:** no generally available model called exactly "Gemini 3.1 Flash" was found. The Gemini 3.1 line ships **Gemini 3.1 Pro / Pro Preview (with Deep Think)**, **Gemini 3.1 Flash-Lite** (GA) and specialised previews **Gemini 3.1 Flash Live Preview** and **Gemini 3.1 Flash TTS Preview**. The closest GA text/agent SKU is therefore **Gemini 3.1 Flash-Lite (`google/gemini-3.1-flash-lite`)**, which is what this file scores; the Live/TTS previews are speech/audio products that publish no text-agent evidence.
- **Short description:** Google's March 2026 "intelligence at scale" Flash-Lite tier: high-efficiency, natively multimodal, built for low-latency high-volume workloads such as subagent calls, document parsing and agentic search. It sits between Gemini 3 Flash (Dec 2025) and the Gemini 3.5/3.6/3.7/3.8 Flash line.
- **Provider / access:** Google — Gemini API, Google AI Studio, Vertex AI / Gemini Enterprise Agent Platform. Proprietary, closed, no open weights and no self-hosting.
- **Release / knowledge:** GA 2026-03-03 (an aggregator dates the catalog entry 2026-05-07); knowledge cutoff listed as 2025-01.
- **IDs:** `google/gemini-3.1-flash-lite` (also `gemini-3.1-flash-lite` in the Gemini API / Vertex). No OpenCode Zen Free ID.
- **Context window:** 1,048,576 tokens; max output not published for the Lite tier in the sources checked. Verified against the Gemini 3.1 Flash-Lite model card and two independent trackers.
- **Modalities:** text, image, video, audio and PDF input; text output; tool calls; structured/JSON output; reasoning yes (lightweight thinking; minimal by default).
- **Pricing (as of 2026-09-18):** $0.28 / 1M in and $1.65 / 1M out list (cheapest listing $0.25 / $1.50 via Google), after a 10% list-price increase on 2026-08-29. Prompt caching ≈50% off cached prompts; batch queue ≈50% off-peak.
- **Architecture:** proprietary dense Transformer, parameter count undisclosed. Google documents prompt caching, a 24-hour batch queue and PagedAttention/FlashAttention-style serving; the model card states it is part of the Gemini 3 family and relies on the Gemini 3.1 Pro frontier-safety evaluation (it is less capable than 3.1 Pro, so no critical capability levels).

### Raw benchmarks found

Agent / tool use:

- Tau3-Banking / Tau2-Bench (τ²-bench): **31.3%** (Epoch AI via Model Beat)
- APEX multi-step agentic: **13.0%** (Epoch AI via Model Beat)
- Terminal-Bench: **no verified public score found** for the 3.1 Lite tier
- GDPval-AA / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **81.8%** (Epoch AI via Model Beat)
- HLE: **8.6%** (Epoch AI via Model Beat)
- WeirdML: **52.2%** (Epoch AI via Model Beat)
- AIME 2024/2025: **80.0%** (Epoch AI via Model Beat)
- MMLU-Pro: **no verified public score found** for the 3.1 Lite tier in the sources checked
- Artificial Analysis Intelligence Index / BenchLM overall: no composite published in the sources checked; the tracker places it at the 22nd percentile overall, 28th on coding and 14th on agentic
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SciCode: **43.4%** (Epoch AI via Model Beat)
- WebDev Arena: **1254 Elo** (Epoch AI via Model Beat)
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench / Vibe Code Bench / DeepSWE: **no verified public score found**

Long context:

- no MRCR/RULER/GraphWalks recall value found for the 3.1 Lite tier; Google publishes GDM-MRCR family numbers for the later 3.5/3.6 Flash tiers instead, so recall at 1M depth here is unmeasured.

### Normalized scores (1–100)

- **Tool use: 40/100.** τ²-bench 31.3% and APEX 13.0% with a 14th-percentile agentic placement make it a routing/subagent model rather than an autonomous agent; no Terminal-Bench number exists for the tier.
- **Reasoning: 60/100.** GPQA Diamond 81.8%, AIME 80.0% and WeirdML 52.2% are respectable for a Lite tier, but HLE 8.6% shows the frontier-knowledge ceiling.
- **Context window: 95/100.** 1,048,576 tokens on a sub-$0.30 input tier is a strong buy; cache and batch discounts make long prefill affordable. No recall evidence at depth keeps it below maximum.
- **Multimodal: 82/100.** Text, image, video, audio and PDF input with text-only output — broad ingestion, no generation, and vision quality is below the full Flash tiers.
- **Coding: 58/100.** SciCode 43.4% and a 1254 WebDev Arena Elo are mid-pack; the absence of any SWE-bench-class result rules it out of repository-level agentic coding.
- **Cost efficiency: 88/100.** $0.25–$0.28 / $1.50–$1.65 per 1M with ~50%-off caching and batch is cheap, but the price rose 10% in August 2026 and newer Flash-Lite tiers offer more capability at a similar rate.
- **Overall Score: 71/100.** (40 + 60 + 95 + 82 + 58 + 88) / 6 = 70.5 → **71**, scored against the resolved `gemini-3.1-flash-lite` proxy. If the intended tier is Gemini 3.1 Flash Live/TTS Preview, no text-agent benchmark evidence exists and the tool/reasoning/coding scores could not be supported at all.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-18
- Method: public internet research (Google DeepMind Gemini 3.1 Flash-Lite model card, Epoch AI figures via Model Beat, TheModelverse catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.