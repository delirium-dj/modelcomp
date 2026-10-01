# Grok 4.7 — findings by Laguna S 2.1

- Source: SpaceXAI xAI (`https://x.ai/news/grok-4-7`), Artificial Analysis (`https://artificialanalysis.ai/models/grok-4-7`), BenchLM (`https://benchlm.ai/models/grok-4-7`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7 (xhigh)
- **Short description:** SpaceXAI's frontier reasoning model for coding and knowledge work, evaluated at xhigh reasoning effort. Released September 21, 2026 as a larger base with longer RL training on hard, multi-hour tasks. Shows frontier-level performance on agentic knowledge work benchmarks.
- **Provider / access:**
  - xAI API: `grok-4-7` (xhigh reasoning) via OpenAI-compatible API at `https://api.x.ai/v1`
  - Available through Cursor, Grok Build, and third-party model routers
  - Pricing starts at $2.00 per 1M input tokens / $6.00 per 1M output tokens (75% cache discount)
- **Release / knowledge:** September 21, 2026; knowledge cutoff not published
- **IDs:** `opencode/grok-4.7` (Zen), `grok-4-7` (xAI API); noFreeId per `meta.json`
- **Context window:** 500K total tokens (per xAI launch post, unchanged from Grok 4.6)
- **Modalities:** Text + image input, text output; reasoning yes (configurable low to xhigh); tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-21):** $2.00 input / $6.00 output per 1M tokens; cache hits $0.50 per 1M (75% discount); fast variant at 2× speed/price available
- **Architecture:** Proprietary dense transformer; parameter count not disclosed

### Raw benchmarks found

> Sources: xAI Grok 4.7 launch post (`https://x.ai/news/grok-4-7`), Artificial Analysis article "Benchmarking Grok 4.7" (`https://artificialanalysis.ai/articles/benchmarking-grok-4-7`), AA model page (`https://artificialanalysis.ai/models/grok-4-7`), BenchLM (`https://benchlm.ai/models/grok-4-7`).

Agent / tool use:

- Terminal-Bench 4.0: **37.6%** — (xAI launch post comparison table; improved from Grok 4.6 20.3%)
- Terminal-Bench 2.1 (Vals): **73.4%** — (BenchLM, Vals AI leaderboard)
- GDPval-AA: **1695 Elo** — (xAI launch post graph; improves on Grok 4.6 at 1605; near frontier with Fable 5.1 Max at 1735)
- AA-Briefcase v1.1: **1657 Elo** — (xAI launch post table + AA article; just behind Claude Opus 5 and Claude Fable 5.1 at the frontier; +111 Elo over Grok 4.6 High)
- AA-AutomationBench: **65.6%** — (BenchLM, AA leaderboard)
- AA ITBench: **42.1%** — (BenchLM, AA leaderboard)
- AA Terminal-Bench 4.0: **25.8%** — (BenchLM, AA leaderboard)
- GDP.pdf: **20.0%** — (BenchLM, AA leaderboard)
- Harvey Legal Agent Benchmark: **19.6%** — (xAI launch post)
- CWE-bench v1: **68.0%** — (BenchLM, Collinear leaderboard)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **46 / #29 of 224** — (AA model page; evaluated at xhigh reasoning effort)
- Intelligence Index (BenchLM normalized): **46.5%** — (BenchLM, AA leaderboard)
- HLE (Humanity's Last Exam / AA-HLE): **43.1%** — (BenchLM, AA leaderboard)
- AA-Omniscience Index: **32.0%** — (BenchLM)
- AA-Omniscience Accuracy: **47.4%** — (BenchLM)
- AA-Omniscience Hallucination Rate: **29.3%** — (BenchLM; lower is better; improved from Grok 4.6 at 34%)
- GPQA Diamond: no verified public score found
- LCR / MLCR: **15.0%** — (BenchLM; regression of -3.7 p.p. from Grok 4.6 per AA article)
- CritPt: **17.7%** — (BenchLM)
- HealthBench Professional: **56.7%** — (xAI launch post)

Coding:

- DeepSWE v1.1: **71.0%** — (xAI launch post, high effort; up from Grok 4.6 65.2%; AA article says 73% at xhigh which is the evaluated config)
- SWE-Atlas-QnA: **63%** — (AA article "Benchmarking Grok 4.7"; improved from Grok 4.6 58%)
- CursorBench 4.0: **46.3%** — (xAI launch post; improves on Grok 4.6 40.4%)
- EEBench: **64.0%** — (xAI launch post; improves on Grok 4.6 53.0%)
- AA-SciCode: **57.4%** — (BenchLM, AA leaderboard)
- AA-SWE-bench Pro / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- Vibe Code Bench: no verified public score found
- Coding Agent Index: **56** — (AA article; up +9 from Grok 4.6 47; ranks 4th among native harness models behind Claude Fable 5.1, GPT-6 Astra, Claude Opus 5)

Long context:

- No MRCR / RULER / GraphWalks figure found; 500K context window confirmed by xAI launch post

Multimodal:

- Supports text and image input, text output (per AA model page)
- Design Arena Website: **1222** — (BenchLM, OpenRouter)

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of the five quality dims (see `RULES.md`). Cost excluded.

- **Tool use: 82/100.** GDPval-AA at 1695 Elo is near the frontier (1750+ threshold; Fable 5.1 Max sits at 1735). AA-Briefcase at 1657 Elo places Grok 4.7 just behind Claude Opus 5 and Claude Fable 5.1 at the frontier of agentic knowledge work. Terminal-Bench 2.1 (Vals) at 73.4% is solid; Terminal-Bench 4.0 at 37.6% is moderate on this harder harness. Capped by TB4.0 below frontier 88%+ and no Claw-Eval data.

- **Reasoning: 75/100.** Intelligence Index 46 (just below 60+ frontier threshold); HLE at 43.1% clears the 40% frontier threshold; AA-Omniscience Index at 32.0 with 29.3% hallucination rate (good honesty). GPQA not found; LCR at 15.0% and CritPt at 17.7% are low, pulling down long-context reasoning. Capped by Intelligence Index below 60, missing GPQA, and weak LCR/CritPt.

- **Context window: 88/100.** 500K tokens per xAI launch post and AA model page — meets the 500K–1M tier (85–94) per methodology. No verified retrieval-at-512K+ percentage published.

- **Multimodal: 65/100.** Text and image input with text output — scores in the +image input range (60–70) per methodology. Design Arena Website score of 1222 indicates solid multimodal engineering design.

- **Coding: 75/100.** DeepSWE v1.1 at 71.0% (near frontier 74%+); SWE-Atlas-QnA at 63%; CursorBench 4.0 at 46.3%; Terminal-Bench 2.1 (Vals) at 73.4%; Coding Agent Index at 56 (below 70+ frontier). AA article notes +9 Index point improvement over Grok 4.6 and ranks 4th among native code agents. Capped by Coding Agent Index below frontier and TB4.0 (37.6%/25.8%) below 85%+ threshold.

- **Cost efficiency: 72/100.** $2.00 input / $6.00 output per 1M tokens with 75% cache discount (cache hits $0.50/M). At the median input price and better-than-median output, scores in the moderate tier (~72 per methodology's price ladder between $1.25/$4.25 at ~88 and $3/$15 at ~60).

- **Overall Score: 77/100.** Mean of five non-cost dimensions: (82 + 75 + 88 + 65 + 75) / 5 = 385 / 5 = 77. Near-frontier tool use and agentic knowledge work performance, strong 500K context, but capped by below-frontier coding agent index and low LCR/CritPt reasoning subtasks. Recommended for agentic knowledge work and coding where cost is acceptable.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-01
- Method: public internet research via xAI Grok 4.7 launch post, Artificial Analysis article and model page, and BenchLM; scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `model/` findings files during research.
- Future sources: add a new file next to this one, e.g. `OpenRouter.md`, using the same headings.

---
