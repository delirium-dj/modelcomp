# Gemini 3.1 Pro — findings by Mistral Large 4

- Source: Google DeepMind (`gemini-3.1-pro`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google DeepMind's Gemini 3-series flagship (first ".1" increment between major versions, reflecting a large reasoning/agentic jump over Gemini 3 Pro); Google's most advanced model at its model-card date and the GA flagship until the Gemini 4 wave. Natively multimodal reasoning model for complex tasks.
- **Provider / access:** Gemini API / Google AI Studio (`gemini-3.1-pro`; preview ID `gemini-3.1-pro-preview`), Vertex AI, Gemini app, NotebookLM, Gemini CLI. GenerateContent API.
- **Release / knowledge:** Released 2026-02-19 (preview → GA); model card dated February 2026. Knowledge cutoff not restated in reviewed sources.
- **IDs:** `gemini-3.1-pro` (stable, Gemini API/Vertex); `google/gemini-3.1-pro-preview` (OpenRouter).
- **Context window:** 1,000,000 tokens (1M) — per model card and multiple API listings.
- **Modalities:** Natively multimodal — text, image, audio, video, PDF in; text out (Gemini 3 family); thinking/reasoning with high-effort settings; function calling, code execution, search grounding; JSON mode.
- **Pricing (as of 2026-11-05):** $2 / $12 per 1M input/output (unchanged from Gemini 3 Pro); via Gemini API/Vertex paid tiers. No free API tier verified.
- **Architecture:** Proprietary; Gemini 3-series natively multimodal transformer, RL-trained reasoning ("Thinking (High)"); params not disclosed.

### Raw benchmarks found

Official model card results table (February 2026, Thinking High, pass@1-style) cross-checked against AA, The Decoder, DataCamp, NxCode, SFEIR, llm-stats, India Today:

Agent / tool use:

- Tau2-Bench Retail: **90.8%** (Opus 4.6 91.9% leads; 3 Pro 85.3%) (model card)
- GDPval: **1317 Elo** (Sonnet 4.6 1633 and Opus 4.6 1606 lead — 3.1 Pro trails on real-work GDPval) (model card)
- Terminal-Bench Hard: leads per AA launch article (among 6 of 10 AA categories led) (AA)
- AutomationBench / OSWorld / Claw-Eval / Toolathon: no verified public score found for this exact ID

Reasoning / knowledge:

- HLE no tools: **44.4%** (leads table; Opus 4.6 40.0%, 3 Pro 37.5%, GPT-5.2 34.5%) (model card)
- HLE search-blocklist + code: **51.4%** (Opus 4.6 53.1% leads) (model card)
- GPQA Diamond: **94.3%** (leads; 3 Pro 91.9%, GPT-5.2 92.4%) (model card; NxCode/SFEIR)
- ARC Prize Verified (ARC-AGI-2): **77.1%** — 2.5x Gemini 3 Pro's 31.1%, leads table (model card)
- CritPt: leads by ~5 p.p. after +9 p.p. gain (AA launch article)
- Artificial Analysis Intelligence Index: **57 at launch, #1 of 115 models** (India Today / TowardsAI / RockB); current AA coverage still places it above Muse Spark 52, GPT-5.4 and Opus 4.6, but below the Sept–Oct 2026 wave (Opus 5.5 58–59, Carbon 59–60) — version drift noted
- MMLU Pro: 3.1 Pro listed among leaders on Vals MMLU Pro leaderboard; exact figure not captured — no verified number cited

Coding:

- SWE-bench Verified (single attempt): **80.6%** (Opus 4.6 80.8% marginally leads; 3 Pro 76.2%) (model card)
- SWE-bench (Terminus-2 harness): **68.5%** (leads; 3 Pro 56.9%, Opus 4.6 65.4%) (model card)
- LiveCodeBench: **2887 Elo** (leads; 3 Pro 2439, GPT-5.2 2393) (model card / SFEIR)
- SciCode / DeepSWE: no verified public score found for this exact ID

Long context:

- 1M-token window (official); no verified MRCR/RULER/GraphWalks retrieval score found for this ID

### Normalized scores (1–100)

- **Tool use: 88/100.** Tau2 Retail 90.8% near-leads and it led AA agent-coding at launch, but GDPval 1317 trails Sonnet/Opus 4.6 and no AutomationBench/OSWorld number found.
- **Reasoning: 93/100.** HLE 44.4% (no tools) and GPQA 94.3% lead the Feb 2026 table, ARC-AGI-2 77.1% is 2.5x its predecessor, AA Index 57 was #1 at launch; capped as newer Sept–Oct models now top the live index.
- **Context window: 96/100.** 1M window in the 95–100 tier; no verified ≥98% retrieval at 512K+ found, so not 100.
- **Multimodal: 92/100.** Natively multimodal (text/image/audio/video/PDF in), text out — top 90–100 band.
- **Coding: 90/100.** SWE-bench Verified 80.6%, Terminus-2 68.5%, LiveCodeBench 2887 Elo — frontier band, marginally behind Opus 4.6 on Verified.
- **Cost efficiency: 72/100.** $2/$12 per 1M sits between the $1.25/$4.25 (~88) and $3/$15 (~60) bands; "less than half the cost of rivals" at launch per The Decoder; no free tier.
- **Overall Score: 92/100.** Half-up mean of (88 + 93 + 96 + 92 + 90) / 5 = 91.8 → 92. Best fit: strong value frontier generalist — top-tier reasoning/multimodal at $2/$12; newer Gemini 4 / Opus 5.5 now outrank it on the live index.

---

## Signature

- Provided by: **Mistral Large 4 (mistral-large-4)** — 2026-11-05
- Method: public internet research (6 web searches + official DeepMind model card fetched, 2026-11-05 UTC); official model card prioritized, cross-checked against Artificial Analysis, The Decoder, DataCamp, NxCode, SFEIR, llm-stats, BenchLM, India Today; index-version drift (AA 57 at launch vs current sub-Carbon/Opus-5.5 board) noted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Gemini 3.1 Pro — Model Card, Google DeepMind (February 2026, results table)](https://deepmind.google/models/model-cards/gemini-3-1-pro/)
  - [Gemini 3.1 Pro Model Card PDF](https://storage.googleapis.com/deepmind-media/Model-Cards/Gemini-3-1-Pro-Model-Card.pdf)
  - [Gemini 3.1 Pro: A smarter model for your most complex tasks — Google blog](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-pro/)
  - [Gemini 3.1 Pro Preview: the new leader in AI — Artificial Analysis](https://artificialanalysis.ai/articles/gemini-3-1-pro-preview-new-leader-in-ai)
  - [The Decoder — 3.1 Pro tops AA Index at less than half rivals' cost](https://the-decoder.com/googles-gemini-3-1-pro-preview-tops-artificial-analysis-intelligence-index-at-less-than-half-the-cost-of-its-rivals/)
  - [NxCode — Gemini 3.1 Pro complete guide (ARC-AGI-2 77.1, SWE-V 80.6, GPQA 94.3)](https://www.nxcode.io/resources/news/gemini-3-1-pro-complete-guide-benchmarks-pricing-api-2026)
  - [SFEIR Institute — benchmarks, pricing, 1M context](https://institute.sfeir.com/en/articles/gemini-3-1-pro-google-ai-model-benchmarks/)
  - [BenchLM — gemini-3-1-pro](https://benchlm.ai/models/gemini-3-1-pro)
  - [OpenRouter — google/gemini-3.1-pro-preview](https://openrouter.ai/google/gemini-3.1-pro-preview)
  - [llm-stats — Gemini 3.1 Pro launch research](https://llm-stats.com/blog/research/gemini-3.1-pro-launch)
  - [India Today — AA Index 57, #1, 2026-02-20](https://www.indiatoday.in/amp/technology/news/story/gemini-31-pro-is-here-benchmarks-says-google-is-once-again-leader-in-ai-2871338-2026-02-20)
