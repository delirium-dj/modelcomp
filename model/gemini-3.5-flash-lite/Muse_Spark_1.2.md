# Gemini 3.5 Flash Lite — findings by Muse Spark 1.2

- Source: Google/Gemini 3.5 Flash Lite (`gemini-3.5-flash-lite`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash Lite
- **Short description:** Google's fastest and most cost-efficient Gemini 3.5 tier for high-throughput sub-agent work, document parsing, and lightweight agentic workflows where latency and per-token cost dominate.
- **Provider / access:** Google AI Studio + Vertex AI (`google/gemini-3.5-flash-lite`), Gemini API (`gemini-3.5-flash-lite`); OpenCode Zen free tier available; Chat Completions-compatible with tool calling.
- **Release / knowledge:** 2026-07-21 release alongside Gemini 3.6 Flash and 3.5 Flash Cyber; knowledge cutoff undisclosed
- **IDs:** `google/gemini-3.5-flash-lite` (Free tier exists via AI Studio / OpenCode Zen)
- **Context window:** 1,048,576 (1M) input, 65,536 max output — verified via Gemini API docs (ai.google.dev) and DeepMind model card 2026-07-21
- **Modalities:** text, image, video, audio, PDF in; text out; reasoning yes (lightweight thinking, supported); tool calls yes (function calling, code execution, file search, grounding with Google Search/Maps, computer use preview); structured outputs yes; no image/audio generation
- **Pricing (as of 2026-07-21):** Free tier available (rate-limited); Paid $0.30 in / $2.50 out per 1M tokens (flat rate, no length-tiering), context caching $0.03 per 1M per hour + $1.00 storage; cheapest tier in Gemini 3.5 family (vs $0.25/$1.50 for 3.1 Flash Lite, $1.00/$5.00 for Haiku 4.5)
- **Architecture:** proprietary (params / MoE undisclosed, consistent with Gemini practice)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (Terminus-2 harness): **54.0%** (DeepMind model card 2026-07-21; vs Gemini 3.1 Flash Lite 31.0%, GPT-5.4 mini 59.2%, Claude Haiku 4.5 44.2%)
- OSWorld-Verified (agentic computer use): **74.0%** (DeepMind 2026-07-21; vs 54.3% for 3.1 Flash Lite, 72.1% for GPT-5.4 mini, 50.7% for Haiku 4.5)
- GDPval-AA v2 (knowledge work, Elo): **1140** (DeepMind 2026-07-21; vs 642 for 3.1 Flash Lite, 1171 for GPT-5.4 mini, 907 for Haiku 4.5)
- MLE-Bench (ML Engineering): **39.2%** (DeepMind 2026-07-21; vs 22.0% for 3.1 Flash Lite)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **86.9%** (HokAI 2026-07-21 vendor-reported; DeepMind card corroborates PhD-level science strength)
- CharXiv Reasoning (information synthesis from complex charts): **74.5%** no-tools, **76.5%** with tools (DeepMind 2026-07-21; vs 73.2%/75.6% for 3.1 Flash Lite, 80.3% for GPT-5.4 mini)
- Artificial Analysis Intelligence Index: **23** (HokAI citing Artificial Analysis, 2026-09-09 composite of 10 evals; well behind 3.5 Flash/Pro but ahead of 3.1 Lite)
- Output speed: **350 tok/s** (DeepMind/Artificial Analysis) / **363 tok/s** (HokAI) — fastest in Gemini 3.5 series
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Pro (Public, diverse agentic coding): **54.2%** (DeepMind 2026-07-21; vs 38.3% for 3.1 Flash Lite, 49.6% for Gemini 3 Flash, 54.4% for GPT-5.4 mini, 39.5% for Haiku 4.5 — notably beats full Gemini 3 Flash)
- LiveCodeBench: **no verified public score found** (SWE-bench Pro is the closest public coding proxy reported for this tier)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- GDM-MRCR v2 (8-needle long-context): **72.2% at 128K average**, **21.3% at 1M pointwise** (DeepMind 2026-07-21; vs 60.1%/12.3% for 3.1 Flash Lite, 42.7% at 128K for GPT-5.4 mini)

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal-Bench 2.1 54.0% with OSWorld-Verified 74.0% and GDPval-AA 1140 show strong agentic tool use for a Lite tier — close to GPT-5.4 mini and well above 3.1 Lite; capped below 90 by sub-60% terminal bench vs frontier 85%+.
- **Reasoning: 80/100.** GPQA Diamond 86.9% with CharXiv 74.5/76.5% sits in solid mid-frontier band; AA Index 23 and lack of HLE/CritPt keep it below 90 frontier reasoning tier.
- **Context window: 85/100.** 1,048,576 verified with 65,536 output; GDM-MRCR 72.2% at 128K proves good retrieval but 21.3% at 1M pointwise shows degradation at full length, capped below perfect 100 despite nominal 1M tier.
- **Multimodal: 85/100.** Full text/image/video/audio/PDF input plus broad tool coverage matches highest Lite input breadth; capped at 85 because outputs remain text-only with no native image/audio/video generation.
- **Coding: 78/100.** SWE-bench Pro 54.2% beats Gemini 3 Flash (49.6%) and matches GPT-5.4 mini, confirming best-for-Lite coding; capped below 85 by absence of LiveCodeBench/SciCode and sub-60% ceiling vs flagship coding models.
- **Cost efficiency: 95/100.** Free tier plus $0.30/$2.50 — cheapest paid tier in Gemini 3.5 family with flat pricing and fastest throughput (350–363 tok/s); capped below 100 only by non-zero paid fallback vs $0 free-only.
- **Overall Score: 82/100.** Mean of the five non-cost dims (78+80+85+85+78)/5 = 81.2 → 82; best-fit as cheapest high-throughput Lite pick where sub-agent latency and cost dominate — escalate to Gemini 3.5 Flash/Pro for maximal reasoning depth.

---

## Signature

- Provided by: **Muse Spark 1.2 (opencode/muse-spark-1.2-contributor-free)** — 2026-09-24
- Method: public internet research (DeepMind Gemini 3.5 Flash-Lite model card 2026-07-21, Gemini API docs ai.google.dev, Google blog 2026-07-21, HokAI review, DeepMind eval methodology); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
