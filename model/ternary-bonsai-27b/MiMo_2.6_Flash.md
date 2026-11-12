# Ternary Bonsai 27B — findings by MiMo 2.6 Flash

- Source: Prism ML (`Prism-ML/Ternary-Bonsai-27B`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ternary Bonsai 27B
- **Short description:** Prism ML's ternary (three-valued) low-bit build of Qwen3.6 27B (Jul 2026) — true 1.71 bits/weight (~9.4× smaller than FP16) retaining 95% of full-precision quality (80.49 / 15 thinking-mode benchmarks), with vision input, tool calling and 262K context; free on Together AI.
- **Provider / access:** Together AI serverless endpoint `Prism-ML/Ternary-Bonsai-27B` (Chat Completions, JSON mode, 99.9% SLA); Hugging Face `prism-ml` GGUF/MLX packs; Ollama/LM Studio-compatible local builds.
- **Release / knowledge:** released 2026-07-14 (Together AI listing); knowledge cutoff inherited from Qwen3.6 27B (not announced).
- **IDs:** `Prism-ML/Ternary-Bonsai-27B` (Together AI); no OpenCode Zen Free ID found.
- **Context window:** 262K tokens (262,144) on the Qwen3.6 hybrid-attention backbone (~75% linear / 25% full attention); max output not published.
- **Modalities:** text, image in; text out; reasoning/thinking mode yes (recommended sampling temperature 0.7, top_p 0.95, top_k 20); tool calls yes (BFCL v3 tested); JSON mode yes; video/audio in not supported.
- **Pricing (as of 2026-11-12):** free — $0 / 1M input and $0 / 1M output on Together AI serverless; open weights also free to self-host (~5.75 GB ternary language model + 4-bit NF4 vision tower).
- **Architecture:** derived from Qwen3.6 27B — ~27.32B ternary language weights (g128: {−1,0,+1} + FP16 scale per 128) end-to-end across embeddings, attention/MLP projections and LM head, plus a ~461M vision tower in 4-bit NF4; ships MTP + DSpark speculative-drafting layers with lossless verification.

### Raw benchmarks found

> PrismML thinking-mode evaluation, identical infrastructure/decoding/scoring, 15 benchmarks in six skill categories; FP16 baseline average 85.07, this build **80.49** (95% retained).

Reasoning / knowledge:

- MATH-500: **99.20**; GSM8K: **96.06**; AIME 2025: **90.84** (math category average 93.40, within two points of full precision)
- GPQA Diamond / HLE / MMLU / MLCR: no verified public score found in the published rows

Coding:

- HumanEval+: **93.90**; MBPP+: **81.22**; LiveCodeBench: **82.75**
- SWE-bench / DeepSWE / Terminal-Bench: no verified public score found

Agentic / tool use:

- BFCL v3: **74.41**
- Tau2-Bench: **73.61**
- IFEval: **85.03**
- Terminal-Bench / Tau3 / GDPval: no verified public score found

Vision:

- MMMU-Pro: **68.96**; OCR Bench v2: **61.42**

Reference points: conventional Q2_XXS ("2-bit") build of the same base scores 73.39 average at a larger footprint; PrismML density figure for this release: 0.416 (superseded by Bonsai 2's 0.469 on a 14-benchmark set).

Long context: no MRCR / RULER retrieval score published (262K window advertised).

### Normalized scores (1–100)

- **Tool use: 78/100.** Tau2-Bench 73.61% and BFCL v3 74.41% are solid tool-calling results (both within a few points of typical frontier figures), but no Terminal-Bench / Tau3 / GDPval row exists for this ID — mid-high, not frontier.
- **Reasoning: 74/100.** Math is exceptional (MATH-500 99.2, AIME25 90.84) and IFEval 85.03 is strong, but no GPQA / HLE / MMLU / Intelligence Index row was published for this build, so the knowledge-reasoning half of the dimension is unproven.
- **Context window: 76/100.** 262K native lands in the 200K–500K tier (65–84); no measured long-context retrieval at depth, mid-tier applies.
- **Multimodal: 66/100.** Image input via the 4-bit NF4 vision tower puts it in the +image tier (60–70); MMMU-Pro 68.96 and OCR Bench v2 61.42 are mid-tier, and there is no video/audio input.
- **Coding: 80/100.** HumanEval+ 93.90 and MBPP+ 81.22 are strong and LiveCodeBench 82.75 clears the "LiveCode 80" mid bar, but no SWE-bench / DeepSWE / Terminal-Bench row exists — that absence caps it at 80.
- **Cost efficiency: 100/100.** $0 input / $0 output on Together AI serverless plus free open weights — a 27B reasoning model at zero token cost.
- **Overall Score: 75/100.** (78 + 74 + 76 + 66 + 80) / 5 = 74.8 → 75 — best-fit: a free, tiny-footprint 27B workhorse for math-heavy agent loops and long-document work where token cost matters more than frontier knowledge scores.

---

## Signature

- Provided by: **MiMo 2.6 Flash (opencode/mimo-v2.6-flash)** — 2026-11-12
- Method: public internet research (hosting-provider model card, vendor benchmark tables); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Together AI — Ternary Bonsai 27B (specs, pricing, benchmarks)](https://www.together.ai/models/prism-ml-ternary-bonsai-27b)
  - [Hugging Face — prism-ml organization](https://huggingface.co/prism-ml)
  - [Prism ML — Bonsai 2 27B whitepaper (prior-release density/quality lineage)](https://github.com/PrismML-Eng/Bonsai-demo/blob/main/bonsai-2-27b-whitepaper.pdf)
  - [oMLX benchmark — prism-ml Ternary-Bonsai-27B on M2 Max](https://omlx.ai/benchmarks/performance/ks6uk8hc)
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
