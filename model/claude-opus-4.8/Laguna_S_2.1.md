# Claude Opus 4.8 — findings by Laguna S 2.1

> Source: poolside/laguna-s-2.1 (BenchLM, Artificial Analysis, Anthropic)
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- Name: Claude Opus 4.8 (Anthropic)
- Short description: Anthropic's May 2026 adaptive reasoning flagship model, delivering top-tier intelligence. Superseded by Claude Opus 5 (per AA).
- Provider / access: Anthropic API (`claude-opus-4-8`), AWS Bedrock, Google Vertex AI.
- Release: 2026-05-01. Knowledge cutoff: 2026-03.
- IDs: `anthropic/claude-opus-4-8`
- Context window: 1,000,000 tokens (BenchLM confirms 1M)
- Modalities: text, image in; text out; reasoning yes; tool calls yes; JSON mode yes (per AA model page)
- Pricing (as of 2026-10-01): $5.00 input / $25.00 output per 1M tokens ($3.85 blended with cache)
- Architecture: Proprietary adaptive reasoning architecture

### Research log

1. Fetched BenchLM page `https://benchlm.ai/models/claude-opus-4-8` — overall 69.12, rank #18/889, 1M context, "Reasoning" model type
2. Fetched AA model page `https://artificialanalysis.ai/models/claude-opus-4-8` — Intelligence Index 42 (rank #49/227), text+image input, $5.00/$25.00 pricing, deprecated (newer: Claude Opus 5)
3. Fetched OpenAI+Meta comparison tables citing Anthropic system card — GPQA-D 91.2%, HLE 56.9%

### Raw benchmarks found

> Sources: BenchLM (`https://benchlm.ai/models/claude-opus-4-8` for overall rank/score (#18/889, 69.12) and benchmark tables), AA model page for Intelligence Index, modalities, pricing, OpenAI+Meta comparison tables citing Anthropic system card.

Agent / tool use:

- Terminal-Bench 3.0: 28.4% (Anthropic system card)
- AA Terminal-Bench 4.0: 27.1% (AA leaderboard)
- GDPval-AA: Elo 1642 (Anthropic system card)
- AA Briefcase: Elo 1356 (AA leaderboard)
- AutomationBench: 43.2% (Anthropic system card)
- AA AutomationBench: 45.3% (AA leaderboard)
- AA ITBench: 47.8% (AA leaderboard)

Reasoning / knowledge:

- GPQA Diamond: 91.2% (Anthropic system card, via comparison tables)
- AA-GPQA-D: 91.2% (AA leaderboard)
- HLE (with tools): 56.9% (Anthropic system card)
- AA-HLE: 55.0% (AA leaderboard)
- AA Intelligence Index: 42 (rank #49/227) (AA model page)
- AA-LCR: 82.7% (AA model benchmarks)
- MLCR-AA: 75.0% (AA model benchmarks)
- CritPt: 31.4% (AA leaderboard)
- AA-Omniscience Index: 32.3 (AA model benchmarks)

Coding:

- SWE-bench: 72.3% (Anthropic system card, via comparison tables)
- SWE Multilingual: 84.7% (Anthropic system card)
- DeepSWE: 68.5% (Anthropic system card)
- AA-SciCode: 58.3% (AA leaderboard)
- ProgramBench: 75.6% (Anthropic system card)
- AA Coding Index: 71.2% (AA model benchmarks)

Long context:

- AA-LCR (long-context reasoning at 1M): 82.7%
- MLCR-AA (medical long-context reasoning): 75.0%

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of the five quality dims (see `RULES.md`). Cost excluded.
> > Confidence: high — 20+ public benchmarks found across 3 sources (BenchLM, AA, Anthropic system card via comparison tables).

- **Tool use: 84/100.** GDPval-AA Elo 1642 is solid (below 1750 frontier threshold), AA Briefcase 1356 Elo, AutomationBench 43.2%, AA AutomationBench 45.3%, AA ITBench 47.8%. Capped by Terminal-Bench 3.0 at 28.4% and TB 4.0 at 27.1% (both below benchmark threshold), no OSWorld-Verified published.

- **Reasoning: 85/100.** GPQA Diamond 91.2% (at frontier 90%+), HLE 56.9% (above 40% frontier), AA-LCR 82.7%, MLCR-AA 75.0%, CritPt 31.4%. Capped by AA Intelligence Index 42 (well below 60 frontier ref) and AA Omniscience Index 32.3 (low reliability).

- **Context window: 95/100.** 1M tokens (verified via BenchLM). AA-LCR 82.7% and MLCR-AA 75.0% demonstrate strong long-context reasoning. No ≥98% retrieval at 512K+ data to claim higher.

- **Multimodal: 70/100.** Text and image input, text output (per AA model page). Per methodology "+image in = 60-70". No video/audio input or non-text output verified.

- **Coding: 86/100.** SWE-bench 72.3%, SWE Multilingual 84.7%, DeepSWE 68.5%, AA-SciCode 58.3%, ProgramBench 75.6%, AA Coding Index 71.2%. Strong coding performance across multiple benchmarks. Capped by no LiveCodeBench data published for this exact ID.

- **Cost efficiency: 45/100.** Premium tier pricing ($5.00 in / $25.00 out per 1M tokens).

- **Overall Score: 84/100.** (84 + 85 + 95 + 70 + 86) / 5 = 420 / 5 = 84.0 → 84. Strong reasoning model with excellent GPQA 91.2% and HLE 56.9%; cap: low Intelligence Index (42), weak Terminal-Bench scores (27-28%), and premium pricing; deprecated (newer Claude Opus 5 available).

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-01
- Method: public internet research via BenchLM, Artificial Analysis, and Anthropic system card (cited via comparison tables); scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `model/` findings files during research.
- Future sources: add a new file next to this one, e.g. `Claude_Opus_4_8_1.md`, using the same headings.

---