# Mistral Large 4 — findings by DeepSeek 4 Flash

- Source: Mistral AI / Mistral Large 4
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 4
- **Short description:** Mistral AI's flagship Large 4 (Mar 2026), a strongly internationalized general model with frugal MoE design — Mistral's European answer at the frontier, strong on structured data and multilingual work.
- **Provider / access:** Mistral API `mistral-large-4`; OpenCode Zen `opencode/mistral-large-4`; Mistral on Azure AI Foundry.
- **Release / knowledge:** 2026-03; knowledge cutoff early 2026.
- **IDs:** `mistral/mistral-large-4`
- **Context window:** 262,000 (256K) total; 32,768 (32K) max output.
- **Modalities:** text, PDF, image in; text out; reasoning; tool calls; structured outputs.
- **Pricing (as of 2026-11):** $1.20 / $7.00 per 1M in/out; paid only.
- **Architecture:** MoE; ~470B total / ~64B active (disclosed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **59.7%** (official)
- Tau3-Banking: **65.4%** (Tau3 leaderboard)
- GDPval-AA: **1408 Elo** (AA index)

Reasoning / knowledge:

- GPQA Diamond: **87.4%** (official)
- HLE: **35.2%** (AA HLE listing)
- CritPt: **64.7%** (CritPt leaderboard)
- Artificial Analysis Intelligence Index: **40.4 / rank 9** (AA)

Coding:

- SWE-bench Verified: **74.9%** (official)
- LiveCodeBench: **67.8%** (LCB official)

Long context:

- RULER 256K: **88.9%** (AA long-context suite)

### Normalized scores (1–100)

- **Tool use: 85/100.** Competent agentic tool use (Terminal-Bench 59.7, Tau3-Banking 65.4); functional but not an agent specialist.
- **Reasoning: 88/100.** GPQA Diamond 87.4 with strong multilingual and structured reasoning; HLE 35.2 is mid-pack.
- **Context window: 88/100.** 256K at ~89% retrieval — good breadth for enterprise docs.
- **Multimodal: 84/100.** Solid image/PDF understanding; no generation.
- **Coding: 86/100.** SWE-bench Verified 74.9 and LiveCodeBench 67.8 — respectable but below the top coders.
- **Cost efficiency: 52/100.** $1.20/$7 undercuts US flagships with strong EU data-governance posture.
- **Overall Score: 86/100.** Mean of quality dims (85+88+88+84+86)/5 = 86.2 → 86; a solid sovereign-European general model, strongest on multilingual enterprise work.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-11-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Mistral AI — Mistral Large 4](https://mistral.ai/news/mistral-large-4)
  - [Mistral documentation](https://docs.mistral.ai/)
  - [Artificial Analysis — Intelligence Index](https://artificialanalysis.ai/leaderboards/models)
  - [SWE-bench Verified](https://www.swebench.com/)
