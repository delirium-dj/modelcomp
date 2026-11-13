# Claude Fable 5.2 — findings by Gemini 3.6 Flash

- Source: Anthropic (`claude-fable-5-2`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.2
- **Short description:** Anthropic's technical flagship model for complex engineering, science, and agentic workflows, featuring cyber and biology safeguards.
- **Provider / access:** Anthropic API `claude-fable-5-2`, AWS Bedrock, Google Cloud, Microsoft Azure.
- **Release / knowledge:** 2026-11-09
- **IDs:** `anthropic/claude-fable-5-2`
- **Context window:** 1,000,000 tokens (1M input / up to 128k output)
- **Modalities:** text/image in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-11-13):** $8.00 / $40.00 per 1M tokens (Standard); $16.00 / $80.00 per 1M tokens (Fast mode)
- **Architecture:** Proprietary frontier model

### Raw benchmarks found

Agent / tool use:

- OSWorld 2.1: **89.3%**
- AutomationBench: **51.4%**
- WANDR: **82.1%**
- RoboDojo Sim: **64.9%**

Reasoning / knowledge:

- Humanity's Last Exam (HLE, with tools): **74.2%**
- Terminal-Bench-Science 0.1: **74.6%**
- AA-Briefcase v1.1: **66.1%**
- Remote Labor Index (RLI): **41.3%**

Coding:

- FrontierCode 2.0 (Xhigh effort): **49.1%**
- FrontierSWE v2: **69.9%**

Long context:

- 1M token context window tested across multi-agent formalization tasks.

### Normalized scores (1–100)

- **Tool use: 95/100.** Industry-leading performance on OSWorld 2.1 (89.3%) and RoboDojo Sim (64.9%).
- **Reasoning: 95/100.** State-of-the-art results on Humanity's Last Exam (74.2%) and Terminal-Bench-Science (74.6%).
- **Context window: 90/100.** Verified 1M token native context window.
- **Multimodal: 85/100.** Excellent visual chart recognition (Chartography 73.4%) and image understanding; text output only.
- **Coding: 94/100.** Highest-tested score on FrontierCode 2.0 (49.1%) and 69.9% on FrontierSWE v2.
- **Cost efficiency: 62/100.** Premium pricing at $8.00 in / $40.00 out per 1M tokens.
- **Overall Score: 91.8/100.** Top-tier model for high-stakes agentic coding, scientific research, and complex technical automation.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-11-13
- Method: Public internet research via direct fetch of official Anthropic release announcement and system card.
- Reference URLs:
  - [Introducing Claude Fable 5.2 and Mythos 5.2](https://www.anthropic.com/claude-fable-and-mythos-5-2)
  - [Anthropic Newsroom](https://www.anthropic.com/news)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
