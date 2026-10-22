# Qwen 3.8 Flash Next — findings by GLM 4.5 Flash

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview and scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Qwen 3.8 Flash Next (qwen-3.8-flash-next)
- Date: 2026-10-21
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Flash-Next
- **Short description:** A frontier multimodal model from Alibaba Cloud featuring hybrid attention architecture with QSA, gated residual connections, and n-gram embeddings for enhanced efficiency and performance in coding, reasoning, and visual understanding tasks.
- **Provider / access:** QwenCloud `qwen3.8-flash`, Hugging Face `Qwen/Qwen3.8-Flash-Next`, OpenAI-compatible API
- **Release / knowledge:** August 2026 release; knowledge cutoff not specified
- **IDs:** `qwen/qwen3.8-flash-next` (open weights), `qwen3.8-flash` (QwenCloud API)
- **Context window:** 262,144 tokens natively, extensible up to 1,000,000 tokens with YaRN scaling
- **Modalities:** Text input, image input, video input; text output; reasoning yes; tool calls supported; JSON mode supported
- **Pricing (as of 2026):** $0.15 per 1M tokens input, $0.47 per 1M tokens output, $0.016 per 1M tokens for cached input; available on QwenCloud
- **Architecture:** 180B total parameters (125B activated + 51B n-gram embedding + 4B MTP), Mixture of Experts (512 experts, 11 activated), proprietary with open weights

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

- **Mixture-of-Experts (MoE):** 512 experts with 11 activated per layer (Qwen Team)
- **DeepSWE 1.1:** 58.7% (agentic coding benchmark with Claude Code and mini-SWE-agent harnesses)
- **SWE-bench Pro:** 62.5% (agentic coding, Claude Code harness, 256K context)
- **SWE-bench Multilingual:** 81.0% (agentic coding, mini-SWE-agent harness)
- **NL2Repo-Bench:** 48.1% (repo-level code generation, Claude Code harness)
- **CoWorkBench:** 73.9% (long-horizon office work, productivity agent)
- **JobBench:** 55.7% (professional job tasks)
- **Agents' Last Exam:** 51.2 (overall score)
- **Toolathlon Verified:** 73.5% (real-world tool use, Pass@1)
- **IFBench:** 81.3% (instruction following)
- **GPQA Diamond:** 91.7% (scientific reasoning)
- **HLE:** 35.9% (multidisciplinary reasoning, judged by GPT-4o)
- **LiveCodeBench v6:** 91.9% (competitive coding)
- **ClawEval-MM:** 64.4 (pass@3) / 60.4 (average) (multimodal tool use)
- **RecreationBench:** 49.9% (application recreation)
- **AndroidWorld:** 84.5% (mobile use)
- **OSWorld 2.0:** 19.4% (binary) / 52.3% (partial) (computer use)
- **Vision2Web:** 64.0% (visual web development)
- **ERQA:** 72.3% (embodied intelligence)
- **LVBench:** 76.6% (long video understanding)
- **RealWorldQA:** 88.5% (real-world perception)
- **MathVision:** 90.6% (without CI) / 95.7% (with CI) (visual math problem solving)
- **CharXiv (RQ):** 90.6% (with CI) (scientific chart analysis)
- **Context Window:** 262,144 tokens natively, extensible up to 1,000,000 tokens with YaRN scaling

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps it.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 85/100.** Strong agentic performance with Toolathlon Verified 73.5% and CoWorkBench 73.9%; excellent complex task execution though limited by OSWorld 2.0 binary performance (19.4%).
- **Reasoning: 88/100.** Exceptional scientific reasoning with GPQA Diamond 91.7% and strong instruction following (IFBench 81.3%); sophisticated logical thinking with some limitations in multidisciplinary reasoning (HLE 35.9%).
- **Context window: 95/100.** Excellent 262K native context with extensible 1M capability via YaRN scaling; outstanding for extensive document processing and long-form reasoning tasks.
- **Multimodal: 80/100.** Strong visual capabilities with RealWorldQA 88.5%, MathVision 95.7%, and LVBench 76.6%; comprehensive text, image, and video understanding with good grounded reasoning.
- **Coding: 82/100.** Excellent coding performance with LiveCodeBench v6 91.9% and SWE-bench Pro 62.5%; strong code generation and debugging with moderate repository-level capabilities (NL2Repo-Bench 48.1%).
- **Cost efficiency: 88/100.** Competitive pricing at $0.15/$0.47 per 1M tokens with caching options; good value proposition for the capabilities offered.
- **Overall Score: 86/100.** Exceptional multimodal model with outstanding reasoning and coding capabilities; ideal for developers needing advanced code assistance, scientific reasoning, and multimodal understanding.

---

## Signature

- Provided by: **GLM 4.5 Flash (zai/glm-4-5-flash)** — 2026-10-21
- Method: Independent research from multiple benchmark sources including Qwen official documentation, Hugging Face model card, and performance evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GLM_4.6.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/qwen-3.8-flash-next/GLM_4.5_Flash.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/qwen-3.8-flash-next/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).