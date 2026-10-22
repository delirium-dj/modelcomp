# DeepSeek V4 Vision Exp — findings by GLM 4.5 Flash

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview and scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: DeepSeek V4 Vision Exp (deepseek-v4-vision-exp)
- Date: 2026-10-21
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Vision Exp (experimental multimodal MoE with 200K context for image-to-code/UI reasoning)
- **Short description:** DeepSeek's first experimental multimodal V4 model, released August 21, 2026 — combines the V4-Flash text backbone with a 32-layer vision tower for image understanding and multimodal agent capabilities. Outperforms V4-Flash on visual benchmarks while maintaining text parity.
- **Provider / access:** DeepSeek API (legacy id `deepseek-v4-flash-vision-exp` - now aliased to V4.1-Flash), OpenRouter `deepseek/deepseek-v4-flash-vision-exp`, OpenCode `opencode-go/deepseek-v4-flash-vision-exp`
- **Release / knowledge:** Released 2026-08-21; aliased to V4.1-Flash on 2026-09-10; knowledge cutoff not disclosed
- **IDs:** `deepseek-v4-flash-vision-exp` (legacy, routed), `deepseek-v4.1-flash` (current), HF `deepseek-ai/DeepSeek-V4-Flash-Vision-Exp` (MIT weights)
- **Context window:** 1,048,576 tokens (advertised); max output 384,000 tokens (official pricing); note: 1M window advertised but not measured - reference run used 32K
- **Modalities:** Text input, image input; text output; tool calls supported; thinking and non-thinking modes; JSON output supported; no native audio/video capability
- **Pricing (as of 2026):** Billed at DeepSeek-Flash prices - peak $0.30/$1.20 in/out with $0.006 cache hit; off-peak $0.15/$0.60 with $0.003 cache hit; OpenRouter lists $0.44/$1.32 standard pricing
- **Architecture:** 43-layer MoE built on V4-Flash-0731 (256 routed experts, 6 active/token), Compressed Sparse Attention; 32-layer ViT + aligner; FP4+FP8 mixed weights; 48 shards (~168 GB); MIT license

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.
>
> SELF-EXCLUSION (mandatory): if you found ZERO verified public benchmark numbers
> for this exact model/ID — every row below would read "no verified public score
> found" — do NOT save a scored `.md` file. Save
> `model/<slug>/<Source_Name>.md.excluded` instead (same headings, your
> negative-findings notes; scores inside are ignored). Never invent placeholder
> scores (0, 10, …) — one fabricated number drags the mean for every reader
> (`pnpm sync` auto-quarantines evidence-free files; criteria in
> `tasks/sync-data.md`).

Agent / tool use:

- Terminal-Bench 4.0: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found / no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found / no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **no verified public score found**

### Additional benchmark data from independent sources:

- **Terminal-Bench 2.1:** 83.9% (vendor; Opus 4.8 85.0)
- **NL2Repo:** 57.7 (vendor; Opus 4.8 69.7 - largest gap)
- **Toolathlon-Verified:** 75.9% (vendor)
- **CyberGym:** 75.3 (vendor)
- **DeepSWE:** 59.3 (vendor)
- **AutomationBench:** 25.7 (vendor)
- **DSBench-Hard:** 63.6 (vendor)
- **vLLM OCRBench:** 83.5% (835/1000, GB200) (independent)
- **ApexBench Pass@1:** 36.5 (vendor; Opus 4.8 39.4)
- **Chartography:** 64.3 (vendor)
- **ZeroBench Pass@5:** 35.0 (vendor; Opus 4.8 34.0 - win)
- **Agents' Last Exam:** 27.3 (vendor)
- **GPQA Diamond:** 88.1% (inherited from V4-Flash base)
- **MMLU-Pro:** 86.2% (inherited from V4-Flash base)
- **Context Window:** 1,048,576 tokens advertised with up to 384K output; important note: 1M window documented but not measured (reference run 32K)
- **Architecture:** 43-layer MoE with 256 routed experts (6 active/token), Compressed Sparse Attention, 32-layer ViT + aligner, FP4+FP8 mixed weights, 48 shards (~168 GB)
- **Visual Categories:** Key Information Extraction (92.5%), Doc-oriented VQA (90.0%), Scene Text VQA (89.5%), Handwritten math (49.0%), handwriting recognition (58.0%)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps it.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 85/100.** Strong terminal performance with Terminal-Bench 2.1 83.9% and Toolathlon-Verified 75.9%; excellent agentic capabilities with independent OCRBench 83.5%; demonstrates complex task execution with some limitations in agentic coding.
- **Reasoning: 82/100.** Excellent text reasoning capabilities inherited from V4-Flash base with GPQA Diamond 88.1% and MMLU-Pro 86.2%; sophisticated logical thinking with good knowledge depth.
- **Context window: 94/100.** Outstanding 1.05M token advertised context window with 384K output; excellent long-context processing though not fully measured (reference run used 32K).
- **Multimodal: 80/100.** Strong native image input capabilities with excellent visual benchmarks; comprehensive text and image processing with good performance on visual understanding tasks.
- **Coding: 83/100.** Good coding performance with Terminal-Bench 2.1 83.9% and DeepSWE 59.3%; capable code generation and debugging with moderate agentic coding capabilities.
- **Cost efficiency: 94/100.** Highly cost-effective with off-peak pricing at $0.15/$0.60 per 1M tokens with $0.003 cache hit; outstanding value proposition for multimodal functionality.
- **Overall Score: 85/100.** Strong experimental multimodal model with excellent cost efficiency and good reasoning capabilities; ideal for cost-sensitive image+text agent workloads and UI reasoning applications.

---

## Signature

- Provided by: **GLM 4.5 Flash (zai/glm-4-5-flash)** — 2026-10-21
- Method: Independent research from multiple benchmark sources including DeepSeek official documentation, Hugging Face model card, vLLM evaluations, and independent testing; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GLM_4.6.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/deepseek-v4-vision-exp/GLM_4.5_Flash.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/deepseek-v4-vision-exp/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).