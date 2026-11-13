# Grok 4.3 — findings by Qwen 4 Max

- Source: xAI / grok-4.3
- Date: 2026-11-13 (UTC)
- See also: [../../model-comparison.md](../../model-comparison.md) and [../../model-findings.md](../../model-findings.md)

## Model card

- Name: Grok 4.3
- Short description: xAI's spring-2026 reasoning model positioned for fast, reliable tool calling and instruction following at a competitive price; now deprecated in favor of Grok 4.6 per Artificial Analysis.
- Provider/access: xAI API (trackers list the creator as "SpaceXAI" — naming conflict labelled), alias `grok-4.3-latest`; AA tracks 3 API providers, llm-stats 1 (xAI). Regions us-east-1, eu-west-1, us-west-2; rate limits 37 RPS / 10M TPM. Batch API supported at 20% discount.
- Release/knowledge: AA FAQ says April 30, 2026; llm-stats says May 6, 2026 (conflict labelled; press coverage dated May 2). Knowledge cutoff not disclosed in fetched sources. Deprecated: AA banner names Grok 4.6 as successor; the official docs page still lists the model without a deprecation notice.
- IDs: `grok-4.3`, `grok-4.3-latest`.
- Context window: 1,000,000 tokens (docs, AA, BenchLM, llm-stats agree). Max output tokens not disclosed (llm-stats "—").
- Modalities: text + image input, text output. Function calling and structured outputs supported. Reasoning efforts none/low/medium/high/xhigh, **default low** (docs); AA benchmarks the High variant.
- Pricing (as of 2026-11-13, official docs): <200K prompt tokens $1.25 input / $0.20 cached / $2.50 output per 1M; ≥200K $2.50 / $0.40 / $5.00 — once a prompt reaches 200K, ALL tokens bill at the higher rate (2× surcharge). Batch −20%. AA: 84% cache discount, blended $0.64 (7:2:1); no live cost/task (deprecated, index N/A).
- Architecture: proprietary; parameter count undisclosed. No public technical report (llm-stats points to x.ai/api).

### Raw benchmarks found

No vendor launch post retrievable (x.ai/news/grok-4-3 → 404); all numbers below are independent or third-party carriages via BenchLM (Nov 13 snapshot) unless noted.

- Intelligence Index: AA live N/A (deprecated); historical carriage 37.6 (version unstated — not comparable to current v5.0.1 scores).
- Knowledge/reasoning (AA independent): GPQA-Diamond 90.1% (Vals 91.4%), AA-HLE 37.2% (BenchLM also carries a third-party HLE 35% — conflict labelled), CritPt 8.0%, IFBench 81.3%, Omniscience +18.0 (accuracy 34.6%, hallucination 25.0%), Vals MMLU-Pro 85.8%.
- Mathematics (Epoch AI independent): FrontierMath v2 Tiers 1–3 42.807%, Tier 4 14.634%.
- Epistemics (AA-run, carried from the Inkling-Small launch post peer table): ForecastBench 60.9, Prophet 0.1264 — among the stronger forecasting models in that table.
- Agentic/tool use: τ²-bench 97.7% (AA), GDPval-AA 1,018 Elo / normalized 29.2% (OpenRouter carriage), APEX-Agents-AA 17.0%, AA Agentic Index 17.2%, Vals Terminal-Bench 2.1 41.9%, Gert Labs 43.86%, ResearchClawBench 12.4%.
- Coding: Vals SWE-bench 71.4%, Vals LiveCodeBench 84.5%, AA-SciCode 48.3% (third-party SciCode 47.3%), AA Coding Index 42.3%.
- Multimodal: AA-MMMU-Pro 78.1% (single static vision row); Design Arena Website 1,191 Elo (OpenRouter carriage).
- Long context: AA-LCR 64.3% (OpenRouter carriage) — weak for a 1M-window model; no MLCR/MRCR surfaced.
- Performance (AA, deprecated 18h cadence): 76 tok/s, TTFT 19.30s; time/task and verbosity N/A.
- BenchLM overall 52.61/100, #82 of 1033 (36 benchmarks covered). Sibling context: Grok 4.6 66.27, Grok 4.5 62.73, Grok 4.20 55.29, Grok 4 52.04.

