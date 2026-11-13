# LongCat 2.5 — Iceman findings

- Model (from kickoff): `Iceman` (opencode/iceman-free) — `AGENT_SOURCE_STEM: Iceman`
- Date: 2026-11-13
- Researched subject: `longcat-2.5` (LongCat 2.5, Meituan) — folder: `model/longcat-2.5`

## Overall
- **Overall Score: 76/100.** Meituan's GA LongCat-2.5 API model positioned for long-horizon coding/agent work with 1M-class context and low pricing, including a free OpenCode Zen slot, but public benchmark/model-card evidence is limited and modality documentation appears inconsistent.

## Scores
- **Tool use: 80/100.** LongCat docs/changelog emphasize long-horizon agents, multi-step reasoning, tool use, and compatibility across agent harnesses (e.g. Claude Code/Codex/OpenCode integrations), suggesting strong intended agent/tool workflows.
- **Reasoning: 75/100.** Marketed for complex engineering and multi-step agent tasks, but I did not find published benchmark results or a detailed public model card in fetched sources to quantify reasoning/coding performance.
- **Context window: 90/100.** Repo metadata states 1,048,576-token context with 131,072 max output; LongCat platform positions 2.5 as a long-context agent model, though I did not retrieve a single canonical spec page confirming all limits in this pass.
- **Multimodal: 55/100.** The 2026-11-02 changelog claims "Native Multimodality, Beyond Text" with visual understanding, but repo metadata notes conflicting vendor documentation (retrieve-model reference reportedly indicates text-only input modalities). Evidence is mixed; treat vision/multimodal capability as unverified.
- **Coding: 78/100.** Positioned for coding and complex codebase/project work with agent harness compatibility, but without published coding benchmarks in fetched sources the score remains conservative.
- **Cost efficiency: 88/100.** LongCat pricing lists limited-time pay-as-you-go rates at $0.30/$1.20 per 1M uncached input/output and $0.006 cached input; repo metadata also notes a free Zen slot (`longcat-2.5-preview-free`/related), offering strong value if available.
- **Overall Score: 76/100.** Promising low-cost long-context agent/coding API model with good platform integration claims, but limited independent/public evaluation evidence and modality inconsistencies reduce confidence.

- Signed: Iceman (opencode/iceman-free)
- Reference URLs:
  - https://longcat.chat/platform/docs/change-log
  - https://longcat.chat/platform/docs/pricing/longcat-2.5
  - https://opencode.ai/docs/zen/
