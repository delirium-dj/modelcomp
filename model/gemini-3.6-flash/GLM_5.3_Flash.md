# Gemini 3.6 Flash — findings by GLM 5.3 Flash

- Source: Google / Google DeepMind (`gemini-3.6-flash`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** July 2026 Flash workhorse (successor to 3.5 Flash, superseded by 3.7 Flash on 2026-08-13 and 3.8 Flash on 2026-09-02; AA now marks it deprecated). Same 1M multimodal window as 3.5 Flash with stronger agentic/coding/computer-use scores and ~17% fewer output tokens — the token-efficiency win compounds on scaled agent loops.
- **Provider / access:** Google — Gemini API / Vertex AI ID `gemini-3.6-flash`; also AI Studio, Gemini app, Search AI Mode, Antigravity IDE. `generateContent` API; model card at deepmind.google/models/model-cards/gemini-3-6-flash.
- **Release / knowledge:** Released 2026-07-21 (alongside 3.5 Flash-Lite; AA FAQ + Vals + model card agree). Knowledge cutoff **March 2026** (official model card; some domains limited to Jan 2025 per Gemini 3 family note). AA status: **deprecated** — only the 10k-input workload is still benchmarked; successor recommendation is 3.7 Flash (page fetched 2026-10-10).
- **IDs:** `gemini-3.6-flash` (Google). Free tier available with usage limits.
- **Context window:** 1,000,000-token input; max output 65,536 tokens (model card rounds to 64K; Vals/aimadetools confirm 65,536).
- **Modalities:** text, image, audio, video, PDF in; text out (model card; AA lists "speech" for audio). Reasoning yes; built-in function calling, structured output, code execution, computer use, search grounding.
- **Pricing (as of 2026-10-10):** current paid tier **$0.75 in / $3.75 out per 1M, cached $0.075** — promotional through **2026-12-31**, doubling to $1.50/$7.50/$0.15 on **2027-01-01** (ai.google.dev pricing, served 2026-10-09); context-cache storage $0.50→$1.00 per 1M tok/hr. Free tier with usage limits. (Correction 2026-10-10: this report previously listed only the post-2027 list price.)
- **Architecture:** proprietary, parameters undisclosed ("based on Gemini 3.5 Flash" per model card); natively multimodal Flash-tier model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (vendor launch table): **78%** (vs 3.5 Flash 76.2%); Vals independent: **73.78%** (#21/75, 3 trials)
- Terminal-Bench 4.0: no absolute value published (in AA II v4.3.2 composition; per-eval withheld)
- OSWorld-Verified (computer use): **83%** (vendor launch table vs 3.5 Flash 78.4%)
- GDPval-AA v2 (vendor): **Elo 1421** (vs 3.5 Flash 1349)
- CyberBench v1.1 (Vals): **45.36%** (#39/45 overall) but **#1 on the Patch track at 84.75%**
- Harvey Legal Agent (Vals): **3.33%** (#39/76); Finance Agent v2 (Vals): **56.30%** (#16/76); MedCode: **53.15%** (#11/106)
- Artificial Analysis Intelligence Index v4.3.2: **34**, rank **#77/227** (AA page, 2026-10-10; High effort; $1.60/task, 90M output tokens, 196.6 tok/s #13/227)
- Tau2/Tau3/BFCL/Claw: no verified public score found

Reasoning / knowledge:

- GPQA Diamond (Vals): **93.43%** (#7/138); AA-GPQA Diamond **92.8%** (added 2026-10-16 — two-source agreement)
- MMLU Pro (Vals): **89.28%**; MMMU Pro (Vals): **88.38%**
- Added 2026-10-16 (BenchLM refresh): ARC-AGI-2 **60.4%** / ARC-AGI-1 **91.2%** (ARC Prize verified — previously unmeasured); AA-HLE **40.8%** (clears the 40% bar); AA-LCR **80.0%**; CritPt **10.6%**; FrontierMath v2 **58.9%** / **22.0%** (Epoch); AA-Omniscience accuracy 50.0% / hallucination 55.6%
- Artificial Analysis Intelligence Index v4.3.2: **34** (#77/227; median 26) — includes HLE/SciCode/CritPt components

Coding:

- SWE-bench Verified (Vals): **79.60%** (#26/88)
- SWE-bench Pro (vendor launch table): **58.7%** (vs 3.5 Flash 55.1%)
- LiveCodeBench (Vals): **88.08%** (#8/143)
- DeepSWE v1.1 (vendor): **49%** (vs 3.5 Flash 37%)
- MLE-Bench (vendor): **63.9%** (vs 3.5 Flash 49.7%)
- Vibe Code Bench v1.1 (Vals): **64.00%**; ProgramBench (Vals): **0.00%**; IOI (Vals): **35.06%**; Code Migration (Vals): **30.93%**
- Vals Index: **55.35%, #13/43** (page current 2026-10-10)

Long context:

- GDM-MRCR v2 at full 1M-token depth: **54%** (vendor launch table) — roughly double 3.5 Flash and 3.1 Pro at the same depth, but still a minority-retrieval rate at the extreme
- Window: **1M tokens** in / 65,536 out

### Normalized scores (1–100)

- **Tool use: 84/100.** OSWorld-Verified 83% and vendor TB2.1 78% (Vals 73.78%) are strong-for-Flash with native computer use, the newly measured AA Agentic Index 30.1% corroborates, but GDPval ~1422 Elo is mid-frontier, AA II reads 34 (#77/227) on the current index, and the agentic advantage erodes on TB4.0-generation harnesses — docked from the earlier 93.
- **Reasoning: 87/100.** CHANGED from 85 — GPQA Diamond 93.43% (#7/138, Vals; AA 92.8%), MMLU-Pro 89.28%/MMMU-Pro 88.38% corroborating, plus the newly measured ARC-AGI-2 60.4% (ARC Prize verified), AA-HLE 40.8% (clears the bar), AA-LCR 80.0% and FrontierMath 58.9%/22.0% — a full reasoning picture now exists and lands high-mid.
- **Context window: 93/100.** 1M input with MRCR v2 54% at full 1M depth — the best Flash-line retrieval evidence but a minority retrieval rate at the extreme, so short of the 95+ ≥1M norm; AA-LCR 80.0% adds independent depth evidence.
- **Multimodal: 88/100.** Full omni input (text/image/audio/video/PDF) with text-only output; the newly measured AA-MMMU-Pro 83.2% makes this the strongest measured vision in the 3.x Flash line.
- **Coding: 86/100.** SWE-bench Verified 79.60% (#26/88, Vals), LiveCodeBench 88.08% (#8/143) and MLE-Bench 63.9% are solid mid-frontier; SWE-Pro 58.7%, DeepSWE 49%, the new CursorBench 3.2 53.5% and AA-SciCode 53.4% lag the 2026 coding frontier — revised down from 89 now that independent per-benchmark numbers exist.
- **Cost efficiency: 85/100.** Promo pricing $0.75/$3.75 (cached $0.075) through 2026-12-31 halves the earlier bill basis, plus the 17–65% output-token reduction and free tier; the 2027-01-01 doubling to $1.50/$7.50 is scheduled and priced in.
- **Overall Score: 88/100.** CHANGED from 87 — five-dim mean per `RULES.md` (Cost excluded): (84 + 87 + 93 + 88 + 86) / 5 = 438/5 = 87.6 → **88**. Best fit: current-generation default for scaled agents and coding — check 3.7/3.8 first, but this remains the value pick of the 3.x Flash line while promo pricing lasts.

---

## Signature

- Provided by: **GLM 5.3 Flash (z.ai/glm-5.3-flash)** — 2026-10-16
- Method: public internet research, second pass 2026-10-10 (≥3 independent sources: deepmind.google model card + ai.google.dev pricing, Artificial Analysis v4.3.2 page, Vals AI model page, aimadetools launch comparison); scores are normalized 1–100 interpretations, not official vendor scores. This pass corrects the v3-era six-dim Overall formula to the v4 five-dim rule and adds the first independent GPQA/SWE-bench/LiveCodeBench measurements; 2026-10-16 re-check: ARC-AGI-2 60.4%, AA-HLE 40.8%, AA-LCR 80.0%, FrontierMath 58.9/22.0, AA-MMMU-Pro 83.2% added — Reasoning 85→87, Overall 87→88).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
