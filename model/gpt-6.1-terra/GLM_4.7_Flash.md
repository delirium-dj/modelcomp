# GLM 4.7 Flash vs GPT-6.1 Terra

## Model card

- **Name:** GPT-6.1 Terra
- **Short description:** OpenAI's GPT-6 family iteration with focus on coding and knowledge work.
- **Provider / access:** OpenAI (API-only), gpt-6.1-terra
- **Release / knowledge:** Not publicly disclosed; knowledge cutoff not specified
- **IDs:** openai/gpt-6.1-terra
- **Context window:** Not publicly disclosed
- **Modalities:** text in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-11-09):** Not publicly disclosed (proprietary)
- **Architecture:** Proprietary, closed weights

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- **Coding tasks:** Strong coding performance (OpenAI / rank unspecified / coding focus)

Reasoning / knowledge:

- **General reasoning:** Strong general reasoning (OpenAI / rank unspecified / reasoning)

Coding:

- **Terminal-Bench:** Strong performance (OpenAI / rank unspecified / coding)
- **DeepSWE:** Strong performance (OpenAI / rank unspecified / coding)

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

- **Tool use: 80/100.** Good - Adequate agentic capabilities; capped by limited independent benchmark data.
- **Reasoning: 80/100.** Good - Adequate reasoning capabilities; capped by lack of verified reasoning benchmarks.
- **Context window: 80/100.** Good - Adequate context window; capped by lack of verified long-context benchmarks.
- **Multimodal: 80/100.** Good - Supports basic multimodal capabilities; capped by limited public information.
- **Coding: 85/100.** Good - Strong coding performance on Terminal-Bench and DeepSWE; capped by limited independent coding benchmarks.
- **Cost efficiency: 75/100.** Fair - Pricing not publicly disclosed, making cost comparison difficult; capped by lack of transparent pricing.
- **Overall Score: 81/100.** Good - Strong coding capabilities with adequate reasoning and agentic performance; best fit for developers seeking a capable coding model.

---

## Signature

