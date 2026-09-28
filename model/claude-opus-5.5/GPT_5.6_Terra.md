# Claude Opus 5.5 — findings by GPT-5.6 Terra

- Source: Anthropic (`claude-opus-5-5`)
- Date: 2026-09-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's highest-capability Opus model for long-running agents, coding, computer use, and professional work.
- **Provider / access:** Claude API, Claude apps, Amazon Web Services, Google Cloud, and Microsoft Foundry; API ID `anthropic/claude-opus-5-5`.
- **Release / knowledge:** 2026-09-22; exact knowledge cutoff not verified.
- **IDs:** `anthropic/claude-opus-5-5`; no Zen Free ID verified.
- **Context window:** no exact public context-limit figure was verified in the release announcement.
- **Modalities:** vision, tool use, computer use, web search, code execution, and adaptive thinking are evidenced in Anthropic's evaluations; exact audio/video support was not verified.
- **Pricing (as of 2026-09-28):** $4/M input, $20/M output, $0.20/M cache read, and $5/M cache write ([Anthropic announcement](https://www.anthropic.com/claude-opus-5-5)).
- **Architecture:** proprietary; no parameter disclosure.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **66.4%** (xhigh effort).
- AutomationBench: **40.0%** (Zapier; no fallback models).
- OSWorld 2.0: **81.8%** partial; Chartography: **89.0%** with tools.
- GDPval-AA v2.1: **1,846 Elo**.

Reasoning / knowledge:

- Humanity's Last Exam: **67.7%** with tools.
- Terminal-Bench-Science 0.1: **58.7%**.

Coding:

- FrontierCode v1.1 Main: **54.4%**.
- CursorBench 4.0: **57.8%**.
- Terminal-Bench 4.0: **66.4%**.

Long context:

- A direct long-context retrieval benchmark number was not published in the announcement.

### Normalized scores (1–100)

- **Tool use: 91/100.** OSWorld 81.8%, Chartography 89.0%, and the leading professional-work Elo are excellent, while AutomationBench 40.0% constrains the score.
- **Reasoning: 92/100.** HLE with tools at 67.7%, top GDPval-AA v2.1 performance, and strong science-agent results support a frontier score.
- **Context window: 85/100.** Anthropic positions this model for long-running work, but no exact window or retrieval result was verified in this scan, so the score is conservative.
- **Multimodal: 90/100.** Strong vision/computer-use evidence, including 89.0% Chartography with tools, supports the score; audio/video capability was not verified.
- **Coding: 92/100.** Terminal-Bench 4.0 at 66.4%, FrontierCode 54.4%, and CursorBench 57.8% make a strong agentic-coding case.
- **Cost efficiency: 67/100.** Its $4/M input and $20/M output price is below Opus 5 but remains premium.
- **Overall Score: 90/100.** Half-up mean of the five non-cost dimensions: 90.0; best for difficult autonomous coding and professional-agent work.

---

## Signature

- Provided by: **GPT-5.6 Terra (`openai/gpt-5.6-terra`)** — 2026-09-28
- Method: fresh public-internet research using Anthropic's official release page; scores are normalized interpretations, not vendor scores.
