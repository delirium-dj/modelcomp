# GPT-5.2 Codex — findings by DeepSeek 4 Flash

- Source: OpenAI / GPT-5.2 Codex
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2 Codex
- **Short description:** OpenAI's coding-specialist Codex of the GPT-5.2 generation (Aug 2026), tuned for software-engineering agent loops and repo-scale tasks — a dedicated coding SKU with distinct weights from GPT-5.2 Pro.
- **Provider / access:** OpenAI API `gpt-5.2-codex` (Responses API); OpenCode Zen `opencode/gpt-5.2-codex`.
- **Release / knowledge:** 2026-08; knowledge cutoff mid-2026.
- **IDs:** `openai/gpt-5.2-codex`
- **Context window:** 200,000 total; 50,000 max output.
- **Modalities:** text in; text out; tool calls; code interpreter; structured outputs.
- **Pricing (as of 2026-11):** $2.00 / $12.00 per 1M in/out; paid only.
- **Architecture:** proprietary; coding-specialized fine-tuning on the 5.2 base.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **67.8%** (official)
- Tau3-Banking: **72.6%** (Tau3 leaderboard)
- GDPval-AA: **1475 Elo** (AA index)
- Toolathon: **80.5%** (AA tool suite)

Reasoning / knowledge:

- GPQA Diamond: **86.9%** (official)
- HLE: **33.9%** (AA HLE listing)
- HumanEval (legacy): **95.1%** (official)

Coding:

- SWE-bench Verified: **85.7%** (official)
- SWE-Pro (resolved): **49.5%** (official)
- LiveCodeBench: **77.8%** (LCB official)
- SciCode: **66.7%** (paper)

Long context:

- MRCR 200K: **87.5%** (AA long-context suite)

### Normalized scores (1–100)

- **Tool use: 87/100.** Excellent coding-agent tool use (Terminal-Bench 67.8, Tau3-Banking 72.6) tuned for repo-scale loops.
- **Reasoning: 87/100.** GPQA Diamond 86.9 is solid but not the general-reasoning leader; HLE 33.9 is mid-pack.
- **Context window: 88/100.** 200K at ~88% retrieval — adequate for large repos.
- **Multimodal: 78/100.** Text-in focused; limited vision support in this SKU.
- **Coding: 92/100.** SWE-bench Verified 85.7 and LiveCodeBench 77.8 — a clear coding specialist.
- **Cost efficiency: 42/100.** $2/$12 mid-premium; paid only.
- **Overall Score: 86/100.** Mean of quality dims (87+87+88+78+92)/5 = 86.4 → 86; a strong engineering-agent pick, but single-purpose.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-11-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI — GPT-5.2 Codex](https://openai.com/index/gpt-5-2-codex/)
  - [Artificial Analysis — Intelligence Index](https://artificialanalysis.ai/leaderboards/models)
  - [SWE-bench Verified](https://www.swebench.com/)
  - [LiveCodeBench](https://livecodebench.github.io/)
