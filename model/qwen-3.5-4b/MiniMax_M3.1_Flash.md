# Qwen 3.5 4B — Research findings

- **Source**: Alibaba Qwen — Hugging Face `Qwen/Qwen3.5-4B` (official model card); independent coverage by Artificial Analysis
- **Researched by**: MiniMax M3.1 Flash — 2026-11-03 (UTC)

## Model card

- **Name**: Qwen 3.5 4B (`Qwen/Qwen3.5-4B`)
- **Short description**: Alibaba's dense 4B-parameter member of the Qwen3.5 "Towards Native Multimodal Agents" generation — an Apache 2.0 open-weight, native vision-language model with a hybrid Gated-DeltaNet/attention architecture, thinking-by-default behaviour, and a 262K native context that can be YaRN-extended to ~1M. Designed for edge/consumer-hardware agents, local assistants and high-throughput tool calling.
- **Provider / access**: Hugging Face (BF16 safetensors, 6.98M downloads in the last month, 260 finetune derivatives, 100 Spaces). Served locally via SGLang, vLLM, KTransformers and HF Transformers. **No Zen route** (the live OpenCode Zen catalogue contains `qwen3.5-plus`, `qwen3.6-plus`, `qwen3.8-flash`, `qwen3.8-max` but no `qwen3.5-4b`), so the folder's `opencode/qwen-3.5-4b` id is a **phantom id**. Artificial Analysis notes that at publication (2026-03-05) there were **no first-party or third-party serverless APIs** hosting these sub-10B models.
- **Release date**: February 2026 (Qwen3.5 generation; the small-model drop was covered by Artificial Analysis on 2026-03-05).
- **Architecture**: causal LM with vision encoder — 4B parameters, hidden dim 2560, token embedding 248,320, 32 layers, hidden layout 8 × (3 × (Gated DeltaNet → FFN) → 1 × (Gated Attention → FFN)); Gated DeltaNet 32 V heads / 16 QK heads, head dim 128; Gated Attention 16 Q heads / 4 KV heads, head dim 256; FFN intermediate 9,216; MTP trained with multi-steps (speculative decoding: `--speculative-algo NEXTN`, 3 steps / 4 draft tokens on SGLang; `qwen3_next_mtp` on vLLM).
- **Context window**: **262,144 native**; extensible to **1,010,000** via static YaRN (rope factor 4.0; 2.0 recommended for ~524K workloads). Recommended output length 32,768 (81,920 for competition math/programming).
- **Modalities**: text, **image**, **video** in → text out. Early-fusion multimodal training; `fps=2` default video sampling with `do_sample_frames` override.
- **License / size**: Apache 2.0, native BF16; ≈3 GB in 4-bit quantization (≈6 GB for the 9B) so it fits consumer hardware and phones.
- **Thinking mode**: on by default (`<think>…</think>`); disable via `chat_template_kwargs.enable_thinking=false` (or `enable_thinking:false` on Alibaba Cloud Model Studio); no `/think` soft switch.

## Raw benchmarks found

### Vendor table (official Hugging Face card, `Qwen3.5-4B` column)

- **Knowledge & STEM**: MMLU-Pro 79.1 · MMLU-Redux 88.8 · C-Eval 85.1 · SuperGPQA 52.9 · **GPQA Diamond 76.2**
- **Instruction following**: IFEval 89.8 · IFBench 59.2 · MultiChallenge 49.0
- **Long context**: AA-LCR 57.0 · LongBench v2 50.0
- **Reasoning & coding**: HMMT Feb 25 **74.0** · HMMT Nov 25 **76.8** · **LiveCodeBench v6 55.8** · OJBench 24.1
- **General agent**: BFCL-V4 50.3 · **TAU2-Bench 79.9** · VITA-Bench 22.0 · DeepPlanning 17.6
- **Multilingual**: MMMLU 76.1 · MMLU-ProX 71.5 (29 languages) · NOVA-63 54.3 · INCLUDE 71.0 · Global PIQA 78.9 · PolyMATH 51.1 · WMT24++ 66.6 · MAXIFE 78.0
- **Vision-language**: MMMU 77.6 · **MMMU-Pro 66.3** · MathVision 74.6 · MathVista(mini) 85.1 · We-Math 75.4 · DynaMath 83.3 · MMStar 78.3 · MMBench EN-DEV 89.4 · RealWorldQA 79.5 · SimpleVQA 43.4 · HallusionBench 65.0 · OmniDocBench1.5 86.2 · CharXiv(RQ) 70.8 · MMLongBench-Doc 54.2 · CC-OCR 76.7 · AI2D 89.6 · OCRBench 85.0 · CountBench 96.3 · RefCOCO 88.1 · LingoQA 74.4 · VideoMME 83.5 (w/ sub) / 76.9 (w/o) · VideoMMMU 74.1 · MLVU 82.8 · MVBench 71.2 · LVBench 66.4 · MMVU 64.9
- **Visual agent / tool calling**: ScreenSpot Pro 60.3 · **OSWorld-Verified 35.6** · AndroidWorld 58.6 · TIR-Bench 38.9/29.9 · V* 84.3/86.4 · MedXpertQA-MM 42.9

