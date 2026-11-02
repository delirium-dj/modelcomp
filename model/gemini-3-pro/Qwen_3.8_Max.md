# Gemini 3 Pro — findings by Qwen 3.8 Max

- Source: Google DeepMind (`gemini-3-pro`)
- Date: 2026-10-20 (UTC)
- Re-researched: 2026-11-02 (UTC) — original draft preserved below; independent sources added.
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Verdict (2026-11-02):** the draft was an entirely vendor-run (Google launch) table. The 2026-11-02 pass adds independent data that both **confirms** and **severely qualifies** it. AA lists this id as **deprecated** (`gemini-3-pro-preview`, Nov 2025, superseded by 3.1 Pro) with composite N/A. Independent cells **corroborate the raw capability**: **GPQA Diamond 90.8% (AA)** (vs vendor 91.9%), **ARC-AGI-1 75.0 / ARC-AGI-2 31.1 (ARC Prize, base tier)**, **AA LiveCodeBench 91.7**, **AA-LCR 76.0**, **AA-MMMU-Pro 80.2** (vs vendor 81.0), and **τ²-bench 87.1 (AA)**. The headline adverse finding is honesty: **AA-Omniscience hallucination rate 91.5%** — the **worst confabulation profile in this entire dataset** (compare Fable 5.1's 70.0%, already the batch low), on an accuracy of only 55.8%. That was invisible in the vendor table and **caps Reasoning 93 → 90** despite the GPQA/ARC corroboration. A second correction: AA's spec table shows **speech/audio input** the card's "text+image+video" omitted, and independent MMMU-Pro confirms the vision score, lifting **Multimodal 92 → 93**; **Coding 89 → 90** (independent LiveCodeBench) and **Context 93 → 94** (independent AA-LCR) also rise on corroboration. **Provenance quarantine:** BenchLM's large multimodal block (MMMU 87.2, Video-MME, CC-OCR, AI2D, RefCOCO, MathVision, CharXiv, etc.) is sourced to the **Qwen 3.5/3.6 model-card comparison table** — **competitor-run**, recorded only as direction, never scored; the ScreenSpot-Pro row is mislabeled to a *Gemini Flash* card. **Overall holds at 91** (mean 91.0) — but for a different reason than the draft: corroborated breadth offset by a first-class honesty defect and deprecation.

## Model card

- **Name:** Gemini 3 Pro
- **Short description:** Google DeepMind's Q4-2025 frontier flagship — the model that turned Google from a 2025 underdog into a first-in-class leader, topping GPQA Diamond, ARC-AGI-2, MMMU-Pro, LiveCodeBench Pro and Vending-Bench 2 at release. A "Deep Think" high-reasoning tier lifts several scores further. Since superseded by Gemini 3.1 Pro (Feb 2026), which Google states "significantly outperforms Gemini 3 Pro."
- **Provider / access:** Gemini API, Google AI Studio, Vertex AI. OpenRouter `google/gemini-3-pro`.
- **Release / knowledge:** Previewed on LMArena, then generally available 2025-12-03 (per Vellum); knowledge cutoff not published.
- **IDs:** `google/gemini-3-pro` (plus a Deep Think reasoning tier).
- **Context window:** 1,000,000 tokens input; 65,536 (64K) tokens output.
- **Modalities:** natively multimodal — text + image + video + **speech/audio** in → text out (AA's spec table adds speech input the card omitted); reasoning yes (standard + Deep Think); tool calls yes (function calling, code execution, long-horizon agentic tool use).
- **Tracking status (added 2026-11-02):** AA lists this id (`gemini-3-pro-preview`) as **deprecated** — superseded by Gemini 3.1 Pro; only the default 10k workload persists, composite Index/Speed/Cost/Verbosity are N/A. Knowledge cutoff Jan 2025 (AA). BenchLM metadata shows "2M / non-reasoning"; **AA's 1M + reasoning spec governs** (the 2M is a spec-table discrepancy, not adopted).
- **Pricing (as of 2026-10-20):** $2.00 / 1M input, $12.00 / 1M output for prompts ≤200K tokens; a premium tier applies above 200K tokens.
- **Architecture:** proprietary (closed weights); sparse MoE-class Google frontier model.

### Raw benchmarks found

Agent / tool use:

- Vending-Bench 2 (year-long simulated business, long-horizon planning + consistent tool use): **#1**, mean net worth **$5,478.16** — **272% higher than GPT-5.1**; praised for consistency (no off-task drift over the full simulation)
- ScreenSpot-Pro (UI screenshot grounding): high score (exact value not published in the accessible source)
- No OSWorld / Terminal-Bench / AutomationBench figures published in accessible sources

Reasoning / knowledge:

- GPQA Diamond: **91.9%** (**93.8%** with Deep Think) — ~4-pt lead over GPT-5.1 (88.1%); SOTA, though the benchmark nears saturation
- ARC-AGI-2 (abstract visual puzzles): **31.1%** (**45.1%** with Deep Think) — a massive jump from Gemini 2.5 Pro (4.9%) and nearly 2x GPT-5.1 (17.6%)
- Humanity's Last Exam: **37.5%** (**40%+** with Deep Think) — ~11 pts over GPT-5.1; first 40%+ for a Gemini
- AIME 2025: **100%** with code execution (matches GPT-5.1), **95.0%** without tools; MathArena Apex: **>20x** jump (only model "somewhat capable," still far from solved)
- MMMLU (multilingual Q&A): **91.8%** (#1, ahead of GPT-5.1 91.0%); Global PIQA (commonsense, 100 languages): **93.4%**

Coding:

- SWE-bench Verified: **76.2%** — highly competitive with Claude Sonnet 4.5 (77.2%)
- LiveCodeBench Pro (Elo, algorithmic/competitive): **2,439** — a commanding ~200-pt lead over GPT-5.1 (2,243); best-in-class novel/efficient code generation

Multimodal:

- MMMU-Pro: **81.0%** — a significant 5-pt gap ahead of GPT-5.1 (76.0%)
- Video-MMMU: **87.6%** — strong dynamic/temporal video comprehension (analyzing video lectures, complex UI screenshots)

Long context:

- MRCR v2 (needle-in-a-haystack): **77.0%** at 128k average context length; at the full 1M span it outpaces Gemini 2.5 Pro by **9.9%**.

> Provenance: all figures from Google's reported launch benchmarks, compiled and analyzed by Vellum (2025-12-03) against GPT-5.1, Claude Sonnet 4.5 and Gemini 2.5 Pro; Deep Think values are the high-reasoning tier. Vendor-run, not independently audited.

> **Independent cross-check (2026-11-02, AA via BenchLM):** GPQA Diamond **90.8%** (confirms vendor 91.9); ARC-AGI-1 **75.0** / ARC-AGI-2 **31.1** (ARC Prize, base — the 45.1 figure is the Deep Think tier, kept separate); AA LiveCodeBench **91.7**; AA-LCR **76.0**; AA-MMMU-Pro **80.2**; τ²-bench **87.1**; AA AIME 2025 **95.7**; AA MMLU-Pro **89.8**; AA-IFBench **70.4**; AA Global-MMLU-Lite **92.2**. Adverse independent signal: **AA-Omniscience hallucination 91.5%** (accuracy 55.8%), CritPt 9.1, Vibe Code Bench (Vals) 14.3, JobBench 11.4. BenchLM aggregate **60.68, #51/1004** (42 of 724 coverage, conservative).

### Normalized scores (1–100)

- **Tool use: 88/100.** *(unchanged, now independently supported.)* #1 on Vending-Bench 2 (272% higher net worth than GPT-5.1) is vendor-run, but independent **τ²-bench 87.1 (AA)** corroborates reliable multi-turn tool use. Capped because no current-gen OSWorld / Terminal-Bench 4.0 figures exist for this deprecated id, and the draft's ScreenSpot-Pro reliance is weakened (BenchLM's ScreenSpot-Pro row is mislabeled to a *Gemini Flash* card). Weak independent agentic signals (JobBench 11.4, Vibe Code 14.3) keep it off the frontier ceiling.
- **Reasoning: 90/100.** *(93 → 90 — a first-class honesty defect offsets corroborated raw reasoning.)* Independent **GPQA Diamond 90.8 (AA)** and **ARC-AGI-1 75.0 / ARC-AGI-2 31.1 (ARC Prize)** confirm genuinely high reasoning, and AIME 95.7 / MMLU-Pro 89.8 (AA) back it. But **AA-Omniscience hallucination is 91.5% — the worst in the dataset** (accuracy only 55.8%), meaning this model states wrong answers with near-total confidence; no trustworthy-reasoning score can sit in the low 90s with that profile. Deep Think's higher ARC-AGI-2 45.1 / GPQA 93.8 are a **separate reasoning tier**, not the base id.
- **Context window: 94/100.** *(93 → 94 — independent long-context corroboration.)* 1M-token input with vendor MRCR v2 77.0% at 128k (+9.9% over Gemini 2.5 Pro at 1M) now backed by **AA-LCR 76.0 (independent)**; still discounted for the 64K output cap, so below the 96–98 newer Pro tiers.
- **Multimodal: 93/100.** *(92 → 93.)* Native text/image/video **+ audio/speech** input (AA spec — broader than the card listed), and independent **AA-MMMU-Pro 80.2** confirms the vendor 81.0 (Video-MMMU 87.6, blog source). **Quarantine:** the many Qwen-model-card-sourced rows (MMMU, Video-MME, CC-OCR, AI2D, RefCOCO…) are competitor-run and not scored. Still no generation path (image/video/audio out) and CritPt/CharXiv-independent gaps keep it below the 94 multimodal-input ceiling of newer flagships.
- **Coding: 90/100.** *(89 → 90 — independent LiveCodeBench corroborates the algorithmic lead.)* **AA LiveCodeBench 91.7 (independent)** backs the vendor LiveCodeBench Pro Elo 2,439, and SWE-bench Verified 76.2% is competitive with Claude Sonnet 4.5 (77.2%). Capped by **Vibe Code Bench 14.3 (Vals)** on agentic/app-building coding and by no independent deep-repo SWE (DeepSWE/FrontierSWE) row.
- **Cost efficiency: 75/100.** $2/$12 is competitive for a frontier SOTA model (far below GPT-6 Astra's $10/$50), but it is a full-price Pro flagship with a premium >200K tier — not an efficiency play, and now superseded by cheaper 3.x Flash tiers.
- **Overall Score: 91/100.** *(unchanged at 91, materially re-shaped.)* Mean of Tool 88 + Reasoning 90 + Context 94 + Multimodal 93 + Coding 90 = 455 / 5 = 91.0 → 91. The independent pass **lowers reasoning (honesty)** and **raises context/multimodal/coding (corroboration)** — the level holds, the shape does not. Best fit: reasoning-heavy, multimodal (video/UI) and long-context workflows that can tolerate an old flagship. Two hard caveats the draft could not see: **hallucination 91.5% (never trust unverified output)** and **AA deprecation** — Gemini 3.1 Pro and the 3.x Flash tiers have since overtaken it on capability and cost respectively.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-20, re-researched 2026-11-02
- Method: public internet research (Vellum's Google Gemini 3 benchmark breakdown of Google's reported launch scores; pricing confirmed via jpthecat.com / Google Gemini API pricing); the 2026-11-02 pass adds **Artificial Analysis** (`gemini-3-pro-preview` — now **deprecated**, composite N/A) and the **BenchLM.ai** aggregator (updated 2026-10-29) carrying independent **ARC Prize**, **Vals AI**, **Gert Labs**, and **AA per-evaluation** cells. Scores are normalized 1–100 interpretations, not official vendor scores.
- **Conflict handling (explicit, not averaged):** (1) *Reasoning honesty* — vendor table silent on hallucination vs **AA-Omniscience hallucination 91.5%** → independent adverse governs, Reasoning 93→90. (2) *GPQA* — vendor 91.9 vs AA 90.8 → close, independent recorded, corroborates the dim. (3) *ARC-AGI-2* — vendor base 31.1 vs Deep Think 45.1 → **tier discipline**, base 31.1 (independently confirmed by ARC Prize) scored, Deep Think kept as separate reasoning-tier context. (4) *Multimodal provenance* — AA-MMMU-Pro 80.2 (neutral) governs; Qwen-card rows recorded direction-only, not averaged. (5) *Context spec* — BenchLM "2M/non-reasoning" vs AA "1M/reasoning" → **AA spec table authoritative**, 1M kept. (6) *ScreenSpot-Pro* — BenchLM row mislabeled to a Gemini Flash card → excluded.
- **Guards applied:** (a) **competitor-run quarantine** — the bulk of BenchLM's multimodal rows trace to Alibaba's **Qwen 3.5/3.6 model-card comparison tables**, not neutral measurement; used as direction only; (b) **tier/variant discipline** — standard vs Deep Think reasoning, base vs Deep Think scores kept separate; (c) **sibling quarantine** — no Gemini 3.1 Pro / 3.8 Flash / 4 Argon / Carbon figure used as Gemini 3 Pro evidence; (d) **deprecation noted** — superseded by 3.1 Pro; (e) **Cost efficiency and Speed excluded from the Overall mean**; (f) never read peer raters' findings files (zero-influence). Remaining gaps: current-gen Terminal-Bench 4.0 / FrontierCode 2.0 / independently-administered SWE-bench Verified (none exist for this deprecated id).
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
