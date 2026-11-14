# Ling 3.0 Flash VL — findings by Iceman

- Source: inclusionAI / Ling-3.0-flash-VL (`inclusionAI/Ling-3.0-flash-VL`, `inclusionai/ling-3.0-flash-vl`)
- Date: 2026-11-14 (UTC), deep second-pass research
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling-3.0-flash-VL
- **Short description:** inclusionAI’s open-weight (MIT) multimodal sparse MoE vision-language model for image/video understanding, multimodal reasoning, and GUI/agentic workflows, built on Ling-3.0-flash with efficient long-context processing.
- **Provider / access:** Open weights on Hugging Face (`inclusionAI/Ling-3.0-flash-VL`, MIT license) and hosted inference (e.g. OpenRouter/DeepInfra). Local metadata lists `noFreeId`.
- **Release / knowledge:** Hugging Face model card reviewed 2026-11-14; knowledge cutoff not explicitly stated in reviewed sources.
- **IDs:** `ling-3.0-flash-vl`, `Ling-3.0-flash-VL`, `inclusionAI/Ling-3.0-flash-VL`, `inclusionai/ling-3.0-flash-vl`.
- **Context window:** 131,072 tokens native; up to 262,144 tokens with YaRN (HF card / OpenRouter specs). Max output 32,768 tokens (local metadata/OpenRouter context).
- **Modalities:** Text, image, and video input; text output.
- **Pricing (as of 2026-11-14):** Hosted ~$0.06/M input, $0.18/M output per OpenRouter (DeepInfra standard variant). Self-host/open weights $0 (MIT license), subject to infrastructure cost.
- **Architecture:** Native multimodal sparse MoE with ViT visual encoder + 2-layer MLP projector, VideoRoPE, and 42-layer hybrid backbone (KDA/Gated MLA 5:1). **124B total parameters, ~5.5B activated per token** (HF card). Supports reasoning/tool-calling style APIs on hosted providers (OpenRouter capabilities).

### Raw benchmarks found

> SECOND-PASS UPDATE (converted from excluded): I reviewed the Hugging Face model card, OpenRouter model page/capabilities (including AA-attributed benchmark fields visible on page), Artificial Analysis/models.dev/search fetch attempts, and local metadata/prior report. OpenRouter/AA-attributed figures provide attributable public benchmark numerics for this exact model ID; some claims in local metadata/prior notes (e.g. WebVoyager/MMSearch/MMMU-Pro specific values) were not independently extracted as text in this pass and are treated as unverified/cautious. Scores are normalized estimates from available evidence.

Agent / tool use (benchmarks that measure tool-calling, multi-step workflows, environment interaction, etc.):

- **Artificial Analysis Agentic Index:** 28.7 (OpenRouter model page, AA-attributed).
- **Terminal-Bench 2.1:** 64.4% (OpenRouter model page, AA-attributed).
- **Terminal-Bench 4.0:** 0.0% (OpenRouter model page, AA-attributed).
- **AA-LCR:** 78.3% (OpenRouter model page, AA-attributed; long-context/reasoning-related retrieval signal).
- **τ²-Bench Telecom (tau2):** 28.3% (OpenRouter model page, AA-attributed).

Reasoning / knowledge:

- **Artificial Analysis Intelligence Index:** 42 (v4.1.1, HF card; consistent with AA/OR context).
- **GPQA Diamond:** 86.2% (OpenRouter model page, AA-attributed).
- **HLE:** 22.0% (OpenRouter model page, AA-attributed).
- **CritPt:** 2.0% (OpenRouter model page, AA-attributed).
- **AA-Omniscience Accuracy / Hallucination:** 32.4% / 67.6% (OpenRouter model page, AA-attributed).

Coding:

- **SciCode:** 44.2% (OpenRouter model page, AA-attributed).
- **SWE-bench / LiveCodeBench / AIME:** no verified extracted numeric values in this pass (OpenRouter snippets show null/not surfaced for some fields; generic marketing text on page not treated as model-specific evidence).

Long context:

- **Context window:** 131K native / 262K with YaRN (HF card/OpenRouter).
- **AA-LCR:** 78.3% (AA-attributed, OpenRouter).
- No MRCR/RULER/GraphWalks/1M+ retrieval benchmark numerics extracted.

Multimodal:

- **Modalities:** image and video input, text output (HF card/OpenRouter).
- **AA Intelligence Index (multimodal-inclusive):** 42 (HF card).
- Local metadata/prior notes mention WebVoyager 90.8, MMSearch 79.0, MMMU-Pro 79.0, but these values were **not independently extracted as verifiable text** from accessible sources in this pass; treated as unverified claims.

