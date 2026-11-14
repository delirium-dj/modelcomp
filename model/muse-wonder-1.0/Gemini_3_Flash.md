# Muse Wonder 1.0 — findings by Gemini 3 Flash

- Source: Meta/muse-wonder-1.0
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder 1.0
- **Short description:** Meta's frontier agent model designed for personal and professional AI agents, optimized for long-horizon planning and multi-modal tool use.
- **Provider / access:** Meta AI / OpenCode Zen (`opencode/muse-wonder-1.0`). Reasoning always on.
- **Release / knowledge:** 2026-10-12 release; Knowledge cutoff mid-2026.
- **IDs:** `opencode/muse-wonder-1.0`
- **Context window:** 1,048,576 total tokens (1M); 131,072 max output.
- **Modalities:** Text, image, video, and audio in; text out.
- **Pricing (as of 2026-10-12):** $4.00 per 1M input / $20.00 per 1M output tokens; $0.20 cached input.
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:
- OSWorld 2.1: **72.6%** (Meta model card)
- JobBench: **70.5%** (Meta model card)
- GDPval-AA: **63.5% / 1770 Elo** (Artificial Analysis)
- AA Terminal-Bench 4.0: **52.0%** (Meta model card)
- Finance Agent v2: **56.6%** (Meta model card)
- CWE-bench: **66.1%** (Collinear)

Reasoning / knowledge:
- Artificial Analysis Intelligence Index: **43.6%**
- AA-HLE: **50.1%** (Independent run)
- AA-LCR: **80.7%** (Long-context reasoning)
- STEMBench: **2.68** (Ulam.ai)
- CritPt: **28.3%**

Coding:
- DeepSWE: **78.8%** (Meta model card)
- sweMarathon: **53.1%** (Meta model card)
- AA-SciCode: **60.3%** (Artificial Analysis)
- ProgramBench: **50.0%**
- CursorBench 4.0: **50.4%**

Multimodal:
- Design Arena Website: **1367 Elo** (OpenRouter)
- GDP.pdf: **30.6%**

### Normalized scores (1–100)

- **Tool use: 88/100.** Strong across-the-board agentic performance, particularly on OSWorld 2.1 (72.6%) and JobBench (70.5%).
- **Reasoning: 89/100.** High long-context reasoning (80.7%) and competitive Intelligence Index score (43.6) for its tier.
- **Context window: 95/100.** 1M token window with verified large output capacity (128K).
- **Multimodal: 85/100.** Extensive input support for audio, video, and image; text-only output prevents a higher score.
- **Coding: 94/100.** Exceptional DeepSWE performance (78.8%) and strong SciCode results place it near the coding frontier.
- **Cost efficiency: 65/100.** Mid-range $4/$20 pricing; offers significant agentic value but trails the budget efficiency of newer Flash models.
- **Overall Score: 90.4/100.** Recommended for sophisticated multi-modal agents and long-horizon engineering tasks where planning depth is critical.

---

## Signature

- Provided by: **Gemini 3 Flash (google/gemini-3-flash-preview)** — 2026-11-14
- Method: Public internet research via BenchLM and Artificial Analysis; verified against Meta's Muse Wonder model card and Collinear CWE-bench logs.
- Reference URLs:
  - [Meta — Muse Wonder Model Card](https://research.meta.ai/static/muse-wonder-model-card)
  - [BenchLM — Muse Wonder Benchmark Profile](https://benchlm.ai/models/muse-wonder)
  - [Artificial Analysis — Muse Wonder Intelligence Index](https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index)
  - [Collinear — CWE-bench v2 Leaderboard](https://cwe-bench.com/)

- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
