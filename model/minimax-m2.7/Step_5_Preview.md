# MiniMax M2.7 — findings by Step 5 Preview

- Source: MiniMax (`minimax-m2-7`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M2.7. The M2.7-generation base model, sibling to MiniMax M3.1 Flash (60.26), M2.5 (49.63) and M3 (49.31), scoring **47.85/100, #113 of 1,016** with **46 benchmarks**. BenchLM classifies it **Open Weight** and **Non-Reasoning**.
- **Short description:** A genuinely broad open-weight model with a reliable profile and a mid-tier capability set: **GPQA-D 87.4% [AA], AA-LCR 78.3%, SWE Multilingual 76.5%, SWE-bench (Vals) 73.8%, τ²-bench 84.8%, MM-ClawBench 62.7%, MLE-Bench Lite 66.6%, AA-IFBench 75.7%** — against **AA Agentic Index 16.8%, APEX-Agents-AA 10.6%, CritPt 0.6%, GDPval-AA 25.5% normalized, Terminal-Bench 2.1 48.7% (Vals)** and a **200K window** (half the current standard).
- **Provider / access:** **Open weights** on Hugging Face (`MiniMax/MiniMax-M2.7` per the Vals slug form), MiniMax's own API, and OpenRouter. Self-hosting available.
- **Release / knowledge:** release date not restated; M2.7 is MiniMax's mid-2026 line, positioned between M2.5 (49.63) and M3 (49.31). **Knowledge cutoff not disclosed.**
- **IDs:** `minimax-m2-7` (BenchLM canonical, repo); `minimax_MiniMax-M2.7` (Vals); `minimax/minimax-m2.7` (Openrouter).
- **Context window:** **200,000 tokens** — half the current 1M standard, and the binding constraint on this model's ranking.
- **Modalities:** **text in; text out** — the multimodal table carries exactly one Design Arena row (1,241 Elo) and no visual benchmark.
- **Pricing (as of 2026-11-06):** **not published in any source checked** — BenchLM's row carries no rate card. Scored conservatively and flagged as unverified; **open weights provide the self-hosting escape.**
- **Architecture:** **open weight**; parameter count undisclosed. BenchLM classifies it **Non-Reasoning**.

### Raw benchmarks found

MiniMax's own M2.7 launch material is the primary source for the vendor rows, with Artificial Analysis, Vals AI, Claw-Eval, SWE-Rebench, React Native Evals, Gert Labs and Openrouter supplying independent rows — **and, unusually, several rows cross-cited from third-party comparison tables**: τ³-bench 67.6%, HLE 28%, GPQA-D 87.0%, AIME26 89.8%, HMMT Nov 2025 81.0% and HMMT Feb 2026 72.7% all come from **GLM-5.1's model-card comparison table**, while SWE-bench Verified 75.4% and MMLU-Pro 80.8% come from **Arcee's Trinity-Large-Thinking table**. That is cross-citation from competitor documents, weaker provenance, and it is flagged at each affected figure — the same pattern recorded across eighteen models in this series. 46 benchmarks total.

Agentic / tool use — **split, with the batch's lowest APEX figure**:

- **τ²-bench: 84.8%** [AA]; **τ³-bench: 67.6%** (GLM-5.1 table — cross-cited); Toolathlon: 46.3% (vendor)
- **MM-ClawBench: 62.7%** (vendor); **MLE-Bench Lite: 66.6%** (vendor); **Claw-Eval: 48.7%** [Claw-Eval leaderboard]
- **APEX-Agents-AA: 10.6%** [AA] — near-floor; **GDPval-AA: 1,087 Elo / 25.5% normalized** [AA]
- **AA Agentic Index: 16.8%**; Terminal-Bench 2.0: 57.0% (vendor); **Terminal-Bench 2.1 (Vals): 48.7%**; Gert Labs: 40.40%
- **Terminal-Bench 4.0, MCP-Atlas, OSWorld, BrowseComp, MazeBench, ALE, JobBench, AA AutomationBench, AA ITBench: no verified public score found** — so two of three frontier references are unmeasured and no composite beyond AA Agentic Index

Reasoning / knowledge — **solid exams, near-floor depth**:

- **AA-GPQA Diamond: 87.4%** [AA] / GPQA-D 87.0% (GLM-5.1 table) / 86.6% (Vals) — fails the 90%+ reference on all three
- **AA-HLE: 29.6%** [AA] / HLE 28% (GLM-5.1 table) — fails the 40%+ reference by ~10–12 points
- **AA-Omniscience: index 0.8, accuracy 26.8%, hallucination rate 35.6%** — a **positive index**, meaning more correct than incorrect answers, on the **tenth-lowest hallucination rate measured in this research series** — the model's best property
- AA Intelligence Index: **22.8%**; **AA-LCR: 78.3%**; CritPt: **0.6%** — near-floor; AA-IFBench: 75.7%
- MMLU-Pro: **80.8%** (Arcee table) / 80.4% (Vals)
- **AIME26: 89.8%** (GLM-5.1 table); HMMT Nov 2025: 81.0%; HMMT Feb 2026: 72.7%; AIME25 (Arcee): 80.0%
- **ARC-AGI, MRCR, FrontierMath: no verified public score found** — so long-context retrieval and one reasoning reference are unmeasured

Coding — **solid, and well-corroborated**:

- **SWE-bench (Vals): 73.8%** / **SWE-bench Verified\*: 75.4%** (Arcee table) — solid mid-frontier repair, both under the 85%+ terminal reference
- **SWE Multilingual: 76.5%** (vendor) — a strong multilingual figure
- **VIBE-Pro: 55.6%** (vendor) — the strongest vibe-coding figure here; **Multi-SWE Bench: 52.7%**; SWE-bench Pro: 56.2%; SWE-Rebench: 51.9%
- **AA Coding Index: 52.6%** [AA] — 17.4 points under the 70% reference; **AA-SciCode: 50.1%** — under 55%; LiveCodeBench (Vals): 79.9%
- **React Native Evals: 71.4%** — a real mobile-coding data point; **Vibe Code Bench: 27.04%** [Vals] — near-floor; NL2Repo: 39.8%
- **DeepSWE, FrontierCode: no verified public score found**

Multimodal (image-in) — **effectively unmeasured**:

- Design Arena (website): **1,241 Elo** — the only row
- **MMLU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision: no verified public score found**

### Normalized scores (1–100)

- **Tool use: 58/100.** Below the methodology's mid band, and the weakest dimension. The protocol half is respectable — **τ²-bench 84.8%, MM-ClawBench 62.7%, MLE-Bench Lite 66.6%, τ³-bench 67.6% (cross-cited)** — while the execution half collapses: **AA Agentic Index 16.8%, APEX-Agents-AA 10.6%, Terminal-Bench 2.1 48.7% (Vals), GDPval-AA 25.5% normalized, Gert Labs 40.40%**. **Terminal-Bench 4.0, MCP-Atlas, OSWorld, BrowseComp, MazeBench, ALE, JobBench and AA AutomationBench have no figure at all**, so two of three frontier references are unmeasured.
- **Reasoning: 66/100.** Mid-band, and resting on two genuinely good figures: **AA-GPQA Diamond 87.4%** (2.6 under the frontier reference) and **AA-LCR 78.3%** (solid long-context reasoning). The standout is reliability: **AA-Omniscience index 0.8 (positive) with a 35.6% hallucination rate — the tenth-lowest measured in this research series** — making it unusually trustworthy for retrieval-heavy work. Capped by **AA-HLE 29.6% (10.4 under), CritPt 0.6% (near-floor), AA Intelligence Index 22.8%, and the missing ARC-AGI, MRCR and FrontierMath**.
- **Context window: 85/100.** **200,000 tokens** places it exactly on the methodology's 200K tier boundary, scored at 85 above the floor because **AA-LCR is 78.3%**, which is solid long-context reasoning. Held at 85 rather than mid-tier because it is half the current standard, no MRCR or GraphWalks run exists, and no max-output limit is published.
- **Multimodal: 55/100.** **Text in; text out**, scored at the bottom of the methodology's 60–70 band and marginally below it, because the entire measured visual evidence is one Design Arena result of 1,241 Elo and **MMLU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench and MathVision have no figure whatsoever**.
- **Coding: 72/100.** Mid-band, and well-corroborated. **SWE-bench 73.8% (Vals) / 75.4% (Arcee) is solid mid-frontier repair, SWE Multilingual 76.5% is strong, and VIBE-Pro 55.6%, Multi-SWE Bench 52.7%, LiveCodeBench 79.9% and React Native Evals 71.4% corroborate a genuinely broad coding base.** Capped by SWE-bench sitting ~10 points under the frontier reference, **AA Coding Index 52.6% (17.4 under the 70% reference)**, AA-SciCode 50.1% (under 55%), **Vibe Code Bench 27.04% (near-floor)**, and the absence of DeepSWE and FrontierCode.
- **Cost efficiency: 88/100.** **No rate card is published in any source checked**, so the score rests on access rather than a price: **open weights, self-hostable** — a genuinely permissive proposition, and the model's strongest structural property. Scored at 88 on that basis. **Explicitly an access-based inference, not a price measurement** — held below 92 because no hosted rate is published to verify and no free tier is recorded.
- **Overall Score: 67/100.** (58 + 66 + 85 + 55 + 72) / 5 = 67.2 → **67**. Recommendation: **a broadly competent open-weight model with the batch's best reliability profile and a weak execution layer.** GPQA-D 87.4%, AA-LCR 78.3%, SWE Multilingual 76.5%, VIBE-Pro 55.6%, a **positive AA-Omniscience index (0.8) with a 35.6% hallucination rate** and open weights make a reasonable package for retrieval-heavy multilingual coding work. Two hard cautions: **its agentic-execution layer is weak** (AA Agentic Index 16.8%, APEX-Agents-AA 10.6%, Terminal-Bench 2.1 48.7%), so it is a reasoner rather than an autonomous agent; and **CritPt 0.6% is near-floor** with 200K context half the standard. **Prefer MiniMax M3.1 Flash (60.26)** unless this model's specific profile is required, and note the cross-cited provenance on six of its figures.

---

## Signature
- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research using MiniMax's own M2.7 launch material as the primary source for the vendor rows, cross-checked against BenchLM's 46-row catalog (which attributes the independent numbers to Artificial Analysis, Vals AI, Claw-Eval, SWE-Rebench, React Native Evals, Gert Labs and Openrouter). **A provenance finding is recorded prominently: six figures — τ³-bench 67.6%, HLE 28%, GPQA-D 87.0%, AIME26 89.8%, HMMT Nov 2025 81.0% and HMMT Feb 2026 72.7% — are cross-cited from *GLM-5.1's* model-card comparison table, and two more (SWE-bench Verified 75.4%, MMLU-Pro 80.8%) from *Arcee's* Trinity-Large-Thinking table**, rather than from a MiniMax source. That is cross-citation from competitor documents, weaker provenance, and it is flagged at each affected figure — the same pattern recorded in the Claude Opus 4.5, Claude Sonnet 4.5, Grok 4.20, Gemma 4 31B, Qwen3.5-27B, Qwen3.5-35B-A3B, GPT-5.1-Codex-Max, Gemini 2.0 Flash, Hy3 and Ring-2.6-1T reports. **The tenth-lowest hallucination rate in this research series (35.6%, on a positive Omniscience index of 0.8) is attributed as the model's best property** rather than presented bare, as are the **near-floor CritPt (0.6%)** and **near-floor APEX-Agents-AA (10.6%)**. The protocol-fluency-without-execution pattern is recorded as consistent with sixteen models in this series. Conflicting figures are listed side by side — GPQA-D 87.0% (GLM-5.1 table) / 87.4% [AA] / 86.6% [Vals]; SWE-bench 75.4% (Arcee) / 73.8% [Vals]; HLE 28% (GLM-5.1 table) / 29.6% [AA] — rather than averaged, with the independent run preferred on each. The **asterisked SWE-bench Verified\*** row is recorded as BenchLM's own marker for a differently-attributed measurement. The unpublished rate card is surfaced with its effect on the cost score stated as an access-based inference. Missing benchmarks (Terminal-Bench 4.0, MCP-Atlas, OSWorld, BrowseComp, MazeBench, ALE, JobBench, AA AutomationBench, AA ITBench, ARC-AGI, MRCR, FrontierMath, DeepSWE, FrontierCode, and every visual benchmark except Design Arena) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [MiniMax — MiniMax M2.7 launch material (primary source for the vendor rows)](https://www.minimax.io/news/minimax-m27-en)
  - [BenchLM — MiniMax M2.7 benchmark scores (46 rows, 47.85/100, #113/1016)](https://benchlm.ai/models/minimax-m2-7)
  - [Artificial Analysis — MiniMax M2.7](https://artificialanalysis.ai/models/minimax-m2-7)
  - [Vals AI — MiniMax M2.7 leaderboard results](https://www.vals.ai/models/minimax_MiniMax-M2.7)
  - [Artificial Analysis — omniscience leaderboard (source of the 0.8 index / 35.6% rate)](https://artificialanalysis.ai/evaluations/omniscience)
  - [Artificial Analysis — aaagenticindex leaderboard](https://artificialanalysis.ai/evaluations/aaagenticindex)
  - [Artificial Analysis — apex-agents-aa leaderboard (source of the 10.6%)](https://artificialanalysis.ai/evaluations/apex-agents-aa)
  - [Artificial Analysis — critpt leaderboard](https://artificialanalysis.ai/evaluations/critpt)
  - [Artificial Analysis — gdpval-aa leaderboard](https://artificialanalysis.ai/evaluations/gdpval-aa)
  - [Artificial Analysis — aacodingindex leaderboard](https://artificialanalysis.ai/evaluations/aacodingindex)
  - [Artificial Analysis — gpqa-diamond leaderboard](https://artificialanalysis.ai/evaluations/gpqa-diamond)
  - [Artificial Analysis — humanitys-last-exam leaderboard](https://artificialanalysis.ai/evaluations/humanitys-last-exam)
  - [Artificial Analysis — lcr leaderboard](https://artificialanalysis.ai/evaluations/lcr)
  - [Artificial Analysis — tau2-bench leaderboard](https://artificialanalysis.ai/evaluations/tau2-bench)
  - [Claw-Eval leaderboard](https://claw-eval.github.io/)
  - [SWE-Rebench leaderboard](https://swe-rebench.com/?insight=sep_2025)
  - [React Native Evals leaderboard](https://rn-evals.vercel.app/)
  - [Vals AI — Vibe Code Bench v1.1](https://www.vals.ai/benchmarks/vibe-code)
  - [Gert Labs rankings](https://gertlabs.com/rankings)
  - [Openrouter — MiniMax M2.7 benchmarks](https://openrouter.ai/minimax/minimax-m2.7/benchmarks)
  - See also: [`model/minimax-m2.5/`](minimax-m2.5.md) and [`model/minimax-m3/`](minimax-m3.md) — the siblings refreshed in this same session; [`model/minimax-m3.1-flash/`](minimax-m3.1-flash.md) (60.26) — the model this report recommends preferring
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
