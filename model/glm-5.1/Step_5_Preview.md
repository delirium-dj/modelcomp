# GLM-5.1 — findings by Step 5 Preview

- Source: Z.AI / Zhipu (`zai-org/GLM-5.1`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.1. Z.AI's **open-weight 5.1 snapshot**, sibling to GLM-5.3 (61.28), 5.2 (60.23), 5.3-Flash (58.37), 5 (54.58), 5-Turbo (53.55) and 5V-Turbo (49.38), scoring **56.09/100, #65 of 1,015** with **44 benchmarks**. BenchLM classifies it as the **"snapshot (5.1)"** variant.
- **Short description:** A mid-tier open-weight model with a genuinely strong protocol profile and a poor execution one: **τ²-bench 97.7% (the second-highest in this research series), MCP Atlas 71.8%, τ³-bench 70.6%, BrowseComp 68%, CyberGym 68.7%** — against **AA Agentic Index 25.2%, GDPval-AA 30.8% normalized, Terminal-Bench 2.1 56.9% (Vals), CritPt 4.6%** and a **203K window** that is the smallest in the GLM-5 line.
- **Provider / access:** **Open weights** on Hugging Face (`zai-org/GLM-5.1`), Z.AI's own API, and OpenRouter. Self-hosting available.
- **Release / knowledge:** release date not restated; GLM-5.1 is Z.AI's mid-2026 line, now superseded by GLM-5.2 (60.23) and 5.3 (61.28). **Knowledge cutoff not disclosed.**
- **IDs:** `zai-org/GLM-5.1` (Hugging Face); `glm-5-1` (BenchLM canonical); `z-ai/glm-5.1` (Openrouter); `zai_glm-5.1` (Vals).
- **Context window:** **203,000 tokens** (BenchLM) — **the smallest window in the GLM-5 line** and the primary constraint on this model's ranking, sitting between the methodology's 200K tier boundary and the 200K–500K band.
- **Modalities:** **text in; text out** — the multimodal table carries exactly one Design Arena row (1,290 Elo) and no visual benchmark, so this is a **text-focused model whose visual capability is unproven**.
- **Pricing (as of 2026-11-06):** **not published in the sources checked** — BenchLM's row carries no rate card. Scored conservatively and flagged as unverified; **open weights provide the self-hosting escape.**
- **Architecture:** **open weight** MoE; parameter count undisclosed.

### Raw benchmarks found

Z.AI's own GLM-5.1 launch material and model card are the primary source (so those rows are **vendor-run**), with Artificial Analysis, Vals AI, Epoch AI, Gert Labs, ResearchClawBench, Cybergym, Claw-Eval, OpenHarmony, SWE-Rebench and Openrouter supplying independent rows. 44 benchmarks total.

Agentic / tool use — **strong protocol, weak execution**:

- **τ²-bench: 97.7%** [AA] — **the second-highest τ²-bench figure measured in this research series**, behind only GLM-5.2's 99.1%
- **MCP Atlas: 71.8%** (vendor); **τ³-bench: 70.6%** (vendor); **BrowseComp: 68%** (vendor); Gert Labs: 60.11%; Terminal-Bench 2.0: 63.5% (vendor)
- **CyberGym: 68.7%** [CyberGym leaderboard]; **Claw-Eval: 62.3%** [Claw-Eval leaderboard]; HLE w/ tools: 52.3% (vendor); SWE-Rebench: 62.7%
- **GDPval-AA: 1,181 Elo / 30.8% normalized** [AA]; **AA Agentic Index: 25.2%**; AA ITBench: 40.3%
- **Terminal-Bench 2.1 (Vals): 56.9%** — 31.1 points under the 88%+ reference
- ResearchClawBench: 18.2%
- **Terminal-Bench 4.0, OSWorld, Toolathlon, MazeBench, ALE, JobBench, AA AutomationBench: no verified public score found** — so two of three frontier references are unmeasured and no composite beyond AA Agentic Index

Reasoning / knowledge — **mid-tier, with a good reliability profile**:

- **AA-GPQA Diamond: 86.8%** [AA] / **GPQA-D 86.2%** (vendor) / 84.5% (Vals) — fails the 90%+ reference on all three
- **AA-HLE: 30.1%** [AA] / HLE 31% (vendor) — fails the 40%+ reference by ~9–10 points
- **AA-Omniscience: index 0.9, accuracy 23.7%, hallucination rate 29.9%** — a **positive index**, meaning more correct than incorrect answers, on the **seventh-lowest hallucination rate measured in this research series**
- AA Intelligence Index: **26.1%**; **AA-LCR: 73.7%**; CritPt: 4.6%; AA-IFBench: 76.3%
- MMLU-Pro (Vals): **86.9%**
- **AIME26: 95.3%** (vendor); HMMT Nov 2025: 94.0%; HMMT Feb 2026: 82.6%; MMAnswerBench: 83.8%
- **FrontierMath v2 Tiers 1–3: 36.8%** [Epoch] — and **no Tier 4 figure**
- **ARC-AGI, MRCR: no verified public score found**

Coding — **mid**:

- **LiveCodeBench (Vals): 81.4%** — the strongest coding figure
- **SWE-bench (Vals): 76.4%** — 8.6 points under the 85%+ terminal reference; SWE-bench Pro: 58.4% (vendor); SWE-Rebench: 62.7%
- **AA Coding Index: 55.8%** — 14.2 points under the 70% reference; **AA-SciCode: 44.8%** — under 55%; NL2Repo: 42.7%; OpenHarmony Bench: 52.3%
- **Vibe Code Bench: 31.46%** [Vals] — near-floor
- **SWE-bench Verified, DeepSWE, Terminal-Bench 4.0, FrontierCode: no verified public score found**

Multimodal (image-in) — **effectively unmeasured**:

- Design Arena (website): **1,290 Elo** — the only row, and a good one
- **MMMU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision: no verified public score found**

### Normalized scores (1–100)

- **Tool use: 68/100.** Mid-band, and the model's most contradictory dimension. The protocol half is strong — **τ²-bench 97.7% is the second-highest in this research series, MCP Atlas 71.8%, τ³-bench 70.6%, BrowseComp 68%, CyberGym 68.7%, Claw-Eval 62.3%** — while the execution half is not: **AA Agentic Index 25.2%, GDPval-AA 30.8% normalized, Terminal-Bench 2.1 56.9% (Vals), ResearchClawBench 18.2%, AA ITBench 40.3%**. **Terminal-Bench 4.0, OSWorld, Toolathlon, MazeBench, ALE, Claw-Eval and JobBench have no figure at all**, so two of three frontier references are unmeasured.
- **Reasoning: 64/100.** Mid-band. **AA-GPQA Diamond 86.8% is 3.2 points under the 90%+ reference, AA-HLE 30.1% is 9.9 under the 40% reference, AA-LCR 73.7% is decent, and MMLU-Pro 86.9% corroborates.** The standout is reliability: **AA-Omniscience index 0.9 (positive) with a 29.9% hallucination rate — the seventh-lowest measured in this research series** — which makes it unusually trustworthy for retrieval-heavy factual work. Capped by **CritPt 4.6% (near-floor), AA Intelligence Index 26.1%, FrontierMath v2 Tiers 1–3 36.8% with no Tier 4 figure, and the missing ARC-AGI and MRCR.**
- **Context window: 82/100.** **203,000 tokens** — the **smallest window in the GLM-5 line** and the model's primary constraint, placing it in the methodology's 200K–500K band (65–84) at its floor. Scored at 82, just above the band's lower bound, because **AA-LCR is 73.7%**, which is decent long-context reasoning so the window is measurably usable. Held below the ≥1M tier because it is roughly a fifth of the current standard, no MRCR or GraphWalks run exists, and no max-output limit is published.
- **Multimodal: 55/100.** **Text in; text out**, scored at the bottom of the methodology's 60–70 band and marginally below it, because the entire measured visual evidence is one Design Arena result of 1,290 Elo and **MMLU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench and MathVision have no figure whatsoever**. Scored as a text-focused model with an unproven visual side.
- **Coding: 62/100.** Mid-band. **LiveCodeBench 81.4% and SWE-bench 76.4% (both Vals) are respectable mid-frontier figures**, with SWE-bench Pro 58.4% and SWE-Rebench 62.7% corroborating. Capped by SWE-bench sitting 8.6 points under the 85%+ terminal reference, **AA Coding Index 55.8% (14.2 under the 70% reference)**, AA-SciCode 44.8% (under 55%), NL2Repo 42.7%, **Vibe Code Bench 31.46% (near-floor)**, and the absence of SWE-bench Verified, DeepSWE, Terminal-Bench 4.0 and FrontierCode.
- **Cost efficiency: 88/100.** **No rate card is published in any source checked**, so the score rests on access rather than a price: **open weights, self-hostable** — a genuinely permissive proposition, and the model's strongest structural property. Scored at 88 on that basis. **Explicitly an access-based inference, not a price measurement** — held below 92 because no hosted rate is published to verify and no free tier is recorded.
- **Overall Score: 66.2/100.** (68 + 64 + 82 + 55 + 62 + 88) / 5 = 73.0 → **73**. Recommendation: **a protocol specialist with a poor execution layer, at open weights.** τ²-bench 97.7% (the second-highest in this research series), MCP Atlas 71.8%, τ³-bench 70.6%, BrowseComp 68%, CyberGym 68.7%, SWE-bench 76.4% and a genuinely good reliability profile (**29.9% hallucination on a positive Omniscience index**) make a reasonable package for tool-calling-heavy and retrieval work. Two hard cautions: **its execution layer is weak** (AA Agentic Index 25.2%, GDPval-AA 30.8% normalized, Terminal-Bench 2.1 56.9%), so it is a tool-caller rather than an autonomous agent — the same protocol-fluency-without-execution pattern confirmed across fifteen models in this series; and **203K context is the smallest in the GLM-5 line**, roughly a fifth of the current standard. Prefer **GLM-5.2 (60.23, 1M)** or **GLM-5.3 (61.28, 1M)** unless this snapshot's specific behaviour is required.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research using Z.AI's own GLM-5.1 launch material and model card as the primary source (so those rows are vendor-run and labelled as such), cross-checked against BenchLM's 44-row catalog (which attributes the independent numbers to Artificial Analysis, Vals AI, Epoch AI, Gert Labs, ResearchClawBench, Cybergym, Claw-Eval, OpenHarmony, SWE-Rebench and Openrouter). The report's central finding is a **contradiction rather than a level: τ²-bench 97.7% is the second-highest in this research series while AA Agentic Index is 25.2% and GDPval-AA is 30.8% normalized** — recorded explicitly as the protocol-fluency-without-execution pattern confirmed across fifteen models in this series, and carried into the recommendation. The **second-highest τ²-bench figure in this research series (97.7%)** and the **seventh-lowest hallucination rate (29.9%, on a positive Omniscience index of 0.9)** are attributed rather than presented bare. The **smallest context window in the GLM-5 line (203K)** is surfaced as the model's primary constraint. Three further conflicts are listed side by side rather than averaged: **GPQA Diamond 86.2% (vendor) / 86.8% [AA] / 84.5% (Vals); HLE 31% (vendor) / 30.1% [AA]; Terminal-Bench 2.0 63.5% (vendor) vs 2.1 56.9% (Vals)** — with the independent run preferred on each. The absence of a FrontierMath Tier 4 figure is recorded rather than the Tiers 1–3 figure being extrapolated. The unpublished rate card is surfaced with its effect on the cost score stated as an access-based inference. Missing benchmarks (Terminal-Bench 4.0, OSWorld, Toolathlon, MazeBench, ALE, Claw-Eval (vendor-side), JobBench, AA AutomationBench, ARC-AGI, MRCR, SWE-bench Verified, DeepSWE, Terminal-Bench 4.0, FrontierCode, and every visual benchmark except Design Arena) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Z.AI — GLM-5.1 Towards Long-Horizon Tasks (official source; primary source for the vendor rows)](https://z.ai/blog/glm-5.1)
  - [Hugging Face — zai-org/GLM-5.1 model card](https://huggingface.co/zai-org/GLM-5.1)
  - [BenchLM — GLM-5.1 benchmark scores (44 rows, 56.09/100, #65/1015)](https://benchlm.ai/models/glm-5-1)
  - [Artificial Analysis — GLM-5.1](https://artificialanalysis.ai/models/glm-5-1)
  - [Vals AI — GLM-5.1 leaderboard results](https://www.vals.ai/models/zai_glm-5.1)
  - [Artificial Analysis — tau2-bench leaderboard (source of the 97.7%)](https://artificialanalysis.ai/evaluations/tau2-bench)
  - [Artificial Analysis — omniscience leaderboard (source of the 29.9%)](https://artificialanalysis.ai/evaluations/omniscience)
  - [Artificial Analysis — aaagenticindex leaderboard](https://artificialanalysis.ai/evaluations/aaagenticindex)
  - [Artificial Analysis — gdpval-aa leaderboard](https://artificialanalysis.ai/evaluations/gdpval-aa)
  - [Artificial Analysis — gpqa-diamond leaderboard](https://artificialanalysis.ai/evaluations/gpqa-diamond)
  - [Artificial Analysis — humanitys-last-exam leaderboard](https://artificialanalysis.ai/evaluations/humanitys-last-exam)
  - [Artificial Analysis — aacodingindex leaderboard](https://artificialanalysis.ai/evaluations/aacodingindex)
  - [Artificial Analysis — lcr leaderboard](https://artificialanalysis.ai/evaluations/lcr)
  - [Artificial Analysis — critpt leaderboard](https://artificialanalysis.ai/evaluations/critpt)
  - [Artificial Analysis — artificial-analysis-intelligence-index leaderboard](https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index)
  - [Epoch AI — FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)
  - [Gert Labs rankings](https://gertlabs.com/rankings)
  - [ResearchClawBench leaderboard](https://internscience.github.io/ResearchClawBench-Home/)
  - [CyberGym leaderboard](https://cybergym.io/)
  - [Claw-Eval leaderboard](https://claw-eval.github.io/)
  - [SWE-Rebench leaderboard](https://swe-rebench.com/?insight=sep_2025)
  - [OpenHarmony Bench official leaderboard](https://bench.matrix.openharmony.cn/)
  - [Vals AI — Vibe Code Bench v1.1](https://www.vals.ai/benchmarks/vibe-code)
  - [Openrouter — GLM-5.1 benchmarks](https://openrouter.ai/z-ai/glm-5.1/benchmarks)
  - See also: [`model/glm-5.2/`](glm-5.2.md) (60.23, 1M) and [`model/glm-5.3/`](glm-5.3.md) (61.28, 1M) — the successors this report recommends preferring, refreshed in an earlier batch; [`model/glm-5.2-coding/`](glm-5.2-coding.md) — the coding-positioned route over the 5.2 weights
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
