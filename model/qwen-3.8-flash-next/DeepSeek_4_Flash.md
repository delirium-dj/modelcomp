# Qwen 3.8 Flash Next — findings by DeepSeek 4 Flash

- Source: Alibaba / Qwen 3.8 Flash Next
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash Next
- **Short description:** Alibaba's efficiency-refreshed Flash (Oct 2026) — the "Next" fast lane of Qwen 3.8 with better reasoning and coding density than the base Flash, an incremental improvement rather than a separate architecture.
- **Provider / access:** Alibaba Cloud DashScope `qwen3.8-flash-next`; OpenCode Zen `opencode/qwen-3.8-flash-next`.
- **Release / knowledge:** 2026-10; knowledge cutoff mid-2026.
- **IDs:** `alibaba/qwen3.8-flash-next`
- **Context window:** 1,048,576 (1M) total; 32,000 max output.
- **Modalities:** text, image, PDF in; text out; reasoning; tool calls; JSON mode.
- **Pricing (as of 2026-11):** $0.60 / $2.80 per 1M in/out; paid only.
- **Architecture:** proprietary MoE; undisclosed params.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **58.9%** (official)
- Tau3-Banking: **62.7%** (Tau3 leaderboard)
- GDPval-AA: **1389 Elo** (AA index)

Reasoning / knowledge:

- GPQA Diamond: **87.6%** (official)
- HLE: **34.9%** (AA HLE listing)
- CritPt: **63.9%** (CritPt leaderboard)
- Artificial Analysis Intelligence Index: **40.1 / rank 10** (AA)

Coding:

- SWE-bench Verified: **75.4%** (official)
- LiveCodeBench: **68.2%** (LCB official)

Long context:

- RULER 1M: **88.3%** (AA long-context suite at full window)

### Normalized scores (1–100)

- **Tool use: 85/100.** Solid agentic tool use for the price (Terminal-Bench 58.9, Tau3-Banking 62.7), tuned for latency.
- **Reasoning: 87/100.** GPQA Diamond 87.6 with good multilingual reasoning; HLE 34.9 is mid-pack.
- **Context window: 87/100.** Full 1M at ~88% retrieval — impressive breadth at Flash speed.
- **Multimodal: 84/100.** Image/PDF understanding at good quality; no audio/video or generation.
- **Coding: 86/100.** SWE-bench Verified 75.4 and LiveCodeBench 68.2 — efficient, code-competent Flash.
- **Cost efficiency: 68/100.** $0.60/$2.80 is very cheap for the capability; still no free lane.
- **Overall Score: 86/100.** Mean of quality dims (85+87+87+84+86)/5 = 85.8 → 86; a top cost-per-quality fast model just below the base Flash.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-11-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Alibaba Cloud — Qwen 3.8 Flash Next](https://help.aliyun.com/zh/model-studio/models)
  - [Artificial Analysis — Intelligence Index](https://artificialanalysis.ai/leaderboards/models)
  - [Qwen Blog](https://qwenlm.github.io/blog/)
  - [SWE-bench Verified](https://www.swebench.com/)
