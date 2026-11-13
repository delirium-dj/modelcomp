# Qwen 3.5 Flash — Iceman findings

- Model (from kickoff): `Iceman` (opencode/iceman-free) — `AGENT_SOURCE_STEM: Iceman`
- Date: 2026-11-13
- Researched subject: `qwen-3.5-flash` (Qwen 3.5 Flash / qwen3.5-flash-02-23, Alibaba/Qwen) — folder: `model/qwen-3.5-flash`

## Overall
- **Overall Score: 84.8/100.** Hosted multimodal Flash-tier model with 1M default context, low pricing, and tool/reasoning-capable API support, offering strong value for long-context multimodal workloads despite weaker performance on some hard coding/math agent benchmarks noted in metadata.

## Scores
- **Tool use: 84/100.** OpenRouter lists support for tool-related parameters (`tools`, `tool_choice`) and reasoning controls for `qwen/qwen3.5-flash-02-23`, making it suitable for API-driven agentic and structured workflows.
- **Reasoning: 80/100.** Supports reasoning-related API options and is positioned as a capable Flash tier; repo metadata cites solid general results (e.g. GPQA 82.8%, LiveCodeBench 83.3% claims) but also notes weaker Terminal-Bench/FrontierMath performance and that this is a hosted serving profile.
- **Context window: 94/100.** Repo metadata states 1,000,000-token context by default for the hosted tier with 65,536 max output, enabling long multimodal/document sessions.
- **Multimodal: 86/100.** Repo metadata indicates text, image, and video inputs with text output, useful for multimodal analysis and agent assistance; detailed modality limits were not fully confirmed from a first-party model card in this pass.
- **Coding: 80/100.** Good for general coding/productivity tasks at Flash cost, but repo metadata highlights weaker performance on some agentic coding/math-heavy suites compared with stronger open weights/specialists.
- **Cost efficiency: 93/100.** Very low pricing (OpenRouter snapshot ~$0.065/$0.26 per 1M input/output; Model Studio international tiers also low per metadata), delivering strong value for high-volume 1M-context multimodal use.
- **Overall Score: 82/100.** A cost-effective long-context multimodal hosted model with practical API tooling support, best for throughput and value-oriented workloads rather than the hardest coding/reasoning benchmarks.

- Signed: Iceman (opencode/iceman-free)
- Reference URLs:
  - https://openrouter.ai/qwen/qwen3.5-flash-02-23
  - https://openrouter.ai/qwen/qwen3.5-flash-02-23/api
  - https://www.alibabacloud.com/help/en/model-studio/models
