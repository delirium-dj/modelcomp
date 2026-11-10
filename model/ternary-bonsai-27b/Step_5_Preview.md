# Ternary Bonsai 27B — findings by Step 5 Preview

- Source: PrismML / `Prism-ML/Ternary-Bonsai-27B` (Together AI serverless; open weights)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ternary Bonsai 27B (Bonsai 27B, first generation)
- **Short description:** PrismML's first ternary-weight build — every language weight as one of three values with group-wise FP16 scaling at a true 1.71 bits per weight, ~9.4x smaller than the FP16 baseline — derived from Qwen3.6 27B for local/on-device inference. It retains 95% of full-precision quality (80.49 vs 85.07 across 15 thinking-mode benchmarks). Supeded in the family by Ternary Bonsai 2 27B (Qwen3.8-27B-based, 98.2% retention, September 2026).
- **Provider / access:** Together AI serverless (`Prism-ML/Ternary-Bonsai-27B`, `https://api.together.ai/v1/chat/completions`, OpenAI-compatible) listed at Free per 1M input and output tokens with a 99.9% SLA claim — note the page also carries a "launching soon" notice for some endpoints, so live availability should be re-verified. Also self-hostable: open weights, and no OpenCode Console/Zen route (verified absent from the live catalog).
- **Release / knowledge:** released 2026-07-14; knowledge cutoff not disclosed.
- **IDs:** `Prism-ML/Ternary-Bonsai-27B` (Together AI). Free endpoint on Together; no separate Free ID needed.
- **Context window:** 262,144 tokens (262K) on Qwen3.6's hybrid-attention backbone; max output not disclosed.
- **Modalities:** text + image input (compact ~461M vision tower in 4-bit NF4), text output; reasoning model (thinking mode) with native tool calling, MTP + DSpark speculative-decoding drafter layers (lossless verification), and JSON mode for structured outputs.
- **Pricing (as of 2026-11-10):** $0 input / $0 output per 1M tokens on Together AI serverless; open weights for self-hosting at no license cost. Recommended sampling: temperature 0.7, top_p 0.95, top_k 20.
- **Architecture:** ~27.32B ternary language weights (24.3B-class backbone + embeddings + LM head) plus ~461M 4-bit NF4 vision tower; hybrid attention (~75% linear / ~25% full), inherited unchanged from Qwen3.6 27B; ternary g128 with one FP16 scale per 128-weight group.

### Raw benchmarks found

All rows below are PrismML-reported (identical infrastructure/decoding/scoring, thinking mode, 15 benchmarks in six skill categories); Together AI's model card carries the same numbers.

Agent / tool use:

- BFCL v3 (function calling): **74.41**
- Tau2-Bench: **73.61**
- IFEval (instruction following): **85.03**
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found — noted N/A
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- 15-benchmark thinking-mode average: **80.49** — 95% of the Qwen3.6-27B FP16 baseline's 85.07
- MATH-500: **99.20**; GSM8K: **96.06**; AIME 2025: **90.84** (math category average 93.40, within two points of full precision)
- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR / CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- HumanEval+: **93.90**
- MBPP+: **81.22**
- LiveCodeBench: **82.75**
- SWE-bench Verified / SWE-bench Pro: no verified public score found
- SciCode / AA-SciCode / Vibe Code Bench / DeepSWE / Coding Index: no verified public score found
- FrontierCode 2.0 / Terminal-Bench 4.0: no verified public score found
- PrismML also reports a higher thinking-mode average than a conventional 2-bit Q2_XXS build of the same class (73.39) at well under two-thirds of its footprint.

Long context:

- 262,144-token window (official); no MRCR / RULER / GraphWalks retrieval figure reported at any window length.

Vision:

- MMMU-Pro: **68.96**
- OCR Bench v2: **61.42**

### Normalized scores (1–100)

- **Tool use: 76/100.** The strongest agentic evidence in the first-gen Bonsai family: Tau2-Bench 73.61, BFCL v3 74.41 and IFEval 85.03, with native tool calling and speculative decoding for agent loops. Capped below the frontier band because Terminal-Bench, Tau3-Banking, GDPval-AA, Claw-Eval and Toolathon all read "no verified public score found".
- **Reasoning: 82/100.** Elite math — MATH-500 99.20, GSM8K 96.06, AIME 2025 90.84, category average 93.40 within two points of FP16 — and a 15-suite average of 80.49 that holds 95% of the baseline. Below the v2 generation (AIME 2026 95.83, 14-suite 84.78), and the reasoning anchors GPQA Diamond / HLE / an intelligence index are unpublished, so 90+ is not justified.
- **Context window: 76/100.** 262,144 tokens lands in the 200K–500K tier (65–84, with 200K = 70); the ≥1M tier (95–100) is not reached, and no MRCR/RULER retrieval figure exists to move it within the band.
- **Multimodal: 64/100.** Text + image input with text-only output sits in the +image-in band (60–70); MMMU-Pro 68.96 and OCR Bench v2 61.42 are modest for the class — the vision tower is a 4-bit NF4 add-on, not a trained-in flagship capability.
- **Coding: 78/100.** HumanEval+ 93.90, MBPP+ 81.22 and LiveCodeBench 82.75 are solid classic-coding results within two points of full precision, but every agentic-coding anchor (SWE-bench Verified, FrontierCode 2.0, SciCode, Vibe Code Bench) is unreported — the exact evidence the rubric's frontier band requires.
- **Cost efficiency: 100/100.** $0 input / $0 output per 1M on Together AI serverless (the model page's listed pricing) with open weights for self-hosting — the rubric's $0 = 100 anchor. Caveat: free serverless availability is a marketing-period state and should be re-verified before routing production traffic.
- **Overall Score: 75/100.** Mean of Tool use 76, Reasoning 82, Context window 76, Multimodal 64, Coding 78. Best fit: free-to-call, local-first agent loops and document/code analysis in a 262K window — 95% of a 27B FP16 baseline at ~1.71 bits per weight, a generation behind Bonsai 2 27B.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-10
- Method: public internet research (Together AI model page with PrismML's official benchmark tables, the PrismML Bonsai 2 announcement that dates the first generation, and the OpenCode Console catalog check); scores are normalized 1–100 interpretations per `model-comparison.md`, not official vendor scores. Official benchmark rows are labelled as vendor-reported; unreported benchmarks are marked "no verified public score found" rather than estimated.
- Reference URLs:
  - [Together AI — Ternary Bonsai 27B model page (benchmarks, specs, endpoint)](https://www.together.ai/models/prism-ml-ternary-bonsai-27b)
  - [PrismML — Introducing Bonsai 2 27B (first-generation retention comparison)](https://prismml.com/news/bonsai-2-27b)
  - [ExplainX — Bonsai 2 27B: near-lossless ternary model (first-gen ~95% retention, two months prior)](https://www.explainx.ai/blog/prismml-bonsai-2-27b-near-lossless-compression-2026)
  - [AI Model Report — Ternary Bonsai 2 27B release coverage](https://aimodelreport.com/articles/2026-09-20-prismml-s-ternary-bonsai-2-27b-squeezes-qwen3-8-s-capability-into-5-9-gb-runs-on/)
  - [OpenCode Console docs — model catalog (no Bonsai route)](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
