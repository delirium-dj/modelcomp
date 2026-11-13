# Qwen3.5-397B-A17B — findings by Qwen 4 Max

- Source: Vendor (Qwen / Alibaba HF card) + independent trackers; subject slug `qwen-3.5-397b`
- Date: 2026-11-13 (UTC)
- See also: [../../model-comparison.md](../../model-comparison.md) · [../../model-findings.md](../../model-findings.md)

## Model card

- **Name:** Qwen3.5-397B-A17B (open-weight checkpoint of the Qwen3.5 "Towards Native Multimodal Agents" generation)
- **Short description:** Apache 2.0 flagship open weights — early-fusion unified vision-language foundation, hybrid Gated DeltaNet + sparse MoE, RL scaled across million-agent environments, 201 languages. Per the vendor note, hosted **Qwen3.5-Plus is this checkpoint plus production features** (1M context by default, official built-in tools, adaptive tool use) — distinct queue slug, scored separately.
- **Provider/access:** Hugging Face `Qwen/Qwen3.5-397B-A17B` (Transformers format; vLLM / SGLang / KTransformers; SGLang/vLLM main-branch builds required at launch). API hosts: AA tracks 4 providers (headline based on Alibaba's API), llm-stats 2 — DeepInfra $0.45/$3.00 (cache $0.22) and Novita $0.60/$3.60. Qwen Chat playground; Model Studio for the hosted Plus variant.
- **Release/knowledge:** February 15, 2026 launch blog / Feb 15 hosted snapshot; AA FAQ and llm-stats list **February 16, 2026** (weights/listing date — one-day difference labelled). Knowledge cutoff not published. Thinking mode by default (temp 0.6 / top_p 0.95 / top_k 20); instruct mode 0.7 / 0.8 / 20 / presence 1.5.
- **IDs:** HF `Qwen/Qwen3.5-397B-A17B`; AA `qwen3-5-397b-a17b` (Reasoning); BenchLM `qwen3-5-397b` (base; Reasoning sibling not computed). Distinct from hosted qwen3.5-plus, Qwen3.5-Flash, and open siblings 122B-A10B / 35B-A3B / 27B.
- **Context window:** **262,144 native, extensible to 1,010,000 via YaRN** (framework config; not default). Vendor advises keeping ≥128K to preserve thinking. No card-level output cap; DeepInfra lists 262.1K in/out, Novita 262.1K in / 64K out (provider caps differ). AA lists 262K; BenchLM's 128K field is wrong (official card wins).
- **Modalities:** text + image + video in, text out (early-fusion VL; card reports video benchmarks). No audio. AA lists text+image.
- **Pricing (as of 2026-11-13, per 1M tokens):** weights free (Apache 2.0, commercial use allowed); self-host ~8-GPU tensor parallel at 262K per vendor quickstart. API: DeepInfra **$0.45 in / $0.22 cached / $3.00 out**; Novita / Alibaba-based AA headline **$0.60 / $3.60** (AA blended $0.90 at 7:2:1). No AA $/task (index not computed live).
- **Architecture:** **397B total / 17B active** MoE; hidden 4096, vocab 248,320 padded; **60 layers = 15×(3×(Gated DeltaNet→MoE) + 1×(Gated Attention→MoE))**; GDN 64V/16QK heads dim 128; GA 32Q/2KV dim 256, RoPE 64; **512 experts, 10 routed + 1 shared**, intermediate 1024; MTP trained multi-step (NEXTN speculative decoding supported); vision encoder with text-only serving option (`--language-model-only`).

### Raw benchmarks found

Vendor-reported (HF card, Feb 2026 launch; peers GPT-5.2 / Claude 4.5 Opus / Gemini-3 Pro / Qwen3-Max-Thinking / K2.5-1T-A32B; vision table swaps in Qwen3-VL-235B):
- Knowledge/reasoning: MMLU-Pro **87.8**, MMLU-Redux 94.9, SuperGPQA 70.4, C-Eval 93.0; GPQA **88.4**, HLE **28.7**, HLE-Verified **37.6** (Qwen-revised dataset); AIME26 **91.3**, HMMT Feb25 94.8 / Nov25 92.7, IMOAnswerBench 80.9; LCB v6 **83.6**; IFEval 92.6, IFBench 76.5, MultiChallenge 67.6; MMMLU 88.5, MMLU-ProX 84.7, NOVA-63 59.1, INCLUDE 85.6, PolyMATH 73.3, WMT24++ 78.9, MAXIFE 88.2.
- Agent/search: BFCL-V4 **72.9**, τ²-Bench **86.7** (airline fixes per Opus 4.5 card), VITA-Bench 49.7, DeepPlanning 34.3, Tool Decathlon 38.3, MCP-Mark **46.1**; HLE w/ tools **48.3**, BrowseComp **69.0 folding / 78.6 discard-all** (vendor footnote), BrowseComp-zh 70.3, WideSearch 74.0 (256K, no management), Seal-0 46.9; OSWorld-Verified **62.2**, AndroidWorld 66.8, ScreenSpot Pro 65.6.
- Coding: SWE-bench Verified **76.4**, SWE Multilingual 69.3, SecCodeBench 68.3, Terminal-Bench 2 **52.5**.
- Long context: **AA-LCR 68.7 (vendor-run)**, LongBench v2 63.2, MMLongBench-Doc 61.5.
- Vision/video: MMMU **85.0**, MMMU-Pro **79.0**, MathVision **88.6** (fixed-prompt protocol), MathVista 90.3, We-Math 87.9, DynaMath 86.3, ZEROBench 12 / 41.0 sub, BabyVision **52.3 w/ CI (43.3 without)**, RealWorldQA 83.9, MMStar 83.8, HallusionBench 71.4, MMBench 93.7, SimpleVQA 67.1, OmniDocBench 1.5 **90.8**, CharXiv RQ **80.8**, CC-OCR 82.0, AI2D 93.9, OCRBench 93.1, ERQA 67.5, CountBench 97.2, RefCOCO 92.3, ODInW13 47.0, EmbSpatial 84.5, RefSpatial 73.6, LingoQA 81.6, V* **95.8 w/ CI (91.1 without)**, Hypersim 12.5, SUNRGBD 38.3, Nuscene 16.0; Video-MME **87.5 w/ sub / 83.7 w/o**, VideoMMMU 84.7, MLVU 86.7, MVBench 77.6, LVBench 75.5, MMVU 75.4; medical SLAKE 79.9 / PMC-VQA 64.2 / MedXpertQA-MM 70.0.

Independent runs and carriages:
- AA live page (Reasoning): **Intelligence Index N/A** (v5.0.1 not computed — "no publicly available API" on index charts); 54 tok/s, TTFT 42.59s (Alibaba API; open-large median 17.52s). AA-run rows carried by BenchLM: **AA-LCR 77.3** (vs vendor-run 68.7 — labelled), GPQA-D 89.3, AA-HLE 29.0, τ² 95.6, IFBench 78.8, MMMU-Pro 77.3, SciCode 44.8, CritPt 1.7, APEX-Agents 15.3.
- AA Index **v4.1, effort 0.99** (Inkling-Small launch table — older version, never compared to live v5.0.1): index **34**, SWE-V 76.4, SWE-Pro 50.9, TB2.1 51.3, SciCode 42.0, GDPval v2 **962**, MCP Atlas **74.2**, τ³ **13.4**, BrowseComp 78.6, Toolathlon 40.7, HLE 27.3/48.3, AIME26 93.3, HMMT 87.9, SimpleQA 26.0, **Omni −29.8**, GMMLU-Lite 90.0; FORTRESS 77.3/95.4, StrongREJECT 99.4.
- Qwen3.6-Plus blog comparison column (vendor, later harness): τ³ **68.4** (vs AA 13.4 — labelled), MCP-Tasks 74.2, MCP Atlas 46.1 (vs AA 74.2 — labelled), VITA 43.7, DeepPlanning 37.6, Toolathlon 36.3, QwenClawBench 51.8, WideResearch 74.0, SWE-V 76.2, NL2Repo 32.2 (Qwen3.6-27B card), AI-Needle 68.7, HMMT Feb26 87.9, MMAnswerBench 80.9.
- Other independents: Claw-Eval **56.8**, Gert Labs 46.76, ResearchClawBench 14.2.
- BenchLM overall **54.73/100, #81 of 1033** (72 benchmarks; conservative). Its "Non-Reasoning" tag contradicts the card's thinking-by-default (AA: Reasoning) — labelled.

### Normalized scores (1–100)

- **Tool use: 74/100.** Same checkpoint as hosted Plus: τ² 86.7 vendor / 95.6 AA, BFCL-V4 72.9, MCP Atlas 74.2 (AA-run), BrowseComp 78.6 discard-all, WideSearch 74.0, OSWorld-V 62.2, AndroidWorld 66.8; capped by τ³ 13.4 (AA), Tool Decathlon 38.3 / Toolathlon 40.7, MCP-Mark 46.1, GDPval 962, APEX-Agents 15.3 — strong search/GUI, weak enterprise workflows. No hosted built-in tools / adaptive tool use here.
- **Reasoning: 76/100.** AIME26 91.3 vendor / 93.3 AA, HMMT 94.8/92.7, IMOAnswerBench 80.9, GPQA 88.4/89.3, MMLU-Pro 87.8, HLE-Verified 37.6; capped by HLE 28.7, **CritPt 1.7**, SimpleQA 26.0, and **Omni −29.8** — competition math strong, frontier knowledge reliability a generation behind.
- **Context window: 79/100.** 262,144 native → 1,010,000 YaRN (manual config, not default); **AA-run LCR 77.3** (better than the vendor-run 68.7 used for hosted Plus), LongBench v2 63.2, AI-Needle 68.7; no hosted surcharge and no 65K output cap (DeepInfra allows 262K out); deducted for YaRN-not-native 1M, Novita's 64K output cap, and no MRCR evidence.
- **Multimodal: 81/100.** Native early-fusion VL, image+video: MMMU-Pro 79.0/77.3, MathVision 88.6, OmniDoc 90.8, OCRBench 93.1, CharXiv 80.8, V* 95.8 CI, CountBench 97.2, Video-MME 87.5, VideoMMMU 84.7, MLVU 86.7, ERQA 67.5, ZEROBench-sub 41.0; ScreenSpot Pro 65.6; no audio; CI-assisted pairs labelled (BabyVision 43.3 / V* 91.1 without).
- **Coding: 75/100.** SWE-V 76.4, SWE-Multi 69.3, SecCodeBench 68.3, LCB v6 83.6; capped by TB2 52.5, AA-run SWE-Pro 50.9 / TB2.1 51.3 / SciCode 42.0–44.8, NL2Repo 32.2 — solid mid-tier agentic coding, below the 3.6/3.7 successors.
- **Cost efficiency: 83/100.** Apache 2.0 weights with only 17B active per token (efficient self-host, though 397B weights need ~8 GPUs at 262K); API from $0.45/$3.00 (DeepInfra, 51% cache) to $0.60/$3.60 (blended $0.90); deducted vs hosted Plus (87): pricier per-token rates, weaker cache discount, no Beijing tier, no independent $/task, 54 tok/s with 42.59s TTFT.
- **Overall Score: 77.0/100.** Mean of the five quality dimensions (Cost excluded): (74+76+79+81+75)/5 = 77.0. The open checkpoint matches hosted Plus (76.6) on capability — same weights — and edges it on context freedom (AA-run LCR 77.3, no output cap, no long-context surcharge), while lacking Plus's production tooling and value pricing.

---

## Signature
- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-13
- Method: public internet research (Qwen HF raw README read in full — vendor card with all benchmark tables and footnotes; Artificial Analysis Reasoning page; BenchLM aggregator with Who-ran-it carriages; llm-stats provider table); scores are normalized 1–100 interpretations, not official vendor scores. Conflicts labelled, never averaged: AA-LCR 68.7 vendor-run vs 77.3 AA-run; HLE 28.7 vendor / 27.3 v4.1 / 29.0 carriage; τ² 86.7 vs 95.6; τ³ 13.4 (AA v4.1) vs 68.4 (Qwen3.6 blog); MCP Atlas 74.2 (AA) vs 46.1 (blog) vs MCP-Mark 46.1 (card) vs MCP-Tasks 74.2 (blog); SciCode 42.0 vs 44.8; SWE-V 76.4 vs 76.2; AIME26 91.3 vs 93.3; GPQA 88.4 vs 89.3; MMMU-Pro 79.0 vs 77.3; release Feb 15 blog vs Feb 16 AA/llm-stats; providers AA 4 vs llm-stats 2; DeepInfra 262K output vs Novita 64K; BenchLM context field 128K and "Non-Reasoning" tag both contradict the official card (262K native, thinking default) — card wins; AA index 34 is v4.1 effort-0.99, live v5.0.1 N/A. BrowseComp folding/discard-all and BabyVision/V* CI/no-CI pairs are vendor footnotes. Open checkpoint kept distinct from hosted qwen3.5-plus (same weights + production features).
- Reference URLs:
  - [Qwen3.5-397B-A17B — Hugging Face model card](https://huggingface.co/Qwen/Qwen3.5-397B-A17B)
  - [Qwen3.5 397B A17B (Reasoning) — Artificial Analysis](https://artificialanalysis.ai/models/qwen3-5-397b-a17b)
  - [Qwen3.5 397B — BenchLM](https://benchlm.ai/models/qwen3-5-397b)
  - [Qwen3.5-397B-A17B — LLM Stats](https://llm-stats.com/models/qwen3.5-397b-a17b)
  - [Introducing Inkling-Small (AA v4.1 peer table incl. Qwen3.5-397B) — Thinking Machines Lab](https://thinkingmachines.ai/news/inkling-small/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.