### Normalized scores (1–100)

- **Tool use: 73/100.** τ²-bench 97.7% is excellent, but the agentic suite is otherwise thin: GDPval 1,018 Elo / 29.2% normalized, APEX-Agents 17.0%, Agentic Index 17.2%, Vals TB 2.1 41.9% — a Qwen3.6-Plus-class profile (GDPval ~1,066, τ² 97.7) well below Grok 4.5/4.6.
- **Reasoning: 80/100.** GPQA 90.1–91.4%, AA-HLE 37.2%, IFBench 81.3%, Omni +18.0 with low hallucination, FrontierMath v2 42.8%/14.6%, and strong forecasting (ForecastBench 60.9); CritPt 8.0% is weak and the historical index 37.6 trails Grok 4.5's 38.8 and 4.6's 44.3.
- **Context window: 74/100.** 1M tokens on paper, but LCR 64.3% is poor retrieval evidence (below Gemini 2.5 Pro's 69.0) and the ≥200K 2× surcharge bills every token at double rate — the same surcharge pattern that capped Grok 4.7 at 76 with a much better LCR 76.7.
- **Multimodal: 75/100.** Image input with a single MMMU-Pro 78.1% row and no video/audio/grounding evidence — the standard single-row image-in calibration (GPT-5.3-Codex 75 at 78.5, Grok 4.5 76 at 80.4).
- **Coding: 74/100.** Vals SWE-bench 71.4% and LCB 84.5% are respectable, but Coding Index 42.3%, SciCode 48.3% and Vals TB 2.1 41.9% show limited agentic coding depth; no SWE-Pro/DeepSWE/FrontierCode evidence — clearly below Grok 4.5 (SWE-Pro 64.7) and 4.6.
- **Cost efficiency: 84/100.** $1.25/$2.50 with 84% cache discount is very competitive per token for this capability tier (AA medians $2.00/$10.00; blended $0.64), plus Batch −20%; deducted for the 2× ≥200K surcharge, deprecated status, and no measurable cost/task.
- **Overall Score: 75.2/100.** Mean of the five quality dimensions (73+80+74+75+74)/5 = 75.2; cost excluded per methodology. A cheap, fast, tool-fluent deprecated tier with weak long-context retrieval and shallow agentic/coding depth — consistent with its BenchLM position below Grok 4.5/4.6 and above Grok 4.

---

## Signature

- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-13
- Method: public internet research (official docs.x.ai model page, Artificial Analysis deprecated-model page, BenchLM aggregator with Who-ran-it carriages, llm-stats provider table); scores are normalized 1–100 interpretations, not official vendor scores. Conflicts labelled, never averaged: release April 30 (AA) vs May 6 (llm-stats); HLE 35% third-party vs AA-HLE 37.2%; AA index N/A live vs 37.6 historical carriage (version unstated); creator xAI vs SpaceXAI naming; docs cached-input $0.20 vs llm-stats "—"; AA deprecation banner (→Grok 4.6) vs docs page with no deprecation notice. Vendor launch post x.ai/news/grok-4-3 returned 404 and is excluded; ForecastBench/Prophet rows carried from the AA-run peer table in the Inkling-Small launch post (thinkingmachines.ai/news/inkling-small/), cited to that original source.
- Reference URLs:
  - [Grok 4.3 — xAI Docs](https://docs.x.ai/developers/models/grok-4.3)
  - [Grok 4.3 (High) — Artificial Analysis](https://artificialanalysis.ai/models/grok-4-3)
  - [Grok 4.3 — BenchLM](https://benchlm.ai/models/grok-4-3)
  - [Grok 4.3 — LLM Stats](https://llm-stats.com/models/grok-4.3)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.