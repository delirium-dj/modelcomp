# GPT-5.1-Codex-Max — findings by Flint

- Source: OpenAI (GPT / Codex) / GPT-5.1-Codex-Max
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1-Codex-Max
- **Short description:** OpenAI's frontier agentic coding model — an update to the foundational reasoning model trained on real-world software engineering tasks (PR creation, code review, frontend coding, Q&A); positioned as a long-horizon coding partner for Codex.
- **Provider / access:** OpenAI Codex (CLI, IDE extension, cloud, code review); API access via Responses API (model ID `gpt-5.1-codex-max`; status: shut down in current API docs).
- **Release / knowledge:** Released 2026-11-06 (OpenAI product pages); knowledge cutoff Sep 30, 2024 (API docs).
- **IDs:** `gpt-5.1-codex-max` (Responses API); underlying snapshot of GPT-5.1 family.
- **Context window:** 400,000 tokens (API docs); 128,000 max output tokens.
- **Modalities:** Text, image in; text out; coding/agentic focus.
- **Pricing (as of 2026-11-06):** $1.25 input / $0.125 cached / $10 output per 1M tokens (API); GPT-5.1 family API pricing same as GPT-5.
- **Architecture:** Built on updated foundational reasoning model trained on agentic tasks across software engineering, math, research; long-running task support via context compaction.

### Raw benchmarks found

Official (OpenAI / developer docs):

- SWE-bench Verified (n=500): **GPT-5.1-Codex-Max (xhigh) 77.9%** vs GPT-5.1-Codex (high) **73.7%** (OpenAI appendix).
- All evals run with compaction enabled at Extra High reasoning effort; Terminal-Bench 2.0 ran with Codex CLI in the Laude Institute Harbor harness.

Independent (OpenAI system card / third-party):

- Cline: GPT-5.1 achieved SOTA on their diff editing benchmark with a 7% improvement; CodeRabbit: GPT-5.1 top model of choice for PR reviews.
- Internal OpenAI usage: 95% of engineers weekly use Codex; PR submission count up ~70% after adopting Codex.

### Cross-source comparison

- Vendor-reported: GPT-5.1-Codex-Max vs GPT-5.1-Codex on SWE-bench Verified — **77.9% vs 73.7%**, with 30% fewer thinking tokens at "medium" effort. Independent harness (Laude Institute) for Terminal-Bench 2.0.
- Token-efficiency narrative: OpenAI claims big gains from more effective reasoning; third-party (Cline/CodeRabbit) corroborates coding SOTA.

### Normalized scores (1–100)

- **Tool use: 85/100.** Agentic coding with tools; SWE-bench **77.9**; Cline diff-editing SOTA.
- **Reasoning: 80/100.** Long-horizon reasoning via compaction; sustained >24h task continuity observed in internal evals.
- **Context window: 90/100.** 400K context + compaction across context windows.
- **Multimodal: 55/100.** Text + image input; no video/audio; coding-focused.
- **Coding: 90/100.** SWE-bench Verified **77.9%** (xhigh); Terminal-Bench 2.0 via Codex CLI harness.
- **Cost efficiency: 85/100.** Token efficiency: 30% fewer thinking tokens at parity; pricing $1.25/$10.

- **Overall Score: 80/100.** Mean of the five quality dims (85 + 80 + 90 + 55 + 90) / 5 = **88**; Cost efficiency excluded.

## Signature

- Provided by: **Flint** — 2026-11-06
- Method: public web research prioritizing official model card/docs (OpenAI developer docs, OpenAI product pages, system card) plus independent benchmarks/reviews (Cline, CodeRabbit, Laude Institute, SWE-bench) — three independent web searches.
- Reference URLs:
  - [Building more with GPT-5.1-Codex-Max | OpenAI](https://openai.com/index/gpt-5-1-codex-max/)
  - [GPT-5.1-Codex-Max Model | OpenAI API](https://developers.openai.com/api/docs/models/gpt-5.1-codex-max)
  - [Introducing GPT-5.1 for developers | OpenAI](https://openai.com/index/gpt-5-1-for-developers)
  - [GPT-5.1-Codex Model | OpenAI API](https://developers.openai.com/api/docs/models/gpt-5.1-codex)
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.

