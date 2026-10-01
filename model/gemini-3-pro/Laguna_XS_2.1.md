# Gemini 3 Pro — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro
- **Short description:** Google DeepMind's frontier Pro model (Nov 2025 generation) with 1M context and Deep Think reasoning mode; strong science/reasoning, weaker long-task coding than 3.1 successor.
- **Provider / access:** Google (Gemini API, AI Studio, Vertex AI, model ID `gemini-3-pro-preview` family); OpenAI-compatible endpoints via AI Studio.
- **Release / knowledge:** Released 2025-11-18; knowledge cutoff not publicly disclosed.
- **IDs:** `google/gemini-3-pro` (paid only; no Free ID on Zen).
- **Context window:** 1,000,000 tokens / 65,536 max output; verified via CloudPrice.
- **Modalities:** Text, image in; text out; Deep Think reasoning; tool calling enabled.
- **Pricing (as of 2026-10-01):** $1.00 input / $6.00 output per 1M tokens (GA pricing); paid tier only.
- **Architecture:** Proprietary; deep reasoning focus.

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench agentic: **87**
- Terminal-Bench Hard: **42**
- Terminal-Bench 2.0: **54.2%**
- ScreenSpot-Pro: **72.7%**

Reasoning / knowledge:

- GPQA Diamond: **91**
- AIME 2025: **95%** no-tools / **100%** with code execution
- MMLU-Pro: **90**
- MMMU-Pro: **81%**
- Video-MMMU: **87.6%**

Coding:

- SWE-bench Verified: **76.2%** (launch); Vals AI splits: 88% (<15min) / 74% (15m-1h) / 43% (1-4h) / 33% (4h)
- LiveCodeBench Pro 2439 (normalized 92)

Long context:

- MRCR v2: **77%** at 128K / **26.3%** at 1M

### Normalized scores (1-100)

Derived from benchmarks above using methodology in `model-comparison.md`:

- **Tool use: 80/100.** Tau2 87 + ScreenSpot 72.7% + TB2.0 54.2%; solid Pro tool use; capped by TB-Hard 42.
- **Reasoning: 90/100.** GPQA 91 + AIME 95/100 + MMLU-Pro 90 + Video-MMMU 87.6%; excellent science reasoning; capped by ARC-AGI-2 31.1% novelty gap.
- **Context window: 90/100.** Full 1M verified; MRCR 26.3% at 1M (vs 77% at 128K) caps below saturation tier.
- **Multimodal: 78/100.** Text/image input with MMMU-Pro 81%, Video-MMMU 87.6%; text-only output caps at 70-80 tier.
- **Coding: 85/100.** SWE-V 76.2% + LiveCodeBench Pro 2439; Vals splits show performance decay on long tasks; no SWE-Pro caps higher tier.
- **Cost efficiency: 80/100.** $1/$6 per 1M is premium Pro pricing; good value for frontier.
- **Overall Score: 85/100.** Mean of (80+90+90+78+85)/5 = 84.6 → 85. Best fit: science-heavy reasoning Pro with long-context needs.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: public-internet research (Google DeepMind docs, Artificial Analysis, Vals AI, BenchLM); scores normalized 1-100 interpretations, not official vendor scores. Reference report: `Muse_Spark_1.3.md`.
- Future sources: add a new file next to this one, e.g. `Gemini_4.0.md`, using the same headings.