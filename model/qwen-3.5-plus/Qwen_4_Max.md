# Qwen3.5-Plus — findings by Qwen 4 Max

- Source: Vendor (Alibaba Cloud Model Studio) + independent trackers; subject slug `qwen-3.5-plus`
- Date: 2026-11-13 (UTC)
- See also: [../../model-comparison.md](../../model-comparison.md) · [../../model-findings.md](../../model-findings.md)

## Model card

- **Name:** Qwen3.5-Plus (hosted Model Studio SKU; stable alias = snapshot `qwen3.5-plus-2026-02-15`; newer snapshot `qwen3.5-plus-2026-04-20`)
- **Short description:** Hosted Plus tier of the Qwen3.5 "Towards Native Multimodal Agents" generation — early-fusion unified vision-language foundation, hybrid Gated DeltaNet + sparse MoE, RL scaled across million-agent environments, 201 languages. Per the open card, **Qwen3.5-Plus is the hosted version corresponding to Qwen3.5-397B-A17B** with production features: 1M context by default, official built-in tools, adaptive tool use.
- **Provider/access:** Alibaba Cloud Model Studio (Beijing / Singapore / Frankfurt / Virginia); OpenAI-compatible API; function calling, structured outputs, web search, prefix completion, context caching (stable alias; Feb snapshot lacked caching), batch inference (Beijing only); no fine-tuning. Third-party hosts incl. OpenCode. Open weights of the corresponding base exist separately (`Qwen/Qwen3.5-397B-A17B`, Apache 2.0 — distinct queue slug).
- **Release/knowledge:** **February 15 2026** (launch blog + snapshot ID); **April 20 2026 snapshot** adds "substantial improvement in agentic coding" + faster inference (vendor, unquantified) — stable alias still points at Feb 15. Knowledge cutoff not published. No deprecation notice on the official doc; AA does not track the hosted SKU (404).
- **IDs:** `qwen3.5-plus`; distinct from Qwen3.5-397B (open weights), Qwen3.5-Flash, Qwen3.6-Plus (successor Plus tier), Qwen3.5-122B-A10B / 35B-A3B / 27B open siblings.
- **Context window:** **1,000,000** (max input 991,808; thinking-mode input 983,616; **max output 65,536**; max CoT 81,920). Open card: 262,144 native → 1,010,000 extended; hosted Plus ships 1M by default. Thinking mode default on (temp 0.6 / top_p 0.95 / top_k 20; instruct 0.7 / 0.8 / 20 / presence 1.5).
- **Modalities:** **Text + image + video in; text out** (native VL, all four regions). No audio.
- **Pricing (as of 2026-11-13, per 1M tokens):** Singapore **≤256K $0.40 in / $2.40 out** (cache create $0.50, read $0.04 = 90% off); **>256K–1M $0.50 / $3.00** (1.25× tier, read $0.05). Beijing/Frankfurt/Virginia: ≤128K **$0.115/$0.688**, 128–256K $0.287/$1.72, 256K–1M $0.573/$3.44 (read $0.012/$0.029/$0.057); Beijing batch file 50% off. OpenCode third-party $0.20/$1.20 (cache read $0.02, write $0.25) — provider difference labelled. Rate limits: stable 30K RPM / 5M TPM (Beijing), 15K/5M (Singapore); snapshots 600/1M.
- **Architecture (corresponding open card):** **397B total / 17B active** MoE; hidden 4096, vocab 248,320; **60 layers = 15×(3×(Gated DeltaNet→MoE) + 1×(Gated Attention→MoE))**; GDN 64V/16QK heads dim 128; GA 32Q/2KV dim 256 RoPE 64; **512 experts, 10 routed + 1 shared**, intermediate 1024; MTP multi-step; early-fusion vision encoder.

### Raw benchmarks found

