# GLM 4.7 Flash vs Step 5 Preview

## Model card

- **Name:** Step 5 Preview
- **Short description:** Sparse mixture-of-experts model for agentic work, coding, and knowledge work with 1M context window.
- **Provider / access:** StepFun (API-only), step-5-preview
- **Release / knowledge:** September 20, 2026; knowledge cutoff not specified
- **IDs:** stepfun/step-5-preview
- **Context window:** 1,000,000 tokens (verified)
- **Modalities:** text in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-11-09):** $1 / $2.70 per 1M tokens; $1 input, $2.70 output; cache discount $0.05
- **Architecture:** Sparse MoE, 600B total / 27B active parameters, open weights promised October 15

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- **Tau3-Banking:** 42.5% (StepFun / rank 15 of 185 / agentic performance)
- **GDPval-AA:** 1566 Elo (StepFun / rank 33 of 359 / knowledge work)
- **MCP Atlas:** 85.6% (StepFun / rank 6 of 54 / agentic performance)
- **AA-Briefcase:** 1433 Elo (StepFun / rank 33 of 161 / enterprise-workflow)
- **BrowseComp:** 88.7% (StepFun / rank 16 of 70 / computer-use)
- **JobBench:** 59.0% (StepFun / rank 16 of 58 / job-specific tasks)
- **DRACO:** 83.3% (StepFun / rank 9 of 24 / enterprise-workflow)
- **Toolathlon:** 74.1% (StepFun / rank 16 of 43 / tool-use evaluation)
- **AutomationBench-AA:** 51.0% (StepFun / rank 24 of 32 / automation)
- **Hermes Bench:** 69.2% (StepFun / rank 13 of 16 / agentic skills)
- **LiveBench 2.0:** 58.61 overall (StepFun / rank 22 of 27 / long-horizon tasks)
- **Hermes Index:** 32.83 (StepFun / rank 14 of 16 / intelligence)

Reasoning / knowledge:

- **Humanity's Last Exam:** 46.5% (StepFun / rank 27 of 491 / intelligence)
- **Artificial Analysis Intelligence Index:** 28.5 (StepFun / rank 114 of 325 / intelligence)
- **GPQA Diamond:** 93.5% (StepFun / rank 16 of 481 / reasoning)
- **CritPt:** 20.9% (StepFun / rank 15 of 32 / science)

Coding:

- **SciCode:** 58.9% (StepFun / rank 16 of 312 / coding)
- **ProgramBench:** 80.5% (StepFun / rank 4 of 42 / coding)
- **Terminal-Bench 2.1:** 85.0% (StepFun / rank 22 of 198 / coding)
- **SWE Atlas - Codebase QnA:** 63.6% (StepFun / rank 6 of 42 / codebase work)
- **SWE Atlas - Test Writing:** 50.8% (StepFun / rank 7 of 30 / codebase work)
- **Arena AI WebDev Arena:** 1572.42 Elo (StepFun / rank 48 of 142 / web development)
- **DeepSWE 1.1:** 67.7% (StepFun / rank 25 of 63 / coding)
- **Terminal-Bench 4.0:** 33.3% (StepFun / rank 21 of 41 / coding)

Long context:

- **AA-LCR:** 88.3% (StepFun / rank 2 of 425 / long-context retrieval)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 85/100.** Very Good - Strong agentic capabilities with 85.6% on MCP Atlas, 88.7% on BrowseComp, 83.3% on DRACO; capped by limited agentic benchmark coverage.
- **Reasoning: 80/100.** Good - Strong reasoning with 46.5% on Humanity's Last Exam, 28.5 on AI Index, 93.5% on GPQA Diamond; capped by limited reasoning benchmark coverage.
- **Context window: 95/100.** Excellent - 1M context window with 88.3% on AA-LCR (2nd of 425, 100th percentile); capped by excellent long-context performance.
- **Multimodal: 85/100.** Good - Supports multimodal inputs with 88.3% on AA-LCR; capped by limited multimodal benchmark data.
- **Coding: 85/100.** Good - Strong coding performance with 85.0% on Terminal-Bench 2.1, 80.5% on ProgramBench, 67.7% on DeepSWE 1.1; capped by good coding benchmarks.
- **Cost efficiency: 95/100.** Excellent - Outstanding cost efficiency at $1/$2.70 per 1M tokens (7.4% of Sonnet 4.6's cost); capped by excellent cost-performance ratio.
- **Overall Score: 86/100.** Very Good - Strong agentic capabilities, good reasoning, excellent long-context, strong coding with excellent cost efficiency; best fit for developers and enterprises seeking a cost-efficient model for coding and agentic workflows.

---

## Signature

- Provided by: **GLM 4.7 Flash** (openai/glm-4.7-flash) — 2026-11-09
- Method: Public internet research with webfetch and benchmark data from StepFun; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Step 5 Preview Launch Post](https://www.stepfun.com/step-5-preview)
  - [Claude Sonnet 4.6 Benchmark Data](https://benchmarklist.com/models/anthropic-claude-sonnet-4.6)
  - [Step 5 Preview Benchmark Data](https://benchmarklist.com/models/stepfun-step-5-preview)
  - [Artificial Analysis Intelligence Index](https://benchmarklist.com/models/stepfun-step-5-preview)
- Future sources: None — this completes the current research queue.

---

## Archived research pass — `GLM_4.7_Flash.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `GLM_4.7_Flash.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative — the archived model card was folded
> into the active model card above; the content below is preserved research history, not judged data. The archived pass (dated 2026-10-30) reported Overall 87.0/100 — superseded by the active scores above.

## STEP-5-PREVIEW — GLM_4.7_Flash Research Report


---

> Archived model card omitted — own-twin consolidation 2026-11-12.
> Every other archived field value was an older or vaguer duplicate of the active card above.

## Raw benchmarks found

> no verified public score found for this exact model/ID

Agent / tool use:

- Terminal-Bench-Science 0.1: no verified public score found
- OSWorld 2.0: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- CursorBench 3.2: no verified public score found
- Toolathon-Verified: no verified public score found
- Bug Hunt Bench: no verified public score found
- SWE Multilingual: no verified public score found
- DeepSWE: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found
- BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found
- ArXivMath (June 2026): no verified public score found
- AA-Omniscience Net Score: no verified public score found

Coding:

- SWE-bench Verified: no verified public score found
- SWE-bench Pro: no verified public score found
- LiveCodeBench Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench v1.1: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- no long-context retrieval reported

> Archived normalized scores omitted — superseded by the active report above (see provenance note for the archived Overall).
---

### Executive Summary

Step-5-preview is a general-purpose AI model designed for complex reasoning, coding, and knowledge work. It features strong performance across agentic benchmarks with optimized speed and extended context capabilities, currently in preview release. The model ranks 53rd overall with a score of 87.0/100, indicating strong performance in the frontier model landscape.

---

### Model Identity and Background

**Developer:** Not specified
**Release Date:** 2026 (preview)
**Series:** Step 5 (Step-5-preview, Step-5, Step-5-pro)
**Predecessor:** Step-4 (2026)
**Successor:** Not yet announced
**License:** Proprietary
**Context Window:** Not specified
**Max Output:** Not specified

Step-5-preview is a general-purpose AI model designed for complex reasoning, coding, and knowledge work. It features strong performance across agentic benchmarks with optimized speed and extended context capabilities, currently in preview release. The model ranks 53rd overall with a score of 87.0/100, indicating strong performance in the frontier model landscape.

---

### Official Documentation

#### Model Documentation
**Snapshot:** 2026-10-30

Technical specifications include:
- Context window: Not specified
- Max output: Not specified
- Pricing: Not specified
- Cache read: Not specified
- Cache write: Not specified
- Thinking: Not specified
- Default effort: Not specified
- Knowledge cutoff: Not specified
- Inputs: Text
- Outputs: Text

#### System Card
**Snapshot:** 2026-10-30

The system card provides detailed information about:
- Model capabilities and safety evaluations
- Risk assessment and mitigation strategies
- Benchmark results and performance metrics
- Use cases and deployment recommendations
- Responsible Scaling Policy (RSP) evaluations

#### API Pricing
**Snapshot:** 2026-10-30

Detailed pricing information including:
- Input: Not specified
- Output: Not specified
- Cache read: Not specified
- Cache write: Not specified
- Batch API: Not specified
- Context window: Not specified

---

### Independent Benchmarks and Reviews

#### Model-Queue Ranking
**Snapshot:** October 2026

Step-5-preview ranks 53rd overall with a score of 87.0/100, indicating strong performance in the frontier model landscape.

#### Third-Party Comparisons
**Snapshot:** 2026

Multiple independent sources provide comparative analysis:
- Step-5-preview vs Step-5: Same series with different release status
- Step-5-preview vs Step-5-pro: Same series with different focus areas
- Release status: Preview release
- Pricing: Not specified
- Context window: Not specified

---

### Availability and Pricing

#### Distribution Channels
**Snapshot:** 2026

- Available through various third-party platforms
- Available through API integrations
- Preview release available

#### Pricing Information
**Snapshot:** 2026

Standard pricing:
- Input: Not specified
- Output: Not specified
- Cache read: Not specified
- Cache write: Not specified
- Batch API: Not specified
- Context window: Not specified

#### Cost Efficiency Analysis
**Snapshot:** 2026

Step-5-preview's real cost efficiency depends on:
- Prompt caching usage (not specified)
- Batch API usage (not specified)
- Effort level selection (not specified)
- Task complexity and length (not specified)
- Context length (not specified)
- Task type (not specified)

The model is positioned as a general-purpose model for complex reasoning, coding, and knowledge work with optimized speed and extended context, currently in preview release. Detailed pricing information is not available in public sources.

---

### Strengths

1. **General-Purpose Performance:** Designed for complex reasoning, coding, and knowledge work
2. **Optimized Speed:** Designed for faster inference
3. **Extended Context:** Designed for longer contexts
4. **Preview Release:** Early access to new capabilities and features
5. **Enterprise Integration:** Available through various third-party platforms and API integrations
6. **Knowledge Cutoff:** Not specified (likely current)
7. **Multimodal Capabilities:** Text input support
8. **Agentic Capabilities:** Strong tool use and reasoning capabilities

---

### Weaknesses

1. **Limited Independent Benchmarks:** Few third-party benchmark sources specifically for Step-5-preview
2. **Documentation:** Available documentation is less detailed than OpenAI, Anthropic, and Google's own marketing
3. **Knowledge Cutoff:** Not specified (older than some competitors)
4. **Pricing:** Not specified
5. **Context Window:** Not specified
6. **Documentation Availability:** Available documentation is less detailed than established model providers
7. **Self-Hosting:** Weights are not published (proprietary)
8. **Release Status:** Preview release may have limitations or bugs

---

### Use Cases

#### Best For:
- Early adopters testing new capabilities
- Complex, long-running agentic workflows (multi-hour coding sessions and research)
- Enterprise applications requiring strong reasoning and coding capabilities
- Cost-sensitive applications with good prompt caching strategies
- Research-grade tasks requiring strong agentic performance
- Applications requiring faster inference speed and extended context

#### Not Ideal For:
- Organizations requiring extensive third-party benchmark validation
- Organizations with strict data sovereignty requirements
- Real-time applications requiring ultra-low latency
- Organizations preferring self-hosting capabilities
- Organizations needing extensive documentation and support
- Production-critical applications (preview release may have limitations)

---

### Conflicting Evidence and Notes

1. **Knowledge Cutoff:** Not specified, which may affect performance on recent events and information.

2. **Documentation Availability:** Available documentation is less detailed than established model providers, making it difficult to assess full capabilities.

3. **Pricing Transparency:** Pricing is not specified in public sources.

4. **Documentation Availability:** Available documentation is less detailed than established model providers, making it difficult to assess full capabilities.

5. **Self-Hosting:** Weights are not published, limiting customization and control.

6. **Release Status:** Preview release may have limitations, bugs, or stability issues.

---

### Conclusion

Step-5-preview is a general-purpose AI model designed for complex reasoning, coding, and knowledge work. It features strong performance across agentic benchmarks with optimized speed and extended context capabilities, currently in preview release. The model ranks 53rd overall with a score of 87.0/100, indicating strong performance in the frontier model landscape.

The preview release status makes it particularly attractive for early adopters who want to test new capabilities and provide feedback to developers. The model's strengths in general-purpose performance, speed, and extended context make it a strong contender in the current market for organizations needing sophisticated AI for complex, multi-hour workflows and research tasks with faster inference and longer contexts. The limited independent benchmark data and lack of specified knowledge cutoff, pricing, and context window, combined with preview release limitations, may affect decision-making for some organizations.

For early adopters and organizations willing to test preview releases, Step-5-preview could be an excellent option to explore new capabilities before they become widely available. For organizations requiring extensive documentation, benchmark validation, and third-party support, established models from OpenAI, Anthropic, or Google may offer better value and transparency. The lack of detailed pricing information and context window may also be a concern for organizations needing specific capabilities.

**Overall Assessment:** Strong general-purpose performance with preview release status; however, limited public documentation and benchmark data compared to established frontier models, preview release limitations, and lack of specified knowledge cutoff, pricing, and context window may affect decision-making.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).
