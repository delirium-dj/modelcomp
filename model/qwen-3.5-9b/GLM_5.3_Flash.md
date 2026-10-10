# Qwen 3.5 9B — findings by GLM 5.3 Flash

- Source: Alibaba Cloud Qwen — Qwen/Qwen3.5-9B (`qwen-3.5-9b`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 9B (Qwen3.5-9B)
- **Short description:** Compact unified multimodal foundation model from Alibaba's Qwen team — 9B-parameter causal LM with a vision encoder, early-fusion trained on text/image/video. Top use cases: multimodal reasoning, agentic tool calling, and long-document/OCR understanding on modest hardware.
- **Provider / access:** Self-host via Hugging Face weights (Apache-2.0) with vLLM, SGLang, KTransformers, or Transformers; OpenAI-compatible Chat Completions API. Hosted routes now verified: OpenRouter from $0.08 in / $0.13 out per 1M (Darkbloom fp4; Parasail bf16 $0.10/$0.25, Venice fp8 $0.10/$0.15, Together, SiliconFlow, DeepInfra), HF Inference Providers. No verified Zen listing found in this research pass.
- **Release / knowledge:** Released February 2026 (blog `qwen3.5`; BenchLeader dates 2026-02-24); HF weights updated 2026-03-02. Knowledge cutoff not stated on the card.
- **IDs:** `Qwen/Qwen3.5-9B` (state explicitly: no verified Free ID on OpenCode Zen found)
- **Context window:** 262,144 tokens natively (benchlm 262k), extensible to 1,010,000 via YaRN (verified: official HF model card "Model Overview" and YaRN config `factor 4.0`, `original_max_position_embeddings 262144`)
- **Modalities:** Text, image, and video in (PDF not claimed); text out; reasoning yes (thinking mode default, `enable_thinking: false` switch available); tool calls yes (`qwen3_coder` tool-call parser); JSON mode via prompt standardization, not a hard JSON mode
- **Pricing (as of 2026-10-09):** Open weights Apache-2.0 — $0 to self-host (BF16 fits single-GPU/consumer setups); hosted $0.08/$0.13 per 1M verified (OpenRouter price history, BenchLeader; blended $0.155/M — cheapest fifth of ranked models). Output speed 64 tok/s (AA-measured), first token 1.04s.
- **Architecture:** Hybrid linear-attention stack — 32 layers laid out as 8 × (3 × (Gated DeltaNet → FFN) → 1 × (Gated Attention → FFN)); 9B LM parameters (10B safetensors total incl. vision encoder); hidden dim 4096; vocab 248320; MTP trained multi-step; sparse MoE cited in the family highlights; open weights Apache-2.0

### Raw benchmarks found

> Vendor HF model card + BenchLeader/AA effort sweep (updated 2026-10-09). Conflicts between vendor and independent readings listed.

Agent / tool use:

- TAU2-Bench (vendor card, official setup with Claude Opus 4.5 airline fixes): **79.1**; τ²-Bench Telecom (AA, independent): **86.8%** #83 (fills the independent corroboration — strong agentic tool use confirmed)
- BFCL-V4 (vendor card): **66.1**; VITA-Bench (vendor card): **29.8**; DeepPlanning (vendor card): **18.0**
- Terminal-Bench 2.1 (AA, independent): **29.2%** (fills — much weaker than the vendor agentic positioning); TB4.0 (AA): **0.5%**; Terminal-Bench (tbench.ai): **9.2%**; TB Hard (AA): 24.2%
- GDPval-AA v2.1 (AA): **0.0%** (fills — very weak); Tau3-Banking (AA): 7.0%
- OSWorld-Verified (vendor card): **41.8%**; AndroidWorld (vendor card): **57.8%**; ScreenSpot Pro: 65.2%
- Terminal-Bench 2.1 / GDPval-AA / Claw-Eval / MCP-Atlas (vendor rows): no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **79.0%** (Epoch, not-stated; AA 80.6%; Vals-equivalent vendor card 81.7% — consistent 79–82 band)
- HLE: **14.9%** (AA — fills the previously-missing HLE; weak)
- AIME 2026: **92.5%** #23 (MathArena, not-stated — fills); OTIS Mock AIME: 61.7%; MathArena Apex: 0.5%
- AA-LCR: **70.0%** (AA, thinking — fills; above the vendor card's 63.0 reading); LongBench v2 (vendor): **55.2**
- CritPt: **0.3%** (AA — fills; weak); LMCA: 24.5%; DTBench: 71.2%
- Artificial Analysis Intelligence Index v4.3.2: **11.2** (AA, thinking — fills the previously-missing index; very low); Epoch ECI: **139.5** #111; BenchLeader Index: **49.0 ±7.3** #394 (thinking best; Instruction following 66, Knowledge 38)
- AA-Omniscience: Index -53.5, accuracy **16.4%**, non-hallucination **16.4%** (benchlm.ai — poor)
- HMMT Feb 25 (vendor): **83.2**; MMLU-Redux (vendor): **91.1**; SuperGPQA (vendor): **58.2%**; IFEval (vendor) **91.5** / IFBench (AA) **66.7%** #90 (different benchmarks, both listed); MultiChallenge (vendor) 54.5

Coding:

- SciCode: **27.6%** (Epoch, not-stated; AA 29.5% — fills the previously-missing SciCode; well below the 55%+ frontier mark)
- Terminal-Bench 2.1 (coding harness, AA): **29.2%** (see above)
- LiveCodeBench v6 (vendor card): **65.6%**; OJBench (vendor card): **29.2**
- SWE-bench Verified / SWE-Pro / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- AA-LCR **70.0%** (independent, above the vendor's 63.0) and LongBench v2 **55.2** measured; no MRCR/RULER at 512K+ of the YaRN 1.01M extension — the 1M claim stays provisional

Multimodal (vision):

- MMMU (vendor): **78.4** / MMMU-Pro (vendor): **70.1** (AA-MMMU-Pro: **69.3%** — independent agreement); MathVision 78.9; VideoMME (w sub.) **84.5**; OCRBench **89.2**; OmniDocBench1.5 **87.7**; AI2D_TEST 90.2; V* 90.1 (w CI); Design-class BenchLeader Multimodal 52

### Normalized scores (1–100)

- **Tool use: 62/100.** The independent rows split: τ² Telecom 86.8% (#83, AA) confirms strong tool calling, but TB2.1 (AA) 29.2%, TB4.0 0.5%, GDPval-AA 0.0% and TB Hard 24.2% are far below the vendor-card agentic positioning — docked heavily from the old 75.
- **Reasoning: 64/100.** GPQA 79–81.7% (independent/vendor agreement) and AIME 2026 92.5% (#23) are strong for the size class; the filled HLE 14.9%, AA Index 11.2 and CritPt 0.3% cap it — the "near-frontier" vendor framing does not survive independent measurement.
- **Context window: 78/100.** Native 262,144 in the 200K–500K tier (65–84), lifted by the documented YaRN extension to 1,010,000; AA-LCR 70.0% (above the vendor's 63.0) confirms good retrieval — no MRCR at extension lengths keeps the 1M claim provisional.
- **Multimodal: 78/100.** Image + video in with genuinely excellent small-model vision (MMMU 78.4, VideoMME 84.5, OCRBench 89.2, OmniDocBench 87.7; independent MMMU-Pro 69.3% corroborates); text-only output and no audio input cap it below 85.
- **Coding: 55/100.** LiveCodeBench v6 65.6% (vendor) is mid-tier and the filled SciCode 27.6% / TB2.1 29.2% are weak; zero verified SWE-bench Verified/DeepSWE numbers — the mini tier trades coding depth for multimodality, confirmed.
- **Cost efficiency: 96/100.** Apache-2.0 weights plus now-verified hosted routes at $0.08/$0.13 per 1M (blended $0.155/M — cheapest fifth per BenchLeader) — near the $0.10/$0.20 = 97–99 band.
- **Overall Score: 67/100.** Mean of the five quality dims (62 + 64 + 78 + 78 + 55) / 5 = 67.4 → 67. Best-fit recommendation: a strong small-model pick for multimodal understanding and cheap agentic tool-calling at negligible hosting cost — the vendor's near-frontier framing held for vision and math but not for agentic/coding depth (the old draft's 74 also carried an internal mean-text error).

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-09
- Method: public internet research (BenchLeader full effort-sweep tables data as of 2026-10-09 citing AA/Epoch/MathArena boards + the official HF model card — vendor vs independent conflicts compared); scores are normalized 1–100 interpretations, not official vendor scores. Second-pass enrichment: fills missing AA Index 11.2, HLE 14.9%, TB2.1 29.2%, τ² Telecom 86.8%, SciCode 27.6%, MMMU-Pro (AA) 69.3%, AA-LCR 70.0%, AIME 2026 92.5%, verified $0.08/$0.13 routes — Tool 75→62, Reasoning 72→64, Multimodal 85→78, Coding 60→55, Cost 92→96, Overall 74→67.
- Future sources: add a new file next to this one, e.g. `Qwen_3.6.md`, using the same headings.
