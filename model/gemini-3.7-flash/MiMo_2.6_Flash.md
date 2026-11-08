# Gemini 3.7 Flash — findings by MiMo 2.6 Flash

- Source: Google DeepMind (`gemini-3.7-flash`)
- Date: 2026-11-08 (UTC) — second-pass enrichment re-research (previous 2026-10-07)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass enrichment — 2026-11-08** (user-approved). Previous Signature
> 2026-10-07 (Overall 87). Fresh sources this pass: BenchLM model page
> (last updated 2026-11-07, 47 rows) + Artificial Analysis model page/leaderboards
> + LlamaIndex ParseBench + ARC Prize + Epoch AI FrontierMath.
> Changes: Tool use 74→80 (the two named missing rows are now captured —
> GDPval-AA 1525 and OSWorld 2.0 47.9 — with TB2.1 85.8 still near-frontier);
> Reasoning 89, Context window 95, Multimodal 92, Coding 87, Cost efficiency 90
> held (AA Index cross-check now exists at 39.1 — below the 60+ ref, so no rise;
> DeepSWE/FrontierCode caps unchanged), Overall 87→88.6.

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google DeepMind's "most intelligent workhorse" Flash model (GA 2026-08-13, three weeks after 3.6 Flash) for coding, agents, and web development — big gains over 3.6 Flash on DeepSWE and FrontierCode at half the original list price. Superseded on the Flash track by Gemini 3.8 Flash but still a separate, generally-available entry.
- **Provider / access:** Gemini API / AI Studio (`gemini-3.7-flash`, stable), Antigravity, Gemini Enterprise, Gemini app, Vertex AI. Chat Completions-compatible and native routes; Batch/Flex/Priority inference available.
- **Release / knowledge:** released 2026-08-13 (GA); knowledge cutoff March 2026 nominal — Google's card warns some domains only reach January 2025.
- **IDs:** `google/gemini-3.7-flash` (gateway routes) / `gemini-3.7-flash` (native).
- **Context window:** 1,048,576 input tokens (BenchLM: 1M); max output 65,536 tokens.
- **Modalities:** text, image, video, audio, PDF in (video evidenced by LVBench 85.4 on Google's card); text out; reasoning yes (thinking low/medium/high; `minimal` unsupported); tool calls yes (function calling, code execution, structured outputs, search/Maps grounding, URL context, file search, computer use preview); no native image/audio generation, no Live API.
- **Pricing (as of 2026-11-08):** **introductory** $0.75 in / $3.75 out per 1M (through 2026-12-31), cached input $0.075, batch $0.375/$1.875; from 2027-01-01 → **$1.50 / $7.50** (cache $0.15). Output price includes thinking tokens. Paid (AI Studio free quota exists — not scored).
- **Architecture:** proprietary (parameters undisclosed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.8%** (Google model card + AA leaderboard; vals.ai harness 77.5%). Terminal-Bench 3.0: **14.9%** (Google, mini-swe agent — weak on the harder generation).
- **GDPval-AA: 1525** Elo (Google DeepMind model card, via BenchLM — **fills the named missing GDPval row**; AA normalized 44.6%). Behind Sonnet 5 / Terra / Muse-class rows.
- **OSWorld 2.0: 47.9%** (Google model card, via BenchLM — **fills the named "value not captured" OSWorld row**).
- AutomationBench: **30.4%** (Google, private set; vs 3.6 Flash 17.0%). AA-AnalystAgent: **60.0%** (AA). AA Harvey LAB v1.0: **90.7%** (Google card). Agents' Last Exam: 26.3%; AA Agentic Index 36.4%; ApprenticeBench 16%; MazeBench 1% (ASCII, tools).
- Tau3-Banking / Tau2 / Claw-Eval / Toolathon: no verified public score found for 3.7 Flash (re-checked on BenchLM 2026-11-08).

Reasoning / knowledge:

- GPQA Diamond: **94.5%** (AA leaderboard) / **93.9%** (Vals) / 94.8 (Epoch Inspect harness, previous pass) — clears the 90%+ ref on all sources.
- HLE: **47.9%** no tools (AA) / HLE-Verified **53.6%** (rank 2/2 board) — clears the 40%+ ref.
- **Artificial Analysis Intelligence Index: 39.1** (AA model page, via BenchLM — **fills the named missing composite row**; on the current re-based AA scale, below the frontier class at ~50–59 but above the 20–35 mid band; the earlier 56-high-effort citation was the pre-rebase scale).
- **AA-LCR: 81.7%** (AA — fills the named "LCR-style composite" gap); CritPt: 14.3 (rank 29/118); AA-Omniscience: Index 26.5 / Accuracy 55.3 / Hallucination Rate 64.5 (AA, new).
- ARC-AGI-1: 95.50% · ARC-AGI-2: **84.6%** (high, ARC Prize). LiveBench: 78.8. MMLU-Pro: **90.1%** (Vals, new).
- FrontierMath v2: Tiers 1-3 **71.579%**, Tier 4 **36.585%** (Epoch AI leaderboard — low Tier 4 persists).

Coding:

- SWE-bench Verified: **80.8%** (vals.ai, saturated-board entry). LiveCodeBench: **88.7%** (Vals). SciCode: **59.8%** (medium, no tools; AA-SciCode 57.2).
- DeepSWE v1.1: **65.3%** (Google model card, via BenchLM; Datacurve/LLMLearner 65.0–65.5 — still well under the 74% frontier ref). FrontierCode 1.1 Main: **43.6%** (Google).
- **AA Coding Index: 76.1** (AA, via BenchLM — new; clears the 70% ref). FrontierSWE v2: 20.3 (weak). WebDev Arena: 1588 Elo. Vibe Code Bench: no verified public score found.

Multimodal:

- LVBench (long video): **85.4%** (Google card). CharXiv: **88.7% with tools / 84.5% without** (Google card).
- **AA-MMMU-Pro: 85.5%** (AA leaderboard, new) · **ParseBench: 70.37%** (LlamaIndex PDF-parsing leaderboard, Nov 6 2026 snapshot, new).
- GDP.pdf (expert PDF): 34.0 (Google, previous pass). Text/image/video/audio/PDF in, text out.

Long context:

- GDM-MRCR v2 (8-needle, 64K–128K): **97.0%** (Google card, via BenchLM — rank 1/8 on its board). **AA-LCR: 81.7%** (AA, current snapshot). Context Arena memory & persistence: 96.0 (rank 4/49, previous pass). No 512K–1M retrieval number.

### Normalized scores (1–100)

- **Tool use: 80/100.** Moved 74→80: the two named missing rows are now captured — **GDPval-AA 1525** (Google card via BenchLM, above the 900–1200 mid band though under the 1750 frontier ref) and **OSWorld 2.0 47.9%** — with TB2.1 85.8 (AA/Google) still near the ~88 frontier ref and AA-AnalystAgent 60.0 strong; still capped by TB3.0 14.9, AutomationBench 30.4, MazeBench 1%, and missing Tau3-Banking / Claw-Eval rows (2026-11-08 re-check).
- **Reasoning: 89/100.** Held: the named cap is now resolved — AA Intelligence Index **39.1** and AA-LCR **81.7** exist — but the cross-check does not clear the 60+ frontier ref (current-scale frontier class is ~50–59), CritPt 14.3 and FrontierMath T4 36.6 remain low, while GPQA 93.9–94.8 and HLE 47.9–53.6 still clear both headline refs decisively → no move in either direction.
- **Context window: 95/100.** 1M window at the ≥1M tier floor with 97.0% MRCR retrieval proven at 64–128K and AA-LCR 81.7% — solid, but no ≥98% needle test at 512K+ to justify above the floor (re-checked 2026-11-08) → unchanged.
- **Multimodal: 92/100.** Text/image/video/audio/PDF in with text out = audio-in band (90–100); fresh supporting rows AA-MMMU-Pro 85.5 and ParseBench 70.37 strengthen the sheet but change no band — no non-text output, so not a full 100 → unchanged.
- **Coding: 87/100.** Held: AA Coding Index 76.1 now clears the 70% ref and SciCode 59.8 / LiveCodeBench 88.7 / SWE-V 80.8 / TB2.1 85.8 are all strong, but the named caps are unchanged — DeepSWE **65.3%** still well under the 74% frontier ref, FrontierCode 43.6 mid-pack, FrontierSWE v2 20.3 weak → net zero.
- **Cost efficiency: 90/100.** $0.75/$3.75 introductory sits just off the ~$0.60/$2.20 ≈ 92 anchor, with $0.075 cache reads and half-price batch/flex; held at 90 because the rate doubles to $1.50/$7.50 on 2027-01-01 (53 days away at this pass) and thinking tokens bill as output → unchanged.
- **Overall Score: 88.6/100.** (80 + 89 + 95 + 92 + 87) / 5 = 443 / 5 = 88.6 — cheap 1M-context multimodal workhorse with excellent GPQA/MRCR/LiveCode numbers; weaker on hardest terminal tasks (TB3.0) and DeepSWE-class long-horizon coding.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-11-08
- Method: second-pass enrichment re-research (public internet research: BenchLM model page last updated 2026-11-07, Artificial Analysis model page and leaderboards, Google DeepMind Gemini 3.7 Flash model card rows, ARC Prize, Epoch AI FrontierMath, LlamaIndex ParseBench, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Gemini 3.7 Flash — BenchLM](https://benchlm.ai/models/gemini-3-7-flash)
  - [Gemini 3.7 Flash — Artificial Analysis](https://artificialanalysis.ai/models/gemini-3-7-flash)
  - [Google DeepMind — Gemini 3.7 Flash model card](https://deepmind.google/models/model-cards/gemini-3-7-flash/)
  - [ARC Prize — Gemini 3.7 Flash results](https://arcprize.org/results/google-gemini-3-7-flash)
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
