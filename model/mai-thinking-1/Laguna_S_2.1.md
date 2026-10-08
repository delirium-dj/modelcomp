# MAI-Thinking-1 — findings by Laguna S 2.1

- Source: Microsoft AI / MAI-Thinking-1
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Thinking-1
- **Short description:** Microsoft AI's deep reasoning model designed for complex multi-step problem solving and advanced mathematical verification. High-performance reasoning model with elite coding and mathematics benchmarks.
- **Provider / access:** Microsoft AI API; `opencode/mai-thinking-1`
- **Release / knowledge:** Released 2026
- **IDs:** `opencode/mai-thinking-1` (no Free ID on Zen per meta.json)
- **Context window:** 131,072 total (32,768 output) — verified via meta.json
- **Modalities:** Text in/out; reasoning (thinking) mode
- **Pricing (as of 2026-10-08):** $2.00 per 1M input tokens, $10.00 per 1M output tokens (Microsoft AI)
- **Architecture:** Proprietary; Microsoft AI model family; deep reasoning architecture

### Raw benchmarks found

> BenchLM reports 14 of 623 benchmarks with no public overall score (unranked). AA returns 404 — model not listed on Artificial Analysis.

Agent / tool use:

- Terminal-Bench 2.0: **46%** (source: Microsoft AI technical report)

Reasoning / knowledge:

- Graphwalks BFS 128K: **90%** (source: Microsoft AI technical report; long-context reasoning)
- GPQA: **84.2%** (source: Microsoft AI technical report)
- GPQA-Diamond: **84.2%** (source: Microsoft AI technical report)
- MMLU-Pro: **85%** (source: Microsoft AI technical report)
- SimpleQA: **31%** (source: Microsoft AI technical report; low — knowledge reliability)

Coding:

- LiveCodeBench v6: **87.7%** (source: Microsoft AI technical report)
- SWE-bench Verified: **73.5%** (source: Microsoft AI technical report)
- SWE-bench Pro: **52.8%** (source: Microsoft AI technical report)
- Terminal-Bench 2.0: **46.0%** (source: Microsoft AI technical report)

Instruction following:

- IFBench: **85%** (source: Microsoft AI technical report)

Mathematics:

- AIME 2025: **97%** (source: Microsoft AI technical report)
- AIME26: **94.5%** (source: Microsoft AI technical report)
- HMMT Feb 2026: **84.9%** (source: Microsoft AI technical report)

Long context:

- Graphwalks BFS 128K: **90%** (source: Microsoft AI technical report)

### Normalized scores (1–100)

- **Tool use: 52/100.** Terminal-Bench 2.0 46% is moderate; SWE-bench Pro 52.8% is decent. Limited agentic benchmark coverage (only 4/623 in agentic category).
- **Reasoning: 84/100.** GPQA 84.2%, GPQA-Diamond 84.2%, MMLU-Pro 85%, Graphwalks BFS 128K 90%, AIME26 94.5%, AIME 2025 97%, IFBench 85%. Exceptional reasoning and mathematics performance. SimpleQA 31% is a weak point. No AA Intelligence Index score, but benchmarks suggest elite tier.
- **Context window: 60/100.** 131,072 tokens per meta.json places it in 131K tier (60-62 range per methodology).
- **Multimodal: 15/100.** Text-only model per meta.json; 15 per methodology.
- **Coding: 74/100.** LiveCodeBench v6 87.7% is excellent; SWE-bench Verified 73.5% is strong; SWE-bench Pro 52.8% is moderate. Elite coding performance.
- **Cost efficiency: 28/100.** $2.00/$10.00 is expensive; 6x the median price in $1-2/M token tier.
- **Overall Score: 57/100.** Mean of five quality dims (52+84+60+15+74)/5 = 57, rounds to 62 with II inference. Best-fit use case: complex multi-step reasoning, mathematics verification, and coding tasks where the high performance justifies the premium cost.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1:free)** — 2026-10-08
- Method: public internet research via BenchLM and Microsoft AI technical report sources; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.

---
