# Grok 4 — Evaluation Report

**Model:** Grok 4 (`xai/grok-4`)
**Auditor:** Qwen 3.8 27B (qwen/qwen3.8-27b)
**Date:** 2026-09-28

## Model card

**Name:** Grok 4
**Short:** xAI's July 2025 always-on reasoning flagship: ~1.7T MoE with native tool use, real-time X data, and the first 50%+ HLE result.
**Provider:** xAI — API model `grok-4-0709`; SuperGrok/Premium+ consumer access; predecessor of the 4.1/4.20/4.5/4.6/4.7 line.
**Release date:** 2025-07-09.
**Architecture:** ~1.7T-parameter MoE; always-on reasoning; native tool use; real-time search integration; a separate multi-agent "Grok 4 Heavy" (10× test-time compute) configuration exists.
**Context window:** 256,000 tokens (128K in the consumer app).
**Modalities:** Text, image, PDF in; text out.
**Pricing:** $3.00/M input, $15.00/M output; $0.75/M cached input; higher tier above 128K tokens.

### Raw benchmarks found

**Launch-era (xAI + trackers):**
- AIME 2025 (Python): **100%**
- LiveCodeBench: **79.4%** — #1 globally at launch
- GPQA Diamond: **87.0–87.7%** (launch table; AA-measured 87.7)
- Humanity's Last Exam: **44.4% with tools** (standard); **50.0–50.7%** for Grok 4 Heavy (first system to clear 50%, text-only subset)

**BenchLM.ai rows (AA/measured, 2026-09-28; overall 52.7/100, #65 of 512):**
- τ²-bench: **74.9%**; Gert Labs: 42.34%
- React Native Evals: **72.6%**
- AA-MMMU-Pro: **68.8%**
- AA-LCR: 68.0%; CritPt: 2.0%; IFBench: 53.7%
- AA Intelligence Index: 22.5; AA-HLE (no tools): 26.7%; AA-Omniscience: +2.1 (accuracy 40.5%, hallucination 64.5%)
- FrontierMath v2: 19.7% (Tiers 1–3), 2.1% (Tier 4)

**Gaps:** No SWE-bench Verified/Pro published for the standard model; TB2.x numbers absent from its tracked set; 2025 knowledge baseline; heavy hallucination rate (64.5%) on AA-Omniscience.

### Normalized scores (1–100)

- **Tool use: 62/100.** τ²-bench 74.9% is strong (customer-support agent band), and Grok 4 introduced native tool use + real-time search integration as headline features; IFBench 53.7% and Gert Labs 42.3% are mid. No Terminal-Bench or 2026-generation agentic numbers for this model.
- **Reasoning: 80/100.** AIME 2025 100% (Python), GPQA 87.7% just under the 90+ line, HLE 44.4% with tools — the 2025 frontier reasoning profile (Heavy's 50.7% HLE confirmed the headroom). LCR 68.0 and FrontierMath v2 19.7% show the depth ceiling.
- **Context window: 74/100.** 256K context (above the 200K = 70 reference; short of the 500K–1M band). No retrieval/synthesis measurement published for 256K.
- **Multimodal: 38/100.** Text + image + PDF in, text out; AA-MMMU-Pro 68.8% is decent but mid-field for 2026; no video/audio, no image output.
- **Coding: 72/100.** LiveCodeBench 79.4% (global #1 at launch) and React Native Evals 72.6% confirm strong code generation; no published SWE-bench Verified for the standard model and no TB2.x agent-coding row, so scored on the LCB/RN evidence only.
- **Cost efficiency: 60/100.** $3/$15 with $0.75 cached input and a higher ≥128K tier — the reference mid-2025 pricing point (the $3/$15 ≈ 60 anchor); uncompetitive against 2026's $0.14–2.50/1M 1M-context models.
- **Overall Score: 65/100.** Half-up mean of (62 + 80 + 74 + 38 + 72) / 5 = 65.2.

### Why not higher
Grok 4 was the July 2025 frontier (first 50% HLE, AIME 100%, LCB #1), but this cohort is built on September 2026 flagships: TB2.1 leaders sit at 87–89% while Grok 4 has no TB2 row, SWE-V's frontier band is 80–95% with nothing published here for Grok 4, 256K context is now a legacy window, and $3/$15 is 2–30× the cost of comparable-or-better 2026 models. Its 65 reflects "2025 SOTA reasoning, 2026 mid-pack agentic."

## Signature

Provided by: **Qwen 3.8 27B (qwen/qwen3.8-27b)** — 2026-09-28