### Independent measurements — Artificial Analysis (2026-03-05, sub-10B Qwen3.5 analysis)

- **Intelligence Index (Reasoning variant): 27** — "the most intelligent model under 5B parameters", ahead of Falcon-H1R-7B (16) and NVIDIA Nemotron Nano 9B V2 (15); **+9 points over Qwen3 4B 2507 (18)**; the 9B sibling scores 32 and the 2B 16.
- **MMMU-Pro: 65.4%** — ahead of Qwen3-VL-8B (56.6 %), Qwen3-VL-4B (52.0 %), Ministral 3 8B (46.0 %); leads all sub-15B models alongside the 9B (69.2 %).
- **AA-Omniscience: −57** — hallucination rate **80 %**, accuracy 12.8 % (Qwen3 4B 2507: −61 / 84 % / 12.7 %), i.e. the improvement is mostly lower hallucination, not higher accuracy.
- **Token cost of intelligence**: ~**240M output tokens** to run the Index (9B ≈260M, 2B ≈390M, 0.8B ≈230M) — far more than Qwen3.5-27B (98M) and Qwen3.5-397B (86M); comparable only to GPT-5.2 Codex xhigh (202M).

### Aggregators

- **BenchLM** (data as of 2026-10-29): *"Qwen3.5-4B is tracked, but not publicly ranked yet"* — **0 of 782** tracked benchmark slots carry displayable evidence; API model id "not published"; context 262K; price not listed.
- **OpenCharts**: no model page for `qwen3-5-4b` (404).
- **SiliconFlow catalogue**: lists Qwen3.5-9B at $0.10/$0.15 per M tokens (262K) and Qwen3.5-122B-A10B at $0.26/$2.08, but **no Qwen3.5-4B entry** and its model page 404s.

## Normalized scores (1–100)

- **Tool use: 50/100.** TAU2-Bench 79.9 (airline domain, with the Claude Opus 4.5 system-card fixes applied) and V* 84.3/86.4 show genuinely good multi-turn tool use, but BFCL-V4 50.3, TIR-Bench 38.9/29.9, OSWorld-Verified 35.6 and ScreenSpot Pro 60.3 put real computer-use and structured tool calling in the middle band; AA's index (27) includes Terminal-Bench 4.0 and AutomationBench-AA, and no frontier-grade agentic score exists for this size class.
- **Reasoning: 55/100.** GPQA Diamond 76.2, HMMT 74.0/76.8, MMLU-Pro 79.1 and an AA Intelligence Index of 27 (independent) place it mid-pack for a 4B model, but FrontierMath-class results are absent and AA-Omniscience shows an 80 % hallucination rate with 12.8 % accuracy — reliable in familiar domains, unreliable when it must admit ignorance.
- **Context window: 78/100.** 262,144 native (YaRN-extensible to 1,010,000) is a strong edge-model window, but it sits in the 200K–500K band, and the vendor's own AA-LCR 57.0 plus LongBench v2 50.0 show retrieval quality well below frontier — the 1M figure is an extrapolated configuration, not a measured one.
- **Multimodal: 82/100.** Native vision with real competence: MMMU 77.6, MMMU-Pro 66.3 (vendor) / 65.4 (AA), MathVista 85.1, OmniDocBench 86.2, OCRBench 85.0, VideoMME 83.5, VideoMMMU 74.1, CC-OCR 76.7 — video and document understanding included. Held back by SimpleVQA 43.4, BabyVision 16.0/19.1 and the very weak spatial subset (Hypersim 12.5, Nuscene 9.9), i.e. strong perception, weaker visual reasoning.
- **Coding: 56/100.** LiveCodeBench v6 55.8 and OJBench 24.1 are mid-band for a 4B model; the 9B sibling only reaches 65.6 / 29.2, so the code ceiling of this generation is low; TAU2-Bench 79.9 and V* indicate decent instruction-driven code generation, but no SWE-bench / Terminal-Bench / LiveCodeBench-Pro class repo-level number exists.
- **Cost efficiency: 99/100.** Apache 2.0 open weights — self-hosting is $0 marginal cost and the 4-bit build is ≈3 GB, so the model is effectively free to run. Caveat: no confirmed hosted lane (AA: no serverless API at publication; SiliconFlow has no 4B entry) and a very verbose profile (~240M output tokens per Intelligence Index run) that inflates real token spend on paid hosts.
- **Overall Score: 64.2/100.** (50 + 55 + 78 + 82 + 56) / 5 = 321 / 5 = **64.2**.

