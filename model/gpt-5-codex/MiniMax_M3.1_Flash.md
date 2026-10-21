# GPT-5 Codex — findings by MiniMax M3.1 Flash

- Source: OpenAI (GPT-5 Codex), `gpt-5-codex`
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5 Codex
- **Short description:** OpenAI's September 2025 coding-specialist GPT-5 — SWE-bench Verified 74.5% with 93.7% fewer tokens than plain GPT-5, a 51.3% code-refactor score, 400K context and the Responses API. It is the model that made Codex the default coding surface; retired from Codex in April 2026 and deprecated on OpenCode Zen in July 2026.
- **Provider / access:** OpenAI **Responses API only** (`https://api.openai.com/v1/responses`, model `gpt-5-codex`; Chat Completions, Realtime, Batch, Assistants, fine-tuning and embeddings are not supported), Codex surfaces. OpenCode Zen `opencode/gpt-5-codex` (**$1.07/M in, $8.50/M out, $0.107 cached**). Not on OpenRouter.
- **Release / knowledge:** **2025-09-15** (Codex launch post) / API availability 2025-09-23 (same post); AA says "released on September 23, 2025" — conflict noted. Knowledge cutoff **2024-09-30**.
- **IDs:** `gpt-5-codex` (OpenAI, Zen).
- **Context window:** **400,000** tokens, **272,000** max input, **128,000** max output — the folder's "128K total" is the *output* cap.
- **Modalities:** text and image input, text out; reasoning tokens; tools `function_calling` and `web_search`; streaming, structured outputs, prompt caching.
- **Pricing (as of 2026-10-20):** **$1.25/M in, $0.125/M cached, $10/M out** (native, "the same price as GPT-5"); OpenCode Zen **$1.07/$8.50/$0.107**.
- **Architecture:** proprietary.

### Raw benchmarks found

> OpenAI's launch post carries the numbers as embedded chart data; Artificial Analysis adds the composite row. No Terminal-Bench, LiveCodeBench, GPQA, HLE, τ² or ARC-AGI figure was ever published for it.

Coding:

- SWE-bench Verified (all 500 tasks): **74.5%** at high reasoning (vs GPT-5 high 72.8%)
- Code-refactoring eval: **51.34%** (vs GPT-5 high 33.93%) · token efficiency: 0.41% model-generated tokens at the 10th-percentile user turn (medium) vs GPT-5's 6.55% — the source of OpenAI's "93.7% fewer tokens" claim
- LiveCodeBench: **84.02%** (AA) · AIME 2025: **98.67%** (AA) · SciCode: no verified public score found
- Aider polyglot / DeepSWE / SWE-bench Pro: no verified public score found

Agent / tool use:

- Tau2-bench: **86.84%** (AA) · APEX-Agents: **73.82%** (AA) · Terminal-Bench Hard: **37.88%** (AA)
- GDPval-AA: no verified public score found (AA field null) · OSWorld / AutomationBench / Toolathlon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **83.74%** (AA) · HLE: **27.85%** (AA) · Artificial Analysis Intelligence Index: **25 (estimated)**, #131/217 · AA-LCR: **71.67%** · CritPt: **5.14%** · IFBench: **74.15%** (AA)
- Omniscience Accuracy / Hallucination Rate: **38.7% / 75.4%** (AA) · output speed **184.2 tok/s**, TTFT 8.28s

### Normalized scores (1–100)

- **Tool use: 58/100.** τ²-bench 86.8% and APEX-Agents 73.8% are strong agentic signals, but Terminal-Bench Hard is 37.9% and there is no GDPval, OSWorld or MCP-Atlas figure.
- **Reasoning: 72/100.** GPQA 83.7%, AIME 2025 98.7%, LiveCodeBench 84.0% and AA-LCR 71.7% are solid, capped by HLE 27.9%, CritPt 5.1% and an AA Intelligence Index of 25.
- **Context window: 76/100.** 400,000 tokens with 272K input / 128K output is the 200K–500K tier at its top, with no published retrieval test.
- **Multimodal: 65/100.** Text and image input with text output — the "+image in" band.
- **Coding: 76/100.** SWE-bench Verified 74.5% plus the 51.34% refactor score and 93.7%-fewer-tokens efficiency are high-end mid-band results for a 2025 coding model, capped by the missing DeepSWE and Aider rows.
- **Cost efficiency: 75/100.** $1.25/M in and $10/M out (Zen $1.07/$8.50) is the premium Codex price band.
- **Overall Score: 69/100.** Mean of the five quality dims = (58 + 72 + 76 + 65 + 76) / 5 = 69.4 → **69**. Best fit: repo-scale coding in Codex — historical, since the id was removed from Codex in April 2026 and deprecated on Zen in July 2026 in favour of the GPT-5.1/5.3 Codex line.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-21
- Method: public internet research (OpenAI launch post and API model docs, Codex changelog, Artificial Analysis, models.dev, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.1_Codex.md`, using the same headings.
