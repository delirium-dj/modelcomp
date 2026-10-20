# Gemini 3.6 Flash — findings by Step 5 Preview

- Source: Google (DeepMind) `gemini-3.6-flash`
- Date: 2026-10-19 (UTC) — third-pass verification
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash (`gemini-3.6-flash`; mid-tier Flash workhorse)
- **Short description:** Google DeepMind's mid-tier Flash workhorse (replaces Gemini 3.5 Flash), built for agentic coding, desktop automation, and long-horizon engineering at Flash pricing. Computer use is built into the Gemini API. Knowledge cutoff advances a full 14 months to March 2026. Artificial Analysis now flags it deprecated (superseded by Gemini 3.7 Flash).
- **Provider / access:** Gemini API, Google AI Studio (free tier with rate limits), Vertex AI, Gemini Enterprise Agent Platform. Function calling + search-as-tool + code execution + built-in computer use. Paid API does not train on customer data; free AI Studio quota may.
- **Release / knowledge:** Released 2026-07-21 (alongside Gemini 3.5 Flash-Lite and Gemini 3.5 Flash Cyber). Knowledge cutoff March 2026.
- **IDs:** `gemini-3.6-flash` (+ `-minimal/-low/-medium/-high`). Free AI Studio tier available.
- **Context window:** 1,000,000 (1M) input; 64,000 max output.
- **Modalities:** Text, image, video, audio, PDF in; text out. No image/audio/video output. Reasoning yes (configurable effort + tool budgets); tool calls yes (parallel); computer use built-in; JSON yes.
- **Pricing (as of 2026-10-08):** $0.75/M in · $3.75/M out (through 2026-12-31; DOUBLES to $1.50/$7.50 on 2027-01-01) · $0.075/M cached in. Batch 50% off. Free AI Studio tier $0.
- **Architecture:** Proprietary; dense vs MoE and parameter count undisclosed (framed around token efficiency).

### Raw benchmarks found

> Cross-referenced hokai.io (Google + Artificial Analysis) and vectorwire.ai (66 results/55 benchmarks, 26 independent, capability profile). Independent runs noted where available.

