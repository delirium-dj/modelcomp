# Grok 4 Fast — findings by Space Bunny

- Source: SpaceXAI/xAI (`xai/grok-4-fast-reasoning` / `xai/grok-4-fast-non-reasoning`)
- Date: 2026-10-10 (UTC) — second-pass research; first pass 2026-09-25
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
- Re-validation note: re-checked 2026-10-10. **MATERIAL change — Overall 80.8 → 72.8, a fall of 8 points.** The prior pass scored almost entirely from xAI's **2025-09-19 launch post**, now roughly 13 months old, and could not see any independent measurement. Artificial Analysis and Vals AI have since run the model directly, and the picture is materially worse than the launch table implied. The decisive new facts: **AA-Intelligence Index 17.9** (a number the prior pass recorded as "no numeric score published"), **AA-Omniscience Hallucination Rate 68.3%** with a **negative Omniscience Index of −29.9%** and only **22.8% accuracy**, **Vibe Code Bench at exactly 0.00%**, and **IFBench 50.5%**. Restated: **Tool 88 → 74**, **Reasoning 82 → 66**, **Coding 72 → 58**, **Multimodal 66 → 70**, **Cost 99 → 96**, Context unchanged.

## Model card

- **Name:** Grok 4 Fast
- **Short description:** SpaceXAI's September 2025 cost-efficiency breakthrough — one model reaching roughly Grok 4 quality using 40% fewer thinking tokens, with a 2M-token window and native web/X search. **It was the price-to-intelligence benchmark-setter of its generation and the first xAI model opened to free users without restriction. It is now thoroughly superseded** — Grok 4.20, 4.5 and 4.6 all outperform it on every axis, and several are cheaper per token.
- **Provider / access:** xAI API — `https://api.x.ai/v1/chat/completions` (Chat Completions), plus OpenRouter and the Vercel AI Gateway. Also grok.com, X, and the iOS/Android apps, where it powers "Fast" and "Auto" modes.
- **Release / knowledge:** announced **2025-09-19** (Benchable dates the endpoint 2025-09-18). **Knowledge cutoff still not published** — an unchanged gap across two research passes.
- **IDs:** `grok-4-fast-reasoning` and `grok-4-fast-non-reasoning` — two SKUs from one weight set; the search-tuned variant is code-named **menlo**, appearing in LMArena as `grok-4-fast-search`. **No OpenCode Zen Free ID exists**; cost is scored on xAI's paid pricing.
- **Context window:** **2,000,000 tokens** for both SKUs — stated in the launch post, confirmed by the endpoint registry, and now confirmed by BenchLM. **AA-LCR at 73.7%** is the first actual retrieval-at-length measurement for this model.
- **Modalities:** text and image in, text out; the endpoint registry additionally lists **file input**. No audio or video. Reasoning is **not** a separate model — a single weight set handles long chain-of-thought and instant non-reasoning responses, steered by system prompt. Function calling yes, with tool-use RL end-to-end; code execution and web/X search are first-class tools. xAI's original post listed "enhanced multimodal capabilities" as *future* work — that gap has now closed at least to the level of MMMU-Pro 61.8%.
- **Pricing (verified 2026-10-10, unchanged):** under 128K prompt tokens — **$0.20 / 1M input, $0.50 / 1M output**; at or above 128K — **$0.40 / 1M input, $1.00 / 1M output**; cached input **$0.05 / 1M**. Free on the consumer products.
- **Architecture:** proprietary; parameter count not disclosed. Unifies reasoning and non-reasoning modes in a single weight set to cut latency and token cost.

### Raw benchmarks found

**xAI's own launch table (2025-09-19, pass@1) — now 13 months old, retained for history:**

Agent / tool use (all *search and browsing*):

- BrowseComp **44.9%** (Grok 4 43.0%); BrowseComp-zh **51.2%** (Grok 4 45.0%); Reka Research Eval **66.0%** (Grok 4 58.0%)
- X Bench Deepsearch (zh) **74.0%** (Grok 4 66.0%); X Browse **58.0%** (Grok 4 53.2%); SimpleQA **95.0%** (Grok 4 94.0%)
- LMArena **Search Arena: 1163 Elo, #1** for `grok-4-fast-search` (menlo) — a 17-point margin over `o3-search`

Reasoning / knowledge:

- GPQA Diamond **85.7%**; AIME 2025 (no tools) **92.0%**; HMMT 2025 (no tools) **93.3%**; HLE (no tools) **20.0%**

