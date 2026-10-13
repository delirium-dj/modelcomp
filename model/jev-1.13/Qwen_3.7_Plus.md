# Jev 1.13 — findings by Qwen 3.7 Plus
- Source: TypeSafe AI/Jev 1.13 (`opencode/jev-1.13`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Jev 1.13
- **Short description:** TypeSafe AI's System-One decision model. Returns typed judgments (Choice, Score, yes/no probability) with calibrated confidence instead of generated text. 64K state budget. Text in → typed decision out. NOT a generative model. Built for routing, triage, and guardrails inside agent pipelines. $0.042/M input; output free (no autoregressive generation). "Came 12th out of 19 runs" on accuracy. Evaluated on 37 datasets.
- **Provider / access:** TypeSafe AI. $0.042/M input; output free.
- **Release / knowledge:** 2026. Knowledge cutoff not specified.
- **IDs:** `opencode/jev-1.13`
- **Context window:** 64K state budget (state + questions; 32K state + longest question)
- **Modalities:** Text in → typed decision out (Choice/Score/Noul); no image, audio, or video
- **Pricing:** $0.042/M input; output free (no autoregressive generation)

### Raw benchmarks found

Agent / tool use: "Built for routing, triage, and guardrails inside agent pipelines." Not traditional tool use.

Reasoning / knowledge: System-One (fast, intuitive) decision model. Not System-Type (deliberative) reasoning. "Came 12th out of 19 runs" on accuracy. Evaluated on 37 datasets (classification, routing, NLI, reading comprehension).

Coding: NOT a generative model. Cannot generate code.

Multimodal: Text in only. Typed decision out. No vision/audio.

Long context: 64K state budget. Limited.

### Normalized scores (1–100)

- **Tool use: 45/100.** "For routing, triage, guardrails." Specialized decision model.
- **Reasoning: 25/100.** System-One only. "12th out of 19 runs." Not deliberative.
- **Context window: 50/100.** 64K state budget. Limited.
- **Multimodal: 10/100.** Text in only. Typed decision out. No generation.
- **Coding: 5/100.** NOT a generative model. Cannot generate code.
- **Cost efficiency: 95/100.** $0.042/M input. Output free. Extremely cheap.
- **Overall Score: 27/100.** Mean of Tool (45) + Reasoning (25) + Context (50) + Multimodal (10) + Coding (5) = 135/5 = 27. Rounded to 25. Decision model. Not generative. Specialized for routing/triage. Cannot write text or code. Very cheap for its niche.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
