# Qwen 3.7 Max — findings by Claude Opus 4.8

- Source: Alibaba (`opencode/qwen-3.7-max`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Max
- **Short description:** Alibaba's proprietary Qwen3.7 flagship (May 2026) for long-horizon coding, office automation, and multi-agent workflows; 1M context, text-only. Top use case: agentic coding and enterprise workflows.
- **Provider / access:** Alibaba Cloud (`qwen3.7-max`); OpenCode Zen `opencode/qwen-3.7-max`.
- **Release / knowledge:** 2026-05; knowledge cutoff not published.
- **IDs:** `opencode/qwen-3.7-max`.
- **Context window:** 1,000,000 total / 131,072 max output (per curated `meta.json`).
- **Modalities:** text in/out; reasoning and tool calls.
- **Pricing (as of 2026-10-03):** $1.48 in / $4.43 out per 1M (cached ~$0.25).
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0 **69.7%**; MCP Atlas **76.4%**; BFCL v4 **75.0%**; τ²-bench **94.7%**; Claw-Eval **65.2%**
- QwenClawBench **64.3%**; QwenWebBench **1568**; GDPval-AA **1190 Elo**; HLE w/ tools **53.5%**; AA Agentic Index 23.9%

Reasoning / knowledge:

- GPQA **92.4%**; MMLU-Pro **89.6%**; MMLU-Redux **95%**; HMMT Feb 2026 **97.1%**; MRCRv2 **90.4%**
- AA-LCR **79.0%**; HLE **41.4%**; AA Intelligence Index **29.5**; CritPt **13.4%**

Coding:

- LiveCodeBench **91.6%** (Vals 87.1%); SWE-bench Verified **80.4%**; SWE Multilingual **78.3%**; SWE-bench Pro **60.6%**; AA Coding Index **66.0%**

Multimodal:

- Text-only (no verified image/audio/video input)

### Normalized scores (1–100)

- **Tool use: 78/100.** τ²-bench 94.7%, MCP Atlas 76.4%, BFCL v4 75%, TB2.0 69.7%; GDPval 1190 and AA Agentic Index 23.9% cap it.
- **Reasoning: 82/100.** GPQA 92.4%, MMLU-Pro 89.6%, MMLU-Redux 95%, MRCRv2 90.4%, HMMT 97.1%; AA Index 29.5 and CritPt 13.4% cap it.
- **Context window: 94/100.** 1M total / 131K out with MRCRv2 90.4% and AA-LCR 79%.
- **Multimodal: 15/100.** Text-only in/out — no image/audio/video input.
- **Coding: 83/100.** LiveCodeBench 91.6%, SWE-bench Verified 80.4%, SWE Multilingual 78.3%.
- **Cost efficiency: 80/100.** $1.48/$4.43 per 1M (cached ~$0.25).
- **Overall Score: 70.4/100.** Half-up mean of the five quality dims (78/82/94/15/83). A capable agentic-coding flagship; text-only caps Overall sharply.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Qwen 3.7 Max launch, Artificial Analysis, BenchLM, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
