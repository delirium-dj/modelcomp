# Gemini 3.6 Flash — findings by Iceman

- Source: Google/DeepMind Gemini 3.6 Flash
- Date: 2026-11-14 (UTC), deep second-pass research
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Google/DeepMind’s Gemini 3.6 Flash is a fast multimodal workhorse model optimized for coding, agentic/computer-use workflows, knowledge work, and long-context multimodal reasoning with improved token efficiency.
- **Provider / access:** Google AI Studio / Gemini API and Vertex AI (`gemini-3.6-flash`). Also listed across provider catalogs (OpenRouter, models.dev, Artificial Analysis). Local metadata lists `google/gemini-3.6-flash`.
- **Release / knowledge:** DeepMind model card published **21 July 2026**. Knowledge cutoff noted as **March 2026** (with domain-dependent freshness) per DeepMind model card.
- **IDs:** `gemini-3.6-flash`, `google/gemini-3.6-flash`.
- **Context window:** 1,048,576 input tokens; 65,536 output tokens (Google AI/Vertex docs, DeepMind model card).
- **Modalities:** Text, image, video, and audio inputs (plus PDF/document understanding in API contexts); text output.
- **Pricing (as of 2026-11-14, varies by provider/tier):** Local metadata and catalog sources indicate paid-tier pricing with free tier availability in some contexts; commonly listed around $1.50/$7.50 per 1M input/output tokens in provider listings (provider/tier/region dependent). Consult official pricing pages for current rates.
- **Architecture:** Proprietary Google/DeepMind Gemini model. Parameter count not publicly disclosed.

### Raw benchmarks found

> SECOND-PASS UPDATE (converted from excluded): I reviewed Google AI/Vertex documentation, the Google DeepMind Gemini 3.6 Flash model card page, Artificial Analysis, OpenRouter, models.dev, and local metadata/prior report. The DeepMind model card provides attributable benchmark comparisons for this exact model (published 21 July 2026). Local metadata claims (e.g. GPQA 93.4%, OSWorld 83%) are consistent in direction with model-card evidence for OSWorld but specific metadata numerics were **not fully independently cross-verified** as scored inputs; scores below are provisional normalized estimates grounded in attributable extracted model-card benchmarks and verified specs.

Agent / tool use:

- **Terminal-bench 2.1 (agentic terminal coding, Terminus-2 harness):** **78.0%** (DeepMind model card).
- **GDPVal-AA v2 (knowledge work, Elo):** **1421** (DeepMind model card).
- **OSWorld-Verified (agentic computer use):** **83.0%** (DeepMind model card).
- **MLE-Bench (machine learning engineering):** **63.9%** (DeepMind model card).
- Tau2 / Tau3 / Toolathon / MCP-Atlas: **no directly extracted verified public score found** in this pass.

Reasoning / knowledge:

- **CharXiv Reasoning (information synthesis from complex charts):** **85.2%** (no tools), **89.4%** (with tools) (DeepMind model card).
- GPQA Diamond / HLE / AIME / AA Intelligence Index / LCR / CritPt: no directly extracted standardized numeric for these exact repository categories from the model card in this pass. Artificial Analysis lists **AA Intelligence Index 24** for Gemini 3.6 Flash (independent aggregate, different methodology scope).
- Local metadata GPQA 93.4%: **not independently verified** against extracted model-card numerics and not used as a primary scored input.

Coding:

- **SWE-Bench Pro (Public, diverse agentic coding tasks):** **58.7%** (DeepMind model card).
- **Terminal-bench 2.1:** **78.0%** (see above; relevant coding/agentic benchmark).
- **MLE-Bench:** **63.9%** (engineering/coding-adjacent evidence).
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench: **no directly extracted verified public score found** in this pass.

Long context:

- **1,048,576-token input context** documented.
- **GDM-MRCR v2 (8-needle) long context performance:** **91.8%** (128k average), **54.0%** (1M pointwise) (DeepMind model card) — strong long-context retrieval/retention signals, especially at 128k and improved 1M pointwise vs earlier Flash cards.

Multimodal:

- **Text, image, video, and audio inputs** (and PDF/document support in APIs) with text output documented.
- **CharXiv Reasoning:** **85.2%** (no tools), **89.4%** (with tools) (DeepMind model card), indicating strong multimodal/chart/document reasoning.

### Normalized scores (1–100)

> Derived from raw evidence above using the methodology in `model-comparison.md`. Scores are provisional normalized interpretations (not official vendor scores) based on attributable model-card and independent-source evidence.

