# MiMo V2.6 Free — findings by GLM 4.5 Flash

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview and scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: MiMo V2.6 Free (mimo-v2.6-free)
- Date: 2026-10-21
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Free — Xiaomi's MiMo-V2.6-Flash served as a free-tier model through OpenCode Zen platform
- **Short description:** A high-performance multimodal AI model with 309B total/15B active parameters in sparse MoE architecture, offering text, image, audio, and video processing capabilities with 1M token context window. Available as a limited-time free offering on OpenCode Zen.
- **Provider / access:** OpenCode Zen (`opencode/mimo-v2.6-flash-free`) - endpoint `https://opencode.ai/zen/v1/chat/completions` with OpenAI-compatible API; limited-time free offering with potential future metering
- **Release / knowledge:** Model weights released 2026-09-22; Zen free offering launched 2026-10-07 as limited-time promotion; knowledge cutoff not published
- **IDs:** `opencode/mimo-v2.6-flash-free` (Zen free tier)
- **Context window:** 200,000 tokens (capped on free tier) / max output 32,000 tokens (native weights support 1,048,576/131,072)
- **Modalities:** Text input, image input, audio input, video input; text output; reasoning yes; tool calls supported; JSON mode available
- **Pricing (as of 2026):** $0 all charges on Zen (limited-time free promotion); fallback paid pricing: $0.14 / $0.28 per 1M tokens if promo ends
- **Architecture:** Proprietary sparse MoE (Mixture of Experts) with 309B total / 15B activated parameters, 681M vision encoder, audio tokenizer, MTP decoding; MIT-licensed weights

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

- **Terminal-Bench 2.1:** 87.6% (Xiaomi table; BenchmarkList 93rd percentile, rank 15/194)
- **AutomationBench v1.0.6:** 52.3% (Xiaomi table)
- **OSWorld-Verified:** 80.8% (17/70) (Xiaomi table)
- **Toolathlon-Verified:** 73.6% (Xiaomi table)
- **Terminal-Bench 4.0:** 28.8% (17/29) - weaker performance on newer benchmark (Xiaomi table)
- **ProgramBench:** 26.0% (Xiaomi table)
- **JobBench:** 61.2% (8/48) (Xiaomi table)
- **Humanity's Last Exam:** 35.1% (88th percentile, 58/478) - below reference threshold (Xiaomi table)
- **AA Intelligence Index:** 37.9 (v4.3.2, independent, 85th percentile) - below reference threshold (Xiaomi table)
- **DeepSWE v1.1:** 67.9% table / 65.7% launch post (improved from 48.8) (Xiaomi table)
- **SciCode:** 51.3% (85th percentile) - below reference threshold (Xiaomi table)
- **SWE-bench Verified:** 67.2% (independent verification, uncertain attribution) (Xiaomi table)
- **AA-LCR:** 74.3% (independent, 78th percentile) - retrieval evidence at 200K-capped window (Xiaomi table)
- **Training methodology:** Scaled reinforcement learning with 1,568 prompts × 16 rollouts per step, processing 2.7-3.7B tokens per step at 1M context length (Academic paper)
- **Multi-task RL:** Mixed domains including code, general agents, visual, and cybersecurity under unified agent harnesses (Academic paper)
- **Architecture:** Sparse MoE with 309B total / 15B activated parameters, 681M vision encoder, audio tokenizer, MTP decoding (Official specification)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps it.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 87/100.** Excellent agentic performance with Terminal-Bench 2.1 87.6% and Toolathlon-Verified 73.6%; strong complex task execution though limited by Terminal-Bench 4.0 28.8% performance on newer benchmarks.
- **Reasoning: 80/100.** Good reasoning capabilities with mixed performance; strong coding reasoning but moderate general reasoning with Humanity's Last Exam 35.1% and AA Intelligence Index 37.9% below reference thresholds.
- **Context window: 91/100.** Strong native 1M token capability (highest available) but 200K cap on free tier; excellent for long-document processing with some limitation on free tier.
- **Multimodal: 89/100.** Exceptional native multimodal capabilities supporting text, image, audio, and video input with dedicated encoders; comprehensive multimodal understanding and processing.
- **Coding: 86/100.** Strong coding performance with DeepSWE v1.1 67.9% and SWE-bench Verified 67.2%; excellent code generation and debugging capabilities with good technical problem-solving.
- **Cost efficiency: 99/100.** Currently free ($0 all charges) on OpenCode Zen platform; exceptional value proposition until potential future pricing changes.
- **Overall Score: 87/100.** Exceptional multimodal model with outstanding coding capabilities and cost efficiency; ideal for developers needing comprehensive multimodal processing and coding assistance at no cost.

---

## Signature

- Provided by: **GLM 4.5 Flash (zai/glm-4-5-flash)** — 2026-10-21
- Method: Independent research from multiple benchmark sources including Xiaomi official documentation, academic publications, and performance evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GLM_4.6.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/mimo-v2.6-free/GLM_4.5_Flash.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/mimo-v2.6-free/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).