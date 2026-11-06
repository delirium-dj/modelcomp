# Qwen 3.5 27B — findings by DeepSeek 4 Flash

- Source: Alibaba / Qwen 3.5 27B
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 27B
- **Short description:** Alibaba's mid-size dense Qwen 3.5 (Apr 2026), an open-weights 27B generalist optimized for multilingual text and document work — a strong self-hostable model at a moderate budget, below the larger Qwen tiers.
- **Provider / access:** Alibaba Cloud DashScope `qwen3.5-27b`; OpenCode Zen `opencode/qwen-3.5-27b`; open weights.
- **Release / knowledge:** 2026-04; knowledge cutoff early 2026.
- **IDs:** `alibaba/qwen3.5-27b`
- **Context window:** 131,072 (128K) total; 16,384 (16K) max output.
- **Modalities:** text, PDF in; text out; tool calls; JSON mode.
- **Pricing (as of 2026-11):** $0.30 / $1.20 per 1M in/out; open weights.
- **Architecture:** dense, ~27B params (disclosed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **51.3%** (official)
- Tau3-Banking: **55.8%** (Tau3 leaderboard)

Reasoning / knowledge:

- GPQA Diamond: **81.2%** (official)
- HLE: **27.9%** (AA HLE listing)
- CritPt: **58.4%** (CritPt leaderboard)
- Artificial Analysis Intelligence Index: **35.8 / rank 17** (AA)

Coding:

- SWE-bench Verified: **65.7%** (official)
- LiveCodeBench: **59.2%** (LCB official)

Long context:

- RULER 128K: **84.2%** (AA long-context suite)

### Normalized scores (1–100)

- **Tool use: 79/100.** Reasonable agentic tool use (Terminal-Bench 51.3, Tau3-Banking 55.8) for a mid-size open model.
- **Reasoning: 82/100.** GPQA Diamond 81.2 with strong multilingual reasoning; HLE 27.9 is mid-pack for the class.
- **Context window: 80/100.** 128K at ~84% retrieval — decent for the size.
- **Multimodal: 78/100.** Text/PDF in; no image understanding or generation.
- **Coding: 81/100.** SWE-bench Verified 65.7 and LiveCodeBench 59.2 — competent for the size.
- **Cost efficiency: 72/100.** Very cheap and self-hostable.
- **Overall Score: 80/100.** Mean of quality dims (79+82+80+78+81)/5 = 80.0; a budget multilingual generalist for light production use.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-11-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Qwen — Qwen 3.5 27B](https://qwenlm.github.io/blog/qwen3.5-27b/)
  - [Hugging Face — Qwen 3.5 27B weights](https://huggingface.co/Qwen/Qwen3.5-27B)
  - [Artificial Analysis — Intelligence Index](https://artificialanalysis.ai/leaderboards/models)
  - [SWE-bench Verified](https://www.swebench.com/)
