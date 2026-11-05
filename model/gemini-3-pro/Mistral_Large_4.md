# Gemini 3 Pro — findings by Mistral Large 4

- Source: Google DeepMind (`gemini-3-pro`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro
- **Short description:** Google DeepMind's Gemini 3 flagship, released 2025-11-18 — the first model with a Deep Think reasoning mode and Google's "vibe coding"/agentic showcase; succeeded by Gemini 3.1 Pro (2026-02-19) at the same price, with 3-pro-preview deprecation scheduled 2026-03-09.
- **Provider / access:** Gemini API / Google AI Studio (`gemini-3-pro`), Vertex AI (recommended for production: SLA, VPC, fine-tuning), Gemini app, Gemini CLI. GenerateContent API.
- **Release / knowledge:** Released 2025-11-18 (preview; staged rollout from safety testers to AI Ultra subscribers). Knowledge cutoff not restated in reviewed snippets.
- **IDs:** `gemini-3-pro` (stable); `google/gemini-3-pro` (OpenRouter).
- **Context window:** 1,000,000 tokens; ~64–66K output (CloudPrice lists up to 66K). Note: Pro-tier prompts >200K tokens are billed at higher rates ($4/$18 above 200K on 3.1 Pro per CloudZero).
- **Modalities:** Natively multimodal — text, image, audio/speech, video in; text out; Deep Think mode; tool calling; computer use.
- **Pricing (as of 2026-11-05):** $2 / $12 per 1M in/out (3.1 Pro price point carried over; CloudPrice lists provider rates from $1.00/$6.00 — conflicting across providers, both cited). No free API tier verified.
- **Architecture:** Proprietary, closed, no downloadable weights; genuine natively-multimodal architecture; Deep Think reasoning variant.

### Raw benchmarks found

Official launch + model card cross-checked against Vellum, llmindex, max-productive, awesomeagents, VentureBeat, AA, The Decoder; conflicts noted:

Agent / tool use:

- WebDev Arena: **1487 Elo** at launch (max-productive); Vending-Bench 2 leading (max-productive)
- LMArena: **1501 Elo, #1 at launch** (max-productive)
- AutomationBench / OSWorld / Claw-Eval: no verified public score found for this ID

Reasoning / knowledge:

- GPQA Diamond: **91.9%** (Deep Think 93.8%) — highest reported Nov 2025 (llmindex/awesomeagents)
- MMLU-Pro: **89.8%** — highest reported Nov 2025 (awesomeagents)
- HLE: **37.5%** without tools (40%+ with Deep Think) (Vellum)
- ARC-AGI-2: **31.1%** (ARC Prize Verified 45.1% with code execution, Deep Think) (Vellum/VentureBeat)
- Artificial Analysis: 3 Pro Preview outperformed all models on the AA Intelligence Index at launch, first in 5 of 10 evals (AA article); hallucination rate later cited as a weakness fixed in 3.1 Pro (-38 p.p.) (The Decoder)

Coding:

- SWE-bench Verified: **76.2%** at launch (llmindex/benchgen)
- DeepSWE / LiveCodeBench / SciCode: no verified public score found for gemini-3-pro specifically

Long context:

- 1M window / 64–66K out; MRCR v2 at 128K 84.9% but **26.3% at full 1M** (Spheron, 3.1 Pro card figures as family reference) — retrieval degrades at the far end

Multimodal:

- MMMU-Pro: **81.0%**; Video-MMMU: **87.6%** (awesomeagents) — #1 multimodal claims at launch (AA: top-3 multimodal)

### Normalized scores (1–100)

- **Tool use: 86/100.** Strong vibe-coding/agentic positioning and WebDev 1487 Elo, but few tool-benchmark numbers published; AA tools race noted as its weak spot (TAI #193).
- **Reasoning: 91/100.** GPQA 91.9%, MMLU-Pro 89.8%, LMArena 1501 #1 and AA Index #1 at launch; HLE 37.5% (no tools) is below the 40%+ frontier ref.
- **Context window: 95/100.** 1M window in the 95–100 tier, but MRCR collapses to ~26% at the full 1M and >200K prompts cost extra — not 100.
- **Multimodal: 92/100.** Native text/image/audio/video, MMMU-Pro 81%, Video-MMMU 87.6%; text-only output.
- **Coding: 88/100.** SWE-V 76.2% was SOTA at launch, WebDev 1487 Elo; trails the 2026 wave (Opus 5 97% SWE-V, 3.1 Pro 80.6%).
- **Cost efficiency: 72/100.** $2/$12 per 1M between the $1.25/$4.25 (~88) and $3/$15 (~60) bands; provider rates from $1/$6 (CloudPrice conflict noted); no free tier.
- **Overall Score: 90/100.** Half-up mean of (86 + 91 + 95 + 92 + 88) / 5 = 90.4 → 90. Best fit: Nov 2025–Feb 2026 flagship, now a deprecated-preview lineage — migrate to 3.1 Pro (same price, +2x reasoning).

---

## Signature

- Provided by: **Mistral Large 4 (mistral-large-4)** — 2026-11-05
- Method: public internet research (6 web searches, official launch/model card cited, 2026-11-05 UTC); cross-checked against Vellum, llmindex, awesomeagents, VentureBeat, AA, The Decoder, CloudPrice, CloudZero, Spheron; conflicting pricing ($2/$12 vs from $1/$6 across providers) and MRCR-at-1M degradation listed side by side. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Gemini 3 — Google blog (official launch, 2025-11-18)](https://blog.google/products-and-platforms/products/gemini/gemini-3/)
  - [Gemini 3 Pro Model Card (PDF)](https://storage.googleapis.com/deepmind-media/Model-Cards/Gemini-3-Pro-Model-Card.pdf)
  - [Google Gemini 3 Benchmarks (Explained) — Vellum](https://www.vellum.ai/blog/google-gemini-3-benchmarks)
  - [Artificial Analysis — Gemini 3 Pro: everything you need to know](https://artificialanalysis.ai/articles/gemini-3-pro-everything-you-need-to-know)
  - [llmindex — Gemini 3 Pro launch (91.9% GPQA, 81% MMMU-Pro, 76.2% SWE-V)](https://llmindex.net/news/google-gemini-3-pro-launch-frontier-reasoning-model)
  - [Awesome Agents — Gemini 3 Pro (MMLU-Pro 89.8%, Video-MMMU 87.6%)](https://awesomeagents.ai/models/gemini-3-pro/)
  - [VentureBeat — Gemini 3 unveiled (Deep Think 45.1% ARC-AGI-2)](https://venturebeat.com/ai/google-unveils-gemini-3-claiming-the-lead-in-math-science-multimodal-and)
  - [The Decoder — 3.1 Pro tops AA Index; hallucination -38 p.p. vs 3 Pro](https://the-decoder.com/googles-gemini-3-1-pro-preview-tops-artificial-analysis-intelligence-index-at-less-than-half-the-cost-of-its-rivals/)
  - [Is It Good AI — 3 Pro review (deprecation 2026-03-09, 138 t/s)](https://www.isitgoodai.com/llm-models/gemini-3-pro)
  - [CloudPrice — gemini-3-pro (1M ctx, 66K out, from $1/$6 across 4 providers)](https://cloudprice.net/models/google-gemini-3-pro)
  - [Benchgen — gemini-3-pro](https://benchgen.com/models/google-deepmind/gemini-3-pro)
