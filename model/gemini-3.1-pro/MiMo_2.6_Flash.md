# Gemini 3.1 Pro — findings by MiMo 2.6 Flash

- Source: Google DeepMind (`gemini-3.1-pro-preview`)
- Date: 2026-11-08 (UTC) — second-pass enrichment re-research (previous 2026-10-07)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass enrichment — 2026-11-08** (user-approved). Previous Signature
> 2026-10-07 (Overall 87). Fresh sources this pass: BenchLM model page
> (snapshot 2026-11-07, overall 64.46, rank #35/1016) and the Artificial
> Analysis model page/leaderboards. Changes: Tool use 76→80 (Claw-Eval
> 57.8%, τ²-bench 95.6% and TB2.1 70.8% now have public scores); Reasoning
> 90→91 (AA-LCR 82.0% fills the named gap); Overall 87→88. Held: Context
> window 90, Multimodal 93, Coding 88, Cost 70.

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google DeepMind's frontier generalist released in preview on 2026-02-19 as the next iteration of Gemini 3 Pro — long-horizon coding, agentic workflows, multimodal understanding, and complex reasoning at a 1M-token context. Not a variant/alias; separate entry from Gemini 3 Pro and 3.5 Pro.
- **Provider / access:** Gemini API / AI Studio (`gemini-3.1-pro-preview`), Vertex AI, Gemini app, Gemini CLI, GitHub Copilot (AA lists 3 API providers). Chat Completions-compatible and native generateContent routes.
- **Release / knowledge:** released 2026-02-19 (preview status; AA confirms "Released February 2026"); knowledge cutoff not disclosed on the model card.
- **IDs:** `google/gemini-3.1-pro-preview` (gateway routes) / `gemini-3.1-pro-preview` (native).
- **Context window:** 1,000,000 input tokens (AA + BenchLM both list 1M); max output 64,000 (65,536 listed by some providers).
- **Modalities:** text, image, video, **speech/audio**, PDF in; text out (AA: "text, image, speech, and video input" → text out); reasoning yes (thinking levels low/medium/high); tool calls yes; JSON/structured outputs supported.
- **Pricing (as of 2026-11-08):** $2.00 in / $12.00 out per 1M at ≤200K context (AA confirms $2/$12 with a 90% cache discount); **$4.00 / $18.00 above 200K** up to 1M (Google's tiered list); context-cache hit ~$0.50/M on Google's docs. Gemini app free with limits (AI Pro $19.99/mo). Paid API.
- **Architecture:** proprietary (parameters undisclosed).

### Raw benchmarks found

Agent / tool use:

- **Claw-Eval: 57.8%** (Claw-Eval public leaderboard, via BenchLM 2026-11-07 — **new this pass**; previously "no verified public score found").
- **τ²-bench: 95.6%** (Meta AI Muse Spark comparison chart, via BenchLM — **new this pass**; Google's run exists but no score was captured previously). Tau3-Banking: still no verified public score found.
- Terminal-Bench 2.1: **70.8%** (Vals AI leaderboard — **new this pass**) / 68.5% Terminal-Bench 2.0 (Google model card, Terminus-2). Terminal-Bench-Hard (AA): **53.8%** (new).
- **GDPval-AA: 904 Elo** (Artificial Analysis model benchmarks, independent — **new this pass**; normalized 14.6%) vs the vendor comparison-chart **1317** used previously — conflict flagged, AA kept as the independent reading.
- AA Agentic Index: **10.3%** (new); APEX-Agents-AA: **32.0%**; AA EnterpriseOps-Gym **42.2%**; AA-AnalystAgent **41.3%** (all new).
- BrowseComp: **85.9%**; APEX-Agents (vendor) 33.5%; MCP Atlas 69.2%; DeepSearchQA 69.7%; MazeBench (ASCII) 1%; Gert Labs 56.87%; ResearchClawBench 13.3%.
- OSWorld / Toolathon: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **94.3%** no tools (Google) / **94.1%** (AA leaderboard — independent) / **95.5%** (Vals).
- HLE: **44.4%** no tools, **51.4%** with search+code (Google) / **47.0%** (AA — independent).
- **AA-LCR: 82.0%** (Artificial Analysis — **new this pass**; previously "no verified public score found" and an explicit cap on this score).
- CritPt: **17.7%** (AA, new). ARC-AGI-2: **77.1%** (ARC Prize verified, unchanged); ARC-AGI-3: **0.4%** (new, standardized harness).
- FrontierMath v2: **59.649%** (Tiers 1–3) / **26.829%** (Tier 4) — Epoch AI leaderboard (**new this pass**; well behind Opus 5.5 91.2/95.0 and GPT-6 Astra 93.7/97.6).
- AA Intelligence Index: **no verified public score found** (AA's model page shows N/A — the gap persists); AA-Omniscience: no row for this model.
- AA-IFBench 77.1%; AA Global-MMLU-Lite 93.2%; MMMU-Pro 83.9% (Meta chart); HealthBench Hard 20.6%; MedXpertQA (Text) 71.5%.

Coding:

- SWE-bench Verified: **80.6%** (Google, single attempt) / **78.8%** (Vals AI leaderboard — independent corroboration, new).
- SWE-bench Pro (Public): **54.2%** (Google); LiveCodeBench Pro: **2887 Elo** (Google) / **82.9%** (Meta chart).
- **LiveCodeBench (Vals): 88.5%** (new — first plain LiveCodeBench row for this model).
- **AA-SciCode: 58.7%** (**new** — fills the previously missing SciCode row; 55%+ frontier ref cleared).
- **Vibe Code Bench: 32.03%** (Vals AI v1.1, **new** — far behind the ~86–90% frontier class).
- AA Coding Index: **68.8%**; ScarfBench **37.6%** (new, weak vs Opus 5.5 70.5%); PostTrainBench v1.1 22.0% (new); React Native Evals 78.9% (new).
- DeepSWE: no verified public score found for this exact model.

Long context:

- MRCR v2 (8-needle): **84.9%** at 128K average (cumulative) — **26.3%** pointwise at the full 1M window (Google; unchanged, no new retrieval row). AA-LCR 82.0% (above) is the independent long-context-reasoning cross-check. RULER: no verified public score found.

Multimodal:

- MMMU-Pro: **83.9%** (Meta chart) / **82.4%** (AA leaderboard — independent, up from the 75.8 figure previously cited); CharXiv **80.2%**; ParseBench **67.32%** (LlamaIndex, 2026-11-06); ScreenSpot Pro **84.4%**; MedXpertQA (MM) **81.3%**; SimpleVQA **72.4%**; ERQA **69.4%**; ZeroBench **29.0%**.
- Audio/speech and video input confirmed by AA; no non-text output.

### Normalized scores (1–100)

- **Tool use: 80/100.** The standing cap ("no TB2.1/Tau3/Claw-Eval number") is now two-thirds resolved — **Claw-Eval 57.8%**, **τ²-bench 95.6%** and **TB2.1 70.8%** all have verified public scores (Vals / Claw-Eval leaderboard / Meta chart) — hence 76→80; held there because AA's independent **GDPval-AA 904** sits at the bottom of the mid band (vs the vendor chart's 1317), AA Agentic Index reads only 10.3%, and Tau3-Banking is still unpublished.
- **Reasoning: 91/100.** AA-LCR **82.0%** now exists (the named "no AA Intelligence Index/LCR row" gap is half-filled), and AA independently confirms GPQA 94.1% and HLE 47.0% — both still clearing the 90%+/40%+ frontier refs, with ARC-AGI-2 77.1% field-leading; held below 95 because AA's Intelligence Index row is still N/A, CritPt is only 17.7%, and the new FrontierMath v2 T4 26.8% (Epoch) is far behind frontier peers.
- **Context window: 90/100.** Window is 1M (≥1M tier), but MRCR retrieval collapses to 26.3% pointwise at the full 1M and is 84.9% at 128K — well short of the ≥98%-at-512K bar for 100; the new independent AA-LCR 82.0% supports the mid-tier placement rather than lifting it — held at 90.
- **Multimodal: 93/100.** Text/image/video/audio(PDF) in with text out = audio-in band (90–100); the stronger independent MMMU-Pro 82.4% (Meta chart 83.9%) corroborates the band but does not extend coverage, and no non-text output keeps it below 95 — held at 93.
- **Coding: 88/100.** Two of the three named gaps are now filled — AA-SciCode **58.7%** (55%+ ref cleared) and LiveCodeBench (Vals) **88.5%**, plus SWE-bench 78.8% independently corroborating Google's 80.6% — but the new Vals Vibe Code Bench **32.03%** and ScarfBench **37.6%** are far behind the frontier class, DeepSWE is still absent, and AA Coding Index 68.8 sits just under the 70+ ref; held at 88.
- **Cost efficiency: 70/100.** $2/$12 under 200K is a frontier-bargain (between the $1.25/$4.25 ≈ 88 and $3/$15 ≈ 60 anchors, so ~70) and AA re-confirms $2/$12 with a 90% cache discount; the >200K tier doubling to $4/$18 — exactly where its 1M-context advantage lives — still pulls it down; unchanged.
- **Overall Score: 88/100.** (80+91+90+93+88)/5 = 442/5 = 88.4 → 88 — best-fit cheap frontier generalist for 1M-window multimodal work and science reasoning; weaker on long-window retrieval, independent GDPval, and terminal-agent polish.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-11-08
- Method: second-pass enrichment re-research (public internet research: BenchLM model page snapshot 2026-11-07, Artificial Analysis model page + gpqa/lcr/scicode/mmmu-pro leaderboards, Claw-Eval leaderboard, Vals AI, Epoch AI FrontierMath v2, Meta AI comparison chart); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Gemini 3.1 Pro (BenchLM, snapshot 2026-11-07)](https://benchlm.ai/models/gemini-3-1-pro)
  - [Gemini 3.1 Pro Preview (Artificial Analysis)](https://artificialanalysis.ai/models/gemini-3-1-pro-preview)
  - [Claw-Eval leaderboard](https://claw-eval.github.io/)
  - [Vals AI — Gemini 3.1 Pro Preview](https://www.vals.ai/models/google_gemini-3.1-pro-preview)
  - [FrontierMath v2 leaderboard (Epoch AI)](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
