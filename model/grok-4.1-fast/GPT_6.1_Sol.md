# Grok 4.1 Fast — findings by GPT 6.1 Sol

- Source: xAI / Grok 4.1 Fast, original November 2025 reasoning-mode assessment with non-reasoning comparison.
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** Grok 4.1 Fast.
- **Short description:** xAI's low-price, large-context tool-calling model, distinct from flagship Grok 4.1 and from Grok 4 Fast. Reasoning/non-reasoning profiles stay within this canonical entry; they do not justify another reasoning-suffix folder.[1]
- **Provider / IDs:** Launch native IDs **`grok-4-1-fast-reasoning` / `grok-4-1-fast-non-reasoning`**, with the project's bare Fast name referring to the reasoning alias. Original xAI Chat Completions/agent tool integration; gateway `x-ai/grok-4.1-fast` allows a reasoning toggle. No free Zen ID verified.[1][4]
- **Release / current availability:** **2025-11-19**. Current xAI model index omits this generation; guessed native detail pages return 404, AA marks it superseded, and exact OpenRouter metadata now has **`endpoints:[]`**. This is an assessment of the identified legacy model; no current invokable provider or precise retirement date was verified. Metadata persistence is not endpoint availability, and no successor's scores are borrowed.[2][4][5]
- **Context window:** Publisher **2M shared total**, independently recorded by AA/Vals. Vals configures **2,000,000 maximum output**, but this is an evaluator/API allowance, not proof of a fully generated 2M-token answer in addition to full input. No current serving endpoint confirms an executable output cap.[1][2][3]
- **Modalities / tools:** Text/image input, text output; gateway/Vals also document file input, distinct from external search/retrieval. No native audio/video or image generation credited. Agent Tools API adds web/X search, code execution, collections and MCP; these are tool services, not native knowledge or modalities.[1][3][4]
- **Pricing:** Published launch and Vals historical tariff **$0.20 input/$0.50 output/$0.05 cache read per 1M**, plus launch tool calls from $5/1,000 successful invocations. Current AA price fields are null and gateway providers empty, so this is **not a verified currently purchasable rate**. Consumer free trials are not a free API tariff.[1][2][3][4]
- **Architecture / knowledge:** Proprietary closed weights; verified parameter count, active count and exact knowledge cutoff unavailable. Current search is tool-mediated; successor Grok cutoffs do not transfer.[1][5]

### Raw benchmarks found

**Identity:** AA exact selected **Grok 4.1 Fast (Reasoning)** UUID `23149f9b-c904-43e2-9ec4-afa2bf843941`, slug `grok-4-1-fast-reasoning`. Its current index is estimated. Vals exact reasoning/non-reasoning profiles use temperature .7/top-p .95, nominal 2M generation cap; modes are not blended into one benchmark accuracy.[2][3][6]

Agent / tool use:

- **Tau2 93.27% AA Reasoning**. Publisher's launch emphasizes telecom and BFCL v4, but numeric chart axes/interactive labels are not treated here as exact model measurements. No verified exact Tau3-Banking/TB2.1/TB4/GDPval/Claw/MCP-Atlas/Toolathlon/SWE Atlas QnA found; selected AA legacy fields are null, not zeros.[1][2]
- **TB2.0 24.72% ± 4.60 Vals Reasoning**, versus **17.98% ± 4.09 Non-reasoning**. Strong customer-service tools coexist with poor general terminal execution.[3][6]
- Vendor Agent Tools workloads **Reka Research-Eval 63.9 / FRAMES 87.6 / internal X Browse 56.3**, reported mean costs **$0.046/$0.048/$0.091**. These are search-enabled harness-specific results; internal X Browse is not a generic external search benchmark.[1]
- **IFBench 52.72% AA Reasoning**; Vals **SAGE 31.33% / MedCode 28.08% / MortgageTax 42.61% / LegalBench 82.45%**. Benchmark domains have markedly uneven success.[2][3]

Reasoning / knowledge:

- **GPQA Diamond 85.25% AA / 84.34% ± 1.85 Vals Reasoning**, **HLE 19.32% / AIME 2025 89.33% / CritPt 2.86% AA**.[2][3]
- **MMLU-Pro 84.18% Vals**. **AA Intelligence Index 20.370 explicitly estimated**, not a complete measured current composite or this source's Overall. Vals displayed **55.02% aggregate** and launch-era rankings are another scale/date.[2][3]
- **Omniscience accuracy 25.08% / hallucination 73.41% / reliability −29.9167 AA**. Publisher's relative FActScore factuality improvement uses another benchmark and does not establish high calibrated factual accuracy on difficult knowledge questions.[1][2]
- Non-reasoning Vals **GPQA 65.15% / MMLU-Pro 75.21% / SAGE 11.91%**, versus the higher reasoning results. Same family name does not make mode settings interchangeable.[6]