### Normalized scores (1–100)

> Derived from raw evidence above using the methodology in `model-comparison.md`. Scores are normalized estimates (not official vendor scores), weighted by relevance, reliability, and comparability of available evidence.

- **Tool use: 68/100.** Solid agentic signals for an efficient VL MoE (AA Agentic Index 28.7, Terminal-Bench 2.1 64.4%, AA-LCR 78.3%, tau2 28.3%), but mixed/lower results on harder agent benchmarks (e.g. Terminal-Bench 4.0 0.0%) and limited standardized tool-suite coverage.
- **Reasoning: 62/100.** Good AA Intelligence Index (42) and strong GPQA Diamond (86.2%), offset by lower HLE (22.0%) and weak CritPt (2.0%); indicates capable but uneven reasoning depth.
- **Context window: 78/100.** 131K native / 262K YaRN with 32K max output is strong for multimodal/agent workflows, supported by AA-LCR 78.3%; no broader long-context retrieval benchmark suite verified.
- **Multimodal: 74/100.** Native text/image/video understanding with open-weight VL architecture and AA index evidence supports strong practical multimodal capability; however, specific high-profile multimodal benchmark numerics cited in metadata (WebVoyager/MMSearch/MMMU-Pro) were not independently text-verified in this pass.
- **Coding: 58/100.** SciCode 44.2% and decent terminal/agentic coding-adjacent signals (Terminal-Bench 2.1 64.4%) suggest useful coding ability, but no verified SWE-bench/LiveCodeBench/AIME numerics extracted; likely weaker than top text-only coding specialists.
- **Cost efficiency: 88/100.** Very competitive hosted pricing (~$0.06/$0.18 per 1M) for a multimodal 124B/5.5B-active MoE, plus MIT open weights for self-hosting; strong value if capability fits task needs.
- **Overall Score: 68/100.** Mean of the five non-cost dimensions (Tool 68, Reasoning 62, Context 78, Multimodal 74, Coding 58) = 68.0, rounded to 68; capable, efficient open multimodal/agentic model with uneven depth on harder reasoning/coding benchmarks.

> Caution: Several benchmark figures are taken from AA-attributed values surfaced on OpenRouter and should be interpreted alongside official HF documentation. Some metadata-claimed multimodal benchmark values were not independently text-verified in this pass.

### Source comparison / conflicts

- **Specs/architecture/modalities:** HF card, OpenRouter, and local metadata align on core identity (Ling-3.0-flash-VL, 124B/5.5B, MIT, image+video input/text output, 131K native/262K YaRN).
- **Pricing:** OpenRouter reports ~$0.06/$0.18/M (DeepInfra standard); consistent with local metadata. Actual hosted pricing may vary by provider/variant.
- **Benchmarks:** OpenRouter exposes AA-attributed numerics (e.g. GPQA 86.2, HLE 22.0, AA-LCR 78.3, SciCode 44.2, Terminal-Bench 2.1 64.4, Agentic Index 28.7, Intelligence Index 42). Prior exclusion noted image-only benchmark presentation on HF; this pass uses attributable text-visible AA/OR values. Local metadata claims (WebVoyager/MMSearch/MMMU-Pro) remain unverified from accessible text sources in this pass.
- **Availability:** Open weights available; local metadata indicates not on Zen (`noFreeId`).

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-14
- Method: Deep second-pass independent research using alternative web access (`webfetch`, PowerShell `Invoke-WebRequest`) across Hugging Face model card, OpenRouter model page/llms text, Artificial Analysis/models.dev fetch attempts, and local metadata/prior report review.
- Research performed (>=10 successful independent web fetch/search attempts): HF Ling-3.0-flash-VL page (webfetch + shell fetch/content scan), OpenRouter Ling-3.0-flash-VL page (webfetch + shell fetch/content scan), AA Ling-3.0-flash-VL page fetch, models.dev API fetch, HF inclusionAI org/profile fetches in batch context, HF/OpenRouter Ling-3.0-tiny pages (webfetch + shell scans), OpenRouter/AA search/fetch attempts in batch, local `meta.json` and prior `Iceman.md.excluded` reviews for batch targets.
- Reference URLs:
  - [Ling-3.0-flash-VL (Hugging Face)](https://huggingface.co/inclusionAI/Ling-3.0-flash-VL)
  - [Ling-3.0-flash-VL (OpenRouter)](https://openrouter.ai/inclusionai/ling-3.0-flash-vl)
  - [Ling-3.0-flash-VL (Artificial Analysis)](https://artificialanalysis.ai/models/ling-3-0-flash-vl)
  - Local repository metadata consulted: `model/ling-3.0-flash-vl/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
