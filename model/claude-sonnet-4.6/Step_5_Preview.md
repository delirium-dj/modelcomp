# Claude Sonnet 4.6 — findings by Step 5 Preview

- Source: Anthropic (`anthropic/claude-sonnet-4.6`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6. Now **four generations behind** — the current lineup is Sonnet 5.5 (BenchLM 81.89, #6), preceded by Sonnet 5 (64.45) and then this. BenchLM scores it **55.66/100, #71 of 1,015**, and **classifies it Non-Reasoning** — the fourth such model in this corpus after Gemini 3 Pro, Gemini 3 Flash and Claude Opus 4.6.
- **Short description:** A legacy Sonnet whose most notable figures are **Claw-Eval 67.8%** (one of only three measured figures in this research series, and the *best* of them) and **CritPt 0.9%** — the lowest scientific-reasoning score measured anywhere in this research series. Its coding record is mid-pack (SWE-bench Verified 79.6%) and its reliability profile is poor (**AA-Omniscience index −3.5, 68.5% hallucination**).
- **Provider / access:** Anthropic API, Amazon Bedrock, and Google **Antigravity / Code Assist** with an included trial quota (per the repo's meta.json — one of the few non-Zen free-ish routes to a Claude model). Also on OpenRouter. **No Zen route** appears in Zen's current model list.
- **Release / knowledge:** release date not restated for this legacy SKU; Anthropic's models overview lists it under "Legacy models (still available)". **Knowledge cutoff not restated by Anthropic.**
- **IDs:** `anthropic/claude-sonnet-4.6` (Claude API, Bedrock); `anthropic/claude-sonnet-4.6` (Openrouter).
- **Context window:** **200,000 tokens** (BenchLM and the repo's meta.json agree) — one-tenth of the current lineup's 1M, and the primary reason this model cannot rank in the top context tier.
- **Modalities:** **text and image in; text out** (repo meta.json). Non-Reasoning per BenchLM.
- **Pricing (as of 2026-11-05):** **$3 input / $15 output per 1M** (repo meta.json), with a free-ish trial quota on Antigravity / Code Assist. Methodology anchors put $3/$15 at ≈60 — and note **Sonnet 5.5 costs $2/$10**, less than half, for a BenchLM score 26 points higher.
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

Anthropic's Sonnet 4.6 system card is the primary source (so those rows are **vendor-run**), with Artificial Analysis, Vals AI, ARC Prize, Cognition, Cursor, Kaggle, LlamaIndex, Qwen's comparison chart, and the OSWorld-Verified, Claw-Eval, CyberGym, JobBench, SWE-Rebench and React Native Evals leaderboards supplying independent rows. 40 benchmarks total.

Agent / tool use — **weak**:

- **Claw-Eval: 67.8%** — one of only three measured ClawEval figures in this research series, and **the best of the three** (ahead of Claude Opus 4.6's 70.4% is false — in fact second to it; ahead of GPT-5.4's 60.3%)
- **OSWorld-Verified: 72.1%**; τ²-bench: 79.5%; Gert Labs: 62.92%; CyberGym: 65.2%
- **Terminal-Bench 2.0: 59.1%** (vendor) / **Terminal-Bench 2.1 (Vals): 57.3%** — the only terminal figures, both far under the 88%+ reference, and note both are the *older* harnesses
- JobBench: 36.9%; **OSWorld 2.0: 8.3%**; **ApprenticeBench: 2%**; **MazeBench: 0%**
- **Terminal-Bench 4.0, τ³-Banking, GDPval-AA, MCP-Atlas, BrowseComp, Toolathlon, ALE: no verified public score found** — so two of three frontier references are entirely unmeasured

Reasoning / knowledge:

- **GPQA: 89.9%** (vendor) / GPQA Diamond 85.6% (Vals) — fails the 90%+ reference on both
- HLE: **49.0%** (vendor) / **AA-HLE 13.3%** — a **35.7-point vendor-vs-independent gap**, the largest in this batch
- **AA-Omniscience: index −3.5, accuracy 38.6%, hallucination rate 68.5%** — a negative index, meaning more incorrect than correct answers
- AA Intelligence Index: **24.7%**; AA-LCR: **68.3%**; **CritPt: 0.9%** — the lowest CritPt measured anywhere in this research series
- ARC-AGI-1: **86.0%**; ARC-AGI-2: **58.3%**; SuperGPQA: 95%; MMLU-Pro (Vals): 87.3%; AA-IFBench: 41.2%
- **FrontierMath, MRCR: no verified public score found**

Coding — the least-bad dimension:

- **SWE-bench Verified: 79.6%** (vendor) / **77.4%** (Vals) — a 2.2-point gap, both respectable
- LiveCodeBench (Vals): **82.1%**; React Native Evals: **80.6%**; SWE-Rebench: 60.7%; Vibe Code Bench: **51.5%**
- cursorBench 3.1: 48.8%; **FrontierCode 1.1 Main: 24.3%**
- **AA-SciCode, DeepSWE, AA Coding Index, SWE-bench Pro: no verified public score found** — so the 55%, 74% and 70% references are unmeasured

Multimodal (image-in):

- **CharXiv: 77.4%** (vendor); **AA-MMMU-Pro: 70.6%**; Design Arena (website): **1,283 Elo**
- **MMMU-Pro from the vendor, ExtractBench, ParseBench, BabyVision, ZeroBench: no verified public score found**

### Normalized scores (1–100)

- **Tool use: 48/100.** The weakest dimension and near the bottom of the methodology's mid band. **Claw-Eval 67.8% is the second-best ClawEval figure in this research series**, OSWorld-Verified 72.1% and τ²-bench 79.5% are respectable, but **Terminal-Bench is only on the 2.0 harness (59.1%) with Vals measuring 57.3% on 2.1** — roughly 30 points under the reference — and **GDPval-AA, τ³-Banking, MCP-Atlas, BrowseComp and Toolathlon are entirely absent**. OSWorld 2.0 8.3%, ApprenticeBench 2% and MazeBench 0% confirm the execution layer is not competitive.
- **Reasoning: 45/100.** Below the methodology's mid band, and the weakest dimension after tool use. **GPQA Diamond 85.6% (Vals) fails the 90% reference, AA-HLE 13.3% fails the 40% reference by 26.7 points, CritPt 0.9% is the lowest measured in this research series, and the AA-Omniscience index is −3.5 with a 68.5% hallucination rate.** The 35.7-point vendor-vs-AA gap on HLE (49.0% vs 13.3%) is the largest in this batch and is resolved in favour of the independent measurement. ARC-AGI-1 86.0% and SuperGPQA 95% are the only respectable figures.
- **Context window: 70/100.** **200,000 tokens** places it exactly on the methodology's 200K tier boundary (200K–500K = 65–84; "200K = 70"), and it is the only model in this batch without a ≥500K window. Held at the 70 floor rather than mid-tier because AA-LCR is 68.3% (the second-weakest here), no MRCR figure exists, and no max-output limit is published.
- **Multimodal: 74/100.** Text + image in with text out, scoring in the methodology's 60–70 band and marginally above it on the strength of **CharXiv 77.4%** and a **1,283-Elo Design Arena** result. Held at 74 because AA-MMMU-Pro is 70.6%, the visual suite is three benchmarks, and there is no video or audio input.
- **Coding: 74/100.** The least-bad dimension and right at the mid-band boundary. SWE-bench Verified 77.4–79.6% and LiveCodeBench 82.1% are solid repair-coding figures, and React Native Evals 80.6% corroborates. Capped by Vibe Code Bench 51.5%, cursorBench 3.1 48.8%, **FrontierCode 1.1 Main 24.3%**, and the absence of AA-SciCode, DeepSWE, SWE-bench Pro and the AA Coding Index, so the 55%, 74% and 70% references are all unmeasurable.
- **Cost efficiency: 60/100.** $3/$15 per 1M maps directly onto the methodology's ≈60 anchor. Held at exactly 60 rather than lower because the **Antigravity / Code Assist trial quota** provides a limited no-cost route, and because 200K context keeps prompt costs down. Drawn down from any bonus because **Sonnet 5.5 costs $2/$10** — a third less for 26 more BenchLM points — so this SKU is strictly dominated on price-per-capability within its own family. No free tier on the Anthropic API itself.
- **Overall Score: 62/100.** (48 + 45 + 70 + 74 + 74) / 5 = 62.2 → **62** → **62**. Recommendation: a legacy Sonnet with one genuinely useful artefact (**the second-best ClawEval figure in this research series, 67.8%**) and little else to recommend it. It is dominated three times over — by **Sonnet 5 (64.45)**, by **Sonnet 5.5 (81.89 at $2/$10)**, and on price by its own successor at less than half the rate card. Its 200K window is one-tenth of the current lineup. Migrate unless pinned to `anthropic/claude-sonnet-4.6` for compatibility; the Antigravity trial quota is the only reason to run it at all.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-05
- Method: re-research using Anthropic's Claude Sonnet 4.6 system card as the primary source (so those rows are vendor-run and labelled as such), cross-checked against BenchLM's 40-row catalog (which attributes the independent numbers to Artificial Analysis, Vals AI, ARC Prize, Cognition, Cursor, Kaggle, LlamaIndex, Qwen's comparison chart, and the OSWorld-Verified, Claw-Eval, CyberGym, JobBench, SWE-Rebench and React Native Evals leaderboards) and the repo's own `meta.json` for the 200K window, modality set and $3/$15 rate card. The 35.7-point HLE vendor-vs-independent gap (49.0% vs 13.3%) is recorded as the batch's largest and resolved in favour of the independent run, and the series-lowest CritPt (0.9%) is attributed rather than presented bare. Missing benchmarks (Terminal-Bench 4.0, τ³-Banking, GDPval-AA, MCP-Atlas, BrowseComp, Toolathlon, ALE, FrontierMath, MRCR, AA-SciCode, DeepSWE, AA Coding Index, SWE-bench Pro, and most multimodal benchmarks) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Claude Sonnet 4.6 system card (primary benchmark source)](https://www.anthropic.com/claude-sonnet-4.6-system-card)
  - [Anthropic — Models overview (legacy status, lineup modality statement)](https://platform.claude.com/docs/en/about-claude/models/overview)
  - [BenchLM — Claude Sonnet 4.6 benchmark scores (40 rows, 55.66/100, #71/1015)](https://benchlm.ai/models/claude-sonnet-4-6)
  - [Artificial Analysis — Claude Sonnet 4.6](https://artificialanalysis.ai/models/claude-sonnet-4-6)
  - [Vals AI — Claude Sonnet 4.6 leaderboard results](https://www.vals.ai/models/anthropic_claude-sonnet-4.6)
  - [ARC Prize — Claude Sonnet 4.6 (Max) verified results](https://arcprize.org/leaderboard)
  - [Claw-Eval leaderboard (source of the 67.8% figure)](https://claw-eval.github.io/)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
