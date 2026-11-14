# Claude Fable 5 — findings by DeepSeek 4.1 Flash 1017

- Source: Anthropic/`claude-fable-5`
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5 (Max, Opus 4.8 Fallback)
- **Short description:** Anthropic's mid-2026 proprietary flagship reasoning model, positioned for long-horizon agentic knowledge work and coding on million-token inputs; now superseded by Claude Fable 5.1/5.2.
- **Provider / access:** Anthropic API, Google (Vertex), Microsoft Azure — 3 benchmarked providers, all with 1M context, function calling and JSON-mode feature listings; model id slug `claude-fable-5`.
- **Release / knowledge:** Released 2026-06-09; knowledge cutoff not stated on the fetched pages. Marked **deprecated** by Artificial Analysis (benchmarked every 18 h instead of 6 h), with Claude Fable 5.1 recommended instead.
- **IDs:** `anthropic/claude-fable-5`
- **Context window:** 1M tokens (AA spec table and all three provider rows).
- **Modalities:** text + image input; text output; reasoning yes (extended thinking); tool/function calling yes (all 3 providers), JSON mode listed.
- **Pricing (as of 2026-11-14):** $10.00 / $50.00 per 1M in/out (identical at all 3 providers); 90% cache discount; blended 7:2:1 price $7.70 per 1M.
- **Architecture:** proprietary; parameter count undisclosed. Output speed 86 tok/s, time to first answer token 86.50 s (Anthropic), 83.85 s (Azure), 88.32 s (Google); 0.0% endpoint error rate on all three.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index: no verified public score found — the AA page renders **N/A / "Unknown out of 4 units"** for this Max variant and the provider pages show "No data available" for cost and time per task.
- Terminal-Bench 4.0 / GDPval-AA / AutomationBench-AA: no verified public score found (these evals are listed as tracked for the model, but no values are rendered)

Reasoning / knowledge:

- AA-Omniscience Accuracy / Non-Hallucination Rate: no verified public score found
- HLE-Diamond: no verified public score found
- CritPt v2 (Hard Subset): no verified public score found

Coding:

- FrontierCode-AA 2.0 / Terminal-Bench 4.0: no verified public score found
- SWE-bench Verified / LiveCodeBench: no verified public score found

Long context:

- 1M-token context window (verified across all three providers); no long-context retrieval figure reported. MLCR-AA is listed among tracked evaluations but no value is published.

### Normalized scores (1–100)

- **Tool use: 80/100.** Frontier-tier price and full function-calling/JSON-mode support at three providers plus a first-answer latency profile typical of heavy reasoning, but with the Intelligence Index unmeasured (N/A) and no agentic eval values, it cannot be placed in the 88–96 frontier band.
- **Reasoning: 82/100.** Reasoning mode is confirmed and the model carries an Opus-class flagship tier, yet AA reports no index or reasoning sub-score, so this is held mid-band on unverified flagship positioning.
- **Context window: 96/100.** 1M tokens verified at Anthropic, Google and Azure — the ≥1M tier; no retrieval-stress number to justify 100.
- **Multimodal: 65/100.** Text plus image input with text-only output — the standard image-capable band; no audio, video or PDF-specific modality claim on the fetched pages.
- **Coding: 50/100.** Terminal-Bench 4.0 and FrontierCode-AA 2.0 are tracked but unpublished for this variant, so per methodology coding is capped in the 45–55 range.
- **Cost efficiency: 30/100.** $10 in / $50 out per 1M is the most expensive mainstream tier AA tracks (median $2 / $10), even with a 90% cache discount and $7.70 blended price.
- **Overall Score: 75/100.** Mean of 80, 82, 96, 65, 50 = 74.6 → 75; only sensible for legacy Claude-Fable-5 deployments that need the 1M window and already have infrastructure — Fable 5.1/5.2 dominate it.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash 1017 (deepseek/deepseek-v4.1-flash-1017)** — 2026-11-14
- Method: public internet research via direct `webfetch` of the Artificial Analysis model and provider pages (web search returned HTTP 402, so the direct-fetch fallback was used); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass (markdown links to primary sources)
  - [Claude Fable 5: Intelligence, Performance & Price Analysis](https://artificialanalysis.ai/models/claude-fable-5)
  - [Claude Fable 5 API Provider Benchmarking & Analysis](https://artificialanalysis.ai/models/claude-fable-5/providers)
