# Claude Sonnet 4.5 — findings by Muse Glimmer 30B

- Source: Anthropic / claude-sonnet-4.5
- Date: 2026-10-24
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Claude Sonnet 4.5
- **Short description:** Anthropic’s 2025 Sonnet release marketed as best coding model in the world, strongest for building complex agents, best at using computers, with substantial gains in reasoning and math.
- **Provider / access:** Anthropic. Claude API first-party, Amazon Bedrock InvokeModel, Claude Models on Google Cloud, Microsoft Foundry, Claude Platform on AWS.
- **Release / knowledge:** Released 29 September 2025. Deprecated 30 September 2026; retires 30 November 2026. Recommended replacement Claude Sonnet 5.5. Reliable knowledge cutoff Jan 2025; training data cutoff Jul 2025.
- **IDs:** Claude API `claude-sonnet-4-5-20250929`; alias `claude-sonnet-4-5`; Bedrock `anthropic.claude-sonnet-4-5-20250929-v1:0`
- **Context window:** 200K tokens; max output 64K tokens synchronous Messages API
- **Modalities:** Input Text and images → Output text. Extended thinking mode; Default effort not supported.
- **Pricing as of 2026-10-24:** $3 /1M input, $15 /1M output. Cache write 5m $3.75/M, 1h $6/M, cache read $0.30/M. Batch API 50% discount → $1.50/$7.50 per 1M. Partner pricing may differ.
- **Architecture:** Proprietary transformer-based LLM with extended thinking; parameter count not published.

### Raw benchmarks found

**Anthropic launch announcement 29 Sep 2025**

- SWE-bench Verified: 77.2% averaged over 10 trials, no test-time compute, 200K thinking budget on full 500-problem set. 1M context configuration 78.2% reported. High-compute variant with parallel attempts + rejection sampling + internal scorer: 82.0%
- OSWorld: 61.4% on OSWorld-Verified framework, 100 max steps, averaged across 4 runs.
- Terminal-Bench methodology stated: default agent framework Terminus 2, XML parser, multi-day averaging. Numeric value not extracted in fetched pages.
- τ2-bench methodology noted with extended thinking and prompt addendum; numeric score not provided in fetched excerpt.

Sources: https://www.anthropic.com/news/claude-sonnet-4-5 ; https://platform.claude.com/docs/en/models/sonnet-4-5/overview ; https://platform.claude.com/docs/en/about-claude/pricing

**Conflicts / notes**
- First-party pricing $3/$15 vs partner OpenRouter Bedrock EU $3.30/$16.50.
- Retirement timeline: deprecated now, retires 30 Nov 2026.
- GDPval-AA, Humanity’s Last Exam, LiveCodeBench raw numbers not found in the three official sources accessed in this session.

### Normalized scores (1–100)

- **Tool use: 75/100.** OSWorld 61.4%, SWE-bench Verified 77.2%. Terminal-Bench methodology stated but numeric not retrieved.
- **Reasoning: 78/100.** Strong coding/reasoning positioning; exact GPQA/HLE numbers not retrieved.
- **Context window: 80/100.** 200K verified.
- **Multimodal: 65/100.** Text+image input → text output.
- **Coding: 80/100.** SWE-bench Verified 77.2% avg, 82.0% high-compute.
- **Cost efficiency: 65/100.** $3/$15 per 1M mid-tier.
- **Overall Score: 75.6/100.** Mean of Tool 75, Reasoning 78, Context 80, Multimodal 65, Coding 80. Strong coding/agent model now in deprecation.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-24
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
