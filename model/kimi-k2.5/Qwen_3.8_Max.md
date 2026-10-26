# Kimi K2.5 — findings by Qwen 3.8 Max

- Source: Moonshot AI (`kimi-k2.5`)
- Date: 2026-10-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.5
- **Short description:** Moonshot AI's open-weight 1T-total / 32B-active mixture-of-experts model — a native-multimodal (text/image/video) continual-pretraining upgrade of Kimi K2 aimed at visual agentic work, olympiad math, and long-context agent runs. **Deprecated**: superseded by Kimi K2.6 (this dataset's `kimi-k2.6`, my report 56).
- **Provider / access:** OpenCode Zen `opencode/kimi-k2.5` (Chat Completions); open weights published on Hugging Face (Moonshot AI org); also served via Moonshot's own Kimi platform and third-party hosts.
- **Release / knowledge:** Released January 2026 (Jan 27, 2026 per Artificial Analysis); knowledge cutoff not published in the tech report.
- **IDs:** `opencode/kimi-k2.5`; `noFreeId: true` — no free hosted tier on Zen (weights are free to self-host under Modified MIT).
- **Context window:** 262,144 tokens total (256K), 65,536 max output (meta); AA lists 256k (~384 A4 pages). Extended from the Kimi K2 base via YaRN interpolation during mid-training (vendor tech report Table 3).
- **Modalities:** Text, image, video in; text out; reasoning yes (the reasoning variant is AA's default); tool calls supported (agent-swarm harness in vendor evals). AA independently confirms text+image+video input.
- **Pricing (as of 2026-10-26):** $0.60 / $3.00 per 1M in/out on OpenCode Zen, cached input ~$0.08 (83% cache discount per AA). AA flags both input and output as "somewhat expensive" vs open-weight medians ($0.43 / $1.45).
- **Architecture:** 1.04T total / 32B active MoE (384 experts, 8 activated per token, sparsity 48), MuonClip optimizer with QK-Clip for stability; DeepSeek-V3-style MLA backbone with native INT4 quantization; a native-resolution ViT joined to the LLM through ~15T mixed visual+text continual-pretraining tokens. Modified MIT license.

### Raw benchmarks found

> Vendor numbers are from the official Kimi K2.5 tech report (arXiv 2602.02276, Table 4) unless marked; independent numbers from Artificial Analysis (AA) and Vals AI. Deprecated model — AA maintains only the default 10k-token workload.

Independent:

- AA Intelligence Index v4.3.2: **23 (Estimated), #39/121** (median 19 → "above average"; only the 10k workload is still benchmarked post-deprecation).
- Vals AI SWE-bench Verified (bash-tool-only, mini-swe-agent): **85 / 66 / 31 / 0%** across the <15min / 15m–1h / 1–4h / >4h bands — strong on short tasks but **collapses to 0% on >4h long-horizon** work (same shape as sibling Kimi K2.6 at 88/74/40/0).
- AA speed: **90.3 output tok/s** (#38/78, "faster than average" of 85).
- AA cost-per-task / verbosity: **N/A** (not tracked for deprecated models).

Vendor (Kimi K2.5 tech report, Table 4; rival columns marked `*` are Moonshot internal evals):

- Reasoning: AIME 2025 **96.1** (GPT-5.2 100, Gemini 3 Pro 95.0, Opus 4.5 92.8); HMMT 2025 Feb **95.4**; IMO-AnswerBench **81.8**; GPQA-Diamond **87.6**; MMLU-Pro **87.1**; HLE-Full **30.1**, HLE-Full w/ tools **50.2** (beats Opus 4.5 43.2, GPT-5.2 45.5, Gemini 3 Pro 45.8); SimpleQA Verified **36.9** (weak factuality); AdvancedIF **75.6**; LongBench v2 **61.0**.
- Coding: SWE-bench Verified **76.8** (Opus 4.5 80.9, GPT-5.2 80.0, Gemini 3 Pro 76.2); SWE-bench Pro (public) **50.7**; SWE-bench Multilingual **73.0**; Terminal-Bench 2.0 **50.8**; LiveCodeBench v6 **85.0**; SciCode **48.7**; PaperBench (CodeDev) **63.5**; CyberGym **41.3**; OJBench (cpp) **57.4**.
- Agentic / tool use: BrowseComp **60.6** (beats Opus 4.5 37.0, Gemini 3 Pro 37.8), **74.9** w/ context management, **78.4** with Agent Swarm; WideSearch **72.7** (79.0 Agent Swarm); DeepSearchQA **77.1**; FinSearchComp T2&T3 **67.8**; Seal-0 **57.4**; GDPVal-AA **41.0** (weak — GPT-5.2 48.0, Opus 4.5 45.0).
- Image: OCRBench **92.3** (vendor-SOTA), InfoVQA test **92.6** (vendor-SOTA), OmniDocBench 1.5 **88.8** (vendor-SOTA), MMMU val **84.3**, MMMU-Pro **78.5**, MathVision **84.2**, MathVista mini **90.1**, MMVP **87.0**, CharXiv RQ **77.5**, SimpleVQA **71.2**, WorldVQA **46.3**, ZeroBench **9** (11 w/ tools).
- Video: VideoMMMU **86.6**, Video-MME **87.4**, MMVU **80.4**, LongVideoBench **79.8**, MotionBench **70.4**.

> Provenance: vendor Table 4 is self-reported by Moonshot; no independent lab has replicated the multimodal/OCR or Agent-Swarm figures. The AA Index (23-est) and the Vals row (85/66/31/0) are the only neutral anchors, and both are materially more modest than the vendor story.
> Meta discrepancies flagged: (1) meta short claims **"AIME 95.8%"** — tech-report Table 4 says **96.1**; (2) meta short claims **"τ² 95.9%"** — **no τ²-bench row exists** in the tech report (the agentic suite is BrowseComp / WideSearch / DeepSearchQA / FinSearchComp / Seal-0 / GDPVal-AA), so this figure is unverified against the primary source; (3) the "73.0%" SWE-bench sometimes cited is **SWE-bench Multilingual**, not Verified (76.8) or Pro-public (50.7).

### Normalized scores (1–100)

- **Tool use: 80/100.** Vendor agentic browsing is genuinely strong — BrowseComp 60.6 (74.9 w/ ctx mgmt, 78.4 Agent Swarm) beats every proprietary rival listed, plus WideSearch 72.7 and DeepSearchQA 77.1 — but GDPVal-AA is weak (41.0 < GPT-5.2 48) and none of it is independently replicated (AA tracks no agentic sub-score or cost/task for this deprecated model). Capped by vendor-only provenance plus deprecation.
- **Reasoning: 79/100.** Vendor near-frontier on math/science (AIME 96.1, HMMT 95.4, GPQA-Diamond 87.6, HLE-w-tools 50.2 beating Opus 4.5/GPT-5.2/Gemini 3 Pro), but the independent AA Index rebases to **23 (Estimated), #39/121** — only "above average" against a median of 19 — and SimpleQA Verified (36.9) shows weak factuality. The launch-peak-vs-rebased gap and deprecation cap this well below the vendor narrative.
- **Context window: 78/100.** 256K (262,144) native via YaRN, 65,536 out — solid but short by 1M-era standards (the meta's own tradeoff note); maps to the 256K tier.
- **Multimodal: 84/100.** Standout dimension: a true native-multimodal MoE (joint ViT+LLM on ~15T tokens) with AA-confirmed text+image+video input and vendor-SOTA document/OCR (OCRBench 92.3, InfoVQA 92.6, OmniDocBench 88.8) plus strong image (MMMU 84.3, MathVista 90.1) and video (Video-MME 87.4, VideoMMMU 86.6). Held at 84 (not higher) because every multimodal number is vendor-run with no independent replication.
- **Coding: 78/100.** Vendor SWE-bench Verified 76.8 (behind Opus 4.5 80.9 / GPT-5.2 80.0, ahead of Gemini 3 Pro 76.2) and LiveCodeBench v6 85.0 are solid-not-frontier; the independent Vals row **85/66/31/0** confirms real short-task capability but a hard long-horizon collapse to 0% on >4h tasks. Deprecated; capped by that collapse and vendor-only SWE numbers.
- **Cost efficiency: 80/100.** Modified-MIT open weights are free to self-host and the 83% cache discount helps, but hosted pricing ($0.60 / $3.00) is flagged "somewhat expensive" vs open-weight medians, and a 1T-param MoE is a serious local hardware commitment (meta tradeoff) — so the theoretical open-weight cost win is largely impractical. Not counted toward Overall.
- **Overall Score: 80/100.** Mean of Tool 80 + Reasoning 79 + Context 78 + Multimodal 84 + Coding 78 = 399 / 5 = 79.8 → 80. Best fit: an open-weight native-multimodal agent model that was near-frontier at its Jan-2026 launch on vendor math/OCR/browse benchmarks but now deprecated and only mid-pack independently (AA Index 23-est, Vals long-horizon collapse) — prefer the successor Kimi K2.6 unless you specifically need K2.5's weights. **Divergence note:** curated queue 83.4 vs my 80 → **−3.4**; the queue credits launch-peak vendor standing, while I discount for deprecation, the modest rebased independent AA Index, unreplicated multimodal/Agent-Swarm claims, and two unverified meta figures (AIME 95.8 vs 96.1; τ² 95.9 absent from the tech report).

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-26
- Method: public internet research (Artificial Analysis model page for `kimi-k2-5`; official Kimi K2.5 tech report arXiv 2602.02276 Table 4; Vals AI SWE-bench Verified leaderboard; SemiAnalysis architecture notes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
