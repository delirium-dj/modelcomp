# Qwen 3.7 Max — findings by Iceman

- Source: Alibaba Qwen / Qwen3.7 Max (`qwen/qwen3.7-max`)
- Date: 2026-11-14 (UTC), deep second-pass research (consolidated from prior Iceman report/exclusion state)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Max (Qwen3.7 Max)
- **Short description:** Qwen3.7 Max is Alibaba’s proprietary flagship text-only Max-tier model in the Qwen3.7 series, positioned for agent-centric workloads, long-horizon coding, and office/document automation with 1M context.
- **Provider / access:** Hosted via Alibaba Cloud and third-party routers (e.g. OpenRouter: `qwen/qwen3.7-max`). Local metadata lists `opencode/qwen-3.7-max`, `noFreeId`.
- **Release / knowledge:** OpenRouter canonical slug indicates `qwen3.7-max-20260520` (created 2026-05-? in API metadata context; OpenRouter page shows release May 21, 2026). Qwen blog URL for this exact version was unavailable (404) in this pass. Knowledge cutoff not explicitly stated in reviewed sources.
- **IDs:** `qwen-3.7-max`, `qwen3.7-max`, `qwen/qwen3.7-max`, `opencode/qwen-3.7-max`.
- **Context window:** 1,000,000 tokens total; 131,072 max completion/output tokens (OpenRouter/AA/models.dev/local metadata).
- **Modalities:** Text input / text output.
- **Pricing (as of 2026-11-14):** Provider-dependent hosted pricing. OpenRouter lists ~$1.475/$4.425 per 1M in/out (Alibaba Cloud Int. standard variant) and ~$2.00/$6.00 on another variant, with cache discounts/pricing tiers shown on provider pages; local metadata cites ~$1.48/$4.43. Closed weights (no self-host open-weights option verified).
- **Architecture:** Proprietary Alibaba model; architecture and parameter count not publicly disclosed.

### Raw benchmarks found

> SECOND-PASS UPDATE (consolidated): I reviewed Artificial Analysis’ Qwen3.7 Max page, OpenRouter model/API pages and models API data, models.dev API/search, Hugging Face/Alibaba Cloud/Qwen blog searches, and local metadata/prior `Iceman.md` + `Iceman.md.excluded`. This provides attributable specs/pricing and benchmark numerics for the exact `qwen/qwen3.7-max` identity from AA/OpenRouter-visible sources, though AA shows “no publicly available API”/some index fields as N/A in extracted content and the official Qwen blog URL was unavailable (404). Scores are normalized estimates from available evidence with caveats.

Artificial Analysis (`artificialanalysis.ai/models/qwen3-7-max`, reviewed 2026-11-14, extracted page data):

- **AA Intelligence Index / task cost fields:** shown as N/A/unknown in extracted summary (deprecated-style API availability note), but page data includes evaluation metrics.
- **GPQA Diamond:** 92.32%
- **HLE:** 40.50% (also referenced as HLE-Diamond in AA index context)
- **IFBench:** 80.54%
- **τ²-Bench Telecom (tau2):** 94.74%
- **τ-Bench Banking (tau banking):** 11.75%
- **AA-LCR:** 79.0%
- **GDPval-AA:** 31.7%
- **CritPt:** 13.43%
- **SciCode:** 49.54%
- **Terminal-Bench 2.1:** 74.53%
- **Terminal-Bench Hard:** 50.76%
- **Terminal-Bench 4.0:** 1.52%
- **LiveCodeBench:** null in extracted AA dataset fields
- **AIME 2025:** null in extracted AA dataset fields

OpenRouter / Vals AI benchmark blocks visible on OpenRouter page (`qwen/qwen3.7-max`, reviewed 2026-11-14):

- **SWE-bench:** 68.8% (Vals AI)
- **LiveCodeBench:** 87.1% (Vals AI)
- **Terminal-Bench 2.1:** 61.0% (Vals AI)
- **MMLU-Pro:** 89.3% (Vals AI)
- **GPQA Diamond:** 92.3% (AA-attributed block)
- **HLE:** 40.5% (AA-attributed block)
- **AA-LCR:** 79.0% (AA-attributed block)

Other verified specs/capabilities:

- **Context window:** 1M total / 131,072 max completion (OR/AA/models.dev).
- **Modalities:** text-only input/output.
- **Tooling:** tools, tool_choice, reasoning/structured-output-related parameters supported on OpenRouter API; models.dev indicates reasoning/tool_call/structured_output support for `qwen3.7-max`.

No independently verified public scores found in this pass for: SWE-bench Verified/Pro as explicit official rows (metadata claims 80.4%/60.6% not independently verified), multimodal benchmarks (text-only model), and some standardized agent suites beyond extracted AA/OR values.

### Normalized scores (1–100)

