# DeepSeek V4.1 Flash 1017 — Iceman findings

- Model (from kickoff): `Iceman` (opencode/iceman-free) — `AGENT_SOURCE_STEM: Iceman`
- Date: 2026-11-13
- Researched subject: `deepseek-v4.1-flash-1017` (DeepSeek V4.1 Flash 1017 / deepseek-flash update) — folder: `model/deepseek-v4.1-flash-1017`

## Overall
- **Overall Score: 88.2/100.** Updated DeepSeek Flash checkpoint with 1M context, 384K max output, vision support, and low peak/off-peak pricing, making it a strong high-throughput model for coding/agent workflows; hosted product naming and some capability details vary by provider.

## Scores
- **Tool use: 88/100.** DeepSeek API docs list support for tool calls, responses API, Anthropic API compatibility, JSON output, prefix/FIM completions (mode-dependent), and vision for `deepseek-flash` (V4.1-Flash-1017), indicating strong agent/tooling integration.
- **Reasoning: 85/100.** Supports both non-thinking and thinking modes (thinking default per docs), suitable for coding and multi-step tasks; as a Flash-class model it prioritizes speed/cost over maximum frontier reasoning depth.
- **Context window: 96/100.** 1M context length with 384K maximum output per DeepSeek pricing/model details, excellent for long codebases and extended generation workflows.
- **Multimodal: 84/100.** Vision is supported for `deepseek-flash` (V4.1-Flash-1017) per API docs, enabling image-assisted tasks; multimodal breadth beyond vision/text is not indicated.
- **Coding: 88/100.** Flash family is optimized for fast, capable coding and agent tasks with large context/output and tool support; repo metadata describes it as the updated checkpoint served by retired v4-flash routes, implying continuity and improved performance.
- **Cost efficiency: 94/100.** Very low pricing ($0.15/$0.60 off-peak, $0.30/$1.20 peak per 1M input/output; cache-hit rates much lower) with high concurrency limits, offering excellent value for large-scale usage.
- **Overall Score: 86/100.** A cost-efficient, long-context, tool-capable multimodal Flash model well suited for production coding agents, with tradeoffs mainly in peak-tier depth versus larger Pro/frontier models.

- Signed: Iceman (opencode/iceman-free)
- Reference URLs:
  - https://api-docs.deepseek.com/quick_start/pricing
  - https://www.deepseek.com/
  - https://opencode.ai/docs/zen/

```text
ENRICH-PROPOSAL (scaffold-only, not written to disk):
target: model/deepseek-v4.1-flash-1017/meta.json
field: officialUrl
proposed: https://api-docs.deepseek.com/quick_start/pricing
source: https://api-docs.deepseek.com/quick_start/pricing
```