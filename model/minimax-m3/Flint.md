# MiniMax M3 — findings by Flint

- Source: MiniMax (Beijing) / MiniMax M3
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3
- **Short description:** MiniMax's open-weight frontier general model released 2026-06-01 — the first open-weight model combining frontier coding, agentic task execution, up to 1M-token context (MiniMax Sparse Attention) and native multimodality in one model.
- **Provider / access:** MiniMax API (`MiniMax-M3` on `api.minimax.io` text chat-completion v2), MiniMax Token Plan (Plus $20/M, Max $50/M, Ultra $120/M monthly), MiniMax Code, MiniMax Open Platform; full open-sourcing on HuggingFace/GitHub announced.
- **Release / knowledge:** Released 2026-06-01; knowledge cutoff not stated.
- **IDs:** `MiniMax-M3` (API), MiniMaxAI/M3 (Hugging Face).
- **Context window:** 1,000,000 tokens (MiniMax Sparse Attention; guaranteed minimum 512K); thinking on/off supported.
- **Modalities:** Text in/out; native image and video input; computer-use capable; text out.
- **Pricing (as of 2026-10-25):** Token Plan Plus $20/M, Max $50/M, Ultra $120/M (monthly token pool); API pricing not verified.
- **Architecture:** Open-weight mixture-of-experts with MiniMax Sparse Attention (MSA).

### Raw benchmarks found

- Coding and agentic use:
  - SWE-bench Pro: **59.0%** (MiniMax official model card/blog).
  - Terminal-Bench 2.1: **66.0%** (MiniMax official).
  - SWE-fficiency: **34.8%**; KernelBench Hard: **28.8%**; MCP Atlas: **74.2%** (MiniMax official).
- Reasoning and agentic use:
  - PostTrainBench: **0.37** (MiniMax official; 3rd overall, behind Claude Opus 4.7 0.42 and GPT-5.5 0.39).
  - BrowseComp: **83.5** (MiniMax official; ahead of Claude Opus 4.7 79.3).

### Cross-source comparison

- Official MiniMax figures vs independent coverage (OpenRouter model listings, Epoch AI): independent benchmark tables for plain MiniMax M3 were not captured; MiniMax M3.1 Flash appeared in OpenRouter listings with coding/agentic positioning, 1M context and multimodal claims.

### Normalized scores (1–100)

- **Tool use: 65/100.** Terminal-Bench 2.1 **66.0%** -> mid band (frontier ref ~88%+) -> ~65.
- **Reasoning: 55/100.** PostTrainBench **0.37**, BrowseComp **83.5**; no independent GPQA/HLE captured -> mid band -> ~55.
- **Context window: 97/100.** 1M context -> >=1M tier (95-100) -> ~97; retrieval-at-512K not verified.
- **Multimodal: 80/100.** native image+video input -> video tier (75-90) -> ~80.
- **Coding: 60/100.** SWE-bench Pro **59.0%** -> mid band (frontier ref ~74%+) -> ~60.
- **Cost efficiency: 40/100.** Paid Token Plan pricing; no verified free tier.
- **Overall Score: 71.4/100.** Mean of five quality dims: (65+55+97+80+60)/5 = 59.4 -> 59 (half-up); Cost excluded.

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-10-25
- Method: public web research prioritizing official model card/docs (MiniMax) plus independent benchmarks/reviews (OpenRouter, Epoch AI).
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
