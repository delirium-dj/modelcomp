# Qwen3.8 — findings by MiniMax M3.1 Flash

- Source: Alibaba (`qwen3.8-2.4t-a95b` — the open-weight Qwen3.8 flagship release)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 (open-weight release: **Qwen3.8-2.4T-A95B**)
- **Short description:** The open-weights release of Alibaba's Qwen3.8 flagship — "Qwen3.8-2.4T-A95B is the open-source release of Qwen's latest flagship, launched August 2026", and, per the model card, "For the first time, Qwen3.8 brings a Qwen-Max-class model to open release". It is a **text-only, thinking-mandatory** 2.4T/95B-active MoE with a hybrid Gated-DeltaNet/Gated-Attention architecture, and it is the base of the hosted **Qwen3.8-Max** product (which adds vision, non-thinking mode, 1M context by default and built-in tools, and is tracked separately in `model/qwen-3.8-max/`).
- **Provider / access:** Hugging Face `Qwen/Qwen3.8-2.4T-A95B` (self-hosted weights; GitHub `QwenLM/Qwen3.8`); hosted as `qwen3.8-2.4t-a95b` on OpenRouter; Alibaba Cloud Model Studio / QwenCloud as `qwen3.8-max` (the hosted sibling).
- **Release / knowledge:** weights published **2026-08-12** (HF; GitHub news "2026-08-12: Qwen3.8-2.4T-A95B is now available on Hugging Face Hub"). Knowledge cutoff: **not published** (AA `knowledgeCutoffDate: null`).
- **IDs:** `Qwen/Qwen3.8-2.4T-A95B` (HF), `qwen/qwen3.8-2.4t-a95b` (OpenRouter, created 2026-08-12), `qwen3.8-2.4t-a95b` (hosted endpoint, 1M context, max in 991K, max out 131K, TPM 5M, RPM 5K). There is **no** plain `qwen3.8` API id — Alibaba's Model Studio lists only `qwen3.8-max`, `qwen3.8-flash`, `qwen3.8-omni-flash` (+`-realtime`).
- **Context window:** **262,144 natively, extensible to 1,010,000 tokens** ("Context Length: 262,144 natively and extensible up to 1,010,000 tokens"); the hosted endpoint serves 1M.
- **Modalities:** **text only** — "Qwen3.8-2.4T-A95B is a text-only model that requires thinking mode for all interactions." The hosted Max sibling adds vision (and video).
- **Reasoning controls:** `reasoning_effort` = xhigh (default) / medium / low, with `preserve_thinking` on by default; temperature 1.0, top_p 0.95, top_k 20.
- **Architecture:** 2.4T total / **95B activated**, 92 layers, **512 experts** (10 routed + 1 shared), expert intermediate 2048, hidden 8192, vocab 248,320, hybrid **Gated DeltaNet** (128 V / 16 QK heads, dim 128) + **Gated Attention** (64 Q / 4 KV, dim 256), MTP speculative decoding.
- **Pricing (as of 2026-10-19, per 1M tokens):** hosted `qwen3.8-2.4t-a95b` at **$2.00 in / $6.00 out**, implicit cache read $0.25, explicit cache create $2.50, explicit cache read $0.17 (QwenCloud prices the family identically). Self-hosting is free apart from hardware.
- **Licence:** "License: qwen3.8-max" — a **restricted commercial licence**: "If the Software … is Used for any of the licensee's commercial products or services that have more than 100,000,000 monthly active users or US$ 20,000,000 … monthly revenue, respective model name must be prominently displayed"; MaaS / AI-work-assistant revenue above US$50M per 12 months requires a separate licence. Artificial Analysis classifies it as `openSourceCategorization: commercial-license`, Openness Index **27.8/100**.

### Raw benchmarks found

> Alibaba's published table is marked "vendor" and belongs to the **hosted Qwen3.8-Max** product; Artificial Analysis measures the **open base** directly, as do Vals AI and the BenchLM ledger. Both are reported and never merged.

Agent / tool use:

