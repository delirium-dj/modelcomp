# GPT-6.1 Sol — findings by Fledge Alpha

- Source: OpenAI (`gpt-6.1-sol`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol
- **Short description:** OpenAI's Sept 29, 2026 DevDay upgrade to GPT-6 Sol — near-Astra agentic performance at the same $2/$10 price, with cache drops to $0.10.
- **Provider / access:** OpenAI API (`gpt-6.1-sol`), ChatGPT Work, Codex (API + Work from day one; not in consumer Chat Chat).
- **Release / knowledge:** 2026-09-29; knowledge cutoff Apr 30, 2026.
- **IDs:** `openai/gpt-6.1-sol`
- **Context window:** 1,050,000 tokens; 128K max output; >272K reprices to $4/$15.
- **Modalities:** text + image in; text out; reasoning low/medium/high/xhigh/max (no none/minimal).
- **Pricing (as of 2026-10-02):** $2/M in, $0.10/M cache, $10/M out; >272K: $4/$15; Fast 2x.
- **Architecture:** proprietary; comparable to GPT-6 Astra at lower cost.

### Raw benchmarks found

Agent / tool use:

- OSWorld 2.0 (offline partial): **71.4%** at max (Astra 73.5% at ~1/7 the cost); AutomationBench: **36.1%** at max (+4.8 vs GPT-6 Sol)
- Terminal-Bench Science 0.1: **57.0%** at max (more than double GPT-6 Sol Max; Astra leads at 68.1%)
- GDP.pdf: **32.0%** at high (vs Opus 5.5 28.8%); Factuality (flagged-error rate): **7.7%** at low (vs Astra-par within 1.9)
- ExploitBench Max: **99.7%**; SEC-Bench Pro: **78.8%**

Reasoning / knowledge:

- HLE (no tools): **52.9%** (AA, max effort) — real +5.0 pt gain over GPT-6 Sol
- LiveBench: **81.6** (max effort); AA Intelligence Index: ~52-equivalent at launch chart
- HealthBench Professional 64.2 (length-adjusted); MentalHealthBench 57.9

Coding:

- DeepSWE v1.1: **75.2%** at high (vs Astra ~74.8% — a genuine parity at ~1/5 the cost)
- SEC-Bench Pro: 78.8%; ExploitGym 35.1%

Long context:

- 1.05M window with MRCR-equivalent GraphWalks not published for 6.1; reuse of Astra-class window.

### Normalized scores (1–100)

- **Tool use: 84/100.** OSWorld 71.4% and AutomationBench 36.1% track near Astra at ~1/5 the cost; GDP.pdf 32% leads Anthropic's reference tier on cost-adjusted terms.
- **Reasoning: 82/100.** HLE 52.9% (AA, max) and LiveBench 81.6 are tier-topping; no published GPQA for this ID.
- **Context window: 95/100.** Same 1.05M window as GPT-6 Astra with $0.10 cache rate.
- **Multimodal: 68/100.** Text + image in, text out.
- **Coding: 82/100.** DeepSWE 75.2% (high effort) at near-Astra parity, SEC-Bench Pro 78.8%.
- **Cost efficiency: 85/100.** $2/$10 with 95% cache discount — the best ratio of near-Astra capability in the catalog.
- **Overall Score: 82/100.** Mean of the five quality dims; best fit as the default OpenAI agent model for budget-conscious Astra-class work.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (OpenAI DevDay 2026 materials, llm-stats, The Model Gap, Vellum/appreviewlab/apidog analyses); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
