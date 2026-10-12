# Gemini 3.5 Flash — findings by GLM 5.3 Flash

- Source: Google (`gemini-3.5-flash`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash (Google's I/O 2026 Flash-tier flagship for agentic/coding work; superseded by Gemini 3.6 Flash on 2026-07-21)
- **Short description:** The first Flash-tier Gemini to outperform a previous Pro tier (Gemini 3.1 Pro) on Google's published coding and agentic benchmarks — Terminal-Bench 2.1, MCP Atlas and Finance Agent v2 — while running roughly 4× faster. The 2026-10-11 second pass fills the reasoning gaps (GPQA 92.2–92.7%, HLE 40.2%, ARC-AGI-1 92.5% verified) but the AA Index recomposed to 50.2 and MRCR at 1M measures just 26.6%. Now the previous-generation option below 3.6/3.7/3.8.
- **Provider / access:** Google — Gemini API / Vertex AI ID `gemini-3.5-flash`; also AI Studio, Gemini app, Search AI Mode, Antigravity IDE, OpenRouter (`google/gemini-3.5-flash`), selectable in Cursor. `generateContent` API.
- **Release / knowledge:** announced at Google I/O 2026, GA 2026-05-19; native browser/mobile/desktop computer-use agents added 2026-06-24. Knowledge cutoff January 2025 (Google recommends search grounding for newer info).
- **IDs:** `gemini-3.5-flash` (Google API / Vertex / OpenRouter). Free tier available with usage limits.
- **Context window:** 1,000,000-token input (BenchLM concurs), ~64K max output (ai-tldr spec block).
- **Modalities:** text, image, audio, video, PDF/document input; text out. Reasoning depth via `thinking_level` (minimal/low/medium/high; medium default) with dynamic compute allocation and thought preservation; native function calling, structured output, code execution, search grounding.
- **Pricing (as of 2026-10-11):** $1.50 in / $9.00 out per 1M on the paid tier (output price includes thinking tokens), cached input $0.15/1M, context-cache storage $1.00/1M/hr; free tier with usage limits.
- **Architecture:** proprietary, parameters undisclosed; multimodal Gemini built on the 3 Flash line. Artificial Analysis measured ~280+ tok/s output (~70% faster than Gemini 3 Flash).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (Terminus-2 harness): **76.2%** (Google launch screenshots via benchlm.ai — corroborated; vs Gemini 3 Flash 58%, Gemini 3.1 Pro 70.3%); Vals independent: **74.2%**
- τ²-bench: **95.3%** (AA, independent — strong orchestration evidence)
- MCP Atlas: **83.6%** (Google launch row — quantifies the prior "ahead of 3.1 Pro" claim)
- OSWorld-Verified: **78.4%** (Google launch row); Toolathlon: **56.5%** (weak)
- Finance Agent v2: **57.9%** (Vals, independent — quantifies the prior "ahead of 3.1 Pro" claim)
- GDPval-AA: **1345** (Google launch row; AA-normalized **42.2%** — well below frontier)
- AA Agentic Index: **27.3%**; AA EnterpriseOps-Gym: **50.1%**; APEX-Agents-AA: **47.1%** (AA); Gert Labs: **61.85%**; ResearchClawBench: **18.0%**
- Computer use: native browser/mobile/desktop agents added 2026-06-24

Reasoning / knowledge:

- GPQA Diamond: **92.2%** (AA, independent) / **92.7%** (Vals) — fills the gap the 2026-10-05 pass marked missing
- HLE: **40.2%** (Google launch row); AA-HLE: **42.7%** (AA) — fills the gap
- ARC-AGI-1: **92.5%** (ARC Prize verified, Gemini 3.5 Flash High); ARC-AGI-2: **72.1%** (Google launch row)
- FrontierMath v2: **39.0%** Tiers 1–3 / **14.6%** Tier 4 (Epoch AI — weak)
- Artificial Analysis Intelligence Index: **50.2** (AA current board, 2026-10-10 via benchlm.ai) — **conflicts with the "55 (high thinking), ~5th overall" reading the 2026-10-05 pass cited**; board recomposition accounts for the difference
- AA-LCR v1.1: **69.3%**; CritPt: **13.1%** (AA — both mid/weak)
- AA-Omniscience: **51.9% accuracy / 60.7% non-hallucination row / 21.2 index** (AA)
- MMLU-Pro: **89.5%** (Vals); IFBench: **76.3%** (AA)

Coding:

- SWE-bench Pro (Public, single attempt): **55.1%** (Google launch row — corroborates; vs Gemini 3.1 Pro 54.2%, Claude Opus 4.7 64.3%)
- SWE-bench (Vals): **78.8%**; LiveCodeBench (Vals): **87.6%**; Vibe Code Bench v1.1: **48.68%** (Vals — fills gaps)
- AA Coding Index: **70.1%**; AA-SciCode: **53.9%** / SciCode: **53.1%** (AA)
- CursorBench 3.1: **49.8%**; CursorBench 3.2: **48.8%** (Cursor)
- SWE-bench Verified: no verified public score found

Long context:

- Window: **1M tokens** in / ~64K out
- MRCR v2: **77.3%** at 128K average — but **MRCR at 1M: 26.6%** (Google launch row — very weak at full window)
- AA-LCR v1.1: **69.3%** (AA — mid)

Multimodal:

- MMMU-Pro: **83.6%** (Google) / **84.3%** (AA); CharXiv: **84.2%**; Blueprint-Bench 2: **33.6%**; Design Arena Website: **1271** (OpenRouter)

### Normalized scores (1–100)

- **Tool use: 90/100.** The independent rows corroborate the elite-Flash story: τ²-bench 95.3%, MCP Atlas 83.6%, OSWorld-Verified 78.4%, TB2.1 76.2/74.2; GDPval 1345 and AA Agentic Index 27.3% keep it under 95.
- **Reasoning: 85/100.** (Was 87 on the prior pass.) GPQA 92.2–92.7% and HLE 40.2–42.7% fill the gaps positively, but AA's current Index of 50.2 (down from the cited 55 on the recomposed board), CritPt 13.1%, FrontierMath T4 14.6% and AA-LCR 69.3% net the score down a couple of points.
- **Context window: 93/100.** (Was 97 on the prior pass.) 1M input stays top-tier, but measured retrieval now exists and it is weak at the full window: MRCR at 1M reads 26.6% (vs 77.3% at 128K) and AA-LCR 69.3% — the 1M claim no longer earns the 95+ dock-free tier.
- **Multimodal: 88/100.** Full omni-input set (text/image/audio/video/PDF) now backed by measured vision (MMMU-Pro 83.6/84.3, CharXiv 84.2); text-only output.
- **Coding: 86/100.** Vals LiveCodeBench 87.6% and SWE-bench 78.8% corroborate, SWE-Pro 55.1% stands as published, Vibe Code Bench 48.68% adds a mid independent row — the score holds.
- **Cost efficiency: 78/100.** Free tier exists, but the paid rate ($1.50/$9.00 with thinking tokens billed as output) is well above open-weights paid tier pricing (e.g. GLM-5.1 $1.40/$4.40).
- **Overall Score: 88.4/100.** (Was 89.6 on the prior pass.) Mean of the five quality dims per `RULES.md` (Cost excluded): (90 + 85 + 93 + 88 + 86) / 5 = 442/5 = 88.4 — lowered on the 2026-10-11 second pass as the recomposed AA board and the weak at-1M MRCR reading correct the two scores that leaned on launch-week framing. Best fit: still a fast, well-corroborated agent/coding workhorse with a free tier — but check 3.6/3.7/3.8 first since this is now last-gen and its full-window retrieval is measurably weak.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-11
- Method: public internet research, second pass 2026-10-11 (≥3 independent sources: benchlm.ai updated 2026-10-10 citing Google DeepMind launch screenshots, Vals AI leaderboards, Artificial Analysis model benchmarks + ARC Prize/Epoch AI rows via benchlm.ai, plus the prior 2026-09-18/10-05 passes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
