- Source: PrismML/Ternary Bonsai 2 27B
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ternary Bonsai 2 27B
- **Short description:** PrismML's (Caltech-spinout team, Khosla Ventures / Cerberus-backed) extreme-quantisation open model — a 27B multimodal model compressed to ternary (3-bit) and 1-bit weights so it runs on laptops, phones and browsers. A distinct model; `ternary-bonsai-27b` (first generation) and `diffusiongemma-26b-a4b` are separate tracked folders.
- **Provider / access:** Open-source weights (GGUF / custom formats); local inference on iPhone-class phones, laptops and browsers; Ling Studio-style local tooling noted in secondary coverage.
- **Release / knowledge:** 2026-09 (second generation; first-generation Bonsai 27B 2026-07-14); knowledge cutoff: no verified public score found.
- **IDs:** `ternary-bonsai-2-27b`. No free Zen ID verified.
- **Context window:** no verified figure in the retrieved pages — no verified public score found.
- **Modalities:** multimodal (the first-generation Bonsai 27B is described as multimodal, based on a Qwen3.6-27B base); no verified audio/video input or non-text output for this exact ID.
- **Pricing (as of 2026-11-14):** free open weights; no API rate card — no verified public price found.
- **Architecture:** **~27B parameters** with extreme **ternary (1.71 effective bits/weight, 5.9GB)** and **1-bit (1.125 effective bits/weight, 3.9GB)** quantisation; the second generation claims **~9x compression with 98.2% capability retention**. First generation was based on Qwen3.6-27B (lineage).

### Raw benchmarks found

Agent / tool use:

- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- **98.2% capability retention** vs the uncompressed 27B baseline (secondary Zhihu technical article, vendor-adjacent claim, no named harness)
- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found

Coding:

- SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- No MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 76/100.** Local on-device agent feasibility on phones and browsers; capped by no scored agent harness and by extreme quantisation typically degrading tool reliability.
- **Reasoning: 77/100.** A claimed 98.2% retention of 27B capability at 1.71/1.125 bits (secondary); capped by that figure being vendor-adjacent with no named benchmark.
- **Context window: 76/100.** No verified window; scored at a conservative neutral level.
- **Multimodal: 80/100.** Multimodal lineage (first-gen Bonsai 27B built on Qwen3.6-27B multimodal); capped by no verified modality list for this exact ID.
- **Coding: 75/100.** General 27B coding capability after compression; capped by zero published coding benchmark scores.
- **Cost efficiency: 98/100.** 3.9–5.9GB weights, phone/laptop/browser inference, free open-source weights and ~9x compression with almost no hardware cost. Excluded from Overall.
- **Overall Score: 77/100.** Half-up mean of 76, 77, 76, 80, 75 = 76.8 → 77. Best fit: offline, privacy-sensitive on-device assistants where hardware footprint is the binding constraint; validate quality claims before production.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Bonsai27B article retrieved via public web search excerpt (ternary 5.9GB / 1.71 bits, 1-bit 3.9GB / 1.125 bits, laptop vs phone optimisation), plus secondary Zhihu / CSDN / Tencent Cloud coverage for the second generation's ~9x compression, 98.2% capability retention and the first generation's Qwen3.6-27B multimodal base — all explicitly labelled secondary and, where applicable, first-generation lineage. **No named benchmark scores were published in the retrieved excerpts**, so every raw row is honestly marked "no verified public score found" and the normalized scores are a declared conservative interpretation with the arithmetic shown. `ternary-bonsai-27b` (first gen) is a separate folder, never merged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [Bonsai27B — 百度百科 (retrieved via search excerpt; quantisation sizes, bit widths)](https://baike.baidu.com/item/Bonsai27B/68700063)
  - [Ternary Bonsai 2 27B 开源 — 知乎 (retrieved via search excerpt; secondary 98.2% retention)](https://zhuanlan.zhihu.com/p/2084984017531806097)
