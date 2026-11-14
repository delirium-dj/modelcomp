# LongCat 2.0 — findings by Iceman

- Source: Meituan LongCat / LongCat 2.0 (`meituan-longcat/LongCat-2.0`, `meituan/longcat-2.0`)
- Date: 2026-11-14 (UTC), deep second-pass research
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat 2.0
- **Short description:** Meituan’s open-weights large sparse MoE model for coding and long-horizon agentic workflows, with 1M-context training/support and integration focus on developer harnesses (e.g. Claude Code/OpenClaw/Hermes per official card).
- **Provider / access:** Open weights on Hugging Face (`meituan-longcat/LongCat-2.0`, MIT license) and hosted inference (e.g. OpenRouter/AtlasCloud, SiliconFlow per metadata). Local metadata notes `noFreeId` and aliases including `owl-alpha`/`LongCat-2.0-Preview`.
- **Release / knowledge:** Hugging Face model card reviewed 2026-11-14; knowledge cutoff not explicitly stated in reviewed sources.
- **IDs:** `longcat-2.0`, `LongCat 2.0`, `meituan-longcat/LongCat-2.0`, `meituan/longcat-2.0`; aliases per local metadata include `Owl Alpha`, `owl-alpha`, `openrouter/owl-alpha`, `LongCat-2.0-Preview`, `longcat-2.0-preview`.
- **Context window:** 1,000,000 tokens (1M) stated in HF card/local metadata; max output not explicitly published in reviewed sources.
- **Modalities:** Text input/output.
- **Pricing (as of 2026-11-14):** Hosted pricing varies by provider: OpenRouter lists ~$0.30/M input, $1.20/M output (standard variant context), local metadata also cites $0.75/$2.95 on SiliconFlow and cached-read pricing; self-host $0 (MIT weights), subject to infrastructure cost.
- **Architecture:** Large-scale MoE with **1.6T total parameters and ~48B activated per token** (HF card), LongCat Sparse Attention, N-gram Embedding (135B noted in card), 1M-context training/post-training focus for coding and agentic tasks.

### Raw benchmarks found

> SECOND-PASS UPDATE (converted from excluded): the prior `Iceman.md.excluded` in this folder was stale/misattributed to retired `owl-alpha` context; this pass re-researched the actual folder identity (`meituan/longcat-2.0`) using Hugging Face official model card, OpenRouter model page/llms text and AA-attributed values visible on OpenRouter, Artificial Analysis/models.dev/search fetch attempts, and local metadata. HF provides vendor self-reported benchmark numerics for this exact model; OpenRouter shows AA-attributed values that differ on some metrics. Scores below are normalized estimates with explicit source comparison/caveats.

Vendor self-reported (official Hugging Face model card, in-house/unified harness unless marked cited; exact comparability varies):

- **Terminal-Bench 2.1:** 70.8
- **SWE-bench Pro:** 59.5
- **SWE-bench Multilingual:** 77.3
- **FORTE:** 73.2
- **BrowseComp:** 79.9
- **RWSearch:** 78.8
- **IFEval:** 90.0
- **Writing Bench:** 83.8
- **IMO-AnswerBench:** 81.8
- **GPQA-diamond:** 88.9

AA-attributed values visible on OpenRouter model page (third-party evaluation context):

- **Artificial Analysis Intelligence/Coding/Agentic Index:** 45.6 / 45.3 / 14.0
- **GPQA Diamond:** 78.0%
- **HLE:** 33.7%
- **AA-LCR:** 65.0%
- **τ²-Bench Telecom (tau2):** 13.2% (snippet)
- **GDPval-AA:** 18.8%
- **CritPt:** 2.6%
- **SciCode:** 36.3%
- **Terminal-Bench 2.1:** 50.2%
- **Terminal-Bench 4.0:** 0.0%

Other verified specs/capabilities:

- **Context window:** 1M (HF/metadata/OpenRouter).
- **Modalities:** text-only.
- **Open weights:** MIT license (HF).

### Normalized scores (1–100)

> Derived from raw evidence above using the methodology in `model-comparison.md`. Scores are normalized estimates (not official vendor scores), balancing strong vendor-reported coding/agent results against lower/mixed third-party AA-attributed signals and limited independent benchmark breadth.

