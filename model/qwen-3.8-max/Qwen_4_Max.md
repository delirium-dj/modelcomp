# Qwen3.8-Max — findings by Qwen 4 Max

- Source: Alibaba/qwen-3.8-max
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Max (hosted API; open checkpoint `Qwen3.8-2.4T-A95B`)
- **Short description:** Alibaba's first open-release Max-class model (Aug 3, 2026; "A New Bar for Coding and Cowork") — a 2.4T-parameter MoE with 95B active, built on the Qwen3.5 architectural foundation (Gated DeltaNet + Gated Attention hybrid). The hosted **Qwen3.8-Max** adds vision input, non-thinking mode, 1M default context and built-in tools over the text-only thinking-mandatory open checkpoint. Strong vendor coding/cowork table (SWE-Pro 67.7, PaperBench 93.0, OSWorld-V 86.1), but independent runs are far harsher: AA Intelligence Index **34** (below median), Vals TB2.1 67.4 vs vendor 86.6, and the slowest, most verbose frontier-class task execution measured ($10.02/task, 52.5 min/task).
- **Provider / access:** Qwen Cloud / Alibaba Cloud Model Studio (`qwen3.8-max`, upgraded snapshot **0902** per AA), Qwen Studio chat; open weights `Qwen/Qwen3.8-2.4T-A95B` under the custom **Qwen3.8-Max License** (not Apache/MIT), vLLM/SGLang/TokenSpeed recipes. AA classifies the hosted endpoint as proprietary.
- **Release / knowledge:** Original release 2026-08-03 (datanorth; blog citation August 2026); AA benchmarks the **0902** refresh ("Released September 2026") — both labelled. Knowledge cutoff not stated in sources read. Effort: xhigh (default), medium, low; `preserve_thinking` on by default.
- **IDs:** `qwen3.8-max` (hosted) / `Qwen/Qwen3.8-2.4T-A95B` (weights); predecessor Qwen3.7-Max; distinct siblings qwen3.8 (base), qwen3.8-flash, qwen3.8-omni-flash, qwen3.8-27b.
- **Context window:** **262,144 native, extensible to 1,010,000** (HF card); hosted Max 1M default; AA measures **984K** usable. MRCR v2 256K 8-needle **92.9** (vendor), LongBench v2 66.3. Recommended budgets: 262K reasoning + 131K final output.
- **Modalities:** Hosted Max: **text + image in** (AA), text out; vendor table also reports video benchmarks (Video-MME 90.4 w-sub, VideoMMMU 88.7, MLVU 90.8) — video support claimed via launch table, not confirmed on AA's spec list (labelled). Open checkpoint: **text-only, thinking cannot be disabled**. No audio (that is the separate Omni-Flash SKU).
- **Pricing (as of 2026-11-12):** **$2.00 in / $6.00 out per 1M, 88% cache discount** (AA rate card). Cheap per token — but AA cost per Intelligence Index task **$10.02** (150M output tokens, median 72.8M) makes it one of the most expensive models per completed task.
- **Architecture:** MoE **2.4T total / 95B active**; 92 layers, hidden 8192, layout 23 × (3×(Gated DeltaNet→MoE) + 1×(Gated Attention→MoE)); DeltaNet 128 V / 16 QK heads (dim 128), Gated Attention 64 Q / 4 KV (dim 256); **512 experts, 10 routed + 1 shared active**, expert intermediate 2048; multi-step MTP; vocab 248,320.

### Raw benchmarks found

Vendor table (HF card / qwen.ai launch blog; peers Opus 4.8 / Fable 5 / GPT-5.6 Sol max / Qwen3.7-Max; harness footnotes: Claude Code for most coding rows, refined SWE-Pro):

