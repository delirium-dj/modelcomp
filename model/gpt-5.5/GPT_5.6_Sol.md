# GPT-5.5 — findings by GPT 5.6 Sol

- Source: OpenAI/GPT-5.5
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5
- **Short description:** OpenAI's April 2026 flagship for coding and complex professional work, designed to plan, use tools, operate software, and complete ambiguous multi-step tasks.
- **Provider / access:** OpenAI Responses and Chat Completions APIs as `gpt-5.5`, ChatGPT, Codex, and partner platforms.
- **Release / knowledge:** Released 2026-04-23; knowledge cutoff 2025-12-01.
- **IDs:** `openai/gpt-5.5` and snapshot `gpt-5.5-2026-04-23`; no free API tier.
- **Context window:** 1,050,000 tokens and 128,000 maximum output; Codex exposes a 400K window.
- **Modalities:** Text and image input; text output; reasoning, structured output, function calling, web/file search, image generation, code interpreter, hosted shell, apply patch, skills, computer use, MCP, and tool search. Audio/video input unsupported.
- **Pricing (as of 2026-10-04):** $5/1M input, $0.50 cached input, and $30 output. Above 272K input the whole session is billed at 2x input and 1.5x output; Batch/Flex cost half and regional processing adds 10%.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **82.7%** (OpenAI); a later Terminal-Bench 2.1 reference reports **83.1%**, raised to 92.1% by the independent StateM harness.
- OSWorld-Verified: **78.7%** (OpenAI).
- Toolathlon: **55.6%** and MCP Atlas **75.3%** (OpenAI/Scale AI).
- Tau2-bench Telecom: **98.0%** without prompt tuning (OpenAI).
- GDPval wins or ties: **84.9%** (OpenAI).

Reasoning / knowledge:

- FrontierMath Tier 1–3 / Tier 4: **51.7% / 35.4%** (OpenAI).
- ARC-AGI-2: **85.0%** (OpenAI guidance summary).
- FinanceAgent v1.1: **60.0%**; OfficeQA Pro **54.1%**.
- GPQA Diamond / HLE: no verified exact result found in the consulted sources.

Coding:

- SWE-Bench Pro Public: **58.6%** (OpenAI; benchmark memorization caveat noted).
- Expert-SWE internal: **73.1%** (OpenAI).
- Terminal-Bench 2.0: **82.7%**.
- CyberGym: **81.8%**.

Long context:

- MRCR v2 at 512K–1M: **74.0%**, versus 36.6% for GPT-5.4 in the published guidance summary.

Multimodal:

- MMMU Pro: **81.2%** without tools and **83.2%** with tools (OpenAI).

Sources: [OpenAI API model reference](https://developers.openai.com/api/docs/models/gpt-5.5), [OpenAI launch and evaluations](https://openai.com/index/introducing-gpt-5-5/), and [OpenAI migration guidance](https://developers.openai.com/api/docs/guides/latest-model?model=gpt-5.5).

### Normalized scores (1–100)

- **Tool use: 95/100.** Terminal-Bench, OSWorld, Tau2, MCP Atlas, and broad built-in tool support demonstrate elite agency.
- **Reasoning: 94/100.** Strong FrontierMath, ARC-AGI-2, and professional results place it at the frontier of its release generation.
- **Context window: 95/100.** The 1.05M window and 74% MRCR at 512K–1M are excellent, though not near-perfect retrieval.
- **Multimodal: 72/100.** Image reasoning is strong, but native audio/video input is absent and output remains text.
- **Coding: 93/100.** Terminal-Bench, Expert-SWE, and CyberGym are excellent, while SWE-Bench Pro leaves room below later leaders.
- **Cost efficiency: 55/100.** Caching and batch discounts help, but $5/$30 pricing and long-context surcharges are costly.
- **Overall Score: 90/100.** Half-up mean of the five quality dimensions; best for tool-heavy coding and professional work requiring a large usable context.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-04
- Method: Fresh public internet research using official OpenAI documentation and a cited independent harness study; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
