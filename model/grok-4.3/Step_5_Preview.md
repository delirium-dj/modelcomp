# Grok 4.3 — findings by Step 5 Preview

- Source: xAI (`xai/grok-4.3`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.3. **The weakest of the Grok 4.x line that carries a BenchLM score** — 52.89/100, #93 of 1,015 — sitting below Grok 4 (51.56)'s neighbourhood and well below 4.5 (63.03), 4.6 (66.69) and the unranked 4.7. It has **32 benchmarks**.
- **Short description:** A Grok whose profile is **unusual for its rank: strong on knowledge and instruction-following (GPQA Diamond 91.4% Vals, MMLU-Pro 85.8% Vals, IFBench 81.3%, AA-Omniscience index 18.0 with a 25.0% hallucination rate) but near-floor on agentic execution (AA Agentic Index 17.2%, Terminal-Bench 2.1 41.9% Vals, APEX-Agents-AA 17.0%) and weak on long context (AA-LCR 64.3%, the second-lowest in this batch).** A model that knows things and cannot act.
- **Provider / access:** xAI's own API, OpenRouter, and OpenCode Zen (`xai/grok-4.3`). No Free ID. Proprietary, closed weights.
- **Release / knowledge:** release date not restated; Grok 4.3 sits early in xAI's 2026 4.x line. **Knowledge cutoff not disclosed.**
- **IDs:** `xai/grok-4.3` (xAI, Zen); `x-ai/grok-4.3` (Openrouter); `grok_grok-4.3` (Vals).
- **Context window:** **1M tokens** (BenchLM) — the only Grok 4.x in this series with a 1M window; 4.5, 4.6 and 4.7 are all 500K.
- **Modalities:** **text and image in; text out** (MMMU-Pro 78.1%, Design Arena 1,194 Elo).
- **Pricing (as of 2026-11-05):** **not published in the sources checked** — BenchLM's row carries no rate card. Scored conservatively and flagged as unverified.
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

**No xAI launch post appears in BenchLM's attribution for this model** — every row is attributed to Artificial Analysis, Vals AI, Epoch AI, Gert Labs, ResearchClawBench, Cognition or OpenRouter. That is an important provenance fact: **this is the best independently-evidenced Grok in this research series, with no vendor-run rows at all.** 32 benchmarks total.

Agent / tool use — **the weakest dimension, and entirely independently sourced**:

- **τ²-bench: 97.7%** [AA] — the single strong figure, and among the best in this research series
- GDPval-AA: **29.2% normalized** [OpenRouter] / **1,018 Elo** [AA] — well under the 1,750 reference
- **AA Agentic Index: 17.2%** — the second-lowest agentic index in this batch; **APEX-Agents-AA: 17.0%**; ResearchClawBench: 12.4%
- **Terminal-Bench 2.1 (Vals): 41.9%** — 46 points under the 88%+ reference, and the only terminal figure
- Gert Labs: 43.86%
- **Terminal-Bench 4.0, τ³-Banking, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, AutomationBench, ITBench: no verified public score found** — so two of three frontier references are unmeasured and the third (τ²-bench) is contradicted by everything else

Reasoning / knowledge — **genuinely strong, and the model's real character**:

- **GPQA Diamond: 91.4%** (Vals) / **90.1%** [AA] — clears the 90%+ reference on both
- HLE: **35%** / **AA-HLE 37.2%** — fails the 40%+ reference on both, by 2.8–5 points
- **AA-Omniscience: index 18.0, accuracy 34.6%, hallucination rate 25.0%** — **the third-lowest hallucination rate in this research series**, behind Grok 4.7's 20.0% and Mistral Large 4's 28.2%... in fact ahead of Mistral's
- **AA Intelligence Index: 37.6%** — a solid composite; **IFBench: 81.3%** — strong instruction following
- MMLU-Pro (Vals): **85.8%**
- **AA-LCR: 64.3%** — the weakest AA-LCR in this batch; **CritPt: 8.0%** — the weakest CritPt in this batch
- FrontierMath v2 Tiers 1–3: **42.8%**; Tier 4: **14.6%** — weak
- **ARC-AGI, MRCR, AIME, MATH: no verified public score found**

Coding — **mid, with one strong figure**:

- **LiveCodeBench (Vals): 84.5%** — the strongest coding figure
- **SWE-bench (Vals): 71.4%** — under the 85%+ reference but respectable
- **AA Coding Index: 42.3%** — well under the 70% frontier reference
- **AA-SciCode: 48.3%** / SciCode 47.3% — under the 55%+ reference
- **DeepSWE, SWE-bench Pro, Vibe Code Bench, Terminal-Bench 4.0, FrontierCode: no verified public score found**

Multimodal (image-in):

- **MMMU-Pro: 78.1%** [AA] — the only measured visual figure; Design Arena (website): **1,194 Elo**
- **CharXiv, ExtractBench, BabyVision, ZeroBench: no verified public score found**

### Normalized scores (1–100)

- **Tool use: 40/100.** Below the methodology's mid band and the weakest dimension, despite **τ²-bench 97.7% [AA] being one of the strongest figures in this research series**. The contradiction is the finding: τ²-bench measures tool *protocol* compliance, and everything that measures tool *execution* collapses — **AA Agentic Index 17.2%, APEX-Agents-AA 17.0%, Terminal-Bench 2.1 41.9% (46 points under the reference), GDPval-AA 1,018 Elo against 1,750, ResearchClawBench 12.4%**. And **Terminal-Bench 4.0, τ³-Banking, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval and JobBench have no figure at all**, leaving two of three frontier references unmeasured.
- **Reasoning: 66/100.** Mid-band. **GPQA Diamond 90.1–91.4% clears the 90%+ reference on two harnesses, IFBench 81.3% is strong, MMLU-Pro 85.8% is respectable, and AA-Omniscience index 18.0 with a 25.0% hallucination rate is the third-lowest in this research series** — a real reliability asset. Capped by **AA-HLE 35–37.2% (under 40%), CritPt 8.0% (the weakest in this batch), FrontierMath Tier 4 14.6%, and the absence of ARC-AGI, MRCR, AIME and MATH**.
- **Context window: 88/100.** **1M tokens** places it in the methodology's ≥1M tier — the only Grok 4.x here with a 1M window, against 4.5/4.6/4.7's 500K. Held at the tier floor and below the 95+ of models with measured retrieval because **AA-LCR is 64.3%, the weakest in this batch, and no MRCR or GraphWalks run exists** — so the window is nominally the largest in the family and measurably the least usable.
- **Multimodal: 68/100.** Text + image in with text out, in the methodology's 60–70 band and at its upper end on **AA-MMMU-Pro 78.1%**. Held at 68 because the visual suite is **one benchmark**, Design Arena is only 1,194 Elo (the lowest in this batch), and there is no video or audio input.
- **Coding: 58/100.** At the bottom of the methodology's mid band. **LiveCodeBench 84.5% is strong and SWE-bench 71.4% is respectable**, but **AA Coding Index 42.3% is 27.7 points under the 70% reference and AA-SciCode 48.3% is under 55%**, and **DeepSWE, SWE-bench Pro, Vibe Code Bench, Terminal-Bench 4.0 and FrontierCode have no figure** — so the 74% and 85% references cannot be checked.
- **Cost efficiency: 60/100.** **No rate card is published in any source checked**, so this is a placeholder-for-unknown rather than a sibling-based estimate. Scored at 60 on the methodology's ~$3/$15 anchor as a neutral default for a proprietary flagship-tier SKU with unverified pricing. **Explicitly an estimate, not a measurement** — the sibling rate cards ($2/$6 for Grok 4.5 and 4.6) are the one directional signal available, and they are the reason this is not scored at the unverified floor.
- **Overall Score: 64/100.** (40 + 66 + 88 + 68 + 58) / 5 = 64 → **64**. Recommendation: a **knowledge model that cannot act** — GPQA Diamond 91.4%, IFBench 81.3%, AA-Omniscience index 18.0 and the only 1M window in the Grok 4.x line, against **AA Agentic Index 17.2%, Terminal-Bench 2.1 41.9% and AA-LCR 64.3%**. It is the cheapest way into Grok's knowledge profile and the worst way to get agentic work done. **Prefer Grok 4.5 or 4.6 for anything involving tool execution**, and note that this model's evidence base is unusually *clean* — **every one of its 32 rows is independently attributed, with no vendor-run benchmark at all**, which makes it the most trustworthy Grok measurement in this series even though the numbers are the weakest.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research where the central finding is a **provenance fact rather than a capability judgement: BenchLM attributes all 32 of this model's benchmark rows to independent sources (Artificial Analysis, Vals AI, Epoch AI, Gert Labs, ResearchClawBench, Cognition, OpenRouter) with no xAI launch post or vendor-run row anywhere**, making this the best independently-evidenced Grok in this research series. That structure is recorded explicitly because it cuts both ways — the measurements are trustworthy, and the model's own claims are absent entirely. Conflicting figures are listed side by side — GPQA Diamond 91.4% (Vals) / 90.1% [AA]; HLE 35% / 37.2% [AA]; SciCode 47.3% / AA-SciCode 48.3% — rather than averaged. The τ²-bench 97.7% versus AA Agentic Index 17.2% contradiction is stated as the model's defining feature rather than resolved, since the two measure protocol compliance and execution respectively. The third-lowest hallucination rate in this research series (25.0%) is attributed rather than presented bare. Missing benchmarks (Terminal-Bench 4.0, τ³-Banking, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, AutomationBench, ITBench, ARC-AGI, MRCR, AIME, MATH, DeepSWE, SWE-bench Pro, Vibe Code Bench, FrontierCode, CharXiv, ExtractBench, BabyVision, ZeroBench) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [BenchLM — Grok 4.3 benchmark scores (32 rows, 52.89/100, #93/1015)](https://benchlm.ai/models/grok-4-3)
  - [Artificial Analysis — Grok 4.3 (primary independent source; GPQA, HLE, τ²-bench, MMMU-Pro, IFBench)](https://artificialanalysis.ai/models/grok-4-3)
  - [Vals AI — Grok 4.3 leaderboard results (Terminal-Bench 2.1, LiveCodeBench, SWE-bench, GPQA Diamond, MMLU-Pro)](https://www.vals.ai/models/grok_grok-4.3)
  - [Epoch AI — FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [Gert Labs rankings](https://gertlabs.com/rankings)
  - [ResearchClawBench leaderboard](https://internscience.github.io/ResearchClawBench-Home/)
  - [Openrouter — Grok 4.3 benchmarks (GDPval, AA-LCR, CritPt, Omniscience, Design Arena)](https://openrouter.ai/x-ai/grok-4.3/benchmarks)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
  - See also: [`model/grok-4.5/`](grok-4.5.md), [`model/grok-4.6/`](grok-4.6.md), [`model/grok-4.7/`](grok-4.7.md) — the rest of the 4.x line, refreshed earlier in this session
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
