# Mercury 2.5 — findings by Iceman

- Source: Inception Labs / Mercury 2.5 (`inception/mercury-2.5`, `mercury-2.5`)
- Date: 2026-11-14 (UTC), deep second-pass research
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 2.5
- **Short description:** Inception Labs’ Mercury 2.5 is a closed-weights diffusion large language model optimized for low-latency, high-throughput reasoning and structured/tool-using workflows, positioned as a quality step up from Mercury 2.
- **Provider / access:** Inception Labs API and hosted providers (e.g. OpenRouter). Local metadata notes closure to new users on **2026-10-19** with Mercury 3 as successor; availability/pricing may vary by provider.
- **Release / knowledge:** Inception blog announcement "Introducing Mercury 2.5" reviewed 2026-11-14 (published Oct 29, 2026 per page metadata). Knowledge cutoff not explicitly stated in reviewed sources.
- **IDs:** `mercury-2.5`, `inception/mercury-2.5`, `Mercury 2.5`.
- **Context window:** 260,000 tokens total; 65,536 max output tokens (Inception docs/blog).
- **Modalities:** Text input/output.
- **Pricing (as of 2026-11-14):** Inception docs list **$0.20/M input, $0.02/M cached input, $0.75/M output**. Blog states launch pricing **$0.04/M input, $0.15/M output** (80% off at launch); local metadata/OpenRouter context also reflect lower launch/provider pricing in places. Pricing/availability subject to change.
- **Architecture:** Proprietary diffusion LLM (closed weights). Official materials describe it as a large diffusion language model; parameter count not publicly disclosed. Supports reasoning effort, parallel tool calls, and schema-aligned JSON (blog/docs).

### Raw benchmarks found

> SECOND-PASS UPDATE (converted from excluded): I reviewed Inception Labs’ official blog and models documentation, OpenRouter and Artificial Analysis model pages (including AA-attributed values visible in fetched content), and local metadata/prior report. Official sources provide attributable specs/capabilities/performance claims; AA/OR provide some third-party benchmark numerics but many standard benchmarks are null/unavailable. No broad standardized coding benchmark suite (SWE-bench/LiveCodeBench) was verified. Scores are normalized estimates from available evidence with caveats.

Official/vendor claims (Inception blog/docs, attributable):

- **Throughput:** 1,107 tokens/sec (blog claim, "widely-available NVIDIA GPUs"); production examples cite ~170 ms median model response latency in OpenCall voice workload and other latency/cost improvements in specific deployments.
- **Context / output:** 260K context, 65,536 max output (docs/blog).
- **Quality positioning:** "40% increase in intelligence from Mercury 2" and "comparable to cost-optimized frontier models like GPT-5.6 Luna (Low), Gemini 3.5 Flash-Lite, and Claude Haiku 4.5" (blog; comparative claim, not a standardized benchmark score in this repo’s format).
- **Capabilities:** tunable reasoning, parallel tool calls, schema-aligned JSON (blog/docs).
- **Availability:** closed to new users on 2026-10-19 per local metadata (Mercury 3 successor context).

AA-attributed / third-party values visible on OpenRouter/Artificial Analysis pages (extracted from fetched content; availability varies by field):

- **HLE:** 11.8% (0.118)
- **AA-LCR:** 71.7% (0.717)
- **SciCode:** 38.5% (0.385)
- **Terminal-Bench 4.0:** 0.0%
- **AutomationBench (partial score context):** ~0.0235 (AA page field)
- **GPQA Diamond / AIME / LiveCodeBench / SWE-bench / Terminal-Bench 2.1 / tau2:** null or not found as verified extracted values in this pass
- **Artificial Analysis Intelligence Index:** not clearly surfaced as a definitive value in extracted text (page indicated unknown/N/A in available extract)

### Normalized scores (1–100)

> Derived from raw evidence above using the methodology in `model-comparison.md`. Scores are normalized estimates (not official vendor scores), reflecting a fast diffusion LLM with strong latency/spec positioning but limited independently verified standardized benchmark breadth.

