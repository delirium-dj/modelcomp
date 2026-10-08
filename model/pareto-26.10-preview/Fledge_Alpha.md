# Pareto 26.10 Preview — findings by Fledge Alpha

- Source: Unbiased AI (built by Circuit & Chisel) (`unbiased/pareto-26.10-preview`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pareto 26.10 Preview
- **Short description:** A multimodal composite model from Unbiased AI aimed at research, coding, and agentic workflows, claiming frontier-level general performance. Preview of the next Pareto version — may change without notice (OpenRouter); `pareto-26.9` remains the stable release.
- **Provider / access:** OpenRouter `unbiased/pareto-26.10-preview`; Kilo Gateway listing; Puter. Chat Completions-compatible.
- **Release / knowledge:** September 2026 preview listings (Kilo Gateway, Sep 2026).
- **IDs:** `unbiased/pareto-26.10-preview` (no Free ID on Zen found)
- **Context window:** 262K tokens (Kilo Gateway); OpenRouter description does not publish a window.
- **Modalities:** multimodal (text + image in per OpenRouter/Kilo "V" flag); reasoning type (BenchLM); tools flag on Kilo.
- **Pricing (as of 2026-10-08):** $2.50 input / $7.50 output per 1M; cache read $0.25 (Kilo Gateway). Paid only.
- **Architecture:** proprietary composite/blended model (OpenRouter description); exact params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **50.8%** (Unbiased preliminary results, displayed via BenchLM)
- Parallel.ai Search Intelligence Score: **68.6** (#7; without search 34.8, lift +33.8; $116/1K tasks — Search Efficiency bronze)
- DSQA (with search): **84.8** (Parallel.ai, updated 2026-10-05)
- WISER (with search): **78.0** (Parallel.ai)

Reasoning / knowledge:

- GPQA Diamond: **92.4%** (Unbiased preliminary results, displayed via BenchLM)
- HLE (with search): **43.0** (Parallel.ai; 37.0 without search)
- Artificial Analysis Intelligence Index: no verified public score found

Coding:

- DeepSWE: **69.9%** (Unbiased preliminary results, displayed via BenchLM)
- SWE-bench Verified / LiveCodeBench: no verified public score found

Long context:

- No MRCR/RULER/GraphWalks public number found; 262K window per Kilo Gateway.

### Normalized scores (1–100)

- **Tool use: 80/100.** Terminal-Bench 4.0 50.8% plus strong search-augmented task performance (DSQA 84.8, WISER 78.0, #7 Search Intelligence); capped by preview status and narrow third-party harness coverage.
- **Reasoning: 84/100.** GPQA Diamond 92.4% and HLE 43.0 with search; capped by lack of an independent intelligence-index rating.
- **Context window: 62/100.** 262K verified window — solid but well below the 1M flagships; no long-context retrieval benchmark published.
- **Multimodal: 62/100.** Text+image input confirmed (OpenRouter/Kilo); no audio/video, no published vision benchmark numbers.
- **Coding: 84/100.** DeepSWE 69.9% is strong (above GLM-5.3-Flash's 63.4); capped by missing SWE-bench Verified/LiveCodeBench rows.
- **Cost efficiency: 52/100.** $2.50/$7.50 per 1M is mid-tier pricing for a preview model; search-augmented runs measured at $116/1K tasks (efficient vs peers like Claude Opus 5's $1,012).
- **Overall Score: 75/100.** Mean of (80, 84, 62, 62, 84) = 74.4 → 74. Best fit: search-heavy research and agentic coding workflows tolerant of preview instability.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-08
- Method: public internet research (BenchLM, Parallel.ai search leaderboard, OpenRouter, Kilo Gateway via allaimodel.com, Puter docs); scores are normalized 1–100 interpretations, not official vendor scores. Supersedes my 2026-10-05 self-exclusion: BenchLM now displays Unbiased's preliminary TB-4.0/DeepSWE/GPQA-D rows and Parallel.ai publishes search-suite numbers.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
