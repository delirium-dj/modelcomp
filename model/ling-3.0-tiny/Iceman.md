# Ling 3.0 Tiny — findings by Iceman

- Source: inclusionAI / Ling-3.0-tiny (`inclusionAI/Ling-3.0-tiny`, `inclusionai/ling-3.0-tiny`)
- Date: 2026-11-14 (UTC), deep second-pass research
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling-3.0-tiny
- **Short description:** inclusionAI’s open-weight (MIT) lightweight hybrid reasoning sparse MoE model optimized for efficient local/edge and low-cost hosted inference, with strong reasoning for its 1.3B activated parameter footprint.
- **Provider / access:** Open weights on Hugging Face (`inclusionAI/Ling-3.0-tiny`, MIT license) and hosted inference (e.g. OpenRouter providers; free/low-cost options reported). BF16/FP8/INT4 weights available.
- **Release / knowledge:** Hugging Face model card reviewed 2026-11-14; knowledge cutoff not explicitly stated in reviewed sources.
- **IDs:** `ling-3.0-tiny`, `Ling-3.0-tiny`, `inclusionAI/Ling-3.0-tiny`, `inclusionai/ling-3.0-tiny`.
- **Context window:** 131,072 tokens native; up to 262,144 tokens with YaRN (HF card / OpenRouter specs).
- **Modalities:** Text input/output.
- **Pricing (as of 2026-11-14):** OpenRouter lists low-cost hosted pricing (e.g. Ant Digital $0.015/M input, $0.045/M output on standard variant). Local metadata/HF context also references free hosted/self-host options (MIT weights; local footprint ~8.34 GiB at 8K context reported by HF card). Actual availability/pricing varies by provider.
- **Architecture:** Hybrid-linear sparse MoE (3:1 KDA–MLA blocks) with 128 routed experts. **7.9B total parameters, ~1.3B activated per token** (8 routed + 1 shared expert). Native hybrid reasoning (`enable_thinking`) and tool-call/reasoning parser support in deployment tooling.

### Raw benchmarks found

> SECOND-PASS UPDATE (converted from excluded): I reviewed the Hugging Face model card, OpenRouter model page/capabilities (including AA-attributed benchmark fields visible on page), AA/models.dev/search fetch attempts, and local metadata/prior report. OpenRouter/AA-attributed figures provide attributable public benchmark numerics for this exact model ID; some benchmark details in the HF card are presented as images and were not fully text-extracted, so AA/OR-attributed values are used where available. Scores are normalized estimates from available evidence.

Agent / tool use (benchmarks that measure tool-calling, multi-step workflows, environment interaction, etc.):

- **Artificial Analysis Agentic Index:** 4.4 (OpenRouter model page, AA-attributed).
- **Terminal-Bench 2.1:** 27.7% (OpenRouter model page, AA-attributed).
- **Terminal-Bench 4.0:** 0.0% (OpenRouter model page, AA-attributed).
- **AA-LCR:** 60.3% (OpenRouter model page, AA-attributed; long-context/reasoning-related retrieval signal).
- **τ²-Bench Telecom (tau2):** 22.6% (OpenRouter model page, AA-attributed).

Reasoning / knowledge:

- **Artificial Analysis Intelligence Index:** 25 (v4.1.1, HF card/OpenRouter context).
- **GPQA Diamond:** 73.4% (OpenRouter model page, AA-attributed).
- **HLE:** 9.3% (OpenRouter model page, AA-attributed).
- **CritPt:** 0.0% (OpenRouter model page, AA-attributed).
- **AA-Omniscience Accuracy / Hallucination:** 37.9% / 62.1% (OpenRouter model page, AA-attributed).

Coding:

- **SciCode:** 24.2% (OpenRouter model page, AA-attributed).
- **SWE-bench / LiveCodeBench:** no verified extracted numeric values in this pass.

Long context:

- **Context window:** 131K native / 262K with YaRN (HF card/OpenRouter).
- **AA-LCR:** 60.3% (AA-attributed, OpenRouter).
- No MRCR/RULER/GraphWalks/1M+ retrieval benchmark numerics extracted.

Multimodal:

- **Modalities:** text-only (HF card/local metadata).

