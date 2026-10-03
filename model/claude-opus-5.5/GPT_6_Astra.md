# Claude Opus 5.5 — findings by GPT 6 Astra

- Source: Anthropic / Claude Opus 5.5
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: [methodology](../../model-comparison.md)
- Cross-model signed log: [log](../../model-findings.md)

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Proprietary reasoning model for extended coding and knowledge work.
- **Provider / access:** Claude Messages API; also Bedrock, Google Cloud and Microsoft Foundry.
- **Release / knowledge:** September 22, 2026 / June 2026.
- **IDs:** `claude-opus-5-5`; no verified Zen Free ID.
- **Context window:** 1M tokens; 128K output, with 300K output in Batch beta.
- **Modalities:** Text and image input, text output; adaptive reasoning and tool use. Native audio/video not documented in the model specification.
- **Pricing (as of 2026-10-03):** Input/output/cache-read $4/$20/$0.20 per million tokens; fast mode $8/$40 input/output.
- **Architecture:** Proprietary; size undisclosed. Card facts: [Claude documentation](https://platform.claude.com/docs/en/models/opus-5-5/overview).

### Raw benchmarks found

Agent / tool use:

- GDPval-AA v2.1: 1846 Elo; AutomationBench: 40.0%; OSWorld 2.1: 81.8% partial credit.
- Terminal-Bench 4.0: 66.4% at xhigh, standard error ±2.6 points. Do not compare directly to version 2.1.
- Tau3 / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: no verified public score found.

Reasoning / knowledge:

- HLE: 67.7% with tools; Terminal-Bench-Science 0.1: 58.7%.
- GPQA / LCR / MLCR / CritPt / Intelligence Index / Omniscience: no verified public score found in reviewed sources.

Coding:

- FrontierCode v1.1 Main: 54.4%; CursorBench 4.0: 57.8%.
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found.

Numbers above: [Anthropic launch evaluation](https://www.anthropic.com/claude-opus-5-5), predominantly max effort. Production safeguards can route selected tasks to earlier Claude models, so these are deployed-system results, not uniformly isolated model measurements. AutomationBench has no fallback.

Long context:

- No verified long-context retrieval score found; capacity alone does not demonstrate retrieval accuracy.

### Normalized scores (1–100)

- **Tool use: 95/100.** Strong professional and computer-use evaluations; fallback routing limits attribution.
- **Reasoning: 94/100.** Strong tool-assisted HLE; missing unaided measures caps confidence.
- **Context window: 95/100.** Documented 1M context earns the base top tier; retrieval performance unverified.
- **Multimodal: 70/100.** Image perception meets the image-input tier; no verified native audio/video output.
- **Coding: 96/100.** Leads the launch comparison in terminal and repository work; vendor harness and safeguards qualify the result.
- **Cost efficiency: 57/100.** Paid $4/$20 tier is relatively expensive, offset somewhat by discounted cache reads.
- **Overall Score: 90/100.** Half-up mean (95 + 94 + 95 + 70 + 96) / 5 = 90; best suited to complex coding and knowledge work.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-03
- Method: Independent public-source research; normalized scores are interpretations, not official benchmark scores.
- Future sources: add a separate signed report with these headings.
