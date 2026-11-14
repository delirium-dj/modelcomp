# Mercury 2 — findings by Iceman

- Source: Inception Labs / Mercury 2 (`inception/mercury-2`, `mercury-2`)
- Date: 2026-11-14 (UTC), deep second-pass research
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 2
- **Short description:** Inception Labs’ Mercury 2 is an earlier-generation diffusion LLM optimized for high-throughput/low-latency inference, with chat completions, tool calling, and structured output support.
- **Provider / access:** Inception Labs API and hosted providers (e.g. OpenRouter). Local metadata lists `noFreeId`.
- **Release / knowledge:** Inception Labs models documentation reviewed 2026-11-14; knowledge cutoff not explicitly stated in reviewed sources.
- **IDs:** `mercury-2`, `inception/mercury-2`, `Mercury 2`.
- **Context window:** 128,000 tokens total; 50,000 max output tokens (Inception docs/OpenRouter/local metadata).
- **Modalities:** Text input/output (Inception docs/chat completions). Local metadata claims text/vision input; vision capability was not independently verified from accessible official docs text in this pass (treated as unverified claim).
- **Pricing (as of 2026-11-14):** $0.25/M input, $0.025/M cached input, $0.75/M output (Inception docs/OpenRouter/local metadata).
- **Architecture:** Proprietary diffusion LLM (closed weights), parallel block refinement/non-autoregressive decoding family. Parameter count not publicly disclosed.

### Raw benchmarks found

> SECOND-PASS UPDATE (converted from excluded): I reviewed Inception Labs official models documentation, OpenRouter and Artificial Analysis model pages (including AA-attributed benchmark values visible in fetched content/scans), and local metadata/prior report. AA/OR provide attributable third-party benchmark numerics for this exact model; some fields are null/unavailable and coverage is incomplete. Scores are normalized estimates from available evidence with caveats.

Agent / tool use (benchmarks that measure tool-calling, multi-step workflows, environment interaction, etc.):

- **tau2 (τ²-bench context):** 70.76% (AA-attributed, Artificial Analysis page extract).
- **tau Banking:** 9.48% (AA-attributed, Artificial Analysis page extract).
- **Terminal-Bench 2.1:** 27.34% (AA-attributed, OpenRouter/AA extracts).
- **Terminal-Bench Hard:** 26.52% (AA-attributed, OpenRouter/AA extracts).
- **Terminal-Bench 4.0:** 0.0% (AA-attributed, OpenRouter/AA extracts).
- **AutomationBench (partial score):** ~0.0168 (AA-attributed, Artificial Analysis page extract).
- **IFBench:** 69.80% (AA-attributed, OpenRouter/AA extracts).

Reasoning / knowledge:

- **GPQA Diamond:** 77.0% (AA-attributed, OpenRouter/AA extracts).
- **HLE:** 17.1% (AA-attributed, OpenRouter/AA extracts).
- **AA-LCR:** 43.7% (AA-attributed, OpenRouter extract).
- **CritPt:** 0.85% (AA-attributed, Artificial Analysis extract).
- **AIME / AA Intelligence Index:** not verified as extracted numeric values in this pass.

Coding:

- **SciCode:** 37.7% (AA-attributed, OpenRouter/AA extracts).
- **LiveCodeBench / SWE-bench Verified / SWE-bench Pro:** not verified as extracted numeric values in this pass.

Long context:

- **Context window:** 128K total / 50K max output (Inception docs/OR).
- **AA-LCR:** 43.7% (AA-attributed).
- No MRCR/RULER/GraphWalks/1M+ retrieval benchmark numerics verified.

Multimodal:

- Vision input claimed in local metadata but not independently verified from accessible official docs text in this pass; no multimodal benchmark scores found.

### Normalized scores (1–100)

> Derived from raw evidence above using the methodology in `model-comparison.md`. Scores are normalized estimates (not official vendor scores), balancing attributable AA/OR benchmark signals with known diffusion-LLM strengths/limitations and incomplete benchmark coverage.