- Coding agent: TB2.1 **86.6** (Sol 88.8, Opus 84.6), SWE-bench Pro **67.7** (Fable 80.0, Opus 69.2), DeepSWE 1.1 **56.6** (Sol 73.0), NL2Repo 55.9, FrontierSWE (v1) **73.5**, MLS-Bench-Lite 41.0, PaperBench **93.0** (best in table), AndroidBench 75.1, in-house QwenSWEBench 80.7 / QwenQoderBench 58.4 / QwenReactBench 1,724 / QwenSVGBench 1,713
- General agent: CoWorkBench 74.8 (in-house), WorkSpaceBench 67.7, JobBench 53.4, SkillsBench 70.2, ALE **27.0 pass / 52.4 score**, AutomationBench 27.3, Toolathlon-V 72.5, WideSearch 81.9, HLE w-tools **56.2**, OSWorld-V **86.1**, OSWorld 2.0 19.4, WebArena-V 66.8, AndroidWorld 85.3, MobileWorld 77.8
- Knowledge/reasoning: GPQA-D **92.6**, HLE **43.6** (no tools), IFBench **82.8** (best in table), $OneMillion-Bench 52.5, HealthBench **60.2** (best), PLawBench 73.2, PRBench-Legal 57.6 / Finance 58.3
- Vision (launch table): MMMU-Pro 82.3, MathVision 95.2/97.7 py, CharXiv 88.4/93.5 tools, ZeroBench 24/49 py, ScreenSpot-Pro 84.5, OmniDocBench 1.5 92.1, OCRBench v2 74.2, Video-MME 90.4, VideoMMMU 88.7, MMVU 82.4, MLVU 90.8, LVBench 81.8, BabyVision 82.0/91.3 py
- Context: MRCR v2 256K **92.9**, LongBench v2 66.3

Independent runs:

