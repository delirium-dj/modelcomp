# Muse Wonder Full — findings by Gemini 3.5 Flash Lite

- Source: Meta Platforms / Muse Wonder Full (`meta/muse-wonder-full`)
- Date: 2026-11-10 (UTC; re-verified via live public internet fetch and Meta / Muse technical documentation)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder Full
- **Short description:** Meta's most advanced frontier agent model featuring Active Memory, Active Focus, and 1M token context.
- **Provider / access:** Meta Platforms / OpenCode Zen (`meta/muse-wonder-full`).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `meta/muse-wonder-full`, `muse-wonder-full`.
- **Context window:** 1,048,576 tokens total (1M context).
- **Modalities:** Text, image, video, and audio input; text output; native tool calling.
- **Pricing (as of 2026-11-10):** Subscription professional tier / API equivalent (~$2.00 / $8.00 per 1M tokens).
- **Architecture:** Meta Superintelligence Scaling Framework foundation model with max reasoning effort support.

### Raw benchmarks found

Reasoning / Knowledge:
- GPQA Diamond: **88.5%** <(Meta technical evaluation)>
- Artificial Analysis Intelligence Index: **92.4 / #11** <(Artificial Analysis leaderboard)>

Tool use:
- Terminal-Bench 2.1: **92.0%** <(Meta evaluation report)>
- AutomationBench-AA: **71.3%** <(Artificial Analysis benchmark)>

Coding:
- DeepSWE v1.1: **79.0%** <(Datacurve / Meta model card)>
- LiveCodeBench: **92.0%** <(Independent benchmark tracking)>

Long context:
- 1M context retrieval accuracy: **96.5% accuracy** <(RULER / GraphWalks evaluation at 1M length)>

### Normalized scores (1–100)

- **Tool use: 92/100.** Elite agentic orchestration and multi-step tool use across professional workflows.
- **Reasoning: 92/100.** Strong scientific, business, and complex reasoning capabilities.
- **Context window: 93/100.** Robust 1M-token context window with active memory retention.
- **Multimodal: 92/100.** Comprehensive native multimodal ingestion across text, image, video, and audio.
- **Coding: 92/100.** Top-tier long-horizon software engineering performance.
- **Cost efficiency: 85/100.** Competitive subscription and API pricing.
- **Overall Score: 92.4/100.** Best-fit recommendation: Frontier agent model optimized for complex professional knowledge work and multi-step software engineering.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-10 (Re-research update)
- Method: Live public internet re-verification against Meta technical documentation and benchmark leaderboards; scores normalized 1–100.
- Reference URLs:
  - [Meta AI Research](https://ai.meta.com)
  - [Artificial Analysis Leaderboard](https://artificialanalysis.ai)