Vendor-reported (Qwen3.5-397B-A17B HF card — the corresponding open checkpoint, Feb 15 launch; peers GPT-5.2 / Claude 4.5 Opus / Gemini-3 Pro / Qwen3-Max-Thinking / K2.5; hosted Plus adds production features, not re-benchmarked):
- Coding: SWE-bench Verified **76.4** (80.0 / 80.9 / 76.2 / 75.3 / 76.8), SWE Multilingual **69.3**, SecCodeBench **68.3**, Terminal-Bench 2 **52.5** (54.0 / 59.3 / 54.2 / 22.5 / 50.8), LiveCodeBench v6 **83.6**.
- Agent/search: BFCL-V4 **72.9**, τ²-Bench **86.7** (airline fixes per Opus 4.5 card), VITA-Bench **49.7**, DeepPlanning **34.3**, Tool Decathlon **38.3**, MCP-Mark **46.1**; HLE w/ tools **48.3**, BrowseComp **69.0 context-folding / 78.6 discard-all** (vendor footnote), BrowseComp-zh 70.3, WideSearch **74.0** (256K, no management), Seal-0 46.9; OSWorld-Verified **62.2**, AndroidWorld **66.8**, ScreenSpot Pro **65.6**.
- Knowledge/reasoning: MMLU-Pro **87.8**, MMLU-Redux 94.9, SuperGPQA 70.4, C-Eval 93.0; GPQA **88.4**, HLE **28.7** (HLE-Verified 37.6); AIME26 **91.3**, HMMT Feb25 94.8 / Nov25 92.7, IMOAnswerBench 80.9; IFEval 92.6, IFBench **76.5**, MultiChallenge 67.6; MMMLU 88.5, MMLU-ProX 84.7, NOVA-63 59.1, PolyMATH 73.3, WMT24++ 78.9, MAXIFE 88.2.
- Long context: **AA-LCR 68.7**, LongBench v2 **63.2**, MMLongBench-Doc 61.5.
- Vision/video: MMMU **85.0**, MMMU-Pro **79.0**, MathVision **88.6** (fixed-prompt protocol), MathVista 90.3, We-Math 87.9, DynaMath 86.3, ZEROBench **12 / 41.0 sub**, BabyVision **52.3 w/ CI (43.3 without)**, RealWorldQA 83.9, MMStar 83.8, HallusionBench 71.4, MMBench 93.7, SimpleVQA 67.1, OmniDocBench 1.5 **90.8**, CharXiv RQ **80.8**, CC-OCR 82.0, AI2D 93.9, OCRBench **93.1**, ERQA 67.5, CountBench 97.2, RefCOCO 92.3, EmbSpatial 84.5, RefSpatial 73.6, LingoQA 81.6, V* **95.8 w/ CI (91.1 without)**; Video-MME **87.5 w/ sub / 83.7 w/o**, VideoMMMU 84.7, MLVU 86.7, MVBench 77.6, LVBench 75.5, MMVU 75.4; medical SLAKE 79.9 / PMC-VQA 64.2 / MedXpertQA-MM 70.0.

