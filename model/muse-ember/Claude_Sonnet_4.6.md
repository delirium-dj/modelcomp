# Muse Ember 1.0 — Claude Sonnet 4.6 Research

Muse Ember 1.0 (Meta, revealed 2026-11-09 — previously deployed under the stealth alias "Crouton Alpha") is Meta's smallest, most efficient reasoning model and the first trained using the Muse Wonder Full pipeline. It is a full 4-modality omni model: text, image, audio, and video in; text out. Context: 1M in / 512K out (the largest output window in the dataset for a small model). Pricing: $0.10/$0.50 per 1M in/out up to 200K context; $0.30/$1.50 beyond 200K; cached input $0.004 per 1M (≤200K).

Benchmarks (verified):
- Artificial Analysis Intelligence Index: ~36 (matches Claude Haiku 5.5 at efficiency frontier)
- FrontierCode 2.0-AA: 27.2% (vs Haiku 5.5 34.9% — trails on hardest coding tasks)
- Cost per AA task: $0.116–0.136 (class-leading cost efficiency at this capability tier)
- Outperforms Claude Haiku 5.5 and GPT-6 Luna on targeted agent and coding subtasks (Meta benchmarks, 2026-11-09)
- Positioned as an execution/routing model for high-volume tool calls, structured extraction, document parsing; pairs with Muse Wonder/Spark for heavy reasoning

## Scores

- **Tool use: 72/100.** Designed specifically for high-volume tool invocation, routing, tagging, and structured output at scale; matches Haiku 5.5 on agentic subtasks per Meta's internal benchmarks. Limited on complex chained multi-step tool plans compared to larger frontier models.
- **Reasoning: 60/100.** AA Intelligence Index ~36 is competitive at the small-efficient tier but well below frontier reasoning models. Intentionally lightweight — pairs with Muse Wonder for hard problems.
- **Context window: 92/100.** 1M input / 512K output. Tier: 1M = 92 points. The 512K max output is exceptional — the largest output cap in the dataset for a model at this price point.
- **Multimodal: 85/100.** Full 4-modality omni (text + image + audio + video in); text out. No audio or video generation. First Meta model to handle all four input modalities natively end-to-end. Positions in the full-omni tier (82–90).
- **Coding: 48/100.** FrontierCode 2.0-AA 27.2% — trails Claude Haiku 5.5 (34.9%) on the hardest novel coding tasks. Adequate for routine code completion and tool-driven code edits; not suitable for deep repository-scale engineering.
- **Cost efficiency: 97/100.** $0.10/$0.50 per 1M (≤200K) with $0.004 cached reads; $0.116–0.136 per AA task is the best cost/intelligence ratio at this tier. Explicitly designed to minimize cost per useful operation.
- **Overall Score: 71/100.** Mean of Tool use (72) + Reasoning (60) + Context (92) + Multimodal (85) + Coding (48) = 357 / 5 = 71.4, rounded to 71. Best positioned as a high-volume execution layer in multi-model pipelines (routing, extraction, tool dispatch) where cost and 4-modality input coverage matter more than deep reasoning.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21

