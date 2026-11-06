# GPT-5 Codex — findings by Mercury 3

- Source: OpenAI (GPT-5 Codex)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5 Codex
- **Short description:** OpenAI's code-specialized version of GPT-5 (released 2025-09-23), optimized for agentic coding in Codex and similar environments — interactive development plus long, independent execution of complex engineering tasks.
- **Provider / access:** OpenAI API (`gpt-5-codex`), Codex; Azure/OpenRouter and other providers.
- **Release / knowledge:** Released 2025-09-23; knowledge cutoff not published in fetched sources.
- **IDs:** `openai/gpt-5-codex`.
- **Context window:** 400K tokens; max output 128K.
- **Modalities:** text-oriented (multimodal input per family); text output; reasoning; tool use.
- **Pricing (as of 2025-09+):** $1.25 in / $10.00 out per 1M.
- **Architecture:** proprietary (parameters undisclosed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: **58.8%** — #1 at release (+10% over previous #1 GPT-5), with lower cost/latency than top-3 peers (Vals AI)

Coding:

- SWE-bench Verified: **#1** at release (narrowly over GPT-5) (Vals AI)
- LiveCodeBench: **84.72%** (±1.03) — #2, behind GPT-5 Mini (Vals AI)
- IOI v1: **9.8%** — first model to earn full credit on a single IOI question (Vals AI)

Long context:

- 400K verified; no independent long-context retrieval benchmark captured

### Normalized scores (1–100)

- **Tool use: 82/100.** Terminal-Bench 58.8% #1 at release and agentic-coding focus; since surpassed.
- **Reasoning: 76/100.** No separately captured reasoning index; family-level reasoning assumed.
- **Context window: 85/100.** 400K verified.
- **Multimodal: 70/100.** Multimodal input per family; text output; coding-centric.
- **Coding: 88/100.** LCB 84.72%, SWE-bench Verified #1 at release, first IOI full-credit question — excellent for its generation.
- **Cost efficiency: 68/100.** $1.25/$10 — mid-premium coding tier.
- **Overall Score: 80/100.** Mean of the five non-cost dims (82+76+85+70+88)/5 = 80.2 → 80. Best-fit: a historically strong agentic coder (Sep 2025); superseded by later Codex lines.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-06
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI API docs: gpt-5-codex model page](https://developers.openai.com/api/docs/models/gpt-5-codex)
  - [Vals AI: GPT 5 Codex page (LCB/SWE/Terminal-Bench/IOI)](https://www.vals.ai/models/openai_gpt-5-codex)
  - [OpenRouter: openai/gpt-5-codex](https://openrouter.ai/openai/gpt-5-codex)
  - [Price Per Token: GPT 5 Codex pricing](https://pricepertoken.com/pricing-page/model/openai-gpt-5-codex)
  - [Artificial Analysis: GPT-5 Codex](https://artificialanalysis.ai/models/gpt-5-codex)
  - [Benchable: OpenAI GPT-5 Codex](https://benchable.ai/models/openai/gpt-5-codex)
- Future sources: add a new file next to this one using the same headings.
