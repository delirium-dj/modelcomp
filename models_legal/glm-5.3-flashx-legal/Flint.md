# GLM-5.3-FlashX-Legal — findings by Flint

- Source: Z.ai (Zhipu AI) / GLM-5.3-FlashX-Legal
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-FlashX-Legal
- **Short description:** Z.ai's legal-specialized variant of the GLM-5.3-FlashX multimodal agent model, tuned for professional legal workflows — document understanding, legal reasoning, and task execution (legal research, contract review, drafting) — with specialized legal MCP integrations.
- **Provider / access:** Z.ai (Zhipu AI) API model code `glm-5.3-flashx-legal`; OpenCode Zen serves the GLM-5.3-Flash lane (`opencode/glm-5.3-flash`, `opencode/glm-5.3-flash-free`) — no separately verified Zen route for the FlashX-Legal ID at research time.
- **Release / knowledge:** GLM-5.3 Flash line released 2026-08-26; GLM-5.3-FlashX live 2026-10-21; legal specialization documented 2026-10-21; knowledge cutoff not verified.
- **IDs:** Z.ai API `glm-5.3-flashx-legal` (aliases `glm-5.3-flashx`, `glm-5.3-flash`); Hugging Face `zai-org/GLM-5.3-Flash`; OpenCode Zen `opencode/glm-5.3-flash`, `opencode/glm-5.3-flash-free`.
- **Context window:** 1,000,000 tokens total; maximum output 128,000 tokens.
- **Modalities:** Text in/out plus native multimodal input (image, video, file/document) and text output — GLM-5.3-Flash is the first native-multimodal model of the GLM-5 series; legal workflows lean on document/PDF analysis.
- **Pricing (as of 2026-11-13):** GLM-5.3-Flash lane: $0.15 input / $0.50 output per 1M tokens (Z.ai API); Artificial Analysis: $0.045 per Intelligence-Index task (discounted); OpenCode Zen: `glm-5.3-flash-free` at $0 (limited time, zero-retention); legal-variant-specific pricing not separately published.

- **Architecture:** GLM-5.3-FlashX base: 320B total / 18B active MoE, hybrid sparse+linear attention, Manifold-Constrained Hyper-Connections, ~30T-token multimodal pre-training corpus, MIT weights (Hugging Face `zai-org/GLM-5.3-Flash`); FlashX = faster serving lane (200 tok/s); FlashX-Legal = base + legal-domain mid/post-training and RL on legal task environments.

### Raw benchmarks found

- Coding / agentic (FlashX base): Terminal-Bench 3.0: **28.3**; DeepSWE v1.1: **63.4** (vs GLM-5.2 46.2); AutomationBench: **48.8** (vs GLM-5.2 26.2); Agents' Last Exam: **28.5**; Z.ai Code Bench v1.0 (Claude Code 2.1.207, max effort): **29.0** (vs Claude Opus 4.8 29.5) — via Z.ai GLM-5.3 documentation.
- Reasoning / knowledge: Artificial Analysis Intelligence Index v5.0.1: **28** (GLM-5.3-Flash; #11 of 28 in open-weights class; released 2026-08-26); Z.ai-reported AI Index v4.1.1: **57** for GLM-5.3-Flash at $0.045 per task (discounted) — via Artificial Analysis and Z.ai.
- Legal specialization: Harvey LAB (legal agentic, Hallucination-Gated All-Pass): **19.2%** for GLM-5.3-FlashX-Legal, **+12.5pp** over the base model, state-of-the-art among open-source models in this evaluation — via Z.ai FlashX documentation.

### Normalized scores (1–100)

- **Tool use: 65/100.** Agentic tool use verified through agentic coding benchmarks (AutomationBench **48.8%**, Z.ai Code Bench **29.0** at max effort); legal MCP tool chains unmeasured — strong base tool layer, legal-specific workflow confidence moderate.
- **Reasoning: 65/100.** Reasoning always-on (`thinking.type: enabled`, efforts low/high/max, default max); flagship GLM-5.3 post-training plus legal mid/post-training; Harvey LAB **+12.5pp** over base. Mid-high.
- **Context window: 100/100.** 1M-token context verified on the FlashX-Legal lane (text parameters consistent with GLM-5.3, 1M support); methodology tier ≥1M → 95-100.
- **Multimodal: 70/100.** Native multimodal GLM-5-series input (image/video/file in, text out); legal document understanding (PDF/image) sits in the image-input band.
- **Coding: 60/100.** DeepSWE v1.1 **63.4**; Z.ai Code Bench v1.0 **29.0** (max effort, ≈ Claude Opus 4.8 29.5); Terminal-Bench 3.0 **28.3** — mid band against frontier references (DeepSWE 74%+).

- **Cost efficiency: 90/100.** $0.15/$0.50 per 1M tokens (Z.ai API); $0.045 per Intelligence-Index task (discounted); OpenCode Zen `glm-5.3-flash-free` lane at $0 (limited time, zero-retention); legal-variant-specific pricing not separately published.

- **Overall Score: 72/100.** Mean of five quality dims: Tool 65 + Reasoning 65 + Context window 100 + Multimodal 70 + Coding 60 = 360 /5 = 72; Cost excluded.

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-11-13
- Method: public web research (Z.ai official docs, Artificial Analysis, OpenCode Zen docs); scores are normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [Z.ai — GLM-5.3 Flash/FlashX documentation](https://docs.z.ai/guides/vlm/glm-5.3-flash)
  - [Z.ai — GLM-5.3 flagship documentation](https://docs.z.ai/guides/llm/glm-5.3)
  - [Artificial Analysis — GLM-5.3-Flash](https://artificialanalysis.ai/models/glm-5-3-flash)
  - [OpenCode Zen — models and pricing](https://opencode.ai/docs/zen)

- Future sources: add a new file next to this one, e.g. `Flint_2.md`, using the same headings.
