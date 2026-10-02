# GLM-5.3 — findings by Qwen 3.8 Flash

- Source: Z.AI / GLM-5.3 (`zai/glm-5.3`; open weights `zai-org/GLM-5.3`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3 (flagship)
- **Short description:** Z.AI's flagship open-weight reasoning MoE (family listed ~753B total / ~40B active) — an elite **agentic + coding** model on independent harnesses (BenchLM #26 overall, GDPval-AA 1769, TB 2.1 88.2%, SWE-bench-Vals 95.4%) with a native 1M context, but a **text-only** entry (vision lives in separate GLM-5V variants). Rivals cost 5–10× more on every axis it is strong on.
- **Provider / access:** Z.AI API; open weights on Hugging Face `zai-org/GLM-5.3`; free tier served on OpenCode Zen as `glm-5.3-free` at $0 with a **204K** cap (the paid/Zen lane bills the full model). `meta.json` `noFreeId: true` conflicts with the `glm-5.3-free` Zen entry — flagged below.
- **Release / knowledge:** 2026 (benchleader lists GLM 5.3 max released 2026-08-18); knowledge cutoff not verified.
- **IDs:** `zai/glm-5.3`, `zai-org/GLM-5.3` (weights), `glm-5.3-free` (Zen $0 lane).
- **Context window:** **1M native** (BenchLM / curated `meta.json`); Zen free tier caps at 204K. Matches the curated `meta.json`.
- **Modalities:** **text in / text out** (reasoning, tool calls, JSON mode). Design Arena 1312 is a website-generation Elo, not visual *understanding* — treated as text-prompted generation; vision-understanding models are the separate GLM-5V family.
- **Pricing (as of 2026-10-02):** Zen hosted **$1.40 in / $4.40 out per 1M** (cached read $0.26) per `meta.json`; $0 on the free lane (204K cap); open weights self-hostable. Cost excluded from Overall.
- **Architecture:** open-weight MoE (~753B total / ~40B active per family listing); reasoning-tuned; proprietary-adjacent per-token active routing.

### Raw benchmarks found

> Verified against BenchLM `glm-5.3` (overall **65.55/100, #26 of 507**) and benchleader.com (GLM 5.3 max Index 65.2, #42 of 736), citing Artificial Analysis (GPQA/HLE/LCR/Omniscience/GDPval/τ/Coding Index), Vals AI (SWE-bench/LCB/MMLU-Pro) and CyberGym/Toolathlon harnesses (fetched 2026-09-24/2026-10-02). Cross-checked against the qualifying `Kimi_K3.md` sibling report.

Agent / tool use:

- GDPval-AA (AA): **1,769 Elo (57.3% normalized)**; AA Agentic Index **53.4%**; AA AutomationBench **62.2%**; AA Briefcase 1525
- Terminal-Bench 2.1 **88.2%** (Vals 71.5%); Terminal-Bench 3 **28.3%**; CyberGym **84.5%**; Toolathlon-Verified **73.0%**; τ³-Banking (AA) **50.3%**; HLE w/ tools **62.5%**

Reasoning / knowledge:

- GPQA Diamond (AA): **91.7%** (Vals 88.1%); HLE (AA): **42.3%**; MMLU-Pro (Vals): **86.8%**; AA-LCR **79.7%**; MLCR-AA 48.3%; CritPt **19.1%**; AA Intelligence Index **44.8**
- AA-Omniscience **Accuracy 33.9% / Hallucination 29.6%** — a mild factuality penalty, notably better than the coding-specialist cohorts

Coding:

- SWE-bench (Vals): **95.4%**; LiveCodeBench (Vals): **80.5%**; FrontierSWE **78.1%** (v2 30.2%); DeepSWE **66.9%**; AA-SciCode **59.0%**; AA Coding Index **74.8**; VulcanBench v3 78.3%

Long context / multimodal:

- AA-LCR 79.7% at the 1M window (supportive); no MRCR/RULER ≥98%-at-length retrieval row. Design Arena Website **1312** is the only visual-family row and is generation-only.

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 88/100.** GDPval-AA 1,769 (57.3%) and AA Agentic 53.4% are genuine frontier open-weight agent numbers, corroborated by TB 2.1 88.2%, CyberGym 84.5% and Toolathlon 73.0%; trimmed from the very top by Terminal-Bench 3 28.3% and τ³-Banking 50.3%.
- **Reasoning: 82/100.** GPQA Diamond 91.7%, MMLU-Pro 86.8%, HLE 42.3% (62.5% w/ tools) and AA-LCR 79.7% are strong, and a mild 29.6% hallucination rate is a real plus; capped by CritPt 19.1%, MLCR 48.3% and AA Index 44.8 sitting a notch under the frontier cluster.
- **Context window: 92/100.** 1M native meets the ≥1M tier; AA-LCR 79.7% at length is supportive but there is no ≥98%-at-length MRCR/RULER retrieval measurement → band floor, and note the Zen free lane caps at 204K.
- **Multimodal: 15/100.** This is a **text-only** entry — the "+image/video/audio understanding" bands don't apply; the only visual-family row (Design Arena 1312) is prompt-to-website generation, not grounded visual understanding, so the text-only floor (10–20) is the honest placement. Vision lives in the separate GLM-5V models.
- **Coding: 86/100.** SWE-bench-Vals 95.4%, LiveCodeBench 80.5%, FrontierSWE 78.1%, AA Coding Index 74.8 and SciCode 59.0 are a frontier-grade open-weight coding stack; trimmed from the 90+ ceiling by DeepSWE 66.9% and FrontierSWE v2 30.2%.
- **Cost efficiency: 88/100.** $1.40/$4.40 hosted sits in the ~$1.25/$4.25 → ~88 reference band, a $0 204K Zen lane and self-hostable open weights make effective cost excellent for the capability. Cost excluded from Overall.
- **Overall Score: 73/100.** Mean of Tool 88, Reasoning 82, Context 92, Multimodal 15, Coding 86 = 363/5 = 72.6 → 73. Best fit: the strongest **open-weights agentic-coding flagship for text pipelines** — elite real-harness SWE/LiveCode/GDPval/TB results plus 1M context at aggressive pricing, with only a mild factuality penalty. It is emphatically NOT the pick when you need image/video/audio *understanding* in the same call — that's the separate GLM-5V family, and its text-only 15/100 multimodal is what drags this otherwise-frontier model's Overall down to low-70s. Cohort average (74.5) reflects the same trade-off.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM `glm-5.3` scorecard, overall 65.55 / #26 of 507, citing AA/Vals/CyberGym/Toolathlon; benchleader.com family index; cross-checked against the qualifying `Kimi_K3.md` report and the curated `meta.json`). Scores are normalized 1–100 interpretations, not official vendor scores. Flagged (a) the Design Arena row is generation-only and must not be read as visual understanding (hence text-only multimodal floor), (b) the `meta.json` `noFreeId: true` conflicts with the live `glm-5.3-free` $0 Zen lane (204K cap), and (c) GPQA/HLE/LCR/Omniscience/GDPval are AA-independent while SWE/LCB/MMLU-Pro are Vals-harness.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
