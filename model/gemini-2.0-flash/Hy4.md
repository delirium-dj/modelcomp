- Source: Google/Gemini 2.0 Flash
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.0 Flash
- **Short description:** Google's December 2024 low-latency, high-throughput multimodal model with native tool calling and image generation. A distinct model; `gemini-2.0-flash-thinking`, `gemini-2.5-flash` and `gemini-1.5-pro` are separate.
- **Provider / access:** Gemini API and Google AI Studio.
- **Release / knowledge:** 2024-12; knowledge cutoff: no verified public score found.
- **IDs:** `gemini-2.0-flash`. No free Zen ID verified.
- **Context window:** **1,000,000 tokens**.
- **Modalities:** **text, image, audio and video in; multimodal output** (incl. native image generation); native tool calling. No verified non-text-output benchmark.
- **Pricing (as of 2026-11-14):** **$0.075 / 1M input, $0.40 / 1M output** (third-party PHP中文网 pricing FAQ) — labelled third-party; no vendor rate card in the retrieved pages.
- **Architecture:** Proprietary, closed weights; parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- Native tool calling (qualitative)
- MMLU-Pro **79.1%** belongs to **Gemini 2.0 Pro** in a secondary Zhihu comparison — explicitly NOT attributed to Flash
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found for this exact ID

Coding:

- SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- 1M window; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 82/100.** Native tool calling with low-latency, high-throughput serving; capped by no scored agent harness.
- **Reasoning: 78/100.** General Gemini 2.0-generation reasoning; capped by zero published reasoning benchmarks for this exact ID (the 79.1% MMLU-Pro belongs to the Pro variant).
- **Context window: 90/100.** A verified 1M-token window at 2024-era Flash-tier pricing; capped by no long-context retrieval measurement.
- **Multimodal: 91/100.** Text, image, audio and video input with **multimodal output and native image generation** — unusually broad for its tier; capped by no published multimodal benchmark score.
- **Coding: 78/100.** General coding capability of the generation; capped by no published coding benchmark for this exact ID.
- **Cost efficiency: 96/100.** $0.075/$0.40 per 1M (third-party) with a 1M window and native image generation — exceptional value. Excluded from Overall.
- **Overall Score: 84/100.** Half-up mean of 82, 78, 90, 91, 78 = 83.8 → 84. Best fit: legacy high-throughput multimodal serving and image/tool workflows at minimal cost; superseded by Gemini 2.5/3.x Flash.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Gemini 2.0 Flash article retrieved via public web search excerpt (release, 1M context, four input modalities with multimodal output, native tool calling and image generation, API/AI Studio availability), plus a third-party PHP中文网 pricing FAQ for $0.075/$0.40 — labelled third-party. The MMLU-Pro 79.1% figure in a secondary Zhihu comparison belongs to **Gemini 2.0 Pro** and is explicitly NOT attributed to this Flash model. `gemini-2.0-flash-thinking` and `gemini-2.5-flash` are separate models, never merged. Every raw benchmark row without a published figure is marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [Gemini 2.0 Flash — 百度百科 (retrieved via search excerpt; 1M context, modalities, tools)](https://baike.baidu.com/item/Gemini%202.0%20Flash/65374171)
  - [Gemini 2.0 调用要多少钱 — PHP中文网 (retrieved via search excerpt; third-party pricing)](https://www.php.cn/faq/2405135.html)
