# MiMo-V2.6-Pro — findings by GPT 5.6 Luna

- Source: Xiaomi MiMo / MiMo-V2.6-Pro-RL
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Pro
- **Short description:** Xiaomi's open-weight, reasoning-first omnimodal MoE for coding, general agents, cybersecurity, research, and long-horizon work.
- **Provider / access:** Xiaomi MiMo Open Platform API (`mimo-v2.6-pro` on the hosted service), OpenRouter, and downloadable weights at `XiaomiMiMo/MiMo-V2.6-Pro-RL`.
- **Release / knowledge:** 2026 release; the hosted model's knowledge cutoff is not published. Xiaomi retired the V2.5 endpoints on October 21, 2026 and directs integrations to V2.6.
- **IDs:** Hosted API model `mimo-v2.6-pro`; weights `XiaomiMiMo/MiMo-V2.6-Pro-RL`. No verified OpenCode Zen Free ID was found.
- **Context window:** 1,000,000 tokens; Xiaomi also documents a maximum output of 128,000 tokens, 100 RPM, and 10M TPM.
- **Modalities:** Text, image, video, and audio input; text output; deep thinking, tool calls, web search, structured output, streaming, and context caching.
- **Pricing (as of 2026-11-02):** Xiaomi's hosted page lists ¥3/M input on cache miss, ¥0.025/M on cache hit, and ¥6/M output. Artificial Analysis's USD listing is approximately $0.435/M input and $0.87/M output, with a reported 99% cache discount; provider prices can vary.
- **Architecture:** Sparse MoE, approximately 1.02T total and 42B active parameters, with routed experts plus dedicated vision/audio encoders; the official release describes it as a trillion-parameter model. The weights are released under an MIT license.

### Raw benchmarks found

The Xiaomi card reports max-effort results and names the harnesses/settings. BenchLM's current independent profile has only partial benchmark coverage, so the figures are not treated as one interchangeable leaderboard.

Agent / tool use:

- Terminal-Bench 2.1: **89.9%** (Xiaomi model card and Hugging Face evaluation export)
- Terminal-Bench 4.0: **34.9%** (Xiaomi model card and Hugging Face evaluation export)
- Toolathlon-Verified: **76.9%** (Xiaomi model card and Hugging Face evaluation export)
- AutomationBench v1.0.6: **53.1%** (Xiaomi model card)
- GDPval-AA 2.1: **1673 Elo** (Xiaomi model card)
- BenchLM overall: **56.44/100, #59 of 1,004**; 37 of 724 benchmark rows covered (independent aggregation, October 29, 2026)

Reasoning / knowledge:

- Agents' Last Exam: **31.6%** (Xiaomi model card and Hugging Face evaluation export)
- Artificial Analysis Intelligence Index: **46** (independent composite evaluation)
- No independently reproduced GPQA or HLE score was found in the current source set.

Coding:

- DeepSWE v1.1: **71.9%** (Xiaomi model card and Hugging Face evaluation export)
- ProgramBench: **26.5%** (Xiaomi model card)
- MiMo Code Bench: **63.2%** (Xiaomi model card)

Long context:

- Advertised and independently listed as **1M tokens**; no independent retrieval curve across window lengths was found.

### Normalized scores (1–100)

- **Tool use: 92/100.** Terminal-Bench 2.1, Toolathlon, AutomationBench, GDPval, and the model's native web-search/tool features support a frontier agent score; Terminal-Bench 4.0 and partial independent coverage are clear caps.
- **Reasoning: 91/100.** Artificial Analysis 46 and Agents' Last Exam 31.6% support excellent general reasoning, but the public evidence set lacks a verified GPQA/HLE result.
- **Context window: 100/100.** Xiaomi and independent listings agree on a 1M-token context; no larger verified window was found.
- **Multimodal: 92/100.** The official card specifies native text/image/video/audio input and a dedicated vision/audio stack; text-only output and limited independent modality benchmarks cap it.
- **Coding: 90/100.** DeepSWE 71.9% and Terminal-Bench 2.1 89.9% are strong, while ProgramBench 26.5% and Terminal-Bench 4.0 34.9% show substantial benchmark variance.
- **Cost efficiency: 93/100.** The official ¥3/¥6 hosted pricing and very low cache-hit rate are unusually inexpensive for a 1M multimodal agent model.
- **Overall Score: 93.0/100.** Half-up mean of `(92 + 91 + 100 + 92 + 90) / 5 = 93.0`; best fit is low-cost, long-context multimodal agent work with strong coding.

---

## Sources

- Xiaomi MiMo official model page and pricing/specification page: https://mimo.mi.com/models/en-US/mimo-v2.6-pro
- Xiaomi MiMo official model card, technical report, and benchmark table: https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL
- Independent BenchLM benchmark profile: https://benchlm.ai/models/mimo-v2-6-pro
- Independent benchmark, pricing, and capability analysis: https://artificialanalysis.ai/models/mimo-v2-6-pro
- Xiaomi MiMo API platform: https://platform.xiaomimimo.com

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: independent public-web research using Xiaomi's current product documentation, Hugging Face's official card/technical report, BenchLM, and Artificial Analysis; scores are normalized interpretations, not official vendor scores.
