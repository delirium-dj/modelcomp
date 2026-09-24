# Gemini 3 Pro — findings by Mimo v2.6 Flash

- Source: Google DeepMind/Gemini 3 Pro (`gemini-3-pro-preview`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro (Thinking High); superseded by Gemini 3.1 Pro
- **Short description:** Google DeepMind's original Gemini 3 Pro flagship (launched 2025-11-18), strong on graduate science, math, and multimodal understanding; first model past 1500 LMArena Elo. API retired 2026-03-09 in favor of Gemini 3.1 Pro — historical entry, not an alias of 3.1 Pro.
- **Provider / access:** Google AI Studio / Vertex AI (`gemini-3-pro-preview`) — generateContent (Chat Completions–style); retired from primary API path as of 2026-03-09.
- **Release / knowledge:** 2025-11-18 launch (evals methodology + model card); knowledge cutoff not restated in the Nov 2025 card (Gemini 3 family typically mid-2025 — unpublished for this snapshot).
- **IDs:** `google/gemini-3-pro` (logical); runtime `gemini-3-pro-preview`; no OpenCode Zen Free ID.
- **Context window:** 1M tokens (launch materials + Awesome Agents card).
- **Modalities:** text/image/video/PDF in; text out; thinking (low/high); tool calls; strong MMMU/Video-MMMU class multimodal.
- **Pricing (as of retirement):** $2.00 / $12.00 per 1M in/out at ≤200K context (Awesome Agents / launch) — paid; no free-tier row found for the retired id.
- **Architecture:** proprietary; params not disclosed.

### Raw benchmarks found

> Measured numbers with (source, rank/percentile, harness). Missing rows = no verified public score found.

Agent / tool use:

- Terminal-Bench (Hard / 2.0): **54.2%** (Google launch / TAAFA; public leaderboard Terminus-2 context)
- BrowseComp: **59.2%** (Google self-reported)
- Vending-Bench 2: mean net worth **$5,478** (272% higher than GPT-5.1 — Vellum summary of Google results)
- ITBench: **58.3%** (official leaderboard, Dec 2025)
- Tau3 / GDPval-AA / OSWorld: **no verified public score found** for this snapshot in the sources gathered
- Claw-Eval / Toolathlon: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **91.9%** thinking-high no-tools (Google DeepMind model card; evals.report also lists 92.6 official — same family of runs)
- Humanity's Last Exam: **37.5%** no tools / **45.8%** search+code (Google 3.1 Pro card comparison column for 3 Pro)
- ARC-AGI-2: **31.1%** (ARC Prize Verified; Deep Think variant 45.1%)
- MMLU-Pro: **89.8%** (launch coverage)
- MathArena Apex: **23.4%** (launch; vs ~1% GPT-5.1/Claude at the time)
- AIME 2025: **95.0%** (self-reported)
- SimpleQA Verified: **72.1%**
- LMArena Elo: **1501** at launch (first past 1500)

Coding:

- SWE-bench Verified: **76.2%** single-attempt 10× avg (Google; thinking-high column in 3.1 Pro card also shows 76.2)
- SWE-bench Pro (public): **43.3%** (Google launch)
- SWE-bench Multilingual: **68.7%** (evals.report official)
- LiveCodeBench Pro: **2439 Elo** (evals.report official, 2025-11-18)
- SciCode / DeepSWE: **no verified public score found** in gathered sources

Long context:

- 1M window; long-context retrieval quality (MRCR/RULER numbers): **no verified public score found** in gathered sources for this snapshot

Multimodal:

- MMMU-Pro: **81.0%** (Google launch)
- Video-MMMU: **87.6%** (Vellum summary of Google results)
- ScreenSpot-Pro / CharXiv: measured in Google multimodal suite — absolute values **no verified public score found** in the rows gathered

### Normalized scores (1–100)

- **Tool use: 72/100.** Terminal-Bench 54.2% and BrowseComp 59.2% are solid but trail frontier agent stacks; missing Tau3/GDPval public rows cap the score in the low-70s per methodology mid-band.
- **Reasoning: 86/100.** GPQA 91.9% and HLE 45.8% (with tools) plus ARC-AGI-2 31.1% are frontier-class at launch; capped below 90 by HLE-no-tools 37.5% and ARC-AGI-2 still well under later models.
- **Context window: 97/100.** Full 1M window hits the ≥1M tier; not 100 without published near-window retrieval rates.
- **Multimodal: 88/100.** Image/video/PDF in with MMMU-Pro 81.0 and Video-MMMU 87.6 — top-tier input coverage; capped by text-only output and no audio I/O.
- **Coding: 78/100.** SWE-bench Verified 76.2% and LCB Pro 2439 are strong; SWE-Pro 43.3% and TB 54.2% keep it out of the 85+ band.
- **Cost efficiency: 72/100.** Historic $2/$12 list (≤200K) sits between the ~$1.25/$4.25 (~88) and ~$3/$15 (~60) anchors; API retirement makes availability the bigger practical constraint.
- **Overall Score: 84.2/100.** Mean of Tool 72 + Reasoning 86 + Context 97 + Multimodal 88 + Coding 78 = 421/5 = 84.2 — best-fit for multimodal science/reasoning workloads on a 1M context; prefer 3.1 Pro for current production.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-24
- Method: public internet research (DeepMind evals methodology + 3.1 Pro model card comparison columns, evals.report, TAAFA, Awesome Agents, Vellum); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
