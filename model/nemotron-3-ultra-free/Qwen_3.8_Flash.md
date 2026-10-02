# Nemotron 3 Ultra (Free) — findings by Qwen 3.8 Flash

- Source: NVIDIA / Nemotron 3 Ultra (`opencode/nemotron-3-ultra-free`)
- Date: 2026‑10‑02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Ultra (Free)
- **Short description:** NVIDIA's flagship **open‑weights hybrid Mamba‑MoE** frontier reasoning model — engineered for long‑running text agents. PinchBench 90.0%, τ² 83.3%, τ³ 70.9%, Harvey LAB 81.7%, SWE‑V 71.9%, LiveCodeBench v6 89.0% are all strong. Its signature virtue is a **low Omniscience hallucination rate of 29.7%** (rare at this tier) and an **AA Openness Index of 83.3**. Native 1M context (262K default serve on Zen); effectively text‑only beyond that. Free on Zen / NVIDIA trial + open weights.
- **Provider / access:** OpenCode Zen `opencode/nemotron‑3‑ultra‑free`; NVIDIA trial endpoints; open weights self‑host.
- **Release / knowledge:** 2026 (Nemotron 3 family); exact date and cutoff not independently verified.
- **IDs:** `opencode/nemotron-3-ultra-free` (Free Zen ID).
- **Context window:** **1M native; 262K default serve** (Zen catalog note).
- **Modalities:** **Text in / text out** (catalog: "beyond‑text unverified"). Reasoning yes; tool calls; JSON. Design Arena 1149 is text→website code, not vision input.
- **Pricing (as of 2026‑10‑02):** Free Zen / NVIDIA trial ($0) + open weights → self‑host. Cost excluded from Overall.
- **Architecture:** open‑weights hybrid Mamba‑MoE (per catalog); parameter counts not independently verified.

### Raw benchmarks found

> Verified via qualifying `Kimi_K3.md` (benchlm.ai scorecard, 2026‑09‑24). BenchLM coverage: full AA panel. Cohort 69.7 (raters miscrediting Design Arena into Multimodal 27.4); Kimi floors Multimodal correctly at 15 → Overall 60.

Agent / tool use:

- PinchBench: **90.0%**; Harvey LAB (AA): **81.7%**
- τ²‑bench: **83.3%**; τ³‑bench: **70.9%**
- Terminal‑Bench 2.1: **56.4%** (Vals 50.9%); terminalBenchHard: **36.4%**
- GDPval‑AA: **1091 Elo** (33.1% normalized); BrowseComp: **44.4%**
- AA Agentic Index: **21.7%**

Reasoning / knowledge:

- GPQA Diamond: **87.0%** (AA 86.7%; Vals 86.1%)
- HLE: **26.7%** no‑tools / **37.4%** with tools; AA‑HLE 28.4%
- AA‑LCR: **67.0%**; LongBench v2: **61.9%**; CritPt: **3.1%**
- AA Intelligence Index: **22.9**; AA Openness Index: **83.3**; BenchLM overall 43.3 / #102 of 507
- AA‑Omniscience Accuracy / Hallucination: **21.6% / 29.7%** — low hallucination, low absolute accuracy
- MMLU‑Pro: **86.8%**; MMLU‑ProX: **83.0%**; IFBench: **81.7%**

Coding:

- SWE‑bench Verified: **71.9%**; SWE Multilingual: **67.7%**; SWE‑bench (Vals): **69.0%**
- LiveCodeBench v6: **89.0%**; LiveCodeBench (Vals): **86.0%**
- SciCode: **44.6%**; AA‑SciCode: **40.3%**; AA Coding Index: **49.3**

Long context:

- 1M native window; AA‑LCR 67.0% / LongBench v2 61.9% at scale; no MRCR rows

Multimodal:

- Design Arena Website: **1149 Elo** (text→website code); no vision benchmarks. Effectively text‑only.

### Normalized scores (1–100)

> Derived using `model-comparison.md` v4 methodology. Overall = half‑up mean of the five quality dims; Cost excluded. Kimi's BenchLM evidence base drives the scoring; the Design Arena → Multimodal mis‑crediting visible in the cohort (27.4) is corrected to the text‑only floor.

- **Tool use: 74/100.** PinchBench 90%, τ² 83.3%, τ³ 70.9%, Harvey LAB 81.7% put it firmly in the 2026 upper‑mid tier. TB 2.1 56.4% and AA Agentic 21.7% pull it off the ceiling. Kimi 72; cohort 75.4. 74 is the honest midpoint — real agent capability, real terminal ceiling.
- **Reasoning: 70/100.** GPQA 87% + IFBench 81.7% + low 29.7% hallucination rate are strong, but HLE no‑tools 26.7% (below 40% frontier bar) and CritPt 3.1% are decisive caps; Omniscience accuracy 21.6% is very low even if hallucination‑lean. AA Index 22.9 confirms mid‑tier. Kimi 68; +2 for the low‑hallucination virtue that materially matters in production.
- **Context window: 85/100.** 1M native places it in the ≥1M = 95–100 band, discounted by the 262K default‑serve cap on Zen plus AA‑LCR 67.0% (measured retrieval decay at full window). Kimi 74 (over‑discounts the native 1M hard fact); cohort 91.6 (ignores the 262K serve cap). 85 credits the native window honestly with both caveats respected.
- **Multimodal: 12/100.** **Text‑in / text‑out** per catalog. Design Arena 1149 is text→code, not vision — cohort's 27.4 reflects raters miscrediting it as vision. Kimi 15 (correct); I go to 12 (strict text‑only, no image/audio/video evidence at all).
- **Coding: 74/100.** LiveCodeBench v6 89.0% and SWE‑V 71.9% are top‑quartile for a free model. SciCode 44.6% and AA Coding Index 49.3 pull it off the frontier. Kimi 72; +2 for the LCB v6 standout.
- **Cost efficiency: 100/100.** $0 on Zen/NVIDIA trial + open weights + Openness Index 83.3. Cost excluded from Overall.
- **Overall Score: 63/100.** Mean of Tool 74, Reasoning 70, Context 85, Multimodal 12, Coding 74 = 315/5 = 63.0 → **63**. Best fit: **free long‑horizon text agents and structured‑output workloads** (IFBench / τ³ class) where low hallucination matters. Not for multimodal. Sits above Kimi's 60 (Kimi under‑credits the native 1M band) and below the 69.7 cohort (which over‑credits Design Arena as vision). Honest position: a genuinely strong free text agent that isn't multimodal.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026‑10‑02
- Method: qualifying `Kimi_K3.md` benchlm.ai full panel. Curated `meta.json` correctly flags 1M/262K + "beyond‑text unverified". Flagged: (a) **AA‑Omniscience hallucination 29.7% is genuinely low** for this tier — the standout virtue; (b) Design Arena 1149 is text→code, not vision input — cohort 27.4 Multimodal reflects the recurring methodology error; (c) 1M native vs 262K default serve is a real dual constraint respected in Context scoring.
- Revisit trigger: if NVIDIA exposes the full 1M on Zen default, or ships a Nemotron 3 multimodal variant.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8.md`, using the same headings.
