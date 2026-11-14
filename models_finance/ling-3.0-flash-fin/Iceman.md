# Ling 3.0 Flash Fin — findings by Iceman

- Source: inclusionAI / Ant Group — Ling 3.0 Flash Fin (`inclusionai/ling-3.0-flash-fin`)
- Date: 2026-11-14 (UTC), deep second-pass research (converted from excluded)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash Fin (Ling-3.0-flash-Fin)
- **Short description:** Ling 3.0 Flash Fin is inclusionAI/Ant Group’s finance-specialized open-weight sparse MoE model (124B total / 5.1B active) for financial research, statement parsing, valuation/modeling, and tool-intensive workflows, built on Ling 3.0 Flash with 262K context.
- **Provider / access:** Open weights on Hugging Face (`inclusionAI/Ling-3.0-flash-Fin`, MIT license, BF16 release) and hosted providers/routes (e.g. Novita, Vercel AI Gateway, OpenCode/Kilo free or promo tiers in some listings). Local metadata lists `inclusion/ling-3.0-flash-fin` and aliases including `ling-3.0-flash-fin-free`.
- **Release / knowledge:** Hugging Face/models.dev indicate 2026-08-27 release / 2026-09-03 update (HF last modified 2026-09-24 in API metadata). Knowledge cutoff not explicitly stated in reviewed sources.
- **IDs:** `ling-3.0-flash-fin`, `inclusionai/ling-3.0-flash-fin`, `Ling-3.0-flash-Fin`, `inclusionAI/Ling-3.0-flash-Fin`, `ling-3.0-flash-fin-free` (promo/free access tier in some providers).
- **Context window:** 262,144 tokens context; 32,768 max output (HF/models.dev/AA/local metadata). Some provider listings show 256K context variants.
- **Modalities:** Text input / text output.
- **Pricing (as of 2026-11-14):** Hosted ~$0.075/$0.22 per 1M in/out with cached ~$0.015 on some providers (models.dev/AA/local metadata; route-dependent). Free/promo $0 tiers exist on some gateways (same weights/access tier, not a separate model). Open weights $0 to self-host.
- **Architecture:** Sparse Mixture-of-Experts (`bailing_hybrid`/BailingMoeV3), 124B total / 5.1B active parameters per token, 512 experts / 8 active per token (HF config), BF16 checkpoint, MIT license.

### Raw benchmarks found

> SECOND-PASS UPDATE (converted from excluded): I reviewed the Hugging Face model card/API, models.dev model page/API, Artificial Analysis model page (embedded/extracted metric data), OpenRouter/Vercel free-route pages, and local metadata/prior `Iceman.md.excluded`. HF card reports finance-domain evaluations (FinFIRST, FinSearchComp Verified, FinCRAFT, Finance Agent, APEX-Agents, SpreadsheetBench, τ³-Banking) but presents results as an image chart (not text-extractable). AA provides attributable extracted benchmark metrics for this exact model slug (`ling-3-0-flash-fin`) though the AA UI summary shows intelligence/cost/performance as N/A/unknown. Scores below are normalized estimates from available AA/spec evidence with caveats for finance specialization and sparse standard benchmark coverage.

Artificial Analysis (`artificialanalysis.ai/models/ling-3-0-flash-fin`, reviewed 2026-11-14, extracted page data):

- **AA Intelligence Index summary:** N/A/unknown in UI, but extracted evaluation metrics present
- **AA-LCR:** 73.67%
- **HLE:** 22.61% (extracted field; separate `hleDiamond` field 5.4% also present in extracted data)
- **CritPt v2 (Hard Subset):** 2.57%
- **APEX Agents:** 27.43%
- **AutomationBench-AA (partial):** 7.39%
- **AA-AnalystAgent:** 16.25%
- **GDPval-AA (extracted context):** interval ~1085.97–1128.29 shown in extracted fields
- **SciCode:** 42.36%
- **Terminal-Bench 2.1:** 62.55%
- **Terminal-Bench 4.0:** 0%
- **τ-Bench Banking (tau banking):** 38.56%
- **GPQA Diamond:** null
- **LiveCodeBench:** null
- **AIME 2025:** null
- **IFBench:** null
- **MMMU-Pro:** null

Other verified specs/capabilities:

- **Context window:** 262,144 / 32,768 max output (provider variants may report 256K).
- **Modalities:** text-only.
- **Capabilities:** reasoning (toggle/options by provider), tool calling, temperature support (models.dev).
- **Open weights:** MIT license, 124B/5.1B active MoE, BF16 checkpoint.