- **Tool use: 46/100.** Supported tool-calling/structured outputs and decent tau2 (70.76%) / IFBench (69.8%) signals, but weak results on banking/terminal/automation benchmarks (tau Banking 9.48%, Terminal-Bench 2.1 27.34%, Hard 26.52%, TB4 0.0%, low AutomationBench partial) indicate limited reliability for complex agentic workflows.
- **Reasoning: 52/100.** Moderate GPQA Diamond (77.0%) and AA-LCR (43.7%) suggest usable reasoning, offset by low HLE (17.1%) and CritPt (0.85%); overall mid-tier reasoning evidence.
- **Context window: 62/100.** 128K context is useful but below current frontier/long-context leaders; AA-LCR 43.7% indicates limited long-context reasoning/retrieval performance.
- **Multimodal: 20/100.** No verified multimodal capability/benchmarks in accessible official sources; treated as text-focused for scoring (metadata vision claim unverified).
- **Coding: 40/100.** SciCode 37.7% and weak terminal-bench results suggest limited coding/engineering performance; no verified SWE-bench/LiveCodeBench evidence extracted.
- **Cost efficiency: 74/100.** Competitive pricing ($0.25/$0.75, cached $0.025) and diffusion-model throughput/latency advantages can be valuable for speed-sensitive tasks, but capability tradeoffs reduce effective value for harder workloads.
- **Overall Score: 44/100.** Mean of the five non-cost dimensions (Tool 46, Reasoning 52, Context 62, Multimodal 20, Coding 40) = 44.0, rounded to 44; fast/efficient earlier-generation diffusion LLM with moderate reasoning but limited agentic/coding/long-context strength.

> Caution: Benchmark figures are AA-attributed values surfaced on OpenRouter/Artificial Analysis and may vary by harness/version. Some metadata claims (e.g. vision input, specific speed/SWE-bench figures) were not independently verified as official benchmark evidence in this pass.

### Source comparison / conflicts

- **Specs/pricing:** Inception docs, OpenRouter, and local metadata align on core identity (Mercury 2, 128K/50K, $0.25/$0.75/$0.025 cached, chat completions/tool calling/structured outputs).
- **Modalities:** Inception docs text emphasizes chat/text workflows; local metadata claims vision input but this was not independently verified from accessible official docs text in this pass.
- **Benchmarks:** AA/OR provide attributable third-party numerics (e.g. GPQA 77.0, HLE 17.1, AA-LCR 43.7, SciCode 37.7, tau2 70.76, Terminal-Bench 2.1 27.34, TB4 0.0). Prior exclusion lacked verified numerics; this pass uses extracted AA/OR values with caveats.
- **Coverage gaps:** AIME/LiveCodeBench/SWE-bench/AA Intelligence Index not verified as extracted numeric values in this pass.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-14
- Method: Deep second-pass independent research using alternative web access (`webfetch`, PowerShell `Invoke-WebRequest`) across Inception Labs official models/docs, OpenRouter and Artificial Analysis model pages, AA/OR benchmark-field scans, and local metadata/prior report review.
- Research performed (>=10 successful independent web fetch/search attempts in batch): Inception Mercury 3 blog (webfetch), OpenRouter Mercury 3 page attempt (404), OpenRouter Mercury 2 page fetch, AA Mercury 2 page fetch, AA Mercury 3 page attempt (404), Inception models docs fetch, AA/OR benchmark scans for Mercury 2 and Mercury 3, OpenRouter Mercury 2.5/3/2 pages and Inception docs/blog/pricing attempts from batch context, local `meta.json` and prior `Iceman.md.excluded` reviews for batch targets.
- Reference URLs:
  - [Models (Inception Labs docs)](https://docs.inceptionlabs.ai/get-started/models)
  - [Mercury 2 (OpenRouter)](https://openrouter.ai/inception/mercury-2)
  - [Mercury 2 (Artificial Analysis)](https://artificialanalysis.ai/models/mercury-2)
  - Local repository metadata consulted: `model/mercury-2/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
