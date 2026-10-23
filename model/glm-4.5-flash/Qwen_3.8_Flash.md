# GLM 4.5 Flash — findings by Qwen 3.8 Flash

- Source: Z.ai / Zhipu **GLM-4.5-Flash** (curated id `opencode/glm-4.5-flash`), cross-checked against the **GLM-4.5 tech report** (arXiv 2508.06471, Tables 3–5 for GLM-4.5-Air), z.ai's GLM-4.5 announcement, and Z.ai/OpenRouter pricing listings
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Identity / variant note:** **GLM-4.5-Flash** is Z.ai's **free-tier serving model of the GLM-4.5-Air weights** — the compact **106B-total / 12B-active MoE** from the GLM-4.5 release (2025-07-28; Flash opened as the zero-cost chat/API lane shortly after). It is *not* the 355B/A32B flagship and *not* a separate architecture; the GLM-4.5 tech report benchmarks the **Air** column, which is exactly what Flash serves. Capability figures below therefore come from the **GLM-4.5-Air** rows of the first-party paper — scored as the same-weights free variant, with the Air↔Flash relationship made explicit rather than silently conflated with the flagship.

## Model card

- **Name:** GLM 4.5 Flash
- **Short description:** Z.ai's **high-speed, free** lightweight MoE — the **GLM-4.5-Air (106B total / 12B active)** weights served at zero cost, built for **agentic tool execution, reasoning and coding** with a **hybrid dual mode** (a "thinking" mode for complex/agentic tasks and a fast non-thinking mode for instant answers). Strong function-calling (τ-bench/BFCL) and a very large max-output make it an unusually capable *free* workhorse, at the cost of a distilled parameter footprint versus the 355B flagship.
- **Provider / access:** **free** on Z.ai chat / OpenCode Zen ("Free on Zen"); API lane also listed; **MIT** open weights for the underlying `zai-org/GLM-4.5-Air`.
- **Release / knowledge:** GLM-4.5 family launched **2025-07-28**; the free **Flash** tier followed as the Air-based zero-cost lane.
- **IDs:** `glm-4.5-flash` (serving) ⇢ weights `GLM-4.5-Air`.
- **Context window:** **128K total / 96K max output** (the 96K output ceiling is the standout spec).
- **Modalities:** **text in / text out** — no image/audio/video in this entry.
- **Pricing (as of 2026-10-23):** **free** (Zen/developer $0.00/$0.00); paid Air hosting listed ≈ **$0.20/$1.10** per M tokens.
- **Architecture:** sparse MoE transformer — **106B total, 12B active**, 45 MoE layers + 1 dense, 128 experts (top-8 + 1 shared), hybrid thinking/non-thinking post-training (expert iteration + RL across agentic/reasoning/coding). MIT licensed.

### Raw benchmarks found

> **Provenance:** **Z.ai first-party**, from the **GLM-4.5 tech report** (arXiv 2508.06471). Numbers below are the **GLM-4.5-Air column** — i.e. the weights Flash serves. A github issue (`zai-org/glm-simple-evals`) notes a SWE-bench *reproduction gap* on Air under some harnesses, so the coding figures carry mild harness sensitivity.

Reasoning / knowledge (Air):

- **AIME 24: 89.4** · **GPQA: 75.0** · **MMLU-Pro: 81.4** · **MATH-500: 98.1** · **HLE: 10.6** · **SciCode: 37.3** · **AA-Index (est., 2025): 64.8**

Agentic / tool (Air):

- **τ-bench Retail: 77.9** · **τ-bench Airline: 60.8** · **BFCL v3 (function calling): 76.4** · agentic avg 55.7

Coding (Air):

- **SWE-bench Verified: 57.6** · **LiveCodeBench (2407-2501): 70.7** · **Terminal-Bench: 30.0**

### Normalized scores (1–100)

- **Tool use: 76/100.** A genuine strength — **τ-bench Retail 77.9** and **BFCL v3 76.4** are close to flagship-class function-calling, and the model is explicitly tuned for agentic tool execution with interleaved thinking. Air's smaller footprint caps it just under the 355B, but this is one of the best *free* tool-callers available.
- **Reasoning: 78/100.** **AIME 24 89.4 / GPQA 75 / MMLU-Pro 81.4** is strong, near-flagship math/science for a 12B-active model; **HLE 10.6** and **SciCode 37.3** mark the headroom ceiling versus frontier reasoners. Solidly upper-mid.
- **Context window: 64/100.** **128K total** is a mid-tier window by 2026 standards, but the **96K max-output** ceiling is unusually generous for long agentic/code generations — decent breadth, modest retrieval proof.
- **Multimodal: 15/100.** **Text-only** in this entry — the structural floor; no image/audio/video lanes.
- **Coding: 62/100.** **SWE-bench Verified 57.6 / LCB 70.7 / Terminal-Bench 30** make it a competent but not frontier coder — respectable for a *free* model, and the meta itself flags "lower headroom on multi-file SWE-bench tasks" versus the flagship.
- **Cost efficiency: 100/100.** The defining virtue: **free** (Zen $0.00/$0.00) with MIT open Air weights — a strong mid-size MoE at essentially zero cost.
- **Overall Score: 59/100.** Half-up mean of the five quality dims (76+78+64+15+62)/5 = 59. Best fit: **free agentic/tool-calling work, long-output generation, and light coding** where Air-grade reasoning (AIME ~89 / GPQA ~75) and top-tier function-calling deliver most of the flagship's ARC utility at no cost. The score is anchored to the **GLM-4.5-Air first-party columns** (the weights Flash serves), and is structurally **dragged by the text-only 15** and the mid **128K window**; treat "Flash" as the zero-cost Air tier, not a capability upgrade over the 355B flagship.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-23
- Method: public internet research — **GLM-4.5 tech report (arXiv 2508.06471)** Tables 3–5 (**GLM-4.5-Air column**: AIME24 89.4, GPQA 75.0, MMLU-Pro 81.4, MATH-500 98.1, HLE 10.6, SciCode 37.3, τ-Retail 77.9 / τ-Airline 60.8, BFCL v3 76.4, SWE-bench Verified 57.6, LCB 70.7, Terminal-Bench 30.0; 106B total / 12B active, MIT, hybrid thinking modes), z.ai's **GLM-4.5 announcement**, and Z.ai/OpenRouter/Big-AGI pricing listings confirming the **free Flash = Air-serving** lane. Curated `meta.json` supplies 128K / text-only / "Free on Zen" and the Air-distillation tradeoff note. Scores are normalized 1–100 interpretations, applied to the **Air weights that Flash actually serves** (never the flattering 355B flagship column); the **text-only 15** is the structural floor and the free cost tier is why Cost = 100. **glm-simple-evals** reports a SWE-bench reproduction gap on Air, so coding is read with mild harness caution. Scored as a real, first-party-benchmarked free variant — not excluded, and not conflated with the separate `glm-4.5` flagship folder.
- Revisit trigger: publication of an **Air-agnostic, Flash-specific** benchmark row (or an Artificial Analysis Intelligence Index row for the exact Flash endpoint), an independent SWE-bench/Terminal-Bench reproduction of the Air figures, or any added multimodal lane.
- Future sources: add a new file next to this one, e.g. `Gemini_4_Argon.md`, using the same headings.
