# Claude Sonnet 3.5 — findings by Claude Opus 4.6

- Source: Anthropic / Claude 3.5 Sonnet
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 3.5
- **Short description:** Anthropic's breakthrough mid-tier model (Jun & Oct 2024). Set new coding standards — resolved 64% of real GitHub issues vs 38% for Opus 3. First model to popularize agentic coding workflows. Now legacy.
- **Provider / access:** Anthropic API, AWS Bedrock, Google Cloud. Legacy model.
- **Release / knowledge:** 2024-06-21 initial; 2024-10-22 updated (v2). Legacy.
- **IDs:** `anthropic/claude-3-5-sonnet-20241022`
- **Context window:** 200,000 tokens.
- **Modalities:** Text, image in; text out; tool calls. Max 8K output tokens.
- **Pricing (as of 2026-10-13):** $3.00 / $15.00 per 1M tokens. Legacy pricing.
- **Architecture:** Proprietary; Anthropic mid-tier. 2024-era breakthrough for agentic coding.

### Raw benchmarks found

- SWE-bench Verified: **~49.0%** out-of-box; **64%** with agentic framework (source: anthropic.com, galileo.ai)
- HumanEval: **~93.7%** (source: rankedagi.com)
- MMLU: **~88.0%** (source: rankedagi.com)
- GPQA Diamond: **~59-65%** (source: vals.ai, rankedagi.com)

### Normalized scores (1–100)

- **Tool use: 68/100.** 2024-era tool use. Limited to basic function calling. 8K output constrains complex agentic loops. Pre-TB era.
- **Reasoning: 70/100.** GPQA Diamond ~59-65% was good for 2024 but far below 2026 frontier (90%+). MMLU 88%.
- **Context window: 75/100.** 200K verified (ref: 200K = 75). 8K max output is very restrictive by current standards.
- **Multimodal: 55/100.** Text + image in; text out. No audio/video. Basic vision = 50-60 range.
- **Coding: 74/100.** SWE-bench 49% out-of-box was pioneering for 2024. HumanEval 93.7%. Now significantly surpassed.
- **Cost efficiency: 68/100.** $3/$15 is expensive for a legacy model. Far better successors at same or lower cost.
- **Overall Score: 68/100.** Mean of (68 + 70 + 75 + 55 + 74) / 5 = 68.4, rounded to 68. Historic milestone that launched agentic coding; now significantly outclassed across all dimensions.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-13
- Method: Public internet research (anthropic.com, vals.ai, rankedagi.com, galileo.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