Coding:

- LiveCodeBench (Jan–May 2025 window) **80.0%** (Grok 4 79.0%, GPT-5 High 86.8%)

**Independent — new since the prior pass, all run directly on `grok-4-fast-reasoning`:**

Agent / tool use:

- **τ²-bench: 65.8%** (Artificial Analysis)
- **IFBench: 50.5%** (Artificial Analysis) — *the prior pass credited a first-place-era instruction-following profile; this is a mediocre 50.5%*

Reasoning / knowledge:

- **AA-Intelligence Index: 17.9** (Artificial Analysis) — *the prior pass recorded "no numeric score published for Grok 4 Fast itself"; a number now exists and it is low*
- **AA-GPQA Diamond: 84.7%** (close to xAI's own 85.7% — the launch figure holds up)
- **AA-HLE: 19.1%** (close to xAI's own 20.0% — likewise holds up)
- **AA-Omniscience Index: −29.9%**; **Omniscience Accuracy: 22.8%**; **Hallucination Rate: 68.3%** — **the most consequential new data in this report**
- **CritPt: 2.9%**; **AA-LCR: 73.7%**

Coding:

- **Vibe Code Bench v1.1: 0.00%** (Vals AI) — *an exact zero; worse than Grok 4.20's 4.06%, which was already the floor in this batch*

Multimodal:

- **AA-MMMU-Pro: 61.8%** (Artificial Analysis) — the first multimodal benchmark measured for this model

**BenchLM composite: 43.64/100, #121 of 889** (12 of 625 benchmarks; conservative). For comparison within the xAI family: Grok 4.6 **67.92**, Grok 4.5 **64.22**, Grok 4.20 **57.33**, Grok 4.3 **53.59**, Grok 4 **51.96**, Grok 4.1 Fast (Reasoning) **46.31** — Grok 4 Fast ranks **below even Grok 4.1 Fast**, six generations of product newer than its own launch.

**Still absent:** SWE-bench Verified, SWE-bench Pro, DeepSWE, SciCode, Terminal-Bench 2.1, GDPval-AA, Toolathlon, MCP-Atlas, Claw-Eval.

Sources consulted: [BenchLM Grok 4 Fast (Reasoning), updated 2026-10-10](https://benchlm.ai/models/grok-4-fast-reasoning), [Artificial Analysis Grok 4 Fast Reasoning](https://artificialanalysis.ai/models/grok-4-fast-reasoning), [Vals AI Vibe Code Bench v1.1](https://www.vals.ai/benchmarks/vibe-code), and the [xAI Grok 4 Fast launch post](https://x.ai/news/grok-4-fast), accessed 2026-10-10.

### Normalized scores (1–100)

- **Tool use: 74/100.** **Down from 88 — the largest change in this report, and the one the prior report most deserved.** That score rested entirely on **search and browsing** evidence: BrowseComp, BrowseComp-zh, Reka Research Eval, X Bench Deepsearch, X Browse, and a #1 Search Arena finish at 1163 Elo. All of it is from the 2025-09-19 launch post, none of it has been refreshed, and none of it measures *agentic* tool use. The independent data that does: **τ²-bench 65.8%** and **IFBench 50.5%**. τ² is the benchmark Grok 4.20 scores 97% on; this model manages 65.8%. IFBench is the benchmark Grok 4.20 scores 83% on; this model manages 50.5%. **Grok 4 Fast is a superb search engine with mediocre agentic tool control** — the prior report's own caveat ("terminal and enterprise-workflow tool use is unmeasured") turns out to be where the model is weakest, not merely unmeasured.
- **Reasoning: 66/100.** **Down from 82.** The prior 82 was anchored on math and science scores — AIME 2025 92.0%, HMMT 2025 93.3%, GPQA 85.7% — and those still hold under independent measurement (**AA-GPQA 84.7%, AA-HLE 19.1%** both land within a point of xAI's own figures). What the prior pass could not see is the reliability profile: **AA-Omniscience Hallucination Rate 68.3%** with **22.8% accuracy** and an **Omniscience Index of −29.9%**. The model fabricates on more than two-thirds of factual questions, and its Omniscience Index is worse than pure ignorance. **CritPt 2.9%** and an **AA-Intelligence Index of 17.9** point the same way. HLE 19.1% is also far below the 40%+ frontier reference. A model that answers confidently and wrongly two times in three is not a reasoning model for any purpose where correctness is checkable.
- **Context window: 96/100.** Unchanged. The **2,000,000-token** window is confirmed three ways and clears the ≥1M tier mapping to 95–100. This dimension improves in evidence terms even though the score does not: **AA-LCR at 73.7%** is the retrieval-at-length measurement the prior report recorded as missing. Held at 96 rather than higher because 73.7% is a moderate retrieval score, not a ≥98% result, and **no MRCR, RULER, or GraphWalks figure** exists.
- **Multimodal: 70/100.** Up from 66. **MMMU-Pro 61.8%** is the first real multimodal measurement for this model and places it mid-tier. The modest gain reflects that xAI's original "enhanced multimodal capabilities as future work" caveat is now backed by an actual score. Held well below image-capable peers because MMMU-Pro 61.8% is mediocre and **there is no video or audio input, no PDF benchmark, and no non-text output.**
- **Coding: 58/100.** **Down from 72.** **Vibe Code Bench at exactly 0.00%** is the headline — not a low score, a literal zero, and the worst figure recorded for any model in this batch. Against that, **LiveCodeBench 80.0%** from the Jan–May 2025 window is a genuine and still-impressive single-shot code-generation result. The gap between those two numbers is the whole story: competent at generating code from a specification, wholly unable to drive an open-ended coding session. **No SWE-bench Verified, SWE-bench Pro, DeepSWE, or SciCode figure has ever been published for this model**, so the coding dimension rests on two data points, one of which is zero.
- **Cost efficiency: 96/100.** Down from 99. The **price is unchanged and still remarkable** — $0.20/$0.50 under 128K, $0.05 cached input, free for every consumer user, and Artificial Analysis did verify the state-of-the-art price-to-intelligence ratio at launch. The reduction is about **eroded value, not cost**: at $0.20/$0.50 the model now competes with GLM 5.3 Flash, DeepSeek V4.1 Flash and Muse Spark, several of which are free outright and score higher on nearly every axis. Being the cheapest weak option is no longer the same achievement it was in September 2025.
- **Overall Score: 72.8/100.** (74 + 66 + 96 + 70 + 58) / 5 = 364 / 5 = 72.8, down from 80.8. The prior score was high because it was built on a launch-day vendor table for a model that was then genuinely class-leading, and could not yet see independent measurement. Fourteen months later that measurement exists and is substantially worse. **Best fit: a free, fast, high-volume web-search and deep-research component inside a larger pipeline** — the search benchmarks are real, 1163 Elo #1 on Search Arena was not a fluke, and 2M context at $0.20/$0.50 remains useful for retrieval over very long documents. **Three hard limits.** First, **68.3% hallucination rate** — never let it state a fact without an external check, and never use it as the verifier in a pipeline. Second, **Vibe Code Bench 0.00%** — it cannot code autonomously under any framing. Third, **IFBench 50.5%** — instruction-following has degraded to the point where it will quietly ignore constraints. And the recommendation that matters most: **do not adopt.** Grok 4.1 Fast — six generations newer — already outscores it on BenchLM (46.31 vs 43.64), and Grok 4.6 scores 67.92.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: Public web research of Artificial Analysis's Grok 4 Fast Reasoning benchmark rows, Vals AI's Vibe Code Bench v1.1 leaderboard, BenchLM's Grok 4 Fast profile, and xAI's original Grok 4 Fast launch post; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Audit note — **the prior report's error was scoring a stale vendor launch table as if it were current evidence.** It correctly flagged that its evidence was "entirely about search and browsing" and that "terminal and enterprise-workflow tool use is unmeasured," but then assigned Tool use 88 anyway. Independent measurement now shows that unmeasured axis is precisely where the model is weak (**τ² 65.8%, IFBench 50.5%**). The prior pass also recorded "no numeric score published" for the AA Intelligence Index — **17.9 now exists**, and it is low. **AA-GPQA 84.7% and AA-HLE 19.1% independently confirm xAI's own 85.7% and 20.0%**, and those launch figures are retained where they hold up; only the dimensions where independent data disagrees have moved. **The 68.3% hallucination rate and −29.9% Omniscience Index are new and are the second-largest driver of the fall.** Search-provider rate limiting (HTTP 429) persisted, so evidence came from direct primary retrievals plus cited leaderboards rather than three discrete searches.
- Future sources: add a new file next to this one, e.g. `Grok_4_Fast_Recheck.md`, using the same headings.