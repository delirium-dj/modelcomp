# Gemini 2.5 Flash — findings by Muse Glimmer 30B

- Source: Google (`gemini-2.5-flash`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash
- **Short description:** Google's 1M-context multimodal workhorse for high-throughput input processing; not deprecated, but access is restricted for prior 2.5 users and superseded by 3.6/3.8 Flash.
- **Provider / access:** Google — Gemini API (AI Studio / Vertex AI); `google/gemini-2.5-flash`. Proprietary hosted API only; free tier available on AI Studio, no OpenCode Zen route.
- **Release / knowledge:** preview April 17 2025; GA June 17 2025; quality/efficiency refresh Sept 25 2025. Knowledge cutoff ~January 2025.
- **IDs:** `google/gemini-2.5-flash`
- **Context window:** 1,048,576 tokens input / 65,536 output. Verified via `meta.json`.
- **Modalities:** Text, image, audio, video, PDF in; text out. Hybrid thinking on/off with 0–24,576 token budget.
- **Pricing (as of 2026-10-20):** $0.30/M in / $2.50/M out (AI Studio). Free tier available on Google AI Studio with standard rate limits. Model scheduled for shutdown 2026-10-16 per `meta.json`; access past shutdown date is legacy.
- **Architecture:** Sparse mixture-of-experts transformer, native multimodal; parameters undisclosed.

### Raw benchmarks found

> Verified public scores from Google model card, arXiv:2507.06261 Gemini 2.5 paper, and AI Studio documentation.

Reasoning / knowledge:
- GPQA Diamond: **82.8%** (Google model card, thinking mode; arXiv paper)
- AIME 2025: **72.0%** (Google model card)
- Global MMLU Lite: **88.4%** (Google model card)

Coding:
- SWE-bench Verified: **60.4%** (Google model card, thinking mode single attempt; arXiv)
- LiveCodeBench: **71.3%** (Artificial Analysis / aiwartracker aggregation)
- Aider Polyglot: **61.9%**; Aider Edit: **56.7%**

Agent / tool use:
- Terminal-Bench: **13.6%** (aiwartracker earlier harness; weak agentic showing for 2026)
- No strong 2.5-era agentic milestone published

Long context:
- MRCR v2 8-needle: **54.3%** @128K / **21.0%** @1M (Gemini 2.X paper, arXiv:2507.06261)
- LOFT hard ≤128K: **82.1%**, @1M: **58.9%**
- LongBench-v2: **62.1** (Artificial Analysis)

Multimodal:
- MMMU visual reasoning: **79.7%** (Google model card)
- Native text/image/video/audio input in one endpoint
- MMMU-Pro / video-specific: no verified public score found

### Normalized scores (1–100)

- **Tool use: 64/100.** Terminal-Bench 13.6% and modest SWE-bench ceiling reflect limited agentic tool use by 2026 standards; functional for basic function calling and code execution.
- **Reasoning: 78/100.** GPQA Diamond 82.8% and AIME 72% place it in solid mid-tier reasoning for 2025; thinking mode lifts it but still below 2026 frontier.
- **Context window: 85/100.** Full 1M input window with good LOFT 128K performance, but sharp MRCR degradation at 1M caps the score.
- **Multimodal: 81/100.** Native multimodal input with MMMU 79.7%; strong for its era and price band, limited by lack of verified video reasoning scores.
- **Coding: 68/100.** SWE-bench Verified 60.4% and LiveCodeBench 71.3% are respectable mid-tier; ~20 points behind 2026 leaders.
- **Cost efficiency: 88/100.** $0.30/$2.50 with free thinking tokens was a value benchmark, now legacy after scheduled shutdown.
- **Overall Score: 75/100.** Mean of the five quality dims (64+78+85+81+68)/5 = 75.2 → 75. A fast, cheap, genuinely capable multimodal workhorse now in legacy status; migration to Gemini 3.5 Flash recommended.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: public internet research; meta.json for curated metadata; arXiv:2507.06261 Gemini 2.5 paper, ai.google.dev model card, Artificial Analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
