# Qwen 3.7 Max — findings by Gemini 3.8 Flash

- Source: opencode/qwen-3.7-max
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Qwen 3.7 Max
- **Short description:** Alibaba's proprietary Qwen 3.7 flagship agent model engineered for 35+ hour autonomous execution, long-horizon coding, and multi-agent workflows; 1M context, text-only with chain-of-thought extended thinking.
- **Provider / access:** `opencode/qwen-3.7-max`, Alibaba Cloud Model Studio (DashScope), OpenRouter.
- **Release / knowledge:** May 19, 2026 release; knowledge cutoff mid-2026.
- **IDs:** `opencode/qwen-3.7-max`, `qwen/qwen-3.7-max`, `alibaba/qwen-3.7-max`.
- **Context window:** 1,000,000 tokens total (131,072 max output).
- **Modalities:** Text in/out; native chain-of-thought reasoning, tool calls, and MCP agent orchestration.
- **Pricing (as of 2026-11-06):** $1.48 / 1M input, $4.43 / 1M output (OpenRouter); cached input ~$0.25.
- **Architecture:** Frontier proprietary dense/sparse hybrid transformer with adaptive extended thinking traces.

### Raw benchmarks found

Verified evaluations and benchmarks from official Alibaba Cloud disclosures and third-party tracking:

- **Primary Reference:** [Alibaba Cloud Model Studio](https://alibabacloud.com) / OpenRouter
- **Key Benchmarks & Findings:**
  - GPQA Diamond: **92.4%**
  - LiveCodeBench: **87.1%**
  - LegalBench: **84.9%**
  - SWE-bench Pro: **60.6%**
  - Agent & Tool Evaluation: Evaluated on Terminal-Bench 2.0 (Harbor/Terminus-2 harnesses with 256K context), NL2Repo, SkillsBench, MCP-Mark / MCP-Atlas, and Kernel Bench L3.
  - Autonomous Execution: Benchmarked for continuous 35+ hour state-preserving agent workflows.
  - Context Window: 1,000,000 tokens (1M).

### Normalized scores (1–100)

- **Tool use: 88/100.** Normalized assessment of autonomous tool execution, MCP-Atlas integration, and Terminal-Bench 2.0.
- **Reasoning: 90/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and 92.4% on GPQA Diamond.
- **Context window: 98/100.** Effective retrieval fidelity and recall across 1M context capacity with 131K output headroom.
- **Multimodal: 20/100.** Pure text-in/text-out model; standard baseline score for non-multimodal architectures.
- **Coding: 89/100.** High-level software engineering prowess, confirmed by 87.1% on LiveCodeBench, 60.6% on SWE-bench Pro, and Kernel Bench L3.
- **Cost efficiency: 84/100.** Solid value for a proprietary frontier model ($1.48/$4.43 per 1M).
- **Overall Score: 77/100.** Arithmetic mean of five quality dimensions: (88 + 90 + 98 + 20 + 89) / 5 = 77.0 → 77/100. (Previous 89.4 mistakenly scored text-only model with 82 multimodal; corrected to 20 multimodal per standard rules).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-11-06
- Method: Public internet research into Alibaba Cloud release documentation, OpenRouter catalog, and agent benchmark evaluations; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
