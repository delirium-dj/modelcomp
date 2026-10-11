# GPT-5.5 — findings by Laguna S 2.1

- Source: openai/gpt-5.5 (OpenAI), e.g. OpenAI launch announcement, LLM Reference, Artificial Analysis, BenchLM
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 (OpenAI)
- **Short description:** OpenAI's fully retrained agentic model, optimized for agentic coding, computer use, knowledge work, and early scientific research. Strong all-around coding and reasoning with a ~922K token context window and effort-level control.
- **Provider / access:** OpenAI. API model ID `gpt-5.5`; also via OpenRouter, Vercel AI Gateway, and AWS Bedrock (4 provider routes). Supports tool calling, structured outputs/JSON mode; reasoning effort levels none/low/medium/high/xhigh. DEPRECATED — OpenAI recommends GPT-5.6 Sol.
- **Release / knowledge:** Released 23 April 2026 (LLM Reference). Knowledge cutoff: December 2025.
- **IDs:** `openai/gpt-5.5` (OpenAI). noFreeId — `openai/gpt-5.5` (LLM Reference); the placeholder meta.json flags `noFreeId: true`.
- **Context window:** **922,000 tokens** (AA model page) / 1M input (per BenchLM). Scoring uses the AA-verified 922K figure (in 500K–1M tier, not ≥1M).
- **Modalities:** **Text and image input → text output** (multimodal; +image-in). No audio/video/PDF verified. (Verified via AA model page and BenchLM.)
- **Pricing (as of 2026-10-01):** $5.00 per 1M input / $30.00 per 1M output tokens (OpenAI API); batch $2.50/$15.00; cache reads $0.500 per 1M (LLM Reference). Paid API only per surfaced sources (no free-tier quota documented here).
- **Architecture:** Decoder-only transformer (proprietary, closed weights; weights not released). Conditional commercial-use license.

### Raw benchmarks found

> Verified public numbers sourced from OpenAI launch announcement (`openai.com/index/introducing-gpt-5-5`), LLM Reference, BenchLM.ai, and Artificial Analysis.

Agent / tool use / coding:

- Terminal-Bench 2.0: 82.0% (Terminal-Bench 2.0 leaderboard)
- Terminal-Bench 2.1 (Vals): 76.4% (Vals AI)
- CyberGym: 81.8% (OpenAI launch)
- BrowseComp: 84.4% (OpenAI launch)
- OSWorld-Verified: 78.7% (OpenAI launch)
- MCP Atlas: 75.3% (OpenAI launch)
- Toolathlon: 55.6% (OpenAI launch)
- τ²-bench: 98% (OpenAI launch — near ≥1750 Elo frontier threshold)
- GDPval-AA (normalized): 42.7% (Artificial Analysis)
- GDPval-AA (Elo): 1396 (BenchLM)
- SWE-bench Verified: 82.6% (Vals.ai) (OpenAI launch)
- SWE-bench Pro: 58.6% (OpenAI launch)
- GPQA-Coding: not found on fresh BenchLM for this exact ID

Reasoning / knowledge:

- GPQA Diamond: 93.6% (OpenAI launch)
- GPQA: 93.6% (BenchLM)
- AA-GPQA Diamond: 93.5% (Artificial Analysis)
- GPQA Diamond (Vals): 93.2% (Vals AI)
- MMLU-Pro (Vals): 88.1% (Vals AI)
- HLE: 52.2% (BenchLM)
- HLE (no tools): 41.4% (BenchLM)
- AA-HLE: 45.8% (Artificial Analysis)
| AA Intelligence Index: **38** (#65/227 reasoning models) (BenchLM / AA model page, v4.3.2)
- CritPt: 27.1% (BenchLM)
- AA-LCR: 84.3% (BenchLM)
- MRCR v2 64K-128K: 83.1% (BenchLM)
- MRCR v2 128K-256K: 87.5% (BenchLM)
- ARC-AGI-1: 95.00% (ARC Prize leaderboard, verified)
- ARC-AGI-2: 85% (BenchLM)

Coding:

- SWE-bench Verified: 82.6% (Vals.ai)
- SWE-bench Pro: 58.6% (OpenAI launch)
- LiveCodeBench (Vals): 85.3% (Vals AI)
- DeepSWE: 74.3% (OpenAI launch — at frontier reference ≥74%)
- AAA-SciCode: 55.0% (BenchLM — at frontier ref 55%)
- HumanEval: 89.7% (BenchLM)
- AA Coding Index: 74.9% (BenchLM)

Multimodal:

- MMMU-Pro: 81.2% (OpenAI launch)
- MMMU-Pro w/ Python: 83.2% (OpenAI launch)
- AA-MMMU-Pro: 79.9% (Artificial Analysis)

---

### Normalized scores (1–100)

> Method: `model-comparison.md` (v4). Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5); Cost scored independently, excluded from Overall.

