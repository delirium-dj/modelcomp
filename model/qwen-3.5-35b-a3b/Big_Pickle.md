# Qwen3.5-35B-A3B — findings by Big Pickle

- Source: OpenCode (`opencode/big-pickle`)
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-35B-A3B
- **Short description:** Alibaba's February 2026 open-weight **sparse-MoE** "efficiency" model of the Qwen3.5 medium series: 35B total parameters with only **3B active per token**, native vision-language with a Gated DeltaNet + MoE hybrid, 262K native context. It is the cheapest *and* fastest of the medium lineup (only 3B active parameters) and the best of them on τ²-Bench Telecom (89.2%) and TAU2-Bench (81.2%), but it is the **weakest of the three on coding** (SWE-bench Verified 69.2%, LiveCodeBench v6 74.6%) and on raw long-context retrieval (AA-LCR 58.5% vs 66.1% for the dense 27B). It is a **distinct checkpoint** from the dense 27B and 122B-A10B, but it is the *weights behind* the hosted **Qwen3.5-Flash** serving profile, so Flash is not an unrelated model.
- **Provider / access:** Open weights (Apache 2.0) on Hugging Face (`Qwen/Qwen3.5-35B-A3B`, plus an official `-FP8` quantisation) and ModelScope; hosted on Alibaba Cloud Model Studio / DashScope OpenAI-compatible mode (`qwen3.5-35b-a3b`, `https://dashscope.aliyuncs.com/compatible-mode/v1`, Chat Completions) with separate thinking / non-thinking output prices; OpenRouter (`qwen/qwen3.5-35b-a3b`) routing to Venice, Darkbloom, Alibaba Cloud Intl., DeepInfra, SiliconFlow, Parasail and AtlasCloud. **Not on OpenCode Zen** — no `opencode/…` route and no Free ID.
- **Release / knowledge:** released 2026-02-24 (series announced 2026-02-16); OpenRouter lists it since 2026-02-25, Hugging Face card published 2026-03-09. No knowledge-cutoff date is published on the model card.
- **IDs:** `Qwen/Qwen3.5-35B-A3B` and `Qwen/Qwen3.5-35B-A3B-FP8` (HF weights) · `qwen3.5-35b-a3b` (Model Studio / DashScope) · `qwen/qwen3.5-35b-a3b` (OpenRouter) · `qwen3.5-35b-a3b` (DeepInfra) · `qwen3.5-35b-a3b` (Venice, Parasail, AtlasCloud, SiliconFlow, Darkbloom). No Free ID on OpenCode Zen.
- **Context window:** 262,144 tokens **native** (confirmed by Model Studio, OpenRouter, Artificial Analysis, BenchLM, LMSpeed and the model card); the card documents a YaRN-based extension of the context window to ~1,010,000 tokens as a non-native scaling option (rope_type `yarn`, factor 4.0). Max output 81,920 tokens (OpenRouter; AA/aggregators list 262K context). No host advertises 1M as the default window for this checkpoint — that belongs to Qwen3.5-Flash / Qwen3.5-Plus.
- **Modalities:** text, image **and video** in (native early-fusion VLM); text out; thinking mode on by default (Model Studio prices non-thinking and thinking output separately at the same $2.00 rate for this model); tool calling (BFCL-V4 67.3%, TIR-Bench 55.5/38.0, V\* 92.7/89.5); structured/JSON output and `tool_choice` supported by the hosted routes; **no** audio input, **no** non-text output.
- **Pricing (as of 2026-10-22):** Model Studio International $0.25 in / $2.00 out per 1M; Model Studio China/Germany $0.057 in / $0.459 out up to 128K and $0.229 / $1.835 for 128K–256K. OpenRouter from **$0.065 in / $0.75 out** (Darkbloom) up to $0.24 / $1.80 (SiliconFlow), with Alibaba Cloud Intl. at $0.1625 / $1.30 and the commonly routed DeepInfra/Venice/Parasail tier at **$0.14 / $1.00**; cache reads $0.05 per 1M (OpenRouter). Artificial Analysis blends a 7:2:1 cache/input/output mix to **$0.425 per 1M** — the cheapest blended price of the Qwen3.5 medium lineup. Self-hosting is free (Apache 2.0 weights) and cheap to serve because only 3B parameters are active.
- **Architecture:** MoE, 35B total / **3B activated** (Artificial Analysis lists 36B total / 3B active), hybrid Gated DeltaNet linear attention + sparse MoE, 40 layers, hidden dimension 2,048, 256 experts with 8 routed + 1 shared, expert intermediate dimension 512; vision encoder built in (image + video). Apache 2.0 open weights, commercial use without restrictions.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **40.5%** (Qwen3.5-35B-A3B model card, vendor harness)
- Terminal-Bench 2.1: **40.8%** (Artificial Analysis, non-reasoning profile) — *conflicting: the Vals AI Terminal-Bench 2.1 mirror reports **35.3%** (estimated ±6.3 pp) for the same model; different harness*
- Terminal-Bench Hard: **26.5%** (AA, reasoning profile) / **10.6%** (AA, non-reasoning)
- Terminal-Bench 4.0: no separate public score found (it is one of the ten components of the AA Intelligence Index v4.3.2, where this model has no completed independent run)
- TAU2-Bench: **81.2%** (model card, official setup + Claude Opus 4.5 airline fixes) — highest of the Qwen3.5 medium lineup
- τ²-Bench Telecom: **89.2%** (Artificial Analysis)
- BFCL-V4: **67.3%** (model card)
- TIR-Bench: **55.5% / 38.0%** (with / without chain-of-interaction; model card)
- V\* (visual agent): **92.7% / 89.5%** (with / without CI; model card)
- HLE with tools: **47.4%** (model card) — vs 22.4% without tools
- BrowseComp: **61.0%**; BrowseComp-zh 69.5%; WideSearch 57.1%; Seal-0 41.4% (model card)
- OSWorld-Verified: **54.5%**; AndroidWorld **71.1%** (model card — highest of the medium lineup)
- DeepPlanning: **22.8%** (model card)
- GDPval-AA: **608 Elo** (AA Intelligence Index v4.3.2, GDPval-AA v2.1, reasoning profile) — *conflicting unit: OpenRouter's AA mirror lists GDPval-AA as **5.4%** for the non-reasoning profile and BenchLM-style aggregators as **22.7%** (estimated ±7.7 pp); these are different index revisions*
- AutomationBench-AA: **18.6%** (estimated ±10.5 pp, third-party aggregator)
- AA Agentic Index: **6.8** (estimated) — *conflicting: the OpenRouter-mirrored value is **11.8***
- Claw-Eval: **52.9%** (estimated ±6.2 pp — not a measured vendor score); ClawProBench: no verified public score found
- MCP Atlas: **49.3%** (estimated ±11.1 pp); Toolathlon **32.6%** / Toolathlon-Verified **45.7%** (both estimated)
- APEX-Agents-AA: **11.5%** (estimated); Gert Labs (agentic) **28.96%** (BenchLM)
- ITBench-AA (K8s incident RCA): **21.5%** average precision at full recall (5th percentile of the field, self-reported); AgentWorldBench 47.73; AgentCollabBench IDR 0.9% / CPR 20.7% / RTD 94.0% / CLC 4.7% (best of the four models tested on tracer durability and instruction stability, worst on instruction decay)

