# GPT-6.1 Sol — findings by Qwen 3.8 Max

- Source: OpenAI (`gpt-6.1-sol`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol
- **Short description:** OpenAI's mid-tier workhorse, upgraded from GPT-6 Sol seven days after that model's launch. The pitch is "near-Astra intelligence for a fifth of the price": on DeepSWE v1.1 it matches GPT-6 Astra's peak accuracy (~74.8%) at ~$1.50/task vs Astra's ~$7.70, and on OSWorld 2.0 computer use it lands within 2.1 pts of Astra at ~1/7 the cost per task. Attacks the justification for paying flagship rates for agentic coding, computer use and document work.
- **Provider / access:** OpenAI API (`gpt-6.1-sol`), ChatGPT Work and Codex (Plus/Pro/Business/Enterprise/Edu). NOT in general ChatGPT Chat. A GPT-6.1 Sol **Ultrafast** tier (up to 8x faster token generation) rolls out to Codex.
- **Release / knowledge:** Announced 2026-09-29 at DevDay 2026; knowledge cutoff not published.
- **IDs:** `openai/gpt-6.1-sol`.
- **Context window:** 1,050,000 tokens (same as GPT-6 Astra / GPT-6 Sol). Cached input slashed to $0.10/1M (95% off standard) — persistent dense context (a 200k-token repo re-read every agent step drops from $0.40 to $0.02/step). Max output not separately published.
- **Modalities:** text + image in → text out; reasoning yes (tunable low/medium/high/max effort); tool calls yes (function/API tools, computer use over screenshots + OCR overlays + DOM trees, web search).
- **Pricing (as of 2026-10-20):** $2.00 / 1M input, $0.10 / 1M cached input, $10.00 / 1M output — mid-tier band, identical standard rates to GPT-6 Sol but with 50%-cheaper caching.
- **Architecture:** proprietary (closed weights); frontier-efficient distillation of Astra-class capability into the Sol cost band.

### Raw benchmarks found

Agent / tool use:

- OSWorld 2.0 (offline, partial reward — desktop GUI automation): **71.4%** at max effort (within 2.1 pts of GPT-6 Astra 73.5%; +7.0 over GPT-6 Sol 64.4%; ahead of Claude Opus 5 medium 60.3%) at ~$1.30/task vs Astra's ~$9.30
- AutomationBench 1.0.6 (47 real SaaS tools): **35.4%** medium → ~**36.0%** higher (+2.2 over Claude Opus 5.5 medium; +4.8 over GPT-6 Sol medium; below Claude Sonnet 5.5's 44.7%) at ~$0.30/task vs Opus 5.5's $0.92
- Broken Tool Disclosure failure rate: **2.1%** (vs GPT-6 Sol 4.9%, matching Astra's ~1.5%); zero jailbreak/guardrail bypass; improved negative-constraint instruction following

Reasoning / knowledge:

- "Near-Astra intelligence" per OpenAI; factual-error rate at low reasoning effort dropped from 11.4% (GPT-6 Sol) to **7.7%** (a 32% hallucination reduction), and stays within 1.9 pts of Astra across all reasoning tiers at <1/5 the compute
- No GPQA Diamond / HLE / ARC-AGI scores published in accessible sources (hard-reasoning ceiling not independently benchmarked here)

Coding:

- DeepSWE v1.1 (autonomous SWE in full repos): **75.2%** at high effort — matches GPT-6 Astra 74.8%, ahead of Claude Sonnet 5.5 71.0%, Claude Fable 5 (xhigh) 69.9% and GPT-6 Sol (max) 68.8%; +6.4 pts over its predecessor at lower effort/cost (~$1.50/task vs Astra ~$7.70)
- Terminal-Bench Science 0.1 (bash scientific workflows): **>2x GPT-6 Sol** at max effort (Astra reaches the 68.1% ceiling); ~$5.47/task vs Opus 5.5 $23.21 and Astra $23.80
- No SWE-bench Verified figure published in accessible sources (DeepSWE is the headline coding metric)

Multimodal:

- GDP.pdf (Surge AI complex professional-document extraction): **32.0%** — beats Claude Opus 5.5 w/fallbacks 28.8% and GPT-6 Sol 28.0%, approaching GPT-6 Astra's SOTA 32.2% at ~1/5 the cost/task ($0.38 vs $1.95)
- Computer-use vision (full-screen frames, OCR overlays, DOM trees) validated via OSWorld 2.0 71.4%; no MMMU-Pro / Chartography published

Long context:

- 1,050,000-token window with $0.10/1M cached input (near-free persistent context); no MRCR / needle-in-a-haystack retrieval score published.

> Provenance: all figures from OpenAI's "Introducing GPT-6.1 Sol" DevDay announcement (2026-09-29) and official scatter plot, translated by Vellum and cross-referenced with The New Stack; cost-per-task values are OpenAI-reported. OSWorld 2.0 uses the v2026.08.08 offline release set.

### Normalized scores (1–100)

- **Tool use: 89/100.** OSWorld 2.0 71.4% (near-Astra computer-use parity), AutomationBench ~36% (beats Opus 5.5 medium) and a 2.1% broken-tool-disclosure rate make it a genuinely strong autonomous agent; capped because Astra still leads OSWorld (73.5%) and Sonnet 5.5 leads AutomationBench (44.7%).
- **Reasoning: 87/100.** "Near-Astra" reasoning with a 32% hallucination reduction (7.7% low-effort error) and factuality within 1.9 pts of Astra across tiers; held below 90 because no GPQA Diamond / HLE / ARC-AGI ceiling is published in accessible sources.
- **Context window: 93/100.** A 1,050,000-token window plus $0.10/1M cached input that makes dense persistent context essentially free — one of the best long-context economics available; discounted only by the absence of a published retrieval (MRCR/needle) score.
- **Multimodal: 85/100.** GDP.pdf 32.0% (near Astra's 32.2% SOTA, beats Opus 5.5) and validated computer-use vision over screenshots/OCR/DOM; capped because no broad vision benchmark (MMMU-Pro / Chartography) is published.
- **Coding: 91/100.** DeepSWE v1.1 75.2% matches GPT-6 Astra's peak and beats Sonnet 5.5 / Fable 5 — frontier-matching autonomous SWE at ~1/5 the cost; capped only by the missing SWE-bench Verified figure and Astra's higher Terminal-Bench-Science ceiling (68.1%).
- **Cost efficiency: 95/100.** The defining strength — Astra-level DeepSWE/OSWorld/GDP.pdf at ~20% of the task cost, $2/$10 standard pricing and $0.10 cached input; near-best-in-class cost-per-solved-task (only ultra-budget open models are cheaper per raw token, but none match this capability).
- **Overall Score: 89/100.** Mean of Tool 89 + Reasoning 87 + Context 93 + Multimodal 85 + Coding 91 = 89.0 → 89. Best fit: high-volume autonomous coding/CI repair loops, desktop/computer-use agents and enterprise document pipelines that need Astra-adjacent quality without flagship spend; for the hardest mathematical proofs and novel lab analysis Astra remains the recommended ceiling.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-20
- Method: public internet research (OpenAI's "Introducing GPT-6.1 Sol" DevDay 2026 announcement via Vellum's benchmark breakdown, cross-referenced with The New Stack; specs corroborated by OpenRouter, DataCamp and llm-stats); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
