# GPT-5.4 Pro — findings by Mistral Large 4

- Source: OpenAI (`gpt-5.4-pro`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Pro
- **Short description:** The high-performance reasoning tier of OpenAI's GPT-5.4 family (released 2026-03-05 alongside GPT-5.4 standard and GPT-5.4 Thinking; mini/nano followed 2026-03-17) — "optimized for high performance" on complex tasks, for Pro/Enterprise plans and API. Absorbed GPT-5.3-Codex frontier coding.
- **Provider / access:** OpenAI API (`gpt-5.4-pro`, Responses API), ChatGPT Pro/Enterprise. Regional/data-residency endpoints +10% uplift. Not on free tier.
- **Release / knowledge:** Released 2026-03-05; knowledge cutoff not restated in reviewed snippets.
- **IDs:** `gpt-5.4-pro` (OpenAI API).
- **Context window:** 1,050,000 tokens in; 128K max output.
- **Modalities:** Text + image in, text out; five-level reasoning effort; tool calling, native Computer Use API, tool search; JSON mode.
- **Pricing (as of 2026-11-05):** $30 / $180 per 1M in/out — 12x the standard GPT-5.4 tier ($2.50/$15); regional endpoints +10%. No free tier.
- **Architecture:** Proprietary, params not disclosed; GPT-5.4 family (first mainline to absorb Codex coding capabilities).

### Raw benchmarks found

Official announcement + API docs cross-checked against ai-tldr, almcorp, anotherwrapper, NxCode, tokencost, glbgpt; conflicts noted:

Agent / tool use:

- BrowseComp: **89.3%** — new SOTA at launch (ai-tldr/almcorp)
- MCP Atlas: **87.1%** (anotherwrapper Pro row); tau2-bench Telecom: **74.6%** (anotherwrapper)
- OSWorld-Verified: **75.0%** (base line, ai-tldr) vs **65%** (anotherwrapper Pro row) — conflicting, both cited
- GDPval: **83.0%** (base, ai-tldr) vs **90.6%** (anotherwrapper Pro row) — conflicting, both cited
- Claw-Eval / Toolathon: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **94.4%** (Pro; ai-tldr/almcorp) vs 90.5% (anotherwrapper) — conflicting, both cited
- FrontierMath Tier 4: **38.0%** Pro (base 27.1%) (almcorp); Tier 1–3: 51.7% (base, Wikipedia)
- HLE: **29.8% with tools / 40.8% no tools** (anotherwrapper); ARC-AGI-2 Verified: 11.7% (anotherwrapper)
- MMMU-Pro: **96.3% no tools / 74.6% with tools** (anotherwrapper)

Coding:

- SWE-bench Pro: **57.7%** (base line, ai-tldr) vs **76.7%** (anotherwrapper Pro row) — conflicting, both cited
- Terminal-Bench 2.0: **64.9%** (anotherwrapper Pro row)
- SWE-bench Verified / LiveCodeBench / DeepSWE: no verified public score found for gpt-5.4-pro specifically

Long context:

- 1.05M / 128K (official); no verified MRCR/RULER score found for this ID

### Normalized scores (1–100)

- **Tool use: 89/100.** BrowseComp 89.3% SOTA and MCP Atlas 87.1%; OSWorld/GDPval rows conflict across sources.
- **Reasoning: 89/100.** GPQA 94.4% and FrontierMath T4 38.0% (12 pts over base) strong; HLE 29.8–40.8% mixed; ARC-AGI-2 11.7% weak.
- **Context window: 96/100.** 1.05M / 128K in the 95–100 tier; no verified 512K+ retrieval.
- **Multimodal: 80/100.** Text + image in (MMMU-Pro 96.3% no tools), text out; no audio/video or non-text output.
- **Coding: 88/100.** SWE-Pro readings conflict (57.7% base vs 76.7% Pro row) — scored on the higher Pro-specific reading with conflict flagged; TB 2.0 64.9%.
- **Cost efficiency: 10/100.** $30/$180 per 1M is the steepest tier found (12x standard); below the $10/$50 ≈ 30 band; no free tier.
- **Overall Score: 88/100.** Half-up mean of (89 + 89 + 96 + 80 + 88) / 5 = 88.4 → 88. Best fit: March–April 2026 premium accuracy tier; at $30/$180 it was already superseded by GPT-5.5 (2026-04-23) at lower prices.

---

## Signature

- Provided by: **Mistral Large 4 (mistral-large-4)** — 2026-11-05
- Method: public internet research (3+3 web searches, official OpenAI pages cited, 2026-11-05 UTC); cross-checked against ai-tldr, almcorp, anotherwrapper, NxCode, tokencost, glbgpt, TechCrunch, Wikipedia; conflicting Pro-vs-base benchmark rows (SWE-Pro 57.7 vs 76.7; OSWorld 75 vs 65; GPQA 94.4 vs 90.5) listed side by side, not merged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing GPT-5.4 — OpenAI (official, 2026-03-05)](https://openai.com/index/introducing-gpt-5-4/)
  - [GPT-5.4 Pro Model — OpenAI API docs (regional +10% uplift)](https://developers.openai.com/api/docs/models/gpt-5.4-pro)
  - [Wikipedia — GPT-5.4 (variants, release dates)](https://en.wikipedia.org/wiki/GPT-5.4)
  - [ai-tldr — gpt-5.4-pro (GPQA 94.4%, BrowseComp 89.3% SOTA, OSWorld 75%, GDPval 83.0%)](https://ai-tldr.dev/models/gpt-5-4-pro/)
  - [ALM Corp — GPT-5.4 guide (Pro FM T4 38.0% vs base 27.1%, BrowseComp SOTA)](https://almcorp.com/blog/gpt-5-4/)
  - [anotherwrapper — gpt-5.4-pro row (HLE 29.8/40.8, SWE-Pro 76.7, TB 64.9, MMMU 96.3 — conflicting with base rows)](https://anotherwrapper.com/tools/llm-pricing/gpt-54-pro)
  - [NxCode — GPT-5.4 complete guide ($2.50/$15 standard, Pro $30/$180 = 12x)](https://www.nxcode.io/resources/news/gpt-5-4-complete-guide-features-pricing-models-2026)
  - [tokencost — GPT-5.4 pricing (1.05M in / 128K out)](https://tokencost.app/blog/openai-gpt-5-4-pricing-benchmarks-review)
  - [TechCrunch — GPT-5.4 launch with Pro/Thinking](https://techcrunch.com/2026/03/05/openai-launches-gpt-5-4-with-pro-and-thinking-versions/)
  - [OpenAI Developer Community — GPT-5.4 Pro and Thinking announcement](https://community.openai.com/t/gpt-5-4-pro-and-thinking-are-here/1375799)
