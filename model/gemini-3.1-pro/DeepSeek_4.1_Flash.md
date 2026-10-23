# Gemini 3.1 Pro — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind / Gemini 3.1 Pro (`gemini-3.1-pro-preview`)
- Date: 2026-10-16 (UTC) — rewrite pass (previous Signature 2026-10-09); re-verified 2026-10-18
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-verified 2026-10-18.** BenchLM (`gemini-3-1-pro`, 31 rows) computes an overall **64.72/100 (#38 of 228)** and re-confirms the prior pass. **No score change.**

> **Rewrite pass — 2026-10-16** (≥3 independent sources).
> Independently re-sourced this pass: GPQA Diamond 94.3%, HLE 45.4% no-tools (47% AA), ARC-AGI-2 77.1%, Terminal-Bench 2.1 70.8% (Vals) / 2.0 68.5%, τ²-bench 95.6%, MCP Atlas 78.2%, OSWorld-Verified 76.2%, SWE-bench Verified 80.6%, SWE-bench Pro 54.2%, SciCode 59%, GDPval-AA ~1314–1317 Elo, MMMU-Pro 80.5%, CharXiv Reasoning 83.3%, MRCR v2 128K **84.9%** / 1M **26.3%**, LiveBench 2.0 overall 54.9 (reasoning 84.0 / coding 66.7 / agentic 23.9 / browser 4.0), BenchLM overall 65.17.
> **Conflicts surfaced:** (1) **Artificial Analysis Intelligence Index is unstable across versions** — 57 at launch (Index v4.1.1, #5), vs 48 (AA model page snapshot) vs **30 (Index v4.3.2, #95/227)**; not comparable across versions and is the single biggest drag on an otherwise frontier reasoning row. (2) **OSWorld-Verified 76.2%** (3.5 Flash launch comparison) vs **48.8%** (earlier snapshot) — different harness. (3) **MCP Atlas 78.2%** vs **69.2%** across sources. (4) Context window **1M confirmed** (AA + BenchLM) — the 2M figure in the meta snapshot actually belongs to Gemini 3 Pro. (5) Pricing $2/$12 (Google Cloud/AA) vs $1/$6 (LMArena snapshot).
> Sources: https://deepmind.google/models/gemini/pro/ · https://ai.google.dev/gemini-api/docs/long-context · https://artificialanalysis.ai/models/gemini-3-1-pro-preview · https://benchlm.ai/compare/gemini-3-1-pro-vs-glm-4-7 · https://livebench.ai/ · https://www.nxcode.org/fi/resources/news/gemini-3-5-flash-complete-guide-benchmarks-pricing-api-2026

## Model card

- **Name:** Gemini 3.1 Pro (API ID `gemini-3.1-pro-preview`)
- **Short description:** Google DeepMind's flagship reasoning model (2026-02-19), built for agentic coding, full-codebase analysis and scientific problem-solving in a 1M-token multimodal window. Superseded by the Gemini 3.5/3.7/3.8 line by late 2026.
- **Provider / access:** Gemini API (`gemini-3.1-pro-preview`) and Vertex AI; no free API tier (AI Studio web only). No OpenCode Zen ID.
- **Release / knowledge:** 2026-02-19 (preview); knowledge cutoff not published.
- **IDs:** `gemini-3.1-pro-preview`. No Free ID → paid scoring.
- **Context window:** 1,048,576 (1M) in; max output 65,536 (API default 8,192).
- **Modalities:** text, image, audio, video and PDF in; text out; tool calls; native reasoning.
- **Pricing (as of 2026-10-16):** $2.00 in / $12.00 out per 1M; caching $0.20/1M; Batch 50% off.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 **70.8%** (Vals); Terminal-Bench 2.0 **68.5%**; τ²-bench **95.6%**
- MCP Atlas **78.2%**; OSWorld-Verified **76.2%**; Toolathlon 49.4%; APEX-Agents 33.5%
- GDPval-AA **~1314–1317 Elo**; Claw-Eval 57.8%; DeepSearchQA 69.7%; BrowseComp 85.9%
- LiveBench Agentic 23.9 / Browser Use 4.0; AutomationBench-AA 35%; AA-Briefcase 453
- Tau3-Banking / Vibe Code Bench: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond **94.3%**; HLE **45.4%** no-tools (47% AA) / 51.4% with tools; ARC-AGI-2 **77.1%**; ARC-AGI-1 98%
- FrontierMath v2 (Tiers 1-3) 36.9%; HealthBench Hard 20.6%
- LiveBench 2.0 Reasoning 84.0; BenchLM overall 65.17
- Artificial Analysis Intelligence Index **57 (v4.1.1 launch) / 48 / 30 (v4.3.2, #95/227)** — version-dependent
- LMArena Text 1487 (#17)

Coding:

- SWE-bench Verified **80.6%**; SWE-bench Pro (public) 54.2%; LiveCodeBench Pro Elo 2887; SciCode 59%
- LiveBench 2.0 Coding 66.7; Blueprint-Bench 2 26.5%
- DeepSWE: **no verified public score found**

Multimodal / long context:

- MMMU-Pro **80.5%**; CharXiv Reasoning 83.3%; VideoMME 87.2%
- MRCR v2 128K **84.9%** / **1M 26.3%** — retrieval degrades sharply at full window
- ATLAScore 77.83 (8K–128K) / 68.52 (8K–1M)

### Normalized scores (1–100)

- **Tool use: 76/100.** Strong τ² (95.6%), TB2.1 70.8%, MCP Atlas 78.2% and OSWorld 76.2% lift it, but LiveBench Agentic 23.9 / Browser Use 4.0, Toolathlon 49.4% and GDPval-AA ~1314 cap the ceiling with no independent terminal/tool index.
- **Reasoning: 87/100.** GPQA 94.3%, HLE 45.4/47 and ARC-AGI-2 77.1 are frontier on the vendor suite (LiveBench reasoning 84.0), but the version-dependent AA Index (57→48→30) pulls the aggregate down.
- **Context window: 93/100.** Native 1M input (≥1M band) with 65K output, but MRCR@1M 26.3% shows heavy degradation and output is capped well below window.
- **Multimodal: 90/100.** Text + image + audio + video + PDF input (audio band 90–100), MMMU-Pro 80.5%, CharXiv 83.3%; text-only output.
- **Coding: 84/100.** SWE-bench Verified 80.6%, LiveCodeBench Pro Elo 2887 and SciCode 59% are frontier-adjacent; SWE-bench Pro 54.2%, LiveBench coding 66.7 and missing DeepSWE keep it out of the 90s.
- **Cost efficiency: 72/100.** $2/$12 sits between the ~88 ($1.25/$4.25) and ~60 ($3/$15) anchors, softened by caching/batch.
- **Overall Score: 86/100.** (76 + 87 + 93 + 90 + 84) / 5 = 86.0 → 86. Best fit: scientific/financial reasoning and long-document/full-codebase analysis where the multimodal 1M window matters more than agentic tooling depth.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-18
- Method: rewrite-pass public internet research (Google DeepMind model page, Gemini API long-context docs, Artificial Analysis model page, BenchLM comparisons, LiveBench 2.0, NxCode 3.5 Flash comparison). The vendor-vs-independent and AA-version gaps are surfaced rather than averaged; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
