# Gemini 2.5 Flash — findings by Space Bunny

- Source: Google (`gemini-2.5-flash`; stable)
- Date: 2026-10-10 (UTC) — second-pass research; first pass 2026-09-24
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
- Re-validation note: re-checked 2026-10-10. **LARGEST correction in this batch: Overall 75.0 → 51.4, a fall of 23.6 points.** The prior pass scored this model almost entirely from *capability documentation* rather than measurement — its raw-benchmark block is six consecutive "no verified public score found" lines, and its own justifications read "Google documents a broad tool set" and "The model is designed for coding and agents." Artificial Analysis has now run the model directly, and every dimension it measured is very weak: **τ²-bench 14.9%**, **HLE 4.7%**, **CritPt 1.4%**, **Intelligence Index 9.8**, **IFBench 39.0%**, **AA-LCR 49.9%**, and an **Omniscience Hallucination Rate of 93.0%** with an Index of **−42.6%** — the worst hallucination rate measured anywhere in this research effort. Restated: **Tool 70 → 32**, **Reasoning 55 → 30**, **Context 95 → 72**, **Multimodal 95 → 78**, **Coding 60 → 45**, **Cost 93 → 90**.

## Model card

- **Name:** Gemini 2.5 Flash
- **Short description:** Google's balanced, thinking-capable multimodal model for high-volume processing, low-latency agentic tasks, and coding. **Widely documented as capable, and — once independently measured — substantially weaker than its feature list suggests.** Now a legacy access model restricted to users who have used it.
- **Provider / access:** Google Gemini API (`gemini-2.5-flash`); Google AI Studio; Batch, Flex, and Priority inference. Google's current page restricts 2.5-model access to users who have actively used them. Preview ID `gemini-2.5-flash-preview-09-2025` is shut down. Sibling variants exist as preview profiles (Native Audio, TTS) with no composite scores.
- **Release / knowledge:** Google documentation lists the latest stable update in **June 2025**; released 2025 with no day-level date shown. **Knowledge cutoff January 2025** — now 21 months stale, and by itself disqualifying for knowledge-sensitive work in 2026.
- **IDs:** `gemini-2.5-flash`.
- **Context window:** **1,048,576 input tokens / 65,536 output** (Google documentation). The window is real; **retrieval quality at that length is not** — see AA-LCR below.
- **Modalities:** **Text, image, video, audio, and PDF input; text output.** Thinking, function calling, structured outputs, code execution, file search, Google Search grounding, URL context, and computer use are all documented. Live API and image/audio generation are not supported. **This is genuinely the broadest input surface of any model in this batch** — the problem is not what it accepts, but what it does with it.
- **Pricing (verified 2026-10-10):** **$0.30 per 1M input, $2.50 per 1M output, $0.03 cached input** (BenchLM). Google pricing varies by tier and inference mode; Batch is materially cheaper.
- **Architecture:** Proprietary; Google has not disclosed parameter count.
- **Measurement note:** BenchLM classifies this variant as **non-reasoning**, and Artificial Analysis's figures reflect that configuration. **Thinking-enabled numbers were not published**, so the reasoning score below is a floor on a mode Google still supports.

### Raw benchmarks found

**Independent — new this pass, all run directly on `gemini-2.5-flash`:**

Agent / tool use:

- **τ²-bench: 14.9%** (Artificial Analysis) — *near-total failure on agentic tool use*
- **IFBench: 39.0%** (Artificial Analysis) — *the model fails to follow four instructions in ten*

Reasoning / knowledge:

- **AA-Intelligence Index: 9.8** (Artificial Analysis) — *very low*
- **GPQA Diamond: 68.3%**; **HLE: 4.7%** (Artificial Analysis)
- **CritPt: 1.4%** (Artificial Analysis)
- **AA-Omniscience Index: −42.6%**; **Accuracy: 26.1%**; **Hallucination Rate: 93.0%** — **the worst hallucination rate recorded in this entire research effort**, ahead of Gemma 4 31B's 85.0% and Kimi K2.7 Code's 82.4%

