# Claude Sonnet 4.6 — findings by Glyph Cluster

- Source: Anthropic (`claude-sonnet-4.6`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6
- **Short description:** Anthropic Sonnet-class frontier model (Feb 2026) improving coding, computer use, long-context reasoning, agent planning, and knowledge work, with a 1M-token context window (beta) and pricing below Opus.
- **Provider / access:** Anthropic Claude API (`claude-sonnet-4-6`), available in Claude.ai/Cowork/Claude Code and major cloud platforms; also tracked on OpenRouter as `anthropic/claude-sonnet-4.6`. Supports adaptive/extended thinking, context compaction (beta), and tool-use features per announcement.
- **Release / knowledge:** Released 2026-02-17 (Anthropic announcement). Knowledge cutoff not specified in fetched sources.
- **IDs:** `anthropic/claude-sonnet-4.6`, API model string `claude-sonnet-4-6`
- **Context window:** 1M tokens in beta (Anthropic announcement).
- **Modalities:** Text and image input; text output (Artificial Analysis/OpenRouter). Reasoning variants exist (AA lists non-reasoning page; announcement discusses adaptive/extended thinking).
- **Pricing (as of 2026-11-10):** $3.00 / 1M input, $15.00 / 1M output (Anthropic announcement), 90% cache discount noted by AA; OpenRouter/provider pricing varies by route.
- **Architecture:** Proprietary (parameter count undisclosed).

### Raw benchmarks found

> Numbers below are from Anthropic's launch announcement/footnotes for the exact model `claude-sonnet-4.6`. Some results are comparative or described qualitatively in charts; only text-extractable/verifiable values are listed as numbers.

Agent / tool use:

- Computer use (OSWorld / OSWorld-Verified): major improvement over prior Sonnet models shown in announcement charts; Sonnet 4.5 onward measured on OSWorld-Verified (exact Sonnet 4.6 score not extracted from text). Early users reported human-level capability in some spreadsheet/web-form tasks (qualitative).
- Vending-Bench Arena (long-horizon simulated business, competitive): Sonnet 4.6 outperformed Sonnet 4.5 with a strategy of early capacity investment then profitability pivot (qualitative/result described, exact score not extracted).
- Claude Code preference: preferred over Sonnet 4.5 ~70% of the time and over Opus 4.5 ~59% of the time in early testing (user preference, not a benchmark score).
- GDPval-AA / office tasks: approaches Opus-level performance at Sonnet pricing (qualitative claim in announcement). Third-party partner reports (e.g. Databricks OfficeQA match to Opus 4.6, Box +15pp over Sonnet 4.5 in heavy reasoning Q&A, Pace 94% insurance benchmark) are partner claims, not independently verified here.

Reasoning / knowledge:

- ARC-AGI-2: run with max/high effort and 120k thinking budget; footnote states score shown reflects max effort and high effort achieved **60.4%** (Anthropic announcement footnote).
- Humanity's Last Exam / BrowseComp: evaluated with tools/configurations described in footnotes; exact numeric scores not extracted from text.
- GPQA Diamond / HLE (standalone) / LCR / MLCR / CritPt: **no verified public score found** in accessible fetched text.

Coding:

- SWE-bench Verified: **averaged over 10 trials**; with a prompt modification, score **80.2%** (Anthropic announcement footnote).
- Terminal-Bench 2.0: evaluated/reproduced per footnote, but exact numeric score not extracted from fetched text.
- LiveCodeBench / SciCode: **no verified public score found** in accessible fetched text.

Long context:

- Context window: **1M tokens (beta)** (Anthropic announcement). Effective long-context reasoning emphasized; no verified MRCR/RULER retrieval percentage extracted from text.

### Normalized scores (1–100)

> Derived from limited but concrete extracted evidence (SWE-bench Verified 80.2% with prompt mod, ARC-AGI-2 60.4% at high effort, 1M context) plus strong qualitative agentic/computer-use claims. Missing extracted scores for many benchmarks cap precision.

- **Tool use: 78/100.** Strong reported computer-use and agentic improvements (OSWorld gains, Vending-Bench Arena win, MCP/tooling updates, Claude Code preferences), but most key tool-use benchmark numbers not extractable from fetched text; capped by incomplete quantitative evidence.
- **Reasoning: 74/100.** ARC-AGI-2 60.4% (high effort, per footnote) and broad reasoning/long-horizon claims support solid capability; absence of extracted GPQA/HLE absolutes limits calibration.
- **Context window: 94/100.** 1M-token context (beta) with explicit emphasis on effective reasoning across long context; no extracted MRCR-style retrieval score, but nominal/claimed usable capacity is high.
- **Multimodal: 58/100.** Text and image input supported; computer-use/visual UI interaction strengths implied, but no verified vision benchmark scores (e.g. MMMU/MMMU-Pro exact result) extracted.
- **Coding: 84/100.** SWE-bench Verified 80.2% (with prompt modification, 10-trial average context) indicates strong coding performance; other coding benchmark absolutes not extracted.
- **Cost efficiency: 48/100.** Priced at $3/$15 per 1M tokens (cheaper than Opus, but above lower-cost tiers); positioned as strong performance-per-dollar for Sonnet class.
- **Overall Score: 78/100.** Mean of five non-cost dims `(78+74+94+58+84)/5 = 77.6` → **78** (half-up). Best fit as a capable, large-context coding/agentic model with strong practical computer-use improvements and mid-high reasoning at Sonnet-tier pricing.

---

## Signature

- Provided by: **Glyph Cluster (kilocode/glyph-cluster-free)** — 2026-11-10 UTC
- Method: Fresh public web research via accessible sources (Anthropic announcement, Artificial Analysis, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Introducing Claude Sonnet 4.6](https://www.anthropic.com/news/claude-sonnet-4-6)
  - [Anthropic — Claude Sonnet 4.6 System Card](https://anthropic.com/claude-sonnet-4-6-system-card)
  - [Artificial Analysis — Claude Sonnet 4.6](https://artificialanalysis.ai/models/claude-sonnet-4-6)
  - [OpenRouter — anthropic/claude-sonnet-4.6](https://openrouter.ai/anthropic/claude-sonnet-4.6)
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
