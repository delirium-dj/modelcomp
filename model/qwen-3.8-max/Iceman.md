# Qwen 3.8 Max — findings by Iceman

- Source: Alibaba Qwen / Qwen3.8 Max (`qwen/qwen3.8-max`, hosted flagship; related open weights `Qwen/Qwen3.8-2.4T-A95B`)
- Date: 2026-11-14 (UTC), deep second-pass research
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Max (Qwen3.8 Max 0902, hosted flagship)
- **Short description:** Qwen3.8 Max is Alibaba’s hosted multimodal Mixture-of-Experts flagship for coding, reasoning, and visual-agent workloads with 1M context; this report scores the hosted `qwen/qwen3.8-max` model (vision/tools/capabilities may differ from the open `Qwen3.8-2.4T-A95B` text-only weights).
- **Provider / access:** Hosted via Alibaba Cloud / OpenRouter (`qwen/qwen3.8-max`) and other providers; proprietary hosted API tier. Local metadata lists `alibaba/qwen3-8-max`, `noFreeId`. Related open weights: `Qwen/Qwen3.8-2.4T-A95B` (text-only, thinking required per HF card).
- **Release / knowledge:** OpenRouter/AA indicate 2026 release (OR shows Sep 3, 2026 for `qwen3.8-max` snapshot). Qwen blog URL in metadata was unavailable (404) in this pass. Knowledge cutoff not explicitly stated in reviewed accessible sources.
- **IDs:** `qwen-3.8-max`, `qwen3.8-max`, `qwen/qwen3.8-max`, `alibaba/qwen3-8-max` (local), related open-weights ID `Qwen/Qwen3.8-2.4T-A95B`.
- **Context window:** 1,000,000 tokens total; 131,072 max completion/output (OpenRouter/AA/local metadata).
- **Modalities:** Hosted model: text, image, and video input; text output (OpenRouter/AA). Open-weights `Qwen3.8-2.4T-A95B`: text-only per Hugging Face card.
- **Pricing (as of 2026-11-14):** Hosted ~$2.00/$6.00 per 1M in/out (OpenRouter/AA/local metadata; cache discounts/pricing tiers may vary). Local metadata notes one-time free quota claim (not independently verified).
- **Architecture:** Hosted flagship described as large MoE (local metadata cites 2.4T/95B class). Open-weights card confirms 2.4T/95B MoE text-only checkpoint; hosted and open-weight capability sets differ.

### Raw benchmarks found

> SECOND-PASS UPDATE (converted from excluded): I reviewed Artificial Analysis’ Qwen3.8 Max page, OpenRouter model/API pages and models API data, models.dev API/search, Hugging Face open-weights model card (`Qwen/Qwen3.8-2.4T-A95B`), Qwen/Alibaba Cloud searches, and local metadata/prior `Iceman.md.excluded`. This provides attributable benchmark numerics for the exact hosted `qwen/qwen3.8-max` identity from AA/OR-visible sources, plus HF benchmark figures for the related open-weights text-only checkpoint (reported separately). Scores are normalized estimates for the hosted model with caveats on source variance and hosted-vs-open-weight differences.

Artificial Analysis (`artificialanalysis.ai/models/qwen3-8-max`, reviewed 2026-11-14, extracted page data):

