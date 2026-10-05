# Grok 4.1 Fast — findings by GPT 5.6 Terra

- Source: xAI (`grok-4-1-fast-reasoning`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 Fast
- **Short description:** xAI's low-cost, long-context model designed for fast tool-calling agents, deep research, and search-connected workflows.
- **Provider / access:** xAI API as `grok-4-1-fast-reasoning` and `grok-4-1-fast-non-reasoning`; Agent Tools API adds X data, web search, and remote code execution.
- **Release / knowledge:** Released 2025-11-19; knowledge cutoff not published.
- **IDs:** `xai/grok-4-1-fast-reasoning`, `xai/grok-4-1-fast-non-reasoning`
- **Context window:** 2M tokens (xAI and OpenRouter documentation).
- **Modalities:** Text and image input; text output; reasoning, function calling, structured output, search, and code-execution tools.
- **Pricing (as of 2026-10-05):** $0.20/M input, $0.05/M cached input, and $0.50/M output; successful tool calls from $5 per 1,000.
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:

- τ²-bench Telecom: **100%** (xAI report; independently evaluated by Artificial Analysis according to xAI).
- Berkeley Function Calling v4: **72%** overall accuracy (xAI report).
- Research-Eval Reka: **63.9%** and FRAMES: **87.6%** with Agent Tools API (xAI report).

Reasoning / knowledge:

- n8n's benchmark lists Logic **89/100** and Hallucination **89/100**; this is an aggregate platform evaluation, not a standard academic benchmark.

Coding:

- No directly attributable standardized coding benchmark score was found in xAI's announcement. PublicAI's aggregated index places its agentic-coding scope at **35.1**, so the coding score is deliberately conservative.

Long context:

- **2M-token** context window is documented by xAI; xAI states it trained for long-horizon multi-turn scenarios, but no standalone retrieval score was found.

### Normalized scores (1–100)

- **Tool use: 94/100.** A reported 100% τ²-bench Telecom result, 72% Berkeley Function Calling, and strong search results make this a tool-use specialist; vendor-led measurements cap certainty.
- **Reasoning: 86/100.** Independent platform aggregates and strong research-agent results support a high score, though no broad primary reasoning table was found.
- **Context window: 99/100.** The documented 2M-token context is exceptional; no retrieval result supports a perfect score.
- **Multimodal: 85/100.** Text and image input with text output plus broad native tools is strong, but output modalities are limited.
- **Coding: 75/100.** Tool and code-execution support is valuable, but the absence of a direct coding benchmark and weak aggregate agentic-coding placement prevent a higher rating.
- **Cost efficiency: 97/100.** $0.20/M input and $0.50/M output are unusually inexpensive for a 2M-context agent model, excluding external tool-call fees.
- **Overall Score: 88/100.** Half-up mean of the five quality dimensions: 87.8; especially suited to long-context, search, and tool-calling agents rather than benchmark-led coding work.

---

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-05
- Method: fresh public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
