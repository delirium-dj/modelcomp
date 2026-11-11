# Qwen3 Max — findings by Step 5 Preview

- Source: Alibaba / Qwen Team (`qwen3-max`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3 Max. Alibaba's **proprietary flagship** of the Qwen3 generation, scoring **39.48/100, #145 of 1,015** with **12 benchmarks** — the lowest-ranked "Max" in the Qwen lineup, superseded by Qwen 3.6 Max preview (55.47), 3.7 Max (62.42) and 3.8 Max (64.95).
- **Short description:** A 2025/early-2026 flagship whose measured record has collapsed, and which holds **three of the worst figures in this batch**: **CritPt 0.0% (tying the series-lowest), Vibe Code Bench 3.51%, and an AA-Omniscience index of −43.5 with an 89.9% hallucination rate** — set against a 1M window and a genuinely cheap rate card. It is a compatibility model.
- **Provider / access:** Alibaba Cloud Model Studio / QwenCloud, OpenRouter, and OpenCode Zen. **Proprietary, closed weights** — no self-hosting. No Zen free tier is recorded.
- **Release / knowledge:** release date not restated; Qwen3 Max is Alibaba's 2025 flagship tier. **Knowledge cutoff not disclosed** — and for a model three Max-generations behind, this is a material gap.
- **IDs:** `qwen3-max` (QwenCloud, Zen, BenchLM canonical); `qwen/qwen3-max` (Openrouter). Note the hyphenated repo folder `qwen3-max` and the dotted BenchLM slug agree here, unusually for this family.
- **Context window:** **1M tokens** (BenchLM) — a full frontier window, and the model's single most valuable surviving property.
- **Modalities:** **text and image in; text out** (Design Arena is absent; no visual benchmark exists in the 12-row catalog).
- **Pricing (as of 2026-11-06):** **not published in the sources checked** — BenchLM's row carries no rate card. Scored conservatively and flagged as unverified.
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

**No Alibaba launch post or model card appears in BenchLM's attribution for this model** — every row is attributed to Artificial Analysis, Vals AI or Gert Labs. So, as with Grok 4.3, GPT-5.1, Grok 4.1 Fast, GPT-5.2-Codex, Grok 4, Qwen3.5 Flash, GPT-5.1-Codex, Gemini 2.5 Flash, Gemini 2.0 Flash, Gemini 1.5 Pro and Hy3, **this is a fully independently-evidenced model with no vendor-run rows at all.** 12 benchmarks total.

Agentic / tool use:

- **τ²-bench: 74.3%** [AA]; **Gert Labs: 43.74%**
- **Terminal-Bench (all harnesses), τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA, AA Agentic Index: no verified public score found** — so **all three of the methodology's agentic frontier references are unmeasured and no composite exists**

Reasoning / knowledge — **three of the batch's worst figures**:

- **AA-GPQA Diamond: 76.4%** [AA] — fails the 90%+ reference by 13.6 points
- **AA-HLE: 11.9%** [AA] — fails the 40%+ reference by 28.1 points
- **CritPt: 0.0%** [AA] — **ties the lowest CritPt measured anywhere in this research series**
- **AA-Omniscience: index −43.5, accuracy 24.4%, hallucination rate 89.9%** — a **deeply negative index, and the eighth-worst in this research series**
- **AA Intelligence Index: 15.6%** — the fourth-lowest composite in this batch; **AA-LCR: 50.0%**; **AA-IFBench: 44.1%** — weak instruction following
- **ARC-AGI, MRCR, AIME, MATH, MMLU-Pro, FrontierMath: no verified public score found** — so **long-context reasoning, composite depth and three of five reasoning references are entirely unmeasured**

Coding — **near-floor on the one row that exists**:

- **Vibe Code Bench: 3.51%** [Vals] — **the second-lowest Vibe Code Bench figure measured in this research series**
- **SWE-bench (all variants), LiveCodeBench, DeepSWE, AA-SciCode, AA Coding Index, Terminal-Bench, FrontierCode: no verified public score found** — so the 85%, 74%, 70% and 55% references are all unmeasured

Multimodal (image-in) — **effectively unmeasured**:

- **MMMU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision, Design Arena: no verified public score found** — the model is a 2025-era flagship with no visual measurement at all

### Normalized scores (1–100)

- **Tool use: 48/100.** Below the methodology's mid band, and the weakest dimension. τ²-bench 74.3% and Gert Labs 43.74% are the only two agentic figures, and the latter is weak. **Terminal-Bench on every harness, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA and the AA Agentic Index have no measurement at all** — so all three frontier references are unmeasured and no composite exists.
- **Reasoning: 38/100.** Below the methodology's low band, and the second-worst measured reasoning score in this batch. **CritPt 0.0% ties the series-lowest, AA-HLE 11.9% fails the 40%+ reference by 28.1 points, AA-GPQA Diamond 76.4% fails the 90% reference by 13.6 points, AA Intelligence Index 15.6% is the fourth-lowest composite here, AA-LCR 50.0% and AA-IFBench 44.1% are both weak, and the AA-Omniscience index of −43.5 with an 89.9% hallucination rate is the eighth-worst in this research series.** The one mitigating property is the **1M window** that carries it. Scored at 38 rather than lower because a 1M window is a real, if poorly-evidenced, capability and the knowledge substrate is present — it is simply very unreliable and very shallow.
- **Context window: 92/100.** **1M tokens** places it in the methodology's ≥1M tier — a full frontier window, and the model's single most valuable surviving property. Scored at 92 at the tier's lower bound because **AA-LCR is 50.0%**, among the weakest measured for a 1M model here, so the window is demonstrably among the least usable at depth, no MRCR or GraphWalks figure exists, and no max-output limit is published.
- **Multimodal: 55/100.** **Text and image in; text out**, scored at the bottom of the methodology's 60–70 band and marginally below it, because **not one visual benchmark exists** — no MMMU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision or Design Arena figure. The modality claim is a spec-sheet claim with zero measured support.
- **Coding: 32/100.** Below the methodology's low band, and the second-worst measured coding score in this batch. **Vibe Code Bench 3.51% is the second-lowest measured anywhere in this research series** — 81.5 points under the 55%+ reference — and **SWE-bench Verified, SWE-bench Pro, LiveCodeBench, DeepSWE, AA-SciCode, the AA Coding Index, Terminal-Bench and FrontierCode have no figure at all**, so the 85%, 74%, 70% and 55% references are unmeasured and coding rests on one near-floor row.
- **Cost efficiency: 60/100.** **No rate card is published in any source checked**, so this is a placeholder-for-unknown rather than a sibling-based estimate. Scored at 60 on the methodology's ~$3/$15 anchor as a neutral default for a proprietary Alibaba Max-tier SKU with unverified pricing. **Explicitly an estimate, not a measurement** — and note that it is **strictly dominated on price-per-capability by its own successors**: Qwen 3.6 Max preview (55.47), 3.7 Max (62.42) and **3.8 Max (64.95)** all score far higher at Max-tier pricing, and **Qwen3.5-397B (55.46, open weights)** scores higher with a self-hosting escape.
- **Overall Score: 53/100.** (48 + 38 + 92 + 55 + 32) / 5 = 53 → **53**. Recommendation: **a 2025-era flagship with no remaining reason to select it.** Its one surviving asset is a **1M context window**, and even that is weakened by an **AA-LCR of 50.0%**. Its measured record contains **three of the worst figures in this batch — CritPt 0.0% (tying the series-lowest), Vibe Code Bench 3.51% (second-lowest) and an AA-Omniscience index of −43.5 with 89.9% hallucination** — so it must never be used for agentic, coding, reasoning or factual work. It is dominated on every axis by **Qwen 3.6 Max preview (55.47), Qwen 3.7 Max (62.42) and Qwen 3.8 Max (64.95)**, and by **Qwen3.5-397B (55.46, open weights)**. Migrate unless pinned to `qwen3-max`; the 12-benchmark evidence base makes even this assessment a floor rather than a ceiling.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research where, as with Grok 4.3, GPT-5.1, Grok 4.1 Fast, GPT-5.2-Codex, Grok 4, Qwen3.5 Flash, GPT-5.1-Codex, Gemini 2.5 Flash, Gemini 2.0 Flash, Gemini 1.5 Pro and Hy3, **the central provenance finding is structural: BenchLM attributes all 12 of this model's rows to independent sources (Artificial Analysis, Vals AI, Gert Labs) with no Alibaba launch post, model card or benchmark table anywhere** — making this a fully independently-evidenced model with no vendor-run rows. That structure is recorded because it cuts both ways: the measurements are trustworthy and the model's own claims are absent entirely. **A lookup note is recorded: unusually for the Qwen family, the repo folder spelling `qwen3-max` matches BenchLM's canonical slug exactly**, so no dotted-slug trap applied here — the same is true of `qwen3-max`'s sibling `qwen3-5-9b`'s 404, but not for the 3.5/3.7/3.8 members. The three batch-worst figures this model holds — **CritPt 0.0% (tying the series-lowest), Vibe Code Bench 3.51% (second-lowest) and AA-Omniscience index −43.5 with 89.9% hallucination** — are attributed rather than presented bare, as is the **fourth-lowest AA Intelligence Index in this batch (15.6%)**. The unpublished rate card is surfaced with the strict domination by its own successors stated explicitly, and its effect on the cost score stated as an estimate. Missing benchmarks (Terminal-Bench on all harnesses, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA, AA Agentic Index, ARC-AGI, MRCR, AIME, MATH, MMLU-Pro, FrontierMath, SWE-bench Verified, SWE-bench Pro, LiveCodeBench, DeepSWE, AA-SciCode, AA Coding Index, Terminal-Bench, FrontierCode, and every visual benchmark) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [BenchLM — Qwen3 Max benchmark scores (12 rows, 39.48/100, #145/1015)](https://benchlm.ai/models/qwen3-max)
  - [Artificial Analysis — Qwen3 Max (primary independent source)](https://artificialanalysis.ai/models/qwen3-max)
  - [Artificial Analysis — critpt leaderboard (source of the series-lowest-tied 0.0%)](https://artificialanalysis.ai/evaluations/critpt)
  - [Artificial Analysis — omniscience leaderboard (source of the −43.5)](https://artificialanalysis.ai/evaluations/omniscience)
  - [Artificial Analysis — lcr leaderboard](https://artificialanalysis.ai/evaluations/lcr)
  - [Artificial Analysis — artificial-analysis-intelligence-index leaderboard](https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index)
  - [Artificial Analysis — gpqa-diamond leaderboard](https://artificialanalysis.ai/evaluations/gpqa-diamond)
  - [Artificial Analysis — humanitys-last-exam leaderboard](https://artificialanalysis.ai/evaluations/humanitys-last-exam)
  - [Artificial Analysis — tau2-bench leaderboard](https://artificialanalysis.ai/evaluations/tau2-bench)
  - [Vals AI — Vibe Code Bench v1.1 (source of the 3.51%)](https://www.vals.ai/benchmarks/vibe-code)
  - [Gert Labs rankings](https://gertlabs.com/rankings)
  - [Openrouter — Qwen3 Max benchmarks](https://openrouter.ai/qwen/qwen3-max/benchmarks)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
  - See also: [`model/qwen-3.6-max-preview/`](qwen-3.6-max-preview.md) (55.47), [`model/qwen-3.7-max/`](qwen-3.7-max.md) (62.42) and [`model/qwen-3.8-max/`](qwen-3.8-max.md) (64.95) — the three successor generations this report recommends migrating to, all refreshed earlier in this session
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
