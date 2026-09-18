# Gemini 3.1 Flash-Lite — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind / Gemini 3.1 Flash-Lite (`google/gemini-3.1-flash-lite`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash-Lite (GA high-efficiency tier; no "Free"-tier wording, though AI Studio quota is offered)
- **Short description:** Google's March 2026 budget multimodal model, marketed as "intelligence at scale": low-latency, high-volume work such as subagent routing, document parsing, classification and agentic search. It supersedes Gemini 2.5 Flash-Lite and is itself superseded by Gemini 3.5 Flash-Lite.
- **Provider / access:** Google — Gemini API, Google AI Studio, Vertex AI / Gemini Enterprise Agent Platform. Proprietary, closed; no self-hosting and no weights.
- **Release / knowledge:** GA 2026-03-03 (aggregator catalog entry 2026-05-07); knowledge cutoff 2025-01.
- **IDs:** `google/gemini-3.1-flash-lite` / `gemini-3.1-flash-lite` (Gemini API, Vertex AI). No OpenCode Zen Free ID.
- **Context window:** 1,048,576 tokens, verified against Google's own Flash-Lite model card and two independent trackers. Max output not published for this tier in the sources checked.
- **Modalities:** text, image, video, audio and PDF input; text output; tool calls; structured output; reasoning yes — thinking level is minimal by default and should be raised for harder work.
- **Pricing (as of 2026-09-18):** $0.28 / 1M in and $1.65 / 1M out list (cheapest credible listing $0.25 / $1.50). Prices were raised 10% on 2026-08-29. Prompt caching ≈50% off; batch queue ≈50% off-peak. Google states paid Gemini API/Vertex traffic is not used for training, and EEA/Swiss/UK users get paid-tier terms even on free usage.
- **Architecture:** proprietary dense Transformer; parameter count undisclosed — Google does not publish it for any Gemini release. Model card defers Frontier Safety assessment to Gemini 3.1 Pro, noting Flash-Lite is strictly less capable.

### Raw benchmarks found

Agent / tool use:

- Tau3-Banking / Tau2-Bench (τ²-bench): **31.3%** (Epoch AI via Model Beat)
- APEX multi-step agentic: **13.0%** (Epoch AI via Model Beat)
- Terminal-Bench: **no verified public score found**
- GDPval-AA / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **81.8%** (Epoch AI via Model Beat)
- HLE: **8.6%** (Epoch AI via Model Beat)
- WeirdML: **52.2%** (Epoch AI via Model Beat)
- AIME 2024/2025: **80.0%** (Epoch AI via Model Beat)
- MMLU-Pro (peer-bar context only): Gemini 3.1 Flash-Lite is listed at 84.9 against Gemini 3 Pro's 91.8 in an independent peer bar — flagged as context, not a verified vendor score for this tier
- Artificial Analysis Intelligence Index / BenchLM overall: no composite published in the sources checked; tracker percentiles are 22nd overall, 28th coding, 14th agentic
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SciCode: **43.4%** (Epoch AI via Model Beat)
- WebDev Arena: **1254 Elo** (Epoch AI via Model Beat)
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench / Vibe Code Bench / DeepSWE: **no verified public score found**

Long context:

- no MRCR/RULER/GraphWalks value for this tier; Google's GDM-MRCR numbers are published for Gemini 3.5/3.6 Flash, not 3.1 Flash-Lite, so recall at 1M depth is unmeasured here.

### Normalized scores (1–100)

- **Tool use: 40/100.** τ²-bench 31.3%, APEX 13.0% and a 14th-percentile agentic placement fit "subagent and tool-router", not autonomous agent; the missing Terminal-Bench score leaves no way to argue higher.
- **Reasoning: 60/100.** GPQA Diamond 81.8% and AIME 80.0% are strong for the price class, but HLE 8.6% and WeirdML 52.2% show a shallow frontier-reasoning ceiling.
- **Context window: 95/100.** 1,048,576 tokens with ~50% caching and batch discounts is excellent value for long ingestion; capped by the total absence of recall-at-depth evidence.
- **Multimodal: 82/100.** Text, image, video, audio and PDF ingestion in one call with text output; no generation and modality-specific quality is below the full Flash tiers.
- **Coding: 58/100.** SciCode 43.4% and WebDev Arena 1254 Elo are mid-pack; no SWE-bench-class result exists, so repository-level agentic coding is unsupported.
- **Cost efficiency: 88/100.** $0.25–$0.28 / $1.50–$1.65 per 1M is cheap and discountable, but the August 2026 10% list increase and cheaper, newer Lite tiers (Gemini 3.5 Flash-Lite) cap the score.
- **Overall Score: 71/100.** (40 + 60 + 95 + 82 + 58 + 88) / 6 = 70.5 → **71**. Best fit: high-volume multimodal ingestion, routing and classification where a million-token window matters more than agentic depth.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-18
- Method: public internet research (Google DeepMind model card, Epoch AI figures via Model Beat, TheModelverse catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.