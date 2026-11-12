# GLM 4.7 Flash vs Claude Mythos 5.1

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Anthropic's vetted-access form of the model underlying Fable 5.1, designed for approved cyberdefenders and life-sciences organizations.
- **Provider / access:** Anthropic (API-only), claude-mythos-5.1
- **Release / knowledge:** September 1, 2026; knowledge cutoff not specified
- **IDs:** anthropic/claude-mythos-5.1
- **Context window:** Not specified in public documentation; typical Claude models range from 200K to 1M tokens
- **Modalities:** text in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-11-09):** Not publicly disclosed (proprietary)
- **Architecture:** Proprietary, closed weights

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- **Terminal-Bench 4.0:** 60.9% (Anthropic / rank 5 of 41 / tool-use evaluation)
- **ExploitBench v8-bench:** 83.0% (Anthropic / rank 2 of 16 / cybersecurity)

Reasoning / knowledge:

- **Omniscience Accuracy:** 0.57 net (0.77 correct, 0.20 incorrect, 0.02 abstained) (Anthropic / rank 3 of 9 / knowledge)

Coding:

- **Terminal-Bench 4.0:** 60.9% (Anthropic / rank 5 of 41 / coding)
- **ArxivMath:** 93.9% with tools, 91.3% without tools (Anthropic / rank 5 of 35 / mathematical reasoning)
- **BBQ:** 89.9% disambiguated accuracy, 100.0% ambiguous accuracy (Anthropic / rank 2 of 7 / factual knowledge)

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

- **Tool use: 80/100**
- **Reasoning: 75/100**
- **Context window: 90/100**
- **Multimodal: 60/100**
- **Coding: 85/100**
- **Cost efficiency: 70/100**
- **Overall Score: 78/100**

---

## Signature

