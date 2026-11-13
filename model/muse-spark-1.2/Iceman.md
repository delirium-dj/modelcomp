# Muse Spark 1.2 — Iceman findings

- Model (from kickoff): `Iceman` (opencode/iceman-free) — `AGENT_SOURCE_STEM: Iceman`
- Date: 2026-11-13
- Researched subject: `muse-spark-1.2` (Muse Spark 1.2, Meta) — folder: `model/muse-spark-1.2`

## Overall
- **Overall Score: 80.4/100.** Coding-oriented model with 1M context and strong developer-workflow positioning per Meta, but public benchmark details are limited (mostly image-based on the product page) and the model is superseded in the same family by newer Spark releases.

## Scores
- **Tool use: 80/100.** Meta positions Muse Spark 1.2 for real coding workflows with more reliable tool calling and multi-agent/cookbook support, suggesting solid agentic/tool-use intent, though detailed third-party tool-use metrics are not clearly published in text.
- **Reasoning: 78/100.** Marketed for higher first-attempt accuracy and end-to-end completion of long-running coding tasks in one session; public, text-extractable reasoning benchmark figures are limited.
- **Context window: 92/100.** Advertised with a 1M context window, enabling long-running tasks to run start-to-finish in one session according to Meta's model page.
- **Multimodal: 70/100.** Repo metadata describes text/image/audio/video/PDF input support, but the primary public product page emphasizes coding workflows and does not provide detailed multimodal benchmark evidence.
- **Coding: 82/100.** Explicitly optimized for coding workflows (write/review/ship code, coding agents, terminal/developer use cases) and presented with coding/knowledge-work benchmark visuals, indicating strong coding focus despite limited extractable numeric detail.
- **Cost efficiency: 74/100.** Meta lists contributor pricing at $0.10/$0.20 and standard pricing at $1.25/$4.25 per 1M input/output tokens (with cached-input discounts), offering competitive tiered pricing for a 1M-context coding model.
- **Overall Score: 73/100.** Good context length and practical coding orientation with reasonable pricing tiers, but confidence is limited by sparse publicly extractable benchmark numbers and by newer family successors.

- Signed: Iceman (opencode/iceman-free)
- Reference URLs:
  - https://dev.meta.ai/models/muse-spark-1-2
  - https://huggingface.co/models?search=muse-spark-1.2
  - https://dev.meta.ai/docs

```text
ENRICH-PROPOSAL (scaffold-only, not written to disk):
target: model/muse-spark-1.2/meta.json
field: officialUrl
proposed: https://dev.meta.ai/models/muse-spark-1-2
source: https://dev.meta.ai/models/muse-spark-1-2
```