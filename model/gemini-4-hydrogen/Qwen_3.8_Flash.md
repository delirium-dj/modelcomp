# Gemini 4 Hydrogen — findings by Qwen 3.8 Flash

- Source: Google (`google/gemini-4-hydrogen`), released 2026-11-12
- Date: 2026-11-13 (UTC) — deep research pass (2 independent web searches + 2 primary-source fetches: the Artificial Analysis model page (Xhigh config) and BenchLM's model page, both of which reproduce the Google DeepMind model-card rows)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Hydrogen (the high-efficiency "workhorse" tier of the Gemini 4 family — sits below Gemini 4 Carbon, alongside Gemini 4 Argon; **not** a variant/alias of either, a distinct release with its own model card).
- **Short description:** Google's efficiency-oriented reasoning model for agentic coding and everyday developer work — roughly 2.5× faster generation than prior Flash generations, four configurable thinking levels, and a 1M-token output-continuation ceiling. Multimodal input (text/image/speech/video), text output.
- **Provider / access:** Google first-party (`google/gemini-4-hydrogen` on the Gemini API) plus Google's Antigravity CLI (`agy` 1.4.8) harness for the vendor agentic runs. Chat/GenerateContent API. **No Free tier ID** (`noFreeId: true`).
- **Release / knowledge:** released **2026-11-12** (AA). Knowledge cutoff not disclosed by the vendor.
- **IDs:** `google/gemini-4-hydrogen`; AA scores the **Xhigh** thinking config (Low/Medium/High/Xhigh effort levels exist; Low is the fastest time-per-task point on AA). No `…-free` id.
- **Context window:** **1,048,576 total; up to 1,048,576 output via continuation** (vendor + AA + BenchLM agree on 1M).
- **Modalities:** **text + image + audio(speech) + video in; text out**; reasoning yes (4 thinking levels); tool calls; grounded vision (Chartography measured). No image/video *output*.
- **Pricing (as of 2026-11-13):** **$1.50 / $7.50 per 1M in/out**, cached read **$0.075 per 1M** (95% cache discount); blended ≈ $1.10/1M; **$3.16 per Intelligence-Index task** (AA). Moderately priced for its class (AA medians $2.00 in / $10.00 out).
- **Architecture:** proprietary, closed weights; parameter count undisclosed by Google.

### Raw benchmarks found

All rows are **exact-ID (`gemini-4-hydrogen`, Xhigh unless noted)** measured numbers. Sources: **AA** = artificialanalysis.ai/models/gemini-4-hydrogen; **BenchLM** = benchlm.ai/models/gemini-4-hydrogen; **Card** = Google DeepMind model card (vendor-reported, surfaced via BenchLM). Composite index version is **AA Intelligence Index v5.0.1**.

Agentic / tool use:

- AutomationBench-AA: **76.1%** (Card, via BenchLM)
- OSWorld 2.1 (offline): **77.6%** (Card, via BenchLM)
- AA Terminal-Bench 4.0: **53.5%** (AA leaderboard, via BenchLM) — vendor's own Terminal-Bench **4.1** run 57.0% is lab-reported/shown-only (different harness `mini-swe-agent`, high effort)
- Terminal-Bench-Science 0.1: **51.4%** (Card, via BenchLM)
- MKA: **53.4%** (Card, via BenchLM) · GDP.pdf all-pass **27.6%** (AA) · AA-Briefcase **1567 Elo** (AA)
- CWE-bench: **68.1%** (Collinear leaderboard, via BenchLM) · Agents' Last Exam v1.1 **71.6%** (Card, shown-only)

Reasoning / knowledge:

- **Artificial Analysis Intelligence Index v5.0.1: 54** (#16/78 in class; median 41) — BenchLM carries **53.9**
- AA-Omniscience v1.1: Index **46.3**, Accuracy **50.5%**, **Hallucination rate 8.5%** (low — good) (AA)
- HLE-Diamond / CritPt v2 (Hard): subsumed in the Intelligence Index; no standalone exact-ID row surfaced this pass → **no separate public number located**

Coding:

- FrontierCode-AA 2.0: **38.2%** (Cognition, via BenchLM)
- CursorBench 4.0: **54.3%** (Cursor, via BenchLM) · Bug Hunt Bench **32.7 fixes**
- SWE-sweep **13.5%** (vendor `agy` run, shown-only) — no public SWE-bench Verified / LiveCodeBench exact-ID row surfaced

Long context:

- No dedicated MRCR / RULER retrieval row located this pass; the **1M window** is vendor+AA verified. (Multimodal vision proxy: **Chartography (no tools) 66.6%**, Card/AA.)

Provenance / conflicts: the two independent aggregators agree closely (AA Index 54 ≈ BenchLM 53.9; BenchLM overall 79.08). Terminal-Bench **4.0 (53.5%, AA leaderboard)** vs **4.1 (57.0%, vendor mini-swe-agent)** are different harnesses — the official leaderboard field (4.0) is what ranks, the 4.1 figure is lab-reported only. Coding is the clear weak axis (FrontierCode 38.2, CursorBench 54.3, SWE-sweep 13.5) — capped by that spread, not by the agentic rows.

### Normalized scores (1–100)

- **Tool use: 76/100.** Strong, breadth-verified agentic record on the exact ID — AutomationBench 76.1%, OSWorld 2.1 77.6%, CWE-bench 68.1%, AA-Briefcase 1567 — with Terminal-Bench 4.0 53.5% / Science 51.4% / GDP.pdf 27.6% as the weaker rows. Capped below 80 by those mid terminal/office rows and the absence of a top-tier agentic sweep.
- **Reasoning: 70/100.** AA Intelligence Index v5.0.1 = 54 (#16/78, well above the 41 median) plus very low 8.5% hallucination (AA-Omniscience) support an upper-mid mark. Held at 70 because 54 sits clearly below the Carbon/Argon-frontier band and HLE-Diamond/CritPt have no standalone exact-ID row.
- **Context window: 95/100.** 1,048,576 total + 1M output continuation is the top (≥1M) tier (95–100); no dedicated needle/MRCR retrieval row located, so it sits at 95 rather than 98+.
- **Multimodal: 90/100.** Richest input ladder — text+image+audio+video in (→ text out), grounding the top band. Held to 90, not higher, because measured vision quality is mid (Chartography 66.6%) and there is no non-text *output*.
- **Coding: 62/100.** The weakest axis: FrontierCode-AA 2.0 38.2%, CursorBench 4.0 54.3%, SWE-sweep 13.5% (vendor), no public SWE-bench Verified/LiveCodeBench row. Fits the "agentic-coding workhorse" positioning but the absolute coding rows are mid, so 62.
- **Cost efficiency: 88/100.** $1.50 / $7.50 per 1M, cache 95% off ($0.075), $3.16/task — cheap and efficient for its intelligence tier (this is the whole point of the "Hydrogen" workhorse SKU). *Excluded from Overall; scored independently.* Caveat: very verbose (304M Index output tokens, slowest-config 13.9 min/task, 42.98s TTFA) — real-world latency cost, not token price.
- **Overall Score: 78.6/100.** Half-up mean of the five quality dims (76+70+95+90+62)/5 = **78.6** (Cost excluded). Best fit: the default Gemini 4 model for high-volume agentic coding/developer automation and long-context multimodal ingestion where throughput and price matter more than squeezing frontier reasoning. Note this lands beside **BenchLM's 79.08** and **AA's 54 Index**, and **below the current queue average (89)** — 89 matches the Gemini 4 *Carbon* tier (AA 60 / BenchLM 89.19), so this report deliberately does not rate the efficiency SKU at frontier tier.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-13 (this slug was **in `model-queue.md`** at Overall 89 with `meta.json` + `average.md` + peer raters but **no `Qwen_3.8_Flash.md`**, so this file adds one more independent rater)
- Method: public internet research (2 searches + 2 primary-source fetches); scores are normalized 1–100 interpretations, not official vendor scores. Every scored row is an exact-ID measured number (AA Intelligence Index v5.0.1, BenchLM, Collinear CWE-bench, Cognition FrontierCode, Cursor) or a vendor model-card figure attributed as such; no lineage proxy from Carbon/Argon/Flash is imported. Composite scores carry the index version and harness (AA v5.0.1; Terminal-Bench 4.0 vs 4.1 distinguished; `agy`/mini-swe-agent lab runs flagged shown-only).
- Reference URLs (fetched this pass marked ←; model card is the vendor origin of the Card rows):
  - [Artificial Analysis — Gemini 4 Hydrogen (Xhigh) intelligence/performance/price](https://artificialanalysis.ai/models/gemini-4-hydrogen)  ← *fetched*
  - [BenchLM — Gemini 4 Hydrogen benchmark scores & coverage](https://benchlm.ai/models/gemini-4-hydrogen)  ← *fetched*
  - [Google DeepMind — Gemini 4 Hydrogen model card (vendor-reported agentic/vision rows)](https://deepmind.google/models/model-cards/gemini-4-hydrogen/)
  - [Collinear — CWE-bench v2 leaderboard](https://cwe-bench.com/) · [Cognition — FrontierCode 2.0](https://cognition.com/blog/frontier-code-2.0) · [Cursor — CursorBench 4.0](https://cursor.com/cursorbench)
- Future sources: add a new file next to this one using the same headings; re-check once AA publishes standalone HLE-Diamond/CritPt rows or a public SWE-bench Verified number for the exact ID.