- **Tool use: 72/100.** Vendor-reported agentic/coding-harness strength is high (Terminal-Bench 2.1 70.8, SWE-bench Pro 59.5, BrowseComp 79.9, RWSearch 78.8, FORTE 73.2), but AA-attributed agentic signals are much weaker (Agentic Index 14.0, Terminal-Bench 2.1 50.2%, tau2 13.2%, GDPval-AA 18.8%), indicating substantial evaluation/harness sensitivity.
- **Reasoning: 74/100.** Strong vendor-reported reasoning/knowledge results (GPQA-diamond 88.9, IMO-AnswerBench 81.8, IFEval 90.0) tempered by AA-attributed figures (GPQA 78.0%, HLE 33.7%, CritPt 2.6%) and limited independent standardized coverage.
- **Context window: 84/100.** 1M context with sparse-attention/long-context training focus is a major strength; AA-LCR 65.0% is decent but not top-tier, and broader long-context retrieval benchmark coverage is limited.
- **Multimodal: 20/100.** Text-only model.
- **Coding: 78/100.** Vendor-reported coding performance is strong (SWE-bench Pro 59.5, SWE-bench Multilingual 77.3, Terminal-Bench 2.1 70.8), but AA-attributed coding-adjacent metrics are mixed/lower (SciCode 36.3%, Terminal-Bench 2.1 50.2%); still likely a capable coding/agent model given official evidence and positioning.
- **Cost efficiency: 76/100.** Competitive hosted pricing (~$0.30/$1.20 on OpenRouter; varies by provider) and MIT open weights for self-hosting, but trillion-parameter-scale serving can be operationally expensive/heavy.
- **Overall Score: 66/100.** Mean of the five non-cost dimensions (Tool 72, Reasoning 74, Context 84, Multimodal 20, Coding 78) = 65.6, rounded to 66; strong long-context coding/agent positioning with notable vendor-vs-third-party benchmark discrepancies.

> Caution: Headline coding/agent/reasoning numbers are primarily vendor self-reported on HF and conflict in places with AA-attributed values surfaced on OpenRouter (e.g. Terminal-Bench 2.1 70.8 vs 50.2%, GPQA 88.9 vs 78.0%). Scores are provisional and should be interpreted with harness/evaluation variance in mind.

### Source comparison / conflicts

- **Identity/aliases:** Folder/meta identity is `meituan/longcat-2.0` (LongCat 2.0). Local metadata lists `owl-alpha` lineage/alias context; prior `Iceman.md.excluded` in this folder was stale and incorrectly focused on retired owl-alpha endpoint absence, so it was replaced in this pass.
- **Specs:** HF card, OpenRouter, and metadata align on 1.6T/48B MoE, 1M context, text-only, MIT open weights.
- **Benchmarks (major conflict):** HF self-reported results are strong (e.g. Terminal-Bench 2.1 70.8, SWE-bench Pro 59.5, GPQA-diamond 88.9), while AA-attributed values on OpenRouter are lower/mixed (e.g. Terminal-Bench 2.1 50.2%, GPQA 78.0%, Agentic Index 14.0, HLE 33.7%). Both are reported with attribution/caveats.
- **Pricing/serving:** Provider pricing varies (OpenRouter/SiliconFlow context per metadata/OR); trillion-parameter deployment has significant infrastructure cost despite open weights.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-14
- Method: Deep second-pass independent research using alternative web access (`webfetch`, PowerShell `Invoke-WebRequest`) across Hugging Face official model card, OpenRouter model page/llms text and AA-attributed values, Artificial Analysis/models.dev/search fetch attempts, and local metadata/prior report review.
- Research performed (>=10 successful independent web fetch/search attempts): HF LongCat-2.0 page (webfetch), OpenRouter LongCat-2.0 llms page (webfetch), OpenRouter LongCat-2.0 HTML scan for AA-attributed benchmarks (shell), AA LongCat-2.0 page fetch, OpenRouter models search for longcat-2.0, Ant Ling docs fetch (batch), OpenRouter/AA/models.dev/HF searches for ling-3.2-flash (batch), OpenRouter ling-3.2-flash page/scan attempts, HF/ModelScope/GitHub ling-3.2-flash fetch attempts, local `meta.json` and prior `Iceman.md.excluded` reviews for both targets.
- Reference URLs:
  - [LongCat-2.0 (Hugging Face)](https://huggingface.co/meituan-longcat/LongCat-2.0)
  - [LongCat-2.0 (OpenRouter)](https://openrouter.ai/meituan/longcat-2.0)
  - [LongCat-2.0 (Artificial Analysis)](https://artificialanalysis.ai/models/longcat-2-0)
  - Local repository metadata consulted: `model/longcat-2.0/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