### Normalized scores (1–100)

> Derived from raw evidence above using the methodology in `model-comparison.md`. Scores are normalized estimates (not official vendor scores), interpreted relative to the project’s general model comparison while accounting for this model’s very small active parameter budget (1.3B active).

- **Tool use: 40/100.** Modest agentic performance for a tiny reasoning MoE (AA Agentic Index 4.4, Terminal-Bench 2.1 27.7%, AA-LCR 60.3%, tau2 22.6%); useful for lightweight workflows but limited for complex autonomous tool use.
- **Reasoning: 52/100.** Notable GPQA Diamond (73.4%) and AA Intelligence Index 25 for 1.3B active parameters, but low HLE (9.3%) and CritPt (0.0%) indicate clear limits on harder/novel reasoning.
- **Context window: 76/100.** 131K native / 262K YaRN support is strong for a tiny model; AA-LCR 60.3% suggests usable but not top-tier long-context reasoning/retrieval.
- **Multimodal: 20/100.** Text-only model.
- **Coding: 38/100.** SciCode 24.2% and Terminal-Bench 2.1 27.7% show some coding/research-task capability, but no verified SWE-bench/LiveCodeBench evidence and overall coding strength appears limited.
- **Cost efficiency: 97/100.** Exceptional efficiency/value: MIT open weights, very small active compute footprint (~1.3B active), local deployability, and very low/free hosted pricing options.
- **Overall Score: 45/100.** Mean of the five non-cost dimensions (Tool 40, Reasoning 52, Context 76, Multimodal 20, Coding 38) = 45.2, rounded to 45; highly efficient tiny reasoning model, but capability-limited on agentic/coding/multimodal tasks.

> Caution: Benchmark figures are largely AA-attributed values surfaced on OpenRouter/HF context and should be interpreted as indicative. Performance is strong for size/cost but not directly comparable to frontier full-scale models without task-specific evaluation.

### Source comparison / conflicts

- **Specs/architecture/modalities:** HF card, OpenRouter, and local metadata align on core identity (Ling-3.0-tiny, 7.9B/1.3B active, MIT, text-only, 131K native/262K YaRN, hybrid reasoning).
- **Pricing/availability:** OpenRouter reports very low hosted pricing (e.g. $0.015/$0.045/M standard variant); local metadata/HF also describe free API/self-host options. Actual free-tier/provider availability may change (local metadata notes Zen free slot deprecated).
- **Benchmarks:** OpenRouter exposes AA-attributed numerics (e.g. GPQA 73.4, HLE 9.3, AA-LCR 60.3, SciCode 24.2, Terminal-Bench 2.1 27.7, Agentic Index 4.4, Intelligence Index 25). HF card presents a benchmark table/image; this pass relies on attributable text-visible AA/OR values.
- **Performance claims:** HF reports local throughput/memory figures (e.g. ~100 tok/s DGX Spark, ~86-90 tok/s M4 Pro, ~8.34 GiB peak at 8K) as deployment measurements; these are informative but environment-dependent.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-14
- Method: Deep second-pass independent research using alternative web access (`webfetch`, PowerShell `Invoke-WebRequest`) across Hugging Face model card, OpenRouter model page/llms text, AA/models.dev fetch attempts, and local metadata/prior report review.
- Research performed (>=10 successful independent web fetch/search attempts): HF Ling-3.0-tiny page (webfetch + shell fetch/content scan), OpenRouter Ling-3.0-tiny page (webfetch + shell fetch/content scan), AA Ling-3.0-flash-vl page fetch (batch context), models.dev API fetch, HF/OpenRouter Ling-3.0-flash-VL pages (webfetch + shell scans), OpenRouter/AA search/fetch attempts in batch, local `meta.json` and prior `Iceman.md.excluded` reviews for batch targets.
- Reference URLs:
  - [Ling-3.0-tiny (Hugging Face)](https://huggingface.co/inclusionAI/Ling-3.0-tiny)
  - [Ling-3.0-tiny (OpenRouter)](https://openrouter.ai/inclusionai/ling-3.0-tiny)
  - Local repository metadata consulted: `model/ling-3.0-tiny/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
