# Gemini 3.6 Flash — findings by Qwen 3.8 Flash

- Source: Google / Gemini 3.6 Flash (`google/gemini-3.6-flash`)
- Date: 2026-10-02 (UTC); second pass 2026-11-03 (UTC) — ⚠️ CURATION-CRITICAL: Google Cloud lifecycle pins retirement to **2026-11-19 (16 days out)**, replacement gemini-3.8-flash; paid tier verified $1.50/$7.50 (Cost 92 provisional→verified); quality bands unchanged
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Google's mid-2026 Flash refresh between 3.5 and 3.7 — a 1M-context multimodal workhorse (text/image/audio/PDF in) with strong textbook knowledge (GPQA, MMLU-Pro, ARC-AGI) but a middling agentic/coding profile and a high hallucination rate.
- **Provider / access:** Google AI Studio + Gemini API (`gemini-3.6-flash`); free tier on AI Studio / OpenCode Zen with standard rate limits, plus a paid tier. Reasoning + tool calls.
- **Release / knowledge:** mid 2026 (Google blog "Gemini 3.6 Flash, 3.5 Flash-Lite, and 3.5 Flash Cyber"); knowledge cutoff not disclosed.
- **IDs:** `google/gemini-3.6-flash`.
- **Context window:** 1,048,576 (1M) total (curated meta; BenchLM confirms 1M).
- **Modalities:** text, image, audio, PDF in; text out; reasoning on; tool calls. No video in, no non-text output.
- **Pricing (as of 2026-10-02):** Free tier (AI Studio / OpenCode Zen); exact paid-tier rates not published in curated meta.
- **Architecture:** proprietary, hosted only.

### Raw benchmarks found

