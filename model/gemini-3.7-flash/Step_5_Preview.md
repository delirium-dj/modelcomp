# Gemini 3.7 Flash — findings by Step 5 Preview

- Source: Google (DeepMind) `gemini-3.7-flash`
- Date: 2026-10-19 (UTC) — third-pass verification
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash (`gemini-3.7-flash`; mid-tier Flash workhorse)
- **Short description:** Google DeepMind's mid-tier Gemini 3 workhorse (below Pro/Ultra), tuned for budget-conscious agentic coding, document-heavy business workflows, and web-app scaffolding. A refinement of Gemini 3.6 Flash's reasoning via algorithmic improvements (not a new pretraining run). Artificial Analysis now flags it deprecated (superseded by Gemini 3.8 Flash).
- **Provider / access:** Gemini API, Google AI Studio, Gemini Enterprise Agent Platform, Gemini Spark app. Native function calling + tool use; thinking depth tunable (low/medium/high). Free tier on AI Studio (data may improve products); paid API does not train on customer data.
- **Release / knowledge:** Released 2026-08-13 (three weeks after 3.6 Flash). Knowledge cutoff not explicitly disclosed.
- **IDs:** `gemini-3.7-flash` (+ `-low/-medium/-high`). Free AI Studio tier available.
- **Context window:** 1,048,576 (1M) input; 65,536 (64K) max output.
- **Modalities:** Text, image, audio, video in; text + tool-calls out. Reasoning yes; tool calls yes; JSON yes. No image/audio output.
- **Pricing (as of 2026-10-08):** $0.75/M in · $3.75/M out (introductory rate through end of 2026, exactly half of 3.6's launch; DOUBLES on both ends from January 2027). Cached input ~$0.075/M (90% off). Free AI Studio tier $0.
- **Architecture:** Proprietary; refinement of 3.6 Flash's reasoning, parameter count undisclosed (MoE not confirmed).

### Raw benchmarks found

> Cross-referenced hokai.io (Google's own evals + Artificial Analysis) and vectorwire.ai (89 results/51 benchmarks, 20 independent, capability profile). Independent runs noted where available.

- BenchLM composite (2026-10-19): **66.94/100** overall, #29 of 956 models, 45 of 644 benchmarks covered (partial coverage — conservative)
- Artificial Analysis today (2026-10-19): Intelligence Index **39** (#62/217, v4.3.2 scale — the prior 56 was legacy-scale), 100M Index tokens (somewhat verbose vs 85M median), $0.93 per Index task, $0.75/$3.75 with 90% cache discount (blended $0.58/M), 1M context, 4 providers, released 2026-08-13 — DEPRECATED on AA (suggests Gemini 3.8 Flash; output speed no longer tracked)

Agent / tool use:

- WebDev Arena: **1,588 Elo** (Google; ahead of Claude Sonnet 5 1,541 and GPT-5.6 Terra 1,523) — leads on web-dev agentic work
- AutomationBench (enterprise workflows): **30.4%** (Google; vs Claude Sonnet 5 10.7%, GPT-5.6 Terra 23.6%)
- OSWorld 2.0: **47.9%** (partial 50.6%) — mid computer-use
- Terminal-Bench 4.0: **11.2%** (Google) / Terminal-Bench 3.0 **14.9%** — weak on the hardest terminal bench
- Agents' Last Exam (multimodal desktop): **26.3%** (below Claude Sonnet 5's 33.3%)
- GDP.pdf (document comprehension): **34.0%** (up from 3.6's 22.0%)
- Vector Wire capability: **Agentic "Capable"** (−21.3% vs leader, 4/7)
- New agentic rows (2026-10-19): GDPval-AA **Elo 1,525** (Google card) / **44.6% normalized** (AA), Terminal-Bench 2.1 **85.8%** (Google card) / **77.5%** (Vals), AA Harvey LAB v1.0 **90.7%**, AA Agentic Index **36.4%**, AA-AnalystAgent **60.0%**; still weak: ApprenticeBench **16%**, MazeBench **1%**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **56** (trails GPT-5.6 Terra and Muse Spark 1.2 at 57; ahead of Claude Sonnet 5 55 and its predecessor 52)
- HLE-Verified: **53.6%** (clears the 40% frontier bar)
- Vector Wire capability: **Reasoning "Capable"** (−11.1% vs leader, 5/6); **Factuality "Strong"** (−6.4%); **Math "Limited"** (−36.3%)
- GPQA Diamond now surfaced (2026-10-19): AA-GPQA Diamond **94.5%** (Vals **93.9%**) — near-ceiling, filling the prior gap; AA-HLE **47.9%** corroborates the HLE-Verified 53.6% above the 40% bar
- ARC-AGI-2: **84.6%** (ARC Prize semi-private, 2026-10-19) / ARC-AGI-1 **95.50%** — strong independent abstract-reasoning results
- FrontierMath v2 (Epoch AI, 2026-10-19): Tiers 1–3 **71.579%** / Tier 4 **36.585%** — a strong math read that conflicts with Vector Wire's Math "Limited" (−36.3%)
- Also (2026-10-19): CritPt **14.3%** (AA), AA-Omniscience accuracy **55.3%** / index **26.5%** / hallucination-rate metric **64.5%**, MMLU-Pro (Vals) **90.1%**, LABBench2 **82.1%**, BioMysteryBench **87.1%** human-solvable / **43.5%** human-difficult

Coding:

- DeepSWE v1.1 (long-horizon coding): **65.3%** (Google; +16.7 pts over 3.6's 49.0%) — mid-tier
- FrontierCode 1.1 (production code quality): **43.6%** (up from 34.4%)
- WebDev Arena: **1,588 Elo** (leads Sonnet 5 / GPT-5.6 Terra — see tool use)
- SWE-bench now surfaced (2026-10-19): SWE-bench (Vals) **80.8%**; LiveCodeBench (Vals) **88.7%** — both fill the prior gaps; AA-SciCode **57.2%**; AA Coding Index **76.1%**; still weak: FrontierSWE v2 **20.3%**
- Vector Wire capability: **Coding "Capable"** (−23.2% vs leader, 5/10)

Multimodal:

- Text + image + audio + video in; text out.
- Vector Wire: **Multimodal "Capable"** (−15.6% vs leader, 2/6)
- AA-MMMU-Pro: **85.5%** (Artificial Analysis, 2026-10-19) — the first published MMMU for this model, strong for a Flash tier; CharXiv **88.7%** with tools / **84.5%** without (Google card); Design Arena Website **1304** (OpenRouter)

Long context:

- 1M input / 64K output; GDM-MRCR v2 holds **97.0% accuracy at 128K depth** — suggests the 1M window is usable, not nominal
- LVBench (long video): **85.4%**
- Vector Wire: Long Context **"Frontier"** (−1.3% vs leader, 2/3) — its strongest capability
- AA-LCR: **81.7%** (Artificial Analysis long-context reasoning, 2026-10-19) — corroborates the usable-window read

### Normalized scores (1–100)

- **Tool use: 80/100.** WebDev Arena 1,588 Elo (leads Claude Sonnet 5 and GPT-5.6 Terra) and AutomationBench 30.4% (well ahead of Sonnet 5's 10.7%) are solid. Capped by OSWorld 47.9%, Terminal-Bench 4.0 at 11.2% (weak on the hardest terminal bench), Agents' Last Exam 26.3% (below Sonnet 5), and Vector Wire's Agentic "Capable" (−21.3%) — web-dev strength does not carry to terminal/computer-use loops.
- **Reasoning: 86/100.** AA Intelligence Index 39 (current scale; ahead of Sonnet 5) and HLE-Verified 53.6% (clears the 40% frontier bar) with Factuality "Strong" (−6.4%). The third pass filled the GPQA gap — AA-GPQA 94.5% / Vals 93.9% — and added ARC-AGI-2 84.6% (ARC Prize) plus Epoch FrontierMath v2 T1–3 71.6%/T4 36.6%, which outweigh the former "no GPQA row" cap and Vector Wire's Math "Limited" rating. Raised from 84 on that evidence; still below the very top on the Index-39 read and Vector Wire's Reasoning "Capable" (−11.1%).
- **Context window: 96/100.** 1M input with GDM-MRCR v2 holding 97.0% at 128K depth (the window is usable, not nominal), LVBench 85.4%, and a Vector Wire Long Context "Frontier" (−1.3%, 2/3) rating — its strongest capability. Held from 100 by the 64K output cap and the absence of an explicit ≥512K MRCR retrieval figure.
- **Multimodal: 88/100.** Full input coverage (text/image/audio/video) with Multimodal "Capable" (−15.6% vs leader) — hits the 90–100 input band, held to 88 by text-only output and the "Capable" (not "Strong"/"Frontier") rating.
- **Coding: 80/100.** DeepSWE 65.3% (+16.7 pts over 3.6) and WebDev Arena 1,588 Elo (leads rivals) are strong, but FrontierCode 43.6% is mid-tier and Vector Wire rates Coding "Capable" (−23.2%, 5/10); SWE-bench Verified/Pro exact rows were not surfaced live. Web-dev coding leads while deeper agentic coding lags.
- **Cost efficiency: 90/100.** $0.75/$3.75 paid (introductory half-price through 2026 — but DOUBLES in January 2027) plus a free AI Studio tier; cached input ~$0.075/M. Free tier carries a training-data caveat. Scored at the current intro rate.
- **Overall Score: 86/100.** Mean of the five non-cost dims (80+86+96+88+80)/5 = 86.0. Best fit as a cheap, fast, frontier-long-context workhorse for budget-conscious coding agents, document automation, and web-app scaffolding; look elsewhere for terminal-heavy/computer-use agent loops or math-heavy work. (Reasoning raised 84→86 on the third-pass GPQA/ARC/FrontierMath fills; Overall unchanged.)

---

## Signature

- Provided by: **Step 5 Preview (opencode/step-5-preview)** — 2026-10-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores. Third-pass verification (2026-10-19) re-ran Artificial Analysis and BenchLM: AA now flags the model deprecated (superseded by Gemini 3.8 Flash), Index 39 (#62/217, v4.3.2 scale — the prior 56 was legacy-scale), output speed no longer tracked; BenchLM composite 66.94/100 (#29/956, 45/644 benchmarks) filling the prior gaps — AA-GPQA 94.5%/Vals 93.9%, ARC-AGI-2 84.6% (ARC Prize), SWE-bench (Vals) 80.8%, LCB (Vals) 88.7%, AA-MMMU-Pro 85.5%, AA-LCR 81.7%, AA Agentic Index 36.4%, AA-HLE 47.9%, Epoch FrontierMath v2 T1–3 71.6%/T4 36.6% — Reasoning raised 84→86 on the GPQA/ARC/FrontierMath fills (Overall unchanged at 86). Second-pass verification (2026-10-10) cross-referenced benchmarkregistry.org (36 primary-source results, updated 2026-10-07), which confirmed APEX-Agents 67.8%, AutomationBench 30.4%, BrowseComp 79.2%, Chartography 40.4%, CharXiv 95.3%, TB4.0 11.2%/12.1%, Vibe Code 70.4%, Vals Index 51.3% — no score change warranted. Prior pass (2026-10-08) used Google's own evals + Artificial Analysis (via hokai.io) and vectorwire.ai.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
