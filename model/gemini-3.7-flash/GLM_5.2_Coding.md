# Gemini 3.7 Flash — findings by GLM 5.2 Coding

- Source: Google (`gemini-3.7-flash`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google's "most intelligent workhorse model yet for coding and agents," released 2026-08-13 — just 3 weeks after 3.6 Flash, on developer feedback + algorithmic innovations. Big gen-jumps over 3.6: FrontierCode 1.1 Main 34.4→43.6%, DeepSWE 49.0→65.3%, GDP.pdf 22.0→34.0%, AutomationBench 17.0→30.4%, WebDev Arena 1538→1588. Introductory price = half of 3.6 Flash's cost per million tokens.
- **Provider / access:** Google Gemini API + AI Studio + Android Studio; DeepInfra (1M/1.0M context); Gemini Enterprise Agent Platform + Gemini Enterprise app; Google Antigravity agent-first IDE; consumer: Gemini Spark (24/7 personal agent, AI Pro/Ultra, 160+ countries, not EEA/UK/CH/NG).
- **Release / knowledge:** 2026-08-13 (LLM Stats); knowledge cutoff March 2026.
- **IDs:** `google/gemini-3.7-flash`; `deepinfra/gemini-3.7-flash` (1M/1M output vs Google's 65.5K — provider difference logged). Model card: deepmind.google/models/model-cards/gemini-3-7-flash.
- **Context window:** 1M in; out: 65.5K via Google, 1.0M via DeepInfra (LLM Stats provider table).
- **Modalities:** text + image in, text out; UI generation from screenshot/image/design-system reference (design-adherence parity); tool calls; improved multi-step planning discipline.
- **Pricing (as of 2026-10-09):** introductory $0.75 / $3.75 per 1M in/out ("through the end of the year"), same on Google and DeepInfra; no cached-input rate listed. Half of 3.6 Flash's launch cost per Google.
- **Architecture:** proprietary, closed weights; parameters undisclosed; updated CBRN + cyber-offense Frontier Safety safeguards; Gemini Spark consumer harness integration.

### Raw benchmarks found

> Primary: Google launch post 2026-08-13 (vendor; all deltas vs 3.6 Flash). Capability chart + performance-vs-cost chart are images — only prose-stated numbers logged. LLM Stats tables JS-gated.

Agent / tool use:

- AutomationBench (Zapier business workflows): **30.4%** vs 3.6's 17.0% — nearly doubles; context: Astra 41.4%, Fable 5.1 31.4% (comparable tier), Argon 51.3% later.
- GDP.pdf (complex document processing): **34.0%** vs 3.6's 22.0%; context: Sol 40.0%, 3.8 Flash 35.0%, Terra 29.0%.
- Tool-call discipline: "thinks more diligently, more effort into multi-step planning and tool calls; fewer retries" (qualitative).
- OSWorld / Terminal-Bench: no 3.7 Flash rows published this session.

Coding:

- FrontierCode 1.1 Main: **43.6%** vs 3.6's 34.4% — context: Astra 53.3%, Opus 5.5 54.4%, Fable 5.1 50.3% — mid-pack.
- DeepSWE v1.1: **65.3%** vs 3.6's 49.0% — context: frontier cluster 70–77.9 (Argon SOTA), GLM-5.3 66.9 same tier.
- WebDev Arena (Arena.ai, Elo): **1,588** vs 3.6's 1,538 — "more functional layouts, feature-complete apps in fewer prompts."
- Terminal-Bench / CursorBench: no verified rows this session.

Reasoning / knowledge:

- GDP.pdf 34.0% (see agent section) is the knowledge-work row.
- HLE / GPQA / AA Index: no verified 3.7 Flash rows found this session.

Multimodal:

- UI generation from screenshot/image/design system — "high design adherence and parity based on a reference input" (qualitative, no numeric).

Long context:

- 1M in verified; no MRCR/RULER row — no retrieval score found.

Ecosystem / testimonials (secondary):

- Box, Browser Use, Cartwheel, Databricks, Emergent, Harvey, Hebbia, LangChain, Nunu.ai, Open Code, Pydantic, Stanford Biology — performance-at-cost praise; Spark (Workspace tool use) upgraded to 3.7 Flash day one.

### Normalized scores (1–100)

> Derivation per `../../model-comparison.md` v4. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 82/100.** AutomationBench 30.4% matches Fable 5.1's tier at 1/13th the price; GDP.pdf 34% beats Terra; tool-call discipline gains are real but qualitative; no OSWorld/TB rows.
- **Reasoning: 74/100.** GDP.pdf 34% and knowledge-field gains implied; no HLE/GPQA/AA rows to anchor; Flash-class placement below 3.8 Flash's documented aggregate (AA 60.5-equivalent tier per Google's own follow-up).
- **Context window: 93/100.** 1M in verified; 65.5K out via Google is thin vs 128K-class peers (DeepInfra's 1M/1M alternative noted); no retrieval score.
- **Multimodal: 70/100.** Text + image in; screenshot-to-UI generation with design adherence is a distinctive verified capability; no native audio/video.
- **Coding: 84/100.** DeepSWE 65.3% +16.3 over predecessor; FrontierCode Main 43.6%; WebDev Arena 1,588; capped ~9 pts below the frontier cluster on DeepSWE and 10+ on FrontierCode.
- **Cost efficiency: 91/100.** $0.75/$3.75 intro (vs Grok 4.7 $2/$6, Sonnet 5.5 $2/$10) — elite price-performance for production agents per Google's perf-vs-cost chart and 12 named customers; docked for "introductory through end of year" caveat and no cache pricing.
- **Overall Score: 81/100.** (82 + 74 + 93 + 70 + 84) / 5 = 80.6 → 81. Best-fit: the cost-scaled production agent — high-volume coding/automation/document workflows where 3.8 Flash's extra capability or 1M output isn't needed and half-price matters; superseded on capability by 3.8 Flash (2026-09-02) but kept relevant by price.

---

## Signature

- Provided by: **GLM 5.2 Coding (zai-org/glm-5.2-coding)** — 2026-10-09
- Method: independent public internet research (Google launch post introducing-gemini-3-7-flash primary; LLM Stats page for pricing/context/cutoff/providers; cross-vendor context from OpenAI/Google/xAI/Anthropic launch tables gathered this session); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.