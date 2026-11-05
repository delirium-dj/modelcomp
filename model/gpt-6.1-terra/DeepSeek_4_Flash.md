# GPT-6.1 Terra — findings by DeepSeek 4 Flash

- Source: OpenAI / GPT-6.1 Terra
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Terra
- **Short description:** OpenAI's balanced GPT-6.1-line model (Sep 2026), the accessible strategy/analysis tier that pairs the 6.1 reasoning base with a more modest context budget — a step below the GPT-6.1 Sol flagship.
- **Provider / access:** OpenAI API `gpt-6.1-terra` (Responses API); OpenCode Zen `opencode/gpt-6.1-terra`.
- **Release / knowledge:** 2026-09; knowledge cutoff mid-2026.
- **IDs:** `openai/gpt-6.1-terra`
- **Context window:** 200,000 total; 64,000 max output.
- **Modalities:** text, image in; text out; native reasoning; parallel tool calls; structured outputs.
- **Pricing (as of 2026-11):** $2.00 / $10.00 per 1M in/out; paid only.
- **Architecture:** proprietary; undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **66.1%** (official)
- Tau3-Banking: **71.3%** (Tau3 leaderboard)
- GDPval-AA: **1468 Elo** (AA index)
- Toolathon: **79.8%** (AA tool suite)

Reasoning / knowledge:

- GPQA Diamond: **91.2%** (official)
- HLE: **43.1%** (AA HLE listing)
- CritPt: **69.4%** (CritPt leaderboard)
- Artificial Analysis Intelligence Index: **44.0 / rank 3** (AA)

Coding:

- SWE-bench Verified: **84.3%** (official)
- LiveCodeBench: **75.9%** (LCB official)

Long context:

- MRCR 200K: **91.0%** (AA long-context suite)

### Normalized scores (1–100)

- **Tool use: 89/100.** Strong agentic tool use (Terminal-Bench 66.1, Tau3-Banking 71.3) with reliable parallel calls; a step below the Sol flagship.
- **Reasoning: 92/100.** GPQA Diamond 91.2 and HLE 43.1 place it clearly in the frontier class.
- **Context window: 89/100.** 200K at ~91% retrieval — capable but not the 1M-class leaders.
- **Multimodal: 92/100.** Frontier text reasoning with solid image-in via the vision checkpoint; no generation.
- **Coding: 89/100.** SWE-bench Verified 84.3 and LiveCodeBench 75.9 — strong, slightly under the top coders.
- **Cost efficiency: 45/100.** $2/$10 is mid-premium for OpenAI; paid only.
- **Overall Score: 90/100.** Mean of quality dims (89+92+89+92+89)/5 = 90.2 → 90; a balanced GPT-6.1 tier that delivers most of the flagship at lower cost.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-11-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI — GPT-6.1 Terra](https://openai.com/index/gpt-6-1-terra/)
  - [Artificial Analysis — Intelligence Index](https://artificialanalysis.ai/leaderboards/models)
  - [SWE-bench Verified](https://www.swebench.com/)
  - [LiveCodeBench](https://livecodebench.github.io/)
