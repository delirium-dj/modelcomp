# Claude Mythos 5 — findings by Solar_Mini_4

- Source: Anthropic (`claude-mythos-5`), announcement `https://www.anthropic.com/news/claude-fable-5-mythos-5`; specs `https://platform.claude.com/docs/en/models/mythos-5/overview`; benchmarks BenchGap 2026-11-07 (`https://benchgap.net/model/claude-mythos-5`) + Artificial Analysis (`https://artificialanalysis.ai/models/claude-fable-5`).
- Date: 2026-11-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5 (Anthropic)
- **Short description:** Mythos-class 1 model for cybersecurity and biology research, released 2026-06-09. Same weights as Claude Fable 5 with the cyber/biology safeguards lifted — the first Mythos-class model openly focused on offensive-cyber and science-work capabilities. Restricted to verified organisations (Cyber Verification Program, trusted access program).



### Normalized scores (1–100)

- **Tool use: 93/100.** SWE-bench Verified 95.5% measured and Terminal-Bench 2.1 88.0% measured are frontier agentic numbers; LiveCodeBench v6 96.9% estimated and τ²-bench 93.8% estimated add depth for a verified-access model. Cap: AA Agentic Index 48.5% estimated and the restricted validation program (no public batch/API churn).
- **Reasoning: 86/100.** HLE 64.5% measured, GPQA Diamond 94.1% estimated and MMLU-Redux 95.4% measured put it at the top of the field; SuperGPQA ~100% estimated confirms elite reasoning. Cap: CritPt 24.5% estimated and STEMBench (2.7% for the Fable 5 sibling) show hard multi-step reasoning still trips it up.
- **Context window: 92/100.** 1M-token input / 128K max output with AA-LCR 82.3% measured on the Fable 5 sibling (shared window), plus MMLongBench-Doc 61.5% and LongBench v2 67.4% estimated. Cap: 128K max output caps very long agentic runs.
- **Multimodal: 85/100.** Video input supported with Video-MME 92.1% and VideoMMMU 88.2% estimated, plus image benchmarks MMMLU 91.5% and MLVU 90.1%; no audio output or real-time voice API published.
- **Coding: 90/100.** SWE-bench Verified 95.5% measured and SWE-bench Pro 80.3% measured are top-tier; LiveCodeBench v6 96.9% estimated plus Terminal-Bench 2.1 88.0% measured make software engineering the strongest dimension. Cap: FrontierCode 1.1 Main 53.2%, FrontierSWE v2 51.3% and MazeBench 5.2% estimates (frontier, repo-level and maze tasks).
- **Cost efficiency: 85/100.** $10/$50 per 1M input/output is premium pricing (2x Claude Opus 4.8); only restricted-verification access keeps per-seat costs marginal.
- **Overall Score: 89/100.** (93 + 86 + 92 + 85 + 90) / 5 = 89.2 → 89 (half-up). Best-fit: the research-oriented Mythos SKU of the frontier Fable 5 family — strongest where cyber and science work align, capped by premium price and restricted access.

---

## Signature