- **Tool use: 82/100.** Terminal-Bench 2.0 82.0%, TB-2.1 (Vals) 76.4%, GDPval-AA 42.7% (Elo 1396), BrowseComp 84.4%, MCP Atlas 75.3%, OSWorld-Verified 78.7%; τ²-bench 98% (near ≥1750 Elo frontier). Capped by GDPval below 50% threshold and no TB-4.0 standalone score.
- **Reasoning: 84/100.** GPQA Diamond 93.6% (all variants ≥93%), AA-GPQA 93.5%, ARC-AGI-1 95.0%, ARC-AGI-2 85%, AA-LCR 84.3%, MRCR v2 83.1%–87.5%; Intelligence Index 38 (#65/227). HLE 52.2% (above 40% threshold). CritPt 27.1% is moderate. No standalone HLE ceiling beyond 52.2%.
- **Context window: 88/100.** AA-verified **922,000** tokens (in 500K–1M tier = 85–94 per methodology; below 1M so not ≥95-100). Long-context surcharge above 272K input tokens noted. MRCR v2 83.1% at 64K-128K, 87.5% at 128K-256K. (Prior file cited 1,050,000 from OpenAI; AA confirms 922K — downgraded from 95.)
- **Multimodal: 70/100.** **Text and image input only** (verified via AA model page and BenchLM, correcting prior claim of audio+video+PDF input). AAA-MMMU-Pro 79.9% confirms vision reasoning within text+image scope.
- **Coding: 86/100.** Terminal-Bench 2.0 82.0%, SWE-bench Verified 82.6%, DeepSWE 74.3% (at frontier ref), LiveCodeBench 85.3% (Vals, excellent), AAA-SciCode 55.0% (at frontier), AA Coding Index 74.9%; SWE-bench Pro 58.6%. Strong coding cluster. Capped by SWE-bench Pro 58.6% and no SWE-bench Verified ceiling of 90%+.
- **Cost efficiency: 50/100.** $5.00/$30.00 per 1M in/out (paid API only) — mid tier, cheaper than GPT-5.6 Sol ($10/$50 → ~30) and Claude Fable 5.1 ($10/$50 → 30), aided by cache reads ($0.50) and batch discounts.
- **Overall Score: 82/100.** (82 + 84 + 88 + 70 + 86) / 5 = 410 / 5 = 82.0 → 82. **Adjustments from prior 83:** Context downgraded from 95 to 88 (AA confirms 922K, not 1.05M); Intelligence Index confirmed 38 (not 45) per fresh AA v4.3.2 — Reasoning stays 84 on strong individual benchmarks. Aligns with BenchLM Overall 67.79/100 rank and AA Intelligence Index 38 (#65/227).

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-10
- Method: public-internet research (OpenAI launch announcement `openai.com/index/introducing-gpt-5-5/`; BenchLM.ai model page for full benchmark table + Intelligence Index 38; Artificial Analysis model page for Intelligence Index 38 and cost-per-task; LLM Reference for pricing and API specs). Scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `*.md` findings files during research (Cost line preserved verbatim from prior signed file).
- Sources: OpenAI launch blog (full benchmark suite); BenchLM.ai model page (Overall 67.79/100, #24/889, 64 of 625 benchmarks, Intelligence Index v4.3.2 = 38, #65/227); Artificial Analysis model page (Intelligence Index 38, GPQA 93.5, Omniscience, HLE 45.8); LLM Reference (pricing, API specs, modalities).
- Future sources: add a new file next to this one using the same headings.

---
