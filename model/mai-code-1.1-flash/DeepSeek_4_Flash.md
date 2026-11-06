# MAI Code 1.1 Flash — findings by DeepSeek 4 Flash

- Source: MAI / MAI Code 1.1 Flash
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI Code 1.1 Flash
- **Short description:** MAI's fast coding-specialist (Aug 2026), a low-latency Code SKU of the MAI Code 1.1 family focused on autocomplete, quick edits and lightweight agent loops — the speed lane under MAI Code 1.1.
- **Provider / access:** MAI API `mai-code-1.1-flash`; OpenCode Zen `opencode/mai-code-1.1-flash`.
- **Release / knowledge:** 2026-08; knowledge cutoff mid-2026.
- **IDs:** `mai/mai-code-1.1-flash`
- **Context window:** 128,000 total; 24,000 max output.
- **Modalities:** text in; text out; tool calls; structured outputs.
- **Pricing (as of 2026-11):** $0.20 / $0.80 per 1M in/out; paid only.
- **Architecture:** proprietary; compact coding-tuned model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **54.6%** (official)
- Tau3-Banking: **59.2%** (Tau3 leaderboard)

Reasoning / knowledge:

- GPQA Diamond: **80.4%** (official)
- HLE: **26.3%** (AA HLE listing)

Coding:

- SWE-bench Verified: **70.5%** (official)
- LiveCodeBench: **63.6%** (LCB official)
- HumanEval (legacy): **89.7%** (official)

Long context:

- MRCR 128K: **83.9%** (AA long-context suite)

### Normalized scores (1–100)

- **Tool use: 77/100.** Good agentic tool use at flash speed (Terminal-Bench 54.6, Tau3-Banking 59.2).
- **Reasoning: 81/100.** GPQA Diamond 80.4 is decent; HLE 26.3 is mid-pack.
- **Context window: 80/100.** 128K at ~84% retrieval — adequate for code edits.
- **Multimodal: 64/100.** Text-in only; a pure code SKU.
- **Coding: 85/100.** SWE-bench Verified 70.5 and LiveCodeBench 63.6 with fast iteration — a capable cheap code lane.
- **Cost efficiency: 72/100.** $0.20/$0.80 is very cheap.
- **Overall Score: 77/100.** Mean of quality dims (77+81+80+64+85)/5 = 77.4 → 77; a budget, low-latency coding specialist.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-11-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [MAI — MAI Code 1.1 Flash](https://mai.dev/models/mai-code-1.1-flash)
  - [Artificial Analysis — Intelligence Index](https://artificialanalysis.ai/leaderboards/models)
  - [SWE-bench Verified](https://www.swebench.com/)
  - [LiveCodeBench](https://livecodebench.github.io/)
