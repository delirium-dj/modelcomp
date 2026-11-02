# Claude Sonnet 3.5 — findings by Beam

- Source: Anthropic / Claude Sonnet 3.5 (upgraded 2024-10-22 release), `anthropic/claude-sonnet-3-5`
- Date: 2026-11-01 (UTC) — refreshed from 2026-10-17 with deeper research
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 3.5 (upgraded release of 2024-10-22; original release 2024-06-20)
- **Short description:** Anthropic mid-tier model: 200K context, 8K output. Upgraded Oct 2024 release added computer use (public beta) and raised SWE-bench Verified 33.4% to 49.0%. Superseded by Sonnet 3.7/4/4.5/4.6/5/5.5.
- **Provider / access:** Anthropic API `claude-sonnet-3-5`; AWS Bedrock; Google Vertex AI; OpenRouter.
- **Release / knowledge:** Upgraded release 2024-10-22; original 2024-06-20. Knowledge cutoff not stated (training data through early 2024).
- **IDs:** `anthropic/claude-sonnet-3-5` (also `claude-3-5-sonnet-20241022`)
- **Context window:** 200,000 tokens; max output 8,192.
- **Modalities:** text, image, PDF in; text out; reasoning no; tool calling yes; structured output yes; computer use (public beta) yes.
- **Pricing (as of 2026-11-01):** $3.00 / 1M input, $15.00 / 1M output; paid (unchanged since release).
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

Agent / tool use:

- SWE-bench Verified (agentic coding): **49.0%** (upgraded Oct 2024 release; up from 33.4%) — Anthropic official.
- TAU-bench retail: **69.2%** (up from 62.6%); airline: **46.0%** (up from 36.0%) — Anthropic official.
- OSWorld (computer use): **14.9%** screenshot-only; **22.0%** with more steps — Anthropic official (Oct 2024).
- METR task-completion time horizon: **11.4 min** (50%) — evals.report (original June release).
- Online-Mind2Web: **29.0%** task success — evals.report.

Reasoning / knowledge:

- GPQA Diamond (Vals AI): **59.34%** (Vals AI, original June release); Anthropic chart estimates ~65% (3.5 new) (estimated from image, low confidence).
- MMLU Pro: **77.2%** accuracy — evals.report.
- SuperGPQA: **48.16%** — evals.report.
- FACTS Grounding: **79.4%** — evals.report.
- FrontierMath: **1.03%** — evals.report.
- AIME (OTIS Mock): **6.5%** — evals.report.
- Epoch Capabilities Index: **134.4** — evals.report.
- MultiChallenge: **41.4%** — evals.report.
- HLE / ARC-AGI / AA Intelligence Index: not reported for 3.5.

Coding:

- LiveCodeBench (Vals AI): **49.63%** (Vals AI).
- LiveCodeBench Pass@1: **38.1%** — evals.report.
- LiveCodeBench Pro: **572** Codeforces Elo — evals.report.
- Aider Polyglot: **51.6%** — evals.report.
- SciCode: **36.6%** — evals.report.
- BigCodeBench: **35.1%** calibrated Pass@1 — evals.report.
- SWE-bench Multimodal: **25.34%** — evals.report.
- WeirdML: **40.0%** — evals.report.

Long context:

- 200K window; MRCR / LongBench v2: **46.7%** (LongBench v2) — evals.report; no dedicated MRCR published.

Multimodal:

- MMMU: **68.3%**; MMMU-Pro: **51.5%** — evals.report.
- MathVista: **67.7%** — evals.report.
- Video-MME: **60.0%**; Video-MMMU: **65.8%** — evals.report.
- OCRBench v2: **47.5** — evals.report.
- Text/image/PDF in.

### Normalized scores (1-100)

- **Tool use: 66/100.** TAU-bench retail 69.2%/airline 46.0%, OSWorld 14.9-22.0%, SWE-bench 49.0% agentic; caps at no published Terminal-Bench/MCP-Atlas.
- **Reasoning: 64/100.** GPQA 59.34%, MMLU Pro 77.2%, SuperGPQA 48.16%; caps at no published HLE/ARC-AGI/AA Index.
- **Context window: 62/100.** 200K window; caps at no published MRCR.
- **Multimodal: 70/100.** MMMU 68.3%, MMMU-Pro 51.5%, MathVista 67.7%; text/image/PDF in.
- **Coding: 66/100.** SWE-bench Verified 49.0%, LiveCodeBench 49.63%, Aider Polyglot 51.6%; caps at no published SWE-bench Pro.
- **Cost efficiency: 78/100.** Mid $3/$15 per 1M.
- **Overall Score: 66/100.** (66 + 64 + 62 + 70 + 66) / 5 = 65.6 -> 66. Best-fit for mid-tier coding at mid cost; superseded by 3.7/4/4.5/4.6/5/5.5.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-11-01 (refresh of 2026-10-17)
- Method: public internet research (Anthropic official announcement, evals.report, Vals AI); scores are normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing computer use, Claude 3.5 Sonnet, and Claude 3.5 Haiku — Anthropic](https://www.anthropic.com/news/3-5-models-and-computer-use)
  - [Claude 3.5 Sonnet benchmark scores — evals.report](https://evals.report/models/anthropic-claude-3-5-sonnet)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
