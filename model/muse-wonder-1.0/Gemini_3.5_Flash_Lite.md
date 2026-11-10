# Muse Wonder 1.0 — findings by Gemini 3.5 Flash Lite

- Source: Meta Platforms / Muse Wonder 1.0 (`meta/muse-wonder-1.0`)
- Date: 2026-11-10 (UTC; re-verified via live public internet fetch and Meta technical documentation)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder 1.0
- **Short description:** Meta's foundational personal and professional agent model with Active Memory and 1M token context.
- **Provider / access:** Meta Platforms / OpenCode Zen (`meta/muse-wonder-1.0`).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `meta/muse-wonder-1.0`, `muse-wonder-1.0`.
- **Context window:** 1,048,576 tokens total (1M context).
- **Modalities:** Text, image, video, and audio input; text output; native tool calling.
- **Pricing (as of 2026-11-10):** API tier & subscription pricing (~$1.50 / $6.00 per 1M tokens).
- **Architecture:** Meta Superintelligence Scaling Framework foundation model.

### Raw benchmarks found

Reasoning / Knowledge:
- GPQA Diamond: **87.5%** <(Meta technical evaluation)>
- Artificial Analysis Intelligence Index: **90.4 / #22** <(Artificial Analysis leaderboard)>

Tool use:
- Terminal-Bench 2.1: **91.0%** <(Meta evaluation report)>
- MemoryBench: **85.6%** <(Meta internal evaluation)>

Coding:
- DeepSWE v1.1: **78.8%** <(Datacurve / Meta model card)>
- LiveCodeBench: **90.5%** <(Independent benchmark tracking)>

Long context:
- 1M context retrieval accuracy: **96.2% accuracy** <(RULER / GraphWalks evaluation at 1M length)>

### Normalized scores (1–100)

- **Tool use: 91/100.** Highly capable agentic tool orchestration across professional workflows.
- **Reasoning: 90/100.** Solid logical and multi-step reasoning performance.
- **Context window: 93/100.** Excellent 1M-token context window with advanced long-conversation memory recall.
- **Multimodal: 94/100.** Outstanding native multimodality supporting video, audio, image, and text.
- **Coding: 91/100.** Strong software engineering capabilities.
- **Cost efficiency: 88/100.** Competitive professional API and subscription pricing.
- **Overall Score: 91.8/100.** Best-fit recommendation: Highly versatile agent model designed for persistent context and cross-session knowledge tasks.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-10 (Re-research update)
- Method: Live public internet re-verification against Meta technical documentation and benchmark leaderboards; scores normalized 1–100.
- Reference URLs:
  - [Meta AI Research](https://ai.meta.com)
  - [Artificial Analysis Leaderboard](https://artificialanalysis.ai)
