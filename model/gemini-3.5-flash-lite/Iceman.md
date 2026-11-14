# Gemini 3.5 Flash-Lite — findings by Iceman

- Source: Google/Gemini 3.5 Flash-Lite
- Date: 2026-11-14 (UTC), deep second-pass research
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash-Lite
- **Short description:** Google’s low-latency, cost-efficient Gemini 3.5-series multimodal reasoning model optimized for high-throughput, lightweight agentic workflows, document understanding, and fast inference at low cost.
- **Provider / access:** Google AI Studio / Gemini API and Vertex AI (`gemini-3.5-flash-lite`). Also listed across multiple gateways (OpenRouter, models.dev). Local metadata lists `google/gemini-3.5-flash-lite`.
- **Release / knowledge:** Model card published July 2026 (Google DeepMind). Knowledge cutoff noted as March 2026 in provider docs with some domains limited to earlier knowledge (per Vertex docs). Stable model code `gemini-3.5-flash-lite`.
- **IDs:** `gemini-3.5-flash-lite`, `google/gemini-3.5-flash-lite`.
- **Context window:** 1,048,576 input tokens (1M); 65,536 max output tokens (Google docs/model card).
- **Modalities:** Text, image, audio, and video inputs (plus PDF/document understanding in API contexts); text output.
- **Pricing (as of 2026-11-14, varies by provider/tier):** Google/Vertex/OpenRouter listings commonly around $0.30 / $2.50 per 1M input/output tokens (with cache/flex/priority/regional variants; some providers list different rates). Free tier available in Google AI Studio per local metadata/docs context.
- **Architecture:** Proprietary Google model (based on Gemini 3.1 Flash-Lite per model card). Parameter count not publicly disclosed.

### Raw benchmarks found

> SECOND-PASS UPDATE (converted from excluded): I reviewed Google AI/Vertex documentation, the Google DeepMind Gemini 3.5 Flash-Lite model card page, Artificial Analysis, OpenRouter, models.dev, and local metadata/prior report. The DeepMind model card provides attributable benchmark comparisons for this exact model (as of July 2026). Local metadata claims (e.g. GPQA 83.8%, SWE-bench 75%) were **not independently verified** in this pass and are **not used as scored inputs**. Scores below are provisional normalized estimates grounded in verified specs and attributable extracted benchmark evidence.

Agent / tool use:

- **Terminal-bench 2.1 (agentic terminal coding, Terminus-2 harness):** **54.0%** (DeepMind model card; vs Gemini 3.1 Flash-Lite 31.0%, GPT-5.4 mini 59.2%, Claude Haiku 4.5 44.2%).
- **GDPVal-AA v2 (knowledge work, Elo):** **1140** (DeepMind model card; vs 642 / 1171 / 907).
- **OSWorld-Verified (agentic computer use):** **74.0%** (DeepMind model card; vs 54.3% / 72.1% / 50.7%).
- **MLE-Bench (machine learning engineering):** **39.2%** (DeepMind model card).
- Tau2 / Tau3 / Toolathon / MCP-Atlas: **no directly extracted verified public score found**.

Reasoning / knowledge:

- **CharXiv Reasoning (information synthesis from complex charts):** **74.5%** (no tools), **76.5%** (with tools) (DeepMind model card).
- GPQA Diamond / HLE / AIME / AA Intelligence Index / LCR / CritPt: no directly extracted standardized numeric for these exact repository categories from official model card in this pass. Artificial Analysis reports **AA Intelligence Index: 12** for this model (independent aggregate, different methodology scope).
- Local metadata GPQA 83.8%: **not independently verified** and not used.

Coding:

- **SWE-Bench Pro (Public, diverse agentic coding tasks):** **54.2%** (DeepMind model card; vs 38.3% / 54.4% / 39.5%).
- Terminal-bench 2.1: **54.0%** (see above; relevant coding/agentic benchmark).
- SWE-bench Verified / SWE-Pro (repo-standard naming variants) / LiveCodeBench / SciCode / Vibe Code Bench: **no directly extracted verified public score found** beyond SWE-Bench Pro reported on model card. Local metadata SWE-bench 75%: **not independently verified** and not used.

Long context:

- **1,048,576-token context window** documented.
- **GDM-MRCR v2 (8-needle) long context performance:** **72.2%** (128k average), **21.3%** (1M pointwise) (DeepMind model card).

Multimodal:

- **Text, image, audio, and video inputs** (and PDF/document support in APIs) with text output documented; supports tool use, structured output, thinking, etc. No separate standardized multimodal benchmark numeric extracted beyond CharXiv/chart-reasoning evidence above.

### Normalized scores (1–100)

> Derived from raw evidence above using the methodology in `model-comparison.md`. Scores are provisional normalized interpretations (not official vendor scores) reflecting a low-latency/cost-optimized Flash-Lite model with mixed capability depth.

