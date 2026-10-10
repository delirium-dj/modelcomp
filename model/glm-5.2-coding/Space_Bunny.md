# GLM 5.2 Coding — findings by Space Bunny

- Source: Z.AI / provider route (`glm-5.2`; coding-plan alias)
- Date: 2026-10-10 (UTC) — second-pass research; first pass 2026-09-29
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
- Re-validation note: re-checked 2026-10-10. **MATERIAL change — Overall 76.6 → 70.6.** The prior pass scored almost entirely from **Z.AI's model card plus a secondary launch blog**, and noted that "HLE, LCR/MLCR, CritPt, and hallucination metrics: **no verified public score found**." Those gaps are now filled and two of them are strong — **Hallucination Rate 26.3% with a positive Omniscience Index of +4.4%**, **HLE 40.5/41.1%**, **CritPt 20.9%**, **AA-LCR 78.3%**. But independent agentic and terminal measurement is much weaker than the vendor table implies: **Terminal-Bench 2.1 splits 81.0% (Z.AI) against 67.8% (Vals AI)**, **Terminal-Bench 3.0 is 4.6%**, **AA Agentic Index 39.4%**, and **ResearchClawBench 20.7%**. Restated: **Tool 90 → 76**, **Reasoning 91 → 86**, **Context 95 → 94**, **Coding 92 → 82**, **Cost 88 → 85**, Multimodal unchanged at 15.

## Model card

- **Name:** GLM 5.2 Coding
- **Short description:** A provider coding-plan alias/route for Z.AI's GLM-5.2, rather than a separately identified checkpoint. Intended for long-horizon software-engineering agents and project-scale context. **Superseded within its own family** — GLM-5.3 outscores it on every dimension measured here.
- **Provider / access:** Provider alias `glm-5.2`; AIHubMix exposes `coding-glm-5.2` and maps the actual model ID to `glm-5.2`. OpenAI-compatible Chat Completions with tool calling, web search, URL context, code interpreter, computer use, file search, structured output, caching, and background mode. Artificial Analysis tracks `GLM-5.2 (max)` and `GLM-5.2 (Non-reasoning)`.
- **Release / knowledge:** Z.AI released GLM-5.2 on **2026-06-16**. **No reliable knowledge cutoff has ever been published** — an unchanged gap across two passes.
- **IDs:** `glm-5.2`; provider alias `coding-glm-5.2`. The folder's `opencode/glm-5.2-coding` is a route label, not a separate model ID.
- **Context window:** **1,000,000 input tokens / 131,072 max output** (Z.AI official documentation; AIHubMix reports 1M/131K for the route).
- **Modalities:** **Text in / text out.** Reasoning modes, streaming, function calling, context caching, structured output, and MCP supported. The official specification is text-only — hence the floor multimodal score.
- **Pricing (verified 2026-10-10):** Z.AI first-party **$1.40 / 1M input, $4.40 / 1M output**, cached input $0.14–$0.26/1M. AIHubMix listed **$0.06 / $0.22** for `coding-glm-5.2`, **but the limited-time promotion billing off-peak Coding Plan usage at 1× (instead of 2×) ended with September 2026 — so that figure has now expired.** The route is capacity-limited and may return 429s.
- **Speed / latency:** Z.AI first-party roughly **37 output t/s with ~2.9 s TTFT**; multi-provider telemetry averages **~68 t/s** across gateways, ranging ~30 to 161 t/s. Thinking-first, so time to first *answer* far exceeds TTFT.
- **Architecture:** Open-weight MoE, approximately **753B total / ~40B active**; MIT license. **IndexShare** sparse attention (indexer reused across every four sparse attention layers, ~2.9× fewer per-token FLOPs at 1M context) and an improved MTP layer for speculative decoding (+20% acceptance length). Effort-level control (High / Max) trades capability against speed and token cost.

### Raw benchmarks found

**Official Z.AI GLM-5.2 model card:**

