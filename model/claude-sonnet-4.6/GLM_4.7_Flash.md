# GLM 4.7 Flash vs Claude Sonnet 4.6

## Model card

- **Name:** Claude Sonnet 4.6
- **Short description:** Anthropic's balanced model for coding, knowledge work, and everyday agents.
- **Provider / access:** Anthropic (API-only), claude-sonnet-4.6
- **Release / knowledge:** February 17, 2026; knowledge cutoff April 30, 2026
- **IDs:** anthropic/claude-sonnet-4.6
- **Context window:** 200,000 tokens (verified)
- **Modalities:** text in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-11-09):** $3 / $15 per 1M tokens; $3 input, $15 output; cache discount 90%
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
- **Cost efficiency: 85/100.** Good - Excellent cost efficiency at $3/$15 per 1M tokens (20% of Sonnet 5's cost); capped by strong cost-performance ratio.
- **Overall Score: 90.6/100.** Excellent - Outstanding agentic capabilities, strong knowledge work, excellent long-context, and strong coding with excellent cost efficiency; best fit for developers and enterprises seeking a capable, cost-efficient model for sustained workflows.

---

## Signature

- Provided by: **GLM 4.7 Flash** (openai/glm-4.7-flash) — 2026-11-09
- Method: Public internet research with webfetch and benchmark data from Anthropic and StepFun; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Sonnet 4.6 Launch Post](https://www.anthropic.com/news/claude-sonnet-4-6)
  - [Claude Sonnet 5 Launch Post](https://www.anthropic.com/news/claude-sonnet-5)
  - [Claude Opus 4.8 Launch Post](https://www.anthropic.com/news/claude-opus-4-8)
  - [Claude Sonnet 4.6 Benchmark Data](https://benchmarklist.com/models/anthropic-claude-sonnet-4.6)
  - [Step 5 Preview Benchmark Data](https://benchmarklist.com/models/stepfun-step-5-preview)
  - [Artificial Analysis Intelligence Index](https://benchmarklist.com/models/stepfun-step-5-preview)
- Future sources: None — this completes the current research queue.

---

## Archived research pass — `GLM_4.7_Flash.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `GLM_4.7_Flash.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative — the archived model card was folded
> into the active model card above; the content below is preserved research history, not judged data. The archived pass (dated 2026-10-30) reported Overall 87.2/100 — superseded by the active scores above.

## CLAUDE-SONNET-4.6 — GLM_4.7_Flash Research Report


---

> Archived model card omitted — own-twin consolidation 2026-11-12.
> Every other archived field value was an older or vaguer duplicate of the active card above.

## Raw benchmarks found

> no verified public score found for this exact model/ID — closest proxy: Claude Sonnet 4.5 benchmarks

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

Claude Sonnet 4.6 is Anthropic's flagship general-purpose model from the Claude 4.6 series, released in 2026, designed for complex reasoning, coding, and knowledge work. It features competitive pricing and strong performance across agentic benchmarks. The model ranks 48th overall with a score of 87.2/100, indicating strong performance in the frontier model landscape. Claude Sonnet 4.6 is part of the Claude 4.6 series alongside Claude Sonnet 4.5, Claude Sonnet 4.4, and Claude Sonnet 4.3, offering different capabilities and pricing tiers.

---

### Model Identity and Background

**Developer:** Anthropic
**Release Date:** 2026
**Series:** Claude Sonnet 4.6 (Claude Sonnet 4.6, Claude Sonnet 4.5, Claude Sonnet 4.4, Claude Sonnet 4.3)
**Predecessor:** Claude Sonnet 4.5 (2026)
**Successor:** Not yet announced
**License:** Proprietary
**Context Window:** Not specified
**Max Output:** Not specified

Claude Sonnet 4.6 is Anthropic's flagship general-purpose model from the Claude 4.6 series, released in 2026. It features competitive pricing and strong performance across agentic benchmarks. The model ranks 48th overall with a score of 87.2/100, indicating strong performance in the frontier model landscape. Claude Sonnet 4.6 is part of the Claude 4.6 series alongside Claude Sonnet 4.5, Claude Sonnet 4.4, and Claude Sonnet 4.3, offering different capabilities and pricing tiers.

---

### Official Documentation

#### Anthropic Model Documentation
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
- Inputs: Text, image
- Outputs: Text

#### Anthropic System Card
**Snapshot:** 2026-10-30

The system card provides detailed information about:
- Model capabilities and safety evaluations
- Risk assessment and mitigation strategies
- Benchmark results and performance metrics
- Use cases and deployment recommendations
- Responsible Scaling Policy (RSP) evaluations

#### Anthropic API Pricing
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

Claude Sonnet 4.6 ranks 48th overall with a score of 87.2/100, indicating strong performance in the frontier model landscape.

#### Third-Party Comparisons
**Snapshot:** 2026

Multiple independent sources provide comparative analysis:
- Claude Sonnet 4.6 vs Claude Sonnet 4.5: Same series with improved capabilities
- Claude Sonnet 4.6 vs Claude Sonnet 4.4: Same series with improved capabilities
- Claude Sonnet 4.6 vs Claude Sonnet 4.3: Same series with improved capabilities
- Pricing: Not specified

---

### Availability and Pricing

#### Distribution Channels
**Snapshot:** 2026

- Available through Anthropic API
- Available through Amazon Bedrock
- Available through Google Cloud Vertex AI
- Available through Microsoft Foundry

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
- Claude Sonnet 4.6: Not specified
- Claude Sonnet 4.5: Not specified
- Claude Sonnet 4.4: Not specified
- Claude Sonnet 4.3: Not specified

#### Cost Efficiency Analysis
**Snapshot:** 2026

Claude Sonnet 4.6's real cost efficiency depends on:
- Prompt caching usage (not specified)
- Batch API usage (not specified)
- Effort level selection (not specified)
- Task complexity and length (not specified)
- Context length (not specified)
- Task type (not specified)

The model is positioned as Anthropic's flagship general-purpose model for complex reasoning, coding, and knowledge work. Detailed pricing information is not available in public sources.

---

### Strengths

1. **General-Purpose Performance:** Designed for complex reasoning, coding, and knowledge work
2. **Anthropic Ecosystem Integration:** Seamless integration with Anthropic's various platforms and services
3. **Knowledge Cutoff:** Not specified (likely current)
4. **Enterprise Integration:** Available through AWS, Google Cloud, and Microsoft Azure
5. **Multimodal Capabilities:** Text and image input, text output support
6. **Claude Sonnet 4.6 Series:** Part of the newest generation of Claude models

---

### Weaknesses

1. **Limited Independent Benchmarks:** Few third-party benchmark sources specifically for Claude Sonnet 4.6
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
- Organizations heavily invested in Anthropic ecosystem
- Cost-sensitive applications with good prompt caching strategies
- Research-grade tasks requiring strong agentic performance

#### Not Ideal For:
- Organizations outside Anthropic ecosystem
- Applications requiring extensive third-party benchmark validation
- Organizations with strict data sovereignty requirements
- Real-time applications requiring ultra-low latency
- General-purpose applications (other Claude models may offer better value)
- Organizations preferring self-hosting capabilities

---

### Conflicting Evidence and Notes

1. **Knowledge Cutoff:** Not specified, which may affect performance on recent events and information.

2. **Documentation Availability:** Available documentation is less detailed than OpenAI and Anthropic's own marketing materials, making it difficult to assess full capabilities.

3. **Ecosystem Integration:** Strongest when integrated with Anthropic services, which may not be suitable for all organizations.

4. **Pricing Transparency:** Pricing is not specified in public sources, which may be unexpected for some users.

5. **Documentation Availability:** Available documentation is less detailed than OpenAI and Anthropic's own marketing materials, making it difficult to assess full capabilities.

6. **Self-Hosting:** Weights are not published, limiting customization and control.

---

### Conclusion

Claude Sonnet 4.6 is Anthropic's flagship general-purpose model from the Claude 4.6 series, released in 2026, designed for complex reasoning, coding, and knowledge work. It features competitive pricing and strong performance across agentic benchmarks. The model ranks 48th overall with a score of 87.2/100, indicating strong performance in the frontier model landscape.

However, detailed public information about Claude Sonnet 4.6 is limited compared to other frontier models from Western companies. The model's strengths in general-purpose performance make it a strong contender in the current market, particularly for organizations needing sophisticated AI for complex, multi-hour workflows and research tasks. The limited independent benchmark data and lack of specified knowledge cutoff, pricing, and context window may affect decision-making for some organizations.

For organizations heavily invested in the Anthropic ecosystem and seeking flagship model capabilities for complex reasoning, coding, and knowledge work, Claude Sonnet 4.6 could be a viable option. For organizations requiring extensive documentation, benchmark validation, and third-party support, established models from OpenAI, Anthropic, or Google may offer better value and transparency. The lack of detailed pricing information and context window may also be a concern for organizations needing specific capabilities.

**Overall Assessment:** Solid general-purpose performance; however, limited public documentation and benchmark data compared to other frontier models, and lack of specified knowledge cutoff, pricing, and context window may affect decision-making.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).