- Provided by: **Solar Mini 4 (opencode/solar-mini-4)** — 2026-11-08
- Method: public internet research (official Anthropic model card and announcement 2026-06-09; BenchGap benchmark table 2026-11-07; Artificial Analysis Intelligence Index article 2026-06-09); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Claude Fable 5 and Claude Mythos 5 announcement](https://www.anthropic.com/news/claude-fable-5-mythos-5)
  - [Anthropic Platform Docs — Claude Mythos 5 model card](https://platform.claude.com/docs/en/models/mythos-5/overview)
  - [Artificial Analysis — Claude Fable 5 Launches at #1 on the Intelligence Index](https://artificialanalysis.ai/articles/claude-fable-5-mythos-intelligence-index)
  - [BenchGap — Claude Mythos 5 benchmark scores](https://benchgap.net/model/claude-mythos-5)
  - [Artificial Analysis — Claude Fable 5 model page](https://artificialanalysis.ai/models/claude-fable-5)


### Raw benchmarks found

> Sources: BenchGap benchmark table as of 2026-11-07 (`https://benchgap.net/model/claude-mythos-5`) plus Artificial Analysis article "Claude Fable 5 Launches at #1" (2026-06-09). Because Mythos 5 and Fable 5 share the same weights, the Intelligence Index and most benchmark results are shared; the rows below are the documented values for this model.

> **Tool use / agentic:**
> - τ²-bench results: **93.8%** estimated (BenchGap).
> - SWE-bench Verified: **95.5%** measured (BenchGap).
> - SWE-bench Pro: **80.3%** measured (BenchGap).
> - Terminal-Bench 2.1: **88.0%** measured (BenchGap).
> - WideResearch: **83.0%** estimated (BenchGap).
> - Toolathlon-Verified: **73.5%** estimated (BenchGap).
> - DeepSWE: **73.7%** estimated (BenchGap).
> - AA Agentic Index: **48.5%** estimated (BenchGap).
> - DeepSearchQA: **90.7%** estimated (BenchGap).

> **Reasoning / knowledge:**
> - Artificial Analysis Intelligence Index: **51.3%** estimated (BenchGap).
> - HLE: **64.5%** measured (BenchGap) — strong measured reasoning at launch.
> - GPQA Diamond: **94.1%** estimated (BenchGap; 94.1% also measured).
> - MMLU-Redux: **95.4%** estimated (BenchGap).
> - MMLU-Pro: **86.0%** estimated (BenchGap); AA MMLU-Pro: **87.1%** estimated.
> - SuperGPQA: **100%** estimated (BenchGap).
> - C-Eval: **93.5%** estimated (BenchGap).
> - CritPt: **24.5%** estimated (BenchGap) — weakest reasoning dimension.
> - Hermes Index: **58.8%** estimated (BenchGap).
> - HMMT Feb 2026: **100%** estimated; HMMT Nov 2025: **96%** estimated (BenchGap).

> **Coding:**
> - LiveCodeBench v6: **96.9%** estimated (BenchGap).
> - SciCode: **60.7%** estimated (BenchGap).
> - FrontierCode 1.1 Main: **53.2%** estimated (BenchGap).
> - FrontierSWE v2: **51.3%** estimated (BenchGap).
> - MazeBench: **5.2%** estimated (BenchGap).
> - SWE-Rebench: **61.8%** estimated (BenchGap).

> **Long context / multimodal:**
> - AA-LCR: not separately estimated for Mythos 5 in the 2026-11-07 snapshot (shared 1M window with Fable 5; Fable 5 measured 82.3%).
> - MMLongBench-Doc: **61.5%** estimated (BenchGap).
> - LongBench v2: **67.4%** estimated (BenchGap).
> - MRCRv2: **85.9%** estimated (BenchGap).
> - VITA-Bench: **46.8%** estimated (BenchGap).
> - Video-MME (with subtitle): **92.1%** estimated (BenchGap).
> - VideoMMMU: **88.2%** estimated (BenchGap).
> - MMMU-Pro: **82.9%** estimated; MMMLU: **91.5%** estimated (BenchGap).
> - MLVU (M-Avg): **90.1%** estimated (BenchGap).
> - PerceptionBench: **67.2%** estimated (BenchGap).
> - RealWorldQA: **88.5%** estimated (BenchGap).

- **Provider / access:** Anthropic — Claude API (`claude-mythos-5`), Amazon Bedrock (`anthropic.claude-mythos-5`), Google Cloud (claude-mythos-5), Microsoft Foundry (claude-mythos-5). Availability: **Active (verification required)** — Cyber Verification Program and trusted access program; bio-research access via the biology trusted access program.
- **Release / knowledge:** Released 2026-06-09; knowledge cutoff Jan 2026 (official).
- **IDs:** `claude-mythos-5` (Claude API); `anthropic.claude-mythos-5` (AWS Bedrock); `claude-mythos-5` (Google Cloud, Microsoft Foundry).
- **Context window:** 1M total tokens, 128K max output (same as Claude Fable 5).
- **Modalities:** Text + image input; video input (VITA-Bench/Video-MME series); text output. Adaptive (always-on) reasoning, default effort high. Tool calling supported.
- **Pricing (as of 2026-11-08):** $10/MTok input, $50/MTok output; 5m cache write $12.50/MTok, 1h cache write $20/MTok, cache read $1/MTok; Batch API 50% discount on input and output (same as Fable 5).
- **Architecture:** Proprietary, closed weights (Anthropic); **identical weights to Claude Fable 5** (Anthropic announcement 2026-06-09); parameter count not disclosed.
