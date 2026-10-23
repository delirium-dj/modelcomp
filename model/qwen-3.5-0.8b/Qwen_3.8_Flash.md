# Qwen 3.5 0.8b — findings by Qwen 3.8 Flash

- Source: Alibaba **Qwen3.5-0.8B** (curated id `opencode/qwen-3.5-0.8b`), cross-checked against **Artificial Analysis** ("Qwen3.5 small models", 2026-03-05), **llm-stats** `qwen3.5-0.8b`, and the HF `Qwen` organization release
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Identity note (why scored, not excluded):** the curated `meta.json` is **scaffolded** (generic "128K / Standard pricing"), but Qwen3.5-0.8B is a **genuinely released, independently-benchmarked model**: the smallest dense member of the Qwen3.5 small series (0.8B / 2B / 4B / 9B, published ~2026-03-02), tracked by **Artificial Analysis with an Intelligence Index = 9 (Reasoning)** and by llm-stats. That independent row is the load-bearing anchor. The scaffolded "128K / text-only" is **overridden** by AA/Alibaba evidence: **262K** context and **native vision**.

## Model card

- **Name:** Qwen 3.5 0.8b
- **Short description:** The **sub-1-billion-parameter** dense model of the Qwen3.5 small series — an **Apache-2.0, natively multimodal (vision)** edge model with a **262K** context and the family's **unified thinking/non-thinking hybrid**. AA notes it gained **+2.5 points over Qwen3 0.6B (6.5→9)** and that its **MMMU-Pro 25.8% is "notable for a sub-1B model."** Targeted at smartphones / the smallest consumer hardware (**under 2 GB at 4-bit**), it is a classify/extract/autocomplete-tier model, not a general reasoner.
- **Provider / access:** **open weights** (Hugging Face `Qwen/Qwen3.5-0.8B`, **Apache 2.0**); BF16 native, no first-party Int4; effectively **local / on-device** (no serverless API at AA publish-time).
- **Release / knowledge:** Qwen3.5 small series published **~2026-03-02/05**, alongside the larger Qwen3.5 line.
- **IDs:** `Qwen3.5-0.8B`.
- **Context window:** **262,144 (262K) total** (scaffolded "128K" superseded).
- **Modalities:** **text + native vision in / text out** (image understanding) — above the text-only floor.
- **Pricing (as of 2026-10-23):** **free** open weights (self-host; <2 GB at 4-bit). No hosted-API price established.
- **Architecture:** dense transformer (0.8B), unified thinking/non-thinking hybrid, native vision encoder, 262K context — the smallest of the Qwen3.5 dense family.

### Raw benchmarks found

> **Provenance:** **Artificial Analysis first-party independent evaluation** (Reasoning mode) plus family multimodal data — an **independent** anchor, not vendor self-report.

- **Artificial Analysis Intelligence Index (Reasoning): 9** — "+2.5 over Qwen3 0.6B (6.5)"; the lowest of the four small Qwen3.5 models (0.8B=9, 2B=16, 4B=27, 9B=32).
- **MMMU-Pro (multimodal reasoning): 25.8%** — AA flags this as "notable for a sub-1B model," though still weak in absolute terms.
- **Efficiency caveat:** used **~230M output tokens** to run the Intelligence Index — very high relative to its size (heavy overthinking).
- **Factuality caveat:** the series has high hallucination rates (4B/9B at 80-82%); a 0.8B is expected worse on AA-Omniscience.
- No dedicated SWE-bench / GPQA / AIME row published for the 0.8B at AA publish-time.

### Normalized scores (1–100)

- **Tool use: 40/100.** At 0.8B, reliable multi-step function-calling/agentic work is beyond it; usable only for the simplest single-shot tool glue. Low, edge-classify tier.
- **Reasoning: 44/100.** **AA Intelligence Index 9** is the honest signal — top-of-class *for sub-1B* (beats Qwen3 0.6B) but very low in absolute terms, compounded by AA-noted overthinking and poor factuality. Low.
- **Context window: 58/100.** **262K is nominally generous** for a 0.8B, but effective long-context utilization at sub-1B scale is minimal — spec-only upside, heavy discount.
- **Multimodal: 42/100.** **Native vision confirmed** lifts it above the text-only floor, and **MMMU-Pro 25.8** is respectable *for a sub-1B*, but absolute visual reasoning is basic.
- **Coding: 40/100.** No coding row; a 0.8B handles only autocomplete / trivial one-liners, not correctness-critical code. Low.
- **Cost efficiency: 100/100.** The defining virtue: **free Apache-2.0 weights under 2 GB at 4-bit**, fully on-device / smartphone-runnable — near-zero cost and private.
- **Overall Score: 44.8/100.** Half-up mean of the five quality dims (40+44+58+42+40)/5 = 44.8. Best fit: **ultra-cheap, private, on-device micro-tasks** — classification, extraction, short rewrites, tiny-model autocomplete, and basic image tagging — where a free sub-1B model is sufficient and latency/footprint matter more than capability. The score leans on a **legitimate independent AA anchor (9)** and confirmed native vision (so Multimodal is above the floor), but is firmly **bottom-of-family**: absolute reasoning, coding and tool depth are all very limited, and AA flags overthinking and hallucination. This is an efficiency/footprint play, not a capability tier.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-23
- Method: public internet research — **Artificial Analysis "Qwen3.5 small models" (2026-03-05)**: **Intelligence Index 9 (Reasoning)** for the 0.8B (+2.5 over Qwen3 0.6B), **MMMU-Pro 25.8%** ("notable for a sub-1B model"), the **~230M-token** Intelligence-Index cost and family **hallucination** caveats, and series-wide **Apache 2.0 / 262K context / native vision / unified thinking / <2 GB at 4-bit**; corroborated by **llm-stats `qwen3.5-0.8b`** and the HF `Qwen` small-series release. The curated `meta.json` is **scaffolded** (generic 128K/text/"Standard pricing") and is **overridden** by AA/Alibaba evidence (262K, native vision, free local). Scores are normalized 1–100 interpretations, **anchored to the independent AA Intelligence Index (9)** while clearly reflecting a **bottom-of-family, footprint-only** tier; **Multimodal scored above the text-only floor** due to confirmed native vision. Kept distinct from sibling folders `qwen-3.5-2b` (AA 16), `qwen-3.5-4b`, `qwen-3.5-9b`, and `qwen-3.5-397b`.
- Revisit trigger: an individual **GPQA / SWE-bench / AIME** row for the 0.8B, a hosted-API listing (adding real pricing), or an AA re-score under a new Intelligence Index version.
- Future sources: add a new file next to this one, e.g. `Gemini_4_Argon.md`, using the same headings.
