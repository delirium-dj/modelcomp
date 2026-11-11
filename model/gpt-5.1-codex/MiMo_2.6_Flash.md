# GPT-5.1 Codex — findings by MiMo 2.6 Flash

- Source: OpenAI (`gpt-5.1-codex`; evaluated route OpenCode Zen `opencode/gpt-5.1-codex`)
- Date: 2026-11-11 (UTC; original research 2026-10-16, second-pass enrichment 2026-11-11)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass enrichment — 2026-11-11** (user-approved). Previous Signature
> 2026-10-16 (Overall 69). Fresh sources this pass: **BenchLM model page**
> (snapshot 2026-11-10, **53.61/100, #81/1020, 16/812 rows**) and the
> **live AA model page** (checked 2026-11-11). Changes: **Multimodal
> 62→68** — the named "no multimodal benchmark row for this ID" gap is
> filled with a solid independent reading: **AA-MMMU-Pro 72.5%** (mid-upper
> for the field — above claude-sonnet-4's 61.8–62.4, near qwen-3.5-35b's
> 75.1), moving it off the floor of the +image-in band; held below the 70
> ceiling by text-only output and no audio/video/PDF input (Design Arena
> Website 1158 = noise). **Overall 69→70** ((62+68+80+68+74)/5 = 352/5 =
> 70.4). Held: Tool 62 (τ² 83 re-confirms; new Gert Labs 49.68 mid and
> JobBench 26.2 weak corroborate the mixed profile; Tau3/OSWorld/MCP/
> Toolathon gaps persist, GDPval 826 unchanged), Reasoning 68 (all caps
> re-confirm: Index 23.7≈24, CritPt 5.7≈6, Omniscience −6.5≈−7 with new
> detail acc 39.9 / halluc 77.2; new AA-IFBench 70.0 is mid-good but
> clears no cap; GPQA 86.0 / HLE 25.7 / LCR 69.3 identical), Context 80
> (no new retrieval row), Coding 74 (**Vibe Code Bench 13.12%** now
> fills the named VCB gap — at floor level, corroborating rather than
> changing the weak-row balance; LCB Vals 85.6 re-confirms 84.9; SWE-V/
> DeepSWE/SWE-Pro still absent), Cost 78 ($1.25/$10.00 + 90% cache +
> $1.34 blended re-confirmed). AA page now shows Index **N/A** —
> estimate→N/A = unmeasured, not a level change; access note: AA lists
> only **1 serving provider** now; speed drift 127→95 tok/s, TTFT 16.9s.

## Model card

- **Name:** GPT-5.1 Codex (vendor style GPT-5.1-Codex)
- **Short description:** OpenAI's GPT-5.1 specialization for agentic coding in Codex-like environments — more steerable than base GPT-5.1, tuned for long independent runs, structured code reviews, and instruction adherence. Distinct from GPT-5.1-Codex-Max (Nov 19, 2025, higher-effort sibling) and from the later GPT-6 Codex/Sol line. **Status note: OpenAI's model page now marks GPT-5.1-Codex "Deprecated"** (verified 2026-10-16).
- **Provider / access:** OpenAI — Responses API only (per OpenAI docs; underlying snapshot regularly updated); also served via Azure and OpenRouter providers; evaluation route OpenCode Zen `opencode/gpt-5.1-codex` (Chat Completions).
- **Release / knowledge:** Released 2025-11-12/13 (ModelBeat: Nov 12; OpenRouter: Nov 13, 2025); knowledge cutoff Sep 30, 2024 (OpenAI docs). HLE re-scored upward Aug 2026 (23.4% → 25.7%).
- **IDs:** `openai/gpt-5.1-codex` (OpenAI API / OpenRouter); `opencode/gpt-5.1-codex` (Zen). No Free ID found.
- **Context window:** 400,000 tokens total; 128,000 max output tokens (OpenAI docs).
- **Modalities:** text + image in (UI screenshots, images) → text out; reasoning tokens with adjustable `reasoning.effort` (adapts dynamically — fast for small tasks, extended runs for large projects); function calling, structured outputs, streaming. No audio/video.
- **Pricing (as of 2026-10-16):** $1.25 in / $10.00 out per 1M tokens; cached input $0.125 (90% cache discount); AA blended cost-per-1M $1.34. No free tier.
- **Architecture:** proprietary (closed weights, GPT-5.1 family; snapshot regularly updated).

### Raw benchmarks found

Agent / tool use:

- τ²-Bench Telecom: **83.0%** (Artificial Analysis, GPT-5.1 Codex High) — BenchLM sources the identical 83% to AA (re-confirm 2026-11-10)
- Terminal-Bench: **57.8%** (ModelBeat / Epoch AI; version not specified on source — consistent with launch-era TB 2.x reporting)
- GDPval-AA v2.1: **826 Elo** (Artificial Analysis — below the 900–1200 mid band)
- APEX (multi-step agentic): **20.7%** (ModelBeat / Epoch AI)
- **Gert Labs: 49.68%** (Gert Labs rankings via BenchLM — **new**, mid)
- **JobBench: 26.2%** (JobBench paper via BenchLM — **new**, weak)
- Tau3-Banking / OSWorld / MCP-Atlas / Toolathon: no verified public score found (re-checked 2026-11-11)

Reasoning / knowledge:

- GPQA Diamond: **86.0%** (Artificial Analysis / Epoch AI — both sources agree) — AA-GPQA 86.0 identical via BenchLM (re-confirm)
- HLE: **25.7%** (Artificial Analysis / Epoch AI; improved from 23.4% per Aug 2026 changelog) — AA-HLE 25.7 identical via BenchLM (re-confirm)
- AA-LCR v1.1: **69.3%** (comparison page rounds to 69%) — identical via BenchLM
- CritPt: **6%** (Artificial Analysis comparison) — BenchLM now shows **5.7%** (re-confirm)
- AA-Omniscience: **−7** (Artificial Analysis comparison — net hallucination-prone on unverifiable claims) — BenchLM detail: **net −6.5, accuracy 39.9%, hallucination rate 77.2%** (re-confirm with components)
- AA Intelligence Index: **23.7 → ~24** (estimated, High effort; mid band) — BenchLM 23.7 re-confirms; live AA page now shows **N/A ("Unknown")** — estimate→N/A = unmeasured, not a level change (2026-11-11)
- **AA-IFBench: 70.0%** (AA via BenchLM — **new**, mid-good instruction-following row)
- AA Math Index / AIME 2024/2025: **95.7%**; MMLU-Pro: **86.0%** (Epoch AI)
- Epoch AI composite percentiles: Intelligence 46th, Coding 36th, Agentic 31st (of tracked models)

Coding:

- LiveCodeBench: **84.9%** (Epoch AI) — **Vals LCB 85.6%** independent run now corroborates (new via BenchLM, 2026-11-10)
- SciCode: **40.2%** (Epoch AI)
- WebDev Arena: **1336** (human-rated)
- **Vibe Code Bench: 13.12%** (Vals v1.1 via BenchLM — **new; the named "Vibe Code Bench: no verified public score" gap is filled, at floor level**)
- SWE-bench Verified / SWE-bench Pro / DeepSWE: no verified public score found for this exact ID (re-checked 2026-11-11)

Long context:

- 400K window / 128K output — no MRCR / RULER / GraphWalks retrieval-at-length published (re-checked 2026-11-11)

Multimodal:

- **AA-MMMU-Pro: 72.5%** (Artificial Analysis via BenchLM, 2026-11-10) — **new; the named "no multimodal benchmark row for this ID" gap is filled with a solid independent reading** (mid-upper for the field)
- Design Arena Website: **1158** (OpenRouter via BenchLM — new; noise-level signal)

### Normalized scores (1–100)

- **Tool use: 62/100.** τ²-Bench Telecom 83.0% is genuinely strong (above the ~50%+ Tau frontier reference), but Terminal-Bench 57.8% sits in the mid band (TB 45–60 → 50–70), GDPval-AA 826 is below even the 900–1200 mid band, and APEX 20.7% is weak — a mixed agentic profile that caps the score in the 60s despite excellent tool-reliability on τ².
- **Reasoning: 68/100.** GPQA Diamond 86.0% and HLE 25.7% are solid, AA-LCR 69.3% is genuinely good, and math is elite (AIME 95.7); capped hard by the low AA Intelligence Index (~24, mid band), CritPt 6%, and AA-Omniscience −7 (frequent hallucination on unknowable claims) — reasoning depth is real but far below the 2026 frontier.
- **Context window: 80/100.** Verified 400K total / 128K out sits in the upper half of the 200K–500K tier (65–84, 200K = 70); no retrieval-at-length measurement to justify the top of the band, and it trails every 1M-context 2026 flagship.
- **Multimodal: 68/100.** Text + image in → text out fills the +image-in band (60–70), and the named "no multimodal benchmark row" gap is now filled by a solid independent **AA-MMMU-Pro 72.5%** (mid-upper for the field — above claude-sonnet-4's 61.8–62.4, near qwen-3.5-35b's 75.1) → 68 (was 62, the floor where "measured vision quality" was absent). Still held below the 70 ceiling by no video/PDF/audio input and text-only output; Design Arena 1158 is noise.
- **Coding: 74/100.** LiveCodeBench 84.9% (Vals 85.6 independent re-confirm) is strong and the model is purpose-built for agentic coding (structured reviews, multi-hour runs), but SciCode 40.2% is below the 55%+ frontier reference, Terminal-Bench 57.8% is mid-band, Epoch's Coding Index sits at the 36th percentile, and the newly-filled **Vibe Code Bench 13.12%** lands at floor level — it corroborates rather than changes the weak-row balance (no change); SWE-bench Verified still unverified for this ID.
- **Cost efficiency: 78/100.** $1.25/$10 with a 90%-off cache tier ($0.125) is well below flagship pricing — between the $1.25/$4.25 (~88) and $3/$15 (~60) anchors, pulled down by the $10 output price and up by cheap cached reads and 127 tok/s; the practical argument down is that OpenAI itself deprecated the model in favor of stronger Codex/Sol successors at comparable rates.
- **Overall Score: 70/100.** Mean of the five non-cost dims (62 + 68 + 80 + 68 + 74) / 5 = 70.4 → 70. Best-fit: budget long-session coding agent for instruction-following refactors and code review where τ²-level tool reliability, measured solid vision (MMMU-Pro 72.5) and 400K context matter more than frontier reasoning — now a deprecated endpoint, so prefer GPT-5.1-Codex-Max or the GPT-6 Sol line for anything new.

---

## Signature

- Provided by: **MiMo 2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-11-11 (original: 2026-10-16; user-approved second-pass enrichment)
- Method: public internet research across 4 independent sources (OpenAI developer model page, OpenRouter model page with Artificial Analysis benchmark block, Artificial Analysis GPT-5.1 vs GPT-5.1-Codex comparison, ModelBeat/Epoch AI specs page); conflicts compared (release date Nov 12 vs Nov 13 noted; AA index rounding 23.7 vs ~24 flagged); **enrichment pass 2026-11-11** re-checked the [BenchLM GPT-5.1-Codex page](https://benchlm.ai/models/gpt-5-1-codex) (snapshot 2026-11-10: 53.61 #81/1020, 16/812 rows — MMMU-Pro 72.5, VCB 13.12, LCB Vals 85.6, Gert 49.68, JobBench 26.2, IFBench 70.0, CritPt 5.7, Omniscience −6.5/39.9/77.2, Index 23.7) and the live [AA model page](https://artificialanalysis.ai/models/gpt-5-1-codex) (Index now N/A, deprecated, 1 provider, $1.25/$10.00 re-confirmed); scores are normalized 1–100 interpretations, not official vendor scores; estimate→N/A treated as unmeasured.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

