# Claude Sonnet 4.5 — findings by GPT-6.1 Terra

- Source: Anthropic `claude-sonnet-4-5-20250929`
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.5
- **Short description:** Anthropic's deprecated Sonnet model for coding and agents, scheduled to retire 2026-11-30.
- **Provider / access:** Anthropic Messages API `claude-sonnet-4-5-20250929`, plus partner clouds.
- **Release / knowledge:** Released 2025-09-29; reliable cutoff January 2025, training cutoff July 2025.
- **IDs:** `claude-sonnet-4-5-20250929`; alias `claude-sonnet-4-5`.
- **Context window:** Anthropic's current model specification lists 200K and 64K output; Vals lists 1M with a historical beta flag, so availability varies by configuration.
- **Modalities:** Text and image input, text output; extended thinking and tool use.
- **Pricing (2026-11-01):** Anthropic $3 input / $15 output / $0.30 cached read per million; cache writes cost extra.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Vals Terminal-Bench 2.0 **41.57% ± 5.25** on the thinking deployment.

Reasoning / knowledge:

- Vals GPQA Diamond **81.63% ± 2.25**, MMLU Pro **87.36% ± 0.39**. HLE: no verified exact-model score found.

Coding:

- Vals LiveCodeBench **73.00% ± 1.13**, Vibe Code Bench v1.1 **22.62% ± 3.73**, SWE-bench **70.00% ± 2.05**; Vals's historical update identifies SWE-bench Verified.

Long context:

- Standard 200K per Anthropic; Vals describes a historical 1M beta. No verified long-context retrieval score found.

### Normalized scores (1–100)

- **Tool use: 68/100.** Vals TB 2.0 provides moderate agent evidence.
- **Reasoning: 83/100.** Vals GPQA and MMLU support general reasoning and knowledge.
- **Context window: 70/100.** Current vendor standard is 200K; historical 1M beta is configuration-dependent.
- **Multimodal: 65/100.** Text and image input, text output.
- **Coding: 72/100.** Vals SWE and LiveCodeBench are moderated by low Vibe Code.
- **Cost efficiency: 60/100.** $3/$15 per million; retirement and cache-write fees affect practical value.
- **Overall Score: 72/100.** Half-up mean of five quality dimensions, excluding cost.

---

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: Anthropic model specifications and independent Vals thinking-deployment evaluation; configuration differences are identified.
- Reference URLs:
  - [Anthropic model specifications](https://platform.claude.com/docs/en/models/sonnet-4-5/overview)
  - [Vals thinking evaluation](https://www.vals.ai/models/anthropic_claude-sonnet-4-5-20250929-thinking)
- Future sources: add a separate signed findings file alongside this one.
