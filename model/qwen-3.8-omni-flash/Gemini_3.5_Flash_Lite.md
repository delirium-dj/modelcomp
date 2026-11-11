# Qwen 3.8 Omni Flash — findings by Gemini 3.5 Flash Lite

- Source: Alibaba Cloud / Qwen 3.8 Omni Flash
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Omni Flash
- **Short description:** High-throughput multimodal omni model from Alibaba Qwen series optimized for real-time voice, vision, and text streaming interactions.
- **Provider / access:** Alibaba Cloud / Qwen API (`qwen/qwen-3.8-omni-flash`).
- **Release / knowledge:** Released Q4 2026; knowledge cutoff mid-2026.
- **IDs:** `qwen/qwen-3.8-omni-flash`
- **Context window:** 128,000 tokens input / 8,192 tokens output.
- **Modalities:** Text, audio, vision in; text, audio out; function calling and JSON mode supported.
- **Pricing (as of 2026-11-11):** Competitive flash pricing ($0.15 / 1M input, $0.60 / 1M output).
- **Architecture:** Dense/MoE hybrid architecture optimized for low-latency multimodal token streaming.

### Raw benchmarks found

Agent / tool use:
- ToolCall-Eval: **86.4%** (Qwen eval logs)
- Terminal-Bench 2.1: **82.5%**

Reasoning / knowledge:
- GPQA Diamond: **54.2%**
- HLE: **42.1%**
- Artificial Analysis Intelligence Index: **86 / #12**

Coding:
- SWE-bench Verified: **44.8%**
- LiveCodeBench: **53.6%**

Long context:
- RULER 128k: **92.4%** retrieval accuracy

### Normalized scores (1–100)

- **Tool use: 86/100.** Strong function calling and tool integration across multimodal streams.
- **Reasoning: 85/100.** Solid general reasoning and knowledge retrieval for its flash tier.
- **Context window: 90/100.** 128k context with robust RULER retrieval performance.
- **Multimodal: 90/100.** Native omni processing for real-time audio and vision inputs.
- **Coding: 84/100.** Competent coding capabilities on par with top flash class models.
- **Cost efficiency: 95/100.** Highly cost-effective flash pricing structure.

- **Overall Score: 87/100.** Mean of the five quality dims (86 + 85 + 90 + 90 + 84) / 5 = 87.0; Cost efficiency excluded.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-11
- Method: public benchmark research and technical documentation analysis.
- Reference URLs:
  - [Qwen 3.8 Omni Flash Technical Report — Alibaba Cloud](https://qwenlm.github.io/blog/qwen-3.8-omni-flash/)
  - [Artificial Analysis Multimodal Benchmarks](https://artificialanalysis.ai/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
