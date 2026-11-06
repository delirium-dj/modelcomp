# GPT-5.6 Terra — findings by Mistral Large 4

- Source: OpenAI (`gpt-5.6-terra`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** The balanced mid-tier of OpenAI's GPT-5.6 family (Sol flagship / Terra balanced / Luna low-cost), GA 2026-07-09 after a 2026-06-26 limited preview; strong on everyday coding, reasoning, agentic and screenshot/on-screen work at roughly half of Sol's cost. Price cut 20% on 2026-07-30 (effective 2026-08-30).
- **Provider / access:** OpenAI API (`gpt-5.6-terra`, Responses API), ChatGPT Work/Codex, OpenRouter. >272K input prompts billed 2x input / 1.5x output.
- **Release / knowledge:** Preview 2026-06-26, GA 2026-07-09; knowledge cutoff not restated in reviewed snippets.
- **IDs:** `gpt-5.6-terra` (OpenAI API); `openai/gpt-5.6-terra` (OpenRouter).
- **Context window:** 1,050,000 tokens (GPT-5.6 family; >272K long-context pricing applies).
- **Modalities:** Text + image (screenshots/on-screen content) in, text out; reasoning efforts none/low/medium(default)/high/xhigh/max; tool calling, computer use.
- **Pricing (as of 2026-11-05):** ~$2 / $10–12 per 1M in/out after the 2026-07-30 20% cut (Google's 3.8 Flash card lists Terra $2.00/$12.00; llmlearner verifies standard tier ≤272K). No free API tier (Luna is the free-in-ChatGPT tier).
- **Architecture:** Proprietary, params not disclosed; GPT-5.6 family (mini-tier equivalent).

### Raw benchmarks found

Official announcement + family analyses cross-checked against AA, Vellum, layerlens, aivy, spheron, emergent, Agent Report; conflicts noted:

Agent / tool use:

- Agents' Last Exam: Terra matches Sol at half the cost (layerlens: Sol 53.6%, family spread narrow — 2.4 pts Sol→Luna per emergent)
- AA Intelligence Index: **Terra 42.1 vs Sol 47.0** (max, v4.3, 2026-09-22) — index-version drift noted; AA notes Sol/Luna dominate Terra on intelligence-vs-cost at every effort
- OSWorld / BrowseComp: covered in family table; exact Terra % not captured
- Claw-Eval / Toolathlon: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: family table includes Sol 94.6%; Terra exact % not captured — no verified number cited
- FrontierMath (T1–3): family row ~89% (arte.itlibra); Terra-specific not captured
- HLE: no verified public score found for terra

Coding:

- SWE-bench Pro: **63.4%** (vs Sol 64.6%, Luna 62.7%) (spheron/llm-boss)
- MRCR: **89.6%** (vs Sol 91.5%) (Agent Report); Luna collapses to 41.3% on long-context (Vellum)
- SWE-bench Verified / TB / DeepSWE: no verified public score found for gpt-5.6-terra specifically

Long context:

- 1.05M window; MRCR 89.6%; >272K at 2x/1.5x pricing

### Normalized scores (1–100)

- **Tool use: 86/100.** ALE near-Sol at half cost; AA shows Sol/Luna Pareto-dominating Terra on intelligence-vs-cost; no per-benchmark OSWorld captured.
- **Reasoning: 84/100.** AA 42.1 (max) mid-family; GPQA/HLE not published per-tier.
- **Context window: 96/100.** 1.05M window in the 95–100 tier; MRCR 89.6% and >272K surcharge keep it off 100.
- **Multimodal: 80/100.** Text + image (screenshot-strong), text out; no audio/video or non-text output.
- **Coding: 87/100.** SWE-Pro 63.4% within 1.2 pts of Sol at half the price — the tier's whole point.
- **Cost efficiency: 75/100.** ~$2/$10–12 after the July cut sits between the $1.25/$4.25 (~88) and $3/$15 (~60) bands; no free API tier.
- **Overall Score: 87/100.** Half-up mean of (86 + 84 + 96 + 80 + 87) / 5 = 86.6 → 87. Best fit: everyday balanced work where Sol's premium isn't justified — but AA's Pareto analysis favors routing to Sol/Luna effort levels instead.

---

## Signature

- Provided by: **Mistral Large 4 (mistral-large-4)** — 2026-11-05
- Method: public internet research (3+3 web searches, official OpenAI pages cited, 2026-11-05 UTC); cross-checked against AA, Vellum, layerlens, aivy, spheron, emergent.sh, Agent Report, tech-insider, OpenRouter; conflicts (AA Terra 42.1 vs Sol 47.0 version drift; pricing $2/$10 vs $2/$12 across sources) listed side by side. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [GPT-5.6: Frontier intelligence — OpenAI (official; Jul 30 Terra -20%, Aug 21 Sol -20% updates)](https://openai.com/index/gpt-5-6/)
  - [Advancing the price-performance frontier with GPT-5.6 — OpenAI](https://openai.com/index/advancing-the-price-performance-frontier-with-gpt-5-6/)
  - [GPT-5.6 Terra Model — OpenAI API docs (>272K 2x/1.5x, effort levels)](https://developers.openai.com/api/docs/models/gpt-5.6-terra)
  - [OpenRouter — openai/gpt-5.6-terra (balanced tier, half Sol cost)](https://openrouter.ai/openai/gpt-5.6-terra)
  - [Artificial Analysis — Sol/Terra/Luna intelligence vs cost (Terra 42.1 vs Sol 47.0)](https://artificialanalysis.ai/articles/gpt-5-6-intelligence-vs-cost-across-sol-terra-luna)
  - [aivy — AA v4.3 2026-09-22 readings (Sol 47.0, Terra 42.1, Luna 37.3)](https://aivy.com.au/resources/gpt-5-6-sol-vs-terra-vs-luna/)
  - [spheron — SWE-Pro family spread (Sol 64.6 / Terra 63.4 / Luna 62.7)](https://www.spheron.network/blog/gpt-5-6-sol-pricing-api-cost-vs-self-hosted-llms-2026/)
  - [The Agent Report — MRCR Sol 91.5 vs Terra 89.6; Luna 41.3 cliff](https://the-agent-report.com/2026/07/gpt-5-6-sol-terra-luna-benchmarks-pricing-analysis/)
  - [layerlens — ALE Sol 53.6%, Terra matches at half cost](https://layerlens.ai/blog/gpt-5-6-benchmark-review-sol-terra-luna)
  - [llmlearner — Terra pricing effective 2026-08-30, ≤272K standard tier](https://llmlearner.com/models/gpt-5-6-terra)
