# Solar Mini 4 — findings by Iceman

- Source: Upstage / Solar Mini 4 (`upstage/solar-mini4`)
- Date: 2026-11-14 (UTC), deep second-pass research
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Mini 4
- **Short description:** Solar Mini 4 is Upstage’s compact proprietary reasoning MoE model (35B total / 3B active) for efficient long-context text workloads, with strong long-context recall for its class but limited agentic/coding benchmark coverage.
- **Provider / access:** Upstage API / hosted providers (e.g. OpenRouter: `upstage/solar-mini4`). Local metadata lists `upstage/solar-mini4`, `noFreeId`; proprietary/no open weights.
- **Release / knowledge:** Artificial Analysis lists release September 2026 and knowledge cutoff February 1, 2026. Upstage console docs reviewed in this pass.
- **IDs:** `solar-mini4`, `upstage/solar-mini4`.
- **Context window:** 524,288 tokens context / 131,072 max completion on OpenRouter/Upstage docs; Artificial Analysis and local metadata also reference 1M context in some contexts (provider/listing variance).
- **Modalities:** Text input / text output.
- **Pricing (as of 2026-11-14):** List ~$0.10/$0.40 per 1M in/out with $0.01 cached read (AA/Upstage/OpenRouter); OpenRouter shows promo ~$0.05/$0.20 per 1M. Local metadata notes promo through 2026-10-23.
- **Architecture:** Proprietary mixture-of-experts, 35B total / 3B active parameters (AA/OR/Upstage).

### Raw benchmarks found

> SECOND-PASS UPDATE (converted from excluded): I reviewed Artificial Analysis’ Solar Mini 4 page, OpenRouter model/API pages and models API data, Upstage console docs, models.dev/HF searches, and local metadata/prior `Iceman.md.excluded`. This provides attributable specs/pricing/performance and benchmark numerics for the exact `upstage/solar-mini4` identity (AA extracted metrics and OR-displayed AA/benchmark blocks), though AA Intelligence Index summary fields are shown as N/A/unknown in extracted content. Scores are normalized estimates from available evidence with caveats.

Artificial Analysis (`artificialanalysis.ai/models/solar-mini4`, reviewed 2026-11-14, extracted page data):

- **AA Intelligence Index summary:** N/A/unknown in extracted summary (but metric-level data present)
- **AA-LCR:** 83.33%
- **HLE / HLE-Diamond context:** 25.76%
- **SciCode:** 47.57%
- **GDPval-AA:** 29.6% (value ~1092.1 in extracted interval/context fields)
- **CritPt:** 1.43%
- **Terminal-Bench 4.0:** 1.01%
- **GPQA:** null
- **LiveCodeBench:** null
- **AIME 2025:** null
- **IFBench:** null
- **AutomationBench-AA partial score:** 22.25%
- **Performance:** time to first answer token 98.60s, output speed 85 tok/s (AA/provider metrics)

OpenRouter benchmark blocks / API (`upstage/solar-mini4`, reviewed 2026-11-14):

- **AA-LCR:** 83.3% (AA-attributed block)
- **HLE:** 25.8% (AA-attributed block)
- **GDPval-AA:** 29.6% (AA-attributed block)
- **CritPt:** 1.4% (AA-attributed block)
- **SciCode:** 47.6% (AA-attributed block)
- **Terminal-Bench 4.0:** 1.0% (AA-attributed block)
- **AA-Omniscience Accuracy:** 18.2%
- **AA-Omniscience Non-Hallucination Rate:** 63.5%
- **Supported capabilities:** reasoning, tool calling/structured outputs-related params, 524K context / 131K max completion in API top provider

Other verified specs/capabilities:

- **Modalities:** text-only.
- **Architecture:** 35B total / 3B active MoE, proprietary/no open weights.

### Normalized scores (1–100)

> Derived from raw evidence above using the methodology in `model-comparison.md`. Scores are normalized estimates (not official vendor scores) for a compact proprietary reasoning model with partial benchmark coverage.

