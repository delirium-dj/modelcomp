# Inkling-Small — findings by Step 5 Preview

- Source: Thinking Machines Lab (`thinkingmachines/inkling-small`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling-Small. The small sibling of **Inkling** (BenchLM 48.1) from **Thinking Machines Lab**, and one of the few **open-weight** models in this research series with a 1M window. BenchLM scores it **50.04/100, #99 of 1,015** — marginally *above* its own larger sibling.
- **Short description:** An open-weight small model with an unusual shape: **strong on classic coding repair (SWE-bench Verified 80.2%) and exam-style maths (AIME26 95.5%, HMMT Feb 2026 90.2%)**, but **near-floor on every agentic and depth benchmark** (AA Agentic Index 24.9%, CritPt 8.3%, FrontierMath Tier 4 17.1%, AA-Omniscience index −9.5). A model that writes good functions and cannot sustain an agent.
- **Provider / access:** Weights on Hugging Face (open weight), Thinking Machines Lab's own API, Vercel AI Gateway, and OpenCode Zen. **No Free ID** on Zen.
- **Release / knowledge:** release date not restated; the Inkling family is Thinking Machines Lab's 2026 line. **Knowledge cutoff not disclosed.**
- **IDs:** `thinkingmachines/inkling-small` (Thinking Machines API); `thinkingmachines_inkling-small` (Vals, ARC); `thinkingmachines/inkling-small` (Vercel).
- **Context window:** **1M tokens** (BenchLM) — large for an open-weight small model.
- **Modalities:** text and image in (MMMU-Pro 74.0%, CharXiv 81.3% measured); text out. BenchLM classifies it **Hybrid** reasoning — the only such classification in this corpus.
- **Pricing (as of 2026-11-05):** **not published in the sources checked** — Zen lists it as paid but no rate card appears in BenchLM or the launch post. Scored conservatively and flagged as unverified; **open weights** provide a self-hosting escape.
- **Architecture:** **open weight**; parameter count undisclosed.

### Raw benchmarks found

Thinking Machines Lab's Inkling-Small launch post is the primary source (so those rows are **vendor-run**), with Artificial Analysis, Vals AI, ARC Prize and Epoch AI supplying independent rows. 42 benchmarks total.

Agent / tool use — **weak**:

- **MCP Atlas: 79.6%** (vendor) — the strongest agentic figure
- BrowseComp: **77.4%** (vendor); Toolathlon-Verified: **54.4%**
- **Terminal-Bench 2.1: 64.7%** (vendor) / **55.1%** (Vals) — a 9.6-point gap, and both far under the 88%+ reference
- GDPval-AA: **1,191 Elo** / 31.2% normalized — far under the 1,750 reference
- **AA Agentic Index: 24.9%**; AA EnterpriseOps-Gym: 42.7%
- **τ³-Banking, OSWorld, JobBench, MazeBench, ALE, Claw-Eval: no verified public score found**

Reasoning / knowledge — **split**:

- **GPQA: 89.5%** (vendor and AA agree exactly) / GPQA Diamond 83.6% (Vals) — fails the 90%+ reference on all three
- HLE: **47.8%** (vendor) / HLE without tools 31.6% / **AA-HLE 33.3%** — a **14.5-point vendor-vs-independent gap**
- **AA-Omniscience: index −9.5, accuracy 31.8%, hallucination rate 60.5%** — a negative index, meaning more incorrect than correct answers
- **AIME26: 95.5%** (vendor); **HMMT Feb 2026: 90.2%** (vendor) — the two strong figures, on competition maths
- AA Intelligence Index: **12.9%** — the lowest composite in this batch; AA-LCR: **75.7%**; **CritPt: 8.3%**
- ARC-AGI-1: **84.0%**; ARC-AGI-2: **40.1%**
- **FrontierMath v2 Tiers 1–3: 46.3%; Tier 4: 17.1%**; MMLU-Pro (Vals): 85.6%; IFBench: 82.2%
- **MRCR: no verified public score found**

Coding — **the strongest dimension**:

- **SWE-bench Verified: 80.2%** (vendor) / **82.2%** (Vals) — the two agree, and both are solidly mid-frontier
- **LiveCodeBench (Vals): 85.9%**; SWE-bench Pro: **55.9%**
- Terminal-Bench 2.1: 64.7% / 55.1% — under the 85% reference
- **SciCode: 48.7%** (vendor) / **AA-SciCode: 49.7%** — under the 55%+ reference
- **AA Coding Index: 53.0%** — well under the 70% frontier reference
- **DeepSWE, FrontierCode, Vibe Code Bench: no verified public score found**

Multimodal (image-in):

- **MMMU-Pro: 74.0%** (vendor and AA agree exactly); **CharXiv: 81.3%** (77.4% without tools)
- **ExtractBench, ParseBench, BabyVision, ZeroBench: no verified public score found**

### Normalized scores (1–100)

- **Tool use: 52/100.** Below the methodology's mid band. MCP Atlas 79.6% and BrowseComp 77.4% are respectable browsing/orchestration figures, but **Terminal-Bench 2.1 is 64.7% (vendor) / 55.1% (Vals) — roughly 30 points under the reference — GDPval-AA is 1,191 Elo against 1,750, and τ³-Banking, OSWorld, JobBench, MazeBench, ALE and Claw-Eval have no figure at all**, leaving two of three references unmeasured. AA Agentic Index 24.9% confirms the execution layer is weak.
- **Reasoning: 62/100.** Mid-band and genuinely split. **AIME26 95.5% and HMMT Feb 2026 90.2% are strong competition-maths results**, and AA-LCR 75.7% is solid long-context reasoning for an open-weight small model. But **GPQA Diamond is 83.6% (Vals), failing the 90% reference; AA-HLE is 33.3%, failing the 40% reference; the AA-Omniscience index is −9.5 with a 60.5% hallucination rate; and CritPt is 8.3% with FrontierMath Tier 4 at 17.1%.** The 14.5-point HLE vendor-vs-AA gap is resolved in favour of the independent run. No MRCR figure.
- **Context window: 97/100.** 1M-token tier with AA-LCR 75.7% — solid for an open-weight small model, and a larger window than most closed models here. Held just under 100 because no MRCR retrieval run exists and no max-output limit is published.
- **Multimodal: 76/100.** Text + image in with text out. Scored above the methodology's 60–70 band because both measured visual figures are good — **MMMU-Pro 74.0% and CharXiv 81.3%** — which is a stronger showing than several larger models. Held at 76 because the suite is two benchmarks, there is no video or audio input, and CharXiv drops 3.9 points without tools.
- **Coding: 76/100.** The strongest dimension. **SWE-bench Verified 80.2–82.2% is solid mid-frontier** with vendor and Vals agreeing, LiveCodeBench 85.9% is strong, and SWE-bench Pro 55.9% is mid. Capped by **AA Coding Index 53.0%** (17 points under the 70% reference), SciCode 48.7–49.7% (under 55%), Terminal-Bench 2.1 64.7%/55.1% (under 85%), and no DeepSWE, FrontierCode or Vibe Code Bench figure.
- **Cost efficiency: 55/100.** **No rate card is published in any source checked** — Zen lists it as paid but BenchLM and the launch post carry no pricing, so this is a placeholder-for-unknown rather than a sibling-based estimate. Scored at 55, between the methodology's ~$3/$15 (≈60) and ~$10/$50 (≈30) anchors, on the assumption that an open-weight small model from a new lab would sit in that band if a route existed. **Explicitly an estimate, not a measurement** — the offsetting fact is that weights are open, so self-hosting bypasses the question entirely.
- **Overall Score: 73/100.** (52 + 62 + 97 + 76 + 76) / 5 = 72.6 → **73** → **73**. Recommendation: a solid **open-weight coding-repair and competition-maths model** — SWE-bench Verified 80–82%, AIME26 95.5%, HMMT 90.2%, MMMU-Pro 74.0% and a 1M window with open weights, which is a rare combination at any price. Its limits are clear and consistent: **it cannot sustain agentic work** (AA Agentic Index 24.9%, Terminal-Bench 2.1 55–65%) and **it is unreliable as a knowledge source** (Omniscience index −9.5). Use it for repository repair, competitive-programming preparation and multimodal document tasks that fit inside a single turn; route agentic orchestration elsewhere.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-05
- Method: re-research using Thinking Machines Lab's Inkling-Small launch post as the primary source (so those rows are vendor-run and labelled as such), cross-checked against BenchLM's 42-row catalog (which attributes the independent numbers to Artificial Analysis, Vals AI, ARC Prize and Epoch AI) and Zen's paid-listing status. Conflicting figures are listed side by side — Terminal-Bench 2.1 64.7% (vendor) vs 55.1% (Vals), HLE 47.8% (vendor) vs 33.3% (AA), GPQA Diamond 89.5% vs 83.6% — rather than averaged, with the independent run preferred on each. The negative AA-Omniscience index is attributed rather than presented bare. Missing benchmarks (τ³-Banking, OSWorld, JobBench, MazeBench, ALE, Claw-Eval, DeepSWE, FrontierCode, Vibe Code Bench, MRCR, ExtractBench, ParseBench, BabyVision, ZeroBench) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Thinking Machines Lab — Inkling-Small launch post (primary benchmark source)](https://thinkingmachines.ai/news/inkling-small/)
  - [BenchLM — Inkling-Small benchmark scores (42 rows, 50.04/100, #99/1015)](https://benchlm.ai/models/inkling-small)
  - [Artificial Analysis — Inkling-Small](https://artificialanalysis.ai/models/inkling-small)
  - [Vals AI — Inkling-Small leaderboard results](https://www.vals.ai/models/thinkingmachines_inkling-small)
  - [ARC Prize — published semi-private results for Inkling-Small](https://arcprize.org/results/thinky-inkling-small)
  - [Epoch AI — FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
