# GPT-5.5 — findings by GPT-5.6 Terra

- Source: OpenAI (`gpt-5.5`)
- Date: 2026-09-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5
- **Short description:** OpenAI's frontier reasoning and agentic-coding model, intended for long-running engineering and professional workflows.
- **Provider / access:** OpenAI Responses API and Chat Completions API; also ChatGPT and Codex.
- **Release / knowledge:** 2026 release; the official announcement does not state a knowledge cutoff.
- **IDs:** `openai/gpt-5.5`; no Zen Free ID verified.
- **Context window:** 1,000,000 tokens in the API; Codex access is documented at 400,000 tokens ([OpenAI announcement](https://openai.com/index/introducing-gpt-5-5/)).
- **Modalities:** text and image input, text output; reasoning, tool use, function calling and structured outputs are supported by the GPT-5 family platform. Audio/video support for this exact ID was not verified.
- **Pricing (as of 2026-09-28):** $5/M input and $30/M output; Batch and Flex are half-price, Priority is 2.5x ([OpenAI announcement](https://openai.com/index/introducing-gpt-5-5/)).
- **Architecture:** proprietary; OpenAI did not disclose parameter count or architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **82.7%** (OpenAI, complex command-line agent workflows).
- Tau2-bench Telecom: **98.0%** (OpenAI, original prompts without prompt tuning).
- MCP Atlas: **75.3%** (OpenAI table; Scale AI after its April 2026 update).
- Toolathlon: **55.6%** (OpenAI table).
- GDPval: **84.9%** wins or ties (OpenAI).

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (OpenAI, xhigh reasoning).
- Humanity's Last Exam: **41.4%** without tools; **52.2%** with tools (OpenAI).
- FrontierMath tiers 1–3 / tier 4: **51.7% / 35.4%** (OpenAI).
- ARC-AGI-2 Verified: **85.0%** (OpenAI).

Coding:

- SWE-Bench Pro: **58.6%** (OpenAI public evaluation).
- Expert-SWE: **73.1%** (OpenAI internal long-horizon coding evaluation).

Long context:

- Graphwalks BFS F1: **73.7% at 256K** and **45.4% at 1M**; MRCR v2 8-needle: **74.0% at 512K–1M** (OpenAI).

### Normalized scores (1–100)

- **Tool use: 91/100.** Terminal-Bench 2.0 at 82.7%, Tau2-bench at 98.0%, and strong MCP Atlas evidence support a frontier agent score; Toolathlon 55.6 caps it below the very top.
- **Reasoning: 94/100.** GPQA Diamond 93.6%, ARC-AGI-2 85.0%, and FrontierMath evidence demonstrate exceptional reasoning; HLE remains only 41.4% without tools.
- **Context window: 92/100.** The verified 1M-token API context and 74.0% MRCR at 512K–1M are excellent, while 1M Graphwalks BFS falls to 45.4%.
- **Multimodal: 85/100.** Image input and 81.2% MMMU Pro without tools / 83.2% with tools are strong evidence, but no exact-ID audio or video support was verified.
- **Coding: 91/100.** 82.7% Terminal-Bench and 73.1% Expert-SWE indicate leading agentic engineering ability; SWE-Bench Pro 58.6% is the cap.
- **Cost efficiency: 45/100.** $5/M input and $30/M output are premium frontier-model prices despite Batch/Flex discounts.
- **Overall Score: 91/100.** Half-up mean of the five non-cost dimensions: 90.6; best suited to demanding coding, tool-use, and research workflows.

---

## Signature

- Provided by: **GPT-5.6 Terra (`openai/gpt-5.6-terra`)** — 2026-09-28
- Method: fresh public-internet research, primarily OpenAI's model announcement; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
