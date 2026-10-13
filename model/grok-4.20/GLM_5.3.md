# Grok 4.20 — findings by GLM 5.3

- Source: xAI / SpaceXAI (`grok-4.20` variants: `grok-4.20-0309-reasoning`, `grok-4.20-0309-non-reasoning`, `grok-4.20-multi-agent-0309`)
- Date: 2026-10-13 (UTC) — second-pass re-research of the 2026-09-25 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.20 (Standard multi-agent configuration; Heavy/Multi-Agent scales to 16 agents)
- **Short description:** xAI's multi-agent flagship — beta 2026-02-17, GA **2026-03-10**, with the native four-agent council (Grok coordinator, Harper research/X-firehose, Benjamin math/code, Lucas synthesis/contrarian) debating on shared weights; the **Multi-Agent Beta (2026-03-12) runs 4 agents at low/medium effort and 16 at high/xhigh**, cutting hallucinations ~65% via debate (multiple corroborating reviews). **A "Grok 4.20 Heavy" variant was announced 2026-03-19 (Musk) — the likely source of the first pass's "HLE 50.7% series-leading" claim, which is NOT reproduced on the standard model's measured rows (settled AA-HLE: 34.5% #118)**; the launch-era "AA II 49" also settled to 25.7 #153. What survives measurement: **IFBench 82.9% #2 of 415, honesty 82.6% #10 at thinking (the "hallucination record" claim corroborated), τ² 96.5% #14, AIME 96.5% #6, and the 2M window at $1.25/$2.50**. Top use case: long-context, live-X-grounded synthesis and instruction-critical work.
- **Provider / access:** xAI API; grok.com/Grok apps; OpenRouter (four SpaceXAI rows: $1.25/$2.50 ×2 at 2M, a $2.50/$5.00 tier ×2); gateway routes higher (AI/ML API $2.60/$7.80).
- **Release / knowledge:** beta 2026-02-17; GA + API **2026-03-10** (BenchLeader records the 03-05 snapshot); Multi-Agent Beta 2026-03-12; Heavy announced 2026-03-19; knowledge cutoff November 2024, extended by live X data; weekly iterative updates (Beta 2, April 2026).
- **IDs:** `grok-4.20-0309-reasoning`, `grok-4.20-0309-non-reasoning`, `grok-4.20-multi-agent-0309`.
- **Context window:** **2,000,000 tokens confirmed** — the largest among frontier models; all agents share the window.
- **Modalities:** text and image in; text out (image generation lives in Grok Imagine); thinking config measures best; reasoning mode emits visible, billed chain-of-thought; server-side tools (web/X search, code execution, file attachments) billed per call.
- **Pricing (as of 2026-10-13):** **$1.25 in / $2.50 out per 1M** (confirmed; $2.50/$5.00 long-prompt tier; gateway routes higher; cached read ~$0.20); blended $3.00/M — "pricier than most"; **94 tok/s measured** (not the 235 tok/s launch claim); $0.144 per agentic session.
- **Architecture:** proprietary MoE (the ~3T third-party parameter claim remains unconfirmed); shared-weight agent replicas with shared KV caching (multi-agent overhead ~1.5-2.5× a single call).

### Raw benchmarks found