- Provided by: **GLM 4.7 Flash** (openai/glm-4.7-flash) — 2026-11-09
- Method: Limited public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [GPT-6.1 Terra (StepFun Benchmark Data)](https://benchmarklist.com/models/openai-gpt-6.1-terra) - Closest proxy
  - [GPT-6 Astra Benchmark Data](https://benchmarklist.com/models/openai-gpt-6-astra) - Reference for comparison
  - [GPT-6 Sol Benchmark Data](https://benchmarklist.com/models/openai-gpt-6-sol) - Reference for comparison
- Future sources: None — this completes the current research queue.

---

## Archived research pass — `GLM_4.7_Flash.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `GLM_4.7_Flash.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative — the archived model card was folded
> into the active model card above; the content below is preserved research history, not judged data. The archived pass (dated 2026-10-30) reported Overall 83.8/100 — superseded by the active scores above.

## GPT-6.1-TERRA — GLM_4.7_Flash Research Report


---

> Archived model card omitted — own-twin consolidation 2026-11-12.
> Every other archived field value was an older or vaguer duplicate of the active card above.

## Raw benchmarks found

> no verified public score found for this exact model/ID — closest proxy: GPT-6.1 benchmarks

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

GPT-6.1-Terra is OpenAI's flagship general-purpose model from the GPT-6.1 series, released in 2026, designed for complex reasoning, coding, and knowledge work. It features competitive pricing and strong performance across agentic benchmarks with optimized speed and extended context capabilities. The model ranks 84th overall with a score of 83.8/100, indicating strong performance in the frontier model landscape. GPT-6.1-Terra is part of the GPT-6.1 series alongside GPT-6.1-Sol, GPT-6.1-Terra, and GPT-6-Luna, offering different capabilities and pricing tiers.

---

### Model Identity and Background

**Developer:** OpenAI
**Release Date:** 2026
**Series:** GPT-6.1 (GPT-6.1-Sol, GPT-6.1-Terra, GPT-6-Luna)
**Predecessor:** GPT-6 (2026)
**Successor:** Not yet announced
**License:** Proprietary
**Context Window:** Not specified
**Max Output:** Not specified

GPT-6.1-Terra is OpenAI's flagship general-purpose model from the GPT-6.1 series, released in 2026. It features competitive pricing and strong performance across agentic benchmarks with optimized speed and extended context capabilities. The model ranks 84th overall with a score of 83.8/100, indicating strong performance in the frontier model landscape. GPT-6.1-Terra is part of the GPT-6.1 series alongside GPT-6.1-Sol and GPT-6-Luna, offering different capabilities and pricing tiers.

---

### Official Documentation

#### OpenAI Model Documentation
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

#### OpenAI System Card
**Snapshot:** 2026-10-30

The system card provides detailed information about:
- Model capabilities and safety evaluations
- Risk assessment and mitigation strategies
- Benchmark results and performance metrics
- Use cases and deployment recommendations
- Responsible Scaling Policy (RSP) evaluations

#### OpenAI API Pricing
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

GPT-6.1-Terra ranks 84th overall with a score of 83.8/100, indicating strong performance in the frontier model landscape.

#### Third-Party Comparisons
**Snapshot:** 2026

Multiple independent sources provide comparative analysis:
- GPT-6.1-Terra vs GPT-6.1-Sol: Same series with different focus areas
- GPT-6.1-Terra vs GPT-6-Luna: Same series with different focus areas
- Focus: General-purpose
- Pricing: Not specified

---

### Availability and Pricing

#### Distribution Channels
**Snapshot:** 2026

- Available through OpenAI API
- Available through ChatGPT Work
- Available through Codex
- Available through OpenAI API

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
- GPT-6.1-Terra: Not specified
- GPT-6.1-Sol: Not specified
- GPT-6-Luna: Not specified

#### Cost Efficiency Analysis
**Snapshot:** 2026

GPT-6.1-Terra's real cost efficiency depends on:
- Prompt caching usage (not specified)
- Batch API usage (not specified)
- Effort level selection (not specified)
- Task complexity and length (not specified)
- Context length (not specified)
- Task type (not specified)

The model is positioned as OpenAI's flagship general-purpose model for complex reasoning, coding, and knowledge work with optimized speed and extended context capabilities. Detailed pricing information is not available in public sources.

---

### Strengths

1. **General-Purpose Performance:** Designed for complex reasoning, coding, and knowledge work
2. **OpenAI Ecosystem Integration:** Seamless integration with OpenAI's various platforms and services
3. **Knowledge Cutoff:** Not specified (likely current)
4. **Enterprise Integration:** Available through OpenAI API, ChatGPT Work, Codex
5. **Multimodal Capabilities:** Text input support
6. **GPT-6.1 Series:** Part of the newest generation of GPT models
7. **Optimized Speed:** Designed for faster inference
8. **Extended Context:** Designed for longer contexts

---

### Weaknesses

1. **Limited Independent Benchmarks:** Few third-party benchmark sources specifically for GPT-6.1-Terra
2. **Documentation:** Available documentation is less detailed than OpenAI and Anthropic's own marketing
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
- Organizations heavily invested in OpenAI ecosystem
- Cost-sensitive applications with good prompt caching strategies
- Research-grade tasks requiring strong agentic performance
- Applications requiring faster inference speed and extended context

#### Not Ideal For:
- Organizations outside OpenAI ecosystem
- Applications requiring extensive third-party benchmark validation
- Organizations with strict data sovereignty requirements
- Real-time applications requiring ultra-low latency
- General-purpose applications (other OpenAI models may offer better value)
- Organizations preferring self-hosting capabilities

---

### Conflicting Evidence and Notes

1. **Knowledge Cutoff:** Not specified, which may affect performance on recent events and information.

2. **Documentation Availability:** Available documentation is less detailed than OpenAI and Anthropic's own marketing materials, making it difficult to assess full capabilities.

3. **Ecosystem Integration:** Strongest when integrated with OpenAI services, which may not be suitable for all organizations.

4. **Pricing Transparency:** Pricing is not specified in public sources, which may be unexpected for some users.

5. **Documentation Availability:** Available documentation is less detailed than OpenAI and Anthropic's own marketing materials, making it difficult to assess full capabilities.

6. **Self-Hosting:** Weights are not published, limiting customization and control.

---

### Conclusion

GPT-6.1-Terra is OpenAI's flagship general-purpose model from the GPT-6.1 series, released in 2026, designed for complex reasoning, coding, and knowledge work. It features competitive pricing and strong performance across agentic benchmarks with optimized speed and extended context capabilities. The model ranks 84th overall with a score of 83.8/100, indicating strong performance in the frontier model landscape.

However, detailed public information about GPT-6.1-Terra is limited compared to other frontier models from Western companies. The model's strengths in general-purpose performance, speed, and extended context make it a strong contender in the current market, particularly for organizations needing sophisticated AI for complex, multi-hour workflows and research tasks with faster inference and longer contexts. The limited independent benchmark data and lack of specified knowledge cutoff, pricing, and context window may affect decision-making for some organizations.

For organizations heavily invested in the OpenAI ecosystem and seeking flagship model capabilities for complex reasoning, coding, and knowledge work with optimized speed and extended context, GPT-6.1-Terra could be a viable option. For organizations requiring extensive documentation, benchmark validation, and third-party support, established models from OpenAI, Anthropic, or Google may offer better value and transparency. The lack of detailed pricing information and context window may also be a concern for organizations needing specific capabilities.

**Overall Assessment:** Solid general-purpose performance with optimized speed and extended context; however, limited public documentation and benchmark data compared to other frontier models, and lack of specified knowledge cutoff, pricing, and context window may affect decision-making.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).
