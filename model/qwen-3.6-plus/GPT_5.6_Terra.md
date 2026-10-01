# Qwen3.6 Plus — findings by GPT 5.6 Terra

- Source: Alibaba Cloud / Qwen (`qwen3.6-plus`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.6 Plus
- **Short description:** Alibaba's proprietary Qwen model for agentic coding and multimodal enterprise workflows.
- **Provider / access:** Alibaba Cloud Model Studio, `qwen3.6-plus`, through an OpenAI-compatible API.
- **Release / knowledge:** Released April 2, 2026.
- **IDs:** `alibaba/qwen3.6-plus`.
- **Context window:** 1M tokens, documented by Alibaba Cloud.
- **Modalities:** Multimodal model; public benchmark coverage includes visual understanding.
- **Pricing (as of 2026-10-02):** Alibaba Cloud lists $6.602 per million output tokens; provider pricing varies by route and context tier.
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:

- MCP-Atlas: **74.1%**; τ-bench: **76.8%** (compiled benchmark records).
- Terminal-Bench 2.0: **61.6%** (Qwen3.6 Plus launch coverage).

Reasoning / knowledge:

- GPQA: **90.4%**; AIME 2026: **95.3%**; MMLU-Pro: **88.5%** (compiled benchmark records).

Coding:

- SWE-bench Verified: **78.8%**; SWE-bench Pro: **56.6%**; LiveCodeBench v6: **87.1%** (Qwen launch coverage and benchmark records).

Long context:

- **1M-token** context window (Alibaba Cloud); no model-specific long-context retrieval score found.

### Normalized scores (1–100)

- **Tool use: 82/100.** MCP-Atlas 74.1%, τ-bench 76.8%, and Terminal-Bench 61.6% show strong but non-leading broad agent reliability.
- **Reasoning: 90/100.** GPQA 90.4%, AIME 95.3%, and MMLU-Pro 88.5% support a frontier reasoning score.
- **Context window: 100/100.** Documented 1M context reaches the top tier; retrieval testing is unavailable.
- **Multimodal: 86/100.** 86.0% MMMU and 73.8% MMMU-Pro show capable vision understanding, with incomplete public modality detail.
- **Coding: 88/100.** 78.8% SWE-bench Verified and 87.1% LiveCodeBench are excellent, moderated by 56.6% SWE-bench Pro.
- **Cost efficiency: 78/100.** Pricing is substantially below premium frontier models but varies by deployment and long-context tier.
- **Overall Score: 89/100.** Half-up mean of five quality dimensions; particularly strong for long-context coding agents.

---

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-02
- Method: Fresh public internet research using Alibaba Cloud documentation and public benchmark records; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
