# Claude Haiku 4.5 — findings by GPT 5.5

- Source: Anthropic (`claude-haiku-4.5`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 4.5
- **Short description:** Anthropic's fastest Claude 4.5-family model, optimized for cost-efficient production agents, coding assistance, and tool workflows.
- **Provider / access:** Anthropic API, Claude platform, AWS Bedrock, Vertex AI, and router providers.
- **Release / knowledge:** Released **2025-10-15**; Anthropic docs list knowledge cutoff **February 2025**.
- **IDs:** `claude-haiku-4-5-20251001`, `anthropic/claude-haiku-4.5`.
- **Context window:** **200K** tokens; max output **64K**.
- **Modalities:** Text and image input; text output; extended thinking, computer use, MCP, and general tool use.
- **Pricing (as of 2026-10-05):** Anthropic docs list **$1/M input** and **$5/M output** for Claude Haiku 4.5.
- **Architecture:** Proprietary Claude model.

### Raw benchmarks found

Agent / tool use:

- Anthropic system card says Haiku 4.5 was evaluated across computer use, MCP, and general tool use, with some of the best scores among 25 model variants in relevant safety/tooling tests.
- BenchLM reports **10 source-displayable benchmark rows** and strongest eligible category **Agentic at #97**.

Reasoning / knowledge:

- ModelScale overall score: **42.4** with **11 matched benchmark rows**.
- Public comparisons cite GPQA and other benchmark rows; exact table values vary by tracker.

Coding:

- Public reports cite **SWE-bench Verified 73.3%** for Haiku 4.5; research papers evaluate it in algorithmic programming and code review setups.

Long context:

- Context window: **200K**.

### Normalized scores (1–100)

- **Tool use: 76/100.** Anthropic tool ecosystem and system-card tool evaluations are strong for a Haiku model.
- **Reasoning: 70/100.** Overall benchmark trackers place it below Sonnet/Opus but strong for a fast model.
- **Context window: 76/100.** 200K context is solid.
- **Multimodal: 68/100.** Image input is supported, with no audio/video output credit.
- **Coding: 80/100.** SWE-bench Verified 73.3 and coding research use support a high score for the tier.
- **Cost efficiency: 82/100.** $1/$5 is good for Claude-tool reliability, though cheaper rivals exist.
- **Overall Score: 74/100.** Half-up mean of the five quality dimensions; best fit is fast Claude-compatible coding and production automation.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

