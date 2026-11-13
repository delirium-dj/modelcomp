# Gemini 4 Hydrogen — findings by Beam

- Source: Google (`google/gemini-4-hydrogen`, OpenRouter `google/gemini-4-hydrogen`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Hydrogen — Google's high-efficiency workhorse of the Gemini 4 family, built for high-throughput agentic workflows, coding, and multi-model routing at lower cost and latency than the Carbon/Argon flagships.
- **Short description:** A proprietary reasoning model with 1M context and multimodal input (text, image, speech, video → text), released 2026-11-12. Strong agentic/tool-use and knowledge scores, mid-tier coding, high verbosity.
- **Provider / access:** Google (Gemini API / AI Studio / Vertex); OpenRouter `google/gemini-4-hydrogen`. Chat Completions. Paid: $1.50/$7.50 per 1M (flex tier $0.75/$3.75).
- **Release / knowledge:** Released 2026-11-12; knowledge cutoff not disclosed.
- **IDs:** `google/gemini-4-hydrogen` (OpenRouter canonical); Google `gemini-4-hydrogen-20261112`. No open weights.
- **Context window:** 1,048,576 total; up to 943,718 max output (flex tier) / 65,536 (standard).
- **Modalities:** Text, image, speech, video in; text out. Reasoning (extended thinking).
- **Pricing (as of 2026-11-13):** $1.50/M in, $7.50/M out (standard); flex tier $0.75/$3.75; cache read $0.075–$0.135/M; web search $0.014/query. Cache discount ~95%.
- **Architecture:** Proprietary Google model; parameter count undisclosed; Gemini tokenizer; supports reasoning_effort (xhigh/high/medium/low), tools, tool_choice (none/auto/required/function), structured outputs, response_format, seed.

### Raw benchmarks found

> Source of record: Google DeepMind Gemini 4 Hydrogen model card + Artificial Analysis + BenchLM (partial coverage, 15 of 823 benchmarks). Scores below are vendor-reported or carried from upstream leaderboards.

Agent / tool use:
- AA AutomationBench: **76.1%** (Google-reported).
- OSWorld 2.1 Offline: **77.6%** (Google-reported).
- MKA: **53.4%** (Google-reported).
- Terminal-Bench-Science 0.1: **51.4%** (Google-reported).
- AA Briefcase (Elo): **1567** (upstream).
- AA Terminal-Bench 4.0: **53.5%** (upstream).
- GDP.pdf: **27.6%** (upstream).
- CWE-bench: **68.1%** (CWE-bench).
- Agents' Last Exam v1.1: **71.6%** (lab-reported, rubric score, not counted in rank).
- Terminal-Bench 4.1: **57.0%** (lab-reported, cheating-adjusted, Google's own harness).
- SWE-sweep: **13.5%** (lab-reported, Google's own run).

Reasoning / knowledge:
- AA Intelligence Index: **53.9%** (AA v5.0.1, 9 evals; composite).
- AA-Omniscience Index: **46.3%** (upstream).
- AA-Omniscience Accuracy: **50.5%** (independent run).
- AA-Omniscience Hallucination Rate: **8.5%** (upstream).

Coding:
- FrontierCode 2.0: **38.2%** (Cognition).
- CursorBench 4.0: **54.3%** (Cursor).

Multimodal:
- Chartography (no tools): **66.6%** (Google-reported).
- Input: text, image, speech, video.

Long context:
- 1M context; no MRCR/RULER curve published for this exact ID in accessible text.

### Normalized scores (1–100)

- **Tool use: 70/100.** Anchor OSWorld 2.1 Offline 77.6% + AA AutomationBench 76.1% + AA Terminal-Bench 4.0 53.5% + CWE-bench 68.1% → solid mid-high agentic tool use; Terminal-Bench-Science 51.4% and SWE-sweep 13.5% (lab) cap the harder-coding-agent ceiling. Evidence: Google model card + BenchLM + AA leaderboards.
- **Reasoning: 65/100.** AA Intelligence Index 53.9 + AA-Omniscience Accuracy 50.5 + Agents' Last Exam 71.6 (lab) + GDP.pdf 27.6 → mid-high knowledge/reasoning; AA-Omniscience Index 46.3 + hallucination 8.5% pull down; no GPQA Diamond / HLE / LCR / CritPt row published for this exact ID. Evidence: Google model card + AA + BenchLM.
- **Context window: 95/100.** 1,048,576 total tokens → ≥1M tier (95–100); max output up to 943,718 (flex tier) is exceptional; no MRCR/RULER retrieval curve published, so 95 rather than 100. Evidence: OpenRouter top_provider context_length.
- **Multimodal: 85/100.** Text + image + speech + video input (Chartography 66.6% no-tools); text out only. Four input modalities → high multimodal band. Evidence: Google model card + OpenRouter architecture.
- **Coding: 60/100.** FrontierCode 2.0 38.2% + CursorBench 4.0 54.3% + Terminal-Bench 4.1 57.0% (lab) + SWE-sweep 13.5% (lab) → mid coding; lab-reported Terminal-Bench 57.0% is stronger but on Google's own harness. Cap mid pending standardized SWE-bench Verified / LiveCodeBench. Evidence: BenchLM + Google model card.
- **Cost efficiency: 75/100.** Paid $1.50/$7.50 per 1M (standard) or $0.75/$3.75 (flex) → mid-priced for a 1M-context multimodal reasoning model; cache read $0.075–$0.135/M with 95% cache discount; no free tier. Evidence: OpenRouter pricing + Google pricing.
- **Overall Score: 75/100.** Mean of [Tool use 70 + Reasoning 65 + Context window 95 + Multimodal 85 + Coding 60] / 5 = 75.0. Recommendation: high-throughput multimodal agentic workhorse with exceptional 1M context and strong tool-use/OSWorld performance; downside anchors are mid-tier coding (FrontierCode 38.2%), very high verbosity (304M output tokens on the Intelligence Index), slow per-task latency (13.7 min/task, 40.55s TTFT), and no open weights; escalate to Gemini 4 Carbon/Argon for frontier coding/reasoning.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-13
- Method: fresh public web research reading Google DeepMind Gemini 4 Hydrogen model card (https://deepmind.google/models/model-cards/gemini-4-hydrogen/), Artificial Analysis model page (Intelligence Index 54, 1M context, $1.50/$7.50, released 2026-11-12), BenchLM (79.08 overall, 15 benchmarks, agentic/coding/multimodal/knowledge tables), and OpenRouter endpoints metadata (context 1,048,576; pricing tiers; modalities; supported parameters). Scores are normalized 1–100 interpretations, not vendor scores; each number carries a source line.
- Reference URLs:
  - [Google DeepMind — Gemini 4 Hydrogen model card](https://deepmind.google/models/model-cards/gemini-4-hydrogen/)
  - [Artificial Analysis — Gemini 4 Hydrogen](https://artificialanalysis.ai/models/gemini-4-hydrogen)
  - [BenchLM — Gemini 4 Hydrogen (79.08/100)](https://benchlm.ai/models/gemini-4-hydrogen)
  - [OpenRouter — Google: Gemini 4 Hydrogen (endpoints)](https://openrouter.ai/api/v1/models/google/gemini-4-hydrogen/endpoints)
- Future sources: add a new file next to this one, e.g. `Beam_Alt.md`, using the same headings.
