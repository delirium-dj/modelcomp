# Gemma 4 31B IT — findings by GLM 5.3 Flash

- Source: Google (`gemma-4-31b-it`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> Re-researched 2026-10-16 (original pass 2026-09-20, enrichment 2026-10-05): the
> BenchLM 2026-10-15 refresh added 26 sourced benchmark rows (Google HF model card,
> Artificial Analysis, SWE-Rebench, React Native Evals, Gert Labs). The prior
> quality-dimension scores rested on almost no raw numbers and are substantially
> recalibrated downward; every dimension now cites measured evidence.

## Model card

- **Name:** Gemma 4 31B IT
- **Short description:** Google's open weights 31B instruction-tuned model — the Gemma 4 family flagship, multimodal (image+text input) with a 256K window per the official model card.
- **Provider / access:** Google open weights (Hugging Face `google/gemma-4-31B-it`); also served via NVIDIA NIM and DeepInfra listings.
- **Release / knowledge:** 2026 (HF model card dated 2026-07-02)
- **IDs:** `google/gemma-4-31b-it`
- **Context window:** 256K tokens (official Hugging Face model card, 2026-07-02; confirmed by BenchLM's 2026-10-15 profile) / long output unspecified.
- **Modalities:** Image + text input, text output (confirmed by the HF model card, NVIDIA NIM, and DeepInfra listings).
- **Pricing (as of 2026-10-16):** Free open weights; no verified hosted per-token price found in consulted sources.
- **Architecture:** open weights, Gemma 4 dense 31B instruction-tuned tier.

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench: **59.9%** (Artificial Analysis)
- GDPval-AA: **Elo 755** / 6.0% normalized (Artificial Analysis) — far below frontier (Gemini 3.7 Flash: 1525)
- AA Agentic Index: **6.7%** (Artificial Analysis)
- Gert Labs: **35.26%** (gertlabs.com rankings)
- Terminal-Bench / MCPAtlas / OSWorld: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **85.7%** (Artificial Analysis) / GPQA **84.3%** (HF blog) — strong
- MMLU-Pro: **85.2%** (Google model card)
- HLE: **26.5%** with tools / **19.5%** without (Google model card); AA-HLE 23.6%
- CritPt: **1.4%** (Artificial Analysis)
- Artificial Analysis Intelligence Index: **14.7** (independent; for scale — Gemini 3.7 Flash 39.1, Nemotron 3.5 Super VL 26.5)
- AA-Omniscience: accuracy **20.0%** / hallucination rate **85.0%** (poor calibration)
- AA-IFBench (instruction following): **75.6%** (Artificial Analysis)

Coding:

- LiveCodeBench v6: **80.0%** (Google HF model card)
- React Native Evals: **75.2%** (rn-evals.vercel.app, independent)
- SWE-Rebench: **41.6%** (swe-rebench.com, independent — decontaminated SWE)
- AA-SciCode: **45.5%** / AA Coding Index: **43.4%** (Artificial Analysis)
- SWE-bench Verified / Pro: no verified public score found

Multimodal:

- MMMU-Pro: **76.9%** (Google model card) / **73.4%** (Artificial Analysis) — solid measured vision

Long context:

- MRCRv2: **66.4%** (Google HF model card); AA-LCR: **69.7%** (Artificial Analysis) — mid-band retrieval at the 256K-class window

### Normalized scores (1–100)

- **Tool use: 55/100.** CHANGED from 86 — the old score had no citations; measured evidence (Tau2 59.9% is the lone decent row; AA Agentic Index 6.7%, GDPval-AA Elo 755, Gert Labs 35.3%) places it mid-band at best.
- **Reasoning: 63/100.** CHANGED from 85 — GPQA 85.7% and MMLU-Pro 85.2% are genuinely strong, but AA Index 14.7, HLE 26.5%, CritPt 1.4% and 85% hallucination rate on Omniscience cap it well below the old guess.
- **Context window: 78/100.** 256K official window with measured mid-band retrieval (MRCRv2 66.4%, AA-LCR 69.7%).
- **Multimodal: 72/100.** CHANGED from 65 — image+text input now backed by measured MMMU-Pro 76.9%/73.4%; no audio/video, text-only output.
- **Coding: 68/100.** CHANGED from 84 — LiveCodeBench v6 80.0% and React Native Evals 75.2% are strong, but SWE-Rebench 41.6%, AA Coding Index 43.4% and no SWE-bench Verified score keep it mid-band; the old score was unsupported.
- **Cost efficiency: 97/100.** Free open weights; no hosted price listed — self-hosting is the intended path.
- **Overall Score: 67/100.** Five-dim mean per `RULES.md` (Cost excluded): (55 + 63 + 78 + 72 + 68) / 5 = 336/5 = 67.2 → 67 (was 81.0). Best fit: a self-hostable 31B with strong single-turn knowledge (GPQA/MMLU-Pro/LCB) but weak agentic and calibration behavior — use for local chat/vision Q&A, not unattended agent loops.

---

## Signature

- Provided by: **GLM 5.3 Flash (zai/glm-5.3-flash)** — 2026-10-16
- Method: public internet research (re-run of the 2026-09-20 + 2026-10-05 passes; BenchLM profile refreshed 2026-10-15 aggregating the Google HF model card, Artificial Analysis, SWE-Rebench, React Native Evals, Gert Labs; no conflicting figures found — the prior pass simply lacked data); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
