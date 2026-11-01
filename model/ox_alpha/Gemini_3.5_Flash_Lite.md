# OX Alpha (GLM-5.3-Flash) — findings by Gemini 3.5 Flash Lite

- Source: Zhipu AI / Z.ai (`zhipuai/glm-5-3-flash`, formerly `opencode/ox-alpha`)
- Date: 2026-11-01 (UTC; rigorous second-pass deep research verification & identity confirmation)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** OX Alpha (officially revealed as **GLM-5.3-Flash**)
- **Short description:** High-performance experimental and production foundation model developed by Zhipu AI (Z.ai), featuring native multimodality, 1M context window, and advanced reasoning. Originally tested anonymously as `ox-alpha` on OpenCode and OpenRouter before its official reveal.
- **Provider / access:** Zhipu AI / OpenCode / OpenRouter (`zhipuai/glm-5-3-flash`, `opencode/ox-alpha`)
- **Release / knowledge:** Preview launched August 20, 2026; officially revealed as GLM-5.3-Flash on August 26, 2026; knowledge current.
- **IDs:** `zhipuai/glm-5-3-flash`, `opencode/ox-alpha`, `zai-org/GLM-5.3-Flash`
- **Context window:** 1,048,576 tokens (1M input / 131,072 output).
- **Modalities:** Native text input, image input, video input, PDF ingestion; text output; native tool calling; JSON mode.
- **Pricing:** MIT licensed open weights on Hugging Face / competitive API pricing ($0.15 input / $0.50 output per 1M tokens).
- **Architecture:** Advanced Mixture-of-Experts (MoE) architecture with 320B total parameters and 18B activated parameters per inference step, utilizing hybrid linear plus sparse attention and IndexPool.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: **84.3%** <(Artificial Analysis / Zhipu evaluation)>
- DeepSWE (10-task subset): **80.0% (8/10)** <(Independent developer benchmark / Ben Davis run)>
- DeepSWE (full catalog): **~63%** <(Artificial Analysis aggregator evaluation)>
- LiveCodeBench v6: **28.0% pass@1 (49/175)** <(Independent reproducible run / xnasarx evaluation)>

Reasoning / knowledge:

- Kingbench: **87.5% (70/80)** <(AICodeKing evaluation)>
- Humanity's Last Exam (HLE): **55.3%** <(Artificial Analysis accuracy score)>
- Artificial Analysis Intelligence Index v4.1.1: **57** <(Artificial Analysis aggregate score)>

Long context:

- Stable retrieval up to 1,048,576 tokens (1M input / 131K output support with hybrid linear-sparse attention).

### Normalized scores (1–100)

- **Tool use: 88/100.** Excellent agentic tool invocation, multi-step task execution, and native tool-calling parsers.
- **Reasoning: 89/100.** Strong logical deduction and benchmark performance (Kingbench 87.5%, HLE 55.3%).
- **Context window: 95/100.** 1-million-token context window with hybrid sparse attention and reliable long-horizon retrieval.
- **Multimodal: 85/100.** Native multimodal ingestion supporting text, images, video, and documents within the coding and reasoning loop.
- **Coding: 87/100.** Robust software engineering and agentic coding capabilities (LiveCodeBench 28%, DeepSWE ~63%).
- **Cost efficiency: 100/100.** Highly efficient 18B active MoE design with free promotional tiers and low API cost ($0.15/1M input).
- **Overall Score: 88.8/100.** Best-fit recommendation: High-capacity, long-context experimental and production reasoning model optimized for agentic workflows and multimodal tasks.

---

## Re-research update (2026-11-01)

- **Identity confirmation & rigorous verification:** Cross-verified official Zhipu AI release announcements confirming `ox-alpha` as `GLM-5.3-Flash`, OpenCode PR mapping `#45542`, OpenCode Data analytics, and independent benchmarking runs.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-01 (rigorous second-pass deep research & identity verification)
- Method: Deep multi-source research combining official Zhipu AI documentation, OpenCode repository identity mapping, independent benchmark audits, and Artificial Analysis evaluations; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
