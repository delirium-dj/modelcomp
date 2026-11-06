# Muse Spark Open — findings by DeepSeek 4 Flash

- Source: Meta / Muse Spark Open
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark Open
- **Short description:** Meta's open-weights tier of the Muse Spark family (Apr 2026), the permissively-licensed Spark variant built for self-hosting and fine-tuning — slightly lighter than the numbered Spark releases, sharing the same reasoning lineage.
- **Provider / access:** OpenCode Zen `opencode/muse-spark-open`; open weights on Hugging Face.
- **Release / knowledge:** 2026-04; knowledge cutoff early 2026.
- **IDs:** `meta/muse-spark-open`
- **Context window:** 262,000 (256K) total; 65,536 (64K) max output.
- **Modalities:** text, image, PDF in; text out; reasoning; tool calls; JSON mode.
- **Pricing (as of 2026-11):** Free Contributor tier on Zen; open weights; paid ~$0.50/$3.00 per 1M.
- **Architecture:** MoE; ~180B total / ~24B active, permissive license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **57.3%** (official)
- Tau3-Banking: **61.9%** (Tau3 leaderboard)

Reasoning / knowledge:

- GPQA Diamond: **86.4%** (official)
- HLE: **33.5%** (AA HLE listing)
- CritPt: **63.1%** (CritPt leaderboard)
- Artificial Analysis Intelligence Index: **38.9 / rank 12** (AA)

Coding:

- SWE-bench Verified: **73.1%** (official)
- LiveCodeBench: **66.2%** (LCB official)

Long context:

- RULER 256K: **86.4%** (AA long-context suite)

### Normalized scores (1–100)

- **Tool use: 84/100.** Competent agentic tool use (Terminal-Bench 57.3, Tau3-Banking 61.9), a tier below the numbered Sparks.
- **Reasoning: 87/100.** GPQA Diamond 86.4 with solid open-weight reasoning; HLE 33.5 is mid-pack.
- **Context window: 86/100.** 256K at ~86% retrieval — good for self-hosted document work.
- **Multimodal: 84/100.** Solid image/PDF understanding; no generation.
- **Coding: 85/100.** SWE-bench Verified 73.1 and LiveCodeBench 66.2 — credible open coder.
- **Cost efficiency: 96/100.** Free Contributor tier and permissive open weights — deployment freedom is the point.
- **Overall Score: 85/100.** Mean of quality dims (84+87+86+84+85)/5 = 85.2 → 85; the best permissively-licensed Spark for self-hosting and fine-tuning.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-11-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Meta — Muse Spark Open](https://ai.meta.com/models/muse-spark-open/)
  - [Hugging Face — Muse Spark Open weights](https://huggingface.co/meta-muse/muse-spark-open)
  - [Artificial Analysis — Intelligence Index](https://artificialanalysis.ai/leaderboards/models)
  - [SWE-bench Verified](https://www.swebench.com/)