Multimodal:

- **AA-MMMU-Pro: 65.5%** (Artificial Analysis) — materially below the 73–77% its 3.x-generation siblings reach
- **Design Arena Website: 1120 Elo** (OpenRouter)

Long context:

- **AA-LCR: 49.9%** (Artificial Analysis) — *the first measured retrieval-at-length result for this model, and it is poor for a 1M window*

**Carried from the prior pass (unchanged, still accurate):**

- FrontierMath v2 Tiers 1–3: **4.844%**; Tier 4: **4.167%** (Epoch AI via BenchLM)

**Still absent:** SWE-bench Verified, SWE-bench Pro, LiveCodeBench, SciCode, Vibe Code Bench, DeepSWE, Terminal-Bench 2.0/2.1, GDPval-AA, Toolathlon, MCP-Atlas, Claw-Eval, MLCR.

**BenchLM composite: 42.20/100, #125 of 889** (14 of 625 benchmarks; conservative). Google siblings for scale: Gemini 3.8 Flash **73.17**, 3.7 Flash **67.76**, 3.6 Flash **63.15**, 3.5 Flash **62.52**, 3 Flash **54.46**, 3.5 Flash-Lite **51.63**, 2.5 Pro **49.42**. **Gemini 2.5 Flash sits below Gemini 3.5 Flash-Lite and above only Gemma 4 31B (40.15) among the models examined in this effort.**

