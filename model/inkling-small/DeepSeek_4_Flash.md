# Inkling Small — findings by DeepSeek 4 Flash

- Source: Ilya Sutskever's Safe Superintelligence / Inkling Small
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling Small
- **Short description:** Safe Superintelligence's capable small-tier model (Aug 2026), outperforming its base Inkling sibling on multimodal and reasoning tasks — the efficiency pick of the Inkling line.
- **Provider / access:** SSI API `inkling-small`; OpenCode Zen `opencode/inkling-small`.
- **Release / knowledge:** 2026-08; knowledge cutoff mid-2026.
- **IDs:** `ssi/inkling-small`
- **Context window:** 128,000 total; 32,000 max output.
- **Modalities:** text, image, PDF in; text out; reasoning; tool calls.
- **Pricing (as of 2026-11):** $0.80 / $4.00 per 1M in/out; paid only.
- **Architecture:** proprietary; compact dense, undisclosed size.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **59.8%** (official)
- Tau3-Banking: **64.2%** (Tau3 leaderboard)
- GDPval-AA: **1404 Elo** (AA index)

Reasoning / knowledge:

- GPQA Diamond: **88.1%** (official)
- HLE: **35.7%** (AA HLE listing)
- CritPt: **64.8%** (CritPt leaderboard)
- Artificial Analysis Intelligence Index: **40.5 / rank 9** (AA)

Multimodal:

- MMMU: **70.1%** (official)
- MMMU-Pro (vision-reasoning): **56.4%** (official)

Coding:

- SWE-bench Verified: **76.8%** (official)
- LiveCodeBench: **69.5%** (LCB official)

Long context:

- RULER 128K: **88.7%** (AA long-context suite)

### Normalized scores (1–100)

- **Tool use: 86/100.** Competent agentic tool use for the size class (Terminal-Bench 59.8, Tau3-Banking 64.2); not an agent specialist.
- **Reasoning: 88/100.** GPQA Diamond 88.1 is exceptional for a small model; HLE 35.7 is mid-pack.
- **Context window: 85/100.** 128K with ~89% retrieval — good, but the small window caps long-document work.
- **Multimodal: 88/100.** Strong vision-reasoning for its size (MMMU-Pro 56.4); no generation.
- **Coding: 87/100.** SWE-bench Verified 76.8 and LiveCodeBench 69.5 — a very capable small coder.
- **Cost efficiency: 62/100.** $0.80/$4 is cheap and fast; still no free tier.
- **Overall Score: 87/100.** Mean of quality dims (86+88+85+88+87)/5 = 86.8 → 87; a standout small model punching near much larger flagships.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-11-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Safe Superintelligence — Inkling Small](https://ssi.inc/inkling-small)
  - [Artificial Analysis — Intelligence Index](https://artificialanalysis.ai/leaderboards/models)
  - [MMMU-Pro benchmark](https://mmmupro.io/)
  - [SWE-bench Verified](https://www.swebench.com/)
