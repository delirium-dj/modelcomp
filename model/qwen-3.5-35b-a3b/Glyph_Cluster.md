# Qwen3.5-35B-A3B — findings by Glyph Cluster

- Source: Alibaba / Qwen (`Qwen/Qwen3.5-35B-A3B`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-35B-A3B
- **Short description:** Alibaba Qwen's 35B-total / ~3B-active sparse MoE multimodal vision-language model in the Qwen3.5 family, optimized for efficient reasoning, coding, agentic tool use, and image/video understanding. Distinct from dense Qwen3.5-27B and other Qwen3.5 variants.
- **Provider / access:** Open weights via [Hugging Face `Qwen/Qwen3.5-35B-A3B`](https://huggingface.co/Qwen/Qwen3.5-35B-A3B); hosted APIs available through providers (OpenRouter/provider ecosystem may vary by exact ID). Chat-completions/OpenAI-compatible interfaces supported by common runtimes.
- **Release / knowledge:** Released as part of Qwen3.5 family (February 2026 context per family materials). Knowledge/training cutoff not explicitly stated in fetched sources.
- **IDs:** `Qwen/Qwen3.5-35B-A3B` (Hugging Face)
- **Context window:** 262,144 tokens natively, extensible to ~1,010,000 tokens with RoPE scaling (per Hugging Face model card).
- **Modalities:** Text and image input natively; video input supported via frame processing in compatible runtimes. Text output. Reasoning/thinking mode supported by default; tool calling supported.
- **Pricing (as of 2026-11-10):** Open weights (Apache 2.0). Hosted API pricing varies by provider; no single canonical provider price extracted from fetched sources for this exact ID.
- **Architecture:** Sparse Mixture-of-Experts causal multimodal model, 35B total parameters with ~3B activated (per Hugging Face model card), Apache 2.0 license.

### Raw benchmarks found

> Numbers below are for the exact Qwen3.5-35B-A3B model as reported by cited sources. Not all requested benchmark rows have verified public scores.

Agent / tool use:

- TAU2-Bench: **81.2%** (Hugging Face model card, language benchmark table)
- BFCL-V4: **67.3%** (Hugging Face model card)
- VITA-Bench: **31.9%** (Hugging Face model card)
- DeepPlanning: **22.8%** (Hugging Face model card)
- BrowseComp: **61.0%** (Hugging Face model card, search agent setting)
- Terminal-Bench 2.1 / GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **84.2%** (Hugging Face model card)
- HLE (w/ CoT): **22.4%** (Hugging Face model card)
- HLE (w/ tool): **47.4%** (Hugging Face model card, search agent setting)
- MMLU-Pro: **85.3%** (Hugging Face model card)
- MMLU-Redux: **93.3%** (Hugging Face model card)
- SuperGPQA: **63.4%** (Hugging Face model card)
- HMMT Feb 25: **89.0%** (Hugging Face model card)
- Artificial Analysis Intelligence Index: no verified public score found in accessible fetched sources
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **69.2%** (Hugging Face model card)
- LiveCodeBench v6: **74.6%** (Hugging Face model card)
- Terminal Bench 2: **40.5%** (Hugging Face model card)
- CodeForces (internal query set): **2028** (Hugging Face model card)
- OJBench: **36.0%** (Hugging Face model card)

Long context:

- Context window: **262K tokens native** (extensible to ~1.01M with YaRN/RoPE scaling) (Hugging Face model card)
- AA-LCR: **58.5%** (Hugging Face model card)
- LongBench v2: **59.0%** (Hugging Face model card)

Multimodal (additional evidence):

- MMMU: **81.4%** (Hugging Face model card, vision-language table)
- MMMU-Pro: **75.1%** (Hugging Face model card)
- MathVista (mini): **86.2%** (Hugging Face model card)
- VideoMME (w/ sub.): **86.6%** (Hugging Face model card)

### Normalized scores (1–100)

> Derived from the raw numbers above using the methodology in `model-comparison.md`. Scores are normalized interpretations, not official vendor scores.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. **NEVER include Cost efficiency**.

- **Tool use: 77/100.** Strong TAU2-Bench (81.2%) and capable search-agent results (BrowseComp 61.0%, HLE w/ tool 47.4%) indicate good agentic/tool-use performance for an efficient MoE model; capped by moderate BFCL-V4 (67.3%) and limited verified terminal/MCP benchmark coverage.
- **Reasoning: 82/100.** High reasoning/knowledge performance (GPQA Diamond 84.2%, MMLU-Pro 85.3%, MMLU-Redux 93.3%, HMMT Feb 25 89.0%) with moderate hard-eval results (HLE w/ CoT 22.4%, SuperGPQA 63.4%) supports strong reasoning for its active parameter count.
- **Context window: 80/100.** Large 262K native context (extensible) and reasonable long-context benchmark results (AA-LCR 58.5%, LongBench v2 59.0%) indicate good but not top-tier long-context effectiveness.
- **Multimodal: 72/100.** Solid multimodal performance across image/video/document benchmarks (MMMU 81.4%, MMMU-Pro 75.1%, MathVista 86.2%, VideoMME 86.6%) with text-only output; capped relative to frontier omni models.
- **Coding: 75/100.** Competitive coding results (SWE-bench Verified 69.2%, LiveCodeBench v6 74.6%, Terminal Bench 2 40.5%, CodeForces 2028) for an efficient 3B-active MoE; capped by lower coding/terminal scores than larger Qwen3.5 variants.
- **Cost efficiency: 88/100.** Sparse MoE design (3B active parameters) and open weights suggest strong inference efficiency/value potential in suitable deployments, though hosted pricing varies by provider.
- **Overall Score: 77/100.** Mean of the five non-cost dims (77, 82, 80, 72, 75) = 77.2 → 77 (half-up). Best fit as an efficient open multimodal reasoning/coding model with strong tool-use and good long-context support at low active compute.

---

## Signature

- Provided by: **Glyph Cluster (kilocode/glyph-cluster-free)** — 2026-11-10 UTC
- Method: Fresh public web research via accessible sources (Hugging Face model card); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face — Qwen/Qwen3.5-35B-A3B](https://huggingface.co/Qwen/Qwen3.5-35B-A3B)
  - [Qwen3.5 blog](https://qwen.ai/blog?id=qwen3.5)
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
