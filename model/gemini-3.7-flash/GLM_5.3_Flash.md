# Gemini 3.7 Flash — findings by GLM 5.3 Flash

- Source: Google (`gemini-3.7-flash`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> Re-researched 2026-10-16 (original pass 2026-09-18, enrichment 2026-10-05): the
> 2026-10-15 BenchLM refresh plus Vals AI and ARC Prize publications filled nearly
> every gap the earlier passes marked "no verified public score found". Scores
> recalculated where the new evidence moved them: Tool use 94→91, Reasoning 85→88,
> Multimodal 88→90; Coding, Context, Cost hold.

## Model card

- **Name:** Gemini 3.7 Flash (August 2026 Flash tier — coding/agent workhorse at half the usual Flash price)
- **Short description:** Google's 2026-08-13 Flash release: built on 3.6 Flash with algorithmic improvements to the core reasoning foundation (not a new pretrain). Big gains in software engineering and agents — Terminal-Bench 2.1 85.8% (official), DeepSWE 65.3% — at an introductory $0.75/$3.75 through 2026.
- **Provider / access:** Google — Gemini API (AI Studio) ID `gemini-3.7-flash`; also Vertex-adjacent enterprise surfaces (Gemini Enterprise app, Agent Platform), Google Antigravity, Android Studio, and the Gemini app's Spark experience for AI Pro/Ultra. `generateContent` API.
- **Release / knowledge:** GA 2026-08-13. Knowledge cutoff **March 2026**, with some domains limited to January 2025 (Google model card).
- **IDs:** `gemini-3.7-flash` (Google). Free tier available on AI Studio/Zen with standard rate limits (repo catalog).
- **Context window:** 1,000,000-token input, 64,000-token max output (Google launch data via ai-tldr; 1M confirmed on BenchLM's 2026-10-15 refresh).
- **Modalities:** text, image, audio, video in (repo catalog also lists PDF); text out. Three thinking levels (low/medium default/high); same built-in tool suite as 3.6 Flash (function calling, structured output, code execution, computer use, search grounding).
- **Pricing (as of 2026-10-16):** unchanged — introductory $0.75 in / $3.75 out per 1M (thinking tokens included) through 2026-12-31, rising to $1.50/$7.50 on 2027-01-01 (reconfirmed by benchlm.ai, llm-stats launch note, aimadetools and felloai); context caching $0.075/1M through 2026 ($0.15 after), cache storage $0.50/1M/hr ($1.00 after).
- **Architecture:** proprietary, parameters undisclosed; Gemini 3.6 Flash-derived reasoning core with selectable thinking levels.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.8%** (Google model card, official) — CONFLICT: **77.5%** on Vals AI's independent harness (vals.ai leaderboard); different harness, both cited
- Terminal-Bench 3.0: **14.9%** (Google model card via BenchLM, 2026-10-15 refresh)
- OSWorld 2.0: **47.9%** (Google model card via BenchLM — fills the gap the 2026-10-05 pass marked missing)
- Agents' Last Exam: **26.3%** (Google model card via BenchLM)
- AutomationBench: **30.4%** — vs 17.0% for 3.6 Flash (Google launch table)
- GDPval-AA: **Elo 1525** (Google model card) / **44.6% normalized** (Artificial Analysis)
- AA Harvey LAB v1.0: **90.7%** (Google model card via BenchLM)
- AA Agentic Index: **36.4%** (Artificial Analysis)
- AA-AnalystAgent: **60.0%** (Artificial Analysis leaderboard)
- ApprenticeBench (GUI): **16%** (NeoCognition, independent); MazeBench ASCII: **1%** (independent) — both very weak
- GDP.pdf (expert PDF comprehension): **34.0%** (Google launch table)
- Tau / BFCL: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **94.5%** (Artificial Analysis) / **93.9%** (Vals AI independent) — consistent; fills the "no GPQA" gap from the 2026-10-05 pass
- HLE: **47.9%** (AA-HLE, Artificial Analysis); HLE-Verified 53.6% is attributed by BenchLM to the 3.8 Flash card — not counted for 3.7
- ARC-AGI-2: **84.6%** (ARC Prize verified results — elite; above Opus 4.7's 75.8%); ARC-AGI-1: **95.5%**
- FrontierMath v2: **71.6%** Tiers 1–3 / **36.6%** Tier 4 (Epoch AI leaderboard)
- MMLU-Pro: **90.1%** (Vals AI)
- Artificial Analysis Intelligence Index: **39.1** on the current composite (AA model page via BenchLM) — CONFLICT with the 56 recorded 2026-10-05 on AA Index v4.1.1: AA re-scaled its Index (v4.3.2 era), so the two are not comparable; on the current scale 39.1 sits just under Claude Opus 4.7's estimated 41
- CritPt: **14.3%** (AA); AA-Omniscience: accuracy **55.3%** / hallucination rate **64.5%** / index 26.5 (AA)
- BioMysteryBench: **87.1%** human-solvable / **43.5%** human-difficult (Google model card)
- GDM-MRCR v2 (8-needle, 128k average): **97.0%** — vs 91.8% for 3.6 Flash (Google launch table)

Coding:

- SWE-bench (Verified harness): **80.80% ±1.76** (Vals AI, independent; consistent with the 2026-10-05 reading)
- LiveCodeBench: **88.7%** (Vals AI independent — fills the gap the 2026-10-05 pass marked missing)
- AA Coding Index: **76.1%** (Artificial Analysis)
- AA-SciCode: **57.2%** (Artificial Analysis)
- DeepSWE v1.1: **65.3%** — up from 48.6% for 3.6 Flash (Google launch table)
- FrontierCode 1.1 Main: **43.6%** — up from 34.4% (Google launch table)
- FrontierSWE v2: **20.3%** (Proximal leaderboard, independent — weak)
- Code Arena (web development): **1588 Elo** (Google launch table)
- SWE-Bench Pro: no verified public score found

Multimodal:

- AA-MMMU-Pro: **85.5%** (Artificial Analysis); CharXiv: **88.7%** with tools / **84.5%** without (Google model card); LVBench (video): **85.4%** (Google model card); Design Arena Website: **1305 Elo** (OpenRouter)

Long context:

- Window: **1M tokens** in / 64K out; measured retrieval: MRCR v2 **97.0%** (8-needle @128k avg) plus AA-LCR **81.7%** (Artificial Analysis)

### Normalized scores (1–100)

- **Tool use: 91/100.** CHANGED from 94 — official TB2.1 85.8% and GDPval-AA Elo 1525 remain elite, but newly published independent evidence (OSWorld 2.0 47.9%, Agents' Last Exam 26.3%, ApprenticeBench 16%, Vals TB2.1 77.5% on a different harness) shows the agentic edge is narrower outside Google's own launch table.
- **Reasoning: 88/100.** CHANGED from 85 — the ARC Prize-verified ARC-AGI-2 84.6% (above Opus 4.7), GPQA Diamond 94.5%/93.9% (two independent sources) and FrontierMath v2 71.6%/36.6% replace the thin AA-only dock from 2026-10-05; HLE 47.9% and CritPt 14.3% keep it below the 90s.
- **Context window: 98/100.** 1M input with now doubly verified retrieval (MRCR v2 97%, AA-LCR 81.7%); 64K output cap is the only limiter.
- **Multimodal: 90/100.** CHANGED from 88 — modality coverage (text/image/audio/video/PDF in) now backed by measured results: MMMU-Pro 85.5%, CharXiv 88.7%, LVBench 85.4%; text-only output and no image-generation cap it.
- **Coding: 93/100.** Unchanged — the new rows cut both ways: LiveCodeBench 88.7% and AA Coding Index 76.1% strengthen it, FrontierSWE v2 20.3% weakens it; SWE-V 80.8% (Vals) and DeepSWE 65.3% anchor the band.
- **Cost efficiency: 88/100.** Unchanged — free tier plus the cheapest paid Flash rate so far ($0.75/$3.75 intro reconfirmed live), but promotional through 2026-12-31, doubling on 2027-01-01.
- **Overall Score: 92/100.** Five-dim mean per `RULES.md` (Cost excluded): (91 + 88 + 98 + 90 + 93) / 5 = 460/5 = 92.0 (was 91.6). Best fit: the 2026 coding/agent Flash pick — near-frontier tool loops with independently verified reasoning, coding and vision at half-price intro rates; note the price doubles in 2027.

---

## Signature

- Provided by: **GLM 5.3 Flash (z.ai/glm-5.3-flash)** — 2026-10-16
- Method: public internet research (re-run of the 2026-09-18 + 2026-10-05 passes; BenchLM profile refreshed 2026-10-15, Vals AI leaderboards, ARC Prize verified results, Epoch AI FrontierMath v2, Artificial Analysis model page, llm-stats, aimadetools/felloai pricing confirmations, DuckDuckGo web search ×3; three conflicts — AA Index version scale, TB2.1 harness split, HLE-Verified attribution — resolved and documented inline); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
