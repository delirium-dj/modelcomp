# DeepSeek-V4.1-Flash-1017 — findings by Qwen 4 Max

- Source: Vendor (DeepSeek AI) + independent trackers; subject slug `deepseek-v4.1-flash-1017`
- Date: 2026-11-13 (UTC)
- See also: [../../model-comparison.md](../../model-comparison.md) · [../../model-findings.md](../../model-findings.md)

## Model card

- **Name:** DeepSeek-V4.1-Flash-1017 (`deepseek-ai/DeepSeek-V4.1-Flash-1017` on HF / ModelScope)
- **Short description:** Minor update to DeepSeek-V4.1-Flash (Oct 17 checkpoint) — "Wish-Driven Programming Made Real": substantial gains across reasoning, coding, agentic and visual benchmarks with shorter outputs and faster task completion (vendor: Pareto improvement); RL with self-feedback for end-to-end project development (games, 3D modeling, Godot recreations).
- **Provider/access:** DeepSeek website/app/API (OpenAI Chat Completions + Responses, Anthropic Messages via deepseek-recipe); open weights MIT (HF + ModelScope); **26 API providers** (AA). Optimized for DeepSeek Harness ≥v0.2.1-rc.1, Tencent CodeBuddy, WorkBuddy. Search & Fetch APIs $0.75/1K calls (free via server-side tools until Oct 31 2026). No Jinja chat template — Python `encoding.py` reference + Rust deepseek-recipe toolkit.
- **Release/knowledge:** **October 17 2026** (official news + AA + llm-stats). Knowledge cutoff not published. Current on AA (no deprecation banner); it is the successor that deprecated the Sept V4.1-Flash base.
- **IDs:** `deepseek-v4.1-flash-1017`; distinct from DeepSeek-V4.1-Flash (Sept 10 base), DeepSeek-V4-Flash-0731, DeepSeek-V4-Flash-Vision-Exp, DeepSeek-V4-Pro.
- **Context window:** **1M tokens**; recommended `max_tokens` ≥256K (HF card); temp 1.0 / top_p 1.0 recommended.
- **Modalities:** **Text + image in; text out** (AA; HF pipeline image-text-to-text; interleaved image content supported in encoding reference).
- **Pricing (as of 2026-11-13, per 1M tokens):** **$0.30 in / $1.20 out; 98% cache discount ($0.006 read); blended $0.18; $0.60 per Intelligence Index task** (AA, DeepSeek API). Off-peak 50% discount carried from base V4.1-Flash terms.
- **Architecture:** Same as V4.1-Flash base — **552B total / 16B active** MoE (AA), CSA2 KV-cache compression ("Pushing the Limits of KV Cache Compression" tech report), Engram memory module, DSpark speculative decoding; 1017 is a post-training update, not a new architecture.

### Raw benchmarks found

Vendor-reported (1017 HF card; **Claude Code harness for TB4.0, Mini-SWE-V2 for DeepSWE v1.1** — labelled; peer columns K3/GLM-5.3/GPT-5.6 Sol/Opus 5):
- HLE w/o tools **42.6** (text-only subset 44.0†) vs base 36.8 / K3 43.5 / Sol 44.5 / Opus 5 56.3.
- Terminal-Bench 4.0 **42.3** (base 31.2 / K3 12.6 / GLM-5.3 37.9 / Sol 39.9 / Opus 5 51.8).
- DeepSWE v1.1 **77.0** (base 74.2 / K3 67.5 / GLM 66.9 / Sol 73.0 / Opus 74.0 — best in table).
- ProgramBench **29.1** (20.3 / 17.5 / 19.0 / 23.0 / 37.0); NL2Repo **68.2** (65.4 / 58.0 / 58.0 / 56.8 / 75.3).
- AutomationBench v1.0.6 **60.5** (54.8 / 46.7 / 48.8 / 45.8 / 50.3 — best); Agents' Last Exam **35.4** (31.8 / 27.6 / 28.5 / 26.7 / 28.6 — best); ApexBench v1.1 **72.1** (64.6 / 47.8 / 56.6 / 54.3 / 65.8 — best).
- Visual (with tools): Chartography **83.0** (78.9 / 68.1 / – / 79.9 / 84.0), BabyVision **92.5** (89.6 / 85.7 / – / 88.9 / 94.1), ZeroBench-main **51.0** (49.0 / 41.0 / – / 53.0 / 52.0).
- Base-card rows carried by BenchLM (Sept V4.1-Flash, not re-run for 1017): TB2.1 **90.6**, TB3.0 30, CyberGym **88.1**, ExploitGym 15.3, HLE tools **63.9**, GPQA **90.9**, Codeforces **3471**, Apex 65.6.

Independent runs:
- Artificial Analysis (max, live v5.0.1): **Intelligence Index 33 — #2/28 open-large class** (median 24); **158 tok/s, TTFT 43.99s, 14.6 min/task, 174M output tokens (very verbose, #27/28)**, $0.60/task. Base-model AA rows carried by BenchLM (labelled as base runs): LCR **84.0**, CritPt **14.3**, AA-HLE 39.2, GDPval normalized **55.0%**, SciCode 51.9, MMMU-Pro **77.0**, ITBench 46.9, Cyber Index 40.8, CWE-AA 68.3, Deepsec 31.2, CyberGym-E2E 22.9, Omni **−5.3** (acc 46.4, **hallu 96.5%**), historical index 39.5 (older version — never compared to live 33).
- Vals AI: TB2.1 **74.5** (vs vendor 90.6 — harness gap labelled).
- Epoch FrontierMath v2: T1-3 **67.368**, T4 **26.829**. CursorBench 4.0 **47.7**; FrontierCode 2.0 **19.3**; VulcanBench Frontier v4 88.7; ScarfBench 69.0; OpenHarmony v1.0 60.3 / v1.2 71.28; BugHunt 39.1 fixes; ExtractBench 87.11 / ParseBench 64.38 (LlamaIndex Nov 12); CWE v1 55.0 / v2 57.6; STEMBench 2.54; JevBench 1.4 4.77 / 1.5 6.65; MazeBench 1; Design Arena Website 1,296.
- BenchLM aggregate: **64.51/100, #31 of 1033** (68/830 rows, conservative).
- K3.1 Pro launch peer table (vendor Moonshot run): GDPval-AA 1,746, Briefcase 1,570, APEX 69.8, OSWorld 2.1 69.3, AutomationBench-AA 66.6, MMMU-Pro 80.6, CharXiv 77.0, GDP.pdf 17.2, Harvey all-pass 21.0, OfficeQA Pro v2 40.4, ALE 37.7 (vs 35.4 own card — different runs labelled).

