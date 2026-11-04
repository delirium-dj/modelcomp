# Claude Opus 5.5 — findings by Solar_Mini_4

- Source: Anthropic (Anthropic Claude API `claude-opus-5-5`)
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's flagship for long-horizon agentic coding and knowledge work; the first release in the Claude 5.5 family, matching Fable 5.1's work level at ~40% lower run cost than Opus 5.
- **Provider / access:** Anthropic Claude API (`claude-opus-5-5`), Anthropic Console; OpenCode Zen `opencode/claude-opus-5.5`; Amazon Bedrock `anthropic.claude-opus-5-5`; Google Cloud and Microsoft Foundry managed endpoints.
- **Release / knowledge:** Released 2026-09-22; knowledge cutoff 2026-06 (official docs).
- **IDs:** `anthropic/claude-opus-5-5` (Hugging Face registry slug); GitHub `anthropic/claude-opus-5.5`.
- **Context window:** **1M** total, **128K** max output (official docs).
- **Modalities:** text + image in; text out; reasoning always-on adaptive; tool calling supported.
- **Pricing (as of 2026-11-03):** $4 / $20 per 1M input/output; cache read $0.20/1M; 5m cache write $5/1M, 1h cache write $8/1M; 50% batch API discount on input + output.
- **Architecture:** Proprietary (closed weights), Anthropic's top-tier agentic model.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Coding:
- SWE-bench Verified: **96.5%** (Benchgap, estimated ± 0.8 pp)
- SWE-bench Pro: **89.9%** (Benchgap, measured)
- SWE-multilingual: **93.9%** (Benchgap, measured)
- Terminal-Bench 2.1: **87.3%** (Benchgap, estimated ± 5.2 pp)
- Terminal-Bench 4.0: **59.6%** (OpenRouter / Artificial Analysis, estimated ± 5.4 pp)
- AA Coding Index: **83.9%** (Benchgap, estimated ± 1.0 pp)
- AA-SciCode: **66.9%** (OpenRouter / Artificial Analysis, estimated ± 3.1 pp)
- LiveCodeBench v6: **100.0%** (Benchgap, estimated ± 2.7 pp)
- DeepSWE: **74.2%** (Benchgap, estimated ± 1.4 pp)

Reasoning / knowledge:
- GPQA Diamond: **96.0%** (Benchgap, estimated ± 1.0 pp)
- MMLU-Pro (Benchgap): **86.1%** (estimated ± 2.5 pp); Vals: **89.7%** (high)
- AA MMLU-Pro: **91.2%** (Benchgap, estimated ± 0.7 pp)
- HLE: **64.1%** (Benchgap, estimated ± 6.4 pp)
- AIME26: **98.1%** (Benchgap, estimated ± 1.4 pp)
- MMMU: **90.9%** (Benchgap, estimated ± 2.7 pp); AA-MMMU-Pro: **87.7%** (Benchgap, measured)
- MMMU-Pro: **86.6%** (Benchgap, estimated ± 1.6 pp)
- CritPt: **31.7%** (Benchgap, measured)
- AA-LCR: **84.7%** (Benchgap, measured)
- AA Intelligence Index: **58.4%** (Benchgap, measured); OpenRouter: **59.1%**
- GDPval-AA: **68.3%** (Benchgap / Artificial Analysis, measured)

Long context:
- AA-LCR: **84.7%** (Benchgap, measured)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key
> evidence and state what caps the score.

- **Tool use: 86/100.** Terminal-Bench 2.1 87.3% is near the frontier (~88%→90–100), but GDPval-AA 68.3%, AA AutomationBench 69.5%, and AA Cyber Index 28.7% cap autonomous reliability; agentic CyberGym (84.4%) and DeepSWE (74.2%) are mid-tier.
- **Reasoning: 90/100.** GPQA Diamond 96.0%, AIME26 98.1%, and AA MMLU-Pro 91.2% are elite, with MMLU-Pro 89.7% (Vals) and MMMU 90.9% also top-tier; HLE 64.1% and CritPt 31.7% are only moderate.
- **Context window: 92/100.** 1M total context is top-tier (≥1M→95–100), but AA-LCR 84.7% (just under the ~98% frontier) and 128K max output cap real-task throughput.
- **Multimodal: 68/100.** Text + image in acceptably handles vision input (60–70 band), but text-only output excludes audio/video modalities.
- **Coding: 92/100.** SWE-bench Verified 96.5% (frontier ref DeepSWE 74%+→90–100), SWE-bench Pro 89.9%, SWE-multilingual 93.9%, and AA Coding Index 83.9% all point to elite coding.
- **Cost efficiency: 48/100.** $4/$20 input/output is a premium flagship (between ~$3/$15→~60 and $10/$50→~30); cache read $0.20 helps but does not offset the high per-token price.
- **Overall Score: 86/100.** (86 + 90 + 92 + 68 + 92) / 5 = 85.6 → 86. Best-fit: a premium, elite reasoning/coding flagship for long-horizon agentic work, priced for heavy professional deployment.

---

## Signature

- Provided by: **Solar Mini 4 (solar-mini4)** — 2026-11-03
- Method: public internet research (official Anthropic announcement, official Claude Platform docs, Benchgap benchmark leaderboard, OpenRouter API pricing/benchmarks); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Introducing Claude Opus 5.5](https://www.anthropic.com/claude-opus-5-5)
  - [Anthropic Platform Docs — Claude Opus 5.5 overview](https://platform.claude.com/docs/en/models/opus-5-5/overview)
  - [Benchgap — Claude Opus 5.5 benchmark scores](https://benchgap.net/model/claude-opus-5-5)
  - [OpenRouter — Claude Opus 5.5 pricing & benchmarks](https://openrouter.ai/anthropic/claude-opus-5.5)