> Second pass adds the BenchLeader ladder (best = thinking **59.0 #125/760**, trend 43→53→64 rising, last measured 2026-10-09). Category scores (thinking): **Instruction following 80 (best)**, Human preference 67, Reasoning 59, Knowledge 56, Long context 59, Multimodal 59, Composite 58, Maths 54, Coding 54, **Agents & tools 52 (worst)**.

Agent / tool use:

- **τ²-Bench: 96.5% #14 (thinking — elite)** — the strongest agent row; Terminal-Bench public **57.3% #24** (good); TB Hard 40.9% #53; TB 2.1 (Vals) 44.2% #62; TB 2.0 (Vals) 40.5% #32
- **HLAB: 0.0% #53** (floor); APEX-Agents (AA) 14.2% #26; Finance 28.5% #63; Tax 31.2% #53; Legal Research 13.9% #56; HiL-Bench 20.0% #13; Vending-Bench 2 4662.9 #34 — the professional-agent rows are bottom-half despite the council architecture
- Native 4-agent parallel inference and the server-side tool suite verified; Alpha Arena trading first place (early checkpoint, retained as vendor-era narrative); τ³ / GDPval / Claw-Eval: still unmeasured

Reasoning / knowledge:

- GPQA Diamond: Epoch 89.3% #52 (thinking) / **AA 91.1% #50** / Vals 88.6% #33 — AA clears the bar, the others sit just under (better than the first pass's ~88%)
- **HLE (AA): 34.5% #118 (thinking)** — below the 40% reference; **the first pass's "50.7% series-leading" is NOT reproduced for the standard model** (attributed to Heavy/vendor-adjacent tables; chatforest's launch review lists HLE 24.2% and AA II 49 — the launch-to-settling collapse again); CritPt 6.6% #136 (weak); ARC-AGI-3 0.1% #52
- **Kagi 75.0% #12 (thinking)**; **AIME (Vals) 96.5% #6**; OTIS 92.2% #61; FrontierMath T1-3 44.9% #52 / T4 17.1% #51; ProofBench 14.0% #59 (weak); **ForecastBench 61.4% #9 (not stated)**; ARC-AGI-2 65.1% #67; ARC-AGI-1 89.5% #75; CL-bench 22.2% #3; Chess 24.0% #68
- **Honesty — the claim holds at thinking: AA-Omniscience non-hallucination 82.6% #10** (the debate architecture's ~65% hallucination cut corroborated) — but at no-reasoning it collapses to 7.2% #476 (massive effort-dependence); accuracy 28.9% #185 (honest, knows little); Omniscience 14.8 #80; SimpleQA 30.2% #63
- **AA II 25.7 #153 (thinking)** — settled; ECI 152.0 #45; MMLU-Pro 86.3% #42; **MedQA 94.5% #16**; CorpFin 63.7% #42; TaxEval 74.1% #40; LegalBench 77.7% #101; CaseLaw 54.5% #38; EMB 11.7% #62 (weak); MedCode 32.2% #85; MedScribe 63.4% #96
- **IFBench: 82.9% #2 of 415 (thinking)** — its "where it wins" elite row; the "strict prompt adherence" launch claim independently confirmed

Coding:

- **LiveCodeBench (Vals): 84.3% #38**; **SWE-bench (Vals): 72.2% #54** — gap filled; LMArena Coding 1511 #57; WeirdML 52.3% #66; ALE-Bench 1150.3 #42
- **Vibe Code v1.1: 4.1% #90** and **Code Migration 0.3% #66** — dreadful; WebDev 1375 #94; SWE-bench Verified (official) / DeepSWE: still unmeasured

Long context:

- **2M window confirmed** — but measured retrieval is mid-weak: **AA-LCR 69.0% #224 (thinking)** / 25.3% #396 (no-reasoning); LMArena Document 1439 #35; no MRCR/RULER rows at any length.

Multimodal:

- MMMU-Pro: Vals 83.5% #32 / AA 74.6% #105 (thinking); LMArena Vision 1263 #53; **Vals MM Index 39.1% #30**; SAGE 38.2% #61 (weak); MortgageTax 45.4% #82; Blueprint-Bench 2 0.0% #27. Text+image in, text out.

Preference:

- Good ranks (Human preference 67, second-best category): LMArena Text 1472 #45, Multi-turn 1479 #43, Hard Prompts 1489 #48, Creative 1445 #50, Longer 1466 #65, IF 1447 #69.

### Normalized scores (1–100)

- **Tool use: 62/100.** Lowered from 75: elite τ² 96.5% #14, good TB public 57.3% #24 / TB Hard #53, and the verified council architecture — against HLAB 0.0% #53, APEX-AA 14.2% #26, Finance 28.5% #63, Tax 31.2% #53, HiL 20.0% #13, and Agents & tools 52 as its worst category; the multi-agent debate shows in honesty, not in professional-agent suites.
- **Reasoning: 74/100.** Lowered from 85: GPQA 88.6-91.1% only straddles the bar, the settled HLE is 34.5% #118 (the 50.7% claim attributed to Heavy and not credited), CritPt 6.6%, ARC-AGI-3 0.1%, and AA II settled to 25.7 #153 — offset by AIME 96.5% #6, Kagi #12, ForecastBench #9, ARC-AGI-2 65.1% #67, and the genuinely elite thinking-mode honesty (82.6% #10).
- **Context window: 90/100.** Lowered from 96: the 2M window remains the largest measured, but AA-LCR 69.0% #224 shows mid-weak retrieval — capacity without verified quality.
- **Multimodal: 66/100.** Raised from 65: Vals MMMU-Pro 83.5% #32 is solid — SAGE 38.2% #61, MortgageTax 45.4% #82, MM Index 39.1% #30, and Blueprint 0.0% keep it mid; text+image only.
- **Coding: 62/100.** Lowered from 68: the gaps filled split — LCB 84.3% #38 and SWE-V Vals 72.2% #54 are decent — but Vibe 4.1% #90, Code Migration 0.3% #66, and WebDev 1375 #94 are floor reads; the official SWE-bench Verified row still doesn't exist.
- **Cost efficiency: 88/100.** Held: $1.25/$2.50 with a 2M window and ~85% cached discounts is outstanding per token; the $2.50/$5.00 long-prompt tier and 94 tok/s measured (vs the 235 launch claim) temper it.
- **Overall Score: 71/100.** (62 + 74 + 90 + 66 + 62) / 5 = 70.8 → 71, down from 77.8. Best-fit: the honest long-window synthesizer — elite instruction following (#2 IFBench), record-class truthfulness at thinking (the debate architecture's real achievement), AIME #6, and the 2M window at $1.25/$2.50 — but its professional-agent suites, open-ended coding, and deep reasoning (HLE, CritPt) measured below the launch narrative, and the Heavy variant's claims should be tracked separately.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-13
- Method: public internet research, second pass over the 2026-09-25 report (BenchLeader ladder as of 2026-10-09 aggregating Epoch AI Benchmarking Hub, Artificial Analysis, Vals AI, Scale AI SEAL HiL, LiveBench, LMArena, Andon Labs, ForecastBench, ARC Prize; four SpaceXAI OpenRouter rows; DDG-lite searches surfacing chatforest's launch review — the AA hallucination record, launch AA II 49 vs settled 25.7 flagged — grokipedia's Multi-Agent Beta details incl. the 4/16-agent effort split, buildfastwithai/aiautomationglobal/imseankim architecture corroboration, and basenor's Grok 4.20 Heavy announcement 2026-03-19 as the likely source of the uncredited 50.7% HLE claim; first-pass rows retained where not contradicted); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
