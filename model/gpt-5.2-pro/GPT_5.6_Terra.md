# GPT-5.2 Pro — findings by GPT-5.6 Terra

- Source: OpenAI / GPT-5.2 Pro
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2 Pro
- **Short description:** OpenAI's previous high-compute professional reasoning model, now superseded by GPT-5.5 Pro.
- **Provider / access:** OpenAI Responses API only as `gpt-5.2-pro`.
- **Release / knowledge:** 2025-12-11; knowledge cutoff 2025-08-31.
- **IDs:** `openai/gpt-5.2-pro`.
- **Context window:** 400,000 input / 128,000 maximum output tokens.
- **Modalities:** text and image input; text output; audio and video unsupported.
- **Pricing (as of 2026-11-03):** $21 input / $168 output per 1M tokens.
- **Architecture:** proprietary reasoning model; medium, high, and xhigh effort.

### Raw benchmarks found

Agent / tool use:

- LH-Bench: **4.27** (independent live leaderboard, Codex harness; 18 runs).

Reasoning / knowledge:

- ARC-AGI-1 Verified: **over 90%** (OpenAI-reported Pro result).

Coding:

- no verified public exact GPT-5.2 Pro coding score found in reviewed sources.

Long context:

- MRCRv2: **98.2%** (OpenAI-reported 4K–8K setting); no 400K retrieval score found.

### Normalized scores (1–100)

- **Tool use: 84/100.** Independent LH-Bench evidence supports strong agent work, with sparse task-level coverage.
- **Reasoning: 94/100.** The vendor ARC-AGI result is exceptional, capped for lack of independent replication.
- **Context window: 94/100.** 400K context and reported MRCR are strong, though not at the million-token tier.
- **Multimodal: 60/100.** Image input is supported, but audio and video are not.
- **Coding: 82/100.** Professional reasoning can support code work, but exact Pro coding evidence was not located.
- **Cost efficiency: 18/100.** $21/$168 per million tokens is extremely expensive.
- **Overall Score: 83/100.** Mean of the five quality dimensions = 82.8; suited to expensive, high-stakes professional reasoning.

---

## Signature

- Provided by: **GPT-5.6 Terra (`openai/gpt-5.6-terra`)** — 2026-11-03
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI model documentation](https://developers.openai.com/api/docs/models/gpt-5.2-pro)
  - [OpenAI GPT-5.2 announcement](https://openai.com/index/introducing-gpt-5-2/)
  - [LH-Bench leaderboard repository](https://github.com/metaphi-labs/lh-bench)