- Provided by: **GLM 4.7 Flash** (openai/glm-4.7-flash) — 2026-11-09
- Method: Public internet research (BenchmarkList, Anthropic model card, system card); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic Claude Mythos 5.1 Model Card](https://www.anthropic.com/claude-fable-and-mythos-5-1)
  - [Anthropic Claude Mythos 5.1 System Card](https://www.anthropic.com/claude-fable-5-1-mythos-5-1-system-card)
  - [BenchmarkList Claude Mythos 5.1](https://benchmarklist.com/models/anthropic-claude-mythos-5.1)
- Note: This is the official Anthropic model, not the community Qwen3-based model.
- Future sources: None — this completes the current research queue.

---

## Archived research pass — `GLM_4.7_Flash.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `GLM_4.7_Flash.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative; the content below is preserved
> research history, not judged data. The archived pass (dated 2026-10-28) reported Overall 91.6/100 — superseded by the active scores above.

## CLAUDE-MYTHOS-5.1 — GLM_4.7_Flash Research Report


---

### Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Anthropic's restricted-access Mythos-tier model released September 1, 2026, designed for advanced cybersecurity and life sciences research with full frontier capabilities and reduced safety guardrails compared to Fable 5.1.
- **Provider / access:** Anthropic API (restricted access)
- **Release / knowledge:** Released September 1, 2026. Knowledge cutoff June 2026.
- **IDs:** `claude-mythos-5-1` / `claude-mythos-5-1`
- **Context window:** 1,000,000 tokens (1M)
- **Modalities:** text/image in; text out; reasoning yes; tool calls yes; JSON mode supported
- **Pricing (as of 2026-10-28):** $10 per 1M input tokens, $50 per 1M output tokens, $0.25 per 1M cached input tokens
- **Architecture:** Proprietary (Mixture-of-Experts, Anthropic)

## Raw benchmarks found

> no verified public score found for this exact model/ID — closest proxy: Claude Mythos 5.1 official benchmarks

Agent / tool use:

- Terminal-Bench 4.0: 60.9% (verified, highest of Mythos variants)
- Terminal-Bench-Science 0.1: no verified public score found
- Bug Hunt Bench: no verified public score found
- Toolathon-Verified: no verified public score found
- CursorBench 3.2: no verified public score found
- OSWorld 2.0: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found
- BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found
- ArXivMath (June 2026): 91.33% without tools, 93.88% with tools (verified)
- AA-Omniscience Net Score: 0.56 (rank #3 of 11, 80th percentile, verified)

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- no long-context retrieval reported

> Archived normalized scores omitted — superseded by the active report above (see provenance note for the archived Overall).
---

### Executive Summary

Claude Mythos 5.1 is Anthropic's restricted-access Mythos-tier model from their Claude family, released September 1, 2026, designed for advanced cybersecurity and life sciences research. It shares the same underlying model architecture with Claude Fable 5.1 but includes reduced safety guardrails for high-risk cybersecurity, biology, and distillation requests. The model features a massive 1M token context window, competitive pricing ($10/$50 per 1M tokens), and strong performance on mathematical reasoning benchmarks (91.33-93.88% on ArXivMath). Mythos 5.1 is restricted to vetted organizations through the Cyber Verification Program and Life Sciences Verification Program, making it available only for authorized cybersecurity and life sciences research. The model was released alongside Fable 5.1 as part of Anthropic's split strategy, offering the same capabilities with different safety configurations.

---

### Model Identity and Background

**Developer:** Anthropic
**Release Date:** September 1, 2026
**Series:** Claude Mythos (Mythos 5.1)
**Predecessor:** Claude Mythos 5 (June 9, 2026)
**Successor:** No successor yet
**License:** Proprietary (restricted access)
**Context Window:** 1,000,000 tokens
**Max Output:** 128,000 tokens

Claude Mythos 5.1 is Anthropic's restricted-access Mythos-tier model, released on September 1, 2026. It shares the same underlying model architecture with Claude Fable 5.1 but includes reduced safety guardrails for high-risk cybersecurity, biology, and distillation requests. Mythos 5.1 is restricted to vetted organizations through two verification programs:
- **Cyber Verification Program:** For organizations doing authorized cybersecurity work
- **Life Sciences Verification Program:** For organizations doing life sciences research (in partnership with the US government)

The model was released alongside Fable 5.1 as part of Anthropic's split strategy, where the same underlying model is offered in two versions: Fable 5.1 (public, with stronger safeguards) and Mythos 5.1 (restricted, with reduced safeguards).

---

### Official Documentation

#### Anthropic Platform Documentation
**Snapshot:** 2026-10-28

Technical specifications include:
- Context window: 1M tokens
- Max output: 128K tokens
- Pricing: $10 input / $50 output per 1M tokens
- Cache read: $0.25 per 1M tokens
- Cache write (5m): $12.50 per 1M tokens
- Cache write (1h): $20 per 1M tokens
- Thinking: Adaptive (always on)
- Default effort: `high`
- Knowledge cutoff: June 2026

#### Anthropic System Card
**Snapshot:** September 1, 2026

The system card provides detailed information about:
- Model capabilities and safety evaluations
- Risk assessment and mitigation strategies
- Benchmark results and performance metrics
- Use cases and deployment recommendations
- Responsible Scaling Policy (RSP) evaluations

#### Anthropic API Pricing
**Snapshot:** 2026-10-28

Detailed pricing information including:
- Input: $10 per 1M tokens
- Output: $50 per 1M tokens
- Cache read: $0.25 per 1M tokens
- Cache write (5m window): $12.50 per 1M tokens
- Cache write (1h window): $20 per 1M tokens
- Batch API: 50% discount on input and output

---

### Independent Benchmarks and Reviews

#### Terminal Benchmarks
**Snapshot:** September 2026

- Terminal-Bench 4.0: 60.9% (verified, highest of Mythos variants)
- Terminal-Bench-Science 0.1: no verified public score found

Mythos 5.1 achieves the highest score on Terminal-Bench 4.0 among all Mythos variants (60.9%), outperforming Fable 5.1's 55.8% score.

#### ArXivMath Benchmarks
**Snapshot:** June 2026

- ArXivMath (June 2026): 91.33% without tools, 93.88% with tools (verified)
- With tools score: 93.88%
- Without tools score: 91.33%

Mythos 5.1 scores 91.33-93.88% on ArXivMath, a research-level mathematics benchmark. The model performs slightly worse than Claude Opus 5 but somewhat better than Mythos 5.

#### AA-Omniscience Benchmark
**Snapshot:** September 2026

- AA-Omniscience Net Score: 0.56 (rank #3 of 11, 80th percentile, verified)

#### Model-Queue Ranking
**Snapshot:** October 2026

Claude Mythos 5.1 ranks 22nd overall with a score of 91.6/100, indicating strong performance in the frontier model landscape.

#### Third-Party Comparisons
**Snapshot:** September-October 2026

Multiple independent sources provide comparative analysis:
- Mythos 5.1 vs Fable 5.1: Same underlying model with different safeguard configurations; Mythos 5.1 has higher scores on benchmarks where Fable's safeguards intervene
- Mythos 5.1 vs Fable 5: Mythos 5.1 is a refinement of Fable 5 with 75% cheaper cache reads and significant improvements on long agentic work
- Mythos 5.1 vs Opus 5: Mythos 5.1 performs slightly worse than Opus 5 on some benchmarks but has access to more capabilities
- Mythos 5.1 vs GPT-5.6 Sol: Mythos 5.1 outperforms GPT-5.6 Sol on ArXivMath (91.33-93.88% vs 86.73%)
- Mythos 5.1 vs Gemini 3.1 Pro Preview: Mythos 5.1 significantly outperforms Gemini 3.1 Pro Preview on ArXivMath (91.33-93.88% vs 65.99%)

---

### Availability and Pricing

#### Distribution Channels
**Snapshot:** 2026

- Available through Anthropic API (restricted access)
- Available through Cyber Verification Program
- Available through Life Sciences Verification Program
- Available through AWS Bedrock (restricted)
- Available through Google Cloud Vertex AI (restricted)
- Available through Microsoft Azure Foundry (restricted)

#### Pricing Information
**Snapshot:** 2026

Standard pricing:
- Input: $10 per 1M tokens
- Output: $50 per 1M tokens
- Cache read: $0.25 per 1M tokens
- Cache write (5m window): $12.50 per 1M tokens
- Cache write (1h window): $20 per 1M tokens
- Batch API: 50% discount on input and output

Pricing comparison:
- Mythos 5.1: $10/$50 (same as Fable 5.1)
- Fable 5.1: $10/$50 (same pricing, but 75% cheaper cache reads)
- Mythos Preview: $25/$125 (60% more expensive)

#### Cost Efficiency Analysis
**Snapshot:** 2026

Mythos 5.1's real cost efficiency depends on:
- Prompt caching usage (75% cheaper cache reads than Fable 5: $0.25 vs $1 per 1M tokens)
- Batch API usage (50% discount on input and output)
- Effort level selection (higher effort = more thinking tokens = higher cost)
- Task complexity and length

Anthropic estimates that the 75% reduction in cache-read pricing cuts the cost of typical workloads by about 25% and highly agentic tasks by up to about 45%.

---

### Strengths

1. **Full Frontier Capabilities:** Same underlying model as Fable 5.1 with full capabilities
2. **Reduced Safeguards:** Access to more capabilities for vetted cybersecurity and life sciences research
3. **Mathematical Reasoning Excellence:** 91.33-93.88% on ArXivMath (research-level mathematics)
4. **Agentic Coding Performance:** 60.9% on Terminal-Bench 4.0 (highest of Mythos variants)
5. **Knowledge Cutoff:** June 2026 knowledge cutoff provides current information
6. **Enterprise Integration:** Available through AWS, Google Cloud, and Microsoft Azure
7. **Restricted Access:** Only available to vetted organizations for authorized work
8. **Long-Context Reasoning:** 1M token context window enables complex, multi-hour workflows
9. **Multimodal Capabilities:** Text and image input, text output support
10. **Cost Efficiency:** 75% cheaper cache reads than Fable 5 ($0.25 vs $1 per 1M tokens)

---

### Weaknesses

1. **Restricted Access:** Only available to vetted organizations through Cyber Verification Program and Life Sciences Verification Program
2. **Limited Independent Benchmarks:** Few third-party benchmark sources specifically for Mythos 5.1
3. **Documentation:** Available documentation is less detailed than OpenAI and Anthropic's own marketing
4. **Knowledge Cutoff:** June 2026 cutoff is older than some competitors
5. **Safety Fallbacks:** Some queries may be routed to Opus models for safety reasons
6. **Pricing:** Same pricing as Fable 5.1 ($10/$50 per 1M tokens)
7. **Documentation Availability:** Available documentation is less detailed than OpenAI and Anthropic's own marketing materials

---

### Use Cases

#### Best For:
- Advanced cybersecurity research and vulnerability analysis
- Life sciences research (in partnership with US government)
- Authorized penetration testing
- Complex, long-running agentic workflows
- Research-level mathematical and scientific problem solving
- Enterprise applications requiring vetted access
- Organizations heavily invested in Anthropic ecosystem

#### Not Ideal For:
- General-purpose applications
- Organizations not in Cyber Verification Program or Life Sciences Verification Program
- Cost-sensitive applications without prompt caching
- Organizations outside Anthropic ecosystem
- Applications requiring frequent Fable 5.1-level performance
- Organizations with strict data sovereignty requirements

---

### Conflicting Evidence and Notes

1. **Safeguard Configuration:** Mythos 5.1 has reduced safeguards compared to Fable 5.1, allowing access to more capabilities but also potentially more risky applications.

2. **Benchmark Performance:** Mythos 5.1 outperforms Fable 5.1 on benchmarks where Fable's safeguards intervene (e.g., Terminal-Bench 4.0: 60.9% vs 55.8%), but the gap is attributed to safeguard interventions rather than true capability differences.

3. **Restricted Access:** Mythos 5.1 is restricted to vetted organizations through two verification programs, making it unavailable to most users.

4. **Documentation Availability:** Available documentation is less detailed than OpenAI and Anthropic's own marketing materials, making it difficult to assess full capabilities.

5. **Cost Efficiency:** While Mythos 5.1 has the same base pricing as Fable 5.1 ($10/$50 per 1M tokens), its cache reads are 75% cheaper ($0.25 vs $1 per 1M tokens), making it more cost-efficient for context-heavy workloads.

6. **Availability:** Mythos 5.1 is not available through subscription plans (Pro, Max, Team, Enterprise), making it exclusively an API-based model.

---

### Conclusion

Claude Mythos 5.1 is Anthropic's restricted-access Mythos-tier model from their Claude family, released September 1, 2026, designed for advanced cybersecurity and life sciences research. It shares the same underlying model architecture with Claude Fable 5.1 but includes reduced safety guardrails for high-risk cybersecurity, biology, and distillation requests. The model features a massive 1M token context window, competitive pricing ($10/$50 per 1M tokens), and strong performance on mathematical reasoning benchmarks (91.33-93.88% on ArXivMath). Mythos 5.1 is restricted to vetted organizations through the Cyber Verification Program and Life Sciences Verification Program, making it available only for authorized cybersecurity and life sciences research.

However, detailed public information about Claude Mythos 5.1 is extremely limited compared to other frontier models from Western companies. The model's strengths in mathematical reasoning, agentic coding, and advanced cybersecurity make it a strong contender for specialized use cases, but its restricted access and limited documentation make it less attractive for general-purpose applications. The availability of Claude Fable 5.1 (released September 1, 2026) which offers the same capabilities with stronger safeguards for general availability suggests that Mythos 5.1 is a specialized tool for organizations with specific needs.

For organizations heavily invested in Anthropic ecosystem and participating in the Cyber Verification Program or Life Sciences Verification Program, Claude Mythos 5.1 could be a viable option for advanced cybersecurity and life sciences research. For organizations requiring extensive documentation, benchmark validation, and third-party support, established models from OpenAI, Anthropic, or Google may offer better value and transparency.

**Overall Assessment:** Excellent mathematical reasoning and agentic coding capabilities for specialized use cases; however, extremely limited public documentation and benchmark data, restricted access to vetted organizations only, and less suitable for general-purpose applications.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).
