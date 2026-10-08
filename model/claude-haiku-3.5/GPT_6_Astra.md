# Claude 3.5 Haiku — findings by GPT 6 Astra

- Source: Anthropic / claude-3-5-haiku-20241022
- Date: 2026-10-08 (UTC)
- [Overview and scoring methodology](../../model-comparison.md)
- [Cross-model signed log](../../model-findings.md)

## Model card

- **Name:** Claude 3.5 Haiku.
- **Short description:** Legacy small text assistant for fast extraction, support and coding suggestions.
- **Provider / access:** Anthropic Messages API retired February 19, 2026. Partner availability needs account-specific checking: Anthropic pricing retains a partner exception, while indexed AWS card lists a June 19, 2026 EOL and currently redirects. [Lifecycle](https://platform.claude.com/docs/en/about-claude/model-deprecations).
- **Release / knowledge:** November 4, 2024 availability; July 2024 cutoff. The ID's October date is not its public availability date.
- **IDs:** `claude-3-5-haiku-20241022`; historical Bedrock `anthropic.claude-3-5-haiku-20241022-v1:0` (Converse/InvokeModel). No verified free Zen ID.
- **Context window:** 200k total, 8k output in indexed AWS model card.
- **Modalities:** Text input/output and tool calling. Image input was promised at launch; no verified later enablement for this exact snapshot found. No extended-thinking mode claimed.
- **Pricing (as of 2026-10-08):** Published reference $0.80 input / $4 output per million, cache read $0.08, five-minute write $1; this listing does not prove current endpoint access. [Pricing](https://platform.claude.com/docs/en/about-claude/pricing).
- **Architecture:** Proprietary, parameters undisclosed.

Specifications: [AWS model card](https://docs.aws.amazon.com/bedrock/latest/userguide/model-card-anthropic-claude-3-5-haiku.html), [launch notice](https://aws.amazon.com/about-aws/whats-new/2024/11/anthropics-claude-3-5-haiku-model-amazon-bedrock/).

### Raw benchmarks found

Anthropic's October addendum, historical vendor harness:
- **Tools:** Original tau-bench pass^1 retail **51%**, airline **22.8%**; not tau2/tau3.
- **Reasoning:** GPQA Diamond **41.6%**, MMLU-Pro **65%**, AIME 2024 **5.3%**, all zero-shot CoT.
- **Coding:** SWE-bench Verified **40.6%**; HumanEval **88.1%** zero-shot.
- **Long context:** No verified public full-window retrieval score found.
- **Missing:** TB2.1, GDPval-AA, Claw-Eval, MCP-Atlas, HLE, LCR, CritPt, Omniscience, LiveCodeBench, SciCode and Vibe Code Bench: no verified public score found in inspected sources.

[Primary model-card tables](https://assets.anthropic.com/m/1cd9d098ac3e6467/original/Claude-3-Model-Card-October-Addendum.pdf). Promised modalities are not measured capabilities.

### Normalized scores (1–100)

- **Tool use: 48/100.** Some customer-service tool competence, limited airline success.
- **Reasoning: 45/100.** GPQA and AIME show limited difficult reasoning.
- **Context window: 70/100.** 200k capacity without independently verified retrieval.
- **Multimodal: 15/100.** Verified snapshot is text-only.
- **Coding: 58/100.** Useful historical SWE-bench result; weaker than contemporary engineering models.
- **Cost efficiency: 88/100.** Published $0.80/$4 reference is moderately economical; availability unresolved.
- **Overall Score: 47/100.** Half-up mean: (48 + 45 + 70 + 15 + 58) / 5 = 47.2. Historical baseline for bounded text tasks.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-08
- Method: Fresh primary-source research; normalized scores are independent interpretations, not vendor scores.
- Future sources: Add a separate signed report alongside this file.

