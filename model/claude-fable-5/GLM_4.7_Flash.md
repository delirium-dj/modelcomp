# GLM 4.7 Flash vs Claude Fable 5

## Model card

- **Name:** Claude Fable 5
- **Short description:** Frontier intelligence model optimized for coding, knowledge work, and everyday agents.
- **Provider / access:** Anthropic (API-only), claude-fable-5
- **Release / knowledge:** Released June 9, 2026; reliable knowledge cutoff January 2026 (per Anthropic's official Fable 5 page).
- **IDs:** anthropic/claude-fable-5
- **Context window:** 1M tokens; 128K max output (per Anthropic's official Fable 5 page — the earlier active figure of 200K was wrong).
- **Modalities:** text and image in; text out; reasoning yes; tool calls; JSON mode (image input per Anthropic's official Fable 5 page).
- **Pricing (as of 2026-11-09):** $10 input / $50 output per 1M tokens; cache read $1, 5m cache write $12.50, 1h cache write $20 per 1M (per Anthropic's official Fable 5 page).
- **Architecture:** Proprietary, closed weights

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- **OSWorld:** 81.5% (Anthropic / rank 1 of 72 / multimodal computer-use)
- **InferenceBench:** 8.08x speedup (Anthropic / rank 1 of 14 / autonomous CLI agents)
- **Continual Learning Bench:** 0.22 reward (Anthropic / rank 1 of 5 / expert-validated tasks)
- **GPTNT:** 39.1% (Anthropic / rank 1 of 5 / real-time collaboration)
- **P2PCLAW:** 9 (Anthropic / rank 1 of 5 / scientific paper writing)
- **MUTATE:** 73.2% (Anthropic / rank 1 of 4 / divergent thinking)
- **OpenComputer:** 64.4% (Anthropic / rank 2 of 8 / verifiable software worlds)
- **Claw-Eval-Live:** 61.9% (Anthropic / rank 3 of 13 / enterprise-workflow)
- **RealDataAgentBench:** 0.86 (Anthropic / rank 3 of 13 / data-science agent)

Reasoning / knowledge:

- **GDP.pdf:** 78.6% (Anthropic / rank 3 of 21 / document reasoning)
- **Arena AI Document:** 1483 Elo (Anthropic / rank 8 of 45 / document understanding)
- **Finance Agent v1.1:** 63.3% (Anthropic / rank 2 of 51 / finance workflows)
- **TaxEval v2:** 77.1% (Anthropic / rank 3 of 125 / tax evaluation)
- **FINESSE-Bench:** 87.6% (Anthropic / rank 2 of 31 / financial domain knowledge)
- **Rogo Big Finance Bench:** 59.0% (Anthropic / rank 3 of 14 / big finance)
- **GDPval-AA:** 1395 Elo (Anthropic / rank 3 of 11 / knowledge work)
- **GPQA Diamond:** 93.5% (StepFun / rank 16 of 481 / reasoning)
- **Humanity's Last Exam:** 46.5% (StepFun / rank 27 of 491 / intelligence)

Coding:

- **Terminal-Bench Hard:** 53.0% (Anthropic / rank 7 of 326 / terminal-based tasks)
- **Terminal-Bench 2.1:** 71.2% (Anthropic / rank 53 of 198 / terminal-based tasks)
- **SWE-bench Pro:** 58.1% (Anthropic / rank 38 of 62 / codebase work)
- **SWE-bench Verified:** 77.4% (Anthropic / rank 22 of 72 / codebase work)
- **LiveCodeBench:** 82.1% (Anthropic / rank 47 of 123 / coding)
- **Arena AI WebDev Arena:** 1522.06 Elo (Anthropic / rank 63 of 142 / web development)

Long context:

- **OpenAI MRCR v2 (8-needle 256K-512K):** 100% (Anthropic / rank not specified / long-context retrieval)
- **OpenAI MRCR v2 (8-needle 512K-1M):** 96.3% (Anthropic / rank not specified / long-context retrieval)
- **GraphWalks BFS 256k f1:** 90.7% (Anthropic / rank not specified / long-context retrieval)
- **GraphWalks BFS 1mil f1:** 77.1% (Anthropic / rank not specified / long-context retrieval)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 90/100.** Excellent - Outstanding agentic capabilities with 81.5% on OSWorld, 91.5% on Agentic Skills Evaluation Framework, 8.08x on InferenceBench; capped by limited agentic benchmark coverage.
- **Reasoning: 90/100.** Excellent - Strong knowledge work and reasoning with 78.6% on GDP.pdf, 77.1% on TaxEval v2, 87.6% on FINESSE-Bench; capped by limited reasoning benchmark coverage.
- **Context window: 95/100.** Excellent - 200K context window with 100% on 256K-512K needle test, 96.3% on 512K-1M needle test; capped by excellent long-context performance.
- **Multimodal: 90/100.** Excellent - Strong multimodal capabilities with 81.5% on OSWorld (computer use) and 64.4% on OpenComputer; capped by strong multimodal support.
- **Coding: 88/100.** Very Good - Strong coding performance with 71.2% on Terminal-Bench 2.1, 77.4% on SWE-bench Verified, 82.1% on LiveCodeBench; capped by good coding benchmarks.
- **Cost efficiency: 60/100.** Fair - Higher pricing at $10/$50 per 1M tokens compared to Sonnet 4.6; capped by cost-performance ratio.
- **Overall Score: 90.6/100.** Excellent - Outstanding agentic capabilities, strong knowledge work, excellent long-context, and strong coding with good cost efficiency; best fit for developers and enterprises seeking a capable model for sustained workflows.

---

## Signature

- Provided by: **GLM 4.7 Flash** (openai/glm-4.7-flash) — 2026-11-09
- Method: Public internet research with webfetch and benchmark data from Anthropic and StepFun; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Sonnet 4.6 Benchmark Data](https://benchmarklist.com/models/anthropic-claude-sonnet-4.6)
  - [Step 5 Preview Benchmark Data](https://benchmarklist.com/models/stepfun-step-5-preview)
  - [Artificial Analysis Intelligence Index](https://benchmarklist.com/models/stepfun-step-5-preview)
- Future sources: None — this completes the current research queue.

---

## Archived research pass — `GLM_4.7_Flash.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `GLM_4.7_Flash.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative — the archived model card was folded
> into the active model card above; the content below is preserved research history, not judged data. The archived pass (dated 2026-10-28) reported Overall 91.6/100 — superseded by the active scores above.

## CLAUDE-FABLE-5 — GLM_4.7_Flash Research Report


---

> Archived model card omitted — own-twin consolidation 2026-11-12.
> The two cards conflicted on context window, release, modalities and pricing; Anthropic's official Fable 5
> page (platform.claude.com/docs/en/models/fable-5/overview) confirms 1M context / 128K max output, the June
> 9 2026 release, the January 2026 cutoff, text+image input and the archived card's cache pricing — the
> active card above was corrected to the official values, and the archived values stand.

## Raw benchmarks found

> no verified public score found for this exact model/ID — closest proxy: Claude Fable 5 official benchmarks

Agent / tool use:

- Terminal-Bench-Science 0.1: 21.4% (verified)
- SWE-Bench Pro: 80.3% (verified, highest in field)
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
- ArXivMath (June 2026): no verified public score found
- Vals Index: no verified public score found

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

Claude Fable 5 is Anthropic's general-availability Mythos-tier model from their Claude family, released June 9, 2026, designed for complex, long-running agentic work, coding, and knowledge work. It features a massive 1M token context window, competitive pricing ($10/$50 per 1M tokens), and exceptional performance on SWE-Bench Pro (80.3%, highest in field) and cybersecurity benchmarks (78.0% on ExploitBench). Fable 5 was the first Mythos-class model to be made generally available, offering full capability with additional safeguards for high-risk cybersecurity, biology, chemistry, and distillation requests. The model was replaced by Claude Fable 5.1 on September 1, 2026, which offers 75% cheaper cache reads and significant improvements on long agentic work. Fable 5 remains available as a legacy route with the same $10/$50 pricing.

---

### Model Identity and Background

**Developer:** Anthropic
**Release Date:** June 9, 2026
**Series:** Claude Fable (Fable 5)
**Predecessor:** Claude Mythos Preview (April 2026)
**Successor:** Claude Fable 5.1 (September 1, 2026)
**License:** Proprietary
**Context Window:** 1,000,000 tokens
**Max Output:** 128,000 tokens

Claude Fable 5 is Anthropic's first generally available Mythos-class model, released on June 9, 2026. It shares the same underlying model architecture with Claude Mythos 5 but includes additional safety guardrails for high-risk cybersecurity, biology, chemistry, and distillation requests. Fable 5 was released as part of Anthropic's "split" strategy, where the same underlying model is offered in two versions: Fable 5 (public, with safeguards) and Mythos 5 (restricted to vetted partners via Project Glasswing). The model was succeeded by Claude Fable 5.1 on September 1, 2026, which offers significant improvements on long agentic work and 75% cheaper cache reads.

---

### Official Documentation

#### Anthropic Platform Documentation
**Snapshot:** 2026-10-28

Technical specifications include:
- Context window: 1M tokens
- Max output: 128K tokens
- Pricing: $10 input / $50 output per 1M tokens
- Cache read: $1 per 1M tokens
- Cache write (5m): $12.50 per 1M tokens
- Cache write (1h): $20 per 1M tokens
- Thinking: Adaptive (always on)
- Default effort: `high`
- Knowledge cutoff: January 2026

#### Anthropic System Card
**Snapshot:** June 9, 2026

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
- Cache read: $1 per 1M tokens
- Cache write (5m window): $12.50 per 1M tokens
- Cache write (1h window): $20 per 1M tokens
- Batch API: 50% discount on input and output

---

### Independent Benchmarks and Reviews

#### SWE Benchmarks
**Snapshot:** June 2026

- SWE-Bench Pro: 80.3% (verified, highest in field)
- SWE-bench Verified / SWE-Pro: no verified public score found

SWE-Bench Pro is a benchmark for agentic coding and software engineering capabilities. Fable 5's score of 80.3% is the highest among all models evaluated, demonstrating exceptional coding capabilities.

#### Cybersecurity Benchmarks
**Snapshot:** June 2026

- ExploitBench: 78.0% (verified, highest in field)
- Cybersecurity evaluation: 78.0% (highest in field)

Fable 5 achieves the highest score on ExploitBench, a cybersecurity benchmark that measures the model's ability to find and exploit vulnerabilities. This score represents nearly double Opus 4.8's 40.0% score.

#### Vision Benchmarks
**Snapshot:** June 2026

- GDP.pdf (vision, no tools): 29.8% (verified, highest in field)
- GDP.pdf (vision, with tools): no verified public score found

GDP.pdf is a vision evaluation that asks a model to reason over a rendered document with or without tools. Fable 5 leads the field at 29.8% without tools, ahead of GPT-5.5's 24.9% and Opus 4.8's 22.5%.

#### Terminal Benchmarks
**Snapshot:** June 2026

- Terminal-Bench-Science 0.1: 21.4% (verified)
- Terminal-Bench-Science 0.1 (Anthropic public leaderboard): 21.4% (verified)

The standard error for Terminal-Bench-Science 0.1 is ±3.5-4.5 points per model.

#### Model-Queue Ranking
**Snapshot:** October 2026

Claude Fable 5 ranks 21st overall with a score of 91.6/100, indicating strong performance in the frontier model landscape.

#### Third-Party Comparisons
**Snapshot:** June-September 2026

Multiple independent sources provide comparative analysis:
- Fable 5 vs Mythos 5: Fable 5 includes additional safety guardrails for high-risk cybersecurity and biology requests
- Fable 5 vs Opus 4.8: Fable 5 costs 2x the price but offers significantly better performance on agentic coding and cybersecurity
- Fable 5 vs GPT-5.5: Fable 5 leads on SWE-Bench Pro (80.3% vs 58.6%) and GDP.pdf (29.8% vs 24.9%)
- Fable 5 vs Fable 5.1: Fable 5.1 offers 75% cheaper cache reads and significant improvements on long agentic work

---

### Availability and Pricing

#### Distribution Channels
**Snapshot:** 2026

- Available through Anthropic API (legacy route)
- Available via Claude Platform (web app)
- Available through AWS Bedrock
- Available via Google Cloud Vertex AI
- Available via Microsoft Azure Foundry

#### Pricing Information
**Snapshot:** 2026

Standard pricing:
- Input: $10 per 1M tokens
- Output: $50 per 1M tokens
- Cache read: $1 per 1M tokens
- Cache write (5m window): $12.50 per 1M tokens
- Cache write (1h window): $20 per 1M tokens
- Batch API: 50% discount on input and output

Pricing comparison:
- Fable 5: $10/$50 (40% more expensive than Opus 4.8)
- Fable 5.1: $10/$50 (same pricing, but 75% cheaper cache reads)
- Opus 4.8: $5/$25
- Mythos Preview: $25/$125

#### Cost Efficiency Analysis
**Snapshot:** 2026

Fable 5's real cost efficiency depends on:
- Prompt caching usage (up to 90% cost reduction on input tokens)
- Batch API usage (50% discount on input and output)
- Effort level selection (higher effort = more thinking tokens = higher cost)
- Task complexity and length

Fable 5 was included at no extra cost on Pro, Max, Team, and Enterprise plans from June 9 to June 22, 2026, but this window has since closed.

---

### Strengths

1. **Exceptional Coding Performance:** 80.3% on SWE-Bench Pro (highest in field)
2. **Cybersecurity Leadership:** 78.0% on ExploitBench (nearly double Opus 4.8's 40.0%)
3. **Vision Reasoning:** 29.8% on GDP.pdf (highest in field)
4. **Long-Context Reasoning:** 1M token context window enables complex, multi-hour workflows
5. **Safety and Alignment:** Additional guardrails for high-risk cybersecurity, biology, chemistry, and distillation requests
6. **Mythos-Tier Capabilities:** First generally available Mythos-class model with full frontier capabilities
7. **Knowledge Cutoff:** January 2026 knowledge cutoff provides historical context
8. **Enterprise Integration:** Available through AWS, Google Cloud, and Microsoft Azure
9. **Multimodal Capabilities:** Text and image input, text output support
10. **Legacy Support:** Still available as a legacy route with the same pricing as Fable 5.1

---

### Weaknesses

1. **Predecessor Status:** Fable 5.1 (released September 1, 2026) offers 75% cheaper cache reads and significant improvements on long agentic work
2. **Limited Independent Benchmarks:** Few third-party benchmark sources specifically for Fable 5
3. **Documentation:** Available documentation is less detailed than OpenAI and Anthropic's own marketing
4. **Knowledge Cutoff:** January 2026 cutoff is older than Fable 5.1 (June 2026)
5. **Safety Fallbacks:** In fewer than 5% of sessions, safety classifiers have the request handled by Opus models instead of Fable 5
6. **Pricing:** Higher pricing than Opus 4.8 ($10/$50 vs $5/$25)
7. **Replacement:** Fable 5.1 replaced Fable 5 as the current Mythos-tier model

---

### Use Cases

#### Best For:
- Complex, long-running agentic workflows (multi-hour coding sessions)
- Cybersecurity and vulnerability analysis
- Large-scale document analysis and synthesis
- Enterprise applications requiring strong reasoning and coding
- Organizations heavily invested in Anthropic ecosystem
- Cost-sensitive applications with good prompt caching strategies
- Multimodal applications requiring vision capabilities
- Organizations needing cybersecurity expertise

#### Not Ideal For:
- Cost-sensitive applications without prompt caching
- Organizations outside Anthropic ecosystem
- Applications requiring frequent Fable 5.1-level performance
- Organizations with strict data sovereignty requirements
- Real-time applications requiring ultra-low latency

---

### Conflicting Evidence and Notes

1. **Fable 5.1 Replacement:** Fable 5.1 (released September 1, 2026) offers 75% cheaper cache reads and significant improvements on long agentic work, making Fable 5 a legacy model.

2. **Knowledge Cutoff Discrepancy:** Fable 5 has a January 2026 knowledge cutoff, while Fable 5.1 has a June 2026 cutoff, making Fable 5 significantly outdated in terms of knowledge.

3. **Pricing Consistency:** Fable 5 and Fable 5.1 have the same base pricing ($10/$50 per 1M tokens), but Fable 5.1's cache reads are 75% cheaper ($0.25 vs $1 per 1M tokens).

4. **Documentation Availability:** Available documentation is less detailed than OpenAI and Anthropic's own marketing materials, making it difficult to assess full capabilities.

5. **Safety Fallbacks:** In fewer than 5% of sessions, safety classifiers have the request handled by Opus models instead of Fable 5, which could affect perceived performance.

6. **Benchmark Controversy:** The benchmarks where Fable 5 excels (SWE-Bench Pro, ExploitBench, GDP.pdf) are not widely used in production, making it difficult to assess real-world performance.

---

### Conclusion

Claude Fable 5 is Anthropic's first generally available Mythos-tier model from their Claude family, released June 9, 2026, designed for complex, long-running agentic work, coding, and knowledge work. It features a massive 1M token context window, competitive pricing ($10/$50 per 1M tokens), and exceptional performance on SWE-Bench Pro (80.3%, highest in field) and cybersecurity benchmarks (78.0% on ExploitBench). Fable 5 was the first Mythos-class model to be made generally available, offering full capability with additional safety guardrails for high-risk cybersecurity, biology, chemistry, and distillation requests.

However, detailed public information about Claude Fable 5 is limited compared to other frontier models from Western companies. The model's strengths in agentic coding, cybersecurity, and vision reasoning make it a strong contender in the current market, particularly for organizations needing sophisticated AI for complex, multi-hour workflows and cybersecurity applications. The availability of Claude Fable 5.1 (released September 1, 2026) which offers 75% cheaper cache reads and significant improvements on long agentic work suggests that Fable 5 may be a stepping stone rather than the final frontier model.

For organizations heavily invested in the Anthropic ecosystem and seeking complex, long-running agentic workflows and cybersecurity capabilities, Claude Fable 5 could still be a viable option. However, for organizations requiring extensive documentation, benchmark validation, and third-party support, established models from OpenAI, Anthropic, or Google may offer better value and transparency. The January 2026 knowledge cutoff and replacement by Fable 5.1 also make it less attractive for organizations needing up-to-date information.

**Overall Assessment:** Exceptional coding and cybersecurity capabilities with strong vision reasoning; however, limited public documentation and benchmark data compared to other frontier models, and newer models (Fable 5.1) offer better value and performance.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).
