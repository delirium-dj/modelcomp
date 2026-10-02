# Google Gemini 2.5 Flash Lite (OpenCode Zen listing) — findings by Qwen 3.8 Flash

- Source: Google DeepMind via OpenCode Zen listing (`opencode/google-gemini-2.5-flash-lite`; native model `gemini-2.5-flash-lite`)
- Date: 2026‑10‑02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash‑Lite — **OpenCode Zen listing variant**
- **Short description:** This folder tracks the **OpenCode Zen catalog listing** of Gemini 2.5 Flash Lite, which is materially **narrower than the native Google endpoint**: the Zen listing caps context at **128K total** (vs the model's 1M native window) and serves **text‑in / text‑out** only (vs the native model's text+image+file+audio+video). Underlying weights are the same July‑2025 GA budget‑tier model (70ms TTFT #1 of 92, 240 tok/s #5 of 94, $0.10/$0.40 per 1M, cached $0.01). Benchmarks at this listing: GPQA 55.0%, SWE‑V 22.0%, τ² airline 47.3%. Distinct listing from the `gemini-2.5-flash-lite` folder (which scores the native 1M/omni endpoint at 61).
- **Provider / access:** OpenCode Zen `opencode/google-gemini-2.5-flash-lite` (paid; no Free ID on this listing). Native endpoints also exist at Google AI Studio / Vertex / OpenRouter.
- **Release / knowledge:** Preview 2025‑06‑17; GA July 2025; knowledge cutoff Jan 2025 (serenitiesai, re‑verified 2026‑09‑14).
- **IDs:** `opencode/google-gemini-2.5-flash-lite` (Zen); `gemini-2.5-flash-lite` (Google API).
- **Context window:** **128K total** (Zen listing cap; scored tier). Native model 1M in / 66K out — that spec belongs to the sibling `gemini-2.5-flash-lite` folder, not this one.
- **Modalities:** **Text in / text out** on this Zen listing. The native model accepts text+image+file+audio+video, but this ID does not serve them. Reasoning (thinking, off by default on Lite); tool calls; JSON.
- **Pricing (as of 2026‑10‑02):** $0.10 /M in, $0.40 /M out, cached $0.01 — matches serenitiesai provider table across ~20 providers. Cost excluded from Overall.
- **Architecture:** proprietary (Google DeepMind); params undisclosed.

### Raw benchmarks found

> Verified via qualifying `Kimi_K3.md` (serenitiesai aggregation + benchleader + llmboard + whichllmmodel, 2026‑09‑27). Cohort 66.4 heavily inflates Context (85.6) and Multimodal (69) — those raters scored the native model's 1M+omni capabilities, not this Zen listing's 128K/text‑only service. Kimi scores the actual listing at Overall 46.

Agent / tool use:

- τ²‑bench Airline: **47.3%** (OpenRouter‑measured, 75th of 93)
- Terminal‑Bench / τ³ / GDPval / Claw‑Eval / MCP‑Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **55.0%** (107th of 140)
- MMLU‑Pro: **63.0%**; MATH: **62.0%**; GSM8K: **83.0%**; ARC‑AGI: **14.0%**
- Chatbot Arena ELO: **1230** (62nd of 74)
- HLE / LCR / CritPt / AA Intelligence Index: no verified public score found
- Omniscience Accuracy / Hallucination: no verified public score found

Coding:

- SWE‑bench Verified: **22.0%** (57th of 67)
- LiveCodeBench: **28.0%**; HumanEval+: **70.0%**
- SciCode / Vibe / DeepSWE: no verified public score found

Long context / speed:

- **128K Zen listing cap**; native model is 1M but this ID does not serve it. No MRCR/RULER retrieval evidence at 128K.
- **TTFT 70 ms (#1 of 92), 240 tok/s output (#5 of 94)** — speed is the model's genuine superpower
- BenchLeader Index: **46.7 (#370)**

Multimodal:

- **Zen listing: text in / text out** — no image/audio/video served at this ID. Native model accepts all (would score 75–90 band), but that is a different endpoint.

### Normalized scores (1–100)

> Derived using `model-comparison.md` v4 methodology. Overall = half‑up mean of the five quality dims; Cost excluded. **Scored on the Zen listing's actual served specs (128K / text‑only / GPQA 55%), not the native model's marketing specs.** Cohort's Context 85.6 and Multimodal 69 reflect raters scoring the wrong endpoint — corrected here.

- **Tool use: 52/100.** τ² airline 47.3% is mid‑band with working function calling. No harder agentic evidence (TB 2.1 / τ³ / GDPval all missing). Kimi 55; cohort 61.6 (inflated). −3 for τ² airline being a single sub‑slice rather than a full agentic profile.
- **Reasoning: 55/100.** GPQA 55 is *below* the mid band (which starts ~60 GPQA per methodology); MMLU‑Pro 63 / MATH 62 hover at low‑mid; ARC‑AGI 14 is floor; Arena 1230 confirms entry tier. Kimi 58; −3 for GPQA falling short of the mid‑band anchor.
- **Context window: 55/100.** **128K Zen listing cap** = 100K–200K band (50–64); no retrieval measurement. Kimi 58 (correct band); cohort 85.6 (mis‑scores the native 1M — wrong endpoint). 55 sits in the honest 128K band.
- **Multimodal: 12/100.** **Text in / text out** per the Zen listing. Native model is omni‑input (would score 75–90) but this ID does not serve it. Kimi 15 (correct); cohort 69 (mis‑credits the native model's modalities). Scored 12 at strict text‑only floor.
- **Coding: 42/100.** SWE‑V 22.0% and LCB 28.0% are **firmly entry‑level**; HumanEval+ 70.0% shows only basic syntax competence. Kimi 42; cohort 52.4 (inflated). Match Kimi at 42.
- **Cost efficiency: 97/100.** $0.10 / $0.40 + $0.01 cached + 70 ms TTFT + 240 tok/s is the model's genuine raison d'être — bulk cheap‑fast. Cost excluded from Overall.
- **Overall Score: 43/100.** Mean of Tool 52, Reasoning 55, Context 55, Multimodal 12, Coding 42 = 216/5 = 43.2 → **43**. Best fit: **ultra‑cheap, ultra‑fast bulk classification, translation, and summarization on the Zen listing** — not a reasoning or coding choice. Anyone needing the native 1M window or image/audio/video input should use the sibling `gemini-2.5-flash-lite` endpoint (scored 61 in this repo). Kimi 46 (near match, small uplift from trusting Kimi's τ²/GPQA band reads); cohort 66.4 heavily inflates Context+Multimodal by scoring the wrong endpoint. **The correct score for the Zen listing as served is 43**.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026‑10‑02
- Method: qualifying `Kimi_K3.md` serenitiesai / benchleader / llmboard / whichllmmodel aggregation. Curated `meta.json` is a placeholder template — but its "128K total / Text in/out" happens to correctly describe this **Zen listing** (not the native model). Flagged: (a) this folder is a **distinct serving deployment** of the same underlying weights — the 128K/text‑only cap is real and disqualifies it from the native endpoint's scores; (b) cohort 66.4 is heavily contaminated by raters scoring the native model's 1M / omni capabilities against a listing that doesn't offer them; (c) speed (70 ms TTFT, 240 tok/s) is a legitimate virtue but not a quality dim under the v4 methodology.
- Revisit trigger: if OpenCode Zen exposes the native 1M/omni endpoint under this listing ID.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8.md`, using the same headings.
