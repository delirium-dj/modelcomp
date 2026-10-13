# Gemini 2.5 Flash — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / Gemini 2.5 Flash
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **ERA NOTE:** A May 2025 thinking model, now access-limited ("limiting access to the 2.5 models to users who have actively used them in the past… not deprecated and will continue to be served until further notice"; new projects are directed to 3.5 Flash-Lite or 3.8 Flash). Benchmark evidence is 2025-vintage; scores are anchored to the 2026-10 frontier per methodology.

## Model card

- **Name:** Gemini 2.5 Flash (`gemini-2.5-flash`; Preview 04-17 deprecated 2025-07-15; variants: `gemini-2.5-flash-image` "Nano Banana", `gemini-2.5-flash-native-audio-preview-12-2025` Live, `gemini-2.5-flash-preview-tts` TTS)
- **Short description:** Google DeepMind's price-performance thinking model for low-latency, high-volume tasks — dynamic thinking-budget control, native tools (Search grounding, code execution, URL context, function calling), 1M context, multimodal input; "the second most capable model in the Gemini family" at launch, overtaking 1.5 Pro.
- **Provider / access:** Google — Gemini API (AI Studio) and Vertex AI; access now limited to past active users (see note above).
- **Release / knowledge:** Preview 2025-04-17; GA/stable 2025-05-20 (Google I/O); pricing updated 2025-06-17. Knowledge cutoff not captured in the sources reviewed.
- **IDs:** `gemini-2.5-flash`; repo folder `gemini-2.5-flash`.
- **Context window:** 1,000,000 tokens; max output 64K (65.5K per llm-stats Google row; DeepInfra row lists 1.0M output).
- **Modalities:** Text, image, audio, video in; text out (image generation via the separate `gemini-2.5-flash-image` endpoint).
- **Pricing (as of 2026-10):** $0.30 input / $2.50 output per 1M (single price tier regardless of input size; thinking vs non-thinking price difference removed 2025-06-17 — input up from $0.15, output down from $3.50); cached input $0.567/1M per LLMLearner (value as captured, not independently confirmed); AI Olympus still lists the old $0.15/$0.60 preview rates.
- **Architecture:** Not disclosed in captured sources (thinking model with dynamic budget control).

### Raw benchmarks found

