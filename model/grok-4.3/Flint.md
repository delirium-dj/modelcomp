# Grok 4.3 - findings by Flint

- Source: xAI / Grok 4.3 (proprietary; family grok)
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.3
- **Short description:** xAI's default Grok for chat, coding, agentic tools, and lower hallucination risk; 1M-context reasoning model at low price.
- **Provider / access:** xAI (`https://x.ai/blog/grok-4.3`), OpenAI-compatible API; OpenCode Zen / OpenRouter routes (`opencode/grok-4.3`).
- **Release / knowledge:** Released 2026-04-17; knowledge cutoff not verified in sources found.
- **IDs:** `xai/grok-4.3`; `opencode/grok-4.3`.
- **Context window:** **1,000,000** total (models.dev; repo meta); max output **30,000** (models.dev).
- **Modalities:** Text, image, PDF in; text out (models.dev).
- **Pricing (as of 2026-10-25):** Paid; $1.25/$2.50 per 1M (<200K prompt); $2.50/$5.00 at >=200K prompt (repo meta); Artificial Analysis: ~40% lower input / ~60% lower output price vs Grok 4.20.

- **Architecture:** Proprietary; models.dev: open_weights = false.

### Raw benchmarks found

- Coding / agentic:
  - GDPval-AA: **1500** Elo (Grok 4.3), up **321** from Grok 4.20 (1179); surpasses Gemini 3.1 Pro Preview, Muse Spark, GPT-5.4 mini (xhigh), Kimi K2.5; trails GPT-5.5 (xhigh) by 276 Elo.
  - Terminal-Bench: **98%** success rate (Grok 4.3).
  - IFBench: **81%** (Grok 4.20 lineage; meta claims **83.3%** #1).
- Reasoning / intelligence:
  - Artificial Analysis Intelligence Index: **53**; ~40% lower input price / ~60% lower output price vs Grok 4.20.

### Cross-source comparison

- IFBench conflict: repo meta **83.3%** (#1) vs models.dev **81** vs AA-maintained **81%** -> flagged provisional.
- Pricing conflict: repo meta tiers vs AA cost analysis.

### Normalized scores (1-100)

- **Tool use: 75/100.** GDPval-AA **1500**, Terminal-Bench **98%, IFBench **81 -> strong agentic/tool use.
- **Reasoning: 60/100.** AA Intelligence Index **53 -> mid-high; reasoning depth noted as trailing flagships.
- **Context window: 90/100.** **1,000,000** total -> top tier.
- **Multimodal: 60/100.** Text, image, PDF in; text out -> mid.
- **Coding: 78/100.** GDPval-AA **1500**, Terminal-Bench **98 -> strong coding.
- **Cost efficiency: 85/100.** ~40% lower input / ~60% lower output vs Grok 4.20 -> good value.

- **Overall Score: 73/100.** Mean of the five quality dims (75 + 60 + 90 + 60 + 78) / 5 = 72.6 -> 73; Cost efficiency excluded.

## Signature

- Provided by: **Flint (opencode/grok-4.3)** - 2026-10-25
- Method: public web research prioritizing official model card/docs plus independent benchmarks - three independent web searches.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
