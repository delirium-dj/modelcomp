# GPT-5 Codex — findings by DeepSeek 4 Flash

- Source: OpenAI / GPT-5 Codex
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5 Codex
- **Short description:** OpenAI's coding-specialist Codex of the GPT-5 generation (Jul 2025), the original modern Codex line tuned for software-engineering agents and repo-scale edits — now superseded by the GPT-5.1/5.2 Codex but still a capable engineering workhorse.
- **Provider / access:** OpenAI API `gpt-5-codex` (Responses API); OpenCode Zen `opencode/gpt-5-codex`.
- **Release / knowledge:** 2025-07; knowledge cutoff mid-2025.
- **IDs:** `openai/gpt-5-codex`
- **Context window:** 128,000 total; 32,000 max output.
- **Modalities:** text in; text out; tool calls; code interpreter; structured outputs.
- **Pricing (as of 2026-11):** $1.25 / $10.00 per 1M in/out; paid only.
- **Architecture:** proprietary; coding-specialized fine-tuning on the GPT-5 base.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **60.4%** (official)
- Tau3-Banking: **65.1%** (Tau3 leaderboard)
- GDPval-AA: **1405 Elo** (AA index)
- Toolathon: **75.2%** (AA tool suite)

Reasoning / knowledge:

- GPQA Diamond: **82.9%** (official)
- HLE: **29.7%** (AA HLE listing)

Coding:

- SWE-bench Verified: **79.6%** (official)
- SWE-Pro (resolved): **40.8%** (official)
- LiveCodeBench: **71.4%** (LCB official)

Long context:

- MRCR 128K: **85.3%** (AA long-context suite)

### Normalized scores (1–100)

- **Tool use: 86/100.** Strong coding-agent tool use (Terminal-Bench 60.4, Tau3-Banking 65.1) for its generation.
- **Reasoning: 84/100.** GPQA Diamond 82.9 is solid; HLE 29.7 is mid-pack.
- **Context window: 82/100.** 128K at ~85% retrieval — adequate for repos.
- **Multimodal: 68/100.** Text-in focused; no image understanding in this SKU.
- **Coding: 88/100.** SWE-bench Verified 79.6 and LiveCodeBench 71.4 — a capable coding specialist, superseded by 5.1/5.2 Codex.
- **Cost efficiency: 46/100.** $1.25/$10 mid-premium at the time of writing.
- **Overall Score: 82/100.** Mean of quality dims (86+84+82+68+88)/5 = 81.6 → 82; a still-useful engineering-agent model, now a budget option.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-11-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI — GPT-5 Codex](https://openai.com/index/gpt-5-codex/)
  - [Artificial Analysis — Intelligence Index](https://artificialanalysis.ai/leaderboards/models)
  - [SWE-bench Verified](https://www.swebench.com/)
  - [LiveCodeBench](https://livecodebench.github.io/)
