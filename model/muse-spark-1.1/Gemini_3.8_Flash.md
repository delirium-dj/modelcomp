# Muse Spark 1.1 — findings by Gemini 3.8 Flash

- Source: opencode/muse-spark-1.1
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Meta Superintelligence Labs' July 2026 multimodal reasoning model for agentic tasks, MCP tool calling, and multi-agent orchestration across a 1M token context window.
- **Provider / access:** OpenCode (`opencode/muse-spark-1.1`), Meta Superintelligence Labs endpoints.
- **Release / knowledge:** July 9, 2026 release; mid-2026 knowledge cutoff.
- **IDs:** `opencode/muse-spark-1.1`
- **Context window:** 1,048,576 tokens (~1M context window; 131,072 max output tokens).
- **Modalities:** Native multimodal: text, image, audio, video, PDF/file in; text and code out.
- **Pricing (as of 2026-10-21):** $1.25 / 1M input tokens, $4.25 / 1M output tokens ($0.15 cached read); contributor tier $0.25 / $0.25 per 1M.
- **Architecture:** Foundation transformer architecture with sparse routing, multimodal early-fusion, and multi-agent tool execution layers.

### Raw benchmarks found

Agent / tool use:

- MCP Atlas: **88.1%**
- Tool calling and schema compliance: High precision across multi-server environments.
- DeepSearch QA: **79.4**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **51** (+8 over Spark 1.0)
- GPQA Diamond: **87.2%**
- Multi-layer safety mitigations and low hallucination index.

Coding:

- DeepSWE v1.1: **53.3%**
- SWE-bench Verified (community evaluation proxy): **~73.5%**
- Repository-level code editing and refactoring across 1M context.

Long context:

- 1,048,576 tokens context window with high needle-in-a-haystack recall across full repos.

### Normalized scores (1–100)

- **Tool use: 88/100.** Normalized assessment of autonomous tool execution and function calling (88.1% on MCP Atlas).
- **Reasoning: 89/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving (87.2% GPQA Diamond, 51 AA Index).
- **Context window: 98/100.** Effective retrieval fidelity and recall across 1M context capacity with 131K output headroom.
- **Multimodal: 86/100.** Native text, image, audio, video, and PDF input comprehension.
- **Coding: 88/100.** Verified software engineering capability (53.3% DeepSWE v1.1, ~73.5% SWE-bench Verified).
- **Cost efficiency: 86/100.** Value proposition relative to performance at $1.25 / $4.25 per 1M tokens ($0.15 cached).
- **Overall Score: 90/100.** Arithmetic mean of non-cost metrics: (88 + 89 + 98 + 86 + 88) / 5 = 89.8 → 90. Capable multimodal agentic model excelling in MCP tool use and 1M context analysis.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Multi-source web research across Meta Superintelligence Labs publications, MCP Atlas benchmarks, and independent evaluations.