- Terminal-Bench 2.1: **82.02%** (AA, open base) / **86.6%** (vendor, hosted Max) / 73.0% (via BenchLM, open base variant)
- Terminal-Bench 4.0: **11.11%** (AA, open base) / **34.34% ± 3.94** (Vals AI, labelled "Qwen 3.8 Max", open weight) — a 23-point gap between the two artifacts
- Automation-Bench (Pass@1) **27.3%** (vendor) / **57.25%** (AA, open base)
- Toolathlon-Verified **72.5%** (vendor); JobBench **53.4%** (vendor); CoWorkBench 74.8%; SkillsBench 70.2%; WideSearch 81.9%; Agents' Last Exam 27.0% / 52.4% (vendor); APEX-Agents null (AA)
- GDPval-AA **1607.97** (AA, normalized 55.4%) / 1673 (vendor, hosted Max); Tau3-Banking **49.07%** (AA); IFBench null (AA); AA-Briefcase Elo **1435.33** (AA)
- OSWorld 2.0 19.4% / OSWorld-Verified 86.1% (via BenchLM, hosted Max rows); PaperBench 93.0%; QwenReactBench 1724; Claw-Eval / Toolathon (non-Verified): **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **93.54%** (AA, open base) / 92.6% (vendor, hosted Max) / 93.69% (Vals)
- HLE: **42.45%** (AA) / 43.6% (vendor) / 56.2% with tools (vendor)
- CritPt **20.0%** (AA); AA-LCR v1.1 **80.33%** (AA); MLCR-AA **0%** (AA); FrontierMath v2 T1–3 **74.737%** / T4 **46.341%** (Epoch, via BenchLM, hosted Max rows)
- Artificial Analysis Intelligence Index: **40** (#8/121 open-weight models) / 39.95 raw; the hosted 0902 build scores 45 (#33/217) on the full index
- Omniscience index **4.32**, accuracy **31.25%**, hallucination rate **39.18%** (AA) — a low-accuracy profile; MathVision 95.2%, ERQA 77.8%, MLVU 90.8% (hosted rows)

Coding:

- SWE-bench Pro **67.7%** (vendor, hosted Max) / SWE-bench **85.60%** (Vals, "Qwen 3.8 Max"); DeepSWE v1.1 **56.6%** (vendor)
- Terminal-Bench 2.1 82.02% (AA) / 86.6% (vendor); Terminal-Bench 4.0 11.11% (AA) / 34.34% (Vals); LiveCodeBench **87.85%** (Vals)
- NL2Repo-Bench **55.9%** (vendor); FrontierSWE **73.5%** (vendor); SciCode **54.05%** (AA); FrontierCode null (AA); MLS-Bench-Lite 41.0%
- No Vibe Code Bench, CursorBench, ProgramBench or Bug Hunt Bench figure for the open base

Long context:

- MRCR v2 256K **92.9%** (vendor, hosted Max row); LongBench v2 66.3% (vendor); no 512K–1M band, no GraphWalks/RULER figure
- 262,144 native context (extensible to 1,010,000); hosted serving extends it to 1M

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). This report scores the **open-weight Qwen3.8 base** (2.4T-A95B) — the defensible referent of an un-suffixed "Qwen3.8" — and flags where the hosted Qwen3.8-Max differs. Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 78/100.** Terminal-Bench 2.1 82.02% (AA, open base) / 86.6% (hosted Max), Toolathlon-Verified 72.5%, GDPval-AA 1607.97, Tau3-Banking 49.07%, JobBench 53.4%, SkillsBench 70.2%, WideSearch 81.9%, CoWorkBench 74.8%, APEX-Agents null. Capped below 85 by the rubric's anchors (tau3 ~50%+ → 49.07% is just short; GDPval ~1750+ → 1607.97), by Terminal-Bench 4.0 at only 11.11% on the open base, and by Automation-Bench at 27.3% in the vendor's own Pass@1 row.
- **Reasoning: 82/100.** GPQA Diamond 93.54%, AA-LCR 80.33%, FrontierMath v2 74.737% (T1–3), MathVision 95.2%, ERQA 77.8%, IFBench 82.8% (hosted row), and an AA Intelligence Index of **40 (#8 among open-weight models)**. Capped by HLE 42.45%, FrontierMath Tier 4 46.341%, CritPt 20.0%, and by the Omniscience profile — 31.25% accuracy (MLCR-AA is literally 0) despite a comparatively low 39.18% hallucination rate, i.e. the model is often wrong without hedging.
- **Context window: 93/100.** **262,144 tokens natively, extensible to 1,010,000** — the rubric's top tier on the hosted serving, but the *native* window of 262K sits in the 200K–500K band (65–84) and Artificial Analysis measures the model at 262k. MRCR v2 92.9% at 256K is a genuinely strong anchor, but nothing is published beyond 256K. 93 reflects the strong 256K behaviour with the native-window caveat stated.
- **Multimodal: 18/100.** **Text only** — "Qwen3.8-2.4T-A95B is a text-only model" — and Artificial Analysis confirms "The model supports text input, outputs text", with MMMU-Pro **null** (never evaluated) and no vision benchmark in the open-base record. The rubric's text-only band is 10–20, so 18 is the top of that band; note that the **hosted Qwen3.8-Max** — the same weights plus vision, scored separately at Overall 87.6 — reaches 92 on multimodal.
- **Coding: 80/100.** Terminal-Bench 2.1 82.02% (AA) / 86.6% (hosted Max), SWE-bench 85.60% (Vals), LiveCodeBench 87.85%, SWE-bench Pro 67.7% (vendor), SciCode 54.05%, NL2Repo 55.9%, FrontierSWE 73.5%. Capped by DeepSWE 56.6% (well under the rubric's 74% anchor), Terminal-Bench 4.0 at 11.11% on the open base, FrontierCode null, and the absence of Vibe Code Bench, CursorBench and ProgramBench rows for the open release.
- **Cost efficiency: 80/100.** The hosted route prices the family at **$2.00 in / $6.00 out** per 1M with a $0.25 implicit cache read and $2.50 explicit cache create; the rubric's anchors (~$1.25/$4.25 ≈ 88, ~$3/$15 ≈ 60) put $2/$6 at roughly 80. The self-hosted route has no token cost at all, which the score reflects only indirectly (the rubric prices the hosted tier). The deductions are the **$2.16 per Artificial Analysis Index task** — #43 of 43 among open-weight models, the least cost-efficient of the open-weight set, because the model is slow (39.1 t/s) and verbose (170M output tokens on the index) — and the **commercial-licence** display obligations above 100M MAU / $20M monthly revenue.
- **Overall Score: 70.2/100.** (78 + 82 + 93 + 18 + 80) / 5 = 70.2 — best-fit: a **text-only, thinking-mandatory** open-weight frontier model whose strengths (GPQA 93.5%, MRCR 92.9% at 256K, FrontierMath 74.7%, 2.4T/95B MoE) suit long-form reasoning and code generation, but whose modalities are text-only, whose Terminal-Bench 4.0 is 11.11% and whose serving is the slowest and most expensive-per-task in the open-weight class. For a multimodal Qwen3.8, use the hosted Qwen3.8-Max (Overall 87.6, multimodal 92) instead.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **Identity conflict — the "Qwen3.8" family is four different artifacts.** The un-suffixed name maps to the family; the artifacts are the open base `Qwen3.8-2.4T-A95B` (text-only, thinking-mandatory, 262K native), the hosted `qwen3.8-max` (multimodal, 1M, proprietary — scored separately), `qwen3.8-max-0902` (an upgraded snapshot of it) and `qwen3.8-max-prime` (a $4/$12 throughput SKU). This report scores the open base and names the alternatives explicitly.
2. **BenchLM mislabels the model.** Its "Qwen3.8 Max" page is tagged *Open Weight* with the 2.4T-A95B model card, yet all of its scores — including the multimodal rows and MMMU-Pro 82.3 — are sourced from the **hosted** Qwen3.8-Max blog. The open base is text-only. Those multimodal rows are therefore not used here.
3. **Terminal-Bench 4.0 — 11.11% (AA, open base) vs 34.34% ± 3.94 (Vals, "Qwen 3.8 Max", open weight).** A 23-point gap between two artifacts that carry the same name; the AA measurement of the actual open base is used, with the Vals figure listed.
4. **Context — 262K native (HF card, AA) vs 1M (QwenCloud/hosted, OpenRouter).** The native figure governs; the extension is a serving capability.
5. **Release date — 2026-08-12 (weights on HF) vs "released August 3, 2026" (Vals, hosted Max).** Two artifacts, two dates.
6. **Alias mapping** — AA's `qwen3-8-max` slug renders "Qwen3.8 Max (0902)" (2 September 2026), while QwenCloud treats the un-dated `qwen3.8-max` as the pre-0902 flagship. Both are the hosted line; this report does not score them.
7. **QwenCloud lists vision rows (GPQA 92.6, PaperBench 93.0, OSWorld 86.1, BabyVision 82.0) against the open endpoint**, but the card attributes them to the hosted Max and the open base is text-only — those rows are excluded from the multimodal score.
8. **Qwen3.8-27B index** — BenchLM 33.7 vs a Hacker News headline "Qwen3.8 27B scores 52 on Artificial Analysis" (Aug 17) — a re-run/index-version artifact for a *different* model in the family; not used.
9. **Licence.** AA calls the model open-source with an Openness Index of 27.8/100 and a `commercial-license` categorization; the licence text itself imposes name-display and separate-licence conditions — so "open weights" is accurate while "open source" is not, and the score reflects the commercial terms.

### Notes on identity

- The folder slug `qwen-3.8` carries no size or tier suffix. There is **no** `qwen3.8` API id, and the only un-suffixed, publicly downloadable "Qwen3.8" artifact is the 2.4T-A95B open release — which is what this report scores. The hosted `qwen3.8-max` (and its `0902`/`prime` variants) is a **different product** built on the same base weights, with vision, non-thinking support, 1M context by default and built-in tools; it is scored in `model/qwen-3.8-max/`.
- The model's own card states the relationship: "Qwen3.8-Max is the official version based on Qwen3.8-2.4T-A95B with more features, such as vision input & non-thinking support, 1M context length by default, official built-in tools".
- `Qwen3.8-2.4T-A95B` is a **thinking-mandatory** model — there is no non-thinking mode for the open base, unlike the hosted Max.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — the Hugging Face model card for `Qwen/Qwen3.8-2.4T-A95B` (params, experts, layers, attention hybrid, context, licence terms, modality restriction), the GitHub `QwenLM/Qwen3.8` repo, QwenCloud / Alibaba Cloud Model Studio model pages (ids, pricing, snapshots), Artificial Analysis (open-base model page with per-evaluation payload, Openness Index and licence categorization), Vals AI, the BenchLM evidence ledger, OpenRouter, and Hacker News release threads. Vendor-vs-independent conflicts — including the BenchLM mislabelling of hosted rows, the 11.11%-vs-34.34% Terminal-Bench 4.0 gap and the context-window difference — are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8.md`, using the same headings.