- **Tool use: 34/100.** Tool-calling/reasoning API support exists, but agentic benchmark evidence is weak in reviewed data (Terminal-Bench 4.0 ~1.0%, AutomationBench-AA partial 22.25%, GDPval-AA 29.6%, no verified τ/Terminal-Bench 2.1/SWE-agent suite coverage).
- **Reasoning: 48/100.** Strong long-context reasoning/recall signal (AA-LCR 83.3%) and moderate SciCode (47.6%), offset by low HLE (25.8%), very low CritPt (1.4%), and modest AA-Omniscience accuracy/non-hallucination (18.2% / 63.5%).
- **Context window: 90/100.** Large effective context for its class (524K documented by Upstage/OR API; AA/local metadata reference 1M in some contexts) with excellent AA-LCR (83.3%), though context reporting varies by source.
- **Multimodal: 10/100.** Text-only input/output.
- **Coding: 38/100.** Some coding/technical evidence (SciCode 47.6%) but very weak terminal-agent coding signal (Terminal-Bench 4.0 ~1.0%) and no verified SWE-bench/LiveCodeBench.
- **Cost efficiency: 88/100.** Very competitive pricing for capability class ($0.10/$0.40 list, $0.01 cached; promo lower) and efficient 3B-active MoE inference profile (85 tok/s reported by AA), though proprietary/hosted-only.
- **Overall Score: 44/100.** Mean of the five non-cost dimensions (Tool 34, Reasoning 48, Context 90, Multimodal 10, Coding 38) = 44.0; excellent long-context efficiency/value for text reasoning, but not a strong general agent/coding or multimodal model.

> Caution: AA Intelligence Index summary is shown as N/A/unknown in extracted content despite available per-benchmark metrics. Context-window reporting varies (524K vs 1M references). Pricing includes time-limited promo claims in metadata.

### Source comparison / conflicts

- **Identity/specs:** AA, OpenRouter/API, Upstage docs, and local metadata align on `upstage/solar-mini4` (35B/3B active MoE, text-only, reasoning, proprietary, Feb 2026 knowledge cutoff on AA).
- **Context:** Upstage/OR API document 524K context / 131K max completion; AA states 1M context window in summary. Treated as source variance/serving-definition difference.
- **Benchmarks:** AA/OR provide consistent attributable values for AA-LCR (83.3%), HLE (~25.8%), SciCode (~47.6%), GDPval-AA (29.6%), CritPt (~1.4%), Terminal-Bench 4.0 (~1.0%), plus AA-Omniscience metrics on OR; GPQA/LiveCodeBench/AIME/IFBench null/unavailable in extracted AA fields.
- **Pricing/performance:** List/promo/cached pricing consistent in direction across sources; AA reports 98.60s TTFA and 85 tok/s output speed.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-14
- Method: Deep second-pass independent research using alternative web access (`webfetch`, PowerShell `Invoke-WebRequest`) across Artificial Analysis, OpenRouter model/API pages and models API, Upstage console docs, models.dev/HF searches, and local metadata/prior report review.
- Research performed (>=10 successful independent web fetch/search attempts in batch): AA solar-mini4 page fetch, OpenRouter solar-mini4 page fetch, Qwen 3.8 Max blog URL attempt (404), AA qwen3-8-max page fetch, AA/models.dev/OR/HF/Qwen blog/Upstage docs/OR API search fetches for qwen3.8-max and solar-mini4, HF Qwen3.8-2.4T-A95B page fetch, Upstage console docs fetch, AA/OR/HF/Upstage text scans, targeted OpenRouter models API extracts for `qwen/qwen3.8-max` and `upstage/solar-mini4`, local `meta.json` and prior `Iceman.md.excluded` reviews for batch targets.
- Reference URLs:
  - [Solar Mini 4 (Artificial Analysis)](https://artificialanalysis.ai/models/solar-mini4)
  - [Solar Mini 4 (OpenRouter)](https://openrouter.ai/upstage/solar-mini4)
  - [Solar Mini 4 docs (Upstage Console)](https://console.upstage.ai/docs/models/solar-mini-4)
  - Local repository metadata consulted: `model/solar-mini-4/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
