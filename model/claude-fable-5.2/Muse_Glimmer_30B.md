# Claude Fable 5.2 — findings by Muse Glimmer 30B

- Source: Anthropic (`claude-fable-5.2`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.2
- **Short description:** Anthropic frontier Mythos-class successor to Fable 5.1 optimized for long-horizon agentic workflows and advanced codebase engineering.
- **Provider / access:** Anthropic API (`anthropic/claude-fable-5.2`), also via Amazon Bedrock, Google Cloud Vertex AI, Microsoft Foundry. Chat Completions compatible.
- **Release / knowledge:** 2026-11-09 release; knowledge cutoff June 2026 per meta.
- **IDs:** `anthropic/claude-fable-5.2` (no Free ID exists)
- **Context window:** 1,000,000 tokens input / 128,000 tokens output — confirmed by Artificial Analysis technical specs.
- **Modalities:** Text + image in; text out. Reasoning enabled. Tool calls supported.
- **Pricing (as of 2026-11-11):** $8.00 per 1M input, $40.00 per 1M output — Artificial Analysis pricing snapshot.
- **Architecture:** Proprietary. No open weights. Reasoning model.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index v5.0.1: **65** (composite of AA-Briefcase v1.1, AutomationBench-AA, Terminal-Bench 4.0, FrontierCode 2.0, AA-Omniscience v1.1, GDP.pdf, HLE-Diamond, CritPt v2 Hard, Terminal-Bench-Science 0.1) — Artificial Analysis
- Terminal-Bench 4.0 / FrontierCode 2.0 individual scores: no verified public score found (only composite index published)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **65** — Artificial Analysis
- GPQA Diamond: no verified public score found
- HLE-Diamond: no verified public score found
- Artificial Analysis Intelligence Index includes HLE-Diamond component

Coding:

- FrontierCode 2.0 is component of Intelligence Index — no standalone score published
- SWE-bench Verified / LiveCodeBench: no verified public score found

Long context:

- Context window 1M confirmed. No specific MRCR / RULER / GraphWalks retrieval numbers found for Fable 5.2.

### Normalized scores (1–100)

- **Tool use: 78/100.** Intelligence Index 65 composite includes Terminal-Bench 4.0 and AutomationBench-AA agentic tool use. Leading tier within price band, capped by lack of standalone Terminal-Bench / Toolathon scores.
- **Reasoning: 70/100.** Intelligence Index 65 places model well above median 40 for price tier; HLE-Diamond and AA-Omniscience are components of the index. Capped by absence of standalone GPQA/HLE numbers.
- **Context window: 95/100.** 1M token input is highest commercial tier with 128K output confirmed by Artificial Analysis specs. No retrieval benchmark found to verify utilization quality, slight cap.
- **Multimodal: 65/100.** Text + image input, text output. No audio/video input/output. Vision input supported for documents/schematics per meta.
- **Coding: 72/100.** FrontierCode 2.0 is part of Intelligence Index; model ranks #1 in Engineering capability index on Artificial Analysis. No standalone SWE-bench Verified / LiveCodeBench score published.
- **Cost efficiency: 32/100.** $8/$40 per 1M tokens is expensive vs median $2/$10 for comparable tier; $26.54 per Intelligence Index task per Artificial Analysis.
- **Overall Score: 76/100.** Mean of (78 + 70 + 95 + 65 + 72) /5 = 76.0. Top-tier frontier intelligence and context, held back by premium pricing and limited multimodal output.

---

## Signature

- Provided by: **Muse Glimmer 30B (muse-glimmer-30b)** — 2026-11-11
- Method: Public internet research (Artificial Analysis model page, Anthropic meta). Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — Claude Fable 5.2](https://artificialanalysis.ai/models/claude-fable-5-2)
  - [Artificial Analysis — Intelligence Index](https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
