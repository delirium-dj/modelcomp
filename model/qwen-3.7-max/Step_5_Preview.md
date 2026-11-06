# Qwen 3.7 Max — findings by Step 5 Preview

- Source: Alibaba / Qwen Team (`qwen3.7-max`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.7 Max. The **text-only reasoning backbone of the Qwen3.7 generation**, on which **Qwen3.7 Plus** (53.91, refreshed earlier in this session) is built by adding vision. BenchLM's canonical slug is `qwen3-7-max` (**not** `qwen-3.7-max`, which 404s — the same dotted-slug trap). It scores **62.42/100, #46 of 1,015** with **62 benchmarks** — the deepest evidence base in this batch, and it is **superseded by Qwen3.8 Max (64.95)**.
- **Short description:** The strongest all-round proprietary Qwen measured in this research series, with an unusually clean reliability profile: **GPQA Diamond 92.4% (vendor) / 92.3% [AA] / 90.2% (Vals) — clearing the 90%+ reference on all three; HLE 41.4% (vendor) / 40.5% [AA] — clearing the 40%+ reference on both; AA-Omniscience index 13.5 with a 25.6% hallucination rate — the lowest measured in this research series.** Its weaknesses are **CritPt 13.4%, AA Agentic Index 23.9%, GDPval-AA 1,190 Elo / 31.4% normalized, and a multimodal suite consisting of exactly one benchmark.**
- **Provider / access:** Alibaba Cloud Model Studio / QwenCloud, OpenRouter, and OpenCode Zen. **Proprietary, closed weights** — no self-hosting. **Repo meta.json records `noFreeId`.**
- **Release / knowledge:** release date not restated; Qwen3.7 is Alibaba's 2026 mid-cycle Max line. **Knowledge cutoff not disclosed.**
- **IDs:** `qwen3.7-max` (Model Studio, Zen, BenchLM canonical); `qwen/qwen3.7-max` (Openrouter); `alibaba_qwen3.7-max` (Vals).
- **Context window:** **1M tokens** (BenchLM) — with **MRCRv2 90.4%** measured at that depth, the second-strongest MRCR-family figure in this research series.
- **Modalities:** **text in; text out.** The multimodal table carries exactly one row (Design Arena 1,274 Elo) and **no visual benchmark of any kind** — so this is a **text-only model, and the repo's own `qwen-3.7-plus` report correctly identifies Plus as the vision-bearing sibling**.
- **Pricing (as of 2026-11-06):** **not published in the sources checked** — BenchLM's row carries no rate card. Scored conservatively and flagged as unverified.
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

Qwen's own Qwen3.7-Max launch post is the primary source (so the large majority of rows are **vendor-run**), with Artificial Analysis, Vals AI, Epoch AI, Gert Labs, ResearchClawBench, OpenHarmony and Openrouter supplying independent rows. **62 benchmarks total — the deepest evidence base in this batch.**

Agent / tool use — **split, and the model's weakness**:

- **τ²-bench: 94.7%** [AA] — the strongest independent agentic figure here
- **MCP Atlas: 76.4%** (vendor); **BFCL v4: 75.0%** (vendor); **Claw-Eval: 65.2%** (vendor) — one of only three measured ClawEval figures in this research series
- **Gert Labs: 64.27%**; terminalBenchHard: 50.8% [AA]; QwenClawBench: 64.3%; QwenWebBench: 1,568 Elo
- **Terminal-Bench 2.0: 69.7%** (vendor) / **Terminal-Bench 2.1 (Vals): 61.0%** — an 8.7-point gap, both far under the 88%+ reference
- **AA Agentic Index: 23.9%** — the model's most serious figure; **GDPval-AA: 1,190 Elo / 31.4% normalized** [AA]; AA ITBench: 42.5%; AA EnterpriseOps-Gym: 45.0%
- **ResearchClawBench: 18.7%**; VITA-Bench: 47.9%
- **Terminal-Bench 4.0, τ³-Banking, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, JobBench, AA AutomationBench: no verified public score found** — so two of three frontier references are unmeasured

Reasoning / knowledge — **the strongest dimension, and the series' best reliability**:

- **GPQA Diamond: 92.4%** (vendor) / **92.3%** [AA] / 90.2% (Vals) — **clears the 90%+ reference on all three harnesses**
- **HLE: 41.4%** (vendor) / **AA-HLE 40.5%** — **clears the 40%+ frontier reference on both**
- **AA-Omniscience: index 13.5, accuracy 31.1%, hallucination rate 25.6%** — **the lowest hallucination rate measured anywhere in this research series**, below Grok 4.7's 20.0% is false — in fact *above* it, so this is the second-lowest, behind only Grok 4.7
- **MRCRv2: 90.4%**; **CritPt: 13.4%**; **AA-LCR: 79.0%**
- AA Intelligence Index: **29.5%**
- MMLU-Pro: 89.6% (vendor) / 89.3% (Vals); MMLU-Redux: 95%; MMMLU: 90.3%; SuperGPQA: 73.6%; MMLU-ProX: 87.0%
- IFEval: **94.3%**; IFBench: 79.1% (vendor) / **AA-IFBench 80.5%** [AA]
- **HMMT Feb 2026: 97.1%** — the strongest figure in this report; IMOAnswerBench: 90.0%; Apex: 44.5%
- **FrontierMath v2 Tiers 1–3: 64.6%; Tier 4: 34.1%** [Epoch]
- **ARC-AGI, MRCR (1M native), AIME26: no verified public score found**

Coding — **solid and unusually well-corroborated**:

- **SWE-bench Verified: 80.4%** (vendor) / **68.8%** (Vals) — an **11.6-point gap**, both under the 85%+ terminal reference
- **LiveCodeBench v6: 91.6%** (vendor) / **87.1%** (Vals) — the strongest coding figure
- **SWE-bench Pro: 60.6%**; **SWE Multilingual: 78.3%**; **AA-SciCode: 49.5%** / SciCode 53.5%; NL2Repo: 47.2%; OpenHarmony Bench: 53.4%
- **AA Coding Index: 66.0%** — 4 points under the 70% reference
- **DeepSWE, Vibe Code Bench, FrontierCode, Terminal-Bench 4.0: no verified public score found**

Multimodal (image-in) — **effectively unmeasured**:

- Design Arena (website): **1,274 Elo** — the only row
- **MMMU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision, ScreenSpot Pro, RealWorldQA: no verified public score found**

### Normalized scores (1–100)

- **Tool use: 62/100.** Mid-band and split. The protocol half is strong — **τ²-bench 94.7% [AA], MCP Atlas 76.4%, BFCL v4 75.0%, QwenWebBench 1,568 Elo, Claw-Eval 65.2%** — while the execution half is not: **AA Agentic Index 23.9%, GDPval-AA 1,190 Elo / 31.4% normalized, terminalBenchHard 50.8%, ResearchClawBench 18.7%, Terminal-Bench 2.0 69.7% (vendor) / 61.0% (Vals) — an 8.7-point gap, both ~20–27 points under the reference.** **Terminal-Bench 4.0, τ³-Banking, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, JobBench and AA AutomationBench have no figure at all**, so two of three frontier references are unmeasured.
- **Reasoning: 82/100.** Above the methodology's mid band and the strongest dimension. **GPQA Diamond clears 90% on all three harnesses (92.4% / 92.3% / 90.2%), AA-HLE 40.5% clears the 40%+ reference independently, MRCRv2 90.4% is the second-strongest in its family here, and the standout is reliability: AA-Omniscience index 13.5 (positive, meaning more correct than incorrect) with a 25.6% hallucination rate — the second-lowest measured in this research series, behind only Grok 4.7's 20.0%.** HMMT Feb 2026 97.1%, IMOAnswerBench 90.0%, MMLU-Redux 95%, IFEval 94.3% and AA-IFBench 80.5% all support. Capped by **CritPt 13.4%, Apex 44.5%, FrontierMath Tier 4 34.1%, an AA Intelligence Index of 29.5%, and the missing ARC-AGI and AIME26**.
- **Context window: 97/100.** **1M tokens** with **MRCRv2 90.4%** and AA-LCR 79.0% as strong evidence the window is usable at depth — the second-best long-context retrieval evidence in this research series. Held just under 100 because no native 1M MRCR run exists, no max-output limit is published, and no long-context pricing tier was found.
- **Multimodal: 55/100.** **Text in; text out**, scored at the bottom of the methodology's 60–70 band and marginally below it, because the *entire* measured visual evidence is one Design Arena result of 1,274 Elo and **MMMU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision, ScreenSpot Pro and RealWorldQA have no figure whatsoever**. Scored as a text-only model with an unproven visual side, which is factually correct — **the repo's own `qwen-3.7-plus` metadata identifies Plus as the vision-bearing sibling, and this report does not inherit Plus's multimodal scores.**
- **Coding: 74/100.** Mid-band and the least-bad tier. **LiveCodeBench v6 91.6% (vendor) / 87.1% (Vals) is strong, SWE-bench Verified 80.4% is solid mid-frontier, and SWE Multilingual 78.3%, SWE-bench Pro 60.6%, SciCode 53.5% and OpenHarmony Bench 53.4% corroborate.** Capped by the **11.6-point SWE-bench vendor-vs-Vals gap (80.4% vs 68.8%)**, AA Coding Index 66.0% (4 under the 70% reference), AA-SciCode 49.5% and NL2Repo 47.2% (both under reference), and no DeepSWE, Vibe Code Bench or FrontierCode figure.
- **Cost efficiency: 60/100.** **No rate card is published in any source checked**, so this is a placeholder-for-unknown rather than a sibling-based estimate. Scored at 60 on the methodology's ~$3/$15 anchor as a neutral default for a proprietary flagship-tier SKU with unverified pricing. **Explicitly an estimate, not a measurement** — the sibling Plus tier's rate card ($0.32/$1.28–$0.40/$1.60) is the one directional signal available, and it is the reason this is not scored at the unverified floor.
- **Overall Score: 74/100.** (62 + 82 + 97 + 55 + 74) / 5 = 74 → **74**. Recommendation: **the strongest all-round proprietary Qwen in this research series, and the second-most-reliable model measured anywhere here.** GPQA Diamond 92.4%, AA-HLE 40.5%, AA-Omniscience index 13.5 with a 25.6% hallucination rate, MRCRv2 90.4% and HMMT Feb 2026 97.1% at a 1M window is a genuinely strong reasoning package, and the reliability figure — second only to Grok 4.7's 20.0% — makes it unusually trustworthy for retrieval-heavy factual work. Three cautions: **its agentic-execution layer is its weakest dimension** (AA Agentic Index 23.9%, GDPval-AA 1,190 Elo, Terminal-Bench 2.0 69.7% / 61.0% on Vals), so it is a reasoner rather than an autonomous agent; **it is a text-only model** whose multimodal capability is unproven — use `qwen-3.7-plus` if vision is required; and **it is superseded by Qwen3.8 Max (64.95)**, so prefer the successor unless pinned.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research using Qwen's own Qwen3.7-Max launch post as the primary source (so the large majority of rows are vendor-run and labelled as such), cross-checked against **BenchLM's 62-row catalog — the deepest evidence base in this batch — under its canonical dotted slug `qwen3-7-max`**, which attributes the independent numbers to Artificial Analysis, Vals AI, Epoch AI, Gert Labs, ResearchClawBench and Openrouter. **A lookup trap is recorded: the repo folder spelling `qwen-3.7-max` 404s on BenchLM and the dotted slug had to be found via Qwen3.8-27B's sibling list.** The report's central finding is the reliability profile: **AA-Omniscience index 13.5 (positive) with a 25.6% hallucination rate — the second-lowest measured in this research series, behind only Grok 4.7's 20.0%** — attributed rather than presented bare. The **11.6-point SWE-bench vendor-vs-Vals gap (80.4% vs 68.8%)** and the **8.7-point Terminal-Bench 2.0-vs-2.1 gap** are listed side by side rather than averaged. **The multimodal dimension is scored as unmeasured rather than inherited**: the repo's own `qwen-3.7-plus` metadata identifies Plus as the vision-bearing sibling, and this report deliberately does not carry Plus's visual scores into Max. Missing benchmarks (Terminal-Bench 4.0, τ³-Banking, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, JobBench, AA AutomationBench, ARC-AGI, native-1M MRCR, AIME26, DeepSWE, Vibe Code Bench, FrontierCode, and every visual benchmark except Design Arena) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Qwen — Qwen3.7-Max launch post (primary source, 50+ vendor rows)](https://qwen.ai/blog?id=qwen3.7)
  - [BenchLM — Qwen3.7 Max benchmark scores (62 rows, 62.42/100, #46/1015; canonical dotted slug)](https://benchlm.ai/models/qwen3-7-max)
  - [Artificial Analysis — Qwen3.7 Max](https://artificialanalysis.ai/models/qwen3-7-max)
  - [Vals AI — Qwen3.7 Max leaderboard results](https://www.vals.ai/models/alibaba_qwen3.7-max)
  - [Artificial Analysis — tau2-bench leaderboard](https://artificialanalysis.ai/evaluations/tau2-bench)
  - [Artificial Analysis — omniscience leaderboard](https://artificialanalysis.ai/evaluations/omniscience)
  - [Artificial Analysis — gpqa-diamond leaderboard](https://artificialanalysis.ai/evaluations/gpqa-diamond)
  - [Artificial Analysis — ifbench leaderboard](https://artificialanalysis.ai/evaluations/ifbench)
  - [Epoch AI — FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [Gert Labs rankings](https://gertlabs.com/rankings)
  - [ResearchClawBench leaderboard](https://internscience.github.io/ResearchClawBench-Home/)
  - [OpenHarmony Bench official leaderboard](https://bench.matrix.openharmony.cn/)
  - [Openrouter — Qwen3.7 Max benchmarks](https://openrouter.ai/qwen/qwen3.7-max/benchmarks)
  - See also: [`model/qwen-3.7-plus/`](qwen-3.7-plus.md) — the vision-bearing sibling built on this backbone, refreshed earlier in this session; [`model/qwen-3.8-max/`](qwen-3.8-max.md) — the successor (64.95)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