**Vendor model card (Google DeepMind, May 2025):**
- GPQA Diamond (thinking, no tools) **82.8%** (vs 1.5 Pro May 58.1%, 2.0 Flash 50.5%; 2.5 Pro 86.4%).
- AIME 2025 (thinking, no tools) **72.0%**; AIME 2024 **88.0%**.
- SWE-bench Verified **48.9%** (single attempt, self-reported; Sophon lists 28.7 — conflicting third-party value).
- LiveCodeBench **59.3%** (2.5 Pro: 74.2%, up from 1.5 Pro's 30.5%).
- HLE **12.1%** (best reported, effort unspecified); CritPt **1.4%**; FrontierMath Tier 4 **4.2%**; SimpleQA (no tools) **26.9%**; ARC-AGI-1 ~32%; SAGE **44.8**; MedCode ~40; MedScribe **83.0**.
- Long-context: SoTA on LOFT and MRCR at 128K context (per the Gemini 2.X report); "the only one… to support context lengths of 1M+ tokens" among the compared models.
- LMArena: 2.5 Pro scores 120+ Elo above 1.5 Pro (Flash-specific Elo not captured).
- Second-pass rows (2026-10-12): SWE-bench Verified — **60.3%** multiple attempts (Gemini 2.X report, official scaffolding: multiple trajectories re-scored by the model's own judgment) / **60.4%** (Dec-2025 model card, self-reported pass@1; corroborated by VectorWire, theresanaiforthat, AwesomeAgents) vs 48.9% single attempt (vendor) vs 28.7 (Sophon, bash-only — the low conflict); Aider Polyglot **56.7%** (Flash; Pro 82.2%); τ²-Bench Telecom **79.5%** (self-reported, Dec 2025); ITBench **51.7%** and AssetOpsBench **65.5%** (official leaderboards, Nov–Dec 2025); Terminal-Bench Hard **16.9%** (self-reported); MMMU **79.7%** and MMMU-Pro **66.7%** (Dec-2025 card); Global MMLU Lite **88.4%**; LearningBench 0.51; Artificial Analysis (Oct 2026, measured): AA-GPQA Diamond **68.3%**, AA-HLE **4.7%**, AA Intelligence Index v4.3.2-era **9.9–13.1**, AA-LCR v1.1 **65%**, AA-Omniscience **−30**, AA-IFBench 39.0%, CritPt 1.4%, HLE 12%, price $0.30/$2.50 (cache hit $0.03), 212 tok/s, TTFT 17.79s, knowledge cutoff January 2025; benchgap (2026-10-11, 11 measured + 51 estimated): GPQA Diamond 68.5% est ±2.5 (medium) / 70.1% est ±4.9 (high conf), HLE 29.9% est ±9.5 (medium), AIME26 95.5% est ±0.6 (medium — low-confidence outlier, kept), IFBench 58.5% est ±8.8 (low), GDPval-AA 0.0% est ±12.5 (low), FrontierMath v2 T4 4.2% / T1–3 4.8% (measured), ARC-AGI-1 2.3% / ARC-AGI-2 0.9% (est — vs the vendor's ~32%/2.5%, a huge conflict), Vals GPQA 56.2% est ±7.4 (medium), Vals MMLU-Pro 84.3% est ±2.2 (high); long-context decay: MRCR v2 **74% at 128K → 32% at the full 1M mark** (AwesomeAgents, Dec-2025 card methodology — the harder 8-needle version); arenas: LMArena Text **1409–1417** (unifybench 2026-10-02; llm.ing 2026-10-08), LMArena Vision **1235** (2026-09-28), human-preference win share 53.8%; image generation (separate `gemini-2.5-flash-image` "Nano Banana" endpoint): ranked #1 for Text-to-Image and Image Editing on LMArena as of 2025-08-25 (Overall Preference 1362).

## Scores

- **Tool use: 60/100.** Native tools (Search grounding, code execution, URL context, function calling) with thinking-budget control; the Dec-2025 card adds τ²-Bench Telecom 79.5% (self-reported), AssetOpsBench 65.5% and ITBench 51.7% (official leaderboards) — mid-to-strong agentic rows — capped by Terminal-Bench Hard 16.9%; no MCP-Atlas run exists. Revised 56→60 on the τ²-Telecom/AssetOpsBench/ITBench fills.
- **Reasoning: 62/100.** Vendor rows (GPQA 82.8%, AIME 2025 72.0% / AIME 2024 88.0%) are solid 2025-vintage, but Artificial Analysis' October-2026 re-measurement lands far lower (AA-GPQA 68.3%, AA-HLE 4.7%, CritPt 1.4%, AA-Omniscience −30, Intelligence Index 9.9–13.1 on the v4.3.2-era scale); HLE 4.7–12.1%, FrontierMath T4 4.2%, SimpleQA 26.9% and the ARC-AGI conflict (vendor ~32%/2.5% vs benchgap-est 2.3%/0.9%) drag the score; 2025-vintage against the 2026-10 frontier. Revised 63→62 on the AA-measured GPQA/HLE gap (vendor 82.8% vs AA 68.3% kept as the headline conflict).
- **Context window: 88/100.** 1M tokens with SoTA LOFT/MRCR at 128K (measured), but the Dec-2025 card's harder 8-needle MRCR v2 falls from 74% at 128K to 32% at the full 1M mark, and AA-LCR v1.1 is 65% — mid retrieval at scale, so the top band is not justified. Revised 91→88 on the quantified 1M-retrieval decay.
- **Multimodal: 75/100.** Text, image, audio, and video input (plus separate image-generation and Live-audio endpoints); the Dec-2025 card's MMMU 79.7% (vs Flash-Lite 72.9%) is a strong vision row that clears the >70 band, with MMMU-Pro 66.7% mid and LMArena Vision 1235 as the preference read. Revised 73→75 on the MMMU fill.
- **Coding: 60/100.** SWE-bench Verified 60.3% multiple-attempts (Gemini 2.X report; 60.4% on the Dec-2025 card, corroborated by three aggregators) is the fair headline vs the 48.9% single-attempt figure (Sophon's 28.7 bash-only stays as the low conflict); LiveCodeBench 59.3% and Aider Polyglot 56.7% (Flash) are 2025-mid-tier. Revised 59→60 on the multiple-attempts SWE-bench fill.
- **Cost efficiency: 76/100.** $0.30/$2.50 per 1M (blended ≈$0.85/M at 3:1) — mid-tier pricing for a thinking model; the June 2025 restructure raised input 2× but cut output 29% and removed the thinking surcharge.
- **Overall Score: 69.0/100.** Mean of Tool use 60, Reasoning 62, Context window 88, Multimodal 75, Coding 60 = 69.0 (Cost efficiency excluded per methodology).

> **Gap vs folder average (70.8): −1.8.** Small gap; the model's historical "second most capable in family" status and 1M thinking-model positioning are reflected in the Context and Multimodal scores, while the 2025-vintage benchmark suite (AA-HLE 4.7%, SWE-bench 60.3% multiple) caps Reasoning and Coding. **Shutdown notice:** access is limited to past active users, and the model is scheduled for shutdown on 2026-10-16 with Gemini 3.5 Flash as the mandated replacement (AwesomeAgents, 2026-07-13).

## Notes

- Verification trail: Google Developers Blog (2025-06-17 pricing update, Flash-Lite preview, deprecation of 04-17 preview), Gemini API models docs (access limitation note, variant endpoints), Gemini 2.X report PDF (SoTA LOFT/MRCR at 128K, LiveCodeBench/Aider/SWE-bench progression, 2.5 Flash "second most capable"), LLMLearner (46 tracked results: AIME 2024 88.0, AIME 2025 72.0, CritPt 1.4, FrontierMath T4 4.2, GPQA 82.8, HLE 12.1, SimpleQA 26.9, MedScribe 83.0, pricing effective 2026-01-04), ayautomate (SWE-bench Verified 48.9, LiveCodeBench 59.3), Sophon (SWE-bench 28.7, GPQA 79 — conflicting), llm-stats (pricing, 65.5K output), AI Olympus (old preview pricing, GPQA 85.2), Google external model card PDF (Dec-2025 update: SWE-bench 60.4%, MMMU 79.7%, SimpleQA Verified 27.8%, MRCR v2 8-needle methodology, Nano Banana #1 image rankings), arxiv 2507.06261v3 (Table 3: SWE-bench multiple 60.3%, Aider 56.7%, HLE no-tools 11.0%), AwesomeAgents (Dec-2025 card transcription: τ²-Telecom 79.5%, ITBench 51.7%, AssetOpsBench 65.5%, TB Hard 16.9%, MMMU-Pro 66.7%, Global MMLU Lite 88.4%, MRCR 74%→32% decay, 2026-10-16 shutdown), Artificial Analysis (Oct 2026: AA-GPQA 68.3%, AA-HLE 4.7%, Index 13, AA-LCR 65%, AA-Omniscience −30, cache $0.03, 212 tok/s, cutoff Jan 2025), benchgap (2026-10-11: 11 measured + 51 estimated), llm.ing (LMArena Text 1417, Vision 1235), unifybench (LMArena Text 1409, win share 53.8), theresanaiforthat (AssetOpsBench, ITBench, LearningBench, category scores), VectorWire (SWE-bench 60.4/28.73).
- Known conflicts: SWE-bench Verified 48.9% single (vendor) vs 60.3–60.4% multiple (official/Dec-card) vs 28.7 (Sophon, bash-only); GPQA 82.8 (card/LLMLearner) vs 79 (Sophon) vs 85.2 (AI Olympus) vs 68.3 (AA measured) vs 56.2 (Vals est) — a 29-point spread; HLE 11.0–12.1 (vendor) vs 4.7 (AA measured) vs 29.9 (benchgap est); ARC-AGI-1 ~32 (vendor) vs 2.3 (benchgap est); ARC-AGI-2 2.5 (vendor) vs 0.9 (benchgap est); cached-input price unconfirmed ($0.03 per AA vs $0.567 per LLMLearner); AIME26 95.5% (benchgap est, medium conf — implausibly high for this checkpoint, kept as a low-confidence outlier).
- Open questions: whether the access limitation is still enforced (shutdown scheduled 2026-10-16); Flash-specific LMArena Elo history (current text 1409–1417, vision 1235 captured); MCP-Atlas row (none exists); AA-LCR v1.1 at higher effort (65% is the only read).
- Future sources: Google's retirement notices for the 2.5 family; archived AA snapshots.

---

## Update 2026-10-12 (deep second pass, 4 independent searches)

- **Score changes:** Tool 56→60 (τ²-Bench Telecom 79.5%, AssetOpsBench 65.5%, ITBench 51.7% fills), Reasoning 63→62 (AA-measured AA-GPQA 68.3% / AA-HLE 4.7% land below the vendor card), Context 91→88 (MRCR v2 74%→32% decay at 1M quantified; AA-LCR 65%), Multimodal 73→75 (MMMU 79.7% fill), Coding 59→60 (SWE-bench Verified 60.3–60.4% multiple-attempts fill). Cost 76 stands; Overall 68.4→69.0.
- **Key fills:** Dec-2025 Google model card: SWE-bench Verified 60.4%, MMMU 79.7%, MMMU-Pro 66.7%, Global MMLU Lite 88.4%, SimpleQA Verified 27.8%, τ²-Bench Telecom 79.5%, ITBench 51.7%, AssetOpsBench 65.5%, Terminal-Bench Hard 16.9%, LearningBench 0.51; Gemini 2.X report (arxiv 2507.06261v3): SWE-bench multiple 60.3%, Aider Polyglot 56.7%, HLE no-tools 11.0%; AA (Oct 2026): AA-GPQA 68.3%, AA-HLE 4.7%, Index 9.9–13.1, AA-LCR 65%, AA-Omniscience −30, AA-IFBench 39.0%, cache $0.03, 212 tok/s, TTFT 17.79s, cutoff Jan 2025; benchgap (2026-10-11): GPQA 68.5–70.1% est, HLE 29.9% est, Vals MMLU-Pro 84.3% est, AIME26 95.5% est (low-conf outlier), GDPval-AA 0.0% est, FrontierMath v2 4.2%/4.8%; arenas: LMArena Text 1409–1417, Vision 1235, win share 53.8%; MRCR v2 74% (128K) → 32% (1M).
- **Conflicts kept:** SWE-bench 48.9 single / 60.3–60.4 multiple / 28.7 bash-only; GPQA 56.2–85.2 across five sources; HLE 4.7–29.9; ARC-AGI vendor-vs-estimate (32 vs 2.3; 2.5 vs 0.9); cache price $0.03 vs $0.567.
- **Status:** access limited to past active users; **scheduled shutdown 2026-10-16** with Gemini 3.5 Flash as the mandated replacement (AwesomeAgents). Knowledge cutoff January 2025.
- **Still open:** MCP-Atlas row (none exists for this model); AA-LCR at higher effort; whether the shutdown proceeded as scheduled.

---

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03 (updated 2026-10-12)
- Cross-model signed log: `model-findings.md` — append one line: `2026-10-03 Ling 3.1 Flash Gemini 2.5 Flash Overall=68.4 (Tool=56 Reasoning=63 Context=91 Multimodal=73 Coding=59 Cost=76; 2025-vintage thinking model; access-limited)`
- Cross-model signed log append: `2026-10-12 Ling 3.1 Flash Gemini 2.5 Flash Overall=69.0 (Tool=60 Reasoning=62 Context=88 Multimodal=75 Coding=60 Cost=76; second pass: Dec-2025 card + AA re-measurement; shutdown scheduled 2026-10-16)`
