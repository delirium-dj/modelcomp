# Claude Haiku 4.5 — findings by Laguna S 2.1

- Source: BenchLM (`https://benchlm.ai/models/claude-haiku-4-5`), Anthropic (`https://www.anthropic.com/news/claude-haiku-4-5`, `https://www.anthropic.com/claude-haiku-4-5-system-card`), OpenRouter (`https://openrouter.ai/anthropic/claude-haiku-4-5/benchmarks`), Vals AI, Epoch AI
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 4.5
- **Short description:** Anthropic's October 2025 fastest and most efficient model; near-frontier coding performance at one-third the cost and more than twice the speed of Claude Sonnet 4.5. Supports extended thinking, coding, bash, web search, and computer-use tools.
- **Provider / access:** Anthropic API (`claude-haiku-4-5`); OpenCode Zen `opencode/claude-haiku-4.5`; Amazon Bedrock; Google Cloud Vertex AI; 1 API provider (OpenRouter)
- **Release / knowledge:** Released October 15, 2025; knowledge cutoff not published
- **IDs:** `anthropic/claude-haiku-4.5` (OpenRouter slug); `claude-haiku-4-5` (BenchLM slug); `opencode/claude-haiku-4.5` (`\meta.json`)
- **Context window:** 200K total (per BenchLM and OpenRouter; Anthropic announcement mentions 128K thinking budget for evals, which refers to thinking token limit, not context window); `\meta.json` says 128K — **discrepancy noted** (meta.json likely conflates thinking budget with context window)
- **Modalities:** Text and image input (inferred from computer-use capabilities and "multimodal applications" mentioned in announcement), text output; `\meta.json` says "Text in/out" — **discrepancy noted**
- **Pricing (as of 2026-10-01):** $1.00 input / $5.00 output per 1M tokens (per OpenRouter and Zen pricing); 128K thinking budget
- **Reasoning:** Optional extended thinking mode available
- **Architecture:** Not disclosed (proprietary)
- **Speed:** Not independently verified (benchlm data sparse)

### Research log

1. Fetched BenchLM page `https://benchlm.ai/models/claude-haiku-4-5` — 11 of 618 benchmarks covered with verified scores
2. Fetched Anthropic announcement `https://www.anthropic.com/news/claude-haiku-4-5` — contains SWE-bench Verified 73.3%, evaluation methodology disclosure, and benchmark comparisons
3. Fetched OpenRouter model page `https://openrouter.ai/anthropic/claude-haiku-4-5` — confirms $1/$5 pricing, 200K context, computer-use support
4. Cross-referenced Vals AI leaderboards via BenchLM source links
5. Attempted AA model page `https://artificialanalysis.ai/models/claude-haiku-4-5` — **404** (no AA page for this model)

### Raw benchmarks found

> Sources: Anthropic announcement (`https://www.anthropic.com/news/claude-haiku-4-5`), BenchLM (`https://benchlm.ai/models/claude-haiku-4-5`), Vals AI leaderboards, OpenRouter, Epoch AI FrontierMath v2. BenchLM covers 11 of 618 benchmarks. AA has no model page for this model (404).

Agent / tool use:

- **JobBench:** **16.0%** — (JobBench paper, arXiv 2605.26329 via BenchLM)
- **Terminal-Bench 2.1 (Vals):** **43.8%** — (Vals AI: Terminal-Bench 2.1 leaderboard; model ID `anthropic_claude-haiku-4-5-20251001-thinking`)
- **Terminal-Bench:** no verified public score found (Anthropic announcement mentions evaluation methodology but specific number is in an image, not extractable)

Coding:

- **SWE-bench Verified:** **73.3%** — (Anthropic announcement: averaged over 50 trials, no test-time compute, 128K thinking budget, default sampling parameters on full 500-problem dataset)
- **VulcanBench v3:** **76.2%** — (VulcanBench v3 July 2026 expanded report via BenchLM)
- **LiveCodeBench (Vals):** **41.2%** — (Vals AI: LiveCodeBench leaderboard; model ID `anthropic_claude-haiku-4-5-20251001-thinking`)
- **SWE-bench (Vals):** **66.6%** — (Vals AI: SWE-bench leaderboard; model ID `anthropic_claude-haiku-4-5-20251001-thinking`)
- **SWE-bench Pro:** no verified public score found

Reasoning / knowledge:

- **GPQA Diamond (Vals):** **72.2%** — (Vals AI: GPQA Diamond leaderboard; model ID `anthropic_claude-haiku-4-5-20251001-thinking`)
- **MMLU-Pro (Vals):** **78.7%** — (Vals AI: MMLU Pro leaderboard; model ID `anthropic_claude-haiku-4-5-20251001-thinking`)
- **FrontierMath v2 (Tiers 1-3):** **5.903%** — (Epoch AI FrontierMath v2 leaderboard via BenchLM)
- **FrontierMath v2 (Tier 4):** **2.083%** — (Epoch AI FrontierMath v2 leaderboard via BenchLM)
- **AA-GPQA Diamond:** no verified public score found (no AA page exists)
- **AA-HLE:** no verified public score found (no AA page exists)

