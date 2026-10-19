# Gemini 3 Pro — findings by MiniMax M3.1 Flash

- Source: Google (`gemini-3-pro-preview`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro (Preview)
- **Short description:** Google's November-2025 flagship — the model that "tops the LMArena Leaderboard with a breakthrough score of 1501 Elo" at launch. It is **shut down**: "Gemini 3 Pro Preview is deprecated and has been shut down March 9, 2026. Migrate to Gemini 3.1 Pro Preview to avoid service disruption." The `gemini-3-pro-preview` id now **points to** `gemini-3.1-pro-preview`, so this folder tracks a retired, auto-aliased snapshot rather than a live SKU.
- **Provider / access:** Gemini API `gemini-3-pro-preview` (12 dated versions, "Latest update November 2025") — **shut down 2026-03-09**; Google AI Studio; OpenRouter: **no route** (`google/gemini-3-pro-preview` 404s and is absent from the model API; only `google/gemini-3-pro-image*` remain); OpenCode Zen: no active row (its deprecated list records "Gemini 3 Pro | March 9, 2026"). The live successor on Zen is "Gemini 3.1 Pro" (`gemini-3.1-pro`, $2.00/$12.00/$0.20).
- **Release / knowledge:** released **2025-11-18** (Google changelog and launch blog). Knowledge cutoff **January 2025** ("Gemini 3 models have a knowledge cutoff of January 2025. For more recent information, use the Search Grounding tool.").
- **IDs:** `gemini-3-pro-preview` (API, retired), `gemini-3-pro-preview` is aliased to `gemini-3.1-pro-preview`; BenchLM lists the API model id as "Not published".
- **Context window:** **1,048,576** input tokens, **65,536** output tokens ("Gemini 3 models support a 1 million token input context window and up to 64k tokens of output"). **BenchLM's spec sheet says "2M" — that is wrong**: it carries no source, and both Google and Artificial Analysis state 1M. Third-party anecdotes are far harsher still: a January-2026 community test measured "~32K tokens, not 1M" usable in the web app.
- **Modalities:** input text, image, video, audio, PDF; output text. Thinking: **default on, level `high`**; Gemini 3 offers only **low and high** for this model (3.1 Pro added "medium"); "minimal" is not supported. "Gemini models engage in dynamic thinking by default, automatically adjusting the amount of reasoning effort based on the complexity of the request." Temperature is fixed at 1.0, and thought signatures must be carried across turns.
- **Pricing (as of 2026-10-19, per 1M tokens):** the live Google pricing page has **no Gemini 3 Pro row** (only "Gemini 3 Pro Image" and 3.1 Pro). Historical 3 Pro pricing was **$2.00 in / $12.00 out** ($4.00/$18.00 for prompts >200K), cache $0.20, batch $1/$6, priority $3.60/$21.60 — the same numbers the successor 3.1 Pro Preview is sold at today.
- **Architecture:** proprietary; no parameter count published. "Gemini 3 Pro Preview is based on Gemini 3 Pro" (predecessor Gemini 3 Pro family), with dynamic thinking, `thinking_level` replacing the legacy `thinking_budget` parameter.

### Raw benchmarks found

> Google's launch-blog and model-card numbers are marked "vendor"; Artificial Analysis, Vals AI, the JobBench paper, ARC Prize and the BenchLM ledger are independent.

Agent / tool use:

- Terminal-Bench 2.0: **54.2%** at launch (Terminus-2) / **56.9%** in DeepMind's current table (Terminus-2). **Terminal-Bench 4.0: no verified public score found** (null on AA, no row on the official board)
- Tau2-bench: **85.4%** (vendor; retail 85.3 / telecom 98.0 in the current table) / **87.13%** (AA)
- BrowseComp **59.2%** (vendor); MCP Atlas **54.1%** (vendor); APEX-Agents **18.4%** (vendor); GDPval-AA **1195 Elo** (vendor)
- JobBench: **11.4%** (JobBench paper, arXiv 2605.26329) — "Gemini-3-Pro 11.4 11.8 10.7 12 12.9 8.71 11.3 11.7"; Gemini 3 Flash is also 11.4, and the paper's strongest model (Claude Opus 4.7 under Claude Code) "reaches only 45.9 %"
- Vibe Code Bench v1.1: **14.30%** (Vals AI, #90/114, OpenHands harness) — for comparison Gemini 3.1 Pro Preview scores 32.03% and Gemini 2.5 Pro 0.40%
- Toolathlon / τ³-banking / Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **91.9%** (vendor) / **90.81%** (AA)
- HLE: **37.5%** without tools / **45.8%** with search+code (vendor) / **39.71%** (AA)
- AIME25: **95.0%** (vendor; 100% with code) / **95.67%** (AA); MathArena Apex 23.4%; MMMLU 91.8%
- LCR **76.0%**, CritPt **9.14%**, IFBench **70.41%** (AA); APEX-Agents 18.4%
- Artificial Analysis Intelligence Index: **28\*** — an **estimate**, not a measurement (AA's own payload carries `intelligenceIndexEvaluations: []` and the page shows "No publicly available API"); #105/217; a Low variant is estimated at 22
- ARC-AGI-2 **31.1%** (ARC Prize Verified); ARC-AGI-1 **75.00%** (via BenchLM); FrontierMath v2: **no verified public score found** for this model
- Omniscience accuracy **55.75%** with a **91.45% hallucination rate** (AA) — the worst hallucination profile in this batch; SimpleQA Verified 72.1% (vendor)

Coding:

- SWE-bench Verified: **76.2%** (vendor); SWE-bench Pro **43.3%** (vendor)
- LiveCodeBench: Pro **Elo 2439** (vendor) / **91.75%** (AA)
- SciCode **56%** (vendor, from the current DeepMind table)
- Terminal-Bench 2.0 54.2–56.9%; Terminal-Bench-Hard **41.67%** (AA internal field)
- DeepSWE, FrontierSWE, Vibe Code Bench: **no verified public score found** for this model (Vibe Code is Vals' Vibe Code Bench at 14.30%)

Long context:

- MRCR v2 128k: **77.0%**; MRCR v2 1M **pointwise: 26.3%** (vendor) — the model's own long-context number collapses at the 1M end, and only Gemini 3 Flash (22.1%) is worse
- No RULER / GraphWalks / needle-in-haystack measurement; AA-LCR for 3 Pro is not published
- 1,048,576-token input window, 65,536-token output cap

Vision / knowledge (vendor model card): MMMU-Pro 81.0, Video-MMMU 87.6, CharXiv 81.4, ScreenSpot-Pro 72.7, OmniDocBench 1.5 0.115, MathVision 86.6, SimpleVQA 73.2, RealWorldQA 83.3, MMMU 87.2, Video-MME 88.4/87.7, ERQA 70.5, MLVU 83.0, CC-OCR 79.0, AI2D 94.1, RefCOCO 84.1, ODINW13 46.3, We-Math 86.9, DynaMath 85.1, CountBench 97.3, MMLongBench-Doc 60.5 (via BenchLM). LMArena **1501 Elo**, WebDev Arena **1487 Elo** (vendor, launch).

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 65/100.** τ²-bench 85.4–87.13% is a strong agentic-tool result, and Terminal-Bench 2.0 54.2–56.9% shows real computer use. But the rubric's frontier anchors are far away (TB2.1 ~88%+ → 54–57% on the 2.0 generation, no TB 2.1 or 4.0 at all; τ3 ~50%+ → not measured; GDPval ~1750+ → 1195 Elo), and the agentic-tool profile is weak where it counts: JobBench 11.4%, Vibe Code Bench 14.30%, APEX-Agents 18.4%, MCP Atlas 54.1%, BrowseComp 59.2%.
- **Reasoning: 72/100.** GPQA Diamond 90.81–91.9%, AIME25 95.0–95.67%, MMMLU 91.8% and a launch-day LMArena 1501 Elo are real strengths, with τ²-bench 87.13% and CharXiv 81.4% alongside. Capped by the AA Intelligence Index of **28\*** (an estimate, and the rubric's mid band), CritPt 9.14%, **ARC-AGI-2 31.1%**, no published FrontierMath, and a **91.45% hallucination rate** on Omniscience — the knowledge-reliability worst case in this batch.
- **Context window: 90/100.** The advertised 1,048,576-token window places it in the rubric's top tier (≥1M = 95–100) on paper, and the 65,536-token output cap clears the 64K line. Held at 90 because Google's own numbers show the effective window is far shorter than advertised — MRCR v2 77.0% at 128k but only **26.3% pointwise at 1M** — with a community measurement of "~32K tokens" in the web app, and no independent long-context verification exists.
- **Multimodal: 90/100.** Full omni-modal input (text, image, video, audio, PDF) with text output — the rubric's "+audio in = 90–100" band — backed by a deep, mostly Google-published vision suite: MMMU-Pro 80.17% (AA) / 81.0% (vendor), MMMU 87.2%, Video-MMMU 87.6%, Video-MME 88.4%, CharXiv 81.4%, MathVision 86.6%, ScreenSpot-Pro 72.7%, RealWorldQA 83.3%. Held at 90 rather than higher because the strongest rows are vendor numbers and the AA MMMU-Pro reading (80.17%) sits below the vendor's own 81.0%.
- **Coding: 70/100.** SWE-bench Verified 76.2% (vendor) and LiveCodeBench Pro Elo 2439 / 91.75% (AA) are respectable, and SciCode 56% clears the rubric's 55% anchor. Capped by SWE-bench Pro 43.3%, Terminal-Bench 2.0 54.2–56.9%, Terminal-Bench-Hard 41.67%, Vibe Code Bench 14.30%, JobBench 11.4%, and the complete absence of any DeepSWE, FrontierSWE or Terminal-Bench 4.0 figure.
- **Cost efficiency: 72/100.** No live route exists for this id: Google's pricing page dropped the row, OpenRouter has no model, and Zen serves only the successor. The price this model was sold at — **$2.00 in / $12.00 out** per 1M (cache $0.20, batch $1/$6) — sits between the rubric's "~$1.25/$4.25 ≈ 88" and "~$3/$15 ≈ 60" anchors, i.e. roughly 72; that is the price a caller pays today through the aliased successor, so no separate free tier can be credited.
- **Overall Score: 77.4/100.** (65 + 72 + 90 + 90 + 70) / 5 = 77.4 — best-fit: a November-2025 launch-era model whose strengths (1M window, full omni-modal input, 91%+ GPQA, 95%+ AIME25) are real but whose agentic-tool and terminal-coding profile (JobBench 11.4%, TB 2.0 ~55%) and hallucination rate (91.45%) are well behind the 2026 field; it is shut down and aliased to Gemini 3.1 Pro Preview, so treat any current use of this id as use of 3.1 Pro.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **Context window 1M vs BenchLM's "2M".** Google's docs and AA both say 1,048,576; BenchLM's spec sheet says 2M with no source. Resolved as 1M (BenchLM's row is unsourced and wrong).
2. **Terminal-Bench 2.0 — 54.2% (launch) vs 56.9% (current DeepMind table).** Harness/date difference; both listed, no TB 4.0 exists for this model at all.
3. **AA Intelligence Index 28\* is an estimate, not a measurement.** AA's payload has an empty `intelligenceIndexEvaluations` array and the page states "No publicly available API"; the reasoning score therefore leans on the published GPQA/HLE/ARC-AGI numbers instead.
4. **JobBench 11.4%** looks alarming next to other models' 60%+ JobBench scores, but the JobBench paper's own ceiling is 45.9% (Claude Opus 4.7) and Gemini 3 Flash scores the same 11.4 — so 11.4 is a benchmark property, not a model defect.
5. **GDPval-AA 1195 Elo** (vendor) vs no AA figure published for this model (AA's `gdpval` is null) — the vendor number is the only one available and is used with the caveat.
6. **Hallucination 91.45%** (AA) is a real Omniscience field, and the community noted the same weakness: "Testing Gemini 3 Pro's Actual Context Window in Web App: ~32K tokens, not 1M".
7. **Deprecation policy.** Announced 2026-02-26, shut down 2026-03-09 — 11 days' notice, against Google's stated "at least 2 weeks" policy; a Hacker News thread notes "Google violates its 14-day deprecation policy for Gemini 3 Pro Preview". Operational, not capability, but it is why the model has no live route.
8. **Google Maps grounding.** The model page lists Maps grounding as "Not supported" while the Gemini 3 guide says "Grounding with Google Maps is now supported for Gemini 3 models going forward" — a documentation inconsistency, resolved in favour of the guide.

### Notes on identity

- `gemini-3-pro-preview` is a **distinct, retired release** (2025-11-18) from `gemini-3.1-pro-preview` (2026-02-19) and from `gemini-3-pro-image` (image generation), and it is now an **alias-by-routing**: the id resolves to 3.1 Pro Preview. BenchLM's "Reasoning Type: Non-Reasoning" label for this model is wrong — Gemini 3 Pro Preview has dynamic thinking on by default at level `high`.
- The folder's "Live" status on BenchLM is therefore inaccurate; the model was shut down on 2026-03-09.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — Google first-party model page, changelog, deprecations table, Gemini 3 guide, thinking docs, launch blog and DeepMind model card; independent trackers Artificial Analysis (model page, High and Low variants, with the index marked as an estimate), Vals AI (Vibe Code Bench), the JobBench paper (arXiv 2605.26329), the BenchLM evidence ledger, and OpenRouter / OpenCode Zen catalogs. Vendor-vs-independent conflicts — including BenchLM's unsourced 2M context claim and the AA index estimate — are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3_Pro.md`, using the same headings.
