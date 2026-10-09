# Gemini 3.6 Flash — findings by GLM 5.3 Flash

- Source: Google (`gemini-3.6-flash`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash (Google's Flash-tier workhorse; successor to 3.5 Flash, superseded by 3.7 Flash on 2026-08-13 and 3.8 Flash on 2026-09-02)
- **Short description:** July 2026 Flash workhorse: same 1M multimodal window as 3.5 Flash but with stronger agentic, coding, computer-use and long-context scores while using ~17% fewer output tokens (up to 65% fewer on DeepSWE) — the token-efficiency win compounds on scaled agent loops.
- **Provider / access:** Google — Gemini API / Vertex AI ID `gemini-3.6-flash`; also AI Studio, Gemini app, Search AI Mode, Antigravity IDE. `generateContent` API; model card PDF on storage.googleapis.com.
- **Release / knowledge:** released 2026-07-21 (with 3.5 Flash-Lite and limited-access 3.5 Flash Cyber). Knowledge cutoff **March 2026**; search grounding recommended for newer info.
- **IDs:** `gemini-3.6-flash` (Google). Free tier available with usage limits.
- **Context window:** 1,048,576 tokens input, 64,000-token max output (ai-tldr spec block; BenchLM 1M; designforonline 1,048,576).
- **Modalities:** text, image, audio, video, PDF in; text out. Reasoning yes; built-in function calling, structured output, code execution, computer use, search grounding.
- **Pricing (as of 2026-10-09):** promotional $0.75 in / $3.75 out per 1M (felloai, cloudprice; tracker attribution of the promo varies — DataCamp attributes $0.75/$3.75 promotional through December 31, 2026 to the Flash tier, rising to $1.50/$7.50 on January 1, 2027), list price $1.50/$7.50 (models.dev), cached input $0.15/1M, context-cache storage $1.00/1M/hr; free tier with usage limits. Cheaper output than 3.5 Flash ($9.00) and fewer tokens per task.
- **Architecture:** proprietary, parameters undisclosed; natively multimodal Flash-tier Gemini positioned for scaled agentic and knowledge work.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (agentic terminal coding): **78%** — vs 3.5 Flash 76.2%, 3.1 Pro 73.8% (Google launch table, 2026-07-21, via ai-tldr); Vals harness: **73.8%** (benchlm.ai)
- OSWorld-Verified (agentic computer use): **83%** — vs 3.5 Flash 78.4% (same source)
- GDPval-AA v2: **1421–1423 Elo** (Google launch table; AA-normalized 39.3% per benchlm.ai) — vs 3.5 Flash 1349, 3.1 Pro 965
- AA Agentic Index: **30.1%** (Artificial Analysis via benchlm.ai)
- Tau2/Tau3/BFCL/Claw: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.8%** (AA-GPQA Diamond via benchlm.ai — fills the previously-missing GPQA); Vals harness: **93.4%**
- HLE: **40.8%** (AA-HLE via benchlm.ai — fills the previously-missing HLE)
- ARC-AGI-1: **91.2%** verified; ARC-AGI-2: **60.4%** verified (ARC Prize official results via benchlm.ai)
- AA-LCR: **80.0%** (Artificial Analysis long-context-reasoning board via benchlm.ai — new measured long-context evidence)
- CritPt: **10.6%** (AA via benchlm.ai)
- Artificial Analysis Intelligence Index: **34.0** (AA via benchlm.ai)
- AA-Omniscience: Index 22.1, accuracy **50.0%**, hallucination rate **55.6%** (benchlm.ai)
- MMLU-Pro (Vals): **89.3%** (benchlm.ai)

Coding:

- SWE-Bench Pro (agentic coding): **58.7%** — vs 3.5 Flash 55.1%, 3.1 Pro 54.2% (Google launch table); SWE-bench (Vals): **79.6%**
- LiveCodeBench: **88.1%** (Vals AI board via benchlm.ai — fills the previously-missing LCB)
- AA-SciCode: **53.4%** (AA via benchlm.ai)
- DeepSWE v1.1: **49%** — vs 3.5 Flash 37%, 3.1 Pro 12% (Google launch table)
- CursorBench 3.2: **53.5%** (Cursor evals via benchlm.ai)
- AA Coding Index: **69.2%** (AA via benchlm.ai)
- MLE-Bench: **63.9%** — vs 3.5 Flash 49.7%, 3.1 Pro 42.6% (Google launch table)
- SWE-bench Verified / Vibe Code Bench: no verified public score found

Long context:

- GDM-MRCR v2 at full 1M-token depth: **54%** — roughly double 3.5 Flash and 3.1 Pro at the same depth (Google launch table); AA-LCR **80.0%** (benchlm.ai); window 1M in / 64K out

Multimodal / vision:

- AA-MMMU-Pro: **83.2%** (Artificial Analysis via benchlm.ai — fills the previously-missing vision benchmark); Design Arena Website: **1304** (OpenRouter)

### Normalized scores (1–100)

- **Tool use: 82/100.** TB2.1 78% (Vals 73.8%) and OSWorld-Verified 83% are strong, but GDPval-AA 1421 Elo (39.3% AA-normalized) sits mid-band (~900–1200 → 50–70; ~1750+ → 90–100) and AA Agentic Index 30.1% is mid-low — capped by the AA agentic evidence.
- **Reasoning: 87/100.** GPQA Diamond 92.8–93.4% clears the 90%+ frontier reference, HLE 40.8% and ARC-AGI-2 60.4% sit at the band threshold; AA Intelligence Index 34.0 and CritPt 10.6 cap it below 90.
- **Context window: 96/100.** 1M input (≥1M tier = 95–100) with measured retrieval: GDM-MRCR v2 54% at full 1M depth and AA-LCR 80.0% — strong but below the ≥98% bar for 100; 64K output cap.
- **Multimodal: 88/100.** Full omni input incl. PDF and computer-use vision with measured AA-MMMU-Pro 83.2%; text-only output; top of the +video/PDF band.
- **Coding: 87/100.** SWE-Pro 58.7, SWE-bench (Vals) 79.6%, LiveCodeBench (Vals) 88.1%, DeepSWE 49, AA-SciCode 53.4 (just under the 55%+ frontier mark), AA Coding Index 69.2 — strong Flash-tier package; DeepSWE below the 74%+ threshold caps it.
- **Cost efficiency: 86/100.** Promotional $0.75/$3.75 through December 31, 2026 (then $1.50/$7.50) sits between the ~$0.60/$2.20 = 92 and ~$1.25/$4.25 = 88 anchors; free tier plus the 17–65% output-token reduction and $0.15 cache take real edge off the bill — scored on the promo tier with the temporary-window caveat.
- **Overall Score: 88/100.** Mean of the five quality dims (82 + 87 + 96 + 88 + 87) / 5 = 88.0. Best fit: current-generation default for scaled agents and coding — check 3.7/3.8 first, but this is the value pick of the 3.x Flash line while the promo lasts.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-09
- Method: public internet research (DuckDuckGo search; benchlm.ai full benchmark tables updated 2026-10-09, felloai, cloudprice, ai-tldr launch-table sources cross-checked); scores are normalized 1–100 interpretations, not official vendor scores. Second-pass enrichment: adds measured GPQA 92.8/93.4%, HLE 40.8%, ARC-AGI-2 60.4%, AA-LCR 80.0%, LiveCodeBench 88.1%, AA-MMMU-Pro 83.2%, AA Index 34.0, promo pricing — Tool 93→82, Reasoning 76→87, Context 98→96, Coding 89→87, Cost 80→86; Overall 89→88 (old draft also misstated its own six-dim mean).
- Future sources: add a new file next to this one, e.g. `Gemini_3.7.md`, using the same headings.
