# Qwen 3.5 — findings by Muse Spark 1.3

- Source: Alibaba/Qwen 3.5 (`qwen/qwen3.5-397b-a17b` family; Zen routing ID below)
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5
- **Short description:** Alibaba's unified vision-language MoE flagship family (397B total / 17B active) built for the agentic era — early-fusion text, image and video training with hybrid Gated DeltaNet + Gated Attention for long-context agent work.
- **Provider / access:** OpenCode Zen `opencode/qwen-3.5` (scaffolded ID; API type not verified). Native weights `Qwen/Qwen3.5-397B-A17B` (Hugging Face, Apache-2.0); hosted `Qwen3.5-Plus` on Alibaba Cloud Model Studio; NVIDIA NIM endpoint `qwen/qwen3.5-397b-a17b`.
- **Release / knowledge:** 2026-02-16 flagship release (NVIDIA NIM listing; VentureBeat 2026-02-18); knowledge cutoff 2025-04 per Zen catalog mirrors. Compact sizes (9B/4B/2B/0.8B) followed 2026-03-02.
- **IDs:** `opencode/qwen-3.5` (Zen; exact size routing not verified — scored against the 397B-A17B flagship card). No Free-tier Zen ID verified.
- **Context window:** 262,144 tokens native open-weights window (Hugging Face card; whichllm Zen mirror for `qwen3.5-plus` agrees 262144 in / 65536 out). Hosted Plus extends to 1M by default (HF card note) — scored on the 262K native window.
- **Modalities:** Text, image, video in; text out; reasoning yes (thinking on by default for large sizes via `enable_thinking`); tool calling yes.
- **Pricing (as of 2026-10-04):** No verified Zen pricing for the exact `opencode/qwen-3.5` ID — closest proxy is Zen `qwen3.5-plus` at $0.20/M in / $1.20/M out, $0.02 cache read (whichllm; LLM24). API pricing for the 35B-A3B size is $0.31/$1.25 (apxml.com). Scored as paid at the Plus proxy.
- **Architecture:** 397B total / 17B active hybrid MoE (512 experts), Gated DeltaNet + Gated Attention 3:1, multi-token prediction, early-fusion vision-language; Apache-2.0 open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: vendor table reports Terminal Bench 2 **52.5%** (Hugging Face `Qwen/Qwen3.5-397B-A17B` model card, thinking mode)
- Tau3-Banking / Tau2-Bench: TAU2-Bench **86.7%** (HF model card; official setup except airline domain per card note)
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: no verified Claw-Eval score found; closest agentic-workspace proxy is WildClawBench overall **34.5** (HF `internlm/WildClawBench` leaderboard row for this model)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: BFCL-V4 **72.9%**, VITA-Bench **49.7%**, DeepPlanning **34.3%** (HF model card); PinchBench agent average **80.5%** over 10 OpenClaw-style runs (Kilo Code model page)

Reasoning / knowledge:

- GPQA Diamond: **88.4%** (HF model card GPQA row; morphllm scaffold table agrees)
- HLE: **28.7%** base, **48.3%** with tools, HLE-Verified **37.6%** (HF model card + `.eval_results` extraction PR #9)
- LCR / MLCR: AA-LCR **68.7%**, LongBench v2 **63.2%** (HF model card)
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: Artificial Analysis Agentic Index **51** and Coding Index **33** reported for the smaller Qwen 3.5 27B (community comparison gist, 2026-04) — family signal only, not this flagship ID; flagship Intelligence Index: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **76.4%** Verified, **69.3%** Multilingual, SecCodeBench **68.3%** (HF model card); official SWE-bench leaderboard entry **76.4** (HF leaderboard API guide)
- LiveCodeBench: **83.6%** v6 (Alibaba scaffold table via morphllm; NVIDIA NIM card agrees)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: AIME 2026 **91.3%**, MMMU **85.0%**, MMMU-Pro **79.0%**, MathVista (mini) **90.3%**, Video-MME **87.5%**, OmniDocBench v1.5 **90.8%**, ERQA **67.5%**, IFBench/MAXIFE **88.2%**, MMLU-Pro **87.8%**, MMLU-Redux **94.9%**, SuperGPQA **70.4%** (HF card; DataCamp; ollama library page)

Long context:

- No verified MRCR / RULER / GraphWalks retrieval-at-length score found; closest long-context proxies (provisional): AA-LCR 68.7% and LongBench v2 63.2% (HF model card) — reasoning-over-context scores, not pure retrieval percentages.

### Normalized scores (1–100)

- **Tool use: 76/100.** TAU2-Bench 86.7% and BFCL-V4 72.9% show strong function-calling on the vendor harness; capped by Terminal Bench 2 at 52.5% and the missing Tau3/GDPval/Claw-Eval verified scores for this exact ID.
- **Reasoning: 84/100.** GPQA Diamond 88.4%, MMLU-Pro 87.8% and AIME 2026 91.3% are near-frontier, with HLE-Verified 37.6% solid; capped by base HLE 28.7% and missing CritPt verification.
- **Context window: 74/100.** 262K native window sits mid-band in the 200K–500K tier (200K = 70); capped because the 1M figure belongs to the hosted Plus variant, not these weights, and no retrieval-at-length percentage is verified.
- **Multimodal: 88/100.** Native text/image/video pipeline with Video-MME 87.5%, OmniDocBench 90.8% and MathVista 90.3%; capped just below the audio-in tier since no audio input or non-text output is documented.
- **Coding: 84/100.** SWE-bench Verified 76.4% plus LiveCodeBench v6 83.6% and multilingual 69.3% make a balanced code profile; capped by missing SciCode/DeepSWE verified scores for this exact ID.
- **Cost efficiency: 93/100.** Paid at roughly $0.20/M in / $1.20/M out on the Plus proxy — inexpensive versus $0.60+/M peers; capped below $0 free tiers.
- **Overall Score: 81/100.** Mean of the five quality dims (76 + 84 + 74 + 88 + 84) / 5 = 81.2 → 81; best fit as a value open-weights agent with genuine video/document grounding where per-task cost matters.

---

## Signature

- Provided by: **Muse Spark 1.3 (muse-spark-1.3-contributor-free)** — 2026-10-04
- Method: public internet research (Hugging Face Qwen/Qwen3.5-397B-A17B model card and eval-results PRs, NVIDIA NIM card, VentureBeat, DataCamp, ollama library page, whichllm/LLM24 Zen mirrors, Kilo Code PinchBench page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