### Normalized scores (1–100)

- **Tool use: 86/100.** ApexBench v1.1 **72.1**, ALE **35.4**, AutomationBench **60.5** — all best in the vendor's six-model table (beats Opus 5 / GPT-5.6 Sol / K3); GDPval normalized 55.0%, ITBench 46.9, TB4.0 42.3; capped by CyberGym-E2E 22.9, Deepsec 31.2, and no BrowseComp/τ-bench rows for this checkpoint.
- **Reasoning: 86/100.** HLE 42.6 (≈ K3 43.5), GPQA 90.9 (base), Codeforces 3471, **FM v2 T1-3 67.4 / T4 26.8** (strong frontier math), CritPt 14.3, live index 33 (#2 open-large); capped by **Omni −5.3 with 96.5% hallucination** (worst-tier knowledge reliability) and AA-HLE 39.2.
- **Context window: 85/100.** 1M with **LCR 84.0** (base-run carriage), ≥256K recommended output, flat pricing (no long-context surcharge), KV-cache-compression architecture built for long contexts; deducted for no MRCR/MRCRv2 evidence and 1017-specific retrieval runs not published.
- **Multimodal: 81/100.** Image-in with strong tool-assisted vision: BabyVision **92.5**, Chartography **83.0**, ZeroBench **51.0** (all near Opus 5 / Sol tier), ExtractBench 87.11; MMMU-Pro 77.0 (AA) and ParseBench 64.38 moderate; no audio/video; static vision trails its agentic vision.
- **Coding: 88/100.** DeepSWE v1.1 **77.0** (best in table), TB2.1 90.6 vendor (Vals 74.5 — gap labelled), TB4.0 **42.3** (> Sol 39.9), NL2Repo 68.2, ProgramBench 29.1, CyberGym 88.1, CursorBench 4.0 47.7, OpenHarmony 71.28, BugHunt 39.1; capped by FrontierCode 2.0 **19.3** and TB3.0 30.
- **Cost efficiency: 95/100.** $0.30/$1.20 with **98% cache ($0.006)**, blended $0.18, **$0.60/task**, 158 tok/s; MIT weights + DSpark; deducted for TTFT 43.99s, 14.6 min/task and 174M-token verbosity (#27/28) — vendor's "shorter outputs" claim is vs the base, not vs the class.
- **Overall Score: 85.2/100.** Mean of the five quality dimensions (Cost excluded): (86+86+85+81+88)/5 = 85.2. A genuine Pareto improvement over the Sept base (85.0): every published row improves, agentic benchmarks now beat Opus 5 / GPT-5.6 Sol, and the price is unchanged — the strongest open-weight Flash tier, behind only frontier flagships (Gemini 3.8 Flash 88.4, K3.1 Pro 88.6) among models scored so far; knowledge hallucination (96.5%) remains the glaring weakness.

---

## Signature
- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-13
- Method: public internet research (DeepSeek official news post + HF 1017 model card raw README, Artificial Analysis live max page, BenchLM aggregate carrying AA/Vals/Epoch/Cursor/Cognition/Collinear/LlamaIndex rows, Moonshot K3.1 Pro peer table); scores are normalized 1–100 interpretations, not official vendor scores. Conflicts labelled, never averaged: AA index (33 live v5.0.1 vs 39.5 historical base carriage — different versions); TB2.1 (90.6 vendor base card vs 74.5 Vals); ALE (35.4 own card vs 37.7 K3.1 Pro table); Apex (72.1 v1.1 1017 vs 69.8 K3.1-table APEX vs 65.6 base card — versions/harnesses); HLE (42.6 full vs 44.0 text-only subset†); base-card rows (TB2.1/CyberGym/GPQA/Codeforces) are Sept-base runs carried by BenchLM, not 1017 re-runs; AA per-eval rows (LCR/CritPt/GDPval/MMMU-Pro/Omni) sourced from base AA page; verbosity (vendor "shorter outputs" vs base vs AA 174M very verbose vs class — both true, different baselines).
- Reference URLs:
  - [DeepSeek-V4.1-Flash-1017: Wish-Driven Programming Made Real — DeepSeek API Docs](https://api-docs.deepseek.com/news/news261017/)
  - [DeepSeek-V4.1-Flash-1017 — Hugging Face model card](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017)
  - [DeepSeek V4.1 Flash 1017 (max) — Artificial Analysis](https://artificialanalysis.ai/models/deepseek-v4-1-flash-1017)
  - [DeepSeek V4.1 Flash 1017 Benchmark Scores — BenchLM](https://benchlm.ai/models/deepseek-v4-1-flash-1017)
  - [DeepSeek-V4.1-Flash-1017 — LLM Stats](https://llm-stats.com/models/deepseek-v4.1-flash-1017)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.