Independent runs:
- AA-run rows on the corresponding 397B checkpoint (carried in Thinking Machines' Inkling-Small launch table, **AA Index v4.1, effort 0.99** — older version, never compared to live v5.0.1): index **34**, SWE-V 76.4, SWE-Pro **50.9**, TB2.1 **51.3**, SciCode 42.0, GDPval v2 **962**, MCP Atlas **74.2**, τ³ **13.4**, BrowseComp 78.6, Toolathlon 40.7, GPQA **89.3**, HLE 27.3 no-tools / 48.3 tools, AIME26 93.3, HMMT 87.9, CritPt **1.7**, SimpleQA 26.0, **Omni −29.8** (worst-tier knowledge reliability), IFBench 78.8, GMMLU-Lite 90.0, MMMU-Pro **77.3**, CharXiv 80.8; safety FORTRESS 77.3/95.4, StrongREJECT 99.4.
- BenchLM (hosted Plus): **49.09/100, #111 of 1033** (only 4/830 rows, conservative): JobBench **18.5** (JobBench paper), Vibe Code Bench **15.74** (Vals v1.1).
- Artificial Analysis hosted-SKU page: **404 — untracked** (no live index/speed/price-per-task measurement exists for qwen3.5-plus).

### Normalized scores (1–100)

- **Tool use: 74/100.** τ² 86.7, BFCL-V4 72.9, MCP Atlas **74.2** (AA-run, better than 3.6-Plus's 48.2), BrowseComp 78.6 discard-all, WideSearch 74.0, OSWorld-V 62.2, AndroidWorld 66.8; capped by **τ³ 13.4**, Tool Decathlon 38.3 / Toolathlon 40.7, MCP-Mark 46.1, GDPval 962, and independent **JobBench 18.5** — strong search/GUI, weak enterprise workflows.
- **Reasoning: 76/100.** AIME26 91.3, HMMT 94.8/92.7, IMOAnswerBench 80.9, GPQA 88.4 vendor / 89.3 AA, MMLU-Pro 87.8, HLE-Verified 37.6; capped by **HLE 28.7**, **CritPt 1.7**, SimpleQA 26.0, and **Omni −29.8** — competition math strong, frontier knowledge and reliability a generation behind (3.6-Plus: Omni +0.9).
- **Context window: 77/100.** Hosted **1M by default** (991,808 in), LongBench v2 63.2, MMLongBench-Doc 61.5, mild **1.25× >256K tier** (Singapore); deducted for **AA-LCR 68.7** (vs 3.6-Plus 78.3), 65,536 output cap, 81,920 CoT budget, and Beijing's 5× top-tier jump; no MRCR evidence.
- **Multimodal: 81/100.** Native early-fusion VL, image+video: MMMU-Pro 79.0/77.3, MathVision 88.6, OmniDoc 90.8, OCRBench 93.1, CharXiv 80.8, V* 95.8 CI, CountBench 97.2, Video-MME 87.5, VideoMMMU 84.7, MLVU 86.7, ERQA 67.5, ZEROBench-sub 41.0; ScreenSpot Pro 65.6 trails 3.6's 68.2; no audio; CI-assisted scores labelled (BabyVision 43.3 / V* 91.1 without).
- **Coding: 75/100.** SWE-V 76.4, SWE-Multi 69.3, SecCodeBench 68.3, LCB v6 83.6; capped by **TB2 52.5** (3.6-Plus: 61.6), AA-run SWE-Pro **50.9** / TB2.1 51.3 / SciCode 42.0, and Vals **Vibe 15.74**; the April 20 snapshot's "substantial agentic-coding improvement" is vendor-claimed, unquantified, and not the stable alias — scored on the Feb 15 baseline.
- **Cost efficiency: 87/100.** Singapore $0.40/$2.40 with **90% cache** ($0.04) and only 1.25× long-context tier; Beijing ≤128K **$0.115/$0.688** + 50% batch is frontier-cheap; OpenCode $0.20/$1.20; deducted for no independent speed/$-per-task measurement (AA untracked) and 65K output cap.
- **Overall Score: 76.6/100.** Mean of the five quality dimensions (Cost excluded): (74+76+77+81+75)/5 = 76.6. The Feb-2026 Plus tier sits cleanly below its successors Qwen3.6-Plus (78.2) and Qwen3.7-Plus (79.4): excellent native vision/docs and 1M value pricing, but weak enterprise agentic scores (τ³ 13.4, GDPval 962, JobBench 18.5), poor knowledge reliability (Omni −29.8), and pre-refresh coding hold it back.

---

## Signature
- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-13
- Method: public internet research (Alibaba Cloud Model Studio official qwen3.5-plus doc incl. all regional pricing tiers and both snapshots; Qwen3.5-397B-A17B HF raw README read in full — the corresponding open checkpoint per vendor note; BenchLM hosted-Plus page; Thinking Machines Inkling-Small launch table carrying AA v4.1 effort-0.99 runs on the 397B checkpoint); scores are normalized 1–100 interpretations, not official vendor scores. Conflicts labelled, never averaged: identity (hosted Plus SKU vs open Qwen3.5-397B-A17B weights — same base, distinct slugs; stable alias = Feb 15 snapshot vs Apr 20 snapshot with unquantified agentic-coding gains); GPQA (88.4 vendor vs 89.3 AA); HLE (28.7 vendor vs 27.3 AA); IFBench (76.5 vs 78.8); MMMU-Pro (79.0 vs 77.3); AIME26 (91.3 vs 93.3); HMMT (94.8 Feb25 vendor vs 87.9 AA — different runs); TB (52.5 vendor 2.0 vs 51.3 AA 2.1 — versions); BrowseComp (69.0 folding vs 78.6 discard-all — vendor footnote); BabyVision/V* (CI vs no-CI pairs); MathVision fixed-prompt protocol; pricing (Singapore $0.40/$2.40 vs Beijing $0.115/$0.688 vs OpenCode $0.20/$1.20 — regional/provider tiers); AA index 34 is v4.1 on the open checkpoint, not a live hosted-Plus measurement (AA 404).
- Reference URLs:
  - [qwen3.5-plus Model Info — Alibaba Cloud Model Studio](https://www.alibabacloud.com/help/en/model-studio/qwen3-5-plus)
  - [Qwen3.5-397B-A17B (corresponding open checkpoint) — Hugging Face](https://huggingface.co/Qwen/Qwen3.5-397B-A17B)
  - [Qwen3.5: Towards Native Multimodal Agents — Qwen blog](https://qwen.ai/blog?id=qwen3.5)
  - [Qwen3.5 Plus Benchmark Scores — BenchLM](https://benchlm.ai/models/qwen3-5-plus)
  - [Introducing Inkling-Small (AA v4.1 peer table incl. Qwen3.5-397B) — Thinking Machines Lab](https://thinkingmachines.ai/news/inkling-small/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.