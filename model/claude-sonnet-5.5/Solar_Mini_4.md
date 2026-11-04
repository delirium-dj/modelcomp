# Claude Sonnet 5.5 — findings by Solar_Mini_4

- Source: Anthropic (Anthropic Claude Sonnet 5.5, `anthropic/claude-sonnet-5.5`)
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Anthropic's everyday-workhorse Sonnet-class model for well-scoped agentic tasks — building features, fixing bugs, and producing polished documents — at a mid-tier price, with coding that can embarrass Opus on terminals.
- **Provider / access:** Anthropic Claude API (`claude-sonnet-5-5`), Anthropic Console; OpenCode Zen `opencode/claude-sonnet-5.5`; OpenRouter `anthropic/claude-sonnet-5.5`.
- **Release / knowledge:** Released 2026-09-28; knowledge cutoff 2026-06 (official docs).
- **IDs:** `anthropic/claude-sonnet-5-5` (Hugging Face registry slug).
- **Context window:** **1M** total, **128K** max output (official docs).
- **Modalities:** text + image in; text out; reasoning always-on adaptive; tool calling supported.
- **Pricing (as of 2026-11-03):** $2 / $10 per 1M input/output (moderately priced; blend $1.47/1M via 7:2:1 cache hit); 50% batch discount.
- **Architecture:** Proprietary (closed weights), Anthropic's Sonnet-class agentic model.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Coding:
- SWE-bench Verified: **88.3%** (Benchgap, estimated ± 0.8 pp)
- SWE-bench Pro: **81.3%** (Benchgap, measured)
- LiveCodeBench v6: **97.3%** (Benchgap, estimated ± 2.7 pp)
- Terminal-Bench 2.1: **87.4%** (Benchgap, estimated ± 5.2 pp); Vals AI: **98.3%**
- Terminal-Bench 4.0: **70.6%** (Benchgap, measured)
- AA Coding Index: **83.0%** (Benchgap, estimated ± 1.0 pp)
- SciCode: **60.5%** (Benchgap, estimated ± 3.1 pp)
- DeepSWE: **71.0%** (Benchgap, measured)
- ProgramBench: **79.7%** (Benchgap, estimated ± 4.8 pp)
- SWE-multilingual: **90.3%** (Benchgap, estimated ± 4.8 pp)

Reasoning / knowledge:
- GPQA Diamond: **96.0%** (Benchgap, estimated ± 1.0 pp)
- MMLU: **95.4%** (Benchgap, estimated ± 1.0 pp)
- MMMLU: **92.4%** (Benchgap, estimated ± 2.6 pp)
- MMLU-Pro: **86.0%** (Benchgap, estimated ± 2.5 pp); Vals: **91.0%**; AA: **89.0%**
- AIME26: **98.1%** (Benchgap, estimated ± 1.4 pp)
- HLE: **64.7%** (Benchgap, estimated ± 6.6 pp); AA-HLE: **55.0%** (measured)
- CritPt: **31.4%** (Benchgap, measured)
- GDPval-AA: **66.9%** (Benchgap, measured)
- AA Intelligence Index: **54.2%** (Benchgap, measured)
- AA-LCR: **82.7%** (Benchgap, measured)
- DeepSearchQA: **89.7%** (Benchgap, estimated ± 9.6 pp)
- FrontierMath v2 (Tier 4): **80.5%** (Benchgap, measured)
- FrontierMath v2 (Tiers 1-3): **88.8%** (Benchgap, measured)
- Gert Labs: **82.3%** (Benchgap, estimated ± 8.9 pp)
- MMMU-Pro: **82.3%** (Benchgap, estimated ± 5.6 pp)
- ProgramBench: **79.7%** (Benchgap, estimated ± 4.8 pp)
- Vals MMLU-Pro: **91.0%** (Benchgap, estimated ± 1.9 pp)
- Vals LiveCodeBench: **87.0%** (Benchgap, estimated ± 1.9 pp)
- Vals SWE-bench: **95.4%** (Benchgap, estimated ± 1.4 pp)

Long context:
- AA-LCR: **82.7%** (Benchgap, measured)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key
> evidence and state what caps the score.

- **Tool use: 87/100.** Terminal-Bench 2.1 87.4% is near the frontier (~88%→90–100), CyberGym 92.7% and AA Coding Index 83.0% reinforce solid tool use; Vals AI Terminal-Bench 2.1 98.3% is elite.
- **Reasoning: 88/100.** GPQA Diamond 96.0%, MMLU 95.4%, and AIME26 98.1% are elite, with MMMLU 92.4%, MMLU-Pro 86.0%, and FrontierMath v2 Tiers 1-3 88.8% also top-tier; HLE 64.7% and AA Intelligence Index 54.2% are moderate (caps the ceiling).
- **Context window: 93/100.** 1M total context is top-tier (≥1M→95–100), with AA-LCR 82.7% confirming solid long-context retrieval; 128K max output is a modest caveat.
- **Multimodal: 65/100.** Text + image in (60–70 band → 65); no video/audio/PDF input, text-only output.
- **Coding: 91/100.** LiveCodeBench v6 97.3% and SWE-bench Verified 88.3% are strong, with AA Coding Index 83.0%, SciCode 60.5%, and SWE-multilingual 90.3% reinforcing elite coding performance.
- **Cost efficiency: 75/100.** $2/$10 input/output is moderately priced (between $1.25/$4.25→~88 and $3/$15→~60); verbose 335M-token output raises average task cost ($10.02) vs the median 71.1M.
- **Overall Score: 85/100.** (87 + 88 + 93 + 65 + 91) / 5 = 84.8 → 85. Best-fit: an elite everyday-workhorse for coding, docs, and feature work at a mid-tier price — the default pick for most professional agentic tasks.

---

## Signature

- Provided by: **Solar Mini 4 (solar-mini4)** — 2026-11-03
- Method: public internet research (Benchgap benchmark leaderboard, Artificial Analysis model page, OpenRouter API pricing/benchmarks, official Anthropic pricing page); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Benchgap — Claude Sonnet 5.5 benchmark scores](https://benchgap.net/model/claude-sonnet-5-5)
  - [Artificial Analysis — Claude Sonnet 5.5](https://artificialanalysis.ai/models/claude-sonnet-5-5)
  - [OpenRouter — Anthropic: Claude Sonnet 5.5](https://openrouter.ai/anthropic/claude-sonnet-5.5)
  - [Anthropic pricing](https://www.anthropic.com/pricing)
  - [Anthropic news (official URL)](https://www.anthropic.com/news/claude-sonnet-5.5)
