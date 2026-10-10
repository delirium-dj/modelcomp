# Gemini 3.7 Flash — findings by Step 5 Preview

- Source: Google (DeepMind) `gemini-3.7-flash`
- Date: 2026-10-10 (UTC) — second-pass verification
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash (`gemini-3.7-flash`; mid-tier Flash workhorse)
- **Short description:** Google DeepMind's mid-tier Gemini 3 workhorse (below Pro/Ultra), tuned for budget-conscious agentic coding, document-heavy business workflows, and web-app scaffolding. A refinement of Gemini 3.6 Flash's reasoning via algorithmic improvements (not a new pretraining run).
- **Provider / access:** Gemini API, Google AI Studio, Gemini Enterprise Agent Platform, Gemini Spark app. Native function calling + tool use; thinking depth tunable (low/medium/high). Free tier on AI Studio (data may improve products); paid API does not train on customer data.
- **Release / knowledge:** Released 2026-08-13 (three weeks after 3.6 Flash). Knowledge cutoff not explicitly disclosed.
- **IDs:** `gemini-3.7-flash` (+ `-low/-medium/-high`). Free AI Studio tier available.
- **Context window:** 1,048,576 (1M) input; 65,536 (64K) max output.
- **Modalities:** Text, image, audio, video in; text + tool-calls out. Reasoning yes; tool calls yes; JSON yes. No image/audio output.
- **Pricing (as of 2026-10-08):** $0.75/M in · $3.75/M out (introductory rate through end of 2026, exactly half of 3.6's launch; DOUBLES on both ends from January 2027). Cached input ~$0.075/M (90% off). Free AI Studio tier $0.
- **Architecture:** Proprietary; refinement of 3.6 Flash's reasoning, parameter count undisclosed (MoE not confirmed).

### Raw benchmarks found

> Cross-referenced hokai.io (Google's own evals + Artificial Analysis) and vectorwire.ai (89 results/51 benchmarks, 20 independent, capability profile). Independent runs noted where available.

Agent / tool use:

- WebDev Arena: **1,588 Elo** (Google; ahead of Claude Sonnet 5 1,541 and GPT-5.6 Terra 1,523) — leads on web-dev agentic work
- AutomationBench (enterprise workflows): **30.4%** (Google; vs Claude Sonnet 5 10.7%, GPT-5.6 Terra 23.6%)
- OSWorld 2.0: **47.9%** (partial 50.6%) — mid computer-use
- Terminal-Bench 4.0: **11.2%** (Google) / Terminal-Bench 3.0 **14.9%** — weak on the hardest terminal bench
- Agents' Last Exam (multimodal desktop): **26.3%** (below Claude Sonnet 5's 33.3%)
- GDP.pdf (document comprehension): **34.0%** (up from 3.6's 22.0%)
- Vector Wire capability: **Agentic "Capable"** (−21.3% vs leader, 4/7)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **56** (trails GPT-5.6 Terra and Muse Spark 1.2 at 57; ahead of Claude Sonnet 5 55 and its predecessor 52)
- HLE-Verified: **53.6%** (clears the 40% frontier bar)
- Vector Wire capability: **Reasoning "Capable"** (−11.1% vs leader, 5/6); **Factuality "Strong"** (−6.4%); **Math "Limited"** (−36.3%)
- GPQA Diamond: not surfaced live for 3.7 Flash — treated as provisional

Coding:

- DeepSWE v1.1 (long-horizon coding): **65.3%** (Google; +16.7 pts over 3.6's 49.0%) — mid-tier
- FrontierCode 1.1 (production code quality): **43.6%** (up from 34.4%)
- WebDev Arena: **1,588 Elo** (leads Sonnet 5 / GPT-5.6 Terra — see tool use)
- SWE-bench Verified / SWE-bench Pro exact rows: not surfaced live for 3.7 Flash — treated as provisional
- Vector Wire capability: **Coding "Capable"** (−23.2% vs leader, 5/10)

Multimodal:

- Text + image + audio + video in; text out.
- Vector Wire: **Multimodal "Capable"** (−15.6% vs leader, 2/6)

Long context:

- 1M input / 64K output; GDM-MRCR v2 holds **97.0% accuracy at 128K depth** — suggests the 1M window is usable, not nominal
- LVBench (long video): **85.4%**
- Vector Wire: Long Context **"Frontier"** (−1.3% vs leader, 2/3) — its strongest capability

### Normalized scores (1–100)

- **Tool use: 80/100.** WebDev Arena 1,588 Elo (leads Claude Sonnet 5 and GPT-5.6 Terra) and AutomationBench 30.4% (well ahead of Sonnet 5's 10.7%) are solid. Capped by OSWorld 47.9%, Terminal-Bench 4.0 at 11.2% (weak on the hardest terminal bench), Agents' Last Exam 26.3% (below Sonnet 5), and Vector Wire's Agentic "Capable" (−21.3%) — web-dev strength does not carry to terminal/computer-use loops.
- **Reasoning: 84/100.** AA Intelligence Index 56 (ahead of Sonnet 5) and HLE-Verified 53.6% (clears the 40% frontier bar) with Factuality "Strong" (−6.4%). Capped by Vector Wire's Reasoning "Capable" (−11.1%) and Math "Limited" (−36.3%), plus no verified GPQA row.
- **Context window: 96/100.** 1M input with GDM-MRCR v2 holding 97.0% at 128K depth (the window is usable, not nominal), LVBench 85.4%, and a Vector Wire Long Context "Frontier" (−1.3%, 2/3) rating — its strongest capability. Held from 100 by the 64K output cap and the absence of an explicit ≥512K MRCR retrieval figure.
- **Multimodal: 88/100.** Full input coverage (text/image/audio/video) with Multimodal "Capable" (−15.6% vs leader) — hits the 90–100 input band, held to 88 by text-only output and the "Capable" (not "Strong"/"Frontier") rating.
- **Coding: 80/100.** DeepSWE 65.3% (+16.7 pts over 3.6) and WebDev Arena 1,588 Elo (leads rivals) are strong, but FrontierCode 43.6% is mid-tier and Vector Wire rates Coding "Capable" (−23.2%, 5/10); SWE-bench Verified/Pro exact rows were not surfaced live. Web-dev coding leads while deeper agentic coding lags.
- **Cost efficiency: 90/100.** $0.75/$3.75 paid (introductory half-price through 2026 — but DOUBLES in January 2027) plus a free AI Studio tier; cached input ~$0.075/M. Free tier carries a training-data caveat. Scored at the current intro rate.
- **Overall Score: 86/100.** Mean of the five non-cost dims (80+84+96+88+80)/5 = 85.6. Best fit as a cheap, fast, frontier-long-context workhorse for budget-conscious coding agents, document automation, and web-app scaffolding; look elsewhere for terminal-heavy/computer-use agent loops or math-heavy work.

---

## Signature

- Provided by: **Step 5 Preview (opencode/step-5-preview)** — 2026-10-10
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores. Second-pass verification (2026-10-10) cross-referenced benchmarkregistry.org (36 primary-source results, updated 2026-10-07), which confirmed APEX-Agents 67.8%, AutomationBench 30.4%, BrowseComp 79.2%, Chartography 40.4%, CharXiv 95.3%, TB4.0 11.2%/12.1%, Vibe Code 70.4%, Vals Index 51.3% — no score change warranted. Prior pass (2026-10-08) used Google's own evals + Artificial Analysis (via hokai.io) and vectorwire.ai.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
