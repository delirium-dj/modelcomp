# GPT-5.1 Codex Max — findings by DeepSeek 4 Flash

- Source: OpenAI / GPT-5.1 Codex Max
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1 Codex Max
- **Short description:** OpenAI's larger coding-specialist of the GPT-5.1 generation (Apr 2026), a beefed-up Codex for long-horizon engineering and multi-file refactors — more capable than Codex but pricier, with the same single-purpose coding focus.
- **Provider / access:** OpenAI API `gpt-5.1-codex-max` (Responses API); OpenCode Zen `opencode/gpt-5.1-codex-max`.
- **Release / knowledge:** 2026-04; knowledge cutoff early 2026.
- **IDs:** `openai/gpt-5.1-codex-max`
- **Context window:** 200,000 total; 50,000 max output.
- **Modalities:** text in; text out; tool calls; code interpreter; structured outputs.
- **Pricing (as of 2026-11):** $2.50 / $15.00 per 1M in/out; paid only.
- **Architecture:** proprietary; enlarged coding-specialized variant of GPT-5.1.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **64.8%** (official)
- Tau3-Banking: **69.7%** (Tau3 leaderboard)
- GDPval-AA: **1445 Elo** (AA index)
- Toolathon: **78.0%** (AA tool suite)

Reasoning / knowledge:

- GPQA Diamond: **85.4%** (official)
- HLE: **32.1%** (AA HLE listing)

Coding:

- SWE-bench Verified: **83.0%** (official)
- SWE-Pro (resolved): **46.9%** (official)
- LiveCodeBench: **74.8%** (LCB official)

Long context:

- MRCR 200K: **87.1%** (AA long-context suite)

### Normalized scores (1–100)

- **Tool use: 87/100.** Excellent coding-agent tool use (Terminal-Bench 64.8, Tau3-Banking 69.7) for engineering loops.
- **Reasoning: 85/100.** GPQA Diamond 85.4 is solid; HLE 32.1 is mid-pack.
- **Context window: 86/100.** 200K at ~87% retrieval — better headroom for large refactors.
- **Multimodal: 70/100.** Text-in focused; no image understanding in this SKU.
- **Coding: 91/100.** SWE-bench Verified 83.0 and LiveCodeBench 74.8 — a top coding specialist.
- **Cost efficiency: 38/100.** $2.50/$15 is premium for a single-purpose SKU.
- **Overall Score: 84/100.** Mean of quality dims (87+85+86+70+91)/5 = 83.8 → 84; the most capable Codex of the 5.1 line, best for long-horizon engineering.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-11-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI — GPT-5.1 Codex Max](https://openai.com/index/gpt-5-1-codex-max/)
  - [Artificial Analysis — Intelligence Index](https://artificialanalysis.ai/leaderboards/models)
  - [SWE-bench Verified](https://www.swebench.com/)
  - [LiveCodeBench](https://livecodebench.github.io/)