- **Tool use: 86/100.** Strong verified agentic/computer-use and workflow results (OSWorld-Verified 83.0%, Terminal-bench 2.1 78.0%, GDPVal-AA v2 Elo 1421, MLE-Bench 63.9%) indicate high capability for tool-driven and desktop/agent tasks.
- **Reasoning: 84/100.** Strong multimodal/chart reasoning performance (CharXiv 85.2%/89.4% with tools) and broad capability profile; limited direct extraction for some repo-standard reasoning-only benchmarks in this pass.
- **Context window: 88/100.** 1M-token context with strong verified long-context performance (MRCR v2 91.8% at 128k average, 54.0% at 1M pointwise), substantially better practical long-context retention than earlier Flash variants.
- **Multimodal: 87/100.** Broad multimodal input support and strong chart/document reasoning evidence (CharXiv 85.2%/89.4%); capped by text-only output and limited broader extracted multimodal benchmark numerics.
- **Coding: 84/100.** Strong verified coding/engineering/agentic coding results (SWE-Bench Pro 58.7%, Terminal-bench 78.0%, MLE-Bench 63.9%) for a fast Flash model, though not absolute frontier on every coding benchmark.
- **Cost efficiency: 84/100.** Positioned as a fast, token-efficient Flash workhorse with competitive provider pricing and free-tier availability in some contexts, offering strong capability-per-cost.
- **Overall Score: 86/100.** Mean of the five non-cost dimensions (Tool 86, Reasoning 84, Context 88, Multimodal 87, Coding 84) rounded to nearest integer; strong all-around fast model for coding, computer use, and long-context multimodal agentic workloads.

> Caution: Scores are provisional estimates based on verified specs and attributable extracted benchmark evidence (DeepMind model card, Google/Vertex docs, AA/OpenRouter/models.dev context). Some repo-standard benchmark categories were not directly extracted as official numerics in this pass.

### Source comparison / conflicts

- **Specs/capabilities:** Google AI docs, Vertex docs, DeepMind model card, OpenRouter, and models.dev align on core identity/specs (1M/64K, multimodal inputs, text output, published July 2026, knowledge cutoff March 2026 noted by DeepMind).
- **Benchmarks:** DeepMind model card provides directly attributable comparisons (SWE-Bench Pro 58.7%, Terminal-bench 2.1 78.0%, MLE-Bench 63.9%, GDPVal-AA v2 1421, OSWorld-Verified 83.0%, CharXiv 85.2%/89.4%, GDM-MRCR v2 91.8%/54.0%). Artificial Analysis reports AA Intelligence Index 24 (different aggregate methodology). Local metadata claims were directionally consistent for some areas but not fully used as primary scored inputs.
- **Pricing:** Varies by provider/tier/region (Google/Vertex/OpenRouter/models.dev listings differ in tiers/cache/priority options); treated as provider-dependent.
- **Prior Iceman file:** Prior excluded report lacked extracted benchmark numerics; this pass converts to a provisional scored report using model-card and independent-source evidence.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-14
- Method: Deep second-pass independent research using alternative web access (`webfetch`, PowerShell `Invoke-WebRequest`) across Google AI/Vertex docs, DeepMind model card page, Artificial Analysis, OpenRouter, models.dev, and local metadata/prior report review; compared specs/benchmarks and noted pricing variability.
- Research performed (>=10 successful independent web fetch/search attempts): Google AI model docs page, Google AI models overview, DeepMind Gemini technologies page, Google blog AI pages, OpenRouter model page + llms/docs content, Artificial Analysis model page, models.dev model page, DeepMind model card page (with benchmark extraction), Vertex model docs page, Google pricing/docs pages, local `meta.json` and prior `Iceman.md.excluded` review.
- Reference URLs:
  - [Gemini 3.6 Flash model card (Google DeepMind)](https://deepmind.google/models/model-cards/gemini-3-6-flash/)
  - [Gemini 3.6 Flash docs (Google AI for Developers)](https://ai.google.dev/gemini-api/docs/models/gemini-3.6-flash)
  - [Gemini 3.6 Flash on Vertex AI (Google Cloud docs)](https://cloud.google.com/vertex-ai/generative-ai/docs/models/gemini/3-6-flash)
  - [Gemini 3.6 Flash on Artificial Analysis](https://artificialanalysis.ai/models/gemini-3-6-flash)
  - [Gemini 3.6 Flash on OpenRouter](https://openrouter.ai/google/gemini-3.6-flash)
  - [Gemini 3.6 Flash on models.dev](https://models.dev/models/google/gemini-3.6-flash)
  - Local repository metadata consulted: `model/gemini-3.6-flash/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
