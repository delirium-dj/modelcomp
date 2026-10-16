# GPT-5 nano — findings by Mimo v2.6 Flash

- Source: OpenAI/GPT-5 nano (`gpt-5-nano-2025-08-07`)
- Date: 2026-10-16 (UTC) — second pass (first pass 2026-10-02; user-approved enrichment update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5 nano (`gpt-5-nano-2025-08-07`)
- **Short description:** OpenAI's fastest and cheapest GPT-5 variant (released 2025-08-07), aimed at summarization, classification and other high-volume latency/cost-sensitive tasks. **Status update (2026-10-16): end-of-life** — the untagged `gpt-5-nano` alias is marked *Deprecated / "Completed deprecation (responses removed)"* in OpenAI's catalog, the dated snapshot carries a *Deprecated* banner with a 60-day warning, Artificial Analysis banners it deprecated (benchmarking only for the default workload), and GPT-5.4 nano is the named successor; new work should use GPT-5.4 nano / GPT-5.6 Luna.
- **Provider / access:** OpenAI first-party API (Chat Completions/Responses; developers.openai.com), Azure OpenAI, OpenRouter (`openai/gpt-5-nano`, 2 providers per AA); Batch API available. No $0 free API tier. (Responses endpoint no longer serves the untagged alias; pinned snapshot `gpt-5-nano-2025-08-07` still serves during its warning window.)
- **Release / knowledge:** 2025-08-07. **Knowledge cutoff filled in:** OpenAI docs state **2024-01-01**; catalogues conflict — Artificial Analysis "May 30, 2024", OpenRouter "May 2024" (official docs used as primary, conflict noted).
- **IDs:** `gpt-5-nano` / `gpt-5-nano-2025-08-07`; no Zen Free ID found.
- **Context window:** 400,000 input / 128,000 max output (OpenAI docs re-verified 2026-10-16; OpenRouter + AA agree); **Batch API max output raised 128K → 200K (beta)** per OpenAI docs. AA knowledge note: "knowledge up to May 2024" (see Release conflict).
- **Modalities:** text + image in; text out; reasoning yes (effort levels minimal/low/medium/high); tool calls + function calling yes; JSON mode supported per OpenAI API conventions.
- **Pricing (as of 2026-10-16, re-verified):** unchanged — **$0.05 in / $0.40 out per 1M** (cached input $0.005, 90% cache discount); batch $0.025 / $0.20; AA provider price $0.055/$0.44 (provider median); Azure $0.05–$0.055 / $0.40–$0.44. Latency note: AA measures 145.6 tok/s but **TTFT 91.3 s at high effort** (vs ~0.9 s class median) — deep-effort calls are slow.
- **Architecture:** proprietary; parameters undisclosed (nano-class, non-reasoning-frontier tier of the GPT-5 family).

### Raw benchmarks found

> Measured numbers with (source / rank / harness). Missing rows = "no verified public score found".

Agent / tool use:

- Terminal-Bench (AA, variant=hard): **17.4%** at medium effort (first pass) / **12.1%** at high effort (AA via OpenRouter, obs. 2026-10-16) — effort drift noted
- **NEW:** Terminal-Bench 2.1 (AA, high): **36.3%** (AA model page, obs. 2026-10-16) — below the methodology's mid band (TB2.1 45–60 → 50–70); OpenRouter's AA summary block surfaces only TB-Hard for this ID (variant attribution noted)
- **NEW:** τ²-Bench Telecom (AA, high): **36.5%** (medium 30.4%); AA-Briefcase v1.1 (AA): **11.0%** (Briefcase-A 12.4%)
- BenchLeader agents & tools category: **48/100** best config (rank mid-field); Tau3-Banking / GDPval-AA / Toolathlon / OSWorld: no verified public score found for this model

Reasoning / knowledge:

- GPQA Diamond: **67.6%** (AA, effort=high, re-confirmed obs. 2026-10-16) / **69.4%** (Epoch AI hub, high) / 67.0–67.4% (medium); GPQA (full) 71.2% (anotherwrapper)
- Humanity's Last Exam: **8.7–9.5%** (AA; HLETT 8.8% on the AA model page)
- AIME 2025: **85.2%** (LLM Stats) vs **83.7%** (AA, high — conflict, different harness); HMMT 2025: 75.6%; FrontierMath: 9.6% (LLM Stats); AA Math Index: **83.7** (high) / 78.3 (medium)
- **NEW:** AA Intelligence Index: **13.0** (high, #12/51 in price class, median 7 — obs. 2026-10-16); AA-Omniscience: accuracy **19.1%**, non-hallucination **41.0%**; CritPt: **0.0%**; MMLU-Pro: **78.0%** (AA high) vs 84.2–84.3 (comparison table, effort unlabeled); IFBench **67.6%** / AA-IFBench **44.2%** (two harnesses); SimpleQA 41.3%
- BenchLeader Index: 55.9 best config (#186/430, measured 2025-11-24, stale — superseded by AA Index 13 above)

Coding:

- SWE-bench Verified (bash-only, mini-SWE-agent, effort=medium): **34.8%** (official SWE-bench board, 2025-08-07; rank #37–58 depending on group)
- LiveCodeBench: **70.2%** (Vals, rank #87) vs **78.9%** (AA, high, obs. 2026-10-16) — two harnesses, both respectable
- **NEW:** SciCode (AA): **14.1%** — far below the 55%+ frontier reference
- LMArena Coding: 1384 Elo; LMArena Hard Prompts: 1356 Elo

Long context:

- 400K window; AA-LCR (long-context recall): **43.7–45.0%** (AA, high); Fiction.LiveBench 120k: 21.9% (medium)

Multimodal:

- Image input confirmed by Artificial Analysis ("Supports text and image", obs. 2026-10-16) and LLM Stats modality row; BenchLeader multimodal category: 42–46/100; MMMU: no verified public score found

### Normalized scores (1–100)

- **Tool use: 50/100.** (Was 55.) The expanded agentic picture is weaker than the first pass's two rows suggested: τ²-Bench Telecom 36.5%, Terminal-Bench 2.1 36.3% (below the 45–60 mid band), TB-Hard 12.1–17.4%, and AA-Briefcase 11.0% all sit under the mid anchor, with only τ² above the Tau mid floor; BenchLeader 48/100 unchanged. Still credited for light tool loops (function calling, 400K window), but no Tau3/GDPval/OSWorld row exists to hold the old 55.
- **Reasoning: 62/100.** Unchanged — the new rows balance out: positives (GPQA 67.6% re-confirmed at the mid anchor's upper edge, AIME 83.7–85.2%, Math Index 83.7, MMLU-Pro 78) vs negatives (HLE 8.7–9.5% under 10%, CritPt 0.0%, AA-Omniscience accuracy 19.1% / non-hallucination 41.0%, AA Index 13 in absolute terms) — textbook mid band (55–65), no decisive movement.
- **Context window: 76/100.** Unchanged — 400K/128K (200K–500K band 65–84) re-verified; measured AA-LCR ~45% and Fiction.LiveBench 21.9% at 120K still cap it below the low-80s.
- **Multimodal: 60/100.** Unchanged — image input re-confirmed by AA (bottom of the +image-in band, 60–70); BenchLeader 42–46/100 and no MMMU row keep it at the floor.
- **Coding: 55/100.** (Was 60.) LiveCodeBench 70.2% (Vals) / 78.9% (AA) remains respectable, but the newly surfaced SciCode 14.1% (vs 55%+ frontier reference), Terminal-Bench 2.1 36.3%, and SWE-bench Verified 34.8% form a consistent weak-coding profile for a model positioned for classification/summarization.
- **Cost efficiency: 97/100.** Unchanged — $0.05/$0.40 (batch $0.025/$0.20, cache $0.005) still lands at the ~$0.10/$0.20 anchor band (97–99), paid-only with output 2× the anchor rate; lifecycle caveat added: alias fully deprecated and the snapshot inside a 60-day warning window, so this cost is only reachable briefly. Not counted in Overall.
- **Overall Score: 61/100.** (Was 63 on 2026-10-02.) Mean of the five non-cost dims (50 + 62 + 76 + 60 + 55) / 5 = 60.6 → 61 (half-up) — Tool −5 and Coding −5 on the new AA agentic/SciCode rows; Reasoning/Context/Multimodal held as evidence re-confirmed them. Best-fit: dirt-cheap high-volume classifier/summarizer with a big 400K window while it still serves — not a reasoning, agentic, or serious coding model, and now deprecated (use GPT-5.4 nano for anything new).

---

## Signature

- Provided by: **Mimo v2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-16
- Method: public internet research, second pass (first pass 2026-10-02) across official sources (OpenAI developer model catalog — deprecation status, knowledge cutoff, batch output; https://developers.openai.com/api/docs/models/gpt-5-nano) plus independent sources (Artificial Analysis model page https://artificialanalysis.ai/models/gpt-5-nano — deprecated banner, Index 13, TTFT/throughput; OpenRouter benchmark block https://openrouter.ai/openai/gpt-5-nano — AA rows cross-checked). Conflicts compared (knowledge cutoff 2024-01-01 official vs May 2024 catalogues; AIME 85.2 LLM Stats vs 83.7 AA; LCB 70.2 Vals vs 78.9 AA; TB-Hard effort drift 17.4→12.1; TB2.1 36.3 attribution caveat). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
