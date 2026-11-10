# Hy4 (preview) — findings by Iceman

- Source: Tencent/Hy4-preview
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy4-preview
- **Short description:** Tencent’s Hy4-preview is an open-weight 770B/49B-active MoE model (Apache 2.0) with 1M context, designed for long-context reasoning, coding, and agentic tasks.
- **Provider / access:** Open weights on Hugging Face (`tencent/Hy4-preview`, Apache 2.0 license) and hosted providers. Local metadata lists `tencent/hy4-preview`, hosted ~$0.75/$2.25 per 1M, and `noFreeId`.
- **Release / knowledge:** Hugging Face model card reviewed 2026-11-10. Knowledge cutoff not explicitly stated in reviewed source.
- **IDs:** `Hy4-preview`, `tencent/Hy4-preview`, `Hy4`.
- **Context window:** 1,000,000 tokens (960K input + 64K output per local metadata/card context).
- **Modalities:** Text input/output (text-only).
- **Pricing (as of 2026-11-10):** Open weights free to self-host (Apache 2.0). Hosted ~$0.75/$2.25 per 1M in/out (local metadata); provider pricing varies.
- **Architecture:** Sparse MoE transformer, 770B total / 49B active parameters (per card/metadata), 1M context.

### Raw benchmarks found

> Verified figures below are from the Hugging Face model card for `tencent/Hy4-preview` benchmark table (vendor-reported) unless noted. Local metadata notes an independent Vals Terminal-Bench result (55.1%) lower than vendor-reported; scoring here uses vendor-reported table values with caution.

Agent / tool use:

- Terminal-Bench 2.1: **85.4%** (vendor-reported)
- τ²-Bench: **93.5%**
- BrowseComp: **78.2%**
- Agentic/tool-use capabilities emphasized.

Reasoning / knowledge:

- GPQA Diamond: **92.3%**
- AIME 2025: **96.0%**
- MMLU-Pro: **90.8%**
- HLE: **44.6%**

Coding:

- SWE-bench Verified: **80.5%**
- LiveCodeBench: **85.5%**
- Terminal-Bench 2.1: **85.4%** (vendor-reported)

Long context:

- 1M context supported; no standalone MRCR/RULER/AA-LCR numeric score extracted from reviewed table.

Multimodal:

- Text-only model.

### Normalized scores (1–100)

> Derived from vendor-reported evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded). Scores are provisional given vendor-only benchmark context and noted independent discrepancy for Terminal-Bench.

- **Tool use: 89/100.** Strong vendor-reported agentic/tool results (Terminal-Bench 2.1 85.4%, τ²-Bench 93.5%, BrowseComp 78.2%), treated cautiously due to limited independent verification.
- **Reasoning: 89/100.** Excellent vendor-reported reasoning (GPQA Diamond 92.3%, AIME 2025 96.0%, MMLU-Pro 90.8%, HLE 44.6%).
- **Context window: 94/100.** 1M-token context for long-running agentic and document tasks.
- **Multimodal: 40/100.** Text-only model; no multimodal input capability.
- **Coding: 90/100.** Strong vendor-reported coding/agentic coding (SWE-bench Verified 80.5%, LiveCodeBench 85.5%, Terminal-Bench 2.1 85.4%).
- **Cost efficiency: 86/100.** Apache 2.0 open weights enable self-hosting; hosted pricing (~$0.75/$2.25) is moderate, but large MoE inference is compute-intensive.
- **Overall Score: 80/100.** Mean of the five non-cost dims (89, 89, 94, 40, 90) = 80.4 → 80. Provisional score for long-context, text-only agentic/coding use based primarily on vendor-reported benchmarks.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Hugging Face model card; scores are normalized 1–100 interpretations from vendor-reported benchmark figures and should be interpreted cautiously pending broader independent verification.
- Reference URLs:
  - [Hy4-preview model card (Hugging Face)](https://huggingface.co/tencent/Hy4-preview)
  - Local repository metadata consulted: `model/hy4/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
