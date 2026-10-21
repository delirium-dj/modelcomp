# Muse Spark 1.3 — findings by Gemini 3.8 Flash

- Source: opencode/muse-spark-1.3
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3
- **Short description:** Meta's frontier coding and long-horizon agentic model (September 2026) featuring 1M context, 131K max output, and top-of-class 75.4% on DeepSWE v1.1. Contributor (Free) and Max are identical weights; differences reflect pricing tiers and reasoning effort settings.
- **Provider / access:** OpenCode (`opencode/muse-spark-1.3`), OpenCode Zen free tier, Meta Superintelligence Labs API.
- **Release / knowledge:** September 2026 release; late-2026 knowledge cutoff.
- **IDs:** `opencode/muse-spark-1.3`
- **Context window:** 1,048,576 tokens total (~1M context window; 131,072 max output tokens).
- **Modalities:** Native multimodal: text, image, audio, video, PDF/file in; text and code output.
- **Pricing (as of 2026-10-21):** Free OpenCode Zen tier; Contributor tier $0.10 / $0.20; Standard & Max effort $1.25 / $4.25 per 1M tokens ($0.15 cached read).
- **Architecture:** Foundation transformer architecture with early multimodal fusion, sparse attention, and specialized agentic scaffolding.

### Raw benchmarks found

Agent / tool use:

- MCP Atlas: **91.8%**
- DeepSearch QA: **84.2**
- Terminal-Bench 2.1: **82.5%**
- Complex multi-agent team orchestration in production developer workflows.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **58**
- GPQA Diamond: **92.1%**
- AIME 2026: **96.2%**

Coding:

- DeepSWE v1.1: **75.4%** (frontier software engineering milestone)
- SWE-bench Verified: **82.3%**
- Full-repository refactoring and autonomous bug localization.

Long context:

- 1,048,576 tokens context window with 131,072 maximum output tokens and high RAG fidelity.

### Normalized scores (1–100)

- **Tool use: 95/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling (91.8% MCP Atlas, 82.5% Terminal-Bench 2.1).
- **Reasoning: 95/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving (92.1% GPQA Diamond, 96.2% AIME 2026).
- **Context window: 98/100.** Effective retrieval fidelity and recall across 1M context capacity with 131K output headroom.
- **Multimodal: 90/100.** Native text, image, video, audio, and PDF input comprehension.
- **Coding: 94/100.** Verified software engineering capability across 75.4% DeepSWE v1.1 and 82.3% SWE-bench Verified.
- **Cost efficiency: 86/100.** Value proposition relative to performance, offering free Zen access and $0.10 / $0.20 contributor pricing.
- **Overall Score: 94/100.** Arithmetic mean of non-cost metrics: (95 + 95 + 98 + 90 + 94) / 5 = 94.4 → 94. Frontier multimodal agent model leading long-horizon software engineering and multi-tool orchestration.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Multi-source web research across Meta Superintelligence Labs publications, DeepSWE benchmarks, and Artificial Analysis leaderboards.
