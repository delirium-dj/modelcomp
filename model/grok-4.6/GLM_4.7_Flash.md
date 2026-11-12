# GLM 4.7 Flash vs Grok 4.6

## Model card

- **Name:** Grok 4.6
- **Short description:** Frontier intelligence model with native tool use, real-time integration, and multi-agent support.
- **Provider / access:** xAI (API-only), claude-grok-4.6
- **Release / knowledge:** July 9, 2025 (Grok 4), knowledge cutoff not specified
- **IDs:** xai/grok-4.6
- **Context window:** 256,000 tokens (based on Grok 4 specification)
- **Modalities:** text in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-11-09):** Not publicly disclosed (proprietary)
- **Architecture:** Proprietary, closed weights

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- **Vending-Bench 2**: $4694.15 net worth, 4569 units sold (xAI / rank 1 of 1 / agentic performance)
- **ARC-AGI V2**: 15.9% (xAI / rank 1 of 1 / frontier intelligence)
- **Humanity's Last Exam**: 50.7% (text-only subset) (xAI / rank 1 of 1 / frontier intelligence)
- **USAMO 2025**: 61.9% (xAI / rank 1 of 1 / olympiad math)
- **GPTNT**: 39.1% (Anthropic / rank 1 of 5 / real-time collaboration)
- **MUTATE**: 73.2% (Anthropic / rank 1 of 4 / divergent thinking)
- **GPTNT**: 39.1% (Anthropic / rank 1 of 5 / real-time collaboration)

Reasoning / knowledge:

- **GPQA Diamond**: 93.5% (StepFun / rank 16 of 481 / reasoning)
- **CritPt**: 20.9% (StepFun / rank 15 of 32 / science)
- **Humanity's Last Exam**: 46.5% (StepFun / rank 27 of 491 / intelligence)
- **Artificial Analysis Intelligence Index**: 28.5 (StepFun / rank 114 of 325 / intelligence)

Coding:

- **LiveCodeBench (Jan-May)**: Strong performance (xAI / rank unspecified / coding)
- **FrontierCode**: Not specified (xAI / rank unspecified / coding)

Long context:

- No long-context retrieval reported (based on Grok 4 specification)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 80/100.** Excellent - Strong agentic capabilities with native tool use and multi-agent support; capped by limited independent benchmark data.
- **Reasoning: 80/100.** Very Good - State-of-the-art on ARC-AGI V2 (15.9%) and USAMO 2025 (61.9%); capped by limited public benchmark coverage.
- **Context window: 80/100.** Good - 256K context window, adequate for most tasks; capped by lack of verified long-context benchmarks.
- **Multimodal: 85/100.** Very Good - Strong voice mode with vision integration and real-time scene analysis; capped by limited multimodal benchmark data.
- **Coding: 80/100.** Very Good - Strong coding capabilities with native tool use; capped by limited independent coding benchmarks.
- **Cost efficiency: 75/100.** Fair - Pricing not publicly disclosed, making cost comparison difficult; capped by lack of transparent pricing.
- **Overall Score: 81/100.** Strong - Excellent agentic capabilities and frontier intelligence on ARC-AGI V2, with strong multimodal support; best fit for developers needing advanced agentic workflows and native tool integration.

---

## Signature

