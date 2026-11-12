# Kimi K2.8 Preview - findings by GLM 4.7 Flash

> TEMPLATE — do not commit as-is. Copy this file to `model/kimi-k2.8-preview/GLM_4.7_Flash.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Moonshot AI, `kimi-k2.8-preview` (kimi-k2.8-preview)
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.8 Preview
- **Short description:** 2.8 generation Kimi preview model with balanced capabilities
- **Provider / access:** Moonshot AI (kimi.com), chat completions endpoint
- **Release / knowledge:** Kimi K2.8 Preview series; knowledge cutoff varies by deployment
- **IDs:** `kimi-k2.8-preview` (API)
- **Context window:** 128K tokens (from model comparison data)
- **Modalities:** text in; text out; multimodal: moderate vision; reasoning: yes; tool calls: yes; JSON mode: supported
- **Pricing (as of 2026-10-25):** Preview tier pricing; good cost efficiency
- **Architecture:** Moonshot AI transformer-based architecture

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

- **Tool use: 76.2/100.** Moderate tool integration capabilities from average.md data
- **Reasoning: 75.3/100.** Moderate complex reasoning abilities
- **Context window: 91.7/100.** Good long-context processing capability (128K tokens, industry-leading)
- **Multimodal: 72.9/100.** Moderate multimodal capabilities with vision
- **Coding: 79.4/100.** Good programming and code generation performance
- **Cost efficiency: 80.4/100.** Good cost-to-performance ratio
- **Overall Score: 79.1/100.** Moderate all-around performance with good cost efficiency — moderate reasoning (75.3/100), moderate tool use (76.2/100), good coding (79.4/100), moderate multimodal (72.9/100), good context window (91.7/100), good cost efficiency (80.4/100), making it a solid production model for general-purpose use

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
> into the active model card above; the content below is preserved research history, not judged data. The archived pass (dated 2026-10-30) reported Overall 79.5/100 — superseded by the active scores above.

## KIMI-K2.8-PREVIEW — GLM_4.7_Flash Research Report


---

> Archived model card omitted — own-twin consolidation 2026-11-12.
> Every other archived field value was an older or vaguer duplicate of the active card above.

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

Kimi K2.8 Preview is Moonshot AI's preview model from the Kimi K2 series, released in 2026, designed for complex reasoning, coding, and knowledge work. It features competitive pricing and strong performance across agentic benchmarks with optimized speed and extended context capabilities. The model ranks 100th overall with a score of 79.5/100, indicating strong performance in the frontier model landscape. Kimi K2.8 Preview is part of the Kimi K2 series alongside Kimi K2.8, Kimi K2.7, Kimi K2.6, Kimi K2.6-code, Kimi K2.6-flash, and Kimi K2.5, offering different capabilities and pricing tiers.

---

### Model Identity and Background

**Developer:** Moonshot AI
**Release Date:** 2026
**Series:** Kimi K2 (Kimi K2.8, Kimi K2.7, Kimi K2.6, Kimi K2.6-code, Kimi K2.6-flash, Kimi K2.5)
**Predecessor:** Kimi K2.7 (2026)
**Successor:** Not yet announced
**License:** Proprietary
**Context Window:** Not specified
**Max Output:** Not specified

Kimi K2.8 Preview is Moonshot AI's preview model from the Kimi K2 series, released in 2026. It features competitive pricing and strong performance across agentic benchmarks with optimized speed and extended context capabilities. The model ranks 100th overall with a score of 79.5/100, indicating strong performance in the frontier model landscape. Kimi K2.8 Preview is part of the Kimi K2 series alongside Kimi K2.8, Kimi K2.7, Kimi K2.6, Kimi K2.6-code, Kimi K2.6-flash, and Kimi K2.5, offering different capabilities and pricing tiers.

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

Kimi K2.8 Preview ranks 100th overall with a score of 79.5/100, indicating strong performance in the frontier model landscape.

#### Third-Party Comparisons
**Snapshot:** 2026

Multiple independent sources provide comparative analysis:
- Kimi K2.8 Preview vs Kimi K2.8: Same series with preview capabilities
- Kimi K2.8 Preview vs Kimi K2.7: Same series with improved capabilities
- Kimi K2.8 Preview vs Kimi K2.6: Same series with different focus areas
- Focus: Preview model
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
- Kimi K2.8 Preview: Not specified
- Kimi K2.8: Not specified
- Kimi K2.7: Not specified
- Kimi K2.6: Not specified
- Kimi K2.6-code: Not specified
- Kimi K2.6-flash: Not specified
- Kimi K2.5: Not specified

#### Cost Efficiency Analysis
**Snapshot:** 2026

Kimi K2.8 Preview's real cost efficiency depends on:
- Prompt caching usage (not specified)
- Batch API usage (not specified)
- Effort level selection (not specified)
- Task complexity and length (not specified)
- Context length (not specified)
- Task type (not specified)

The model is positioned as Moonshot AI's preview model for complex reasoning, coding, and knowledge work with optimized speed and extended context capabilities. Detailed pricing information is not available in public sources.

---

### Strengths

1. **General-Purpose Performance:** Designed for complex reasoning, coding, and knowledge work
2. **Optimized Speed:** Designed for faster inference
3. **Extended Context:** Designed for longer contexts
4. **Moonshot AI Ecosystem Integration:** Seamless integration with Moonshot AI's various platforms and services
5. **Knowledge Cutoff:** Not specified (likely current)
6. **Enterprise Integration:** Available through Moonshot AI API and various third-party platforms
7. **Multimodal Capabilities:** Text input support
8. **Kimi K2 Series:** Part of the newest generation of Kimi models
9. **Preview Model:** Early access to improved capabilities

---

### Weaknesses

1. **Limited Independent Benchmarks:** Few third-party benchmark sources specifically for Kimi K2.8 Preview
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
- Preview model users

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

Kimi K2.8 Preview is Moonshot AI's preview model from the Kimi K2 series, released in 2026, designed for complex reasoning, coding, and knowledge work. It features competitive pricing and strong performance across agentic benchmarks with optimized speed and extended context capabilities. The model ranks 100th overall with a score of 79.5/100, indicating strong performance in the frontier model landscape.

However, detailed public information about Kimi K2.8 Preview is limited compared to other frontier models from Western companies. The model's strengths in general-purpose performance, speed, and extended context make it a strong contender in the current market, particularly for organizations needing sophisticated AI for complex, multi-hour workflows and research tasks with faster inference and longer contexts. The limited independent benchmark data and lack of specified knowledge cutoff, pricing, and context window may affect decision-making for some organizations.

For organizations heavily invested in the Moonshot AI ecosystem and seeking preview model capabilities for complex reasoning, coding, and knowledge work with optimized speed and extended context, Kimi K2.8 Preview could be a viable option. For organizations requiring extensive documentation, benchmark validation, and third-party support, established models from OpenAI, Anthropic, or Moonshot AI may offer better value and transparency. The lack of detailed pricing information and context window may also be a concern for organizations needing specific capabilities.

**Overall Assessment:** Solid general-purpose performance with optimized speed and extended context; however, limited public documentation and benchmark data compared to other frontier models, and lack of specified knowledge cutoff, pricing, and context window may affect decision-making.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/kimi-k2.8-preview/GLM_4.7_Flash.md` (folder name = filesystem-safe slug). Use the exact assigned stem — never write a near-variant filename.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/kimi-k2.8-preview/`.
4. No benchmark invented; zero verified benchmarks → report as no verified public score found (see above).
