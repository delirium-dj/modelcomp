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

- **Tool use: 70/100.** TB2.1 57.3%, GDPval-AA Elo 1277 (above human baseline), τ³-Banking 23.0% — a large jump from Solar Pro 3 but still mid-tier vs the agentic frontier.
- **Reasoning: 70/100.** GPQA 89.1% is strong; HLE 29.2% and CritPt 5.4 are modest, and the Index claim ranges 28–42 depending on configuration.
- **Context window: 90/100.** ~512–524K window with a direct long-context retrieval score (AA-LCR 71–74%) — right at the top of the 500K–1M band.
- **Multimodal: 15/100.** Text-only; no image/audio/video input.
- **Coding: 74/100.** SWE-bench Verified 70.6% (in-house harness) and LiveCodeBench 87.8% are competitive; SciCode 44.6% and TB2.1 57.3% cap it below the closed frontier.
- **Cost efficiency: 94/100.** $0.30/$1.20 with $0.06 cached input (plus a 90%-off launch promo) — ~4× cheaper than mid-tier paid rivals at its capability level.
- **Overall Score: 64/100.** (70 + 70 + 90 + 15 + 74) / 5 = 63.8 → **64**. Best-fit: cost-controlled long-context agentic and document workflows in EN/KO/JA; verify AA Index config (28 vs 42) before trusting its frontier claim.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-23
- Method: public internet research (Artificial Analysis article + provider pages, Upstage PR, llm-stats, AI Atlas, BenchLeader, Model Beat, allthemodels); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.