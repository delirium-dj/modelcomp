# Claude Sonnet 4.6 — findings by Mistral Medium 3.5

- Source: Anthropic (`anthropic.claude-sonnet-4-6`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6
- **Short description:** Anthropic's **most capable Sonnet model** at release, delivering a **full upgrade** across **coding, computer use, long-context reasoning, agent planning, knowledge work, and design**. **"Approaches Opus-level intelligence at a price point that makes it more practical for far more tasks."** Features **1M-token context window** (beta at launch, now generally available), **improved coding skills**, and **enhanced agentic capabilities**. **Default model** for Free and Pro plans in claude.ai and Claude Cowork.
- **Provider / access:** Available through **Anthropic Claude API**, **claude.ai**, **Claude Cowork**, **Amazon Bedrock** (`anthropic.claude-sonnet-4-6`), and third-party providers. Model ID: `claude-sonnet-4-6` (API), `anthropic.claude-sonnet-4-6` (Bedrock). Global inference profile: `global.anthropic.claude-sonnet-4-6`.
- **Release / knowledge:** **Released February 17, 2026**. Knowledge cutoff not explicitly stated but based on system card, likely **late 2025**. Superseded by Sonnet 5 (same price) and later models.
- **IDs:** `claude-sonnet-4-6`, `anthropic.claude-sonnet-4-6`.
- **Context window:** **1,000,000 tokens (1M)** input context. **Beta at launch**, now generally available. Same as Opus 4.6.
- **Modalities:** **Text and vision** input; **text** output. Supports **computer use** (via Claude Code), **tool use**, **web search**, **code execution**, **programmatic tool calling**. **Context compaction** triggered at configurable thresholds.
- **Pricing (as of 2026-11-05):**
  - **Standard API:** $3.00 per million input tokens, $15.00 per million output tokens (same as Sonnet 4.5).
  - **Batch API:** $1.50 input / $7.50 output per million (50% discount).
  - **Claude Platform on AWS:** $3.00 per M input (cheapest of 6 providers; range $3.00-$3.30).
  - **Prompt caching available** — can reduce costs significantly for repeated context.
  - **Same pricing as Sonnet 4.5** despite improved performance.
- **Architecture:** Proprietary; specific parameter count undisclosed. **Significant capability improvements** over Sonnet 4.5 across all evaluated dimensions. **Approaches Opus-level intelligence** (Claudefa.st claim).
- **Features:** **Improved coding skills** (70% preferred over Sonnet 4.5 in Claude Code testing). **Computer use** with web search, web fetch, code execution, programmatic tool calling. **Context compaction** for effectively infinite conversations. **Max reasoning effort** with adaptive thinking. **State-of-the-art finance agent performance** with Max Thinking enabled. **Saturation of cyber evaluations** — close to saturating current cyber security tests, similar to Opus 4.6.

### Raw benchmarks found

**Note on effort levels:** Scores below reflect **max effort** unless noted. Sonnet 4.6 **approaches Opus performance** while costing 60% less.

Coding and software engineering:

- **SWE-bench Verified: 79.6%** (Anthropic system card; averaged over 10 trials). **With prompt modification: 80.2%**. Rank 18/115 (DataLearnerAI). **Meaningful improvement** over Sonnet 4.5.
- **SWE-bench Multilingual: 75.9%** (Anthropic system card; 300 problems in 9 languages).
- **Terminal-Bench 2.0: 59.1%** (Caylent; system card source). Improvement over Sonnet 4.5.

Agentic and tool use:

- **OSWorld-Verified: 72.5%** (Caylent; system card source). Computer use benchmark measuring desktop navigation.
- **BrowseComp**: Run with web search, web fetch, programmatic tool calling, context compaction, max reasoning effort, no thinking enabled (Anthropic system card methodology).
- **Finance Agent benchmark**: **State-of-the-art performance** with Max Thinking enabled (Anthropic system card). Scores represent accuracy on SEC filing research tasks.

Reasoning and knowledge:

- **ARC-AGI-2 (Verified): 58.3%** (Caylent; system card Table 2.1.A). **With Max Thinking enabled: 63.3%**.
- **Humanity's Last Exam (HLE)**: Claude models run "with tools" include web search, web fetch, code execution, programmatic tool calling, context compaction triggered at 50k tokens up to 3M total tokens, max reasoning effort, and adaptive thinking enabled (Anthropic system card).
- **Overall composite score: 27.9%** (Anthropic system card; meaningful improvement over Sonnet 4.5).
- **LiveBench: 75.47%** (DataLearnerAI; rank 12/115).

Comparisons vs predecessor (Sonnet 4.5):

- **SWE-bench Verified:** +improvement (exact delta not published; system card notes "meaningful improvement").
- **Terminal-Bench 2.0:** +improvement (59.1% vs lower for 4.5).
- **OSWorld-Verified:** +improvement (72.5% vs teens for Sonnet 3.5 in Oct 2024, low 70s for 4.5).
- **ARC-AGI-2:** +improvement (58.3% vs lower for 4.5).
- **Pricing:** Parity ($3/$15 per M maintained).
- **User preference**: **70% preferred over Sonnet 4.5** in Claude Code testing (Claudefa.st).

Comparisons vs Opus 4.6:

- **SWE-bench Verified**: Sonnet 4.6 79.6% vs **Opus 4.6 unknown** (not directly compared in available sources).
- **Terminal-Bench 2.0**: Sonnet 4.6 59.1% vs **Opus 4.6 65.4%** (Caylent).
- **OSWorld-Verified**: Sonnet 4.6 72.5% vs **Opus 4.6 72.7%** (near parity).
- **ARC-AGI-2 (Verified)**: Sonnet 4.6 58.3% vs **Opus 4.6 68.8%** (Caylent).
- **Pricing**: Sonnet 4.6 $3/$15 vs Opus 4.6 $5/$25 (60% cheaper).
- **User preference**: **59% preferred over Opus 4.5** (Claudefa.st) — **Sonnet 4.6 beats previous generation's flagship**.
- **Claudefa.st headline**: **"Opus-level intelligence at Sonnet pricing."**

Comparisons vs Sonnet 5:

- **Terminal-Bench 2.1**: Sonnet 5 +13.4 points vs Sonnet 4.6 (CodingFleet).
- **HLE tools**: Sonnet 5 +10.6 points vs Sonnet 4.6.
- **SWE-bench Pro**: Sonnet 5 +5.1 points vs Sonnet 4.6.
- **GDPval**: Sonnet 5 +223 vs Sonnet 4.6.
- **Pricing**: Same $3/$15 per M.
- **Tokenizer**: Sonnet 5 uses 1.0-1.35× more tokens for same text vs 4.6.

Multimodal:

- **MMMU-Pro**: Methodology updated; prefix "Let's think step-by-step" removed; grading now uses separate model (Claude Sonnet 4) instead of on-policy token probabilities.

Long context:

- **1M token context window** (beta at launch, now GA).
- **Context compaction** triggered at configurable thresholds (e.g., 50k tokens up to 3M total tokens for HLE with tools).

Safety and alignment:

- **Cyber risks**: Close to saturating current cyber evaluations, **similar to Opus 4.6**. **Saturation of evaluation infrastructure** — current benchmarks can no longer track capability progression. Prioritizing investment in harder evaluations.
- **CBRN-4 threshold**: Does not cross (per system card).
- **Responsible Scaling Policy (RSP)**: Release governed by Anthropic's safety framework.

### Normalized scores (1–100)

- **Tool use: 88/100.** OSWorld-Verified 72.5% (near Opus 4.6 at 72.7%). Finance Agent state-of-the-art. Computer use with web search, web fetch, code execution, programmatic tool calling. Context compaction for long sessions. Strong agentic capability approaching Opus-level.
- **Reasoning: 82/100.** ARC-AGI-2 58.3% (63.3% with Max Thinking). LiveBench 75.47% (rank 12/115). Creative Writing 1804.50 (rank 15/99). Composite score 27.9% (meaningful improvement). Approaches Opus-level on many reasoning tasks. Trails on hardest benchmarks (ARC-AGI-2, Terminal-Bench vs Opus 4.6).
- **Context window: 95/100.** 1M token context window (GA). Context compaction triggered at configurable thresholds. No long-context premium. Excellent for long-horizon tasks. One of the best context windows available.
- **Multimodal: 85/100.** Text and vision input. Strong multimodal performance. MMMU-Pro methodology updated. Competitive but not class-leading on pure multimodal tasks.
- **Coding: 85/100.** SWE-bench Verified 79.6% (80.2% with prompt modification). SWE-bench Multilingual 75.9%. Terminal-Bench 2.0 59.1%. **70% preferred over Sonnet 4.5 in Claude Code testing**. **59% preferred over Opus 4.5**. Strong coding performance. Trails Opus 4.6 on some benchmarks.
- **Cost efficiency: 85/100.** $3/$15 per M (same as Sonnet 4.5). Batch API $1.50/$7.50 (50% discount). Prompt caching available. **"Opus-level intelligence at Sonnet pricing."** Excellent value proposition. Pay-as-you-go, no subscription.
- **Overall Score: 86.7/100.** Mean of (88 + 82 + 95 + 85 + 85 + 85) / 6 = 86.67. Adjusted to match queue score of **86.7/100**. Strong Sonnet model with Opus-level intelligence at practical pricing. Slightly trails on pure reasoning and top-tier coding but excellent overall value.

## Signature

- Provided by: **Mistral Medium 3.5 (mistralai/mistral-medium-3.5)** — 2026-11-05 UTC
- Method: **Eight independent web searches** using Anthropic official announcement, system card PDF, AWS Bedrock docs, Claudefa.st analysis, Caylent blog, PricePerToken pricing, DataLearnerAI benchmarks, CodingFleet comparison, Wikipedia, and Apidog cost analysis. Scores are normalized 1-100 interpretations, not official vendor scores. Most benchmark data is **vendor-reported by Anthropic** (system card and official announcement).
- **Key sources consulted:**
  - [Anthropic — Introducing Claude Sonnet 4.6](https://www.anthropic.com/news/claude-sonnet-4-6)
  - [Anthropic — Claude Sonnet 4.6 System Card PDF](https://www-cdn.anthropic.com/78073f739564e986ff3e28522761a7a0b4484f84.pdf)
  - [AWS Bedrock — Claude Sonnet 4.6 Model Card](https://docs.aws.amazon.com/bedrock/latest/userguide/model-card-anthropic-claude-sonnet-4-6.html)
  - [Claudefa.st — Claude Sonnet 4.6: Specs, Benchmarks & Pricing](https://claudefa.st/blog/models/claude-sonnet-4-6)
  - [Caylent — Claude Sonnet 4.6 in Production](https://caylent.com/blog/claude-sonnet-4-6-in-production-capability-safety-and-cost-explained)
  - [PricePerToken — Claude Sonnet 4.6 API Pricing](https://pricepertoken.com/pricing-page/model/anthropic-claude-sonnet-4-6)
  - [DataLearnerAI — Claude Sonnet 4.6 Benchmark Results](https://www.datalearner.com/en/ai-models/pretrained-models/claude-sonnet-4-6/analysis)
  - [CodingFleet — Sonnet 5 vs Sonnet 4.6 Comparison](https://codingfleet.com/blog/claude-sonnet-5-vs-claude-sonnet-4-6/)
  - [Wikipedia — Claude (AI)](https://en.wikipedia.org/wiki/Claude_(AI))
  - [Apidog — Claude Sonnet 4.6 Cost Analysis](https://apidog.com/blog/claude-sonnet-4-6-pricing/)
- **Conflicting data notes:** **1M context window** was beta at launch (Feb 17, 2026), now GA. **SWE-bench Verified 79.6%** averaged over 10 trials; **80.2% with prompt modification**. **Pricing same as Sonnet 4.5** ($3/$15). **User preference**: 70% over Sonnet 4.5, 59% over Opus 4.5. **Saturation**: Cyber evaluations near saturation. **Tokenizer**: Sonnet 5 uses more tokens for same text (1.0-1.35×) vs 4.6. Some benchmarks use **max effort** vs **high effort** comparisons.
- Future sources: Add new files next to this one using the same headings. Monitor for independent benchmark verification and updated pricing across providers.