- **Tool use: 58/100.** Official support for parallel tool calls and structured outputs is a positive signal, but independently verified standardized agent/tool benchmark evidence is limited/mixed (Terminal-Bench 4.0 0.0%, AutomationBench partial score low in AA extract; no verified tau/Toolathon/MCP-Atlas suite).
- **Reasoning: 50/100.** Vendor positions 2.5 as a meaningful quality/reasoning step over Mercury 2, but independently extracted standardized reasoning scores are sparse (HLE 11.8%, AA-LCR 71.7% is decent; GPQA/AIME not verified). Comparative claims vs other models are not directly scorable benchmarks.
- **Context window: 80/100.** 260K context and 65K max output are strong for many agent/chat workflows; AA-LCR 71.7% suggests reasonable long-context reasoning, but broader long-context retrieval benchmark coverage is limited.
- **Multimodal: 20/100.** Text-only model.
- **Coding: 42/100.** Some coding-adjacent signal exists (SciCode 38.5%), but no verified SWE-bench/LiveCodeBench/Terminal-Bench 2.1 results and local/official materials do not establish strong standardized coding performance; likely better suited to fast supporting/structured tasks than deep coding-agent work.
- **Cost efficiency: 82/100.** Strong price/performance positioning for latency-sensitive workloads ($0.20/$0.75 list, $0.02 cached; lower launch/provider prices reported) and very high throughput/low TTFT claims; however, access is constrained (closed to new users after 2026-10-19 per metadata, successor Mercury 3 available).
- **Overall Score: 50/100.** Mean of the five non-cost dimensions (Tool 58, Reasoning 50, Context 80, Multimodal 20, Coding 42) = 50.0, rounded to 50; excellent latency/throughput-oriented diffusion model with moderate verified capability evidence and limited coding/multimodal depth.

> Caution: Key performance claims (1107 tok/s, latency, quality comparisons) are vendor-reported. Third-party AA/OR benchmark coverage is partial and includes null/unavailable fields; scores are provisional and should be interpreted alongside workload-specific evaluation. Availability is limited (closed to new users 2026-10-19 per local metadata).

### Source comparison / conflicts

- **Specs/pricing/capabilities:** Inception docs and blog align on core model facts (Mercury 2.5, 260K/65K, text-only, tool calling/structured outputs/reasoning, diffusion architecture, $0.20/$0.75 list pricing). Blog also reports launch discount pricing ($0.04/$0.15), consistent with local metadata/provider variance.
- **Performance claims:** Vendor reports very high throughput/low latency and comparative quality gains; these are attributable to Inception but not equivalent to standardized repo benchmarks.
- **Third-party benchmarks:** AA/OR show partial attributable metrics (HLE 11.8%, AA-LCR 71.7%, SciCode 38.5%, Terminal-Bench 4.0 0.0%) with many nulls/unavailable fields; no verified SWE-bench/LiveCodeBench/AIME/GPQA values extracted.
- **Availability/status:** Local metadata states closed to new users on 2026-10-19 and superseded by Mercury 3; this affects practical access despite strong efficiency profile.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-14
- Method: Deep second-pass independent research using alternative web access (`webfetch`, PowerShell `Invoke-WebRequest`) across Inception Labs official blog/docs, OpenRouter and Artificial Analysis model pages, related search/fetch attempts, and local metadata/prior report review.
- Research performed (>=10 successful independent web fetch/search attempts in batch): Microsoft AI MAI-Thinking-1 page (webfetch), Inception Mercury 2.5 blog (webfetch), Inception models docs (webfetch), OpenRouter Mercury 2.5 page fetch, AA Mercury 2.5 page fetch, AA Mercury search fetch, models.dev search for mai-thinking, OpenRouter search for mai-thinking, AA search for mai-thinking, Microsoft MAI-Thinking-1 PDF fetch attempt, OpenRouter/Microsoft/AA direct model page attempts for mai-thinking-1, OpenRouter Mercury 2/2.5 and Inception docs/pricing attempts, AA/OR benchmark-field scans for Mercury 2.5, local `meta.json` and prior `Iceman.md.excluded` reviews for batch targets.
- Reference URLs:
  - [Introducing Mercury 2.5 (Inception Labs blog)](https://inceptionlabs.ai/blog/introducing-mercury-2-5)
  - [Models (Inception Labs docs)](https://docs.inceptionlabs.ai/get-started/models)
  - [Mercury 2.5 (OpenRouter)](https://openrouter.ai/inception/mercury-2.5)
  - [Mercury 2.5 (Artificial Analysis)](https://artificialanalysis.ai/models/mercury-2-5)
  - Local repository metadata consulted: `model/mercury-2.5/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