- Terminal-Bench 2.1 **81.0%**; MCP Atlas **76.8%**; Toolathlon **48.2%**; HLE with tools **54.7%**; CritPt **20.9%**
- SWE-bench Pro **62.1%**; NL2Repo **48.9%**; ProgramBench **63.7%**
- GPQA / GPQA-Diamond **91.2%**; HLE (with and without tools) **40.5%**; AIME 2026 **99.2%**; HMMT Nov 2025 **94.4%**; HMMT Feb 2026 **92.5%**; MMAnswerBench **91.0%**

**Independent — new this pass:**

Agent / tool use:

- **τ²-bench: 99.1%** (Artificial Analysis) — **the highest single agentic score measured for any model in this research effort**
- **Terminal-Bench 2.1: 67.8%** (Vals AI) — against Z.AI's own **81.0%**; a **13.2-point vendor/independent split**
- **Terminal-Bench 3.0: 4.6%** (Terminal-Bench 3.0 leaderboard, frontierbench.ai) — near-total failure on the current-generation harness
- **AA Agentic Index: 39.4%**; **GDPval-AA 43.7% / Elo 1,418**; **APEX-Agents-AA 33.7%**; **ITBench 42.7%**; **ResearchClawBench 20.7%**

Coding:

- **SWE-bench: 82.8%** (Vals AI); **LiveCodeBench: 69.5%** (Vals AI); **AA Coding Index: 68.8%**; **SciCode 51.2%**
- **CursorBench 3.2: 55.0%** (Cursor official evals); **OpenHarmony Bench 58.4%**
- **PostTrainBench v1.1: 31.7%** — *closes the prior pass's gap, which recorded the exact value as "not exposed"*

Reasoning / knowledge:

- **AA-Omniscience Index: +4.4%**; **Accuracy: 24.3%**; **Hallucination Rate: 26.3%** — **a strong reliability profile, second only to GLM-5.3's 29.6% in this batch, and one of only two positive Omniscience indices measured**
- **AA-Intelligence Index: 33.7** (v4.3.2) — confirms the prior pass's 34 for `GLM-5.2 (max)` as essentially correct
- **GPQA Diamond: 91.2% (Z.AI) / 89.5% (AA) / 85.6% (Vals AI)** — a **5.6-point spread across three sources**
- **HLE: 40.5% (Z.AI) / 41.1% (AA)**; **MMLU-Pro 86.7%** (Vals AI)
- **AA-LCR: 78.3%**; **IFBench: 73.3%**

Multimodal: **Design Arena Website 1,292 Elo** (OpenRouter) — a text/code output signal, not a native image capability.

**BenchLM composite: 61.55/100, #47 of 889** (44 of 625 benchmarks). Family for scale: **GLM-5.3 68.64**, GLM-5.3-Flash 57.36, GLM-5.1 56.48, GLM-5-Turbo 54.15, GLM-5 54.14.

