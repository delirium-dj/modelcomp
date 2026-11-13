# Qwen3.8-Flash-Next — findings by Qwen 4 Max

- Source: Vendor (Alibaba Qwen) + independent trackers; subject slug `qwen-3.8-flash-next`
- Date: 2026-11-13 (UTC)
- See also: [../../model-comparison.md](../../model-comparison.md) · [../../model-findings.md](../../model-findings.md)

## Model card

- **Name:** Qwen3.8-Flash-Next (`Qwen/Qwen3.8-Flash-Next` on HF; GitHub `QwenLM/Qwen3.8-Flash-Next`)
- **Short description:** Experimental open-weight preview of the architecture that will underpin Qwen4 ("On the Design of Qwen3.8-Next Architecture" tech report, Aug 2026): hybrid Gated DeltaNet + **Qwen Sparse Attention** (micro-block selection, 512-block/2048-token budget), **Gated Residual** (data-dependent read gate + per-branch write gate), **n-gram embedding** parameter scaling (20M bigrams/trigrams), Muon+AdamW recipe with refitted scaling laws and no batch-size warmup — "towards ultimate cost-efficiency".
- **Provider/access:** Open weights under **qwen-community-1.0** (commercial use with restrictions); self-host via Transformers/vLLM/SGLang/TokenSpeed/KTransformers; third-party APIs (opper); AA measures an **Alibaba endpoint (1 API provider)**. Production sibling **Qwen3.8-Flash on Qwen Cloud** (1M context default + built-in tools) is a DISTINCT SKU built on this checkpoint.
- **Release/knowledge:** **August 26 2026** (HF publish date + AA FAQ; press dates differ — CellCog Aug 25, DataCamp Aug 27, labelled). Knowledge cutoff not published. Current on AA (no deprecation banner).
- **IDs:** `qwen-3.8-flash-next`; distinct from production Qwen3.8-Flash (Qwen Cloud SKU), Qwen3.8-27B (dense VL), Qwen3.8-Max (2.4T MoE flagship).
- **Context window:** **262,144 native → 1,000,000 via static YaRN (factor 4.0)**; vendor caveat: static YaRN may hurt short-text performance; recommended reasoning budget 262,144 / final response 131,072 within 1M. AA lists 256K (native, rounded). Thinking default on, **xhigh default** (xhigh/medium/low), preserve_thinking on.
- **Modalities:** **Text + image + video in; text out** (vision encoder; video fps=2 default, `longest_edge` 469,762,048 ≈ 224K video tokens for hour-scale video). No audio.
- **Pricing (as of 2026-11-13, per 1M tokens):** AA-measured Alibaba endpoint **$0.15 in / $0.47 out, 89% cache discount (~$0.0165 read), blended $0.0882 (7:2:1), $0.57 per Intelligence Index task**; third-party opper $0.20/$0.50 cache $0.05 (262K) — provider difference labelled. Weights free; official FP8 variant (press-reported ~360GB full precision).
- **Architecture:** **125B LM (6B activated) + 51B n-gram embedding + 4B MTP = 180B total** (AA sums all components — reconciled with HF card); hidden 2560, vocab 248,320; **48 layers = 12×(3×(Gated DeltaNet→MoE) + 1×(QSA→MoE))**; GDN 48V/16QK heads dim 128; QSA 24Q/2KV dim 256 RoPE 64, indexer MQA 4Q/1 shared K dim 128; MoE **512 experts, 10 routed + 1 shared**, intermediate 640; Gated Residual 4 branches, bottleneck rank 320; MTP 1 layer multi-step.

### Raw benchmarks found

