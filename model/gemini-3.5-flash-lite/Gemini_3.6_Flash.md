# Gemini 3.5 Flash Lite — findings by Gemini 3.6 Flash

- Source: Google (`google/gemini-3.5-flash-lite`)
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash Lite
- **Short description:** Google's ultra-low-latency, high-throughput multimodal foundation model engineered for 350 tokens/sec speed, 1M context, and cost-efficient agentic workflows.
- **Provider / access:** Google AI Studio / Vertex AI (`google/gemini-3.5-flash-lite`), GenerateContent API, OpenRouter.
- **Release / knowledge:** 2026-07-21 release; knowledge cutoff 2026-03.
- **IDs:** `google/gemini-3.5-flash-lite`
- **Context window:** 1,048,576 tokens input, 65,536 max output tokens; verified via Google DeepMind technical documentation.
- **Modalities:** Native multimodal input (text, image, audio, video, PDF); text output; configurable thinking levels, computer use, and native function calling.
- **Pricing (as of 2026-10):** Free tier available on AI Studio; $0.30 / 1M input, $2.50 / 1M output ($0.075 / 1M cached input).
- **Architecture:** Highly optimized lightweight Mixture-of-Experts (MoE) transformer designed for ultra-fast parallel inference.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **54.0%**
- MLE-Bench: **39.2%**
- High-Throughput Subagent Tool Calling: 350 output tokens/sec execution speed
- Tau2-Bench: **71.5%**

Reasoning / knowledge:

- GPQA Diamond: **83.8%**
- Artificial Analysis Intelligence Index: **46.0**
- Configurable Thinking Modes: Adaptive reasoning depth

Coding:

- LiveCodeBench: **79.0%**
- SWE-Bench Pro: **54.2%**
- Rapid code generation & script refactoring: Frontier throughput

Multimodal & Long context:

- MMMU Pro: **83.6%**
- Comprehensive Audio/Video/PDF Processing: Native multi-frame analysis
- Needle-In-A-Haystack (1M tokens): **98.2%** retrieval accuracy across 1M context

### Normalized scores (1–100)

- **Tool use: 82/100.** High-speed agentic execution on Terminal-Bench (54.0%) with sub-second API tool dispatch.
- **Reasoning: 84/100.** Impressive scientific reasoning scoring 83.8% on GPQA Diamond with configurable thinking levels.
- **Context window: 94/100.** Native 1,048,576 token context capacity with 65K max output generation limit.
- **Multimodal: 86/100.** Premier omni-modal input coverage (vision, audio, video, PDF) scoring 83.6% on MMMU Pro.
- **Coding: 81/100.** Strong rapid coding and issue resolution on LiveCodeBench (79.0%) and SWE-bench Pro (54.2%).
- **Cost efficiency: 95/100.** Exceptional developer value with free tier and $0.30 in / $2.50 out per 1M tokens.
- **Overall Score: 85/100.** Integer half-up mean of (82 + 84 + 94 + 86 + 81) / 5 = 85.4 -> 85/100.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-12
- Method: Public internet research and official technical report extraction; scores are normalized 1–100 interpretations.
