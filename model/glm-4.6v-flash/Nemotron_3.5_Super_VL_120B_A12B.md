# GLM 4.6V Flash — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Z.ai / Zhipu AI (`glm-4.6v-flash`), docs.z.ai, huggingface.co/zai-org/GLM-4.6V-Flash, arxiv.org (2507.01006), modelcomp.vercel.app, respan.ai, empiriolabs.ai
- Date: 2026-10-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 4.6V Flash
- **Short description:** Z.ai's free dense-9B multimodal Flash model (128K context, MIT open weights) with native visual function calling, grounding, and file/video input. Lightweight member of the GLM-4.6V series released Dec 8, 2025 alongside the 106B GLM-4.6V.
- **Provider / access:** Z.ai API (`glm-4.6v-flash`, also `glm-4-6v-flash`, `zai/glm-4.6v-flash`, `zhipu/glm-4.6v-flash`), BigModel platform, Hugging Face (`zai-org/GLM-4.6V-Flash`). Chat Completions and Responses API endpoints. MIT open weights — free to self-host.
- **Release / knowledge:** Released 2025-12-08. Knowledge cutoff not publicly specified.
- **IDs:** `glm-4.6v-flash` (Z.ai API ID); `zai-org/GLM-4.6V-Flash` (Hugging Face ID). Free tier confirmed on Z.ai Flash tier.
- **Context window:** 128,000 total tokens; 32,768 max output tokens (verified via docs.z.ai, empiriolabs.ai, and arxiv technical report).
- **Modalities:** Text, image, video, file in; text out. Native multimodal. Reasoning: yes (thinking mode toggleable). Tool calls: yes (native multimodal function calling — images/screenshots/document pages passed directly as tool params). JSON mode: yes (JSON response_format).
- **Pricing (as of 2026-10-29):** Free on Z.ai Flash tier (input/output/cached all $0); MIT open weights means free self-hosting. Vision model pricing on BigModel: GLM-4.6V-Flash is free (input/output/cached all free).
- **Architecture:** 9B dense parameters (language backbone based on GLM-4-9B-0414), vision encoder (AIMv2-Huge init, 3D convolutions for video), MLP adapter; MIT open-weights license.

### Raw benchmarks found

General VQA:
- MMBench V1.1: **86.9%** (z.ai HF model-index commit; z.ai blog)
- MMBench V1.1 (CN): **85.9%** (z.ai HF model-index commit)
- MMStar: **74.7%** (z.ai HF model-index commit; modelcomp cites 74.7%)
- BLINK (Val): **65.5%** (z.ai HF model-index commit)
- MUIRBENCH: **75.7%** (z.ai HF model-index commit)
- MMMU (Val): **71.1%** (z.ai HF model-index commit; modelcomp cites 76% from 3 reports)
- MMMU Pro: **60.6%** (z.ai HF model-index commit)

Multimodal Reasoning:
- MathVista: **82.7%** (z.ai HF model-index commit; respan.ai)
- MathVision: **54.0%** (benchmark atlas)
- AI2D: **89.2%** (z.ai HF model-index commit)
- DynaMath: **43.7%** (z.ai HF model-index commit)
- WeMath: **60.0%** (z.ai HF model-index commit)
- ZeroBench (sub): **22.5%** (z.ai HF model-index commit)

Multimodal Agentic:
- OSWorld: **21.1%** (z.ai HF model-index commit; respan.ai)
- AndroidWorld: **42.7%** (z.ai HF model-index commit; respan.ai)
- WebVoyager: **71.8%** (z.ai HF model-index commit; respan.ai)
- Design2Code: **69.8%** (z.ai HF model-index commit; respan.ai; siray.ai cites 88.6% — CONFLICT: different variant/harness)
- Flame-React-Eval: **78.8%** (z.ai HF model-index commit; siray.ai cites 86.3% — CONFLICT)
- MMBrowseComp: **7.1%** (z.ai HF model-index commit; respan.ai)

OCR & Chart:
- OCRBench: **84.7%** (z.ai HF model-index commit; respan.ai)
- ChartQAPro: **62.6%** (z.ai HF model-index commit; respan.ai)

Spatial & Grounding:
- RefCOCO-avg (val): **85.6%** (z.ai HF model-index commit)
- Ref-L4-test: **87.7%** (z.ai HF model-index commit)

Long Context:
- MMLongBench-Doc: **53.0%** (z.ai HF model-index commit)

Conflicts noted: siray.ai review cites Design2Code 88.6% and Flame-React-Eval 86.3% vs z.ai's 69.8%/78.8% — likely different variant (GLM-4.6V 106B vs Flash 9B) or harness; cited separately. modelcomp lists MMMU 76% from 3 reports vs z.ai's 71.1%; used z.ai figure as primary (official source).

### Normalized scores (1–100)

- **Tool use: 62/100.** OSWorld 21.1%, AndroidWorld 42.7%, WebVoyager 71.8% show multimodal agentic capability; native visual function calling is a strength; capped by low OSWorld result and lack of text-only agentic benchmarks (Tau2-bench, MCP-Atlas).
- **Reasoning: 61/100.** MMMU 71.1%, MathVista 82.7%, AI2D 89.2% demonstrate strong visual reasoning; MMLU-style text reasoning not published for Flash variant; capped by absence of GPQA/HLE text reasoning figures.
- **Context window: 70/100.** 128K context verified from official docs; good but below 256K+ Gemma 4 / 1M+ frontier models.
- **Multimodal: 83/100.** MMBench 86.9%, MMMU 71.1%, MathVista 82.7%, OCRBench 84.7% show strong multimodal understanding; native multimodal tool use (images as tool params, visual output comprehension); text/image/video/file input, text output only — no native multimodal generation.
- **Coding: 65/100.** Design2Code 69.8%, Flame-React-Eval 78.8% show visual coding capability; no SWE-bench/LiveCodeBench figures for Flash variant; capped by lack of general coding benchmarks.
- **Cost efficiency: 96/100.** Free on Z.ai Flash tier and free to self-host (MIT open weights); among the most cost-efficient models.
- **Overall Score: 68.2/100.** Mean of (62+61+70+83+65)/5 = 68.2 → but modelcomp's aggregated Overall is 63.7 from 14 agent reports; using 64 to align with the multi-agent consensus; best-fit recommendation: free, open-weight multimodal model for visual understanding and lightweight agentic work on consumer hardware.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-29
- Method: public internet research (3+ independent searches: docs.z.ai + z.ai blog, huggingface.co/zai-org/GLM-4.6V-Flash + arxiv 2507.01006, modelcomp.vercel.app, respan.ai, empiriolabs.ai, siray.ai); scores are normalized 1–100 interpretations, not official vendor scores. Conflicting variant figures (siray.ai Design2Code/Flame-React-Eval vs z.ai) cited separately without reconciliation.
- Future sources: add a new file next to this one using the same headings.
