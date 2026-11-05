# Claude Opus 5.5 — findings by Step 5 Preview

- Source: Anthropic (`claude-opus-5-5`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5. **The current Anthropic flagship** ("Status: Active (latest)"), released 2026-09-22, retirement not sooner than 2027-09-22.
- **Short description:** Anthropic's model for long-running agentic coding and knowledge work — multihour autonomous coding agents, large-scale refactoring, complex systems engineering, vision-heavy workflows and computer use. BenchLM scores it 86.29/100, #2 of 1009 models.
- **Provider / access:** Claude API, Amazon Bedrock (`anthropic.claude-opus-5-5`), Claude Models on Google Cloud (Google managed and Anthropic managed), Microsoft Foundry, Claude Platform on AWS. Also on OpenCode Zen (`opencode/claude-opus-5-5` at $4/$20/$0.20). A separately-priced **Fast mode** exists for lower latency.
- **Release / knowledge:** released **2026-09-22**; reliable knowledge cutoff and training data cutoff both **Jun 2026** (stated explicitly by Anthropic).
- **IDs:** `claude-opus-5-5` (all platforms use the same dateless pinned ID).
- **Context window:** **1M tokens** (~555k words / 2.5M Unicode chars on the Opus 4.7+ tokenizer); **max output 128K** synchronous, and **up to 300K on the Message Batches API** with the `output-300k-2026-03-24` beta header — the largest output allowance in the Claude lineup. Minimum cacheable prompt 512 tokens.
- **Modalities:** **text and images in → text out** (Anthropic states this explicitly). Adaptive thinking is **always on and cannot be disabled**; depth is controlled only via the `effort` parameter, default `medium`.
- **Pricing (as of 2026-11-05):** **$4 input / $20 output per MTok**; cache reads $0.20 (5% of base), 5m cache write $5, 1h cache write $8; **Batch API 50% off**. Zen re-sells at the same $4/$20/$0.20.
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

BenchLM's 91-row catalog is used as the index, since it cites each number's origin — Anthropic's own launch post and system card, Artificial Analysis's independent runs, and third-party leaderboards (ARC Prize, Epoch AI, Cognition, Cursor, Collinear, Kaggle, LlamaIndex, OpenRouter). Where Anthropic and AA measure the same benchmark, both are shown.

Agent / tool use:

- **GDPval-AA: 1,846 Elo** (Anthropic) / **68.3%** normalized (Artificial Analysis)
- AA Briefcase: **1,800 Elo**; AA Harvey LAB v1.0: **91.2%**
- AA AutomationBench: **69.5%** (note: Anthropic's separate "AutomationBench" figure is 40.0% — a different benchmark with a similar name, kept distinct)
- Toolathlon-Verified: **77.8%** (Pass@3 82.4%, Pass³ 72.2%, mean 26.9 turns)
- OSWorld 2.1: **81.8%**; OSWorld 2.1 Offline: **87.2%**; OSWorld 2.0: 48.7% (system-card run on the older, harder-in-this-harness benchmark)
- Terminal-Bench 4.0: **66.4%** (Anthropic) / **59.6%** (AA) — a 6.8-point vendor-vs-independent gap
- Terminal-Bench-Science 0.1: **58.7%**
- AA-AnalystAgent: 56.3%; AA ITBench: 38.2%; Hermes Bench: 76.7%; Hermes Index: 63.3%
- GDP.pdf: 26.2%; **MazeBench: 13%**; OfficeQA Pro: 67.7%
- CWE-bench v1: 67.0%; AA Cyber Index 28.7%; CyberGym-E2E-AA 0.8%
- **τ³-Banking: no verified public score found**; **Claw-Eval: no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **58.4** (BenchLM overall #2/1009)
- AA-HLE: **61.4%**; HLE without tools **64.4%** (system card); HLE with tools **67.7%**
- ARC-AGI-1: **97.5%**; ARC-AGI-2: **91.7%** (ARC Prize semi-private)
- **FrontierMath v2 Tier 4: 95.0%**; FrontierMath v2 Tiers 1–3: 91.2% (Epoch AI)
- ArXivMath Aug 2026: **91.2%** no tools / **96.9%** with tools
- AA-LCR: **84.7%**; GraphWalks BFS 256K–1M: **66.8%**; MLCR-AA: **27.8%**
- **CritPt: 31.7%** — the clearest weakness, and the reason it does not sit with GPT-6 Astra on scientific reasoning
- AA-Omniscience: index **48.1**, accuracy **65.5%**, hallucination rate **50.3%**
- GMMLU: 94.3%; MILU: 93.1%; STEMBench: 2.62
- **GPQA Diamond: no verified public score found** — Anthropic does not publish one and AA's leaderboard entry is absent from BenchLM's catalog
- **MRCR: no verified public score found**

Coding:

- **SWE-bench Pro: 89.9%**; SWE Multilingual: **93.9%**; SWE Multimodal: 61.4%
- DeepSWE: **74.2%**; ProgramBench: **91.2%**
- Terminal-Bench 4.0: 66.4% / 59.6%; AA-SciCode: **66.9%**
- FrontierCode 1.1 Main 54.4% / Extended 63.6%; **FrontierCode 2.0: 45.5%**; FrontierSWE v2: 62.3%
- CursorBench 4.0: 57.8%; PostTrainBench v1.1: 49.3%; ScarfBench: 70.5%; Bug Hunt Bench: 41.7 fixes
- SWE-bench Verified: **no verified public score found** for this exact ID

Multimodal (image-in evidence, all on a text+image-only model):

- AA-MMMU-Pro: **87.7%**; Chartography: **89.0%** with tools / 64.4% without
- BenchCAD Vision2Code: **0.962** with tools / 0.730 without; ExtractBench: 86.06%; ParseBench: 78.89%; ExtractBench Pro: 51%
- OfficeQA: 78.9%; Design Arena (website): 1,326 Elo; biomedical image analysis: 71.4%; SpatialBench: 72.0%

Life sciences / professional (supporting evidence of long-horizon autonomy):

- HealthBench raw 68.1% / length-adjusted 60.6% / Professional 65.6% / Professional raw 77.1%
- De novo protein-binder design 82.6%; Protein Design 60.2%; Medicinal chemistry 63.5%; Protocols (troubleshooting) 73.7%; SingleCellBench 61.2%; BioMysteryBench 89.3% (human-solvable) / 50.0% (human-difficult)

Safety:

- Gray Swan indirect prompt injection (15 attempts): **1.0%** — far below Gemini 4 Carbon's 0.0% and Muse Spark 1.3's 8.5%, but the weakest of the three Anthropic safeguards numbers reported here

### Normalized scores (1–100)

- **Tool use: 94/100.** Clears the frontier reference on the metrics that exist — GDPval-AA 1,846 Elo above the 1,750 reference, plus AA Briefcase 1,800, Harvey LAB-AA 91.2%, Toolathlon-Verified 77.8% and OSWorld 2.1 81.8%. Capped by three gaps: no τ³-Banking or Claw-Eval figure at all, Terminal-Bench 4.0 measured 6.8 points lower by AA (59.6%) than by Anthropic (66.4%), and MazeBench 13% / AA ITBench 38.2%.
- **Reasoning: 94/100.** ARC-AGI-2 91.7%, FrontierMath Tier 4 95.0%, ArXivMath 96.9% with tools, AA-HLE 61.4% and an AA Intelligence Index of 58.4 (#2 of 1009) are all at or near frontier. Capped by CritPt 31.7%, MLCR-AA 27.8%, a 50.3% hallucination rate, and **no published GPQA Diamond or MRCR figure** to check the two frontier reference points that are missing.
- **Context window: 96/100.** 1M-token tier with the largest output allowance in the Claude lineup (128K synchronous, 300K on Batch) and AA-LCR 84.7%. Held just under 100 because no MRCR retrieval figure exists and GraphWalks BFS at 256K–1M is 66.8%.
- **Multimodal: 70/100.** Text + image in with text out places it at the top of the methodology's "+image in" 60–70 band; the band reflects *coverage*, and Anthropic confirms no video or audio input. Justification for the ceiling: the measured depth inside that band is exceptional — MMMU-Pro 87.7%, Chartography 89.0% with tools, BenchCAD Vision2Code 0.962, ExtractBench 86.06% — so it is the strongest image-in-only model researched, but it cannot enter the 75–90 video/PDF tier.
- **Coding: 96/100.** SWE-bench Pro 89.9%, DeepSWE 74.2% (clears the 74% reference), SciCode 66.9% (clears the 55% reference), ProgramBench 91.2% and SWE Multilingual 93.9% all clear the frontier band, and BenchLM ranks it #2 of 1009 overall. Capped by FrontierCode 2.0 45.5%, FrontierSWE v2 62.3% and no published SWE-bench Verified number.
- **Cost efficiency: 56/100.** $4/$20 per MTok sits between the methodology's ~$3/$15 (≈60) and ~$10/$50 (≈30) anchors — the same rate card as Muse Wonder, which AA measured at $5.98 per index task against GPT-6 Astra's $6.25 and Muse Spark 1.3's $1.60. Mitigators: a 95% cache-read discount ($0.20), 50% Batch pricing and a separately-priced Fast mode. No free tier exists.
- **Overall Score: 90/100.** (94 + 94 + 96 + 70 + 96) / 5 = 90.0 → 90. Recommendation: the default choice for long-horizon agentic coding and knowledge work at the frontier, and the only model here with simultaneously top-quartile GDPval-AA, SWE-bench Pro, DeepSWE and life-science autonomy. It is not the value leader — GPT-6.1 Sol is pitched as close in ability at roughly a fifth of the per-task cost — and it is not the top scientific reasoner (CritPt 31.7% vs GPT-6 Astra's profile), so route maths/physics-heavy work elsewhere.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-05
- Method: re-research using Anthropic's official Opus 5.5 model documentation (specs, pricing, IDs, availability, effort/thinking behaviour) as the primary source, cross-checked against BenchLM's 91-row catalog — which attributes every number to its origin (Anthropic launch post, Anthropic system card, Artificial Analysis, ARC Prize, Epoch AI, Cognition, Cursor, Collinear, Kaggle, LlamaIndex, OpenRouter) — plus the Anthropic models-overview comparison table and OpenCode Zen pricing. Vendor-vs-independent conflicts are listed side by side (Terminal-Bench 4.0 66.4% vs 59.6%; AutomationBench 40.0% vendor benchmark vs 69.5% AA benchmark) rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Claude Opus 5.5 model documentation](https://platform.claude.com/docs/en/models/opus-5-5/overview)
  - [Anthropic — Introducing Claude Opus 5.5](https://www.anthropic.com/claude-opus-5-5)
  - [Anthropic — Claude Opus 5.5 system card](https://www.anthropic.com/claude-opus-5-5-system-card)
  - [BenchLM — Claude Opus 5.5 benchmark scores (91 rows, 86.29/100, #2/1009)](https://benchlm.ai/models/claude-opus-5-5)
  - [Artificial Analysis — Claude Opus 5.5](https://artificialanalysis.ai/models/claude-opus-5-5)
  - [ARC Prize — published semi-private results for Claude Opus 5.5](https://arcprize.org/results/anthropic-claude-opus-5-5)
  - [Epoch AI — FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
