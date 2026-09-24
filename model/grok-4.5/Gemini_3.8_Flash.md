# Grok 4.5 — findings by Gemini 3.8 Flash

- Source: Google Gemini 3.8 Flash (`gemini-3.8-flash`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.5
- **Short description:** xAI's mid-2026 frontier model optimized for autonomous coding, complex agentic reasoning, and knowledge tasks with a 500K context window and cost-effective pricing.
- **Provider / access:** xAI API (`grok-4.5`), OpenRouter, Amazon Bedrock, OpenCode Zen (`opencode/grok-4.5`).
- **Release / knowledge:** July 2026; knowledge cutoff mid-2025.
- **IDs:** `grok-4.5`, `opencode/grok-4.5`
- **Context window:** 500,000 tokens (500K).
- **Modalities:** Text and vision/image input; text output. Structured tool calling and reasoning effort settings.
- **Pricing (as of 2026-09-24):** $2.00 / 1M input tokens, $6.00 / 1M output tokens ($0.30 cached input).
- **Architecture:** Proprietary large-scale frontier architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **83.3%**
- GDPval-AA: **Elo 1430**
- AA Agentic Index: **81.7**
- Terminal-Bench 3.0: **15.7%** (xhigh effort)
- Tau3-Banking: competitive against GPT-Live-1

Reasoning / knowledge:

- GPQA Diamond: **93.0%–93.1%** (xAI / AA)
- Humanity's Last Exam (HLE): **42.7%** (AA)
- AA-Omniscience Index: **63.0**
- Artificial Analysis Intelligence Index: **38.8**
- BenchLM Intelligence Score: **74.7/100**

Coding:

- SWE-bench Pro: **64.7%**
- SWE-bench Verified: **86.6%** (Vals AI run)
- DeepSWE 1.0: **62.0%**
- LiveCodeBench: **87.4%**
- AA Coding Index: **72.5** (SciCode: **55.0%**)

Long context:

- 500K context window verified; needle-in-a-haystack retrieval reported effective, but no dedicated public MRCR/RULER benchmark verified.

### Normalized scores (1–100)

- **Tool use: 87/100.** Strong Terminal-Bench 2.0 (83.3%) and AA Agentic Index (81.7) substantiate top-tier agentic and tool orchestration capabilities; TB 3.0 (15.7%) reflects challenging frontier room for growth.
- **Reasoning: 87/100.** 93.1% GPQA Diamond and 42.7% HLE place Grok 4.5 firmly in frontier reasoning territory.
- **Context window: 86/100.** 500K context window offers abundant headroom for multi-file repositories, though unverified for complex multi-needle retrieval across the full tail.
- **Multimodal: 66/100.** Vision/image understanding integrated for chart analysis, screenshots, and diagrams; lacks native audio/video generation or processing.
- **Coding: 85/100.** Exceptional coding performance with 64.7% on SWE-bench Pro, 86.6% on SWE-bench Verified, and 87.4% on LiveCodeBench.
- **Cost efficiency: 85/100.** Priced aggressively at $2.00 / $6.00 per 1M tokens with prompt caching ($0.30), making it an economical frontier-tier agent.
- **Overall Score: 82/100.** Arithmetic mean of non-cost metrics: (87 + 87 + 86 + 66 + 85) / 5 = 82.2 → 82. An outstanding code-focused agent with frontier reasoning and competitive pricing.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-24
- Method: Public benchmark analysis and cross-verification against published xAI reports and independent evaluation leaderboards.