Sources consulted: [BenchLM Gemini 2.5 Flash (updated 2026-10-10)](https://benchlm.ai/models/gemini-2-5-flash), [Artificial Analysis Gemini 2.5 Flash](https://artificialanalysis.ai/models/gemini-2-5-flash), [Google Gemini 2.5 Flash documentation](https://ai.google.dev/gemini-api/docs/models/gemini-2.5-flash), [Epoch AI FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tier-4-v2?view=graph&tab=leaderboard), and [OpenRouter Gemini 2.5 Flash benchmarks](https://openrouter.ai/google/gemini-2.5-flash/benchmarks), accessed 2026-10-10.

### Normalized scores (1–100)

- **Tool use: 32/100.** **Down from 70 — the largest single-dimension fall in this research effort.** The prior 70 was justified as "Google documents a broad tool set," which is a statement about API surface, not capability. The measured evidence is now available and it is close to disqualifying: **τ²-bench at 14.9%** and **IFBench at 39.0%**. A model that completes roughly one agentic tool-use task in seven, and silently ignores four instructions in ten, will not run a tool loop reliably — it will drift from the task specification. Google documents computer use, code execution, file search, search grounding, and URL context for this model; **none of those features rescue a 14.9% agentic score**, and the gap between documented capability and measured capability is the whole lesson of this report.
- **Reasoning: 30/100.** Down from 55. The prior 55 rested on "thinking is supported" plus weak FrontierMath values. Measured directly, the profile is very poor: **HLE 4.7%**, **CritPt 1.4%**, **Intelligence Index 9.8**, **GPQA Diamond 68.3%** — respectable on graduate-level science but far below the ≥90% reference. **Hallucination Rate 93.0%** with an Omniscience Index of **−42.6%** and only **26.1% accuracy** is the governing fact: the model is wrong about more than nine questions in ten and states the wrong answer confidently. Combined with a **January 2025 knowledge cutoff**, this dimension cannot go higher. Note this is measured on the non-reasoning configuration; thinking-enabled figures were never published and would need to clear these numbers substantially to change the picture.
- **Context window: 72/100.** Down from 95. The **1,048,576-token window is verified by Google and unchanged** — the model will accept the tokens. What is now measured, and what the prior pass explicitly noted as missing, is **whether it can use them: AA-LCR at 49.9%**. That is roughly coin-flip retrieval quality at length. A 1M window that retrieves at ~50% is worth far less than a 500K window that retrieves at 90%, which is why this falls by 23 points despite the window itself being intact. **No MRCR, RULER, GraphWalks, or MLCR figure exists.**
- **Multimodal: 78/100.** Down from 95. The modality list is genuinely the broadest in this batch — text, image, video, audio, and PDF input — and that breadth is real and worth crediting. But **MMMU-Pro at 65.5%** is the first actual measurement of what the model does with those inputs, and it lands below Gemini 3.7/3.8 Flash despite accepting the same modalities. Combined with **text-only output** and no image or audio generation, 78 reflects broad intake at mediocre comprehension.
- **Coding: 45/100.** Down from 60. **No coding benchmark has ever been published for this model** — SWE-bench, LiveCodeBench, SciCode, DeepSWE, and Vibe Code Bench are all absent, and this remains the largest evidence gap in the report. The prior 60 was assigned on positioning alone ("designed for coding and agents"). It is set lower now because every adjacent measured dimension is weak — τ²-bench 14.9% and IFBench 39.0% describe a model that struggles to sustain a multi-step specification, which is precisely what coding requires. **This score is the least evidenced in the report and should be treated as provisional pending any coding measurement at all.**
- **Cost efficiency: 90/100.** Down from 93. **$0.30 / $2.50 with $0.03 cached input** is genuinely cheap for a 1M-context multimodal model, and Batch mode is cheaper still. The small reduction reflects **legacy access restriction** — Google's page limits 2.5-model access to users who have already used them, so this is not an option for a new deployment, and **the price buys capability that independent measurement puts near the bottom of its generation.**
- **Overall Score: 51.4/100.** (32 + 30 + 72 + 78 + 45) / 5 = 257 / 5 = 51.4, down from 75.0. **The prior score was an artefact of documentation, not evidence.** Every one of its six justifications described what Google *says the model can do*, and its raw-benchmark section contained no measured agent, reasoning, or coding value of any kind. **Best fit: nothing new.** The measured profile — 93% hallucination rate, 14.9% agentic tool use, 4.7% HLE, 39% instruction following — disqualifies it from any task where output is trusted without external verification. Its one genuine strength is input breadth at a low price, which makes it a **candidate for bulk media triage**, where a model reads documents, audio, and video and routes them elsewhere, and where a human or a downstream verifier checks everything. **Do not start new work on it.** Gemini 3.5 Flash-Lite (BenchLM 51.63) costs the same or less, is unrestricted, and outranks it on every independent measure; Gemini 3.8 Flash (73.17) is 31 points clear on the composite. If legacy pinning forces this model, keep retrieval and a verifier in front of it.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: Public web research of Artificial Analysis's Gemini 2.5 Flash benchmark rows, BenchLM's Gemini 2.5 Flash profile, Google's official Gemini 2.5 Flash documentation, the Epoch AI FrontierMath v2 leaderboard, and OpenRouter's benchmark page; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Audit note — **this report corrects the most severe evidence failure found so far.** The prior version assigned seven scores with **zero measured agentic, reasoning, or coding benchmarks**, justifying them from Google's feature documentation and market positioning; the author explicitly wrote "the public profile has no coding row" and scored Coding 60 anyway. **Coding 45 is still provisional and is the only score here not backed by a measurement.** The dominant new fact is the **93.0% hallucination rate and −42.6% Omniscience Index**, the worst of any model examined across both batches; next is **τ²-bench at 14.9%**, which refutes the tool-use score outright. **The January 2025 knowledge cutoff and legacy access restriction** are carried forward and reinforced. One measurement conflict is flagged: **AA-LCR 49.9%** is the only long-context retrieval figure and is unusually low for a verified 1M window — it is reported as measured rather than adjusted, but it is worth re-checking on a second harness. Search-provider rate limiting (HTTP 429) persisted, so evidence came from three direct primary retrievals (BenchLM, Artificial Analysis, Google documentation) plus cited leaderboards rather than three discrete searches.
- Future sources: add a new file next to this one, e.g. `Gemini_2_5_Flash_Recheck.md`, using the same headings.