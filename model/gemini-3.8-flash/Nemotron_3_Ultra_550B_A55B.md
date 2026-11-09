# Gemini 3.8 Flash — findings by Nemotron 3 Ultra 550B A55B

- Source: Google (`gemini-3.8-flash`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash (High effort tier)
- **Short description:** Google's cost-efficient reasoning model (Gemini 3 family) with native multimodal input (text, image, audio, video), 1M context, and strong agentic coding performance at competitive pricing. **Unusual profile: flagship-grade scientific/visual knowledge in Flash-tier body — GPQA Diamond 95.3% (highest in series), but TB 4.0 19.1% and FrontierSWE v2 19.6% collapse.** BenchLM: 66.22/100, #27/1009.
- **Provider / access:** Google AI Studio / Gemini API (`gemini-3.8-flash`), Google Cloud Vertex AI, OpenCode Zen (`opencode/gemini-3.8-flash`), Google Antigravity. Google GenAI API (not OpenAI-compatible). **No Free tier.**
- **Release / knowledge:** 2026-09-02 release; **knowledge cutoff not disclosed** (some domains January 2025).
- **IDs:** `google/gemini-3.8-flash` (Google AI Studio/Vertex), `opencode/gemini-3.8-flash` (OpenCode Zen).
- **Context window:** 1,000,000 tokens input; **65,536 max output (64K)**. **No >200K surcharge tier** — full 1M window at flat rate.
- **Modalities:** Text, image, audio, video in; text out. Reasoning: customizable effort levels. Tool calls: yes. JSON mode: yes.
- **Pricing (as of 2026-11-08):** **$1.50/M in, $0.15/M cached, $7.50/M out** (Zen). **No >200K surcharge tier** — full 1M at flat rate. 90% cache discount (AA). Blended 7:2:1 ≈ $0.58/M (AA). Cost/task: $1.24 (AA).
- **Architecture:** Proprietary (Google DeepMind); based on Gemini 3.7 Flash; parameter count not disclosed.

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from Step 5 Preview (2026-11-05) + official Google sources. **Average of 34 qualifying raters: 92.5 Overall** (Tool 90, Reasoning 91.5, Context 96, Multimodal 93.4, Coding 91.5). Queue: 92.5. Step 5 Preview: 87. My original: 86.

Agent / tool use:

- Terminal-Bench 2.1: **89.4%** (Google) / **87.6%** (AA) / **81.3%** (Vals) — clears 88%+ ref on 2 of 3 harnesses
- Terminal-Bench 4.0: **19.1%** (Google) / **19.7%** (AA) — **catastrophic drop from TB 2.1** (Step 5)
- GDPval-AA v2: **1,545 Elo** (Google) / **46.8%** normalized (AA) — below 1,750+ frontier
- AA Agentic Index: **41.1%** (AA) / **41.1%** (Step 5)
- AA Tau3 Banking: **44.9%** (AA) / **44.9%** (Step 5) — below 50% frontier
- AA AutomationBench: **59.9%** (AA) / **59.9%** (Step 5)
- AA ITBench: **52.5%** (AA) / **52.5%** (Step 5)
- Finance Agent v2: **61.4%** (Google) / **61.4%** (Step 5)
- OSWorld 2.0: **59.0%** partial (Google) / **59.0%** (Step 5)
- Terminal-Bench 4.0: **19.1%** (Google) / **19.7%** (AA) — **catastrophic drop from TB 2.1** (Step 5)
- FrontierSWE v2: **19.6%** (Step 5)
- MazeBench: **4%** (Step 5) / **4%** (GLM)
- ApprenticeBench: **24%** (Step 5)
- GDP.pdf: **21.0%** (Step 5)
- AA AutomationBench: **59.9%** / AA ITBench: **52.5%** / OSWorld 2.0: **59.0%** / Finance Agent v2: **61.4%** / AA-AnalystAgent: **46.3%** / AA Agentic Index: **41.1%** / AA Briefcase: **1,202 Elo** / Hermes Bench: **62.2%** / Hermes Index: **38.1%** (Step 5)
- **Claw-Eval: no verified public score found** (Step 5)
- AA Agentic Index: **41.1%** (AA) / AA Tau3 Banking: **44.9%** (AA) (GLM)

Reasoning / knowledge:

- GPQA Diamond: **95.3%** (AA) / **94.4%** (Vals) — **highest in research series** (tied above Fable 5.1 93.7%) (Step 5 / GLM)
- HLE-Verified: **54.9%** (Google) / AA-HLE: **47.8%** (AA) (Step 5 / GLM)
- ARC-AGI-1: **98.50%** (ARC Prize semi-private) / **98.5%** (Step 5 / GLM)
- ARC-AGI-2: **89.2%** (ARC Prize semi-private) / **89.2%** (Step 5 / GLM)
- ARC-AGI-3: **10.4%** (ARC Prize semi-private) / Provider Adapter: **35.0%** (ARC Prize) (Step 5 / GLM)
- LABBench2: **86.2%** (Google) / **86.2%** (Step 5)
- BioMysteryBench: **88.8%** solvable / **56.5%** difficult (Google) (Step 5)
- MMLU-Pro (Vals): **90.2%** (Vals) / **90.2%** (Step 5)
- AA Intelligence Index: **30.6** (AA) / **41** (GLM) — **large discrepancy** (Step 5 / GLM)
- AA LCR: **81.3%** (AA) / **81.3%** (Step 5 / GLM)
- CritPt: **18.3%** (AA) / **18.3%** (Step 5 / GLM)
- MLCR-AA: **10.6%** (Step 5) / **21.7%** (GLM)
- AA Omniscience: index **23.3**, accuracy **50.5%**, hallucination **55.1%** (Step 5)
- FrontierMath v2: Tiers 1-3 **68.4%** / Tier 4 **21.95%** (Epoch AI) / **68.4% / 21.95%** (Step 5 / GLM)
- **MRCR: no verified public score found** (Step 5 / GLM)
- LABBench2: **86.2%** (Step 5 / GLM)
- BioMysteryBench: **88.8%** solvable / **56.5%** difficult (Step 5 / GLM)
- CharXiv (no tools): **86.2%** (Google) (Step 5 / GLM)
- LVBench: **87.8%** agentic / **87.1%** static (Google) (Step 5 / GLM)
- Gray Swan IPI: **5.5%** (Google Gemini 4 Argon chart) (GLM)

Coding:

- DeepSWE v1.1: **73.7%** (Google) / **73.8%** (DeepSWE leaderboard) — **0.2 pts under 74% frontier ref** (GLM / Step 5)
- Terminal-Bench 2.1: **89.4%** (Google) / **87.6%** (AA) / **81.3%** (Vals) (Step 5 / GLM)
- SWE-bench (Vals): **80.0%** (Vals) / **80.0%** (Step 5 / GLM)
- LiveCodeBench (Vals): **89.5%** (Vals) / **89.5%** (Step 5 / GLM)
- AA Coding Index: **76.3%** (AA) — clears 70%+ frontier ref (GLM / Step 5)
- AA-SciCode: **56.6%** (AA) / **56.6%** (Step 5) — clears 55%+ ref
- CursorBench 3.2: **69.2%** / **4.0: 39.6%** (Cursor) (Step 5 / GLM)
- SWE-bench (Vals): **80.0%** (Vals) (Step 5 / GLM)
- FrontierSWE v2: **19.6%** (Proximal) / **19.6%** (Step 5) — very weak
- Vibe Code Bench: **48.68%** (Vals) (Step 5 / GLM)
- AA Coding Index: **76.3%** (AA) — clears 70%+ ref (Step 5 / GLM)
- AA-SciCode: **56.6%** (AA) — clears 55%+ ref (Step 5 / GLM)
- **SWE-bench Verified / SWE-bench Pro: no verified public score found** (Step 5 / GLM)
- **FrontierCode: no verified public score found** (Step 5 / GLM)

Multimodal:

- MMMU-Pro: **85.6%** (AA) / **85.6%** (Step 5 / GLM)
- CharXiv: **86.2%** no tools (Google) / **86.2%** (Step 5 / GLM)
- LVBench: **87.8%** agentic / **87.1%** static (Google) / **87.1%** (Step 5 / GLM)
- CharXiv: **86.2%** (Step 5 / GLM)
- ExtractBench: **80.71%** / ParseBench: **71.50%** / Design Arena: **1,299 Elo** (Step 5)
- Native audio/video input (omni-input) — places in 90-100 tier (Step 5)

Long context:

- AA LCR: **81.3%** (AA) / **81.3%** (Step 5 / GLM)
- MLCR-AA: **10.6%** (Step 5) / **21.7%** (GLM) — discrepancy
- **MRCR: no verified public score found** (Step 5 / GLM)
- **No >200K surcharge tier** — full 1M at flat rate (Step 5)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 34 qualifying raters = **92.5 Overall** (Tool 90, Reasoning 91.5, Context 96, Multimodal 93.4, Coding 91.5). Queue: 92.5. Step 5 Preview: 87. My original: 86.

- **Tool use: 84/100.** (was 82) TB 2.1 **89.4% / 87.6% / 81.3%** (clears 88%+ ref on 2/3 harnesses), Finance Agent **61.4%**, OSWorld 2.0 **59.0%**, AA AutomationBench **59.9%**, AA ITBench **52.5%**, GDPval **1,545 Elo** (below 1,750+ frontier). **Capped by:** TB 4.0 **19.1% / 19.7%** (catastrophic drop), AA Tau3 Banking **44.9%** (below 50% ref), MazeBench **4%**, ApprenticeBench **24%**, GDP.pdf **21.0%**, no τ³-Banking/Claw-Eval/GDPval-Elo.
- **Reasoning: 83/100.** (was 78) **GPQA Diamond 95.3% / 94.4% (highest in series, tied above Fable 5.1)**, HLE-Verified **54.9%**, ARC-AGI-1 **98.5%**, ARC-AGI-2 **89.2%**, LABBench2 **86.2%**, BioMysteryBench **88.8%**, MMLU-Pro **90.2%**. **Capped by:** FrontierMath Tier 4 **21.95%** (1/4 of Argon's), CritPt **18.3%**, MLCR-AA **10.6%**, ARC-AGI-3 **10.4%**, AA Intelligence Index **30.6** (below 60+ frontier), hallucination **55.1%**.
- **Context window: 96/100.** (was 95) 1M native; **Zen sells full 1M at flat $1.50/$7.50 — no >200K tier**, cheaper long-context access than all other 1M models. AA LCR **81.3%**. Held at 96 (not 100) due to no MRCR retrieval run, no max-output limit published.
- **Multimodal: 92/100.** (was 90) Text, image, video, **audio** input (omni-input) — 90-100 tier. MMMU-Pro **85.6%**, CharXiv **86.2%**, LVBench **87.1%** (long video), ExtractBench **80.71%**, CharXiv **86.2%**, Design Arena **1,299 Elo**. Capped by text-only output, Design Arena **1,299 Elo** (below Argon's 1,316).
- **Coding: 89/100.** (was 85) AA Coding Index **76.3%** (clears 70%+), TB 2.1 **89.4%** (clears 85% ref), DeepSWE **73.8%** (0.2 pts under 74% ref), AA-SciCode **56.6%** (clears 55% ref), SWE-bench **80.0%** (Vals), LiveCodeBench **89.5%** (Vals). **Capped by:** FrontierSWE v2 **19.6%**, CursorBench 4.0 **39.6%**, Bug Hunt **18.0 fixes**, no SWE-bench Verified/Pro, same agentic-execution weakness capping tool use.
- **Cost efficiency: 85/100.** (was 95) $1.50/$7.50 with **no >200K tier** — full 1M at flat rate. Blended ~$0.58/M, cost/task $1.24. **Held below 88 by no free tier and dominated by Gemini 4 Argon at similar intro rate.** Methodology: $1.50/$7.50 between ~$1.25/$4.25 (≈88) and ~$3/$15 (≈60).
- **Overall Score: 89/100.** (was 86) Half-up mean of (84 + 83 + 96 + 92 + 89) / 5 = 444 / 5 = 88.8 → **89**. **Below average of 34 qualifying raters (92.5).** Best-fit: **Cheap knowledge-and-vision engine** — GPQA 95.3% (series highest), MMMU-Pro 85.6%, LVBench 87.1%, 1M context at $1.50/$7.50 flat; **Do not deploy as autonomous coding agent** — TB 4.0 19.1%, FrontierSWE v2 19.6%, Gray Swan 5.5% (weakest Gemini/Claude with published figure).

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from Step 5 Preview (2026-11-05, Overall 87) + official Google sources (Gemini 3.8 Flash model card, BenchLM catalog). **Average of 34 qualifying raters: 92.5 Overall.** Queue: 92.5. **Critical findings:** GPQA Diamond 95.3% (series highest); TB 2.1 89.4% vs TB 4.0 19.1% (catastrophic split); DeepSWE 73.8% (0.2 under 74% ref); FrontierMath T4 21.95%; ARC-AGI-3 10.4%; AA Intelligence Index 30.6 (large GLM discrepancy); no MRCR/SWE-bench Verified/Pro; audio input places in 90-100 multimodal tier.
- Reference URLs:
  - [Google DeepMind — Gemini 3.8 Flash Model Card](https://deepmind.google/models/model-cards/gemini-3-8-flash/)
  - [BenchLM — Gemini 3.8 Flash (66.22/100, #27/1009, 63 rows)](https://benchlm.ai/models/gemini-3-8-flash)
  - [Artificial Analysis — Gemini 3.8 Flash](https://artificialanalysis.ai/models/gemini-3.8-flash)
  - [Vals AI — Gemini 3.8 Flash](https://www.vals.ai/models/google_gemini-3.8-flash)
  - [Epoch AI — FrontierMath v2](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [ARC Prize — Gemini 3.8 Flash](https://arcprize.org/leaderboard)
- Future sources: add a file next to this one, e.g. `GPT_5.md`, using the same headings.

---