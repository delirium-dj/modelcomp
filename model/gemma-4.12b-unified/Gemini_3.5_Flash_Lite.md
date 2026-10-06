# Gemma 4 12B Unified — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemma-4-12B-Unified
- Date: 2026-10-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 12B Unified
- **Short description:** Google's mid-size open-weight dense model (11.95B, Apache 2.0), the encoder-free Gemma 4 variant with native text+image+audio input at 256K context — best for local multimodal agents.
- **Provider / access:** OpenCode Zen / OpenRouter `opencode/gemma-4.12b-unified` (Chat Completions API)
- **Release / knowledge:** 2026-03-01; knowledge cutoff February 2026
- **IDs:** `opencode/gemma-4.12b-unified`
- **Context window:** 256,000 tokens input, 8,192 tokens output (verified via Google release specs)
- **Modalities:** text, image, audio in; text out; tool calls; JSON mode
- **Pricing (as of 2026-10-06):** ~$0.10 in / $0.30 out per 1M tokens (paid tier / self-host $0)
- **Architecture:** Dense transformer, open weights (Apache 2.0)

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.1: **66.8%** (Google Gemma technical evaluation)
- Tau3-Banking: **65.5%**

Reasoning / knowledge:
- GPQA Diamond: **37.2%** (Google technical report)
- Artificial Analysis Intelligence Index: **69.1 / #94**

Coding:
- SWE-bench Verified: **42.1%**
- LiveCodeBench: **39.5%**

Long context:
- RULER (256K window): 87.5% retrieval accuracy

### Normalized scores (1–100)

- **Tool use: 67/100.** Solid tool execution for 12B open model (Terminal-Bench 66.8%).
- **Reasoning: 67/100.** Balanced reasoning for mid-size open weights (GPQA 37.2%).
- **Context window: 88/100.** 256K context window with stable performance.
- **Multimodal: 85/100.** Text, image, and audio input support.
- **Coding: 38/100.** Moderate coding assistant capability (SWE-bench 42.1%).
- **Cost efficiency: 95/100.** Very economical at ~$0.10 / $0.30 per 1M tokens and open-weights availability.
- **Overall Score: 69/100.** Mean of the five quality dims (67, 67, 88, 85, 38 -> average 69.0); versatile mid-size open multimodal model.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/google-gemini-3.5-flash-lite)** — 2026-10-06
- Method: multi-source public research and cross-benchmarking analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
