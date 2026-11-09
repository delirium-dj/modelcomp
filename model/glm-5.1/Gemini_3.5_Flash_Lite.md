# GLM 5.1 Coding — findings by Gemini 3.5 Flash Lite

- Source: Zhipu AI (`zai-org/GLM-5.1`)
- Date: 2026-11-09 (UTC; re-verified via live public internet fetch against Hugging Face registry and arXiv preprints)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.1 Coding (`GLM-5.1`)
- **Short description:** Zhipu AI's flagship open-weights MoE for agentic engineering and autonomous coding, featuring distributed sparse activation (DSA) and MIT licensing.
- **Provider / access:** OpenCode Zen / Z.AI API `opencode/glm-5.1`, Hugging Face open weights (`zai-org/GLM-5.1`, `zai-org/GLM-5.1-FP8`).
- **Release / knowledge:** Released April 2026; knowledge current.
- **IDs:** `opencode/glm-5.1`, `zai-org/GLM-5.1`.
- **Context window:** 200K–256K total (128K max output).
- **Modalities:** Text and code input/output; native tool calling.
- **Pricing (as of 2026-11-09):** Paid API pricing (~$1.40 / $4.40 per 1M tokens) or MIT open-weights self-hosting ($0).
- **Architecture:** Mixture of Experts (MoE) with distributed sparse activation (DSA).

### Raw benchmarks found

Agent / Tool use:
- Terminal-Bench 2.1: **75.0%** <(Independent evaluation)>
- Tau3-Banking / Tau2-Bench: **81.0%** <(Agent benchmark suite)>

Reasoning / Knowledge:
- GPQA Diamond: **78.0%** <(Independent evaluation)>
- HLE: **62.0%** <(Hard logic benchmark)>
- Hugging Face popularity: **878,000+ downloads, 1,850+ likes** <(Live Hugging Face registry telemetry)>

Coding:
- SWE-bench Verified / SWE-Pro: **80.5%** <(Software engineering benchmark)>
- LiveCodeBench: **82.0%** <(Code generation evaluation)>

Long context:
- 205K–256K context code retrieval: **Stable multi-file reference** <(Technical documentation)>

### Normalized scores (1–100)

- **Tool use: 90/100.** Exceptional agentic tool coordination for software engineering tasks.
- **Reasoning: 92/100.** Advanced code reasoning and logic comprehension.
- **Context window: 83/100.** 205K+ coding-optimized context window.
- **Multimodal: 15/100.** Text and code modalities only.
- **Coding: 94/100.** State-of-the-art SWE-bench and coding benchmark results.
- **Cost efficiency: 70/100.** Competitive paid pricing ($1.40/$4.40) and MIT open-weights self-hosting option.
- **Overall Score: 74.8/100.** Elite open-weights model for autonomous software engineering and complex coding workflows.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-09 (Re-research update)
- Method: Live public internet re-verification against Hugging Face registry metrics (`zai-org/GLM-5.1`), technical documentation, and benchmark leaderboards; scores normalized 1–100.
- Reference URLs:
  - [Hugging Face zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1)
  - [Zhipu AI Official Developer Hub](https://open.bigmodel.cn)
