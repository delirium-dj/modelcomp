# Muse Wonder — findings by Muse Glimmer 30B

- Source: Meta/Muse-Wonder
- Date: 2026-11-01
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Muse Wonder
- **Short description:** Meta’s frontier personal & professional agent model, 1M context, multimodal in, strong agentic knowledge work and coding; predecessor to Muse Wonder Full.
- **Provider / access:** Meta Platforms — Meta Model API, Muse.
- **Release / knowledge:** 2026-10-12; knowledge cutoff not published.
- **IDs:** Meta/Muse-Wonder
- **Context window:** 1M tokens at inference.
- **Modalities:** input text, image, video, audio; output text; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-12):** API paid; cost per Intelligence Index task $4.52 per Artificial Analysis — paid tier.
- **Architecture:** proprietary.

### Raw benchmarks found

- Source: Meta Muse Wonder Model Card, 2026-10-12
- Source: Artificial Analysis Muse Wonder & Muse Wonder Full, 2026-10-12
- Source: BenchGap Muse Wonder scores, 2026-10-29

Agent / tool use:

- Terminal-Bench 4.0: 52% measured, 52.0% AA (Artificial Analysis)
- AutomationBench-AA: 68% (Artificial Analysis article)
- Agents’ Last Exam: 52.0% estimated
- GDPval-AA v2.1: 63.5% measured (BenchGap)
- OSWorld 2.1: 72.6% measured

Reasoning / knowledge:

- Humanity's Last Exam: 50.1% measured AA-HLE
- GPQA Diamond: 93.9% estimated
- AA Intelligence Index: 52 max reasoning effort (Artificial Analysis)
- CritPt: 28.3% measured
- AA-LCR: 80.7% measured

Coding:

- DeepSWE v1.1: 78.8% measured (BenchGap)
- SWE-Marathon: 53.1% measured
- ProgramBench: 50.0% measured
- Terminal-Bench 4.0: 52% as above

Long context / multimodal:

- Context 1M verified; multimodal input confirmed.

### Normalized scores (1–100)

- **Tool use: 70/100.** Terminal-Bench 4.0 52% and AutomationBench-AA 68% show solid agentic tool use; GDPval-AA 63.5% supports strong agentic knowledge work.
- **Reasoning: 78/100.** HLE 50.1%, GPQA Diamond ~94%, Intelligence Index 52; capped by CritPt 28.3%.
- **Context window: 98/100.** 1M token context with multimodal input; top-tier size.
- **Multimodal: 75/100.** Text/image/video/audio in, text out; strong 3D/design capabilities noted in Meta card.
- **Coding: 78/100.** DeepSWE 78.8%, SWE-Marathon 53.1%, ProgramBench 50%; strong open-source coding with long-horizon gains.
- **Cost efficiency: 55/100.** Paid API at $4.52 per Intelligence Index task, premium pricing.
- **Overall Score: 80/100.** Mean of Tool 70 + Reasoning 78 + Context 98 + Multimodal 75 + Coding 78 = 79.8 → 80; strong agentic multimodal model with premium pricing.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-11-01
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - https://research.meta.ai/static/muse-wonder-model-card
  - https://research.meta.ai/blog/muse-wonder
  - https://artificialanalysis.ai/articles/muse-wonder
- Future sources: add a new file next to this one using the same headings.
