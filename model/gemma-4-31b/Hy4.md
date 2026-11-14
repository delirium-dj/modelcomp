- Source: Google DeepMind/Gemma 4 31B (Dense)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 31B Dense
- **Short description:** Google DeepMind's 2026-04-02 mid-size open-weight dense model, the largest of the four Gemma 4 variants (E2B / E4B / 26B MoE / 31B Dense), aimed at IDE assistants, coding helpers and agent workflows with high "intelligence per parameter". A distinct model; `gemma-4-26b-a4b` and the E2B/E4B variants are separate.
- **Provider / access:** Open weights (`gemma-4-31B-it`, plus QAT / NVFP4 community quantisations); unquantised bfloat16 fits a single 80GB H100, quantised builds run on consumer GPUs; vLLM / SGLang style serving.
- **Release / knowledge:** 2026-04-02; knowledge cutoff: no verified public score found.
- **IDs:** `gemma-4-31b` family ID as cited; vendor ID `google/gemma-4-31B`. No free Zen ID verified.
- **Context window:** **256,000 tokens**, implemented with sliding-window + global attention, unified KV cache and p-RoPE (secondary architecture analysis).
- **Modalities:** text and image in, text/code out (Gemma 4 family multimodal); advanced reasoning for IDE / programming-assistant / agent workflows. No verified audio/video input for this exact ID.
- **Pricing (as of 2026-11-14):** open weights (free self-hosting); no hosted rate card in the retrieved pages — no verified public price found.
- **Architecture:** **31B dense** (all parameters active), open weights. Sliding-window + global attention with unified KV and p-RoPE for long-context efficiency (secondary).

### Raw benchmarks found

Agent / tool use:

- Arena AI text leaderboard: **#3 among open-weight models** (Baike)
- Tool use / agent workflows listed as target use cases (qualitative)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- AIME 2026 (maths competition) and GPQA Diamond (science reasoning): evaluated with "specific results" (no exact scores in the retrieved excerpt) — no verified public score found
- MMLU Pro, GPQA Diamond, AIME 2026 and LiveCodeBench are covered in a third-party DataLearner analysis, which notes it roughly matches larger models on maths and general knowledge (directional, no exact figures in the retrieved excerpt)
- HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found

Coding:

- LiveCodeBench evaluated (third-party DataLearner analysis; no exact score in the retrieved excerpt) — no verified public score found
- SWE-bench Verified / Terminal-Bench / SciCode / Vibe Code Bench / DeepSWE / FrontierSWE: no verified public score found

Long context:

- 256K window with sliding-window/global attention and unified KV; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 82/100.** #3 among open models on the Arena AI text board with agent/IDE-oriented design; capped by no scored agent harness figure.
- **Reasoning: 86/100.** High intelligence-per-parameter with AIME 2026 / GPQA Diamond / MMLU Pro evaluations and a #3 open-model Arena rank; capped by no exact published scores in the retrieved sources.
- **Context window: 88/100.** A verified 256K window with a purpose-built sliding-window/global-attention and unified-KV architecture; capped by no retrieval benchmark.
- **Multimodal: 80/100.** Gemma 4-family image input; capped by text/code-only output, no verified audio/video input for this ID, and no published multimodal benchmark.
- **Coding: 85/100.** Purpose-built for IDE and coding-assistant workflows with LiveCodeBench evaluation; capped by no exact coding scores in the retrieved sources.
- **Cost efficiency: 95/100.** Free open weights with only 31B dense params, single-H100 / consumer-GPU deployment and QAT/NVFP4 quantisations; excluded from Overall.
- **Overall Score: 84/100.** Half-up mean of 82, 86, 88, 80, 85 = 84.2 → 84. Best fit: locally deployed IDE assistants and coding agents on a single GPU, where open weights and 256K context dominate.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike 310亿稠密模型(31B) and Gemma 4 31B Dense articles retrieved via public web search excerpt (release, 31B dense, 256K context, #3 open Arena rank, AIME 2026 / GPQA Diamond evaluations, single-H100 deployment), plus secondary CSDN architecture/deployment analyses and a third-party DataLearner evaluation overview — all labelled secondary. No exact benchmark figures were published in the retrieved excerpts, so those rows are honestly marked "no verified public score found" rather than estimated. Identity handling follows the project's generated roster: `gemma-4.12b-unified` / `gemma-4.26b-a4b` over-normalized dotted param-size duplicates are never re-scaffolded, and the E2B/E4B/26B variants are separate models. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [310亿稠密模型(31B) — 百度百科 (retrieved via search excerpt; specs, 256K, Arena #3)](https://baike.baidu.com/item/310%E4%BA%BF%E7%A8%A0%E5%AF%86%E6%A8%A1%E5%9E%8B(31B)/67588938)
  - [Gemma 4 31B Dense — 百度百科 (retrieved via search excerpt; family lineup, open weights)](https://baike.baidu.com/item/Gemma%204%2031B%20Dense/67592357)
