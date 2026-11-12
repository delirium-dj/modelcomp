# DeepSeek-V4.1-Flash — findings by Qwen 4 Max

- Source: DeepSeek/deepseek-v4.1-flash
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek-V4.1-Flash
- **Short description:** DeepSeek's September 10, 2026 "Smarter, Faster, More Efficient" release — smallest model of a new architecture family with **native visual understanding**: 552B MoE using a **Causal Encoder–Decoder (CED)** design (8B active params for input/prefill, 16B for output/decode) and extreme KV-cache compression (**890 bytes/token**, ~1/4 of V4-Flash HBM, ~1/8 SSD). Vendor: ahead of flagship V4-Pro on performance/cost/speed — **V4-Pro is being phased out** (all `deepseek-v4-pro` requests route to V4.1-Flash at Flash rates from Sept 14 until V4.1-Pro launches). MIT open weights.
- **Provider / access:** DeepSeek API (`deepseek-flash`; `deepseek-v4-flash` / `deepseek-v4-flash-vision-exp` retired and temporarily routed here), chat.deepseek.com, HF `deepseek-ai/DeepSeek-V4.1-Flash` (**MIT**), Together/OpenRouter/deepinfra; partners WorkBuddy/CodeBuddy & OpenCode. **Continuously controllable reasoning effort (integer 1–100)**; AA tracks Max.
- **Release / knowledge:** Released 2026-09-10 (new pricing 04:00 UTC same day). Knowledge cutoff not stated in sources read. Tech report: `DeepSeek_V41_Tech_Report.pdf` in the HF repo. Successor refresh: **V4.1-Flash-1017** (Oct 17 checkpoint — separate queue slug; AA deprecates this base page in its favor).
- **IDs:** `deepseek-flash` (API), HF `deepseek-ai/DeepSeek-V4.1-Flash`; retired siblings V4-Flash, V4-Flash-Vision-Exp; phased-out V4-Pro; refresh V4.1-Flash-1017. No Jinja chat template — official `encoding/` Python reference + `deepseek-recipe` Rust/Python toolkit.
- **Context window:** **1M tokens** (sparse attention trained at 64K, extended to 1M at 34T of 45T pre-training tokens); recommended `max_tokens` ≥256K. AA-LCR **84.0**; base LongBench-V2 45.2. KV compression + **98% cache discount** make long-context agent loops cheap.
- **Modalities:** **Native text + image in, text out** (DeepSeek-ViT vision encoder with 2D-RoPE + 3×3 pixel-unshuffle, 2-layer MLP projector, joint multimodal pre-training from scratch). Instruct MMMU-Pro 77.0 (AA), Chartography w-tools 78.9, BabyVision w-tools 89.6, ZeroBench-main w-tools 49.0; base DocVQA 95.6, CVBench 77.9, RefCOCO 86.0. No video/audio.
- **Pricing (as of 2026-11-12):** **$0.29 in / $1.20 out per 1M** (AA, peak), **98% cache discount**; **off-peak = 50% of peak** (official); llm-stats lists $0.22/$0.66 with $0.007 cached input (snapshot difference labelled); Together $0.30 in. AA cost-per-index-task N/A (base page deprecated for 1017). Performance: **203 tok/s**, TTFT 39.96s (Max).
- **Architecture:** MoE **552B backbone**, CED 40 layers (20 encoder + 20 decoder; decoder global KV projected from encoder final states); **CSA2** sparse attention (Full/Reindex/Reuse modes, Hierarchical Sparse Indexer, FP4 E2M1 KV with E4M3 scales); SWA Bounded Replay; Single-Pass mHC; **Engram conditional memory (196B params, sparse lookup)**; DSpark speculative decoding; 1 shared + 384 routed experts (6 routed active/token); 45T-token multimodal pre-training; SFT→RL→OPD post-training with large-scale agent-task synthesis.

### Raw benchmarks found

Vendor-reported (HF model card, Max effort=100, temp 1.0/top_p 0.95; code agents on DeepSeek Harness Minimal @1M ctx, DeepSWE v1.1 on mini-SWE, SEC-Bench Pro on Claude Code, visual agents on Claude Code @512K; peers Opus-5.0 / GPT-5.6 Sol / K3 / GLM-5.3 / V4-Pro / V4-Flash):

