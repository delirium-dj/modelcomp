# Qwen 3.5 35B A3B — findings by DeepSeek 4 Flash

- Source: Alibaba / Qwen 3.5 35B A3B
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 35B A3B
- **Short description:** Alibaba's activation-efficient MoE (Apr 2026), 35B total params with 3B active per token — a fast, self-hostable multilingual model that punches above its active-parameter budget on reasoning and doc tasks.
- **Provider / access:** Alibaba Cloud DashScope `qwen3.5-35b-a3b`; OpenCode Zen `opencode/qwen-3.5-35b-a3b`; open weights.
- **Release / knowledge:** 2026-04; knowledge cutoff early 2026.
- **IDs:** `alibaba/qwen3.5-35b-a3b`
- **Context window:** 131,072 (128K) total; 16,384 (16K) max output.
- **Modalities:** text, PDF in; text out; tool calls; JSON mode.
- **Pricing (as of 2026-11):** $0.20 / $1.00 per 1M in/out; open weights.
- **Architecture:** MoE, 35B total / 3B active (disclosed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **50.6%** (official)
- Tau3-Banking: **54.9%** (Tau3 leaderboard)

Reasoning / knowledge:

- GPQA Diamond: **80.6%** (official)
- HLE: **26.8%** (AA HLE listing)
- CritPt: **57.7%** (CritPt leaderboard)
- Artificial Analysis Intelligence Index: **35.2 / rank 18** (AA)

Coding:

- SWE-bench Verified: **64.2%** (official)
- LiveCodeBench: **58.1%** (LCB official)

Long context:

- RULER 128K: **83.6%** (AA long-context suite)

### Normalized scores (1–100)

- **Tool use: 78/100.** Capable agentic tool use (Terminal-Bench 50.6, Tau3-Banking 54.9) for a 3B-active model.
- **Reasoning: 81/100.** GPQA Diamond 80.6 with good multilingual reasoning at low compute.
- **Context window: 79/100.** 128K at ~84% retrieval — solid for the active budget.
- **Multimodal: 77/100.** Text/PDF in only.
- **Coding: 80/100.** SWE-bench Verified 64.2 and LiveCodeBench 58.1 — efficient, competent coder.
- **Cost efficiency: 76/100.** Exceptionally cheap and fast; open weights.
- **Overall Score: 79/100.** Mean of quality dims (78+81+79+77+80)/5 = 79.0; a top compute-per-dollar open MoE.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-11-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Qwen — Qwen 3.5 35B A3B](https://qwenlm.github.io/blog/qwen3.5-35b-a3b/)
  - [Hugging Face — Qwen 3.5 35B A3B weights](https://huggingface.co/Qwen/Qwen3.5-35B-A3B)
  - [Artificial Analysis — Intelligence Index](https://artificialanalysis.ai/leaderboards/models)
  - [SWE-bench Verified](https://www.swebench.com/)
