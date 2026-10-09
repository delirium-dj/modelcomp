# Gemini 4 Argon — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind / Gemini 4 Argon (`gemini-4-argon`; Fairwind-gated at launch)
- Date: 2026-10-09 (UTC) — deep second pass (previous Signature 2026-10-01)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass re-verification — 2026-10-09** (≥3 independent sources).
> Newly confirmed independent data: **Vals Index 68.90% (#1)**; Artificial Analysis **AutomationBench-AA 77.5% (#1)**, Intelligence Index **52.6–53 (#8/227)**, HLE 57.1%, SciCode 61.8%, CritPt 27.1%, AA-Omniscience 42.35 / hallucination 15.1%; BenchLM overall 81.76 (#5/889); LMArena Agent Arena #7. Vendor: AutomationBench 51.3% (#1), Finance Agent v2 65.4% (#1), DeepSWE v1.1 77.9% (#1), Vibe Code Bench 91.9% (#1), LVBench 91.7% (#1), GraphWalks 128K 99.7% / 256K–1M 84.2%, Terminal-Bench 4.0 57.4%.
> **Conflicts surfaced:** (1) Coding — vendor DeepSWE #1 vs independent coverage (WebDev Arena/MindStudio) placing it ~8th. (2) Some runs use non-default settings (6× verifier timeout on TB-Science; best-of-3 OSWorld). (3) Context 1M vs output 1M ambiguity (Google stresses the output limit; AA calls it context). (4) Modalities: video/PDF/chart per Google vs text+image only per AA/LLM Stats. (5) Restricted Fairwind access limits independent testing.
> Sources: https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/ · https://deepmind.google/models/gemini/ · https://artificialanalysis.ai/models/gemini-4-argon · https://www.vals.ai/benchmarks/vals_index · https://benchlm.ai/models/gemini-4-argon · https://benchmarklist.com/models/google-gemini-4-argon/

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google's next-era frontier flagship (announced 2026-09-30), succeeding Gemini 3, led by software engineering, cyber defense and long-video understanding. Ground-up independent reproduction still pending; initially limited to select cyber-defense teams in the **Fairwind** program.
- **Provider / access:** Gemini API / Vertex / AI Studio once GA; initially Fairwind-gated, then paid API + Google AI Ultra. No public model id at launch.
- **Release / knowledge:** 2026-09-30; knowledge cutoff not disclosed.
- **IDs:** no public id published (repo placeholder `opencode/gemini-4-argon`).
- **Context window:** 1M input; output limit raised to **1M tokens** per launch coverage (context-vs-output ambiguity remains).
- **Modalities:** text, image and video (PDF/chart per Google) in, text out; long-horizon reasoning; tool use.
- **Pricing (as of 2026-10-09):** intro **$2.00 in / $10.00 out / $0.10 cached** per 1M; rises to **$4.00 / $20.00** after the intro period.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- **Vals Index 68.90% (#1, independent)**; AutomationBench-AA **77.5% (#1, AA)** / vendor 51.3% (#1)
- Vals Finance Agent v2 65.4% (#1); Harvey Legal Agent 19.6%; Agents' Last Exam 39.5%
- OSWorld 2.0 69.2% partial; Terminal-Bench 4.0 57.4%; Terminal-Bench-Science 0.1 57.6%

Reasoning / knowledge:

- Artificial Analysis Intelligence Index **52.6–53 (#8/227)**; HLE 57.1%; CritPt 27.1%; AA-Omniscience 42.35 / hallucination 15.1%
- GraphWalks 128K **99.7%** / 256K–1M **84.2%**; BrowseComp 90.4%; RiemannBench 76.0%; LABBench2 88.8%
- GPQA Diamond: no verified public score found

Coding:

- DeepSWE v1.1 **77.9% (#1)** (vendor); Vibe Code Bench **91.9% (#1)**; SciCode 61.8% (AA); FrontierSWE v2 55.0%
- CWE-bench v1 68.0% (tie #1); independent coverage places coding ~8th overall

Multimodal:

- LVBench **91.7% (#1)**; Chartography 71.6%; Blueprint-Bench 2 0.790 (#1)

### Normalized scores (1–100)

- **Tool use: 92/100.** Vals Index #1, AutomationBench-AA 77.5% #1 and Finance Agent #1 confirm frontier tool/agent depth; capped by mixed independent coding rankings and Agents' Last Exam 39.5%.
- **Reasoning: 89/100.** AA Index 52.6–53, HLE 57.1%, CritPt 27.1% and GraphWalks 1M 84.2% are strong; no independent GPQA and the index is below 60.
- **Context window: 95/100.** 1M context (and a headline 1M output) is the widest documented band here; the context-vs-output caveat and unverified retrieval at full length hold it below 100.
- **Multimodal: 82/100.** Text + image + video (+PDF/chart per Google) with best-in-class video (LVBench 91.7%); AA lists only text+image and there is no audio.
- **Coding: 89/100.** DeepSWE 77.9% #1 and SciCode 61.8% are elite, but FrontierSWE v2 55.0% and an independent ~8th coding ranking keep it short of 90+.
- **Cost efficiency: 74/100.** Intro $2/$10 with a 95% cache discount is strong; post-intro $4/$20 halves the value and there is no free tier.
- **Overall Score: 89/100.** (92 + 89 + 95 + 82 + 89) / 5 = 89.4 → 89. Best fit: frontier software engineering, cyber defense and long-video/knowledge work once GA — pending fuller independent reproduction.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-09
- Method: deep second-pass public internet research (Google DeepMind launch blog + model page, Artificial Analysis model page, Vals Index, BenchLM, BenchmarkList). Vendor #1 claims are separated from independent Vals/AA confirmations; non-default harness settings and access gating are surfaced. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
