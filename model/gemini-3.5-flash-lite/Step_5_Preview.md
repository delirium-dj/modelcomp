# Gemini 3.5 Flash-Lite — findings by Step 5 Preview

- Source: Google DeepMind (`gemini-3.5-flash-lite`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash-Lite. The **Flash-Lite** tier of Google's 3.5 generation, sibling to Gemini 3.5 Flash (61.62) and 3.5 Flash Cyber, and the successor to **Gemini 3.1 Flash-Lite (46.62)**. BenchLM scores it **46.87/100, #116 of 1,015** with **28 benchmarks** — so the generational step over 3.1 Flash-Lite was **+0.25 points, effectively flat**, and it remains the lowest-scored non-Gemma model in Google's current lineup above only 1.5 Pro and 1.0 Pro.
- **Short description:** A genuinely unusual profile: **the cheapest capable tier of a 1M-window family**, whose distinguishing property is that **its reliability figures are good (AA-Omniscience index 6.9 — positive, with a 26.7% hallucination rate, the fifth-lowest in this research series) while essentially every capability figure is poor (CritPt 0.0%, AA-HLE 18.8%, AA Intelligence Index 11.7%, FrontierMath Tier 4 0.000%, AA Coding Index 49.3%, AA Agentic Index 15.9%)**. It is a model that answers rarely and answers correctly.
- **Provider / access:** Gemini API, and OpenCode Zen (`opencode/gemini-3.5-flash-lite`). No Free ID. Proprietary, closed weights.
- **Release / knowledge:** release date not restated; the 3.5 generation is Google's mid-2026 line. **Knowledge cutoff not disclosed.**
- **IDs:** `gemini-3.5-flash-lite` (Gemini API, Zen, BenchLM canonical); `google/gemini-3.5-flash-lite` (Openrouter); `google_gemini-3.5-flash-lite` (Vals).
- **Context window:** **1M tokens** (BenchLM) — a full 1M window at Flash-Lite pricing, which is the model's structural advantage and the reason its context score is not as low as its quality scores.
- **Modalities:** **text and image in; text out** (ParseBench 59.49%, AA-MMMU-Pro 79.0%).
- **Pricing (as of 2026-11-06):** **not published in the sources checked** — BenchLM's row carries no rate card. Scored conservatively and flagged as unverified; the model's positioning as a Flash-Lite tier implies it is the cheapest current Google route, which is the one directional signal.
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

Google's Gemini 3.6 Flash / 3.5 Flash-Lite / 3.5 Flash Cyber launch post is the primary source (so those rows are **vendor-run**), with Artificial Analysis, Vals AI, Epoch AI, LlamaIndex and Openrouter supplying independent rows. 28 benchmarks total.

Agent / tool use — **weak, but with one strong figure**:

- **OSWorld-Verified: 74%** (vendor) — the strongest agentic figure here and a genuinely good computer-use result
- **Terminal-Bench 2.1: 54.0%** (vendor) / **50.2%** (Vals) — a 3.8-point gap, both ~34–38 points under the 88%+ reference
- **GDPval-AA: 1,139 Elo** (vendor) / **24.2% normalized** [AA] — well under the 1,750 reference
- **AA Agentic Index: 15.9%** — the second-lowest agentic index in this batch; AA EnterpriseOps-Gym: 42.3%
- **Terminal-Bench 4.0, τ²-bench, τ³-Banking, MCP-Atlas, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, AA AutomationBench: no verified public score found** — so two of three frontier references are unmeasured and no composite exists beyond AA Agentic Index

Reasoning / knowledge — **the worst capability cluster in this batch**:

- **AA-GPQA Diamond: 83.8%** [AA] / 83.8% (Vals) — fails the 90%+ reference by 6.2 points, with AA and Vals agreeing exactly
- **AA-HLE: 18.8%** — fails the 40%+ reference by 21.2 points
- **CritPt: 0.0%** [AA] — **the lowest CritPt measured in this batch, tied with GPT-5 (medium)'s 0.0% and within 0.3 points of Claude Opus 4.5's series-lowest 0.3%**
- **AA Intelligence Index: 11.7%** — the lowest composite measured in this batch
- **AA-LCR: 76.0%**; **MRCRv2: 72.2%** (vendor) — respectable long-context retrieval
- **AA-Omniscience: index 6.9, accuracy 26.5%, hallucination rate 26.7%** — a **positive index**, meaning more correct than incorrect answers, on the **fifth-lowest hallucination rate in this research series**
- MMLU-Pro (Vals): 85.8%
- **FrontierMath v2 Tiers 1–3: 26.0%; Tier 4: 0.000%** [Epoch] — a zero on the hardest tier
- **ARC-AGI, AIME, MRCR (1M native): no verified public score found**

Coding — **weak**:

- **SWE-bench (Vals): 75.0%** — the strongest coding figure; **LiveCodeBench (Vals): 79.0%**
- **SWE-bench Pro: 54.2%** (vendor); **AA Coding Index: 49.3%** — 20.7 points under the 70% reference
- **AA-SciCode: 41.3%** — well under the 55%+ reference
- **SWE-bench Verified, DeepSWE, Vibe Code Bench, FrontierCode, Terminal-Bench 4.0: no verified public score found** — so the 85%, 74% and 55% references are all unmeasured

Multimodal (image-in) — **one strong figure, otherwise thin**:

- **AA-MMMU-Pro: 79.0%** — genuinely good
- **ParseBench: 59.49%** [LlamaIndex]
- **CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision, Design Arena: no verified public score found**

### Normalized scores (1–100)

- **Tool use: 50/100.** At the methodology's mid band's lower edge. **OSWorld-Verified 74% is the one genuinely strong agentic figure** and shows real computer-use capability, and AA EnterpriseOps-Gym 42.3% is respectable. But **Terminal-Bench 2.1 is 54.0% (vendor) / 50.2% (Vals) — roughly 34 points under the reference — GDPval-AA is 1,139 Elo / 24.2% normalized, and AA Agentic Index is 15.9%, the second-lowest in this batch.** **Terminal-Bench 4.0, τ²-bench, τ³-Banking, MCP-Atlas, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench and AA AutomationBench have no figure at all**, so two of three frontier references are unmeasured.
- **Reasoning: 38/100.** Below the methodology's mid band and the weakest dimension. **CritPt 0.0% and AA-HLE 18.8% are among the worst figures measured in this batch, AA Intelligence Index 11.7% is the lowest composite here, FrontierMath Tier 4 is 0.000%, and AA-GPQA Diamond 83.8% fails the 90% reference by 6.2 points.** The two mitigating figures are **AA-LCR 76.0% and MRCRv2 72.2%**, which show the long-context retrieval substrate works. The genuinely distinctive property is reliability: **AA-Omniscience index 6.9 (positive) with a 26.7% hallucination rate — the fifth-lowest in this research series** — so it answers rarely and answers correctly. Scored at 38 rather than lower because that reliability profile is a real asset and the 1M window with AA-LCR 76.0% / MRCRv2 72.2% is a genuine capability.
- **Context window: 92/100.** **1M tokens** places it in the methodology's ≥1M tier (95+) at the tier's lower bound, and it is a full frontier window at Flash-Lite pricing — the model's structural advantage. Held at 92 rather than 95+ because **AA-LCR is 76.0%**, which is decent but not strong, and **MRCRv2 72.2%** sits well below the 90%+ figures measured for Qwen3.7 Max (90.4%) and DeepSeek V4 Pro (83.5% at 1M). No native-1M MRCR or GraphWalks run exists.
- **Multimodal: 68/100.** Text + image in with text out, in the methodology's 60–70 band and at its upper end on **AA-MMMU-Pro 79.0%**. Held at 68 rather than above because the visual suite is **two benchmarks**, ParseBench 59.49% is middling, and there is no video or audio input despite the family's general video strength.
- **Coding: 52/100.** Below the methodology's mid band. **SWE-bench 75.0% (Vals) and LiveCodeBench 79.0% (Vals) are respectable mid-frontier figures**, and SWE-bench Pro 54.2% is mid. But **AA Coding Index 49.3% is 20.7 points under the 70% reference and AA-SciCode 41.3% is 13.7 points under 55%**, and **SWE-bench Verified, DeepSWE, Vibe Code Bench, FrontierCode and Terminal-Bench 4.0 are all absent** — so the 85%, 74% and 55% references cannot be checked.
- **Cost efficiency: 88/100.** **No rate card is published in any source checked**, so the score rests on the model's positioning rather than a price: the **Flash-Lite tier is Google's cheapest current route** and the family's structure (with the >200K tier doubling input cost on 2.5 Pro) implies aggressive low-tier pricing. Scored at 88 on that basis, on the methodology's ~$1.25/$4.25 anchor. **Explicitly a positioning-based inference, not a measurement** — held below 92 because no free tier exists (`noFreeId`), no hosted rate is published, and the 1M window keeps prompt costs down without earning a premium.
- **Overall Score: 60/100.** (50 + 38 + 92 + 68 + 52) / 5 = 60 → **60**. Recommendation: **a cheap 1M-window model with a genuinely unusual reliability profile, and almost no capability.** Its two real assets are a **full 1M context window at Flash-Lite pricing** and **the fifth-lowest hallucination rate measured in this research series (26.7%) on a positive Omniscience index** — meaning it answers rarely and answers correctly, which is a real property for workloads where fabrication is the dominant risk. Three cautions: **its capability cluster is among the worst in this batch** (CritPt 0.0%, AA-HLE 18.8%, AA Intelligence Index 11.7%, FrontierMath Tier 4 0.000%), so it is not a reasoning or knowledge model; **its agentic layer is weak** (AA Agentic Index 15.9%, Terminal-Bench 2.1 50–54%, GDPval-AA 24.2% normalized); and **the generational step from Gemini 3.1 Flash-Lite was +0.25 points — effectively flat** — so it is a compatibility pick, not an upgrade. Prefer **Gemini 3.5 Flash (61.62)** at presumably modestly higher cost.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research using Google's Gemini 3.6 Flash / 3.5 Flash-Lite / 3.5 Flash Cyber launch post as the primary source (so those rows are vendor-run and labelled as such), cross-checked against BenchLM's 28-row catalog (which attributes the independent numbers to Artificial Analysis, Vals AI, Epoch AI, LlamaIndex and Openrouter). **A lookup note is recorded: the repo folder spelling `gemini-3.5-flash-lite` matches BenchLM's canonical slug here, unlike the Qwen 3.x and Grok families — so no dotted-slug trap applied.** The report's central finding is a **profile inversion rather than a level: this model has the fifth-lowest hallucination rate in this research series (26.7%) on a positive Omniscience index, while simultaneously holding among the worst capability figures in the batch (CritPt 0.0%, AA-HLE 18.8%, AA Intelligence Index 11.7%, FrontierMath Tier 4 0.000%)** — a "rarely answers, answers correctly" profile, which is attributed explicitly and carried into the recommendation rather than presented as a simple weakness. The **+0.25-point generational step from Gemini 3.1 Flash-Lite (46.62 → 46.87)** is recorded as an effective flat step. Conflicts are listed side by side — Terminal-Bench 2.1 54.0% (vendor) / 50.2% (Vals); GPQA Diamond 83.8% [AA] / 83.8% [Vals] (agreeing exactly, noted as a confidence signal) — rather than averaged. The unpublished rate card is surfaced with its effect on the cost score stated as a positioning-based inference. Missing benchmarks (Terminal-Bench 4.0, τ²-bench, τ³-Banking, MCP-Atlas, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, AA AutomationBench, ARC-AGI, AIME, native-1M MRCR, SWE-bench Verified, DeepSWE, Vibe Code Bench, FrontierCode, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision, Design Arena) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google — Gemini 3.6 Flash, 3.5 Flash-Lite, and 3.5 Flash Cyber launch post (primary source)](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-6-flash-3-5-flash-lite-3-5-flash-cyber/)
  - [BenchLM — Gemini 3.5 Flash-Lite benchmark scores (28 rows, 46.87/100, #116/1015)](https://benchlm.ai/models/gemini-3-5-flash-lite)
  - [Artificial Analysis — Gemini 3.5 Flash-Lite](https://artificialanalysis.ai/models/gemini-3-5-flash-lite)
  - [Vals AI — Gemini 3.5 Flash-Lite leaderboard results](https://www.vals.ai/models/google_gemini-3.5-flash-lite)
  - [Epoch AI — FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [Artificial Analysis — omniscience leaderboard (source of the 26.7% figure)](https://artificialanalysis.ai/evaluations/omniscience)
  - [Artificial Analysis — artificial-analysis-intelligence-index leaderboard](https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index)
  - [Artificial Analysis — critpt leaderboard](https://artificialanalysis.ai/evaluations/critpt)
  - [ParseBench leaderboard (LlamaIndex)](https://www.parsebench.ai/#leaderboard)
  - [Openrouter — Gemini 3.5 Flash-Lite benchmarks](https://openrouter.ai/google/gemini-3.5-flash-lite/benchmarks)
  - See also: [`model/gemini-3.1-flash-lite/`](gemini-3.1-flash-lite.md) — the previous generation (46.62), the baseline for the flat +0.25 step; [`model/gemini-3.5-flash/`](gemini-3.5-flash.md) (61.62) — the report's recommended upgrade
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
