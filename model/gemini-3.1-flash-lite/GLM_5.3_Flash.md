# Gemini 3.1 Flash-Lite — findings by GLM 5.3 Flash

- Source: Google (`gemini-3.1-flash-lite`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash-Lite (Google's cheapest/fastest Gemini-3-generation tier)
- **Short description:** A natively multimodal reasoning model built on Gemini 3 Pro, cut down to the high-volume/latency-sensitive tier: 1M-token window, text/image/audio/video input, ~363 tok/s output and Google's lowest 3.x price. BenchLM ranks it #105 of 889 (48.09) with thin coverage (10 of 625 rows). The 2026-10-05 enrichment pass added an independent SWE-bench Verified run and the launch Arena Elo.
- **Provider / access:** Google — Gemini API / Vertex AI ID `gemini-3.1-flash-lite`; also on AI Studio, the Gemini app and Search AI Overviews. `generateContent` API (docs.cloud.google.com / ai.google.dev).
- **Release / knowledge:** preview 2026-03-03; GA (`gemini-3.1-flash-lite`) 2026-05-07; preview endpoint shut down 2026-05-25 (Google release notes via ai-tldr). Knowledge cutoff January 2025.
- **IDs:** `gemini-3.1-flash-lite` (Google; the `gemini-3.1-flash-lite-preview` ID is retired). Free tier available on AI Studio/Zen with standard rate limits (repo catalog).
- **Context window:** 1,000,000-token input (BenchLM concurs), 64,000-token max output (ai-tldr spec block).
- **Modalities:** text, image, audio, video in; text out. Reasoning yes (built on Gemini 3 Pro; BenchLM classifies the base variant as non-reasoning); tool calling yes.
- **Pricing (as of 2026-10-11):** $0.25 in / $1.50 out per 1M (standard tier, text/image/video); audio input $0.50/1M; cached input $0.025/1M; context-cache storage $1.00/1M/hr. Note: a 2.5–3.75× list-price increase over 2.5 Flash-Lite's $0.10/$0.40. Free tier available (rate-limited).
- **Architecture:** proprietary, parameters undisclosed ("built on Gemini 3 Pro", natively multimodal reasoning); ~363 tok/s output, ~45% faster generation and ~2.5× shorter TTFT than Gemini 2.5 Flash (Google, via ai-tldr).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (Vals): **34.1%** (Vals, independent — new; weak)
- Gert Labs: **38.46%** (independent — new; weak)
- Vibe Code Bench v1.1: **0.00%** (Vals — floor)
- Tau2 / Tau3 / BFCL / Claw / MCP / GDPval / OSWorld: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **81.1%** (Vals, independent) — **conflicts with the vendor's published 86.9%**; both listed
- MMLU-Pro: **86.2%** (Vals — corroborates the vendor MMMLU-adjacent claim); MMMLU: **88.9%** (vendor, prior pass)
- HLE: **16%** (vendor launch set, prior pass — the honest cap)
- JevBench v1.4: **14.26** / v1.5: **19.58** (typed-decision benchmark rows, outside general rankings — noted for the repo's Jev decision-model context)
- MMMU-Pro: **76.8%**; Video-MMMU: **84.8%** (vendor, prior pass); LMArena: **Elo 1432** (prior pass)
- FrontierMath v2 (Tiers 1–3): **27.7%** (Epoch AI leaderboard — added 2026-10-16, previously unmeasured; weak)
- ARC-AGI / CritPt / AA Intelligence Index: no verified public score found

Coding:

- SWE-bench Verified: **62.80%** (Vals, mini-SWE-agent — corroborated by the BenchLM SWE-bench row)
- LiveCodeBench: **72%** (vendor, prior pass) / **80.1%** (Vals — consistent)
- Vibe Code Bench v1.1: **0.00%** (Vals — floor)
- SWE-Pro / SciCode: no verified public score found

Long context:

- Window: **1M tokens** (BenchLM concurs) in / 64K out; MRCR / RULER / AA-LCR: no verified public score found

Multimodal:

- CharXiv: **73.2%** (model card via benchlm.ai — first measured chart-reasoning evidence, mid)

### Normalized scores (1–100)

- **Tool use: 52/100.** (Was 60 on the prior pass.) The Vals/Gert rows (TB2.1 34.1%, Gert Labs 38.46%, Vibe 0.00%) replace the tier-positioning provisional with measured weakness — two bands down.
- **Reasoning: 80/100.** (Was 83 on the prior pass.) GPQA settles at 81.1% (Vals) vs the vendor's 86.9% — a documented conflict — while MMLU-Pro 86.2% corroborates and HLE 16% remains the cap; one band down on the independent evidence.
- **Context window: 97/100.** 1M-token input at the top tier (BenchLM concurs); 64K output cap and no measured long-context retrieval keep it off 100.
- **Multimodal: 88/100.** Text + image + audio + video in with MMMU-Pro 76.8 / Video-MMMU 84.8 (vendor) and CharXiv 73.2% (model card) — full omni input; text-only output.
- **Coding: 70/100.** (Was 74 on the prior pass.) SWE-V 62.8% and LiveCodeBench 72–80.1% are corroborated, but Vibe Code Bench 0.00% and the weak terminal rows document that agentic repo work is this tier's weak spot.
- **Cost efficiency: 93/100.** Free tier plus $0.25/$1.50 with a near-free $0.025 cache rate; docked slightly for being 2.5–3.75× its predecessor's list price.
- **Overall Score: 77.4/100.** (Was 80.4 on the prior pass.) Mean of the five quality dims per `RULES.md` (Cost excluded): (52 + 80 + 97 + 88 + 70) / 5 = 387/5 = 77.4 — lowered on the 2026-10-11 second pass as the Vals board documents the tool/coding weakness behind the launch positioning. Best fit: the cheapest way to get 3-series reasoning + omni input at scale for high-volume multimodal processing — not for agentic repo work (use 3.5/3.8 Flash-Lite successors).

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-16
- Method: public internet research, second pass 2026-10-11 (≥3 independent sources: benchlm.ai updated 2026-10-10 citing the Gemini 3.1 Flash-Lite model card + Vals AI leaderboards, the prior 2026-09-18/10-05 passes on ai-tldr/Vals/Google launch post; 2026-10-16 re-check: BenchLM 11-row refresh corroborates all rows (FrontierMath v2 27.7% added) — no score changes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
