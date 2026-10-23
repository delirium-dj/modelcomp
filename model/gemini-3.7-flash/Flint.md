# Gemini 3.7 Flash - findings by Flint

- Source: Google DeepMind (`gemini-3.7-flash`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google's newest Flash-tier model, a refinement of Gemini 3.6 Flash (algorithmic improvements to the core reasoning foundation rather than a new pretraining run), aimed at coding and agentic workflows; accepts text, images, audio, and video across a 1M-token context window; returns up to 64K output tokens; knowledge cutoff March 2026.
- **Provider / access:** Google DeepMind / Google AI - Gemini API and Google AI Studio, Google Antigravity, Android Studio, Gemini Enterprise Agent Platform, Gemini Enterprise app; consumers via Gemini Spark on Google AI Pro and Ultra plans. API and enterprise only; no open weights.
- **Release / knowledge:** Released 2026-08-13; knowledge cutoff 2026-03.
- **IDs:** `gemini-3.7-flash`.
- **Context window:** 1M tokens; max output 64K tokens.
- **Modalities:** Text, image, audio, video in -> text out; customizable thinking configurations that trade quality against cost and latency.
- **Pricing (as of 2026-10-23):** $0.75 / 1M input, $3.75 / 1M output (intro, through 2026-12-31); from 2027-01-01 -> $1.50 / $7.50. Blended at 80/20 input-output mix: $1.35 / MTok today vs $3.60 (Claude Sonnet 5) and $4.00 (GPT-5.6 Terra).
- **Architecture:** Proprietary; no open weights.

### Raw benchmarks found

- FrontierCode 1.1 (Main): Gemini 3.7 Flash **43.6%** vs Gemini 3.6 Flash **34.4%**.
- DeepSWE v1.1: Gemini 3.7 Flash **65.3%**.
- WebDev Arena: Gemini 3.7 Flash **1588** Elo vs Gemini 3.6 Flash **1538** - top score in Google's comparison table.
- GDP.pdf: Gemini 3.7 Flash **34.0%** (up from 22.0% for Gemini 3.6 Flash).
- AutomationBench: Gemini 3.7 Flash **30.4%** - ahead of Claude Sonnet 5 (10.7%) and GPT-5.6 Terra (23.6%).
- Long-context retrieval (GDM-MRCR v2, 128k): **97.0**.
- GDPval-AA v2: Gemini 3.7 Flash **1525** Elo vs Claude Sonnet 5 **1598** and Muse Spark 1.2 **1628**.
- CharXiv Reasoning: **84.5%** without tools (regression vs Gemini 3.6 Flash 85.2%).
- Artificial Analysis Intelligence Index: Gemini 3.7 Flash **56** vs GPT-5.6 Terra **57** and Muse Spark 1.2 **57**.

Independent composite / cross-source comparison:

- BenchLM: Gemini 3.7 Flash ranks #29 of 227 at **66.93/100** (29 source-displayable rows supported).
- Cross-source coverage: MarkTechPost (DeepMind launch + benchmark table), DataCamp (launch), Reuters (launch), Arstechnica (launch), BuildFastWithAI (pricing/review).

Conflicts and resolutions:

- DeepSWE v1.1: Gemini 3.7 Flash **65.3%** vs GPT-5.6 Terra **69.6%** - both vendor-reported, different vendor evals; treated as same-harness interpretation.
- CharXiv Reasoning: Gemini 3.7 Flash **84.5%** vs Gemini 3.6 Flash **85.2%** - flagged regression by Google; independent corroboration pending.

### Normalized scores (1-100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.

> **OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. **NEVER include Cost efficiency** - scored independently.

- **Tool use: 84/100.** DeepSWE v1.1 **65.3%** and FrontierCode 1.1 **43.6%** (vs 34.4% for 3.6 Flash) measure agentic software-engineering behaviour; WebDev Arena **1588** Elo is the top score in Google's comparison table. Cap: no independent tool-use-only index for this snapshot.
- **Reasoning: 86/100.** Artificial Analysis Intelligence Index **56** (top-tier composite), GDPval-AA **1525** Elo, CharXiv Reasoning **84.5%** (slight regression vs 3.6 Flash). Cap: vendor-heavy reasoning picture; independent GPQA Diamond not located for this snapshot.
- **Context window: 92/100.** Native 1M-token context; long-context retrieval (GDM-MRCR v2, 128k) **97.0**. Cap: single long-context retrieval eval.
- **Multimodal: 85/100.** Accepts text, image, audio, video in -> text out; no independent multimodal benchmark located for this snapshot. Cap: modality support documented, independent measurement absent.
- **Coding: 83/100.** FrontierCode 1.1 **43.6%** (3.7 Flash) vs 34.4% (3.6 Flash); DeepSWE v1.1 **65.3%**; WebDev Arena **1588** Elo (top). Below GPT-5.6 Terra on DeepSWE (69.6%), ahead on WebDev Arena / AutomationBench. Cap: vendor-reported eval set.
- **Cost efficiency: 92/100.** $0.75 / $3.75 per MTok (intro, through 2026-12-31); blended $1.35 / MTok vs $3.60 (Claude Sonnet 5) and $4.00 (GPT-5.6 Terra). Paid tier, very low cost.
- **Overall Score: 86/100.** (84 + 86 + 92 + 85 + 83) / 5 = **86** (half-up mean of the five quality dims; Cost efficiency excluded).

---

## Signature

- Provided by: **Flint (google/gemini-3.7-flash)** - 2026-10-23
- Method: public-internet research (official Google DeepMind / Google AI release material, MarkTechPost, BenchLM, DataCamp, Reuters, BuildFastWithAI); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.7_Flash_Pro.md`, using the same headings.