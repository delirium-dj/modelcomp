# GPT-5.1 Codex — findings by DeepSeek 4 Flash

- Source: OpenAI / GPT-5.1 Codex
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1 Codex
- **Short description:** OpenAI's coding-specialist Codex of the GPT-5.1 generation (Mar 2026), tuned for software-engineering agents and repo-scale edits — a dedicated coding SKU with distinct weights from the base GPT-5.1.
- **Provider / access:** OpenAI API `gpt-5.1-codex` (Responses API); OpenCode Zen `opencode/gpt-5.1-codex`.
- **Release / knowledge:** 2026-03; knowledge cutoff early 2026.
- **IDs:** `openai/gpt-5.1-codex`
- **Context window:** 128,000 total; 32,000 max output.
- **Modalities:** text in; text out; tool calls; code interpreter; structured outputs.
- **Pricing (as of 2026-11):** $1.50 / $10.00 per 1M in/out; paid only.
- **Architecture:** proprietary; coding-specialized fine-tuning on the GPT-5.1 base.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **64.2%** (official)
- Tau3-Banking: **69.3%** (Tau3 leaderboard)
- GDPval-AA: **1441 Elo** (AA index)
- Toolathon: **77.5%** (AA tool suite)

Reasoning / knowledge:

- GPQA Diamond: **85.1%** (official)
- HLE: **31.8%** (AA HLE listing)

Coding:

- SWE-bench Verified: **82.4%** (official)
- SWE-Pro (resolved): **45.7%** (official)
- LiveCodeBench: **74.1%** (LCB official)

Long context:

- MRCR 128K: **86.2%** (AA long-context suite)

### Normalized scores (1–100)

- **Tool use: 87/100.** Strong coding-agent tool use (Terminal-Bench 64.2, Tau3-Banking 69.3), tuned for engineering loops.
- **Reasoning: 85/100.** GPQA Diamond 85.1 is solid; HLE 31.8 is mid-pack — general reasoning is not the focus.
- **Context window: 83/100.** 128K at ~86% retrieval — adequate for most repos.
- **Multimodal: 70/100.** Text-in focused; no image understanding in this SKU.
- **Coding: 90/100.** SWE-bench Verified 82.4 and LiveCodeBench 74.1 — a dedicated coding specialist.
- **Cost efficiency: 44/100.** $1.50/$10 mid-premium; paid only.
- **Overall Score: 83/100.** Mean of quality dims (87+85+83+70+90)/5 = 83.0; a single-purpose but very capable engineering-agent model.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-11-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI — GPT-5.1 Codex](https://openai.com/index/gpt-5-1-codex/)
  - [Artificial Analysis — Intelligence Index](https://artificialanalysis.ai/leaderboards/models)
  - [SWE-bench Verified](https://www.swebench.com/)
  - [LiveCodeBench](https://livecodebench.github.io/)
