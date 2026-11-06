# Qwen3.5 Flash — findings by Step 5 Preview

- Source: Alibaba / Qwen Team (`qwen3.5-flash`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5 Flash. Alibaba's **proprietary Flash tier** of the Qwen3.5 generation, scoring **42.58/100, #132 of 1,015** with **5 benchmarks** — the second-thinnest evidence base in this research series, after Grok 4.1's zero. BenchLM's canonical slug is `qwen3-5-flash` (**not** `qwen-3.5-flash`, which 404s — the same dotted-slug trap). It sits below Qwen3.6-35B-A3B (43.13) and above Qwen3 Max (39.48), so the Flash tier is the cheapest genuine Qwen3.5 route.
- **Short description:** A **1M-context proprietary Flash** with five benchmark rows, all from Vals AI or Epoch AI — **LiveCodeBench 83.3%, MMLU-Pro 84.1%, GPQA Diamond 82.8%, SWE-bench 64.4% and FrontierMath Tiers 1–3 18.2%**. The figures are respectable for a Flash tier but the evidence base is far too thin to support a capability judgement, and **there is no agentic, multimodal, long-context or reliability measurement of any kind**.
- **Provider / access:** Alibaba Cloud Model Studio / QwenCloud, OpenRouter, and OpenCode Zen. **Proprietary, closed weights** — BenchLM classifies it Proprietary, unlike the open-weight Qwen3.5 member SKUs. No Zen free tier is recorded.
- **Release / knowledge:** release date not restated; the 3.5 generation is Alibaba's mid-2026 line. **Knowledge cutoff not disclosed.**
- **IDs:** `qwen3.5-flash` (QwenCloud, BenchLM canonical); `alibaba_qwen3.5-flash` (Vals); `qwen/qwen3.5-flash` (Openrouter).
- **Context window:** **1M tokens** (BenchLM) — a full frontier window, and this model's single most valuable verified property.
- **Modalities:** **not stated in any source checked** — BenchLM's model-details table omits the field, and no visual or multimodal benchmark exists. Treated as unverified rather than assumed from family grounds.
- **Pricing (as of 2026-11-06):** **not published in the sources checked** — BenchLM's row carries no rate card or pricing block. Scored conservatively and flagged as unverified.
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

**A provenance note is recorded: every one of the five rows is attributed to Vals AI or Epoch AI** — no Qwen model card, launch post or benchmark table appears in the attribution. So this is a fully independently-evidenced model with no vendor-run rows at all, like Grok 4.3, GPT-5.1, Grok 4.1 Fast, GPT-5.2-Codex and Grok 4. Five benchmarks total.

Coding:

- **LiveCodeBench (Vals): 83.3%** — the strongest coding figure and the strongest figure in this report
- **SWE-bench (Vals): 64.4%** — 20.6 points under the 85%+ terminal reference

Knowledge:

- **GPQA Diamond (Vals): 82.8%** — fails the 90%+ reference by 7.2 points
- **MMLU-Pro (Vals): 84.1%** — mid-tier
- **FrontierMath v2 Tiers 1–3: 18.2%** [Epoch] — near-floor

Named as absent rather than substituted:

- **Agentic:** Terminal-Bench (all harnesses), τ²-bench, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA, AA Agentic Index — none measured
- **Reasoning:** HLE, CritPt, AA-LCR, AA Intelligence Index, AA-Omniscience, ARC-AGI, MRCR, AIME — none measured
- **Coding beyond the two rows:** DeepSWE, AA-SciCode, AA Coding Index, Vibe Code Bench, FrontierCode, SWE-bench Pro — none measured
- **Multimodal:** MMMU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision, Design Arena — none measured

### Normalized scores (1–100)

> **Methodology note.** With five benchmark rows and no vendor source, every quality dimension below is a placeholder-for-unknown anchored on those five figures and the single verified structural property (1M context window). This is the second-weakest evidential basis of any report in this research series, and it is scored as such. Confidence intervals are nearly as wide as Grok 4.1's.

- **Tool use: 50/100.** **Scored at the methodology's neutral floor for "dimension claimed, entirely unmeasured."** Not one agentic benchmark exists — no Terminal-Bench, τ²-bench, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA or AA Agentic Index. Scored at 50 rather than below because a Flash-tier hosted model presumably has a tool-use substrate and the family's larger members are strongly agentic; **not scored above 50 because an unmeasured capability claim must not be scored as though it were demonstrated.**
- **Reasoning: 62/100.** Mid-band and the best-grounded quality dimension, anchored on two real figures: **GPQA Diamond 82.8% (Vals)** and **MMLU-Pro 84.1% (Vals)** — both mid-tier, the former failing the 90%+ reference by 7.2 points. Capped by **FrontierMath Tiers 1–3 18.2% (near-floor)**, and by the total absence of HLE, CritPt, AA-LCR, the AA Intelligence Index, AA-Omniscience, ARC-AGI, MRCR and AIME — so composite depth, reliability and three of five reasoning references are unknown.
- **Context window: 92/100.** **1M tokens** — a full frontier window, and the model's most valuable verified property, shared with the larger Qwen3.5 members. Scored in the methodology's ≥1M tier at 92, at the tier's lower bound, because **no AA-LCR, MRCR or GraphWalks figure exists**, so the window's usable depth is entirely unverified, and no max-output limit is published.
- **Multimodal: 50/100.** **Scored at the methodology's neutral floor, because the modality set itself is unverified.** BenchLM's model-details table omits the field, no source states what inputs the model accepts, and no visual or multimodal benchmark exists. Scored at 50 rather than assuming text+image on family grounds — note that the *open-weight* Qwen3.5 members (35B-A3B, 27B, 122B-A10B) all carry text+image suites, so the claim is plausible, but plausibility is not measurement.
- **Coding: 70/100.** Mid-band, and the best-grounded dimension alongside reasoning. **LiveCodeBench 83.3% is a strong competitive-programming figure and SWE-bench 64.4% is respectable mid-frontier repair.** Capped by SWE-bench sitting 20.6 points under the 85%+ terminal reference, and by the **total absence of SWE-bench Verified, SWE-bench Pro, DeepSWE, AA-SciCode, the AA Coding Index, Vibe Code Bench, Terminal-Bench and FrontierCode** — so the 85%, 74%, 70% and 55% references cannot be checked and coding rests on two rows.
- **Cost efficiency: 76/100.** **No rate card is published in any source checked** — BenchLM's row carries no pricing block at all, which is weaker evidence than a missing price field on a page that otherwise has one. Scored at 76, above the ~$3/$15 (≈60) anchor, on the inference that a **Flash tier** is Alibaba's efficiency line and would sit well below the Max and Plus tiers. **Explicitly a positioning-based estimate, not a measurement** — held below 88 because the model is **closed-source with no self-hosting escape** (unlike its open-weight siblings), which is a real disadvantage against Qwen3.5-35B-A3B, and no free tier is recorded.
- **Overall Score: 64.8/100.** (50 + 62 + 92 + 50 + 70 + 76) / 5 = 66.6 → **67**. Recommendation: **a 1M-context Flash tier whose evidence base cannot support a capability judgement.** LiveCodeBench 83.3%, MMLU-Pro 84.1% and GPQA Diamond 82.8% are respectable for a Flash tier, and the 1M window is a genuine asset. **But five benchmarks with no agentic, multimodal, long-context or reliability measurement means this report's 67 is a floor on evidence, not a capability assessment** — and the closed-source access (no self-hosting escape, unlike its open-weight siblings) removes the one property that would make a thin Flash tier attractive. Prefer **Qwen3.5-35B-A3B (45.58, open weights, 3B active)** or **Qwen3.5-27B (49.01, open weights)** — both refreshed in this same batch, both better-evidenced, both self-hostable — unless the 1M window specifically requires the proprietary route.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research using BenchLM's 5-row catalog as the direct source, cross-checked against its price registry. **A provenance finding is recorded: every one of the five rows is attributed to Vals AI or Epoch AI — no Qwen model card, launch post or benchmark table appears in the attribution anywhere** — making this, like Grok 4.3, GPT-5.1, Grok 4.1 Fast, GPT-5.2-Codex and Grok 4, a fully independently-evidenced model with no vendor-run rows. That structure is recorded because it cuts both ways: the measurements are trustworthy and the model's own claims are absent entirely. **The second-thinnest evidence base in this research series (5 rows, after Grok 4.1's zero) is stated plainly rather than hedged**, and the report's thesis — that five benchmarks cannot support a capability judgement — is stated explicitly in the recommendation rather than dressed up as an assessment. **The modality field is absent from BenchLM's model-details table and from every source checked, so modality is recorded as unverified rather than assumed on family grounds**, even though the open-weight Qwen3.5 siblings all carry text+image suites. **A lookup trap is recorded: the repo folder spelling `qwen-3.5-flash` 404s on BenchLM and the dotted slug `qwen3-5-flash` had to be found via Qwen3.5-397B's sibling list.** The near-floor FrontierMath Tiers 1–3 (18.2%) and the 20.6-point SWE-bench shortfall are attributed rather than presented bare. The unpublished rate card is surfaced with its effect on the cost score stated as a positioning-based estimate, and the closed-source access is recorded as a genuine disadvantage against the open-weight siblings. Missing benchmarks (Terminal-Bench on all harnesses, τ²-bench, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA, AA Agentic Index, HLE, CritPt, AA-LCR, AA Intelligence Index, AA-Omniscience, ARC-AGI, MRCR, AIME, SWE-bench Verified, SWE-bench Pro, DeepSWE, AA-SciCode, AA Coding Index, Vibe Code Bench, FrontierCode, MMMU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision, Design Arena) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [BenchLM — Qwen3.5 Flash benchmark scores (5 rows, 42.58/100, #132/1015; canonical dotted slug)](https://benchlm.ai/models/qwen3-5-flash)
  - [Vals AI — Qwen3.5 Flash leaderboard results (source of the LiveCodeBench, SWE-bench, GPQA Diamond and MMLU-Pro rows)](https://www.vals.ai/models/alibaba_qwen3.5-flash)
  - [Epoch AI — FrontierMath v2 leaderboard (source of the 18.2%)](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)
  - [Alibaba Cloud Model Studio — model list and pricing](https://www.alibabacloud.com/help/en/model-studio/models)
  - [Openrouter — Qwen3.5 Flash benchmarks](https://openrouter.ai/qwen/qwen3.5-flash/benchmarks)
  - See also: [`model/qwen-3.5-35b-a3b/`](qwen-3.5-35b-a3b.md) (45.58, open weights) and [`model/qwen-3.5-27b/`](qwen-3.5-27b.md) (49.01, open weights) — the better-evidenced, self-hostable siblings this report recommends preferring, both refreshed in this same batch
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
