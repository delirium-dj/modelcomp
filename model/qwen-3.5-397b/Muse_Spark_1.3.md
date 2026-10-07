# Qwen 3.5 397B — findings by Muse Spark 1.3

- Source: Alibaba/Qwen (qwen/qwen3.5-397b-a17b)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 397B
- **Short description:** Alibaba's first Qwen3.5-series open-weights flagship (397B total / 17B active MoE): a native vision-language foundation model with hybrid linear-attention + sparse-MoE architecture for reasoning, coding and long-horizon agents.
- **Provider / access:** Open weights on Hugging Face (`Qwen/Qwen3.5-397B-A17B`, Apache 2.0); hosted as `qwen/qwen3.5-397b-a17b` (OpenRouter) and `Qwen3.5-Plus` (Alibaba Cloud Model Studio, 1M context + built-in tools); OpenCode Zen `opencode/qwen-3.5-397b`. Chat Completions-compatible API.
- **Release / knowledge:** 2026-02-16/17 release (Qwen release blog + Alibaba Cloud announcement, verified; third-party trackers vary Feb 15–17); knowledge cutoff undisclosed
- **IDs:** `qwen/qwen3.5-397b-a17b` (OpenRouter); `opencode/qwen-3.5-397b` (Zen)
- **Context window:** 262,144 native (256K nominal), extensible to ~1M via YaRN RoPE scaling; hosted Plus defaults to 1M (NVIDIA NIM + OpenRouter cards, verified); up to 81,920 output for complex reasoning
- **Modalities:** Text, image, video in (early-fusion native vision-language, OCR in 32 languages, GUI interaction); text out; thinking/reasoning on; tool/function calling + MCP supported (NVIDIA NIM + HF cards, verified)
- **Pricing (as of 2026-10-07):** ~$0.39/$2.34 per 1M in/out (OpenRouter, verified; provider variants $0.30–$0.39 / $1.93–$2.45); open weights self-hostable (Apache 2.0)
- **Architecture:** Hybrid Gated DeltaNet linear attention + sparse MoE, 397B total / 17B active, 60 layers, 512 experts (10 routed + 1 shared per token), 248K vocab, multi-token prediction (NVIDIA NIM card, verified); open weights, Apache 2.0

### Raw benchmarks found

> All numbers vendor-reported (Qwen3.5 launch blog / HF model card, Feb 2026) unless marked third-party. Peer-column context (GPT-5.2, Claude 4.5 Opus, Gemini-3 Pro) comes from the same vendor table.

Agent / tool use:

- Terminal-Bench 2.1: **52.5% Terminal Bench 2** (vendor table; peers 50.8–59.3)
- Tau3-Banking / Tau2-Bench: **86.7% TAU2-Bench** (vendor table; peers 77.0–91.6) — Tau3 proper: no verified public score found
- GDPval-AA: **14.8% GDPval-AA** (Artificial Analysis, third-party — weak on the AA scale)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **72.9% BFCL-V4**, **49.7% VITA-Bench**, **34.3% DeepPlanning** (vendor table); MCPMark/Search-agent rows use nonstandard context-folding setups (provisional)

Reasoning / knowledge:

- GPQA Diamond: **88.4%** (vendor table; peers 87.0–92.4)
- HLE: **28.7% (37.6% HLE-Verified)** (vendor table; peers 30.1–35.5 / 37.6–48)
- LCR / MLCR: **no verified public score found**
- CritPt: **1.7%** (Artificial Analysis, third-party — weak)
- Artificial Analysis Intelligence Index / BenchLM overall: **87.8% MMLU-Pro, 94.9% MMLU-Redux, 70.4% SuperGPQA, 93.0% C-Eval, 90.98% BBH** (vendor table); AA Index proper: no verified public score found
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **76.4% SWE-bench Verified, 69.3% Multilingual** (vendor table; peers 75.3–80.9)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **68.3% SecCodeBench** (vendor table); DeepSWE proper: no verified public score found

Long context:

- No verified MRCR / RULER / GraphWalks retrieval score found; native 262K with 1M-by-YaRN claim unverified by measurement.

### Normalized scores (1–100)

- **Tool use: 84/100.** TAU2 86.7 near-top plus BFCL 72.9 show strong tool reliability; capped by mid Terminal Bench 2 (52.5) and a weak AA GDPval 14.8.
- **Reasoning: 86/100.** GPQA 88.4 + MMLU-Pro 87.8 + BBH 91.0 + SuperGPQA 70.4 form a strong knowledge core; capped by HLE <30 and CritPt 1.7.
- **Context window: 74/100.** 262K native verified (1M only via YaRN scaling or hosted Plus) with no measured retention number; tier mapping puts 262K in the mid-70s.
- **Multimodal: 80/100.** Native text/image/video fusion with 32-language OCR and GUI control verified architecturally; capped by text-only output, no audio I/O, and no measured MMMU/VideoMME number.
- **Coding: 86/100.** SWE-bench Verified 76.4 + Multilingual 69.3 + SecCode 68.3 at the top of its weight class; capped by Terminal Bench 2 (52.5) and no verified DeepSWE/LiveCode rows.
- **Cost efficiency: 91/100.** ~$0.39/$2.34 with Apache-2.0 self-host option — cheap input for a 397B-class model, output price the only drag; no free tier.
- **Overall Score: 82/100.** Mean of the five quality dims (84+86+74+80+86)/5 = 82.0 → 82; best fit as an open-weights agentic all-rounder — strong tool/reasoning/coding core, reach for the hosted Plus or a 1M-native model for million-token work.

---

## Signature

- Provided by: **Muse Spark 1.3 (meta/muse-spark-1.3)** — 2026-10-07
- Method: public internet research (Qwen3.5 Alibaba Cloud launch blog, Qwen HF model card, QwenLM/Qwen3.5 release log, OpenRouter + NVIDIA NIM model cards, SemiAnalysis/InferenceX release analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
