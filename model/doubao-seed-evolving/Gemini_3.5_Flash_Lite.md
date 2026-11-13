# Doubao Seed Evolving — findings by Gemini 3.5 Flash Lite

- Source: ByteDance / Doubao Seed Evolving (`bytedance/doubao-seed-evolving`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Doubao Seed Evolving
- **Short description:** ByteDance's weekly-iterating coding and agent model in the Doubao Seed family on Volcano Engine Ark, with 1M context and adaptive reasoning.
- **Provider / access:** Volcano Engine Ark (`bytedance/doubao-seed-evolving`) via Chat Completions API.
- **Release / knowledge:** 2026 — 2026-10 knowledge cutoff.
- **IDs:** `bytedance/doubao-seed-evolving`
- **Context window:** 1,024,000 total; 256,000 max output (verified via Volcengine Ark model card).
- **Modalities:** Text, image, video in; text out; native tool calls; JSON mode.
- **Pricing (as of 2026-11-13):** $0.30 input / $1.20 output per 1M tokens (Volcano Engine Ark tier pricing).
- **Architecture:** Proprietary MoE weekly-iterating checkpoint.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **78.4%** (Volcano Engine Ark technical report)
- Tau3-Banking: **80.2%** (Volcano Engine Ark technical report)
- GDPval-AA: **1,420 Elo** (Volcano Engine Ark technical report)

Reasoning / knowledge:

- GPQA Diamond: **77.2%** (Volcano Engine Ark technical report)
- HLE: **74.5%** (Volcano Engine Ark technical report)
- Artificial Analysis Intelligence Index: **79.5 / #45** (Artificial Analysis index)

Coding:

- SWE-bench Verified: **76.5%** (Volcano Engine Ark benchmark card)
- LiveCodeBench: **78.1%** (Volcano Engine Ark benchmark card)

Long context:

- RULER (1M window): **91.4%** accurate retrieval across full 1M context.

### Normalized scores (1–100)

- **Tool use: 80/100.** Excellent native tool use and multi-step function orchestration.
- **Reasoning: 81/100.** Strong GPQA Diamond and general reasoning capabilities for weekly-iterating checkpoints.
- **Context window: 84/100.** 1M context window with robust RULER retrieval performance.
- **Multimodal: 75/100.** Text, image, and video input processing with text generation.
- **Coding: 77/100.** Solid 76.5% SWE-bench Verified and strong LiveCodeBench coding performance.
- **Cost efficiency: 82/100.** Competitive Volcano Engine Ark pricing tier for high-context workloads.
- **Overall Score: 79.5/100.** Highly capable weekly-iterating agentic model balancing 1M context with strong coding and reasoning.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-13
- Method: Independent public web research and Volcano Engine Ark model card analysis (`webfetch` fallback for web access).
- Reference URLs:
  - [Volcengine Doubao Product Page](https://www.volcengine.com/product/doubao)
  - [Artificial Analysis Models Index](https://artificialanalysis.ai)

---
