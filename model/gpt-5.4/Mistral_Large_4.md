# GPT-5.4 — findings by Mistral Large 4

- Source: OpenAI (`gpt-5.4`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4
- **Short description:** OpenAI's March 2026 standard-tier flagship — "most capable and efficient frontier model for professional work"; first mainline model absorbing GPT-5.3-Codex frontier coding, with native Computer Use API and tool search; family: 5.4 standard / Thinking / Pro, plus mini (2026-03-17, ~$0.40/$1.60) and nano. Superseded by GPT-5.5 (2026-04-23).
- **Provider / access:** OpenAI API (`gpt-5.4`, Responses API), ChatGPT (as 5.4 Thinking on Plus/Team/Pro), Codex. Background mode stores response data ~10 min (not ZDR-compatible).
- **Release / knowledge:** Released 2026-03-05; knowledge cutoff not restated in reviewed snippets.
- **IDs:** `gpt-5.4` (API); `openai/gpt-5.4` (OpenRouter).
- **Context window:** 1,050,000 tokens in; 128K max output.
- **Modalities:** Text + image in, text out; five-level reasoning effort; tool calling, native computer use, tool search; JSON mode; background mode.
- **Pricing (as of 2026-11-05):** $2.50 / $15.00 per 1M in/out (standard tier; Pro $30/$180 tracked separately); not on free tier.
- **Architecture:** Proprietary, params not disclosed; GPT-5.4 family.

### Raw benchmarks found

Official announcement cross-checked against NxCode, tokencost, almcorp, llm-stats, BenchmarkList, OpenRouter, umesh-malik; conflicts noted:

Agent / tool use:

- OSWorld: **75%** native Computer Use API (NxCode); Toolathlon strong (almcorp)
- Tool search reduces context; computer-use + knowledge work gains (almcorp)
- MCP Atlas / Claw-Eval / AutomationBench: no verified public score found for this ID

Reasoning / knowledge:

- GPQA / HLE / FrontierMath: family table exists (arte.itlibra: Sol-era 94.6 GPQA, FM T1–3 89%); 5.4-base exact % not captured — no verified number cited
- LMArena competitive at launch (NxCode); AA coverage exists

Coding:

- SWE-bench Pro: **57.7%** (NxCode/ai-tldr); absorbs GPT-5.3-Codex (NxCode)
- Terminal-Bench / SWE-V / DeepSWE / LiveCodeBench: no verified public score found for gpt-5.4 base

Long context:

- 1.05M / 128K (official); no verified MRCR/RULER score found for this ID

### Normalized scores (1–100)

- **Tool use: 88/100.** Native computer use (OSWorld 75%) and tool search; no MCP-Atlas/Claw rows captured.
- **Reasoning: 86/100.** Family-level reasoning strong; base-specific GPQA/HLE not captured.
- **Context window: 96/100.** 1.05M / 128K in the 95–100 tier; no verified 512K+ retrieval.
- **Multimodal: 80/100.** Text + image in, text out; no audio/video or non-text output.
- **Coding: 87/100.** SWE-Pro 57.7% plus Codex absorption; no SWE-V/TB captured for base.
- **Cost efficiency: 82/100.** $2.50/$15 per 1M between the $1.25/$4.25 (~88) and $3/$15 (~60) bands; no free tier.
- **Overall Score: 87/100.** Half-up mean of (88 + 86 + 96 + 80 + 87) / 5 = 87.4 → 87. Best fit: March–April 2026 standard professional-work model; GPT-5.5 replaced it six weeks later at 2x token price with higher scores.

---

## Signature

- Provided by: **Mistral Large 4 (mistral-large-4)** — 2026-11-05
- Method: public internet research (3 web searches, official OpenAI announcement cited, 2026-11-05 UTC); cross-checked against NxCode, tokencost, almcorp, llm-stats, BenchmarkList, OpenRouter, TechCrunch, Wikipedia; missing base-specific numbers marked, not invented. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing GPT-5.4 — OpenAI (official, 2026-03-05)](https://openai.com/index/introducing-gpt-5-4/)
  - [Wikipedia — GPT-5.4 (variants, mini/nano 2026-03-17)](https://en.wikipedia.org/wiki/GPT-5.4)
  - [NxCode — GPT-5.4 complete guide (OSWorld 75%, SWE-Pro 57.7%, $2.50/$15, Pro $30/$180)](https://www.nxcode.io/resources/news/gpt-5-4-complete-guide-features-pricing-models-2026)
  - [tokencost — GPT-5.4 pricing (1.05M in / 128K out)](https://tokencost.app/blog/openai-gpt-5-4-pricing-benchmarks-review)
  - [ALM Corp — GPT-5.4 features/benchmarks (Toolathlon, computer use)](https://almcorp.com/blog/gpt-5-4/)
  - [OpenRouter — openai/gpt-5.4](https://openrouter.ai/openai/gpt-5.4)
  - [BenchLM — gpt-5-4](https://benchlm.ai/models/gpt-5-4)
  - [TechCrunch — GPT-5.4 launch](https://techcrunch.com/2026/03/05/openai-launches-gpt-5-4-with-pro-and-thinking-versions/)
  - [umesh-malik — GPT-5.4 guide (background mode ~10 min storage, not ZDR)](https://umesh-malik.com/blog/openai-gpt-5-4-complete-guide)
  - [llm-stats — gpt-5.4](https://llm-stats.com/models/gpt-5.4)
