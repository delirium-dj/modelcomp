# GPT-5.6 Sol — findings by Qwen 3.8 Flash

- Source: OpenAI / GPT-5.6 Sol (`openai/gpt-5.6-sol`)
- Date: 2026-10-02 (UTC); second pass 2026-11-03 (UTC) — AA Index v5 + GPT-6 successorship + pricing-conflict check, bands unchanged
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol
- **Short description:** OpenAI's advanced reasoning-and-coding specialist tier in the GPT-5.6 family — a strong agentic coder with elite math, image-input only, and a notably high factuality/hallucination flag on Omniscience.
- **Provider / access:** OpenAI Responses API (`gpt-5.6-sol`); no OpenCode Zen free ID (`noFreeId`). Reasoning + tool calls.
- **Release / knowledge:** 2026 (GPT-5.6 family); knowledge cutoff not disclosed.
- **IDs:** `openai/gpt-5.6-sol`.
- **Context window:** 1,000,000 in / 128,000 max out (curated meta).
- **Modalities:** text, image in; text out; reasoning on; tool calls; JSON mode. No audio/video, no non-text output.
- **Pricing (as of 2026-10-02):** Paid $1.25 / $10 per 1M; no free tier.
- **Architecture:** proprietary, hosted only.

### Raw benchmarks found

> Independently verified against BenchLM (69 of 618 rows), citing OpenAI "GPT-5.6", the GPT-5.6 system card, Artificial Analysis, Vals AI, ARC Prize, Epoch, Cognition/Devin, Cursor and VulcanBench (fetched 2026-10-02).

Agent / tool use:

- Terminal-Bench 2.1: **91.9%** (OpenAI; Vals 85.8%; TB-Hard 65.9%) — but TB 3.0 34.6%
- BrowseComp: **92.2%**; τ²-bench 85.1%; OSWorld 2.0 62.6%; Toolathlon 58%
- GDPval-AA: **1735** (OpenAI; AA normalized 54.4%); CyberGym 84.5%; AA Agentic Index 50.5%
- ExploitGym 33.7%; AA ITBench 56.2%; ApprenticeBench 26%

Reasoning / knowledge:

- GPQA / GPQA-Diamond: **94.6% / 94.6%** (Vals 95.2%); HLE-Verified **54.5%** (AA 49.5%)
- ARC-AGI-2: **92.5%** (ARC Prize); ARC-AGI-3 **7.8%**
- FrontierMath (legacy / v2 Tiers1-3 / Tier-4): **89% / 89% / 83%** (OpenAI) — elite
- AA-LCR 84.0%; CritPt 32.3%; Artificial Analysis Intelligence Index **58.9**
- Omniscience Accuracy / **Hallucination Rate: 59.4% / 92.2%** (very high hallucination)

Coding:

- SWE-bench (Vals): **96.2%**; Terminal-Bench 2.1 91.9%; AA Coding Index **77.4%**
- LiveCodeBench (Vals) 82.6%; DeepSWE **72.7%**; SWE-bench Pro 64.6%; AA-SciCode 57.1%
- VulcanBench v3 87.0 / CII v1 86.5; FrontierSWE v2 32.2%; CursorBench 4.0 41.7%; Bug Hunt 42 fixes

Multimodal / long context:

- MMMU-Pro 83.0 (w/ Python 84.6, AA 83.4); AA-LCR 84.0; 1M window (no ≥98% MRCR reported).

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 92/100.** Terminal-Bench 2.1 91.9%, BrowseComp 92.2%, τ²-bench 85.1% and GDPval-AA 1735 are frontier; tempered by TB 3.0 34.6%, Toolathlon 58% and AA Agentic Index 50.5%.
- **Reasoning: 90/100.** GPQA-Diamond 94.6%, ARC-AGI-2 92.5%, FrontierMath 83–89% and Intelligence Index 58.9 are elite; capped hard by a 92.2% Omniscience hallucination rate, ARC-AGI-3 7.8% and only mid HLE (54.5%).
- **Context window: 96/100.** 1M-token window / 128K output meets the ≥1M tier; AA-LCR 84.0 but no ≥98% long-context retrieval metric reported, so short of 100.
- **Multimodal: 70/100.** Image input is solid (MMMU-Pro ~83–85) but modalities are text+image in / text out only — no audio/video and no non-text output → +image-in band (60–70).
- **Coding: 90/100.** SWE-bench 96.2%, Terminal-Bench 91.9% and AA Coding Index 77.4% are top-tier; DeepSWE 72.7% (under the 74 ref), FrontierSWE v2 32.2% and CursorBench 4.0 41.7% trim it.
- **Cost efficiency: 75/100.** Paid $1.25 input / $10 output per 1M — the $1.25 input is cheap but the $10 output lands between the ~88 and ~60 anchors; no free tier. Cost is excluded from Overall.
- **Overall Score: 88/100.** Mean of Tool 92, Reasoning 90, Context 96, Multimodal 70, Coding 90 = 87.6 → 88. Best fit: agentic coding and heavy math where image-only input suffices and output volume is controlled; distrust its factual recall off-label given the 92.2% Omniscience hallucination flag — ground claims in retrieved context.

