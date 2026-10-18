# GPT-5.1-Codex — findings by LongCat 2.5 Preview

- Source: OpenAI/gpt-5.1-codex
- Date: 2026-10-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1-Codex
- **Short description:** A coding-optimized variant of GPT-5.1 (November 2025), designed for agentic coding in Codex CLI, IDE extensions, and API. Features compaction for multi-context-window work and adjustable reasoning effort.
- **Provider / access:** OpenAI API `gpt-5.1-codex` (Responses API only), Azure AI Foundry `azure/gpt-5.1-codex`, OpenRouter `openai/gpt-5.1-codex`. Also available in Codex CLI, IDE extension, and cloud. No Zen Free ID.
- **Release / knowledge:** Released 2025-11-13; knowledge cutoff September 30, 2024.
- **IDs:** `gpt-5.1-codex` (no Free ID on Zen; paid only)
- **Context window:** 400,000 tokens (272K input on some providers); max output 128,000 tokens.
- **Modalities:** Text + image input → text output; reasoning tokens; tool calls; structured outputs; web search; prompt caching.
- **Pricing (as of 2026-10-18):** $1.25/MTok input, $10.00/MTok output; cache read $0.125; batch API 50% discount ($0.625/$5). Paid only.
- **Architecture:** Proprietary; API-only (no open weights); reasoning effort levels (low/medium/high; xhigh on Max variant). Model snapshot regularly updated.

### Raw benchmarks found

Agent / tool use:

- τ²-Bench Telecom: **83.0%** (Artificial Analysis)
- GDPval-AA: **1,193 Elo** (BenchmarkList / rank 74 of 356)
- APEX-Agents: **34.9%** (BenchmarkList / rank 18 of 44)
- JobBench: **26.2%** (measured / rank 44 of 57)
- Gert Labs Rankings: **46.9%** (BenchmarkList / rank 33 of 62)

Reasoning / knowledge:

- GPQA Diamond: **86.0%** (Artificial Analysis / rank 71 of 470)
- HLE: **25.7%** (Artificial Analysis / rank 100 of 480)
- AIME 2025: **95.7%** (Artificial Analysis Math Index / rank 8 of 226)
- MMLU-Pro: **86.0%** (Artificial Analysis / rank 27 of 312)
- IFBench: **70.0%** (Artificial Analysis)
- AA-LCR: **69.3%** (Artificial Analysis / rank 131 of 408)
- AA-Omniscience: **39.9%** accuracy / **22.8%** non-hallucination rate (Artificial Analysis)
- CritPt: **5.7%** (Artificial Analysis)
- Artificial Analysis Intelligence Index: **23.7** (AA) / **34.73** (BenchmarkList) — significant discrepancy

Coding:

- SWE-bench Verified: **73.7%** (OpenAI) / **72%** (TokenMix) / **76.3%** (sonusahani) — varying results
- SWE-bench Pro: **~55%** (benchgap estimate)
- SWE-Lancer IC SWE: **66.3%** (OpenAI high effort)
- Terminal-Bench 2.0: **52.8%** (OpenAI high effort)
- Terminal-Bench Hard: **34.8%** (Artificial Analysis)
- Terminal-Bench 1.0: **57.5%** (Vals AI)
- LiveCodeBench: **84.9%** (AA) / **85.5%** (Vals AI)
- Vibe Code Bench: **13.1%** (Vals AI)
- IOI: **3.7%** (Vals AI)
- SciCode: **40.16%** (Artificial Analysis)
- WebDev Arena: **1,335.81 Elo** (LMArena / rank 81 of 105)
- HumanEval: **93%** (TokenMix)
- CursorBench 3.2: **59.1%** (benchgap estimate)

Long context:

- AA-LCR: **69.3%** (Artificial Analysis / rank 131 of 408)
- 400K token context window with compaction for multi-window work

### Normalized scores (1–100)

- **Tool use: 68/100.** τ²-Bench Telecom 83.0% is strong; APEX-Agents 34.9% and JobBench 26.2% are weak. Capped by poor agentic tool-use benchmark performance.
- **Reasoning: 72/100.** GPQA Diamond 86.0% and AIME 95.7% are good; HLE 25.7% is below frontier. Capped by old knowledge cutoff (Sep 2024) and AA-Omniscience 22.8% non-hallucination.
- **Context window: 85/100.** 400K tokens with compaction for multi-window work; enables project-scale refactors. Below 1M frontier but substantial.
- **Multimodal: 65/100.** Text + image input → text output; MMMU-Pro 72.5%. No audio/video input. Capped by limited multimodal capabilities.
- **Coding: 72/100.** SWE-bench Verified 73.7% (below frontier leaders like Opus 4.7 at 87.6%); LiveCodeBench 84.9% is decent. Capped by Terminal-Bench Hard 34.8% and Vibe Code Bench 13.1%.
- **Cost efficiency: 60/100.** $1.25/$10 per MTok is moderate; batch API 50% discount helps. Capped by output pricing at $10/MTok being above median.
- **Overall Score: 72/100.** Mean of (68+72+85+65+72)/5 = 72.4 → 72. A solid coding-specialist model with good LiveCodeBench performance and large context. Best for Codex CLI workflows and IDE integration. Behind frontier models on SWE-bench and agentic tasks; knowledge cutoff is dated.

---

## Signature

- Provided by: **LongCat 2.5 Preview (meituan/longcat-2.5-preview)** — 2026-10-18
- Method: Public internet research (OpenAI official docs + system card, Artificial Analysis, OpenRouter, Vals AI, TokenMix, sonusahani, METR, Vector Wire, BenchmarkList, Great Commission Benchmark, Respan, Vercel AI Gateway, ModelBenchmark.io); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