- **Tool use: 72/100.** Strong verified agentic/computer-use/tool-relevant results for its tier (OSWorld-Verified 74.0%, Terminal-bench 2.1 54.0%, GDPVal-AA v2 Elo 1140, MLE-Bench 39.2%), but capped versus frontier models on harder multi-step/tool-heavy workloads.
- **Reasoning: 62/100.** Solid chart/document reasoning signals (CharXiv 74.5%/76.5%) and reasoning-capable design, but positioned as a lite/high-throughput model with limited depth relative to stronger reasoning tiers; some common reasoning benchmarks not directly extracted.
- **Context window: 78/100.** 1M-token input context is excellent, but long-context retrieval quality degrades at full length (GDM-MRCR v2: 72.2% at 128k average vs 21.3% at 1M pointwise), limiting practical long-context reliability.
- **Multimodal: 80/100.** Broad verified multimodal input support (text/image/audio/video/PDF contexts) and chart-reasoning evidence; capped by lack of broader extracted multimodal benchmark numerics and text-only output.
- **Coding: 70/100.** Verified coding/engineering performance is competitive for a lite model (SWE-Bench Pro 54.2%, Terminal-bench 2.1 54.0%, MLE-Bench 39.2%) but below top coding-focused/frontier models.
- **Cost efficiency: 88/100.** Designed for low latency and low cost with competitive pricing tiers and free-tier availability in some contexts, offering strong value for high-volume/simple-to-moderate workloads.
- **Overall Score: 72/100.** Mean of the five non-cost dimensions (Tool 72, Reasoning 62, Context 78, Multimodal 80, Coding 70) rounded to nearest integer; best fit for high-throughput, low-latency multimodal/document and lightweight agentic tasks where cost/speed matter more than peak reasoning depth.

> Caution: Scores are provisional estimates based on verified specs and attributable extracted benchmark evidence (DeepMind model card, AA/docs). Local metadata benchmark claims not independently verified in this pass (e.g. GPQA 83.8%, SWE-bench 75%) were not used as scored inputs.

### Source comparison / conflicts

- **Specs/capabilities:** Google AI docs, Vertex docs, DeepMind model card, OpenRouter, and models.dev align on core identity/specs (1M/64K, multimodal inputs, text output, reasoning/tooling support, July 2026 model card/publication timing context).
- **Benchmarks:** DeepMind model card provides directly attributable comparison benchmarks for this exact model (SWE-Bench Pro 54.2%, Terminal-bench 2.1 54.0%, MLE-Bench 39.2%, GDPVal-AA v2 1140, OSWorld-Verified 74.0%, CharXiv 74.5%/76.5%, GDM-MRCR v2 72.2%/21.3%). AA reports AA Intelligence Index 12 (different aggregate methodology). Local metadata benchmark claims differed and were unverified.
- **Pricing:** Varies by provider/tier/region (Google/Vertex/OpenRouter/models.dev show multiple rates and cache/priority variants); treated as provider-dependent.
- **Prior Iceman file:** Prior excluded report lacked extracted benchmark numerics; this pass converts to a provisional scored report using model-card and independent-source evidence.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-14
- Method: Deep second-pass independent research using alternative web access (`webfetch`, PowerShell `Invoke-WebRequest`) across Google AI/Vertex docs, DeepMind model card page, Artificial Analysis, OpenRouter, models.dev, and local metadata/prior report review; compared specs/benchmarks and noted unverified metadata claims.
- Research performed (>=10 successful independent web fetch/search attempts): Google AI model docs page, Google AI models overview, DeepMind Gemini technologies page, Google blog AI pages, OpenRouter model page + llms/docs content, Artificial Analysis model page, models.dev model page, DeepMind model card page, Vertex model docs page, Google pricing/docs pages, local `meta.json` and prior `Iceman.md.excluded` review.
- Reference URLs:
  - [Gemini 3.5 Flash-Lite model card (Google DeepMind)](https://deepmind.google/models/model-cards/gemini-3-5-flash-lite/)
  - [Gemini 3.5 Flash-Lite docs (Google AI for Developers)](https://ai.google.dev/gemini-api/docs/models/gemini-3.5-flash-lite)
  - [Gemini 3.5 Flash-Lite on Vertex AI (Google Cloud docs)](https://cloud.google.com/vertex-ai/generative-ai/docs/models/gemini/3-5-flash-lite)
  - [Gemini 3.5 Flash-Lite on Artificial Analysis](https://artificialanalysis.ai/models/gemini-3-5-flash-lite)
  - [Gemini 3.5 Flash-Lite on OpenRouter](https://openrouter.ai/google/gemini-3.5-flash-lite)
  - [Gemini 3.5 Flash-Lite on models.dev](https://models.dev/models/google/gemini-3.5-flash-lite)
  - Local repository metadata consulted: `model/gemini-3.5-flash-lite/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.