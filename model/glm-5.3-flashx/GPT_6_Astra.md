# GLM-5.3-FlashX — findings by GPT 6 Astra

- Source: Z.ai / glm-5.3-flashx
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: [methodology](../../model-comparison.md)
- Cross-model signed log: [findings](../../model-findings.md)

## Model card

- **Name:** GLM-5.3-FlashX.
- **Short description:** Faster serving option for GLM-5.3-Flash, not an independently established new checkpoint. Shared results below are not FlashX-specific tests. [Gateway description](https://vercel.com/ai-gateway/models/glm-5.3-flashx)
- **Provider / access / IDs:** Z.ai Chat Completions `glm-5.3-flashx`; no verified Zen Free ID. FlashX is not currently included in the Coding Plan. [Documentation](https://docs.z.ai/guides/vlm/glm-5.3-flash)
- **Release / knowledge:** Available by this research date; exact first-release date and knowledge cutoff not independently verified.
- **Context window:** 1M, maximum output 128K. [Documentation](https://docs.z.ai/guides/vlm/glm-5.3-flash)
- **Modalities:** Text/image/video/file input, text output; mandatory thinking, function calls and structured outputs. [Documentation](https://docs.z.ai/guides/vlm/glm-5.3-flash)
- **Pricing (2026-10-07):** Paid $0.37 input / $1.25 output / $0.075 cached input per million tokens; cache storage temporarily free. [Official pricing](https://docs.z.ai/guides/overview/pricing)
- **Architecture:** Shared Flash architecture: 320B total / 18B active parameters, hybrid sparse/linear attention; open weights. License terms not independently inspected in this pass. [Publisher card](https://huggingface.co/zai-org/GLM-5.3-Flash)

### Raw benchmarks found

**Shared Flash-model results**, not independent FlashX-route measurements:

| Benchmark | Result | Provenance |
|---|---:|---|
| Terminal-Bench 2.1 | 84.3% | [Publisher card](https://huggingface.co/zai-org/GLM-5.3-Flash), Claude Code 2.1.207 |
| DeepSWE v1.1 | 63.4% | [Official evaluation](https://docs.z.ai/guides/vlm/glm-5.3-flash) |
| AutomationBench | 48.8% | [Official evaluation](https://docs.z.ai/guides/vlm/glm-5.3-flash) |
| AA Intelligence Index v4.1.1 | 57 | [Publisher's historical AA citation](https://docs.z.ai/guides/vlm/glm-5.3-flash) |
| Z.ai Code Bench v1.0, max | 29.0 | [Internal evaluation](https://docs.z.ai/guides/vlm/glm-5.3-flash) |

DeepSWE uses mini-swe-agent, 400K context and a six-hour timeout. Terminal evaluation permits 65,536 generated tokens. [Harness notes](https://huggingface.co/zai-org/GLM-5.3-Flash)

Tau3/Tau2, GDPval-AA Elo, Claw-Eval, MCP-Atlas, Toolathlon, exact GPQA/HLE/CritPt, Omniscience, SWE-bench Verified/Pro, LiveCodeBench, SciCode and Vibe Code Bench: no verified public score recovered here. No quantified full-window retrieval result recovered. The historical AA index is not directly comparable with newer versions.

### Normalized scores (1–100)

- **Tool use: 85/100.** Strong shared terminal and automation results; route-specific replication and broader tool evidence remain absent.
- **Reasoning: 82/100.** Shared historical intelligence evidence supports high capability, with incomplete academic coverage.
- **Context window: 95/100.** Million-token capacity, without near-perfect retrieval evidence.
- **Multimodal: 85/100.** Image/video/document input; no verified native audio endpoint.
- **Coding: 86/100.** Strong DeepSWE and terminal results, below the highest coding anchors.
- **Cost efficiency: 95/100.** Inexpensive paid inference, though faster serving costs more than ordinary Flash.
- **Overall Score: 87/100.** Half-up mean: (85 + 82 + 95 + 85 + 86) / 5 = 86.6. Suitable for fast multimodal coding agents, subject to shared-model equivalence.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-07 UTC
- Method: Fresh public web research; scores are normalized interpretations, not official vendor scores.
- Future sources: add a separate signed file alongside this report.
