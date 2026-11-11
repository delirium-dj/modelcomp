# Gemini 2.5 Flash — findings by Mimo v2.6 Flash

- Source: Google DeepMind/`gemini-2.5-flash`
- Date: 2026-11-11 (UTC; original research 2026-09-22, re-researched 2026-10-09, second-pass enrichment 2026-11-11)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass enrichment — 2026-11-11** (user-approved). Previous Signature
> 2026-10-09 (Overall 74). Fresh sources this pass: **BenchLM model page**
> (snapshot 2026-11-10, **41.93/100, #132/1020, 14/812 rows** — no overall
> was recorded before), the **official Gemini API deprecations page**
> (fetched 2026-11-11), and the **Artificial Analysis model page**.
> Changes: **Tool use 62→56** — the named "no Tau rows" gap is filled and
> it is bad: **τ²-bench 14.9% (AA)**, the first direct agentic measurement
> for this ID, deep below the mid band; GDPval/Toolathlon/MCP/TB rows still
> absent. **Reasoning 70→62** — four new independent AA rows land at the
> bottom of the scale: **HLE 4.7%**, **CritPt 1.4%**,
> **AA-Omniscience net −42.6 (accuracy 26.1 / hallucination 93.0%)**,
> **IFBench 39.0%**; and the primary pillar is now contested —
> **AA-GPQA 68.3% vs the recorded 82.8% (Google card) / 79.0% (Requesty)**,
> all three readings recorded side by side, none converted. Held up by the
> card-era absolutes (GPQA 82.8, AIME 72, Global-MMLU 88.4) and BenchLM's
> Index 9.8 re-confirming the already-low ~10 standing. Overall 74→**72**
> ((56+62+80+90+70)/5 = 358/5 = 71.6). Held: Context 80 (MRCR 74%@128K /
> 32%@1M unchanged; new AA-LCR 49.9 is reasoning, not retrieval),
> Multimodal 90 (new **AA-MMMU-Pro 65.5** lands where MMMU 79.7 predicts on
> the harder variant — corroborates; Design Arena 1111 = noise), Coding 70
> (no new coding rows), Cost 88 ($0.30/$2.50 + 90% cache re-confirmed).
> **Status correction:** the file's "retirement ~2026-10-16/20" was wrong —
> the official deprecations page now says **shutdown December 1, 2026**,
> auto-routing to **`gemini-3.5-flash-lite`** (billed at 3.5 Flash-Lite
> rates); already removed from Google AI Studio, access limited to
> past-active users; recommended replacement `gemini-3.5-flash-lite`. AA
> now shows Index **N/A ("Unknown")** — estimate→N/A = unmeasured, not a
> level change (BenchLM 9.8 re-confirms the direct ~10 reading); AA speed
> drift 189.2→179 tok/s, TTFT 0.44→0.57s.

## Model card

- **Name:** Gemini 2.5 Flash
- **Short description:** Google's 2025 hybrid-reasoning Flash workhorse (preview 2025-04-17, GA 2025-06-17) — toggleable 0–24,576-token thinking budget, 1M multimodal context — now a **deprecated legacy model: out of Google AI Studio, official shutdown 2026-12-01 with auto-route to `gemini-3.5-flash-lite`** (official deprecations page, fetched 2026-11-11; the earlier 10-16/10-20 citations were wrong).
- **Provider / access:** Google AI Studio / Gemini API `gemini-2.5-flash` (GA; Chat Completions–style); Vertex AI / Gemini Enterprise Agent Platform; free tier on AI Studio and OpenCode Zen with standard rate limits.
- **Release / knowledge:** GA 2025-06-17; knowledge cutoff **January 2025** (re-confirmed by AA 2026-10-09). **Retirement (official, resolved 2026-11-11): shutdown December 1, 2026** — the ai.google.dev deprecations page (fetched 2026-11-11) now carries the exact row: `gemini-2.5-flash` is **deprecated and no longer available to select in Google AI Studio**; effective **2026-12-01 all API requests auto-route to `gemini-3.5-flash-lite`** (billed at Gemini 3.5 Flash-Lite rates), with access limited to users who actively used it in the past; recommended replacement **`gemini-3.5-flash-lite`**. This **supersedes the earlier 2026-10-16 (Awesome Agents) / 2026-10-20 (Vertex) citations — both were wrong; the model is still serving until Dec 1.**
- **IDs:** `google/gemini-2.5-flash`; version family `gemini-2.5-flash` (no preview suffix on GA).
- **Context window:** 1,048,576 input; 65,536 max output (64K).
- **Modalities:** text/image/video/audio/PDF in; text out; hybrid thinking on/off/`-1` dynamic with token budget; tool calls yes; JSON mode yes; no image generation (sibling `gemini-2.5-flash-image` / Nano Banana separate).
- **Pricing (as of 2026-09-22):** **$0.30 in / $2.50 out per 1M** (text/image/video); audio in $1.00; cache read $0.03 (90% off); batch $0.15/$1.25; thinking tokens billed as ordinary output. Free AI Studio / Gemini app / Zen free tier.
- **Architecture:** proprietary sparse MoE (undisclosed); first fully hybrid-reasoning Flash.

