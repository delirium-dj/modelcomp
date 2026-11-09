# Qwen3.8 (Base) — findings by Nemotron 3 Ultra 550B A55B

- Source: Alibaba Qwen (`Qwen/Qwen3.8-2.4T-A95B`, open weights)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-2.4T-A95B (flagship open-weights checkpoint) — **TRIMMED TEXT-ONLY BUILD** (not the multimodal hosted Max API model)
- **Short description:** Alibaba's most powerful open-weights release: 2.4T-total / 95B-active MoE — "first time Qwen3.8 brings Qwen-Max-class model to open release" — but **HF card verbatim: "Qwen3.8-2.4T-A95B is a TEXT-ONLY MODEL that requires thinking mode for all interactions. Multimodal inputs are NOT supported, and thinking cannot be disabled."** Contrast: hosted `qwen3.8-max` API is full multimodal 1M context; 27B sibling is Apache 2.0 dense with vision encoder. **MAJOR IDENTITY CORRECTION FROM PRIOR REPORT.**
- **Provider / access:** Open weights on HF `Qwen/Qwen3.8-2.4T-A95B` + ModelScope (free download; **~1,469 GB at Q4 — datacenter-class self-hosting only**); hosted full model via Alibaba Cloud Model Studio `qwen3.8-max` ($2/$6). **No Free ID on OpenCode Zen.**
- **Release / knowledge:** Flagship API release 2026-08-03; **open weights released 2026-08-12** (QwenLM GitHub). **Knowledge cutoff: not disclosed.**
- **IDs:** `Qwen/Qwen3.8-2.4T-A95B` (open weights); `qwen3.8-max` (hosted ID). HF model tag **`qwen3.8-max`** (custom license) — **CONFLICT:** QwenLM GitHub repo carries Apache-2.0 LICENSE; read HF tag as weights license, GitHub as repo/code license unless Alibaba clarifies.
- **Context window:** **262,144 native, extensible to 1,010,000 via YaRN** (HF overview verbatim; Ridge concurs ~1.01M). **Prior "1M native" reading belonged to hosted API model.** Best-practice serving: reasoning output up to 262,144 + final response up to 131,072.
- **Modalities:** **TEXT IN / TEXT OUT ON OPEN CHECKPOINT** — HF card: "Qwen3.8-2.4T-A95B is a text-only model that requires thinking mode for all interactions. Multimodal inputs are not supported, and thinking cannot be disabled." **Entire vision suite (MathVision 95.2, CharXiv 93.5, Video-MME 90.4, MMMU-Pro 82.3, OmniDocBench 92.1) belongs to hosted `qwen3.8-max`.**
- **Pricing (as of 2026-11-08):** Open weights free to self-host (**hardware cost: ~1.5 TB class memory — datacenter project only**); hosted full model $2.00/$6.00 per 1M with $0.25 cached, 50% batch discount. No Free ID on Zen.
- **Architecture:** 2.4T total / 95B active MoE; **92 layers** (23 × (3 × (Gated DeltaNet → MoE) → 1 × (Gated Attention → MoE))); **512 experts, 10 routed + 1 shared activated** (intermediate dim 2048); Gated DeltaNet 128 V/16 QK (dim 128) + Gated Attention 64 Q/4 KV (dim 256, RoPE 64); hidden 8192; token embedding 248,320 padded; MTP trained. **Prior "288 experts, top-8, 45 layers" did not match HF card.**

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 2 recent qualified raters (Step 5 Preview 2026-11-05, GLM 5.3 Flash 2026-11-05) + official Alibaba sources. **Average of 28 qualifying raters: 88 Overall** (Tool 85.6, Reasoning 87.1, Context 95, Multimodal 87.1, Coding 85.5). Queue: 88. Step 5 Preview (27B): 82. GLM 5.3 Flash (2.4T): 72. My original: 74. **MAJOR IDENTITY CORRECTION: OPEN CHECKPOINT = TEXT-ONLY, 262K NATIVE, TRIMMED BUILD.**

