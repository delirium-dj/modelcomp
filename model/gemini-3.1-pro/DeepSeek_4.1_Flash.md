# Gemini 3.1 Pro — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind / Gemini 3.1 Pro (`gemini-3.1-pro-preview`)
- Date: 2026-10-16 (UTC) — rewrite pass (previous Signature 2026-10-09); re-verified 2026-10-18; enriched 2026-10-24
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Enrichment pass — 2026-10-24** (second pass, user-approved). BenchLM (`gemini-3-1-pro`) re-read on 2026-10-23 carries **49 source-displayable rows** (was 31 on 2026-10-18) and computes **64.69/100, #38 of 992** (was #38 of 228). Newly captured: **AA-LCR 82.0%**, **AA Agentic Index 10.3%**, **GDPval-AA 904 Elo / 14.6% normalized** (a large downward revision from the ~1314–1317 Elo recorded on 2026-10-16), APEX-Agents-AA 32.0%, Gert Labs 56.87%, ResearchClawBench 13.3%, MazeBench 1%, **Vibe Code Bench 32.03%** (Vals), AA Coding Index 68.8%, SWE-bench (Vals) 78.8%, LiveCodeBench (Vals) 88.5%, LiveCodeBench Pro 82.9%, React Native Evals 78.9%, PostTrainBench v1.1 22.0%, **AA-Omniscience index 31.9 / accuracy 54.9% / hallucination 50.9%**, FrontierMath v2 T1–3 59.649% / Tier-4 26.829% (Epoch AI), AA-IFBench 77.1%, AA Global-MMLU-Lite 93.2%, ARC-AGI-3 0.4%, MMMU-Pro 83.9%, CharXiv 80.2%, ScreenSpot Pro 84.4%, ZeroBench 29.0%, MedXpertQA (MM) 81.3%, ParseBench 69.14%, Design Arena 1253. Vals GPQA 95.5%, Vals MMLU-Pro 91.0%.
> **New conflicts:** **GDPval-AA revised down to 904 Elo** (agentic depth far weaker than the launch snapshot suggested) and **AA Agentic Index 10.3%** confirm a thin tool-use ceiling; a **50.9% Omniscience hallucination rate** and CritPt 17.7% flag knowledge-fragility. Offsetting: GPQA 94.1–95.5%, AA-LCR 82.0% and MMLU-Pro 91.0% keep reasoning solid.
> **Scores adjusted this pass: Tool use 76→74, Reasoning 87→86, Coding 84→83; Overall 86→85.** Context, Multimodal, Cost unchanged.
> Sources this pass: https://benchlm.ai/models/gemini-3-1-pro · https://artificialanalysis.ai/models/gemini-3-1-pro-preview · https://www.vals.ai/models/google_gemini-3.1-pro-preview · https://epoch.ai/benchmarks/frontiermath-tier-4-v2 · https://posttrainbench.com/?version=v1.1