- AA (0902 snapshot, v5.0.1): Intelligence Index **34** (#46/74, median 40 — below average), **52.5 min/task** (median 12.7), TTFT **118.58s**, 54 tok/s, 150M index output tokens, cost/task **$10.02**, context 984K
- Vals AI: SWE-bench **85.6**, TB2.1 **67.4** (vs vendor 86.6 — harness gap labelled), LiveCodeBench 87.9, GPQA-D 93.7, MMLU-Pro 88.6
- Epoch: FrontierMath v2 T1-3 **74.737**, T4 **46.341**
- Proximal: FrontierSWE v2 **15.8** (vs vendor v1 73.5 — different benchmark versions)
- Other: Hermes Index 36.2 / Bench 70.5, CWE-bench 45.4, VulcanBench v3 81.2, OpenHarmony 60.8, Bug Hunt 25.7 fixes, ScarfBench 63.7, MazeBench 0; BenchLM aggregate **64.71/100, #34 of 1026** (78/815 coverage)

### Normalized scores (1–100)

- **Tool use: 82/100.** OSWorld-V 86.1, AndroidWorld 85.3, Toolathlon 72.5, WideSearch 81.9 and ALE 52.4 score are genuinely strong vendor results; capped by Vals TB2.1 67.4 (19 points below vendor), AutomationBench 27.3, OSWorld 2.0 19.4, MazeBench 0, and AA's below-median index — independent harnesses do not confirm the vendor's agent claims.
- **Reasoning: 83/100.** GPQA 92.6 (Vals 93.7 confirms), IFBench 82.8, HealthBench 60.2, FrontierMath v2 T4 46.3 (Epoch); capped by HLE 43.6 no-tools, AA Intelligence Index 34 (below the 40 median on v5.0.1), and $OneMillion-Bench 52.5 — solid science knowledge, mid-pack frontier reasoning.
- **Context window: 88/100.** 1M-class window (984K measured) with excellent MRCR v2 256K 92.9 and generous 262K reasoning + 131K output budgets; deducted for LongBench v2 66.3, no published 1M-depth retrieval row, and the native-262K extension architecture.
- **Multimodal: 84/100.** Hosted vision input with a deep vendor vision suite (MMMU-Pro 82.3, CharXiv 93.5, ScreenSpot-Pro 84.5, OmniDocBench 92.1) plus video rows (Video-MME 90.4, MLVU 90.8); capped by zero independent vision verification (AA lists text+image only), no audio, and the open checkpoint being text-only.
- **Coding: 84/100.** SWE-V 85.6 (Vals), SWE-Pro 67.7 (refined, Claude Code harness), PaperBench 93.0, LCB 87.9, TB2.1 86.6 vendor; capped by DeepSWE 56.6, FrontierSWE v2 **15.8**, Bug Hunt 25.7, and the Vals TB2.1 67.4 gap — strong mainstream coding, weak on the newest hard-repo evals.
- **Cost efficiency: 72/100.** $2/$6 with 88% cache discount is cheap per token and weights are open (custom license); but 150M index tokens, 52.5 min/task, 118.6s TTFT and **$10.02 per AA task** — among the worst task-level economics measured — plus xhigh-default thinking make real-world bills far higher than the rate card suggests.
- **Overall Score: 84.2/100.** Mean of the five quality dims (82+83+88+84+84)/5 = 84.2. Best-fit: a capable open-weight-scale coding/cowork workhorse for self-hosters and Qwen-ecosystem teams who can tolerate slow, verbose xhigh runs; the vendor-vs-independent gap (TB2.1 86.6 vs 67.4, index 34) argues for harness-specific validation before production adoption.

---

## Signature

- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-12
- Method: public internet research (Alibaba's full Hugging Face model card for Qwen3.8-2.4T-A95B fetched via raw README, Artificial Analysis' live 0902-snapshot page, BenchLM's 78-row sourced profile, datanorth release coverage via search); scores are normalized 1–100 interpretations, not official vendor scores. Conflicts labelled, never averaged: TB2.1 86.6 (vendor, Claude Code avg@10) vs 67.4 (Vals); FrontierSWE v1 73.5 (vendor) vs v2 15.8 (Proximal) — different versions; release Aug 3 (original) vs Sep 2026 (AA's 0902 refresh); context 1,010,000 (HF) vs 1M (hosted claim) vs 984K (AA measured); modalities text+image (AA) vs video rows in vendor table (unconfirmed independently); open checkpoint text-only/thinking-mandatory vs hosted Max vision+non-thinking — the subject is the hosted Max, architecture facts come from the checkpoint card. AA index 34 is v5.0.1 — never compared with unstated-version indices. In-house benchmarks (QwenSWEBench, QwenQoderBench, QwenReactBench, QwenSVGBench, CoWorkBench) flagged as vendor-designed; vendor peer columns are Alibaba-run (Fable 5 "may involve fallbacks" per footnote). qwen.ai blog is a JS shell — its table was captured via the HF card and BenchLM attribution. Identity: Qwen3.8-Max ≠ qwen3.8 base ≠ Qwen3.8-2.4T-A95B checkpoint folder ≠ Qwen3.7-Max ≠ Omni-Flash.
- Reference URLs:
  - [Qwen3.8-2.4T-A95B model card — Hugging Face](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)
  - [Qwen3.8-Max: A New Bar for Coding and Cowork — Qwen blog](https://qwen.ai/blog?id=qwen3.8)
  - [Qwen3.8 Max (0902) Intelligence, Performance & Price — Artificial Analysis](https://artificialanalysis.ai/models/qwen3-8-max)
  - [Qwen3.8 Max benchmark profile — BenchLM](https://benchlm.ai/models/qwen3-8-max)
  - [Alibaba releases Qwen3.8-Max — DataNorth](https://datanorth.ai/news/alibaba-releases-qwen3-8-max)
  - [Qwen3.8-Max overview — Qwen Cloud](https://www.qwencloud.com/models/qwen3.8-max)
  - [Vals AI — Qwen3.8-Max independent runs](https://www.vals.ai/models/alibaba_qwen3.8-max)
  - [Epoch AI FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.