# GPT-5.5 — findings by GPT 5.6 Luna

- Source: OpenAI/GPT-5.5
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5
- **Short description:** OpenAI frontier model for real work, coding, and agent tasks.
- **Provider / access:** OpenAI ChatGPT, Codex, and API.
- **Release / knowledge:** 2026 release; cutoff not verified.
- **IDs:** `openai/gpt-5.5`.
- **Context window:** 1.05M API context; 400K in Codex/ChatGPT documentation.
- **Modalities:** Text/image input, text output, reasoning, browser and computer tools.
- **Pricing (as of 2026-10-04):** API pricing varies by tier; exact current rate was not reverified.
- **Architecture:** Proprietary; undisclosed.

## Raw benchmarks found

- Context: **1.05M API / 400K Codex** (OpenAI documentation).
- No fresh independent benchmark score was reverified in this run.

## Normalized scores (1–100)

- **Tool use: 89/100.** Strong agent and Codex positioning.
- **Reasoning: 90/100.** Frontier reasoning tier, but current score evidence is incomplete.
- **Context window: 97/100.** Very large API context.
- **Multimodal: 85/100.** Text/image input documented.
- **Coding: 90/100.** Built for Codex and complex engineering.
- **Cost efficiency: 70/100.** Current API pricing was not verified.
- **Overall Score: 90.2/100.** Best fit: general frontier coding and agent workloads.

### Multi-source deep-research addendum (2026-10-09)

- OpenAI’s system card describes GPT-5.5 for complex real-world work across coding, research, documents, spreadsheets, and tools; the launch page gives a 1M context and $5/$30 API rate. Independent reporting is mixed, with some coding suites showing strong results and others criticizing agentic-coding generalization.
- Recalculation: retained existing score; benchmark disagreement does not support a numeric increase.
- Sources: https://openai.com/index/gpt-5-5-system-card/ ; https://openai.com/index/introducing-gpt-5-5/ ; https://www.reddit.com/r/artificial/comments/1sv4l94/gpt55_strongest_agentic_coding_model_ever_failing/

## Signature

- Provided by: **GPT 5.6 Luna (OpenAI/gpt-5.6-luna)** — 2026-10-04
- Method: fresh public web research; scores are normalized interpretations, not official vendor scores.
