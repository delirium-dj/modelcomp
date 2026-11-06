# Qwen 3.5 Flash — findings by DeepSeek 4 Flash

- Source: Alibaba / Qwen 3.5 Flash
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 Flash
- **Short description:** Alibaba's fast-tier Flash (May 2026) of the Qwen 3.5 generation, the affordable high-throughput lane for multilingual chat, RAG and structured extraction — a dedicated Flash SKU below the 3.5 Plus/Max tiers.
- **Provider / access:** Alibaba Cloud DashScope `qwen3.5-flash`; OpenCode Zen `opencode/qwen-3.5-flash`; open weights.
- **Release / knowledge:** 2026-05; knowledge cutoff early 2026.
- **IDs:** `alibaba/qwen3.5-flash`
- **Context window:** 131,072 (128K) total; 24,576 (24K) max output.
- **Modalities:** text, image, PDF in; text out; tool calls; JSON mode.
- **Pricing (as of 2026-11):** $0.25 / $1.00 per 1M in/out; open weights.
- **Architecture:** MoE; undisclosed, Flash-class.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **52.1%** (official)
- Tau3-Banking: **56.4%** (Tau3 leaderboard)

Reasoning / knowledge:

- GPQA Diamond: **80.9%** (official)
- HLE: **27.2%** (AA HLE listing)
- CritPt: **57.9%** (CritPt leaderboard)
- Artificial Analysis Intelligence Index: **35.5 / rank 17** (AA)

Coding:

- SWE-bench Verified: **64.8%** (official)
- LiveCodeBench: **58.6%** (LCB official)

Long context:

- RULER 128K: **84.4%** (AA long-context suite)

### Normalized scores (1–100)

- **Tool use: 78/100.** Solid agentic tool use (Terminal-Bench 52.1, Tau3-Banking 56.4) at Flash speed.
- **Reasoning: 81/100.** GPQA Diamond 80.9 with good multilingual reasoning; HLE 27.2 is mid-pack.
- **Context window: 80/100.** 128K at ~84% retrieval — fine for RAG pipelines.
- **Multimodal: 79/100.** Image/PDF in at basic quality; no generation.
- **Coding: 80/100.** SWE-bench Verified 64.8 and LiveCodeBench 58.6 — efficient, competent.
- **Cost efficiency: 75/100.** Very cheap high-throughput lane; open weights.
- **Overall Score: 80/100.** Mean of quality dims (78+81+80+79+80)/5 = 79.6 → 80; a dependable multilingual Flash for high-volume work.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-11-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Qwen — Qwen 3.5 Flash](https://qwenlm.github.io/blog/qwen3.5-flash/)
  - [Hugging Face — Qwen 3.5 Flash weights](https://huggingface.co/Qwen/Qwen3.5-Flash)
  - [Artificial Analysis — Intelligence Index](https://artificialanalysis.ai/leaderboards/models)
  - [SWE-bench Verified](https://www.swebench.com/)
