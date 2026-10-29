# Ling 2.6 1T — findings by Nemotron 3 Ultra 550B A55B

> Source: inclusionAI (`ling-2.6-1t`)
> Date: 2026-10-29 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 2.6 1T
- **Short description:** Ant Group's inclusionAI trillion-parameter Mixture-of-Experts flagship model, using hybrid MLA + Linear Attention for high inference efficiency. Open-weight, optimized for agentic coding, tool use, and complex multi-step reasoning.
- **Provider / access:** inclusionAI API, Novita AI, OpenRouter (`inclusionai/ling-2.6-1t`), Puter, vLLM/SGLang self-host. Chat Completions API.
- **Release / knowledge:** 2026-04-23 release; knowledge cutoff not explicitly stated (training corpus 29T tokens per vLLM recipes).
- **IDs:** `inclusionai/ling-2.6-1t` (free tier available on OpenRouter)
- **Context window:** 262,144 tokens total; max output 32,768 tokens (verified via HuggingFace card, Novita AI blog, OpenRouter).
- **Modalities:** Text in, text out; no native image/audio/video/PDF input; reasoning (CoT) yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-29):** Novita AI: $0.30 / 1M input, $2.50 / 1M output; OpenRouter: free (subsidized, rate-limited); Puter: $0.30 / $2.50; inclusionAI direct: $0.08 / $0.65 per 1M compute units. Free tier on OpenRouter has daily rate limits.
- **Architecture:** 1T total parameters, ~50–63B active per token (MoE); hybrid MLA (Multi-head Latent Attention) + Linear Attention; open-weights (Apache-2.0 via HuggingFace); BailingMoeV2_5 FP8.

### Raw benchmarks found

> Measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found** (vendor claims "strong on reasoning" but no published GPQA)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **~58 / rank ~38** (Artificial Analysis percentile estimate from comparison pages)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified: **90.0%** (inclusionAI HuggingFace card, Kilocode model page — vendor-reported, open-source SOTA claim; harness: Mini-SWE-agent or equivalent)
- SWE-bench Verified (secondary): **75.0%** (MindStudio blog, independent test; same harness)
- SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **AIME26: state-of-the-art** (OpenRouter model page, vendor claim); **SWE-bench long-context (128K): 90.0%** (Threads benchmark points post referencing GPT-5.1 comparison)

Long context:

- MRCR / RULER / GraphWalks: **no long-context retrieval reported** at 262K window (vendor claims 128K SWE-bench at 90%)

### Normalized scores (1–100)

> Derived from raw numbers above using methodology in `model-comparison.md`. One-sentence justification citing key evidence; cap stated.

- **Tool use: 58/100.** No Terminal-Bench, Tau, or standardized agentic suite scores; capped by absence despite vendor claims of "reliable multi-step execution" and tool-calling design.
- **Reasoning: 52/100.** Zero published GPQA/HLE/LCR scores; capped by evidence gap. Vendor claims "enhanced reasoning" and AIME26 SOTA but no verified graduate-reasoning benchmark.
- **Context window: 85/100.** 262K tokens places it in 256K–512K tier (mapping: 85); vendor claims 90% SWE-bench at 128K context but no MRCR/RULER retrieval validation.
- **Multimodal: 15/100.** Text-only input/output; no vision, audio, video, or PDF modalities.
- **Coding: 78/100.** SWE-bench Verified 75–90% (vendor 90%, independent 75%) is strong real-repo signal; capped by single-benchmark dependence and harness variance. No LiveCodeBench, SciCode, or VibeCodeBench for breadth.
- **Cost efficiency: 92/100.** Free on OpenRouter; paid tiers ~$0.30/$2.50 per 1M — very competitive for 1T MoE flagship. Only fully free self-hosted models score higher.
- **Overall Score: 58/100.** Mean of (58 + 52 + 85 + 15 + 78) / 5 = 57.6 → half-up 58. Best fit: exceptional open-weight coding/agentic model for self-host or free API use; reasoning breadth unverified.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-29
- Method: public internet research (inclusionAI HuggingFace card, Artificial Analysis, OpenRouter, Novita AI blog, MindStudio blog, vLLM recipes, Kilocode, Reddit LocalLLaMA, Threads benchmark posts); scores are normalized 1–100 interpretations, not official vendor scores. Key SWE-bench scores are vendor-reported with one independent replication at lower value.
- Future sources: add a new file next to this one, e.g. `Ling_2.6_1T.md`, using the same headings.