# Gemini 2.0 Flash — findings by Qwen 3.8 Flash

- Source: Google DeepMind (`google/gemini-2.0-flash`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.0 Flash
- **Short description:** Google's 2025 workhorse multimodal model — the shipping face of the Gemini 2.0 generation with 1M context, true omni input (text/image/audio/video in, text+image out) and native tool use / Search grounding. **Deprecated and shut down 2026-06-01**; kept here as the historical reference for the 2.0 line. By 2026 standards its reasoning and coding are weak, but its multimodality and price class were class-defining in 2025.
- **Provider / access:** Google AI Studio / Gemini API + Vertex AI (both retired for this model 2026-06-01); third-party remnants on Poe/Qiniu. Gemini Developer API was OpenAI-compatible via a compatibility endpoint. No Zen paid ID (folder predates Zen coverage).
- **Release / knowledge:** experimental Dec 2024, GA 2025-02-05, shutdown 2026-06-01; knowledge cutoff 2024.
- **IDs:** `google/gemini-2.0-flash` (aliases `gemini-2.0-flash-001`, `-lite-001`).
- **Context window:** **1M tokens** (verified across OpenRouter-era listings + a RULER 85.5% measurement) — matches the curated `meta.json`.
- **Modalities:** text + image + audio + video in; **text + image out**; native tool use (function calling, Google Search grounding); JSON mode. Pre-reasoning era — no thinking mode on 2.0 Flash.
- **Pricing (historical, model now shut down):** Google AI Studio **$0.10 / $0.40** per 1M (audio in $0.70); Vertex $0.15 / $0.60. Cost excluded from Overall.
- **Architecture:** proprietary (Google DeepMind); params undisclosed.

### Raw benchmarks found

> Verified against the serenitiesai benchmark aggregation (per-score sources) and Google 2.0 launch-era docs, cross-checked with the qualifying `Kimi_K3.md` report (fetched 2026-09-27). Note: this model predates (and was shut down before) the modern agentic suites, so Terminal-Bench / Tau / GDPval / Claw / MCP-Atlas rows do not exist.

Agent / tool use:

- IFEval: **86.6%** (19/25 tracked); AlpacaEval 2.0: **51.5%**; native function calling + Search grounding shipped at launch (Google)
- Terminal-Bench / Tau / GDPval / Claw-Eval / MCP-Atlas: **no verified public score found** (predates the suites)

Reasoning / knowledge:

- GPQA Diamond: **38.0%** (serenitiesai, 127/140 — below the modern mid-band floor); MMLU-Pro **66.0%**; MATH **68.0%**; GSM8K **86.0%**; BBH **84.2%**; ARC-AGI **18.0%**
- SimpleQA 27.5%; TruthfulQA 80.5%; Chatbot Arena ELO **1240** (59/74); MT-Bench 8.9/10; HLE / CritPt / AA Index: none

Coding:

- SWE-bench Verified: **28.0%** (51/67); LiveCodeBench: **32.0%**; HumanEval+: **76.0%**

Long context / multimodal:

- RULER: **85.5%** at the 1M class (8/13) — a verified long-context retrieval number; speed TTFT 85 ms (#3/92), 220 tok/s (#7/94)
- MathVista: **73.1%** (6/14) — vision depth corroborated

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded. Judged on its own measured numbers, not its 2025-era positioning.

- **Tool use: 58/100.** IFEval 86.6% and shipped native function-calling + Search grounding were solid plumbing for 2025, but there are zero modern agentic-suite rows (it predates/was retired before TB/Tau/GDPval), so it can't be scored against 2026 agent bars.
- **Reasoning: 50/100.** GPQA Diamond 38.0% is below the 60% mid-band floor and Arena 1240 is entry-level in 2026 terms; BBH 84.2% / MATH 68% / GSM8K 86% keep it off the very bottom — a genuinely weak reasoner by current standards.
- **Context window: 90/100.** 1M window with a measured RULER 85.5% retrieval — the sub-98% fidelity keeps it under the 100 cap, but it earns near-full marks as one of the first credible, cheap 1M multimodal deployments.
- **Multimodal: 92/100.** text + image + audio + video in **plus image output** lands it in the 90–100 band (audio-in + non-text-out), and MathVista 73.1% corroborates vision depth — its single strongest dimension and the reason the Overall isn't lower.
- **Coding: 48/100.** SWE-bench Verified 28% / LiveCodeBench 32% are entry-level real-repo results; HumanEval+ 76% shows only basic synthesis — a workhorse, not a coder.
- **Cost efficiency: 97/100.** Historical $0.10/$0.40 matches the 97–99 price band; caveat: it no longer exists to buy (retired). Cost excluded from Overall.
- **Overall Score: 68/100.** Mean of Tool 58, Reasoning 50, Context 90, Multimodal 92, Coding 48 = 338/5 = 67.6 → 68. Best fit: **historical reference only** — a shut-down (2026-06-01) 2.0-generation workhorse that was the cheap omni-modal + 1M-context default of 2025. Its multimodal (92) and context (90) were class-defining; its reasoning (50) and coding (48) are far below any 2026 pick. Successor path is the 2.5 / 3.x Flash line. Note the divergence: the cohort average is 73.3 (six generous >84.9-Overall raters scoring on its 2025 positioning), whereas the honest measured placement — GPQA 38, SWE-V 28, Arena 1240 — is high-60s, matching Kimi K3's below-gate 67.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (serenitiesai benchmark aggregation with per-score sources for GPQA/MMLU-Pro/MATH/SWE-V/LCB/RULER/MathVista/Arena; ucstrategies 2026 retrospective on the shutdown; Google 2.0 launch-era docs; cross-checked against the qualifying `Kimi_K3.md` report and curated `meta.json`). Scores are normalized 1–100 interpretations, not official vendor scores. Flagged that (a) the model is retired and unscored on any modern agentic suite, (b) its low GPQA/SWE numbers are honest 2026-placement penalties rather than missing data, and (c) the rater-gated cohort 73.3 overstates it relative to the measured independent rows.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