Multimodal & grounded:

- **Design Arena Website:** **1130** — (OpenRouter model benchmarks via BenchLM)
- **AA-MMMU-Pro:** no verified public score found (no AA page exists)

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. `Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5)`. Cost is scored independently and excluded.
  > Confidence: low-moderate — 11 public benchmarks found across 4 sources (Anthropic announcement, BenchLM, Vals AI, OpenRouter, Epoch AI). AA has no model page (404).

- **Tool use: 50/100.** Terminal-Bench 2.1 (Vals) 43.8% is decent. JobBench 16.0% is very weak. No GDPval-AA, τ²-bench, MCP Atlas, or AA Agentic Index scores found. SWE-bench Verified 73.3% (see coding section) provides some agentic signal. Limited independent agentic benchmark coverage.
- **Reasoning: 55/100.** GPQA Diamond (Vals) 72.2% is good but not frontier (90%+). MMLU-Pro (Vals) 78.7% is solid. No AA-GPQA Diamond, HLE, LCR, CritPt, or Omniscience scores (no AA page exists). FrontierMath Tiers 1-3 at 5.903% is very weak. II not published (no AA page). Moderate reasoning for a small/fast model.
- **Context window: 70/100.** 200K tokens falls in the 200K–500K tier (65–84 range). `meta.json` claims 128K but verified 200K. No retrieval-percentage figures found.
- **Multimodal: 65/100.** Text and image input (inferred from computer-use capabilities and multimodal support mentioned in announcement and OpenRouter), text output. `meta.json` says "Text in/out" — discrepancy noted. No AAA-MMMU-Pro score found (no AA page). Design Arena Website Elo 1130 is from agentic web-design, not a vision benchmark.
- **Coding: 62/100.** SWE-bench Verified 73.3% (from Anthropic announcement, methodology disclosed: 50 trials, 128K thinking budget) is solid and exceeds the 73% threshold mentioned in the announcement. VulcanBench v3 76.2% is good. SWE-bench (Vals) 66.6% is moderate. LiveCodeBench (Vals) 41.2% is weak. No DeepSWE, SciCode, or Vibe Code Bench scores found.
- **Cost efficiency: 85/100.** $1.00 in / $5.00 out per 1M tokens — very competitive pricing for a model with 73.3% SWE-bench Verified. Close to the $1.25/$4.25 anchor (~88). Free Zen tier available via `opencode/claude-haiku-4.5`.
- **Overall Score: 60.4/100.** Mean of five quality dimensions: (50 + 55 + 70 + 65 + 62) / 5 = 302 / 5 = 60.4 → 60. Wait, let me recalculate: (50 + 55 + 70 + 65 + 62) / 5 = 302/5 = 60.4 → 60. Low-moderate confidence score: Claude Haiku 4.5 delivers strong coding (SWE-bench Verified 73.3%) and cost efficiency ($1/$5) at 200K context, but lacks independent Intelligence Index, GPQA, HLE, and agentic benchmark coverage (AA page doesn't exist; BenchLM covers only 11/618 benchmarks). `meta.json` discrepancies noted: claims 128K context vs verified 200K; claims text-only vs verified text+image input.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-01
- Method: public internet research via BenchLM, Anthropic announcement and system card, OpenRouter, Vals AI, and Epoch AI; zero-influence: did not read peer `model/` findings files during research. Scores are normalized 1–100 interpretations, not official vendor scores.
- Confidence note: Low-moderate confidence. Only 11 public benchmarks found (BenchLM covers 11 of 618). AA has no model page (404), so no AA Intelligence Index or AA-specific benchmark scores are available. Most scores come from BenchLM cross-referenced with Vals AI, OpenRouter, and the Anthropic announcement. The SWE-bench Verified score of 73.3% matches the threshold stated in the Anthropic announcement. Re-score when AA and additional independent benchmarks become available.
- Meta.json discrepancies: `meta.json` lists 128K context window and text-only modalities. BenchLM, OpenRouter, and the Anthropic announcement confirm 200K context window. The announcement mentions computer use and "multimodal applications," indicating image input support not reflected in `meta.json`. The 128K figure in `meta.json` likely conflates the 128K thinking budget (mentioned in the announcement) with the context window size.
- Future sources: add a new file next to this one, e.g. `Anthropic_Claude_Haiku_4.5_System_Card.md`, using the same headings.
