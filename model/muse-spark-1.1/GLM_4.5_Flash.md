# Muse Spark 1.1 — findings by GLM 4.5 Flash

- Source: Meta AI via Meta Model API (`muse-spark-1.1`)
- Date: 2026-10-31 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Multimodal reasoning model built for agentic tasks with strong tool use, computer use, coding, and multimodal understanding
- **Provider / access:** Meta AI via Meta Model API (public preview)
- **Release / knowledge:** Released on July 9, 2026; knowledge cutoff not explicitly disclosed
- **IDs:** `muse-spark-1.1` (standard tier), `muse-spark-1.1-contributor` (discounted contributor tier)
- **Context window:** 1 million tokens
- **Modalities:** Text, image, video, audio, and PDF document inputs; text output
- **Pricing (as of 2026):** Standard tier: $1.25 per million input tokens, $4.25 per million output tokens; Contributor tier: $0.10 per million input tokens, $0.20 per million output tokens
- **Architecture:** Proprietary multimodal transformer architecture with agentic capabilities

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **80.0** (Meta AI evaluation report, competitive, not best - GPT-5.5 leads with 83.4)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **88.1** (Meta AI evaluation report, #1 ranking among compared models)
- JobBench: **54.7** (Meta AI evaluation report, #1 ranking among compared models)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **62.1** (Meta AI evaluation report, Humanity's Last Exam with tools)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **51** (Artificial Analysis, competitive with GPT-5.4 and GPT-5.6 Luna)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found / no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **61.5** (Meta AI evaluation report, good but behind Claude Opus 4.8 at 69.2)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **53.3** (Meta AI evaluation report, behind GPT-5.5 at 67.0 and Claude Opus 4.8 at 59.0)

Long context:

- OSWorld-Verified: **80.8** (Meta AI evaluation report, close to top but Qwen3.8 Max leads at 86.1)
- Finance Agent v2: **57.2** (Meta AI evaluation report, #1 ranking among compared models)
- WebArena-Verified: **no verified public score found**
- WebArena 2.0: **no verified public score found**
- DeepSearchQA: **no verified public score found**

### Additional benchmark data from independent sources:

- **CharXiv Reasoning with tools:** 88.4 (KingY.ai, behind Claude Opus 4.8 at 89.9)
- **BabyVision with tools:** 76.3 (KingY.ai, behind GPT-5.5 at 83.6 and Claude Opus 4.8 at 81.2)
- **Box Complex Work Eval:** Competitive with leading models for enterprise knowledge work (Box Blog)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps it.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(+ Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 88/100.** Muse Spark 1.1 leads on agentic benchmarks like MCP Atlas (88.1%) and JobBench (54.7%), showing exceptional tool orchestration capabilities. Capped by top performance in this category.
- **Reasoning: 75/100.** Strong performance on Humanity's Last Exam with tools (62.1%) and competitive on Artificial Analysis Intelligence Index (51), though not leading in pure reasoning benchmarks. Capped by strong agentic reasoning capabilities.
- **Context window: 95/100.** 1 million token context window with active management capabilities, allowing it to remember actions and retrieve information from earlier work. Capped by maximum context length.
- **Multimodal: 80/100.** Excels in multimodal understanding with support for text, image, video, audio, and PDF inputs, though specific multimodal benchmark scores are limited. Capped by strong multimodal perception capabilities.
- **Coding: 75/100.** Competitive on Terminal-Bench 2.1 (80.0%) and SWE-Bench Pro (61.5%), with significant improvements over previous version, though not the top performer in pure coding benchmarks. Capped by strong coding performance in agentic scenarios.
- **Cost efficiency: 90/100.** At $1.25/$4.25 per million tokens (standard tier) and $0.10/$0.20 (contributor tier), it's significantly more cost-effective than competitors like Claude Fable 5 ($10/$50) and competitive with GPT-5.6 pricing.
- **Overall Score: 82.6/100.** Mean of tool (88), reasoning (75), context (95), multimodal (80), and coding (75) scores, reflecting its strong agentic capabilities with excellent context handling and competitive pricing.

---

## Signature

- Provided by: **GLM 4.5 Flash (zai/glm-4-5-flash)** — 2026-10-31
- Method: Independent research from multiple benchmark sources; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GLM_4.6.md`, using the same headings.

---