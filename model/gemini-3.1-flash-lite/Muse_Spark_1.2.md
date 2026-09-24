# Gemini 3.1 Flash Lite — findings by Muse Spark 1.2

- Source: Google/Gemini 3.1 Flash Lite (`gemini-3.1-flash-lite`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash Lite
- **Short description:** Google's most cost-efficient Gemini 3 tier — fastest lightweight multimodal reasoning model for high-volume classification, translation, and lightweight agentic steps where latency and cost dominate.
- **Provider / access:** Google AI Studio (`gemini-3.1-flash-lite`) + Vertex AI ; OpenCode Zen free tier available. Chat Completions-compatible with function calling, grounding, and thinking budgets.
- **Release / knowledge:** 2026-03-03 initial preview, GA May 2026; knowledge cutoff January 2025
- **IDs:** `google/gemini-3.1-flash-lite` (Free tier exists via AI Studio / OpenCode Zen)
- **Context window:** 1,048,576 (1M) input, 65,536 max output — verified via Gemini API docs (ai.google.dev) and DeepMind model card 2026-03-03
- **Modalities:** text, image, video, audio, PDF in; text out; reasoning yes (thinking budgets supported); tool calls yes (function calling, code execution, file search, Google Search/Maps grounding, URL context); structured outputs yes; no image/audio generation, no live API
- **Pricing (as of 2026-03-03):** Free tier available; Paid $0.25 in (text/image/video, $0.50 audio) / $1.50 out per 1M, cached $0.025 ($0.05 audio) + $1.00 storage/hr; cheapest Gemini 3 tier (vs $0.30/$2.50 for 3.5 Flash Lite, $1.00/$5.00 Haiku 4.5)
- **Architecture:** proprietary sparse mixture-of-experts built on Gemini 3 Pro (per press), params undisclosed

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found** for Lite 3.1 alone (closest comparables in cross-model table listed for 3.5 Lite: 54.0%; Lite-tier agentic proxy is GDPval/factuality)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found** for Lite-specific Elo (general Lite comparisons show below 3.5 Lite's 1140)
- FACTS Benchmark Suite (grounding/parametric/search/MM factuality): **40.6%** (DeepMind model card 2026-03-03; vs 50.4% Gemini 2.5 Flash, 17.9% 2.5 Flash-Lite, 42.1% Grok 4.1 Fast)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **86.9%** (DeepMind blog 2026-03-03, HokAI/AITLDR; vs larger 2.5 Flash)
- MMMU-Pro: **76.8%** (DeepMind, HokAI 2026-03-03 — college-level multimodal diagram reasoning, even surpasses Gemini 2.5 Flash)
- Video-MMMU: **84.8%** (AI/TLDR 2026-03-03)
- MMMLU: **88.9%** (AI/TLDR 2026-03-03)
- Humanity's Last Exam: **16.0%** (HokAI/DeepMind 2026-03-03; clearly trailing 3.5 siblings)
- Artificial Analysis Intelligence Index: **16** (Artificial Analysis via HokAI, 2026-03-03; vs 23 for 3.5 Flash-Lite)
- LMArena Elo: **1432** (HokAI/DeepMind 2026-03-03)
- CharXiv / LCR / MLCR / CritPt: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- LiveCodeBench (2025-01-01 to 2025-05-01 UI): **72.0%** (DeepMind model card 2026-03-03; vs 62.6% Gemini 2.5 Flash, 34.3% 2.5 Flash-Lite, 80.4% GPT-5 mini, 53.2% Haiku)
- SWE-bench Verified / SWE-Pro: **no verified public score found** for 3.1 Lite tier (3.5 Lite reports 54.2% Pro; 3.1 Lite not positioned for autonomous coding agents)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- MRCR v2 (8-needle): **60.1% at 128K average**, **12.3% at 1M pointwise** (DeepMind model card 2026-03-03; vs 72.2%/21.3% for 3.5 Flash-Lite, 54.3%/21.0% for 2.5 Flash)

### Normalized scores (1–100)

- **Tool use: 70/100.** Fast lightweight routing model with function calling, code execution, and grounding, validated by FACTS 40.6% and general-purpose agentic routing use (Gemini CLI); capped below 3.5 Lite's 78 by missing verified Terminal-Bench/Tau/GDPval tier scores and lighter agentic depth.
- **Reasoning: 76/100.** GPQA 86.9%, MMMU-Pro 76.8%, Video-MMMU 84.8%, MMMLU 88.9%, and LMArena 1432 show strong cost-tier reasoning for lightweight tasks; HLE 16.0% and AA Index 16 cap it as weakest in Gemini 3.5 family.
- **Context window: 78/100.** 1,048,576 nominal with 65,536 output; MRCR v2 60.1% at 128K and 12.3% at 1M pointwise demonstrate usable long context but clear degradation past 500K, capped below 3.5 Lite's 85.
- **Multimodal: 85/100.** Full text/image/video/audio/PDF input with natively multimodal reasoning matches broadest Lite input breadth; capped at 85 because outputs remain text-only with no image/audio/video generation.
- **Coding: 71/100.** LiveCodeBench 72.0% is solid for cost tier (ahead of 2.5 Flash's 62.6%) but lags 3.5 Lite's SWE-Pro 54.2% proxy and frontier coding; no SWE-bench/SciCode caps it below strong coding tier.
- **Cost efficiency: 97/100.** Free tier plus $0.25/$1.50 — cheapest paid tier in Gemini 3 history (lowest input among 3.x, 45% faster and 2.5x faster TTFT than 2.5 Flash via Artificial Analysis); capped only by still-paid fallback vs pure free.
- **Overall Score: 76/100.** Mean of the five non-cost dims (70+76+78+85+71)/5 = 76.0; best-fit as cheapest high-frequency classifier/router pick — escalate to 3.5 Flash Lite/Flash for heavier agentic coding and long-context retrieval.

---

## Signature

- Provided by: **Muse Spark 1.2 (opencode/muse-spark-1.2-contributor-free)** — 2026-09-24
- Method: public internet research (DeepMind Gemini 3.1 Flash-Lite model card 2026-03-03, Gemini API docs, Google blog 2026-03-03, Artificial Analysis 16, HokAI review, AI/TLDR specs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
