# Gemini 3.1 Pro — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind / Gemini 3.1 Pro (`gemini-3.1-pro-preview`)
- Date: 2026-10-16 (UTC) — rewrite; re-verified 2026-10-18; enriched 2026-10-24; re-researched 2026-11-04
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-research pass — 2026-11-04** (second pass, user-requested). Fresh sources this pass: BenchLM (`gemini-3-1-pro`, **49 rows**, **64.41/100, #34 of 1008** — was 64.69, #38 of 992), Artificial Analysis model page, Vals AI, Epoch AI, LlamaIndex snapshots.
> **Refreshed:** Design Arena Website **1251** (was 1253).
> **Newly captured rows:** AA EnterpriseOps-Gym **42.2%**; terminalBenchHard **53.8%**; AA-AnalystAgent **41.3%**; ScarfBench **37.6%**; MedXpertQA (Text) 71.5%. All sit in the same mid/low band as the existing agentic rows.
> **Re-verified unchanged:** GDPval-AA 904 Elo / 14.6% normalized, AA Agentic Index 10.3%, τ²-bench 95.6%, TB2.1 70.8%, GPQA 94.1–95.5%, AA-LCR 82.0%, AA-Omniscience 31.9/54.9/50.9, FrontierMath 59.649/26.829, MRCR 84.9% @128K / 26.3% @1M.
> **No score change:** the new rows confirm the thin tool-use ceiling and the strong reasoning/multimodal profile; scores held at 85.
> Sources this pass: https://benchlm.ai/models/gemini-3-1-pro · https://artificialanalysis.ai/models/gemini-3-1-pro-preview · https://www.vals.ai/models/google_gemini-3.1-pro-preview · https://epoch.ai/benchmarks/frontiermath-tier-4-v2

> **Enrichment pass — 2026-10-24** (second pass, user-approved). BenchLM (`gemini-3-1-pro`) re-read on 2026-10-23 carried **49 source-displayable rows** (was 31 on 2026-10-18) and computed **64.69/100, #38 of 992** (was #38 of 228). Newly captured then: AA-LCR 82.0%, AA Agentic Index 10.3%, GDPval-AA 904 Elo / 14.6% (a large downward revision from ~1314–1317 Elo), APEX-Agents-AA 32.0%, Gert Labs 56.87%, ResearchClawBench 13.3%, MazeBench 1%, Vibe Code Bench 32.03% (Vals), AA Coding Index 68.8%, SWE-bench (Vals) 78.8%, LiveCodeBench (Vals) 88.5%, LiveCodeBench Pro 82.9%, React Native Evals 78.9%, PostTrainBench v1.1 22.0%, AA-Omniscience 31.9/54.9/50.9, FrontierMath v2 59.649/26.829, AA-IFBench 77.1%, AA Global-MMLU-Lite 93.2%, ARC-AGI-3 0.4%, MMMU-Pro 83.9%, CharXiv 80.2%, ScreenSpot Pro 84.4%, ZeroBench 29.0%, MedXpertQA (MM) 81.3%, ParseBench 69.14%, Design Arena 1253. Scores adjusted that pass: Tool 76→74, Reasoning 87→86, Coding 84→83; Overall 86→85.

> **Re-verified 2026-10-18.** BenchLM (`gemini-3-1-pro`, 31 rows) computed an overall **64.72/100 (#38 of 228)**. **No score change at that time.**

> **Rewrite pass — 2026-10-16** (≥3 independent sources). Independently re-sourced: GPQA Diamond 94.3%, HLE 45.4% no-tools (47% AA), ARC-AGI-2 77.1%, Terminal-Bench 2.1 70.8% (Vals) / 2.0 68.5%, τ²-bench 95.6%, MCP Atlas 78.2%, OSWorld-Verified 76.2%, SWE-bench Verified 80.6%, SWE-bench Pro 54.2%, SciCode 59%, GDPval-AA ~1314–1317 Elo, MMMU-Pro 80.5%, CharXiv Reasoning 83.3%, MRCR v2 128K 84.9% / 1M 26.3%, LiveBench 2.0 overall 54.9. Conflicts surfaced: AA Intelligence Index unstable across versions (57 → 48 → 29.7); OSWorld 76.2% vs 48.8% harness split; MCP Atlas 78.2% vs 69.2%; context 1M confirmed; pricing $2/$12.

## Model card

- **Name:** Gemini 3.1 Pro (API ID `gemini-3.1-pro-preview`)
- **Short description:** Google DeepMind's flagship reasoning model (2026-02-19), built for agentic coding, full-codebase analysis and scientific problem-solving in a 1M-token multimodal window. Superseded by the Gemini 3.5/3.7/3.8 line by late 2026.
- **Provider / access:** Gemini API (`gemini-3.1-pro-preview`) and Vertex AI; no free API tier (AI Studio web only). No OpenCode Zen ID.
- **Release / knowledge:** 2026-02-19 (preview); knowledge cutoff not published.
- **IDs:** `gemini-3.1-pro-preview`. No Free ID → paid scoring.
- **Context window:** 1,048,576 (1M) in; max output 65,536 (API default 8,192).
- **Modalities:** text, image, audio, video and PDF in; text out; tool calls; native reasoning.
- **Pricing (as of 2026-11-04):** $2.00 in / $12.00 out per 1M; caching $0.20/1M; Batch 50% off.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 **70.8%** (Vals); Terminal-Bench 2.0 **68.5%**; terminalBenchHard **53.8%**; τ²-bench **95.6%**
- MCP Atlas **78.2%**; OSWorld-Verified **76.2%**; Toolathlon 49.4%; APEX-Agents-AA 32.0%; Gert Labs 56.87%; ResearchClawBench 13.3%
- GDPval-AA **904 Elo / 14.6%** (AA); Claw-Eval 57.8%; DeepSearchQA 69.7%; BrowseComp 85.9%
- LiveBench Agentic 23.9 / Browser Use 4.0; **AA Agentic Index 10.3%**; **AA EnterpriseOps-Gym 42.2%**; **AA-AnalystAgent 41.3%**; AutomationBench-AA 35%; AA-Briefcase 453; MazeBench 1%

Reasoning / knowledge:

- GPQA Diamond **94.3%** (Meta chart) / **94.1%** (AA) / 95.5% (Vals); HLE **45.4%** no-tools / 47.0% (AA) / 51.4% with tools; ARC-AGI-2 **77.1%**; ARC-AGI-1 98%; ARC-AGI-3 0.4%
- FrontierMath v2 Tiers 1-3 59.649% / Tier-4 26.829% (Epoch AI); HealthBench Hard 20.6%; MedXpertQA (Text) 71.5% / (MM) 81.3%
- LiveBench 2.0 Reasoning 84.0; BenchLM overall 64.41; **AA-LCR 82.0%**; CritPt 17.7%
- AA-Omniscience index 31.9 / accuracy 54.9% / **hallucination 50.9%**
- Artificial Analysis Intelligence Index **57 (v4.1.1 launch) / 48 / 29.7 (v4.3.2)** — version-dependent
- LMArena Text 1487 (#17); AA Global-MMLU-Lite 93.2%, MMLU-Pro (Vals) 91.0%, AA-IFBench 77.1%

Coding:

- SWE-bench (Vals) **78.8%** (SWE-bench Verified 80.6%); SWE-bench Pro (public) 54.2%; LiveCodeBench (Vals) **88.5%**, LiveCodeBench Pro 82.9%; SciCode 58.7%; AA Coding Index 68.8%; ScarfBench **37.6%**
- **Vibe Code Bench 32.03%** (Vals); React Native Evals 78.9%; PostTrainBench v1.1 22.0%; Blueprint-Bench 2 26.5%
- DeepSWE: **no verified public score found**

Multimodal / long context:

- MMMU-Pro **83.9%** (Meta) / AA-MMMU-Pro 82.4%; CharXiv 80.2%; ScreenSpot Pro 84.4%; ZeroBench 29.0%; ERQA 69.4%; SimpleVQA 72.4%; ParseBench 69.14%; VideoMME 87.2%; Design Arena **1251**
- MRCR v2 128K **84.9%** / **1M 26.3%** — retrieval degrades sharply at full window
- ATLAScore 77.83 (8K–128K) / 68.52 (8K–1M); AA-LCR 82.0%

### Normalized scores (1–100)

- **Tool use: 74/100.** Strong τ² (95.6%), TB2.1 70.8%, MCP Atlas 78.2% and OSWorld 76.2% lift it, but GDPval-AA 904 Elo, AA Agentic Index 10.3%, LiveBench Agentic 23.9 / Browser Use 4.0 and the new EnterpriseOps-Gym 42.2 / AnalystAgent 41.3 rows cap the ceiling hard.
- **Reasoning: 86/100.** GPQA 94.1–95.5%, AA-LCR 82.0% and ARC-AGI-2 77.1 are frontier on the vendor suite (LiveBench reasoning 84.0), but the version-dependent AA Index, CritPt 17.7% and a 50.9% Omniscience hallucination rate pull it to 86.
- **Context window: 93/100.** Native 1M input with 65K output, but MRCR@1M 26.3% shows heavy degradation and output is capped well below window.
- **Multimodal: 90/100.** Text + image + audio + video + PDF input (audio band 90–100), MMMU-Pro 83.9%, ScreenSpot Pro 84.4%; text-only output.
- **Coding: 83/100.** SWE-bench Verified 80.6%, LiveCodeBench 88.5% and SciCode 58.7% are frontier-adjacent; Vibe Code Bench 32.03%, SWE-bench Pro 54.2%, ScarfBench 37.6% and missing DeepSWE keep it out of the mid-80s.
- **Cost efficiency: 72/100.** $2/$12 sits between the ~88 ($1.25/$4.25) and ~60 ($3/$15) anchors, softened by caching/batch.
- **Overall Score: 85/100.** (74 + 86 + 93 + 90 + 83) / 5 = 85.2 → 85. Best fit: scientific/financial reasoning and long-document/full-codebase analysis where the multimodal 1M window matters more than agentic tooling depth.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-11-04
- Method: re-research pass (user-requested second pass) over public internet research (Google DeepMind model page, BenchLM re-read 2026-11-04, Artificial Analysis, Vals AI, Epoch AI, LlamaIndex snapshots). Refreshed Design Arena and captured the new EnterpriseOps-Gym / terminalBenchHard / AA-AnalystAgent / ScarfBench / MedXpertQA rows; scores held. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google — Gemini 3.1 Pro](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-pro/)
  - [BenchLM — Gemini 3.1 Pro benchmark scores](https://benchlm.ai/models/gemini-3-1-pro)
  - [Artificial Analysis — Gemini 3.1 Pro Preview](https://artificialanalysis.ai/models/gemini-3-1-pro-preview)
  - [Vals AI — Gemini 3.1 Pro Preview](https://www.vals.ai/models/google_gemini-3.1-pro-preview)
  - [Epoch AI — FrontierMath v2](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
