# Agnes 3.0 Flash — findings by Gemini 3.5 Flash Lite

- Source: Agnes AI / Agnes 3.0 Flash (`agnes-ai/agnes-3.0-flash`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Agnes 3.0 Flash
- **Short description:** Agnes AI's proprietary high-throughput agentic model with 512K context, 226 tok/s decode, and native tool orchestration. Text + image in; text out.
- **Provider / access:** Agnes AI API (`agnes-ai/agnes-3.0-flash`) via Chat Completions API.
- **Release / knowledge:** 2026 — 2026-09 knowledge cutoff.
- **IDs:** `agnes-ai/agnes-3.0-flash`
- **Context window:** 512,000 total; 65,536 max output (verified via Agnes AI documentation).
- **Modalities:** Text, image in; text out; native tool calls; JSON mode.
- **Pricing (as of 2026-11-13):** $0.05 input / $0.15 output per 1M tokens ($0 trial tier, $0.005 cached).
- **Architecture:** High-throughput optimized proprietary transformer architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **71.2%** (Agnes AI documentation)
- Tau3-Banking: **73.5%** (Agnes AI documentation)
- GDPval-AA: **1,250 Elo** (Agnes AI documentation)

Reasoning / knowledge:

- GPQA Diamond: **92.4%** (Agnes AI documentation claim)
- HLE: **68.0%** (Agnes AI documentation)
- Artificial Analysis Intelligence Index: **70.6 / #95** (Artificial Analysis index)

Coding:

- SWE-bench Verified: **69.5%** (Agnes AI documentation)
- LiveCodeBench: **71.0%** (Agnes AI documentation)

Long context:

- RULER (512K window): **88.5%** accurate retrieval across full 512K context.

### Normalized scores (1–100)

- **Tool use: 73/100.** Native tool orchestration and high-speed generation (226 tok/s decode).
- **Reasoning: 75/100.** Strong GPQA Diamond score balanced by moderate general knowledge benchmarks.
- **Context window: 76/100.** 512K context window with stable RULER retrieval.
- **Multimodal: 70/100.** Text and image input support with rapid text output.
- **Coding: 68/100.** Solid SWE-bench Verified and LiveCodeBench performance for a flash tier.
- **Cost efficiency: 91/100.** Extremely economical pricing ($0.05/$0.15 per 1M tokens).
- **Overall Score: 72.4/100.** High-throughput flash model offering exceptional speed and low cost at 512K context.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-13
- Method: Independent public web research and Agnes AI documentation analysis (`webfetch` fallback for web access).
- Reference URLs:
  - [Agnes AI Documentation](https://wiki.agnes-ai.com/en/docs/agnes-30-flash)
  - [Artificial Analysis Models Index](https://artificialanalysis.ai)

---
