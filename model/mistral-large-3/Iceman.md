# Mistral Large 3 — findings by Iceman

- Source: Mistral AI / Mistral Large 3 (`mistralai/Mistral-Large-3-675B-Instruct-2512`, `mistralai/mistral-large-2512`)
- Date: 2026-11-14 (UTC), deep second-pass research
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 3 (2512 Instruct)
- **Short description:** Mistral AI’s Mistral Large 3 is an Apache 2.0 open-weights multimodal sparse MoE flagship (675B total / 41B active) with vision support and 256K context, positioned as a production-grade assistant/agentic model and later superseded by newer Mistral Large generations.
- **Provider / access:** Open weights on Hugging Face (`mistralai/Mistral-Large-3-675B-Instruct-2512`, Apache 2.0) and hosted inference (e.g. Mistral/La Plateforme, OpenRouter). Local metadata lists `opencode/mistral-large-3`, `noFreeId`.
- **Release / knowledge:** HF model card/metadata reviewed 2026-11-14 (instruct 2512 release context). Artificial Analysis marks the model deprecated/superseded by Large 4; knowledge cutoff not explicitly stated in accessible reviewed sources.
- **IDs:** `mistral-large-3`, `mistral-large-3-2512`, `mistralai/mistral-large-2512`, `mistralai/Mistral-Large-3-675B-Instruct-2512`, `opencode/mistral-large-3`.
- **Context window:** 256,000 tokens (HF card/OpenRouter/AA/local metadata).
- **Modalities:** Text and image input; text output (HF card/OpenRouter).
- **Pricing (as of 2026-11-14):** Hosted pricing varies by provider; OpenRouter lists ~$0.50/$1.50 per 1M in/out (standard) with other/provider-specific rates and EU routing options. Self-host $0 under Apache 2.0 (infrastructure cost applies).
- **Architecture:** Granular MoE (673B/675B-class total, ~39B/41B active per sources) plus ~2.5B vision encoder (HF card). FP8/NVFP4/BF16 variants available on Hugging Face.

### Raw benchmarks found

> SECOND-PASS UPDATE (converted from excluded): I reviewed the Hugging Face model card/evaluation result link, OpenRouter model page (including AA-attributed and other provider-attributed benchmark values visible in fetched content), Artificial Analysis model page scans, Mistral docs overview/search attempts, and local metadata/prior report. This provides attributable public benchmark numerics for the exact Large 3 / 2512 model family, though AA marks the model deprecated and some figures differ across sources. Scores are normalized estimates from available evidence with caveats.

Hugging Face (official model card / linked eval result):

- **GPQA Diamond:** 67.17% (HF linked eval result: Idavidrein/gpqa, diamond task).

OpenRouter / Artificial Analysis-attributed and other visible benchmark values (extracted from fetched pages; attribution varies by source block on page):

- **GPQA Diamond:** 68.0% (AA-attributed on OR/AA extracts)
- **MMLU-Pro:** 80.7%
- **AIME 2025:** 38.0%
- **HLE:** 4.2%
- **IFBench:** 36.2%
- **LiveCodeBench:** 46.5%
- **SciCode:** 36.6%
- **AA-LCR:** 36.0%
- **τ²-Bench Telecom (tau2):** 24.6%
- **τ-Bench Banking:** 5.8%
- **Terminal-Bench 2.1:** 12.0%
- **Terminal-Bench Hard:** 15.9%
- **Terminal-Bench 4.0:** 0.0%
- **CritPt:** 0.0%
- **MMMU-Pro:** 55.7% (AA extract) / 66.2% (Vals AI block shown on OR page)
- **SWE-bench (Vals AI block on OR):** 41.4%
- **AA Intelligence Index:** not available / deprecated context on AA

Other verified specs/capabilities:

- **Context window:** 256K.
- **Modalities:** text + image input, text output.
- **Open weights:** Apache 2.0 (HF).

### Normalized scores (1–100)

> Derived from raw evidence above using the methodology in `model-comparison.md`. Scores are normalized estimates (not official vendor scores), reflecting a capable 2025-era open multimodal MoE flagship that is now superseded by newer models.

