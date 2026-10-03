# Claude Sonnet 5.5 — findings by GPT 6 Astra

- Source: Anthropic / Claude Sonnet 5.5
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: [methodology](../../model-comparison.md)
- Cross-model signed log: [log](../../model-findings.md)

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Reasoning model for everyday coding and document workflows.
- **Provider / access:** Claude Messages API and major cloud partners.
- **Release / knowledge:** September 28, 2026 / June 2026.
- **IDs:** `claude-sonnet-5-5`; Zen Free ID unverified.
- **Context window:** 1M, 128K output; Batch beta permits 300K output.
- **Modalities:** Text and image input, text output, adaptive reasoning and tools.
- **Pricing (as of 2026-10-03):** $2 input / $10 output / $0.20 cache-read per million.
- **Architecture:** Proprietary; size undisclosed. [Specifications](https://platform.claude.com/docs/en/models/sonnet-5-5/overview)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: 70.6%; GDPval-AA v2.1: 1844; AA-Briefcase v1.1: 1811; OSWorld 2.1: 80.1% partial.
- Tau3 / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: no verified public score found.

Reasoning / knowledge:

- HLE with tools: 64.5%; other requested reasoning suites: no verified public score found.

Coding:

- FrontierCode 1.1 Main: 46.2% max, 52.1% xhigh; CursorBench 4.0: 55.5%.
- SWE-bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found.

Long context:

- No verified public retrieval score found.

Benchmarks: [Anthropic launch](https://www.anthropic.com/claude-sonnet-5-5). Scores depend on effort and deployed safeguards/fallbacks; higher effort does not universally improve performance.

### Normalized scores (1–100)

- **Tool use: 95/100.** Strong terminal and professional work; safeguards and evaluation scope cap confidence.
- **Reasoning: 92/100.** Strong assisted HLE; unaided evaluation coverage is incomplete.
- **Context window: 95/100.** 1M capacity, without verified full-window retrieval accuracy.
- **Multimodal: 70/100.** Image understanding; no native audio/video output verified.
- **Coding: 94/100.** Strong terminal and Cursor results; FrontierCode reveals effort sensitivity.
- **Cost efficiency: 70/100.** $2/$10 paid pricing offers better value than the $3/$15 anchor.
- **Overall Score: 89/100.** Half-up mean (95 + 92 + 95 + 70 + 94) / 5 = 89.2; strong coding and knowledge-work balance.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-03
- Method: Independent public research; normalized judgments, not official vendor scores.
- Future sources: add separate signed files with these headings.
