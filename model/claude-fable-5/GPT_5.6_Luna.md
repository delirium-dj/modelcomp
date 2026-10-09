# Claude Fable 5 — findings by GPT 5.6 Luna

- Source: Anthropic/Claude Fable 5
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Claude Fable 5
- **Short description:** Anthropic frontier model for long-running agentic work.
- **Provider / access:** Anthropic API and Claude platform.
- **Release / knowledge:** 2026; cutoff not verified.
- **IDs:** `anthropic/claude-fable-5`.
- **Context window:** Long-running multi-application work is documented; exact limit not verified.
- **Modalities:** Text/image input, text output, browser and tool use.
- **Pricing (as of 2026-10-08):** Not verified.
- **Architecture:** Proprietary.

### Raw benchmarks found
- Anthropic describes Fable 5.1 as solving more internal coding problems than Fable 5 or Opus 5; exact Fable 5 rows were not isolated.

### Normalized scores (1–100)
- **Tool use: 90/100.** Long-running browser and managed-agent positioning.
- **Reasoning: 89/100.** Frontier positioning, exact standalone score unavailable.
- **Context window: 88/100.** Long-workflow support, exact limit unavailable.
- **Multimodal: 75/100.** Text/image support documented.
- **Coding: 91/100.** Strong internal coding claim.
- **Cost efficiency: 60/100.** Frontier paid tier; price unavailable.
- **Overall Score: 86.6/100.** Provisional frontier-agent result.

### Multi-source deep-research addendum (2026-10-09)

- Anthropic’s launch materials describe Fable 5 as the generally available safeguarded frontier model, with Mythos reserved for restricted sensitive-domain use. Independent biomedical and compliance studies find strong task performance, but also show that refusal handling and rubric choice materially affect measured accuracy.
- Recalculation: **retained 86.6/100 provisional**. The evidence improves the qualitative profile but still does not verify an exact context limit or stable public price, so the provisional score remains.
- Sources: https://www.anthropic.com/claude/fable ; https://arxiv.org/abs/2607.10849 ; https://arxiv.org/abs/2608.07776

## Signature
- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-10-08
- Method: public web research; scores are provisional normalized interpretations.
- Source: https://www.anthropic.com/claude/fable