**Best fit**: on-device / laptop agents, local chat assistants, edge vision-language pipelines (documents, OCR, video summarisation), high-throughput tool-calling sub-agents, fine-tuning bases for task-specific multimodal models.
**Worst fit**: unattended production agents (80 % hallucination rate), long-horizon computer use (OSWorld 35.6), frontier coding or research workloads, and anything requiring verified 1M-token retrieval.

## Agreement notes

- **Vendor vs independent agreement**: the vendor MMMU-Pro 66.3 and Artificial Analysis's independently measured 65.4 % differ by only 0.9 points — strong cross-validation of the visual-reasoning result, and AA's per-model numbers carry the higher trust because they are not self-reported.
- **"Smartest under 5B" vs absolute standing**: AA's 27 on the Intelligence Index is a size-class win (Qwen3 4B 2507 = 18, Falcon-H1R-7B = 16), but the same index places the flagship Qwen3.5-397B-A17B at 45 — so the sub-10B tier is *relatively* strong and *absolutely* far from the frontier.
- **BenchLM "not publicly ranked" vs AA "scored"**: not a contradiction — BenchLM only displays benchmark rows it can source per model, and it has 0 for this id; AA runs its own suite and therefore produces a score. Treat BenchLM's 0/782 as missing coverage, not as a zero capability.
- **Long-context conflict**: the card's headline is 262K native, and the 1,010,000 figure requires static YaRN, which the card itself warns "remains constant regardless of input length, **potentially impacting performance on shorter texts**" — the vendor's AA-LCR 57.0 is consistent with that warning, so the 1M claim is configuration-dependent and must not be scored as a native 1M window.
- **Identity conflict**: `meta.json` says `opencode/qwen-3.5-4b`; the live OpenCode Zen catalogue has **no** `qwen3.5-4b` route, so that id is phantom. The real id is `Qwen/Qwen3.5-4B`.
- **Hosting conflict**: `meta.json` claims a "verified free hosted lane (SiliconFlow)", but SiliconFlow's live pricing catalogue lists Qwen3.5-9B and Qwen3.5-122B-A10B while the 4B model page 404s, and AA stated no serverless API existed at publication. The free-lane claim is therefore **unverified**; the defensible cost basis is Apache 2.0 self-hosting.
- **Relative positioning**: all four sub-10B Qwen3.5 models are Apache 2.0, 262K, natively multimodal, and push the intelligence-vs-parameters Pareto frontier — AA explicitly frames the release as a material uplift over Qwen3 (9B +15, 4B +9, 2B +3, 0.8B +2.5 index points).

---

**Provided by**: **MiniMax M3.1 Flash (minimax-m3.1-flash-preview)** — 2026-11-03

**Method**: The official Hugging Face model card (architecture, context, serving recipes and the full vendor benchmark tables) was read in full; the independent Artificial Analysis sub-10B analysis supplied the externally measured Intelligence Index, MMMU-Pro and hallucination figures; BenchLM, OpenCharts, SiliconFlow and the OpenCode Zen catalogue were checked live to establish coverage, price and identity. Vendor-claimed numbers are labelled as such; where a vendor number is corroborated by an independent run, both are given.

**Reference URLs**:
- https://huggingface.co/Qwen/Qwen3.5-4B — official model card (specs, vendor benchmark tables, serving and YaRN instructions)
- https://artificialanalysis.ai/articles/qwen3-5-small-models — independent analysis: Intelligence Index 27 (4B), MMMU-Pro 65.4 %, AA-Omniscience −57 / 80 % hallucination, token usage, no hosted API
- https://artificialanalysis.ai/models/qwen3-5-4b — Artificial Analysis model page (index v5.0 composition, "no publicly available API")
- https://benchlm.ai/models/qwen3-5-4b — BenchLM record (tracked but not publicly ranked, 0/782 rows, 262K context)
- https://www.siliconflow.com/pricing — SiliconFlow price list (Qwen3.5-9B $0.10/$0.15; no 4B entry)
- https://opencode.ai/zen/v1/models — OpenCode Zen catalogue (no `qwen3.5-4b` route)

**Future sources to check**: a serverless API launch for the sub-10B tier (Alibaba Model Studio or a third-party gateway) which would change the cost line, any Qwen3.5-4B-instruct derivative that reaches a public leaderboard, Artificial Analysis Terminal-Bench 4.0 / FrontierCode 2.0 breakdowns once published per model, and the Qwen3.6 small-model successors (which may supersede this tier).
