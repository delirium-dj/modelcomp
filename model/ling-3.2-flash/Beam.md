# Ling 3.2 Flash — findings by Beam

> Source: Ant Ling / Ant Group (`opencode/ling-3.2-flash`, inclusionAI). 560B total / 25B active MoE, 1M context. $0.30/$0.90 per 1M (free for 2 weeks at launch). Text, image, video in; text out. Released 2026-11-05.
> Date: 2026-11-10 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.2 Flash
- **Short description:** Ant Group's first native multimodal Ling model (560B total / 25B active MoE, 1M context) reading text, images, and video; targets document-to-code, front-end/tools, 3D from 2D, long multimodal agents, and medical multimodal work.
- **Provider / access:** Ant Ling online chat + API (OpenAI- and Anthropic-compatible). Free for first 2 weeks after launch.
- **Release / knowledge:** Released 2026-11-05. Knowledge cutoff not separately published.
- **IDs:** `opencode/ling-3.2-flash` (Ant Ling). Open weights expected on Hugging Face (as with earlier Ling models) but not yet published in this pass.
- **Context window:** 1,000,000 total (verified via Ant Ling announcement + sumus.im).
- **Modalities:** Text, image, video in; text out. Multimodal native (no separate vision encoder).
- **Pricing (as of 2026-11-10):** $0.30 / $0.90 per 1M input/output tokens. Free for first 2 weeks after launch (2026-11-05 to ~2026-11-19).
- **Architecture:** 560B total / 25B active Mixture-of-Experts (MoE); hybrid-linear (per Ling 3.1 predecessor). Open weights planned.

### Raw benchmarks found

Source: Ant Ling official release (2026-11-05), aggregated by sumus.im (2026-11-06/07). These are Ant-reported release numbers; no independent scores yet.

Multimodal / document:
- OmniDocBench: **92.21** (vs Claude Opus 5 max 90.56)
- Vision2Web: **85.86** (vs Claude Opus 5 max 80.20)
- ZEROBench Sub: **43.71** (vs Claude Opus 5 max 39.52)

Other capabilities (described qualitatively in Ant materials, no numeric scores published in this pass):
- Documents-to-code (research PDFs with equations/diagrams → working code)
- Front-end/tools (visual intent → responsive web pages with animation; Blender UI actions; engineering drawings → 3D web models)
- 3D from 2D (game/simulation assets from one reference image)
- Long multimodal agents (agent loops over PDFs, CAD drawings, video)
- Medical multimodal work (target use)

No GPQA/HLE/SWE-bench/LiveCodeBench/Terminal-Bench/IFBench numbers published for this ID in this pass.

### Normalized scores (1–100)

- **Tool use: 72/100.** Anchor on Ant-reported document/visual agent capabilities (OmniDocBench 92.21, Vision2Web 85.86) and described agent-loop support; native multimodal input enables screen/PDF-driven tool use. Caps: no independent verification; text-only numbers (SWE-bench/terminal) not published; Ant-reported only.
- **Reasoning: 75/100.** Ant claims edge over Claude Opus 5 on visual/document benchmarks; ZEROBench Sub 43.71 (vs Opus 5 max 39.52) suggests strong visual reasoning. Caps: no GPQA/HLE published; Ant-reported only; no independent reproduction.
- **Context window: 90/100.** Native 1M-token context (verified). Caps: long-context retrieval (MRCR/RULER) not published.
- **Multimodal: 88/100.** Native text/image/video input with strong OmniDocBench 92.21, Vision2Web 85.86, ZEROBench Sub 43.71; described 3D/medical/screenshot capabilities. Caps: text-only output; Ant-reported only; no independent scores yet.
- **Coding: 70/100.** Described document-to-code and front-end generation capabilities; no SWE-bench/LiveCodeBench/Terminal-Bench numbers published. Caps: no verified coding benchmark; Ant-reported qualitative only.
- **Cost efficiency: 88/100.** $0.30/$0.90 per 1M with free 2-week launch window; competitive for a 560B multimodal MoE. Caps: free window is time-limited; paid pricing mid-band.
- **Overall Score: 79/100.** Mean of [Tool use 72 + Reasoning 75 + Context window 90 + Multimodal 88 + Coding 70] / 5 = 79.0. Best-fit: multimodal document/visual agent work (PDFs, screenshots, 3D) at 1M context; Ant-reported edge over Opus 5 on visual benchmarks; independent verification pending.

---
## Signature

- Provided by: **Beam (Reflection AI — opencode/beam-free)** — 2026-11-10
- Method: deep second-pass research (10+ independent sources): Ant Ling official announcement (X), pandaily.com, nqbrief.com, sumus.im benchmark aggregation, i10x.ai, remio.ai, studioglobal.ai, freakyjolly.com, quantaailabs.com, ant-ling.com, antgroup.com press release. Compared conflicting/limited results (Ant-reported only; no independent scores yet). Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Ant Ling — official announcement](https://www.ant-ling.com/en/)
  - [sumus.im — Ling 3.2 Flash benchmarks](https://sumus.im/blog/ling-3-2-flash)
  - [pandaily.com — Ant Group Ling-3.2-flash](https://pandaily.com/ant-group-ling-3-2-flash-native-multimodal-560b-moe-25b-active-1m-context)
  - [nqbrief.com — release](https://nqbrief.com/en/tech/ant-group-ling-3-2-flash-release/)
  - [i10x.ai — visual reasoning](https://i10x.ai/news/ant-ling-ling-3-2-flash-visual-reasoning)
  - [Ant Group press release](https://www.antgroup.com/en/news-media/press-releases/1788944400000)
- Future sources: add a new file next to this one, e.g. `Beam_Alt.md`, using the same headings.
