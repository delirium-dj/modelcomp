# Gemini 3 Flash — findings by Pixel Canary

- Source: Google / Gemini 3 Flash (`opencode/gemini-3-flash`, API `google/gemini-3-flash`, routers `gemini-3-flash-preview`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash — Google's December-2025 "Pro-grade reasoning at Flash latency" release, combining Gemini 3 reasoning with Flash cost/speed and a 1M-token input window.
- **Short description:** The speed champion of the dataset (415 tok/s measured) and the cheapest model here with a real benchmark footprint: elite maths and tool-calling scores for half a dollar per million input tokens, undermined by weak novel-reasoning and grounding results.
- **Data-quality note:** the local `meta.json` says "128K total" context and "Text in/out". Both are wrong against public data (1M input, 65.5K output, plus audio/image/video input) and should be refreshed.
- **Provider / access:** Google API; **25 tracked offerings** incl. Abacus, Opper, Tempr (`gemini-3-flash-preview` / `google/gemini-3-flash-preview`) at $0.50 / $3, Venice AI at $0.70 / $3.75 but capped to a 256K window.
- **Release / knowledge:** released 2025-12-17; knowledge cutoff **2025-01-31** (LLMBoard specification) — the same twenty-month-old cutoff as Gemini 3 Pro.
- **IDs:** `opencode/gemini-3-flash`, `google/gemini-3-flash`, `gemini-3-flash-preview`. Free tier: Google AI Studio free tier exists for the Flash line (per sibling entries), not verified for this exact ID.
- **Context window:** 1M input / 65.5K max output tokens (Google runtime row and specification block agree).
- **Modalities:** audio, image, text and video in; text out. Tool use, vision and dynamic thinking supported; no image/audio/video generation.
- **Pricing (as of 2026-09-27):** official Google **$0.50 / 1M input, $3 / 1M output**; most routers pass that through; **lowest tracked route $0.07 / $0.43 (QiHang)**; Venice AI $0.70 / $3.75. Cache-read and batch rates not tracked for this ID (no verified public figure).
- **Architecture:** proprietary, parameters undisclosed, open weights no.

### Raw benchmarks found

> LLMBoard profile (evaluations 2026-08-24 → 2026-09-27): 30 of 42 rows published, coverage **60% / 24 benchmark families**; "#x/y" = rank among models with a published score on that benchmark. Composite: LLMBoard **64.4**.

Agent / tool use:

- t2-bench (multi-turn tool use): **90.20%** (#2/23) — second only to Gemini 3.1 Pro's 99.30% on this test
- ScreenSpot Pro (GUI grounding): **69.10%** (#11/26)
- Vending-Bench 2 (long-horizon autonomy): **3,635.00 USD** (#4/4, 0th percentile — it lost the most money in the field)
- LM Arena Search: **1198.09** (#14/28)
- Legal Agent Benchmark: **0.00%** (#13/14) — a complete failure on professional agentic legal work
- GDPval-AA, OSWorld 2.0, Terminal-Bench, DeepSWE, MCP Atlas: not present in the extracted rows — no verified public score found

Reasoning / knowledge:

- AA AIME 2025: **97.00%** (#2/96); AIME 2025 **99.70%** (#7/122) — elite contest maths for the price
- Global PIQA: **92.80%** (#2/15); MMMLU **91.80%** (#4/51); AA IFBench **77.96%** (#7/168)
- SimpleQA: **68.70%** (#7/47); FACTS Grounding **61.90%** (#10/13, 25th percentile); AA Omniscience Accuracy **53.43%** (#11/201)
- ARC-AGI v2: **33.60%** (#13/19, 33rd percentile) — the clearest weakness: fluid reasoning well below the frontier
- GPQA / HLE / LiveBench rows for this ID: not present in the extracted rows — no verified public score found

Coding:

- LiveCodeBench Pro: **2,316.00 points** (#3/5)
- SWE-bench Verified / SWE-Bench Pro / Terminal-Bench / SciCode: not present in the extracted rows — no verified public score found

Long context:

- MRCR / RULER / GraphWalks: no long-context retrieval score published for this ID; only the 1M input / 65.5K output figures are verified.

Vision: VideoMMMU **86.90%** (#2/28), MMMU-Pro **81.20%** (#8/72).

Runtime: **415.36 tok/s** with **2.71 s** catalog latency on Google — the fastest output throughput measured anywhere in this comparison, ~4.6× Gemini 3 Pro's 90 tok/s.

### Normalized scores (1-100)

- **Tool use: 76/100.** t2-bench 90.20% (#2/23) is a genuinely excellent multi-turn tool caller, but ScreenSpot Pro 69.10% (#11/26), Vending-Bench 2 at 3,635.00 USD (4th of 4, 0th percentile) and Legal Agent **0.00%** (#13/14) show it breaks down on long, professional-grade agentic runs, and no GDPval/OSWorld/Terminal row exists.
- **Reasoning: 72/100.** AA AIME 97.00% (#2/96) and MMMLU 91.80% (#4/51) are superb on closed-form and knowledge-recall sets, yet ARC-AGI v2 33.60% (#13/19), FACTS Grounding 61.90% (#10/13) and Omniscience 53.43% (#11/201) with a Jan-2025 cutoff mean novel reasoning and factual restraint are its weak points.
- **Context window: 82/100.** 1M input is real and top-of-class at this price, but the 65.5K output ceiling is the smallest in the cohort tier and no retrieval measurement (MRCR/GraphWalks) exists for this ID.
- **Multimodal: 86/100.** Audio, image, video and text input with VideoMMMU 86.90% (#2/28), Global PIQA 92.80% (#2/15) and MMMU-Pro 81.20% (#8/72) - the strongest multimodal package per dollar here; output is text only.
- **Coding: 68/100.** LiveCodeBench Pro 2,316.00 points (#3/5) is respectable, but it is the only coding datapoint and no SWE-bench-class or terminal-agentic coding score is published for this ID.
- **Cost efficiency: 94/100.** $0.50 / $3 official, a $0.07 / $0.43 router floor and 415.36 tok/s make it the best capability-per-centisecond in the dataset; docked only for the missing cache disclosure.
- **Overall Score: 76.8/100.** Half-up mean of (76 + 72 + 82 + 86 + 68) = 384 / 5 = 76.8, Cost excluded. Divergence note: the independent LLMBoard composite is 64.4 because it is frontier-relative and this is a Dec-2025 release; the figure above measures verified absolute capability. Best fit: massively parallel extraction, classification, vision/video understanding and maths-heavy cheap fan-out where latency dominates - not professional agentic work.

---

## Signature

- Provided by: **Pixel Canary (vercel-ai-gateway/pixel-canary)** — 2026-09-27
- Method: public internet research on 2026-09-27 (LLMBoard model profile incl. provider pricing and runtime tables; 30 of 42 rows are published and only retrievable rows are cited); no peer `model/` findings were read — only the single `- **Overall Score:` line of `average.md` was used for queue order. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
