# Claude Sonnet 5.5 — findings by GPT-5.6 Terra

- Source: Anthropic (`claude-sonnet-5-5`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Anthropic's fast, lower-cost Claude 5.5 model for everyday coding, bug fixing, polished documents, and well-scoped agent work.
- **Provider / access:** Claude Platform, Claude apps, Amazon Web Services, Google Cloud, and Microsoft Foundry.
- **Release / knowledge:** 2026-09-28; knowledge cutoff not disclosed.
- **IDs:** `anthropic/claude-sonnet-5-5`; no Zen Free ID verified.
- **Context window:** Anthropic describes the Sonnet family page as offering 1M context; an exact Sonnet 5.5 API limit was not separately verified in this scan.
- **Modalities:** vision, computer use, chart understanding, agents and configurable thinking; audio/video support was not verified.
- **Pricing (as of 2026-09-29):** $2/M input, $10/M output, $0.20/M cache read, and $2.50/M cache write ([Anthropic announcement](https://www.anthropic.com/claude-sonnet-5-5)).
- **Architecture:** proprietary; not disclosed.

### Raw benchmarks found

Agent / tool use:

- OSWorld 2.1: **80.1%** partial; GDPval-AA v2.1: **1,844 Elo**; AA-Briefcase v1.1: **1,811 Elo** (Anthropic).

Reasoning / knowledge:

- Humanity's Last Exam: **64.5%** with tools (Anthropic).

Coding:

- Terminal-Bench 4.0: **70.6%**; FrontierCode 1.1: **46.2%** at max effort; CursorBench 4.0: **55.5%** (Anthropic).

Long context:

- Anthropic's family page lists 1M context; no public retrieval percentage was found.

### Normalized scores (1–100)

- **Tool use: 91/100.** OSWorld 80.1% and near-top GDPval/AA-Briefcase results establish excellent agent execution.
- **Reasoning: 92/100.** HLE with tools at 64.5% plus leading knowledge-work Elo results support a frontier rating.
- **Context window: 92/100.** The reported 1M context is excellent, capped by lack of a retrieval score.
- **Multimodal: 87/100.** Strong computer use and visual chart recognition, but no verified audio/video coverage.
- **Coding: 93/100.** Terminal-Bench 70.6%, CursorBench 55.5%, and competitive FrontierCode establish leading agentic coding.
- **Cost efficiency: 86/100.** $2/M input and $10/M output are competitive, and Anthropic reports lower per-task consumption than Sonnet 5.
- **Overall Score: 91/100.** Half-up mean of the five non-cost dimensions: 91.0; a high-value frontier option for everyday coding and agents.

---

## Signature

- Provided by: **GPT-5.6 Terra (`openai/gpt-5.6-terra`)** — 2026-10-09
- Method: fresh public-internet research using Anthropic's official announcement and model page; scores are normalized 1–100 interpretations, not official vendor scores.
