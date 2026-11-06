# Gemini 3.5 Flash — findings by Mistral Large 4

- Source: Google DeepMind (`gemini-3.5-flash`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** First model of the Gemini 3.5 family, GA at Google I/O 2026-05-19 — a Flash-tier model that beats Gemini 3.1 Pro on coding/agentic benchmarks at ~25% lower cost, 4x the speed of comparable models; leads the AA Intelligence-vs-Speed Pareto frontier. Sibling: 3.5 Flash-Lite; successor 3.6 Flash (2026-07-21).
- **Provider / access:** Gemini API / AI Studio (`gemini-3.5-flash` stable), Vertex AI, OpenRouter (cheapest $1.50/M input); free tier with rate limits.
- **Release / knowledge:** GA 2026-05-19 (OpenRouter/llm-stats/metacto; one snippet said June 19 — conflict noted, May 19 corroborated). Knowledge cutoff not restated in reviewed snippets.
- **IDs:** `gemini-3.5-flash` (stable); `google/gemini-3.5-flash` (OpenRouter).
- **Context window:** 1,048,576 tokens; 64K output.
- **Modalities:** Text, image, audio, video, PDF in; text out; thinking levels; tool calls, search grounding, batch, flex, caching.
- **Pricing (as of 2026-11-05):** $1.50 / $9.00 per 1M in/out, cached input $0.15; free tier with rate limits (metacto); Batch/Flex discounts. 
- **Architecture:** Proprietary, params not disclosed; Gemini 3.5 Flash family.

### Raw benchmarks found

Official model card + launch coverage cross-checked against llm-stats, BenchmarkList, pricepertoken, BenchLM, AA, emergent.sh, myclaw; conflicts noted:

Agent / tool use:

- AA: leader on Intelligence-vs-Speed Pareto; big GDPval-AA gains (AA article); 5x cost of Gemini 3 Flash (AA)
- OSWorld / AutomationBench / Claw-Eval: no verified public score found for this ID

Reasoning / knowledge:

- GPQA Diamond: **92.2%** (BenchmarkList) vs **82.8%** (pricepertoken) — conflicting, both cited
- Artificial Analysis Intelligence Index: **50** (memeburn/aiwiz, tied with 3.6) vs **23.8** (pricepertoken "Intelligence 23.8") — major conflict, both cited
- SimpleBench: 76.7 (BenchmarkList); SWE-bench / HLE: no verified public score found for this ID

Coding:

- Terminal-Bench 2.1: **76.2%** (llm-stats launch); beats 3.1 Pro on coding/agentic at ~25% lower cost (metacto)
- SWE-bench Verified / DeepSWE / LiveCodeBench: no verified public score found for this exact ID

Long context:

- 1M window / 64K out (official); no verified MRCR/RULER score found for this ID

Speed: 289 output tok/s (aimadetools); 4x comparable models (llm-stats).

### Normalized scores (1–100)

- **Tool use: 85/100.** AA Pareto leader on intelligence-vs-speed with GDPval gains; no per-benchmark OSWorld/Claw rows captured.
- **Reasoning: 84/100.** GPQA readings conflict (82.8 vs 92.2); AA Index 50 vs 23.8 across sources — drift flagged; scored on the corroborated 50-at-high reading.
- **Context window: 96/100.** 1M / 64K in the 95–100 tier; no verified 512K+ retrieval.
- **Multimodal: 92/100.** Full text/image/audio/video/PDF input, text out.
- **Coding: 87/100.** TB 2.1 76.2% and beats 3.1 Pro on coding/agents at lower cost; no SWE-V/DeepSWE captured.
- **Cost efficiency: 80/100.** $1.50/$9.00 per 1M between the $1.25/$4.25 (~88) and $3/$15 (~60) bands, cached $0.15; free rate-limited tier exists.
- **Overall Score: 89/100.** Half-up mean of (85 + 84 + 96 + 92 + 87) / 5 = 88.8 → 89. Best fit: high-volume agentic/coding workhorse at $1.50/$9 with 1M context; 3.6 Flash (2026-07-21) halves task time at same index.

---

## Signature

- Provided by: **Mistral Large 4 (mistral-large-4)** — 2026-11-05
- Method: public internet research (6 web searches, official model card cited, 2026-11-05 UTC); cross-checked against llm-stats, BenchmarkList, pricepertoken, BenchLM, AA, emergent.sh, myclaw, metacto, OpenRouter; conflicts (release May 19 vs a June-19 snippet; GPQA 92.2 vs 82.8; AA Index 50 vs 23.8) listed side by side. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Gemini 3.5 Flash — Model Card, Google DeepMind](https://deepmind.google/models/model-cards/gemini-3-5-flash/)
  - [llm-stats — Gemini 3.5 Flash launch (GA 2026-05-19, $1.50/$9, TB 2.1 76.2%, 4x speed)](https://llm-stats.com/blog/research/gemini-3.5-flash-launch)
  - [metacto — Gemini API pricing May 2026 (3.5 Flash $1.50/$9, cached $0.15, free tier)](https://www.metacto.com/blogs/the-true-cost-of-google-gemini-a-guide-to-api-pricing-and-integration)
  - [Artificial Analysis — 3.5 Flash leads Intelligence-vs-Speed Pareto](https://artificialanalysis.ai/articles/gemini-3-5-flash-everything-you-need-to-know)
  - [BenchmarkList — gemini-3-5-flash (GPQA 92.2, SimpleBench 76.7)](https://benchmarklist.com/models/google-gemini-3-5-flash/)
  - [pricepertoken — gemini-3-5-flash (1M ctx, GPQA 82.8, Intelligence 23.8 — conflicting)](https://pricepertoken.com/pricing-page/model/google/gemini-3.5-flash)
  - [BenchLM — gemini-3-5-flash](https://benchlm.ai/models/gemini-3-5-flash)
  - [memeburn — 3.6 vs 3.5 (both AA 50, 3.6 half the task time)](https://memeburn.com/gemini-3-6-flash-benchmarks-and-pricing-guide-2026/)
  - [aimadetools — 3.5 Flash complete guide (289 tok/s)](https://www.aimadetools.com/blog/gemini-3-5-flash-complete-guide/)
  - [OpenRouter — google/gemini-3.5-flash](https://openrouter.ai/google/gemini-3.5-flash)
