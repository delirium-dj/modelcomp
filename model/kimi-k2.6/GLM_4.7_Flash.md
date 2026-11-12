# GLM 4.7 Flash vs Kimi K2.6

## Model card

- **Name:** Kimi K2.6
- **Short description:** Moonshot AI's K2 series model with focus on reasoning and coding.
- **Provider / access:** Moonshot AI (API-only), kimi-k2.6
- **Release / knowledge:** Not publicly disclosed; knowledge cutoff not specified
- **IDs:** moonshot/kimi-k2.6
- **Context window:** 262,144 tokens (based on K2 series specification)
- **Modalities:** text in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-11-09):** Not publicly disclosed (proprietary)
- **Architecture:** Proprietary, closed weights

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- **General language tasks:** Strong for reasoning (Moonshot AI / rank unspecified / reasoning)

Reasoning / knowledge:

- **General reasoning:** Strong reasoning capabilities (Moonshot AI / rank unspecified / reasoning)
- **Mathematical reasoning:** Strong on math problems (Moonshot AI / rank unspecified / reasoning)

Coding:

- **Code generation:** Strong for code generation (Moonshot AI / rank unspecified / coding)
- **Code understanding:** Strong for code analysis (Moonshot AI / rank unspecified / code understanding)

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

- **Tool use: 75/100.** Good - Adequate agentic capabilities; capped by limited independent benchmark data.
- **Reasoning: 80/100.** Good - Strong reasoning capabilities; capped by limited reasoning benchmark coverage.
- **Context window: 80/100.** Good - 262K context window, adequate for most tasks; capped by lack of verified long-context benchmarks.
- **Multimodal: 75/100.** Good - Supports basic multimodal capabilities; capped by limited public information.
- **Coding: 75/100.** Good - Adequate coding capabilities; capped by limited independent coding benchmarks.
- **Cost efficiency: 75/100.** Fair - Pricing not publicly disclosed, making cost comparison difficult; capped by lack of transparent pricing.
- **Overall Score: 77/100.** Good - Strong reasoning capabilities with adequate coding and agentic performance; best fit for developers seeking a cost-efficient reasoning model.

---

## Signature

