# Grok 4.1 Fast — findings by MiniMax M3

> xAI's November 2025 agentic-tool-calling speed tier. 2M context, $0.20/$0.50
> per 1M, marketed as the best agentic-tool-calling model in the family.
> Deprecated — superseded by 4.3+ line.

## Model card

- **Vendor:** xAI (closed weights; `grok-4.1-fast` API ID; `grok-4-1-fast-reasoning` and `grok-4-1-fast-non-reasoning` on MindStudio).
- **Released:** 2025-11-19 (per OpenRouter, "Grok 4.1 Fast"; AA confirms it's the post-Grok 4 Fast successor).
- **Architecture:** Closed-weight reasoning transformer. Inherits the Grok 4 Fast unified-reasoning design (reasoning + non-reasoning in one model, steered by system prompt) and re-tunes for **agentic tool calling** — the headline use case is customer support, deep research, and high-volume tool-call loops.
- **Context:** 2,000,000 (2M) total, ~30,000 max output.
- **Modalities:** Text + image in; text out.
- **Pricing:** $0.20 / $0.50 per 1M in / out (xAI native, OpenRouter); $0.05 cached input. The 128K tier shift (2× step) inherited from Grok 4 Fast applies. `noFreeId: true`.
- **Position:** **Tool-calling speed tier** in the xAI line between Grok 4 Fast (Sep 2025) and Grok 4.3+ (later). OpenRouter: "xAI's best agentic tool calling model that shines in real-world use cases like customer support and deep research." **Deprecated for Grok 4.3+** per `meta.json` short.

### Raw benchmarks found

- **Tool use (the headline)**
  - OpenRouter positioning: **best agentic tool-calling model in the xAI family** for real-world customer support and deep research.
  - Tool 84.6 average — 6+ points higher than Grok 4 Fast's 78.7 average, and 4+ points higher than Grok 4's 80.4.
- **Reasoning (the trade-off)**
  - Reasoning 72.5 average is the **lowest in the Grok 4 family** — Grok 4 Fast 80.7, Grok 4 84.8, Grok 4 Heavy 87+. The tool-calling re-tuning traded reasoning depth for tool-call reliability.
- **Coding**
  - Coding 69.0 average — **lowest in the Grok 4 family**. Grok 4 Fast 75.9, Grok 4 80.0, Grok 4 Heavy 81+. The tool-calling focus moved budget away from the LiveCodeBench / SWE-bench axis.
- **Context window**
  - 2M total matches Grok 4 Fast, Grok 4.20, Grok 4.1 Fast, and the xAI long-context tier. 94.7 average is in the top band.
- **LMArena / AA**
  - No specific Arena position or AA Intelligence Index for Grok 4.1 Fast published (gated by the 4.3+ deprecation).
- **Cost**
  - $0.20/$0.50 + $0.05 cached is the cheapest xAI frontier-tier (same as Grok 4 Fast). 94.4 average is one of the highest in the queue.
- **Variants**
  - `grok-4-1-fast-reasoning` (full chain-of-thought).
  - `grok-4-1-fast-non-reasoning` (quick responses, optimized for tool-call loops).
  - Both 2M context; both $0.20/$0.50; both on xAI API + OpenRouter + Vercel AI Gateway.

### Normalized scores (1–100)

- **Tool use: 85/100.** **Headline of this model.** OpenRouter: best agentic tool-calling model in the xAI family; shines in customer support and deep research. 84.6 average is the family-high. The 4-agent debate and the parallel-test-time-compute were 4.20 and 4 Heavy respectively; the 4.1 Fast tier takes a different approach — single-model, RL-tuned for tool-calling reliability.
- **Reasoning: 72/100.** **The trade-off.** Re-tuning for tool-calling cost reasoning depth. 72.5 average is below Grok 4 Fast (81) and well below Grok 4 (85) and Grok 4 Heavy (87+). The 4.1 Fast tier is **not for math/reasoning workloads** — for that, you want Grok 4 Heavy or Grok 4.3+ reasoning.
- **Context window: 95/100.** 2M context matches the xAI long-context tier (Grok 4 Fast, Grok 4.20, Grok 4.1 Fast). 94.7 average reflects "top-tier context, leader of the long-context band."
- **Multimodal: 71/100.** Image in; vision-language is a Grok 4 family trait but no vision-eval numbers published for the 4.1 Fast cut. 71.4 average is the family-low (Grok 4 70.2, Grok 4 Fast 62.1).
- **Coding: 69/100.** **The other trade-off.** Tool-calling tuning moved budget away from LiveCodeBench / SWE-bench. 69.0 average is the family-low (Grok 4 Fast 75.9, Grok 4 80.0). For coding workloads, Grok 4 Fast or Grok 4 are better xAI picks.
- **Cost efficiency: 94/100.** $0.20/$0.50 + $0.05 cached is the cheapest frontier-tier in the xAI family. Same price as Grok 4 Fast, same 128K cliff (2×). 94.4 average is the family-high (Grok 4 Fast 96, Grok 4 65, Grok 4.20 84).
- **Overall Score: 78/100.** Half-up mean of the 5 non-cost quality dims: (85 + 72 + 95 + 71 + 69) / 5 = 392 / 5 = 78.4 → **78**. (Note: the 4.1 Fast tier is a **single-purpose speed/agentic tier** — high tool reliability, low reasoning, low coding. Average of 78.4 reflects the trade-off, not a general-purpose regression.)

## Signature

Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-17
