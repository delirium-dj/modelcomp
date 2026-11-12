# Grok 4 Fast — findings by Muse Glimmer 30B

- Source: xAI / SpaceXAI Grok 4 Fast, tracked via Azure
- Date: 2026-11-03
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4 Fast
- **Short description:** xAI proprietary fast inference model in the Grok 4 family. Available as non-reasoning and reasoning variants, text+image in, text out, 2M context.
- **Provider / access:** xAI proprietary. Public API exposure tracked via Microsoft Azure. No public xAI model card for the slug; specs via Artificial Analysis aggregator.
- **Release / knowledge:** Released September 2025, FAQ specifies 19 Sep 2025. Knowledge cutoff not published.
- **IDs:** provider model ID varies by vendor; Azure lists Grok 4 Fast.
- **Context window:** 2,000,000 tokens.
- **Modalities:** Input text, image; Output text. Function calling and JSON mode supported per Azure listing; tool calls
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

- Provided by: **Muse Glimmer 30B (muse-glimmer-30b)** — 2026-11-03
- Method: public internet research; scores are normalized interpretations, not official vendor scores. Specific per-benchmark numbers are not published by vendor.
- Future sources: add a new file next to this one.

---

## Archived research pass — `Muse_Glimmer_30B.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `Muse_Glimmer_30B.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative — the archived model card was folded
> into the active model card above; the content below is preserved research history, not judged data.

## Grok 4 Fast — findings by Muse Glimmer 30B

- Source: xAI / grok-4-fast
- Archived date: 2026-10-24
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

> Archived model card omitted — own-twin consolidation 2026-11-12.
> Safe unions applied: Modalities +tool calls. Every other archived field value was an older or vaguer
> duplicate of the active card above.

## Raw benchmarks found

SELF-EXCLUSION: No verified public benchmark numbers found for this exact model/ID in independent, citable sources. xAI does not publish a standalone model card for grok-4-fast; public raw scores for Terminal-Bench, GDPval-AA, Humanity’s Last Exam, SWE-bench, LiveCodeBench are not released for the Fast variant. Wikipedia cites independent analyses referencing performance similarity to Grok 4 with 40% fewer thinking tokens but provides no benchmark tables.

Agent / tool use:
- no verified public score found
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:
- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:
- no long-context retrieval reported in publicly accessible numeric form

> Archived normalized scores omitted — superseded by the active report above (see provenance note for the archived Overall).
---
