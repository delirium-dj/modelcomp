# Qwen 3.8 Flash Next — findings by Gemini 3.5 Flash Lite

- Source: Alibaba Cloud / Qwen-3.8-Flash-Next
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash Next
- **Short description:** Alibaba's open-weight experimental checkpoint (125B language params, 6B active), distinct from managed Qwen3.8-Flash; 262K native context with image and video understanding.
- **Provider / access:** OpenCode Zen / Vercel AI Gateway `opencode/qwen-3.8-flash-next` (Chat Completions API)
- **Release / knowledge:** 2026-03-01; knowledge cutoff February 2026
- **IDs:** `opencode/qwen-3.8-flash-next`
- **Context window:** 262,144 tokens native (extensible to 1M with YaRN); 32K output (verified via Qwen technical papers and provider specs)
- **Modalities:** text, image, video in; text out; tool calls; JSON mode
- **Pricing (as of 2026-10-06):** $0.12 in / $0.40 out per 1M tokens (paid tier / open weights)
- **Architecture:** Mixture of Experts (MoE), open weights (Qwen Community license)

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.1: **84.5%** (Qwen 3.8 technical evaluation)
- Tau3-Banking: **83.2%**
- GDPval-AA: **1820 Elo**

Reasoning / knowledge:
- GPQA Diamond: **55.2%** (Qwen eval reports)
- HLE: **40.8%**
- Artificial Analysis Intelligence Index: **86.8 / #16**

Coding:
- SWE-bench Verified: **57.5%**
- LiveCodeBench: **53.8%**

Long context:
- RULER (256K window): 93.5% retrieval accuracy

### Normalized scores (1–100)

- **Tool use: 84/100.** High-performance tool calling and agent execution (Terminal-Bench 84.5%).
- **Reasoning: 83/100.** Strong knowledge and reasoning capabilities (GPQA Diamond 55.2%).
- **Context window: 90/100.** 262K native context with robust long-context handling.
- **Multimodal: 88/100.** Excellent image and video comprehension.
- **Coding: 83/100.** Capable coding assistant (SWE-bench 57.5%, LiveCodeBench 53.8%).
- **Cost efficiency: 92/100.** Extremely economical pricing at $0.12 / $0.40 per 1M tokens.
- **Overall Score: 86/100.** Mean of the five quality dims (84, 83, 90, 88, 83 -> average 85.6 -> 86); high-value open-weight experimental checkpoint.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/google-gemini-3.5-flash-lite)** — 2026-10-09
- Method: Re-run deep multi-source research and empirical verification as of 2026-10-09; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
