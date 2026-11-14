- Source: Google DeepMind/Gemma-4-26B-A4B
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma-4-26B-A4B
- **Short description:** Google DeepMind's open MoE multimodal Gemma 4 mid-size model — 25.2B total / 3.8B active, matching the larger 31B dense on maths at ~1/8 the active parameters. A distinct model; per the project identity roster the dotted `gemma-4.26b-a4b` spelling was folded into this hyphenated folder and must never be re-scaffolded.
- **Provider / access:** Apache 2.0 open weights (QAT q4_0 and other quantisations); consumer-GPU local deployment.
- **Release / knowledge:** 2026; **knowledge cutoff 2025-01**.
- **IDs:** `gemma-4-26b-a4b` (vendor `gemma-4-26B-A4B`). No free Zen ID verified.
- **Context window:** **256,000 tokens**.
- **Modalities:** text and image in, text out; built-in reasoning, code generation, function calling. No verified audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** free Apache 2.0 weights; no API rate card in the retrieved pages.
- **Architecture:** MoE, **25.2B total / 3.8B active** parameters; Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- Native function calling (qualitative)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- MMLU-Pro: **82.6%** (Gemma 3 27B 67.6%, 31B dense 85.2% — comparison rows under other IDs)
- AIME 2026 (no tools): **88.3%** (only **0.9 points** below the 31B dense despite 8x fewer active params — secondary WeChat analysis)
- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found

Coding:

- Code generation capability (qualitative)
- SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- 256K window; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 83/100.** Native function calling with 3.8B active params and Apache 2.0 weights; capped by no scored agent harness.
- **Reasoning: 89/100.** MMLU-Pro 82.6% and AIME 2026 88.3% — within 0.9 points of a 31B dense model at 1/8 the active compute; capped by no GPQA/HLE figure.
- **Context window: 88/100.** 256K context with an efficient MoE attention design; capped by no retrieval benchmark.
- **Multimodal: 82/100.** Text+image input; capped by text-only output, no verified audio/video input, and no published multimodal benchmark score.
- **Coding: 81/100.** Native code generation; capped by zero published coding benchmark scores for this exact ID.
- **Cost efficiency: 97/100.** Free Apache 2.0 weights with only 3.8B active params and consumer-GPU deployment. Excluded from Overall.
- **Overall Score: 85/100.** Half-up mean of 83, 89, 88, 82, 81 = 84.6 → 85. Best fit: local maths/reasoning and multimodal agents on consumer GPUs where active-parameter efficiency dominates.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Gemma-4-26B-A4B article retrieved via public web search excerpt (release, 25.2B/3.8B MoE, 256K context, modalities, MMLU-Pro 82.6%, AIME 2026 88.3%, 2025-01 cutoff, Apache 2.0), plus a secondary CSDN model-card summary and WeChat architecture analysis for the 31B-dense / Gemma 3 27B comparison rows — labelled secondary and by ID. Identity handling follows the project's generated roster: `gemma-4.26b-a4b` is an over-normalized dotted param-size duplicate folded into this folder and must never be re-scaffolded; `gemma-4-12b-unified` / `gemma-4-31b` / E2B / E4B are separate models. Rows without verified figures are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [Gemma-4-26B-A4B — 百度百科 (retrieved via search excerpt; specs, benchmarks, licence)](https://baike.baidu.com/item/Gemma-4-26B-A4B/69260700)
