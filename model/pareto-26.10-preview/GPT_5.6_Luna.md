# Pareto 26.10 Preview — findings by GPT 5.6 Luna

- Source: Unbiased AI / Pareto 26.10 Preview
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pareto 26.10 Preview
- **Short description:** Unbiased's blended AI model preview, which routes a request through frontier and open models and blends the resulting answers. It is a composite service identity, not a single set of weights.
- **Provider / access:** Unbiased API preview model `pareto-26.10-preview`; OpenAI-compatible and Anthropic-compatible access was documented, with partner listings including `unbiased/pareto-26.10-preview`.
- **Release / knowledge:** Preview released 2026-10-01. On 2026-10-15 Unbiased promoted Pareto 26.10 to the stable `pareto` / `pareto-26.10` aliases; that stable identity is kept distinct here.
- **IDs:** `pareto-26.10-preview` for the researched preview; stable `pareto-26.10` and `pareto` are not substituted into this entry.
- **Context window:** 1M tokens (1,048,576 in partner listings); maximum output is provider-dependent, with 131,072 listed by partner documentation.
- **Modalities:** Text and image input, text output, tool/function calling, and streaming are documented for the preview service. No standalone upstream vision weights exist to benchmark.
- **Pricing (as of 2026-11-02):** Preview rate was $0.80 input / $0.03 cached input / $3.20 output per 1M tokens; reported preliminary task costs were $0.24 DeepSWE, $0.48 Terminal-Bench, $0.008 HLE, and $0.004 GPQA-Diamond. Rates were retained at GA but the benchmark measurements below remain preview measurements.
- **Architecture:** Proprietary routed ensemble/blend; no single parameter count or weight license applies.

### Raw benchmarks found

> These are Unbiased's preliminary October 1 preview runs. Unbiased explicitly says they may change, are not independent validation, and depend on the agent harness and execution setup.

Agent / tool use:

- Terminal-Bench 4.0: **50.8%**, **$0.48/task** (Unbiased preview run; terminal-agent harness/setup is vendor-specific).
- BenchLM lists the exact preview identity with 3/724 source-displayable rows and no public overall score; it remains unranked.

Reasoning / knowledge:

- Humanity's Last Exam, text-only: **49.9%**, **$0.008/task** (Unbiased preview run; not the full multimodal exam).
- GPQA-Diamond: **92.4%**, **$0.004/task** (Unbiased preview run; Diamond subset only).

Coding:

- DeepSWE v1.1: **69.9%**, **$0.24/task** (Unbiased preview run; agent harness and task-cost methodology are vendor-specific).

Long context:

- The service advertises a **1M-token** context, but no full-window MRCR/RULER retrieval result was published for the preview.

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 4.0 at 50.8% and routed tool calling show strong agent potential; the composite's changing underlying models and unpublished harness details cap reproducibility.
- **Reasoning: 89/100.** GPQA-D 92.4% and text-only HLE 49.9% are strong preliminary evidence, but they are only two subsets and not independent validation.
- **Context window: 92/100.** The 1M advertised context is large, but no retrieval benchmark at that length was verified and the preview was not a pinned-weight model.
- **Multimodal: 78/100.** Text/image input and tool support are documented, but the published preview scorecard has no visual benchmark and routing can change the underlying capability.
- **Coding: 86/100.** DeepSWE 69.9% and Terminal-Bench 50.8% are compelling at the reported task costs, while setup dependence prevents treating them as universal model scores.
- **Cost efficiency: 98/100.** The preview's $0.80/$3.20 token rate and very low reported task costs are exceptional, though the blended service's actual bill depends on routing and usage.
- **Overall Score: 86.6/100.** Mean of the five quality dimensions `(88 + 89 + 92 + 78 + 86) / 5 = 86.6`; best fit is a cost-sensitive research or coding agent where composite routing is acceptable and preview evidence is clearly labelled.

## Evidence notes

- The four benchmark rows are retained as **preliminary `pareto-26.10-preview`** results. They are not silently relabelled as stable `pareto-26.10`, even though Unbiased says the stable release kept the preview price.
- BenchLM assigns no composite or rank to the preview. The normalized Overall is therefore an evidence-weighted interpretation, not a public Pareto leaderboard score.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: Unbiased's October 1 preview release/changelog and benchmark card, the October 15 GA note, BenchLM's October 29 preview profile, and partner API listings. Preview, stable alias, benchmark subset, harness, and task-cost distinctions were preserved; scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [Unbiased Pareto 26.10 Preview release](https://unbiased.ai/blog/pareto-26-10-preview/)
  - [Unbiased changelog](https://unbiased.ai/changelog/)
  - [BenchLM Pareto 26.10 Preview profile](https://benchlm.ai/models/pareto-26-10-preview)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
