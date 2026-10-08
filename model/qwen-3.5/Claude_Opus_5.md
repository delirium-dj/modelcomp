# Qwen 3.5 — findings by Claude Opus 5

- Source: Alibaba Cloud / Qwen team (`qwen3.5`, reference model `Qwen3.5-397B-A17B`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 (series; reference/flagship checkpoint **Qwen3.5-397B-A17B**)
- **Short description:** Alibaba's February-2026 flagship generation, announced as "Qwen3.5: Towards Native Multimodal Agents" — the first Qwen generation that is a **native vision-language model** rather than a text model with a bolted-on vision tower, built on a hybrid linear-attention + sparse-MoE stack for cheap long-context decoding. **This folder tracks the generation, not one SKU:** Alibaba shipped it as an open-weight flagship (`Qwen3.5-397B-A17B`) plus hosted `Plus`/`Flash` tiers and smaller open checkpoints (27B, 35B-A3B, 122B-A10B, 9B), several of which have their own folders in this repo (`qwen-3.5-plus`, `qwen-3.5-397b`, `qwen-3.5-9b`). Every number below is tagged with the exact checkpoint it was measured on; where only the flagship was measured, that is stated rather than generalized.
- **Provider / access:** Open weights on Hugging Face and ModelScope (`Qwen/Qwen3.5-397B-A17B`); hosted via Alibaba Cloud Model Studio (OpenAI-compatible Chat Completions), QwenCloud, Qwen Chat, and third-party routers including OpenRouter (`qwen/qwen3.5-plus-02-15`, `qwen/qwen3.5-plus-20260420`). This repo records the local route `opencode/qwen-3.5`. Chat Completions style, not a Responses API.
- **Release / knowledge:** **2026-02-16** official release ([Alibaba Cloud blog](https://www.alibabacloud.com/blog/qwen3-5-towards-native-multimodal-agents_602894); [Alibaba Group newsroom, 2026-02-16](https://www.alibabagroup.com/document-1960233590314762240)); a `Qwen3.5-Max-Preview` surfaced on LMArena 2026-03-19. Knowledge cutoff: no verified public date found.
- **IDs:** `Qwen/Qwen3.5-397B-A17B` (open weights), `qwen3.5-plus` / `qwen3.5-flash` (Model Studio). **No OpenCode Zen Free ID verified** — but the Apache-2.0 weights are a genuine zero-license-cost path.
- **Context window:** **128K** on the open-weight 397B flagship; **1,000,000 tokens** on hosted `Qwen3.5-Plus` with max output 65,536 tokens ([BenchLM model pages](https://benchlm.ai/models/qwen3-5-397b); [OpenRouter](https://openrouter.ai/qwen/qwen3.5-plus-02-15)). The repo `meta.json` "128K–1M (family range)" is therefore accurate, and the tier this folder tracks is genuinely ambiguous — I score the documented flagship and note the 1M hosted ceiling.
- **Modalities:** **Text + image + video in → text out**, with explicit GUI-interaction grounding; thinking/reasoning is toggleable; tool calls and built-in search / code-interpreter tools on the hosted Plus tier. No audio in the flagship (Alibaba's audio line is the separate Qwen3-Omni / Qwen3-ASR family). No image or audio generation.
- **Pricing (as of 2026-10-08):** Alibaba Cloud Model Studio — **Qwen3.5 397B $0.60 in / $3.60 out per MTok**, **Qwen3.5 Plus $0.40 / $2.40** (1M context), **Qwen3.5 Flash $0.10 / $0.40** ([BenchLM Alibaba API pricing, 2026-10-07](https://benchlm.ai/alibaba/api-pricing)). OpenRouter lists the Feb-2026 Plus snapshot at $0.26 / $1.56 and the Apr-2026 snapshot at $0.30 / $1.80. Model Studio applies tiered input pricing by request size and a 50% batch discount. Self-hosting the open weights is the zero-per-token alternative.
- **Architecture:** Sparse Mixture-of-Experts — **397B total parameters, 17B active** per forward pass, with interleaved **linear-attention** layers; **Apache 2.0** open weights for the 397B flagship and the smaller open checkpoints. Hosted `Plus`/`Flash` tiers are proprietary builds on the same architecture. Alibaba's efficiency claim (relayed by third-party guides, not a first-party number I could verify directly) is 8–19× faster decoding than the prior Qwen3-Max generation at roughly 60% lower cost.

### Raw benchmarks found

> All figures below are for **Qwen3.5-397B-A17B** unless marked otherwise. Where BenchLM cites Alibaba's own `Qwen3.6-Plus` comparison table, the number is a vendor-published figure for the 3.5 flagship republished in a later release post — first-party, but vendor-run.

Agent / tool use:

- τ²-bench (**agentic tool use**): **83.9%** ([Artificial Analysis](https://artificialanalysis.ai/models/qwen3-5-397b-a17b-non-reasoning))
- τ³-bench: **68.4%** ([Qwen comparison table](https://qwen.ai/blog?id=qwen3.6))
- MCP-Tasks: **74.2%**; MCP Atlas: **46.1%**; Toolathlon: **36.3%** (Qwen comparison table)
- WideResearch: **74.0%**; BrowseComp: **62%** ([Qwen3.5-397B-A17B model card](https://huggingface.co/Qwen/Qwen3.5-397B-A17B))
- Terminal-Bench 2.0: **52.5%** (Qwen comparison table). **Terminal-Bench 2.1: no verified public score found** for this model
- Claw-Eval: **56.8%** ([Claw-Eval leaderboard](https://claw-eval.github.io/)); QwenClawBench: **51.8%**; ResearchClawBench: **14.2%** ([leaderboard](https://internscience.github.io/ResearchClawBench-Home/))
- VITA-Bench: **43.7%**; DeepPlanning: **37.6%** (Qwen comparison table)
- Gert Labs rankings: **46.76%** ([Gert Labs](https://gertlabs.com/rankings))
- GDPval-AA: no verified public score found
- JobBench (Qwen3.5 **Plus** tier): **18.5%** ([JobBench paper](https://arxiv.org/abs/2605.26329))

Reasoning / knowledge:

- GPQA: **88.4%** (Qwen comparison table); **AA-GPQA Diamond: 86.1%** (Artificial Analysis); SuperGPQA **70.4%**
- HLE: **28.7%** (Qwen comparison table); **AA-HLE: 19.8%** (Artificial Analysis — the independent harness is roughly 9 points harsher)
- AA-LCR: **64.3%**; LongBench v2: **63.2%**; AI-Needle: **68.7%**
- CritPt: **0.9%** (Artificial Analysis) — effectively zero on frontier physics research
- Artificial Analysis Intelligence Index: **21.4**; BenchLM overall **53.97/100, rank #68 of 887** ([BenchLM](https://benchlm.ai/models/qwen3-5-397b), 49 of 623 benchmarks covered, flagged as conservative)
- AA-Omniscience: Index **−37.9**, Accuracy **24.5%**, **Hallucination Rate 82.7%** — the single worst datapoint in this report
- MMLU-Pro **87.8%**, MMLU-Redux **94.9%**, C-Eval **93%**, MMLU-ProX **84.7%**, NOVA-63 **59.1%** (Qwen comparison table)
- IFEval **92.6%**; AA-IFBench **51.6%**
- AIME 2026: **93.3%**; HMMT Feb 2025 **94.8%**, Nov 2025 **92.7%**, Feb 2026 **87.9%**

Coding:

- SWE-bench Verified: **76.2%**; SWE-bench Pro: **50.9%** (Qwen comparison table)
- LiveCodeBench v6: **83.6%** (Qwen comparison table)
- Vibe Code Bench (Qwen3.5 **Plus** tier): **15.74%** ([Vals AI](https://www.vals.ai/benchmarks/vibe-code))
- SciCode / AA-SciCode: no verified public score found for the 3.5 generation
- FrontierMath v2 (Qwen3.5 **Plus** tier): Tiers 1–3 **21.03%**, Tier 4 **2.08%** ([Epoch AI](https://epoch.ai/benchmarks/frontiermath-tier-4-v2?view=graph&tab=leaderboard))

Multimodal:

- MMMU-Pro: **79%** (Qwen) / **AA-MMMU-Pro 52.7%** (Artificial Analysis — again much harsher)
- V\*: **95.8%**; MathVision: **88.6%**; CharXiv: **80.8%** (Qwen multimodal comparison table)
- VideoMMMU: **84.7%** — genuine video comprehension, not just stills
- ScreenSpot Pro (GUI grounding): **65.6%**

Long context:

- No MRCR or RULER curve published. The quantified long-context evidence is **AI-Needle 68.7%**, **LongBench v2 63.2%**, and **AA-LCR 64.3%** — all mid-band, all measured on the 128K open-weight flagship rather than at the hosted 1M ceiling, so the 1M window is **unvalidated by any public retrieval measurement**.

### Normalized scores (1–100)

- **Tool use: 72/100.** τ²-bench 83.9% and MCP-Tasks 74.2% / WideResearch 74.0% are a respectable agentic base, and BrowseComp 62% shows real search-agent competence; capped well below the frontier by Terminal-Bench 2.0 at only 52.5% (with no 2.1 number at all), Toolathlon 36.3%, DeepPlanning 37.6%, and ResearchClawBench 14.2% — long-horizon, many-tool orchestration is where this generation stops.
- **Reasoning: 74/100.** Strong on structured exams — GPQA 88.4% (86.1% independently), MMLU-Redux 94.9%, AIME 2026 93.3%, IFEval 92.6%; hard-capped by an **82.7% AA-Omniscience hallucination rate** and a −37.9 Omniscience Index (it almost never abstains when it does not know), CritPt 0.9%, AA-HLE 19.8%, and an AA Intelligence Index of 21.4 that places it far behind frontier proprietary models on the aggregate.
- **Context window: 66/100.** The checkpoint Alibaba actually released as "Qwen3.5" carries **128K** — mid-tier by 2026 standards — with the 1M window reserved for the hosted `Plus` build. Credit for the 1M option and for usable mid-band retrieval (AI-Needle 68.7%, LongBench v2 63.2%); held down because the 1M ceiling has **no published retrieval measurement at all**, and because the tier this folder tracks is not pinned.
- **Multimodal: 80/100.** The strongest dimension and the point of the release: a **native** VLM taking text, image **and video** in, with V\* 95.8%, MathVision 88.6%, CharXiv 80.8%, VideoMMMU 84.7% and ScreenSpot Pro 65.6% GUI grounding. Capped below the 90s by text-only output, no audio modality in this family, and Artificial Analysis scoring MMMU-Pro at 52.7% against Alibaba's self-reported 79% — a 26-point vendor-vs-independent gap that has to be priced in.
- **Coding: 72/100.** SWE-bench Verified 76.2% and LiveCodeBench v6 83.6% are solidly useful; capped by SWE-bench Pro 50.9%, by the Plus tier managing only 15.74% on Vals' Vibe Code Bench, and by the absence of any independent (non-vendor) SWE-bench reproduction for this generation.
- **Cost efficiency: 85/100.** $0.60 / $3.60 per MTok for the flagship and $0.40 / $2.40 for the 1M-context Plus tier put it roughly 15× cheaper than frontier proprietary models for ~75–80% of their benchmark performance, and the **Apache 2.0** weights make zero-per-token self-hosting legally available with only 17B active parameters to serve. Short of 100 only because there is no free hosted tier and a 397B MoE still needs serious hardware to self-host.
- **Overall Score: 72.8/100.** Mean of the five non-cost dims (72 + 74 + 66 + 80 + 72) / 5 = 72.8. Best fit: cost-sensitive multimodal and GUI-agent pipelines — document, chart, and video understanding at a fifth of frontier prices — provided the deployment can tolerate a high hallucination rate and does not depend on long-horizon autonomous tool chains.

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-08
- Method: fresh public internet research only — Alibaba's own Qwen3.5 release posts (Alibaba Cloud blog, Alibaba Group newsroom), the Hugging Face model card, BenchLM's aggregated Qwen3.5 397B / Plus pages and its Alibaba API-pricing page, OpenRouter listings, and the underlying Artificial Analysis, Vals AI, Epoch AI, Claw-Eval, ResearchClawBench and Gert Labs leaderboards those pages cite. `qwen.ai/blog?id=qwen3.5` returned no extractable body text, so vendor figures are taken from the mirrors and aggregators that quote it, and every vendor-run number is labelled as such. No peer `model/` findings files were read. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
