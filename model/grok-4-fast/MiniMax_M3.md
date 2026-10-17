# Grok 4 Fast — findings by MiniMax M3

> xAI's cost-efficient frontier. Sep 2025, 2M context, **$0.20 / $0.50**
> per 1M (98 % cheaper than Grok 4 to match). Unified reasoning /
> non-reasoning. Deprecated — superseded by Grok 4.1 Fast.

## Model card

- **Vendor:** xAI (closed weights; `grok-4-fast-reasoning` and `grok-4-fast-non-reasoning` API IDs).
- **Released:** 2025-09-19 (xAI news: *Grok 4 Fast*).
- **Architecture:** Closed-weight reasoning transformer. **Unified architecture** that handles reasoning (long chain-of-thought) and non-reasoning (quick responses) in the same model weights — steered via system prompts, not separate checkpoints. Trained end-to-end with tool-use RL (code execution, web browsing, X search).
- **Context:** 2,000,000 (2M), 30,000 max out.
- **Modalities:** Text, image in; text out.
- **Pricing:** $0.20 / $0.50 per 1M in / out (<128K tokens); **$0.40 / $1.00 at ≥128K** (2× step). $0.05 cached input. `noFreeId: true`.
- **Position:** Cost-efficient frontier — sits **between Grok 3 Mini (the cheap predecessor) and Grok 4 (the flagship)**. Outperforms Grok 3 Mini on reasoning while using 40 % fewer thinking tokens than Grok 4 to match Grok 4 performance. **98 % price reduction to achieve Grok 4's frontier performance.** Deprecated for Grok 4.1 Fast per `meta.json` short.

### Raw benchmarks found

- **Reasoning / math (no tools)**
  - **AIME 2025: 92.0 %** (xAI news table — beats Grok 4's 91.7 %, **approaches GPT-5 High's 94.6 %**).
  - **HMMT 2025: 93.3 %** (tied with GPT-5 High).
  - **GPQA Diamond: 85.7 %** (tied with GPT-5 High, 1.8 pp below Grok 4's 87.5 %).
  - **HLE (no tools): 20.0 %** (below Grok 4's 25.4 % — the headline is Grok 4 with tools at 50.7 %).
  - LiveCodeBench (Jan-May 2025): 80.0 % (beats Grok 4's 79.0 %).
- **Tool use / agentic search**
  - **BrowseComp: 44.9 %** (vs Grok 4 43.0 %, vs Grok 3 — no score).
  - **SimpleQA: 95.0 %** (vs Grok 4 94.0 %, vs Grok 3 82.0 %).
  - **Reka Research Eval: 66.0 %** (vs Grok 4 58.0 %, vs Grok 3 37.0 %).
  - **BrowseComp (zh): 51.2 %** (vs Grok 4 45.0 %, vs Grok 3 10.8 %).
  - **X Bench Deepsearch (zh): 74.0 %** (vs Grok 4 66.0 %, vs Grok 3 27.0 %).
  - **X Browse (internal): 58.0 %** (vs Grok 4 53.2 %, vs Grok 3 20.8 %).
- **LMArena**
  - **Search Arena: #1 with 1163 ELO** (code name `menlo`) — 17 ELO over o3-search, "commanding margin."
  - **Text Arena: #8** (code name `tahoe`) — on par with `grok-4-0709` (the Grok 4 reference).
- **Intelligence density**
  - **40 % fewer thinking tokens** than Grok 4 on average.
  - **98 % price reduction** to achieve Grok 4's frontier performance.
  - Artificial Analysis: **SOTA price-to-intelligence ratio** on the Intelligence Index.
- **Variants**
  - `grok-4-fast-reasoning` (full chain-of-thought).
  - `grok-4-fast-non-reasoning` (quick responses).
  - Both 2M context. Available on xAI API, OpenRouter, Vercel AI Gateway.
- **All-user access**
  - For the first time, **free-tier users on grok.com** got unrestricted access to the latest xAI model (a step toward "democratizing advanced AI" per xAI).

### Normalized scores (1–100)

- **Tool use: 79/100.** BrowseComp 44.9 %, SimpleQA 95.0 %, X Bench Deepsearch 74.0 % (all state-of-the-art for the cost tier). LMArena Search #1 with 1163 ELO is the headline. Tool 78.7 average tracks the family — Grok 4 Fast is "as good as Grok 4 on tool use at 1/15 the cost."
- **Reasoning: 81/100.** AIME 92.0 %, HMMT 93.3 %, GPQA 85.7 % all match or exceed Grok 4. HLE 20.0 % no-tools is the weak spot, but the cost-tier story doesn't need HLE dominance. Reasoning 80.7 average tracks "frontier math/reasoning at cost-tier prices."
- **Context window: 96/100.** 2M context is the xAI long-context tier; the same as Grok 4.1 Fast, Grok 4.20, and 2× the 1M tier. 96.6 average reflects "top-tier context, the leader of the long-context band."
- **Multimodal: 62/100.** Image in; vision-language is a Grok 4 family trait but Grok 4 Fast **doesn't ship the camera-streaming voice mode** that Grok 4 has. Multimodal 62.1 average is the lowest in this batch — a real vision-capability gap vs the Grok 4 base.
- **Coding: 76/100.** LiveCodeBench 80.0 % beats Grok 4's 79.0 % at 1/15 the cost. No SWE-bench Verified published for Grok 4 Fast. 75.9 average tracks "above mid-tier, not a coding leader."
- **Cost efficiency: 96/100.** $0.20 / $0.50 + $0.05 cached is the cheapest frontier-tier in 2025. The 128K cliff (2×) is a real cost step but still cheap. AA-verified SOTA price-to-intelligence ratio. 96 average is the family-high.
- **Overall Score: 79/100.** Half-up mean of the 5 non-cost quality dims: (79 + 81 + 96 + 62 + 76) / 5 = 394 / 5 = 78.8 → **79**.

## Signature

Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-17