---

## Second-pass update — 2026-11-03 (UTC)

Staleness-triggered re-research (prior pass 2026-10-02); three independent sources consulted.

**Sources:** Artificial Analysis — https://artificialanalysis.ai/models/gpt-5-6-sol (**GPT-5.6 Sol (max)**: 130.2 tok/s, above-average speed) and https://benchlm.ai/benchmarks/artificialanalysis (**Intelligence Index v5 leaderboard, 2026-10-29: GPT-5.6 Sol 58.9%, behind only Gemini 4 Carbon 59.4%**) · Terminal-Bench — https://www.tbench.ai/?version=3.0 (**GPT-5.6 Sol (max, Codex) 34.6% ± 3.1%, #2 on TB 3.0**) · OpenAI — https://openai.com/index/gpt-5-6/ (**"Update on August 21, 2026: OpenAI dropped the API and credit pricing of GPT-5.6 Sol by over 20% for the next 3 months"**) and https://deploymentsafety.openai.com/gpt-6-october (**"GPT-6 Sol … will replace GPT-5.6 Sol …"**, global ChatGPT rollout **2026-10-07**) · pricing/successor coverage — https://codingfleet.com/blog/gpt-6-sol-vs-gpt-5-6-sol/ (**"GPT-5.6 Sol's $4/$20 rate is promotional only, guaranteed at least through November 21, 2026. Its list price is $5/$30"**), https://www.contextstudios.ai/comparisons/gpt-5-6-sol-vs-grok-4-5 (OpenRouter **$2/$10**), https://teamorouter.com/blogs/gpt-6-astra-vs-gpt-5-6.

**What moved and how it was resolved:**

1. **AA Intelligence Index v5 (leaderboard 2026-10-29).** GPT-5.6 Sol reads **58.9%**, essentially unchanged from the pass-1 58.9 and still within ~0.5 pt of the v5 leader (Gemini 4 Carbon 59.4%) — so the v5 re-cut left this id's standing intact. **Reasoning holds 90** (GPQA 94.6%, ARC-AGI-2 92.5%, FrontierMath 83–89%; capped by the 92.2% Omniscience hallucination flag and ARC-AGI-3 7.8%).
2. **Terminal-Bench 3.0 34.6% independently confirmed** on the tbench.ai leaderboard (max/Codex, #2) — corroborates the existing **Tool 92** cap; no change.
3. **Successorship (lifecycle, not capability).** OpenAI began rolling out **GPT-6 globally on 2026-10-07**, stating GPT-6 Sol/Luna **replace** GPT-5.6 Sol/Luna in ChatGPT. This is a lineup fact, not a decline in the tracked id — recorded as a planning caveat, no band moves.
4. **Pricing conflict (deliberately not averaged).** The pass-1 figure was **$1.25 / $10** (Cost 75). Newer sources disagree: OpenAI's own 2026-08-21 note is a **temporary >20% promo (3 months)**; codingfleet reports a **$4/$20 promotional** rate ("at least through Nov 21, 2026") with a **$5/$30 list**; contextstudios saw **$2/$10 on OpenRouter**. These are promotional-vs-list snapshots at different dates, and none is a first-party current rate card for this exact id. Per the no-averaging / preserve-until-supported rule, **Cost efficiency is held at 75** (pass-1 verified rate) rather than re-scored on contradictory promo figures — but the **non-durability** of the cheap rate (expiring promo + GPT-6 succession + a reported $5/$30 list) is flagged for a firmer re-check against OpenAI's live price table.

**Scores changed by this pass:** **None.** Tool 92, Reasoning 90, Context 96, Multimodal 70, Coding 90, Cost 75 all re-confirmed; **Overall stays 88/100** (92 + 90 + 96 + 70 + 90 = 438 / 5 = 87.6 → 88, Cost excluded).

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing OpenAI GPT-5.6 and its system card, plus Artificial Analysis, Vals AI, ARC Prize, Epoch, Cognition/Devin, Cursor and VulcanBench); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
- Second-pass signature: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-03. Method: ≥3 independent sources (Artificial Analysis v5 model page + Index leaderboard, tbench.ai TB 3.0 board, OpenAI GPT-5.6 / GPT-6-october pages, codingfleet/contextstudios/teamorouter pricing coverage); AA v5 (58.9, near #1) and TB 3.0 34.6% reproduced, GPT-6 succession recorded, pricing conflict (promo $2/$10–$4/$20 vs list $5/$30) noted but not averaged and Cost held at 75 pending a first-party rate card; **no dimension changed and Overall remains 88**. Prior pass retained verbatim per `RULES.md`.
