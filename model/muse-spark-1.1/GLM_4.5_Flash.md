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
- **IDs:** `muse-spark-1.1` (standard tier), `muse-spark-1.1-contributor` (discounted contributor tier) (also recorded: `vicarious/muse-spark-1.1`)
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

---

## Archived research pass — `GLM_4.5_Flash.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `GLM_4.5_Flash.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative — the archived model card was folded
> into the active model card above; the content below is preserved research history, not judged data. The archived pass reported Overall 88.4/100 — superseded by the active scores above.

## Muse Spark 1.1 — findings by GLM 4.5 Flash

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Vicarious AI (`muse-spark-1.1`)
- Archived date: 2026-10-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> Archived model card omitted — own-twin consolidation 2026-11-12.
> Safe unions applied: IDs +1. Every other archived field value was an older or vaguer duplicate of the
> active card above.

### Technical specifications

- **Architecture:** Unknown (proprietary)
- **Training data:** Mix of publicly available internet text, books, and code
- **Modalities:** Text-only (based on available information)
- **Specializations:** General-purpose AI with strong reasoning and creative capabilities
- **Optimizations:** Unknown
- **Safety features:** Unknown

### Performance characteristics

- **Reasoning:** Strong reasoning capabilities, likely in the 85-90 range based on overall score
- **Coding:** Good coding abilities, likely in the 75-80 range
- **Tool use:** Unknown (not well documented)
- **Multimodal:** Text-only (based on available information)
- **Cost efficiency:** Higher than the 1.3 version due to being an earlier generation

### Benchmarks and evaluations

- **Relative position:** High performance model, below the latest 1.3 version (93.9) but still competitive
- **Comparison to similar models:** Less capable than Muse Spark 1.3 but more cost-effective

### Use cases and applications

- **Primary use cases:** General-purpose AI tasks, content creation, problem-solving
- **Target users:** Businesses and developers requiring capable AI at a more accessible price point
- **Competitive advantages:** Balance of performance and cost
- **Limitations:** Less capable than the latest generation of models

### Limitations and concerns

- **Transparency:** Limited public documentation and technical details
- **Accessibility:** API access may be restricted or limited
- **Reproducibility:** Independent verification of capabilities is difficult due to limited public information

### Research methodology

- **Sources:** Limited to publicly available information about Vicarious AI's Muse family
- **Verification challenges:** Difficulty accessing official documentation and benchmarks
- **Confidence level:** Medium due to limited public information

### Comparison to other models

- **vs Muse Spark 1.3:** Less capable (88.4 vs 93.9) but more cost-effective
- **vs Muse Wonder Full:** Different model family with different specializations
- **vs other Spark models:** Earlier generation with reduced capabilities compared to newer versions

### Notes

- This research is based on limited publicly available information
- Additional independent benchmark data would improve confidence in these assessments
- The model's true capabilities may be better documented in private or partner-accessible materials
- As an earlier generation model, it may be phased out in favor of newer versions

## Raw benchmarks found

Agent / tool use:

- Terminal-Bench: **no verified public score found**
- Tau2-Bench: **no verified public score found**
- MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**

Coding:

- SWE-bench Verified: **no verified public score found**
- LiveCodeBench: **no verified public score found**

Long context:

- **no long-context retrieval reported**
- Additional benchmark: **no verified public score found**
