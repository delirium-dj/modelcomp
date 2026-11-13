# GLM-4.5-Flash — findings by Ernie 5.5 Flash

- Source: Z.ai / Zhipu AI (`glm-4.5-flash`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-4.5-Flash
- **Short description:** Z.ai's free, fast tier of the GLM-4.5 generation — a hybrid-reasoning model (thinking + instant modes) with 128K context, positioned for high-volume free API use, office automation, code generation and multi-tool calls.
- **Provider / access:** Z.ai / BigModel open platform (`glm-4.5-flash`, `zai/glm-4.5-flash` on gateways), free of charge with published rate limits; OpenAI-compatible endpoint.
- **Release / knowledge:** 2025-11 (Z.ai release wave covered by Chinese tech press on 2025-11-18); knowledge cutoff not published.
- **IDs:** `glm-4.5-flash` (Z.ai / BigModel), `zai/glm-4.5-flash` (gateway style)
- **Context window:** 131,072 tokens (Z.ai docs: "支持最长 128K 的上下文处理").
- **Modalities:** text in / text out (the GLM-4.5 vision line is the separate GLM-4.5V SKU). Hybrid reasoning with switchable thinking/instant modes, multi-tool calling, structured output.
- **Pricing (as of 2026-11-12):** $0 — completely free on Z.ai's platform (rate limits not published); no paid tier for this SKU.
- **Architecture:** GLM-4.5 family sparse MoE lineage (the flagship GLM-4.5 is 355B total / 32B active); the Flash SKU is the free/faster derivative, and Z.ai does not publish a separate parameter count for it — the 355B/32B figure is family lineage, not a verified Flash spec.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 / Tau3-Banking / Tau2-Bench: **no verified public score found for the Flash SKU** (GLM-4.5 family figures are lineage data, not this SKU)
- GDPval-AA / Claw-Eval / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found for this SKU**
- HLE / LCR / CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM: **not indexed separately** (free SKU; the GLM-4.5 flagship is the indexed model)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode: **no verified public score found for this SKU**
- Vendor positioning only: "稳定代码生成" (stable code generation) and multi-tool orchestration in the Z.ai model description; no number published.

Long context:

- No MRCR / RULER / GraphWalks figures for the 128K window.

### Normalized scores (1–100)

- **Tool use: 58/100.** The vendor advertises multi-tool orchestration and the model is used in agent harnesses, but no Terminal-Bench/Tau3/GDPval row exists for the Flash SKU; the score is a mid-band read of positioning, not a measurement.
- **Reasoning: 60/100.** Hybrid thinking/instant modes are designed for reasoning work, and the GLM-4.5 family is a reasoning line, but with zero GPQA/HLE numbers for this SKU the score stays mid-band.
- **Context window: 62/100.** 131,072 tokens — the 100K–200K band; no retrieval evidence.
- **Multimodal: 15/100.** Text-only (vision belongs to GLM-4.5V).
- **Coding: 58/100.** Positioned for code generation with no published coding benchmark; the score reflects an unmeasured but explicitly code-capable model.
- **Cost efficiency: 100/100.** Free ($0) with no paid tier; not counted toward Overall.
- **Overall Score: 51/100.** Mean of tool use 58, reasoning 60, context 62, multimodal 15, coding 58. Best fit: free high-volume text/automation workloads, prototyping and classroom use; treat every capability claim as unverified until a benchmark row exists for this exact SKU.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12 UTC
- Method: public internet research (Z.ai/BigModel GLM-4.5-Flash docs, free-model directories, Chinese tech-press launch coverage); scores are normalized 1–100 interpretations, not official vendor scores. No benchmark number was found for this specific SKU.
- Reference URLs:
  - [Z.ai (BigModel) docs — GLM-4.5-Flash (free, 128K, hybrid reasoning)](https://docs.bigmodel.cn/cn/guide/models/free/glm-4.5-flash)
  - [CSDN — GLM-4.5-Flash release (free 128K model)](https://blog.csdn.net/gitblog_00020/article/details/154969306)
  - [AyAutomate — GLM-4.5-Flash free limits](https://www.ayautomate.com/free-models/zai-zai-glm-4-5-flash)