> **Re-verified 2026-10-18.** BenchLM (`gemini-3-1-pro`, 31 rows) computed an overall **64.72/100 (#38 of 228)** and re-confirmed the prior pass. **No score change at that time.**

> **Rewrite pass — 2026-10-16** (≥3 independent sources).
> Independently re-sourced this pass: GPQA Diamond 94.3%, HLE 45.4% no-tools (47% AA), ARC-AGI-2 77.1%, Terminal-Bench 2.1 70.8% (Vals) / 2.0 68.5%, τ²-bench 95.6%, MCP Atlas 78.2%, OSWorld-Verified 76.2%, SWE-bench Verified 80.6%, SWE-bench Pro 54.2%, SciCode 59%, GDPval-AA ~1314–1317 Elo, MMMU-Pro 80.5%, CharXiv Reasoning 83.3%, MRCR v2 128K **84.9%** / 1M **26.3%**, LiveBench 2.0 overall 54.9 (reasoning 84.0 / coding 66.7 / agentic 23.9 / browser 4.0), BenchLM overall 65.17.
> **Conflicts surfaced:** (1) **Artificial Analysis Intelligence Index is unstable across versions** — 57 at launch (Index v4.1.1, #5), vs 48 (AA model page snapshot) vs **29.7 (Index v4.3.2, #95+/992)**; not comparable across versions and the single biggest drag on an otherwise frontier reasoning row. (2) **OSWorld-Verified 76.2%** (3.5 Flash launch comparison) vs **48.8%** (earlier snapshot) — different harness. (3) **MCP Atlas 78.2%** vs **69.2%** across sources. (4) Context window **1M confirmed** (AA + BenchLM) — the 2M figure in the meta snapshot actually belongs to Gemini 3 Pro. (5) Pricing $2/$12 (Google Cloud/AA) vs $1/$6 (LMArena snapshot).
> Sources: https://deepmind.google/models/gemini/pro/ · https://ai.google.dev/gemini-api/docs/long-context · https://artificialanalysis.ai/models/gemini-3-1-pro-preview · https://benchlm.ai/compare/gemini-3-1-pro-vs-glm-4-7 · https://livebench.ai/ · https://www.nxcode.org/fi/resources/news/gemini-3-5-flash-complete-guide-benchmarks-pricing-api-2026

## Model card

- **Name:** Gemini 3.1 Pro (API ID `gemini-3.1-pro-preview`)
- **Short description:** Google DeepMind's flagship reasoning model (2026-02-19), built for agentic coding, full-codebase analysis and scientific problem-solving in a 1M-token multimodal window. Superseded by the Gemini 3.5/3.7/3.8 line by late 2026.
- **Provider / access:** Gemini API (`gemini-3.1-pro-preview`) and Vertex AI; no free API tier (AI Studio web only). No OpenCode Zen ID.
- **Release / knowledge:** 2026-02-19 (preview); knowledge cutoff not published.
- **IDs:** `gemini-3.1-pro-preview`. No Free ID → paid scoring.
- **Context window:** 1,048,576 (1M) in; max output 65,536 (API default 8,192).
- **Modalities:** text, image, audio, video and PDF in; text out; tool calls; native reasoning.
- **Pricing (as of 2026-10-24):** $2.00 in / $12.00 out per 1M; caching $0.20/1M; Batch 50% off.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 **70.8%** (Vals); Terminal-Bench 2.0 **68.5%**; τ²-bench **95.6%**
- MCP Atlas **78.2%**; OSWorld-Verified **76.2%**; Toolathlon 49.4%; APEX-Agents-AA 32.0%; Gert Labs 56.87%; ResearchClawBench 13.3%
- GDPval-AA **904 Elo / 14.6%** (AA, revised down from ~1314–1317); Claw-Eval 57.8%; DeepSearchQA 69.7%; BrowseComp 85.9%
- LiveBench Agentic 23.9 / Browser Use 4.0; **AA Agentic Index 10.3%**; AutomationBench-AA 35%; AA-Briefcase 453; MazeBench 1%
- Tau3-Banking / Vibe Code Bench (tool rows): see coding

Reasoning / knowledge:

- GPQA Diamond **94.3%** (Meta chart) / **94.1%** (AA) / 95.5% (Vals); HLE **45.4%** no-tools / 47.0% (AA) / 51.4% with tools; ARC-AGI-2 **77.1%**; ARC-AGI-1 98%; ARC-AGI-3 0.4%
- FrontierMath v2 Tiers 1-3 59.649% / Tier-4 26.829% (Epoch AI); HealthBench Hard 20.6%
- LiveBench 2.0 Reasoning 84.0; BenchLM overall 64.69; **AA-LCR 82.0%**; CritPt 17.7%
- AA-Omniscience index 31.9 / accuracy 54.9% / **hallucination 50.9%**
- Artificial Analysis Intelligence Index **57 (v4.1.1 launch) / 48 / 29.7 (v4.3.2, #95+)** — version-dependent
- LMArena Text 1487 (#17); AA Global-MMLU-Lite 93.2%, MMLU-Pro (Vals) 91.0%, AA-IFBench 77.1%

Coding:

- SWE-bench (Vals) **78.8%** (SWE-bench Verified 80.6%); SWE-bench Pro (public) 54.2%; LiveCodeBench (Vals) **88.5%**, LiveCodeBench Pro 82.9%; SciCode 58.7%; AA Coding Index 68.8%
- **Vibe Code Bench 32.03%** (Vals); React Native Evals 78.9%; PostTrainBench v1.1 22.0%; Blueprint-Bench 2 26.5%
- DeepSWE: **no verified public score found**

Multimodal / long context:

- MMMU-Pro **83.9%** (Meta) / AA-MMMU-Pro 82.4%; CharXiv 80.2%; ScreenSpot Pro 84.4%; MedXpertQA (MM) 81.3%; ERQA 69.4%; SimpleVQA 72.4%; ZeroBench 29.0%; ParseBench 69.14%; VideoMME 87.2%; Design Arena 1253
- MRCR v2 128K **84.9%** / **1M 26.3%** — retrieval degrades sharply at full window
- ATLAScore 77.83 (8K–128K) / 68.52 (8K–1M); AA-LCR 82.0%

### Normalized scores (1–100)

- **Tool use: 74/100.** Strong τ² (95.6%), TB2.1 70.8%, MCP Atlas 78.2% and OSWorld 76.2% lift it, but the **GDPval-AA revision to 904 Elo**, **AA Agentic Index 10.3%**, LiveBench Agentic 23.9 / Browser Use 4.0 and Toolathlon 49.4% cap the ceiling hard with no independent terminal/tool index.
- **Reasoning: 86/100.** GPQA 94.1–95.5%, AA-LCR 82.0% and ARC-AGI-2 77.1 are frontier on the vendor suite (LiveBench reasoning 84.0), but the version-dependent AA Index (57→48→29.7), CritPt 17.7% and a 50.9% Omniscience hallucination rate pull it to 86.
- **Context window: 93/100.** Native 1M input (≥1M band) with 65K output, but MRCR@1M 26.3% shows heavy degradation and output is capped well below window.
- **Multimodal: 90/100.** Text + image + audio + video + PDF input (audio band 90–100), MMMU-Pro 83.9%, ScreenSpot Pro 84.4%; text-only output.
- **Coding: 83/100.** SWE-bench Verified 80.6%, LiveCodeBench 88.5% and SciCode 58.7% are frontier-adjacent; Vibe Code Bench 32.03%, SWE-bench Pro 54.2% and missing DeepSWE keep it out of the mid-80s.
- **Cost efficiency: 72/100.** $2/$12 sits between the ~88 ($1.25/$4.25) and ~60 ($3/$15) anchors, softened by caching/batch.
- **Overall Score: 85/100.** (74 + 86 + 93 + 90 + 83) / 5 = 85.2 → 85. Best fit: scientific/financial reasoning and long-document/full-codebase analysis where the multimodal 1M window matters more than agentic tooling depth.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-24
- Method: second-pass enrichment over rewrite-pass public internet research (Google DeepMind model page, Gemini API long-context docs, Artificial Analysis model page, BenchLM re-read 2026-10-23, Vals AI, Epoch AI, LiveBench 2.0, Meta comparison chart). The vendor-vs-independent and AA-version gaps are surfaced rather than averaged; the GDPval-AA 904-Elo revision, AA Agentic Index 10.3% and 50.9% hallucination rate drove the trim. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
