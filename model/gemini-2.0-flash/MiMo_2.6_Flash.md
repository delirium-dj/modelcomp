# Gemini 2.0 Flash — findings by Mimo 2.6 Flash

- Source: Google/Gemini 2.0 Flash (`gemini-2.0-flash-001`)
- Date: 2026-11-11 (UTC; original research 2026-09-27, re-researched 2026-10-09, second-pass enrichment 2026-11-11)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass enrichment — 2026-11-11** (user-approved). Previous Signature
> 2026-10-09 (Overall 73). Fresh sources this pass: **BenchLM model page**
> (snapshot 2026-11-10, **16/812 rows, still unranked/no overall**) carrying
> Google-tech-report and Artificial Analysis rows for this ID, and the
> **live AA model page** (checked 2026-11-11). Changes: **Reasoning 60→56**
> — two named gaps filled at the bottom of the scale: **CritPt 0.0%** and
> the first **AA-Omniscience net −42.5 (accuracy 23.5 / hallucination
> 86.2%)** — the same bottom-of-scale pattern that moved Gemini 2.5 Flash;
> the previous rationale ("all land squarely inside the mid band") no
> longer describes the full row set. The mid-band core is intact and NOT
> contested (GPQA 65.2/63.6/62.3/62.2 all agree; HLE 4.3–5.3; MMLU-Pro
> 78.2; AIME 29.7–33.0), which limits the drop. **Overall 73→72**
> ((62+56+95+92+58)/5 = 361/5 = 72.2). Held: Tool 62 (τ² 29.5
> re-confirms; TB2.1/GDPval/Claw/Toolathon/MCP rows still all absent),
> Context 95 (new AA-LCR 31.3 is long-context **reasoning**, not
> retrieval; HELM figures unchanged), Multimodal 92 (tech-report MMMU
> 69.3 vs recorded 70.7 = band-level re-confirm; output-modality conflict
> unchanged), Coding 58 (**SWE-bench Verified 21.4** now fills the named
> gap — at floor level alongside LCB 21.0, so it corroborates rather than
> changes the weak-harness cap), Cost 96 (historical pricing; endpoint
> still shut down). AA page now shows Index **N/A ("Unknown")** —
> estimate→N/A = unmeasured, not a level change (BenchLM 8.9 re-confirms
> the recorded 9-estimated).

## Model card

