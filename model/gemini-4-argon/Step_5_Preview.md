# Gemini 4 Argon — findings by Step 5 Preview

- Source: Google DeepMind (`gemini-4-argon`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon. The predecessor in the Gemini 4 family — **Gemini 4 Carbon** (2026-10-28) is the newer, restricted-access successor, and this folder tracks Argon specifically.
- **Short description:** Google's frontier Gemini 4 model for agentic coding, long-horizon work and multimodal understanding. BenchLM scores it 82.28/100, #5 of 1009 models. It is the only model researched here with a **sub-5% hallucination rate** (AA-Omniscience 4.3%) alongside genuinely frontier abstract reasoning.
- **Provider / access:** Gemini API (`gemini-4-argon`, **paid tier, not Free**), and OpenCode Zen (`opencode/gemini-4-argon`). Zen currently applies a **50% discount through November 30, 2026**.
- **Release / knowledge:** released 2026-10-13 (model-card date per the Gemini 4 Carbon comparison); the Gemini API price sheet is effective 2026-09-30. Knowledge cutoff **not disclosed** by Google.
- **IDs:** `gemini-4-argon` (Gemini API, Zen); `google/gemini-4-argon` (OpenRouter).
- **Context window:** **1M tokens**, described in Argon's model card as a *combined* input-and-output window (per NeuralTrust's reading) — so the output budget eats into the total. BenchLM and Artificial Analysis both list 1M. Max output not separately published.
- **Modalities:** **text, image, video and speech input; text output** (per NeuralTrust's reading of the model card and the Gemini 4 Carbon comparison). Reasoning model; no published reasoning-effort taxonomy.
- **Pricing (as of 2026-11-05):** **$2 input / $0.10 cached / $10 output per 1M — but only through November 30, 2026.** From **December 1, 2026 it rises to $4 / $0.20 / $20**, with no announced extension. Batch and Flex are $1/$5 through Nov 30 then $2/$10; Priority is $3.60/$18 then $7.20/$36. Explicit caching is unsupported; caching is implicit.
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

BenchLM's 45-row catalog is used as the index; every figure is attributed to Google's own evaluation methodology, Artificial Analysis's independent runs, ARC Prize, Epoch AI, Cognition, Collinear, Kaggle, LlamaIndex, OpenRouter or a third-party leaderboard. Vendor-vs-independent conflicts are shown side by side.

Agent / tool use:

- **AA AutomationBench: 77.5%** — notably, Artificial Analysis measures this *higher* than Google's own AutomationBench figure of **51.3%** (two different benchmarks with confusingly similar names; both kept distinct)
- Finance Agent v2: **65.4%**; AA-AnalystAgent: 48.8%
- OSWorld 2.0: **69.2%** (Google); OSWorld 2.1 Offline: **74.7%**
- Terminal-Bench 4.0: **57.4%** (Google)
- Terminal-Bench-Science 0.1 (6x verifier timeout): **57.6%**
- Agents' Last Exam: **39.5%**; **MazeBench: 12%** — both weak, and the reason this is not a top-tier tool-use score
- GDPval-AA: **56.2%** normalized (AA); CWE-bench v1: 68.0%; ExploitGym: 39.5%
- **τ³-Banking: no verified public score found**; **Claw-Eval: no verified public score found**

Reasoning / knowledge:

- ARC-AGI-1: **98.5%**; ARC-AGI-2: **91.3%**; ARC-AGI-3: **46.3%** (ARC Prize semi-private; the Provider-Adapter run gives 97.3% — a harness-dependent 51-point spread on ARC-AGI-3)
- AA-HLE: **57.1%**; LABBench2: **88.8%**
- **FrontierMath v2 Tier 4: 78.05%**; Tiers 1–3: **85.97%** (Epoch AI)
- **AA-Omniscience: index 46.1, accuracy 48.3%, hallucination rate 4.3%** — the second-lowest hallucination rate measured in this research series, behind only Gemini 4 Carbon's 11% (well, ahead of it) and Muse Spark 1.3's 23%
- Artificial Analysis Intelligence Index: **50.4**; AA-LCR: **79.7%**; CritPt: **27.1%**; STEMBench: 2.44
- **GPQA Diamond: no verified public score found**; **MRCR: no verified public score found**

Coding:

- DeepSWE: **77.9%** (Google) — clears the 74% frontier reference
- Vibe Code Bench: **91.90%** (Google) — the strongest single vibe-coding figure in this series
- ScarfBench: 75.2%; AA-SciCode: **61.8%** (clears the 55% reference)
- Terminal-Bench 4.0: 57.4%; FrontierSWE v2: 55.0%; **FrontierCode 2.0: 26.3%**
- PostTrainBench v1.1: 45.3%; Bug Hunt Bench: 40.7 fixes
- SWE-bench Verified / SWE-bench Pro: **no verified public score found** for this exact ID

Long context:

- **GraphWalks BFS 128K: 99.7%**; GraphWalks BFS 256K–1M: **84.2%**; AA-LCR: 79.7%
- No MRCR run published.

Multimodal:

- **LVBench (long video): 91.7%**; Design Arena (website): 1,316 Elo
- Chartography (no tools): 71.6%; Blueprint-Bench 2: 54.4%; **ExtractBench Pro: 30%** — document extraction is the weak spot
- MMMU-Pro: **no verified public score found**

Safety:

- Gray Swan indirect prompt injection (15 attempts): **0.7%** — between Gemini 4 Carbon's 0.0% and Muse Spark 1.3's 8.5%

### Normalized scores (1–100)

- **Tool use: 82/100.** Middle-high of the band. AA AutomationBench 77.5%, OSWorld 2.1 Offline 74.7% and Finance Agent v2 65.4% are solid, and Terminal-Bench 4.0 57.4% is above several peers. Capped hard by Agents' Last Exam 39.5% and MazeBench 12%, plus the complete absence of τ³-Banking, GDPval-Elo and Claw-Eval figures — the three metrics the methodology uses as its frontier reference are all unmeasured.
- **Reasoning: 89/100.** ARC-AGI-2 91.3%, AA-HLE 57.1%, FrontierMath Tier 4 78.05%, LABBench2 88.8% and an AA Intelligence Index of 50.4 are all strong, and the 4.3% hallucination rate is the best reliability profile measured in this series. Capped by CritPt 27.1%, ARC-AGI-3 46.3% (vs 97.3% on the provider-adapter harness — a harness artifact that makes the number unusable), an AA index below the 60+ frontier reference, and no published GPQA Diamond or MRCR.
- **Context window: 97/100.** 1M-token tier with the best measured long-context retrieval in this series: GraphWalks BFS **99.7% at 128K** and 84.2% at 256K–1M, plus LVBench 91.7% on long video and AA-LCR 79.7%. Held under 100 because the model card describes a *combined* input+output window (so effective input capacity is below 1M in practice) and no MRCR figure exists.
- **Multimodal: 92/100.** Text + image + video + **speech** input places it in the methodology's 90–100 "audio in" tier, and the depth supports the upper part of that band: LVBench 91.7% on long video, Design Arena 1,316 Elo, Chartography 71.6% without tools. Held below 95 by text-only output, a weak ExtractBench Pro (30%) and no published MMMU-Pro.
- **Coding: 88/100.** DeepSWE 77.9% clears the 74% frontier reference and AA-SciCode 61.8% clears the 55% reference, with Vibe Code Bench 91.90% the strongest single result in that harness. Capped by FrontierCode 2.0 26.3%, FrontierSWE v2 55.0%, and no published SWE-bench Verified or Pro figure at all.
- **Cost efficiency: 78/100.** The cheapest durable option among the frontier models researched, but time-limited: $2/$0.10/$10 with 50% off at Zen and Batch/Flex at $1/$5 is roughly a 90 on the methodology's scale, and AA measured Argon at **$1.99 per index task** — the cheapest frontier-tier figure found. It reverts to $4/$20 on **December 1, 2026** with no announced extension, which is roughly a 55. Scored between the two, with the caveat that the favourable half of this score expires in under a month.
- **Overall Score: 90/100.** (82 + 89 + 97 + 92 + 88) / 5 = 89.6 → 90. Recommendation: the best all-round frontier model for reliability-sensitive work at a low price — it pairs the series' lowest hallucination rate (4.3%) with #1-of-series GraphWalks retrieval at 128K and full video/speech input. Buy it before December 1, 2026 if the introductory rate matters. Do not pick it as a pure coding agent (FrontierCode 2.0 26.3%, no SWE-bench figure) or for long-horizon autonomous computer use (Agents' Last Exam 39.5%).

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-05
- Method: re-research using Google's Gemini 4 Argon evaluation methodology as the primary source, cross-checked against BenchLM's 45-row catalog (which attributes each number to Google's methodology, Artificial Analysis, ARC Prize, Epoch AI, Cognition, Collinear, Kaggle, LlamaIndex or OpenRouter), NeuralTrust's model-card reading for context/modality/pricing detail, and OpenCode Zen's pricing table. Conflicting figures are listed side by side — AutomationBench 51.3% (vendor benchmark) vs 77.5% (AA benchmark), and ARC-AGI-3 46.3% vs 97.3% across harnesses — rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google DeepMind — Gemini 4 Argon evaluation methodology](https://deepmind.google/models/evals-methodology/gemini-4-argon)
  - [Google — Gemini API pricing (introductory rate expiry, Batch/Flex/Priority tiers)](https://ai.google.dev/gemini-api/docs/pricing)
  - [BenchLM — Gemini 4 Argon benchmark scores (45 rows, 82.28/100, #5/1009)](https://benchlm.ai/models/gemini-4-argon)
  - [Artificial Analysis — Gemini 4 Argon](https://artificialanalysis.ai/models/gemini-4-argon)
  - [ARC Prize — published semi-private results for Gemini 4 Argon](https://arcprize.org/results/google-gemini-4-argon)
  - [NeuralTrust — Gemini 4 Argon benchmarks, pricing & security](https://neuraltrust.ai/blog/gemini-4-argon)
  - [Epoch AI — FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
