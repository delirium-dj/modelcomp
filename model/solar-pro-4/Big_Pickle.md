# Solar Pro 4 — findings by Big Pickle

- Source: Upstage AI (`upstageai/solar-pro-4`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Pro 4 (SP4)
- **Short description:** Upstage AI's closed, proprietary flagship reasoning/agentic model (released Aug 2026), optimized for finishable multi-step work: long documents, terminal tasks, multi-turn tool use, and enterprise workflows. Top use case: reliable long-context agentic and document work at a fraction of closed-frontier cost.
- **Provider / access:** Upstage first-party API `solar-pro4` (OpenAI-compatible); OpenRouter (1 provider); also SolarChat, Hermes Agent (Nous Research), Upstage Studio. Proprietary weights; no Zen Free ID.
- **Release / knowledge:** Released 2026-08-10/11 (llm-stats cites Aug 6; vendor PR cites Aug 11). Reasoning effort adjustable (high / low), on by default.
- **IDs:** `upstageai/solar-pro-4` (OpenRouter `upstage/solar-pro4`).
- **Context window:** ~512–524K tokens (OpenRouter listing 524K); max output 128–256K depending on source — flag: vendor/OpenRouter docs disagree (AA article says 384K/256K).
- **Modalities:** text in/out only (no image/audio/video).
- **Pricing (as of 2026-09-23):** $0.30 in / $1.20 out / $0.06 cached in per 1M; 90%-off launch promo ran through 2026-09-10 (23:59 UTC) on Upstage Console and OpenRouter; EN/KO/JA.
- **Architecture:** proprietary, undisclosed. East Asia–focused sovereign model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **57.3%** (Artificial Analysis–observed, Sep 2026; vendor table 57.0 vs Solar Open 2's 43.2)
- τ³-Banking: **23.0%** (vendor-cited; Solar Open 2 18.1)
- GDPval-AA v2: **Elo 1277** (AA article; up from 498 for Solar Pro 3, above the 1000 human baseline)
- BrowseComp*: **49.2%** (*Upstage in-house harness)
- AA-Omniscience: net **−1** (abstains on 59% of questions; hallucination rate 24%; accuracy 19%)

Reasoning / knowledge:

- GPQA Diamond: **89.1%** (Artificial Analysis–observed / Epoch AI)
- Humanity's Last Exam: **29.2%** (Artificial Analysis–observed)
- Artificial Analysis Intelligence Index: **42** (Upstage-cited AA score, launch) vs **28.1** (AA tracking row, reasoning-on, Sep 2026) — cite the config when quoting
- CritPt: **5.4** (BenchLeader)
- MMLU-Pro*: **86.3%**; AIME 2026*: **95.3%** (*in-house rows per allthemodels aggregation)

Coding:

- SWE-bench Verified (OpenHands harness)*: **70.6%** (*Upstage in-house)
- LiveCodeBench*: **87.8%** (*in-house)
- SciCode: **44.6%** (Artificial Analysis–observed; −18.5 vs Claude Fable 5.1)
- Terminal-Bench 2.1: **57.3%** (above)

Long context:

- **AA-LCR: 71.0%** (vendor-cited; BenchLeader records 74.0% — a direct long-context retrieval-level score); window ~512–524K.

### Normalized scores (1–100)

- **Tool use: 68/100.** TB2.1 57.3%, MCP Atlas 61.4%, GDPval-AA Elo 1277 (above human baseline); APEX-Agents **18.7%** is a notable hard-cut — a large jump from Solar Pro 3 but still mid-tier vs the agentic frontier.
- **Reasoning: 70/100.** GPQA 89.1% is strong; HLE 29.2% and CritPt 5.4 are modest, and the AA Index sits at 28.1 (AA tracking row; the "42" was the Upstage-cited launch config).
- **Context window: 90/100.** ~512–524K window with a direct long-context retrieval score (AA-LCR 71.0–74%) — right at the top of the 500K–1M band.
- **Multimodal: 15/100.** Text-only; no image/audio/video input.
- **Coding: 74/100.** SWE-bench Verified 70.6% (in-house harness) and LiveCodeBench 87.8% are competitive; SciCode 44.6% and TB2.1 57.3% cap it below the closed frontier.
- **Cost efficiency: 94/100.** $0.30/$1.20 with $0.06 cached input (90%-off launch promo ended 2026-09-10) — ~4× cheaper than mid-tier paid rivals at its capability level.
- **Overall Score: 63/100.** (68 + 70 + 90 + 15 + 74) / 5 = 63.4 → **63** (lowered from 64 on 2026-10-08, see Re-verification). Best-fit: cost-controlled long-context agentic and document workflows in EN/KO/JA; verify AA Index config (28 vs 42) before trusting its frontier claim.

---

## Re-verification — 2026-10-08 (15 days after original)

Re-run refreshes the profile (BenchLM tracks 22 sourced rows, unranked/no overall score, updated 2026-10-07) with new APEX/MCP-atlas rows and confirms promo end.

| Dimension | 2026-09-23 | 2026-10-08 | Δ |
|---|---|---|---|
| Tool use | 70 | 68 | −2 |
| Reasoning | 70 | 70 | — |
| Context window | 90 | 90 | — |
| Multimodal | 15 | 15 | — |
| Coding | 74 | 74 | — |
| Cost efficiency | 94 | 94 | — |
| **Overall** | **64** | **63** | **−1** |

New and corrected data:

- **New tool-use rows:** MCP Atlas **61.4%** (vendor card), APEX-Agents **18.7%** (a genuine hard-cut), GDPval-AA normalized 30.5% — Tool 70 → 68; τ³-Banking 23.0% and TB2.1 57.3% hold.
- **Knowledge rows confirmed:** AA Intelligence Index **28.1** (AA tracking row — the 42 launch number was Upstage's AA-cited config; cite the config when quoting), GPQA-D 89.0/AA 89.1, HLE 29.2, MMLU-Pro 86.3, CritPt 5.4, AA-Omniscience −0.8 (acc 18.9, hall 24.4).
- **Coding/context confirmed:** SWE-bench Verified 70.6, LiveCodeBench 87.8, AA-SciCode 44.6, AA-LCR 71.0 — all still current; KMMLU-Pro **79.2** (new Korean row) and AIME26 95.3; Design Arena 1183.
- **Promo confirmed lapsed:** 90%-off run ended 2026-09-10 (23:59 UTC); standard $0.30/$1.20 / $0.06 cached in is the effective rate now — Cost stays 94 (still ~4× cheaper than mid-tier peers).
- **Positioning unchanged:** unranked/not-computed on BenchLM; only 22/623 rows — evidence base still thin vs the label.

Gaps still open after re-run: independent SWE-V reproduction (70.6 is in-house), MRCR/RULER at 512K, East-Asia (JA) vs frontier gap tests, BenchLM overall score.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-08 (re-verified; original research 2026-09-23)
- Method: public internet research (Artificial Analysis article + provider pages, Upstage PR, BenchLM, llm-stats, AI Atlas, BenchLeader, Model Beat, allthemodels); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.