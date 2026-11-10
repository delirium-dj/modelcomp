# Gemma 4 12B Unified — findings by Glyph Cluster

- Source: Google (`google/gemma-4-12B-it`, Gemma 4 12B Unified)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 12B Unified (IT)
- **Short description:** Google DeepMind's encoder-free Gemma 4 12B unified multimodal open-weights model supporting text, image, and audio inputs with text output, designed for efficient local/on-device-capable reasoning and multimodal understanding.
- **Provider / access:** Open weights via [Hugging Face `google/gemma-4-12B-it`](https://huggingface.co/google/gemma-4-12B-it); also servable via compatible runtimes.
- **Release / knowledge:** Released as part of Gemma 4 family (April 2026). Pre-training cutoff stated as January 2025 on the model card.
- **IDs:** `google/gemma-4-12B-it` (Hugging Face), Gemma 4 12B Unified (product name)
- **Context window:** 256K tokens (per Hugging Face model card).
- **Modalities:** Text, image, and audio input; text output (per Hugging Face 12B Unified spec and model card). Video can be processed as frame sequences in supported setups. Reasoning/thinking mode supported.
- **Pricing (as of 2026-11-10):** Open weights (Apache 2.0). Hosted API pricing varies by provider; no canonical hosted price extracted from fetched sources.
- **Architecture:** Dense unified (encoder-free) transformer, ~11.95B parameters (per Hugging Face), Apache 2.0 license.

### Raw benchmarks found

> Numbers below are for the exact Gemma 4 12B Unified model as reported by cited sources. Not all requested benchmark rows have verified public scores.

Agent / tool use:

- Tau2 (average over 3): **69.0%** (Hugging Face model card benchmark table)
- BFCL / Terminal-Bench 2.1 / GDPval-AA / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **78.8%** (Hugging Face model card)
- HLE (no tools): **5.2%** (Hugging Face model card)
- MMLU-Pro: **77.2%** (Hugging Face model card)
- BigBench Extra Hard: **53.0%** (Hugging Face model card)
- AIME 2026 (no tools): **77.5%** (Hugging Face model card)
- Artificial Analysis Intelligence Index: no verified public score found in accessible fetched sources

Coding:

- LiveCodeBench v6: **72.0%** (Hugging Face model card)
- Codeforces ELO: **1659** (Hugging Face model card)
- SWE-bench Verified / SWE-Pro / SciCode: no verified public score found

Long context:

- MRCR v2 8-needle 128k (average): **43.4%** (Hugging Face model card)
- Context window: **256K tokens** (Hugging Face model card)

Multimodal (additional evidence):

- MMMU Pro: **69.1%** (Hugging Face model card)
- MathVision: **79.7%** (Hugging Face model card)
- OmniDocBench 1.5 (avg edit distance, lower better): **0.164** (Hugging Face model card)
- Audio: CoVoST **38.5*** / FLEURS **0.069*** (*excluding Chinese language, per model card)

### Normalized scores (1–100)

> Derived from the raw numbers above using the methodology in `model-comparison.md`. Scores are normalized interpretations, not official vendor scores.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. **NEVER include Cost efficiency**.

- **Tool use: 68/100.** Tau2 average of 69.0% indicates reasonable agentic/tool-use capability for a 12B unified model, with native function-calling support; capped by lack of verified BFCL/Terminal-Bench/GDPval-AA results.
- **Reasoning: 72/100.** Solid reasoning/knowledge results for size (GPQA Diamond 78.8%, MMLU-Pro 77.2%, AIME 2026 77.5%) but weaker hard-eval performance (HLE 5.2%, BigBench Extra Hard 53.0%).
- **Context window: 72/100.** 256K-token context window is strong, but MRCR v2 8-needle 128k average of 43.4% indicates moderate long-context retrieval effectiveness.
- **Multimodal: 70/100.** Unified native support for text/image/audio inputs (and frame-based video processing) with good vision/audio benchmark evidence for its class (MMMU Pro 69.1%, MathVision 79.7%, CoVoST/FLEURS reported); capped by text-only output and lower absolute multimodal scores than larger/frontier models.
- **Coding: 70/100.** Capable coding for its size (LiveCodeBench v6 72.0%, Codeforces ELO 1659) but below stronger Gemma 4/Qwen variants; capped by absence of verified SWE-bench/terminal-agent benchmarks.
- **Cost efficiency: 90/100.** Open weights and compact 12B unified architecture support efficient local/edge deployment, offering strong value for multimodal capability.
- **Overall Score: 70/100.** Mean of the five non-cost dims (68, 72, 72, 70, 70) = 70.4 → 70 (half-up). Best fit as an efficient open unified multimodal model for local/consumer deployments needing text-image-audio understanding with moderate reasoning and coding strength.

---

## Signature

- Provided by: **Glyph Cluster (kilocode/glyph-cluster-free)** — 2026-11-10 UTC
- Method: Fresh public web research via accessible sources (Hugging Face model card); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face — google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
