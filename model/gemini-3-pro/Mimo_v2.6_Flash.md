# Gemini 3 Pro — findings by Mimo v2.6 Flash

- Source: Google DeepMind/Gemini 3 Pro (`gemini-3-pro-preview`)
- Date: 2026-10-06 (UTC) — re-run of the 2026-09-24 research
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
- Tau3 / OSWorld: **no verified public score found** for this snapshot in the sources gathered (re-checked 2026-10-06)
- GDPval: **40.3, #5 of 11 configurations** (BenchLeader 2026-10-06 — metric form shown as rank-only in its top-5 list; Elo absolute not stated in the extract)
- Claw-Eval / Toolathlon: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **91.9%** thinking-high no-tools (Google DeepMind model card; evals.report also lists 92.6 official — same family of runs); **92.6% #25** (Epoch AI via BenchLeader 2026-10-06); AA harness 88.7% (high) / 90.8% (not-stated); Vals 91.7% (high)
- Humanity's Last Exam: **37.5%** no tools / **45.8%** search+code (Google 3.1 Pro card comparison column for 3 Pro); **37.5% #7** re-confirmed (Scale AI/CAIS via BenchLeader); AA rows 29.5% (high) / 39.7% (not-stated)
- Artificial Analysis Intelligence Index (v4.3.2 scale): **28.0 (#125) high / 22.3 (#187) low** (BenchLeader 2026-10-06 — launch-era indexes were on the pre-rescale scale; see note below)
- BenchLeader composite index: **60.7 (#99 of 750, best config)**; categories Human-preference 68 / Multimodal 66 / Reasoning 66 / Instruction-following 62 / Knowledge 57 / Coding 58 / Maths 54; Epoch Capabilities Index 152.9 (#42)
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

- 1M window; long-context retrieval quality (MRCR/RULER numbers): **no verified public score found** in gathered sources for this snapshot. AA-LCR: **76.0% (high, #135) / 74.0% (low, #154)** (Artificial Analysis via BenchLeader 2026-10-06 — first measured long-context row for 3 Pro)

Multimodal:

- MMMU-Pro: **81.0%** (Google launch — official MMMU board **#1** per BenchLeader 2026-10-06) / **80.2%** (AA, high) / **87.5%** (Vals); LMArena Text **1486 (#19)**, Creative Writing **1484 (#8)**, Vision **1305 (#15)** (BenchLeader 2026-10-06)
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

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-10-06
- Method: public internet research (DeepMind evals methodology + 3.1 Pro model card comparison columns, evals.report, TAAFA, Awesome Agents, Vellum); re-run 2026-10-06 (user-approved enrichment): BenchLeader model page (index 60.7 #99/750, GPQA 92.6 Epoch #25, HLE 37.5 #7 re-confirmed, AA v4.3.2 28.0/22.3 rows, AA-LCR 76.0/74.0 filling the long-context gap, MMMU-Pro official #1, GDPval #5, LMArena rows) — scores unchanged: (72+86+97+88+78)/5 = 84.2. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
