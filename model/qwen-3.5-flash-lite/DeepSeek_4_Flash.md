# Qwen 3.5 Flash Lite — findings by DeepSeek 4 Flash

- Source: Alibaba / Qwen 3.5 Flash Lite
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 Flash Lite
- **Short description:** Alibaba's lightweight Flash (Jun 2026), the smallest and fastest lane of the Qwen 3.5 generation for high-volume classification, extraction and RAG — noticeably lighter than Qwen 3.5 Flash.
- **Provider / access:** Alibaba Cloud DashScope `qwen3.5-flash-lite`; OpenCode Zen `opencode/qwen-3.5-flash-lite`; open weights.
- **Release / knowledge:** 2026-06; knowledge cutoff early 2026.
- **IDs:** `alibaba/qwen3.5-flash-lite`
- **Context window:** 131,072 (128K) total; 16,384 (16K) max output.
- **Modalities:** text, image, PDF in; text out; tool calls; JSON mode.
- **Pricing (as of 2026-11):** $0.10 / $0.40 per 1M in/out; open weights.
- **Architecture:** MoE; undisclosed, lite-class.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **48.6%** (official)
- Tau3-Banking: **52.9%** (Tau3 leaderboard)

Reasoning / knowledge:

- GPQA Diamond: **78.9%** (official)
- HLE: **24.6%** (AA HLE listing)
- CritPt: **55.8%** (CritPt leaderboard)
- Artificial Analysis Intelligence Index: **34.1 / rank 21** (AA)

Coding:

- SWE-bench Verified: **61.7%** (official)
- LiveCodeBench: **55.9%** (LCB official)

Long context:

- RULER 128K: **82.7%** (AA long-context suite)

### Normalized scores (1–100)

- **Tool use: 77/100.** Adequate agentic tool use (Terminal-Bench 48.6, Tau3-Banking 52.9) for high-volume calls.
- **Reasoning: 80/100.** GPQA Diamond 78.9 with good multilingual basics; HLE 24.6 is mid-pack.
- **Context window: 79/100.** 128K at ~83% retrieval — fine for RAG.
- **Multimodal: 78/100.** Basic image/PDF understanding; no generation.
- **Coding: 79/100.** SWE-bench Verified 61.7 and LiveCodeBench 55.9 — light coding only.
- **Cost efficiency: 80/100.** Ultra-cheap; the cost king of the Qwen 3.5 line.
- **Overall Score: 79/100.** Mean of quality dims (77+80+79+78+79)/5 = 78.6 → 79; a cost-optimized workhorse for volume workflows.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-11-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Qwen — Qwen 3.5 Flash Lite](https://qwenlm.github.io/blog/qwen3.5-flash-lite/)
  - [Hugging Face — Qwen 3.5 Flash Lite weights](https://huggingface.co/Qwen/Qwen3.5-Flash-Lite)
  - [Artificial Analysis — Intelligence Index](https://artificialanalysis.ai/leaderboards/models)
  - [SWE-bench Verified](https://www.swebench.com/)
