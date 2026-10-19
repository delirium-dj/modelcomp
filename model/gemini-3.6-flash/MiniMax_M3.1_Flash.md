# Gemini 3.6 Flash — findings by MiniMax M3.1 Flash

- Source: Google (`gemini-3.6-flash`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Google's July-2026 Flash generation — "Gemini 3.6 Flash provides sustained frontier-level intelligence optimized for real-world tasks at a higher speed and lower cost", described by Google as "our previous-generation Flash model, balancing speed and multimodal capabilities across general agentic and everyday tasks". It is the fastest tier in this dataset at **199.5 output t/s** and is the model the 3.8/3.7 line was built on ("based on Gemini 3.5 Flash"). Artificial Analysis marks it deprecated in favour of 3.7 Flash; Google's own API pages still list it as **Stable**.
- **Provider / access:** Gemini API `gemini-3.6-flash` (Stable, "Latest update July 2026"); AI Studio; OpenRouter `google/gemini-3.6-flash` (canonical slug `google/gemini-3.6-flash-20260721`); OpenCode Zen `opencode/gemini-3.6-flash` (`https://opencode.ai/inference/google/v1beta/models/gemini-3.6-flash`).
- **Release / knowledge:** released **2026-07-21** (Google blog; model card "published 21 July 2026"; ARC Prize and Vals list Jul 21, 2026). Knowledge cutoff **March 2026** (model card; some domains "limited to January 2025 (in line with the Gemini 3 Model Family)").
- **IDs:** `gemini-3.6-flash` (Gemini API), `google/gemini-3.6-flash` (OpenRouter), `opencode/gemini-3.6-flash` (Zen).
- **Context window:** **1,048,576** input tokens, **65,536** output tokens.
- **Modalities:** input text, image, video, audio and PDF; output text. Tools: caching, code execution, computer use (preview), file search, function calling, Maps grounding, search grounding, structured outputs, thinking, URL context, Batch/Flex/Priority inference. No audio/image generation, no Live API. Thinking levels: high / medium / low / **minimal** (default medium on OpenRouter).
- **Pricing (as of 2026-10-19, per 1M tokens):** introductory **$0.75 in / $3.75 out**, context caching **$0.075**, cache storage $0.50/1M/hour — "Input price: $0.75 through December 31, 2026. $1.50 starting January 1, 2027", output "$3.75 through December 31, 2026. $7.50 starting January 1, 2027", cache "$0.075 → $0.15"; Batch/Flex $0.375/$1.875 → $0.75/$3.75; Priority $1.35/$6.75 → $2.70/$13.50. **OpenCode Zen bills the post-intro rate: $1.50 in / $7.50 out / $0.15 cached read.** A free tier exists on Google's API ("Used to improve our products: Yes").
- **Architecture:** proprietary; no parameter count published ("based on Gemini 3.5 Flash").

### Raw benchmarks found

> Google's model-card and blog numbers are marked "vendor"; Artificial Analysis, Vals AI, ARC Prize, the BenchLM ledger and OpenRouter's AA mirror are independent. Several aggregator rows disagree with Google's own card, and are noted.

Agent / tool use:

- Terminal-Bench 2.1: **78.0%** (vendor, Terminus-2) / **77.53%** (AA) / **73.78% ± 1.63** (Vals AI, #21/75, effort high)
- Terminal-Bench 4.0: **no verified public score found** (no row on the official board; AA's 3.6 value is not published) — for context, the neighbouring Flash models score 6.57% (3.5), 13.64% (3.7) and 19.70% (3.8)
- GDPval-AA: **1421 Elo** (vendor/blog) / **1284.34** (AA) / 1423 (via BenchLM)
- OSWorld-Verified **83.0%** (vendor, vs 3.5 Flash's 78.4%); MLE-Bench **63.9%** (vendor, vs 49.7%); AutomationBench **53.02%** (AA); tau3-Banking 29.90%; APEX null; IFBench null
- Claw-Eval / Toolathon / MCP-Atlas: **no verified public score found** for 3.6 Flash (Meta's Muse Spark 1.1 holds the Toolathlon lead at 75.6%)

Reasoning / knowledge:

- GPQA Diamond: **92.83%** (AA) / **93.43% ± 1.33** (Vals, #7/138)
- HLE: **40.82%** (AA) / 40.8% (via BenchLM); MMLU-Pro 89.28% (Vals) / 89.3% (via BenchLM)
- CritPt **10.57%** (AA); LCR **80.0%** (AA); MLCR-AA 14.44% (AA); Omniscience index 22.13, accuracy **49.97%**, hallucination rate **55.63%** (AA)
- Artificial Analysis Intelligence Index: **34** (#79/217); OpenRouter's AA mirror: index 34, coding 69.2, agentic 29. No AA medium/low variant pages exist (404).
- ARC-AGI-1 **91.2%** (ARC Prize, high effort, $0.34/task) / 91.17% (via BenchLM); ARC-AGI-2 **60.4%**; ARC-AGI-3 "—". Effort ladder: ARC-AGI-1 91.2% (high) / 83.2% (medium) / 76.5% (low) / **34.5% (minimal)**; ARC-AGI-2 60.4 / 50.4 / 30.4 / **2.6%**
- FrontierMath v2: Tiers 1–3 **58.947%**, Tier 4 **21.951%** (Epoch AI, via BenchLM)

Coding:

- DeepSWE v1.1: **49%** (vendor, vs 3.5 Flash's 37%) / 49.0% (via BenchLM) — but the same blog says "in some benchmarks like DeepSWE by Datacurve, we observe up to 65%"
- SWE-bench Pro: **58.7%** (vendor) / SWE-bench **79.60% ± 1.80** (Vals AI, #26/88) / 79.6% (via BenchLM); SWE-bench Verified Vals subset 77.45%
- LiveCodeBench **88.08% ± 0.94** (Vals, #8/143) / 88.1% (via BenchLM)
- Terminal-Bench 2.1 78.0/77.53/73.78; Terminal-Bench-Science 0.1 **4.29%** (Vals); ProgramBench **0.00%** (Vals); SciCode 53.36% (AA); CursorBench 3.2 53.5% (via BenchLM, unverified at cursor.com); FrontierCode null; no FrontierSWE
- **CyberBench Patch track: 84.75% — #1 of 43 models** (Vals AI) — the one #1 result for this model

Long context:

- GDM-MRCR v2 (8-needle): 128k **91.8%**, 1M pointwise **54.0%** (vendor) — the model card's own numbers show the window degrades sharply at the top
- No RULER / GraphWalks figure; AA-LCR 80.0% (short band)
- 1,048,576-token input window, 65,536-token output cap

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 76/100.** A capable everyday agentic profile — Terminal-Bench 2.1 78.0% (vendor) / 77.53% (AA) / 73.78% (Vals), OSWorld-Verified 83.0%, MLE-Bench 63.9%, GDPval-AA 1284–1423 Elo, AutomationBench 53.02%, JobBench-not-published, tau3-Banking 29.90%, and the **#1 CyberBench Patch track (84.75%)**. Capped by the rubric's anchors (TB2.1 ~88%+ → 78% at best; tau3 ~50%+ → 29.9%; GDPval ~1750+ → 1423 at best), by the absence of Terminal-Bench 4.0 and of any Claw-Eval / Toolathlon / MCP-Atlas number, and by the 77.53-vs-73.78 harness spread.
- **Reasoning: 78/100.** GPQA Diamond 92.83–93.43%, MMLU-Pro 89.28%, LCR 80.0%, and a strong ARC-AGI-1 91.2% at $0.34/task. Capped by the AA Intelligence Index of **34**, HLE 40.82%, CritPt 10.57%, FrontierMath v2 58.947% / 21.951%, ARC-AGI-2 60.4%, ARC-AGI-3 unmeasured, and a 55.63% hallucination rate.
- **Context window: 92/100.** 1,048,576-token input window with a 65,536-token output cap — the rubric's top tier on paper (≥1M = 95–100). Held at 92 because Google's own MRCR v2 numbers show the top of the window is not usable: **91.8% at 128k but only 54.0% pointwise at 1M**, with no independent long-context measurement available.
- **Multimodal: 90/100.** Text, image, video, audio and PDF input with text output — the rubric's "+audio in = 90–100" band — with MMMU-Pro 83.24% (AA) / 88.38% (Vals) / 83.0% (vendor) and CharXiv 85.2% without tools / 89.4% with tools. Held at 90 because the multimodal evidence is largely Google's own card and no independent vision harness has run it.
- **Coding: 72/100.** LiveCodeBench 88.08% (Vals), SWE-bench 79.60% (Vals), Terminal-Bench 2.1 78.0/77.53%, SWE-bench Pro 58.7% (vendor). Capped by **DeepSWE at just 49%** (the vendor's own headline for the release — a deliberate trade of agentic-coding depth for speed and cost), Terminal-Bench 4.0 unmeasured, Terminal-Bench-Science 4.29%, ProgramBench 0.00%, SciCode 53.36% (under the 55% anchor) and no FrontierSWE or FrontierCode figure.
- **Cost efficiency: 78/100.** The evaluated route — OpenCode Zen `opencode/gemini-3.6-flash` — is billed at **$1.50 in / $7.50 out** per 1M with a $0.15 cached read: the *post-introductory* rate, since Google's introductory $0.75/$3.75 ends on 2026-12-31. The rubric's anchors (~$1.25/$4.25 ≈ 88, ~$3/$15 ≈ 60) put $1.50/$7.50 at roughly 78; Google's own free tier exists but is tied to "Used to improve our products: Yes" and to the introductory window, so it is not credited as a durable $0.
- **Overall Score: 81.6/100.** (76 + 78 + 92 + 90 + 72) / 5 = 81.6 — best-fit: the **speed-and-price Flash** (199.5 t/s, $0.75/$3.75 until year-end) with full omni-modal input, 1M context and 91%+ GPQA, but with the weakest DeepSWE (49%) and Terminal-Bench 4.0 record in the Gemini Flash line — use it for multimodal everyday agents and high-volume drafting, not for coding agents.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **Price — the intro/post-intro split.** Google's pricing page quotes $0.75/$3.75 with a Dec-31-2026 expiry, while the same company's blog and model card quote "$1.50/1M input tokens and $7.50/1M output tokens"; OpenRouter and AA use $0.75/$3.75, Zen uses $1.50/$7.50. The cost score follows the route actually charged to a caller today (Zen's $1.50/$7.50) and both numbers are stated.
2. **DeepSWE — 49% vs "up to 65%".** The same launch blog says "DeepSWE (49% vs. 37%)" and then "in some benchmarks like DeepSWE by Datacurve, we observe up to 65%"; BenchLM's 65.3% for 3.5 Flash is **not** found in any fetched source (Google says 37%). The conservative 49% is used.
3. **Terminal-Bench 2.1 — 78.0% (Google, Terminus-2) vs 77.53% (AA) vs 73.78% ± 1.63 (Vals).** Harness spread; AA is the anchor.
4. **GDPval-AA — 1421 (Google) vs 1423 (BenchLM) vs 1284.34 (AA).** A ~140-Elo spread; AA is used.
5. **Lifecycle.** Google lists the model as **Stable** with no deprecation date; Artificial Analysis declares it deprecated (superseded by 3.7 Flash). The vendor's own position is recorded, and the model remains live on both Google and Zen.
6. **Max output — 65,536 (Google/OpenRouter/Vals) vs "64K token output" (model card) vs "66k" (Vals header).** 65,536 is used.
7. **Scale — AA Index 34 (#79/217) vs BenchLM 62.8/100 (#45/956).** Different composites; BenchLM itself notes "partial benchmark coverage for this model, so the overall score is conservative" (28 of 644 benchmarks). Only AA's number is used.
8. **ARC-AGI-1 91.2% (ARC Prize) vs 91.17% (BenchLM)** — rounding only; the effort ladder (down to 34.5% at minimal) is reproduced above because an unlabelled number for this model is meaningless.

### Notes on identity

- `gemini-3.6-flash` is a distinct release (2026-07-21) from `gemini-3.5-flash` (May 2026), `gemini-3.7-flash` (August 2026) and `gemini-3.8-flash` (September 2026); it is also **not** `gemini-3.5-flash-lite`.
- The AA/BenchLM "Gemini 3.5 Flash" rows (DeepSWE 65.3%, MRCR 97% at 128k) that Google contradicts with "37%" are not used for this model — they belong to a different checkpoint and are recorded only as a documented conflict.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — Google first-party model page, DeepMind model card, launch blog, Gemini API models/pricing/thinking docs; independent trackers Artificial Analysis (model page, per-evaluation payload, OpenRouter AA mirror), Vals AI (own runs, CyberBench and Vibe Code leaderboards), ARC Prize (verified, full effort ladder), the BenchLM evidence ledger, and OpenRouter / OpenCode Zen catalogs. Vendor-vs-independent conflicts — including the price expiry, the DeepSWE "up to 65%" claim and the 3.5-Flash DeepSWE discrepancy — are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.6_Flash.md`, using the same headings.