Hugging Face card (finance-domain, image chart, not text-extractable numerics): FinFIRST, FinSearchComp Verified, FinCRAFT, Finance Agent, APEX-Agents, SpreadsheetBench, τ³-Banking — **no verified extractable standardized numerics from accessible text in this pass**.

### Normalized scores (1–100)

> Derived from raw evidence above using the methodology in `model-comparison.md`. Scores are normalized estimates (not official vendor scores) for a finance-specialized open-weight model with sparse standard/general benchmark coverage.

- **Tool use: 45/100.** Reasoning/tool-calling API support and some agentic evidence (Terminal-Bench 2.1 62.55%, APEX Agents 27.43%, τ-Bench Banking 38.56%) are offset by weak AutomationBench-AA partial (7.39%), very low Terminal-Bench 4.0 (0%), and limited AA-AnalystAgent (16.25%).
- **Reasoning: 38/100.** Solid long-context reasoning signal (AA-LCR 73.67%) but weak/low results on harder reasoning metrics in extracted AA data (HLE 22.61%, hleDiamond 5.4% field present, CritPt 2.57%) and no verified GPQA/AIME.
- **Context window: 88/100.** 262K context / 32K output with strong AA-LCR (73.67%) supports long financial/document workflows; some provider listings report 256K.
- **Multimodal: 10/100.** Text-only input/output.
- **Coding: 35/100.** Moderate SciCode (42.36%) and decent Terminal-Bench 2.1 (62.55%) but Terminal-Bench 4.0 is 0% and standard coding benchmarks (LiveCodeBench/SWE-bench) are not verified/available in extracted AA data.
- **Cost efficiency: 90/100.** Very low hosted pricing (~$0.075/$0.22 per 1M, cached cheaper) and free/promo/open-weights self-host options make it highly cost-efficient for its class.
- **Overall Score: 43/100.** Mean of the five non-cost dimensions (Tool 45, Reasoning 38, Context 88, Multimodal 10, Coding 35) = 43.2, rounded to 43; capable/efficient finance-specialized text model with useful long-context and some agentic signals, but limited general benchmark coverage and weaker hard-reasoning/agent performance.

> Caution: Finance-domain benchmark results on the HF card are image-only and not text-extractable/verifiable here. AA UI summary shows N/A/unknown for index/cost/performance while embedded extracted metrics exist (used with attribution). Some extracted AA fields appear conflicting/ambiguous (e.g. HLE vs hleDiamond) and many standard benchmarks are null/unavailable. This is a domain-specialized model; scores estimate general repo dimensions from available evidence.

### Source comparison / conflicts

- **Identity/specs:** HF, models.dev, AA, OpenRouter/Vercel routes, and local metadata align on Ling 3.0 Flash Fin / `inclusionai/ling-3.0-flash-fin` (124B/5.1B active MoE, 262K/32K class, text-only, MIT open weights, reasoning/tool-capable).
- **Benchmarks:** HF card lists finance benchmarks in image chart only. AA extracted data provides attributable numeric metrics (AA-LCR 73.67, TB 2.1 62.55, SciCode 42.36, tau banking 38.56, APEX 27.43, HLE 22.61, TB4 0, etc.) but with nulls and some ambiguous fields.
- **Pricing/context:** Hosted pricing/tiers vary by provider (paid, cached, free promo, self-host); context reported as 262K or 256K depending on provider listing.
- **State:** Prior `Iceman.md.excluded` removed and replaced with this evidence-based scored report.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-14
- Method: Deep second-pass independent research using alternative web access (`webfetch`, PowerShell `Invoke-WebRequest`) across Hugging Face model card/API, models.dev model/API, Artificial Analysis model page, OpenRouter/Vercel route pages, and local metadata/prior report review.
- Research performed (>=10 successful independent web fetch/search attempts for this batch/target set): prior `Iceman.md.excluded`/`meta.json` reads (both targets), HF ling-3.0-flash-fin page/API webfetches, models.dev page webfetch, OpenRouter/AA/OpenAI search page webfetches, OpenRouter models API scan, models.dev API scan/extracts, OR/Vercel free-route fetches, AA ling-3-0-flash-fin page webfetch, AA/OR/Vercel targeted text scans, and models.dev canonical/id extract checks.
- Reference URLs:
  - [Ling-3.0-flash-Fin (Hugging Face)](https://huggingface.co/inclusionAI/Ling-3.0-flash-Fin)
  - [Ling 3.0 Flash Fin (models.dev)](https://models.dev/models/inclusionai/ling-3.0-flash-fin)
  - [Ling-3.0-flash-Fin (Artificial Analysis)](https://artificialanalysis.ai/models/ling-3-0-flash-fin)
  - Local repository metadata consulted: `models_finance/ling-3.0-flash-fin/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