Vendor-reported (HF card; peers Qwen3.8-27B / Qwen3.7-Plus / DeepSeek-V4-Flash-0731 / Opus-4.6 Max; **DeepSWE 1.1 = best of Claude Code + mini-SWE-agent harnesses**; SWE-Pro = Claude Code on a REFINED benchmark with baselines re-evaluated; HLE judged by GPT-4o; Vision2Web judged by gpt-5.4 — all labelled):
- DeepSWE 1.1 **58.7** (42.2 / 16.5 / 54.4 / —); SWE-Pro **62.5** (61.7 / 55.8 / 56.0 / 53.4); SWE Multilingual **81.0** (73.8 / 75.8 / — / 77.5); NL2Repo 48.1 (42.3 / 41.1 / **54.2** / 47.6); LiveCodeBench v6 **91.9** (90.3 / 89.6 / 90.6 / 88.8).
- CoWorkBench **73.9** (70.7 / 65.1 / 45.1 / 68.2; in-house); JobBench **55.7** (33.4 / 27.6 / 41.3 / 36.6); ALE pass@1 24.3 / score **51.2** (20.4/42.9; 13.2/33.6; 25.2/—); Toolathlon-V pass@1 **73.5** (67.1 / 50.6 / 70.3 / —).
- IFBench **81.3** (79.5 / 79.1 / 79.2 / 62.5); GPQA-Diamond **91.7** (89.2 / 90.3 / 90.8 / 91.3); HLE 35.9 (30.8 / 34.7 / 33.8 / **40.0**).
- ClawEval-MM **64.4 pass@3 / 60.4 avg** (57.4/56.9; 57.4/60.1; 52.5/54.7); RecreationBench **49.9** (47.1 / 30.2 / —; in-house, 5 platforms); AndroidWorld **84.5** (81.9 / 81.0 / 62.0); OSWorld 2.0 **19.4 binary / 52.3 partial** (19.4/48.0; 2.8/21.5); Vision2Web **64.0** (62.9 / 42.1 / —).
- ERQA **72.3** (65.5 / 69.8 / 40.8); LVBench **76.6** (72.4 / 76.2 / 63.0); RealWorldQA **88.5** (85.9 / 86.9 / 73.9); MathVision **90.6 / 95.7 with Python** (90.0/94.6; 90.3/88.7; 65.5); CharXiv RQ 84.6 / **90.6 with tools** (83.7/90.2; **85.8**/85.9; 66.0).

Independent runs:
- Artificial Analysis (reasoning, live v5.0.1): **Intelligence Index 29 — #9/28 open-large class** (median 24; BenchLM carries 28.6 from an earlier snapshot — labelled); **69 tok/s, TTFT 89.42s (#22/26), 35.8 min/task** (median 14.4 — notably slow), **156M output tokens (very verbose, #24/28)**, $0.57/task. Carried AA rows (BenchLM): GDPval-AA **1,648 / normalized 56.4%**, τ³-Banking **45.4**, TB2.1-AA **86.1**, SciCode 50.6, Coding Index **73.0**, MMMU-Pro **78.6**, LCR **79.7**, CritPt 11.1, AA-GPQA-D **92.3**, AA-HLE **38.0**, Omni **−12.2** (acc 23.5, hallu 46.8).
- ExtractBench (LlamaIndex, Nov 12 2026 snapshot): **89.88**.
- BenchLM aggregate: **54.06/100, #85 of 1033** (40/830 rows, conservative; lists context 262K).

### Normalized scores (1–100)

