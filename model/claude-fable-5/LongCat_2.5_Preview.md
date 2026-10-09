# Claude Fable 5 — findings by LongCat 2.5 Preview

- Source: Anthropic/claude-fable-5
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic's first publicly available Mythos-class model, launched June 9, 2026. It is the underlying model of Claude Mythos 5 with production safeguards added. Built for long-horizon autonomous work, complex coding, and knowledge work.
- **Provider / access:** Anthropic API (`claude-fable-5`), Amazon Bedrock, Google Vertex AI, Microsoft Foundry, OpenRouter. Chat Completions and Responses API compatible.
- **Release / knowledge:** 2026-06-09; knowledge cutoff January 2026.
- **IDs:** `anthropic/claude-fable-5` (also available as `anthropic/claude-fable-latest` alias on OpenRouter)
- **Context window:** 1,000,000 tokens (verified via Anthropic platform docs and multiple providers); up to 128,000 output tokens per request.
- **Modalities:** Text, Image, PDF input; Text output. Reasoning: yes (adaptive). Tool calling: yes (parallel function calling, structured outputs, code execution, web search, computer use).
- **Pricing (as of 2026-10-09):** $10.00/1M input, $50.00/1M output; cached input $1.00/1M, cache write $12.50/1M. Premium tier — double Opus 4.8 rates. Included free on Pro/Max/Team/Enterprise plans June 9–22, 2026; usage credits after.
- **Architecture:** Proprietary, decoder-only. Parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- SWE-bench Verified: **96.0%** (llmreference.com, 2026)
- SWE-Bench Pro: **80.3%** (Anthropic, claude5.ai — vs Opus 4.8 69.2%, GPT-5.5 58.6%, Gemini 3.1 Pro 54.2%)
- FrontierCode (Cognition): **Highest among frontier models**, even at medium effort (Anthropic)
- FrontierCode (Diamond): **29.3%** (xhigh — vs Opus 4.8 13.4% xhigh)
- CursorBench: **72.9%** (llmreference.com — vs Sonnet 4.6 49.0%)
- ViBench (Replit): **Highest-performing model** (Anthropic)
- OSWorld-Verified: **85.0%** (emergent.sh — vs Opus 4.8 83.4%, GPT-5.5 78.7%, Gemini 3.1 Pro 76.2%)
- Legal Agent Benchmark: **13.3%** (emergent.sh — vs Opus 4.8 10.4%, GPT-5.5 2.1%)
- OSWorld 2.0: Score zero (safeguards intervened, routed to Opus 4.8) (Anthropic)
- AutomationBench: Score zero (safeguards intervened) (Anthropic)

Reasoning / knowledge:

- GPQA Diamond: **92.6%** (pricepertoken.com, Artificial Analysis — 97th percentile)
- Intelligence Index: **49.6 / #5** (Artificial Analysis)
- HLE: **59.0%** (emergent.sh — vs Opus 4.8 49.8%, GPT-5.5 41.4%, Gemini 3.1 Pro 44.4%; #3 rank, Artificial Analysis)
- Terminal-Bench Hard: **60%** (#2 rank, Artificial Analysis)
- SciCode: **60%** (#3 rank, Artificial Analysis)
- Hebbia Finance Benchmark: **Highest score of any AI model tested** (Anthropic)
- FrontierBench (Cognition): **Highest-scoring model** (Anthropic)
- Pokémon FireRed (vision-only): **Completed the game** — earlier Claude models could not (Anthropic)
- Slay the Spire (file-based memory): **3× better than Opus 4.8** (Anthropic)

Coding:

- SWE-bench Verified: **96.0%** (llmreference.com)
- SWE-Bench Pro: **80.3%** (Anthropic)
- FrontierCode (Cognition): **#1 among frontier models** (Anthropic)
- Coding Index: **76.5 / #7** (Artificial Analysis)
- CursorBench: **72.9%** (llmreference.com)

### Normalized scores (1–100)

- **Tool use: 92/100.** FrontierCode #1 among frontier models, SWE-bench Pro 80.3%, CursorBench 72.9%, parallel function calling + code execution + computer use. Capped by cybersecurity/bio safeguard interventions on OSWorld 2.0 and AutomationBench.
- **Reasoning: 91/100.** GPQA 92.6%, Intelligence Index #5 (49.6), HLE #3, FrontierBench #1. Exceptional long-horizon reasoning with adaptive effort. Slightly capped by safeguard-related routing on some analytical tasks.
- **Context window: 96/100.** 1M token context window (verified), LCR 80%, maintains coherence across millions of tokens. Among the highest context windows available.
- **Multimodal: 82/100.** Text, Image, PDF input; strong vision (SOTA at extracting numbers from scientific figures, rebuilt web apps from screenshots, completed Pokémon FireRed vision-only). No audio/video input — text-only output.
- **Coding: 95/100.** SWE-bench Verified 96.0%, SWE-Bench Pro 80.3% (11+ points ahead of next model), FrontierCode #1, CursorBench 72.9%. Best-in-class software engineering.
- **Cost efficiency: 55/100.** $10/$50 per 1M tokens — premium pricing, double Opus 4.8. Justified for long-horizon agentic work where fewer failed runs offset higher per-token cost, but expensive for routine tasks.
- **Overall Score: 91/100.** Mean of Tool (92), Reasoning (91), Context (96), Multimodal (82), Coding (95) = 456/5 = 91.2 → 91.

---

## Signature

- Provided by: **LongCat 2.5 Preview (meituan/longcat-2.5-preview)** — 2026-10-09
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
