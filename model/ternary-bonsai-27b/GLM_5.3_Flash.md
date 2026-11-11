# Ternary Bonsai 27B — findings by GLM 5.3 Flash

- Source: PrismML (`Prism-ML/Ternary-Bonsai-27B` — Together AI endpoint; HF `prism-ml/Ternary-Bonsai-27B-gguf`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ternary Bonsai 27B
- **Short description:** PrismML's first-generation 1.58-bit-class ternary reasoning model (July 2026) — the Qwen3.6-27B hybrid-attention architecture with every language weight in {−1,0,+1} at a true 1.71 bits/weight (~9.4x smaller than FP16), a 4-bit NF4 vision tower, 262K context and thinking mode; superseded by Ternary Bonsai 2 27B (Qwen3.8-27B base) in September 2026.
- **Provider / access:** Free serverless API on Together AI (endpoint `Prism-ML/Ternary-Bonsai-27B`, Chat Completions, JSON mode); open weights on Hugging Face for self-host (GGUF `prism-ml/Ternary-Bonsai-27B-gguf` ~258k downloads, MLX 2-bit, AWQ-4bit, unpacked variants; the separate `Bonsai-27B-gguf` repo is the 1-bit sibling, not this model).
- **Release / knowledge:** released 2026-07-14 (Together AI listing; HF collection updated Jul 15); knowledge cutoff inherited from Qwen3.6-27B — not independently stated.
- **IDs:** `Prism-ML/Ternary-Bonsai-27B` (Together), `prism-ml/Ternary-Bonsai-27B-gguf` (HF).
- **Context window:** 262,144 (262K) total on the Qwen3.6 hybrid-attention backbone (~75% linear / ~25% full attention); max output not specified.
- **Modalities:** Text + image in (~461M vision tower in 4-bit NF4; documents, screenshots, charts); text out. Function calling (BFCL v3 evaluated), JSON mode; thinking mode (all published results measured in thinking mode); MTP + DSpark speculative-decoding drafter layers ship with the weights (lossless verification).
- **Pricing (as of 2026-11-11):** free — $0 in / $0 out per 1M on Together AI serverless (99.9% SLA), and free self-host from the open weights.
- **Architecture:** ~27.32B ternary language weights + ~461M vision tower; ternary g128 ({−1,0,+1} values, one FP16 scale per 128 weights, true 1.71 bpw) across embeddings, attention, MLPs and LM head; derived from Qwen3.6-27B with architecture unchanged; recommended sampling temperature 0.7 / top_p 0.95 / top_k 20.

### Raw benchmarks found

All thinking-mode, identical infrastructure/decoding/scoring across 15 benchmarks in six categories (PrismML, per the Together model card):

- 15-benchmark thinking-mode average: **80.49** = 95% of the Qwen3.6-27B FP16 baseline (85.07); beats a conventional 2-bit Q2_XXS build (73.39) at well under two-thirds of its footprint (HF: 5.75 GB on disk; 80.98 recomputed on the 14-benchmark Bonsai 2 suite)
- Math: MATH-500 **99.20**, GSM8K **96.06**, AIME 2025 **90.84** — math category within two points of full precision
- Coding: HumanEval+ **93.90**, MBPP+ **81.22**, LiveCodeBench **82.75**
- Agentic / instruction: BFCL v3 **74.41**, Tau2-Bench **73.61**, IFEval **85.03**
- Vision: MMMU-Pro **68.96**, OCR Bench v2 **61.42**
- SWE-bench Verified, Terminal-Bench 4.0, GPQA Diamond, HLE: no verified public score found
- Independent artifacts: community tool-eval-bench runs (MiaAI-Lab fork, multi-turn mock-tool scenarios, 3-tier scoring) exist but are unofficial harnesses

Long context:

- no long-context retrieval reported (262K window on the hybrid-attention backbone; no RULER/MRCR value published)

### Normalized scores (1–100)

- **Tool use: 76/100.** BFCL v3 74.41 plus Tau2-Bench 73.61 (multi-turn tool-calling) — solid single- and multi-turn tool behavior that survives ternarization; no long-horizon agentic harness published.
- **Reasoning: 84/100.** MATH-500 99.20 and AIME 2025 90.84 with the math category within two points of FP16; the 15-bench average 80.49 (95% retention) shows a generally intact reasoning core; knowledge-heavy categories are the softer side.
- **Context window: 74/100.** 262K total (200K–500K tier); max output unspecified, no retrieval benchmark.
- **Multimodal: 64/100.** Text + image in via the 4-bit NF4 vision tower (MMMU-Pro 68.96, OCR Bench v2 61.42 — mid-band vision), text out; no audio/video.
- **Coding: 84/100.** HumanEval+ 93.90 with LiveCodeBench 82.75 — strong classic coding retention; no agentic/SWE-bench-class measurement caps it.
- **Cost efficiency: 99/100.** $0/$0 per 1M on Together AI serverless with a 99.9% SLA, plus free open-weight self-host — a genuinely $0 evaluated lane.
- **Overall Score: 76/100.** Mean of the five non-cost dims (76+84+74+64+84)/5 = 76.4. Best-fit recommendation: a free 27B-class reasoning/vision workhorse for long-document analysis and math/coding subagents; for current-generation quality-per-GB, its successor Ternary Bonsai 2 27B supersedes it.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-11
- Method: public internet research (Together AI hosted model card, Hugging Face collection/repos, PrismML docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Together AI — Ternary Bonsai 27B model page (pricing, full benchmark card)](https://www.together.ai/models/prism-ml-ternary-bonsai-27b)
  - [Hugging Face — prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)
  - [Hugging Face — prism-ml Bonsai 27B collection](https://huggingface.co/collections/prism-ml/bonsai-27b)
  - [PrismML Docs — Bonsai families overview](https://docs.prismml.com/models/bonsai-27b)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
