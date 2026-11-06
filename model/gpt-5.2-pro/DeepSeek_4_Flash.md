# GPT-5.2 Pro — findings by DeepSeek 4 Flash

- Source: OpenAI / GPT-5.2 Pro
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2 Pro
- **Short description:** OpenAI's mid-tier Pro reasoning model (Aug 2026), a balanced upgrade over GPT-5.2 for extended analysis and coding at a lower price than the flagship line — a dedicated Pro SKU, not a plan tier.
- **Provider / access:** OpenAI API `gpt-5.2-pro` (Responses API); OpenCode Zen `opencode/gpt-5.2-pro`.
- **Release / knowledge:** 2026-08; knowledge cutoff mid-2026.
- **IDs:** `openai/gpt-5.2-pro`
- **Context window:** 200,000 total; 64,000 max output.
- **Modalities:** text, image in; text out; native reasoning; parallel tool calls; structured outputs.
- **Pricing (as of 2026-11):** $2.00 / $12.00 per 1M in/out; paid only.
- **Architecture:** proprietary; undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **64.3%** (official)
- Tau3-Banking: **69.8%** (Tau3 leaderboard)
- GDPval-AA: **1448 Elo** (AA index)
- Toolathon: **78.9%** (AA tool suite)

Reasoning / knowledge:

- GPQA Diamond: **90.0%** (official)
- HLE: **40.5%** (AA HLE listing)
- CritPt: **68.3%** (CritPt leaderboard)
- Artificial Analysis Intelligence Index: **42.4 / rank 5** (AA)

Coding:

- SWE-bench Verified: **83.1%** (official)
- LiveCodeBench: **74.6%** (LCB official)

Long context:

- MRCR 200K: **89.8%** (AA long-context suite)

### Normalized scores (1–100)

- **Tool use: 88/100.** Strong agentic tool use (Terminal-Bench 64.3, Tau3-Banking 69.8) with reliable parallel calls.
- **Reasoning: 91/100.** GPQA Diamond 90.0 and HLE 40.5 — a clearly frontier-class reasoning profile.
- **Context window: 89/100.** 200K at ~90% retrieval — workable, not elite breadth.
- **Multimodal: 91/100.** Solid image-in at high quality; no generation.
- **Coding: 89/100.** SWE-bench Verified 83.1 and LiveCodeBench 74.6 — strong, under the top coders.
- **Cost efficiency: 45/100.** $2/$12 is mid-premium; paid only.
- **Overall Score: 90/100.** Mean of quality dims (88+91+89+91+89)/5 = 89.6 → 90; a balanced Pro-tier model for extended analysis work.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-11-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI — GPT-5.2 Pro](https://openai.com/index/gpt-5-2-pro/)
  - [Artificial Analysis — Intelligence Index](https://artificialanalysis.ai/leaderboards/models)
  - [SWE-bench Verified](https://www.swebench.com/)
  - [LiveCodeBench](https://livecodebench.github.io/)
