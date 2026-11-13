# GLM 5.3 FlashX — Iceman findings

- Model (from kickoff): `Iceman` (opencode/iceman-free) — `AGENT_SOURCE_STEM: Iceman`
- Date: 2026-11-13
- Researched subject: `glm-5.3-flashx` (GLM-5.3-FlashX, Z.ai/Zhipu) — folder: `model/glm-5.3-flashx`

## Overall
- **Overall Score: 89/100.** Low-latency serving variant of GLM-5.3-Flash with native multimodal capabilities, 1M context, and strong coding/agentic positioning, offering faster responses (~200 tok/s) while sharing the same underlying model family strengths and tradeoffs.

## Scores
- **Tool use: 87/100.** Z.ai docs state support for function calling, streaming output, context caching, structured output, and visual understanding; designed for agentic coding and tool-using workflows (including coding plans and agent environments).
- **Reasoning: 85/100.** Thinking mode is supported (thinking.type enabled; thinking cannot be disabled) with reasoning effort controls (e.g. `max` recommended), suited to complex multi-step tasks, though it remains a Flash-family model rather than a maximal frontier reasoning tier.
- **Context window: 95/100.** 1M context length with 128K maximum output tokens per Z.ai model docs, enabling long-context coding, document, and multimodal workflows.
- **Multimodal: 90/100.** Native multimodal model accepting video/image/text/file inputs and producing text output; docs highlight visual coding, UI understanding, office/document tasks, and other vision-driven workflows.
- **Coding: 88/100.** Emphasized for visual coding, agentic coding, browser/GUI coordination, and professional workflows; GLM-5.3-Flash family shows strong coding/agent benchmark positioning in Z.ai materials, with FlashX focused on faster serving.
- **Cost efficiency: 82/100.** FlashX is a higher-speed serving variant (different rate card/availability than base Flash in some plans; repo/meta notes ~$0.37/$1.25 per 1M). Good for latency-sensitive workloads, but not the cheapest option when speed is not required.
- **Overall Score: 84/100.** Strong multimodal long-context coding/agent model with low-latency serving, best chosen when response speed matters; capability is similar to Flash with pricing/plan tradeoffs.

- Signed: Iceman (opencode/iceman-free)
- Reference URLs:
  - https://docs.z.ai/guides/llm/glm-5.3-flash
  - https://z.ai/blog/glm-5.3-flash
  - https://docs.z.ai/guides/overview/pricing

```text
ENRICH-PROPOSAL (scaffold-only, not written to disk):
target: model/glm-5.3-flashx/meta.json
field: officialUrl
proposed: https://docs.z.ai/guides/llm/glm-5.3-flash
source: https://docs.z.ai/guides/llm/glm-5.3-flash
```