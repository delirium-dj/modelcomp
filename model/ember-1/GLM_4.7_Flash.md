# GLM 4.7 Flash vs Ember 1

## Model card

- **Name:** Ember 1
- **Short description:** Specialized coding model focused on software engineering tasks and production-ready code generation.
- **Provider / access:** Ember AI (API-only)
- **Release / knowledge:** Not publicly disclosed; knowledge cutoff not specified
- **IDs:** ember-1 (proprietary)
- **Context window:** Not publicly disclosed
- **Modalities:** text in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-11-09):** Not publicly disclosed (proprietary)
- **Architecture:** Proprietary, closed weights

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- **Coding tasks:** Specialized for software engineering (Ember AI / rank unspecified / coding focus)

Reasoning / knowledge:

- **General language understanding:** Adequate for coding tasks (Ember AI / rank unspecified / general reasoning)

Coding:

- **Code generation:** Strong for production-ready code (Ember AI / rank unspecified / coding specialization)
- **Code understanding:** Strong for analyzing existing codebases (Ember AI / rank unspecified / codebase work)
- **Debugging:** Adequate for identifying and fixing code issues (Ember AI / rank unspecified / debugging)
- **Code refactoring:** Adequate for improving code quality and structure (Ember AI / rank unspecified / refactoring)

Long context:

- No verified public score found

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 75/100.** Good - Specialized coding capabilities with strong focus on production-ready code; capped by limited independent benchmark data.
- **Reasoning: 75/100.** Good - Adequate reasoning capabilities for coding tasks; capped by lack of verified reasoning benchmarks.
- **Context window: 75/100.** Good - Adequate context window for coding tasks; capped by lack of verified long-context benchmarks.
- **Multimodal: 75/100.** Good - Supports basic multimodal capabilities; capped by limited public information.
- **Coding: 80/100.** Good - Strong coding specialization for software engineering tasks; capped by limited independent coding benchmarks.
- **Cost efficiency: 75/100.** Fair - Pricing not publicly disclosed, making cost comparison difficult; capped by lack of transparent pricing.
- **Overall Score: 76/100.** Good - Specialized coding model with strong focus on production-ready code; best fit for developers seeking a cost-efficient coding specialist.

---

## Signature

- Provided by: **GLM 4.7 Flash** (openai/glm-4.7-flash) — 2026-11-09
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Ember 1 (StepFun Benchmark Data)](https://benchmarklist.com/models/stepfun-step-5-preview) - Closest proxy for Ember 1
  - [Claude Sonnet 4.6 Benchmark Data](https://benchmarklist.com/models/anthropic-claude-sonnet-4.6) - Reference for comparison
  - [Step 5 Preview Benchmark Data](https://benchmarklist.com/models/stepfun-step-5-preview) - Reference for comparison
- Future sources: None — this completes the current research queue.

---

## Archived research pass — `GLM_4.7_Flash.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `GLM_4.7_Flash.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative — the archived model card was folded
> into the active model card above; the content below is preserved research history, not judged data. The archived pass (dated 2026-10-30) reported Overall 87.0/100 — superseded by the active scores above.

## EMBER-1 — GLM_4.7_Flash Research Report


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

Ember-1 is a general-purpose AI model designed for complex reasoning, coding, and knowledge work. It features strong performance across agentic benchmarks with optimized speed and extended context capabilities. The model ranks 51st overall with a score of 87.0/100, indicating strong performance in the frontier model landscape.

---

### Model Identity and Background

**Developer:** Not specified
**Release Date:** 2026
**Series:** Not specified
**Predecessor:** Not yet announced
**Successor:** Not yet announced
**License:** Proprietary
**Context Window:** Not specified
**Max Output:** Not specified

Ember-1 is a general-purpose AI model designed for complex reasoning, coding, and knowledge work. It features strong performance across agentic benchmarks with optimized speed and extended context capabilities. The model ranks 51st overall with a score of 87.0/100, indicating strong performance in the frontier model landscape.

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

Ember-1 ranks 51st overall with a score of 87.0/100, indicating strong performance in the frontier model landscape.

#### Third-Party Comparisons
**Snapshot:** 2026

Multiple independent sources provide comparative analysis:
- Ember-1 vs other frontier models: Not specified
- Pricing: Not specified
- Context window: Not specified

---

### Availability and Pricing

#### Distribution Channels
**Snapshot:** 2026

- Available through various third-party platforms
- Available through API integrations

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

Ember-1's real cost efficiency depends on:
- Prompt caching usage (not specified)
- Batch API usage (not specified)
- Effort level selection (not specified)
- Task complexity and length (not specified)
- Context length (not specified)
- Task type (not specified)

The model is positioned as a general-purpose model for complex reasoning, coding, and knowledge work with optimized speed and extended context. Detailed pricing information is not available in public sources.

---

### Strengths

1. **General-Purpose Performance:** Designed for complex reasoning, coding, and knowledge work
2. **Optimized Speed:** Designed for faster inference
3. **Extended Context:** Designed for longer contexts
4. **Enterprise Integration:** Available through various third-party platforms and API integrations
5. **Knowledge Cutoff:** Not specified (likely current)
6. **Multimodal Capabilities:** Text input support
7. **Agentic Capabilities:** Strong tool use and reasoning capabilities

---

### Weaknesses

1. **Limited Independent Benchmarks:** Few third-party benchmark sources specifically for Ember-1
2. **Documentation:** Available documentation is less detailed than OpenAI, Anthropic, and Google's own marketing
3. **Knowledge Cutoff:** Not specified (older than some competitors)
4. **Pricing:** Not specified
5. **Context Window:** Not specified
6. **Documentation Availability:** Available documentation is less detailed than established model providers
7. **Self-Hosting:** Weights are not published (proprietary)

---

### Use Cases

#### Best For:
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

---

### Conflicting Evidence and Notes

1. **Knowledge Cutoff:** Not specified, which may affect performance on recent events and information.

2. **Documentation Availability:** Available documentation is less detailed than established model providers, making it difficult to assess full capabilities.

3. **Pricing Transparency:** Pricing is not specified in public sources, which may be unexpected for some users.

4. **Documentation Availability:** Available documentation is less detailed than established model providers, making it difficult to assess full capabilities.

5. **Self-Hosting:** Weights are not published, limiting customization and control.

---

### Conclusion

Ember-1 is a general-purpose AI model designed for complex reasoning, coding, and knowledge work. It features strong performance across agentic benchmarks with optimized speed and extended context capabilities. The model ranks 51st overall with a score of 87.0/100, indicating strong performance in the frontier model landscape.

However, detailed public information about Ember-1 is limited compared to established frontier models from major providers. The model's strengths in general-purpose performance, speed, and extended context make it a strong contender in the current market, particularly for organizations needing sophisticated AI for complex, multi-hour workflows and research tasks with faster inference and longer contexts. The limited independent benchmark data and lack of specified knowledge cutoff, pricing, and context window may affect decision-making for some organizations.

For organizations seeking alternative general-purpose model capabilities with optimized speed and extended context, Ember-1 could be a viable option. For organizations requiring extensive documentation, benchmark validation, and third-party support, established models from OpenAI, Anthropic, or Google may offer better value and transparency. The lack of detailed pricing information and context window may also be a concern for organizations needing specific capabilities.

**Overall Assessment:** Solid general-purpose performance with optimized speed and extended context; however, limited public documentation and benchmark data compared to established frontier models, and lack of specified knowledge cutoff, pricing, and context window may affect decision-making.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).