- **Tool use: 44/100.** Native function calling/tool-use capability is supported (HF card), but attributable benchmark signals for agentic/tool workflows are weak in this pass (tau2 24.6%, tau Banking 5.8%, Terminal-Bench 2.1 12.0%, Hard 15.9%, TB4 0.0%, IFBench 36.2%).
- **Reasoning: 56/100.** Moderate-to-decent knowledge/reasoning signals (GPQA 67–68%, MMLU-Pro 80.7%) offset by low AIME 2025 (38.0%), very low HLE (4.2%), low AA-LCR (36.0%), and CritPt 0.0%.
- **Context window: 78/100.** 256K context is strong for many enterprise/agent workflows, but long-context reasoning evidence is limited (AA-LCR 36.0%) and no broader 1M/retrieval benchmark suite verified.
- **Multimodal: 66/100.** Native vision support (text+image in) with open weights is a meaningful capability; multimodal benchmark evidence is mixed/limited (MMMU-Pro ~55.7–66.2% depending on source) and not comprehensive.
- **Coding: 50/100.** Mixed coding signals (LiveCodeBench 46.5%, SciCode 36.6%, SWE-bench 41.4% in OR Vals AI block, but weak terminal-bench results) suggest competent but not frontier coding performance.
- **Cost efficiency: 84/100.** Apache 2.0 open weights enable free self-hosting, and hosted pricing (~$0.50/$1.50 per 1M on common providers) is competitive for a large multimodal MoE; operational serving cost for 675B-class models remains non-trivial.
- **Overall Score: 59/100.** Mean of the five non-cost dimensions (Tool 44, Reasoning 56, Context 78, Multimodal 66, Coding 50) = 58.8, rounded to 59; strong open/sovereign multimodal flagship for its generation, but benchmarked capability and agentic/tool performance lag newer frontier/successor models.

> Caution: The model is marked deprecated/superseded on Artificial Analysis and benchmark figures vary across sources/blocks (HF eval result vs AA/OR/Vals AI). Scores are provisional normalized estimates from attributable public evidence available in this pass.

### Source comparison / conflicts

- **Identity/specs:** HF card, OpenRouter, AA, and local metadata align on Mistral Large 3 / 2512 (675B/41B-class MoE, 256K, text+image input, Apache 2.0 open weights).
- **Benchmarks:** HF links a GPQA Diamond eval result (67.17%), while OR/AA extracts show GPQA 68.0% and additional metrics (MMLU-Pro 80.7%, AIME 2025 38.0%, LiveCodeBench 46.5%, SciCode 36.6%, AA-LCR 36.0%, terminal/tau metrics). OR page also includes Vals AI-sourced values (e.g. SWE-bench 41.4%, MMMU Pro 66.2%) that differ from AA-style extracts; all are reported with attribution/caveats.
- **Status:** AA marks model deprecated/superseded (Intelligence Index N/A in AA context), consistent with local metadata.
- **Pricing:** Hosted rates vary by provider; open-weights self-host remains available under Apache 2.0.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-14
- Method: Deep second-pass independent research using alternative web access (`webfetch`, PowerShell `Invoke-WebRequest`) across Hugging Face model card/eval links, OpenRouter model page, Artificial Analysis page/scans, Mistral docs/search attempts, and local metadata/prior report review.
- Research performed (>=10 successful independent web fetch/search attempts in batch): Mistral Large 3 news URL attempt (404), HF Mistral-Large-3-675B-Instruct-2512 page (webfetch + scans), OpenRouter mistral-large-2512 page (webfetch + scans), AA mistral-large-3 page fetch/scan, models.dev search for mistral-large-3, OpenRouter models search for mistral-large-3, Mistral docs models overview fetch/scan, HF/Meta/OpenRouter/AA/models.dev searches for muse-spark-1.1, meta.com blog URL attempt (404), ai.meta.com blog fetch, local `meta.json` and prior `Iceman.md.excluded` reviews for batch targets.
- Reference URLs:
  - [Mistral-Large-3-675B-Instruct-2512 (Hugging Face)](https://huggingface.co/mistralai/Mistral-Large-3-675B-Instruct-2512)
  - [Mistral Large 3 2512 (OpenRouter)](https://openrouter.ai/mistralai/mistral-large-2512)
  - [Mistral Large 3 (Artificial Analysis)](https://artificialanalysis.ai/models/mistral-large-3)
  - Local repository metadata consulted: `model/mistral-large-3/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
