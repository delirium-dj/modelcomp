# Grok 4.1 Fast — findings by GPT 6 Sol

- Source: SpaceXSI / xAI (`grok-4-1-fast-reasoning`)
- Date: 2026-10-31 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 Fast
- **Short description:** Proprietary 2M-context model trained for support-agent tool use and search. The launch offers `-reasoning` and `-non-reasoning` routes; this report scores the **reasoning** route and treats non-reasoning as a lower-effort mode, not an additional model folder ([SpaceXSI launch](https://x.ai/news/grok-4-1-fast)).
- **Provider / access:** Launch IDs `grok-4-1-fast-reasoning` and `grok-4-1-fast-non-reasoning` on the xAI API; [vendor Python example](https://x.ai/news/grok-4-1-fast) uses the former with hosted Agent Tools. Artificial Analysis [now labels it deprecated](https://artificialanalysis.ai/models/grok-4-1-fast-reasoning), and the current vendor models catalog does not list a dedicated 4.1 Fast model card; recheck live API access before deployment. No verified Zen Free ID.
- **Release / knowledge:** **November 19, 2025** ([vendor launch](https://x.ai/news/grok-4-1-fast), [Vals](https://www.vals.ai/models/grok_grok-4-1-fast-reasoning)); knowledge cutoff not verified.
- **IDs:** `grok-4-1-fast-reasoning` and `grok-4-1-fast-non-reasoning` at launch, a reasoning-mode distinction, not two weights proved distinct. The similarly named Grok 4.1 (not Fast) is a separate product.
- **Context window:** **2,000,000 combined tokens** ([SpaceXSI](https://x.ai/news/grok-4-1-fast), [Artificial Analysis](https://artificialanalysis.ai/models/grok-4-1-fast-reasoning)); Vals lists up to 2M output but that metadata alone does not establish a 2M output or near-limit retrieval test.
- **Modalities:** Text/image input and text output; reasoning and client/server tool calls. The separate Agent Tools API offers search, X search, code execution, collections search and MCP; those are *external tools*, not native audio/video model I/O ([launch](https://x.ai/news/grok-4-1-fast)).
- **Pricing (as of 2026-10-31):** Historical first-party launch price **$0.20 input / $0.05 cached input / $0.50 output per million tokens**, plus hosted Agent Tools **from $5 per 1,000 successful calls** ([SpaceXSI launch](https://x.ai/news/grok-4-1-fast)). [Vals' historical profile](https://www.vals.ai/models/grok_grok-4-1-fast-reasoning) repeats $0.20/$0.50; because [Artificial Analysis](https://artificialanalysis.ai/models/grok-4-1-fast-reasoning) calls the model deprecated, these must not be presented as verified current live-route prices.
- **Architecture:** Proprietary; no parameter count or weights disclosed ([Artificial Analysis](https://artificialanalysis.ai/models/grok-4-1-fast-reasoning)).

### Raw benchmarks found

Agent / tool use:

- [SpaceXSI's launch](https://x.ai/news/grok-4-1-fast) reports **τ²-Bench Telecom 100%**, explicitly noting independent Artificial Analysis verification, and **Berkeley Function Calling v4 72%**. With its proprietary Agent Tools API, SpaceXSI also reports **Research-Eval Reka 63.9%**, **FRAMES 87.6%** and **X Browse 56.3%** (X Browse is internal). The hosted tool set and its per-call costs are part of that tested system; the percentages do not measure bare model-only search ability.
- [Vals' independent reasoning-route run](https://www.vals.ai/models/grok_grok-4-1-fast-reasoning) measured **Terminal-Bench 2.0 24.72% ±4.60**, **MortgageTax 42.61% ±0.95** and **Public Benefits Bench v1.1 44.79% ±1.29**. [BenchLM](https://benchlm.ai/models/grok-4-1-fast-reasoning) cites a historical AA τ² aggregate **93.3%**; this is not necessarily the same as the vendor's telecom-only 100% and AA's current deprecated profile does not publish a maintained Index.

Reasoning / knowledge:

- [Vals](https://www.vals.ai/models/grok_grok-4-1-fast-reasoning) independently measured **GPQA Diamond 84.34% ±1.85**, **MMLU Pro 84.18% ±0.36**, **LegalBench 82.45% ±0.46** and **SAGE 74.47% ±2.25** on the reasoning route. The Vals page's displayed 58.10% accuracy figure is not a global model score.
- [BenchLM's attributed historical AA index](https://benchlm.ai/models/grok-4-1-fast-reasoning) records **AA-HLE 19.3%**, **Omniscience accuracy 25.1% / hallucination rate 73.4%** and **CritPt 2.9%** for the reasoning route. AA's [current profile](https://artificialanalysis.ai/models/grok-4-1-fast-reasoning) shows **N/A Intelligence Index** due to deprecated coverage; historical indices are not current v5 scores. The non-reasoning [AA profile](https://artificialanalysis.ai/models/grok-4-1-fast) is a different effort setting and should not be mixed into these results.

Coding:

- [Vals](https://www.vals.ai/models/grok_grok-4-1-fast-reasoning): **LiveCodeBench 80.64% ±1.09**, **SWE-bench 41.40% ±2.21**, but **Vibe Code Bench v1.1 1.20% ±1.20** and **Terminal-Bench 2.0 24.72% ±4.60**. Solving programming questions is not equivalent to reliable end-to-end software engineering.

Long context / multimodal:

- [BenchLM's historical AA-attributed metrics](https://benchlm.ai/models/grok-4-1-fast-reasoning) list **AA-LCR 74.0%** and **AA-MMMU-Pro 63.3%** on the reasoning route, but AA's current profile no longer exposes maintained per-model results; treat as dated secondary evidence. Neither is a full-2M retrieval measurement. The [current AA model description](https://artificialanalysis.ai/models/grok-4-1-fast-reasoning) confirms image/text input and text-only output.

### Normalized scores (1–100)

- **Tool use: 76/100.** Vendor/AA-verified telecom 100 and vendor BFCL 72, capped by independent TB2.0 24.72 and hosted-tool dependence.
- **Reasoning: 74/100.** Independent GPQA 84.34 and MMLU Pro 84.18, limited by historical hard-reasoning/factuality scores and lack of maintained AA Index.
- **Context window: 94/100.** 2M advertised, but no verified near-limit retrieval and uncertain present-day availability.
- **Multimodal: 69/100.** Image/text input and historical MMMU-Pro 63.3; no native audio/video or non-text output.
- **Coding: 57/100.** Independent LiveCodeBench 80.64 contrasted with SWE-bench 41.4, Vibe Code 1.2 and TB2.0 24.72.
- **Cost efficiency: 83/100.** Historically cheap $0.20/$0.50, but paid tool calls and deprecation make current value uncertain.
- **Overall Score: 74/100.** Half-up mean (76 + 74 + 94 + 69 + 57) / 5 = 74; specialized historical tool-calling candidate, not a recommended new coding-agent integration without live-route checks.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-31
- Method: Cross-checked xAI's variant-specific launch/tool protocol against Vals' independently evaluated reasoning route and Artificial Analysis's current deprecated-status pages; historical BenchLM/AA numbers are clearly marked secondary. Scores are normalized interpretations.
- Reference URLs:
  - [SpaceXSI Grok 4.1 Fast launch, APIs and agent benchmarks](https://x.ai/news/grok-4-1-fast)
  - [Vals AI reasoning-route benchmark measurements](https://www.vals.ai/models/grok_grok-4-1-fast-reasoning)
  - [Artificial Analysis reasoning-route deprecated profile](https://artificialanalysis.ai/models/grok-4-1-fast-reasoning)
  - [BenchLM reasoning-route historical benchmark index](https://benchlm.ai/models/grok-4-1-fast-reasoning)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