- BenchLM composite (2026-10-19): **62.8/100** overall, #45 of 956 models, 28 of 644 benchmarks covered (partial coverage — conservative)
- Artificial Analysis today (2026-10-19): Intelligence Index **34** (#79/217, v4.3.2 scale — matches the prior pass), 209.4 tok/s (#13/186), TTFT 14.02s, 90M Index tokens, $1.60 per Index task, $0.75/$3.75 with 80% cache discount (blended $0.63/M), 1M context, 4 providers, released 2026-07-21 — DEPRECATED on AA (suggests Gemini 3.7 Flash)

Agent / tool use:

- OSWorld-Verified (computer use): **83.0%** (Google; up from 3.5 Flash's 78.4%) — computer use built into the API
- GDPval-AA v2 (Elo): **1,421** (Google; up from 3.5 Flash's 1,349) — below the ~1750 frontier threshold
- MLE-Bench: **63.9%** (Google; up from 49.7%)
- Terminal-Bench 3.0: **5.4%** (Google) — very weak on the harder terminal bench
- OSWorld 2.0 (partial): **33.8%** (Google)
- Vector Wire capability: **Agentic "Capable"** (−21.8% vs leader, 4/7)
- Independent agentic corroboration (2026-10-19): Terminal-Bench 2.1 (Vals) **73.8%** (matches the prior independent 74.5%/73.8% reads), AA Agentic Index **30.1%**, GDPval-AA normalized **39.2%** (AA); still weak: MazeBench **0%**

Reasoning / knowledge:

- HLE-Verified: **51.2%** (Google) — clears the 40% frontier bar
- Artificial Analysis Intelligence Index: **34** (current methodology) — well below frontier 57–62
- CharXiv No Tools: **85.2%** / With Tools: **89.4%** (Google)
- matharena visual math overall: **87.85%** (independent)
- Vector Wire capability: **Reasoning "Capable"** (−17.7% vs leader, 5/6); **Factuality "Strong"** (−6.9%); **Math "Limited"** (−50.9%)
- GPQA Diamond now surfaced (2026-10-19): AA-GPQA Diamond **92.8%** (Vals **93.4%**) — near-ceiling, filling the prior gap; AA-HLE **40.8%** — note the gap vs Google's HLE-Verified 51.2% (the independent read sits at the frontier bar)
- ARC-AGI-2: **60.4%** (ARC Prize semi-private, 2026-10-19) — the independent ARC read; ARC-AGI-1 **91.17%** (ARC Prize); CritPt **10.6%** (AA); FrontierMath v2 (Epoch AI) Tiers 1–3 **58.947%** / Tier 4 **21.951%**; AA-Omniscience accuracy **50.0%** / index **22.1%** / hallucination-rate metric **55.6%**; MMLU-Pro (Vals) **89.3%**

Coding:

- SWE-bench Pro (agentic coding): **58.7%** (Google; up from 3.5 Flash's 55.1%) — mid-tier
- DeepSWE v1.1 (long-horizon SWE): **49.0%** (Google; up from 37%) — well below the 74% frontier ref
- Terminal-Bench 3.0: **5.4%** (see tool use — very weak)
- SWE-bench Verified now surfaced (2026-10-19): **79.6%** (Vals AI); LiveCodeBench (Vals) **88.1%**; CursorBench 3.2 **53.5%**; AA-SciCode **53.4%**; AA Coding Index **69.2%** — mid-tier competitive coding consistent with the DeepSWE 49.0% agentic gap
- Vector Wire capability: **Coding "Limited"** (−31.8% vs leader, 6/10) — a clear weakness

Multimodal:

- Text + image + video + audio + PDF in; text out.
- CharXiv 89.4% (with tools); matharena visual math 87.85%
- Vector Wire: **Multimodal "Capable"** (−15.3% vs leader, 2/6)
- AA-MMMU-Pro: **83.2%** (Artificial Analysis, 2026-10-19) — the first published MMMU for this model, mid-Pro-tier; Design Arena Website **1300** (OpenRouter)

Long context:

- **Tool use: 78/100.** OSWorld 83.0% (computer use built into the API) and GDPval-AA 1,421 are capable, but Terminal-Bench 3.0 at 5.4% is very weak, OSWorld 2.0 partial is 33.8%, and Vector Wire rates Agentic "Capable" (−21.8%). Strong desktop automation does not carry to terminal-driven agentic coding.
- **Reasoning: 80/100.** HLE-Verified 51.2% (clears the 40% frontier bar) with Factuality "Strong" (−6.9%) and independent matharena visual-math 87.85%. Capped hard by the AA Intelligence Index of 34 (well below frontier 57–62), Reasoning "Capable" (−17.7%), and Math "Limited" (−50.9%) — a mid-tier Flash reasoner.
- **Context window: 88/100.** 1M input / 64K output with Long Context "Strong" (−5.0%) at the usable range (GDM-MRCR 91.8% at 128K), but recall drops to 54.0% at the full 1M pointwise and the output cap is 64K — a nominal 1M window with degraded top-end retrieval.
- **Multimodal: 88/100.** Full input coverage (text/image/video/audio/PDF) with CharXiv 89.4% (with tools) and matharena visual-math 87.85% → the 90–100 input band; held to 88 by text-only output and Multimodal "Capable" (−15.3%).
- **Coding: 72/100.** SWE-bench Pro 58.7% and DeepSWE 49.0% are mid-to-weak (DeepSWE well below the 74% frontier ref), Terminal-Bench 3.0 is 5.4%, and Vector Wire rates Coding "Limited" (−31.8%, 6/10) — coding is a clear weakness despite the computer-use strength.
- **Cost efficiency: 88/100.** $0.75/$3.75 paid (intro rate through 2026; DOUBLES to $1.50/$7.50 on 2027-01-01) plus a free AI Studio tier (training-data caveat); cached input $0.075/M. Scored at the current intro rate (rubric ~$0.60/$2.20 ≈ 92, held slightly for the higher output rate).
- **Overall Score: 81/100.** Mean of the five non-cost dims (78+80+88+88+72)/5 = 81.2. Best fit as a cheap, fast Flash workhorse for agentic coding, desktop automation, and high-volume multimodal workloads at Flash pricing; use a full Pro-tier model or GPT-5 for raw reasoning depth, and chunk documents rather than rely on full-window retrieval.

---

## Signature

- Provided by: **Step 5 Preview (opencode/step-5-preview)** — 2026-10-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores. Third-pass verification (2026-10-19) re-ran Artificial Analysis and BenchLM: AA now flags the model deprecated (superseded by Gemini 3.7 Flash), Index 34 unchanged (#79/217), 209.4 tok/s, TTFT 14.02s; BenchLM composite 62.8/100 (#45/956, 28/644 benchmarks) filling the prior gaps — AA-GPQA 92.8%/Vals 93.4%, AA-HLE 40.8% (vs Google's HLE-Verified 51.2% — the independent read sits at the frontier bar), ARC-AGI-2 60.4% (ARC Prize), SWE-bench (Vals) 79.6%, LCB (Vals) 88.1%, AA-MMMU-Pro 83.2% (first MMMU), AA-LCR 80.0%, AA Agentic Index 30.1%, TB2.1 (Vals) 73.8% — all consistent with the existing scores, no change warranted. Second-pass verification (2026-10-10) cross-referenced benchmarkregistry.org (37 primary-source results, updated 2026-10-07 — independent APEX-Agents 46.9%, TB2.1 74.5%/73.8%, Vibe Code 64.0%, AutomationBench 15.7–17.1%, BrowseComp 54.6%, CharXiv 95.1%) — no score change warranted. Prior pass (2026-10-08) used Google + Artificial Analysis (via hokai.io) and vectorwire.ai.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

- 1M input / 64K output. GDM-MRCR 128k average: **91.8%**; 1M pointwise: **54.0%** (Google) — recall drops sharply at the top of the window
- LVBench (long video): **84.2%**
- Vector Wire: Long Context **"Strong"** (−5.0% vs leader, 2/3) — efficient at its usable range
- AA-LCR: **80.0%** (Artificial Analysis long-context reasoning, 2026-10-19) — consistent with the mid-window strength / top-end collapse pattern

### Normalized scores (1–100)
