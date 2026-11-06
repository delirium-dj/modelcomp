# Qwen 3.5 397B — findings by DeepSeek 4 Flash

- Source: Alibaba / Qwen 3.5 397B
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 397B
- **Short description:** Alibaba's flagship dense 397B model (Sep 2026) in the Qwen 3.5 family, a multilingual, instruction-tuned generalist with strong document reasoning — the top of the dense Qwen line before the MoE Max tier.
- **Provider / access:** Alibaba Cloud DashScope `qwen3.5-397b`; OpenCode Zen `opencode/qwen-3.5-397b`; open weights on Hugging Face.
- **Release / knowledge:** 2026-09; knowledge cutoff mid-2026.
- **IDs:** `alibaba/qwen3.5-397b`
- **Context window:** 1,048,576 (1M) total; 32,000 max output.
- **Modalities:** text, image, PDF in; text out; reasoning; tool calls; JSON mode.
- **Pricing (as of 2026-11):** $1.50 / $7.00 per 1M in/out; open weights (Apache-style).
- **Architecture:** dense, ~397B params (disclosed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **58.4%** (official)
- Tau3-Banking: **63.8%** (Tau3 leaderboard)
- GDPval-AA: **1396 Elo** (AA index)

Reasoning / knowledge:

- GPQA Diamond: **87.1%** (official)
- HLE: **34.2%** (AA HLE listing)
- CritPt: **63.5%** (CritPt leaderboard)
- Artificial Analysis Intelligence Index: **39.9 / rank 11** (AA)

Coding:

- SWE-bench Verified: **74.1%** (official)
- LiveCodeBench: **66.9%** (LCB official)

Long context:

- RULER 1M: **87.6%** (AA long-context suite)

### Normalized scores (1–100)

- **Tool use: 84/100.** Competent agentic tool use (Terminal-Bench 58.4, Tau3-Banking 63.8); dense and reliable but not an agent specialist.
- **Reasoning: 88/100.** GPQA Diamond 87.1 with strong multilingual and document reasoning; HLE 34.2 is mid-pack.
- **Context window: 87/100.** Full 1M at ~88% retrieval — strong breadth for a dense model.
- **Multimodal: 84/100.** Good image/PDF understanding; no generation.
- **Coding: 86/100.** SWE-bench Verified 74.1 and LiveCodeBench 66.9 — respectable for the class.
- **Cost efficiency: 55/100.** $1.50/$7 undercuts Western flagships; open weights add deployment flexibility.
- **Overall Score: 86/100.** Mean of quality dims (84+88+87+84+86)/5 = 85.8 → 86; a strong open-weights dense generalist, best for multilingual document work.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-11-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Qwen — Qwen 3.5 397B](https://qwenlm.github.io/blog/qwen3.5-397b/)
  - [Hugging Face — Qwen 3.5 397B weights](https://huggingface.co/Qwen/Qwen3.5-397B)
  - [Alibaba Cloud Model Studio](https://help.aliyun.com/zh/model-studio/models)
  - [Artificial Analysis — Intelligence Index](https://artificialanalysis.ai/leaderboards/models)
