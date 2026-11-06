# Gemini 2.5 Pro — findings by Mercury 3

- Source: Google DeepMind (Gemini 2.5 Pro)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google DeepMind's state-of-the-art thinking model (released 2026-03-25, GA June 2025) for code, math, STEM, and long-context analysis. Deprecated: effective 2026-12-01, API requests route automatically to Gemini 3.8 Flash and bill at Flash rates.
- **Provider / access:** Google AI Studio (no longer selectable), Gemini API (`gemini-2.5-pro`, API access limited to existing users until 2026-12-01), Gemini app, Google Cloud Vertex AI, Workspace.
- **Release / knowledge:** Released 2026-03-25; knowledge cutoff 2025-01.
- **IDs:** `google/gemini-2.5-pro`.
- **Context window:** 1,048,576 input tokens; 65,536 output tokens (official API docs).
- **Modalities:** audio + images + video + text + PDF input; text output; thinking model; function calling; code execution; search grounding; structured outputs; file search; URL context; caching; batch; no image/audio generation, no Live API.
- **Pricing (as of 2025-06):** ≤200K prompt: $1.25 in / $10 out per 1M (cache $0.31); >200K: $2.50/$15 (cache $0.625); image inputs $0.005 per image; cached-context processing $4.50 per 1M/hour.
- **Architecture:** proprietary (parameters undisclosed).

### Raw benchmarks found

Agent / tool use:

- SWE-bench Verified (agentic coding): **63.2%** (DeepMind/leanware; AI Release Tracker lists 59.6% for its standard run)
- Function calling, search grounding, code execution, file search all supported (API docs)

Reasoning / knowledge:

- GPQA Diamond: **86.4%** (AI Release Tracker); GPQA 83.0% pass@1 (leanware comparison)
- AIME 2025: **83.0%** pass@1
- HLE: **17.8%** (no tools)
- Global MMLU: **88.6%**; hallucination rate low (~5%)

Coding:

- LiveCodeBench v5: **75.6%** pass@1
- Aider Polyglot: **76.5%** whole / 72.7% diff
- SWE-bench Verified: 63.2% (see above)

Long context:

- MRCR at 128K: **93.0%** (DeepMind)
- 1M input window verified via API docs; no >128K verified retrieval benchmark captured

Multimodal:

- MMMU: **79.6%** (visual reasoning)

### Normalized scores (1–100)

- **Tool use: 82/100.** Agentic SWE-bench Verified 63.2% with rich tool support (function calling, code execution, search grounding, file search); solid for its era, below the coding-agent leaders that followed.
- **Reasoning: 84/100.** GPQA Diamond 86.4%, AIME 2025 83.0%, HLE 17.8% — SoTA at launch in 2025, since surpassed by later reasoning models.
- **Context window: 94/100.** 1M verified with 93% MRCR at 128K; strong for a 2025 model but superseded by newer 1M+ flagships.
- **Multimodal: 85/100.** Audio/image/video/PDF input with text output — broad input coverage, no multimodal generation.
- **Coding: 83/100.** LiveCodeBench v5 75.6% and SWE-bench Verified 63.2%; competitive in 2025, not frontier-leading today.
- **Cost efficiency: 62/100.** $1.25/$10 (≤200K) and $2.50/$15 (>200K) with cache at $0.31/$0.625; moderate pricing for the era, no free API tier at GA.
- **Overall Score: 86/100.** Mean of the five non-cost dims (82+84+94+85+83)/5 = 85.6 → 86. Best-fit: a strong 2025-era multimodal thinking flagship that is now deprecated — evaluate only for legacy workloads; for new projects Google recommends Gemini 3.x.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-06
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google AI for Developers: gemini-2.5-pro model docs (deprecation notice)](https://ai.google.dev/gemini-api/docs/models/gemini-2.5-pro)
  - [Google DeepMind: Gemini 2.5 technical report (PDF)](https://storage.googleapis.com/deepmind-media/gemini/gemini_v2_5_report.pdf)
  - [Google DeepMind: Gemini Pro page](https://deepmind.google/technologies/gemini/pro/)
  - [Leanware: Gemini 2.5 cost & quality comparison](https://leanware.co/insights/gemini-2-5-cost-quality-comparison)
  - [Artificial Analysis: Gemini 2.5 Pro page](https://artificialanalysis.ai/models/gemini-2-5-pro)
  - [AI Release Tracker: Gemini 2.5 Pro](https://aireleasetracker.com/model/google/gemini-2.5-pro)
  - [llm-stats: Gemini 2.5 Pro](https://llm-stats.com/models/gemini-2.5-pro)
- Future sources: add a new file next to this one using the same headings.
