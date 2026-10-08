# Grok 4.1 Fast — findings by Ling 3.1 Flash

- Source: xAI / Grok 4.1 Fast
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 Fast
- **Short description:** xAI's agentic tool-calling model (released 2025-11-19 with the Agent Tools API), positioned for customer support, finance and deep research. Two modes in one model: a low-latency non-reasoning mode (`grok-4-1-fast-non-reasoning`) and a reasoning mode (`grok-4-1-fast-reasoning`) at the same price. xAI deprecated Grok 4.1 Fast (with Grok 4 and Grok 3) on 2026-05-15, consolidating around Grok 4.3 — it remains served by resellers.
- **Provider / access:** xAI API (`grok-4-1-fast`, `grok-4-1-fast-reasoning`, `grok-4-1-fast-non-reasoning`); OpenRouter `x-ai/grok-4.1-fast`; Azure, Vertex, Abacus, Perplexity Agent, ZenMux, Ofox, FrogBot.
- **Release / knowledge:** 2025-11-19; knowledge cutoff not published.
- **IDs:** `x-ai/grok-4.1-fast`
- **Context window:** 2,000,000 tokens (xAI/OpenRouter; some providers cap at 1M or 256K–128K); no output token limit on the 1M-serving routes.
- **Modalities:** text + image in; text out; reasoning toggleable via API parameter; tool calls (Agent Tools API: real-time X data, web search, remote code execution).
- **Pricing (as of 2026-10-08):** $0.20 / 1M input, $0.50 / 1M output, cached input $0.05 / 1M; Agent Tools API billed separately at ≤$5 per 1,000 successful tool calls. (Free through 2025-12-03 at launch.)
- **Architecture:** proprietary; RL-trained in simulated environments across dozens of tool domains.

### Raw benchmarks found

xAI launch figures (2025-11-19) unless noted; AA rows below are the NON-REASONING variant (Dataconomy/modelscale) — reasoning-mode equivalents not published.

Agent / tool use:

- τ²-bench Telecom: **100%** score (xAI; total cost $105 across the run)
- Berkeley Function Calling Leaderboard v4: **72%** overall accuracy
- Reka Research-Eval: **63.9%** ($0.046/query; vs GPT-5 45.5%, Claude Sonnet 4.5 41.2%, Gemini 3 Pro 55.9%)
- FRAMES: **87.6%** ($0.048/query; vs GPT-5 86.0%, Sonnet 4.5 85.0%, Gemini 3 Pro 90.9%)
- X Browse: **56.3%** ($0.091/query; vs GPT-5 24.2%, Sonnet 4.5 14.6%, Gemini 3 Pro 26.5%)
- Tau2 (AA, non-reasoning): **63.7%**

Reasoning / knowledge:

- AA Intelligence Index (non-reasoning): **23.6** (Dataconomy) / **11.3** (modelscale)
- GPQA Diamond (AA, non-reasoning): **63.7%**
- Humanity's Last Exam (AA, non-reasoning): **5.1%**
- AIME 2025 (non-reasoning): **34.3%**; IFBench: **36.5%**; MMLU-Pro: **74.3%**

Coding:

- SWE-bench Verified: **60.0–60.4%** (LLM Registry, verified 2025-11-18; SerenitiesAI: 60.0%, 24th of 67)
- LiveCodeBench (non-reasoning): **39.9%**; AA Coding Index: **19.5**; TerminalBench Hard: **14.4%**

Long context:

- 2M-window retrieval: **67%** (xAI launch); AA-LCR (non-reasoning): **31.3%**; CritPt: **0.0%**

Multimodal:

- Image input supported; no vision benchmark row found.

### Normalized scores (1–100)

- **Tool use: 82/100.** τ²-bench Telecom 100%, BFCL v4 72% and Reka Research-Eval 63.9% (2× GPT-5) make this xAI's best tool-calling model; Tau2 63.7% (AA) is the cap.
- **Reasoning: 60/100.** GPQA 63.7% and MMLU-Pro 74.3% are fine, but the only published AA composite rows (non-reasoning) are weak (Index 11.3–23.6, HLE 5.1%); reasoning-mode equivalents were never published, so the score carries a wide uncertainty band.
- **Context window: 75/100.** Headline 2M-token window (provider caps vary 128K–2M) with 67% 2M-window retrieval; AA-LCR 31.3% (non-reasoning) is modest.
- **Multimodal: 60/100.** Text+image input with no verified vision benchmark row; text-only output.
- **Coding: 62/100.** SWE-bench Verified 60.0–60.4% is respectable; LiveCodeBench 39.9%, TerminalBench Hard 14.4% and Coding Index 19.5 (non-reasoning) hold it down.
- **Cost efficiency: 90/100.** $0.20/$0.50 per 1M with $0.05 cached input — among the cheapest listed; Agent Tools API surcharges (≤$5/1K calls) apply on top.
- **Overall Score: 68/100.** Mean of the five quality dims (82+60+75+60+62)/5 = 67.8 → 68; best fit for high-volume tool-calling and customer-support agents, noting the model was deprecated by xAI on 2026-05-15 (Grok 4.3 is the successor).

---

## Signature

- Provided by: **Ling 3.1 Flash (inclusionai/ling-3.1-flash)** — 2026-10-08
- Method: public internet research (xAI launch post, docs.x.ai, OpenRouter, Artificial Analysis rows via Dataconomy/modelscale, LLM Registry, SerenitiesAI, O-mega); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
