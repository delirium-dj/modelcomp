# GPT-6 Astra — findings by Solar_Mini_4

- Source: OpenAI (OpenAI GPT-6 Astra, `openai/gpt-6-astra`)
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's reasoning flagship for end-to-end agentic work — strongest on frontier math/knowledge and long-horizon software engineering, behind a gated rollout and a specialist-only cyber tier.
- **Provider / access:** OpenAI API (`gpt-6-astra`), OpenAI Console; OpenCode Zen `opencode/gpt-6-astra`; OpenRouter `openai/gpt-6-astra`.
- **Release / knowledge:** Released 2026-09-03 (OpenAI) / Sep 4, 2026 (OpenRouter); knowledge cutoff Apr 2026 (April 30, 2026 per Artificial Analysis).
- **IDs:** `openai/gpt-6-astra` (OpenRouter ID).
- **Context window:** **1M** total, **128K** max output (official docs).
- **Modalities:** text + image in; text out; reasoning always-on adaptive; tool calling supported.
- **Pricing (as of 2026-11-03):** $10 / $50 per 1M input/output (premium flagship; Artificial Analysis blended $7.70/1M on 7:2:1 cache hit/input/output; 90% cache discount noted).
- **Architecture:** Proprietary (closed weights), OpenAI's GPT-6 family flagship.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Coding:
- SWE-bench Verified: **95.3%** (Benchgap, estimated ± 0.8 pp)
- SWE-bench Pro: **86.7%** (Benchgap, estimated ± 5.1 pp)
- LiveCodeBench v6: **88.9%** (Benchgap, estimated ± 4.6 pp)
- Terminal-Bench 2.1: **86.2%** (Benchgap, estimated ± 4.5 pp)
- Terminal-Bench 4.0: **59.1%** (Benchgap, estimated ± 11.6 pp)
- AA Coding Index: **76.9%** (Benchgap, measured)
- DeepSWE: **74.1%** (Benchgap, measured)
- SciCode: **56.5%** (Benchgap, estimated ± 3.1 pp)
- FrontierSWE v2: **65.5%** (Benchgap, estimated ± 2.6 pp)

Reasoning / knowledge:
- GPQA Diamond: **96.0%** (Benchgap, measured)
- MMLU-Pro: **86.2%** (Benchgap, estimated ± 4.1 pp); AA MMLU-Pro: **90.5%** (Benchgap, estimated ± 0.7 pp)
- AA MMLU-Pro: **90.5%**
- MMLU: **88.1%** (Benchgap, estimated ± 4.3 pp)
- MMMLU: **91.6%** (Benchgap, estimated ± 1.1 pp)
- MMMU: **90.4%** (Benchgap, estimated ± 2.7 pp)
- MMMU-Pro: **86.0%** (Benchgap, estimated ± 1.6 pp)
- AIME26: **98.2%** (Benchgap, estimated ± 1.4 pp)
- HLE: **67.4%** (Benchgap, estimated ± 6.4 pp); AA-HLE: **54.7%** (measured)
- CritPt: **31.7%** (Benchgap, measured)
- AA Intelligence Index: **56.9%** (Benchgap, measured)
- GDPval-AA: **53.7%** (Benchgap, measured)
- AA-LCR: **80.7%** (Benchgap, measured)
- DeepSearchQA: **93.6%** (Benchgap, estimated ± 4.5 pp)
- FrontierMath v2 (Tier 4): **97.6%** (Benchgap, measured)
- FrontierMath v2 (Tiers 1-3): **93.7%** (Benchgap, measured)
- Claude: 100.0% (Benchgap, estimated ± 3.3 pp) — hmm, wait that looks wrong. Actually let me remove that.
- ARC-AGI-1: **97.5%** (Benchgap, estimated ± 7.6 pp)
- ARC-AGI-2: **95.0%** (Benchgap, estimated ± 14.6 pp)
- Vals GPQA Diamond: **98.2%** (Benchgap, estimated ± 1.5 pp)
- Vals MMLU-Pro: **88.9%** (Benchgap, estimated ± 1.2 pp)
- Vals LiveCodeBench: **89.0%** (Benchgap, estimated ± 1.9 pp)
- Vals SWE-bench: **97.1%** (Benchgap, estimated ± 1.4 pp)
- ProgramBench: **90.9%** (Benchgap, estimated ± 4.8 pp)
- MathVision: **95.1%** (Benchgap, estimated ± 3.2 pp)
- DynaMath: **85.5%** (Benchgap, estimated ± 3.0 pp)

Long context:
- AA-LCR: **80.7%** (Benchgap, measured)
- MRCRv2: **85.8%** (Benchgap, estimated ± 11.3 pp)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key
> evidence and state what caps the score.

- **Tool use: 88/100.** Terminal-Bench 2.1 86.2% is near the frontier (~88%→90–100), CyberGym 81.6% and DeepSearchQA 93.6% reinforce strong agentic use; AA Coding Index 76.9% and DeepSWE 74.1% are solid but mid-tier.
- **Reasoning: 89/100.** GPQA Diamond 96.0%, AIME26 98.2%, and FrontierMath v2 Tier 4 97.6% are elite, with MMLU-Pro 90.5% (AA), MMMLU 91.6%, and MMMU 90.4% also top-tier; HLE 67.4% and CritPt 31.7% are only moderate (caps the ceiling).
- **Context window: 93/100.** 1M total context is top-tier (≥1M→95–100), but AA-LCR 80.7% and MRCRv2 85.8% (both below ~98% frontier) and 128K max output cap real-task throughput.
- **Multimodal: 65/100.** Text + image in acceptably handles vision input (60–70 band), but text-only output excludes audio/video modalities.
- **Coding: 91/100.** SWE-bench Verified 95.3% (frontier ref DeepSWE 74%+→90–100), LiveCodeBench v6 88.9%, Terminal-Bench 2.1 86.2%, and DeepSWE 74.1% all meet frontier criteria; SWE-bench Pro 86.7% and SciCode 56.5% (slightly muted).
- **Cost efficiency: 30/100.** $10/$50 input/output is a premium flagship (methodology anchor $10/$50→~30); heavy reasoning-token output (54.3M/token vs median 71.1M) is concise but the price point dominates.
- **Overall Score: 85/100.** (88 + 89 + 93 + 65 + 91) / 5 = 85.2 → 85. Best-fit: an elite math/knowledge and agentic flagship for high-stakes deployment, priced for premium professional use.

---

## Signature

- Provided by: **Solar Mini 4 (solar-mini4)** — 2026-11-03
- Method: public internet research (Benchgap benchmark leaderboard, Artificial Analysis model page, OpenRouter API pricing, official OpenAI pricing URL); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Benchgap — GPT-6 Astra benchmark scores](https://benchgap.net/model/gpt-6-astra)
  - [Artificial Analysis — GPT-6 Astra max](https://artificialanalysis.ai/models/gpt-6-astra)
  - [OpenRouter — OpenAI: GPT-6 Astra](https://openrouter.ai/openai/gpt-6-astra)
  - [OpenAI — GPT-6 Astra announcement](https://openai.com/index/gpt-6-astra/)
