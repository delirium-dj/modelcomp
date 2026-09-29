# Google Gemini 2.5 Flash-Lite — findings by Big Pickle

- Source: Google/`gemini-2.5-flash-lite`
- Date: 2026-09-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Google Gemini 2.5 Flash-Lite
- **Short description:** Google's cheapest and fastest 2.5-family model, built for high-volume classification, extraction and latency-bound work rather than hard reasoning — it is a genuinely capable *multimodal router/extractor* (text, image, audio, video and PDF in at 1M tokens for $0.10/$0.40) attached to a reasoning core that scores near the floor on every frontier eval. **Duplicate-entry flag:** this folder is a second slug for a model that already has its own folder at `model/gemini-2.5-flash-lite/`; the `opencode/google-gemini-2.5-flash-lite` ID is a gateway route to the *same* Google weights, not a distinct model. Two caveats found while researching, both outside my write scope: this folder's `meta.json` records the context window as **"128K total"**, while Google's own docs and 20+ providers on models.dev all say **1,048,576**; and it lists the modalities as **"Text in/out"**, while Gemini 2.5 Flash-Lite is natively multimodal. My numbers below use the verified vendor facts, not the meta.
- **Provider / access:** Google Gemini API (`gemini-2.5-flash-lite`, `generateContent` — neither Chat Completions nor the Responses API); Google Cloud Vertex AI (`gemini-2.5-flash-lite`); also Google AI Studio, OpenRouter, Vercel AI Gateway, AWS Bedrock and ~20 further routes per models.dev, all agreeing on 1,048,576 / 65,536. This folder tracks the **OpenCode Zen** route `opencode/google-gemini-2.5-flash-lite` (an OpenAI-compatible Chat Completions endpoint, unlike Google's native API).
- **Release / knowledge:** experimental preview `gemini-2.5-flash-lite-preview-06-17` on 2025-06-17; **stable `gemini-2.5-flash-lite` on 2025-07-22**; a stronger `gemini-2.5-flash-lite-preview-09-2025` followed and has since been **shut down** (per Google's version table). **Knowledge cutoff January 2025** (Artificial Analysis; the Gemini 2.5 technical report lists Jan 2025 for the 2.5 Flash/Pro line).
- **IDs:** `gemini-2.5-flash-lite` (stable), `gemini-2.5-flash-lite-preview-09-2025` (shut down), `google/gemini-2.5-flash-lite` (OpenRouter-style). The 09-2025 preview needs the `gemini-2.5-flash-lite-preview-09-2025` string; **no Free ID exists on OpenCode Zen** — I checked the Zen free list (Big Pickle, Space Bunny Free, MiMo-V2.5/2.6 Flash Free, Ling Fin Free, Nemotron Ultra/Lightning/Super Free, Muse Spark 1.3 Contributor Free, Jev 1.13 Free, DeepSeek V4 Flash Free, North Mini Code Free, MiniMax M2.5 Free) and this model is not in it.
- **Context window:** **1,048,576 input tokens, 65,536 max output** — verified from the Google AI for Developers model page and independently confirmed by every provider row on models.dev (Poe caps at 1,024,000/64,000; ZenMux at 1,048,000/64,000). Note the 1M is **not** gated behind a beta header, unlike Sonnet 4's opt-in 1M.
- **Modalities:** **text, image, video, audio and PDF in; text out.** Thinking (togglable, controllable budget); function calling, structured outputs, code execution, search grounding, Google Maps grounding, URL context, context caching, file search. Explicitly **not** supported: audio generation, image generation, Live API.
- **Pricing (as of 2026-09-26):** **$0.10 / $0.40** per 1M input/output; **90% cache discount** (≈$0.025/1M cached read); audio input cut 40% vs the preview launch. Blended 7:2:1 cache/input/output ≈ **$0.07 per 1M** (Artificial Analysis); 3:1 in/out blend ≈ $0.17. Paid tier on Google's list price — no free tier, hence no data-usage/privacy caveat. (One third-party gateway, Kenari, lists it at $0.00/$0.00; I scored Google's list price, not a reseller's promo.)
- **Architecture:** proprietary — Google publishes no parameter count and no open weights. Output speed **334 tok/s** (reasoning) / **280 tok/s** (non-reasoning) (Artificial Analysis), the fastest in the 2.5 family by a wide margin. Note BenchLeader's 73 tok/s reading is flagged stale (last measured 2025-11-24).

### Raw benchmarks found

> Google model-card values are the **Gemini 2.5 Flash-Lite Non-thinking (06-17)** column unless stated, i.e. the stable release this folder tracks. The 09-2025 preview column is given where it materially differs, and marked as a *shut-down* snapshot. Independent values are labelled with their harness.

Agent / tool use:

- **BFCL v4 Overall Accuracy: 36.9%** (Berkeley Function-Calling Leaderboard, 2026-05-27, **rank 38 of 85**, 56th percentile). Sub-scores expose the real shape: non-live AST **86.6%**, live **65.8%**, multi-turn **13.5%**, web search 21.0%, memory 20.6%, irrelevance detection 92.5%, relevance detection 43.8%. Schema-level function calling is fine; stateful multi-turn work is not.
- **Terminal-Bench Hard: 4.5%** (Artificial Analysis subset, **rank 207 of 326**, 37th percentile) for the stable model; **12.9%** (rank 140 of 326) for the 09-2025 preview.
- **Terminal-Bench 2.1: no verified public score found** for Flash-Lite, and no Terminal-Bench 2.0 or 4.0 entry either — only the Hard subset.
- **Tau2-Bench Telecom: 19.0%** (rank 262 of 332, 21st percentile) stable; **30.7%** (rank 184 of 332) for the 09-2025 preview. **Tau3-Banking: no verified public score found.**
- **GDPval-AA: Elo 321** (BenchmarkList, **18th percentile, rank 280 of 340**) stable; **439** (27th pct, rank 247 of 340) preview. For scale, the methodology's mid-band marker is ~900–1200 Elo — this is a quarter of that.
- **MCP-Bench: 0.6** (47th percentile, rank 11 of 20). **MCP Atlas: no verified public score found** (the Scale MCP-Atlas paper evaluated Opus 4.5, Sonnet 4.5, Opus 4.1, Sonnet 4, Gemini 2.5 Pro, Gemini 3 Pro, GPT-5 and o3 — not Flash-Lite). **Toolathon / SWE Atlas Codebase QnA: no verified public score found.**
- Other agentic: PinchBench **22.0%** (3rd percentile, rank 71 of 73), Agentick 0.187 (60th pct), Galileo Agent Leaderboard 0.47, OmniGAIA 8.6%, Omni-DeepSearch 2.2%, "Hunt Instead of Wait" deep-research 18.9%, VerdictBench 52.9%, IFBench 49.9%, TRAP 31.2.

Reasoning / knowledge:

- GPQA Diamond: **64.6%** (Google, 06-17 non-thinking) / **66.7%** (06-17 thinking) / **70.2%** (preview non-thinking) / **71.7%** (preview thinking). Independent: **62.5%** (Artificial Analysis avg@5, thinking; 46th pct, rank 252 of 464) and **47.4%** (AA non-reasoning).
- HLE: **5.1%** (no tools, 06-17 non-thinking) / **6.9%** (06-17 thinking) / **6.4%** (preview non-thinking, text-only) / **7.3%** (preview thinking). Independent: **6.8%** (AA thinking) / **3.7%** (AA non-reasoning).
- AIME 2025: **49.8%** (06-17 non-thinking) / **63.1%** (06-17 thinking) / **50.1%** / **48.2%** (preview). Independent: **53.3%** (AA avg@10, 48th pct, rank 119 of 226).
- **Artificial Analysis Intelligence Index: 11.41** (40th percentile, **rank 252 of 418**); the v4.3 release table lists 9 for the reasoning variant and 7 for the non-reasoning variant. (Other aggregators show 13 — index-version drift, not a model change.)
- LCR / MLCR: **AA-LCR v1.1 51.3%** — the one respectable long-context *reasoning* number for this model.
- CritPt: **0.0%** (AA avg@5, both variants; rank 260) — floor.
- **Omniscience Accuracy / Hallucination Rate: AA-Omniscience −44.63, accuracy 17.6%, hallucination rate 75.4%.** This is the most important number in the report: on AA-Omniscience's hard factual set it guesses wrong roughly **3.4× more often than it answers correctly**, and it guesses three quarters of the time. Vectara HHEM consistency 96.7% (98th pct) is the counterweight, but HHEM measures faithfulness to a supplied context, not parametric knowledge.
- SimpleQA: **13.0%** (06-17); SimpleQA Verified 11.3% / 9.6% (preview only — Google switched to Verified for the 09-2025 snapshot). FACTS Grounding **84.1%**; FACTS Benchmark Suite 17.9 (a different FACTS sub-metric — do not mix). Global MMLU (Lite) **81.1%**; MMLU-Pro **75.9%** (AA, 50th pct, rank 156 of 312); LisanBench 122.33 (21st pct); FormationEval 91.3; MMLU (HELM) 53.7%.
- LMArena: Hard Prompts Elo 1382 (thinking, rank 170) via BenchLeader.

Coding:

- SWE-bench Verified: **31.6%** (06-17, single attempt) / **44.9%** (06-17, multiple attempts) / **27.6%** (06-17 thinking, single attempt); **41.3%** (preview non-thinking, single) / **38.9%** (preview thinking, single).
- LiveCodeBench: **33.7%** (06-17, single attempt) / **42.6%** (06-17, attempts) / **34.3%** (06-17 thinking); **52.1%** (preview non-thinking) / **58.4%** (preview thinking). Also cited as 34.3% (Benchmark Atlas) and 59.3% (LLMLearner, thinking).
- SciCode: **19.3%** (Artificial Analysis, **23rd percentile, rank 353 of 458**) — near the bottom of a 458-model field.
- Aider Polyglot: **26.7%** (whole-file, Google model card) / 27.1%.
- Vibe Code Bench / VibeCodingBench: **no verified public score found**. Vibe-Eval (Reka) **51.3%** (06-17 non-thinking) / 57.5% (06-17 thinking) / 58.4% (preview).
- DeepSWE / SWE Atlas / OpenHands Index: **no verified public score found.**
- Other: LiveBench 42.6% (thinking), MedCode 27.1%, MedScribe 72.8%, IOI 23.6%, Capability 133.8, CharXiv Reasoning 55.5%, MMAU 61.6%, MMMU-Pro 58.2% (thinking), MMMU 72.9% (06-17) / 74.0% (preview), MMLU-Pro 80.8% (preview, Sophon).

Long context:

- **MRCR v2 (8-needle): 16.6% cumulative at ≤128K and 4.1% pointwise at 1M** (06-17 non-thinking, Google model card). With thinking: **30.6%** at ≤128K and **5.40%** at 1M. The shut-down 09-2025 preview is barely different: **12.0% / 6.5%** (non-thinking) and **25.6% / 7.7%** (thinking). For calibration, Gemini 2.0 Flash-Lite scores 11.6% / 4.0% and Gemini 2.5 Flash 54.3% / 21.0% on the same benchmark (Gemini 2.5 technical report) — so 2.5 Flash-Lite is a **step-function regression against its own sibling**, not a generational floor.
- **LOFT (hard retrieval)**, Gemini 2.0 Flash-Lite for family context: 50.7% at ≤128K, **7.6% at 1M**.
- **AA-LCR v1.1 51.3%** over 10K–100K-token documents is the most usable real-world long-context datapoint, and it is only mediocre.

### Normalized scores (1–100)

> Derived from the raw numbers above using the methodology in `../../model-comparison.md`. Cost efficiency is scored independently and is **excluded** from Overall.

- **Tool use: 28/100.** Every methodology marker is missed, and by a lot: **Terminal-Bench Hard 4.5%** (stable) against a mid-band TB2.1 marker of 45–60%; **GDPval-AA Elo 321** against a ~900–1200 mid anchor; **BFCL v4 36.9%** with **multi-turn 13.5%** and memory 20.6%; **MCP-Bench 0.6**; **PinchBench 22.0%** (3rd percentile). What keeps it above the bottom is genuinely useful schema-level calling — non-live AST **86.6%**, live 65.8%, irrelevance detection 92.5% — so it will reliably emit a well-formed single tool call and reliably abstain from calling when it should. It cannot hold a multi-step agentic state; that is the whole gap.
- **Reasoning: 50/100.** It straddles the bottom edge of the methodology's mid band instead of sitting in it: **GPQA 62.5–64.6%** is inside the 60–80% band, but **HLE 5.1–6.8%** is under the `<10%` marker, **AA Index 11.41** is far under the 20–35 band, and **CritPt 0.0%** is absolute floor. **AA-LCR 51.3%** (above the 40% marker) and **AIME 53.3%** are what hold it at 50 rather than in the 30s. The decisive caveat is **AA-Omniscience −44.63 with a 75.4% hallucination rate**: whatever this model "knows", it will guess rather than say "I don't know", so its factual output needs a verification layer.
- **Context window: 75/100.** Nominally it is the cleanest 1M in this dataset — **1,048,576 in / 65,536 out**, ungated, no beta header, no premium tier, and independently confirmed across every provider row. That alone would put it at the 95–100 band's floor. The measured evidence drags it down hard: **MRCR v2 8-needle 4.1% at 1M** (5.4% with thinking, 7.7% on the best preview config) means the top of that window is functionally unusable for multi-needle retrieval, and even the ≤128K cumulative score is only **16.6%**. The methodology's "100 if ≥98% retrieval at 512K+" is nowhere close; treat the usable window as roughly 100–128K and the 1M figure as a container, not a capability.
- **Multimodal: 76/100.** This is its best dimension and the reason to buy it: **text + image + video + audio + PDF in**, at the methodology's "+video/PDF in = 75–90" band, low end because output is text-only (no audio or image generation) and because the vision numbers are mid-pack — **MMMU 72.9%**, **MMMU-Pro 58.2%**, CharXiv Reasoning 55.5%. Native audio *and* video *and* PDF ingestion on a $0.10/$0.40 model is a capability almost nothing else in this dataset matches; it is capped at 76 because understanding those inputs is competent rather than strong.
- **Coding: 32/100.** The weakest dimension, and the reason never to make this model your coder: **SWE-bench Verified 31.6%** (44.9% with multiple attempts), **LiveCodeBench 33.7%**, **Aider Polyglot 26.7%**, **Terminal-Bench Hard 4.5%**, and **SciCode 19.3% at rank 353 of 458**. The methodology's mid band ("LiveCode 80% but Vibe <10% and SciCode <40% → 65–75") is not remotely in play — LiveCodeBench is 46 points short of 80% and SWE-bench is 41 points short of Opus 4.5's 80.9%. The shut-down 09-2025 preview was meaningfully better (SWE-bench 41.3%, LiveCodeBench 52.1%) but is no longer served, so it cannot be relied on.
- **Cost efficiency: 96/100.** **$0.10 / $0.40** per 1M with a **90% cache discount** (≈$0.025/1M read) and Google-native batching. The methodology anchors "~$0.10/$0.20 = 97–99"; the only gap is that output is $0.40 rather than $0.20, which costs a couple of points, and the 7:2:1 blended rate of **≈$0.07/1M** is the cheapest of any model in this dataset. Not 100 because it is not $0 — one gateway (Kenari) does list it at $0.00/$0.00, but a reseller promo is not a durable cost profile.
- **Overall Score: 52.2/100.** Mean of the five non-cost dims — (28 + 50 + 75 + 76 + 32) / 5 = 52.2. **Best-fit recommendation:** Gemini 2.5 Flash-Lite is a **triage and extraction layer, not a reasoning or coding layer** — classify, route, transcribe, summarize, pull fields out of long multimodal documents, and hand the hard turn to something else. At $0.10/$0.40 with 1M of native audio/video/PDF input and 280–334 tok/s it is the strongest cost-per-unit-of-multimodal-throughput in this dataset, and its 4.1% MRCR@1M and −44.63 Omniscience scores are the two facts to keep in front of anyone who reaches for it on a knowledge task. If you need Gemini 2.5-line quality, Flash is ~2–3× the price and transforms every one of these numbers.

---

## Signature

- Provided by: **Big Pickle (`opencode/big-pickle`)** — 2026-09-26
- Method: public internet research (Google's official Gemini 2.5 Flash-Lite Model Card PDF, the Gemini 2.5 technical report on arXiv, Google AI for Developers and Google Cloud model docs, Google Developers Blog GA post, Artificial Analysis model/release/comparison pages incl. AA-LCR / AA-Omniscience / AA Intelligence Index, Berkeley Function-Calling Leaderboard V4, BenchmarkList, Benchmark Atlas, LLMLearner, BenchLeader, anotherwrapper, models.dev provider table, OpenCode Zen pricing + free-model docs). Scores are normalized 1–100 interpretations, not official vendor scores. Stable (06-17) and shut-down preview (09-2025) columns are reported separately throughout and never blended.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
