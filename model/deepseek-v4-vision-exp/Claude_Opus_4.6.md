# DeepSeek V4 Vision Exp — findings by Claude Opus 4.6

- Source: DeepSeek / DeepSeek-V4-Flash-Vision-Exp
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Vision Exp
- **Short description:** DeepSeek's experimental multimodal vision-language model (Aug 2026). Built on V4-Flash MoE backbone with integrated vision tower for UI/document understanding and agentic visual workflows. Retired Sep 10, 2026; succeeded by DeepSeek-V4.1-Flash.
- **Provider / access:** DeepSeek API (`deepseek-v4-flash-vision-exp`), open weights via vLLM. Retired — requests now routed to V4.1-Flash.
- **Release / knowledge:** 2026-08-21 release; retired 2026-09-10. Active window: ~3 weeks.
- **IDs:** `deepseek/deepseek-v4-flash-vision-exp` (retired; succeeded by `deepseek-v4.1-flash`)
- **Context window:** 1,000,000 tokens (1M).
- **Modalities:** Text, image in; text out; tool calls. Vision encoder processes up to ~384 visual tokens per image. Thinking/non-thinking modes.
- **Pricing (as of 2026-10-11):** Free/low-cost during experimental preview. Successor V4.1-Flash uses standard DeepSeek pricing.
- **Architecture:** 284B total parameters, 13B active (MoE). V4-Flash text backbone + integrated vision tower with learned projector. Open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **83.9** (source: huggingface.co, dev.to)
- AutomationBench: **38.8** (source: dev.to, stealthmodels.com)
- Agents' Last Exam: **27.3** (source: huggingface.co)
- GDPval-AA v2: **Elo 1675** (source: github.io; same tier as top frontier models)
- Tau3-Banking: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified standalone score found (text backbone comparable to V4-Flash)
- HLE (Humanity's Last Exam): no verified public score found
- ARC-AGI-2: no verified public score found
- ApexBench (Pass@1): **36.5** (source: huggingface.co)
- Chartography: **64.3** (source: huggingface.co)

Coding:

- DeepSWE v1.1: **~59.3** (source: dev.to, stealthmodels.com)
- SWE-bench Verified: no verified standalone score found
- LiveCodeBench: no verified public score found
- SciCode: no verified public score found

Long context:

- 1,000,000 token context window. No MRCR/RULER retrieval score published.

### Normalized scores (1–100)

- **Tool use: 86/100.** TB 2.1 83.9 is near-frontier (ref: 80%+ on TB 2.1 = 85–92 range). GDPval-AA Elo 1675 is competitive. AutomationBench 38.8% is moderate. Strong agentic vision capabilities.
- **Reasoning: 80/100.** ApexBench 36.5 and Chartography 64.3 show solid visual reasoning. Text backbone inherits V4-Flash reasoning quality. Missing GPQA/HLE standalone verification caps higher.
- **Context window: 90/100.** 1M verified. Large context for a vision-language model. No retrieval benchmarks published.
- **Multimodal: 62/100.** Text + image in; text out. Vision tower for document/chart/UI analysis. No audio/video input. Image-only vision = 55–65 range; specialized for document parsing boosts slightly.
- **Coding: 82/100.** DeepSWE v1.1 ~59.3 is competitive. TB 2.1 83.9 reflects strong agentic coding capability. Approaches Claude Opus 4.8 performance on multimodal agent workflows per community reports.
- **Cost efficiency: 92/100.** Free/very low cost during experimental preview. 13B active params = highly efficient MoE inference. Exceptional value during preview window.
- **Overall Score: 80/100.** Mean of (86 + 80 + 90 + 62 + 82) / 5 = 80.0. Strong experimental multimodal agent model; retired quickly but demonstrated impressive capabilities during its short window.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-11
- Method: Public internet research (deepseek.com, huggingface.co, dev.to, z.ai, github.io, mindstudio.ai, stealthmodels.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
