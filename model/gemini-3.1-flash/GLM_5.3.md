# Gemini 3.1 Flash — findings by GLM 5.3

- Source: Google (`gemini-3.1-flash`)
- Date: 2026-10-13 (UTC) — second-pass re-research of the 2026-09-24 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash
- **Short description:** Google's efficient 3.1-generation Flash model. **Second-pass identity finding: the 3.1 generation appears to ship no tracked non-Lite "Flash" at all** — the 2026-03-03 wave delivered 3.1 Pro and 3.1 Flash-Lite, while the mid-Flash slot stayed with the Nov-2025 Gemini 3 Flash (ai-toolbox's lineup: "3.1 Pro / 3 Flash / 3.1 Flash-Lite"); BenchLeader returns 404 for both plausible 3.1-Flash slugs and every search result is Flash-Lite coverage. The exact ID `gemini-3.1-flash` therefore remains unmeasured by every major harness; this pass scores it provisionally on **(a)** the closest verified family member — **Gemini 3.1 Flash-Lite (released 2026-03-03)**, now fully measured — and **(b)** the first-pass BenchmarkList niche rows, bracketing it between Flash-Lite (BenchLeader 53.9 #250) and Gemini 3 Flash (60.6 #100). Top use case: fast multimodal assistant work.
- **Provider / access:** Google AI Studio/Gemini API, Vertex AI (seven 3.1-Flash-family provider rows on OpenRouter: standard $0.25/$1.50, a $0.125/$0.75 economy tier, a $0.45/$2.70 tier); **no OpenCode Zen ID** (Zen carries 3.1 Pro and 3.5+ Flash models).
- **Release / knowledge:** 3.1 generation, **2026-03-03** (the Pro/Lite wave date — the non-Lite Flash's own existence/date is unresolved); knowledge cutoff not publicly disclosed.
- **IDs:** `google/gemini-3.1-flash` (no Zen ID; no Free ID verified; no AA/BenchLeader page exists for the exact ID).
- **Context window:** 1M tokens (family-confirmed — every 3.1 model takes 1M input).
- **Modalities:** text/image/audio/PDF in; text out; reasoning (Flash-line thinking levels); tool calls; JSON mode.
- **Pricing (as of 2026-10-13):** resolved at family level — the 3.1 Flash family serves at **$0.25 in / $1.50 out per 1M standard, with a $0.125/$0.75 economy tier and a $0.45/$2.70 tier** (Flash-Lite rates; a mid-Flash would price at or above these); cached read ~$0.025; 361 tok/s on Lite — "the fastest and most cost-efficient model in the Gemini 3 series" (win-tk); free tier on AI Studio.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

> **No harness covers the exact `gemini-3.1-flash` ID.** The rows below are (1) the verified Flash-Lite sibling's full independent profile (BenchLeader 53.9 #250, last measured 2026-10-09) — the family's measured floor — and (2) the first-pass BenchmarkList niche rows, which remain the only direct `3.1-flash` attributions.

Family floor — Gemini 3.1 Flash-Lite (independent, AA/Vals/Epoch unless noted):

- GPQA Diamond: Epoch 73.7-81.8% #113-153 / AA 82.2% #169 / Vals 81.1% #63 — below the 90% bar
- HLE: AA 17.2% #227 / Scale 8.6% #29; CritPt 1.1% #211; AA II **15.6 #268**; ECI 144.5 #85
- τ² 31.3% #251; **τ³ 9.7% #143; GDPval-AA 0.0% #210**; TB 2.1 31.1-34.1% #68-148; TB 4.0 0.5% #132; TB Hard 24.2% #142; MCP Atlas 57.1% #29; Analyst 8.8% #35; APEX-AA 12.2% #27; HLAB 0.0%; Legal Research 3.4% #64
- SWE-bench (Vals) 62.8% #72; LCB (Vals) 80.1% #68; **Vibe 0.0% #99; Code Migration 4.6% #62**; ProgramBench 0.0%; SciCode 41.9-43.4% #145; WeirdML 52.2% #68; WebDev 1256 #117
- **IFBench 77.2% #17** (good); MultiChallenge 60.6% #12; MMMU-Pro Vals 82.5% #37 / AA 75.5% #93; Vals MM Index 41.4% #29; Vision 1240 #72; SAGE 49.5% #20
- AA-LCR 74.3% #156; MMLU-Pro 86.2% #43; LegalBench 83.8% #46; MedCode 47.6% #30; AIME (Vals) 83.3% #43; honesty weak (non-hall 17.3% #310); preference mid-low

Direct `3.1-flash` niche rows (BenchmarkList, retained from the first pass):

- ToolBench-X **0.42** (50th percentile of 13); HOLMES **54.31** (73rd percentile; law 84.0%); LEAF 38.5%; SWE-Pro **93.1% patch ✓ (Oracle) / 50.0% test ✓** (rank 3 of 6); PerfCodeBench 45.9%; HarmVideoBench **81.3%** (90th percentile); SpatialUAV 45.9% (83rd percentile); CheXpercept 87.1%; CC-OCR V2 61.4%; TaxBench 15.9%

### Normalized scores (1–100)

> Provisional: scored on the family floor (Flash-Lite's now-full independent profile) plus the niche rows, bracketed between Flash-Lite (53.9 #250) and Gemini 3 Flash (60.6 #100) on the BenchLeader index. If Google ships/Tracks a true 3.1 Flash later, re-verify.

- **Tool use: 55/100.** Lowered from 62: the family's independent agent rows are bottom-tier — Flash-Lite's τ² 31.3% #251, GDPval 0.0% #210, τ³ 9.7%, TB 2.1 ~31-34% — against MCP Atlas 57.1% #29 and the niche ToolBench-X 0.42 mid-field row; a mid-Flash would sit above Lite's floor but the family signal caps it well below frontier.
- **Reasoning: 68/100.** Lowered from 72: the family floor is weak (GPQA 81-82% below the bar, HLE 17%, CritPt 1.1%, AA II 15.6 #268) — but a mid-Flash should clear Lite meaningfully (Gemini 3 Flash's reasoning measured far higher), and the niche HOLMES 54.31 (73rd percentile) is a genuine above-Lite signal; 68 keeps it between the two brackets.
- **Context window: 95/100.** Held: 1M family-confirmed; AA-LCR 74.3% #156 (Lite floor) — no ≥98% retrieval evidence.
- **Multimodal: 88/100.** Lowered from 92: the family floor shows good Vals MMMU-Pro 82.5% #37 but a weak MM Index 41.4% #29 and Vision 1240 #72; the 3.1-flash-attributed HarmVideoBench 81.3% (90th percentile) and CheXpercept 87.1% niche rows retain real value; text+image+audio/PDF in, text out.
- **Coding: 62/100.** Lowered from 72: the family floor is weak-to-mid (SWE-V 62.8% #72, LCB 80.1% #68, but Vibe 0.0%, Code Migration 4.6%, SciCode ~43%) — the niche SWE-Pro 93.1% Oracle-patch row is real but unranked against modern harnesses; 62 brackets between Lite's floor and Gemini 3 Flash's measured coding.
- **Cost efficiency: 86/100.** Raised from 85: pricing resolved — the 3.1 Flash family serves at $0.25/$1.50 standard with a $0.125/$0.75 economy tier, cached reads at $0.025, and 361 tok/s-class speed; the AI Studio free tier remains.
- **Overall Score: 74/100.** (55 + 68 + 95 + 88 + 62) / 5 = 73.6 → 74, down from 78.6. Best-fit: a fast, cheap 1M-context multimodal assistant tier — but note the identity finding: as of this pass the 3.1 generation ships no tracked non-Lite Flash, so this ID is scored provisionally on family evidence; for production, use the measured endpoints — Gemini 3.1 Flash-Lite (cheapest), Gemini 3 Flash (the actual mid-tier), or the 3.5 Flash generation.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-13
- Method: public internet research, second pass over the 2026-09-24 report (BenchLeader returns 404 for both `gemini-3-1-flash` and `gemini-3-1-flash-preview` — disclosed; the fully-measured Gemini 3.1 Flash-Lite page as of 2026-10-09 — Artificial Analysis, Epoch AI Benchmarking Hub, Vals AI, Scale AI SEAL, LiveBench, LMArena — used as the family floor, with Gemini 3 Flash's 60.6 #100 as the upper bracket; seven Google AI Studio/Vertex provider rows resolving family pricing; DDG-lite searches — all results Flash-Lite-only, surfacing aimlapi/llm-stats/modelslab/win-tk/awesomeagents/binaryverse/ai-toolbox coverage confirming the 2026-03-03 wave and the absence of a tracked non-Lite 3.1 Flash; first-pass BenchmarkList niche rows retained as the only direct attributions); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