Reasoning / knowledge:

- GPQA Diamond: **84.2%** (model card) · **84.5%** (Artificial Analysis) · 84.3% (aggregator estimate) · 83.46% (independent snapshot) — *conflicting: the Vals AI mirror reports **77.3%** (estimated)*
- HLE: **21.0%** (AA) · **22.4%** (model card, w/ CoT) · 17.6% / 17.8% (aggregator estimates without tools) · HLE w/ tools 43.9% (estimated)
- MMLU-Pro: **85.3%** (model card, reproduced as measured by aggregators) — *conflicting: Arcee **80.5%** and Vals **80.4%** (both estimated)*
- MMLU-Redux: **93.3%**; C-Eval 90.2% (card) / 91.4% (estimated); SuperGPQA **63.4%**
- IFEval: **91.9%**; IFBench **70.2%** (card) — *conflicting: AA reports IFBench **72.5%**, aggregator estimate 71.4%*; MultiChallenge 60.0%
- HMMT Feb 2026: **89.0%**; HMMT Nov 2025 **89.2%** (model card)
- AA-LCR: **58.5%** (model card) — *conflicting: **72.0%** on AA-LCR v1.1 (AA reasoning) and **63.0%** (AA non-reasoning)*
- LongBench v2: **59.0%** (model card)
- CritPt: **0.9%** (AA)
- AA-Omniscience Accuracy **20.1%** / Non-Hallucination Rate **14.6%** (reasoning profile); 15.7% / 6.6% (non-reasoning); the composite Omniscience index is **−48** (reasoning) / **−63** (non-reasoning)
- Artificial Analysis Intelligence Index: **19.3** (reasoning, estimated) / **15.1** (non-reasoning) — #12 of 141 on the AA Intelligence board; AA Coding Index 37.0 (non-reasoning) / 38.6 (estimated)
- BenchLM overall: **45.78/100, #120 of 972** (32 of 668 benchmarks covered; the page explicitly flags the score as conservative). Instruction-following average 88.8
- LMSpeed overall: **55.0, #95 of 130**
- Airating composite: **60.4, #120** (Reasoning 39% → 45.4; Code 20% → 58.9; Image 12% → 63.3; Text 24% → 81.0; Math 5% → no data)
- LMArena: **1394.5** style-controlled overall (Oct 2026 snapshot), **#157** general-LLM rank (2,801 votes); category splits: coding 1434.6 (#166), factuality 1407.5 (#138), math 1398.2 (#146), WebDev **1253.8** (#113), long context #162. For comparison the sibling checkpoints score 1408.9 (27B) and 1417.3 (122B-A10B) on the same scale.

