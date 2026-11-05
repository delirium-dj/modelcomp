# Gemini 3 Flash — findings by Step 5 Preview

- Source: Google DeepMind (`gemini-3-flash`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash. The base 3-generation Flash tier, now **five generations behind** Gemini 4 (Argon, Carbon) and behind every 3.x Flash successor: 3.5 Flash (61.4), 3.6 Flash (62.41), 3.7 Flash (66.53), 3.8 Flash (66.22). BenchLM scores it **54.12/100, #81 of 1,010** — the lowest-ranked model in this batch by 7 points.
- **Short description:** A base-generation Flash model whose distinguishing feature is **uniform weakness across every dimension**: AA Intelligence Index 17.9% (lowest in this batch), CritPt 1.4% (lowest here), JobBench 11.4%, Claw-Eval 49.2%, AA-Omniscience index −4.3 with a 92.4% hallucination rate. Its two genuinely good results are **Claw-Eval 49.2% — one of only three measured Claw-Eval figures in this entire research series** — and MMLU-Pro 88.6%, which is high *only* because MMLU-Pro is saturating across the frontier.
- **Provider / access:** Gemini API, OpenRouter, and OpenCode Zen (`opencode/gemini-3-flash-preview`) at **$0.50/$3.00/$0.05** — cheap, but Gemini 3.8 Flash costs 3x more input and scores 12+ BenchLM points higher.
- **Release / knowledge:** release date not restated; the 3 generation is Google's late-2025 line, and BenchLM tracks it as the `-preview` ID throughout (Artificial Analysis and Vals both use `gemini-3-flash-preview`). **Knowledge cutoff not disclosed.**
- **IDs:** `gemini-3-flash` / `gemini-3-flash-preview`; `google/gemini-3-flash-preview`.
- **Context window:** **1M tokens** (BenchLM). Max output not published.
- **Modalities:** **text, image, video and audio in; text out** (Anthropic's lineup-wide statement that all current models share this modality set; corroborated by the MMMU-Pro and Design Arena results). **BenchLM classifies it Non-Reasoning** — the third such model in this corpus after Gemini 3 Pro and Claude Opus 4.6.
- **Pricing (as of 2026-11-05):** **$0.50 input / $0.05 cached / $3.00 output per 1M** on Zen, with no >200K tier. Methodology anchors put $0.50/$3.00 between ~$0.60/$2.20 (≈92) and ~$1.25/$4.25 (≈88).
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

Artificial Analysis, Vals AI, ARC-adjacent third-party table sources, Epoch AI, Cognition, Kaggle, LlamaIndex, Openrouter, Gert Labs, the Claw-Eval leaderboard and the JobBench paper. **Only 25 benchmarks exist** — the thinnest evidence base in this batch and the third-thinnest in the whole corpus.

Agent / tool use — **the weakest dimension in this batch**:

- **Claw-Eval: 49.2%** — one of only three measured Claw-Eval figures in this research series (the others: Claude Opus 4.6's 70.4% and MiMo-V2.6-Pro's absence), and a valuable data point precisely because the benchmark is otherwise absent
- **Terminal-Bench 2.1 (Vals): 53.9%** — 34.1 points under the 88%+ frontier reference, and the only terminal figure in existence for this model
- τ²-bench: **43.3%**; Gert Labs: 56.63%; **JobBench: 11.4%**
- **Terminal-Bench (vendor), τ³-Banking, GDPval-AA, OSWorld, MCP-Atlas, BrowseComp, Toolathlon, MazeBench, ALE: no verified public score found** — so two of three frontier references are entirely unmeasured

Reasoning / knowledge — **uniformly weak**:

- **AA Intelligence Index: 17.9%** — the lowest composite measured in this batch
- **AA-GPQA Diamond: 81.2%** / **87.9%** (Vals) — fails the 90%+ reference on both
- **AA-HLE: 15.0%** — fails the 40%+ reference by 25 points, and the second-lowest here
- **AA-Omniscience: index −4.3, accuracy 45.8%, hallucination rate 92.4%** — an index of −4.3 means more incorrect than correct answers
- **CritPt: 1.4%** — the lowest scientific-reasoning score measured in this batch; AA-LCR: **55.3%**
- FrontierMath v2 Tiers 1–3: **51.2%**; Tier 4: **17.1%**; MMLU-Pro (Vals): 88.6%; AA-IFBench: 55.1%; AA Global-MMLU-Lite: 92.7%
- **MRCR, ARC-AGI, FrontierMath v2 from Epoch (measured): no verified public score found**

Coding — mid-pack at best:

- LiveCodeBench (Vals): **85.6%** — the only strong figure, and consistent with the saturation pattern
- SWE-bench (Vals): 75.0%; **Vibe Code Bench: 20.20%** — near-floor
- **SWE-bench Verified, DeepSWE, AA-SciCode, AA Coding Index, Terminal-Bench (vendor): no verified public score found** — so the 74%, 70%, 55% and 85% coding references are all unmeasured

Multimodal — the least-bad dimension:

- **AA-MMMU-Pro: 78.6%**; ParseBench: 75.05%; Design Arena (website): 1,194 Elo

### Normalized scores (1–100)

- **Tool use: 42/100.** The weakest agentic profile in this batch. **Claw-Eval 49.2% is a valuable data point but a weak result**, Terminal-Bench 2.1 is 53.9% against the 88% reference, JobBench 11.4% and τ²-bench 43.3%. Two of three frontier references (τ³-Banking, GDPval-AA) have no figure at all, and there is no OSWorld, MCP-Atlas, BrowseComp, Toolathlon, MazeBench or ALE measurement. Scored below the methodology's 45–60 mid band because every measured agentic number is at or near the bottom of the frontier field.
- **Reasoning: 40/100.** Well below the methodology's mid band. **AA-GPQA Diamond 81.2% fails the 90% reference, AA-HLE 15.0% fails the 40% reference by 25 points, AA Intelligence Index is 17.9% (the lowest here), CritPt is 1.4% (the lowest here) and the AA-Omniscience index is −4.3 with a 92.4% hallucination rate.** The only respectable figures — MMLU-Pro 88.6% and Global-MMLU-Lite 92.7% — are knowledge benchmarks that saturate across the frontier. Scored at the bottom of the band rather than below it because LiveCodeBench and MMLU-Pro show the substrate is present even though no frontier reference is met.
- **Context window: 95/100.** 1M-token tier at the tier floor: **AA-LCR is 55.3%, by far the weakest long-context reasoning in this batch**, with no MRCR, GraphWalks or published max-output limit. A window whose size is asserted and whose usable depth is measured weakly.
- **Multimodal: 88/100.** Text + image + video + **audio** input places it in the methodology's 90–100 "audio in" tier, and AA-MMMU-Pro 78.6% plus ParseBench 75.05% support the lower-middle of that band. Held at 88 rather than the 90s because Design Arena is only 1,194 Elo (the lowest in this batch), there is no CharXiv, ExtractBench, BabyVision or ZeroBench figure, and output is text-only.
- **Coding: 55/100.** Mid-band, and the least-bad dimension. LiveCodeBench 85.6% (Vals) and SWE-bench 75.0% (Vals) show the coding substrate works for isolated functions. Capped by **Vibe Code Bench 20.20%** — near-floor — and the total absence of SWE-bench Verified, DeepSWE, AA-SciCode and the AA Coding Index, so four of the five coding references cannot be checked. A model that writes acceptable functions and cannot build software.
- **Cost efficiency: 88/100.** $0.50/$0.05/$3.00 per 1M with no >200K tier sits just above the methodology's ~$1.25/$4.25 (≈88) anchor and at the cheaper end of the Flash tier — cheaper than Gemini 3.5/3.6/3.7/3.8 Flash on input. Held at 88 rather than 92–95 because it is not as cheap as the MiniMax/MiMo/GLM flash-tier cards ($0.14–$0.30 input), has no free tier, and is **dominated on quality by Gemini 3.8 Flash at $1.50/$7.50** — three times the input price for twelve-plus BenchLM points.
- **Overall Score: 64/100.** (42 + 40 + 95 + 88 + 55) / 5 = 64.0 → **64**. Recommendation: **a superseded base-generation Flash model with no remaining reason to select it.** Its two distinctive artefacts are the **Claw-Eval 49.2% figure** (one of only three in this research series) and the **1.4% CritPt**, which together document the floor of frontier capability. Every dimension is beaten by a cheaper-or-same-price successor — Gemini 3.8 Flash scores 12+ points higher on BenchLM — so migrate. Its multimodal input coverage (image + video + audio) is the one thing it still does adequately.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-05
- Method: re-research using Artificial Analysis's gemini-3-flash-preview profile as the primary source (the ID BenchLM tracks is the `-preview` form throughout), cross-checked against BenchLM's 25-row catalog (attributing numbers to Artificial Analysis, Vals AI, Epoch AI, Cognition, Kaggle, LlamaIndex, Openrouter, Gert Labs, the Claw-Eval leaderboard and the JobBench paper) and OpenCode Zen's pricing table. The catalog's thinness (25 rows) and the uniformly weak measured results are recorded as this report's dominant finding rather than smoothed over, and the MMLU-Pro 88.6% figure is explicitly contextualised against the frontier's saturation on that benchmark. Missing benchmarks (Terminal-Bench vendor run, τ³-Banking, GDPval-AA, OSWorld, MCP-Atlas, BrowseComp, Toolathlon, MazeBench, ALE, SWE-bench Verified, DeepSWE, AA-SciCode, AA Coding Index, MRCR, ARC-AGI, CharXiv, ExtractBench, BabyVision, ZeroBench) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — Gemini 3 Flash (primary source; tracked as gemini-3-flash-preview)](https://artificialanalysis.ai/models/gemini-3-flash)
  - [BenchLM — Gemini 3 Flash benchmark scores (25 rows, 54.12/100, #81/1010)](https://benchlm.ai/models/gemini-3-flash)
  - [Vals AI — Gemini 3 Flash leaderboard results](https://www.vals.ai/models/google_gemini-3-flash-preview)
  - [Claw-Eval leaderboard (source of the 49.2% figure — one of only three measured in this research series)](https://claw-eval.github.io/)
  - [JobBench paper (source of the 11.4% figure)](https://arxiv.org/abs/2605.26329)
  - [Epoch AI — FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
