# Gemini 3.8 Flash — findings by Mistral Large 4

- Source: Google DeepMind (`gemini-3.8-flash`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google DeepMind's fourth Flash-class model in under four months (third in six weeks), tuned for long-horizon agentic work "at scale"; ships alongside a cybersecurity-focused sibling, Gemini 3.8 Flash Cyber (Fairwind Program, parked outside `model/` per routing rules).
- **Provider / access:** Gemini API / Google AI Studio (`gemini-3.8-flash`), Vertex AI; OpenRouter routes to 2 providers (AI Studio cheapest at $0.375/M input). GenerateContent API.
- **Release / knowledge:** GA 2026-09-02 (confirmed 2026-09-03); model card results as of September 2026. Knowledge cutoff not restated in reviewed sources.
- **IDs:** `gemini-3.8-flash` (stable); `google/gemini-3.8-flash` (OpenRouter).
- **Context window:** 1,000,000 tokens; 64K output ceiling (unchanged from prior Flash generation, per model page/eesel).
- **Modalities:** Text, image, audio, video, PDF in; text out; function calling, search-as-tool, computer use; thinking with effort levels (medium/high).
- **Pricing (as of 2026-11-05):** Introductory $0.75 / $3.75 per 1M in/out through 2026-12-31, doubling to $1.50 / $7.50 regular on 2027-01-01; cached input $0.075/M intro. No free API tier verified.
- **Architecture:** Proprietary; params not disclosed; Flash distillation family.

### Raw benchmarks found

Official model card results table (September 2026) cross-checked against AA, Ars Technica, The Register, BenchLM, felloai, apineed, Requesty, pricepertoken, BenchLeader; conflicts listed side by side:

Agent / tool use:

- DeepSWE v1.1: **73.7%** (card) vs **73.8%** (BenchLeader DeepSWE board, 2026-09-03) — minor conflict, both cited; #2 behind GPT-6 Astra 74.1% on that board; top of DeepSWE at launch per Ars Technica (Sonnet 5 53.8%, GPT-5.6 Sol 72.7%)
- GDPval-style Elo row: **1545** (Opus 5 1824 leads) (card)
- Agent row: **61.4%** (3.7 Flash 59.0%) (card)
- OSWorld partial, batch tool enabled: **59.0%** (Opus 5 leads 75.4%) (card)
- All-pass rows: **10.0%** and **35.0%** (card)
- Wins **8 of 14** benchmark rows in Google's own comparison table (felloai)
- Claw-Eval / Toolathon: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **95.3%** (pricepertoken/Requesty) vs **94.4%** in an independent task-matched comparison where 3.1 Pro scored 95.5% (IntuitionLabs) — conflicting, both cited
- HLE-Verified: **54.9%** (card); no-tools row **86.2%** (card)
- Artificial Analysis Intelligence Index: **59 at high effort** (AA article/theregister/eesel; ranked 17th of 196, $0.58/task, 302 tok/s ranked 3rd) vs **31 on the AA (High) model page** vs **30.8** (Requesty) — major index-version drift, all cited
- HLE / CritPt / LCR full-set: no verified public score found

Coding:

- Terminal-Bench 2.1: **89.4%** (card) vs **90.8%** (apineed) — conflicting, both cited
- Coding Index: **76.3%**; SciCode: **56.6%** (Requesty)
- SWE-bench Verified: not in card top rows; Vals board (2026-09-01) leaders are Opus 5 97.0% — no verified 3.8 Flash SWE-V number captured

Long context:

- 1M window / 64K output (official); no verified MRCR/RULER retrieval score found for this ID

### Normalized scores (1–100)

- **Tool use: 85/100.** DeepSWE 73.7% near-top and agent row 61.4% lead the Flash class, but OSWorld 59.0% trails Opus 5 (75.4%); no Claw-Eval found.
- **Reasoning: 85/100.** GPQA ~95% and HLE-Verified 54.9% are strong for the price tier; AA Index readings conflict wildly (59 vs 30.8–31 across versions) — scored on the corroborated 59-at-high reading with the drift flagged.
- **Context window: 96/100.** 1M window in the 95–100 tier; 64K output ceiling and no verified 512K+ retrieval keep it off 100.
- **Multimodal: 92/100.** Text/image/audio/video/PDF in, text out — top 90–100 band (87.8% agentic / 87.1% static multimodal rows).
- **Coding: 88/100.** DeepSWE 73.7%, TB 2.1 89.4–90.8%, Coding Index 76.3%; trails Opus 5/GPT-6 Astra on DeepSWE.
- **Cost efficiency: 92/100.** $0.75/$3.75 intro sits at the ~$0.60/$2.20 ≈ 92 methodology band with $0.075/M caching; time-limited — doubles to $1.50/$7.50 on 2027-01-01, and ~30% more output tokens per task than 3.7 Flash partially offsets (IntuitionLabs/MindStudio).
- **Overall Score: 89/100.** Half-up mean of (85 + 85 + 96 + 92 + 88) / 5 = 89.2 → 89. Best fit: high-volume agentic/coding workloads where per-task cost matters; promo price ends 2026-12-31.

---

## Signature

- Provided by: **Mistral Large 4 (mistral-large-4)** — 2026-11-05
- Method: public internet research (7 web searches + official DeepMind model card fetched, 2026-11-05 UTC); official card prioritized, cross-checked against AA, Ars Technica, The Register, BenchLM, BenchLeader, Requesty, pricepertoken, IntuitionLabs; conflicting figures (AA Index 59 vs 31 vs 30.8; TB 2.1 89.4 vs 90.8; DeepSWE 73.7 vs 73.8; GPQA 95.3 vs 94.4) listed side by side. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Gemini 3.8 Flash — Model Card, Google DeepMind (Sept 2026 results table)](https://deepmind.google/models/model-cards/gemini-3-8-flash/)
  - [Introducing Gemini 3.8 Flash and 3.8 Flash Cyber — Google blog](https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/)
  - [Artificial Analysis — Google released Gemini 3.8 Flash (Index 59 at high)](https://artificialanalysis.ai/articles/gemini-3-8-flash)
  - [Ars Technica — Gemini 3.8 Flash tops DeepSWE at lower cost](https://arstechnica.com/ai/2026/09/google-releases-gemini-3-8-flash-its-third-flash-model-in-six-weeks/)
  - [The Register — 3.8 Flash, Index 59, level with GPT-5.6 Sol/Grok 4.6](https://www.theregister.com/ai-and-ml/2026/09/02/with-gemini-38-flash-google-reminds-everyone-its-still-in-the-race/5294049)
  - [BenchLM — gemini-3.8-flash (66.2 BenchAlign, #27/216, $0.75/$3.75)](https://benchlm.ai/models/gemini-3-8-flash)
  - [BenchLeader — DeepSWE board (3.8 Flash 73.8, Astra 74.1)](https://www.benchleader.com/benchmarks/deepswe)
  - [felloai — 3.8 Flash real numbers (DeepSWE 73.7, 8-of-14 wins)](https://felloai.com/gemini-3-8-flash/)
  - [Requesty — Vertex gemini-3.8-flash (GPQA 95.3, Coding Index 76.3, SciCode 56.6)](https://www.requesty.ai/models/vertex/gemini-3.8-flash)
  - [IntuitionLabs — GPQA conflict 94.4 vs 95.5, +30% tokens/task caveat](https://intuitionlabs.ai/articles/gemini-3-8-flash-research-tasks-review)
  - [OpenRouter — google/gemini-3.8-flash](https://openrouter.ai/google/gemini-3.8-flash)
