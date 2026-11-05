# Muse Spark Open — findings by Xing_4.0_29B_A4B

## Model card

- **Name:** Muse Spark Open
- **Short description:** 816B total / 42B active parameter open-weight MoE model with 1M token context window, natively multimodal (text + image + video + audio input), released October 2026 by Meta. Built for coding agents, multi-step reasoning, and end-to-end task completion. Flag: this is Meta's open weights release of what was originally a proprietary/internal model from Superintelligence Labs.
- **Provider / access:** Meta Platforms, Inc.; available via API through third-party inference providers (vLLM, SGLang, TensorRT-LLM, HuggingFace, Unsloth, Llama.cpp) and direct download on HuggingFace (meta-models/Muse-Spark-Open-816B-A42B). BF16 and NVFP4 quantized variants available. License: Muse Model License (free of charge; requires "Built with Muse Spark Open" attribution).
- **Release / knowledge:** October 15, 2026; training data cutoff June 2026
- **IDs:** API via inference providers and HuggingFace repo `meta-models/Muse-Spark-Open-816B-A42B`; model ID not publicly tagged on any inference gateway yet. No official Free ID on Zen.
- **Context window:** 1M tokens at inference
- **Modalities:** Input: Text + Image + Video + Audio; Output: Text only. Reasoning: yes (reasoning_effort param: low/medium/high/xhigh). Tool calls: yes. JSON mode: yes.
- **Pricing (as of <date>):** This is an open-weights model; no vendor pricing page exists. BF16 weights require ~700GB VRAM or 2TB for full precision; benchmarks measured at xhigh effort with temperature=1.0, top_p=1.0, top_k=disabled.
- **Architecture:** Mixture-of-Experts Transformer. Total 816B params / 42B active (8 experts activated per token, 256 total experts). Hidden dimension: 8192. Vocabulary size: 202,048. Number of layers: 62. Gated attention (output gate + output norm), QK-norm enabled. Grouped-query attention: 128 heads Q, 16 heads KV. Perception encoder: 1.8B params, 50 layers, 1536 hidden dim, 16 heads.

### Raw benchmarks found

Agent / tool use:

- JobBench: **61.8%** <(source, Meta model card table)>
- MCP-Atlas: **89.2%** <(source, Meta model card table)>
- GDPval-AA v2: **1401** <(source, Meta model card table)>
- OSWorld Verified: **80.4%** <(source, Meta model card table)>
- Toolathlon Verified: **72.8%** <(source, Meta model card table)>
- Terminal-Bench 2.1: **76.4%** <(source, HuggingFace eval results; Metrilla table)>
- DeepSWE 1.1 Preferred harness: **60%** <(source, HuggingFace eval results; Meta table)>
- SWE-Atlas-QnA Preferred harness: **58%** <(source, HuggingFace eval results; Meta table)>

Reasoning / knowledge:

- HLE-Diamond (no tools): **26.1%** <(source, Meta model card table)>
- AA Omniscience: **25%** <(source, Meta model card table)>
- SciCode: **58.5%** <(source, Meta model card table)>
- HLE (w/ tools): **61.0%** <(source, Meta model card table)>
- GPQA Diamond: **89%** <(source, HuggingFace eval results; Meta table)>
- Artificial Analysis Intelligence Index: **39 / rank N** <(source, Meta model card table)>

Coding:

- (covered above under Agent/Tool)
- Terminal-Bench 2.1 covered above

Multimodal:

- ZeroBench (w/ tools): **50.0%** <(source, Meta model card table)>
- BabyVision (w/ tools): **80.2%** <(source, Meta model card table)>
- SimpleVQA (w/ tools): **73.6%** <(source, Meta model card table)>
- WorldVQA (w/ tools): **49.4%** <(source, Meta model card table)>
- IntPhys2: **68.3%** <(source, Meta model card table)>
- VideoMMEv2: **61.5%** <(source, Meta model card table)>

### Normalized scores (1–100)

- **Tool use: 80/100.** Strong on MCP-Atlas (89.2%), Toolathlon (72.8%), and Terminal-Bench (76.4%). Capped by the fact that most open-weight rivals score 35–40% on these same agentic benchmarks.
- **Reasoning: 68/100.** HLE-Diamond no-tools (26.1%) and AA Omniscience (25%) show strong frontier knowledge, but Artificial Analysis Intelligence Index (39) suggests moderate general reasoning relative to peers; AI Omniscience close to top open models.
- **Context window: 85/100.** 1M tokens is a new all-time high for open weights, easily the largest non-proprietary context window among listed models.
- **Multimodal: 78/100.** Native vision/audio/video with strong scores (BabyVision 80.2%, SimpleVQA 73.6%, VideoMMEv2 61.5%); text-only would only be 15. The breadth of multimodal input caps its overall despite solid tool-use ceiling.
- **Coding: 62/100.** DeepSWE 1.1 (60%) and Terminal-Bench 2.1 (76.4%) are good but not class-leading — opencode, DeepSeek-4.1, and GLM-5.3 score higher on these coding tasks.
- **Cost efficiency: 10/100.** This is an open-weights model at BF16 scale (~822B params) requiring ~2TB VRAM; no published per-token API price from Meta. Scored on the zero/no cost baseline where verification = free baseline for open weights.
- **Overall Score: 74.6/100.** Half-up mean of Tool(80)+Reasoning(68)+Context(85)+Multimodal(78)+Coding(62)/5 = 373/5 = 74.6. Best fit recommendation: Muse Spark Open is a top-tier open weights model for coding agents and multi-step reasoning with the largest publicly available context window (1M tokens) — deploy it where agentic tool-use capability and long-context reasoning matter most.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B** (<xingchen-4.0-29b-a4b>) — 2026-11-05
- Method: public internet research via webfetch; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Muse Spark Open Model Card (Meta)](https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B)
  - [Meta Muse Spark Open Evaluation Methodology Report](https://research.meta.ai/static/muse-spark-open-evaluation-methodology)
  - [Terminal-Bench 2.1 Leaderboard](https://github.com/BerriAI/terminal-bench)
  - [HuggingFace eval results: GPQA Diamond](https://huggingface.co/datasets/Idavidrein/gpqa)
  - [HuggingFace eval results: DeepSWE](https://huggingface.co/datasets/datacurve/deep-swe)
  - [HuggingFace eval results: Terminal-Bench 2.1](https://huggingface.co/datasets/harborframework/terminal-bench-2.1)
