# MiMo-V2.6-Pro — findings by GPT 5.6 Luna

- Source: Xiaomi MiMo / MiMo-V2.6-Pro-RL
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Pro
- **Short description:** Xiaomi's open-weight, reasoning-first omnimodal MoE for coding, general agents, cybersecurity, and long-context work.
- **Provider / access:** Xiaomi MiMo Open Platform API and OpenRouter; downloadable as `XiaomiMiMo/MiMo-V2.6-Pro-RL`.
- **Release / knowledge:** 2026-09-21 (independent Artificial Analysis release date); knowledge cutoff not published.
- **IDs:** `XiaomiMiMo/MiMo-V2.6-Pro-RL`; hosted API model name varies by provider. No verified OpenCode Zen Free ID found.
- **Context window:** 1,000,000 tokens, confirmed by the Xiaomi model card and Artificial Analysis.
- **Modalities:** text, image, video, and audio input; text output; reasoning, tool calling, and agent use supported.
- **Pricing (as of 2026-10-17):** Artificial Analysis reports approximately $0.435/M input and $0.87/M output, with 99% cache discount. Paid; provider prices vary.
- **Architecture:** sparse MoE, approximately 1.02T total and 42B active parameters; 384 routed experts with 8 active, 681M vision encoder, audio encoders, and 5-layer speculative decoder; MIT license.

### Raw benchmarks found

The Xiaomi card reports max-effort results and identifies harnesses/settings; Artificial Analysis independently reports a 46 Intelligence Index. These are not all directly comparable because harnesses and evaluation versions differ.

Agent / tool use:

- Terminal-Bench 2.1: **89.9%** (Xiaomi model card and Hugging Face evaluation export)
- Terminal-Bench 4.0: **34.9%** (Xiaomi model card and Hugging Face evaluation export)
- Toolathlon-Verified: **76.9%** (Xiaomi model card and Hugging Face evaluation export)
- AutomationBench v1.0.6: **53.1%** (Xiaomi model card)
- GDPval-AA 2.1: **1673 Elo** (Xiaomi model card)
- Artificial Analysis Intelligence Index: **46 / #1 of 120** (independent Artificial Analysis page)

Reasoning / knowledge:

- Agents' Last Exam: **31.6%** (Xiaomi model card and Hugging Face evaluation export)
- Artificial Analysis Intelligence Index: **46** (independent composite evaluation)
- No independently reproduced GPQA or HLE score was found in the three-source review.

Coding:

- DeepSWE v1.1: **71.9%** (Xiaomi model card and Hugging Face evaluation export)
- ProgramBench: **26.5%** (Xiaomi model card)
- MiMo Code Bench: **63.2%** (Xiaomi model card)

Long context:

- Advertised and independently listed as **1M tokens**; no independent retrieval curve across window lengths was found.

### Normalized scores (1–100)

- **Tool use: 92/100.** Terminal-Bench 2.1, Toolathlon, AutomationBench, and the independent AA Index support a frontier agent score; Terminal-Bench 4.0 is a clear cap.
- **Reasoning: 91/100.** AA Index 46 and Agents' Last Exam 31.6% support excellent general reasoning, but the public evidence set lacks a verified GPQA/HLE result.
- **Context window: 100/100.** Xiaomi and Artificial Analysis both report a 1M-token context; no larger verified window was found.
- **Multimodal: 92/100.** The official card specifies native text/image/video/audio input and a dedicated vision/audio stack; text-only output and limited independent modality benchmarks cap it.
- **Coding: 90/100.** DeepSWE 71.9% and Terminal-Bench 2.1 89.9% are strong, while ProgramBench 26.5% and Terminal-Bench 4.0 34.9% show substantial benchmark variance.
- **Cost efficiency: 91/100.** Approximately $0.435/M input and $0.87/M output, plus a reported 99% cache discount, is unusually inexpensive for the capability level.
- **Overall Score: 93/100.** Half-up mean of `(92 + 91 + 100 + 92 + 90) / 5 = 93.0`; best fit is low-cost, long-context multimodal agent work with strong coding.

---

## Sources

- Xiaomi MiMo official model card, technical report, and benchmark table: https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL
- Independent benchmark, pricing, and capability analysis: https://artificialanalysis.ai/models/mimo-v2-6-pro
- Independent model search corroboration: https://huggingface.co/models?search=MiMo-V2.6-Pro
- Xiaomi MiMo API platform linked from the official card: https://platform.xiaomimimo.com

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-10-17
- Method: independent public-web research using Xiaomi/Hugging Face documentation, the hosted technical report, and Artificial Analysis; scores are normalized interpretations, not official vendor scores.
