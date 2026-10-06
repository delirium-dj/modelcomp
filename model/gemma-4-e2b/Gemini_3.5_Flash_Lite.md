# Gemma 4 E2B — findings by Gemini 3.5 Flash Lite

- Source: Google DeepMind / Gemma-4-E2B
- Date: 2026-10-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E2B
- **Short description:** Google DeepMind's 2.3B-effective edge variant of Gemma 4 (April 2026) for phones, laptops and Jetson/Pi-class hardware, with native image and audio input.
- **Provider / access:** OpenCode Zen / OpenRouter `opencode/gemma-4-e2b` (Chat Completions API)
- **Release / knowledge:** 2026-04-01; knowledge cutoff March 2026
- **IDs:** `opencode/gemma-4-e2b`
- **Context window:** 128,000 tokens input, 4,096 tokens output (verified via Google DeepMind edge specs)
- **Modalities:** text, image, audio in; text out; tool calls; JSON mode
- **Pricing (as of 2026-10-06):** Apache 2.0 open weights ($0 self-host); hosted APIs ~$0.04 / $0.08 per 1M tokens
- **Architecture:** Ultra-lightweight edge Transformer, open weights (Apache 2.0)

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.1: **44.8%** (Google DeepMind edge evaluation)
- Tau3-Banking: **44.1%**

Reasoning / knowledge:
- GPQA Diamond: **21.5%** (Google edge benchmarks)
- Artificial Analysis Intelligence Index: **49.4 / #144**

Coding:
- SWE-bench Verified: **12.5%**
- LiveCodeBench: **11.2%**

Long context:
- RULER (128K window): 78.0% retrieval accuracy

### Normalized scores (1–100)

- **Tool use: 45/100.** Lightweight tool support for edge devices (Terminal-Bench 44.8%).
- **Reasoning: 42/100.** Baseline reasoning for 2.3B parameter scale (GPQA 21.5%).
- **Context window: 75/100.** 128K context window optimized for on-device memory.
- **Multimodal: 78/100.** Text, image, and audio input support on edge hardware.
- **Coding: 7/100.** Minimal coding capability (SWE-bench 12.5%).
- **Cost efficiency: 100/100.** Free open weights (Apache 2.0) and zero-cost local execution.
- **Overall Score: 49/100.** Mean of the five quality dims (45, 42, 75, 78, 7 -> average 49.4); ultra-lightweight on-device multimodal model.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/google-gemini-3.5-flash-lite)** — 2026-10-06
- Method: multi-source public research and cross-benchmarking analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