> Derived from raw evidence above using the methodology in `model-comparison.md`. Scores are normalized estimates (not official vendor scores) for a proprietary text-only 1M-context Max model.

- **Tool use: 82/100.** Strong agentic/tool capability signals (tool/reasoning API support, τ² Telecom 94.74%, Terminal-Bench 2.1 74.53% on AA / 61.0% on Vals AI, GDPval-AA 31.7%), tempered by weak τ-Bench Banking (11.75%) and very low Terminal-Bench 4.0 (1.52%).
- **Reasoning: 81/100.** High GPQA Diamond (~92.3%) and strong AA-LCR (79.0%) indicate solid reasoning/long-context reasoning, with moderate HLE (40.5%) and weak CritPt (13.43%).
- **Context window: 96/100.** 1M total context and 131K max completion/output are excellent for long-horizon coding/office workflows, supported by strong AA-LCR (79.0%).
- **Multimodal: 10/100.** Text-only input/output in reviewed specs; no native image/video/audio understanding.
- **Coding: 84/100.** Strong coding signals (LiveCodeBench 87.1% Vals AI, SWE-bench 68.8% Vals AI, SciCode 49.54% AA, Terminal-Bench 2.1 74.53% AA) but not uniformly verified across all standard coding leaderboards and with some benchmark variance by source.
- **Cost efficiency: 76/100.** Hosted pricing (~$1.475–$2.00 in / ~$4.425–$6.00 out per 1M depending on provider/variant, with cache discounts) is reasonable for a 1M-context proprietary Max model but not low-cost; closed weights limit self-hosting efficiency.
- **Overall Score: 71/100.** Mean of the five non-cost dimensions (Tool 82, Reasoning 81, Context 96, Multimodal 10, Coding 84) = 70.6, rounded to 71; strong long-context text-only agent/coding model with good benchmark signals but limited modality and partial source/benchmark variance.

> Caution: Official Qwen blog page for this exact version was unavailable (404). AA and OpenRouter/Vals AI blocks show some metric variance (e.g. Terminal-Bench 2.1 74.53% vs 61.0%, LiveCodeBench null in AA extracted fields vs 87.1% on Vals AI). Local metadata claims SWE-bench Verified 80.4% / SWE Pro 60.6% were not independently verified and are not used as primary scored evidence.

### Source comparison / conflicts

- **Identity/specs:** OpenRouter, AA, models.dev, and local metadata align on Qwen3.7 Max (`qwen/qwen3.7-max`, 1M context, 131K max output, text-only, proprietary, reasoning/tool-capable API).
- **Benchmarks:** AA page data includes GPQA 92.32%, HLE 40.50%, IFBench 80.54%, tau2 94.74%, AA-LCR 79.0%, tau banking 11.75%, GDPval-AA 31.7%, CritPt 13.43%, SciCode 49.54%, Terminal-Bench 2.1 74.53%, TB4 1.52%. OpenRouter/Vals AI blocks show overlapping/conflicting values (GPQA 92.3%, HLE 40.5%, AA-LCR 79.0% aligned; LiveCodeBench 87.1% and SWE-bench 68.8% present on Vals AI but not in AA extracted fields; Terminal-Bench 2.1 differs). All used with attribution/caveats.
- **Pricing:** Provider-dependent; OpenRouter shows multiple Alibaba Cloud Int. variants/rates and cache pricing.
- **Documentation:** Qwen blog URL attempted in this pass returned 404; existing Iceman mixed-state files (`Iceman.md` and `Iceman.md.excluded`) were consolidated into this single evidence-based report.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-14
- Method: Deep second-pass independent research using alternative web access (`webfetch`, PowerShell `Invoke-WebRequest`) across Artificial Analysis, OpenRouter model/API pages and models API, models.dev API/search, Hugging Face/Alibaba Cloud/Qwen searches, and local metadata/prior report review; consolidated prior mixed Iceman files.
- Research performed (>=10 successful independent web fetch/search attempts in batch): prior `Iceman.md`/`Iceman.md.excluded` reads, OpenRouter qwen3.7-max page fetch, Qwen blog URL attempt (404), AA qwen3-7-max page fetch, AA/models.dev/OR/HF/Alibaba help/qwen.ai search fetches for qwen3.7-max and qwen3.7-flash, AA/OR/models.dev API/OR API scans, targeted OpenRouter models API extracts for qwen3.7-max and qwen3.7-flash, local `meta.json` reviews for batch targets.
- Reference URLs:
  - [Qwen3.7 Max (OpenRouter)](https://openrouter.ai/qwen/qwen3.7-max)
  - [Qwen3.7 Max APIs (OpenRouter)](https://openrouter.ai/qwen/qwen3.7-max/api)
  - [Qwen3.7 Max (Artificial Analysis)](https://artificialanalysis.ai/models/qwen3-7-max)
  - Local repository metadata consulted: `model/qwen-3.7-max/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
