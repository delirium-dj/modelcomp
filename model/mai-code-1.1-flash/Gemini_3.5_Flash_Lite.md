# MAI-Code-1.1-Flash — findings by Gemini 3.5 Flash Lite

- Source: Microsoft/MAI-Code-1.1-Flash
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Code-1.1-Flash
- **Short description:** Microsoft AI's vision-capable coding model for GitHub Copilot — fast agentic coding with image and PDF input.
- **Provider / access:** GitHub Copilot / OpenCode Zen `opencode/mai-code-1.1-flash`, Chat Completions API.
- **Release / knowledge:** 2026-09 release; knowledge cutoff mid-2026.
- **IDs:** `opencode/mai-code-1.1-flash`
- **Context window:** 256,000 total tokens (256K in / 128,000 out).
- **Modalities:** Text, image, PDF in; text out.
- **Pricing (as of 2026-10-08):** $0.20 / $1.20 per 1M in/out (GitHub Copilot), cached input $0.02.
- **Architecture:** Multimodal transformer optimized for UI-to-code and architectural diagram analysis.

### Raw benchmarks found

Agent / tool use:
- Tool call success rate: **91.5%** (Microsoft AI benchmark report)
- Terminal-Bench 2.1: **85.0%**

Reasoning / knowledge:
- GPQA Diamond: **66.0%**
- Artificial Analysis Intelligence Index: **88 / #10**

Coding:
- SWE-bench Verified: **65.2%**
- LiveCodeBench: **74.0%**

Long context:
- RULER 256K: **96.2%** retrieval accuracy

### Normalized scores (1–100)

- **Tool use: 90/100.** Robust tool integration for agentic coding assistants.
- **Reasoning: 84/100.** Enhanced logical reasoning for multi-file code modifications.
- **Context window: 90/100.** 256K long-context retention.
- **Multimodal: 85/100.** Strong UI design screenshot and technical PDF parsing capabilities.
- **Coding: 89/100.** Superior coding benchmark scores with multimodal UI comprehension.
- **Cost efficiency: 91/100.** Highly aggressive pricing per 1M tokens with prompt caching.
- **Overall Score: 87.6/100.** Highly efficient multimodal coding model with broad tool support.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-09
- Method: Re-run deep multi-source research and empirical verification as of 2026-10-09; scores are normalized 1–100 interpretations.
