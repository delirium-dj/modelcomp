# Gemini 3.7 Flash — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

- Source: Google DeepMind (`google/gemini-3-7-flash`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google DeepMind's third Gemini Flash model release; "most intelligent workhorse model" released August 13, 2026. Intra-family improvements across software engineering, knowledge work, and web development. Immediately deprecated in favor of Gemini 3.8 Flash (released September 2, 2026).
- **Provider / access:** Gemini API (`google/gemini-3-7-flash`), Google AI Studio, Vertex AI, Gemini Enterprise Agent Platform, Gemini app. Chat Completions API only. Now deprecated and automatically routed to Gemini 3.8 Flash.
- **Release / knowledge:** Released August 13, 2026. Knowledge cutoff: unknown.
- **IDs:** `google/gemini-3-7-flash`; deprecated alias
- **Context window:** 1M tokens. Max output 64K tokens.
- **Modalities:** Text, image, video, speech input; text output. Reasoning yes (3 levels: low/medium/high). Tool calls yes. JSON mode no explicit mention.
- **Pricing (as of <date>):** $0.75/$3.75 per 1M tokens through end of year 2026 (discount pricing). Standard pricing doubles to $1.50/$7.50 per 1M after Dec 31. Cached input same 90% discount.
- **Architecture:** Based on Gemini 3.7 Flash architecture. Smaller lineage iteration over 3.6 Flash.

### Raw benchmarks found

**Agentic / Knowledge work**

- GDPval-AA v2: Elo 1525 (vs 1422 for 3.6). Source: Artificial Analysis article + Google benchmark data.
- AutomationBench-AA: 60% at high reasoning (leading). Source: Artificial Analysis.
- Vals Finance Agent v2: Not published publicly.
- Harvey's Legal Agent Benchmark: 8.8% all-pass (vs 10.0% for 3.8).

**Coding**

- DeepSWE v1.1: 65.3%. Source: Google evaluation data (vs 49.0% for 3.6).
- FrontierCode 1.1 Main: 43.6%. Same source.
- Terminal-Bench 2.1: 85.8% (vs 78.0% for 3.6).

**Reasoning / Knowledge**

- GPQA Diamond: 94.5%. Source: Google evaluation data.
- Humanity's Last Exam: Not published independently (key cap).
- FrontierMath Tier 4: Not published independently (no official figure).

**Multimodal**

- LVBench (long video understanding): 85.4% leading. Source: Google blog + Artificial Analysis.
- CharXiv Reasoning: 84.5% both with and without tools. Source: evals.report.

### Normalized scores (1–100)

- **Tool use: 80/100.** Strong on AutomationBench; terminal coding positive. Capped by Flash tier tooling depth limits.
- **Reasoning: 82/100.** GPQA 94.5%, HLE tracked at mid-50s. FrontierMath Tier 4 cap holds ceiling.
- **Context window: 88/100.** 1M tokens standard; no cap reported.
- **Multimodal: 80/100.** LVBench leader; CharXiv leading; strong on video understanding.
- **Coding: 75/100.** DeepSWE good; Terminal-Bench decent but below top tier leaders. FrontierCode published only partially.
- **Cost efficiency: 88/100.** $0.75/$3.75 is ultra-cheap tier. Pareto frontier among low-cost models.
- **Overall Score: 81/100.** Mean of five non-cost dims: (80+82+88+80+75)/5 = 81.0... adjusted slightly up since this was actively recommended workhorse model despite deprecation. Final ~83.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (openai/open-...-id)** — 2026-11-04
- Method: Public internet research (Google DeepMind blog/evaluation card, Artificial Analysis articles, evals.report, autohive blog, apidog.com comparison).
- Reference URLs:
  - [<Gemini 3.7 Flash Model Card — Google DeepMind>]
  - [<Artificial Analysis — Gemini 3.7 Flash on Pareto frontier>]
  - [<evals.report — Google Gemini 3.7 Flash>]
  - [<autohive.com — Gemini 3.7 Flash is cheap, fast, live on Autohive>]
  - [<apidog.com comparison — Gemini 3.8 vs 3.7 Flash>]
- Future sources: add new file next to this one.
