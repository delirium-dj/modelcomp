# ERNIE 5.5 Flash — findings by Glyph Cluster

- Source: Baidu (`baidu/ernie-5.5-flash`; public checkpoints/releases include `ERNIE-5.5-Flash-Base` and `ERNIE 5.5 Flash Preview`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** ERNIE 5.5 Flash
- **Short description:** Baidu's efficient sparse Mixture-of-Experts language model line (280B total / 14B activated per token) designed for high-throughput long-context coding, knowledge work, and content-creation workflows. Public materials cover a pre-trained base checkpoint and a post-trained preview release.
- **Provider / access:** Repo meta lists `baidu/ernie-5.5-flash`. Baidu release pages indicate API availability for ERNIE 5.5 Flash Preview on Baidu Qianfan (`https://console.bce.baidu.com/qianfan/modelcenter/model/buildIn/detail/am-abe18d298d70`) and listing on OpenRouter (`baidu/ernie-5.5-flash-preview:free` at time of fetch). Open-weight base checkpoint: `baidu/ERNIE-5.5-Flash-Base` on Hugging Face/ModelScope. Chat/completions-style API usage varies by provider (OpenRouter exposes chat completions; base model typically served via completions endpoint).
- **Release / knowledge:** ERNIE 5.5 Flash Base blog/release dated 2026-11-05; ERNIE 5.5 Flash Preview release dated 2026-11-11 on ernie.baidu.com. Knowledge cutoff not explicitly stated on fetched primary pages.
- **IDs:** `baidu/ernie-5.5-flash` (repo/meta), `baidu/ERNIE-5.5-Flash-Base` / `baidu/ERNIE-5.5-Flash-Base-BF16` (HF/ModelScope), `baidu/ernie-5.5-flash-preview` / `baidu/ernie-5.5-flash-preview:free` (OpenRouter listing per release page/fetch).
- **Context window:** 1,000,000 tokens total context supported for fine-tuning/inference per HF model card and Baidu materials; 131,072 max training context; repo meta states 131,072 max output.
- **Modalities:** Text in; text out (per repo meta and HF base model card). Preview demos show code/tool-driven generation of media artifacts, but model I/O modality is text-only.
- **Pricing (as of 2026-11-11):** Repo meta reports ~2–8 CNY/1M on Baidu Qianfan (~$0.28/$1.13 per 1M in/out standard; ~$0.14/$0.56 off-peak/promotional, approximate). OpenRouter preview listing fetched during this run showed no public standard endpoint price at that moment. Pricing may vary by provider/tier.
- **Architecture:** 280B total / 14B activated per token sparse MoE (HF base card reports 286B params tensor size class; Baidu describes 280B-A14B). 43 layers (1 dense + 42 MoE), 512 routed experts (top-10) + 1 shared expert, 37 HCA layers + 6 MLA-DSA layers, mHC, Multi-Router Latent MoE, ECHO, MultiMax output head, ~200K BPE tokenizer, pre-trained on 33.5T tokens (per Baidu/HF). Base released in FP8 and BF16; preview weights stated as to be open-sourced under Apache 2.0 "soon" on release page.

### Raw benchmarks found

> Primary verified benchmark numbers below are from the ERNIE-5.5-Flash-Base Hugging Face model card table (unified evaluation pipeline reported by Baidu). ERNIE 5.5 Flash Preview release page includes benchmark figures/images, but exact values were not machine-readable from fetched text in this run; preview capability claims are treated qualitatively.

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**.
- Tau3-Banking / Tau2-Bench: **no verified public score found**.
- GDPval-AA: **no verified public score found**.
- Claw-Eval / ClawProBench: **no verified public score found**.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**.
- Preview release notes claim strong long-horizon agentic coding, tool use, and iterative refinement in demos (qualitative; not a standardized benchmark score).

Reasoning / knowledge:

- MMLU (5-shot, EM): **93.3%** (ERNIE-5.5-Flash-Base, HF model card).
- MMLU-Redux (5-shot, EM): **94.1%**.
- MMLU-Pro (5-shot, EM): **78.4%**.
- CMMLU (5-shot, EM): **90.0%**.
- GPQA (5-shot, EM): **60.2%**.
- SimpleQA (10-shot, LLM-Judge): **34.1%**.
- BBH (3-shot CoT, EM): **89.2%** (direct 77.1%).
- WinoGrande (5-shot, EM): **87.8%**.
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** for this exact model/ID in fetched sources.
- HLE / Omniscience Accuracy / Hallucination Rate: **no verified public score found**.

Coding:

- HumanEval+ (1-shot, Pass@1): **82.3%** (ERNIE-5.5-Flash-Base, HF).
- MBPP+ (0-shot, Pass@1): **81.5%**.
- LiveCodeBench (1-shot, Pass@1): **40.1%**.
- FullStackBench (1-shot, Pass@1): **54.6%**.
- RepoBench (0-shot, EM): **50.3%**.
- SWE-bench Verified / SWE-Pro: **no verified public score found**.

Long context:

- HELMET-RAG (2-shot, SubEM): **71.5%** (Base).
- HELMET-Rerank (0-shot, NDCG@10): **56.2%**.
- HELMET-ICL (many-shot, EM): **85.9%**.
- RepoQA (0-shot, Pass@1): **91.7%**.
- LongBench-v2 (0-shot, EM): **48.7%**.
- InfiniteBench (0-shot, Avg): **46.5%**.
- 1,048,576-token inference/fine-tuning context supported per model card/config.

### Normalized scores (1–100)

> Scores are normalized interpretations from verified base-model benchmark evidence and vendor specs; preview-only benchmark chart values were not directly extractable from fetched text. Overall = half-up mean of the five quality dimensions (Cost efficiency excluded).

- **Tool use: 62/100.** Baidu's preview release demonstrates long-horizon agentic/tool-assisted workflows qualitatively, but no verified standardized tool-use benchmark scores (TAU, Terminal-Bench, MCP-Atlas, GDPval-AA Elo, etc.) were found for this exact model/ID; score is capped by lack of public agentic benchmark evidence.
- **Reasoning: 82/100.** Strong base-model results on knowledge/reasoning exams (MMLU 93.3, MMLU-Pro 78.4, CMMLU 90.0, GPQA 60.2, BBH CoT 89.2) indicate solid reasoning for an efficient 14B-active MoE; capped by absence of verified frontier reasoning benchmarks (e.g. HLE, AA Intelligence Index) and by being evaluated primarily at base-checkpoint level.
- **Context window: 93/100.** Verified 1M-token context support with substantial long-context benchmark evidence (RepoQA 91.7, HELMET-ICL 85.9, HELMET-RAG 71.5, LongBench-v2 48.7, InfiniteBench 46.5) places it in a top long-context tier; capped because real-world reliability at full 1M across all tasks is not independently established here.
- **Multimodal: 15/100.** Text input and text output only per verified specs; no native image/audio/video understanding or generation documented.
- **Coding: 80/100.** Strong base coding scores for its activation class (HumanEval+ 82.3, MBPP+ 81.5, LiveCodeBench 40.1, FullStackBench 54.6, RepoBench 50.3) support capable coding; capped by no verified SWE-bench Verified/SWE-Pro or frontier agentic coding benchmark numbers in fetched sources.
- **Cost efficiency: 84/100.** Reported Qianfan pricing (~$0.28/$1.13 per 1M in/out, with lower off-peak/promotional tiers) is cost-effective for a 280B/14B long-context model, though not free. Not included in Overall.
- **Overall Score: 66/100.** Mean of the five non-cost dimensions (Tool 62, Reasoning 82, Context 93, Multimodal 15, Coding 80) = 332/5 = 66.4, rounded to 66 (half-up). Best fit: cost-efficient long-context text/coding and knowledge-work workloads where 1M context and throughput matter more than multimodal capability or top-tier verified agentic benchmark performance.

---

## Signature

- Provided by: **Glyph Cluster (glyph-cluster-free)** — 2026-11-11
- Method: Public-source synthesis from fetched Baidu release pages, Hugging Face base model card, OpenRouter listing page, and repo metadata; web search unavailable in-session (HTTP 402). Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [ERNIE 5.5 Flash Preview — Baidu release](https://ernie.baidu.com/release/ernie-5-5-flash-preview/)
  - [ERNIE 5.5 Flash Base — Baidu release](https://ernie.baidu.com/release/ernie-5-5-flash-base/)
  - [Hugging Face — baidu/ERNIE-5.5-Flash-Base](https://huggingface.co/baidu/ERNIE-5.5-Flash-Base)
  - [OpenRouter — baidu/ernie-5.5-flash-preview:free](https://openrouter.ai/baidu/ernie-5.5-flash-preview:free)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
