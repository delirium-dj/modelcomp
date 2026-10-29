# Flint — findings by Nemotron 3 Ultra 550B A55B

> Source: Recursive (`flint`)
> Date: 2026-10-29 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Flint
- **Short description:** Recursive's first open-weight Mixture-of-Experts coding model (40B total, 2.5B active params), Apache-2.0 licensed, designed for local inference on consumer hardware (single GPU/laptop). Released October 21, 2026.
- **Provider / access:** HuggingFace (`RecursiveSI/flint`), OpenRouter (`recursive/flint:free`), self-host via SGLang/vLLM/llama.cpp (GGUF). Chat Completions API.
- **Release / knowledge:** 2026-10-21; knowledge cutoff not published (trained from scratch in 4 months per Recursive).
- **IDs:** `recursive/flint` (free tier on OpenRouter)
- **Context window:** 262,144 tokens (verified via Recursive blog, HuggingFace card, OpenRouter).
- **Modalities:** Text in, text out; no native image/audio/video/PDF input; reasoning (CoT) yes; tool calls yes (coding agent focus); JSON mode yes.
- **Pricing (as of 2026-10-29):** **FREE** on OpenRouter (subsidized); self-host zero marginal cost; Apache-2.0 license permits commercial use.
- **Architecture:** 39.8B total parameters, ~2.5B active per token (MoE); decoder-only mixture-of-experts; open-weights (Apache-2.0); FP8/NF4/GGUF quantizations available.

### Raw benchmarks found

> Measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- Terminal-Bench 2.1: **54.9%** (Recursive release post, MindStudio blog, Eesel review — Recursive's own harness)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **not listed** (too new for aggregation as of search date)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- IFEval: **95.1%** (Recursive release, MindStudio, HuggingFace card — instruction following eval)

Coding:

- SWE-bench Verified: **74.2%** (Recursive release, MindStudio, MarkTechPost, Reddit r/machinelearningnews — Recursive's own harness)
- SWE-bench Pro v2: **89.7%** (MindStudio blog — Recursive's own harness; note: Pro v2 may differ from standard SWE-Pro)
- SWE-Pro (standard): **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **HumanEval: no verified public score found**; speed: ~131 tok/s on M4 Pro MacBook, ~125+ tok/s on RTX 3090/4090 (Recursive, Eesel, YouTube reviews)

Long context:

- MRCR / RULER / GraphWalks: **no long-context retrieval reported** at 262K window

### Normalized scores (1–100)

> Derived from raw numbers above using methodology in `model-comparison.md`. One-sentence justification citing key evidence; cap stated. **Note: All benchmarks from vendor's own harness — independent replication pending.**

- **Tool use: 65/100.** Terminal-Bench 2.1: 54.9% (vendor harness) is a strong agentic signal; capped by single-harness dependence and no Tau/GDPval/Claw replication.
- **Reasoning: 42/100.** Zero GPQA/HLE/LCR scores; IFEval 95.1% shows strong instruction following but not graduate reasoning. Capped by reasoning evidence gap.
- **Context window: 85/100.** 262K tokens places it in 256K–512K tier (mapping: 85); no retrieval benchmarks to validate effective use.
- **Multimodal: 15/100.** Text-only input/output; no vision, audio, video, or PDF modalities.
- **Coding: 72/100.** SWE-bench Verified 74.2% and SWE-bench Pro v2 89.7% (vendor harness) are exceptional for a 2.5B-active model; capped by single-harness dependence, no HumanEval/LiveCodeBench/SciCode for breadth, and Pro v2 vs standard Pro ambiguity.
- **Cost efficiency: 100/100.** Free on OpenRouter; Apache-2.0 open-weights for zero-cost self-host; best possible cost efficiency.
- **Overall Score: 56/100.** Mean of (65 + 42 + 85 + 15 + 72) / 5 = 55.8 → half-up 56. Best fit: remarkable open-weight local coding agent for consumer hardware; all benchmarks vendor-harness only — independent validation critical.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-29
- Method: public internet research (Recursive blog, HuggingFace card, OpenRouter, MindStudio blog, MarkTechPost, Reddit r/machinelearningnews, Eesel review, YouTube reviews, Shattered.io, Cellcog.ai); scores are normalized 1–100 interpretations, not official vendor scores. **Critical limitation: all benchmarks from Recursive's own evaluation harness — zero independent replications found as of search date.**
- Future sources: add a new file next to this one, e.g. `Flint.md`, using the same headings.