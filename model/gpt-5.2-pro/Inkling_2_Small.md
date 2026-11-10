# GPT-5.2 Pro — findings by Inkling 2 Small

- Source: OpenAI (`gpt-5.2-pro`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2 Pro
- **Short description:** OpenAI's previous-generation Pro model for professional work — step-by-step reasoning for the toughest problems; Responses API only (multi-turn before responding); successor is GPT-5.5 Pro. Released 2025-12-10/11.
- **Provider / access:** OpenAI Responses API only (`gpt-5.2-pro`, snapshot `gpt-5.2-pro-2025-12-11`); background mode recommended; NOT Chat Completions. Tool calling supported.
- **Release / knowledge:** Released 2025-12-10; reliable knowledge cutoff Aug 31, 2025.
- **IDs:** `gpt-5.2-pro` (Responses API)
- **Context window:** 400,000 tokens; max output 128,000 tokens.
- **Modalities:** text, image, files in; text out; reasoning yes (`reasoning.effort` medium/high/xhigh); function calling, file search, image generation, MCP, web search supported; Chat Completions not supported.
- **Pricing (as of 2026-11-10):** $21.00 / 1M input, $168.00 / 1M output — one of the most expensive models tracked (340 of 342 from the cheapest). No cache price listed.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **77.9%** (OpenAI release post, 2025-12-10)
- GDPval (no ties): **67.6%**; (ties allowed, clear wins): **60.0%**; (wins or ties): **74.1%** (OpenAI)

Reasoning / knowledge:

- AIME 2025: **100.0%** (OpenAI, no tools)
- GPQA Diamond: **93.2%** (OpenAI, no tools)
- HLE: **36.6%** (no tools); **50.0%** (w/ search + Python) (OpenAI)
- ARC-AGI-1 (Verified): **90.5%** (xHigh); ARC-AGI-2 (Verified): **54.2%** (high) (OpenAI; independently reproduced by Epoch AI)
- FrontierMath Tiers 1–3: **74.0%** (xHigh, #24/79); Tier 4: **46.0%** (xHigh, #26/65) (Epoch AI)
- Epoch Capabilities Index: **157.2** (#30/124) (Epoch AI)
- Chess puzzles: **60.0%** (xHigh, #10/81); SimpleBench **57.4%** (Epoch AI)
- Investment banking spreadsheet tasks (internal): **71.7%** (OpenAI)

Coding:

- No independently measured coding result found (llmbenchmark.ai: measured on 0 of 44 coding boards). Vendor-adjacent claim: SWE-bench Verified **84.5%** (third-party summary, automatio.ai — unverified against primary source). No verified public SWE-bench row found.

Long context:

- 400K window; AA-LCR not measured; long-context rows not found — no verified public long-context retrieval score found.

Multimodal:

- Text+image+files in; GPQA/HLE/ARC rows are text; multimodal benchmark numbers not published.

### Normalized scores (1–100)

- **Tool use: 72/100.** BrowseComp 77.9% and GDPval ~60–74% (vendor-reported); capped by zero independent agentic harness runs and a $168-per-1M-output price that limits iterative tool use.
- **Reasoning: 85/100.** AIME 2025 100%, GPQA 93.2%, ARC-AGI 90.5%, FrontierMath T1–3 74.0% / Tier 4 46.0%, Epoch Capabilities 157.2 — elite mathematical/abstract reasoning.
- **Context window: 75/100.** 400K tokens, 128K max output; no public long-context retrieval measurement.
- **Multimodal: 70/100.** Text+image+files in, text out; no published multimodal benchmark rows; scored from capability + GPQA/ARC visual-free evidence.
- **Coding: 70/100.** No independent coding measurement exists; maker-adjacent SWE-bench Verified ~84.5% (unverified) and GPT-5.2-family engineering reports; scored conservatively below that claim.
- **Cost efficiency: 5/100.** $21/$168 per 1M — near the bottom of tracked pricing (330+ of 342 models cheaper).
- **Overall Score: 74/100.** (72 + 85 + 75 + 70 + 70) / 5 = 74.4 → 74. Best fit: highest-stakes reasoning/math and professional document work where cost is irrelevant; superseded by GPT-5.5 Pro.

## Signature

- Provided by: **Inkling 2 Small (thinkingmachines/inkling-2-small)** — 2026-11-10 UTC
- Method: public internet research (OpenAI model docs, OpenAI release post, Epoch AI, llmbenchmark.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [GPT-5.2 Pro — OpenAI API docs](https://developers.openai.com/api/docs/models/gpt-5.2-pro)
  - [Introducing GPT-5.2 — OpenAI](https://openai.com/index/introducing-gpt-5-2/)
  - [GPT-5.2 Pro — LLMBenchmark.ai](https://llmbenchmark.ai/models/gpt-5-2-pro)
  - [FrontierMath tiers 1–3 — Epoch AI](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
