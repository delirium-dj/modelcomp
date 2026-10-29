# Gemma 4 26B A4B — findings by Flint

- Source: Google DeepMind / Gemma 4 26B A4B
- Date: 2026-10-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 26B A4B (Reasoning)
- **Short description:** Google's open-weights Mixture-of-Experts reasoning model (25.2B total / 3.8B active parameters, Apache 2.0) with a dedicated vision encoder and built-in thinking mode, aimed at reasoning, coding, and agentic workflows at laptop/server scale.
- **Provider / access:** Open weights (Apache 2.0); Hugging Face `google/gemma-4-26B-A4B-it`; Google API / Gemini-family deployment; self-hostable via vLLM / SGLang / Transformers; open inference served by multiple third-party providers (Artificial Analysis: Google, DeepInfra, Novita, Makora, Parasail, SiliconFlow, Systalyze, CoreWeave).
- **Release / knowledge:** Released April 2, 2026 (Artificial Analysis; Google Gemma 4 launch); Gemma 4 technical report arXiv:2607.02770 (Jul 2, 2026); training data cutoff January 2025 (Gemma 4 docs).
- **IDs:** `google/gemma-4-26B-A4B-it` (Hugging Face); reasoning variant of the Gemma 4 26B A4B release.
- **Context window:** 256K tokens (Hugging Face model card / Gemma 4 docs; Artificial Analysis reported 256K on the release page and 260K on the model FAQ).
- **Modalities:** Text, image, and video input (Artificial Analysis), text output; reasoning yes (thinking mode via the `<|think|>` control token); tool use yes (native function calling); audio not supported on this variant (Google Gemma 4 docs scope audio to the E2B / E4B / 12B models).

- **Pricing (as of 2026-10-29):** Open weights Apache 2.0; Gemma API pricing from $0.10 per 1M input / $0.34 per 1M output (Artificial Analysis; blended ≈ $0.09 per 1M with cache); hosted median ~$0.12 input / $0.30 output.

- **Architecture:** Open-weight Mixture-of-Experts (MoE); 25.2B total / 3.8B active parameters; 30 layers; sliding window 1024; hybrid local sliding-window + global attention; expert count 8 active / 128 total + 1 shared; vision encoder ~550M params.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability. No SWE-bench Verified row was found for this exact ID in any fetched source — see Coding.

Reasoning / knowledge:

- MMLU Pro: **82.6%**; AIME 2026 (no tools): **88.3%**; LiveCodeBench v6: **77.1%**; GPQA Diamond: **82.3%** (Google DeepMind / Hugging Face) / **79.2%** (Artificial Analysis); HLE no tools: **8.7%**; HLE with search: **17.2%**; BigBench Extra Hard: **64.8%**; MMMLU: **86.3%**; IFEval: **98.5%**; IFBench: **72.0%**; SciCode: **40.0%**; MATH-Vision: **82.4%**; MedXPertQA MM: **58.1%**; MRCR v2 (8 needles, 128K context, average): **44.1%**; Codeforces ELO: **1718**.

Agent / tool use:

- τ2-bench: **68.2%** average over 3 (Hugging Face model card) / **85.5%** retail (Google DeepMind technical materials); Artificial Analysis: τ2 **43.6%**, AA Coding Index **39.30**, Terminal-Bench Hard **13.6%**, Terminal-Bench V2.1 **39.0%**; native function calling + agentic design in the thinking-mode stack.

Coding:

- LiveCodeBench v6: **77.1%**; Codeforces ELO: **1718**; SciCode: **40.0%**; GPQA Diamond: **82.3%**.

Multimodal / vision:

- MMMU Pro: **73.8%**; OmniDocBench 1.5 (average edit distance, lower is better): **0.149**; MATH-Vision: **82.4%**.

Long context:

- MRCR v2, 8 needles, 128K (average): **44.1%**.

Independent signals (Artificial Analysis Intelligence Index v5.0, graysoft benchmark comparison):

- Intelligence Index: **16.7**; GPQA Diamond: **79.2%**; HLE: **19.3%**; LCR: **65.7%**; SciCode: **40.0%**.

### Cross-source comparison

- Official (Google DeepMind / Hugging Face `google/gemma-4-26B-A4B-it` + ai.google.dev Gemma 4 docs + arXiv:2607.02770) vs independent (Artificial Analysis Intelligence Index, graysoft benchmark comparison): direction consistent — MMLU Pro **82.6%**, AIME 2026 **88.3%**, GPQA Diamond, MMMU Pro **73.8%**, MATH-Vision **82.4%** line up between official and independent rows within harness noise. Official HLE no-tools **8.7%** vs Artificial Analysis HLE **19.3%** reflect different eval sets (no-tools vs HLE-Diamond), not a model flip.
- Context window conflict: Hugging Face / Gemma 4 docs **256K** vs Artificial Analysis model FAQ **260K** — reported, not yet reconciled.

### Normalized scores (1-100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool use + Reasoning + Context window + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 65/100.** τ2-bench retail **85.5%** (Google DeepMind) / average-over-3 **68.2%** (HF card) with native function calling + thinking-mode agentic design → mid-band agentic tool use for an open-weights MoE of this size; capped below the frontier proprietary agentic tier (TB2.1 ~**88%+**).
- **Reasoning: 72/100.** MMLU Pro **82.6%**, AIME 2026 **88.3%**, GPQA Diamond **82.3%**, LiveCodeBench v6 **77.1%**, IFEval **98.5%**, IFBench **72.0%** → strong open-weights reasoning band; HLE no-tools **8.7%** / with-search **17.2%** pulls the absolute ceiling down → capped below proprietary frontier reasoning.
- **Context window: 85/100.** 256K tokens (Hugging Face / Gemma 4 docs; Artificial Analysis **260K**) → mid-high context band for an open-weights model (small Gemma 4 siblings at 128K; this MoE at ~256K).
- **Multimodal: 75/100.** Text, image, and video in / text out with MMMU Pro **73.8%**, MATH-Vision **82.4%**, OmniDocBench **0.149** → strong multimodal band for the MoE tier; text-only out caps the ceiling below omni-proprietary multimodal leaders.
- **Coding: 70/100.** LiveCodeBench v6 **77.1%**, GPQA Diamond **82.3%**, AIME 2026 **88.3%**, Codeforces ELO **1718**, SciCode **40.0%** → mid-high coding band for an open-weights MoE; capped below closed frontier coding tiers on SWE-bench-grade agentic work (no verified public score found for this ID).

- **Cost efficiency: 80/100.** Open weights Apache 2.0 + Gemma API from $0.10 / $0.34 per 1M → high open-weight value; blended ≈ $0.09 per 1M with cache; self-host at $0.

- **Overall Score: 73/100.** Mean of the five quality dims (Tool 65 + Reasoning 72 + Context 85 + Multimodal 75 + Coding 70) / 5 = **73.4** → half-up **73**; Cost efficiency excluded.

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-10-29
- Method: public web research prioritizing official model card/docs (Google DeepMind / Hugging Face `google/gemma-4-26B-A4B-it` + ai.google.dev Gemma 4 docs + arXiv:2607.02770) plus independent benchmarks/reviews (Artificial Analysis Intelligence Index, graysoft benchmark comparison) — official-first with independent benchmark comparison; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemma_4_26B_A4B.md`, using the same headings.
