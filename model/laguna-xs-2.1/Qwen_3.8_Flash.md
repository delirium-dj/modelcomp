# Laguna XS 2.1 — findings by Qwen 3.8 Flash

- Source: Poolside AI (`poolside/laguna-xs-2.1`; HF `poolside/Laguna-XS-2.1`; open weights)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna XS 2.1
- **Short description:** Poolside's smallest Laguna-2.1 coding variant — open weights, 262K context. The standout result is **SWE-bench Verified 70.9%**, which is genuinely impressive for a model at this size class (outperforms many 100B+ peers). But TB 2.0 37.5% and **zero reasoning benchmarks** (no GPQA/HLE/CritPt/AA Index/Omniscience) mean this is a specialist coding tool with an unmeasured general capability profile. Very thin public evaluation sheet overall.
- **Provider / access:** Poolside API; open weights (HF `poolside/Laguna-XS-2.1`); no Zen Free ID.
- **Release / knowledge:** 2026 (exact date not verified); cutoff not verified.
- **IDs:** `poolside/laguna-xs-2.1`.
- **Context window:** **262K tokens** (BenchLM); max output not verified.
- **Modalities:** **Text in / text out** (catalog); reasoning yes; tool calls; JSON per serving. No vision/audio evidence.
- **Pricing (as of 2026-10-02):** open weights; Poolside hosted pricing unverified. Cost excluded from Overall.
- **Architecture:** open-weight (Poolside Laguna XS class); params undisclosed.

### Raw benchmarks found

> Verified via qualifying `Kimi_K3.md` (BenchLM scorecard, 2026-09-24). **Benchmark coverage: 4-of-483** — only TB and three SWE rows exist. Zero reasoning/knowledge/long-context/honesty measurements.

Agent / tool use:

- Terminal-Bench 2.0: **37.5%** (BenchLM) — below-mid
- All other agentic rows (GDPval/τ²/MCP/Claw): **no verified public score found**

Reasoning / knowledge:

- GPQA / HLE / CritPt / AA Index / Omniscience / LCR / MMLU-Pro: **zero rows exist**

Coding:

- SWE-bench Verified: **70.9%** (BenchLM) — the standout result
- SWE Multilingual: **63.1%** (BenchLM)
- SWE-bench Pro: **47.6%** (BenchLM) — drops on harder tasks
- LiveCodeBench / SciCode / DeepSWE: **no verified public score found**

Long context:

- 262K window by spec; **zero retrieval measurements**.

Multimodal:

- None — text-only.

### Normalized scores (1–100)

> Derived using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded. Same "zero reasoning evidence" philosophy as the sibling Laguna S 2.1 (scored 59 separately): SWE-V 70.9% proves task-level reasoning exists, but general reasoning breadth is entirely unmeasured.

- **Tool use: 50/100.** TB 37.5% is weak-mid for an agentic model. SWE-V 70.9% implies competent file-editing tool use within the SWE harness. Zero GDPval/τ²/MCP coverage. Kimi 45; slightly above for SWE-proven agency.
- **Reasoning: 50/100.** No direct measurement exists. SWE-V 70.9% requires multi-step logical reasoning about codebases — real but narrow evidence. Kimi's 40 is harsh (underweights the coding-as-reasoning proxy); the cohort's 63 is too generous (assumes unmeasured capability). 50 = honest "unmeasured but implied."
- **Context window: 70/100.** 262K = 200K–500K band (65–84), scored at band-floor-mid given zero retrieval data. Kimi 68.
- **Multimodal: 12/100.** Text-only floor. Kimi 15, cohort 15.8 — all agree.
- **Coding: 72/100.** SWE-V 70.9% is genuinely good — this outperforms many larger models on that benchmark. SWE-Multilingual 63.1% shows cross-language capability. SWE-Pro 47.6% and TB 37.5% drop on harder tasks. No LCB/SciCode anchors cap it. Kimi 68; uplifted to 72 for the SWE-V quality.
- **Cost efficiency: 92/100.** Open weights, very small hosting footprint (presumably sub-10B active). Cost excluded from Overall.
- **Overall Score: 51/100.** Mean of Tool 50, Reasoning 50, Context 70, Multimodal 12, Coding 72 = 254/5 = 50.8 → **51**. Best fit: **minimal-footprint self-hosted SWE coding agents** — SWE-V 70.9% at open-weights small-class is a remarkable value point. **Do not deploy for knowledge-critical, creative-reasoning, or multimodal work** — those capabilities are unmeasured and potentially absent. Between Kimi's 47 (too harsh on the SWE-V evidence) and the cohort's 60.2 (too generous on unmeasured reasoning).

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: qualifying `Kimi_K3.md` BenchLM scorecard (TB/SWE-V/SWE-Multilingual/SWE-Pro). Curated `meta.json` is a placeholder template. Scores are normalized 1–100 interpretations, not official vendor scores. Flagged: (a) **4-of-483 benchmark coverage** — this model is essentially untracked, (b) SWE-V 70.9% is the sole high-quality evidence, (c) zero reasoning/honesty/knowledge measurements.
- Revisit trigger: mandatory when AA/BenchLM adds GPQA/HLE/SWE-Pro absolute rows or when Poolside publishes a model card with parameters and training details.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