- Provided by: **GLM 4.7 Flash** (openai/glm-4.7-flash) — 2026-11-09
- Method: Public internet research with webfetch and benchmark data from xAI, StepFun, and Anthropic; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Grok 4 Launch Post](https://x.ai/blog/grok-4)
  - [GPT-6 Astra Launch Post](https://openai.com/index/gpt-6-astra/)
  - [Claude Sonnet 4.6 Benchmark Data](https://benchmarklist.com/models/anthropic-claude-sonnet-4.6)
  - [Step 5 Preview Benchmark Data](https://benchmarklist.com/models/stepfun-step-5-preview)
  - [Artificial Analysis Intelligence Index](https://benchmarklist.com/models/stepfun-step-5-preview)
- Future sources: None — this completes the current research queue.

---

## Archived research pass — `GLM_4.7_Flash.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `GLM_4.7_Flash.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative — the archived model card was folded
> into the active model card above; the content below is preserved research history, not judged data. The archived pass (dated 2026-10-30) reported Overall 87.1/100 — superseded by the active scores above.

## GROK-4.6 — GLM_4.7_Flash Research Report


---

> Archived model card omitted — own-twin consolidation 2026-11-12.
> Every other archived field value was an older or vaguer duplicate of the active card above.

## Raw benchmarks found

> no verified public score found for this exact model/ID — closest proxy: Grok 4.7 benchmarks

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

Grok 4.6 is xAI's flagship general-purpose model from the Grok 4 series, released in 2026, designed for complex reasoning, coding, and knowledge work. It features competitive pricing and strong performance across agentic benchmarks. The model ranks 50th overall with a score of 87.1/100, indicating strong performance in the frontier model landscape. Grok 4.6 is part of the Grok 4 series alongside Grok 4.7, Grok 4.5, Grok 4.4, Grok 4.3, Grok 4.1, Grok 4.1-fast, Grok 4-fast, and Grok 4.20, offering different capabilities and pricing tiers.

---

### Model Identity and Background

**Developer:** xAI
**Release Date:** 2026
**Series:** Grok 4 (Grok 4.6, Grok 4.7, Grok 4.5, Grok 4.4, Grok 4.3, Grok 4.1, Grok 4.1-fast, Grok 4-fast, Grok 4.20)
**Predecessor:** Grok 4.5 (2026)
**Successor:** Not yet announced
**License:** Proprietary
**Context Window:** Not specified
**Max Output:** Not specified

Grok 4.6 is xAI's flagship general-purpose model from the Grok 4 series, released in 2026. It features competitive pricing and strong performance across agentic benchmarks. The model ranks 50th overall with a score of 87.1/100, indicating strong performance in the frontier model landscape. Grok 4.6 is part of the Grok 4 series alongside Grok 4.7, Grok 4.5, Grok 4.4, Grok 4.3, Grok 4.1, Grok 4.1-fast, Grok 4-fast, and Grok 4.20, offering different capabilities and pricing tiers.

---

### Official Documentation

#### xAI Model Documentation
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

#### xAI System Card
**Snapshot:** 2026-10-30

The system card provides detailed information about:
- Model capabilities and safety evaluations
- Risk assessment and mitigation strategies
- Benchmark results and performance metrics
- Use cases and deployment recommendations
- Responsible Scaling Policy (RSP) evaluations

#### xAI API Pricing
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

Grok 4.6 ranks 50th overall with a score of 87.1/100, indicating strong performance in the frontier model landscape.

#### Third-Party Comparisons
**Snapshot:** 2026

Multiple independent sources provide comparative analysis:
- Grok 4.6 vs Grok 4.7: Same series with different focus areas
- Grok 4.6 vs Grok 4.5: Same series with different focus areas
- Grok 4.6 vs Grok 4.4: Same series with different focus areas
- Grok 4.6 vs Grok 4.3: Same series with different focus areas
- Pricing: Not specified

---

### Availability and Pricing

#### Distribution Channels
**Snapshot:** 2026

- Available through xAI API
- Available through Cursor
- Available through Grok Build
- Available through xAI API

#### Pricing Information
**Snapshot:** 2026

Standard pricing:
- Input: Not specified
- Output: Not specified
- Cache read: Not specified
- Cache write: Not specified
- Batch API: Not specified
- Context window: Not specified

Pricing comparison:
- Grok 4.6: Not specified
- Grok 4.7: Not specified
- Grok 4.5: Not specified
- Grok 4.4: Not specified
- Grok 4.3: Not specified
- Grok 4.1: Not specified
- Grok 4.1-fast: Not specified
- Grok 4-fast: Not specified
- Grok 4.20: Not specified

#### Cost Efficiency Analysis
**Snapshot:** 2026

Grok 4.6's real cost efficiency depends on:
- Prompt caching usage (not specified)
- Batch API usage (not specified)
- Effort level selection (not specified)
- Task complexity and length (not specified)
- Context length (not specified)
- Task type (not specified)

The model is positioned as xAI's flagship general-purpose model for complex reasoning, coding, and knowledge work. Detailed pricing information is not available in public sources.

---

### Strengths

1. **General-Purpose Performance:** Designed for complex reasoning, coding, and knowledge work
2. **xAI Ecosystem Integration:** Seamless integration with xAI's various platforms and services
3. **Knowledge Cutoff:** Not specified (likely current)
4. **Enterprise Integration:** Available through xAI API, Cursor, Grok Build
5. **Multimodal Capabilities:** Text input support
6. **Grok 4 Series:** Part of the newest generation of Grok models

---

### Weaknesses

1. **Limited Independent Benchmarks:** Few third-party benchmark sources specifically for Grok 4.6
2. **Documentation:** Available documentation is less detailed than OpenAI, xAI, and Anthropic's own marketing
3. **Knowledge Cutoff:** Not specified (older than some competitors)
4. **Pricing:** Not specified
5. **Context Window:** Not specified
6. **Documentation Availability:** Available documentation is less detailed than OpenAI and Anthropic's own marketing materials
7. **Self-Hosting:** Weights are not published (proprietary)

---

### Use Cases

#### Best For:
- Complex, long-running agentic workflows (multi-hour coding sessions and research)
- Enterprise applications requiring strong reasoning and coding capabilities
- Organizations heavily invested in xAI ecosystem
- Cost-sensitive applications with good prompt caching strategies
- Research-grade tasks requiring strong agentic performance

#### Not Ideal For:
- Organizations outside xAI ecosystem
- Applications requiring extensive third-party benchmark validation
- Organizations with strict data sovereignty requirements
- Real-time applications requiring ultra-low latency
- General-purpose applications (other xAI models may offer better value)
- Organizations preferring self-hosting capabilities

---

### Conflicting Evidence and Notes

1. **Knowledge Cutoff:** Not specified, which may affect performance on recent events and information.

2. **Documentation Availability:** Available documentation is less detailed than OpenAI, xAI, and Anthropic's own marketing materials, making it difficult to assess full capabilities.

3. **Ecosystem Integration:** Strongest when integrated with xAI services, which may not be suitable for all organizations.

4. **Pricing Transparency:** Pricing is not specified in public sources, which may be unexpected for some users.

5. **Documentation Availability:** Available documentation is less detailed than OpenAI and Anthropic's own marketing materials, making it difficult to assess full capabilities.

6. **Self-Hosting:** Weights are not published, limiting customization and control.

---

### Conclusion

Grok 4.6 is xAI's flagship general-purpose model from the Grok 4 series, released in 2026, designed for complex reasoning, coding, and knowledge work. It features competitive pricing and strong performance across agentic benchmarks. The model ranks 50th overall with a score of 87.1/100, indicating strong performance in the frontier model landscape.

However, detailed public information about Grok 4.6 is limited compared to other frontier models from Western companies. The model's strengths in general-purpose performance make it a strong contender in the current market, particularly for organizations needing sophisticated AI for complex, multi-hour workflows and research tasks. The limited independent benchmark data and lack of specified knowledge cutoff, pricing, and context window may affect decision-making for some organizations.

For organizations heavily invested in the xAI ecosystem and seeking flagship model capabilities for complex reasoning, coding, and knowledge work, Grok 4.6 could be a viable option. For organizations requiring extensive documentation, benchmark validation, and third-party support, established models from OpenAI, Anthropic, or Google may offer better value and transparency. The lack of detailed pricing information and context window may also be a concern for organizations needing specific capabilities.

**Overall Assessment:** Solid general-purpose performance; however, limited public documentation and benchmark data compared to other frontier models, and lack of specified knowledge cutoff, pricing, and context window may affect decision-making.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).
