# Qwen 3.5 4B — findings by Iceman

- Source: Qwen/Qwen3.5-4B
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-4B
- **Short description:** Qwen3.5-4B is an Apache 2.0 dense 4B multimodal model (text/image/video in, text out) in the Qwen 3.5 series, designed for efficient local assistants, light tool use, and coding.
- **Provider / access:** Open weights on Hugging Face (`Qwen/Qwen3.5-4B`, Apache 2.0) and hosted providers. Local metadata lists `opencode/qwen-3.5-4b`, 262K native context (YaRN to ~1M), and free/open-weight availability.
- **Release / knowledge:** Hugging Face model card reviewed 2026-11-10. Knowledge cutoff not explicitly stated in reviewed source.
- **IDs:** `Qwen3.5-4B`, `Qwen/Qwen3.5-4B`.
- **Context window:** 262,144 tokens native; extensible to ~1,010,000 via YaRN (81,920 max output per metadata).
- **Modalities:** Text, image, and video input; text output.
- **Pricing (as of 2026-11-10):** Free Apache 2.0 open weights (self-host $0); hosted pricing varies by provider (local metadata notes verified free hosted lane on SiliconFlow).
- **Architecture:** Dense 4B transformer in Qwen3.5 Gated DeltaNet + sparse MoE hybrid lineage context? (card describes 4B dense model), multimodal vision-language support, thinking/non-thinking modes.

### Raw benchmarks found

> Verified figures below are from the Hugging Face model card benchmark tables for `Qwen/Qwen3.5-4B` (Instruct and/or Thinking as reported).

Agent / tool use:

- BFCL-V4: **55.6** (Instruct)
- TAU2-Bench (avg): **39.5** (Instruct)
- Tool-use/agent capabilities supported, but no Terminal-Bench/SWE-bench agent rows in reviewed table.

Reasoning / knowledge:

- MMLU-Pro: **73.2** (Instruct)
- MMLU-Redux: **84.4** (Instruct)
- GPQA Diamond: **65.8** (Instruct)
- AIME26: **81.3** (Thinking)
- HMMT Feb 25: **77.2** (Thinking)
- HLE: **7.9** (Thinking)

Coding:

- LiveCodeBench v6: **66.8** (Instruct)
- MultiPL-E: **61.0** (Instruct)
- No verified SWE-bench / Terminal-Bench score found in reviewed table.

Long context:

- Native 262K with YaRN extension to ~1M. No standalone MRCR/RULER/AA-LCR numeric score extracted from reviewed table.

Multimodal:

- MMMU: **66.1** (Instruct)
- MathVista: **84.4** (Instruct)
- MathVision: **72.1** (Instruct)
- OCRBench: **83.1** (Instruct)
- Video-MME: **69.0** (Instruct)

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded). Small 4B dense model.

- **Tool use: 70/100.** Decent lightweight tool-calling/agent benchmark signals (BFCL-V4 55.6, TAU2-Bench avg 39.5) but limited heavy agentic coding evidence.
- **Reasoning: 74/100.** Strong for size in some areas (AIME26 81.3, HMMT 77.2, MMLU-Redux 84.4) with moderate GPQA (65.8) and low HLE (7.9).
- **Context window: 90/100.** 262K native with YaRN extension to ~1M, good for a 4B model.
- **Multimodal: 80/100.** Solid multimodal/vision performance for size (MMMU 66.1, MathVista 84.4, MathVision 72.1, OCRBench 83.1, Video-MME 69.0).
- **Coding: 72/100.** Moderate coding capability (LiveCodeBench v6 66.8, MultiPL-E 61.0) without strong agentic coding benchmarks.
- **Cost efficiency: 98/100.** Apache 2.0 open weights, very small footprint for local/self-hosted use, and available free hosted lanes.
- **Overall Score: 77/100.** Mean of the five non-cost dims (70, 74, 90, 80, 72) = 77.2 → 77. Best fit as a highly efficient small multimodal assistant for local/light coding and tool use.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Hugging Face model card; scores are normalized 1–100 interpretations from verified benchmark figures, not official vendor scores.
- Reference URLs:
  - [Qwen3.5-4B model card (Hugging Face)](https://huggingface.co/Qwen/Qwen3.5-4B)
  - Local repository metadata consulted: `model/qwen-3.5-4b/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
