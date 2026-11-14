- Source: Alibaba/Qwen3.5-Flash
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-Flash
- **Short description:** The managed production API version of Qwen3.5-35B-A3B on Alibaba Cloud Bailian (百炼), launched 2026-02-25 with a 1M default context and the official native tool chain. A distinct SKU; `qwen-3.5-35b-a3b` (open weights), `qwen-3.5-plus` and `qwen-3.8-flash` are separate. The `qwen-3.5-flash-lite` name is a **parked** phantom cross-vendor tier (per the project identity roster) and is never scaffolded or written.
- **Provider / access:** Alibaba Cloud Bailian API; OpenAI-compatible; tool calling and image input.
- **Release / knowledge:** 2026-02-25 (Qwen3.5 family open-sourced 2026-02-24); knowledge cutoff: no verified public score found.
- **IDs:** `qwen3.5-flash` (aligned with `Qwen3.5-35B-A3B`). No free Zen ID verified.
- **Context window:** **1,000,000 tokens by default**; **991,000 tokens** maximum input in the production API config.
- **Modalities:** text and image in, text out; native tool chain, tool calling, multimodal capability. No verified audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** a third-party BenchGecko family table lists **$0.065 / 1M input, $0.26 / 1M output** for Qwen3.5-Flash — labelled third-party; no vendor rate card in the retrieved pages.
- **Architecture:** **Gated Delta Networks + sparse MoE**, **35B total / ~3B active** parameters; managed production build of the open Qwen3.5-35B-A3B weights.

### Raw benchmarks found

Agent / tool use:

- Overall accuracy: **70.8%**, **+6.8 percentage points** over the previous generation (evaluation cited in the Baike article; harness unnamed)
- Qwen3.5-35B-A3B (the aligned open checkpoint) beat the larger Qwen3-235B-A22B on knowledge, instruction-following and maths reasoning leaderboards (directional, lineage under a different ID)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- 70.8% accuracy as above; maths-reasoning standing for the aligned checkpoint (directional)
- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found for this exact ID

Coding:

- SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE / FrontierSWE: no verified public score found

Long context:

- 1M default / 991K max input; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 84/100.** Native tool chain, tool calling, a 1M default context and 70.8% overall accuracy with a +6.8pt generational gain; capped by the accuracy harness being unnamed and no scored agent benchmark.
- **Reasoning: 83/100.** 70.8% accuracy and a GDN+MoE architecture that beats a much larger predecessor on knowledge/instruction-following/maths; capped by no named reasoning benchmark for this exact ID.
- **Context window: 92/100.** 1M tokens by default with an explicit 991K production max-input — unusually accessible; capped by no long-context retrieval measurement.
- **Multimodal: 82/100.** Image input with tool calling; capped by text-only output, no verified audio/video input, and no published multimodal benchmark score.
- **Coding: 80/100.** General coding capability of the Qwen3.5 generation; capped by zero published coding benchmark scores for this exact SKU.
- **Cost efficiency: 96/100.** $0.065/$0.26 per 1M (third-party) — the cheapest input price in the Qwen3.5 family — with only ~3B active params and a 1M default window. Excluded from Overall.
- **Overall Score: 84/100.** Half-up mean of 84, 83, 92, 82, 80 = 84.2 → 84. Best fit: extremely high-volume, low-cost tool-call and long-document workflows on Bailian; superseded by the Qwen3.8 generation.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Qwen3.5-Flash article retrieved via public web search excerpt (release, 1M/991K context, 35B/3B GDN+MoE, 70.8% accuracy +6.8pt, native tool chain, modalities), plus a third-party BenchGecko Qwen3.5 family table for the $0.065/$0.26 price — explicitly labelled third-party. Figures for the aligned open checkpoint `Qwen3.5-35B-A3B` and the predecessor `Qwen3-235B-A22B` are labelled lineage/comparison under different IDs, never merged. Identity handling follows the project's generated roster: `qwen-3.5-flash-lite` is a parked phantom and is never queued, researched or written. The 70.8% figure's harness is unnamed and is labelled as such. Rows without verified figures are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [Qwen3.5-Flash — 百度百科 (retrieved via search excerpt; specs, 70.8%, context)](https://baike.baidu.com/item/Qwen3.5-Flash/67419767)
  - [Qwen 3.5 family — BenchGecko (third-party pricing table)](https://www.benchgecko.ai/family/qwen-3-5)
