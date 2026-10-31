# Muse Wonder — findings by MiMo 2.6 Flash

- Source: Meta (`meta/muse-wonder-1.0`, OpenCode Zen `muse-wonder-1.0`)
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder (API id `muse-wonder-1.0`) — Meta's frontier multimodal reasoning model for personal/professional agents, long-horizon coding and computer use. **Variant flag:** the sibling `Muse Wonder Full` (`muse-wonder-full-1.0`) is a *different, stronger* model (Muse Code subscription only, no per-token price) — its numbers are never mixed into this report except where explicitly labelled.
- **Short description:** released 2026-10-12 to succeed Muse Spark 1.3; combines "Active Memory" (context carried across conversations) and "Active Focus" (stays on task through blockers), plans long work, delegates to sub-agents and recovers from errors. Not an alias of Muse Spark.
- **Provider / access:** OpenCode Zen `muse-wonder-1.0` (**paid**, Responses API at `https://opencode.ai/inference/openai/v1`); Meta Model API (OpenAI-compatible, `dev.meta.ai`); Muse Code; OpenRouter `meta/muse-wonder`. Weights are **not** open (`open_weights: false`).
- **Release / knowledge:** 2026-10-12 (Meta dev site, AA article, Zen `release_date`, HF `meta-01/muse-wonder` created 2026-10-12); knowledge cutoff **not published** (Meta's model-card PDF `research.meta.ai/static/muse-wonder-model-card` is not machine-readable through fetch).
- **IDs:** `muse-wonder-1.0` (Meta/Zen canonical `meta/muse-wonder-1.0`), OpenRouter `meta/muse-wonder`, HF `meta-01/muse-wonder` (repo exists, README 404 — no card on HF). **No Free ID exists on Zen** (price 4 / 0.20 / 20 confirmed on the live Zen model list, 2026-10-30).
- **Context window:** **1,048,576 total / 131,072 max output** — verified on the Zen model list (`limit.context: 1048576`), Meta dev pricing table ("Context 1M"), BenchLM and Artificial Analysis all agree.
- **Modalities:** **text, image (jpeg/png/gif/webp), video (mp4), PDF, audio (mp4/wav→mpeg) in; text out** — Zen modalities list + Artificial Analysis ("input: text, image, video, audio; output: text"). Reasoning yes (effort `minimal→max`); tools yes; implicit cache; structured output; JSON mode via structured outputs.
- **Pricing (as of 2026-10-30):** **$4.00 / 1M input, $0.20 cached input, $20.00 / 1M output** (Meta dev pricing table, AA, Zen) — 3.2× Muse Spark 1.3's $1.25/$4.25 and equal to Claude Opus 5.5. AA computes **$4.52 per Intelligence Index task** (2.8× Muse Spark 1.3's $1.60). Free-tier caveat: none — this is a paid route only.
- **Architecture:** proprietary (undisclosed parameters/MoE); not open weights; max reasoning effort recommended for the published numbers.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **1770 Elo** <(Artificial Analysis GDPval-AA leaderboard via BenchLM; frontier reference in `model-comparison.md` is 1750+ → 90–100)>
- AA-Briefcase (agentic knowledge work): **1659 Elo** <(AA leaderboard via BenchLM; Muse Wonder Full 1729)>
- Terminal-Bench 4.0-AA: **52.0%** <(Meta Muse Wonder model card 2026-10-12; independently confirmed by AA's own run: "Terminal-Bench 4.0 (33% to 52%)" vs Muse Spark 1.3)>
- OSWorld 2.1: **72.6%** (partial metric) / **34.3%** (binary) <(Meta card — computer-use>
- AutomationBench-AA (E2E business workflows): **39.1%** <(Meta card)> **vs 68%** <(Artificial Analysis' own run, +10 over Muse Spark 1.3's 58%) — direct conflict, harness/partial-vs-binary grading differs; both listed, neither discarded>
- JobBench: **70.5%**; Vals Finance Agent V2: **56.6%**; HealthBench Pro: **60.5%** <(Meta card)>
- Harvey LAB-AA (legal): **10.0%** <(Meta card — weak spot)>; MazeBench (ASCII, no tools): **0%** <(MazeBench public leaderboard)>
- AA Coding Agents Index (Muse Code + Wonder, max): **63** <(AA article; Muse Spark 1.3 was 54)>
- Tau2/Tau3-Bench, Terminal-Bench 2.1, Claw-Eval, MCP-Atlas, Toolathlon: **no verified public score found** (2026-10-30)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **52** (v4.3, max effort) <(AA article 2026-10-12 + Meta card both say 52)> — **conflict:** BenchLM currently reports **43.3** for the same model because it uses Index **v5** (new private-heavy suite, 2026-10-27); version change, not a re-measurement of the same tests
- HLE (AA): **50.1%** <(AA leaderboard — above the 40%+ frontier reference>
- CritPt (AA): **28.3%**; MLCR-AA: **22.2%**; AA-LCR (long-context reasoning): **80.7%** <(AA leaderboards>
- AA-Omniscience: index **25.1** / accuracy **38.0%** / hallucination rate **20.9%** <(AA — knowledge is the relative weakness; hallucination rate is among the better ones>
- STEMBench120: **2.68** <(Ulam 2026-10-28 snapshot audit via BenchLM>
- GPQA Diamond, MMLU-Pro: **no verified public score found** (2026-10-30)

Coding:

- DeepSWE 1.1: **78.8%** <(Meta card; frontier reference 74%+ → 90–100; Muse Wonder Full 79.0)>
- SWE-Marathon (ultra-long horizon): **53.1%** <(Meta card)>
- ProgramBench (from-scratch programming): **50.0%** <(Meta card>
- AA-SciCode: **60.3%** <(AA leaderboard — above the 55%+ frontier reference>
- FrontierCode 2.0: **24.3%** <(Cognition benchmark via BenchLM>
- Bug Hunt Bench: **31.7 fixes** <(public data>
- SWE-bench Verified / SWE-Pro, LiveCodeBench, Terminal-Bench 2.1, Vibe Code Bench: **no verified public score found** (2026-10-30)

Long context:

- AA-LCR: **80.7%** <(Artificial Analysis long-context-reasoning leaderboard — measured retrieval at 1M-class lengths, below the ≥98%-at-512K bar the methodology wants for a 100>
- MLCR-AA: **22.2%** <(AA — very hard long-context medical reasoning>
- MRCR / GraphWalks / RULER: **no verified public score found** (2026-10-30)

### Normalized scores (1–100)

- **Tool use: 90/100.** GDPval-AA 1770 Elo clears the 1750+ frontier anchor, TB4.0 52% (Meta and AA agree) is a 19-point jump over Muse Spark 1.3, and OSWorld 2.1 72.6 / JobBench 70.5 show real computer-use strength. Capped at 90 by Harvey LAB-AA 10.0, MazeBench 0%, the unresolved AutomationBench conflict (39.1 Meta vs 68 AA), and no Tau2/Tau3 or Claw-Eval number at all.
- **Reasoning: 88/100.** HLE 50.1% beats the 40%+ frontier reference and the AA Intelligence Index 52 (v4.3) sits just under frontier (60+), with low hallucination (Omniscience 20.9%). Held below 90 by the knowledge weakness (Omniscience index 25.1 vs Claude Opus 5.5's 46), MLCR 22.2, and the absence of GPQA Diamond/MMLU-Pro to anchor it.
- **Context window: 95/100.** Verified 1,048,576 total (Zen `limit.context`, Meta "1M", AA, BenchLM all agree) → the ≥1M tier is 95–100; AA-LCR 80.7% is good long-context retrieval but short of the ≥98%-at-512K+ evidence the methodology requires for 100.
- **Multimodal: 92/100.** Text, image, video, PDF **and audio** in (Zen modality list + AA) puts it in the "+audio in or any non-text out = 90–100" tier; capped below 95 because output is text-only and no per-modality benchmark (video/audio understanding) was published.
- **Coding: 93/100.** DeepSWE 78.8% and AA-SciCode 60.3% both clear the methodology's frontier references, with SWE-Marathon 53.1 and ProgramBench 50.0 on top; the AA Coding Agents Index of 63 is best-in-class territory (Claude Opus 5.5 = 66, Sonnet 5.5 = 68). Slightly below Muse Spark 1.3's 95 here only because SWE-bench Verified, LiveCodeBench and TB2.1 — the headline coding anchors — are absent for this model.
- **Cost efficiency: 55/100.** Paid only: $4/$20 per 1M (3.2× Muse Spark 1.3) plus high input-token use pushes AA's cost per Index task to $4.52 (2.8× Spark, above GPT-6 Astra's $3.26 and Gemini 4 Argon's $1.99) — the methodology's $3/$15 anchor is 60, so a slightly pricier model lands at 55. No $0 route exists on Zen or anywhere else as of 2026-10-30.
- **Overall Score: 91.6/100.** (90 + 88 + 95 + 92 + 93) / 5 = 91.6 — the premium all-round frontier agent choice: near-top agentic computer use, coding and 1M omni-input context, paid for with expensive tokens and mediocre world knowledge.

---

## Signature

- Provided by: **MiMo 2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-10-30
- Method: public internet research across DuckDuckGo Lite (4 queries), Meta's official dev site and model card, Artificial Analysis (article + leaderboards), BenchLM, Zen's live model list, OpenRouter and Hugging Face catalogues (2026-10-30); scores are normalized 1–100 interpretations, not official vendor scores. Conflicts compared and both sides published (AA Index 52 v4.3 vs BenchLM 43.3 v5; AutomationBench 39.1 Meta vs 68 AA); no number invented.
- Reference URLs:
  - [Meta — Muse Wonder official model page (specs, pricing, benchmark table)](https://dev.meta.ai/models/muse-wonder)
  - [Meta — Muse Wonder model card (PDF, evaluations)](https://research.meta.ai/static/muse-wonder-model-card)
  - [Artificial Analysis — Muse Wonder and Muse Wonder Full: a material jump in intelligence (2026-10-12)](https://artificialanalysis.ai/articles/muse-wonder)
  - [Artificial Analysis — Muse Wonder model page](https://artificialanalysis.ai/models/muse-wonder)
  - [BenchLM — Muse Wonder (62.78/100, #40/1004, 28 rows, 2026-10-29)](https://benchlm.ai/models/muse-wonder)
  - [OpenRouter — meta/muse-wonder benchmarks](https://openrouter.ai/meta/muse-wonder/benchmarks)
  - [Meta research blog — Introducing Muse Wonder](https://research.meta.ai/blog/introducing-muse-wonder/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
