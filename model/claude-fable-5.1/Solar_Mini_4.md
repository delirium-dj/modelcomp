# Claude Fable 5.1 — findings by Solar_Mini_4

- Source: Anthropic (Anthropic Claude Fable 5.1, `anthropic/claude-fable-5.1`)
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's Mythos-class model above Opus 5, purpose-built for long-horizon agentic coding and knowledge work; its edge shows on the hardest, longest jobs like multi-file refactors and large-scale agentic runs.
- **Provider / access:** Anthropic Claude API (`claude-fable-5-1`), Anthropic Console; OpenCode Zen `opencode/claude-fable-5.1`; OpenRouter `anthropic/claude-fable-5.1`.
- **Release / knowledge:** Released 2026-09-01; knowledge cutoff 2026-06 (official docs).
- **IDs:** `anthropic/claude-fable-5.1` (Hugging Face registry slug); GitHub `anthropic/claude-fable-5.1`.
- **Context window:** **1M** total, **128K** max output (official docs).
- **Modalities:** text + image + PDF in; text out; reasoning always-on adaptive; tool calling supported.
- **Pricing (as of 2026-11-03):** $10 / $50 per 1M input/output (premium Mythos tier); batch API 50% discount on input+output.
- **Architecture:** Proprietary (closed weights), Anthropic's Mythos-class agentic flagship.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Coding:
- SWE-bench Verified: **98.1%** (Benchgap, estimated ± 3.7 pp)
- SWE-bench Pro: **81.2%** (Benchgap, measured — matches meta.json)
- LiveCodeBench v6: **91.7%** (Benchgap, estimated ± 2.4 pp)
- Terminal-Bench 2.1: **87.8%** (Benchgap, estimated ± 4.5 pp); AA Terminal-Bench 2.1: **91.4%** (measured)
- AA Coding Index: **81.6%** (Benchgap, measured)
- SciCode: **57.8%** (Benchgap, estimated ± 2.9 pp); AA-SciCode: **60.9%** (OpenRouter/AA)
- DeepSWE: **67.4%** (Benchgap, estimated ± 1.4 pp)
- ProgramBench: **87.6%** (Benchgap, estimated ± 4.8 pp)
- SWE-multilingual: **89.1%** (Benchgap, estimated ± 4.8 pp)
- FrontierSWE v2: **56.3%** (Benchgap, estimated ± 2.6 pp)

Reasoning / knowledge:
- GPQA Diamond: **94.8%** (Benchgap, estimated ± 1.5 pp, high); OpenRouter AA: **93.4%**
- MMLU-Pro: **86.0%** (Benchgap, estimated ± 2.5 pp); Vals MMLU-Pro: **92.4%**; AA MMLU-Pro: **91.6%**
- MMLU: **88.2%** (Benchgap, estimated ± 8.3 pp)
- MMMLU: **89.9%** (Benchgap, estimated ± 1.7 pp)
- AIME26: **98.1%** (Benchgap, estimated ± 1.4 pp)
- HLE: **65.0%** (Benchgap, measured); OpenRouter AA Xhigh: **58.7%**
- CritPt: **29.7%** (Benchgap, measured)
- AA Intelligence Index: **49.0%** (Benchgap, measured)
- GDPval-AA: **62.7%** (Benchgap, measured)
- AA-LCR: **85.3%** (Benchgap, measured)
- DeepSearchQA: **94.3%** (Benchgap, estimated ± 4.5 pp)
- FrontierMath v2 (Tier 4): **87.8%** (Benchgap, measured)
- FrontierMath v2 (Tiers 1-3): **90.2%** (Benchgap, measured)
- Gert Labs: **90.0%** (Benchgap, estimated ± 8.5 pp, low)

Long context:
- AA-LCR: **85.3%** (Benchgap, measured)
- MRCRv2: **86.0%** (Benchgap, estimated ± 11.3 pp)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key
> evidence and state what caps the score.

- **Tool use: 88/100.** Terminal-Bench 2.1 87.8% (and AA measured 91.4%) is at the frontier boundary (~88%→90–100), CyberGym 84.1% is strong, DeepSearchQA 94.3% and AA Coding Index 81.6% reinforce solid agentic use; AutomationBench 31.4% is a narrow weak spot.
- **Reasoning: 89/100.** GPQA Diamond 94.8%, AIME26 98.1%, and Gert Labs 90.0% are elite, with MMLU-Pro 86–92%, MMMLU 89.9%, and FrontierMath v2 Tiers 1-3 90.2% also top-tier; HLE 65.0%, CritPt 29.7%, and AA Intelligence Index 49.0% are moderate (caps the ceiling).
- **Context window: 94/100.** 1M total context is top-tier (≥1M→95–100), with AA-LCR 85.3% and MRCRv2 86.0% confirming strong long-context retrieval; 128K max output is a modest caveat.
- **Multimodal: 80/100.** Text + image + PDF in comfortably fills the +video/PDF-in band (75–90); text-only output excludes audio.
- **Coding: 90/100.** SWE-bench Verified 98.1% (frontier ref DeepSWE 74%+→90–100), LiveCodeBench v6 91.7%, Terminal-Bench 2.1 87.8%, and SciCode 57.8% meet frontier criteria; SWE-bench Pro 81.2% and DeepSWE 67.4% (below the 74% frontier floor) are the soft spots.
- **Cost efficiency: 30/100.** $10/$50 input/output is a premium Mythos-tier flagship (methodology anchor $10/$50→~30); heavy reasoning-token output (AA Intelligence Index 49.0%) makes it a specialist tool, not everyday use.
- **Overall Score: 88/100.** (88 + 89 + 94 + 80 + 90) / 5 = 88.2 → 88. Best-fit: Anthropic's long-horizon coding and agentic knowledge workhorse — elite on the hardest jobs, priced for premium professional use.

---

## Signature

- Provided by: **Solar Mini 4 (solar-mini4)** — 2026-11-03
- Method: public internet research (Benchgap benchmark leaderboard, OpenRouter API pricing/benchmarks, official Anthropic pricing page, official model metadata); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Benchgap — Claude Fable 5.1 benchmark scores](https://benchgap.net/model/claude-fable-5-1)
  - [OpenRouter — Anthropic: Claude Fable 5.1](https://openrouter.ai/anthropic/claude-fable-5.1)
  - [Anthropic — pricing](https://www.anthropic.com/pricing)
  - [Anthropic — metadata (official URL)](https://www.anthropic.com/news/claude-fable-5.1)
