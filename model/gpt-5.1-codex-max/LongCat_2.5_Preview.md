# GPT-5.1-Codex-Max — findings by LongCat 2.5 Preview

- Source: OpenAI/gpt-5.1-codex-max
- Date: 2026-10-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1-Codex-Max
- **Short description:** The maximum-compute variant of OpenAI's GPT-5.1 Codex family (November 2025), purpose-built for long-running agentic coding with compaction for multi-context-window work. Responses API only. Deprecated July 2026.
- **Provider / access:** OpenAI API `gpt-5.1-codex-max` (Responses API only), Azure AI Foundry `azure/gpt-5.1-codex-max`, OpenRouter `openai/gpt-5.1-codex-max`, Poe, Vercel AI Gateway. Available in Codex CLI, IDE extension, cloud, and code review. No Zen Free ID.
- **Release / knowledge:** Released 2025-11-19; knowledge cutoff September 30, 2024. Deprecated 2026-07-23.
- **IDs:** `gpt-5.1-codex-max` (no Free ID on Zen; paid only)
- **Context window:** 400,000 tokens (272K input on some providers); max output 128,000 tokens. Compaction enables coherent work across multiple context windows (millions of tokens in a single task).
- **Modalities:** Text + image input → text output; reasoning tokens; tool calls; structured outputs; web search; prompt caching.
- **Pricing (as of 2026-10-18):** $1.25/MTok input, $10.00/MTok output; cache read $0.125; batch API 50% discount. Paid only. Deprecated.
- **Architecture:** Proprietary; API-only (no open weights); reasoning effort levels (low/medium/high/xhigh). Extra High (xhigh) thinks longer for better answers.

### Raw benchmarks found

Agent / tool use:

- SWE-Lancer IC SWE: **79.9%** (OpenAI xhigh) / rank: exceeds GPT-5.1-Codex (66.3%)
- τ²-Bench Telecom: **83.0%** (Artificial Analysis)
- Terminal-Bench 2.0: **58.1%** (OpenAI xhigh / Laude Institute Harbor harness)
- OTelBench: **12%** pass rate (Quesma / rank 10 of 14)
- Cyber (Irregular): **37%** Network Attack, **41%** Vuln Discovery, **43%** Evasion

Reasoning / knowledge:

- GPQA Diamond: **86.0%** (Artificial Analysis)
- HLE: **25.7%** (Artificial Analysis)
- AA Intelligence Index: **23.7** (AA — same as GPT-5.1-Codex)
- AA-Omniscience: **39.9%** accuracy / **22.8%** non-hallucination (AA)
- AA-LCR: **69.3%** (AA)
- CritPt: **5.7%** (AA)
- TroubleshootingBench: **40%** (with refusals as successes, OpenAI)

Coding:

- SWE-bench Verified: **77.9%** (OpenAI xhigh) / **~75.8%** (benchgap estimate)
- SWE-bench Pro: **~56.5%** (benchgap estimate)
- LiveCodeBench: **~87.7%** (benchgap estimate) / **83.6%** (Vals AI measured)
- Vibe Code Bench: **22.2%** (Vals AI)
- Terminal-Bench Hard: **~34.8%** (estimated, same as GPT-5.1-Codex)
- PostTrainBench: **34.9%** (best performer, vs 20.1% for Claude Opus 4.5)
- PaperBench-10: **exceeds GPT-5.1** (OpenAI)

Long context:

- AA-LCR: **69.3%** (AA)
- 400K token context with compaction for multi-window work (24+ hour autonomous runs demonstrated)

### Normalized scores (1–100)

- **Tool use: 75/100.** SWE-Lancer 79.9% is strong; τ²-Bench 83.0% is excellent. Capped by OTelBench 12% and weak agentic benchmark coverage.
- **Reasoning: 74/100.** GPQA Diamond 86.0% is good; HLE 25.7% is below frontier. Capped by old knowledge cutoff (Sep 2024) and AA-Omniscience 22.8% non-hallucination.
- **Context window: 88/100.** 400K tokens with compaction for multi-window work — a unique capability enabling million-token tasks. Below 1M frontier but substantial.
- **Multimodal: 68/100.** Text + image input → text output; MMMU-Pro 72.5%. No audio/video input.
- **Coding: 78/100.** SWE-bench Verified 77.9%, SWE-Lancer 79.9%, PostTrainBench 34.9% (best-in-class). Capped by Terminal-Bench Hard 34.8% and Vibe Code Bench 22.2%.
- **Cost efficiency: 55/100.** $1.25/$10 per MTok is moderate; xhigh effort increases token usage. Capped by output pricing and deprecated status.
- **Overall Score: 77/100.** Mean of (75+74+88+68+78)/5 = 76.6 → 77. A strong long-horizon coding model with unique compaction capability and excellent SWE-bench performance. Best for complex, multi-hour autonomous coding tasks. Behind frontier models on reasoning; knowledge cutoff is dated; deprecated as of July 2026.

---

## Signature

- Provided by: **LongCat 2.5 Preview (meituan/longcat-2.5-preview)** — 2026-10-18
- Method: Public internet research (OpenAI official blog + system card, Artificial Analysis, Vals AI, METR, PostTrainBench, Quesma, TheNewStack, LessWrong, benchgap, OpenRouter, LiteLLM, Vercel AI Gateway, RooCode); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
