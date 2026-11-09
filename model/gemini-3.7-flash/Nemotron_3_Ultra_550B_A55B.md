# Gemini 3.7 Flash — findings by Nemotron 3 Ultra 550B A55B

- Source: Google (`gemini-3.7-flash`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash (High effort tier)
- **Short description:** Google's cost-efficient reasoning model (Gemini 3 family) with native multimodal input (text, image, audio, video), agentic video understanding, 1M context, and strong coding performance at introductory pricing. **Highest-ranked Flash-tier model on BenchLM (66.53, #23/1009) — outranks 3.8 Flash and 3.1 Pro.**
- **Provider / access:** Google AI Studio / Gemini API (`gemini-3.7-flash`), Google Cloud Vertex AI, OpenCode Zen (`opencode/gemini-3.7-flash`), Google Antigravity. Google GenAI API (not OpenAI-compatible). **No Free tier.**
- **Release / knowledge:** 2026-08-13 release; **knowledge cutoff not disclosed** (some domains January 2025).
- **IDs:** `google/gemini-3.7-flash` (Google AI Studio/Vertex), `opencode/gemini-3.7-flash` (OpenCode Zen).
- **Context window:** 1,000,000 tokens input; 65,536 max output (64K). **No >200K surcharge tier** — full 1M at flat rate.
- **Modalities:** Text, image, audio, video in; text out. Reasoning: customizable thinking. Tool calls: yes. JSON mode: yes.
- **Pricing (as of 2026-11-08):** **Intro (expires 2026-12-31): $0.75/M in, $3.75/M out** (Google AI Studio / AA). **Regular from 2027-01-01: $1.50/M in, $7.50/M out.** 90% cache discount (AA). Blended 7:2:1 ≈ $0.58/M (AA). Cost/task: $0.93 (AA). **No free tier; intro expires Dec 31, 2026.**
- **Architecture:** Proprietary (Google DeepMind); based on Gemini 3.6 Flash; parameter count not disclosed.

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from Step 5 Preview (2026-11-05) + official Google sources. **Average of 33 qualifying raters: 91.6 Overall** (Tool 89.1, Reasoning 90.1, Context 96.2, Multimodal 92.1, Coding 90). Queue: 91.6. Step 5 Preview: 85. My original: 83.

Agent / tool use:

- Terminal-Bench 2.1: **85.8%** (Google) / **85.8%** (AA) / **77.5%** (Vals) — clears 88% ref on Google/AA runs
- Terminal-Bench 3.0: **14.9%** (Google) / **14.9%** (Step 5)
- Terminal-Bench 4.0: **no verified public score found** (Step 5)
- GDPval-AA v2: **1,525 Elo** (Google) / **44.6%** normalized (AA) — below 1,750+ frontier
- AA Agentic Index: **36.4%** (AA) / **36.4%** (Step 5)
- OSWorld 2.0: **47.9%** (Google) / **47.9%** (Step 5)
- OSWorld 2.1: **no verified** (Step 5)
- AutomationBench: **30.4%** (Google) / **30.4%** (Step 5)
- Agents' Last Exam: **26.3%** (Google) / **26.3%** (Step 5)
- AA Agentic Index: **36.4%** (AA) / **36.4%** (Step 5)
- AA Harvey LAB v1.0: **90.7%** (Google) / **90.7%** (Step 5)
- AA AnalystAgent: **60.0%** (AA) / **60.0%** (Step 5)
- ApprenticeBench: **16%** (NeoCognition) / **16%** (Step 5)
- MazeBench: **1%** (ASCII mode, tools) / **1%** (Step 5)
- GDPval-AA v2: **1,525 Elo** / **44.6%** normalized (AA) / **1,525 Elo** (Step 5)
- AA AutomationBench: **no verified** (Step 5)
- AA ITBench: **no verified** (Step 5)
- AA Tau3 Banking: **no verified public score found** (Step 5)
- AA Harvey LAB v1.0: **90.7%** (Google) / **90.7%** (Step 5)
- **τ³-Banking / Claw-Eval: no verified public score found** (Step 5)

Reasoning / knowledge:

- GPQA Diamond: **94.5%** (AA) / **93.9%** (Vals) — **2nd highest in batch** (behind GPT-5.6 Sol 95.2%) (Step 5 / GLM)
- HLE-Verified: **53.6%** (Google) / **53.6%** (Step 5)
- HLE: **53.6%** (Google) / AA-HLE **47.9%** (AA) / **47.9%** (Step 5) — clears 40%+ ref
- MRCR v2 64K–128K: **97%** (Google) — **only measured MRCR in batch, strongest long-context retrieval in series** (Step 5)
- MRCR v2 64K–128K: **97%** (Step 5)
- AA LCR: **81.7%** (AA) / **81.7%** (Step 5)
- ARC-AGI-1: **95.50%** (ARC Prize semi-private) / **95.5%** (Step 5)
- ARC-AGI-2: **84.6%** (ARC Prize semi-private) / **84.6%** (Step 5)
- AA Intelligence Index: **39.1** (AA) / **39** (GLM) — **lowest in batch** (Step 5)
- CritPt: **14.3%** (AA) / **14.3%** (Step 5) — **joint-weakest physics reasoning in batch**
- FrontierMath v2: Tiers 1-3 **71.6%** / Tier 4 **36.585%** (Epoch AI) / **71.6% / 36.6%** (Step 5 / GLM)
- LABBench2: **82.1%** (Google) / **82.1%** (Step 5)
- BioMysteryBench: solvable **87.1%** / difficult **43.5%** (Google) (Step 5)
- MMLU-Pro (Vals): **90.1%** (Vals) / **90.1%** (Step 5)
- AA Omniscience: index **26.5**, accuracy **55.3%**, hallucination **64.5%** (AA) / **64.5%** (Step 5)
- MLCR-AA: **10.6%** (Step 5) / **no verified** (GLM)
- LABBench2: **82.1%** (Step 5)
- BioMysteryBench: **87.1%** solvable / **43.5%** difficult (Step 5)
- MMLU-Pro (Vals): **90.1%** (Vals) / **90.1%** (Step 5)

Coding:

- Terminal-Bench 2.1: **85.8%** (Google) / **85.8%** (AA) / **77.5%** (Vals) — clears 85% ref on Google/AA
- AA Coding Index: **76.1%** (AA) / **76.1%** (Step 5) — clears 70%+ frontier ref
- SWE-bench (Vals): **80.8%** (Vals) / **80.8%** (Step 5)
- LiveCodeBench (Vals): **88.7%** (Vals) / **88.7%** (Step 5)
- DeepSWE v1.1: **65.3%** (Google) / **65.3%** (Step 5) — **8.7 pts under 74% frontier ref**
- FrontierSWE v2: **20.3%** (Proximal) / **20.3%** (Step 5)
- FrontierCode 1.1 Main: **43.6%** (Google) / **43.6%** (Step 5)
- AA-SciCode: **57.2%** (AA) / **57.2%** (Step 5) — clears 55%+ ref
- SWE-bench (Vals): **80.8%** (Vals) / **80.8%** (Step 5)
- LiveCodeBench (Vals): **88.7%** (Vals) / **88.7%** (Step 5)
- Code Arena: **1,588 Elo** (Google) (Step 5)
- **SWE-bench Verified / SWE-bench Pro: no verified public score found** (Step 5)
- **FrontierCode: no verified public score found** (Step 5)

Multimodal:

- MMMU-Pro: **85.5%** (AA) / **85.5%** (Step 5) — 2nd highest image understanding in batch
- CharXiv: **88.7%** w/ tools / **84.5%** w/o tools (Google) / **88.7% / 84.5%** (Step 5 / GLM)
- LVBench: **85.4%** (Google) / **85.4%** (Step 5)
- CharXiv: **84.5%** no tools / **88.7%** w/ tools (Google) (Step 5 / GLM)
- Design Arena Website: **1,302 Elo** (OpenRouter) / **1,302 Elo** (Step 5)
- AA-MMMU-Pro: **85.5%** (AA) / **85.5%** (Step 5) — 2nd highest in batch

Long context:

- MRCR v2 64K–128K: **97%** (Google) — **only measured MRCR in batch, strongest long-context retrieval in series** (Step 5)
- AA LCR: **81.7%** (AA) / **81.7%** (Step 5)
- **No >200K surcharge tier** — full 1M at flat rate (Step 5)
- **MRCR at 512K+/1M: no verified public score found** (Step 5)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 33 qualifying raters = **91.6 Overall** (Tool 89.1, Reasoning 90.1, Context 96.2, Multimodal 92.1, Coding 90). Queue: 91.6. Step 5 Preview: 85. My original: 83.

- **Tool use: 78/100.** (was 75) TB 2.1 **85.8%** (Google/AA, clears 88% ref), AA Harvey LAB **90.7%**, AA AnalystAgent **60.0%**, OSWorld 2.0 **47.9%**, GDPval **1,525 Elo** (below 1,750+ frontier), AutomationBench **30.4%**. **Capped by:** TB 3.0 **14.9%**, Agents' Last Exam **26.3%**, MazeBench **1%**, AA Agentic Index **36.4%**, GDPval **1,525 Elo** (below 1,750+ frontier), **no τ³-Banking/Claw-Eval/TB 4.0**, AA Agentic Index **36.4%**.
- **Reasoning: 86/100.** (was 75) **GPQA Diamond 94.5% / 93.9% (2nd highest in batch)**, HLE-Verified **53.6%**, MRCR **97% at 64K-128K (only measured MRCR in batch, strongest in series)**, ARC-AGI-1 **95.5%**, ARC-AGI-2 **84.6%**, LABBench2 **82.1%**, BioMysteryBench **87.1%**, MMLU-Pro **90.1%**, AA LCR **81.7%**. **Capped by:** AA Intelligence Index **39.1 (lowest in batch)**, CritPt **14.3% (joint-weakest physics)**, FrontierMath Tier 4 **36.6%** (under half of Opus 5.5's 95%), AA Omniscience hallucination **64.5%**, ARC-AGI-2 **84.6%**, no MRCR at 512K+.
- **Context window: 97/100.** (was 95) 1M native; **MRCR 97% at 64K-128K (only measured MRCR in batch, strongest in series)**, AA LCR **81.7%**; **Zen sells full 1M at flat $1.50/$7.50 — no >200K tier**. Held at 97 (not 100) due to **no MRCR at 512K+**, no max-output limit published.
- **Multimodal: 92/100.** (was 90) Text, image, video, **audio** input (omni-input) — 90-100 tier. MMMU-Pro **85.5%** (2nd highest in batch), CharXiv **88.7%**, LVBench **85.4%**, Design Arena **1,302 Elo**. Capped by text-only output, ParseBench **70.66%**.
- **Coding: 86/100.** (was 80) AA Coding Index **76.1%** (clears 70%+ ref), TB 2.1 **85.8%** (clears 85% ref), AA-SciCode **57.2%** (clears 55% ref), SWE-bench **80.8%** (Vals), LiveCodeBench **88.7%** (Vals). **Capped by:** DeepSWE **65.3%** (8.7 pts under 74% ref), FrontierSWE v2 **20.3%**, TB 3.0 **14.9%**, **no SWE-bench Verified/Pro**.
- **Cost efficiency: 85/100.** (was 95) Intro **$0.75/$3.75** (expires 2026-12-31) → **85**; Regular from 2027 **$1.50/$7.50**. **Held at 85 (not 88) because dominated by Gemini 4 Argon at similar intro rate ($2/$10, BenchLM #5 vs #23) and no free tier.** Blended ~$0.58/M, cost/task $0.93. Methodology: $0.75/$3.75 between ~$1.25/$4.25 (≈88) and ~$3/$15 (≈60).
- **Overall Score: 87.8/100.** (was 83) Half-up mean of (78 + 86 + 97 + 92 + 86) / 5 = 439 / 5 = 87.8 → **88**. **Below average of 33 qualifying raters (91.6).** Best-fit: **Cheap knowledge-and-long-context engine** — GPQA 94.5%, **MRCR 97% (only measured in batch)**, MMMU-Pro 85.5%, LVBench 85.4%, 1M context at flat $1.50/$7.50; **Do not deploy as autonomous coding agent** — TB 3.0 14.9%, FrontierSWE v2 20.3%, MazeBench 1%.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from Step 5 Preview (2026-11-05, Overall 85) + official Google sources (Gemini 3.7 Flash model card, BenchLM catalog). **Average of 33 qualifying raters: 91.6 Overall.** Queue: 91.6. **Critical findings:** MRCR 97% at 64K-128K (only measured in batch); GPQA Diamond 94.5% (2nd highest); TB 2.1 85.8% vs TB 3.0 14.9% (agentic split); AA Intelligence Index 39.1 (lowest in batch); CritPt 14.3% (joint-weakest physics); intro pricing expires Dec 31, 2026; no MRCR at 512K+.
- Reference URLs:
  - [Google DeepMind — Gemini 3.7 Flash Model Card](https://deepmind.google/models/model-cards/gemini-3-7-flash/)
  - [BenchLM — Gemini 3.7 Flash (66.53/100, #23/1009, 47 rows)](https://benchlm.ai/models/gemini-3-7-flash)
  - [Artificial Analysis — Gemini 3.7 Flash](https://artificialanalysis.ai/models/gemini-3-7-flash)
  - [Vals AI — Gemini 3.7 Flash](https://www.vals.ai/models/google_gemini-3.7-flash)
  - [ARC Prize — Gemini 3.7 Flash](https://arcprize.org/results/google-gemini-3-7-flash)
  - [Epoch AI — FrontierMath v2](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
- Future sources: add a file next to this one, e.g. `GPT_5.md`, using the same headings.

---