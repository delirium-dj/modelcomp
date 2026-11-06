# Gemma 4 12B Unified — findings by DeepSeek 4 Flash

- Source: Google / Gemma 4 12B Unified
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 12B Unified
- **Short description:** Google's single-architecture open model (Apr 2026), a 12B dense Gemma 4 handling text, image and PDF in one checkpoint — a compact all-in-one open model for modest self-hosted deployments.
- **Provider / access:** Google AI Studio `gemma-4-12b-unified`; OpenCode Zen `opencode/gemma-4.12b-unified`; open weights.
- **Release / knowledge:** 2026-04; knowledge cutoff early 2026.
- **IDs:** `google/gemma-4-12b-unified`
- **Context window:** 65,536 (64K) total; 8,192 (8K) max output.
- **Modalities:** text, image, PDF in; text out; multimodal understanding; JSON mode.
- **Pricing (as of 2026-11):** $0.10 / $0.40 per 1M in/out; open weights.
- **Architecture:** dense, ~12B params (disclosed); unified text+vision encoder.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **46.2%** (official)
- Tau3-Banking: **50.1%** (Tau3 leaderboard)

Reasoning / knowledge:

- GPQA Diamond: **77.4%** (official)
- HLE: **23.1%** (AA HLE listing)
- CritPt: **54.3%** (CritPt leaderboard)
- Artificial Analysis Intelligence Index: **33.2 / rank 24** (AA)

Multimodal:

- MMMU: **64.8%** (official)

Coding:

- SWE-bench Verified: **58.9%** (official)
- LiveCodeBench: **53.7%** (LCB official)

Long context:

- RULER 64K: **85.1%** (AA long-context suite)

### Normalized scores (1–100)

- **Tool use: 76/100.** Basic agentic tool use (Terminal-Bench 46.2, Tau3-Banking 50.1) for light automation.
- **Reasoning: 79/100.** GPQA Diamond 77.4 with decent multilingual reasoning; HLE 23.1 is mid-pack.
- **Context window: 77/100.** 64K at ~85% retrieval — smaller window but solid fidelity.
- **Multimodal: 82/100.** Unified text+vision in a single 12B checkpoint (MMMU 64.8) — the standout feature.
- **Coding: 78/100.** SWE-bench Verified 58.9 and LiveCodeBench 53.7 — light coding.
- **Cost efficiency: 81/100.** Extremely cheap and self-hostable.
- **Overall Score: 78/100.** Mean of quality dims (76+79+77+82+78)/5 = 78.4 → 78; a compact unified open model for on-device multimodal tasks.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-11-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google — Gemma 4 12B Unified](https://blog.google/technology/developers/gemma-4/)
  - [Hugging Face — Gemma 4 12B Unified weights](https://huggingface.co/google/gemma-4-12b-unified)
  - [Artificial Analysis — Intelligence Index](https://artificialanalysis.ai/leaderboards/models)
  - [MMMU benchmark](https://mmmu-benchmark.github.io/)
