# Claude 3.5 Sonnet — findings by GPT 6 Astra

- Source: Anthropic / claude-3-5-sonnet-20241022
- Date: 2026-10-08 (UTC)
- [Overview and scoring methodology](../../model-comparison.md)
- [Cross-model signed log](../../model-findings.md)

## Model card

- **Name:** Claude 3.5 Sonnet (October 2024 upgrade).
- **Short description:** Legacy general-purpose vision and coding assistant. This report scores the October upgrade, not the June original.
- **Provider / access:** Original Anthropic Messages API model retired October 28, 2025. Bedrock lists extended access; availability depends on region/account. [Retirement notice](https://platform.claude.com/docs/en/about-claude/model-deprecations).
- **Release / knowledge:** October 22, 2024; April 2024 knowledge cutoff.
- **IDs:** `claude-3-5-sonnet-20241022`; Bedrock `anthropic.claude-3-5-sonnet-20241022-v2:0` (Converse/InvokeModel). No verified free Zen ID.
- **Context window:** 200k; maximum output not independently reverified. [AWS identifier](https://docs.aws.amazon.com/cdk/api/v2/java/software/amazon/awscdk/services/bedrock/FoundationModelIdentifier.html).
- **Modalities:** Text/image input, text output; tool calls and screenshot-driven computer use; no native audio/video output.
- **Pricing (as of 2026-10-08):** Bedrock US extended-access on-demand $6 input / $30 output per million; cache write $7.50, read $0.60. Historical $3/$15 should not be presented as this current route's standard price. [AWS pricing](https://aws.amazon.com/es/bedrock/pricing/?c=arti&p=ft&z=4).
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

Anthropic October model-card evaluations:
- **Tools:** Original tau-bench pass^1 retail 69.2%, airline 46%; not tau2 or tau3. OSWorld screenshot-only 14.9% at 15 steps, 22% with modified prompting and 50 steps.
- **Reasoning:** GPQA Diamond 65% zero-shot CoT; MMLU-Pro 78% zero-shot CoT; AIME 2024 16% zero-shot CoT.
- **Coding:** SWE-bench Verified 49% pass@1; HumanEval 93.7% zero-shot.
- **Vision:** MMMU validation 70.4%, MathVista testmini 70.7%, DocVQA ANLS 94.2%.
- **Long context:** No verified public retrieval score at 200k found.
- **Missing:** TB2.1, tau2/tau3, GDPval-AA, Claw-Eval, MCP-Atlas, HLE, LCR, CritPt, Omniscience, LiveCodeBench, SciCode and Vibe Code Bench: no verified public score found in inspected sources.

[October model-card addendum](https://assets.anthropic.com/m/1cd9d098ac3e6467/original/Claude-3-Model-Card-October-Addendum.pdf), [SWE-bench scaffold description](https://www.anthropic.com/engineering/swe-bench-sonnet). These are historical vendor evaluations, not current frontier ranks.

### Normalized scores (1–100)

- **Tool use: 60/100.** Useful original tau-bench results; low GUI success limits autonomous reliability.
- **Reasoning: 60/100.** GPQA 65% and weak AIME support a middle-tier historical reasoning assessment.
- **Context window: 70/100.** 200k documented capacity; full-window retrieval unverified.
- **Multimodal: 70/100.** Strong image/document benchmarks, with text-only output.
- **Coding: 65/100.** SWE-bench 49% demonstrates practical edits but is substantially behind modern coding systems.
- **Cost efficiency: 45/100.** Current $6/$30 extended-access rates are expensive for these capabilities.
- **Overall Score: 65/100.** Half-up mean: (60 + 60 + 70 + 70 + 65) / 5 = 65. Primarily a legacy deployment comparison.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-08
- Method: Fresh primary web research; normalized scores are interpretations, not official results.
- Future sources: Add a separate signed report alongside this file.