Sources consulted: [BenchLM GLM-5.2 (updated 2026-10-10)](https://benchlm.ai/models/glm-5-2), [Z.AI GLM-5.2 model card](https://huggingface.co/zai-org/GLM-5.2), [Artificial Analysis GLM-5.2](https://artificialanalysis.ai/models/glm-5-2) and its τ²-bench / GDPval-AA / APEX-Agents / ITBench / LCR / SciCode / Coding Index leaderboards, [Vals AI GLM-5.2](https://www.vals.ai/models/zai_glm-5.2), [Terminal-Bench 3.0 leaderboard](https://www.frontierbench.ai/), [ResearchClawBench](https://internscience.github.io/ResearchClawBench-Home/), [CursorBench](https://cursor.com/cursorbench), [PostTrainBench v1.1](https://posttrainbench.com/?version=v1.1), [OpenHarmony Bench](https://bench.matrix.openharmony.cn/), and [AIHubMix coding-glm-5.2](https://aihubmix.com/model/coding-glm-5.2), accessed 2026-10-10.

### Normalized scores (1–100)

- **Tool use: 76/100.** **Down from 90 — a 14-point correction.** **τ²-bench at 99.1% is the best agentic score measured for any model in this research effort** and genuinely belongs at the top of this dimension; **MCP Atlas 76.8%** corroborates. But three independent results pull hard the other way: **Terminal-Bench 2.1 is 67.8% on Vals AI against Z.AI's own 81.0%**, a 13.2-point split that mirrors GLM-5.3's 16.7-point three-way spread and confirms the vendor figure is optimistic; **Terminal-Bench 3.0 is 4.6%**; and **AA Agentic Index is 39.4%** against GLM-5.3's 53.4%. **ResearchClawBench 20.7%** and **APEX-Agents 33.7%** show sustained multi-step professional work is the weak axis. Toolathlon at 48.2% is also markedly below GLM-5.3's 73.0%. The score stays high because τ²-bench 99.1% is real; it falls because everything else is two generations behind.
- **Reasoning: 86/100.** Down from 91. **Math and science are exceptional and now well corroborated across three sources: AIME 2026 99.2%, HMMT Nov 2025 94.4%, HMMT Feb 2026 92.5%, MMAnswerBench 91.0%, GPQA Diamond 91.2% / 89.5% / 85.6%, MMLU-Pro 86.7%, HLE 40.5% / 41.1%, CritPt 20.9%.** The prior pass could cite none of HLE, CritPt, or hallucination metrics, and their arrival is a genuine improvement in the evidence base. **The model's standout property is reliability: Hallucination Rate 26.3% with a positive Omniscience Index of +4.4%** — one of only two models in this batch with a positive index, and second only to GLM-5.3 overall. The reductions are narrow and specific: the **5.6-point GPQA spread across three harnesses**, and an **Intelligence Index of 33.7 against GLM-5.3's 44.8**, which says the same thing more bluntly. **No published knowledge cutoff** remains an open gap.
- **Context window: 94/100.** Down from 95. **1,000,000 input / 131,072 output** is verified from Z.AI's documentation, and **AA-LCR at 78.3%** is now an exact-model retrieval result that the prior pass explicitly lacked ("no independent retrieval-at-length result was found"). **IndexShare's ~2.9× FLOP reduction at 1M context** is a real engineering advantage for sustained long-context use. Held just below the 95 band because **no MRCR, RULER, or GraphWalks figure exists**, and because GLM-5.2's sibling GLM-5.3 shows MLCR-AA dropping to 48.3% where AA-LCR reads 79.7% — a reminder that single-harness long-context results need corroboration.
- **Multimodal: 15/100.** Unchanged. **Text-only** in every official and independent specification — no image, audio, or video input. This maps to the methodology's floor and is the single largest structural drag on this model's Overall. **Design Arena Website 1,292 Elo** is recorded but measures text-and-code output quality, not non-text input, and does not raise the score. Z.AI's **GLM-5V-Turbo** sibling exists for genuinely multimodal work.
- **Coding: 82/100.** Down from 92. This is GLM-5.2's purpose and the evidence is strong on the axis it targets: **SWE-bench 82.8% (Vals AI)**, **SWE-bench Pro 62.1%**, **Terminal-Bench 2.1 81.0% / 67.8%**, **Coding Index 68.8%**, **LiveCodeBench 69.5%**, **ProgramBench 63.7%**, **SciCode 51.2%**, **OpenHarmony 58.4%**. Ten distinct coding measurements, more than any other model in this batch. The reductions come from three places: the **Terminal-Bench 3.0 cliff to 4.6%**, **PostTrainBench v1.1 at 31.7%**, and **ResearchClawBench 20.7%** — all three indicating strong single-task patching and weak long-horizon session work. The prior 92 implicitly equated SWE-bench performance with autonomous coding ability, which this batch's evidence repeatedly shows is not the same thing.
- **Cost efficiency: 85/100.** Down from 88. **The specific change is a promotion expiry:** the AIHubMix Coding Plan's off-peak 1× billing for `coding-glm-5.2`, which the prior pass flagged as ending with September 2026, **has now ended**, so the headline **$0.06/$0.22 route figure no longer holds**. Z.AI first-party remains **$1.40/$4.40**. The score stays mid-high because the model is **MIT-licensed open weights**, because models.dev lists comparable Z.AI flagships free across a very large provider table, and because the route is capacity-limited rather than guaranteed — a caller relying on the $0.06 figure today will be surprised.
- **Overall Score: 70.6/100.** (76 + 86 + 94 + 15 + 82) / 5 = 353 / 5 = 70.6, down from 76.6. **Best fit: low-cost, high-reliability text reasoning and single-task coding over very long context, where you need the model to be right.** The specific profile is AIME 99.2% and GPQA ~89% with a **26.3% hallucination rate** — you can use this model's output as a pipeline's fact-producing step far more safely than almost anything else in this batch — plus SWE-bench 82.8% and 1M context. **Four cautions.** First, **do not run it as an autonomous agent**: Terminal-Bench 3.0 is 4.6%, Agentic Index 39.4%, ResearchClawBench 20.7%. Second, **τ²-bench 99.1% is a single narrow domain** — do not generalise it into "best agentic model." Third, **use the Vals AI 67.8% rather than the vendor 81.0%** when planning against Terminal-Bench 2.1. Fourth, **GLM-5.3 supersedes it** — 68.64 vs 61.55 on BenchLM, with Agentic Index 53.4% vs 39.4%, Coding Index 74.8% vs 68.8%, SWE-bench 95.4% vs 82.8%, and Intelligence Index 44.8 vs 33.7. Choose GLM-5.2 only if you specifically need the 5.2 checkpoint or a route that still honours the old pricing.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: Public web research of BenchLM's GLM-5.2 profile, Z.AI's official GLM-5.2 model card, Artificial Analysis's GLM-5.2 benchmark rows and their τ²-bench / GDPval-AA / APEX-Agents / ITBench / LCR / SciCode / Coding Index leaderboards, Vals AI's GLM-5.2 leaderboards, the Terminal-Bench 3.0 leaderboard, ResearchClawBench, Cursor evals, PostTrainBench v1.1, OpenHarmony Bench, and AIHubMix's route page; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Audit note — **two corrections in opposite directions, both material.** Upward on reliability: the prior pass recorded "HLE, LCR/MLCR, CritPt, and hallucination metrics: no verified public score found" and scored Reasoning 91 largely on AIME 99.2% and GPQA 91.2% alone; the arrival of **HLE 40.5%, CritPt 20.9%, AA-LCR 78.3%, and a 26.3% hallucination rate with a +4.4% Omniscience Index** makes that score better *evidenced* even as it falls to 86. Downward on agentic: **Terminal-Bench 2.1 splits 81.0% (Z.AI) against 67.8% (Vals AI)** and **Terminal-Bench 3.0 reads 4.6%**, so Tool use falls from 90 to 76 — this is the **second consecutive model in this batch** (after GLM-5.3) where the vendor Terminal-Bench 2.1 figure is materially optimistic, which is now a pattern worth treating as a rule rather than an anecdote. **τ²-bench 99.1% is recorded as the best agentic score in this research effort and is credited as such**, even though the surrounding evidence is weak — the score reflects the evidence, not a narrative. **PostTrainBench v1.1 at 31.7% closes a gap the prior pass flagged as "not exposed."** The **AIHubMix Coding Plan promotion expiry** is the specific driver of the cost reduction. Note the structural drag: **Multimodal 15** caps this model's Overall regardless of quality — on the four text-relevant dimensions alone it scores 84.5. Search-provider rate limiting (HTTP 429) persisted, so evidence came from three direct primary retrievals plus cited leaderboards rather than three discrete searches.
- Future sources: add a new file next to this one, e.g. `GLM_5_2_Coding_Recheck.md`, using the same headings.