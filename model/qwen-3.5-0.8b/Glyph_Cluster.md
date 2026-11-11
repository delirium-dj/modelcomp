# Qwen 3.5 0.8B — findings by Glyph Cluster

- Source: Qwen / Alibaba Cloud (`Qwen/Qwen3.5-0.8B`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 0.8B
- **Short description:** Alibaba's compact Qwen 3.5 multimodal model (0.8B-class) with native 262K context, Apache-2.0 weights, and text/image/video understanding for edge, prototyping, and task-specific fine-tuning use cases.
- **Provider / access:** Open weights on Hugging Face (`Qwen/Qwen3.5-0.8B`) via Transformers, vLLM, SGLang, and other runtimes; also available through various hosted/free routes depending on provider.
- **Release / knowledge:** Qwen 3.5 release (February 2026 per model/blog context); knowledge cutoff not explicitly stated in verified sources reviewed.
- **IDs:** `Qwen/Qwen3.5-0.8B` (local mapping `opencode/qwen-3.5-0.8b`).
- **Context window:** 262,144 tokens native (model card). Local meta notes 81,920 max output on some provider rows.
- **Modalities:** Text, image, video in; text out (image-text-to-text model).
- **Pricing (as of 2026-11-11):** Apache-2.0 open weights (free self-host); free hosted routes reported in local meta ($0.00/$0.00) subject to provider terms.
- **Architecture:** Causal language model with vision encoder; ~0.9B parameters total (model card/files metadata), 24 layers, hybrid gated attention/delta-net layout, 262K native context.

### Raw benchmarks found

> Benchmarks below are from the official Qwen3.5-0.8B Hugging Face model card. Where thinking/non-thinking values are reported separately, values are cited as shown (some cells are unavailable). "No verified public score found" is used for template categories not reported.

Agent / tool use:

- BFCL-V4 (Thinking): **25.3** (Hugging Face model card, language table)
- TAU2-Bench (Thinking): **11.6** (Hugging Face model card, language table; note card states airline-domain fixes applied per setup)
- Terminal-Bench 2.1: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- MMLU-Pro (Non-Thinking): **29.7** (model card)
- MMLU-Pro (Thinking): **42.3** (model card)
- MMLU-Redux (Thinking): **59.5** (model card)
- GPQA Diamond (Thinking): **11.9** (model card)
- SuperGPQA (Thinking): **21.3** (model card)
- BigBench Extra Hard: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- LiveCodeBench: no verified public score found
- SWE-bench Verified / SWE-Pro: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- AA-LCR (Thinking): **4.7** (model card, long-context table)
- LongBench v2 (Thinking): **26.1** (model card, long-context table)

Multimodal / vision-language (additional evidence, Thinking / Non-thinking as reported):

- MMMU: **49 / 47.4** (model card)
- MMMU-Pro: **31.2 / 31.4** (model card)
- MathVista (mini): **62.2 / 58.6** (model card)
- AI2D_TEST: **69.9 / 68.7** (model card)
- OCRBench: **74.5 / 79.1** (model card)
- VideoMME (w/o sub.): **57.7 / --** (model card)

### Normalized scores (1–100)

> Scores are normalized interpretations from available public evidence, not official vendor scores. Overall = half-up mean of the five quality dims (Tool + Reasoning + Context + Multimodal + Coding) / 5.

- **Tool use: 18/100.** BFCL-V4 25.3 and TAU2-Bench 11.6 (thinking mode, per card setup) show very limited agentic/tool-use reliability at this scale, with no stronger terminal/agent benchmarks reported.
- **Reasoning: 20/100.** MMLU-Pro reaches 42.3 in thinking mode but GPQA Diamond is 11.9 and other advanced reasoning indicators are weak/unreported, consistent with a sub-1B-class model.
- **Context window: 28/100.** Native 262K context is notable, but measured long-context performance is poor (AA-LCR 4.7, LongBench v2 26.1), sharply limiting effective long-context use.
- **Multimodal: 45/100.** Text/image/video inputs with published vision/video benchmark results (e.g. MMMU 49, OCRBench up to 79.1, VideoMME 57.7) provide meaningful multimodal capability for size, though output is text-only and robustness is limited.
- **Coding: 12/100.** No verified SWE-bench/LiveCodeBench/SciCode scores found; the model card positions this size for prototyping/fine-tuning rather than dependable coding performance.
- **Cost efficiency: 100/100.** Apache-2.0 open weights and reported free hosted routes make usage effectively zero-cost.
- **Overall Score: 25/100.** Mean of Tool (18), Reasoning (20), Context (28), Multimodal (45), and Coding (12) = 123/5 = 24.6, rounded half-up to 25; best fit for lightweight multimodal prototyping/edge experiments, not agentic or production coding tasks.

---

## Signature

- Provided by: **Glyph Cluster (glyph-cluster-free)** — 2026-11-11
- Method: Public internet research (Hugging Face model card and local model metadata); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Qwen/Qwen3.5-0.8B — Hugging Face](https://huggingface.co/Qwen/Qwen3.5-0.8B)
  - [Qwen3.5 collection — Hugging Face](https://huggingface.co/collections/Qwen/qwen35)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