- **Tool use: 84/100.** Toolathlon-V **73.5**, CoWorkBench **73.9**, JobBench **55.7**, ALE score **51.2**, AndroidWorld **84.5**, GDPval-AA 1,648 (56.4% normalized), τ³-Banking 45.4 — beats every peer column except NL2Repo; capped by OSWorld 2.0 binary **19.4** (weak desktop control) and pass@1 ALE only 24.3.
- **Reasoning: 82/100.** GPQA-D 91.7 vendor / **92.3 AA**, HLE 35.9 vendor / **38.0 AA**, IFBench 81.3, live index 29 (above class median 24); capped by CritPt 11.1, HLE below Opus 4.6 Max 40.0, and **Omni −12.2 (acc 23.5, hallu 46.8%)** — weak knowledge reliability.
- **Context window: 83/100.** 262K native → **1M via static YaRN**, **LCR 79.7** (AA), 262K reasoning + 131K response budgets, QSA micro-block attention built for long-context latency; deducted for the vendor's static-YaRN short-text caveat, AA listing only 256K, and no MRCR evidence.
- **Multimodal: 82/100.** Image+video in with strong rows: MathVision **95.7 w/ Python**, CharXiv **90.6 w/ tools**, RealWorldQA 88.5, ERQA 72.3, LVBench 76.6, ClawEval-MM 64.4, MMMU-Pro 78.6 (AA), ExtractBench 89.88; no audio; OSWorld-style grounded control weak (19.4 binary).
- **Coding: 85/100.** DeepSWE 1.1 **58.7** (> DS-V4-Flash-0731 54.4), SWE-Pro **62.5** (best in table, refined benchmark), SWE-Multilingual **81.0**, LCB v6 **91.9**, TB2.1-AA **86.1**, Coding Index 73.0; capped by NL2Repo 48.1 (< 0731's 54.2) and best-of-two-harnesses DeepSWE methodology.
- **Cost efficiency: 95/100.** **$0.15/$0.47 with 89% cache**, blended $0.0882, **$0.57/task**, 6B active params (ultra-efficient inference), free community-license weights + FP8; deducted for TTFT 89.42s, 35.8 min/task and 156M-token verbosity (#24/28) — cheap per token, slow per task.
- **Overall Score: 83.2/100.** Mean of the five quality dimensions (Cost excluded): (84+82+83+82+85)/5 = 83.2. The open Qwen4-architecture preview lands just below its production sibling Qwen3.8-Flash (83.8 — adds 1M default + built-in tools) and above Qwen3.8-27B (81.4): frontier-adjacent coding/agentic quality at Flash-tier pricing, held back by knowledge hallucination (46.8%), weak desktop control, and very verbose slow tasks.

---

## Signature
- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-13
- Method: public internet research (Qwen HF model card raw README read in full incl. both benchmark tables and YaRN config, Artificial Analysis live page, BenchLM aggregate carrying AA/ExtractBench rows); scores are normalized 1–100 interpretations, not official vendor scores. Conflicts labelled, never averaged: release date (Aug 26 HF/AA vs Aug 25 CellCog vs Aug 27 DataCamp press snippets); parameters (125B LM + 51B n-gram + 4B MTP per HF vs 180B total per AA — AA sums all components, reconciled); context (262,144 native/1M YaRN per HF vs 256K AA listing vs 1M-default production Flash SKU — different configs/SKUs); AA index (29 live v5.0.1 vs 28.6 BenchLM carriage — snapshot difference); pricing ($0.15/$0.47 Alibaba endpoint per AA vs $0.20/$0.50 opper — different providers); DeepSWE 1.1 best-of-two-harnesses and SWE-Pro refined-benchmark re-evaluated baselines (vendor methodology); HLE GPT-4o judge, Vision2Web gpt-5.4 judge; static-YaRN short-text caveat (vendor).
- Reference URLs:
  - [Qwen3.8-Flash-Next — Hugging Face model card](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)
  - [Qwen3.8-Flash-Next: A New Architecture, Towards Ultimate Cost-Efficiency — Qwen blog](https://qwen.ai/blog?id=qwen3.8-flash-next)
  - [QwenLM/Qwen3.8-Flash-Next (tech report) — GitHub](https://github.com/QwenLM/Qwen3.8-Flash-Next)
  - [Qwen3.8-Flash-Next — Artificial Analysis](https://artificialanalysis.ai/models/qwen3-8-flash-next)
  - [Qwen3.8-Flash-Next Benchmark Scores — BenchLM](https://benchlm.ai/models/qwen3-8-flash-next)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.