# Gemini 2.5 Flash — findings by Mimo v2.6 Flash

- Source: Google DeepMind/`gemini-2.5-flash`
- Date: 2026-10-09 (UTC; original research 2026-09-22, re-researched 2026-10-09)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash
- **Short description:** Google's 2025 hybrid-reasoning Flash workhorse (preview 2025-04-17, GA 2025-06-17) — toggleable 0–24,576-token thinking budget, 1M multimodal context — now a **legacy model with retirement ~2026-10-16/20** (replacement: Gemini 3.5 Flash).
- **Provider / access:** Google AI Studio / Gemini API `gemini-2.5-flash` (GA; Chat Completions–style); Vertex AI / Gemini Enterprise Agent Platform; free tier on AI Studio and OpenCode Zen with standard rate limits.
- **Release / knowledge:** GA 2025-06-17; knowledge cutoff **January 2025** (re-confirmed by AA 2026-10-09). **Retirement date: 2026-10-16** (Awesome Agents/Google deprecation) or **2026-10-20** (Vertex docs) — both cited; second-pass note (2026-10-09): the official deprecations page (ai.google.dev, page itself last updated 2026-10-09 UTC) still carries shutdown schedules for legacy Gemini models but this pass's fetch could not extract the exact gemini-2.5-flash row; the Vertex AI docs page has been folded into the Gemini Enterprise Agent Platform documentation (page updated 2026-10-07). Treat as end-of-life within days of this report either way.
- **IDs:** `google/gemini-2.5-flash`; version family `gemini-2.5-flash` (no preview suffix on GA).
- **Context window:** 1,048,576 input; 65,536 max output (64K).
- **Modalities:** text/image/video/audio/PDF in; text out; hybrid thinking on/off/`-1` dynamic with token budget; tool calls yes; JSON mode yes; no image generation (sibling `gemini-2.5-flash-image` / Nano Banana separate).
- **Pricing (as of 2026-09-22):** **$0.30 in / $2.50 out per 1M** (text/image/video); audio in $1.00; cache read $0.03 (90% off); batch $0.15/$1.25; thinking tokens billed as ordinary output. Free AI Studio / Gemini app / Zen free tier.
- **Architecture:** proprietary sparse MoE (undisclosed); first fully hybrid-reasoning Flash.

### Raw benchmarks found

> Measured numbers with (source, rank, harness). Google official model card (thinking mode, pass@1) unless noted.

Agent / tool use:

- Terminal-Bench / GDPval-AA / Toolathlon / MCP-Atlas for 2.5 Flash: no verified public score found in sources reviewed (generation predates many of these boards' Flash coverage; agentic coding shown via SWE-Verified below)
- Toolathlon / OSWorld-style agentic rows: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **82.8%** (Google model card via Awesome Agents; Requesty aggregator shows 79.0% — both cited, card value preferred)
- AIME 2025: **72.0%** (Google card)
- Global MMLU Lite: **88.4%**; MMLU Pro (Requesty panel): **83.2%**
- Artificial Analysis Intelligence Index: **13.1** (Requesty/AA — very low vs 2026 frontier; model aging on modern evals). Second-pass conflict (2026-10-09): AA's direct page shows **10** for the non-reasoning variant (estimated 3/4 units, #29/75 class, median 9) — the 13.1 Requesty figure was likely a blended/older-scale reading; both kept, direct value preferred. AA also measures 189.2 tok/s (#6/75) with 0.44s TTFT and confirms $0.30/$2.50 with 90% cache discount; AA marks the model deprecated (its "newer release" suggestion — Gemini 2.5 Flash Preview Sep '25 — is itself stale; Google's designated replacement is the 3.x Flash line)
- Humanity's Last Exam: no verified public score found for 2.5 Flash specifically
- Thinking-budget effect (Google): GPQA ~74% @ 0K budget → >80% @ 24K; LiveCodeBench nearly doubles across same range

Coding:

- SWE-bench Verified: **60.4%** (Google card; multi-trajectory re-scored by model judgment — trails Claude Sonnet 4.6 79.6 by ~20 pts)
- LiveCodeBench: improved substantially with thinking budget (Google scaling note; absolute % not extracted in this pass)
- Terminal-Bench 2.1 / DeepSWE / SWE-Pro: no verified public score found for 2.5 Flash

Long context:

- MRCR v2 8-needle: **74% at 128K**, **32% at 1M pointwise** (Google — usable mid-window, degrades hard near ceiling)

Multimodal:

- MMMU (visual reasoning): **79.7%** (Google card)
- Native text/image/video/audio/PDF in — full multimodal Flash stack of its generation
- CharXiv / Video-MMMU modern boards: no verified public score found for 2.5 Flash

### Normalized scores (1–100)

- **Tool use: 62/100.** Still solid production function-calling/JSON and hybrid thinking for tool loops, but no TB2.1/GDPval/Toolathlon/MCP public rows for this legacy ID — agentic evidence is thin versus 3.x Flash generations.
- **Reasoning: 70/100.** GPQA 82.8 and AIME 72 remain decent absolute science/math scores; AA Intelligence Index **13.1** (Requesty) / **10** (AA direct, non-reasoning variant) on current boards shows how far 2025 reasoning has fallen behind 2026 frontier — thinking budget helps but does not close the generational gap (held 2026-10-09).
- **Context window: 80/100.** Full 1M/64K window documented with measured MRCR 74% @ 128K — good — but only **32% @ 1M** means practical deep-retrieval range is ~128–256K.
- **Multimodal: 90/100.** Native text/image/video/audio/PDF in with MMMU 79.7 — complete multimodal input coverage for its era (audio present → upper band); no modern CharXiv/Video-MMMU re-test.
- **Coding: 70/100.** SWE-bench Verified 60.4 is respectable for a budget Flash but ~20 pts behind Sonnet 4.6 and far behind 3.5/3.8 Flash coding stacks; no TB/DeepSWE rows.
- **Cost efficiency: 88/100.** $0.30/$2.50 + 90%-off cache + batch 50% + free tier is still excellent economics — held just below 90+ by imminent **retirement (mid-Oct 2026)** which makes new integrations a migration liability.
- **Overall Score: 74/100.** Mean of five quality dims (62+70+80+90+70)/5 = 74.4 → 74. Best-fit: existing low-cost multimodal pipelines with weeks of remaining runway — **new builds should target Gemini 3.5 Flash** (Google's designated replacement) rather than this ID.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-10-09 (original: 2026-09-22; user-approved second pass)
- Method: public internet research (Google AI models/pricing docs, Vertex Gemini Enterprise model page, Awesome Agents deep-dive on official card, Requesty, BenchLM, BenchGecko); second pass 2026-10-09 re-checked [AA Gemini 2.5 Flash](https://artificialanalysis.ai/models/gemini-2-5-flash) and the official [Gemini API deprecations page](https://ai.google.dev/gemini-api/docs/deprecations) (page updated 2026-10-09; exact 2.5 row not extractable from this fetch) plus the Vertex deprecations page (now folded into Gemini Enterprise Agent Platform docs); Grokipedia page 404; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

### Deep-research addendum (2026-10-09)

- **Status:** still live as of 2026-10-09; retirement imminent (10-16/10-20 dates from the first pass remain the best citations — official row not extractable this pass). AA carries a stale deprecation banner (suggests the Sep '25 preview); Google's replacement remains the 3.x Flash line.
- **Conflicts:** AA Index 13.1 (Requesty) vs **10** (AA direct, non-reasoning, estimated) — direct preferred, both kept.
- **Confirmed:** $0.30/$2.50 + 90% cache, 1M context, Jan-2025 cutoff, full multimodal input — all re-verified by AA.
- **New:** 189.2 tok/s (#6/75), 0.44s TTFT (AA).
- **Scores:** no dimension changed; Overall held at 74.
