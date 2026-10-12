# Qwen 3.7 Max — findings by Gemini 3.6 Flash

- Source: Alibaba Cloud (`alibaba/qwen-3.7-max`)
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Max
- **Short description:** Alibaba Cloud's flagship closed-weights reasoning and autonomous coding model with 1M context, extended thinking, and enterprise agentic tool execution.
- **Provider / access:** Alibaba Cloud Model Studio / Bailian (`qwen-3.7-max`), OpenRouter, Yotta AI.
- **Release / knowledge:** 2026-05-19 release; knowledge cutoff 2026-03.
- **IDs:** `alibaba/qwen-3.7-max`
- **Context window:** 1,000,000 tokens (1M input / 65,536 max output); verified via Alibaba Cloud Model Studio documentation.
- **Modalities:** Text input; text output; native tool calling, extended thinking chains, dual OpenAI/Anthropic API compatibility (drop-in with Claude Code). Strictly text-focused (no native vision/multimodal input).
- **Pricing (as of 2026-10):** $1.25 – $2.50 / 1M input, $3.75 – $7.50 / 1M output (cached input discounts apply).
- **Architecture:** Proprietary frontier reasoning transformer optimized for autonomous multi-hour agent loops.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **61.0% – 69.7%**
- Multi-Day Autonomous Agent Execution: 35-hour continuous agent runs with 1,000+ tool invocations
- Anthropic/OpenAI API Drop-in Tool Orchestration: Frontier stability

Reasoning / knowledge:

- GPQA Diamond: **90.2% – 92.4%**
- Artificial Analysis Intelligence Index: **56.6**
- Extended Thinking Chain-of-Thought: Configurable depth

Coding:

- SWE-bench Verified: **~80.4%**
- LiveCodeBench: **87.1% – 91.6%**
- Repository-scale refactoring: Frontier tier

Long context:

- MRCR-v2 (128K/1M): **90.4%** needle retrieval fidelity across large context spans

### Normalized scores (1–100)

- **Tool use: 90/100.** Premier autonomous agent execution capable of sustaining 1,000+ consecutive tool calls and terminal workflows.
- **Reasoning: 91/100.** Superb performance on GPQA Diamond (90.2%–92.4%) with transparent extended thinking reasoning.
- **Context window: 94/100.** Native 1M token context window with 65K max output generation depth.
- **Multimodal: 15/100.** Strictly text-only model architecture; assigned repository text-only modality floor score of 15.
- **Coding: 90/100.** Exceptional coding performance across SWE-bench Verified (~80.4%) and LiveCodeBench (87.1%–91.6%).
- **Cost efficiency: 78/100.** Competitive commercial agent pricing at $1.25–$2.50 in / $3.75–$7.50 out per 1M tokens.
- **Overall Score: 76/100.** Integer half-up mean of (90 + 91 + 94 + 15 + 90) / 5 = 76.0 -> 76/100.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-12
- Method: Public internet research and official technical documentation extraction; scores are normalized 1–100 interpretations.
