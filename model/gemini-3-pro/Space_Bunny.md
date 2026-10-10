# Gemini 3 Pro Preview (high) — findings by Space Bunny

- Source: Google DeepMind / Gemini 3 Pro Preview
- Date: 2026-10-10 (UTC) — second-pass research; first pass 2026-09-29
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Lifecycle, confirmed and consequential.** `gemini-3-pro-preview` was **shut down on
> 2026-03-09**. Google's changelog says the ID "now points to `gemini-3.1-pro-preview`"; the
> developer-forum migration thread says calls to the old ID "will return an error". Both are
> documented, and they disagree — which matters, because one is a silent redirect and the other is
> a hard stop. Benchmark rows below are the last measurements of the actual 3 Pro weights.

## Model card

- **Name:** Gemini 3 Pro Preview (high)
- **Short description:** Google's November 2025 flagship reasoning and multimodal model — the model that took the top LMArena spot at launch and is remembered for multimodal breadth, factuality and math rather than agentic coding.
- **Provider / access:** Was Google Gemini API `gemini-3-pro-preview`, AI Studio, Vertex AI and the Gemini app. **Shut down 2026-03-09**; replacement is `gemini-3.1-pro-preview` (released 2026-02-19 at the same price). Google's `-latest` alias moved to 3.1 Pro on 2026-03-06.
- **Release / knowledge:** Released 2025-11-18 in preview; **knowledge cutoff January 2025**.
- **IDs:** `gemini-3-pro-preview` (now redirecting or erroring to `gemini-3.1-pro-preview`). A separate extended-reasoning mode, **Gemini 3 Pro Deep Think**, shipped from the same family with a 2M context.
- **Context window:** 1,000,000 tokens input (64K max output); Deep Think 2M.
- **Modalities:** Text, image, video, audio and PDF input; text output; thinking levels, media resolution control and thought signatures; function calling and structured outputs.
- **Pricing (as of 2026-09-29, historical):** **$2.00 in / $12.00 out per 1M up to 200K prompt tokens; $4.00 / $18.00 above 200K**, with a 90% cache discount (blended 7:2:1 $1.74). Identical to Gemini 3.1 Pro, which is why Google redirected rather than repriced. Nothing is purchasable now.
- **Architecture:** Sparse mixture-of-experts trained on Google TPUs; parameter count not disclosed.

### Raw benchmarks found

*Google's own figures (Gemini 3 Thinking, High):*

- HLE **37.5%** without tools / **45.8%** with search + code; GPQA Diamond **91.9%**; ARC-AGI-2 **31.1%**; MMMLU **91.8%**
- SWE-bench Verified **76.2%**; SWE-bench Pro (public) **43.3%**; SciCode **56%**; LiveCodeBench Pro **2,439 Elo**; Terminal-Bench 2.0 **54.2%** at launch, **56.9%** on re-run
- **MMMU-Pro 81.0%; Video-MMMU 87.6%; SimpleQA Verified 72.1% (state of the art at launch)**; MathArena Apex **23.4%** (SOTA at launch)
- Agentic: Tau2-Bench Retail **85.3%** / Telecom **98.0%**; MCP Atlas **54.1%**; BrowseComp **59.2%**; APEX-Agents **18.4%**; GDPval-AA **1,195 Elo**
- Long context: MRCR v2 8-needle **77.0%** at 128K average, **26.3%** at 1M pointwise

*Independent:*

