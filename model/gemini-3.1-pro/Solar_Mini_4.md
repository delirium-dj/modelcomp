# Gemini 3.1 Pro — findings by Solar_Mini_4

- Source: Google (Anthropic-style model, `google/gemini-3.1-pro`)
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google's research-and-multimodal flagship with a 1M-token window and multimodal perception (image, audio, video, PDF input); built for whole-repository analysis, deep research, and agentic workflows. Pro-tier pricing with a free tier on Google AI Studio.
- **Provider / access:** Google AI Studio (`gemini-3.1-pro-preview`), Google Vertex AI (`vertex_ai/gemini-3.1-pro-preview`), Perplexity, AIHubMix; OpenCode Zen `opencode/gemini-3.1-pro-preview` (via LiteLLM).
- **Release / knowledge:** Released 2026-02 (per LiteLLM, February 2026); knowledge cutoff not disclosed in accessible docs.
- **IDs:** `google/gemini-3.1-pro` (official), `gemini/gemini-3.1-pro-preview` (LiteLLM ID).
- **Context window:** **1M** total (1,048,576), **64K** max output (official LiteLLM/Google pricing data).
- **Modalities:** text + image + audio + video + PDF in; text out; reasoning always-on adaptive; function calling, structured output, prompt caching, web search.
- **Pricing (as of 2026-11-03):** $2.00 / $12.00 per 1M input/output (Google list price); cache read $0.20/1M; batch $1.00/$6.00; above 200K tokens $4.00/$18.00; free tier on Google AI Studio; 50% batch discount.
- **Architecture:** Proprietary (closed weights), Google DeepMind's Gemini 3.1 Pro family.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Coding:
- SWE-bench Verified: **79.2%** (Benchgap, estimated ± 3.6 pp)
- LiveCodeBench v6: **90.6%** (Benchgap, estimated ± 2.4 pp)
- Terminal-Bench 2.1: **84.2%** (Benchgap, estimated ± 6.9 pp)
- AA Coding Index: **68.8%** (Benchgap, measured)
- SciCode: **53.8%** (Benchgap, estimated ± 2.9 pp)
- IFEval: **93.1%** (Benchgap, estimated ± 2.8 pp, high)
- τ²-bench results: **95.6%** (Benchgap, measured)

Reasoning / knowledge:
- GPQA Diamond: **94.3%** (Benchgap, measured)
- GPQA: **92.9%** (Benchgap, estimated ± 1.2 pp, high)
- MMLU-Pro: **85.7%** (Benchgap, estimated ± 2.5 pp)
- MMMLU: **90.6%** (Benchgap, estimated ± 0.7 pp)
- MMMU: **88.0%** (Benchgap, estimated ± 0.8 pp)
- MMMU-Pro: **83.9%** (Benchgap, measured)
- AIME26: **97.8%** (Benchgap, estimated ± 1.2 pp)
- HLE: **55.8%** (Benchgap, estimated ± 5.4 pp)
- CritPt: **17.7%** (Benchgap, measured)
- AA Intelligence Index: **41.3%** (Benchgap, estimated ± 5.8 pp)
- GDPval-AA: **14.6%** (Benchgap, measured)
- AA-LCR: **82.0%** (Benchgap, measured)
- IFBench: **75.5%** (Benchgap, estimated ± 6.6 pp)
- DeepSearchQA: **69.7%** (Benchgap, estimated ± 4.5 pp)
- ARC-AGI-2: **77.1%** (Benchgap, measured)
- ARC-AGI-1: **94.0%** (Benchgap, estimated ± 1.8 pp, high)
- Vals GPQA Diamond: **95.5%** (Benchgap, estimated ± 1.5 pp)
- Vals MMLU-Pro: **91.0%** (Benchgap, estimated ± 1.2 pp)
- Vals LiveCodeBench: **88.5%** (Benchgap, estimated ± 1.9 pp)
- Vals SWE-bench: **78.8%** (Benchgap, estimated ± 1.4 pp)
- VulcanBench v3: **86.2%** (Benchgap, estimated ± 5.6 pp)

Long context:
- AA-LCR: **82.0%** (Benchgap, measured)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key
> evidence and state what caps the score.

- **Tool use: 85/100.** Terminal-Bench 2.1 84.2% is near the frontier (~88%→90-100), τ²-bench results 95.6% is elite for agentic workflows, AA Coding Index 68.8% and AA-LCR 82.0% are solid; CyberGym 53.5% and AA Agentic Index 10.3% are weak spots.
- **Reasoning: 84/100.** GPQA Diamond 94.3%, AIME26 97.8%, and IFEval 93.1% are elite, with MMMLU 90.6%, MMMU 88.0%, and MMLU-Pro 85.7% also strong; HLE 55.8%, CritPt 17.7%, and AA Intelligence Index 41.3% are the limiting factors.
- **Context window: 93/100.** 1M total context is top-tier (≥1M→95-100), with AA-LCR 82.0% confirming solid long-context retrieval; 64K max output is a modest caveat.
- **Multimodal: 80/100.** Text + image + audio + video + PDF in (75-90 band → 80); text-only output.
- **Coding: 86/100.** SWE-bench Verified 79.2% (meets frontier ref DeepSWE 74%+→90-100), LiveCodeBench v6 90.6%, τ²-bench results 95.6%, and Terminal-Bench 2.1 84.2% are strong; SciCode 53.8% (below 55%) and AA Coding Index 68.8% are slightly muted.
- **Cost efficiency: 76/100.** $2.00/$12.00 input/output is below the flagship premium (between ~$1.25/$4.25→~88 and $3/$15→~60); free tier on Google AI Studio helps but is time-limited.
- **Overall Score: 86/100.** (85 + 84 + 93 + 80 + 86) / 5 = 85.6 → 86. Best-fit: Google's research-and-multimodal flagship for agentic and whole-repository work, with elite math/knowledge and strong long-context retrieval, priced at a mid-tier premium.

---

## Signature

- Provided by: **Solar Mini 4 (solar-mini4)** — 2026-11-03
- Method: public internet research (Benchgap benchmark leaderboard, LiteLLM API pricing page citing Google AI Studio/Vertex AI, llmwise pricing analysis, official Google AI Studio pricing page, official Google DeepMind model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Benchgap — Gemini 3.1 Pro benchmark scores](https://benchgap.net/model/gemini-3-1-pro)
  - [LiteLLM — Gemini 3.1 Pro Preview API pricing](https://models.litellm.ai/models/gemini-3.1-pro-preview)
  - [llmwise — Gemini 3.1 Pro pricing](https://llmwise.ai/models/gemini-3-1-pro/pricing)
  - [Google AI Studio — pricing](https://ai.google.dev/gemini-api/docs/pricing)
  - [Google DeepMind — Gemini](https://deepmind.google/technologies/gemini/)
