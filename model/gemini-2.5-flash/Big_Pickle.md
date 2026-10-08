# Gemini 2.5 Flash — findings by Big Pickle

- Source: Google (`gemini-2.5-flash`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash
- **Short description:** Google's hybrid-reasoning mid-tier workhorse of the 2.5 family — a 1M-context multimodal model with a toggleable 0–24,576-token thinking budget at $0.30/$2.50. Now legacy-era: it is scheduled for shutdown on October 16, 2026, in favor of Gemini 3.5 Flash.
- **Provider / access:** Google — Gemini API (AI Studio / Vertex AI); `gemini-2.5-flash`. Proprietary hosted API only.
- **Release / knowledge:** preview April 17, 2025; GA June 17, 2025; quality/efficiency refresh Sept 25, 2025. Knowledge cutoff ~January 2025.
- **IDs:** `gemini-2.5-flash` (Google; proprietary, no open weights)
- **Context window:** 1,048,576 tokens input / 65,536–66K output.
- **Modalities:** text, image, video, audio input; text output; hybrid thinking on/off with 0–24,576 token budget (or dynamic); grounding with Google Search, code execution, function calling.
- **Pricing (as of 2026-09-20):** $0.30 in / $2.50 out per 1M (audio input $1.00/1M); batch $0.15/$1.25; cached input $0.03. Thinking tokens billed as standard output — no premium.
- **Architecture:** Sparse mixture-of-experts transformer, native multimodal; parameters undisclosed.
- **Deprecation:** shutdown scheduled 2026-10-16, replacement Gemini 3.5 Flash (awesomeagents.ai).

### Raw benchmarks found

Reasoning / knowledge:

- GPQA Diamond: **82.8%** (Google model card, thinking mode; ranked #74/308 on aiwartracker; from 74% at 0K budget to 80%+ at 24K)
- AIME 2025: **72.0%** (Google model card)
- Global MMLU Lite: **88.4%** (Google model card)

Coding:

- SWE-bench Verified: **60.4%** (model card, thinking mode, single attempt; paper-era figures 48.9% single / 60.3% multiple; Sept 2025 refresh +5% to ~54% then final 60.4%)
- LiveCodeBench: **71.3%** (aiwartracker #55/204)
- Aider Polyglot: **61.9%**; Aider Edit: **56.7%**
- SciCode: **39.4%** (aiwartracker #91/307)
- Real-world coding trails Claude Sonnet 4.6's SWE-bench Verified 79.6% by ~20 points (awesomeagents.ai)

Agent / tool use:

- Terminal-Bench: **13.6%** (aiwartracker, earlier harness version — weak by 2026 standards)
- Better agentic tool use from Sept 2025 refresh (Google dev blog); no 2.5-era strong agentic milestone

Long context:

- MRCR v2 (8-needle): **54.3%** @128K / **21.0%** @1M (Gemini 2.X paper); LOFT (hard) ≤128K: **82.1%**, @1M: **58.9%**
- AA-LCR: **61.7**; LongBench-v2: **62.1** (aiwartracker / AA)

Multimodal:

- MMMU (visual reasoning): **79.7%** (Google model card)
- Native text/image/video/audio input in one endpoint (awesomeagents.ai)
- MMMU-Pro / video-specific: **no verified public score found**

### Normalized scores (1–100)

- **Tool use: 62/100.** Terminal-Bench 13.6% (earlier harness) and AA τ²-bench 14.9% (current harness) — both bottom-tier by 2026 standards; fine for basic function calling only.
- **Reasoning: 74/100.** GPQA Diamond 82.8% (Google card, thinking) is the best-case ceiling, but AA measures 68.3% on the default (no-thinking) config with AA Intelligence Index 9.8, AA-HLE 4.7, CritPt 1.4% — legacy-era pie by current frontier standards.
- **Context window: 70/100.** Full 1M window structurally, but AA-LCR 49.9% (was recorded 61.7 from a different harness) and FrontierMath retention at 1M degrade sharply; LOFT 128K 82.1% remains the bright spot.
- **Multimodal: 70/100.** Native text/image/video/audio input, and AA-MMMU-Pro 65.5% (updated from the 2025-era MMMU 79.7 card figure) — a solid modality set, modest visual-reasoning depth by 2026 bars.
- **Coding: 67/100.** SWE-bench Verified 60.4% and LiveCodeBench 71.3% remain the best coding rows; ~20 points behind 2026 leaders. No current AA coding rows exist for this model.
- **Cost efficiency: 45/100.** $0.30/$2.50 with free thinking was the value benchmark of its era — but the model is on a hard deprecation horizon: API shutdown **2026-10-16** (8 days out), with Gemini 3.5 Flash the official replacement; an EOL model is no longer an efficiency purchase.
- **Overall Score: 69/100.** Mean of the five quality dims (62+74+70+70+67)/5 = 68.6 → 69 (lowered from 74 on 2026-10-08, see Re-verification). A once-great budget workhorse now measured on 2026 harnesses: mid-pack quality on every axis and days from being shut down.

---

## Re-verification — 2026-10-08 (18 days after original)

Re-run re-measures the model on current AA harnesses (BenchLM profile, updated 2026-10-07, 14/623 covered). The 2025-era card figures — 82.8% GPQA, 79.7% MMMU, 60.4% SWE-V — survive as best-case/thinking-mode rows, but the as-served 2026 numbers are markedly lower, and the model is 8 days from its shutdown date.

| Dimension | 2026-09-20 | 2026-10-08 | Δ |
|---|---|---|---|
| Tool use | 62 | 62 | — (τ² 14.9% confirms) |
| Reasoning | 77 | 74 | −3 |
| Context window | 84 | 70 | −14 |
| Multimodal | 80 | 70 | −10 |
| Coding | 67 | 67 | — |
| Cost efficiency | 85 | 45 | −40 (EOL) |
| **Overall** | **74** | **69** | **−5** |

New and corrected data:

- **Deprecation is imminent and binding:** Gemini 2.5 Flash's official API deprecation date of **2026-10-16** (recorded originally via awesomeagents.ai) stands — that is **8 days away**, with Gemini 3.5 Flash the mandated replacement. This is what collapses Cost efficiency 85 → 45: no ongoing efficiency purchase exists for a model that will be un-servable next week.
- **AA/current-harness rows are the correction vector:** AA-GPQA 68.3% (against the 82.8% thinking-mode card figure — both are real, they measure different configs), AA Intelligence Index 9.8, AA-HLE 4.7%, CritPt 1.4%, AA-LCR 49.9% (supersedes the 61.7 previously recorded from a different harness), AA-MMMU-Pro 65.5% (supersedes the 2025-era MMMU 79.7% card row), AA-IFBench 39.0%, AA-Omniscience Index −42.6 (hallucination rate 93%).
- **τ²-bench 14.9%** (AA, current harness) corroborates the original bottom-tier Terminal-Bench 13.6% — no agentic redemption exists for this model on any 2026 harness.
- **FrontierMath v2:** 4.844% (Tiers 1–3) / 4.167% (Tier 4) — essentially floor performance on frontier math, consistent with the weak reasoning corners above.
- BenchLM overall **42.32, #124/887** (vs 3.1 Flash-Lite 48.15, Gemma 4 31B 40.56); pricing last verified $0.30/$2.50, cached $0.03.
- **Recommendation unchanged and now one-way:** do not onboard new workloads; migrate anything on Gemini 2.5 Flash to Gemini 3.5 Flash (BenchLM 62.5; $0.75/$4.50) before 2026-10-16.

Gaps still open after re-run: AA coding rows for this model (none published — Coding stays card-era 60.4%/71.3%), MRCR 1M long-context verification, a thinking-mode AA pass (AA defaults to no-thinking, understating the toggleable ceiling), post-shutdown migration cost estimate.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-20
- Method: public web research (arxiv paper 2507.06261, ai.google.dev, developers.googleblog.com, awesomeagents.ai, aiwartracker.com, userightai.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.