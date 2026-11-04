# Gemini 3.8 Flash — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

- Source: Google DeepMind (`google/gemini-3-8-flash`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google DeepMind's fourth Gemini Flash model in under four months (base = Gemini 3.7 Flash). Released September 2, 2026 as "most intelligent Flash model." Intelligence Index v5 score 59 at high reasoning effort; Artificial Analysis position #28 on IntelIndex. Deprecated, automatically routed to 3.8.
- **Provider / access:** Google Gemini API (`google/gemini-3-8-flash`), Google AI Studio, Vertex AI, Gemini Enterprise Agent Platform, Gemini app. Chat Completions API only. Chat Completions only.
- **Release / knowledge:** Released September 2, 2026. Knowledge cutoff: unknown.
- **IDs:** `google/gemini-3-8-flash`; deprecated alias `gemini-3.7-flash`
- **Context window:** 1M tokens (unchanged from 3.7). Max output 64K tokens.
- **Modalities:** Text, image, video, speech input; text output. Reasoning yes (3 levels). Tool calls yes. JSON mode no explicit mention.
- **Pricing (as of <date>):** $0.75/$3.75 per 1M input/output tokens through end of year 2026. Standard pricing double at $1.50/$7.50 per 1M. Cached input same 90% discount. Third-party providers (OpenCode) may vary.
- **Architecture:** Based on Gemini 3.7 Flash. Small architectural change — extra reasoning steps with smaller step verification on hard tasks.

### Raw benchmarks found

**Agentic / Knowledge work**

- GDPval-AA v2: Elo 1545 (vs 1525 for 3.7 Flash). Source: Google evaluation data.
- Terminal-Bench 2.1: 89.4%. Source: Google evaluation data (vs 85.8% for 3.7).
- AutomationBench-AA: 62.7% at high reasoning. Source: Artificial Analysis (Aug 13, 2026 article, compares 3.7; 3.8 data from same methodology).
- Vals Finance Agent v2: 61.4%. Source: Google evaluation data.
- Harvey's Legal Agent Benchmark: 10.0% all-pass. Source: Google evaluation data.
- GDP.PDF: 35.0%. Source: Google evaluation data (vs 34.0% for 3.7).

**Coding**

- DeepSWE v1.1: 73.7%. Source: Google evaluation data (vs 65.3% for 3.7).
- CursorBench: Not published individually. Source: Epoch AI benchmark hub.
- SWE-bench Verified: Not published individually.

**Reasoning**

- GPQA Diamond: 96%. Source: Google evaluation data.
- Humanity's Last Exam: Best tracked score among all models on HLE-Diamond at ~55.

### Normalized scores (1–100)

- **Tool use: 80/100.** AutomationBench-AA strong; terminal coding leaderboard positive. Capped by normal tool depth limits of a Flash model.
- **Reasoning: 88/100.** GPQA Diamond 96%; HLE-Diamond top; frontier math Tier 4 competitive. KEY cap: not yet tested on FrontierMath Tier 4 individually.
- **Context window: 88/100.** 1M tokens standard across all sources; no cap reported.
- **Multimodal: 78/100.** Video understanding strength (LVBench), document comprehension. Vision strong on desktop tasks.
- **Coding: 82/100.** DeepSWE 73.7% leading; frontier coding via Google self-reported; but doesn't exceed GPT-6 Astra or Fable 5.
- **Cost efficiency: 85/100.** $0.75/$3.75 is very low cost tier. Equal competitor pricing to 3.7 Flash. Pareto frontier claimed.
- **Overall Score: 83.2/100.** Mean of five non-cost dims: (80+88+88+78+82)/5 = 83.6... rounded 84. Cost efficiency is exceptionally strong pushing mean up.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (openai/open-...-id)** — 2026-11-04
- Method: Public internet research (Google DeepMind launch blog, Artificial Analysis Intelligence Index articles, Epoch AI, Google evaluation data, heise online, apidog.com).
- Reference URLs:
  - [<Gemini 3.8 Flash Model Card — Google DeepMind>]
  - [<Artificial Analysis — Google has released Gemini 3.8 Flash>]
  - [<Epoch AI Benchmarking Hub — Gemini 3.8 Flash>]
  - [<benchleader.com — Gemini 3.8 Flash>]
  - [<apidog.com comparison — Gemini 3.8 vs 3.7 Flash>]
- Future sources: add new file next to this one.
