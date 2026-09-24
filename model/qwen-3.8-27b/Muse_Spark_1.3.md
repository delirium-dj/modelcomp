# Qwen3.8-27B — findings by Muse Spark 1.3

- Source: Alibaba/Qwen3.8-27B (`Qwen/Qwen3.8-27B`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-27B
- **Short description:** Alibaba Qwen dense 27B native vision-language open-weights model for coding, agentic workflows, and office automation. Top use case is self-hosted coding agents on single-GPU hardware.
- **Provider / access:** Open weights on Hugging Face + ModelScope (Apache-2.0); Alibaba Cloud Model Studio / Qwen Cloud; third-party hosted APIs (no first-party metered API for this checkpoint). Chat Completions-style API via serving stacks (vLLM, SGLang, llama.cpp).
- **Release / knowledge:** 2026-08-14 release (Alibaba Cloud blog 2026-08-17, vendor tables 2026-08-14); knowledge cutoff not officially published — no verified cutoff found.
- **IDs:** `Qwen/Qwen3.8-27B` (no Free ID exists on Zen — self-host / third-party API only)
- **Context window:** 262,144 tokens native, extendable to 1,048,576 via YaRN (recommended 131K response cap for agentic workloads) — verified via vendor model card and Alibaba Cloud blog (Aug 2026).
- **Modalities:** text/image/video in; text out; thinking-mode toggle; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-09-24):** Open weights (Apache-2.0): self-hosting free plus GPU rental (BF16 ~51.8GiB, FP8 ~28.8GiB); third-party API pricing varies, well under Qwen3.8-Max $2/$6 rate; no Zen Free ID.
- **Architecture:** dense 27.78B params, 64 layers (48 Gated DeltaNet linear-attention + 16 full-attention), native multimodal, multi-token-prediction head for speculative decoding; Apache-2.0.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **73.0%** (Alibaba launch table 2026-08-14 vendor run, Claude Code harness; vs Opus 4.6 Max 78.2%)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- OSWorld-Verified: **84.3%** (Alibaba launch table 2026-08-14; vs Opus 4.6 Max 72.7%)
- WebArena-Verified: **64.8%** (Alibaba launch table via HokAI aggregator; browser UI from screenshots)
- AndroidWorld: **81.9%** (Alibaba launch table via AI/TLDR aggregator; mobile use)
- Agents' Last Exam Pass@1: **20.4%** (Alibaba launch table; vs Qwen3.7-Plus 13.2%)

Reasoning / knowledge:

- GPQA Diamond: **89.2%** (Alibaba launch table 2026-08-14; vs Opus 4.6 Max 91.3%)
- HLE: **30.8% without tools** (Alibaba launch table 2026-08-14; vs Opus 4.6 Max 40.0%)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- IFBench: **79.5%** (Alibaba launch table; instruction following; vs Opus 4.6 Max 62.5%)
- MathVision with code interpreter: **94.6%** (Alibaba figures via HokAI aggregator; vendor notes fixed ground-truth annotations, provisional)

Coding:

- SWE-bench Verified / SWE-Pro: **61.7% SWE-bench Pro** (Alibaba launch table 2026-08-14; vendor notes corrected problematic tasks and re-evaluated baselines, so not directly comparable to unmodified leaderboard)
- LiveCodeBench: **90.3% LiveCodeBench v6** (Alibaba launch table; vs Opus 4.6 Max 88.8%)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **DeepSWE 1.1 42.2%** (Alibaba launch table; vs Qwen3.6-27B 13.3%); **QwenSWEBench 79.0%** (Alibaba in-house bench, provisional — no published task list); **NL2Repo-Bench 42.3%** (Alibaba launch table); **CoWorkBench 70.7% / JobBench 33.4%** (Alibaba launch table, in-house office-work benches)

Long context:

- No verified MRCR / RULER / GraphWalks score found; vendor reports 262K native with YaRN extension to 1M but notes static YaRN can reduce short-prompt quality — extension suits long documents/video rather than everyday use.

### Normalized scores (1–100)

- **Tool use: 80/100.** TB 2.1 73.0% plus OSWorld 84.3% and AndroidWorld 81.9% show strong computer/mobile agency; capped by Opus 4.6 Max lead on TB 2.1 (78.2%).
- **Reasoning: 79/100.** GPQA 89.2% plus IFBench 79.5% show strong science and instruction following; capped by HLE 30.8% trailing Opus 40.0% by nearly ten points.
- **Context window: 80/100.** 262K native with 1M YaRN extension covers hour-scale video and long docs; capped by vendor quality caveat on YaRN-short prompts and no verified retrieval curve.
- **Multimodal: 85/100.** Native text/image/video input with OSWorld 84.3% and MathVision 94.6% show strong vision-text; capped by text-only output.
- **Coding: 84/100.** SWE-Pro 61.7% (amended set) plus LiveCodeBench v6 90.3% show top open-weight coding; capped by amended-set comparability and DeepSWE 42.2% mid-range.
- **Cost efficiency: 80/100.** Apache-2.0 self-host free on single-GPU (quantized 24–48GB) with cheap third-party APIs; GPU rental cost caps below zero-cost hosted free tiers.
- **Overall Score: 82/100.** Mean of the five non-cost dims (80+79+80+85+84)/5 = 81.6 → 82; best-fit self-hosted coding and computer-use agent where open weights outweigh reasoning gap.

---

## Signature

- Provided by: **Muse Spark 1.3 (opencode/muse-spark-1.3-contributor-free)** — 2026-09-24
- Method: public internet research (Alibaba Cloud blog 2026-08-17, Qwen3.8-27B vendor tables via AI/TLDR and HokAI aggregators, DataNorth and OfficeChai analyses 2026-08-14/17); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
