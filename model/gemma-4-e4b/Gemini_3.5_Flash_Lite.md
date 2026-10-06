# Gemma 4 E4B — findings by Gemini 3.5 Flash Lite

- Source: Google DeepMind / Gemma-4-E4B
- Date: 2026-10-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E4B
- **Short description:** Google DeepMind's April 2026 edge-optimized 4.5B-effective multimodal model (8B with embeddings) built for mobile and edge latency.
- **Provider / access:** OpenCode Zen / OpenRouter `opencode/gemma-4-e4b` (Chat Completions API)
- **Release / knowledge:** 2026-04-01; knowledge cutoff March 2026
- **IDs:** `opencode/gemma-4-e4b`
- **Context window:** 128,000 tokens input, 4,096 tokens output (verified via Google DeepMind edge specs)
- **Modalities:** text, image, audio in; text out; tool calls; JSON mode
- **Pricing (as of 2026-10-06):** Apache 2.0 open weights ($0 self-host); hosted APIs ~$0.02 / $0.10 per 1M tokens
- **Architecture:** Edge-optimized Transformer, open weights (Apache 2.0)

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.1: **52.2%** (Google DeepMind edge evaluation)
- Tau3-Banking: **51.5%**

Reasoning / knowledge:
- GPQA Diamond: **28.5%** (Google edge benchmarks)
- Artificial Analysis Intelligence Index: **57.1 / #136**

Coding:
- SWE-bench Verified: **22.1%**
- LiveCodeBench: **20.5%**

Long context:
- RULER (128K window): 82.0% retrieval accuracy

### Normalized scores (1–100)

- **Tool use: 55/100.** Edge-optimized function calling and tool execution (Terminal-Bench 52.2%).
- **Reasoning: 52/100.** Lightweight edge reasoning capability (GPQA Diamond 28.5%).
- **Context window: 78/100.** 128K context window tailored for edge devices.
- **Multimodal: 80/100.** Text, image, and audio input support on edge hardware.
- **Coding: 20/100.** Basic scripting and code completion (SWE-bench 22.1%).
- **Cost efficiency: 98/100.** Free open weights (Apache 2.0) and near-zero hosted API pricing.
- **Overall Score: 57/100.** Mean of the five quality dims (55, 52, 78, 80, 20 -> average 57.0); ultra-efficient edge multimodal model.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/google-gemini-3.5-flash-lite)** — 2026-10-06
- Method: multi-source public research and cross-benchmarking analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
