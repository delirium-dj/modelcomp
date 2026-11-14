# Gemini 3.5 Flash — findings by Iceman

- Source: Google/DeepMind Gemini 3.5 Flash
- Date: 2026-11-14 (UTC), deep second-pass research
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Google/DeepMind’s Gemini 3.5 Flash is a fast multimodal reasoning model in the Gemini 3 series for coding, agentic, and knowledge-work tasks; current developer docs mark it deprecated and routed to Gemini 3.6 Flash.
- **Provider / access:** Google AI Studio / Gemini API and Vertex AI (`gemini-3.5-flash`). Google AI developer docs state: deprecated and replaced/routed to `gemini-3.6-flash`. Also listed in historical/catalog sources (OpenRouter, models.dev, Artificial Analysis).
- **Release / knowledge:** DeepMind model card published **19 May 2026**. Google AI developer docs indicate latest update May 2026 and deprecation/routing to Gemini 3.6 Flash. Knowledge cutoff not explicitly stated on extracted model-card text in this pass; Vertex/docs pages reviewed.
- **IDs:** `gemini-3.5-flash`, `google/gemini-3.5-flash` (deprecated/routed per docs).
- **Context window:** 1,048,576 input tokens; 65,536 output tokens (Google AI/Vertex docs, DeepMind model card).
- **Modalities:** Text, image, video, and audio inputs (plus PDF/document understanding in API contexts); text output (docs/model card context).
- **Pricing (as of 2026-11-14, historical/provider-dependent):** Local metadata lists free tier available and paid-tier pricing; earlier listings commonly around $1.50/$9.00 per 1M input/output tokens depending on provider/tier. Exact current pricing may vary due to deprecation/routing; consult provider pricing pages.
- **Architecture:** Proprietary Google/DeepMind Gemini model. Parameter count not publicly disclosed.

### Raw benchmarks found

> SECOND-PASS UPDATE (converted from excluded): I reviewed Google AI/Vertex documentation, the Google DeepMind Gemini 3.5 Flash model card page, Artificial Analysis, OpenRouter, models.dev, and local metadata/prior report. The DeepMind model card provides attributable benchmark comparisons for this exact model (published 19 May 2026). Google docs mark `gemini-3.5-flash` as deprecated/routed to `gemini-3.6-flash`; benchmarks below are attributed to Gemini 3.5 Flash as reported on its model card. Local metadata claims (e.g. GPQA 92.2%, SWE-bench 78.8%) were **not independently verified** against extracted model-card numerics in this pass and are **not used as scored inputs**. Scores below are provisional normalized estimates.

Agent / tool use:

- **Terminal-bench 2.1 (agentic terminal coding, Terminus-2 harness):** **76.2%** (DeepMind model card; comparisons shown include 58.0% / 70.3% / 66.1% / 78.2% for peer models in table).
- **GDPval-AA (economically valuable knowledge work, Elo):** **1656** (DeepMind model card).
- **OSWorld-Verified (agentic computer use):** **78.4%** (DeepMind model card).
- **Finance Agent v2 (financial analysis and decision-making):** **56.5%** (DeepMind model card, extracted context).
- Tau2 / Tau3 / Toolathon / MCP-Atlas: **no directly extracted verified public score found** in this pass.

Reasoning / knowledge:

- **CharXiv Reasoning (information synthesis from complex charts, no tools):** **84.2%** (DeepMind model card).
- GPQA Diamond / HLE / AIME / AA Intelligence Index / LCR / CritPt: no directly extracted standardized numeric for these exact repository categories from the model card in this pass. Artificial Analysis currently lists this model as deprecated with **N/A** Intelligence Index in available view.
- Local metadata GPQA 92.2%: **not independently verified** and not used.

Coding:

- **SWE-Bench Pro (Public, diverse agentic coding tasks, single attempt):** **55.1%** (DeepMind model card).
- **Terminal-bench 2.1:** **76.2%** (see above; relevant coding/agentic benchmark).
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench: **no directly extracted verified public score found** in this pass. Local metadata SWE-bench 78.8%: **not independently verified** and not used.

Long context:

- **1,048,576-token input context** documented.
- **MRCR v2 (8-needle) long context performance:** **77.3%** (128k average), **26.6%** (1M pointwise) (DeepMind model card).

Multimodal:

- **Text, image, video, and audio inputs** (and PDF/document support in APIs) with text output documented.
- **CharXiv Reasoning (no tools):** **84.2%** (chart/document multimodal reasoning evidence, DeepMind model card).

### Normalized scores (1–100)

> Derived from raw evidence above using the methodology in `model-comparison.md`. Scores are provisional normalized interpretations (not official vendor scores) for this deprecated/routed model identity based on attributable model-card evidence.