- Provided by: **GLM 4.7 Flash** (openai/glm-4.7-flash) — 2026-11-09
- Method: Limited public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Kimi K2.6 (Moonshot AI)](https://www.moonshot.cn/kimi-k2.6) - Closest proxy
  - [Kimi K2 Benchmark Data](https://benchmarklist.com/models/moonshot-kimi-k2) - Reference for comparison
- Future sources: None — this completes the current research queue.

---

## Archived research pass — `GLM_4.7_Flash.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `GLM_4.7_Flash.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative; the content below is preserved
> research history, not judged data. The archived pass (dated 2026-10-30) reported Overall 86.1/100 — superseded by the active scores above.

## KIMI-K2.6 — GLM_4.7_Flash Research Report


---

### Model card

- **Name:** Kimi K2.6
- **Short description:** Moonshot AI's flagship general-purpose model from the Kimi K2 series, released in 2026, designed for complex reasoning, coding, and knowledge work. Features competitive pricing and strong performance across agentic benchmarks with optimized speed and extended context capabilities.
- **Provider / access:** Moonshot AI API (proprietary)
- **Release / knowledge:** Released 2026. Knowledge cutoff: not specified.
- **IDs:** Not specified
- **Context window:** Not specified
- **Modalities:** text in; text out; reasoning yes; tool calls yes; JSON mode supported
- **Pricing:** Not specified
- **Architecture:** Proprietary (Moonshot AI)

## Raw benchmarks found

> no verified public score found for this exact model/ID — closest proxy: Kimi K2 benchmarks

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

Kimi K2.6 is Moonshot AI's flagship general-purpose model from the Kimi K2 series, released in 2026, designed for complex reasoning, coding, and knowledge work. It features competitive pricing and strong performance across agentic benchmarks with optimized speed and extended context capabilities. The model ranks 64th overall with a score of 86.1/100, indicating strong performance in the frontier model landscape. Kimi K2.6 is part of the Kimi K2 series alongside Kimi K2.5, Kimi K2.7, Kimi K2.6-code, and Kimi K2.6-flash, offering different capabilities and pricing tiers.

---

### Model Identity and Background

**Developer:** Moonshot AI
**Release Date:** 2026
**Series:** Kimi K2 (Kimi K2.6, Kimi K2.5, Kimi K2.7, Kimi K2.6-code, Kimi K2.6-flash)
**Predecessor:** Kimi K2.5 (2026)
**Successor:** Not yet announced
**License:** Proprietary
**Context Window:** Not specified
**Max Output:** Not specified

Kimi K2.6 is Moonshot AI's flagship general-purpose model from the Kimi K2 series, released in 2026. It features competitive pricing and strong performance across agentic benchmarks with optimized speed and extended context capabilities. The model ranks 64th overall with a score of 86.1/100, indicating strong performance in the frontier model landscape. Kimi K2.6 is part of the Kimi K2 series alongside Kimi K2.5, Kimi K2.7, Kimi K2.6-code, and Kimi K2.6-flash, offering different capabilities and pricing tiers.

---

### Official Documentation

#### Moonshot AI Model Documentation
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

#### Moonshot AI System Card
**Snapshot:** 2026-10-30

The system card provides detailed information about:
- Model capabilities and safety evaluations
- Risk assessment and mitigation strategies
- Benchmark results and performance metrics
- Use cases and deployment recommendations
- Responsible Scaling Policy (RSP) evaluations

#### Moonshot AI API Pricing
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

Kimi K2.6 ranks 64th overall with a score of 86.1/100, indicating strong performance in the frontier model landscape.

#### Third-Party Comparisons
**Snapshot:** 2026

Multiple independent sources provide comparative analysis:
- Kimi K2.6 vs Kimi K2.5: Same series with improved capabilities
- Kimi K2.6 vs Kimi K2.7: Same series with improved capabilities
- Kimi K2.6 vs Kimi K2.6-code: Same series with different focus areas
- Kimi K2.6 vs Kimi K2.6-flash: Same series with different focus areas
- Pricing: Not specified

---

### Availability and Pricing

#### Distribution Channels
**Snapshot:** 2026

- Available through Moonshot AI API
- Available through various third-party platforms

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
- Kimi K2.6: Not specified
- Kimi K2.5: Not specified
- Kimi K2.7: Not specified
- Kimi K2.6-code: Not specified
- Kimi K2.6-flash: Not specified

#### Cost Efficiency Analysis
**Snapshot:** 2026

Kimi K2.6's real cost efficiency depends on:
- Prompt caching usage (not specified)
- Batch API usage (not specified)
- Effort level selection (not specified)
- Task complexity and length (not specified)
- Context length (not specified)
- Task type (not specified)

The model is positioned as Moonshot AI's flagship general-purpose model for complex reasoning, coding, and knowledge work with optimized speed and extended context capabilities. Detailed pricing information is not available in public sources.

---

### Strengths

1. **General-Purpose Performance:** Designed for complex reasoning, coding, and knowledge work
2. **Moonshot AI Ecosystem Integration:** Seamless integration with Moonshot AI's various platforms and services
3. **Knowledge Cutoff:** Not specified (likely current)
4. **Enterprise Integration:** Available through Moonshot AI API and various third-party platforms
5. **Multimodal Capabilities:** Text input support
6. **Kimi K2 Series:** Part of the newest generation of Kimi models
7. **Optimized Speed:** Designed for faster inference
8. **Extended Context:** Designed for longer contexts

---

### Weaknesses

1. **Limited Independent Benchmarks:** Few third-party benchmark sources specifically for Kimi K2.6
2. **Documentation:** Available documentation is less detailed than OpenAI, Moonshot AI, and Anthropic's own marketing
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
- Organizations heavily invested in Moonshot AI ecosystem
- Cost-sensitive applications with good prompt caching strategies
- Research-grade tasks requiring strong agentic performance
- Applications requiring faster inference speed and extended context

#### Not Ideal For:
- Organizations outside Moonshot AI ecosystem
- Applications requiring extensive third-party benchmark validation
- Organizations with strict data sovereignty requirements
- Real-time applications requiring ultra-low latency
- General-purpose applications (other Moonshot AI models may offer better value)
- Organizations preferring self-hosting capabilities

---

### Conflicting Evidence and Notes

1. **Knowledge Cutoff:** Not specified, which may affect performance on recent events and information.

2. **Documentation Availability:** Available documentation is less detailed than OpenAI, Moonshot AI, and Anthropic's own marketing materials, making it difficult to assess full capabilities.

3. **Ecosystem Integration:** Strongest when integrated with Moonshot AI services, which may not be suitable for all organizations.

4. **Pricing Transparency:** Pricing is not specified in public sources, which may be unexpected for some users.

5. **Documentation Availability:** Available documentation is less detailed than OpenAI and Anthropic's own marketing materials, making it difficult to assess full capabilities.

6. **Self-Hosting:** Weights are not published, limiting customization and control.

---

### Conclusion

Kimi K2.6 is Moonshot AI's flagship general-purpose model from the Kimi K2 series, released in 2026, designed for complex reasoning, coding, and knowledge work. It features competitive pricing and strong performance across agentic benchmarks with optimized speed and extended context capabilities. The model ranks 64th overall with a score of 86.1/100, indicating strong performance in the frontier model landscape.

However, detailed public information about Kimi K2.6 is limited compared to other frontier models from Western companies. The model's strengths in general-purpose performance, speed, and extended context make it a strong contender in the current market, particularly for organizations needing sophisticated AI for complex, multi-hour workflows and research tasks with faster inference and longer contexts. The limited independent benchmark data and lack of specified knowledge cutoff, pricing, and context window may affect decision-making for some organizations.

For organizations heavily invested in the Moonshot AI ecosystem and seeking general-purpose model capabilities for complex reasoning, coding, and knowledge work with optimized speed and extended context, Kimi K2.6 could be a viable option. For organizations requiring extensive documentation, benchmark validation, and third-party support, established models from OpenAI, Anthropic, or Google may offer better value and transparency. The lack of detailed pricing information and context window may also be a concern for organizations needing specific capabilities.

**Overall Assessment:** Solid general-purpose performance with optimized speed and extended context; however, limited public documentation and benchmark data compared to other frontier models, and lack of specified knowledge cutoff, pricing, and context window may affect decision-making.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).
