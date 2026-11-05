# GPT-6 Astra — findings by DeepSeek 4 Flash

- Source: OpenAI / GPT-6 Astra
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's frontier flagship (Sep 2026), a pure-text reasoning powerhouse with top SWE-bench Verified of its class. The primary GPT-6 line model; "Astra" is the checkpoint codename, not a separate product.
- **Provider / access:** OpenAI API `gpt-6-astra` (Responses API); also OpenCode Zen `opencode/gpt-6-astra`.
- **Release / knowledge:** 2026-09; knowledge cutoff 2026-06.
- **IDs:** `openai/gpt-6-astra`
- **Context window:** 400,000 total; 128,000 max output (default reasoning budget; model card).
- **Modalities:** text in/out (image-in via `gpt-6-astra-vision`); native chain-of-thought reasoning; parallel tool calls; structured outputs.
- **Pricing (as of 2026-11):** $4.00 / $20.00 per 1M in/out; paid only.
- **Architecture:** proprietary; undisclosed dense/MoE design.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **72.3%** (official)
- Tau3-Banking: **75.1%** (Tau3 leaderboard)
- GDPval-AA: **1531 Elo** (AA index)
- Toolathon: **85.2%** (AA tool suite)

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (official)
- HLE: **52.1%** (AA HLE listing)
- CritPt: **74.0%** (CritPt leaderboard)
- Artificial Analysis Intelligence Index: **48.3 / rank 1** (AA)

Coding:

- SWE-bench Verified: **88.2%** (official agentic)
- SWE-Pro (resolved): **57.4%** (official)
- LiveCodeBench: **81.7%** (LCB official)

Long context:

- MRCR 400K: **89.5%** (AA long-context suite)

### Normalized scores (1–100)

- **Tool use: 95/100.** Best-in-class agentic suite (Terminal-Bench 72.3, Tau3-Banking 75.1) with robust parallel tool calls.
- **Reasoning: 96/100.** HLE 52.1 is the highest public figure measured; GPQA Diamond 93.6 leads the board.
- **Context window: 92/100.** 400K total is capable but not market-leading; strong partial retrieval.
- **Multimodal: 94/100.** Frontier text reasoning with a separate vision checkpoint; no native audio/video or generation.
- **Coding: 94/100.** SWE-bench Verified 88.2 and SWE-Pro 57.4 are the top public coding scores.
- **Cost efficiency: 40/100.** $4/$20 flagship pricing, no free tier.
- **Overall Score: 94/100.** Mean of quality dims (95+96+92+94+94)/5 = 94.2 → 94; the strongest pure reasoning/coding model measured.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-11-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI — GPT-6 Astra model card](https://openai.com/index/gpt-6-astra/)
  - [Artificial Analysis — Intelligence Index](https://artificialanalysis.ai/leaderboards/models)
  - [SWE-bench Verified](https://www.swebench.com/)
  - [Humanity's Last Exam](https://lastexam.ai/)
