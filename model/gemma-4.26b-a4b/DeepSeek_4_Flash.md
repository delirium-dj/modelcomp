# Gemma 4 26B A4B — findings by DeepSeek 4 Flash

- Source: Google / Gemma 4 26B A4B
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 26B A4B
- **Short description:** Google's open-weights MoE (May 2026), 26B total params with 4B active — a self-hostable Korean-optimized Gemma 4 variant with solid multilingual and efficient serving, a capable research/deployment model below the full-scale Gemma releases.
- **Provider / access:** Google AI Studio `gemma-4-26b-a4b`; OpenCode Zen `opencode/gemma-4.26b-a4b`; open weights on Hugging Face (Kaggle).
- **Release / knowledge:** 2026-05; knowledge cutoff early 2026.
- **IDs:** `google/gemma-4-26b-a4b`
- **Context window:** 131,072 (128K) total; 8,192 (8K) max output.
- **Modalities:** text, PDF in; text out; tool calls; JSON mode.
- **Pricing (as of 2026-11):** $0.15 / $0.60 per 1M in/out; open weights.
- **Architecture:** MoE, 26B total / 4B active (disclosed); open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **47.8%** (official)
- Tau3-Banking: **51.6%** (Tau3 leaderboard)

Reasoning / knowledge:

- GPQA Diamond: **78.1%** (official)
- HLE: **23.9%** (AA HLE listing)
- CritPt: **55.1%** (CritPt leaderboard)
- Artificial Analysis Intelligence Index: **33.7 / rank 22** (AA)

Coding:

- SWE-bench Verified: **60.3%** (official)
- LiveCodeBench: **55.2%** (LCB official)

Long context:

- RULER 128K: **81.9%** (AA long-context suite)

### Normalized scores (1–100)

- **Tool use: 77/100.** Decent agentic tool use (Terminal-Bench 47.8, Tau3-Banking 51.6) for a 4B-active open model.
- **Reasoning: 80/100.** GPQA Diamond 78.1 with good multilingual (incl. Korean) reasoning; HLE 23.9 is mid-pack.
- **Context window: 79/100.** 128K at ~82% retrieval — adequate.
- **Multimodal: 77/100.** Text/PDF in only; no image or generation.
- **Coding: 79/100.** SWE-bench Verified 60.3 and LiveCodeBench 55.2 — light coding.
- **Cost efficiency: 80/100.** Very cheap and fully self-hostable.
- **Overall Score: 78/100.** Mean of quality dims (77+80+79+77+79)/5 = 78.4 → 78; an efficient open MoE for multilingual deployment.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-11-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google — Gemma 4 26B A4B](https://blog.google/technology/developers/gemma-4/)
  - [Hugging Face — Gemma 4 26B A4B weights](https://huggingface.co/google/gemma-4-26b-a4b)
  - [Artificial Analysis — Intelligence Index](https://artificialanalysis.ai/leaderboards/models)
  - [SWE-bench Verified](https://www.swebench.com/)
