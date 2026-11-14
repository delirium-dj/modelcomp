- Source: Meta/Muse Spark Open
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark Open
- **Short description:** Meta's 2026-10-15 **open-weight** multimodal MoE model, described by Meta as "the most capable American open-weight model to date", built for coding and agent tasks. A distinct model from the closed Muse Spark 1.x line and from Muse Wonder; the low local-deployment barrier (two M5 Ultra Mac Studios via an Apple collaboration) is its headline feature.
- **Provider / access:** Open weights; local deployment possible on two M5 Ultra Mac Studio machines. Part of Meta Superintelligence Labs' Muse line.
- **Release / knowledge:** 2026-10-15; knowledge cutoff: no verified public score found.
- **IDs:** `muse-spark-open` family ID as cited. No free Zen ID verified.
- **Context window:** **1,000,000 tokens**.
- **Modalities:** native multimodal input (text/image and further modalities), text out; coding, long-horizon agent tasks, complex software engineering, multi-step reasoning. No verified audio/video input or non-text output for this exact ID in the retrieved sources.
- **Pricing (as of 2026-11-14):** open weights (free self-hosting); no API rate card in the retrieved pages — no verified public price found.
- **Architecture:** Mixture-of-Experts, **816B total / 42B active** parameters. Parameter counts disclosed.

### Raw benchmarks found

Agent / tool use:

- MCP-Atlas: **89.2**
- JobBench: **61.8** (with `xhigh` reasoning effort, per a Zhihu discussion of Meta's published table)
- Meta's published tests: **#1 in six tests**; also noted to trail Chinese open-weight models on some tasks
- Optimised for long-horizon tasks, complex software engineering and multi-step reasoning (qualitative)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / Toolathon: no verified public score found

Reasoning / knowledge:

- Six-test leadership and 1M context with 42B active params (qualitative); no named numeric reasoning benchmark found
- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found for this exact ID

Coding:

- Purpose-built for code construction and agent collaboration (qualitative); no named numeric coding benchmark found in the retrieved sources
- SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- 1M-token window with long-horizon task design; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 90/100.** MCP-Atlas 89.2, JobBench 61.8 and #1 in six of Meta's published tests for an open-weight model; capped by those being vendor-published tables and by trailing Chinese open models on some tasks.
- **Reasoning: 86/100.** Multi-step reasoning emphasis with 816B/42B MoE and a 1M window; capped by no published numeric reasoning benchmark for this exact ID.
- **Context window: 93/100.** A verified 1M-token window combined with a uniquely low local-deployment footprint (two Mac Studios); capped by no long-context retrieval measurement.
- **Multimodal: 90/100.** Native multimodal open-weight architecture; capped by text-only output, no verified audio/video input for this ID, and no published multimodal benchmark score.
- **Coding: 88/100.** Explicitly designed for coding/agent tasks with six-test leadership; capped by zero published named coding benchmark scores.
- **Cost efficiency: 92/100.** Free open weights with commercial-grade capability runnable on two Mac Studios, avoiding API spend entirely. Excluded from Overall.
- **Overall Score: 89/100.** Half-up mean of 90, 86, 93, 90, 88 = 89.4 → 89. Best fit: privacy-sensitive or on-premise coding/agent deployments that need frontier-class open weights without cluster-scale infrastructure.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Muse Spark Open article retrieved via public web search excerpt (release, 816B/42B MoE, 1M context, open weights, six-test claim, Apple/Mac Studio collaboration), plus a Zhihu discussion of Meta's published table for MCP-Atlas 89.2 / JobBench 61.8 — labelled as a discussion of vendor-published figures, not an independent evaluation. Directional claims are not assigned numeric scores; missing rows are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [Muse Spark Open — 百度百科 (retrieved via search excerpt; specs, release, open weights)](https://baike.baidu.com/item/Muse%20Spark%20Open/69416960)
  - [如何看待 Meta 宣布 Muse Spark Open 正式开源 — 知乎 (retrieved via search excerpt; MCP-Atlas / JobBench figures)](https://www.zhihu.com/question/2094361094915633563/answer/2094482085218105149)
