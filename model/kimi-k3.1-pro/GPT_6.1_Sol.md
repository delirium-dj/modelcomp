# Kimi K3.1 Pro — findings by GPT 6.1 Sol

- Source: Moonshot AI / Kimi (`kimi-k3.1-pro`)
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3.1 Pro
- **Short description:** Moonshot's large reasoning model for coding agents, long-context research, vision and 3D work. The Highspeed route is a faster serving variant of the same model, not separate weights.
- **Provider / access:** Kimi API at `https://api.moonshot.ai/v1` supports Chat Completions, Responses and Messages-compatible calls; first-party API requires a minimum $1 top-up for this flagship.
- **Release / knowledge:** Artificial Analysis dates release 2026-10-23; no verified knowledge cutoff found.
- **IDs:** `kimi-k3.1-pro` (vendor); `kimi-k3.1-pro-highspeed` is 2–3× faster serving, not a distinct model.
- **Context window:** Vendor states 1,048,576 combined tokens (1M); maximum completion tokens up to 1,048,576 is a configurable ceiling, not a proven usable retrieval length.
- **Modalities:** Text, image and video input per vendor; text/JSON output, thinking and tool calling. Independent AA summary lists text/image only; video support was not independently tested there.
- **Pricing (as of 2026-11-03):** AA independently lists $2.00 input / $10.00 output per million on Kimi API, cache hits discounted 90%; vendor pricing page text extraction does not expose its pricing table. No free flagship API tier established.
- **Architecture:** Vendor calls it a 3T-class open-weight post-trained K3 model; AA calls it proprietary and says 2.8T parameters. Neither accessible source here identifies a public K3.1 Pro weights repository; treat open-weight status as **disputed**, not confirmed by the vendor adjective alone.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **65.7%** (Moonshot first-party comparison, harness details on vendor page; independent same-harness replication not found).
- BenchCAD with tools: **92.7%** (Moonshot; 3D CAD generation, not interchangeable with general tool success).
- OfficeQA Pro v2: **64.4** (Moonshot, financial documents; domain benchmark, not generic reasoning).
- AutomationBench-AA / AA-Briefcase: no verified public score found in the accessible AA text, though both are listed as components of the index.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v5.0: **46**, rank **#23 / 60** shown in AA summary (nine mixed evaluations; independent composite rather than a percent-correct score).
- Kimi Hallu Bench Hard: **8.3%** claim-level hallucination rate (vendor internal stress test; cannot compare directly to AA-Omniscience).
- HLE-Diamond / AA-Omniscience v1.1: no verified exact-model subscore found in accessible AA text.

Coding:

- Terminal-Bench 4.0: **65.7%** (vendor; overlaps the tool-use evidence above, not an additional independent trial).
- Kimi Code Bench 3.0 Long-horizon: **61.2%** (vendor internal; K3 baseline 55.95% under its own setup).
- SWE-bench Verified / FrontierCode 2.0: no verified exact-model percentage found in accessible public text.

Long context:

- Advertised **1,048,576-token** context (Moonshot docs and AA specification); no verified public MRCR/RULER long-range retrieval score for this exact ID found.

### Normalized scores (1–100)

- **Tool use: 89/100.** Vendor Terminal-Bench 4.0 65.7% and BenchCAD 92.7% show strong execution; lack of independently replicated tool-agent pass rates caps confidence.
- **Reasoning: 88/100.** Independent AA Intelligence Index 46 and vendor OfficeQA 64.4 support strong general/domain work; AA rank and internal hallucination metric differ in scope, so neither implies frontier-best reasoning.
- **Context window: 95/100.** Vendor and AA agree on the 1M advertised capacity; no exact-model 1M retrieval test, so nominal capacity is not treated as proven retention.
- **Multimodal: 75/100.** Vendor documents image and video input with text output, while independent AA confirms only image; no independently verified audio/video evaluation.
- **Coding: 92/100.** Vendor Terminal-Bench 4.0 65.7% and internal long-horizon 61.2% indicate strong agent coding; absence of matched independent terminal/coding subscores caps it.
- **Cost efficiency: 69/100.** AA lists $2/$10 per million, 90% cache-hit discount, and $3.68 per Intelligence Index task; paid and relatively slow (31.6 output tokens/s).
- **Overall Score: 88/100.** Half-up mean of 89, 88, 95, 75 and 92 = 87.8; good fit for long-context code and visual-agent work when vendor benchmark limitations are acceptable.

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-11-03
- Method: Independent searches for exact API ID, technical report and vendor model plus direct comparison of vendor documentation with Artificial Analysis. Vendor-reported numbers are labeled as such; AA's composite is not conflated with vendor percent-correct results. Normalized scores are interpretations, not official ratings.
- Reference URLs:
  - [Moonshot Kimi K3.1 Pro model guide and benchmark disclosures](https://platform.kimi.ai/docs/guide/kimi-k3-1-pro-quickstart.md)
  - [Moonshot API quickstart and exact model routes](https://platform.moonshot.ai/docs/guide/models)
  - [Moonshot model pricing and cache terms](https://platform.kimi.ai/docs/pricing/chat.md)
  - [Artificial Analysis Kimi K3.1 Pro independent overview](https://artificialanalysis.ai/models/kimi-k3-1-pro)