> Independently verified against BenchLM (25 of 618 rows; 65.15/100, #34 of 645), citing the Google Gemini 3.6 Flash blog, Artificial Analysis, Vals AI, ARC Prize and OpenRouter (fetched 2026-10-02). BenchLM flags partial coverage (conservative overall).

Agent / tool use:

- OSWorld-Verified **83.0%**; Terminal-Bench 2.1 (Vals) **73.8%** (under the 88 frontier ref)
- GDPval-AA **1423** (AA normalized 38.2%); AA Agentic Index **30.1%**

Reasoning / knowledge:

- AA-GPQA Diamond **92.8%** (Vals 93.4%); AA-HLE **40.8%** — just clears the 40% bar
- ARC-AGI-1 **91.2%** / ARC-AGI-2 **60.4%** (ARC Prize verified); AA-LCR 80.0
- Intelligence Index **34.0** (mid); CritPt 10.6%; MMLU-Pro (Vals) 89.3
- Omniscience Index 22.1 / Accuracy 50.0% / Hallucination **55.6%** — elevated guessing rate

Coding:

- LiveCodeBench (Vals) **88.1%**; SWE-bench (Vals) **79.6%**; AA Coding Index 69.2%
- AA-SciCode 53.4% (under the 55 ref); DeepSWE **49.0%** (well under the 74 ref); CursorBench 3.2 53.5%

Multimodal / long context:

- AA-MMMU-Pro **83.2%**; Design Arena Website 1307; no video/audio-specific rows published
- 1M window (AA-LCR 80.0 supportive; no ≥98% MRCR reported).

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 75/100.** OSWorld-Verified 83.0% is respectable, but Terminal-Bench 2.1 73.8% sits well under the 88 ref, GDPval-AA 1423 (normalized 38.2%) misses the 1750 frontier bar and AA Agentic Index 30.1% is low — a solid-but-not-frontier agentic tier.
- **Reasoning: 77/100.** GPQA-Diamond 92.8/93.4%, ARC-AGI-1 91.2% / ARC-AGI-2 60.4% and MMLU-Pro 89.3 are strong; but HLE 40.8% only just clears the bar, Intelligence Index 34.0 and CritPt 10.6% are mid, and a 55.6% Omniscience hallucination rate drags it down.
- **Context window: 95/100.** 1M-token window meets the ≥1M tier; AA-LCR 80.0 supportive; no ≥98% long-context retrieval metric demonstrated at 512K+, so the band floor.
- **Multimodal: 88/100.** Text+image+audio+PDF in / text out — audio input lifts it into the 90-band, and MMMU-Pro 83.2 is strong, but no video row and no non-text output keep it at/below the floor.
- **Coding: 76/100.** LiveCodeBench 88.1% and SWE-bench 79.6% (Vals) are good, but AA Coding Index 69.2%, SciCode 53.4% (under ref), DeepSWE 49.0% (far under the 74 ref) and CursorBench 53.5% hold it mid.
- **Cost efficiency: 92/100.** (Converted provisional→verified by the 2026-11-03 second pass: launched 2026-07-21 at **$1.50 per 1M input / $7.50 per 1M output** (thinking tokens included) with the AI Studio/Zen free tier — deep under the $3/$15 ≈ 60 anchor with a real free lane, supporting the 92 as written; Economize notes the standard rate formally attaches from 2027-01-01, moot once the id retires 2026-11-19.) Cost is excluded from Overall.
- **Overall Score: 82/100.** Mean of Tool 75, Reasoning 77, Context 95, Multimodal 88, Coding 76 = 82.2 → 82. Best fit: high-volume multimodal retrieval/QA and textbook reasoning at a free/low Flash price where abstention discipline matters less than breadth — for agentic coding or answer-grounded factual recall, the 3.7 Flash sibling is the cleaner pick.

---

## Second-pass update — 2026-11-03 (UTC)

Staleness-triggered re-research (prior pass 2026-10-02); three independent sources consulted.

**Sources:** ⚠️ Retirement — https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/gemini/3-6-flash (**"Important: Gemini 3.6 Flash will be retired on November 19, 2026. Upgrade to Gemini 3.8 Flash to avoid service disruptions."**) and https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/model-versions (lifecycle table: **"gemini-3.6-flash, July 21, 2026, November 19, 2026, gemini[-3.8-flash]"**; sibling row **"gemini-3.7-flash, August 13, 2026, January 28, 2027, gemini-3.8-flash"**) and https://nokiapoweruser.com/google-gemini-model-deprecation-36-37-flash-fast-mode-gemini-4-argon/ (3.6 & 3.7 deprecation coverage) · pricing — https://trilogyai.substack.com/p/gemini-36-flash-pricing-the-real (**"released Gemini 3.6 Flash on July 21 at $1.50 per million input tokens and $7.50 per million output tokens"**), https://www.eesel.ai/blog/gemini-3-6-flash-pricing (**"$1.50 per 1M input tokens and $7.50 per 1M output tokens (output includes thinking tokens)"**), https://apidog.com/blog/gemini-3-6-flash-pricing/ (same, plus caching/free-tier breakdown) and https://www.economize.cloud/blog/gemini-api-pricing/ (**"Gemini 3.8 Flash and 3.6 Flash cost $1.50 … $7.50 … from January 1, 2027"**) · family — https://medium.com/@shtse8/gemini-2-5-on-vertex-ai-retires-october-20-what-to-switch-to-and-what-it-costs-b56dd29479bd (3.8 Flash retirement **"September 2, 2027 or later"** — replacement's own horizon) and https://ai.google.dev/gemini-api/docs/deprecations (API-side schedule, fetched 2026-10-22).

**What moved and how it was resolved:**

1. **⚠️ CURATION-CRITICAL: this id retires in 16 days.** Google's own Cloud lifecycle page and model doc both pin **retirement 2026-11-19, replacement gemini-3.8-flash** (which has its own registry folder, `gemini-3.8-flash`, already second-passed in the previous batch). Unlike the gpt-5.5 (consumer-surface-only) or Opus 4.6 (2027 floor) cases in this sweep, this is a **hard full-shutdown date inside two weeks** — the highest-priority curation flag in the registry right now. Handling per house convention: keep ranked through the retirement (the scores were true while served; the folder documents a dead endpoint), let post-retirement curation decide archival/merge after 2026-11-19. No score change is warranted by a future-dated shutdown itself.
2. **Cost 92 provisional→verified.** Pass 1 had no published paid rates; four sources fix the launch/current lane at **$1.50/$7.50** (thinking tokens included) alongside the free tier — comfortably justifying the near-top placement unchanged. Economize's "standard from 2027-01-01" is moot given retirement. Cost is excluded from Overall.
3. **All scored rows stand.** OSWorld 83.0%, TB 2.1 73.8% (Vals), GDPval-AA 1423, GPQA 92.8/93.4, ARC-AGI 91.2/60.4 verified, the **55.6% hallucination** drag, and the thin 25-row BenchLM coverage cap are uncontradicted; the AA v5 rebase is batch-wide scale drift (Intelligence Index 34.0 not individually restated). Multimodal 88 (audio-in, no video rows) and Context 95 (1M, LCR 80, no MRCR proof) hold as written.
4. **Family churn documents why it dies:** Google's fast lane runs 3.5 → 3.6 → 3.7 → 3.8 in ~9 months, each superseded ~4 months after GA (3.7 Flash gets 2027-01-28; 3.8 Flash's own floor reads "September 2, 2027 or later"). The pass-1 steer toward the "3.7 Flash sibling" is now itself dated — the current sibling is 3.8.

**Scores changed by this pass:** Cost 92 provisional→verified at the same value (outside Overall). Tool 75, Reasoning 77, Context 95, Multimodal 88, Coding 76 → Overall = half-up mean(75, 77, 95, 88, 76) = 411/5 = 82.2 → **82, unchanged**.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing the Google Gemini 3.6 Flash blog, plus Artificial Analysis, Vals AI, ARC Prize and OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Second-pass signature: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-03. Method: ≥3 independent sources (Google Cloud lifecycle table + model-page retirement banner, Trilogy/eesel/apidog/Economize pricing quartet, nokiapoweruser/shtse8 family coverage); ⚠️ hard shutdown 2026-11-19 flagged as the registry's top curation item (kept ranked until it executes), Cost 92 converted provisional→verified at $1.50/$7.50, all quality rows uncontradicted — **no dimension changed and Overall remains 82**. Prior pass retained verbatim per RULES.md.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