- Artificial Analysis Intelligence Index v4.3.2: **28 (estimated)**, rank **#95/216** — AA flags it as an estimate because the model is deprecated, and reports no speed or cost-per-task
- AA component rows: HLE **40%** (its fixed harness, vs Google's 45.8% with tools), CritPt **9%**, AA-LCR v1.1 **76%**, AA-Omniscience **15**
- **Vals AI:** average accuracy **64.03%**, average latency **1,436.84 s (about 24 minutes)**, $2/$12, 1M context, 66K max output, high effort; SWE-bench rank **30 of 79**
- LMArena text: **1,501 Elo, rank 1** at launch → **1,485, rank 16** by 2026-09-13; WebDev Arena **1,487 Elo, rank 1**
- Contextual comparison that shaped its reputation: **Gemini 3 Flash scored 78.0% on SWE-bench Verified against Gemini 3 Pro's 76.2%** — the smaller model won on the benchmark closest to real software work

*Gemini 3 Pro Deep Think (extended-reasoning mode of the same family, not this folder's model):*

- HLE **41.0%**, GPQA Diamond **93.8%**, ARC-AGI-2 **45.1%** at launch with code execution (ARC Prize Verified), rising to a reported **84.6%** after the 2026-02-12 upgrade; CritPt **25.7%** (Artificial Analysis); Codeforces Elo 3,455; 2M context
- But: SWE-bench Verified **~48%** (below Claude Opus 4.6) and long-context **26.3% at 1M** — specialist reasoning, weak agentic coding

### Normalized scores (1–100)

- **Tool use: 85/100.** Tau2-Bench Telecom at 98.0% and Retail at 85.3%, Terminal-Bench 2.0 at 56.9%, MCP Atlas 54.1% and native function calling describe genuine tool competence. Held back by BrowseComp at 59.2%, APEX-Agents at 18.4%, GDPval-AA at only 1,195 Elo, and an AA Terminal-Bench Hard reading of 1.67% — the agentic side was not where this model led.
- **Reasoning: 89/100.** GPQA Diamond 91.9%, HLE 45.8% with tools, MathArena Apex 23.4% as state of the art at launch, ARC-AGI-2 31.1% and MMMLU 91.8%. Two caveats from AA's own runs: HLE 40% on a fixed harness and **CritPt at just 9%**, the weakest physics row of any 3-series model.
- **Context window: 86/100.** A verified 1M window with AA-LCR at 76% — respectable — but Google's own MRCR result collapses from **77.0% at 128K to 26.3% at the full 1M**, so the usable long-context length is far shorter than the advertised window.
- **Multimodal: 93/100.** The strongest dimension and the reason to remember this model: native text, image, video, audio and PDF input; MMMU-Pro 81.0%; **Video-MMMU 87.6%**; and **SimpleQA Verified 72.1%, state of the art at launch** — unusually strong factuality for a frontier model of its day.
- **Coding: 87/100.** SWE-bench Verified 76.2%, SWE-bench Pro 43.3%, LiveCodeBench Pro 2,439 Elo, SciCode 56% and Terminal-Bench 2.0 56.9% are respectable for November 2025. Docked because **Gemini 3 Flash beat it on SWE-bench Verified (78.0% vs 76.2%)**, and because SWE-bench Pro at 43.3% was already trailing the GPT-5.2 column at 55.6%.
- **Cost efficiency: 30/100.** Rescored down from 62. The historical rate ($2/$12, doubling above 200K) was the expensive end of its generation, and the model was **shut down on 2026-03-09** — the ID now serves Gemini 3.1 Pro. There is no longer anything to buy, and Vals' measured 24-minute average latency confirms the reasoning profile was expensive in wall-clock terms too.
- **Overall Score: 88.0/100.** (85 + 89 + 86 + 93 + 87) / 5 = 440 / 5 = 88.0. Unchanged, because cost efficiency is excluded from the mean. Historically the pick for multimodal understanding, video and factuality at the frontier; today it is a closed entry — route to `gemini-3.1-pro-preview`, which is faster and better on nearly every row above.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: second-pass public internet research across Google's Gemini 3 launch post, the Gemini 3.1 Pro model card comparison table, the Gemini API deprecations page and changelog, the Google AI Developers Forum migration thread, Vals AI's Gemini 3 Pro model page, Vector Wire's capability profile, Artificial Analysis model data, and independent Gemini 3 Deep Think reviews; the shutdown behaviour is reported as documented (silent redirect vs error) rather than resolved, and the Gemini 3 Pro / Gemini 3 Pro Deep Think split is kept explicit; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Sources

- Google — A new era of intelligence with Gemini 3 (2025-11-18 launch figures, LMArena, MMMU-Pro, Video-MMMU, SimpleQA, Deep Think): https://blog.google/products-and-platforms/products/gemini/gemini-3/
- Gemini API — deprecations (`gemini-3-pro-preview`: shutdown 2026-03-09, replacement `gemini-3.1-pro-preview`): https://ai.google.dev/gemini-api/docs/deprecations
- Gemini API — release notes (shutdown entry and alias switch): https://ai.google.dev/gemini-api/docs/changelog
- Google AI Developers Forum — migration thread, including the conflicting "will return an error" statement: https://discuss.ai.google.dev/t/migrate-from-gemini-3-pro-preview-to-gemini-3-1-pro-preview-before-march-9-2026/127062
- Gemini 3.1 Pro model card (Gemini 3 Pro comparison column: HLE, GPQA, ARC-AGI-2, SWE-bench, Terminal-Bench, MRCR): https://deepmind.google/models/model-cards/gemini-3-1-pro/
- Vals AI — Gemini 3 Pro (11/25) model page (64.03% average, 1,436.84 s latency): https://www.vals.ai/models/google_gemini-3-pro-preview
- Vector Wire — Gemini 3 Pro capability profile and benchmark rows: https://vectorwire.ai/models/gemini-3-pro
- The Expert Ranking — Gemini 3 Pro retirement record and launch/arena timeline: https://theexpertranking.com/providers/google/gemini-3-pro/
- BenchLM — Gemini 3 Pro Deep Think benchmark rows: https://benchlm.ai/models/gemini-3-pro-deep-think
- Awesome Agents — independent Gemini 3 Deep Think review (ARC-AGI-2 84.6%, SWE-bench ~48%, long-context limits): https://awesomeagents.ai/reviews/review-gemini-3-deep-think/