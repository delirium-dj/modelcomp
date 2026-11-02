# Claude Sonnet 3.7 — findings by Beam

- Source: Anthropic / Claude Sonnet 3.7, `anthropic/claude-sonnet-3.7`
- Date: 2026-11-01 (UTC) — refreshed from 2026-10-17 with deeper research
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 3.7
- **Short description:** Anthropic first hybrid reasoning model (Feb 24, 2025): 200K context, 64K output (128K beta), extended thinking. Best-in-class agentic coding at release. Superseded by Sonnet 4/4.5/4.6/5/5.5.
- **Provider / access:** Anthropic API `claude-sonnet-3-7`; AWS Bedrock; Google Vertex AI; OpenRouter; Databricks.
- **Release / knowledge:** Released 2025-02-24; knowledge cutoff October 2024.
- **IDs:** `anthropic/claude-sonnet-3-7` (also `claude-3-7-sonnet-20250219`)
- **Context window:** 200,000 tokens; max output 64,000 (128K beta).
- **Modalities:** text, image, PDF in; text out; reasoning yes (hybrid extended thinking); tool calling yes; structured output yes.
- **Pricing (as of 2026-11-01):** $3.00 / 1M input, $15.00 / 1M output; paid (unchanged since release).
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

Agent / tool use:

- SWE-bench Verified (agentic coding): **62.3%** (Anthropic official, standard) / **70.3%** (high-compute with rejection sampling) — Anthropic official (Feb 24, 2025); evals.report harness reports 61.0%.
- TAU-bench (Telecom): **49%** pass^1 — evals.report; Anthropic chart estimate ~81.2% (TAU-bench, domain unspecified, estimated from image, low confidence).
- GAIA: **43.9%** accuracy — evals.report.
- GDPval: **1048** Elo — evals.report.
- WebArena: **52.0%** task success — evals.report.
- Online-Mind2Web: **39.33%** task success — evals.report.
- METR task-completion time horizon: **60.4 min** (50%) — evals.report.
- MCP-Universe: **24.24%** overall success — evals.report.
- OSWorld / Terminal-Bench: not reported for 3.7.

Reasoning / knowledge:

- GPQA Diamond: **78.5%** accuracy — Anthropic official (Feb 24, 2025); Anthropic chart estimates ~78.2% (64K extended thinking) / ~84.8% (no extended thinking) (estimated from image, low confidence).
- MMLU-Pro: **83.7%** accuracy — evals.report.
- AIME (OTIS Mock): **57.8%** accuracy — evals.report.
- FrontierMath: **4.14%** accuracy — evals.report.
- Epoch Capabilities Index: **142.0** — evals.report.
- MultiChallenge: **51.58%** — evals.report.
- EnigmaEval: **4.23%** — evals.report.
- PolyMath: **33.5** difficulty-weighted accuracy — evals.report.
- PutnamBench: **0** problems solved — evals.report.
- MultiNRC: **27.77%** — evals.report.
- HLE / ARC-AGI / AA Intelligence Index: not reported for 3.7.

Coding:

- SWE-bench Verified: **61.0%** — Anthropic official.
- SWE-bench Multilingual: **43%** — evals.report.
- SWE-bench Multimodal: **31.33%** — evals.report.
- Aider Polyglot: **64.9%** — evals.report.
- LiveCodeBench: **39.4%** Pass@1 — evals.report.
- SciCode: **40.3%** — evals.report.
- BigCodeBench: **33.8%** calibrated Pass@1 — evals.report.
- GSO (software optimization): **3.8%** Opt@1 — evals.report.

Long context:

- 200K window; no dedicated MRCR published.

Multimodal:

- MMMU (validation): **75.0%** accuracy — evals.report; Anthropic chart estimates ~75% (64K extended thinking) (estimated from image, low confidence).
- MMMLU: Anthropic chart estimates ~86.1% (64K extended thinking) / ~83.2% (no extended thinking) / ~82.1% (3.5 new) (estimated from image, low confidence).
- MMMU-Pro / MMMU not separately beyond above.
- ZeroBench: **1.0%** (pass@1) — evals.report.
- Text/image/PDF in.

Chat / preference:

- LMArena: **1299** rating — evals.report.
- Arena-Hard-Auto v2.0: **59.8%** win rate — evals.report.
- EQ-Bench Creative Writing v3: **1395** Elo — evals.report.
- Design Arena: **1231** Elo — evals.report.

### Normalized scores (1-100)

- **Tool use: 72/100.** TAU-bench Telecom 49%, WebArena 52%, Online-Mind2Web 39.33%, GAIA 43.9%, MCP-Universe 24.24%; caps at no published OSWorld/Terminal-Bench.
- **Reasoning: 74/100.** GPQA 78.5%, MMLU-Pro 83.7%, AIME 57.8%, FrontierMath 4.14%; caps at no published HLE/ARC-AGI/AA Index.
- **Context window: 64/100.** 200K window; caps at no published MRCR.
- **Multimodal: 72/100.** MMMU 75.0%, text/image/PDF in; caps at no published MMMU-Pro.
- **Coding: 74/100.** SWE-bench Verified 61.0%, Aider Polyglot 64.9%, LiveCodeBench 39.4%, SciCode 40.3%; caps at no published SWE-bench Pro.
- **Cost efficiency: 78/100.** Mid $3/$15 per 1M.
- **Overall Score: 71/100.** (72 + 74 + 64 + 72 + 74) / 5 = 71.2 -> 71. Best-fit for mid-tier coding at mid cost; superseded by Sonnet 4/4.5/4.6/5/5.5.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-11-01 (refresh of 2026-10-17)
- Method: public internet research (Anthropic official announcement, evals.report); scores are normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude 3.7 Sonnet system card / announcement — Anthropic](https://www.anthropic.com/news/claude-3-7-sonnet)
  - [Claude 3.7 Sonnet benchmark scores — evals.report](https://evals.report/models/anthropic-claude-3-7-sonnet)
  - [Claude 3.7 Sonnet benchmarks (56 data points) — ViralChart (estimated from Anthropic chart)](https://viral-chart.com/data/75be1f405c8a/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
