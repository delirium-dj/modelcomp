# Gemini 3.8 Flash — findings by Qwen 3.8 Flash

- Source: Google / Gemini 3.8 Flash (`google/gemini-3.8-flash`)
- Date: 2026-10-02 (UTC) — **deep second pass 2026-10-09 (UTC)**; DeepMind card rows, Artificial Analysis, BenchLM composite, Vals and press coverage re-checked
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google's latest 3.8-tier Flash model, optimizing speed/efficiency with frontier reasoning-lite and native audio+vision input. Sibling of Gemini 3.8 Flash Cyber; not the Live/TTS speech variants (those route to `models_voice/`).
- **Provider / access:** Google AI Studio / Vertex AI Gemini API (`gemini-3.8-flash`) and OpenCode Zen. Free tier available (rate-limited) plus paid tier. Generate-content (Chat) endpoint with tool calls.
- **Release / knowledge:** 2026 (Gemini 3.8 family); knowledge cutoff not disclosed in the model card index.
- **IDs:** `google/gemini-3.8-flash`.
- **Context window:** 1,048,576 (1M) input (curated meta / DeepMind card / AA / BenchLM all agree) — **second pass adds the output ceiling: up to 64,000–65,536 output tokens** depending on the write-up, which sits exactly on this methodology's sub-64 K caveat line: long-context *reading* is strong, single-call *emission* is not. Three effort variants are served (**High / Medium / Low**), plus a non-reasoning path; AA's first-party-API numbers are for **High**.
- **Modalities:** text, image, audio, PDF (and video) in; text out; reasoning on; tool calls; JSON mode. **Confirmed independently 2026-10-09:** Artificial Analysis records "Supports: **text, image, speech, and video**" input, output text only. No non-text output (the TTS / Live / Transcribe siblings are separate models and route to `models_voice/`).
- **Pricing (verified 2026-10-09):** **$0.75 per 1M input / $3.75 per 1M output**, unchanged from 3.7 Flash, with a **90% cache discount** (AA blended $0.6). Artificial Analysis measures **$1.24 per Intelligence-Index task for High (#62 of 226)** and **$0.93 for Medium — the lowest-cost variant of the three** (prices vary ~1.3× across effort tiers). Free tier on AI Studio / Zen (rate-limited). Cost excluded from Overall.
- **Architecture:** proprietary, hosted only.

### Raw benchmarks found

> Independently verified against BenchLM rows citing the Google DeepMind Gemini 3.8 Flash model card, Artificial Analysis, Vals AI, ARC Prize and Cursor/DeepSWE leaderboards (fetched 2026-10-02).

Agent / tool use:

- Terminal-Bench 2.1: **89.4%** (DeepMind; AA 87.6%, Vals 81.3%) — but Terminal-Bench 4.0 **19.1%** (AA 19.7%)
- GDPval-AA: **1545** Elo (DeepMind; AA-normalized 45.6%)
- OSWorld 2.0: **59.0%** (DeepMind)
- AA Tau3 Banking: **44.9%**; AA AutomationBench 59.9%; AA ITBench 52.5%
- AA Agentic Index: **41.1%**; AA Briefcase 1202 Elo; Finance Agent v2 61.4%
- Claw-Eval / Toolathon / MCP-Atlas: no verified public score found for this exact ID

Reasoning / knowledge:

- AA-GPQA Diamond: **95.3%** (Vals 94.4%); MMLU-Pro (Vals) 90.2%
- HLE-Verified: **54.9%** (DeepMind); AA-HLE 47.8%
- ARC-AGI-1 / ARC-AGI-2 / ARC-AGI-3: **98.5% / 89.2% / 10.4%** (ARC Prize verified)
- AA-LCR: **81.3%**; MLCR-AA 21.7%
- CritPt: **18.3%**; Artificial Analysis Intelligence Index **40.9**
- Omniscience Accuracy / Hallucination Rate: **54.6% / 55.2%** (Artificial Analysis)

Coding:

- LiveCodeBench (Vals): **89.5%**; SWE-bench (Vals) **80.0%**
- DeepSWE: **73.8%** (DeepSWE v1.1 leaderboard)
- AA-SciCode: **56.6%**; AA Coding Index **76.3%**
- CursorBench 3.2: 69.2% (CursorBench 4.0: 39.6%); FrontierSWE v2: 19.6%

Long context / multimodal:

- LVBench: **87.1%**; CharXiv (no tools) 86.2%; AA-MMMU-Pro 85.6% (1M window; AA-LCR 81.3, but no ≥98% MRCR at 512K+).

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 85/100.** Terminal-Bench 2.1 89.4% is frontier-tier, but GDPval-AA 1545, AA Agentic Index 41.1, OSWorld 59.0% and Tau3 44.9% sit mid-band and TB 4.0 collapses to 19.1% — strong executor, lighter planner.
- **Reasoning: 88/100.** GPQA Diamond 95.3%, ARC-AGI-1 98.5% / ARC-AGI-2 89.2% and HLE-Verified 54.9% are elite; capped by a low Intelligence Index (40.9), MLCR 21.7%, CritPt 18.3% and weak Omniscience accuracy (54.6% / 55.2% hallucination).
- **Context window: 96/100.** 1M-token window meets the ≥1M tier, but long-context retrieval evidence is moderate (AA-LCR 81.3%, no ≥98% MRCR at 512K+), so short of 100.
- **Multimodal: 90/100.** Native audio + image + PDF (and long-video LVBench 87.1%) input with text out — the +audio-in band (90–100); held at the floor of that band because there is no non-text output.
- **Coding: 88/100.** LiveCodeBench 89.5%, SWE-bench 80.0%, AA Coding Index 76.3% and DeepSWE 73.8% clear most frontier refs; dragged by FrontierSWE v2 19.6%, CursorBench 4.0 39.6% and borderline DeepSWE/SciCode.
- **Cost efficiency: 92/100.** *(re-scored 2026-10-09 from 88, which had been scored on "low-cost Flash pricing" without a verified rate.)* The list is now confirmed at **$0.75/$3.75 with a 90% cache discount** — in this registry's bands a ~$1 blended price sits at 93–99 alongside the cheapest tiers — and AA ranks its **$1.24 per Index task #62 of 226**, on the **Intelligence-vs-cost Pareto frontier**, with **Medium at $0.93/task**; the rate-limited free tier remains a real second option. Held below 95 by the measured behaviour rather than the price list: **170 M Index tokens (#96/226, median 81 M)** and press coverage that the *flat* token price hides a **~40% increase in real-world cost per task vs 3.7 Flash**, because the new tier thinks longer. Cost is excluded from Overall.
- **Overall Score: 89/100.** Mean of Tool 85, Reasoning 88, Context 96, Multimodal 90, Coding 88 = 89.4 → 89. Best fit: high-throughput multimodal (incl. audio) coding/agent pick where latency and cost matter; escalate to a flagship Opus/Muse-class model for deep long-horizon planning.

---

## Second-pass update — 2026-10-09 (UTC)

**Sources consulted:** Google DeepMind model card — https://deepmind.google/models/model-cards/gemini-3-8-flash/ (release **September 2, 2026**) · Google Gemini API model list — https://ai.google.dev/gemini-api/docs/models · Artificial Analysis release comparison — https://artificialanalysis.ai/models/releases/gemini-3-8-flash and https://artificialanalysis.ai/models/gemini-3-8-flash/providers · BenchLM — https://benchlm.ai/models/gemini-3-8-flash (**Overall 72.88/100, #12 of 889**, 49 of 625 tracks, "partial coverage … so the overall score is conservative", updated October 9, 2026) · Vals AI — https://www.vals.ai/models/google_gemini-3.8-flash · ARC Prize — https://arcprize.org/results/google-gemini-3-8-flash · DeepSWE v1.1 leaderboard — https://deepswe.datacurve.ai/ · Cursor, NeoCognition, Bug Hunt, FrontiersWE and OpenRouter rows as attributed on the BenchLM page · third-party write-ups — https://emergent.sh/learn/gemini-3-8-flash-benchmarks, https://www.tryfriday.ai/blog/gemini-3-8-flash-benchmarks-pricing-cyber, https://www.listify.cool/en/blog/gemini-3-8-flash-guide, https://www.tmtpost.com/8126452.html

**Conflicts found and how they were resolved:**

1. **"AA Index 59" vs 41.** Launch-week coverage (LinkedIn pulse, emergent.sh) reports **59 on the Artificial Analysis Intelligence Index at high effort**; AA's live pages today state **High = 41 (#50 of 226, class median 26), Medium = 40, Low = 33** under **Index v4.3.2**, and BenchLM's AA-attributed row still reads **40.9%**. Scored on the live figure (41/40.9) and the 59 recorded as index-version drift — my first pass had it right, and the Reasoning cap that follows is unchanged.
2. **GDP.pdf 35.0% (Google's card) vs 21.0% (AA-run).** Different harness/version and Google's table is self-computed (emergent.sh: "every Gemini score in Google's comparison is self-computed by Google, and competitor scores are the competitors' own reported numbers"). Reported both; professional-document weakness is the conclusion either way.
3. **Terminal-Bench 2.1: 89.4 (DeepMind) / 87.6 (AA) / 81.3 (Vals)** and **Terminal-Bench 4.0: 19.1 (DeepMind) / 19.7 (AA)** — the three-way 2.1 spread is harness/prompting, the 4.0 collapse is consistent across all sources, which is what caps Tool use at 85.
4. **DeepSWE 73.7 (Google's card) vs 73.8 (DeepSWE v1.1 leaderboard)** — same measurement, rounding; still just under this registry's 74+ frontier coding anchor.
5. **LVBench 87.8 (card) vs 87.1 (BenchLM's card-attributed row)** — immaterial; both support the multimodal band.
6. **Cost per task: $1.24 (AA, High) vs $0.93 (AA, Medium) vs "$0.58 for high" (launch-week Chinese coverage)** — again an older index version's task basket; scored on today's AA figures with the discrepancy noted.

**New rows this pass (absent from the 2026-10-02 report):** BenchLM composite **72.88, #12/889** · **AA-Briefcase 1203 Elo** · **GDPval-AA normalized 46.8%** · **ApprenticeBench 24%** (GUI job readiness; the only model in this batch above Muse Spark 1.3's 19) · **Bug Hunt Bench 18.0 fixes** · **LABBench2 86.2%** · **BioMysteryBench 88.8% (human-solvable) / 56.5% (human-difficult)** · **Harvey Legal Agent 10.0%** (Google's own table, all-or-nothing scoring) · **AA-Omniscience Index +29.6** (positive reliability index — better than most flagships) · **Gray Swan IPI 5.5%** (prompt-injection resistance, *from a rival's launch chart* — treat as an unverified red flag: it is dramatically worse than Opus 5.5's 15.9% and Muse Spark 1.3's 15.9–19 band, and Anthropic states its own models are "more resistant than Opus 5 to prompt injection") · **Design Arena Website 1307 Elo** · AA speed **120.2 tok/s (#34/226)**, latency 27.18 s first token for High · non-reasoning variant exists · sibling **Gemini 3.8 Flash Cyber** (separate folder) posts **CWE-Bench patching 47.2% pass@1**.

**Structural correction to the model card:** the output ceiling (**64,000–65,536 tokens**) is now recorded — the first pass listed only the 1M input window. Verified **speech + video input** by Artificial Analysis upgrades the modality claim from inference to measurement, but does not change the Multimodal score, which was already sitting on the audio-in band's floor for want of non-text output.

**Scores changed by this pass:** **Cost efficiency 88 → 92** (verified $0.75/$3.75 + 90% cache + $1.24/task Pareto read, tempered by 170 M verbosity and the ~40% real-world cost increase vs 3.7 Flash). **Tool use 85, Reasoning 88, Context 96, Multimodal 90 and Coding 88 re-confirmed unchanged** — every new row either corroborates them (ApprenticeBench 24, GDP.pdf 21, TB 4.0 19.7, Bug Hunt 18.0, DeepSWE 73.8 just under the 74 anchor, Index 41 not 59) or is too weakly attributed to move a band (rival-sourced IPI chart). **Overall therefore stays 89/100** (85 + 88 + 96 + 90 + 88 = 447 / 5 = 89.4 → 89, Cost excluded).

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing the Google DeepMind model card, plus Artificial Analysis, Vals AI, ARC Prize, Cursor and DeepSWE leaderboards); scores are normalized 1–100 interpretations, not official vendor scores.
- Second-pass signature: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-09. Method: DeepMind model card + Artificial Analysis live pages + BenchLM (Oct 9 snapshot) + Vals/ARC/DeepSWE/Cursor leaderboards + four independent write-ups; ≥3 independent sources, conflicts compared rather than averaged. Only **Cost efficiency** changed (88 → 92) because only the economics evidence changed (verified rate card, cache discount, AA per-task cost and Pareto position, plus the verbosity caveat); the widely-circulated "AA Index 59" is refuted by AA's own current pages (41/40.9) so Reasoning holds at 88. Original 2026-10-02 findings retained verbatim above per `RULES.md`.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
