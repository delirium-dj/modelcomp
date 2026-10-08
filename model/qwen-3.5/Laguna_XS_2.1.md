# Qwen3.5 (Qwen3.5-397B-A17B) — findings by Laguna XS 2.1

- Source: Alibaba (`Qwen/Qwen3.5-397B-A17B`)
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-397B-A17B (first open-weights model of the Qwen3.5 family)
- **Short description:** Alibaba's natively multimodal open-weights foundation model (Feb 2026) — 397B total / 17B active sparse MoE with hybrid linear attention, Apache 2.0, matching the >1T Qwen3-Max on many evals at a fraction of the compute. Hosted 1M-context sibling: Qwen3.5-Plus.
- **Provider / access:** Hugging Face / ModelScope / GitHub weights (Transformers, vLLM, SGLang, KTransformers; TokenSpeed up to ~580 t/s on B200), Qwen Chat, Alibaba first-party API. Post-trained checkpoint.
- **Release / knowledge:** 2026-02-15/16; knowledge cutoff not published in sources found.
- **IDs:** `Qwen/Qwen3.5-397B-A17B` (HF). No Zen Free ID found.
- **Context window:** 262K tokens (open checkpoint; the hosted Qwen3.5-Plus variant offers 1M).
- **Modalities:** text, image, video in; text out; reasoning yes (thinking mode, post-trained); tool calls yes; JSON mode yes. 201 languages/dialects.
- **Pricing (as of 2026-10-04):** open weights (Apache 2.0) — self-host for hardware cost only; Alibaba API reference $0.60 / $3.60 per 1M in/out (Artificial Analysis listing).
- **Architecture:** 397B total / 17B active sparse MoE with hybrid linear (Gated DeltaNet) + full attention; NVFP4 deployments reach ~580 t/s single-user (TokenSpeed, B200).

### Raw benchmarks found

Agent / tool use:

- TAU2-Bench: **86.7%** (vendor HF card)
- BFCL-V4: **72.9** (vendor)
- BrowseComp: **69.0%** (context-folding) / **78.6%** (discard-all strategy) (vendor)
- WideSearch: **74.0**; DeepPlanning: **34.3**; Tool Decathlon: **38.3**; VITA-Bench: **49.7** (vendor)
- MCP-Mark: **46.1** (vendor)
- GDPval-AA: **1221 Elo** (+361 over Qwen3-235B, Artificial Analysis)
- HLE w/ tool: **48.3%** (vendor); Seal-0: **46.9**
- OSWorld-Verified: **62.2%**; AndroidWorld: **66.8%**; ScreenSpot Pro: **65.6** (vendor vision table)
- Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **88.4%** (vendor)
- HLE: **28.7%** / HLE-Verified **37.6%** (vendor)
- AIME 2026: **91.3%**; HMMT Feb 25 **94.8%** / Nov 25 **92.7%**; IMOAnswerBench **80.9%** (vendor)
- MMLU-Pro: **87.8%**; SuperGPQA: **70.4%**; C-Eval: **93.0%** (vendor)
- AA Intelligence Index: **45** (v4.1 at launch — #3 open weights) / **18** (current v4.3.2 methodology)
- AA-Omniscience Index: **−32** (30% accuracy, **88% hallucination rate** — high vs peers; AA)
- IFBench: **76.5%**; MultiChallenge: **67.6%** (vendor)
- CritPt: no verified public score found

Coding:

- SWE-bench Verified: **76.4%**; SWE-bench Multilingual: **69.3%**; SecCodeBench: **68.3%** (vendor)
- LiveCodeBench v6: **83.6%** (vendor)
- Terminal Bench 2: **52.5%** (vendor)
- DeepSWE / SciCode: no verified public score found in sources checked

Long context:

- AA-LCR: **68.7%**; LongBench v2: **63.2%** (vendor) over the native 262K window

Multimodal (supporting, vendor): MMMU **85.0**, MMMU-Pro **79.0**, MathVision **88.6**, VideoMME **87.5**, MLVU **86.7**, OCRBench **93.1**, CountBench **97.2**, V\* **95.8**, OmniDocBench 1.5 **90.8**, CharXiv **80.8**

### Normalized scores (1–100)

- **Tool use: 80/100.** TAU2 86.7%, BFCL-V4 72.9, BrowseComp 78.6% and GDPval-AA 1221 (+361 gen-over-gen) are strong open-weights agent evidence; capped by MCP-Mark 46.1, TB 2 52.5% and vendor-run harnesses throughout.
- **Reasoning: 81/100.** GPQA 88.4%, AIME 91.3%, HMMT ~93–95% and the launch AA Index 45 (#3 open weights) are strong; capped by HLE 28.7% and a high 88% hallucination rate (AA-Omniscience −32).
- **Context window: 72/100.** Native 262K window lands in the 200–500K band (65–84), scored mid-band with AA-LCR 68.7% and LongBench v2 63.2%; the hosted Plus variant (1M) scores separately.
- **Multimodal: 85/100.** Native image + video in (video-in band 75–90) with MMMU 85.0, VideoMME 87.5, OCRBench 93.1 and ScreenSpot Pro 65.6; text-only output caps it.
- **Coding: 80/100.** SWE-bench Verified 76.4% and LCB v6 83.6% are excellent for 17B-active open weights; capped by TB 2 52.5% and no DeepSWE/SciCode rows.
- **Cost efficiency: 88/100.** Apache 2.0 weights make self-hosting hardware-cost-only, and the $0.60/$3.60 API reference undercuts most frontier APIs; hallucination-driven retries and 262K (not 1M) native context cap it.
- **Overall Score: 79.6/100.** Mean of (80, 81, 72, 85, 80) = 79.6 — February 2026's open-weights value play for multimodal agents; MiMo-V2.6 and Qwen3.8-Max have since raised the open bar.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-04
- Method: public internet research (Hugging Face model card benchmark tables, Qwen blog, Artificial Analysis launch analysis + model page, InferenceX/SemiAnalysis, PyTorch TokenSpeed blog); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