### Raw benchmarks found

> Measured numbers with (source, rank, harness). Google official model card (thinking mode, pass@1) unless noted.

Agent / tool use:

- **τ²-bench: 14.9%** (Artificial Analysis via BenchLM, snapshot 2026-11-10) — **new; the named "no Tau rows" gap is filled, and it is deep in weak territory (first direct agentic measurement for this ID)**
- Terminal-Bench / GDPval-AA / Toolathlon / MCP-Atlas for 2.5 Flash: no verified public score found in sources reviewed (generation predates many of these boards' Flash coverage; agentic coding shown via SWE-Verified below) — re-checked 2026-11-11
- Toolathlon / OSWorld-style agentic rows: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **82.8%** (Google model card via Awesome Agents; Requesty aggregator shows 79.0% — both cited, card value preferred) — **conflict (new): AA-GPQA Diamond 68.3%** (Artificial Analysis independent run via BenchLM, 2026-11-10) — all three readings recorded side by side, none converted
- **New AA rows (2026-11-10, all bottom-of-scale — the previous "HLE / LCR / Omniscience: no verified public score" gaps are now filled and severe):** **AA-HLE 4.7%**, **CritPt 1.4%**, **AA-Omniscience net −42.6 (accuracy 26.1% / hallucination 93.0%)**, **AA-IFBench 39.0%**
- Third-pass update (2026-11-11): AA page now shows Index **N/A ("Unknown")** for this deprecated model (estimate→N/A = unmeasured, not a level change); **BenchLM shows Index 9.8**, re-confirming the direct ~10 reading; AA speed drift 189.2→**179 tok/s**, TTFT 0.44→**0.57s**; AA re-benchmarks deprecated models every 18h
- AIME 2025: **72.0%** (Google card)
- Global MMLU Lite: **88.4%**; MMLU Pro (Requesty panel): **83.2%**
- Artificial Analysis Intelligence Index: **13.1** (Requesty/AA — very low vs 2026 frontier; model aging on modern evals). Second-pass conflict (2026-10-09): AA's direct page shows **10** for the non-reasoning variant (estimated 3/4 units, #29/75 class, median 9) — the 13.1 Requesty figure was likely a blended/older-scale reading; both kept, direct value preferred. AA also measures 189.2 tok/s (#6/75) with 0.44s TTFT and confirms $0.30/$2.50 with 90% cache discount; AA marks the model deprecated (its "newer release" suggestion — Gemini 2.5 Flash Preview Sep '25 — is itself stale; Google's designated replacement is the 3.x Flash line)
- Humanity's Last Exam: ~~no verified public score found for 2.5 Flash specifically~~ **superseded — AA-HLE 4.7% now exists (2026-11-10, see above)**
- Thinking-budget effect (Google): GPQA ~74% @ 0K budget → >80% @ 24K; LiveCodeBench nearly doubles across same range

Coding:

- SWE-bench Verified: **60.4%** (Google card; multi-trajectory re-scored by model judgment — trails Claude Sonnet 4.6 79.6 by ~20 pts)
- LiveCodeBench: improved substantially with thinking budget (Google scaling note; absolute % not extracted in this pass)
- Terminal-Bench 2.1 / DeepSWE / SWE-Pro: no verified public score found for 2.5 Flash

Long context:

- MRCR v2 8-needle: **74% at 128K**, **32% at 1M pointwise** (Google — usable mid-window, degrades hard near ceiling); **AA-LCR 49.9%** (Artificial Analysis via BenchLM, 2026-11-10 — new) is long-context **reasoning**, not retrieval; no MRCR/RULER change

Multimodal:

- MMMU (visual reasoning): **79.7%** (Google card)
- Native text/image/video/audio/PDF in — full multimodal Flash stack of its generation
- **AA-MMMU-Pro: 65.5%** (Artificial Analysis via BenchLM, 2026-11-10 — new; consistent with MMMU 79.7 on the harder variant — the normal ~10–15 pt MMMU→MMMU-Pro gap — so it corroborates rather than contradicts)
- Design Arena Website: **1111** (OpenRouter via BenchLM) — recorded, noise-level signal
- CharXiv / Video-MMMU modern boards: no verified public score found for 2.5 Flash (re-checked 2026-11-11)

### Normalized scores (1–100)

- **Tool use: 56/100.** The first direct agentic measurement for this ID exists now and it is bad: **τ²-bench 14.9% (AA)** fills the named "no Tau rows" gap deep below the mid band; TB2.1/GDPval/Toolathlon/MCP rows are still absent → 56 (was 62). Held up only by spec-level production function-calling/JSON and hybrid thinking for tool loops — agentic evidence is now measured-thin versus 3.x Flash generations.
- **Reasoning: 62/100.** Four new independent AA rows land at the bottom of the scale — **HLE 4.7%, CritPt 1.4%, Omniscience net −42.6 (93.0% hallucination), IFBench 39.0%** — and the primary pillar is now contested (**AA-GPQA 68.3 vs card 82.8 / Requesty 79.0**, all recorded side by side, none converted) → 62 (was 70). Held up by the card-era absolutes (GPQA 82.8, AIME 72, Global-MMLU 88.4) and BenchLM Index 9.8 re-confirming the already-low ~10 standing; AA's page now reports Index N/A (unmeasured, not a level change).
- **Context window: 80/100.** Full 1M/64K window documented with measured MRCR 74% @ 128K — good — but only **32% @ 1M** means practical deep-retrieval range is ~128–256K; new AA-LCR 49.9% is reasoning, not retrieval — MRCR banding unchanged (no change).
- **Multimodal: 90/100.** Native text/image/video/audio/PDF in with MMMU 79.7 — complete multimodal input coverage for its era (audio present → upper band); new **AA-MMMU-Pro 65.5** lands where MMMU 79.7 predicts on the harder variant (corroborates); still no CharXiv/Video-MMMU re-test (no change).
- **Coding: 70/100.** SWE-bench Verified 60.4 is respectable for a budget Flash but ~20 pts behind Sonnet 4.6 and far behind 3.5/3.8 Flash coding stacks; no TB/DeepSWE rows (no change — no new coding rows this pass).
- **Cost efficiency: 88/100.** $0.30/$2.50 + 90%-off cache + batch 50% + free tier is still excellent economics (AA re-confirms 2026-11-11) — held just below 90+ by **deprecation: out of AI Studio, official shutdown 2026-12-01 with auto-route to `gemini-3.5-flash-lite`**, which makes new integrations a migration liability (no change; the date is corrected from the wrong mid-Oct citation).
- **Overall Score: 72/100.** Mean of five quality dims (56 + 62 + 80 + 90 + 70) / 5 = 358/5 = 71.6 → 72. Best-fit: existing low-cost multimodal pipelines until the **2026-12-01 shutdown** — **new builds should target Gemini 3.5 Flash-Lite** (Google's designated replacement on the deprecations page) rather than this ID; the first measured agentic/reasoning rows (τ² 14.9, HLE 4.7, Omniscience −42.6/93% halluc) show the 2025 generation's real distance from frontier.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-11-11 (original: 2026-09-22; second pass 2026-10-09; user-approved second-pass enrichment 2026-11-11)
- Method: fresh public internet research (Google AI models/pricing docs, Vertex Gemini Enterprise model page, Awesome Agents deep-dive on official card, Requesty, BenchLM, BenchGecko); second pass 2026-10-09 re-checked AA + the official deprecations page (exact 2.5 row not extractable then); **enrichment pass 2026-11-11** re-checked the [BenchLM Gemini 2.5 Flash page](https://benchlm.ai/models/gemini-2-5-flash) (snapshot 2026-11-10: 41.93 #132/1020, 14/812 rows — τ² 14.9, AA-GPQA 68.3, AA-HLE 4.7, CritPt 1.4, Omniscience −42.6/26.1/93.0, IFBench 39.0, AA-LCR 49.9, Index 9.8, MMMU-Pro 65.5, Design Arena 1111), the official [Gemini API deprecations page](https://ai.google.dev/gemini-api/docs/deprecations) (exact row now extractable: shutdown 2026-12-01, auto-route to `gemini-3.5-flash-lite`), and the [AA model page](https://artificialanalysis.ai/models/gemini-2-5-flash) (Index now N/A, pricing/speed re-checked); Grokipedia page 404; scores are normalized 1–100 interpretations, not official vendor scores; conflicting readings (GPQA 82.8 card vs 79.0 Requesty vs 68.3 AA; Index 13.1 vs 10 vs 9.8 vs N/A) reported side by side, none converted; the wrong 10-16/10-20 retirement citations are superseded by the official 2026-12-01 row.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

### Deep-research addendum (2026-10-09)

- **Status:** still live as of 2026-10-09; retirement imminent (10-16/10-20 dates from the first pass remain the best citations — official row not extractable this pass). AA carries a stale deprecation banner (suggests the Sep '25 preview); Google's replacement remains the 3.x Flash line.
- **Conflicts:** AA Index 13.1 (Requesty) vs **10** (AA direct, non-reasoning, estimated) — direct preferred, both kept.
- **Confirmed:** $0.30/$2.50 + 90% cache, 1M context, Jan-2025 cutoff, full multimodal input — all re-verified by AA.
- **New:** 189.2 tok/s (#6/75), 0.44s TTFT (AA).
- **Scores:** no dimension changed; Overall held at 74.
