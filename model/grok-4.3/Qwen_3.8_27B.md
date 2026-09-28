# Grok 4.3 — Evaluation Report

**Model:** Grok 4.3 (`opencode/grok-4.3`)
**Auditor:** Qwen 3.8 27B (qwen/qwen3.8-27b)
**Date:** 2026-09-28

## Model card

**Name:** Grok 4.3
**Short:** xAI's quiet-catalog flagship (April 2026): always-on reasoning, 1M context, 97.7% τ²-bench, at $1.25/$2.50.
**Provider:** xAI — API model `grok-4.3`; served by 8+ gateways (OpenRouter, CloudPrice, requesty, etc.). No first-party keynote — shipped via changelogs, X posts, and catalog listings.
**Release date:** 2026-04-30.
**Architecture:** Proprietary; always-on reasoning (CoT folded into base behavior) with four effort levels (none/low/medium/high, default low).
**Context window:** 1,000,000 tokens.
**Modalities:** Text + image (+ native video input per launch coverage) in; text out.
**Pricing:** $1.25/M input, $2.50/M output.

### Raw benchmarks found

**BenchLM.ai rows (xAI Grok 4.3, 2026-09-28; overall 54.66/100, #60 of 512):**
- τ²-bench: **97.7%** (near-perfect customer-agent result)
- Terminal-Bench 2.1 (Vals): 41.9%; GDPval-AA: Elo 1018 (29.2% normalized); APEX-Agents-AA: 17.0%; AA Agentic Index: 17.2%; Gert Labs: 43.86%; ResearchClawBench: 12.4%
- LiveCodeBench (Vals): **84.5%**; SWE-bench (Vals): **71.4%**; SciCode / AA-SciCode: 47.3 / 48.3%; AA Coding Index: 42.3%
- MMMU-Pro: **78.1%**; Design Arena Website Elo: 1203
- GPQA: **90.1%** (Vals: 91.4%); MMLU-Pro (Vals): **85.8%**; HLE: 35% (AA-HLE 37.2%); AA-LCR: 64.3%; CritPt: 8.0%
- IFBench: **81.3%**; AA Intelligence Index: 37.6 (theairankings cites 53.2 — snapshot-dependent); AA-Omniscience hallucination rate: **25.0%** (low for the cohort)

**Launch coverage:** "Cheap frontier model" positioning vs Claude Opus 4.7 / GPT-5.5 / Gemini 3.1 Pro (codersera, 2026-05-26); native video input; 1M context at $1.25/$2.50.

**Gaps:** No SWE-bench Verified/Pro or TB2.0 rows; AA Agentic Index 17.2 and TB2.1 41.9 are weak for a "flagship"; no first-party launch post (quiet release).

### Normalized scores (1–100)

- **Tool use: 64/100.** τ²-bench 97.7% is elite (top of the customer-agent spectrum) and IFBench 81.3% confirms strict instruction following. But the 2026 agentic picture is mixed: TB2.1 41.9%, GDPval-AA 29.2%, APEX-Agents 17.0%, AA Agentic Index 17.2 — strong dialog/tool discipline, weak open-world terminal/ops performance.
- **Reasoning: 82/100.** GPQA 90.1–91.4% clears the 90+ → 90–100 band, MMLU-Pro 85.8% solid; HLE 35–37.2% and CritPt 8.0% cap it below the GPQA-92+ frontier peers (Opus 4.8 93.6, GPT-5.4 92.8).
- **Context window: 86/100.** 1M context (BenchLM, llm-stats, multiple gateways) in the 85–94 band; no published retrieval/synthesis measurement at long context.
- **Multimodal: 45/100.** Text + image + native video input with MMMU-Pro 78.1% (solid image/chart understanding); text-only output; no video-comprehension benchmark published.
- **Coding: 70/100.** LCB 84.5% (Vals) is strong code generation and SWE-bench (Vals) 71.4% is usable agentic SWE, but SciCode 48.3% and AA Coding Index 42.3% are mid-field, and no SWE-V/Pro or TB2.0 evidence exists to push it toward the 75+ tier.
- **Cost efficiency: 88/100.** $1.25/$2.50 per 1M at 1M context beats the $1.25/$4.25 ≈ 88 reference on output price and matches it on input; 8-provider availability improves access.
- **Overall Score: 69/100.** Half-up mean of (64 + 82 + 86 + 45 + 70) / 5 = 69.4.

### Why not higher
Grok 4.3 is the "cheap frontier with superlative τ²-bench" model, not a 2026 agentic leader: TB2.1 41.9%, GDPval-AA 29.2%, and AA Agentic Index 17.2 reveal a real open-world gap, and HLE 35–37% keeps reasoning below its GPQA star. The 69 captures a model that is excellent at disciplined tool-calling dialog and cheap at scale, but mid-pack on the hard agentic/coding axes that dominate this cohort's 75.5 average.

## Signature

Provided by: **Qwen 3.8 27B (qwen/qwen3.8-27b)** — 2026-09-28
