# Grok 4 — findings by Step 5 Preview

- Source: xAI (`xai/grok-4`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4. Now **four generations behind**: Grok 4.6 (66.69) → Grok 4.20 Beta (56.41) → Grok 4.5 (63.03) is false — the correct ordering is 4.6 (66.69), 4.5 (63.03), 4.20 Beta (56.41), 4.3 (52.89), and this at **51.56, #96 of 1,015** with **18 benchmarks**. BenchLM classifies it **Non-Reasoning**, the eleventh such model in this corpus.
- **Short description:** A 2025-era Grok whose defining property is a **128K context window — the smallest in this batch and one-eighth of the current 1M standard**, and the smallest of any xAI model refreshed in this session. Its measured profile is genuinely mid-tier and unusually balanced for its rank: **AA-GPQA Diamond 87.7%, AA MMLU-Pro 86.6%, AA AIME 2025 92.7%, AA MATH-500 99.0%, AA LiveCodeBench 81.9%, AA-IFBench 53.7%** — against **CritPt 2.0%, AA-HLE 26.7%, AA-LCR 68.0% and only two agentic rows.**
- **Provider / access:** xAI's own API, Cloudflare, Vercel AI Gateway, OpenRouter, and OpenCode Zen. No Free ID. Proprietary, closed weights.
- **Release / knowledge:** release date not restated; Grok 4 is xAI's 2025 flagship tier. **Knowledge cutoff not disclosed.**
- **IDs:** `xai/grok-4`; `grok-4` (BenchLM canonical); `x-ai/grok-4` (Openrouter).
- **Context window:** **128,000 tokens** (BenchLM) — the smallest in this batch, and the binding constraint on this model's ranking.
- **Modalities:** **text and image in; text out** (AA-MMMU-Pro 68.8% is the only visual row).
- **Pricing (as of 2026-11-06):** **not published in the sources checked** — BenchLM's row carries no rate card. Scored conservatively and flagged as unverified.
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

**No xAI launch post or model card appears in BenchLM's attribution for this model** — every row is attributed to Artificial Analysis, Gert Labs, the React Native Evals leaderboard or Openrouter. So, as with Grok 4.3, GPT-5.1, Grok 4.1 Fast and GPT-5.2-Codex, **this is a fully independently-evidenced model with no vendor-run rows at all.** 18 benchmarks total.

Agent / tool use — **very thin**:

- **τ²-bench: 74.9%** [AA]; **Gert Labs: 42.34%**
- **Terminal-Bench (all harnesses), τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA, AA Agentic Index: no verified public score found** — so **all three of the methodology's agentic frontier references are unmeasured and no composite exists**

Reasoning / knowledge — **solid mid-tier, with a good reliability profile for its rank**:

- **AA-GPQA Diamond: 87.7%** [AA] — 2.3 points under the 90%+ reference
- **AA MMLU-Pro: 86.6%**; **AA Global-MMLU-Lite: 89.5%** — the strongest knowledge figures here
- **AA-HLE: 26.7%** — 13.3 points under the 40%+ reference
- **AA-Omniscience: index 2.1, accuracy 40.5%, hallucination rate 64.5%** — a **positive index**, meaning more correct than incorrect answers, on a 64.5% hallucination rate
- **AA Intelligence Index: 22.5%**; **AA-LCR: 68.0%** — the second-weakest AA-LCR in this batch; **CritPt: 2.0%** — near-floor
- **AA-IFBench: 53.7%** — mid instruction following
- **AA AIME 2025: 92.7%**; **AA MATH-500: 99.0%** — saturating benchmarks, but genuinely strong figures
- **ARC-AGI, MRCR, FrontierMath: no verified public score found**

Coding — **mid, with a real mobile data point**:

- **AA LiveCodeBench: 81.9%** — the strongest coding figure
- **React Native Evals: 72.6%** — a genuine mobile-coding data point, one of few in this corpus
- **SWE-bench (all variants), DeepSWE, AA-SciCode, AA Coding Index, Vibe Code Bench, Terminal-Bench, FrontierCode: no verified public score found** — so the 85%, 74%, 70% and 55% references are all unmeasured

Multimodal (image-in):

- **AA-MMMU-Pro: 68.8%** — the only visual row
- **CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision, Design Arena: no verified public score found**

### Normalized scores (1–100)

- **Tool use: 50/100.** At the methodology's mid band's lower edge. τ²-bench 74.9% and Gert Labs 42.34% are the only two agentic figures in the entire evidence base, and neither is strong. **Terminal-Bench on every harness, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA and the AA Agentic Index have no measurement at all** — so all three frontier references are unmeasured and no composite exists. Scored at 50 rather than below because τ²-bench 74.9% is at least a mid-tier protocol result.
- **Reasoning: 62/100.** Mid-band. **AA-GPQA Diamond 87.7% is only 2.3 points under the 90%+ reference, AA MMLU-Pro 86.6% and AA Global-MMLU-Lite 89.5% are strong knowledge figures, and the reliability profile is genuinely good for the rank: AA-Omniscience index 2.1 (positive) with 64.5% hallucination.** Capped by **AA-HLE 26.7% (13.3 under the 40% reference), CritPt 2.0% (near-floor), AA Intelligence Index 22.5%, AA-LCR 68.0% (second-weakest in this batch), AA-IFBench 53.7%, and the missing ARC-AGI, MRCR and FrontierMath**. The strong-competition-maths-and-exams against collapsed-depth pattern is consistent with BenchLM's **Non-Reasoning** classification.
- **Context window: 70/100.** **128,000 tokens** places it below the methodology's 200K tier boundary, and it is the smallest window of any model refreshed in this session — one-eighth of the current standard. Scored at 70, the 128K tier's floor, on the strength of **AA-LCR 68.0%**, which is weak but non-zero. Held at 70 rather than higher because **AA-LCR is the second-weakest in this batch**, no MRCR figure exists, and no max-output limit is published. **This is the single largest constraint on the model's ranking and the clearest reason to prefer a 4.x successor.**
- **Multimodal: 58/100.** Text + image in with text out, at the bottom of the methodology's 60–70 band and marginally below it. **AA-MMMU-Pro 68.8% is the only visual figure and it is weak**, and **CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision and Design Arena have no measurement** — so the modality claim rests on a single poor row.
- **Coding: 62/100.** Mid-band. **AA LiveCodeBench 81.9% is a strong competitive-programming figure and React Native Evals 72.6% is a genuine mobile-coding data point** — one of only a handful in this research series. Capped by the **total absence of SWE-bench Verified, SWE-bench Pro, DeepSWE, AA-SciCode, the AA Coding Index, Vibe Code Bench, Terminal-Bench and FrontierCode** — so the 85%, 74%, 70% and 55% references cannot be checked and coding rests on two benchmarks.
- **Cost efficiency: 60/100.** **No rate card is published in any source checked**, so this is a placeholder-for-unknown rather than a sibling-based estimate. Scored at 60 on the methodology's ~$3/$15 anchor as a neutral default for a proprietary xAI SKU with unverified pricing. **Explicitly an estimate, not a measurement** — the mitigating fact is the 128K window keeping prompt costs down, but an xAI flagship-tier rate card is historically near the top of the market, which is why this is not scored at the unverified floor.
- **Overall Score: 60.4/100.** (50 + 62 + 70 + 58 + 62 + 60) / 5 = 60.4 → **60**. Recommendation: **a legacy Grok with two genuinely useful figures — AA-GPQA Diamond 87.7% and AA LiveCodeBench 81.9% — and a decisive constraint: a 128K window, the smallest of any model refreshed in this session.** Its knowledge figures (MMLU-Pro 86.6%, Global-MMLU-Lite 89.5%) and its positive AA-Omniscience index are respectable, but **CritPt 2.0%, AA-HLE 26.7% and AA-LCR 68.0%** show the depth and long-context deficits clearly, and **not one coding or agentic frontier reference is measured**. It is dominated on every axis by Grok 4.3 (52.89 — same BenchLM neighbourhood but 1M context), Grok 4.5 (63.03) and Grok 4.6 (66.69), all of which carry larger windows at presumably similar prices. Migrate unless pinned to `xai/grok-4`.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research where, as with Grok 4.3, GPT-5.1, Grok 4.1 Fast and GPT-5.2-Codex, **the central provenance finding is structural: BenchLM attributes all 18 of this model's rows to independent sources (Artificial Analysis, Gert Labs, the React Native Evals leaderboard, Openrouter) with no xAI launch post or model card anywhere**, making this a fully independently-evidenced model with no vendor-run rows. That structure is recorded because it cuts both ways — the measurements are trustworthy and the model's own claims are absent entirely. The 18-benchmark evidence base is stated plainly rather than hedged. The **batch-smallest context window (128K)** is surfaced in the model card and carried into the recommendation as the single largest constraint, and the **near-floor CritPt (2.0%)** is attributed rather than presented bare. The strong-competition-maths-and-exams against collapsed-depth pattern is stated as consistent with BenchLM's **Non-Reasoning** classification. The unpublished rate card is surfaced with its effect on the cost score stated explicitly. Missing benchmarks (Terminal-Bench on all harnesses, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA, AA Agentic Index, ARC-AGI, MRCR, FrontierMath, SWE-bench Verified, SWE-bench Pro, DeepSWE, AA-SciCode, AA Coding Index, Vibe Code Bench, FrontierCode, and every visual benchmark except MMMU-Pro) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [BenchLM — Grok 4 benchmark scores (18 rows, 51.56/100, #96/1015)](https://benchlm.ai/models/grok-4)
  - [Artificial Analysis — Grok 4 (primary independent source)](https://artificialanalysis.ai/models/grok-4)
  - [Artificial Analysis — gpqa-diamond leaderboard](https://artificialanalysis.ai/evaluations/gpqa-diamond)
  - [Artificial Analysis — mmlu-pro leaderboard](https://artificialanalysis.ai/evaluations/mmlu-pro)
  - [Artificial Analysis — global-mmlu-lite leaderboard](https://artificialanalysis.ai/evaluations/global-mmlu-lite)
  - [Artificial Analysis — aime-2025 leaderboard](https://artificialanalysis.ai/evaluations/aime-2025)
  - [Artificial Analysis — math-500 leaderboard](https://artificialanalysis.ai/evaluations/math-500)
  - [Artificial Analysis — livecodebench leaderboard](https://artificialanalysis.ai/evaluations/livecodebench)
  - [Artificial Analysis — omniscience leaderboard](https://artificialanalysis.ai/evaluations/omniscience)
  - [Artificial Analysis — critpt leaderboard](https://artificialanalysis.ai/evaluations/critpt)
  - [Artificial Analysis — lcr leaderboard](https://artificialanalysis.ai/evaluations/lcr)
  - [Artificial Analysis — humanitys-last-exam leaderboard](https://artificialanalysis.ai/evaluations/humanitys-last-exam)
  - [Artificial Analysis — tau2-bench leaderboard](https://artificialanalysis.ai/evaluations/tau2-bench)
  - [Artificial Analysis — ifbench leaderboard](https://artificialanalysis.ai/evaluations/ifbench)
  - [Artificial Analysis — artificial-analysis-intelligence-index leaderboard](https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index)
  - [React Native Evals leaderboard (source of the 72.6%)](https://rn-evals.vercel.app/)
  - [Gert Labs rankings](https://gertlabs.com/rankings)
  - [Openrouter — Grok 4 benchmarks](https://openrouter.ai/x-ai/grok-4/benchmarks)
  - See also: [`model/grok-4.3/`](grok-4.3.md) (52.89, 1M context), [`model/grok-4.5/`](grok-4.5.md) (63.03), [`model/grok-4.6/`](grok-4.6.md) (66.69) — the successors this report recommends migrating to, all refreshed earlier in this session
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
