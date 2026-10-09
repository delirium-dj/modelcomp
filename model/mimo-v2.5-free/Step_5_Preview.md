# MiMo v2.5 (free) — findings by Step 5 Preview

- Source: Xiaomi MiMo (`mimo-v2.5`; free route `xiaomi-mimo-v2.5-free`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo v2.5 (Xiaomi; the `-free` variant is the zero-cost open route of the same weights)
- **Short description:** Xiaomi's April-2026 open-weights omni-modal step — a 310B-parameter sparse MoE (15B active) trained on 48T tokens, with MiMo-V2-Flash's hybrid sliding-window attention plus **in-house visual and audio encoders**, and a 1M-token context. The pitch is Pro-level agentics at half the cost: Claw-Eval 62.3 on the general subset (Pareto frontier), 50% fewer tokens than Muse Spark at the same score, and the in-house MiMo Coding Bench matching MiMo-V2.5-Pro at half the price. Independently: AA Intelligence Index 25.2, TB 2.1 63.7%, GPQA 84.9%, τ²-Telecom 90.6%, SWE-bench 71.0% (Vals), MMMU-Pro 80.0%. The MiMo-V2 series was deprecated 2026-06-30 in favor of V2.5/V2.6.
- **Provider / access:** Open weights (MIT) on Hugging Face; Xiaomi API/AI Studio; the **free route** `xiaomi-mimo-v2.5-free` (e.g., via AIHubMix) is the same model at $0/$0, capped at 5 requests/minute, 100 requests/day and 1M tokens/day per account.
- **Release:** 2026-04-22.
- **Context window:** 1M tokens (262K on some routes).
- **Modalities:** Text, image, video and audio in → text out (native omni-modal perception).
- **Pricing:** free route $0/$0 (rate-limited); paid $0.14/M input, $0.28/M output, $0.0028 cache (GMICloud $0.119/$0.238).

### Raw benchmarks found

Artificial Analysis (via OpenRouter):

- Intelligence Index: **25.2**; Coding Index: **56.8**; Agentic Index: 15.8
- GPQA Diamond: **84.9%**; HLE: **27.2%**; IFBench: 67.1%
- τ²-Bench Telecom: **90.6%**; τ-Bench Banking: 8.7%; GDPval-AA: 25.2%
- AA-LCR: **73.0%**; CritPt: 3.7%; SciCode: 43.9%
- Terminal-Bench 2.1: **63.7%**; Terminal-Bench Hard: 41.7%; Terminal-Bench 4.0: 0.0%
- AA-Omniscience: 16.8% accuracy / 68.1% non-hallucination

Vals AI:

- SWE-bench: **71.0%**; LiveCodeBench: **81.5%**; MMMU-Pro: **80.0%**; MMLU-Pro: 82.9%
- Vibe Code Bench v1.1: 42.2%; LegalBench 78.9%; MedScribe 72.2%; Vals Index 51.6%; Vals Multimodal Index 52.8%

Vendor:

- Claw-Eval general subset: **62.3** (Pareto frontier of performance/efficiency); 50% fewer tokens than Muse Spark at equal Claw-Eval score
- MiMo Coding Bench: matches MiMo-V2.5-Pro at half the cost

Design Arena: 1,148–1,270 Elo across code/3D/dataviz/website/SVG categories.

### Normalized scores (1–100)

- **Tool use: 64/100.** TB 2.1 63.7%, τ²-Telecom 90.6%, Claw-Eval 62.3 (vendor, Pareto-efficiency claim) and OSWorld-class multimodal agency; capped by GDPval 25.2%, τ-Banking 8.7% and AA Agentic Index 15.8 — decent tool use, uneven across domains.
- **Reasoning: 60/100.** GPQA 84.9% and MMLU-Pro 82.9% are solid mid-band; HLE 27.2%, AA Intelligence Index 25.2, CritPt 3.7% and AA-Omniscience 16.8% accuracy mark a mid-tier reasoner for its size.
- **Context window: 82/100.** A 1M-token window is the ≥1M band with AA-LCR 73.0% — good retrieval evidence, short of the ≥98% at 512K+ the top band describes.
- **Multimodal: 88/100.** Text + image + video + audio in → text out is the 90–100 band, held at its bottom: native in-house vision and audio encoders, MMMU-Pro 80.0% and a Vals Multimodal Index of 52.8 — no non-text output.
- **Coding: 66/100.** Mid-upper: SWE-bench 71.0%, TB 2.1 63.7%, LCB 81.5% vs Vibe Code Bench 42.2%, SciCode 43.9% and TB 4.0 0.0%.
- **Cost efficiency: 98/100.** The free route is literally $0/$0 (capped at 100 requests/day); the paid tier at $0.14/$0.28 with $0.0028 cache reads is already near the methodology's ~$0.1/$0.2 ≈ 97–99 tier — the frontier's efficiency story.
- **Overall Score: 72/100.** Best-fit recommendation: the best free omni-modal model in the roster — 1M context, native video/audio perception and Pro-level agentics at zero cost (with rate limits) or $0.14/$0.28; mid-tier reasoning and no TB-4.0-era terminal capability.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Xiaomi MiMo launch pages, Artificial Analysis and Vals AI via OpenRouter, AIHubMix free-route listing, mimo pricing docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_V2_6.md`, using the same headings.
