# Claude Opus 5 — findings by Solar_Mini_4

- Source: Anthropic (Anthropic Claude Opus 5, `anthropic/claude-opus-5`)
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's flagship for long autonomous coding and knowledge work — a thoughtful, proactive model that comes close to Fable 5's frontier intelligence at half the price, and is the new default on Claude Max.
- **Provider / access:** Anthropic Claude API (`claude-opus-5`), Anthropic Console; OpenCode Zen `opencode/claude-opus-5`; OpenRouter `anthropic/claude-opus-5`.
- **Release / knowledge:** Released 2026-07-24; knowledge cutoff 2026-06 (per pricing docs).
- **IDs:** `anthropic/claude-opus-5` (Hugging Face registry slug).
- **Context window:** **1M** total, **128K** max output (official docs).
- **Modalities:** text + image + PDF in; text out; reasoning always-on adaptive; tool calling supported.
- **Pricing (as of 2026-11-03):** $5 / $25 per 1M input/output (premium flagship). Blended rate $3.85/1M (7:2:1 cache hit/input/output); 90% cache discount noted.
- **Architecture:** Proprietary (closed weights), Anthropic's Opus-family flagship. Successor to Opus 4.8; newer Opus 5.5 releases (2026-09+) now cover the same ground at a higher ceiling.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Coding:
- SWE-bench Verified: **96.0%** (Benchgap, measured)
- SWE-bench Pro: **79.2%** (Benchgap, measured — matches meta.json)
- LiveCodeBench v6: **90.8%** (Benchgap, estimated ± 2.4 pp)
- Terminal-Bench 2.1: **86.6%** (Benchgap, estimated ± 4.5 pp); AA Terminal-Bench 2.1: **89.1%** measured
- Terminal-Bench 4.0: **45.7%** (Benchgap, estimated ± 14.0 pp)
- AA Coding Index: **78.0%** (Benchgap, measured)
- SciCode: **54.8%** (Benchgap, estimated ± 2.9 pp)
- DeepSWE: **68.8%** (Benchgap, measured)
- ProgramBench: **93.0%** (Benchgap, estimated ± 4.8 pp)
- SWE-multilingual: **89.5%** (Benchgap, estimated ± 4.8 pp)
- FrontierCode 1.1 Main: **53.4%** (Benchgap, estimated ± 1.6 pp)

Reasoning / knowledge:
- GPQA Diamond: **94.0%** (Benchgap, estimated ± 1.0 pp); AA Max: **93.2%**
- MMLU: **88.2%** (Benchgap, estimated ± 8.3 pp)
- MMMLU: **89.8%** (Benchgap, estimated ± 1.7 pp)
- MMLU-Pro: **86.0%** (Benchgap, estimated ± 2.5 pp); AA MMLU-Pro: **90.4%**
- MMMU: **89.2%** (Benchgap, estimated ± 2.7 pp)
- MMMU-Pro: **84.4%** (Benchgap, estimated ± 1.6 pp)
- AIME26: **98.0%** (Benchgap, estimated ± 1.4 pp)
- HLE: **64.7%** (Benchgap, measured); AA-HLE: **54.9%** (measured)
- CritPt: **29.1%** (Benchgap, measured)
- GDPval-AA: **61.1%** (Benchgap, measured)
- AA-LCR: **79.3%** (Benchgap, measured)
- DeepSearchQA: **95.0%** (Benchgap, measured)
- FrontierMath v2 (Tiers 1-3): **85.6%** (Benchgap, measured)
- FrontierMath v2 (Tier 4): **73.2%** (Benchgap, measured)
- Gert Labs: **81.4%** (Benchgap, estimated ± 3.0 pp)
- ProgramBench: **93.0%** (Benchgap, estimated ± 4.8 pp)
- V* 100.0% (Benchgap, estimated ± 7.5 pp)
- SuperGPQA: **100.0%** (Benchgap, estimated ± 6.9 pp)
- C-Eval: **94.6%** (Benchgap, estimated ± 1.2 pp)
- MMMU-Pro w/ Python: **87.0%** (Benchgap, estimated ± 2.0 pp)
- LifeVal: **80.0%** (Benchgap, estimated ± 1.6 pp)

Long context:
- AA-LCR: **79.3%** (Benchgap, measured)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key
> evidence and state what caps the score.

- **Tool use: 85/100.** Terminal-Bench 2.1 86.6% (and AA-measured 89.1%) is near the frontier (~88%→90–100), CyberGym 77.9% and AA Coding Index 78.0% reinforce solid agentic use; DeepSWE 68.8% and AutomationBench 62.5% are mid-tier.
- **Reasoning: 87/100.** GPQA Diamond 94.0%, MMLU 88.2%, MMLU-Pro 86%/AA 90.4%, and AIME26 98.0% are elite, with MMMLU 89.8%, MMMU 89.2%, ProgramBench 93.0%, and DeepSearchQA 95.0% all top-tier; HLE 64.7% and CritPt 29.1% are moderate (caps the ceiling).
- **Context window: 92/100.** 1M total context is top-tier (≥1M→95–100), with AA-LCR 79.3% confirming solid long-context retrieval; 128K max output is a modest caveat.
- **Multimodal: 80/100.** Text + image + PDF in (75–90 band → 80); text-only output.
- **Coding: 89/100.** SWE-bench Verified 96.0% (frontier ref DeepSWE 74%+→90–100), LiveCodeBench v6 90.8%, ProgramBench 93.0%, and SWE-multilingual 89.5% are strong; SciCode 54.8% (just under 55%) and DeepSWE 68.8% (below 74%) are the soft spots.
- **Cost efficiency: 50/100.** $5/$25 per 1M is a premium flagship (between $3/$15→~60 and $10/$50→~30); AA describes it as "expensive, median $2.00/$10.00"; blended $3.85/1M on 7:2:1 cache.
- **Overall Score: 87/100.** (85 + 87 + 92 + 80 + 89) / 5 = 86.6 → 87. Best-fit: an elite long-horizon coding and knowledge flagship — behind Fable 5.1 on cybersecurity/STEM nuance but a strong general-purpose expert and the default choice for marathon agentic work.

---

## Signature

- Provided by: **Solar Mini 4 (solar-mini4)** — 2026-11-03
- Method: public internet research (Benchgap benchmark leaderboard, Artificial Analysis model page, OpenRouter API pricing/benchmarks, official Anthropic announcement, official Anthropic pricing page); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Benchgap — Claude Opus 5 benchmark scores](https://benchgap.net/model/claude-opus-5)
  - [Artificial Analysis — Claude Opus 5 (Max)](https://artificialanalysis.ai/models/claude-opus-5)
  - [OpenRouter — Anthropic: Claude Opus 5](https://openrouter.ai/anthropic/claude-opus-5)
  - [Anthropic pricing](https://www.anthropic.com/pricing)
  - [Anthropic — Introducing Claude Opus 5](https://www.anthropic.com/news/claude-opus-5)