- **AA Intelligence Index:** 34 (rank #50/80 in extracted summary context; index/task summary fields partly N/A in extracted UI text)
- **GPQA Diamond:** 92.83%
- **HLE:** 43.10%
- **AA-LCR:** 80.33%
- **τ-Bench Banking:** 47.84%
- **GDPval-AA:** 58.7%
- **CritPt:** 17.71%
- **SciCode:** 52.08%
- **Terminal-Bench 2.1:** 88.76%
- **Terminal-Bench 4.0:** 38.89%
- **FrontierCode 2.0:** 23.42% (extracted)
- **Terminal-Bench Science:** 11.90% (extracted)
- **MMMU-Pro:** 82.77%
- **APEX Agents:** 42.40%
- **AutomationBench-AA partial:** 56.19%
- **EnterpriseOpsGym:** 47.63%
- **AA-Omniscience accuracy:** 29.5% / **non-hallucination rate:** 72.9% (extracted fields present)
- **LiveCodeBench:** null; **AIME 2025:** null; **IFBench:** null in extracted AA dataset fields

OpenRouter / Vals AI benchmark blocks (`qwen/qwen3.8-max`, reviewed 2026-11-14):

- **SWE-bench:** 85.6% (Vals AI)
- **LiveCodeBench:** 87.9% (Vals AI)
- **SWE-bench Multimodal:** 42.5% (Vals AI)
- **GPQA Diamond:** 92.8% (AA-attributed block)
- **HLE:** 43.1% (AA-attributed block)
- **AA-LCR:** 80.3% (AA-attributed block)
- **Terminal-Bench 4.0:** 34.3% (Vals AI; differs from AA 38.89%)

Hugging Face open-weights checkpoint `Qwen/Qwen3.8-2.4T-A95B` (text-only, related but not identical to hosted tier; reviewed 2026-11-14):

- **GPQA Diamond:** 92.6%
- **HLE:** 43.6%
- **SWE-bench Pro:** 67.7% (card notes evaluation under Qwen3.8-Max product tier context in some cases; checkpoint is text-only/thinking-required)
- Used for corroboration only; hosted model may differ in capabilities/modalities/tools.

Other verified specs/capabilities:

- **Context window:** 1M / 131K max completion.
- **Hosted modalities:** text/image/video in, text out.
- **Tooling:** tools, tool_choice, reasoning/structured outputs supported on OpenRouter API.

### Normalized scores (1–100)

> Derived from raw evidence above using the methodology in `model-comparison.md`. Scores are normalized estimates (not official vendor scores) for the hosted `qwen/qwen3.8-max` model.

- **Tool use: 84/100.** Strong agentic/tool signals (Terminal-Bench 2.1 88.76%, τ-Bench Banking 47.84%, APEX Agents 42.4%, AutomationBench-AA partial 56.19%, GDPval-AA 58.7%, supported tools/reasoning APIs), with weaker Terminal-Bench 4.0 (38.89% AA / 34.3% Vals AI) and moderate EnterpriseOpsGym (47.63%).
- **Reasoning: 83/100.** Very strong GPQA Diamond (~92.8%) and AA-LCR (80.33%), solid HLE (43.1%) for a difficult benchmark, but low CritPt (17.71%) and moderate AA-Omniscience accuracy (29.5%).
- **Context window: 96/100.** 1M context / 131K max completion with strong long-context reasoning evidence (AA-LCR 80.33%).
- **Multimodal: 85/100.** Hosted model supports text/image/video input with strong multimodal evidence signals (MMMU-Pro 82.77%, SWE-bench Multimodal 42.5% Vals AI) in addition to broad visual-agent positioning; native audio not indicated.
- **Coding: 87/100.** Strong coding evidence (SWE-bench 85.6% Vals AI, LiveCodeBench 87.9% Vals AI, Terminal-Bench 2.1 88.76%, SciCode 52.08%), with moderate FrontierCode/Terminal-Bench Science/Terminal-Bench 4.0 results.
- **Cost efficiency: 78/100.** Hosted ~$2/$6 per 1M pricing is competitive for a frontier-class 1M-context multimodal flagship but not inexpensive; open-weights text-only checkpoint exists for different self-host tradeoffs, not full hosted parity.
- **Overall Score: 87/100.** Mean of the five non-cost dimensions (Tool 84, Reasoning 83, Context 96, Multimodal 85, Coding 87) = 87.0; strong hosted multimodal/agentic flagship with good benchmark coverage, subject to source variance and hosted-vs-open-weight capability differences.

> Caution: Official Qwen blog URL in metadata returned 404. Some AA UI summary fields showed N/A/“no publicly available API” text while extracted metric data was present. OR/Vals AI and AA values differ on some benchmarks (e.g. Terminal-Bench 4.0). HF `Qwen3.8-2.4T-A95B` is a related text-only open-weights checkpoint and not identical to the hosted multimodal Max tier.

### Source comparison / conflicts

- **Identity/specs:** OpenRouter, AA, models.dev/API refs, and local metadata align on hosted `qwen/qwen3.8-max` (1M/131K, text+image+video in, tools/reasoning). HF confirms related `Qwen3.8-2.4T-A95B` open weights as text-only/thinking-required, supporting metadata’s hosted-vs-open distinction.
- **Benchmarks:** AA provides broad metric coverage (GPQA 92.83, HLE 43.10, AA-LCR 80.33, TB 2.1 88.76, TB4 38.89, MMMU-Pro 82.77, GDPval-AA 58.7, etc.). OR/Vals AI adds high coding/multimodal coding values (SWE-bench 85.6, LiveCodeBench 87.9, SWE-bench Multimodal 42.5) with some differences (TB4 34.3). HF open-weights card reports GPQA 92.6/HLE 43.6/SWE-bench Pro 67.7 for the related checkpoint.
- **Pricing:** Hosted ~$2/$6 per 1M consistent across AA/OR/local metadata; cache/quota details vary.
- **State:** Prior `Iceman.md.excluded` removed and replaced with this evidence-based scored report.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-14
- Method: Deep second-pass independent research using alternative web access (`webfetch`, PowerShell `Invoke-WebRequest`) across Artificial Analysis, OpenRouter model/API pages and models API, models.dev API/search, Hugging Face model card/searches, Qwen/Alibaba Cloud searches, and local metadata/prior report review.
- Research performed (>=10 successful independent web fetch/search attempts in batch): AA solar-mini4 page fetch, OpenRouter solar-mini4 page fetch, Qwen 3.8 Max blog URL attempt (404), AA qwen3-8-max page fetch, AA/models.dev/OR/HF/Qwen blog/Upstage docs/OR API search fetches for qwen3.8-max and solar-mini4, HF Qwen3.8-2.4T-A95B page fetch, Upstage console docs fetch, AA/OR/HF/Upstage text scans, targeted OpenRouter models API extracts for `qwen/qwen3.8-max` and `upstage/solar-mini4`, local `meta.json` and prior `Iceman.md.excluded` reviews for batch targets.
- Reference URLs:
  - [Qwen3.8 Max (Artificial Analysis)](https://artificialanalysis.ai/models/qwen3-8-max)
  - [Qwen3.8 Max (OpenRouter)](https://openrouter.ai/qwen/qwen3.8-max)
  - [Qwen3.8-2.4T-A95B (Hugging Face)](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)
  - Local repository metadata consulted: `model/qwen-3.8-max/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
