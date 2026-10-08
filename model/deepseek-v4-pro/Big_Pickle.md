# DeepSeek V4 Pro — findings by Big Pickle

- Source: DeepSeek (`DeepSeek-V4-Pro`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Pro (a.k.a. DeepSeek-V4-Pro, official 0813 refresh)
- **Short description:** DeepSeek's flagship 1.6T-total/49B-active open-weights MoE for advanced reasoning, software engineering and long-running agents, with hybrid thinking/non-thinking modes and a 1M-token default window.
- **Provider / access:** DeepSeek official API (`deepseek-v4-pro`), DeepInfra, Lightning AI, and OpenCode Zen (`opencode/deepseek-v4-pro`); weights on Hugging Face under MIT. Chat Completions-compatible.
- **Release / knowledge:** Preview released 2026-04-24; official refresh (0813) August 2026. 33T pre-training tokens. Knowledge cutoff not documented.
- **IDs:** `deepseek-v4-pro` / `opencode/deepseek-v4-pro` (paid on Zen; MIT open weights make self-hosting/licensing trivially free).
- **Context window:** 1,000,000 tokens total, up to 384,000 max output (official API); verified via DeepSeek card/configs — this supersedes any 128K folder-stub notes.
- **Modalities:** Text in/out only; thinking/non-thinking modes (reasoning_effort selectable), persistent reasoning across tool calls, tool calling, JSON/function workflows.
- **Pricing (as of 2026-09-23):** DeepSeek official list ~$1.74 in / $3.48 out per 1M (cache hit $0.145/$0.044); launch promo was $0.435/$0.87. DeepInfra ~$1.04–$2.08 in / $2.08–$3.90 out by tier. Zen "standard pricing", exact rate not verified.
- **Architecture:** 1.6T total / 49B active MoE, hybrid Compressed Sparse Attention (CSA) + Heavily Compressed Attention (HCA) — 27% of V3.2 FLOPs and 10% of KV cache at 1M context; FP4 experts + FP8 base. MIT license, 865 GB on disk.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **67.9%** (official, reasoning_effort=max; vs Claude Opus 4.6 65.4%)
- Terminal-Bench 2.1: **87.9%** (official Aug 13, 2026 agent leaderboard — Pro 0813; preview was 72.1)
- GDPval-AA: **1554** (leads open-weights per DeepInfra overview, ahead of GLM-5.1 1535 and MiniMax-M2.7 1514)
- Toolathon (multi-tool): **74.1%** (official 0813; preview 55.9)
- Cybergym: **83.3%**; DSBench-FullStack **71.1%**; DSBench-Hard **67.2%** (official 0813 agent benchmark release)
- Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **90.1%** (official, reasoning_effort=max)
- HLE (no tools): **37.7%** (official; vs Gemini-3.1-Pro High 44.4, Claude Opus 4.6 40.0)
- MMLU-Pro: **87.5%**; MMLU 5-shot **90.1%**
- HMMT 2026: **95.2%**; IMOAnswerBench **89.8%**; SimpleQA-Verified **57.9%**
- Artificial Analysis Intelligence Index: **52** (#2 among open-weights reasoning models per DeepInfra overview; leading open-weight = Kimi K2.6 at 54 in that snapshot)
- AA-Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **80.6%** (vs Claude Opus 4.6 80.8%, Gemini 3.1 Pro 80.6%)
- SWE-Bench Pro: **55.4%** (official)
- LiveCodeBench: **93.5%** (pass@1, Pro-Max)
- Codeforces rating: **3206** (#1, ahead of GPT-5.4 xHigh 3168)
- DeepSWE (SWE Bug Fix): **62.7%** (official 0813; preview 12.8)

Long context:

- MRCR 1M: **83.5** (retrieval accuracy across full 1M window; Claude Opus 4.6 leads at 92.9)

### Normalized scores (1–100)

- **Tool use: 90/100.** TB2.1 87.9% (0813), Toolathon 74.1%, GDPval-AA 1554 and Cybergym 83.3% are near-frontier; capped just below the ~88%+ frontier refs because several tool-use benches (Claw-Eval, Tau3) are unpublished.
- **Reasoning: 88/100.** GPQA 90.1% is frontier-tier and AA Index 52 leads (or ties) open weights; HLE 37.7% trails the 40%+ frontier ref, capping the score.
- **Context window: 90/100.** 1M native window with verified MRCR 1M 83.5 retrieval; under the ≥98% threshold at 512K that would earn 100.
- **Multimodal: 15/100.** Text in/out only — no image/audio/video input or output.
- **Coding: 86/100.** SWE-bench Verified 80.6%, LiveCodeBench 93.5% and Codeforces 3206 are elite; DeepSWE 62.7% sits below the 74%+ frontier ref that defines 90–100.
- **Cost efficiency: 82/100.** Open weights (MIT) are free to self-host, and the ~$1.74/$3.48 list is mid-price with strong cache prices; below the $0.875 promo or V4-Flash's $0.14/$0.28.
- **Overall Score: 74/100.** (90 + 88 + 90 + 15 + 86) / 5 = 73.8 → 74. Best-fit: frontier-adjacent open-weights reasoning/coding agent for hard SWE and agentic pipelines; text-only, so pair with an omni model for multimodal input.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-23
- Method: public internet research (DeepSeek official releases + cards, DeepInfra/Lightning overviews, trackers); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.6_Terra.md`, using the same headings.

---

## Submission checklist (delete before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`).
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No raw benchmark invented — "no verified public score found" used where missing.
5. Zero verified benchmarks for this model → file saved as `<Source_Name>.md.excluded`, not `.md` (see SELF-EXCLUSION above).