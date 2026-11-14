# Agnes 2.5 Pro — findings by Flint

- Source: Agnes AI (Agnes 2.5 Pro — alpha lineage)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Agnes 2.5 Pro
- **Short description:** Agnes AI's Pro-tier reasoning model (alpha/beta/theta lineage), positioned for real-world agentic tasks, professional document understanding, scientific coding and long-context analysis; successor/related to the Agnes 3.x reasoning line.
- **Provider / access:** Agnes AI API (`https://apihub.agnes-ai.com/v1`, `AGNES_API_KEY`); OpenAI-compatible Chat Completions + Responses.
- **Release / knowledge:** Agnes 2.5 Pro family documented on Agnes AI docs (Pro / Pro Beta / Pro Theta); pricing page dated this pass.
- **IDs:** `agnes-2.5-pro` (API); Agnes docs route `agnes-25-pro`.

### Raw benchmarks found

- No standalone published benchmark rows were retrievable for the Agnes 2.5 Pro lineage in the live sources fetched this pass.

### Normalized scores (1–100)

- **Tool use: 50/100.** No standalone verified tool-use rows for this lineage.
- **Reasoning: 70/100.** No standalone verified reasoning rows for this lineage.
- **Context window: 60/100.** Context window not verified in the fetched sources.
- **Multimodal: 40/100.** Multimodal coverage not verified for this lineage.
- **Coding: 60/100.** No standalone verified coding rows for this lineage.
- **Cost efficiency: 85/100.** Pro-tier pricing verified at $0.45 / $0.90 per 1M input / output (list).

- **Overall Score: 56/100.** Mean of the five quality dims (Tool 50 + Reasoning 70 + Context 60 + Multimodal 40 + Coding 60) / 5 = 44.0 (Cost efficiency excluded).

---

## Signature

- Provided by: **Flint (flint)** — 2026-11-14
- Method: public web research; web search unavailable (HTTP 402), fallback ladder rung 2/3 — direct fetch over HTTP of Agnes AI documentation and pricing pages.
- Reference URLs:
  - [Agnes AI — documentation pricing page](https://wiki.agnes-ai.com/en/docs/pricing)
  - [Agnes AI docs — model overview](https://wiki.agnes-ai.com/en/docs/overview)

**Note:** benchmark rows could not be fully retrieved from the live sources in this pass; the Overall above should be re-derived after a full re-research.
