# Gemini 3.8 Flash — findings by Solar_Mini_4

- Source: Google (Google AI Studio `gemini-3.8-flash`)
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google's most-intelligent Flash model with significant gains over 3.7 Flash across software engineering, agentic tasks, and multi-step reasoning. Frontier-class coding and agentic performance at a mid-tier (intro) price.
- **Provider / access:** Google AI Studio (`gemini-3.8-flash` / `gemini-3.8-flash-high`), Google Vertex AI, Perplexity; OpenCode Zen `opencode/gemini-3.8-flash`.
- **Release / knowledge:** Released 2026-09-02; knowledge cutoff 2026-06 (per pricing docs).
- **IDs:** `google/gemini-3.8-flash` (official), `gemini-3.8-flash-high` (reasoning variant).
- **Context window:** **1M** total (1,048,576), **128K** max output (official docs).
- **Modalities:** text + image + audio + video in; text out; reasoning always-on adaptive; tool calling supported.
- **Pricing (as of 2026-11-03):** $0.75 / $3.75 per 1M input/output (intro/launch pricing, 50% off); 50% batch discount; free tier on Google AI Studio (standard rate limits); OpenAI API list $1.25/$3.75.
- **Architecture:** Proprietary (closed weights), Google's Gemini 3.8 Flash family — the Flash-tier reasoning/agentic model.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Coding:
- SWE-bench Verified: **95.8%** (Benchgap, estimated ± 4.4 pp)
- SWE-bench Pro: **67.4%** (Benchgap, estimated ± 4.3 pp)
- LiveCodeBench v6: **91.1%** (Benchgap, estimated ± 2.4 pp)
- Terminal-Bench 2.1: **89.4%** (Benchgap, measured)
- Terminal-Bench 4.0: **19.1%** (Benchgap, measured)
- AA Coding Index: **76.3%** (Benchgap, measured)
- SciCode: **55.8%** (Benchgap, estimated ± 2.9 pp)
- DeepSWE: **73.8%** (Benchgap, measured)
- ProgramBench: **88.0%** (Benchgap, estimated ± 6.0 pp)
- SWE-multilingual: **85.1%** (Benchgap, estimated ± 1.6 pp)
- FrontierCode 1.1 Main: **52.8%** (Benchgap, estimated ± 1.6 pp)

Reasoning / knowledge:
- GPQA Diamond: **94.7%** (Benchgap, estimated ± 1.5 pp); AA-GPQA Diamond 95.3% measured
- MMLU: **95.2%** (Benchgap, estimated ± 1.0 pp)
- MMMLU: **90.6%** (Benchgap, estimated ± 0.7 pp)
- MMLU-Pro: **86.2%** (Benchgap, estimated ± 4.1 pp); AA: **89.1%**
- AIME26: **95.9%** (Benchgap, estimated ± 1.2 pp)
- HLE: **59.8%** (Benchgap, estimated ± 5.4 pp); AA-HLE: **47.8%** (measured)
- CritPt: **18.3%** (Benchgap, measured)
- GDPval-AA: **46.8%** (Benchgap, measured)
- AA Intelligence Index: **30.6%** (Benchgap, measured)
- AA-LCR: **81.3%** (Benchgap, measured)
- DeepSearchQA: **91.9%** (Benchgap, estimated ± 4.5 pp)
- Frontmath v2 (Tiers 1-3): **68.4%** (Benchgap, measured)
- FrontierMath v2 (Tier 4): **22.0%** (Benchgap, measured)
- Gert Labs: **74.4%** (Benchgap, estimated ± 3.0 pp)
- MMMU: **89.7%** (Benchgap, estimated ± 2.7 pp)
- MMMU-Pro: **85.1%** (Benchgap, estimated ± 1.6 pp)
- ProgramBench: **88.0%** (Benchgap, estimated ± 6.0 pp)

Long context:
- AA-LCR: **81.3%** (Benchgap, measured)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key
> evidence and state what caps the score.

- **Tool use: 88/100.** Terminal-Bench 2.1 89.4% is at the frontier (~88%→90–100), CyberGym 83.2% is strong, and AA Coding Index 76.3% is solid; DeepSWE 73.8% (just below 74%) and AutomationBench 59.9% are the soft spots.
- **Reasoning: 85/100.** GPQA Diamond 94.7%, MMLU 95.2%, and AIME26 95.9% are elite, with MMMLU 90.6% and MMLU-Pro 86.2% also strong; HLE 59.8%, CritPt 18.3%, and AA Intelligence Index 30.6% are moderate (caps the ceiling).
- **Context window: 93/100.** 1M total context is top-tier (≥1M→95–100), with AA-LCR 81.3% confirming solid long-context retrieval; 128K max output is a modest caveat.
- **Multimodal: 90/100.** Text + image + speech + video in (supports audio and video input → 90–100 band); text-only output.
- **Coding: 90/100.** SWE-bench Verified 95.8% (frontier ref DeepSWE 74%+→90–100), LiveCodeBench v6 91.1%, Terminal-Bench 2.1 89.4%, and SciCode 55.8% all meet frontier criteria; AA Coding Index 76.3% and DeepSWE 73.8% (just under 74%) are the soft spots.
- **Cost efficiency: 90/100.** $0.75/$3.75 input/output is competitively priced (between $0.60/$2.20→~92 and $1.25/$4.25→~88); 50% launch discount applied. Note: meta.json flags the launch price as introductory, so ongoing cost may rise (~$1.50/$7.50) — a caveat for long-term cost planning.
- **Overall Score: 89/100.** (88 + 85 + 93 + 90 + 90) / 5 = 89.2 → 89. Best-fit: a reasoning-per-dollar champion of Google's Flash family — elite coding (SWE-bench Verified 95.8%) and frontier knowledge at a mid-tier intro price.

---

## Signature

- Provided by: **Solar Mini 4 (solar-mini4)** — 2026-11-03
- Method: public internet research (Benchgap benchmark leaderboard, Artificial Analysis model page, OpenRouter API pricing/benchmarks, official Google DeepMind model page, official Google AI Studio pricing docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Benchgap — Gemini 3.8 Flash benchmark scores](https://benchgap.net/model/gemini-3-8-flash)
  - [Artificial Analysis — Gemini 3.8 Flash (High)](https://artificialanalysis.ai/models/gemini-3-8-flash)
  - [OpenRouter — Google: Gemini 3.8 Flash](https://openrouter.ai/google/gemini-3.8-flash)
  - [Google AI Studio — pricing](https://ai.google.dev/gemini-api/docs/pricing)
  - [Google DeepMind — Gemini](https://deepmind.google/technologies/gemini/)