Coding:

- SWE-bench Verified: **69.2%** (model card, reproduced as measured)
- SWE-bench Pro: **46.4%** (estimated ±4.6 pp); SWE-Rebench **53.7%** (measured)
- LiveCodeBench v6: **74.6%** (model card) · 72.4% (estimated) · Vals LiveCodeBench 66.2% (estimated)
- Terminal-Bench 2.0: 40.5% (see tool use); 2.1: 40.8% (AA) / 35.3% (Vals, estimated); Hard 26.5% (AA reasoning)
- CodeForces: **2028** (vendor's own query set — not comparable to Elo ratings on the public set); OJBench 36.0; FullStackBench en **58.1** / zh 55.0
- SciCode / AA-SciCode: **43.3%** (estimated ±3.9 pp); 43.0% (second estimate)
- AA Coding Index: **37.0** (AA) / 38.6 (estimated) — the lowest of the Qwen3.5 medium lineup
- Vibe Code Bench: **0.7%** (estimated ±8.1 pp)
- DeepSWE: **24.3%** (estimated ±12.7 pp); FrontierCode 1.1 Main 3.0% (estimated); NL2Repo 22.6% (estimated); SWE Multilingual 68.1% (estimated)
- ARC-AGI-1 45.4%, ARC-AGI-2 15.5% (both estimated)

Long context:

- AA-LCR v1.1: **72.0%** (AA reasoning) / 63.0% (AA non-reasoning) / 58.5% (vendor card) — the vendor and independent numbers disagree by up to 13.5 pp
- LongBench v2: **59.0%** (vendor card)
- MRCRv2: **80.1%** (estimated ±11.3 pp) — provisional; no vendor-confirmed MRCR / RULER / GraphWalks figure
- YaRN extension to ~1,010,000 tokens is documented on the card, but **no retrieval score beyond 262K** is published for this checkpoint → no verified public score found

### Normalized scores (1–100)

- **Tool use: 71/100.** The agent axis is the model's best suit — TAU2-Bench 81.2% (best in the medium lineup), τ²-Bench Telecom 89.2%, BFCL-V4 67.3%, TIR-Bench 55.5%, BrowseComp 61.0%, AndroidWorld 71.1% — and it beats the 122B on the τ²-bench and TAU2 axes; what caps the score is the independent agentic picture (AA Agentic Index 6.8–11.8, AutomationBench-AA 18.6%, Terminal-Bench Hard 26.5%, GDPval-AA 608, ITBench-AA 21.5%) and the fact that Claw-Eval, MCP Atlas and Toolathlon exist only as third-party *estimates*.
- **Reasoning: 70/100.** Solid STEM breadth — GPQA Diamond 84.2–84.5%, MMLU-Pro 85.3%, SuperGPQA 63.4%, HMMT 89.0/89.2, IFEval 91.9% — but the ceiling is low (HLE 21.0–22.4%, CritPt 0.9%, AA-Omniscience accuracy 20.1% with a −48 hallucination index, AA Intelligence Index only 19.3/15.1), and every aggregate ranks it below its siblings: BenchLM 45.78 (#120), LMSpeed 55.0 (#95), LMArena 1394.5 (#157) vs 1408.9 for the dense 27B.
- **Context window: 78/100.** 262,144 tokens native, confirmed by every host and benchmark board (Model Studio, OpenRouter, AA, BenchLM, LMSpeed) — the 200K–500K tier — with mid-tier retrieval (LongBench v2 59.0%, AA-LCR 58.5% vendor vs 72.0% independent); the ~1.01M figure is a YaRN extrapolation with no published retrieval score beyond 262K, so it earns no tier credit.
- **Multimodal: 82/100.** Genuinely multimodal with video — MMMU 81.4%, MathVista 86.2%, MathVision 83.9%, OmniDocBench 89.3%, OCRBench 91.0%, AI2D 92.6%, VideoMME 86.6%, MLVU 85.6%, plus spatial work (ERQA 64.8%, CountBench 97.8%, RefCOCO 89.2%) and visual-agent scores (V\* 92.7, ScreenSpot-Pro 68.6, OSWorld 54.5); it stays under the 122B because the independent mirrors score it lower (AA MMMU-Pro 72.7% vs the card's 75.1%, ScreenSpot-Pro 63.3%), the Video-MME-v2 paper ranks it *below* the dense 27B, there is no audio input, and grounding remains weak (ZEROBench 8, Hypersim 13.1, Nuscene 14.6).
- **Coding: 69/100.** SWE-bench Verified 69.2% and LiveCodeBench v6 74.6% are the weakest of the three Qwen3.5 medium checkpoints, with CodeForces 2028 on a vendor query set, FullStackBench en 58.1%, SciCode ~43%, an AA Coding Index of only 37.0, plus near-zero Vibe Code Bench (0.7%) and low DeepSWE (24.3%); terminal-style coding is the weak spot (Terminal-Bench 2.0 40.5%).
- **Cost efficiency: 95/100.** The cheapest credible option in the class: $0.14 / $1.00 per 1M on the mainstream OpenRouter routes and as low as $0.065 / $0.75, $0.25 / $2.00 on Model Studio, an AA blended $0.425 per 1M (7:2:1 mix) — and, uniquely here, Apache 2.0 weights that need only **3B active parameters** to serve, making self-hosting roughly an order of magnitude cheaper than the 27B or 122B.
- **Overall Score: 74/100.** Mean of the five quality dims (71 + 70 + 78 + 82 + 69) / 5 = 74.0 → 74 — the best value-per-dollar open-weight multimodal model of the Qwen3.5 medium generation; pick it when always-on agent throughput matters, and the 27B or 122B-A10B when terminal-agent autonomy and coding accuracy matter more.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-22
- Method: public internet research (official Hugging Face model card including its Language and Vision-Language evaluation tables, the Qwen3.5 release blog and GitHub repo, Artificial Analysis model / provider / comparison pages, OpenRouter and Alibaba Cloud Model Studio pricing catalogues, BenchLM, LMSpeed, Airating, LMArena leaderboard snapshots, the Video-MME-v2 arXiv paper, third-party benchmark aggregators and the BenchmarkList per-benchmark board). Conflicting figures are listed side by side with their harness and index revision; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
