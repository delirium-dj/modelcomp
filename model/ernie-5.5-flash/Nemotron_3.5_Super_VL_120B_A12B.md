# ERNIE 5.5 Flash — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Baidu (`ERNIE-5.5-Flash-Base`), Hugging Face `baidu/ERNIE-5.5-Flash-Base-BF16`
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** ERNIE 5.5 Flash Base
- **Short description:** Baidu's efficient sparse Mixture-of-Experts base language model, released as open weights at the end of pre-training (no mid- or post-training). 280B total parameters, 14B activated per token. Pre-trained from scratch on 33.5T tokens. Designed as a starting point for domain adaptation, instruction tuning, and RL research.
- **Provider / access:** Baidu ERNIE Team; open weights on Hugging Face (`baidu/ERNIE-5.5-Flash-Base-BF16`, BF16; FP8 also available). Servable via SGLang and vLLM completions API. License: ERNIE 5.5 Flash Base Model License Agreement v1.0.
- **Release / knowledge:** Released November 5, 2026. Training data cutoff not disclosed; pre-trained on 33.5T tokens.
- **IDs:** `baidu/ERNIE-5.5-Flash-Base-BF16` (Hugging Face BF16); `ERNIE-5.5-Flash-Base` (model family). No dedicated API endpoint confirmed beyond self-hosted SGLang/vLLM.
- **Context window:** Training context up to 128K tokens; supports 1M-token context for fine-tuning and inference.
- **Modalities:** Text in; text out. Base model — no image/audio/video modalities. No tool calling or JSON mode advertised for the base checkpoint.
- **Pricing (as of 2026-11-11):** Open weights — self-hosted; inference cost depends on deployment hardware. 14B activated parameters / 280B total MoE implies efficient inference relative to dense 280B models.
- **Architecture:** 280B total / 14B active parameters, sparse MoE with 43 Transformer layers, hidden size 4096, 64 attention heads. Latent-Gated Sparse Attention (hybrid MLA + HCA), Manifold-Constrained Hyper-Connections, MultiMax Output Head, ECHO Tokenizer. Open weights license.

### Raw benchmarks found

All measured numbers below come from Baidu's official ERNIE 5.5 Flash Base release page (benchmarks compared against other base models; best result per row in bold).
Reasoning / knowledge:
- SimpleQA (LLM-Judge) 10-shot: **34.1** <(Baidu release page)>
- ChineseSimpleQA (LLM-Judge) 10-shot: **73.0** <(Baidu release page)>
- PreciseWikiQA (LLM-Judge) 10-shot: **59.3** <(Baidu release page)>
- HotpotQA (LLM-Judge) 10-shot: **57.3** <(Baidu release page)>
- PopQA (LLM-Judge) 10-shot: **52.2** <(Baidu release page)>
- STEM GPQA (EM) 5-shot: **60.2** <(Baidu release page)>
- MGSM (EM) 8-shot CoT: **87.0** <(Baidu release page)>
- MathBench-CN (LLM-Judge) 5-shot: **80.8** <(Baidu release page)>
- BBH (EM, direct) 3-shot: **77.1** <(Baidu release page)>
- BBH (EM, CoT) 3-shot CoT: **89.2** <(Baidu release page)>
- WinoGrande (EM) 5-shot: **87.8** <(Baidu release page)>
- PIQA (EM) 5-shot: **96.0** <(Baidu release page)>
- MMMLU-lite (EM) 5-shot: **81.0** <(Baidu release page)>
- INCLUDE-lite (EM) 5-shot: **79.5** <(Baidu release page)>
- MultiLoKo (LLM-Judge) 5-shot: **43.3** <(Baidu release page)>

Coding:
- HumanEval+ (Pass@1) 1-shot: **82.3** <(Baidu release page)>
- MBPP+ (Pass@1) 0-shot: **81.5** <(Baidu release page)>
- LiveCodeBench (Pass@1) 1-shot: **40.1** <(Baidu release page)>
- FullStackBench (Pass@1) 1-shot: **54.6** <(Baidu release page)>
- RepoBench (EM) 0-shot: **50.3** <(Baidu release page)>

Long context:
- HELMET-RAG (SubEM) 2-shot: **71.5** <(Baidu release page)>
- HELMET-Rerank (NDCG@10) 0-shot: **56.2** <(Baidu release page)>
- HELMET-ICL (EM) many-shot: **85.9** <(Baidu release page)>
- RepoQA (Pass@1) 0-shot: **91.7** <(Baidu release page)>
- LongBench-v2 (EM) 0-shot: **48.7** <(Baidu release page)>
- InfiniteBench (Avg) 0-shot: **46.5** <(Baidu release page)>

No verified public scores found for: HLE, LCR/MLCR, CritPt, Artificial Analysis Intelligence Index, Omniscience Accuracy/Hallucination Rate, SWE-bench Verified/Pro/Multilingual, SciCode, Terminal-Bench 2.1, tau2-bench/tau3-bench, APEX, IFBench, BrowseComp, WebVoyager, OSWorld-Verified, Vibe Code Bench, DeepSWE, MRCR/RULER/GraphWalks, AA-Briefcase-Lite, AutomationBench-AA, MMLongBench-Doc, AA-LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 60/100.** Base model with no advertised tool calling, function calling, or agent workflow capabilities; capped because tool use is not part of the base checkpoint design.
- **Reasoning: 75/100.** Strong on BBH CoT (89.2), PIQA (96.0), WinoGrande (87.8), GPQA (60.2), MGSM (87.0); capped by weaker open-domain QA (SimpleQA 34.1, MultiLoKo 43.3) and base-model-only status (no RLHF/post-training).
- **Context window: 88/100.** 128K training context with 1M-token inference support; verified long-context results (RepoQA 91.7, HELMET-ICL 85.9); capped because no retrieval measurement at the full 1M window.
- **Multimodal: 15/100.** Text-only base model; no image/audio/video input or output; minimum viable score for text-only.
- **Coding: 75/100.** HumanEval+ 82.3, MBPP+ 81.5, FullStackBench 54.6, RepoBench 50.3; capped by modest LiveCodeBench (40.1) and no SWE-bench agentic coding results.
- **Cost efficiency: 78/100.** Open weights with 14B activated / 280B total MoE implies efficient self-hosted inference; not counted toward Overall.
- **Overall Score: 63/100.** Half-up mean of (60 + 75 + 88 + 15 + 75) / 5 = 62.6 → 63. Best-fit recommendation: efficient open-weight MoE base model for fine-tuning and domain adaptation; strong coding and reasoning base but text-only and no tool use.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-11-11
- Method: public internet research (Baidu ERNIE official release page, Hugging Face model card); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [ERNIE 5.5 Flash Base — Baidu release](https://ernie.baidu.com/release/ernie-5-5-flash-base/)
- Future sources: add a new file next to this one, e.g. `Nemotron_3.5_Super_VL_120B_A12B.md`, using the same headings.