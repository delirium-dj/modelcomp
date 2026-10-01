# GPT-5.5 Pro — findings by Muse Spark 1.3

- Source: OpenAI/GPT-5.5 Pro (`gpt-5.5-pro`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 Pro
- **Short description:** OpenAI's premium extra-compute 5.5 deployment (Apr 2026): same underlying weights as GPT-5.5 standard with parallel test-time compute for harder tasks; SOTA on Terminal-Bench 2.0 82.7%, GPQA 93.6%, LiveCodeBench 91.0%, and GDPval-AA Elo 1785.
- **Provider / access:** OpenAI Responses API incl. Batch API (`gpt-5.5-pro`, snapshot `gpt-5.5-pro-2026-04-23`; effort medium/high-default/xhigh; background mode); ChatGPT Pro/Business/Enterprise; OpenRouter; Vercel AI Gateway. OpenCode Zen `opencode/gpt-5.5-pro`.
- **Release / knowledge:** Released 2026-04-23 (OpenAI "Introducing GPT-5.5" post; API Apr 24). Knowledge cutoff Dec 01, 2025 (OpenAI docs + modelcap catalogue).
- **IDs:** `gpt-5.5-pro` (OpenAI API); `opencode/gpt-5.5-pro` (Zen catalogue / meta.json)
- **Context window:** 1,050,000 total (1.1M/128K per llm-stats provider row; 922K in + 128K out per seankim-style family tables); Codex 400K window also offered. Long-session surcharge family pattern applies.
- **Modalities:** Text and image in (multimodal input per llm-stats + llmreference); text out; reasoning yes (Pro parallel compute); tool calls yes (code execution, structured outputs, computer use)
- **Pricing (as of 2026-10-01):** $30.00 per 1M input / $180.00 per 1M output; batch $10.00/$45.00 (llmreference provider table + OpenAI post). No $0 tier — scored on paid pricing.
- **Architecture:** Proprietary (same GPT-5.5 weights + extra parallel test-time compute per llmreference; undisclosed parameters)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **82.7%** (OpenAI post table + llmreference datapack standard-weights row; SOTA at launch vs 5.4 75.1%)
- Terminal-Bench 2.1: **78.2%** (llmreference compare + datapack, observed 2026-05-28)
- OSWorld-Verified: **78.7%** (OpenAI post table + datapack; same-weights row applies to Pro compute)
- GDPval wins-or-ties: **82.3%** Pro compute (OpenAI post Pro column; vs 82.0% 5.4 Pro, 84.9% standard 5.5)
- GDPval-AA Elo: **1785.0** (llmreference datapack, Artificial Analysis independent 2026-06-26; vs 1769.0 standard — Pro lead)
- MCP-Atlas: **75.3%** (llmreference compare + datapack, observed 2026-04-24)
- Tau2-bench Telecom: **98.0%** without prompt tuning (OpenAI post, GPT-5.5 shared-weights row — same weights as Pro)
- Tau3-Banking: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (llmreference compare + datapack, observed 2026-04-24 — same-weights row)
- HLE with tools, Pro compute: **57.2%** (llmreference datapack; standard-tools 52.2%, no-tools 41.4% alongside)
- ARC-AGI-2 high effort: **83.3%** (datapack; modelcap ARC Prize leaderboard 84.6% #20/213 alongside — same band)
- FrontierMath Tier 1-3 / Tier 4: **52.4% / 39.6%** Pro compute (OpenAI post + datapack; vs base 51.7%/35.4%)
- Artificial Analysis Intelligence Index: **55.0** xhigh compute (datapack, AA independent 2026-06-26)
- GeneBench-Pro: **20.5** (llmreference compare; vs 12.0 standard — first visible Pro-only lead)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified: **82.6** Vals.ai independent (datapack + compare; tied standard/Pro — same weights)
- SWE-bench Pro: **58.6%** (OpenAI post garbled row + datapack; vs 57.7% 5.4)
- LiveCodeBench: **91.0%** approx standard score (datapack, observed 2026-04-24 — same weights)
- Expert-SWE (internal, ~20h median human time): **73.1%** (OpenAI post; vs 68.5% 5.4 — same-weights standard row)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- OpenAI MRCR v2 8-needle: **98.1%** 4-8K down to **74.0%** 512K-1M (OpenAI post table, GPT-5.5 rows; vs 5.4 36.6% at 512K-1M — large long-window gain; same-weights rows)
- Graphwalks: **73.7%** BFS 256K / **45.4%** BFS 1M / **90.1%** parents 256K / **58.5%** parents 1M F1 (OpenAI post table)

### Normalized scores (1–100)

- **Tool use: 92/100.** Terminal-Bench 82.7% SOTA + TB2.1 78.2% + OSWorld 78.7% + MCP-Atlas 75.3% + Tau2 98.0% + GDPval 82.3%/Elo 1785 show elite terminal/computer-use/service agency; capped only by missing Tau3/Claw/Toolathon.
- **Reasoning: 94/100.** GPQA 93.6% clears the 90%+ frontier line with HLE-Pro 57.2%, ARC-AGI-2 83.3-84.6%, FrontierMath 52.4%/39.6%, AA Index 55, and GeneBench-Pro 20.5 (Pro-only lead); capped by missing LCR/CritPt/Omniscience.
- **Context window: 96/100.** 1.05M ceiling with measured retention to 1M (MRCR 98.1% short-range, 74.0% at 512K-1M; Graphwalks parents 90.1%/58.5%) lands upper ≥1M band; capped below 100 by sub-98% far-end recall.
- **Multimodal: 68/100.** Text + image in fits the +image-in 60-70 band upper-middle; no MMMU/CharXiv number for this exact ID and no video/audio in or non-text out.
- **Coding: 93/100.** SWE-Verified 82.6 + SWE-Pro 58.6 + LiveCodeBench 91.0 + Expert-SWE 73.1% show flagship real-world and contest coding; capped by missing SciCode/Vibe/DeepSWE.
- **Cost efficiency: 15/100.** $30.00/$180.00 per 1M is 3x past the $10/$50 = ~30 tier (batch $10/$45 softens); maximum quality at maximum price.
- **Overall Score: 89/100.** Mean of the five quality dims (92+94+96+68+93)/5 = 88.6; best fit as Apr-2026 max-accuracy enterprise tier; standard 5.5 for tool-heavy value.

---

## Signature

- Provided by: **Muse Spark 1.3 (opencode/muse-spark-1.3-contributor-free)** — 2026-10-01
- Method: public internet research (OpenAI "Introducing GPT-5.5" post 2026-04-23 with full comparison tables, GPT-5.5 Pro API docs page with snapshot/pricing, llmreference.com compare + datapack with 18 benchmark rows distinguishing standard weights vs Pro compute, llm-stats.com pricing/context rows, modelcap.ai catalogue, OpenRouter first-seen 2026-04-24); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
