# GPT-5.1 Codex Mini — findings by MiniMax M3.1 Flash

- Source: OpenAI (GPT-5.1-Codex-Mini), `gpt-5.1-codex-mini`
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1 Codex Mini
- **Short description:** OpenAI's November 2025 cheapest Codex tier — 400K context, **$0.25/$2.00** per 1M, SWE-Bench Pro 49.0% and Terminal-Bench 2.0 46.1%, five times cheaper than gpt-5-codex. It remains in the OpenAI API but was removed from Codex for ChatGPT sign-in in April 2026 and deprecated on OpenCode Zen in July 2026.
- **Provider / access:** OpenAI **Responses API only** (`https://api.openai.com/v1/responses`, model `gpt-5.1-codex-mini`; Chat Completions not supported), OpenRouter `openai/gpt-5.1-codex-mini`, OpenCode Zen `opencode/gpt-5.1-codex-mini` (**$0.25/$2.00, $0.025 cached**).
- **Release / knowledge:** **2025-11-13** (shipped with GPT-5.1; Codex changelog, OpenAI changelog, AA and models.dev agree). Knowledge cutoff **2024-09-30**.
- **IDs:** `gpt-5.1-codex-mini` (OpenAI / Zen), `openai/gpt-5.1-codex-mini` (OpenRouter).
- **Context window:** **400,000** tokens, **128,000** max output.
- **Modalities:** text and image input, text out; reasoning tokens; tools `function_calling` and `web_search`; streaming, structured outputs, prompt caching.
- **Pricing (as of 2026-10-20):** **$0.25/M input, $0.025/M cached, $2.00/M output** (native and Zen identically; OpenRouter cache read $0.03).
- **Architecture:** proprietary.

### Raw benchmarks found

> OpenAI publishes the Codex-family numbers as embedded chart data; Artificial Analysis
> adds the composite row. No SWE-bench Verified figure was ever published for this id.

Coding:

- SWE-Bench Pro (passrate @ duration): **46.17%** @4.61 min (low) · **48.50%** @6.03 min (medium) · **49.04%** @7.09 min (high) — from the GPT-5.3-Codex-Spark launch chart
- Terminal-Bench 2.0: **46.1%** (same chart)
- LiveCodeBench: **83.60%** (AA) · Vibe Code Bench v1.1: **22.17%** (Vals AI, via BenchLM) · Aider polyglot / DeepSWE / SciCode: no verified public score found
- SWE-bench Verified: **no verified public score found** (OpenAI's Nov-13 post publishes GPT-5.1 non-Codex numbers: SWE-bench Verified 76.3%, GPQA 88.1%, AIME 2025 94.0%)

Agent / tool use:

- Tau2-bench: **62.87%** (AA) · Terminal-Bench Hard: **33.33%** (AA) · GDPval-AA / OSWorld / AutomationBench / MCP-Atlas / Toolathlon: no verified public score found (AA's GDPval field is null)

Reasoning / knowledge:

- GPQA Diamond: **81.31%** (AA) · HLE: **18.49%** (AA) · AIME 2025: **91.67%** (AA) · Artificial Analysis Intelligence Index: **20 (estimated)** · AA-LCR: **66.67%** · CritPt: **0%** · IFBench: **67.89%** (AA) · MMMU-Pro: **69.02%** (AA)
- Omniscience Accuracy / Hallucination Rate: **23.2% / 51.6%** (AA) · output speed **170.5 tok/s**, TTFT 14.71s

Long context:

- No MRCR / RULER measurement published; the 400K window comes from the model docs.

### Normalized scores (1–100)

- **Tool use: 45/100.** τ²-bench 62.9% is the only agentic row beyond Terminal-Bench Hard 33.3%, and there is no GDPval, OSWorld or MCP-Atlas figure.
- **Reasoning: 66/100.** GPQA 81.3%, AIME 2025 91.7%, LiveCodeBench 83.6% and MMMU-Pro 69.0% are solid mid-band, capped by HLE 18.5%, CritPt 0% and an AA Intelligence Index of 20.
- **Context window: 76/100.** 400,000 tokens with 128,000 max output is the 200K–500K tier at its top, with no published retrieval test.
- **Multimodal: 65/100.** Text and image input with text output — the "+image in" band.
- **Coding: 70/100.** SWE-Bench Pro 49.0% at high effort, Terminal-Bench 2.0 46.1% and LiveCodeBench 83.6% are mid-band, capped by Vibe Code Bench 22.2% and the missing SWE-bench Verified figure.
- **Cost efficiency: 97/100.** $0.25/M in and $2.00/M out with a $0.025/M cache read is the cheapest Codex tier, and Zen matches native.
- **Overall Score: 64/100.** Mean of the five quality dims = (45 + 66 + 76 + 65 + 70) / 5 = 64.4 → **64**. Best fit: high-volume Codex subagent work at a fifth of the price — retired from Codex surfaces in April 2026, so treat the API route as the only live option.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-21
- Method: public internet research (OpenAI API model docs and changelog, Codex changelog and model list, the GPT-5.3-Codex-Spark launch chart, Artificial Analysis, BenchLM + Vals AI, models.dev, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.3_Codex.md`, using the same headings.
