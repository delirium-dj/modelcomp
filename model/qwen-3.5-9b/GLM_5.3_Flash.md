# Qwen 3.5 9B — findings by GLM 5.3 Flash

- Source: Alibaba Cloud Qwen — Qwen/Qwen3.5-9B (`qwen-3.5-9b`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 9B (Qwen3.5-9B)
- **Short description:** Compact unified multimodal foundation model from Alibaba's Qwen team — 9B-parameter causal LM with a vision encoder, early-fusion trained on text/image/video. Top use cases: multimodal reasoning, agentic tool calling, and long-document/OCR understanding on modest hardware.
- **Provider / access:** Self-host via Hugging Face weights (Apache-2.0) with vLLM, SGLang, KTransformers, or Transformers; OpenAI-compatible Chat Completions API (`/v1/chat/completions`). Hosted through HF Inference Providers (e.g. Together AI). No verified Zen listing found in this research pass.
- **Release / knowledge:** Released February 2026 (blog `qwen3.5`); HF weights updated 2026-03-02. Knowledge cutoff not stated on the card.
- **IDs:** `Qwen/Qwen3.5-9B` (state explicitly: no verified Free ID on OpenCode Zen found)
- **Context window:** 262,144 tokens natively, extensible to 1,010,000 via YaRN (verified: official HF model card "Model Overview" and YaRN config `factor 4.0`, `original_max_position_embeddings 262144`)
- **Modalities:** Text, image, and video in (PDF not claimed); text out; reasoning yes (thinking mode default, `enable_thinking: false` switch available); tool calls yes (`qwen3_coder` tool-call parser); JSON mode via prompt standardization, not a hard JSON mode
- **Pricing (as of 2026-10-01):** Open weights Apache-2.0 — $0 to self-host (BF16, ~10B params fits single-GPU/consumer setups); hosted per-token pricing not verified in this pass
- **Architecture:** Hybrid linear-attention stack — 32 layers laid out as 8 × (3 × (Gated DeltaNet → FFN) → 1 × (Gated Attention → FFN)); 9B LM parameters (10B safetensors total incl. vision encoder); hidden dim 4096; vocab 248320; MTP trained multi-step; sparse MoE cited in the family highlights; open weights Apache-2.0

### Raw benchmarks found

All numbers below are vendor-reported on the official Hugging Face model card `Qwen/Qwen3.5-9B` (harness noted where stated). Cross-checked against the Qwen3.5 blog (https://qwen.ai/blog?id=qwen3.5).

Agent / tool use:

- BFCL-V4 (**vendor card**): **66.1** (Qwen/Qwen3.5-9B model card, Language table)
- TAU2-Bench (**vendor card, official setup with Claude Opus 4.5 airline fixes**): **79.1** (Language table)
- VITA-Bench (**vendor card**): **29.8** (Language table)
- DeepPlanning (**vendor card**): **18.0** (Language table)
- OSWorld-Verified (**vendor card**): **41.8%** (Vision Language table, Visual Agent)
- AndroidWorld (**vendor card**): **57.8%** (Vision Language table, Visual Agent)
- ScreenSpot Pro (**vendor card**): **65.2%** (Vision Language table, Visual Agent)
- Terminal-Bench 2.1: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond (**vendor card, also HF eval-results**): **81.7%**
- MMLU-Pro (**vendor card, also HF eval-results**): **82.5%**
- MMLU-Redux (**vendor card**): **91.1%**
- SuperGPQA (**vendor card**): **58.2%**
- HLE: no verified public score found
- AA-LCR (**vendor card**): **63.0** (long-context reasoning)
- LongBench v2 (**vendor card**): **55.2**
- LCR / MLCR (MRCR): no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- HMMT Feb 25 (**vendor card**): **83.2**; HMMT Nov 25: **82.9** (competition math)
- IFEval **91.5** / MultiChallenge **54.5** (instruction following)

Coding:

- LiveCodeBench v6 (**vendor card**): **65.6%**
- OJBench (**vendor card**): **29.2**
- SWE-bench Verified / SWE-Pro: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- AA-LCR **63.0** and LongBench v2 **55.2** at long lengths (vendor card); no MRCR / RULER / GraphWalks value at 512K+ reported — native 262K, YaRN extension to 1.01M documented but retrieval at extension lengths not independently verified

Multimodal (vendor card, Vision Language table):

- MMMU **78.4** / MMMU-Pro **70.1**; MathVision **78.9**; MathVista (mini) **85.7**; VideoMME (w sub.) **84.5**; MLVU **84.4**
- OmniDocBench1.5 **87.7**; CharXiv (RQ) **73.0**; OCRBench **89.2**; CC-OCR **79.3**; AI2D_TEST **90.2**
- TIR-Bench **45.6** (w CI); V\* **90.1** (w CI); OSWorld-Verified **41.8%**; AndroidWorld **57.8%**

### Normalized scores (1–100)

- **Tool use: 75/100.** TAU2-Bench 79.1 (with Opus 4.5 airline fixes) and BFCL-V4 66.1 are exceptionally strong for a 9B model — at or above the frontier Tau ~50%+ reference band; OSWorld-Verified 41.8% and AndroidWorld 57.8% show solid real-world computer/agent competence. Capped by zero verification on Terminal-Bench 2.1, GDPval-AA, and Claw-Eval (methodology: missing benchmark = N/A, slight penalty) and mid VITA-Bench 29.8.
- **Reasoning: 72/100.** GPQA Diamond 81.7 just clears the mid band (60–80 → 55–65) into strong territory, backed by HMMT ~83 and MMLU-Pro 82.5; AA-LCR 63.0 and LongBench v2 55.2 show capable long-context reasoning. Capped below 90 by GPQA under the 90%+ frontier ref, no HLE, and no verified Artificial Analysis Intelligence Index.
- **Context window: 78/100.** Native 262,144 lands in the 200K–500K tier (65–84; 200K = 70) at ~72–75, lifted to ~78 by the officially documented YaRN extension to 1,010,000 tokens (would reach the ≥1M = 95–100 band only with verified ≥98% retrieval at 512K+). AA-LCR 63.0 / LongBench v2 55.2 confirm good long-context retrieval, but no MRCR/RULER measurement at extension lengths was found — the 1M claim stays provisional.
- **Multimodal: 85/100.** Image + video in with text out maps to the 75–90 band; vision quality is genuinely excellent for the size class — MMMU 78.4 and MathVision 78.9 beat GPT-5-Nano and Gemini-2.5-Flash-Lite, VideoMME 84.5, OCRBench 89.2, OmniDocBench1.5 87.7. Capped by no audio input and text-only output (90–100 requires audio in or non-text out).
- **Coding: 60/100.** LiveCodeBench v6 65.6 and OJBench 29.2 are mid-tier — well under the mid-band anchor (LiveCode ~80% → 65–75) and far from frontier refs (DeepSWE 74%+, SciCode 55%+). Capped hardest by zero verified SWE-bench Verified, DeepSWE, SciCode, or Terminal-Bench numbers for this exact ID.
- **Cost efficiency: 92/100.** Apache-2.0 open weights at 9B make self-hosting effectively $0 on a single consumer GPU — near the $0 = 100 reference; slight deduction because hosted per-token pricing was not verified in this pass and the evaluated tier is self-host rather than a Zen free tier.
- **Overall Score: 72/100.** Mean of the five quality dims (75 + 72 + 78 + 85 + 60) / 5 = 72.0 → 72 (Cost excluded, v4 methodology). Best-fit recommendation: a strong small-model pick for multimodal understanding and light-to-medium agentic work at negligible hosting cost — escalate to a frontier model for heavy SWE/coding tasks.

---

## Signature

- Provided by: **GLM 5.3 Flash (z.ai/glm-5.3-flash)** — 2026-10-01
- Method: public internet research (official Hugging Face model card + Qwen3.5 blog); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
