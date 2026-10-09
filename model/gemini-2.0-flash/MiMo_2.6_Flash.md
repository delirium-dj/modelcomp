# Gemini 2.0 Flash — findings by Mimo 2.6 Flash

- Source: Google/Gemini 2.0 Flash (`gemini-2.0-flash-001`)
- Date: 2026-10-09 (UTC; original research 2026-09-27, re-researched 2026-10-09)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

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

- Tau2-bench: **29.5%** <(AI Flash Report tracker, benchmark data verified 2026-07-20)>
- Terminal-Bench Hard: **3.8%** <(same source — a different harness from TB 2.0/2.1)>
- Terminal-Bench 2.1: **no verified public score found** (absent from the TB2.1 leaderboard)
- GDPval-AA: **no verified public score found**
- OSWorld / AutomationBench: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas: **no verified public score found**
- Verified platform capabilities (not scores): function calling, code execution, Google Search grounding, URL context, structured outputs, explicit context caching <(Google Gemini API + Vertex model pages)>
- Second-pass note (2026-10-09): AA's historical page lists Index **9 (estimated)** (#104/300 non-reasoning, median 7) and — conflicting with Google's own GA-id docs — "text and image" output (likely reflecting the `-exp`/Live-variant family; Google's doc row "Image generation: Not supported" for the GA id remains primary). AA's deprecation banner recommends Gemini 2.5 Flash, itself now deprecated — stale successor chain.

Reasoning / knowledge:

- GPQA Diamond: **63.6%** <(AI Flash Report, verified 2026-07-20); Artificial Analysis harness **62.2%** via LangDB>
- Humanity's Last Exam: **4.7%** <(AI Flash Report); AA harness **5.3%** via LangDB>
- MMLU-Pro: **78.2%** <(AI Flash Report); AA harness **77.15%** via LangDB>
- AIME 2025: **30.0%** <(AI Flash Report); AA harness **33.0%** via LangDB>
- Artificial Analysis Intelligence Index: **33.6** <(AA data via LangDB snapshot 2026-04-28 — index vintages differ between trackers, do **not** compare directly with index values in other reports)>
- IF-Bench: **40.2%** <(AI Flash Report)>
- CritPt / LCR / MLCR: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified: **no verified public score found** (TensorFeed lists Gemini 2.0 Flash as "not reported" on SWE-bench)
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
- **Reasoning: 60/100.** GPQA Diamond 63.6%, HLE 4.7%, MMLU-Pro 78.2% and AIME 30.0% all land squarely inside the methodology's mid band (GPQA 60–80%, HLE <10% → 55–65); nothing here reaches the frontier references (GPQA 90%+, HLE 40%+), so it stays at 60.
- **Context window: 95/100.** 1,048,576 tokens puts it in the ≥1M tier (95–100); capped at 95 because HELM's independent long-context runs show real depth limits — OpenAI-MRCR 0.216 and RULER HotPotQA 0.55 — so the ≥98%-retrieval condition for a 100 is nowhere close.
- **Multimodal: 92/100.** Text + image + audio + video + PDF input with non-text output on the experimental/Live endpoints sits in the "+audio in or any non-text out = 90–100" band; capped below 95 because the GA `gemini-2.0-flash` id is text-only output (Google docs: image and audio generation *not supported*) and MMMU 70.7% is mid-pack for a multimodal flagship.
- **Coding: 58/100.** HumanEval 90.7% and Natural2Code 92.9% are solid, but the meaningful harnesses are weak: LiveCodeBench 21.0% (AA harness 33.4%) sits far below the mid-band reference (~80%), SciCode 34% is under 40%, AA Coding Index 23.4, and **no verified public score found** for SWE-bench Verified — that combination caps the score at 58.
- **Cost efficiency: 96/100.** $0.10/$0.40 per 1M (cache read $0.03) is at the "~$0.10/$0.20 ≈ 97–99" anchor, one notch down for the $0.40 output rate; the caveat is that this is a **retired** endpoint (shutdown 2026-06-01), so the price is historical rather than purchasable, and there is no OpenCode Zen free ID.
- **Overall Score: 73/100.** (62 + 60 + 95 + 92 + 58) / 5 = 73.4 → 73 (half-up, Cost excluded). Best fit: a cheap, fast, full-multimodal-input model for high-volume parsing/summarizing of long mixed media — but weak on agentic tool use and coding, and no longer available for new integrations.

---

## Signature

- Provided by: **Mimo 2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-09 (original: 2026-09-27; user-approved second pass)
- Method: public internet research (Google Gemini API and Vertex model docs, Google Developers Blog, Stanford CRFM HELM Long Context, TechCrunch, deeplearning.ai, AI Flash Report, LangDB/Artificial Analysis data, llm-stats); second pass 2026-10-09 re-checked the official [Gemini API models page](https://ai.google.dev/gemini-api/docs/models) ("Gemini 2.0 Flash (Shut down)" under Previous models) and [AA's historical page](https://artificialanalysis.ai/models/gemini-2-0-flash) (Index 9, stale deprecation chain, modality/cutoff conflicts) — Grokipedia 404; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_2.0_Flash.md`, using the same headings.

---

### Deep-research addendum (2026-10-09)

- **Shutdown re-confirmed** from Google's own models page (listed "(Shut down)"); the entry remains a historical record (dataset permanence applies).
- **Conflicts kept:** cutoff Aug-2024 (Google docs) vs Jun-2024 (AA catalog); GA-id text-only output (Google docs) vs AA's "text and image" row (likely `-exp` family).
- **New:** AA Index 9 (estimated, #104/300); AA's recommended successor chain (2.5 Flash) is itself stale — the line now ends at 3.8 Flash.
- **Scores:** no dimension changed; Overall held at 73.