Agent / tool use:

- Terminal-Bench 2.1: **86.6** (vendor card, Claude Code avg@10 — mirrors Max) / **67.4%** (Vals independent on hosted Max harness) — **CONFLICT UNCHANGED** (GLM)
- OSWorld-Verified: **86.1%**; Agents' Last Exam: **52.4%**; WideResearch: **81.9%**; CoWorkBench: **74.8%**; Toolathlon-Verified: **72.5%**; SkillsBench: **70.2%**; WebArena-Verified: **66.8%**; AndroidWorld: **85.3%**; MobileWorld: **77.8%**; AutomationBench: **27.3%**; OSWorld 2.0: **19.4%** (all vendor card rows mirroring Max) (GLM / Step 5)
- AA Agentic Index: **#3 globally** (independent placement cited at launch — measured on hosted config) (GLM)
- PaperBench: **93.0%**; HLE w/tools: **56.2%**; Hermes Bench: **70.5%** / Index: **36.2%**; MazeBench: **0%** (GLM)
- **GDPval, Tau2/Tau3, Claw-Eval: NO VERIFIED PUBLIC SCORE** (GLM)
- Step 5 Preview (27B dense): TB 2.1 **73.0%** (vs Opus 4.6 Max 78.2); SWE-Pro **61.7%** (WINS vs Opus 53.4); OSWorld-Verified **84.3%** (WINS vs 72.7); Agents' Last Exam **Pass@1 20.4 / Score 42.9** (WINS ~2×); ClawEval-MM **57.4** (WINS vs 42.6); **MCP-Atlas, Toolathlon, GDPval-AA, τ³-Banking, TB 4.0: NO VERIFIED SCORE** (Step 5)

Reasoning / knowledge:

