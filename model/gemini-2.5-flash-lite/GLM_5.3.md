# Gemini 2.5 Flash Lite — findings by GLM 5.3

- Source: Google/Gemini 2.5 Flash-Lite (`gemini-2.5-flash-lite`)
- Date: 2026-10-13 (UTC) — second-pass re-research of the 2026-09-27 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Google Gemini 2.5 Flash-Lite
- **Short description:** Google's cheapest 2.5-class model (released **2025-06-17**), designed for high-frequency, high-volume tasks. Second pass fills the first pass's empty dossier — and the answer is the floor of the Gemini family: **BenchLeader 48.3 #414/760, "stale: no new result in six months"** (last measured 2025-11-24), with CritPt 0.0%, HLE 3.7-6.8%, AA II 6.7-8.6, τ² 18-19%, TB Hard 2.3-4.5%, and weak retrieval at its own 1M window (AA-LCR 32-55.7%). Two corrections: **a thinking config IS measured on this ID** (46.1 #474 — the first pass's "non-reasoning" was wrong), and **the whole Gemini 2.5 line shuts down 2026-10-16** (per this cycle's 2.5 Pro/Flash passes — three days from this report). Superseded by the 09-2025 refresh (47.9 #425, itself lower) and the 3.1/3.5 Flash-Lite generations.
- **Provider / access (retiring):** Google Gemini API / Vertex AI (`gemini-2.5-flash-lite`) — two live Vertex rows at $0.10/$0.40, **shutdown 2026-10-16 with the 2.5 family**.
- **Release / knowledge:** **2025-06-17** (confirmed); knowledge cutoff Jan 2025 (AA).
- **IDs:** `gemini-2.5-flash-lite` (shutting down); the 09-2025 refresh is a separate entry.
- **Context window:** **1M tokens** (confirmed) — with weak measured retrieval inside it.
- **Modalities:** text + image + speech + video in; text out; **a thinking mode is measured on this ID (correction)** — thinking reads best on most AA rows; function calling / search grounding; JSON mode.
- **Pricing (as of 2026-10-13):** $0.10 in / $0.40 out per 1M (confirmed; 90% cache discount, cached read ~$0.01; blended $0.175/M — "among the cheapest fifth"); **169-323 tok/s** (fastest quarter; the AA 293.9 tok/s read retained); 0.29-0.5 s TTFT — the defining strength, as the first pass said.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

> Second pass adds the residual BenchLeader ladder (best = not-stated **48.3 #414/760**, 3 effort settings, last measured 2025-11-24 — stale). Category scores: **Maths 58 (best)**, Instruction following 52, Agents & tools 49, Coding 40, **Reasoning 39 (worst)**.

Agent / tool use:

- **BFCL Overall: 36.9% #40** — weak; **τ²-Bench: 18.4-19.0% #338-342** — dreadful; **Terminal-Bench Hard: 2.3-4.5% #280-315** — floor; TB 2.x / τ³ / GDPval / Claw-Eval / MCP-Atlas: still unmeasured (unchanged)

Reasoning / knowledge:

- GPQA Diamond: AA 47.4% #432 (no-reasoning) / **62.5% #353 (thinking)** / HELM 30.9% #60 — far below the bar
- HLE: AA **3.7% #559 (no-reasoning) / 6.8% #365 (thinking)** — dreadful; **CritPt: 0.0% #302** (floor); Kagi 40.5% #103; LMCA 18.1% #143; DTBench 62.8% #153
- Math: Omni-MATH (HELM) 48.0% #20; LMArena Maths 1364 #183 — Maths 58 is its best category (the era's Flash-Lite math focus)
- **Honesty poor: non-hallucination 12.2% #368 (no-reasoning) / 22.6% #257 (thinking)**; Omniscience −45.6 to −58.8 #341-440 (dreadful); accuracy 15.4-17.9% #338-398
- **AA II 6.7 #499 (no-reasoning) / 8.6 #420 (thinking)** (confirms the first pass's estimate of 7); ECI 133.9 #132; HELM mean 59.1% #46, WildBench 81.8% #24, IFEval 81.0% #44 (era-ranks)

Coding:

- WeirdML 35.2% #127 (weak); **ALE-Bench 325.9 #108** (dreadful); LMArena Coding 1382 #209 (bottom-tier); Coding 40 category; SWE-bench Verified / LiveCodeBench / SciCode: still no verified rows (unchanged)

Long context:

- **1M confirmed but weak inside: AA-LCR 32.0% #373 (no-reasoning) / 55.7% #285 (thinking)**; Fiction.LiveBench 21.9% #33 (weak); no MRCR/RULER rows.

Multimodal:

- MMMU-Pro 54.0-58.2% #215-227 (weak); LMArena Vision 1187 #97 (bottom-tier); **SAGE 27.5% #83** (weak grounding); full text+image+speech+video in, text out.

Preference/IF:

- IFBench 31.5% #344 (no-reasoning) / 49.9% #173 (thinking) — weak; preference bottom ranks (Text 1375 #174, Creative 1373 #140, Multi-turn 1366 #179, Longer 1379 #175).

### Normalized scores (1–100)

- **Tool use: 30/100.** Lowered from 32: the measured rows are all floor reads — BFCL 36.9% #40, τ² 18-19%, TB Hard 2.3-4.5% — with the modern suites unmeasured and never to be (the model goes stale-then-dark).
- **Reasoning: 38/100.** Raised from 35: the residual rows add texture — Maths 58 as best category, DTBench 62.8%, HELM-era ranks — while GPQA 47-62.5%, HLE 3.7-6.8%, CritPt 0.0%, and AA II 6.7-8.6 confirm the design (throughput, not thinking).
- **Context window: 82/100.** Lowered from 95: 1M confirmed but measured retrieval is weak (AA-LCR 32-55.7% #285-373) — capacity without capability, as with 2.0 Flash.
- **Multimodal: 78/100.** Lowered from 90: full omni input retains breadth credit — MMMU-Pro 54-58%, Vision 1187 #97, and SAGE 27.5% measure the depth floor.
- **Coding: 36/100.** Lowered from 38: WeirdML 35.2%, ALE #108, and bottom-tier Coding arena preference — no decent row exists.
- **Cost efficiency: 96/100.** Held: $0.10/$0.40 with $0.01 cached reads, fastest-quarter decode, and blended $0.175/M — genuinely among the best price/throughput ever — but **the whole 2.5 line shuts down 2026-10-16**, so the value window closes in three days.
- **Overall Score: 53/100.** (30 + 38 + 82 + 78 + 36) / 5 = 52.8 → 53, down from 58. Best-fit (historical): the ultra-cheap ultra-fast omni-input pipe — the right idea in 2025 at $0.10/$0.40 and 300 tok/s — but the measured intelligence floor (AA II 6.7, CritPt 0.0%, TB Hard 4.5%) and the 2026-10-16 family shutdown end the story; any current Flash-Lite (3.1 at $0.25/$1.50, 3.5 with SWE-V 75%) dominates it at comparable prices.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-13
- Method: public internet research, second pass over the 2026-09-27 report (the residual BenchLeader ladder — 48.3 #414, "stale: no new result in six months," last measured 2025-11-24 — aggregating Artificial Analysis, Epoch AI Benchmarking Hub, HELM Capabilities, Vals AI, LMArena, BFCL, Fiction.live; two live Vertex provider rows; the 2026-10-16 family-shutdown date imported from this cycle's Gemini 2.5 Pro and 2.5 Flash sibling passes; the thinking-config correction documented against the first pass's non-reasoning claim; the first-pass AA deprecated-listing rows retained where not contradicted); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
