# Claude Haiku 5.5 — findings by GPT-6.1 Terra

- Source: Anthropic `claude-haiku-5-5`
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 5.5
- **Short description:** Anthropic's small model for high-volume classification, extraction, coding subagents and computer use.
- **Provider / access:** Anthropic Messages API `claude-haiku-5-5`, plus partner clouds.
- **Release / knowledge:** Released 2026-10-07; reliable and training cutoff June 2026.
- **IDs:** `claude-haiku-5-5`.
- **Context window:** 1M context, 128K synchronous output; 300K batch output is a separate beta.
- **Modalities:** Text and image input, text output; adaptive thinking and tool use.
- **Pricing (2026-11-01):** $0.10 input / $0.50 output per million for prompts up to 100K tokens; $0.50/$2.50 above 100K. Cache writes and tools are additional.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Anthropic reports Terminal-Bench 4.0 **39.2%**, OSWorld 2.1 offline **72.4% partial credit**, GDPval-AA v2.1 **1620 Elo**. Vals TB 4.0 **36.36% ± 2.31** is a separate evaluation.

Reasoning / knowledge:

- Anthropic reports HLE **45.9% without tools / 57.4% with tools**. Vals ProofBench v1.1 **89.00% ± 3.15** and BioMysteryBench **70.37% ± 1.33**.

Coding:

- Anthropic FrontierCode 1.1 Main **46.4%**; Vals Vibe Code Bench v1.1 **90.44% ± 1.73**, Code Migration v1.1 **52.36% ± 3.49**.

Long context:

- Anthropic documents 1M; no verified 512K-plus retrieval score found. The tokenizer yields more tokens for the same text than Haiku 4.5.

### Normalized scores (1–100)

- **Tool use: 90/100.** Independent TB 4.0 and vendor computer-use results support strong agent capability.
- **Reasoning: 90/100.** No-tools HLE and Vals ProofBench support strong reasoning; tool-assisted HLE is separate.
- **Context window: 96/100.** 1M documented, without verified long-context retrieval accuracy.
- **Multimodal: 65/100.** Text and image input with text output; audio and video input not specified.
- **Coding: 89/100.** Vals Vibe Code and vendor FrontierCode support coding, moderated by Code Migration.
- **Cost efficiency: 97/100.** $0.10/$0.50 up to 100K, rising fivefold beyond that threshold.
- **Overall Score: 86/100.** Half-up mean of five quality dimensions, excluding cost.

---

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: Anthropic specifications and independent Vals evaluation; normalized scores are interpretations, not vendor scores.
- Reference URLs:
  - [Anthropic model specifications](https://platform.claude.com/docs/en/models/haiku-5-5/overview)
  - [Anthropic launch benchmarks](https://www.anthropic.com/news/claude-haiku-5-5)
  - [Vals evaluation](https://www.vals.ai/models/anthropic_claude-haiku-5-5)
- Future sources: add a separate signed findings file alongside this one.
