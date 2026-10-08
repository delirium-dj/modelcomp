# Claude Haiku 5.5 — findings by GPT 6 Astra

- Source: Anthropic / claude-haiku-5-5
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: [Methodology](../../model-comparison.md)
- Cross-model signed log: [Findings](../../model-findings.md)

## Model card

- **Name:** Claude Haiku 5.5
- **Short description:** Small model for frequent, bounded agent tasks and low-latency processing.
- **Provider / access:** Claude Messages API, AWS, Google Cloud and Microsoft Foundry.
- **IDs:** `claude-haiku-5-5`; no verified Zen Free ID.
- **Release / knowledge:** October 7, 2026; June 2026 cutoff.
- **Context window:** 1M; 128K output, with 300K Batch API output beta documented separately.
- **Modalities:** Text/image input, text output, adaptive thinking (medium default), tools/computer use. JSON enforcement not independently checked.
- **Pricing (as of 2026-10-08):** Per million, prompts up to 100K: $0.10 input / $0.50 output / $0.01 cache read; above 100K: $0.50/$2.50/$0.05. Five-minute cache writes $0.125/$0.625 respectively. Paid service.
- **Architecture:** Proprietary; parameter counts undisclosed.

[Official specifications](https://platform.claude.com/docs/en/models/haiku-5-5/overview). The [migration notes](https://platform.claude.com/docs/en/models/haiku-5-5/whats-new-haiku-5-5) report approximately 30% more tokens for the same text than Haiku 4.5; compare cost per task, not only nominal token prices.

### Raw benchmarks found

[Publisher launch table](https://www.anthropic.com/claude-haiku-5-5), exact Haiku 5.5 column:
- Agent / tool use: GDPval-AA **v2.1 1620 Elo**; AA-Briefcase **v1.1 1578 Elo**; OSWorld **2.1 offline subset 72.4%**.
- Reasoning: HLE **45.9% without tools / 57.4% with tools**.
- Coding: Terminal-Bench **4.0 39.2%**; FrontierCode **1.1 Main 46.4%**.
- Vision: Chartography **46.4% without tools**.
- Terminal-Bench 2.1, Tau3, Claw-Eval, MCP-Atlas, GPQA, CritPt, Omniscience, DeepSWE, LiveCodeBench and SciCode: no verified public score found in inspected sources.
- Long context: no numeric retrieval result verified.

The linked system-card PDF exceeded the browser fetch limit; effort, repetitions and detailed harness budgets were not independently verified. OSWorld's subset and newer benchmark versions must not be equated with older full-suite scores. Partner composite-agent results are not assigned to Haiku alone.

### Normalized scores (1–100)

- **Tool use: 80/100.** Verified professional-work and offline computer-use results; incomplete harness detail limits confidence.
- **Reasoning: 86/100.** HLE supports strong reasoning, with no cross-check on GPQA or broad index.
- **Context window: 95/100.** 1M documented tier without measured retrieval.
- **Multimodal: 70/100.** Image understanding and Chartography evidence; text output only.
- **Coding: 79/100.** FrontierCode and newer terminal benchmark support useful agents below larger-model launch results.
- **Cost efficiency: 97/100.** Very cheap short prompts; fivefold long-prompt rates and tokenizer changes qualify the score.
- **Overall Score: 82/100.** (80 + 86 + 95 + 70 + 79) / 5 = 82. Good fit for high-volume bounded work.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-08 UTC
- Method: Independent primary-source research; scores are normalized interpretations, not vendor scores.
- Future sources: Add a separate signed report using these headings.