- Agentic: TB2.1 **90.6** (table-best), TB3.0 30.0, TB4.0 **31.2**, HLE w-tools **63.9** (table-best), AutomationBench **54.8**, Agent's Last Exam **31.8**, CyberGym **88.1** (table-best), SEC-Bench Pro 62.8, ExploitGym 15.3
- Coding: DeepSWE v1.1 **74.2** (mini-SWE; scaffold spread: Claude Code 69.8, Codex 65.6, OpenCode 65.5, DSH Minimal 72.6), NL2Repo **64.0**, ProgramBench Almost@1 20.3, Codeforces **3,471**
- Reasoning: GPQA-D **90.9**, HLE no-tools **36.8** (39.1 text-only subset), MathArena Apex **65.6**
- Vision: Chartography w-tools 78.9, BabyVision w-tools 89.6, ZeroBench-main w-tools Pass@5 49.0
- Base-model rows: MMLU-Pro 74.1, SuperGPQA 53.1, SimpleQA-Verified 42.3, BigCodeBench 60.6, HumanEval 79.4, GSM8K 93.0, MATH 61.1, LongBench-V2 45.2, MMMU-Pro 56.5

Independent runs (BenchLM's profile mixes base-card and 1017-card rows — attribution labelled; 1017-only rows excluded from scoring):

- AA (Max): live index **N/A** (deprecated for 1017); BenchLM carries historical **39.5** (version unstated); GDPval-AA normalized **55.0%** (top-tier), AA-HLE **39.2**, AA-LCR **84.0**, CritPt **14.3**, AA-MMMU-Pro **77.0**, AA-SciCode 51.9, ITBench 46.9, Cyber Index 40.8, CWE-Bench-AA 68.3, Deepsec 31.2, CyberGym-E2E 22.9, **Omniscience Index −5.3** (accuracy 46.4, hallucination **96.5%** — worst-class factuality)
- Vals AI: TB2.1 **74.5** (vs vendor 90.6 — large harness gap, labelled)
- Epoch AI: FrontierMath v2 T1-3 **67.368**, Tier 4 **26.829**
- Leaderboards: FrontierCode 2.0 **19.3** (Cognition), CursorBench 4.0 47.7, ScarfBench 69.0, OpenHarmony 60.3, Bug Hunt 39.1 fixes, CWE-bench v1 55.0 / v2 57.6, ExtractBench 87.11 / ParseBench 64.38, MazeBench 1, STEMBench 2.54, JevBench 1.4/1.5 4.77/6.65
- 1017-refresh rows (sibling slug, NOT scored here): TB4.0 42.3, DeepSWE 77.0, NL2Repo 68.2, ProgramBench 29.1, AutomationBench 60.5, ALE 35.4, HLE 42.6, Apex v1.1 72.1, Chartography 83.0, BabyVision w-Python 92.5, ZeroBench w-Python 51.0
- BenchLM aggregate **65.13/100, #32 of 1026** (64/815 coverage; page is the 1017 variant — labelled)

### Normalized scores (1–100)

- **Tool use: 87/100.** TB2.1 90.6 (vendor table-best), HLE w-tools 63.9, GDPval-AA normalized 55.0% (AA — elite), AutomationBench 54.8, ALE 31.8, CyberGym 88.1, SEC-Bench Pro 62.8; capped by Vals TB2.1 74.5, TB3.0 30.0 / TB4.0 31.2, ExploitGym 15.3, CyberGym-E2E 22.9, MazeBench 1.
- **Reasoning: 84/100.** GPQA-D 90.9, Codeforces 3,471, MathArena Apex 65.6, FM v2 T1-3 67.4, HLE w-tools 63.9; heavily capped by **Omniscience −5.3 with 96.5% hallucination rate**, HLE no-tools 36.8, AA-HLE 39.2, FM v2 T4 26.8, CritPt 14.3 — strong problem-solving, very weak factual reliability.
- **Context window: 88/100.** 1M with AA-LCR 84.0, 890 B/token KV (1/4 HBM, 1/8 SSD), 98% cache discount and ≥256K output recommendation — engineered for million-token agent loops; deducted for no MRCR-class deep-retrieval evidence and base LongBench-V2 45.2.
- **Multimodal: 80/100.** Natively multimodal from pre-training (DeepSeek-ViT): MMMU-Pro 77.0 (AA), BabyVision 89.6, Chartography 78.9, ZeroBench 49.0, ExtractBench 87.11, base DocVQA 95.6; capped by image-only input (no video/audio), ParseBench 64.38, and visual-agent rows trailing Opus-5.0.
- **Coding: 86/100.** DeepSWE v1.1 74.2 (table-best, mini-SWE), TB2.1 90.6, NL2Repo 64.0, Codeforces 3,471, SEC-Bench Pro 62.8, Bug Hunt 39.1, ScarfBench 69.0; capped by ProgramBench 20.3, FrontierCode 2.0 **19.3**, CursorBench 4.0 47.7, TB4.0 31.2 — excellent mainstream agentic coding, weakest on the newest hardest-repo evals.
- **Cost efficiency: 95/100.** $0.29/$1.20 peak with **off-peak at 50%**, 98% cache discount, 4x/8x KV compression, 203 tok/s, MIT weights with only 8B/16B asymmetric active params — among the cheapest frontier-adjacent agentic serving anywhere; V4-Pro traffic rerouted here at these rates. Minor deductions: Max-effort TTFT ~40s and llm-stats/AA price snapshot differences.
- **Overall Score: 85.0/100.** Mean of the five quality dims (87+84+88+80+86)/5 = 85.0. Best-fit: high-volume agentic coding, cyber-defense workflows, and long-context document/image pipelines at near-commodity cost — the open-weight value flagship of Sept 2026; avoid for factuality-critical answers (96.5% hallucination rate) and newest hard-repo benchmarks; the 1017 refresh improves most agentic rows.

---

## Signature

- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-12
- Method: public internet research (DeepSeek's official API-docs launch news fetched inline, HF raw README fetched in full with architecture detail and the complete vendor benchmark/scaffold tables, Artificial Analysis' live Max page, BenchLM's 64-row sourced profile, llm-stats/Together rate cards via search); scores are normalized 1–100 interpretations, not official vendor scores. Conflicts labelled, never averaged: **TB2.1 90.6 (vendor DSH Minimal) vs 74.5 (Vals)** — harness gap, scaffold table shows 84.1–90.6 spread; **base vs 1017 checkpoint rows** — BenchLM's page is the 1017 variant and mixes both cards; only base-card rows scored here (TB4.0 31.2 vs 42.3, DeepSWE 74.2 vs 77.0, HLE 36.8 vs 42.6 etc. kept separate); AA index 39.5 historical/version-unstated vs live N/A (deprecated for 1017); pricing $0.29/$1.20 (AA peak) vs $0.22/$0.66 (llm-stats snapshot) vs off-peak 50% (official) — all labelled; HLE 36.8 full vs 39.1 text-only subset (vendor †). Identity: V4.1-Flash ≠ V4.1-Flash-1017 ≠ V4-Flash (retired) ≠ V4-Pro (phased out); TB2.1 ≠ TB3.0 ≠ TB4.0; DeepSWE v1.1 ≠ SWE-bench Verified; CED 8B/16B asymmetric active ≠ single active count.
- Reference URLs:
  - [DeepSeek-V4.1-Flash: Smarter, Faster, More Efficient — DeepSeek API Docs](https://api-docs.deepseek.com/news/news260910/)
  - [DeepSeek-V4.1-Flash model card — Hugging Face](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)
  - [DeepSeek V4.1 Flash (Max) — Artificial Analysis](https://artificialanalysis.ai/models/deepseek-v4-1-flash)
  - [DeepSeek V4.1 Flash benchmark profile — BenchLM](https://benchlm.ai/models/deepseek-v4-1-flash)
  - [DeepSeek-V4.1-Flash — llm-stats](https://llm-stats.com/models/deepseek-v4.1-flash)
  - [DeepSeek V4.1 Flash — Together AI](https://www.together.ai/models/deepseek-v4-1-flash)
  - [Epoch AI FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)
  - [Vals AI — DeepSeek V4.1 Flash independent runs](https://www.vals.ai/models/deepseek_deepseek-v4.1-flash)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.