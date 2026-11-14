- Source: NVIDIA/Nemotron 3.5 Super VL
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Super VL (120B-A12B)
- **Short description:** NVIDIA's 2026-10-15 open multimodal MoE model for continuously running, multi-step AI agents, unifying reasoning, instruction following and tool calling with text/image/document/video understanding. A distinct model; Nemotron 3.5 Bolt (74B-A9B and E4B edge variants) and Nemotron 3 Nano Omni are separate.
- **Provider / access:** Open weights via NVIDIA NIM, Hugging Face, OpenRouter and ModelScope; BF16 and NVFP4 quantized builds; NVIDIA NeMo toolchain for post-training on proprietary data, tools, policies and workflows.
- **Release / knowledge:** 2026-10-15; knowledge cutoff: no verified public score found.
- **IDs:** `NVIDIA-Nemotron-3.5-Super-VL-120B-A12B` (BF16 / NVFP4 variants). No free Zen ID verified.
- **Context window:** **1,000,000 tokens** (secondary CSDN technical analysis of the model card); no vendor-verified figure in the retrieved Baike excerpt — reported with provenance.
- **Modalities:** **text, image, document and video in; text out**; code testing/debugging, cross-site information retrieval, document analysis, cyber-threat identification, video content retrieval. No verified audio input or non-text output.
- **Pricing (as of 2026-11-14):** open weights (free self-hosting); no API rate card in the retrieved pages — no verified public price found.
- **Architecture:** MoE, **120B total / 12B active** parameters; NVIDIA claims up to **5x the throughput** of same-size open models for single-GPU agent tasks. Open weights.

### Raw benchmarks found

Agent / tool use:

- Single-GPU agent-task throughput: up to **5x** same-size open models (vendor claim, relative)
- Unified reasoning + instruction following + tool calling for multi-step agents (qualitative)
- Use cases: code test/debug, cross-site retrieval, document analysis, cyber-threat ID, video retrieval
- PinchBench results are documented for the separate Nemotron 3.5 Bolt model, not this one — not attributed here
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found for this exact ID

Coding:

- Code testing and debugging as a native use case (qualitative)
- SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- 1M-token window (secondary) with long document and video processing; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 85/100.** Purpose-built for persistent multi-step agents with unified tool calling, a claimed 5x single-GPU throughput advantage and NeMo customisation; capped by no scored agent benchmark and the throughput figure being a vendor claim.
- **Reasoning: 82/100.** Unified reasoning/instruction-following design with 12B active params; capped by zero published numeric reasoning benchmarks for this exact ID.
- **Context window: 90/100.** A 1M-token window (secondary) with long-document and long-video retrieval use cases; capped by no vendor-verified figure and no retrieval benchmark.
- **Multimodal: 91/100.** Text, image, document and video input unified in one agent model — broad coverage — with cyber-threat and video-retrieval applications; capped by text-only output, no verified audio input, and no published multimodal benchmark.
- **Coding: 81/100.** Native code testing/debugging support; capped by zero published named coding benchmark scores for this exact ID.
- **Cost efficiency: 93/100.** Free open weights, only 12B active params, NVFP4 quantisation, single-GPU deployment and a claimed 5x throughput gain. Excluded from Overall.
- **Overall Score: 86/100.** Half-up mean of 85, 82, 90, 91, 81 = 85.8 → 86. Best fit: self-hosted, single-GPU multimodal agent fleets doing document/video analysis and tool-heavy workflows with NeMo customisation.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Nemotron 3.5 Super VL article retrieved via public web search excerpt (release, 120B/12B MoE, 5x throughput claim, modalities, use cases, NeMo, deployment channels), plus a secondary CSDN technical analysis and NVIDIA's own Nemotron page excerpt for the 1M context and BF16/NVFP4 build names — labelled secondary. The separate Nemotron 3.5 Bolt model's PinchBench results are explicitly NOT attributed here. Vendor "5x" claims are labelled relative, not benchmark scores. Rows without verified figures are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [Nemotron 3.5 Super VL — 百度百科 (retrieved via search excerpt; specs, modalities, throughput, deployment)](https://baike.baidu.com/item/Nemotron%203.5%20Super%20VL/69420779)
  - [NVIDIA Nemotron 3.5 Super VL 120B 发布解析 — CSDN (retrieved via search excerpt; 1M context, NVFP4)](https://blog.csdn.net/gitblog_00982/article/details/159847897)