- **Tool use: 82/100.** Strong verified agentic/computer-use and knowledge-work signals (Terminal-bench 2.1 76.2%, OSWorld-Verified 78.4%, GDPval-AA Elo 1656, Finance Agent v2 56.5%) indicating capable tool/agent workflows, though not top-of-frontier across all agent benchmarks.
- **Reasoning: 80/100.** Strong chart/reasoning evidence (CharXiv 84.2%) and high-end agentic/coding task performance consistent with advanced Flash-tier reasoning, but limited direct extraction for some repo-standard reasoning benchmarks in this pass.
- **Context window: 80/100.** 1M-token input context is excellent, with solid 128k MRCR performance (77.3%) but notable degradation at full 1M pointwise (26.6%), constraining practical ultra-long-context reliability.
- **Multimodal: 84/100.** Broad multimodal input support (text/image/video/audio/PDF contexts) and strong chart-reasoning evidence (CharXiv 84.2%); capped by text-only output and limited broader extracted multimodal benchmark numerics.
- **Coding: 79/100.** Good verified coding/agentic coding results (SWE-Bench Pro 55.1%, Terminal-bench 76.2%), competitive for a fast Flash model but below the strongest specialized/frontier coding leaders on harder coding suites.
- **Cost efficiency: 78/100.** Historically positioned as a fast/cost-efficient Flash tier (with free-tier availability in some contexts), but now deprecated/routed to Gemini 3.6 Flash and pricing/value depend on provider routing/policy.
- **Overall Score: 81/100.** Mean of the five non-cost dimensions (Tool 82, Reasoning 80, Context 80, Multimodal 84, Coding 79) rounded to nearest integer; strong fast multimodal/agentic model historically, with current access affected by deprecation/routing.

> Caution: Scores are provisional estimates based on verified specs and attributable extracted benchmark evidence (DeepMind model card, Google/Vertex docs, AA/OpenRouter/models.dev context). Model is deprecated/routed to Gemini 3.6 Flash per Google docs; local metadata benchmark claims not independently verified in this pass (e.g. GPQA 92.2%, SWE-bench 78.8%) were not used as scored inputs.

### Source comparison / conflicts

- **Specs/capabilities:** Google AI docs, Vertex docs, DeepMind model card, OpenRouter, and models.dev align on core identity/specs (1M/64K, multimodal inputs, text output). Google docs explicitly mark `gemini-3.5-flash` as deprecated and routed to `gemini-3.6-flash`.
- **Benchmarks:** DeepMind model card provides directly attributable comparisons (Terminal-bench 2.1 76.2%, SWE-Bench Pro 55.1%, GDPval-AA 1656, OSWorld-Verified 78.4%, CharXiv 84.2%, MRCR v2 77.3%/26.6%). Artificial Analysis shows deprecated/N/A intelligence view. Local metadata benchmark claims differed and were unverified.
- **Pricing/routing:** Provider/tier-dependent and impacted by deprecation/routing; treated as historical/variable.
- **Prior Iceman file:** Prior excluded report noted deprecation and lack of extracted benchmark numerics; this pass converts to a provisional scored report using model-card evidence while preserving deprecation/routing caveat.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-14
- Method: Deep second-pass independent research using alternative web access (`webfetch`, PowerShell `Invoke-WebRequest`) across Google AI/Vertex docs, DeepMind model card page, Artificial Analysis, OpenRouter, models.dev, and local metadata/prior report review; compared specs/benchmarks/deprecation status and noted unverified metadata claims.
- Research performed (>=10 successful independent web fetch/search attempts): Google AI model docs page, Google AI models overview, DeepMind Gemini technologies page, Google blog AI pages, OpenRouter model page + llms/docs content, Artificial Analysis model page, models.dev model page, DeepMind model card page (with benchmark extraction), Vertex model docs page, Google pricing/docs pages, local `meta.json` and prior `Iceman.md.excluded` review.
- Reference URLs:
  - [Gemini 3.5 Flash model card (Google DeepMind)](https://deepmind.google/models/model-cards/gemini-3-5-flash/)
  - [Gemini 3.5 Flash docs (Google AI for Developers)](https://ai.google.dev/gemini-api/docs/models/gemini-3.5-flash)
  - [Gemini 3.5 Flash on Vertex AI (Google Cloud docs)](https://cloud.google.com/vertex-ai/generative-ai/docs/models/gemini/3-5-flash)
  - [Gemini 3.5 Flash on Artificial Analysis](https://artificialanalysis.ai/models/gemini-3-5-flash)
  - [Gemini 3.5 Flash on OpenRouter](https://openrouter.ai/google/gemini-3.5-flash)
  - [Gemini 3.5 Flash on models.dev](https://models.dev/models/google/gemini-3.5-flash)
  - Local repository metadata consulted: `model/gemini-3.5-flash/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
