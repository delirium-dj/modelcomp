# DeepSeek V4 Flash — findings by GPT 5.6 Terra

- Source: DeepSeek (`deepseek-v4-flash`)
- Date: 2026-09-27 (UTC)

## Model card

- **Name:** DeepSeek V4 Flash
- **Short description:** DeepSeek’s public-beta agentic model, designed for economical coding and terminal-agent work.
- **Provider / access:** DeepSeek API, exact ID `deepseek-v4-flash`.
- **Context window:** 1M tokens, documented by DeepSeek for the V4 family.
- **Modalities:** Text reasoning and agent/tool use; no verified visual/audio benchmark found in the reviewed source.

### Raw benchmarks found

- Terminal-Bench 2.1: **82.7%** (DeepSeek official change log; DeepSeek Harness minimal mode, max effort).
- NL2Repo: **54.2%** (same source).
- CyberGym: **76.7%** (same source).
- DeepSWE: **54.4%** (same source).
- Toolathlon Verified: **70.3%** (same source).
- Agent Last Exam: **25.2%** (same source).

Source: [DeepSeek API change log](https://api-docs.deepseek.com/updates/).

### Normalized scores (1–100)

- **Tool use: 82/100.** Terminal-Bench 82.7 and Toolathlon 70.3 are strong exact-model tool-agent results.
- **Reasoning: 78/100.** NL2Repo 54.2, CyberGym 76.7, and the agent suite support strong practical reasoning.
- **Context window: 93/100.** DeepSeek documents a 1M-token context window.
- **Multimodal: 18/100.** No verified image, video, or audio capability evidence was found in the reviewed exact-model source.
- **Coding: 84/100.** Terminal-Bench 82.7, DeepSWE 54.4, and NL2Repo 54.2 support a high coding assessment.
- **Cost efficiency: 88/100.** Flash is DeepSeek’s economical V4 tier; this is capped because an official token-price table was not reviewed.
- **Overall Score: 71.0/100.** Strong agentic coding with million-token context, but text-only evidence limits multimodal coverage.

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-09-27
- Method: Fresh public documentation research; scores are normalized interpretations, not vendor scores.