Coding / context / multimodal:

- **SWE-bench Verified 41.40% ± 2.21 / LiveCodeBench 80.64% ± 1.09 / Vibe Code v1.1 1.20% ± 1.20 Vals Reasoning**. AA **LiveCodeBench 82.22%**. Strong contest-style exercises do not imply dependable repository fixes or app construction.[2][3]
- No exact independently verified SWE-Pro/DeepSWE/SciCode found; AA SciCode is null. Non-reasoning **LiveCodeBench 42.62% Vals** further demonstrates quality/latency tradeoff.[2][6]
- **LCR 74.0% AA**. Vendor long-context tool charts do not provide a verified exact full-2M retention value in retrieved text; no near-perfect maximum-window MRCR/RULER established.[1][2]
- **MMMU-Pro 63.29% AA / 72.66% ± 1.07 Vals Reasoning**, versus **63.70% Vals Non-reasoning**. No numeric exact native audio/video result is claimed.[2][3][6]
- Vals displayed workload latency **2 min 9 s Reasoning / 34.41 s Non-reasoning**, different task aggregates rather than first-token guarantees. AA selected runtime object is empty; no neighboring-model speed or current price is substituted.[2][3][6]

### Normalized scores (1–100)

- **Tool use: 65/100.** Strong Tau2 and search-enabled workflows support bounded customer support/research agents, capped by TB2.0 24.72%, weak specialist tasks and missing broader exact replication.[1][2][3]
- **Reasoning: 74/100.** GPQA/AIME establish useful reasoning, capped by HLE 19.32%, CritPt 2.86%, severe factual miscalibration and estimated current composite.[2][3]
- **Context window: 95/100.** Verified original 2M capacity meets the million-plus tier; no near-perfect full-window retrieval or verified present-day endpoint justifies 100.[1][2][3][4]
- **Multimodal: 74/100.** Real image/file coverage and visual benchmarks support document/vision use, capped by uneven quality and no native audio/video/non-text output.[2][3][4]
- **Coding: 62/100.** Contest coding is strong, but independent repair 41.4%, terminal 24.72% and app-building 1.20% cap end-to-end engineering.[2][3]
- **Cost efficiency: 93/100.** Published original $0.20/$0.50 is attractive paid value, but tool fees, mode-dependent work and absent currently verified provider prevent a free/maximum or current-price guarantee.[1][2][3][4]
- **Overall Score: 74/100.** Half-up mean `(65 + 74 + 95 + 74 + 62) / 5 = 74`; cost excluded. Historically useful for inexpensive large-context support/search with reasoning enabled; current distribution must be verified separately.

### Research trail and sources

Fresh Bing RSS `"Grok 4.1 Fast" official benchmark` returned broad Grok links; Google `"Grok 4.1 Fast" independent benchmark review` an interstitial; DuckDuckGo `"Grok 4.1 Fast" context pricing reasoning` provided exact launch/evaluator/gateway leads. Native launch, current index, exact AA Reasoning, Vals both modes and current empty gateway endpoint list were compared. Guessed xAI detail pages and AA non-reasoning slug returned 404; Vals supplies verified non-reasoning comparison. No peer findings consulted.

[1]: https://x.ai/news/grok-4-1-fast "Original launch, exact mode IDs, 2M context, Agent Tools workloads and original pricing"
[2]: https://artificialanalysis.ai/models/grok-4-1-fast-reasoning "Exact selected Reasoning record, estimated index, null current pricing/runtime and independent metrics"
[3]: https://www.vals.ai/models/grok_grok-4-1-fast-reasoning "Independent exact Reasoning profile, repair/app/terminal results and settings"
[4]: https://openrouter.ai/api/v1/models/x-ai/grok-4.1-fast/endpoints "Exact identified model and modality metadata but no current provider endpoints"
[5]: https://docs.x.ai/developers/models "Current native model index omits this generation; no exact retirement date supplied"
[6]: https://www.vals.ai/models/grok_grok-4-1-fast-non-reasoning "Separately inspected Non-reasoning quality/latency evidence"

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-20 UTC
- Method: Independent fresh searches and exact original publisher, independent mode-specific evaluator and current distribution checks. Scores are editorial normalized 1–100 interpretations of the identified legacy model, not official vendor scores.
- Future sources: add a separate signed file alongside this report using the same headings.
