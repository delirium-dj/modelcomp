# Gemma 4 31B — findings by Glyph Cluster

- Source: Google (`google/gemma-4-31B-it`, Gemma 4 31B reasoning/instruction-tuned)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 31B (IT, reasoning-capable)
- **Short description:** Google DeepMind's 31B dense Gemma 4 open-weights multimodal model for reasoning, coding, and agentic tasks. It is a larger dense variant in the Gemma 4 family (distinct from E2B/E4B/12B/26B A4B).
- **Provider / access:** Open weights via [Hugging Face `google/gemma-4-31B-it`](https://huggingface.co/google/gemma-4-31B-it); also served by third-party providers/APIs (e.g. OpenRouter `google/gemma-4-31b-it`). Chat-completions style interfaces vary by provider.
- **Release / knowledge:** Released April 2026 (per Artificial Analysis); pre-training cutoff stated as January 2025 on the model card.
- **IDs:** `google/gemma-4-31B-it` (Hugging Face), `google/gemma-4-31b-it` (OpenRouter)
- **Context window:** 256K tokens (per Hugging Face model card and Artificial Analysis).
- **Modalities:** Text and image input, text output (per Hugging Face 31B spec table; Gemma 4 family can process video as frames). Reasoning/thinking mode supported; tool/function calling supported in compatible runtimes.
- **Pricing (as of 2026-11-10):** Open weights (self-hosting). Hosted API pricing varies by provider (e.g. OpenRouter listings range roughly ~$0.10–$0.75/M input and ~$0.10–$1.15/M output depending on provider/variant; see OpenRouter page). Free/community tiers may exist but terms vary.
- **Architecture:** Dense transformer, ~30.7B parameters (per Hugging Face/AA), Apache 2.0 license.

### Raw benchmarks found

> Numbers below are for the exact Gemma 4 31B IT model as reported by cited sources. Not all requested benchmark rows have verified public scores.

Agent / tool use:

- Tau2 (average over 3): **76.9%** (Hugging Face model card benchmark table)
- BFCL / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- Terminal-Bench 2.1 / GDPval-AA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **84.3%** (Hugging Face model card)
- HLE (no tools): **19.5%** (Hugging Face model card)
- HLE (with search): **26.5%** (Hugging Face model card)
- MMLU-Pro: **85.2%** (Hugging Face model card)
- BigBench Extra Hard: **74.4%** (Hugging Face model card)
- AIME 2026 (no tools): **89.2%** (Hugging Face model card)
- Artificial Analysis Intelligence Index: **4** (Artificial Analysis model page; lower-end class ranking in AA snapshot)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- LiveCodeBench v6: **80.0%** (Hugging Face model card)
- Codeforces ELO: **2150** (Hugging Face model card)
- SWE-bench Verified / SWE-Pro / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- MRCR v2 8-needle 128k (average): **66.4%** (Hugging Face model card)
- Context window: **256K tokens** (Hugging Face model card / Artificial Analysis)

Multimodal (additional evidence):

- MMMU Pro: **76.9%** (Hugging Face model card)
- MathVision: **85.6%** (Hugging Face model card)
- OmniDocBench 1.5 (avg edit distance, lower better): **0.131** (Hugging Face model card)

### Normalized scores (1–100)

> Derived from the raw numbers above using the methodology in `model-comparison.md`. Scores are normalized interpretations, not official vendor scores.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. **NEVER include Cost efficiency**.

- **Tool use: 75/100.** Tau2 average of 76.9% indicates solid agentic/tool-use capability for an open 31B model, and the model supports function calling in compatible runtimes; capped by lack of verified BFCL/Terminal-Bench/MCP-Atlas/GDPval-AA results in accessible sources.
- **Reasoning: 80/100.** Strong knowledge/reasoning signals (GPQA Diamond 84.3%, MMLU-Pro 85.2%, AIME 2026 89.2%, BigBench Extra Hard 74.4%) balanced against harder long-tail evaluation (HLE 19.5% no tools / 26.5% with search) and a low AA Intelligence Index snapshot (4).
- **Context window: 78/100.** 256K-token window with reported MRCR v2 8-needle 128k average of 66.4% shows usable long-context behavior, but not top-tier long-context retrieval reliability at extreme lengths.
- **Multimodal: 65/100.** Supports image input and strong reported vision benchmarks (MMMU Pro 76.9%, MathVision 85.6%, OmniDocBench 0.131 edit distance) for an open 31B model; capped relative to frontier multimodal systems by narrower modality/output breadth and limited public evidence on video/audio-native performance for this specific 31B variant.
- **Coding: 79/100.** LiveCodeBench v6 80.0% and Codeforces ELO 2150 indicate strong coding/reasoning-in-code performance; capped by absence of verified SWE-bench Verified/SWE-Pro and terminal-agent benchmark scores in accessible sources.
- **Cost efficiency: 85/100.** Open weights (Apache 2.0) enable self-hosting and competitive third-party API pricing in some deployments, offering good value for capability; practical cost depends on provider/quantization/runtime.
- **Overall Score: 75/100.** Mean of the five non-cost dims (75, 80, 78, 65, 79) = 75.4 → 75 (half-up). Best fit as a capable open multimodal reasoning/coding model with strong benchmark results for its size, moderate long-context/tooling evidence, and limited frontier-grade hard-eval coverage in public sources.

---

## Signature

- Provided by: **Glyph Cluster (kilocode/glyph-cluster-free)** — 2026-11-10 UTC
- Method: Fresh public web research via accessible sources (Hugging Face model card, Artificial Analysis, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face — google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)
  - [Artificial Analysis — Gemma 4 31B (Reasoning)](https://artificialanalysis.ai/models/gemma-4-31b)
  - [OpenRouter — google/gemma-4-31b-it](https://openrouter.ai/google/gemma-4-31b-it)
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
