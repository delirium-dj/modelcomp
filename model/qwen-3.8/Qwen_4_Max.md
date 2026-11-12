# Qwen 3.8 — findings by Qwen 4 Max

- Source: Alibaba (Qwen)/qwen-3.8
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 (the Qwen3.8 generation; its shipped flagship product is **Qwen3.8-Max**)
- **Short description:** **Identity resolution:** "Qwen3.8" is Alibaba's generation name, not a separate SKU — the official announcement URL `qwen.ai/blog?id=qwen3.8` is titled *"Qwen3.8-Max: A New Bar for Coding and Cowork"*, and no standalone `qwen3.8` product exists (verified 2026-11-12: Model Studio page 404, Qwen Cloud model page 404, HF `Qwen/Qwen3.8` unavailable, llm-stats/AA/BenchLM all 404). The generation shipped as: **Qwen3.8-Max** (flagship, Aug 3, 2026 GA after a July 19 WAIC teaser with zero benchmarks), **Qwen3.8-2.4T-A95B** (Max open weights, Aug 8, custom `qwen3.8-max` license — 224 files, ~4.89 TB, + FP8 sibling), **Qwen3.8-27B** (promised week of Aug 10, delayed at first), **Qwen3.8-Flash-Next / qwen3.8-flash** (Aug 26 budget tier), and qwen3.8-omni-flash. This report scores the generation via its flagship Max; quality scores therefore match my `qwen-3.8-max/Qwen_4_Max.md` findings (same shipped model).
- **Provider / access:** Qwen Cloud / Alibaba Cloud Model Studio (`qwen3.8-max`, AA tracks the **0902** refresh), Qwen Studio chat; open weights `Qwen/Qwen3.8-2.4T-A95B` (custom license, not Apache/MIT); official drop-in configs for Claude Code (`ANTHROPIC_MODEL=qwen3.8-max`), Codex, Qoder CLI, Qwen Code, OpenClaw + the **Qwen-MM-Plugins** library for multimodal-native harnesses.
- **Release / knowledge:** Teased 2026-07-19 (WAIC Shanghai, "trails only Fable 5" claim, no benchmarks/pricing); GA **2026-08-03** (~40 vendor benchmark rows, 20 methodology footnotes, 95B-active disclosure); weights **2026-08-08**; AA benchmarks the September **0902** snapshot. Knowledge cutoff not published. `reasoning_effort` **xhigh default** (xhigh/medium/low), `preserve_thinking` on — out-of-box config is benchmark-grade, not cost-grade.
- **IDs:** generation `qwen3.8` = flagship `qwen3.8-max` (hosted) / `Qwen3.8-2.4T-A95B` (weights); siblings qwen3.8-27b, qwen3.8-flash(-next), qwen3.8-omni-flash; predecessor Qwen3.7-Max. Each sibling is scored in its own folder.
- **Context window:** **1M headline** — effective input cap **991K** (983K with extended thinking), output **131,072**, reasoning budget **262,144** (MarkTechPost reading, corroborated by HF card: 262,144 native extensible to 1,010,000; AA measures 984K usable). MRCR v2 256K 8-needle **92.9**, LongBench v2 66.3. Rate limits 2M TPM / 15K RPM.
- **Modalities:** Hosted Max: **text + image in** (AA), text out; vendor launch table also reports video rows (Video-MME 90.4, VideoMMMU 88.7, MLVU 90.8) — video claimed by vendor, not confirmed on AA's spec list (labelled). Open checkpoint: text-only, thinking mandatory. No audio (separate Omni-Flash SKU).
- **Pricing (as of 2026-11-12):** **$2.00 in / $6.00 out per 1M, 88% cache discount** (AA rate card). At launch the $2/$6 figure was **reported, not vendor-listed** (absent from Model Studio's public price page; digitalapplied audit). Reported cache tiers: implicit $0.25, explicit creation $2.50, explicit read $0.17 (least-corroborated). AA cost per Intelligence Index task **$10.02** (150M output tokens) — among the worst task-level economics measured despite cheap per-token rates.
- **Architecture:** MoE **2.4T total / 95B active**, built on the Qwen3.5 foundation: 92 layers, hidden 8192, 23 × (3×(Gated DeltaNet→MoE) + 1×(Gated Attention→MoE)); 512 experts (10 routed + 1 shared), multi-step MTP, vocab 248,320.

### Raw benchmarks found

Vendor table (qwen.ai launch blog / HF card; peers Opus 4.8 / Fable 5 / GPT-5.6 Sol max / Qwen3.7-Max; **multimodal rows peer against Qwen3.7-Plus, not 3.7-Max** — flattering baseline, labelled; generous budgets: TB2.1 5h timeout + 131,072-token output cap, PaperBench 12h/run averaged over 3):

- Wins (vendor margins): OSWorld-V **86.1** (+1.1 vs Fable 5's 85.0), PaperBench **93.0** (+2.5 vs Sol's 90.5), IFBench **82.8** (+3.7 vs Qwen3.7-Max's 79.1), HealthBench 60.2 (best in table)
- Losses (vendor-conceded): TB2.1 **86.6** vs Sol 88.8, RecreationBench **51.7** vs Fable 56.1, SWE-Pro **67.7** vs Fable 80.0 (−12.3), FrontierSWE v1 **73.5** vs Fable 88.8 (−15.3), DeepSWE 1.1 **56.6** vs Sol 73.0 (−16.4; still +35 vs Qwen3.7-Max's 21.6)
- Other rows: GPQA-D **92.6**, HLE **43.6** no-tools / **56.2** w-tools, NL2Repo 55.9, Toolathlon-V 72.5, ALE 27.0/52.4, CoWorkBench 74.8 (in-house), JobBench 53.4, WideSearch 81.9, AndroidWorld 85.3, MMMU-Pro 82.3, CharXiv 88.4/93.5 tools, ScreenSpot-Pro 84.5, OmniDocBench 1.5 92.1, MRCR v2 256K 92.9; in-house arenas: Text 5th / Vision 2nd / Frontend Code 4th (vendor-run)
- Autonomy showcases (vendor-run, partially checkable): **oh-my-cli** 16-day autonomous run (265 commits / 127 PRs / 151 issues, public repo); arXiv paper reproduction in ~125h (7,600 lines, 33 GPU-training rounds) beating the paper's AIME24 method 49.58→**52.29** (+2.71); WWW2025 Tianchi contest ahead of **458/526 human teams** (0.60→0.853, 45 submissions, 24h); in-house E-Commerce Bench 365-day sim ¥100,000→**¥416,252** (4.16×, "38% ahead of GLM 5.2" — heaviest discount, vendor simulation)

Independent runs (flagship Max, 0902 snapshot — reused with attribution from my qwen-3.8-max research):

- AA (v5.0.1): Intelligence Index **34** (#46/74, median 40 — below average), **52.5 min/task**, TTFT **118.58s**, 54 tok/s, 150M index tokens, **$10.02/task**, 984K context
- Vals AI: SWE-bench **85.6**, TB2.1 **67.4** (vs vendor 86.6 — harness gap), LCB 87.9, GPQA-D 93.7, MMLU-Pro 88.6
- Epoch: FrontierMath v2 T1-3 **74.737** / T4 **46.341**; Proximal FrontierSWE **v2 15.8** (≠ vendor v1 73.5); Hermes 36.2/70.5, CWE-bench 45.4, VulcanBench v3 81.2, Bug Hunt 25.7, MazeBench 0; BenchLM aggregate **64.71/100, #34 of 1026**

### Normalized scores (1–100)

- **Tool use: 82/100.** OSWorld-V 86.1, AndroidWorld 85.3, Toolathlon 72.5, WideSearch 81.9, ALE 52.4 — strong vendor agentic-operations cluster; capped by Vals TB2.1 67.4, AutomationBench 27.3, OSWorld 2.0 19.4, MazeBench 0, and AA's below-median index 34.
- **Reasoning: 83/100.** GPQA 92.6 (Vals 93.7 confirms), IFBench 82.8, HealthBench 60.2, FrontierMath v2 T4 46.3; capped by HLE 43.6 no-tools, AA index 34 (v5.0.1, below the 40 median), $OneMillion-Bench 52.5.
- **Context window: 88/100.** 1M-class (984K measured) with MRCR v2 256K 92.9 and 262K reasoning + 131K output budgets; deducted for LongBench v2 66.3, no 1M-depth retrieval row, native-262K extension architecture.
- **Multimodal: 84/100.** Hosted vision with deep vendor suite (MMMU-Pro 82.3, CharXiv 93.5 tools, ScreenSpot-Pro 84.5, OmniDocBench 92.1) + video rows (Video-MME 90.4, MLVU 90.8); capped by zero independent vision verification (AA text+image only), no audio, text-only open checkpoint, and the weaker 3.7-Plus peer baseline on multimodal rows.
- **Coding: 84/100.** SWE-V 85.6 (Vals), SWE-Pro 67.7, PaperBench 93.0, LCB 87.9, TB2.1 86.6 vendor; capped by DeepSWE 56.6, FrontierSWE v2 15.8, Bug Hunt 25.7, Vals TB2.1 67.4 — vendor's own table concedes double-digit repo-scale gaps to Fable 5.
- **Cost efficiency: 72/100.** $2/$6 with 88% cache is cheap per token and weights are open (custom license); but xhigh-default thinking, 150M index tokens, 52.5 min/task, 118.6s TTFT and **$10.02 per AA task** make real-world task economics among the worst measured; launch pricing was reported-not-listed and cache tiers least-corroborated.
- **Overall Score: 84.2/100.** Mean of the five quality dims (82+83+88+84+84)/5 = 84.2 — identical to my qwen-3.8-max score because the generation's shipped flagship is the same model. Best-fit: computer-use/research-workflow agents and Qwen-ecosystem coding with harness-specific validation; the vendor-vs-independent gap (TB2.1 86.6 vs 67.4, index 34, $10.02/task) argues against blind production adoption.

---

## Signature

- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-12
- Method: public internet research (digitalapplied's full launch audit fetched in full — shipped-vs-promised table, footnote analysis, autonomy showcases; qwen.ai announcement title/date via search; orcarouter and frenchcomplianceinstitute coverage via search; flagship data reused with attribution from my own qwen-3.8-max research: HF Qwen3.8-2.4T-A95B card, AA live 0902 page, BenchLM 78-row profile, Vals, Epoch); scores are normalized 1–100 interpretations, not official vendor scores. **Identity resolution:** no standalone `qwen3.8` SKU exists — Model Studio, Qwen Cloud, HF, llm-stats, AA and BenchLM all return 404/unavailable for it; the official blog id `qwen3.8` is the Qwen3.8-Max announcement, so this report scores the generation via its flagship (same scores as my qwen-3.8-max file). Conflicts labelled, never averaged: TB2.1 86.6 (vendor, 5h timeout) vs 67.4 (Vals); FrontierSWE v1 73.5 vs v2 15.8 (different versions); pricing $2/$6 (AA rate card; reported-not-vendor-listed at launch) with cache tiers $0.25/$2.50/$0.17 (least-corroborated); context 1,010,000 (HF) vs 991K/983K (model page) vs 984K (AA); video rows vendor-claimed vs AA text+image; weights promised "week of Aug 10" vs shipped Aug 8; 27B delayed past its promise window; multimodal peer column uses Qwen3.7-Plus (weaker baseline); in-house arenas/E-Commerce Bench flagged vendor-designed. AA index 34 is v5.0.1 — never compared with unstated-version indices. Identity: Qwen3.8 generation ≠ Qwen3.8-27B ≠ Qwen3.8-Flash(-Next) ≠ Omni-Flash ≠ Qwen3.7-Max; the 2.4T-A95B checkpoint has its own folder.
- Reference URLs:
  - [Qwen3.8-Max: A New Bar for Coding and Cowork — Qwen blog (id=qwen3.8)](https://qwen.ai/blog?id=qwen3.8)
  - [Qwen3.8-Max Ships: 2.4T MoE, 95B Active, 1M Context — Digital Applied](https://www.digitalapplied.com/blog/qwen3-8-max-full-release-benchmarks-open-weights)
  - [Qwen3.8-2.4T-A95B model card — Hugging Face](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)
  - [Qwen3.8 Max (0902) — Artificial Analysis](https://artificialanalysis.ai/models/qwen3-8-max)
  - [Qwen3.8 Max benchmark profile — BenchLM](https://benchlm.ai/models/qwen3-8-max)
  - [Qwen3.8-27B Open Weights: Max Shipped, 27B Delayed — OrcaRouter](https://www.orcarouter.ai/blog/qwen-3-8-27b-open-weights-leak)
  - [Qwen 3.8 Max: 2.4T Parameters, Zero Benchmarks (July teaser audit) — French Compliance Institute](https://frenchcomplianceinstitute.com/blogs/news/qwen-3-8-max-zero-benchmarks)
  - [Vals AI — Qwen3.8-Max independent runs](https://www.vals.ai/models/alibaba_qwen3.8-max)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.