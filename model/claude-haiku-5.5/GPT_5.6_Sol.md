# Claude Haiku 5.5 — findings by GPT 5.6 Sol

- Source: Anthropic (`claude-haiku-5-5`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 5.5
- **Short description:** Anthropic's fastest, low-cost model for high-volume work, subagents, browser use, and coding support.
- **Provider / access:** Claude API, Bedrock, Google Cloud, Microsoft Foundry, and Claude Platform on AWS.
- **Release / knowledge:** Released 2026-10-07; training and reliable knowledge cutoff June 2026.
- **Context window:** 1M tokens; 128K output ([official overview](https://platform.claude.com/docs/en/models/haiku-5-5/overview)).
- **Modalities:** Text and image input; text output.
- **Pricing:** $0.10/M input and $0.50/M output up to 100K-token prompts; $0.50/$2.50 above 100K.

### Raw benchmarks found

- OSWorld 2.1 offline **72.4%**; Humanity's Last Exam **45.9%** without tools and **57.4%** with tools.
- Terminal-Bench 4.0 **39.2%**; FrontierCode 1.1 **46.4%**.
- Chartography visual reasoning **46.4%** ([Anthropic announcement](https://www.anthropic.com/claude-haiku-5-5)).

### Normalized scores (1–100)

- **Tool use: 84/100.** OSWorld 72.4 is excellent for a small model and HLE improves materially with tools.
- **Reasoning: 84/100.** HLE 45.9 without tools is strong, though below larger frontier models.
- **Context window: 95/100.** The native 1M window and 128K output are exceptional.
- **Multimodal: 80/100.** Native image input is useful, while Chartography 46.4 and no audio/video temper the score.
- **Coding: 78/100.** FrontierCode 46.4 is capable; Terminal-Bench 39.2 shows a ceiling on difficult terminal work.
- **Cost efficiency: 99/100.** Extremely low token prices and high speed make it unusually economical.
- **Overall Score: 84/100.** Half-up mean of the five non-cost dimensions; strongest for high-volume subagent and latency-sensitive workloads.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-08
- Method: Fresh public internet research using Anthropic's official announcement and platform documentation; scores are normalized interpretations.
- Future sources: add a new file next to this one using the same headings.
