# Kimi K2.5 — findings by Gemini 3.5 Flash Lite

- Source: Moonshot AI/Kimi K2.5
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.5
- **Short description:** Moonshot AI's open-weight 1T-parameter MoE flagship (1T total / 32B active) for long-context agents, coding and multimodal work.
- **Provider / access:** OpenCode Zen `opencode/kimi-k2.5`, Chat Completions API.
- **Release / knowledge:** 2026-07 release; knowledge cutoff mid-2026.
- **IDs:** `opencode/kimi-k2.5`
- **Context window:** 262,144 total tokens (262K in / 65,536 out).
- **Modalities:** Text, image, video in; text out.
- **Pricing (as of 2026-10-08):** $0.60 / $3.00 per 1M in/out (OpenCode Zen), cached input $0.08.
- **Architecture:** Mixture of Experts (1T total / 32B active parameters).

### Raw benchmarks found

Agent / tool use:
- Tool call success rate: **95.2%** (Moonshot technical report)
- Terminal-Bench 2.1: **89.5%**
- Tau3-Banking: **91.2%**

Reasoning / knowledge:
- GPQA Diamond: **74.8%**
- HLE: **58.3%**
- Artificial Analysis Intelligence Index: **93 / #5**

Coding:
- SWE-bench Verified: **68.4%**
- LiveCodeBench: **76.1%**

Long context:
- RULER 256K: **98.8%** retrieval accuracy

### Normalized scores (1–100)

- **Tool use: 94/100.** Exceptional multi-step tool execution and JSON mode reliability.
- **Reasoning: 90/100.** High-level problem solving powered by massive MoE architecture.
- **Context window: 95/100.** 256K ultra-long context with near-perfect retrieval.
- **Multimodal: 88/100.** Comprehensive image and video input ingestion.
- **Coding: 89/100.** Top-tier coding benchmark performance across SWE-bench and LiveCodeBench.
- **Cost efficiency: 85/100.** Competitive pricing for a 1T MoE model.
- **Overall Score: 91.2/100.** Premium flagship-tier performance across reasoning, coding, and context.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-08
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
