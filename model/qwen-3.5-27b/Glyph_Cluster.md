# Qwen3.5-27B — findings by Glyph Cluster

- Source: Alibaba / Qwen (`Qwen/Qwen3.5-27B`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-27B
- **Short description:** Alibaba Qwen's 27B dense multimodal vision-language model in the Qwen3.5 family, designed for reasoning, coding, agentic tool use, and image/video understanding. Distinct from Qwen3.5 MoE variants and larger/smaller dense siblings.
- **Provider / access:** Open weights via [Hugging Face `Qwen/Qwen3.5-27B`](https://huggingface.co/Qwen/Qwen3.5-27B); hosted APIs available through providers (e.g. OpenRouter `qwen/qwen3.5-27b`, Alibaba Cloud). Chat-completions/OpenAI-compatible interfaces supported by common runtimes.
- **Release / knowledge:** Released February 2026 (per Artificial Analysis). Knowledge/training cutoff not explicitly stated in fetched sources.
- **IDs:** `Qwen/Qwen3.5-27B` (Hugging Face), `qwen/qwen3.5-27b` (OpenRouter)
- **Context window:** 262,144 tokens natively, extensible to ~1,010,000 tokens with RoPE scaling (per Hugging Face model card).
- **Modalities:** Text and image input natively; video input supported via frame processing in compatible runtimes. Text output. Reasoning/thinking mode supported by default; tool calling supported.
- **Pricing (as of 2026-11-10):** Open weights (Apache 2.0). Hosted API pricing varies by provider (e.g. OpenRouter listings roughly ~$0.195–$0.30/M input and ~$1.56–$2.60/M output depending on provider; see OpenRouter page).
- **Architecture:** Dense causal multimodal model, ~27.8B parameters (AA), Apache 2.0 license.

### Raw benchmarks found

> Numbers below are for the exact Qwen3.5-27B model as reported by cited sources. Not all requested benchmark rows have verified public scores.

Agent / tool use:

- TAU2-Bench: **79.0%** (Hugging Face model card, language benchmark table)
- BFCL-V4: **68.5%** (Hugging Face model card)
- VITA-Bench: **41.9%** (Hugging Face model card)
- DeepPlanning: **22.6%** (Hugging Face model card)
- BrowseComp: **61.0%** (Hugging Face model card, search agent setting)
- Terminal-Bench 2.1 / GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **85.5%** (Hugging Face model card)
- HLE (w/ CoT): **24.3%** (Hugging Face model card)
- HLE (w/ tool): **48.5%** (Hugging Face model card, search agent setting)
- MMLU-Pro: **86.1%** (Hugging Face model card)
- MMLU-Redux: **93.2%** (Hugging Face model card)
- SuperGPQA: **65.6%** (Hugging Face model card)
- AIME-like/HMMT Feb 25: **92.0%** (Hugging Face model card)
- Artificial Analysis Intelligence Index: no verified public score found (AA snapshot reported N/A/unavailable)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **72.4%** (Hugging Face model card)
- LiveCodeBench v6: **80.7%** (Hugging Face model card)
- Terminal Bench 2: **41.6%** (Hugging Face model card)
- CodeForces (internal query set): **1899** (Hugging Face model card)
- OJBench: **40.1%** (Hugging Face model card)

Long context:

- Context window: **262K tokens native** (extensible to ~1.01M with YaRN/RoPE scaling) (Hugging Face model card)
- AA-LCR: **66.1%** (Hugging Face model card)
- LongBench v2: **60.6%** (Hugging Face model card)

Multimodal (additional evidence):

- MMMU: **82.3%** (Hugging Face model card, vision-language table)
- MMMU-Pro: **75.0%** (Hugging Face model card)
- MathVista (mini): **87.8%** (Hugging Face model card)
- VideoMME (w/ sub.): **87.0%** (Hugging Face model card)

### Normalized scores (1–100)

> Derived from the raw numbers above using the methodology in `model-comparison.md`. Scores are normalized interpretations, not official vendor scores.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. **NEVER include Cost efficiency**.

- **Tool use: 76/100.** Strong agentic/tool-use signals (TAU2-Bench 79.0%, BFCL-V4 68.5%) and search-agent results (BrowseComp 61.0%, HLE w/ tool 48.5%) indicate capable tool use; capped by weaker planning/vita scores and lack of verified Terminal-Bench 2.1/MCP-Atlas/GDPval-AA public numbers.
- **Reasoning: 83/100.** High reasoning/knowledge performance (GPQA Diamond 85.5%, MMLU-Pro 86.1%, MMLU-Redux 93.2%, HMMT Feb 25 92.0%) with moderate hard-eval results (HLE w/ CoT 24.3%, SuperGPQA 65.6%) supports strong but not frontier-max reasoning.
- **Context window: 80/100.** Large 262K native context (extensible) with solid long-context results (AA-LCR 66.1%, LongBench v2 60.6%) indicates good long-context capability, though not perfect at extreme retrieval/reasoning lengths.
- **Multimodal: 72/100.** Broad multimodal competence across image/video/document benchmarks (MMMU 82.3%, MMMU-Pro 75.0%, MathVista 87.8%, VideoMME 87.0%) with text-only output; capped by not being a fully omni-output frontier multimodal system in this exact configuration.
- **Coding: 78/100.** Strong coding evidence (SWE-bench Verified 72.4%, LiveCodeBench v6 80.7%, Terminal Bench 2 41.6%) for a 27B dense model; capped by mid-tier contest/terminal-agent scores relative to top coding specialists.
- **Cost efficiency: 75/100.** Open weights plus relatively accessible hosted pricing provide good value, but hosted token pricing is not ultra-low compared with smaller/cheaper models in some providers.
- **Overall Score: 78/100.** Mean of the five non-cost dims (76, 83, 80, 72, 78) = 77.8 → 78 (half-up). Best fit as a strong open multimodal reasoning/coding model with good tool-use and long-context support for its size.

---

## Signature

- Provided by: **Glyph Cluster (kilocode/glyph-cluster-free)** — 2026-11-10 UTC
- Method: Fresh public web research via accessible sources (Hugging Face model card, Artificial Analysis, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face — Qwen/Qwen3.5-27B](https://huggingface.co/Qwen/Qwen3.5-27B)
  - [Artificial Analysis — Qwen3.5 27B (Reasoning)](https://artificialanalysis.ai/models/qwen3-5-27b)
  - [OpenRouter — qwen/qwen3.5-27b](https://openrouter.ai/qwen/qwen3.5-27b)
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