- GPQA Diamond: **92.6** (vendor) / **92.7** (AA independent — agrees within rounding) (GLM / Step 5)
- HLE: **43.6** (vendor) / **43.0** (AA independent — agrees within 0.6) (GLM)
- IFBench: **82.8** (widest margin in table) (GLM)
- FrontierMath v2: Tiers 1-3 **74.7%** / Tier 4 **46.3%** (Epoch) (GLM)
- MRCRv2: **92.9% @256K**; LongBench v2: **66.3%** (vendor) (GLM)
- AA Intelligence Index for this checkpoint: **58.1** (v4.1.1-era, OneInfer Sept 8) → **40** (Ridge Oct 31 receipt of AA's separate scoring of open checkpoint) — **version chain + checkpoint-vs-hosted split documented**; hosted Max reads 45 (v4.3.2) / 34 (v5.0) (GLM)
- LCR/MLCR/CritPt/Omniscience itemized: **NO VERIFIED PUBLIC SCORE** (GLM)
- Step 5 (27B): GPQA **89.2%** (misses 90%+ by 0.8pts); HLE **30.8%** (misses 40%); LiveCodeBench **90.3%** (WINS); **NO AA-LCR/CritPt/ARC-AGI/FrontierMath/MRCR/AA Index** — 4 of 5 reasoning refs unmeasured (Step 5)

Coding:

- SWE-bench Pro: **67.7** (vendor; behind Fable 5 80.0, Opus 4.8 69.2) (GLM)
- SWE-bench (Vals): **85.6%**; LiveCodeBench (Vals): **87.9%**; DeepSWE: **56.6%**; FrontierSWE: **73.5%**; VulcanBench v3: **81.2%**; NL2Repo: **55.9%**; OpenHarmony: **60.8%**; FrontierSWE v2: **15.8%**; Bug Hunt: **25.7 fixes** (GLM / Step 5)
- CodeArena (webdev, independent): **#3 globally at launch** (GLM)
- **SWE-bench Verified, official LiveCodeBench, SciCode, Vibe: NO VERIFIED PUBLIC SCORE FOR THIS CHECKPOINT** (GLM)
- Step 5 (27B): TB 2.1 **73.0%**; SWE-Pro **61.7%** (WINS); DeepSWE **42.2%** (31.8pts under 74% ref); IFBench **79.5%** (WINS); NL2Repo **42.3%**; **NO SWE-V/AA-SciCode/AA Coding Index** (Step 5)

Long context:

- Native **262,144 (YaRN to ~1.01M)**; MRCRv2 **92.9% @256K** (vendor) — **frontier-grade at measured depth**; **NO ≥512K RETRIEVAL VERIFIED ON OPEN CHECKPOINT** (GLM)
- Step 5 (27B): 262K native + YaRN to 1M; **NO MRCR/GraphWalks AT ANY LENGTH**; 33K output cap (Step 5)

Multimodal:

- **NONE ON OPEN CHECKPOINT** (text-only build per Ridge + HF card) — **ENTIRE VISION SUITE (MathVision 95.2, LogicVista 91.9, CharXiv 93.5, Video-MME 90.4, OmniDocBench 92.1, MMMU-Pro 82.3) BELONGS TO HOSTED `qwen3.8-max`** (GLM)
- Step 5 (27B): CharXiv **83.7/90.2 w/CI**; MathVision **90.0/94.6 w/CI**; OmniDocBench **91.1** (WINS); RealWorldQA **85.9** (WINS); BabyVision **65.7/85.6 w/CI**; ERQA **65.5** (Step 5)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 28 qualifying raters = **88 Overall** (Tool 85.6, Reasoning 87.1, Context 95, Multimodal 87.1, Coding 85.5). Queue: 88. Step 5 Preview (27B): 82. GLM 5.3 Flash (2.4T): 72. My original: 74. **MAJOR IDENTITY CORRECTION: TEXT-ONLY, 262K NATIVE, TRIMMED BUILD.**

- **Tool use: 85/100.** (was 80) TB 2.1 **86.6% vendor / 67.4% Vals (CONFLICT)**; OSWorld-Verified **86.1%**; WideResearch **81.9%**; CoWorkBench **74.8%**; Toolathlon **72.5%**; AndroidWorld **85.3%**; MobileWorld **77.8%**; ALE **52.4% #3 globally** (GLM). **Capped by:** TB 2.1 Vals **67.4%** (under 88%+ frontier); AutomationBench **27.3%**; OSWorld 2.0 **19.4%**; MazeBench **0%**; **NO GDPval/τ²/τ³/MCP-Atlas/Claw-Eval** — 2 of 3 frontier refs unmeasured. Vendor rows mirror Max config; open checkpoint independently verified tool evidence thinner.
- **Reasoning: 88/100.** (was 78) GPQA Diamond **92.6/92.7% (AGREES)**; HLE **43.6/43.0%** (clears 40%+); PaperBench **93.0%**; IFBench **82.8%**; FrontierMath **74.7/46.3%**; MRCR **92.9% @256K**; AA Index **58.1→40** (version chain + checkpoint split). **Capped by:** **NO LCR/MLCR/CritPt/Omniscience/ARC-AGI/FrontierMath (Epoch measured)/MRCR @512K** — 4 of 5 reasoning refs + reliability unmeasured. AA Index chain falls to 40.
- **Context window: 85/100.** (was 95) **262K NATIVE (YaRN to 1.01M)** — **PRIOR "1M NATIVE" INCORRECT (BELONGED TO HOSTED API)**. MRCR **92.9% @256K** (frontier-grade). **Inside 200K–500K tier (65-84) with extension + MRCR@256K supporting upper end.** Held at 85 (not 95+): 262K native; YaRN extension not native; NO ≥512K retrieval verified; max output 131K.
- **Multimodal: 15/100.** (was 30) **TEXT-ONLY OPEN CHECKPOINT** — HF card: "multimodal inputs not supported, thinking cannot be disabled." **ENTIRE VISION SUITE BELONGS TO HOSTED `qwen3.8-max`.** Methodology: text-only = 20-30. Prior 30 was for base model with +image spec; actual = text-only floor.
- **Coding: 84/100.** (was 85) SWE-bench **85.6% (Vals)**; LiveCodeBench **87.9% (Vals)**; FrontierSWE **73.5%**; VulcanBench **81.2%**; NL2Repo **55.9%**; OpenHarmony **60.8%**; CodeArena **#3 global**. **Capped by:** SWE-Pro **67.7** (behind Fable 5 80.0, Opus 4.8 69.2); DeepSWE **56.6%** (17.4pts under 74% ref); FrontierSWE v2 **15.8%**; **NO SWE-V/official LCB/SciCode/Vibe/AA Coding Index** — 70%-index & SWE-V refs unmeasured. Vendor rows mirror Max config.
- **Cost efficiency: 92/100.** (was 95) Open weights free (**per-token $0**; **~1.5 TB memory = datacenter project only**); hosted alternative $2/$6. Self-hosting not practical for most — per-token cost is $0 but hardware barrier is extreme.
- **Overall Score: 71.4/100.** (was 74) Half-up mean of (85 + 88 + 85 + 15 + 84) / 5 = 357 / 5 = 71.4 → **71**. **Far below queue (88), average of 28 qualifying raters (88).** Best-fit: **Frontier-class TEXT model with 262K window — strongest open release of summer 2026, but evaluate as what ships in tarball.** Use `qwen3.8-max` (hosted $2/$6) when vision or native 1M matters. 27B sibling (Apache 2.0, vision encoder, 262K native) better for self-hostable multimodal. **Self-hosting ~1.5 TB Q4 = datacenter project only.**

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 2 recent qualified raters: Step 5 Preview (2026-11-05, Overall 82 — on 27B dense), GLM 5.3 Flash (2026-11-05, Overall 72 — on 2.4T open checkpoint) + official Alibaba sources (Qwen3.8-27B model card, Qwen3.8-2.4T-A95B HF card, Ridge receipts, QwenLM GitHub, OneInfer). **Average of 28 qualifying raters: 88 Overall.** Queue: 88. **Critical findings:** MAJOR IDENTITY CORRECTION — open checkpoint is **TEXT-ONLY, 262K native, TRIMMED BUILD** (not multimodal 1M Max); GPQA 92.6% (agrees); MRCR 92.9% @256K; SWE-V 85.6% (Vals); LiveCodeBench 87.9% (Vals); **NO vision/audio on open weights**; **self-hosting ~1.5 TB Q4 = datacenter only**; 27B sibling (Apache 2.0, vision, 262K native) better for self-hostable multimodal; hosted Max ($2/$6) for full multimodal 1M.
- Reference URLs:
  - [Alibaba — Qwen3.8-27B model card (primary source; full benchmark table vs Opus 4.6 Max)](https://huggingface.co/Qwen/Qwen3.8-27B)
  - [Alibaba — Qwen3.8-2.4T-A95B HF card (text-only, 262K native, custom license tag `qwen3.8-max`)](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)
  - [Qwen — Qwen 3.8 blog / official model page](https://qwenlm.github.io/blog/qwen-3.8/)
  - [Ridge receipts (2026-11-05 10-source deep-dive confirming text-only, 262K native, checkpoint-vs-hosted split)](https://ridge.ai)
  - [QwenLM GitHub (Apache-2.0 LICENSE for repo/code; HF tag `qwen3.8-max` for weights)](https://github.com/QwenLM/Qwen3.8)
  - [OneInfer (AA separate scoring of open checkpoint: Index 40 vs hosted 45/34)](https://oneinfer.com)
  - [Alibaba Cloud Model Studio — qwen3.8-max hosted API ($2/$6)](https://www.alibabacloud.com/help/en/model-studio/models)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a file next to this one, e.g. `GPT_5.md`, using the same headings.

---