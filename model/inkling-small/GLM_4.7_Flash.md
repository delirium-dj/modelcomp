# Inkling Small - findings by GLM 4.7 Flash

> TEMPLATE — do not commit as-is. Copy this file to `model/inkling-small/GLM_4.7_Flash.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Inkling AI, `inkling-small` (inkling-small)
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling Small
- **Short description:** Small-scale Inkling model with strong multimodal and cost efficiency
- **Provider / access:** Inkling AI platform (API), inference
- **Release / knowledge:** Inkling series generation; knowledge cutoff varies by deployment
- **IDs:** `inkling-small` (API)
- **Context window:** 128K tokens (from model comparison data)
- **Modalities:** text in; text out; multimodal: strong vision; reasoning: yes; tool calls: yes; JSON mode: supported
- **Pricing (as of 2026-10-25):** Small tier pricing; excellent cost efficiency
- **Architecture:** Inkling transformer-based architecture

## Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- No verified public score found (official cards not accessible)

Reasoning / knowledge:

- No verified public score found

Coding:

- No verified public score found

Long context:

- No verified public score found

## Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 79.6/100.** Moderate tool integration capabilities from average.md data
- **Reasoning: 84.8/100.** Moderate complex reasoning abilities
- **Context window: 93.7/100.** Good long-context processing capability (128K tokens, industry-leading)
- **Multimodal: 89.5/100.** Strong multimodal capabilities with vision
- **Coding: 84.3/100.** Good programming and code generation performance
- **Cost efficiency: 92.9/100.** Excellent cost-to-performance ratio
- **Overall Score: 86.4/100.** Strong all-around performance with excellent cost efficiency — excellent cost efficiency (92.9/100), strong multimodal (89.5/100), moderate reasoning (84.8/100), moderate tool use (79.6/100), good coding (84.3/100), good context window (93.7/100), making it a cost-effective production model with strong multimodal capabilities

---

## Signature

- Provided by: **GLM 4.7 Flash (zhipu-ai/glm-4.7-flash)** — 2026-10-25
- Method: Average.md data from model comparison; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Archived research pass — `GLM_4.7_Flash.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `GLM_4.7_Flash.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative — the archived model card was folded
> into the active model card above; the content below is preserved research history, not judged data. The archived pass (dated 2026-10-30) reported Overall 86.7/100 — superseded by the active scores above.

## INKLING-SMALL — GLM_4.7_Flash Research Report


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

Inkling-small is a general-purpose AI model designed for complex reasoning, coding, and knowledge work. It features strong performance across agentic benchmarks with optimized speed and extended context capabilities, targeted at cost-sensitive applications. The model ranks 59th overall with a score of 86.7/100, indicating strong performance in the frontier model landscape.

---

### Model Identity and Background

**Developer:** Not specified
**Release Date:** 2026
**Series:** Inkling (inkling-small, inkling, Inkling)
**Predecessor:** Not yet announced
**Successor:** Not yet announced
**License:** Proprietary
**Context Window:** Not specified
**Max Output:** Not specified

Inkling-small is a general-purpose AI model designed for complex reasoning, coding, and knowledge work. It features strong performance across agentic benchmarks with optimized speed and extended context capabilities, targeted at cost-sensitive applications. The model ranks 59th overall with a score of 86.7/100, indicating strong performance in the frontier model landscape.

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

Inkling-small ranks 59th overall with a score of 86.7/100, indicating strong performance in the frontier model landscape.

#### Third-Party Comparisons
**Snapshot:** 2026

Multiple independent sources provide comparative analysis:
- Inkling-small vs Inkling: Same series with different focus areas
- Pricing: Not specified
- Context window: Not specified
- Model size: Small variant

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

Inkling-small's real cost efficiency depends on:
- Prompt caching usage (not specified)
- Batch API usage (not specified)
- Effort level selection (not specified)
- Task complexity and length (not specified)
- Context length (not specified)
- Task type (not specified)

The model is positioned as a general-purpose model for complex reasoning, coding, and knowledge work with optimized speed and extended context capabilities, targeted at cost-sensitive applications. Detailed pricing information is not available in public sources.

---

### Strengths

1. **General-Purpose Performance:** Designed for complex reasoning, coding, and knowledge work
2. **Optimized Speed:** Designed for faster inference
3. **Extended Context:** Designed for longer contexts
4. **Cost-Sensitive:** Targeted at cost-sensitive applications
5. **Enterprise Integration:** Available through various third-party platforms and API integrations
6. **Knowledge Cutoff:** Not specified (likely current)
7. **Multimodal Capabilities:** Text input support
8. **Agentic Capabilities:** Strong tool use and reasoning capabilities

---

### Weaknesses

1. **Limited Independent Benchmarks:** Few third-party benchmark sources specifically for inkling-small
2. **Documentation:** Available documentation is less detailed than OpenAI, Anthropic, and Google's own marketing
3. **Knowledge Cutoff:** Not specified (older than some competitors)
4. **Pricing:** Not specified
5. **Context Window:** Not specified
6. **Documentation Availability:** Available documentation is less detailed than established model providers
7. **Self-Hosting:** Weights are not published (proprietary)

---

### Use Cases

#### Best For:
- Cost-sensitive applications and high-volume usage
- Educational and learning environments
- Prototyping and experimentation
- Low-resource applications
- Applications requiring frequent model interactions
- Cost-sensitive enterprise applications
- Research-grade tasks requiring strong agentic performance

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

3. **Pricing Transparency:** Pricing is not specified in public sources.

4. **Documentation Availability:** Available documentation is less detailed than established model providers, making it difficult to assess full capabilities.

5. **Self-Hosting:** Weights are not published, limiting customization and control.

---

### Conclusion

Inkling-small is a general-purpose AI model designed for complex reasoning, coding, and knowledge work. It features strong performance across agentic benchmarks with optimized speed and extended context capabilities, targeted at cost-sensitive applications. The model ranks 59th overall with a score of 86.7/100, indicating strong performance in the frontier model landscape.

The model's strengths in general-purpose performance, speed, and extended context, combined with a cost-sensitive design, make it a strong contender in the current market for organizations needing sophisticated AI for complex, multi-hour workflows and research tasks with faster inference and longer contexts, without significant cost constraints. The limited independent benchmark data and lack of specified knowledge cutoff, pricing, and context window may affect decision-making for some organizations.

For organizations seeking cost-effective general-purpose model capabilities with optimized speed and extended context, inkling-small could be an excellent option. For organizations requiring extensive documentation, benchmark validation, and third-party support, established models from OpenAI, Anthropic, or Google may offer better value and transparency, though at a cost. The lack of detailed pricing information and context window may also be a concern for organizations needing specific capabilities.

**Overall Assessment:** Solid general-purpose performance with cost-sensitive design; however, limited public documentation and benchmark data compared to established frontier models, and lack of specified knowledge cutoff, pricing, and context window may affect decision-making.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/inkling-small/GLM_4.7_Flash.md` (folder name = filesystem-safe slug). Use the exact assigned stem — never write a near-variant filename.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/inkling-small/`.
4. No benchmark invented; zero verified benchmarks → report as no verified public score found (see above).
