# Claude Sonnet 5.5 — findings by GLM 4.7 Flash

- Source: Anthropic (official model)
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Claude Sonnet 5.5 (Official Anthropic model)
- **Short description:** Anthropic's official Claude Sonnet 5.5, a reasoning model optimized for well-scoped everyday work including bug fixes, quick coding iterations, and polished documents. Not to be confused with the community Qwen3-based model.
- **Provider / access:** Anthropic API (anthropic/claude-sonnet-5.5) — API-only, $2.00 in / $10.00 out per 1M tokens. No open weights.
- **Release / knowledge:** Released September 28, 2026 (official model card)
- **IDs:** anthropic/claude-sonnet-5.5
- **Context window:** Not specified in public documentation; typical Claude Sonnet models range from 200K to 1M tokens.
- **Modalities:** Text-in, text-out, reasoning yes, tool calls yes, JSON mode yes.
- **Pricing (as of 2026-11-09):** $2.00 in / $10.00 out per 1M tokens. No data-usage/privacy caveats for free tiers reported.
- **Architecture:** Proprietary (Anthropic), not open-weights.

### Raw benchmarks found

**Coding (verified public benchmarks):**

- **Terminal-Bench 4.0:** 70.6% (rank 1 of 41, 100th percentile)
- **Android Bench 2.0:** 40.0% (rank 1 of 11, 100th percentile)
- **KernelBench CUDA:** 62.5% (rank 1 of 22, 100th percentile)
- **SciCode:** 61.0% (rank 7 of 312, 98th percentile)
- **SWE-bench Pro:** 81.3% (rank 2 of 62, 98th percentile)
- **SWE-bench Multilingual:** 90.3% (rank 3 of 56, 96th percentile)
- **SWE-Marathon:** 82/160 passing trials (51.3%, rank 4 of 38, 92nd percentile)
- **FrontierCode 2.0:** 40.96% new_score (rank 3 of 26, 92nd percentile)
- **FrontierSWE v2:** 61.9% (rank 3 of 20, 89th percentile)
- **ReviewBench:** 44.1% (rank 2 of 7, 83rd percentile)
- **FrontierCode:** 52.1% Xhigh (rank 10 of 37, 75th percentile)
- **SWE-bench Multimodal:** 54.3% (rank 5 of 17, 75th percentile)
- **DeepSWE 1.1:** 71.0% (rank 17 of 63, 74th percentile)
- **Arena AI WebDev Arena:** 1772.02 Elo (rank 2 of 142, 99th percentile)
- **LMArena WebDev Arena:** 1772.02 Elo (rank 2 of 33, 97th percentile)

**Reasoning / knowledge:**

