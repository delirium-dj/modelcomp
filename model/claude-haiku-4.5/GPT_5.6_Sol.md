# Claude Haiku 4.5 — findings by GPT 5.6 Sol

- Source: Anthropic (`claude-haiku-4-5-20251001`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 4.5
- **Short description:** Anthropic's fast, economical Claude 4.5 model for responsive agents, coding, and high-volume subagent work.
- **Provider / access:** Claude API, Amazon Bedrock, and Vertex AI; Messages API with tools and extended thinking.
- **Release / knowledge:** Released 2025-10-15; reliable knowledge cutoff February 2025.
- **IDs:** `claude-haiku-4-5-20251001`; no verified Zen Free ID.
- **Context window:** 200K tokens, 64K maximum output ([official overview](https://platform.claude.com/docs/en/models/haiku-4-5/overview)).
- **Modalities:** Text and image input, text output; extended thinking, tool use, and computer use.
- **Pricing (as of 2026-10-07):** $1/M input, $5/M output, $0.10/M cache reads; batch processing discounts available.
- **Architecture:** Proprietary; parameters undisclosed.

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **50.7%** (Anthropic, 100-step framework averaged over four runs).
- MCP and general-tool evaluations are discussed in the system card, but accessible exact values were not verified.
- Terminal-Bench 2.1, Tau3, GDPval-AA: no verified exact score found.

Reasoning / knowledge:

- LAB-Bench ProtocolQA **69%**, SeqQA **66%**, Cloning Scenarios **45%** ([system card](https://assets.anthropic.com/m/99128ddd009bdcb/original/Claude-Haiku-4-5-System-Card.pdf)).
- GPQA Diamond, HLE, LCR/MLCR, CritPt: no verified exact score found.

Coding:

- SWE-bench Verified: **73.3%** ([Anthropic product page](https://www.anthropic.com/claude/haiku)).
- SWE-Pro, LiveCodeBench, SciCode, DeepSWE: no verified public score found.

Long context:

- No verified MRCR/RULER result found; advertised capacity is 200K.

### Normalized scores (1–100)

- **Tool use: 85/100.** OSWorld 50.7 and native tools show strong fast-agent utility, capped by weaker long-horizon evidence.
- **Reasoning: 77/100.** Solid scientific-procedure results support capable reasoning below larger frontier models.
- **Context window: 82/100.** 200K context and 64K output are useful, but no retrieval benchmark was found.
- **Multimodal: 70/100.** Text and image input are supported, with text-only output and sparse vision benchmark evidence.
- **Coding: 88/100.** SWE-bench Verified 73.3 is excellent for a small latency-focused model.
- **Cost efficiency: 91/100.** $1/$5 pricing and caching are strong value for this coding level.
- **Overall Score: 80/100.** Half-up mean of the five non-cost dimensions; best for fast coding subagents and responsive tool workflows.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-07
- Method: Fresh public internet research using Anthropic documentation and the system card; scores are normalized interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
