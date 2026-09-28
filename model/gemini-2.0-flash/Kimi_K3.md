# Gemini 2.0 Flash — findings by Kimi K3

- Source: Google DeepMind (`google/gemini-2.0-flash`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.0 Flash
- **Short description:** Google's 2025 workhorse multimodal model — the shipping face of the 2.0 generation with 1M context, omni input and native tool use. Deprecated and shut down 2026-06-01; kept here as the historical reference for the 2.0 line.
- **Provider / access:** Google AI Studio / Gemini API, Vertex AI (both retired for this model as of 2026-06-01); third-party remnants on Poe/Qiniu listings. Gemini Developer API was OpenAI-compatible via compatibility endpoint.
- **Release / knowledge:** Experimental Dec 2024, GA 2025-02-05; shutdown 2026-06-01. Knowledge cutoff 2024 (Google listing era).
- **IDs:** `google/gemini-2.0-flash`; family aliases `gemini-2.0-flash-001`, `gemini-2.0-flash-lite-001`. No Zen ID (never on Zen as a paid listing; folder predates Zen coverage).
- **Context window:** 1M tokens (verified across OpenRouter-era listings and RULER coverage).
- **Modalities:** Text, image, audio, video in; text + image out. Native tool use (function calling, Google Search grounding); JSON mode yes. Pre-reasoning era: no thinking mode on 2.0 Flash.
- **Pricing (historical, model now shut down):** Google AI Studio $0.10 / $0.40 per 1M in/out (audio input $0.70); Vertex AI $0.15 / $0.60 (curated meta + serenitiesai tracker).
- **Architecture:** Proprietary (Google DeepMind); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- IFEval: **86.6%** (19th of 25 tracked); AlpacaEval 2.0: **51.5%** (serenitiesai)
- Native function calling + Search grounding shipped with the 2.0 launch (Google)
- Terminal-Bench / Tau / GDPval / Claw-Eval / MCP-Atlas: no verified public score found (pre-dates most of these suites)

Reasoning / knowledge:

- GPQA Diamond: **38.0%** (serenitiesai, 127th of 140)
- MMLU-Pro: **66.0%**; MATH: **68.0%**; GSM8K: **86.0%**; BBH: **84.2%**; ARC-AGI: **18.0%**
- SimpleQA: **27.5%**; TruthfulQA: **80.5%**; Winogrande: **89.5%**
- Chatbot Arena ELO: **1240** (59th of 74)
- MT-Bench: **8.9** / 10
- HLE / CritPt / AA Index: no verified public score found

Coding:

- SWE-bench Verified: **28.0%** (51st of 67)
- LiveCodeBench: **32.0%**; HumanEval+: **76.0%** (serenitiesai)

Long context:

- RULER: **85.5%** at 1M class (8th of 13) — verified long-context retrieval number
- Speed: TTFT 85 ms (#3 of 92), output 220 tok/s (#7 of 94) — AA aggregates

Multimodal:

- MathVista: **73.1%** (6th of 14)

### Normalized scores (1–100)

- **Tool use: 55/100.** Solid native tool plumbing + IFEval 86.6% for its era; capped by zero modern agentic-suite rows (model predates/shut down before them).
- **Reasoning: 50/100.** GPQA 38% sits below the 60% mid-band floor; BBH 84.2% and MATH 68% keep it off the bottom; Arena 1240 = entry-level in 2026 terms.
- **Context window: 90/100.** 1M window with RULER 85.5% measured retrieval — sub-98% keeps it under the 100 cap; full marks for being one of the first credible 1M deployments.
- **Multimodal: 92/100.** Text/image/audio/video in plus image out puts it in the 90–100 band (audio in + non-text out); MathVista 73.1% corroborates vision depth.
- **Coding: 48/100.** SWE-bench 28% / LCB 32% are entry-level real-task results; HumanEval+ 76% shows basic generation skill. Workhorse, not a coder.
- **Cost efficiency: 97/100.** Historical $0.10/$0.40 matches the 97–99 band; scored on price class with the caveat it no longer exists to buy.
- **Overall Score: 67/100.** (55+50+90+92+48)/5 = 67.0 → 67. Historical reference only — shut down 2026-06-01; successor path is the 2.5/3.x Flash line.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-27
- Method: public internet research (serenitiesai benchmark aggregation with per-score sources, ucstrategies 2026 retrospective on the shutdown, Google 2.0 launch-era docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
