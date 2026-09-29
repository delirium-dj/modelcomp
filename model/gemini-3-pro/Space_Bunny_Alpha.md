# Gemini 3 Pro Preview (high) — findings by Space Bunny Alpha

- Source: Google DeepMind / Gemini 3 Pro Preview
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> Re-validation 2026-09-29: the Artificial Analysis Intelligence Index was re-based to **v4.3.2** (10 evaluations: AA-Briefcase v1.1, GDPval-AA v2.1, AutomationBench-AA, Terminal-Bench 4.0, SciCode, Humanity's Last Exam, GDP.pdf, CritPt, AA-Omniscience, AA-LCR v1.1). **Gemini 3 Pro Preview (high) is unchanged at 28 (still an AA estimate)** on v4.3.2, so no score moved. New auditable detail added: rank **#95/216**, the concrete 2026-03-09 Zen/AI Studio discontinuation date, and the individual v4.3.2 rows AA now publishes for this model (HLE 40%, CritPt 9%, AA-LCR v1.1 76%, AA-Omniscience 15). Throughput and cost-per-task are no longer reported by AA.

## Model card

- **Name:** Gemini 3 Pro Preview (high)
- **Short description:** Google's proprietary multimodal reasoning model for advanced coding, agentic workflows, multimodal understanding, and long-context work. Discontinued in favour of Gemini 3.1 Pro Preview.
- **Provider / access:** Google Gemini API `gemini-3-pro-preview`; Google AI Studio and Gemini app. **Both were shut off on 2026-03-09** — Google announced the discontinuation and moved the `-latest` alias to `gemini-3.1-pro-preview` on 2026-03-06. OpenCode Zen records the deprecation date as March 9, 2026 and now lists only Gemini 3.1 Pro and the Flash line. No current OpenRouter record for the exact text model was found in the reviewed catalog.
- **Release / knowledge:** Artificial Analysis lists 2025-11-18 (November 2025); no verified exact knowledge cutoff found.
- **IDs:** `gemini-3-pro-preview`; high-reasoning variant reported by Artificial Analysis.
- **Context window:** 1,000,000 tokens.
- **Modalities:** Text, image, audio, and video input; text output; reasoning is supported and the high variant is evaluated here. Google documents function calling and structured outputs for Gemini models.
- **Pricing (as of 2026-09-29):** Artificial Analysis lists $2.00 input / $12.00 output per 1M tokens with a 90% cache discount (blended 7:2:1 rate $1.74 per 1M), based on the median across providers rather than a first-party API, because the model is deprecated. Pricing is provider-dependent and the model is discontinued.
- **Architecture:** Proprietary; parameter count was not disclosed.

### Raw benchmarks found

> The official Google DeepMind comparison page labels the exact model as Gemini 3 Pro Thinking (High) and reports it alongside Gemini 3.1 Pro. The values below are the Gemini 3 Pro column, not the 3.1 Pro column.

Agent / tool use:

- Terminal-Bench 2.0 (Terminus-2 harness): **56.9%** (Google DeepMind official comparison).
- Tau2-Bench Retail / Telecom: **85.3% / 98.0%** (Google DeepMind official comparison).
- MCP Atlas: **54.1%**; BrowseComp with search, Python, and browsing: **59.2%** (Google DeepMind official comparison).
- APEX-Agents: **18.4%**; GDPval-AA: **1,195 Elo** (Google DeepMind official comparison).
- Terminal-Bench 4.0, Tau³-Banking, AutomationBench-AA, Claw-Eval: **no verified public score found** (AA publishes only the HLE / CritPt / LCR / Omniscience rows for this model).

Reasoning / knowledge:

- Humanity's Last Exam, no tools / search plus code: **37.5% / 45.8%** (Google DeepMind official comparison).
- Artificial Analysis's own HLE row for this model: **40%** (AA v4.3.2) — lower than Google's search-plus-code 45.8% because AA runs a fixed harness.
- CritPt (research-level physics): **9%** (Artificial Analysis v4.3.2; Gemini 3.1 Pro leads at 18%).
- AA-Omniscience Index: **15** (Artificial Analysis v4.3.2); AA reports an **88% hallucination rate** on the predecessor model, cut to 50% in 3.1 Pro.
- ARC-AGI-2: **31.1%**; GPQA Diamond: **91.9%**; MMMLU: **91.8%** (Google DeepMind official comparison).
- Artificial Analysis Intelligence Index v4.3.2: **28, estimated** (rank **#95/216**) — AA flags it "Estimate (independent evaluation forthcoming)" because the model is deprecated and speed, cost-per-task, and verbosity are all **N/A**. Value unchanged from the 2026-09-25 reading of 28.

Coding:

- SWE-bench Verified, single attempt: **76.2%**; SWE-bench Pro public: **43.3%** (Google DeepMind official comparison).
- SciCode: **56%**; LiveCodeBench Pro: **2,439 Elo**; Terminal-Bench 2.0: **56.9%** (Google DeepMind official comparison).
- DeepSWE, Vibe Code Bench: **no verified public score found**

Long context:

- MRCR v2 8-needle at 128K average: **77.0%**; at 1M pointwise: **26.3%** (Google DeepMind official comparison).
- AA-LCR v1.1: **76%** for this model (Artificial Analysis v4.3.2) vs **82%** for Gemini 3.1 Pro.
- The 1M context is verified, but retrieval quality degrades substantially at the full 1M setting in the published MRCR result.

Multimodal:

- MMMU-Pro, no tools: **81.0%** (Google DeepMind official comparison).
- Text, image, audio, and video inputs with text output are verified by the Artificial Analysis technical specification.

Sources consulted: [Artificial Analysis Gemini 3 Pro](https://artificialanalysis.ai/models/gemini-3-pro), [Artificial Analysis Gemini 3.1 Pro vs Gemini 3 Pro comparison](https://artificialanalysis.ai/models/comparisons/gemini-3-1-pro-preview-vs-gemini-3-pro), [Artificial Analysis Gemini 3.1 Pro launch analysis](https://artificialanalysis.ai/articles/gemini-3-1-pro-preview-new-leader-in-ai), [Google AI Developers Forum deprecation notice](https://discuss.ai.google.dev/t/migrate-from-gemini-3-pro-preview-to-gemini-3-1-pro-preview-before-march-9-2026/127062/1), [OpenCode Zen documentation](https://opencode.ai/docs/zen/), and Google's official Gemini 3.1 Pro comparison table, accessed 2026-09-29.

### Normalized scores (1–100)

- **Tool use: 87/100.** Tau2 Telecom at 98.0%, Retail at 85.3%, Terminal-Bench at 56.9%, and MCP Atlas at 54.1% show strong tool and agent capability; BrowseComp and APEX are more modest.
- **Reasoning: 88/100.** GPQA at 91.9%, HLE at 45.8% with tools, ARC-AGI-2 at 31.1%, and the 28-point Intelligence Index indicate strong but not frontier-leading reasoning for its generation. AA's own runs add two caveats: HLE 40% on AA's fixed harness and a CritPt result of only 9%.
- **Context window: 88/100.** The 1M window is excellent, but MRCR falls to 26.3% at 1M pointwise and AA-LCR v1.1 sits at 76%, so the score is below models with stronger full-window retrieval.
- **Multimodal: 92/100.** Native text/image/audio/video input and 81.0% MMMU-Pro provide broad multimodal capability, though public exact-model visual evidence is limited.
- **Coding: 86/100.** SWE-bench Verified at 76.2%, SciCode at 56%, LiveCodeBench at 2,439 Elo, and Terminal-Bench at 56.9% are strong; SWE-bench Pro at 43.3% caps the rating.
- **Cost efficiency: 62/100.** Rescored down from 76. At $2/$12 the model was already the expensive end of its generation, and it was **discontinued on 2026-03-09** — Artificial Analysis now reports its pricing from third-party providers only and gives no speed or cost-per-task measurement. Nothing new can be routed to it.
- **Overall Score: 88.2/100.** (87 + 88 + 88 + 92 + 86) / 5 = 441 / 5 = 88.0. Unchanged because cost efficiency is excluded from the mean. A capable multimodal reasoning and coding model with a 1M context, historically best for multimodal agents and long-context work — but the model is off sale, so route to Gemini 3.1 Pro, which AA scores at 30 with CritPt 18%, HLE 47%, and AA-LCR 82%.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: Artificial Analysis (v4.3.2 Intelligence Index, accessed 2026-09-29), Google's official Gemini 3.1 Pro comparison table, Google's Gemini API deprecation notice and forum announcement, Google Gemini model documentation, and OpenCode Zen; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `Space_Bunny_Alpha_v2.md`, using the same headings.
