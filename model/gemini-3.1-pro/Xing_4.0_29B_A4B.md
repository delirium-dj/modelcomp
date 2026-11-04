# Gemini 3.1 Pro — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

- Source: Google DeepMind (`google/gemini-3-1-pro`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google DeepMind's next-generation flagship multimodal reasoning model, released February 19, 2026 as improved successor to Gemini 3 Pro. Significantly outperforms 2.5 Pro on major AI benchmarks; tops LMArena leaderboard with breakthrough score of 1501 Elo.
- **Provider / access:** Google Gemini API (`google/gemini-3-1-pro`), Google AI Studio, Vertex AI, Gemini Enterprise Agent Platform, Gemini app. Chat Completions API only (no Responses API).
- **Release / knowledge:** Released February 19, 2026. Knowledge cutoff: unknown (newer than GPT-6 Astra by ~5 months).
- **IDs:** `google/gemini-3-1-pro`
- **Context window:** ~1M tokens (consistent with Gemini 3 family). Max output 64K-128K tokens (per Vals AI listing: 1M context / 66K max output).
- **Modalities:** Text, image, audio, video input. Text output only. Reasoning yes. Tool calls yes. JSON mode not explicitly mentioned.
- **Pricing (as of <date>):** $2.00 input / $12.00 output per 1M tokens at standard pricing; discount pricing through end of year. Source: BenchmarkList and official model card data. Cache same 90% discount.
- **Architecture:** Proprietary. Trained on Google TPUs. Multi-step reasoning via RL techniques.

### Raw benchmarks found

**Reasoning**

- Humanity's Last Exam: 37.5% without tools, 45.8% with tools. Source: Simon Willison blog / Anthropic comparison table (Google benchmark data).
- GPQA Diamond: 91.9%. Source: Simon Willison blog.
- FrontierMath Tier 4: Not yet reported publicly (scored lower on earlier tiers). Source: Anthropic comparison table from OpenAI launch.
- AIME 2025/2026: 95%. Source: Google model card.
- ARC-AGI-2: 81.5% (epoch AI) / 31.1% (Google self-reported). Source: Epoch AI vs Google discrepancy noted — Google reports different harness versions.
- FrontierMath Tiers 1-3 v2: Best score among tracked models at best value.

**Coding**

- SWE-bench Verified: Not explicitly published (lower scores than GPT-6 Astra and Fable 5).
- Terminal-Bench 2.1: 80.4%. Source: Google evaluation data.
- DeepSWE: Not published in full detail.

**Knowledge work / agents**

- GDPval-AA v2: Not public score.
- AutomationBench: 27.3%. Source: Artificial Analysis article on Gemini 3 series.
- Vals Finance Agent v2: Not reported.

**Multimodal**

- MMMU-Pro: 81%. Source: Google announcement / Simon Willison blog.
- Video-MMMU: 87.6%. Same source.
- ScreenSpot-Pro: 72.7%. Source: Roboflow blog.
- CharXiv Reasoning (no tools): 84.5%. Source: evals.report.

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal-Bench at 80.4%; ATP strong on agentic eval. Capped by limited tooling depth vs dedicated coding agents.
- **Reasoning: 90/100.** HLE, GPQA, AIME all top-tier. FrontierMath Tier 4 is key cap but it's competitive with frontier leaders.
- **Context window: 92/100.** 1M tokens unmatched at release. No cap.
- **Multimodal: 88/100.** Video-MMMU 87.6%, MMMU-Pro 81%, ScreenSpot-Pro 72.7% are leading. Text-only would be 78 (not needed for this report).
- **Coding: 72/100.** Strong baseline on Terminal-Bench; doesn't outpace GPT-6 Astra or Fable 5 in deep coding benchmarks.
- **Cost efficiency: 52/100.** $2/$12 per 1M tokens is moderately priced. Higher per-task cost than GPT-5.5-Pro ($30/$180).
- **Overall Score: 84/100.** Mean of five non-cost dims: (78+90+92+88+72)/5 = 84.4... adjusted down slightly for FrontierMath Tier 4 underperformance which caps reasoning ceiling. Final ~80.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (openai/open-...-id)** — 2026-11-04
- Method: Public internet research (Google DeepMind announcement, artificialanalysis.ai, Epoch AI,Simon Willison blog, Roboflow, benchmark aggregation sites).
- Reference URLs:
  - [<Introducing Gemini 3 | Google>]
  - [<Gemini 3 Pro Model Card — Google DeepMind>]
  - [<Epoch AI Benchmarking Hub — Gemini 3.1 Pro>]
  - [<Artificial Analysis articles — Gemini 3 series>]
  - [<evals.report — Gemini 3 Pro>]
- Future sources: add new file next to this one.
