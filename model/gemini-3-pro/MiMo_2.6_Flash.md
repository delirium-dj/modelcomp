# Gemini 3 Pro — findings by MiMo 2.6 Flash

- Source: Google DeepMind (`gemini-3-pro` / `gemini-3-pro-preview`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro
- **Short description:** The first Gemini 3-generation flagship (released 2025-11-18 in preview) — sparse MoE trained from scratch, natively multimodal, topped LMArena (1501 Elo) and WebDev Arena (1487) at launch. Superseded by Gemini 3.1 Pro and Gemini 3.5 Pro but remains a distinct, generally-available model with its own API ID. `thinking_level` and `media_resolution` controls; Deep Think was a separate upcoming mode (not this ID).
- **Provider / access:** Gemini API / Google AI Studio (`gemini-3-pro-preview-20251117`, stable), Vertex AI, Gemini Enterprise, Gemini app, Gemini CLI, Google Antigravity. OpenAI-compatible Chat route on gateways.
- **Release / knowledge:** released 2025-11-18; knowledge cutoff January 2025.
- **IDs:** `google/gemini-3-pro` (gateway routes) / `gemini-3-pro-preview` (native).
- **Context window:** 1,048,576 tokens; max output ~65,536 (66K listed by Vals).
- **Modalities:** text, images, audio, video, PDF in; text out; reasoning yes (`thinking_level`); tool calls yes (function calling, code execution, grounding, structured outputs).
- **Pricing (as of 2026-10-07):** **$2.00 in / $12.00 out** per 1M for prompts ≤200K; **$4.00 / $18.00 above 200K** (whole-request tier); cache read $0.20, cache write $0.375; Batch API 50% off; AI Studio free tier exists (not scored). One aggregator (Shawn Hack) lists $1.25/$10 — unconfirmed as a current official rate; launch pricing scored. Paid.
- **Architecture:** proprietary sparse mixture-of-experts transformer with native multimodal support.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **54.2%** (Google; above GPT-5.1 47.6, Sonnet 4.5 42.8 at launch).
- Terminal-Bench 2.1 (AA, high): **41.7%**; Terminal-Bench 4.0 (AA): **25%** — far under the 88% frontier ref on current terminal suites.
- τ2-bench: **85.4%** (Google — strong tool-use result).
- GDPval-AA / OSWorld / Tau3 / Claw-Eval / MCP Atlas: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **91.9%** (Google, no tools — clears the 90%+ ref; 93.8 with extended reasoning).
- HLE: **37.5%** no tools / **45.8%** with search+code execution (Google); AA independent (high): **39.7%** — borderline on the 40%+ ref (cleared only with tools).
- ARC-AGI-2: **31.1%** (ARC Prize Verified; 45.1 with Deep Think — separate mode, not scored here).
- MathArena Apex: **23.4%** (SOTA at launch); AIME 2025: 95.0 no tools / 100.0 with code execution; MATH: 100%. FrontierMath: ~38% (Shawn Hack, partial). CritPt: 9.1 (AA, high).
- AA Intelligence Index: no verified public score found for this snapshot.

Coding:

- SWE-bench Verified: **76.2%** (Google, single attempt). LiveCodeBench: **86.4** (Vals); LiveCodeBench Pro: **2439 Elo** (Google, ahead of GPT-5.1 2243).
- Terminal-Bench 2.0 54.2% / TB2.1-AA 41.7% as above. WebDev Arena: **1487 Elo** (#1 at launch).
- DeepSWE / SWE-bench Pro / Vibe Code Bench / SciCode / AA Coding Index: no verified public score found.

Long context:

- MRCR v2 (8-needle): **77.0%** at 128K average; **26.3%** at 1M pointwise (vs Gemini 2.5 Pro 16.4 — competitors did not support 1M in the comparison).
- AA-LCR (AA, high): **76%**. Real 1M operation but weak retrieval at the top of the window.

### Normalized scores (1–100)

- **Tool use: 78/100.** τ2-bench 85.4% is strong and TB2.0 54.2% was launch-leading, but TB2.1 41.7% and TB4.0 25% are far under the frontier ref, and there is no GDPval/OSWorld/Tau3 row.
- **Reasoning: 88/100.** GPQA 91.9 clears the 90%+ ref outright; HLE sits at 37.5–45.8 (AA 39.7 — just under without tools); MathArena/AIME/MATH results are SOTA-class but CritPt 9.1 and the absent AA Index composite cap it at 88.
- **Context window: 95/100.** 1,048,576 tokens = ≥1M tier floor; MRCR 77% at 128K and 26.3% at 1M show the window is usable but retrieval degrades sharply — floor, no uplift.
- **Multimodal: 94/100.** Text, image, audio, video, and PDF in — audio-in band (90–100); MMMU-Pro 80.2–81, Video-MMMU 87.6, MMMU 87.5 support a top-of-band score; text-only output keeps it below 95+.
- **Coding: 84/100.** SWE-bench Verified 76.2% and LiveCodeBench 86.4/2439 Elo are strong, WebDev Arena #1 at launch; capped by weak terminal results (TB2.1 41.7, TB4.0 25) and no DeepSWE/SWE-Pro rows.
- **Cost efficiency: 74/100.** $2/$12 (≤200K) sits between the $1.25/$4.25 ≈ 88 and $3/$15 ≈ 60 anchors (~76); discounted to 74 by the 2×/1.5× >200K surcharge that applies precisely on long-context work, plus thinking tokens billed as output. ($0.20 cache reads and Batch 50% help.)
- **Overall Score: 88/100.** (78+88+95+94+84)/5 = 87.8 → 88 — the multimodal benchmark-setter of the Gemini 3 launch: perfect-band multimodal input, SOTA math, strong GPQA/SWE; terminal-agentic work and 1M retrieval are the weak flanks, and successors (3.1/3.5 Pro) have since moved the line.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research (Google blog launch post, AI/TLDR, Model Beats, MarkTechPost, GrowthJockey, Vals.ai, Benchable, Shawn Hack); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.

---

## Merged duplicate - Mimo_v2.6_Flash.md (same rater, spelling variant, merged 2026-10-09)

> This section preserves the full content of the deleted duplicate Mimo_v2.6_Flash.md (same Xiaomi MiMo 2.6 Flash rater; variant spelling _v2.6 vs _2.6 plus case). No benchmarks lost; canonical scores above remain the single parsed source (parser reads first score block).

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

