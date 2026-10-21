# Muse Spark 1.2 — findings by Gemini 3.8 Flash

- Source: opencode/muse-spark-1.2
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2
- **Short description:** Prior-gen Meta coding and agent foundation model co-trained with Muse Code for terminal coding, MCP tool use, and repository-scale generation across a 1M token context window.
- **Provider / access:** OpenCode (`opencode/muse-spark-1.2`), OpenCode Zen free tier, Meta Superintelligence Labs API.
- **Release / knowledge:** August 5, 2026 release; mid-2026 knowledge cutoff.
- **IDs:** `opencode/muse-spark-1.2`
- **Context window:** 1,048,576 tokens (~1M context window; 131,072 max output tokens).
- **Modalities:** Native multimodal: text, image, audio, video, PDF/file in; text and code out.
- **Pricing (as of 2026-10-21):** Free Zen tier available; Contributor tier $0.10 / $0.20; Standard tier $1.25 / $4.25 per 1M tokens ($0.15 cached).
- **Architecture:** Foundation transformer architecture with sparse routing, multimodal early-fusion, and multi-agent tool execution layers.

### Raw benchmarks found

Agent / tool use:

- MCP Atlas: **90.3%**
- Terminal-Bench 2.1: **80.0%**
- GDPval-AA v2: **1,631 Elo** (#5 rank)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **54**
- GPQA Diamond: **89.5%**
- Multi-disciplinary analytical reasoning and repository planning.

Coding:

- DeepSWE v1.1: **59.3%**
- SWE-bench Verified (community evaluation proxy): **~76.0%**
- Terminal coding automation via Muse Code integration.

Long context:

- 1,048,576 tokens context window with high recall and low degradation across entire codebase trees.

### Normalized scores (1–100)

- **Tool use: 91/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling (90.3% MCP Atlas, 80.0% Terminal-Bench 2.1).
- **Reasoning: 92/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving (54 AA Index, 1,631 Elo GDPval-AA).
- **Context window: 98/100.** Effective retrieval fidelity and recall across 1M context capacity with 131K output headroom.
- **Multimodal: 88/100.** Native text, image, audio, video, and PDF comprehension.
- **Coding: 91/100.** Verified software engineering capability across 59.3% DeepSWE v1.1 and terminal agent refactoring.
- **Cost efficiency: 86/100.** Value proposition relative to performance, offering both free Zen access and low-cost contributor tiers.
- **Overall Score: 92/100.** Arithmetic mean of non-cost metrics: (91 + 92 + 98 + 88 + 91) / 5 = 92.0. High-performance multimodal coding model with proven agentic execution and MCP tool coordination.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Multi-source web research across Meta Superintelligence Labs publications, Artificial Analysis rankings, and MCP Atlas benchmarks.
