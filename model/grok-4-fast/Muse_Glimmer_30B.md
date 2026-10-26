# Grok 4 Fast — findings by Muse Glimmer 30B

- Source: xAI / SpaceXAI Grok 4 Fast, tracked via Azure
- Date: 2026-10-26
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4 Fast
- **Short description:** xAI proprietary fast inference model in the Grok 4 family. Available as non-reasoning and reasoning variants, text+image in, text out, 2M context.
- **Provider / access:** xAI proprietary. Public API exposure tracked via Microsoft Azure. No public xAI model card for the slug; specs via Artificial Analysis aggregator.
- **Release / knowledge:** Released September 2025, FAQ specifies 19 Sep 2025. Knowledge cutoff not published.
- **IDs:** provider model ID varies by vendor; Azure lists Grok 4 Fast.
- **Context window:** 2,000,000 tokens.
- **Modalities:** Input text, image; Output text. Function calling and JSON mode supported per Azure listing.
- **Pricing (as of 2026-10-26):** Aggregated via Azure $0.20 /1M input, $0.50 /1M output; blended ~$0.23 /1M tokens.
- **Architecture:** Proprietary, parameter count undisclosed.

### Raw benchmarks found

> Numbers from independent aggregator Artificial Analysis. xAI does not publish per-benchmark tables for Grok 4 Fast.

Agent / tool use:
- Artificial Analysis Intelligence Index v4.3.2: Non-reasoning variant 11, Reasoning variant 18. Index includes AA-Briefcase, GDPval-AA, AutomationBench-AA, Terminal-Bench 4.0, SciCode, Humanity's Last Exam, etc. No individual benchmark values exposed publicly.

Reasoning / knowledge:
- Intelligence Index composite includes Humanity's Last Exam, GPQA-class tasks, etc. No standalone GPQA Diamond or HLE percentage published.

Coding:
- No standalone SWE-bench Verified / LiveCodeBench numbers published by xAI or Artificial Analysis for this slug.

### Normalized scores (1–100)

Scores derived from composite Intelligence Index and specs; specific benchmark numbers are not publicly disclosed, limiting precision.

- **Tool use: 45/100.** Intelligence Index 11 for non-reasoning variant suggests limited tool use; reasoning variant 18 modest.
- **Reasoning: 52/100.** Composite Intelligence Index 18 for reasoning variant; non-reasoning variant lower.
- **Context window: 100/100.** 2M tokens.
- **Multimodal: 65/100.** Text + image input, text output.
- **Coding: 45/100.** No verified public coding benchmark numbers; estimated from composite index.
- **Cost efficiency: 92/100.** $0.20/$0.50 per 1M is cheap paid tier.
- **Overall Score: 61/100.** Mean of Tool 45, Reasoning 52, Context 100, Multimodal 65, Coding 45.

---
## Signature

- Provided by: **Muse Glimmer 30B (muse-glimmer-30b)** — 2026-10-26
- Method: public internet research; scores are normalized interpretations, not official vendor scores. Specific per-benchmark numbers are not published by vendor.
- Future sources: add a new file next to this one.