- **Name:** Gemini 2.0 Flash (Google; historical model — **no "Free"-tier wording applies**; Google AI Studio's free preview tier was promotional and is gone with the model)
- **Short description:** Google's first Gemini 2 model (preview 2024-12-11, GA 2025-02-05), a fast 1M-context multimodal workhorse that displaced Gemini 1.5 Pro as the Gemini flagship. **Deprecated and shut down 2026-06-01**, replaced by Gemini 3.6 Flash; kept here as a historical reference for the 2.0 generation.
- **Provider / access:** Google Gemini API (`gemini-2.0-flash`, snapshot `gemini-2.0-flash-001`) and Google Cloud Vertex AI — `generateContent` / Google's OpenAI-compatibility layer, **not** a first-party OpenAI Chat Completions endpoint. Also indexed on OpenCode Zen as `google/gemini-2.0-flash`. **Service is off as of 2026-06-01.**
- **Release / knowledge:** preview 2024-12-11; GA `gemini-2.0-flash-001` 2025-02-05; all variants (`-001`, `-exp`) shut down 2026-06-01 (Google AI for Developers model page) — **re-confirmed 2026-10-09: the official models page now lists "Gemini 2.0 Flash (Shut down)"** under Previous models. Knowledge cutoff: **August 2024** (first pass) vs **June 2024** (AA catalog, 2026-10-09) — both kept, Google's original docs preferred.
- **IDs:** `google/gemini-2.0-flash` (Gemini API `gemini-2.0-flash`, `gemini-2.0-flash-001`, `gemini-2.0-flash-exp`). **No Free ID exists on OpenCode Zen** (`noFreeId`); the model itself is retired.
- **Context window:** **1,048,576 input tokens**; max output **8,192** on the Gemini API (Vertex AI documents up to 65,536 for the same model id) — verified on Google's own model pages.
- **Modalities:** text, image, audio, video, code and PDF in; **text out on the GA id** — Google's docs explicitly mark `Image generation: Not supported` and `Audio generation: Not supported` for `gemini-2.0-flash`, while native image + audio output shipped on the separate `gemini-2.0-flash-exp` / Multimodal Live API endpoints. Reasoning: `Thinking` is experimental (unsupported on Vertex for this id). Tool calls yes (function calling, parallel calls); JSON/structured outputs yes; code execution, Google Search grounding, URL context, context caching yes. Live API not supported on the GA id.
- **Pricing (as of 2026-09-27 — historical, model retired):** Gemini API / AI Studio **$0.10 in / $0.40 out per 1M** (cache read $0.03; audio input $0.70); Vertex AI **$0.15 / $0.60 per 1M**. No current free tier — the endpoint no longer serves traffic.
- **Architecture:** proprietary dense multimodal transformer; Google never published a parameter count (one tracker estimates ~175B).

### Raw benchmarks found

> Sources are attached to every number. Absent benchmarks say
> "no verified public score found" — nothing below is estimated.

Agent / tool use:

- Tau2-bench: **29.5%** <(AI Flash Report tracker, benchmark data verified 2026-07-20); BenchLM now sources the identical 29.5% to AA — re-confirm 2026-11-10>
- Terminal-Bench Hard: **3.8%** <(same source — a different harness from TB 2.0/2.1)>
- Terminal-Bench 2.1: **no verified public score found** (absent from the TB2.1 leaderboard)
- GDPval-AA: **no verified public score found**
- OSWorld / AutomationBench: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas: **no verified public score found**
- Verified platform capabilities (not scores): function calling, code execution, Google Search grounding, URL context, structured outputs, explicit context caching <(Google Gemini API + Vertex model pages)>
- Second-pass note (2026-10-09): AA's historical page lists Index **9 (estimated)** (#104/300 non-reasoning, median 7) and — conflicting with Google's own GA-id docs — "text and image" output (likely reflecting the `-exp`/Live-variant family; Google's doc row "Image generation: Not supported" for the GA id remains primary). AA's deprecation banner recommends Gemini 2.5 Flash, itself now deprecated — stale successor chain.
- Third-pass note (2026-11-11): live AA page now shows Index **N/A ("Unknown")** — estimate→N/A = unmeasured, not a level change (BenchLM carries **8.9**, re-confirming the recorded 9-estimated); AA output row still says "text and image" (conflict unchanged); AA banner still recommends Gemini 2.5 Flash (chain now ends at 3.8 Flash per 2nd pass).

Reasoning / knowledge:

- GPQA Diamond: **63.6%** <(AI Flash Report, verified 2026-07-20); Artificial Analysis harness **62.2%** via LangDB> — **tech-report corroboration (new): GPQA 65.2%** (Gemini 2.5 technical report Table 3 via BenchLM, 2026-11-10) and **AA-GPQA 62.3%** (AA via BenchLM) — all four readings agree in-band, none converted
- Humanity's Last Exam: **4.7%** <(AI Flash Report); AA harness **5.3%** via LangDB> — **AA-HLE 4.3%** now via BenchLM (2026-11-10) — re-confirms the same sub-10% band
- MMLU-Pro: **78.2%** <(AI Flash Report); AA harness **77.15%** via LangDB>
- AIME 2025: **30.0%** <(AI Flash Report); AA harness **33.0%** via LangDB> — tech-report **29.7%** (2.5 tech report Table 3 via BenchLM) corroborates
- Artificial Analysis Intelligence Index: **33.6** <(AA data via LangDB snapshot 2026-04-28 — index vintages differ between trackers, do **not** compare directly with index values in other reports)> — recorded AA-page reading **9 (estimated)** / CloudPrice 9.9; **BenchLM now shows 8.9** (re-confirm) and the live AA page shows **N/A ("Unknown")** (estimate→N/A = unmeasured, not a level change — 2026-11-11)
- IF-Bench: **40.2%** <(AI Flash Report)> — **AA-IFBench 40.2%** identical via BenchLM (re-confirm)
- **CritPt: 0.0%** (AA via BenchLM, 2026-11-10) — **new; the named "CritPt: no verified public score" gap is filled at the floor of the scale**
- **AA-LCR: 31.3%** (AA via BenchLM) — **new; fills the LCR gap** — long-context **reasoning**, not retrieval
- **SimpleQA: 29.9%** (Gemini 2.5 technical report Table 3 via BenchLM) — **new**, weak knowledge row
- **AA-Omniscience: net −42.5, accuracy 23.5%, hallucination rate 86.2%** (AA via BenchLM) — **new; first measurement of this axis, severe** (the named "Omniscience: no verified public score" gap is filled)
- MLCR: no verified public score found (re-checked 2026-11-11)

Coding:

- SWE-bench Verified: **21.4%** (Gemini 2.5 technical report Table 3 via BenchLM, 2026-11-10) — **new; the named "SWE-bench Verified: no verified public score" gap is filled, at floor level** (TensorFeed previously listed "not reported")
- LiveCodeBench: **21.0%** <(AI Flash Report, verified 2026-07-20); Artificial Analysis harness **33.4%** via LangDB; LiveCodeBench-Reasoning variant **28.3%** <(AI Flash Report)>
- SciCode: **34.0%** <(AI Flash Report); AA harness **33.3%** via LangDB>
- HumanEval: **90.7%** <(AI Flash Report)>
- AA Coding Index: **23.4** <(AA data via LangDB)>
- MATH-500: **91.1%** <(AI Flash Report); a 93.0 value also circulates via LangDB>
- Natural2Code: **92.9%** <(llm-stats, Google launch chart)>
- Vibe Code Bench / DeepSWE / SWE-bench Pro: **no verified public score found**

Long context (all measured independently by Stanford CRFM, HELM Long Context, 2025-09-29):

- HELM Long Context mean score: **0.527** (7 models in the 1M cohort; ranked 3rd behind GPT-4.1 0.588)
- RULER SQuAD: **0.85** · RULER HotPotQA: **0.55** · ∞Bench En.MC: **0.87** · ∞Bench En.Sum: **0.151** · OpenAI-MRCR: **0.216**
- Google's own Michelangelo MRCR numbers for 2.0 Flash were internal and are **not publicly reproducible** (noted by HELM)
- MRCR / RULER measured at the full 1M window: **no verified public score found**

### Normalized scores (1–100)

- **Tool use: 62/100.** Tau2-bench 29.5% clears the methodology's mid band (Tau 10–25%) and native function calling / code execution / grounding are verified on Google's own docs; capped at 62 by Terminal-Bench Hard 3.8% plus **no verified public score found** for Terminal-Bench 2.1, GDPval-AA and Claw-Eval — two of the three frontier anchors are simply absent.
- **Reasoning: 56/100.** The mid-band core is intact and un-contested (GPQA 62.2–65.2 across four harnesses, MMLU-Pro 78.2, AIME 29.7–33.0, HLE 4.3–5.3 → the methodology's 55–65 band), but the row set is no longer "all mid band": two named gaps filled at the bottom of the scale — **CritPt 0.0%** and first **AA-Omniscience net −42.5 (accuracy 23.5 / hallucination 86.2%)** — plus weak SimpleQA 29.9 and AA Index ~9/N/A → 56 (was 60), the bottom of the band rather than its middle. Nothing reaches the frontier references (GPQA 90%+, HLE 40%+) and two axes now measure at the floor.
- **Context window: 95/100.** 1,048,576 tokens puts it in the ≥1M tier (95–100); capped at 95 because HELM's independent long-context runs show real depth limits — OpenAI-MRCR 0.216 and RULER HotPotQA 0.55 — so the ≥98%-retrieval condition for a 100 is nowhere close.
- **Multimodal: 92/100.** Text + image + audio + video + PDF input with non-text output on the experimental/Live endpoints sits in the "+audio in or any non-text out = 90–100" band; capped below 95 because the GA `gemini-2.0-flash` id is text-only output (Google docs: image and audio generation *not supported*) and MMMU 70.7% (tech-report 69.3% via BenchLM, 2026-11-10 — re-confirm) is mid-pack for a multimodal flagship.
- **Coding: 58/100.** HumanEval 90.7% and Natural2Code 92.9% are solid, but the meaningful harnesses are weak: LiveCodeBench 21.0% (AA harness 33.4%) sits far below the mid-band reference (~80%), SciCode 34% is under 40%, AA Coding Index 23.4, and the newly-filled **SWE-bench Verified 21.4%** (2.5 tech report via BenchLM) lands at the same floor level — it corroborates rather than changes the picture (no change; the "absence" cap is now a "presence-at-floor" cap).
- **Cost efficiency: 96/100.** $0.10/$0.40 per 1M (cache read $0.03) is at the "~$0.10/$0.20 ≈ 97–99" anchor, one notch down for the $0.40 output rate; the caveat is that this is a **retired** endpoint (shutdown 2026-06-01), so the price is historical rather than purchasable, and there is no OpenCode Zen free ID.
- **Overall Score: 72.6/100.** (62 + 56 + 95 + 92 + 58) / 5 = 361/5 = 72.2 → 72 (half-up, Cost excluded). Best fit: a cheap, fast, full-multimodal-input model for high-volume parsing/summarizing of long mixed media — but weak on agentic tool use and coding, with now-measured floor-level CritPt/Omniscience reasoning, and no longer available for new integrations.

---

## Signature

- Provided by: **Mimo 2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-11-11 (original: 2026-09-27; second pass 2026-10-09; user-approved second-pass enrichment 2026-11-11)
- Method: public internet research (Google Gemini API and Vertex model docs, Google Developers Blog, Stanford CRFM HELM Long Context, TechCrunch, deeplearning.ai, AI Flash Report, LangDB/Artificial Analysis data, llm-stats); second pass 2026-10-09 re-checked the official [Gemini API models page](https://ai.google.dev/gemini-api/docs/models) ("Gemini 2.0 Flash (Shut down)" under Previous models) and [AA's historical page](https://artificialanalysis.ai/models/gemini-2-0-flash) (Index 9, stale deprecation chain, modality/cutoff conflicts); **enrichment pass 2026-11-11** re-checked the [BenchLM Gemini 2.0 Flash page](https://benchlm.ai/models/gemini-2-0-flash) (snapshot 2026-11-10: 16/812 rows, unranked — CritPt 0.0, AA-Omniscience −42.5/23.5/86.2, AA-LCR 31.3, SWE-V 21.4, GPQA 65.2, HLE 4.3, IFBench 40.2, AIME 29.7, SimpleQA 29.9, Index 8.9, MMMU 69.3, τ² 29.5), the live [AA model page](https://artificialanalysis.ai/models/gemini-2-0-flash) (Index now N/A, deprecated, historical-only), and the official [Gemini API deprecations page](https://ai.google.dev/gemini-api/docs/deprecations) (shutdown 2026-06-01 → `gemini-3.6-flash`, re-confirmed); Grokipedia 404; scores are normalized 1–100 interpretations, not official vendor scores; conflicting readings (GPQA 63.6/62.2/65.2/62.3; MMMU 70.7/69.3; Index 33.6/9.9/9/8.9/N/A) reported side by side, none converted; estimate→N/A treated as unmeasured.
- Future sources: add a new file next to this one, e.g. `Gemini_2.0_Flash.md`, using the same headings.

---

### Deep-research addendum (2026-10-09)

- **Shutdown re-confirmed** from Google's own models page (listed "(Shut down)"); the entry remains a historical record (dataset permanence applies).
- **Conflicts kept:** cutoff Aug-2024 (Google docs) vs Jun-2024 (AA catalog); GA-id text-only output (Google docs) vs AA's "text and image" row (likely `-exp` family).
- **New:** AA Index 9 (estimated, #104/300); AA's recommended successor chain (2.5 Flash) is itself stale — the line now ends at 3.8 Flash.
- **Scores:** no dimension changed; Overall held at 73.