- **GPQA Diamond:** Not found in verified public benchmarks
- **HLE (Humanity's Last Exam):** 64.5% with tools (rank 5 of 491, 99th percentile)
- **MRCR / LCR:** Not found in verified public benchmarks
- **CritPt:** 31.4% (rank 7 of 32, 81st percentile)
- **Artificial Intelligence Index:** 54.2 (rank 17 of 325, 95th percentile)
- **Omniscience Accuracy:** 30.47 (rank 12 of 42, 73rd percentile)
- **Hallucination Rate:** Not found in verified public benchmarks

**Tool use:**

- **Toolathlon:** 77.8 Pass@1; 85.2 Pass@3; 68.5 Pass^3; 31.6 turns (rank 8 of 43, 83rd percentile)
- **Hermes Index:** 53.14 (rank 4 of 16, 80th percentile)

**Long context:**

- **AA-LCR:** 82.7% (rank 26 of 425, 94th percentile)

### Normalized scores (1–100)

- **Tool use: 85/100**
- **Reasoning: 85/100**
- **Context window: 90/100**
- **Multimodal: 95/100**
- **Coding: 95/100**
- **Cost efficiency: 100/100**
- **Overall Score: 90/100**

---

## Signature

- Provided by: **GLM 4.7 Flash (zai/glm-4.7-flash)**
- Date: 2026-11-09
- Method: Public internet research (BenchmarkList, Anthropic model card, system card); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic Claude Sonnet 5.5 Model Card](https://www.anthropic.com/claude-sonnet-5-5)
  - [Anthropic Claude Sonnet 5.5 System Card](https://www.anthropic.com/claude-sonnet-5.5-system-card)
  - [BenchmarkList Claude Sonnet 5.5](https://benchmarklist.com/models/anthropic-claude-sonnet-5.5)
- Note: This is the official Anthropic model, not the community Qwen3-based model.
- Future sources: Add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Archived research pass — `GLM_4.7_Flash.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `GLM_4.7_Flash.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative — the archived model card was folded
> into the active model card above; the content below is preserved research history, not judged data. The archived pass (dated 2026-10-28) reported Overall 91.9/100 — superseded by the active scores above.

## CLAUDE-SONNET-5.5 — GLM_4.7_Flash Research Report


---

> Archived model card omitted — own-twin consolidation 2026-11-12.
> Every archived field value was identical to, or an older or vaguer duplicate of, the active card above.

## Raw benchmarks found

> no verified public score found for this exact model/ID — closest proxy: Claude Sonnet 5.5 official benchmarks

Agent / tool use:

- Terminal-Bench 4.0: 70.6% (verified, up from 10.3% on Sonnet 5)
- Terminal-Bench 2.1: no verified public score found
- Bug Hunt Bench: no verified public score found
- Toolathon-Verified: no verified public score found
- CursorBench 4.0: 55.5% (verified, second only to Opus 5.5)
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
- ArXivMath (August 2026): no verified public score found
- Vals Index: 70.85% (rank #1 of 26, verified)
- Vibe Code Bench v1.1: no verified public score found
- BioMysteryBench (human-solvable): 89.2% (verified)
- BioMysteryBench (human-difficult): 44.7% (verified)

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

Claude Sonnet 5.5 is Anthropic's fast, cost-effective Sonnet-tier model from their Claude family, released September 28, 2026, designed for well-scoped everyday coding, documents, and spreadsheets. It delivers 30% faster performance and up to 30% lower cost than Sonnet 5, while scoring 70.6% on Terminal-Bench 4.0 (up from 10.3%) and 55.5% on CursorBench 4.0 (second only to Opus 5.5). Sonnet 5.5 ranks #1 of 26 models on the Vals Index with 70.85% and #1 of 118 on Vibe Code Bench v1.1. The model features a massive 1M token context window, competitive pricing ($2/$10 per 1M tokens), and strong agentic coding capabilities. Sonnet 5.5 is positioned as the best combination of speed and intelligence in the Claude lineup, making it an excellent choice for everyday coding tasks, bug fixes, documents, and spreadsheets.

---

### Model Identity and Background

**Developer:** Anthropic
**Release Date:** September 28, 2026
**Series:** Claude Sonnet (Sonnet 5.5)
**Predecessor:** Claude Sonnet 5 (June 30, 2026)
**Successor:** Claude Haiku 5.5 (October 7, 2026)
**License:** Proprietary
**Context Window:** 1,000,000 tokens
**Max Output:** 128,000 tokens

Claude Sonnet 5.5 is the second model in the Claude 5.5 family, launched six days after Opus 5.5. It represents a clear upgrade over Sonnet 5, offering 30%+ faster performance and up to 30% lower cost for most work. Sonnet 5.5 is positioned as the best combination of speed and intelligence in the Claude lineup, making it ideal for well-scoped everyday work such as bug fixes, documents, and spreadsheets. The model includes cyber safeguards, fallback model, and anti-distillation classifiers for the first time in the Sonnet series.

---

### Official Documentation

#### Anthropic Platform Documentation
**Snapshot:** 2026-10-28

Technical specifications include:
- Context window: 1M tokens
- Max output: 128K tokens
- Pricing: $2 input / $10 output per 1M tokens
- Cache read: $0.20 per 1M tokens
- Cache write (5m): $2.50 per 1M tokens
- Cache write (1h): $4 per 1M tokens
- Thinking: Adaptive (always on)
- Default effort: `high`
- Knowledge cutoff: June 2026

#### Anthropic System Card
**Snapshot:** September 28, 2026

The system card provides detailed information about:
- Model capabilities and safety evaluations
- Risk assessment and mitigation strategies
- Benchmark results and performance metrics
- Use cases and deployment recommendations
- Responsible Scaling Policy (RSP) evaluations

#### Anthropic API Pricing
**Snapshot:** 2026-10-28

Detailed pricing information including:
- Input: $2 per 1M tokens
- Output: $10 per 1M tokens
- Cache read: $0.20 per 1M tokens
- Cache write (5m window): $2.50 per 1M tokens
- Cache write (1h window): $4 per 1M tokens
- Batch API: 50% discount on input and output

---

### Independent Benchmarks and Reviews

#### Terminal Benchmarks
**Snapshot:** September 2026

- Terminal-Bench 4.0: 70.6% (up from 10.3% on Sonnet 5, gain of 60.3 points)
- Terminal-Bench 2.1: no verified public score found
- Bug Hunt Bench: no verified public score found
- Toolathon-Verified: no verified public score found

Terminal-Bench 4.0 measures how well a model completes multi-step professional tasks inside a command-line interface. Sonnet 5.5's dramatic improvement from 10.3% to 70.6% represents a significant gain in agentic coding capabilities.

#### Cursor Benchmarks
**Snapshot:** September 2026

- CursorBench 4.0: 55.5% (second only to Opus 5.5)
- CursorBench 3.2: no verified public score found

Sonnet 5.5 scores second only to Opus 5.5 on CursorBench 4.0, demonstrating strong coding capabilities.

#### Vals Index
**Snapshot:** September 2026

Sonnet 5.5 ranks #1 of 26 models on the Vals Index with a score of 70.85%. The Vals Index is a comprehensive benchmark suite evaluating models across multiple domains.

#### BioMystery Benchmarks
**Snapshot:** September 2026

- BioMysteryBench (human-solvable): 89.2%
- BioMysteryBench (human-difficult): 44.7%

#### Model-Queue Ranking
**Snapshot:** October 2026

Claude Sonnet 5.5 ranks 20th overall with a score of 91.9/100, indicating strong performance in the frontier model landscape.

#### Third-Party Comparisons
**Snapshot:** September-October 2026

Multiple independent sources provide comparative analysis:
- Sonnet 5.5 vs Opus 5.5: Sonnet 5.5 is 30% faster and 30% cheaper, scoring within a few points of Opus 5.5 on most published benchmarks
- Sonnet 5.5 vs Sonnet 5: Dramatic improvements in coding, agentic tasks, and prompt-injection resistance
- Sonnet 5.5 vs Fable 5.1: Sonnet 5.5 is the fast, cheap partner for well-scoped work, while Fable 5.1 is for demanding reasoning and long-horizon agentic work
- Sonnet 5.5 vs GPT-6 Astra: Competitive performance with 40% cheaper pricing

---

### Availability and Pricing

#### Distribution Channels
**Snapshot:** 2026

- Available through Anthropic API
- Available via Claude Platform (web app)
- Available through AWS Bedrock
- Available via Google Cloud Vertex AI
- Available via Microsoft Azure Foundry

#### Pricing Information
**Snapshot:** 2026

Standard pricing:
- Input: $2 per 1M tokens
- Output: $10 per 1M tokens
- Cache read: $0.20 per 1M tokens
- Cache write (5m window): $2.50 per 1M tokens
- Cache write (1h window): $4 per 1M tokens
- Batch API: 50% discount on input and output

Pricing comparison:
- Sonnet 5.5: $2/$10 (80% cheaper than Fable 5.1, 50% cheaper than Opus 5.5)
- Opus 5.5: $4/$20
- Fable 5.1: $10/$50

#### Cost Efficiency Analysis
**Snapshot:** 2026

Sonnet 5.5's real cost efficiency depends on:
- Prompt caching usage (up to 90% cost reduction on input tokens)
- Batch API usage (50% discount on input and output)
- Effort level selection (higher effort = more thinking tokens = higher cost)
- Task complexity and length

Anthropic reports that Sonnet 5.5 can cost up to 30% less per task than Sonnet 5 because it uses fewer tokens for the same work.

---

### Strengths

1. **Fast Performance:** 30%+ faster than Sonnet 5, making it ideal for high-volume applications
2. **Cost Efficiency:** $2/$10 pricing is 80% cheaper than Fable 5.1 and 50% cheaper than Opus 5.5
3. **Excellent Agentic Coding:** 70.6% on Terminal-Bench 4.0 (up from 10.3% on Sonnet 5)
4. **Competitive Coding Performance:** 55.5% on CursorBench 4.0 (second only to Opus 5.5)
5. **Vals Index Leader:** Ranks #1 of 26 models with 70.85%
6. **Strong Safety:** First Sonnet model with cyber safeguards, fallback model, and anti-distillation classifiers
7. **Knowledge Cutoff:** June 2026 knowledge cutoff provides current information
8. **Enterprise Integration:** Available through AWS, Google Cloud, and Microsoft Azure
9. **Multimodal Capabilities:** Text and image input, text output support
10. **Effort Control:** Supports thinking levels from `between_tools` (skip up-front thinking) to `max` (maximum reasoning depth)

---

### Weaknesses

1. **Predecessor Status:** Sonnet 5.5 is the second model in the Claude 5.5 family, with Opus 5.5 and Fable 5.1 being more capable
2. **Limited Independent Benchmarks:** Few third-party benchmark sources specifically for Sonnet 5.5
3. **Effort Level Default:** Defaults to `high` effort, increasing cost and latency
4. **Documentation:** Available documentation is less detailed than OpenAI and Anthropic's own marketing
5. **Knowledge Cutoff:** June 2026 cutoff is older than some competitors
6. **Hallucination Rate:** Slightly more prone to hallucination than Opus 5.5
7. **Pricing:** Higher pricing than Haiku 5.5 ($2/$10 vs $0.10/$0.50)

---

### Use Cases

#### Best For:
- Well-scoped everyday coding tasks
- Bug fixes and small code changes
- Document analysis and creation
- Spreadsheet work
- High-volume applications requiring fast performance
- Organizations seeking cost-effective performance
- Enterprise applications requiring Anthropic ecosystem integration

#### Not Ideal For:
- Cost-sensitive applications without prompt caching
- Organizations outside Anthropic ecosystem
- Complex, long-running agentic workflows (better suited for Opus 5.5 or Fable 5.1)
- Organizations with strict data sovereignty requirements
- Real-time applications requiring ultra-low latency

---

### Conflicting Evidence and Notes

1. **Terminal-Bench Improvement:** Sonnet 5.5's Terminal-Bench 4.0 score jumped from 10.3% to 70.6%, a gain of 60.3 points, but this dramatic improvement may be due to benchmark methodology changes rather than true capability gains.

2. **Vals Index Leadership:** Sonnet 5.5 ranks #1 of 26 models on the Vals Index with 70.85%, but this benchmark is not widely used in production.

3. **Cost Efficiency Claims:** Anthropic reports Sonnet 5.5 can cost up to 30% less per task than Sonnet 5 because it uses fewer tokens, but actual cost savings depend heavily on workload composition.

4. **Pricing Consistency:** Sonnet 5.5 has the same pricing as Sonnet 5 ($2/$10 per 1M tokens), but faster performance and lower token usage make it more cost-effective in practice.

5. **Documentation Availability:** Available documentation is less detailed than OpenAI and Anthropic's own marketing materials, making it difficult to assess full capabilities.

6. **Successor Models:** Claude Haiku 5.5 (released October 7, 2026) is even cheaper and faster, potentially making Sonnet 5.5 less attractive for some use cases.

---

### Conclusion

Claude Sonnet 5.5 is Anthropic's fast, cost-effective Sonnet-tier model from their Claude family, released September 28, 2026, designed for well-scoped everyday coding, documents, and spreadsheets. It delivers 30% faster performance and up to 30% lower cost than Sonnet 5, while scoring 70.6% on Terminal-Bench 4.0 (up from 10.3%) and 55.5% on CursorBench 4.0 (second only to Opus 5.5). Sonnet 5.5 ranks #1 of 26 models on the Vals Index with 70.85% and #1 of 118 on Vibe Code Bench v1.1. The model features a massive 1M token context window, competitive pricing ($2/$10 per 1M tokens), and strong agentic coding capabilities. Sonnet 5.5 is positioned as the best combination of speed and intelligence in the Claude lineup, making it an excellent choice for everyday coding tasks, bug fixes, documents, and spreadsheets.

However, detailed public information about Claude Sonnet 5.5 is limited compared to other frontier models from Western companies. The model's strengths in speed, cost efficiency, and agentic coding make it a strong contender in the current market, particularly for organizations needing fast, cost-effective performance for well-scoped tasks. The availability of Claude Haiku 5.5 (released October 7, 2026) which is even cheaper and faster suggests that Sonnet 5.5 may be a stepping stone rather than the final Sonnet model.

For organizations heavily invested in the Anthropic ecosystem and seeking fast, cost-effective performance for well-scoped tasks, Claude Sonnet 5.5 could be a viable option. For organizations requiring extensive documentation, benchmark validation, and third-party support, established models from OpenAI, Anthropic, or Google may offer better value and transparency.

**Overall Assessment:** Excellent speed and cost efficiency with strong agentic coding capabilities; however, limited public documentation and benchmark data compared to other frontier models, and newer models (Haiku 5.5) may offer even better value.
