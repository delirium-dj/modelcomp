# GPT-6 Sol — findings by Mistral Large 4

- Source: OpenAI (`gpt-6-sol`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol
- **Short description:** OpenAI's GPT-6 mid-tier (with Luna), released 2026-09-22 with a 50% price cut vs GPT-5.6 promo — "strong default for agentic and business-automation work"; became ChatGPT default for paid tiers on 2026-10-07; replaced by GPT-6.1 Sol on 2026-09-29 at the same price.
- **Provider / access:** OpenAI API (`gpt-6-sol`, Responses API), ChatGPT (Plus/Pro/Business/Enterprise), Codex; OpenRouter. >272K input billed 2x/1.5x.
- **Release / knowledge:** Released 2026-09-22; knowledge cutoff not restated in reviewed snippets.
- **IDs:** `gpt-6-sol` (OpenAI API); `openai/gpt-6-sol` (OpenRouter).
- **Context window:** 1,050,000 tokens.
- **Modalities:** Text + image in, text out; reasoning effort low→max; tool calling via Responses API; computer use.
- **Pricing (as of 2026-11-05):** $2 / $10 per 1M in/out (permanent); cached input $0.20/M (6.1 Sol halved it to $0.10). No free API tier (Luna covers Free/Go ChatGPT tiers).
- **Architecture:** Proprietary, params not disclosed; builds on GPT-6 Astra advances with cheaper caching/inference.

### Raw benchmarks found

Official announcement + family analyses cross-checked against emergent.sh, llmlearner, themodelgap, BenchmarkList, AA, laozhang, kingy; conflicts noted:

Agent / tool use:

- AutomationBench: **33.2** (rank 2) (BenchmarkList)
- BrowseComp: **89.4% ±4.5** (rank 12/69) (BenchmarkList)
- Agent's Last Exam: **56.4** (rank 2/43, max) (BenchmarkList/themodelgap HLE 47.9 note — label conflict, both cited)
- Vending-Bench 2: **42.7** (rank 2/60); GDPval-AA: **1487** (rank 42/358); AA-Briefcase: 1483 (BenchmarkList)
- OSWorld / Claw-Eval / Toolathlon: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **48 at max** (43 at high; $0.37→$1.06/task) (llmlearner/emergent.sh) — level with GPT-5.6 Sol at half the per-task cost
- LiveBench: **79.3** overall (max) (themodelgap)
- HLE: **47.9%** (max, AA) (themodelgap)
- GPQA / SWE-V: no verified public score found for gpt-6-sol

Coding:

- DeepSWE v1.1: **69.0%** (AA Codex-agent run, max) (themodelgap)
- SWE-bench Pro / TB / LiveCodeBench: no verified public score found for this exact ID

Long context:

- 1.05M window; no verified MRCR/RULER score found for this ID

### Normalized scores (1–100)

- **Tool use: 88/100.** AutomationBench 33.2 (rank 2), BrowseComp 89.4%, ALE 56.4% strong; no OSWorld/Claw rows.
- **Reasoning: 85/100.** AA 48 max / 43 high, HLE 47.9%, LiveBench 79.3; no GPQA/SWE-V published.
- **Context window: 96/100.** 1.05M in the 95–100 tier; >272K surcharge; no verified 512K+ retrieval.
- **Multimodal: 80/100.** Text + image in, text out; no audio/video or non-text output.
- **Coding: 88/100.** DeepSWE 69.0% (AA/Codex harness) strong default-tier; no SWE-Pro/TB captured.
- **Cost efficiency: 75/100.** $2/$10 permanent between the $1.25/$4.25 (~88) and $3/$15 (~60) bands; AA per-task cost halved vs 5.6 Sol; no free tier.
- **Overall Score: 87/100.** Half-up mean of (88 + 85 + 96 + 80 + 88) / 5 = 87.4 → 87. Best fit: was the default agentic workhorse Sep 22–29; migrate to GPT-6.1 Sol (same price, +4 AA points).

---

## Signature

- Provided by: **Mistral Large 4 (mistral-large-4)** — 2026-11-05
- Method: public internet research (3+3 web searches, official OpenAI pages cited, 2026-11-05 UTC); cross-checked against emergent.sh, llmlearner, themodelgap, BenchmarkList, AA, laozhang, kingy, yottalabs, aireleasetracker; conflicts (AA 48 vs 43 by effort; HLE/ALE label overlap 47.9/56.4) listed side by side. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing GPT-6 Sol and Luna — OpenAI (official, 2026-09-22, 50% price cut)](https://openai.com/index/introducing-gpt-6-sol-and-luna/)
  - [OpenAI Developer Community — GPT-6 Sol and Luna announcement](https://community.openai.com/t/announcing-gpt-6-sol-and-gpt-6-luna-in-the-api-codex-and-chatgpt/1399925)
  - [emergent.sh — GPT-6 Sol benchmarks (AA 48 max, $2/$10, half per-task cost of 5.6 Sol)](https://emergent.sh/learn/gpt-6-sol-benchmarks)
  - [llmlearner — GPT-6 Sol ($2/$10, AA 43 high → 48 max, $0.37→$1.06/task)](https://llmlearner.com/models/gpt-6-sol)
  - [themodelgap — independent rows (HLE 47.9, DeepSWE 69.0, LiveBench 79.3)](https://themodelgap.com/models/gpt-6-sol)
  - [BenchmarkList — openai-gpt-6-sol (ALE 56.4, BrowseComp 89.4, AutomationBench 33.2, Vending-Bench 42.7)](https://benchmarklist.com/models/openai-gpt-6-sol/)
  - [Yotta Labs — ChatGPT default rollout Oct 7-8](https://www.yottalabs.ai/post/gpt-6-release-date-rumors-what-is-known-2026)
  - [laozhang — Sol max ties Astra high at 2.6x less per task](https://blog.laozhang.ai/en/posts/gpt-6-1-sol-vs-gpt-6-astra-vs-gpt-6-sol)
  - [aireleasetracker — gpt-6-sol (2026-09-22, 1.05M ctx)](https://aireleasetracker.com/model/openai/gpt-6-sol)
  - [llm-stats — gpt-6-sol](https://llm-stats.com/models/gpt-6-sol)
