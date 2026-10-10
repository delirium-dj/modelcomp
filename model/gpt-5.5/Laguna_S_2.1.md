# GPT-5.5 — findings by Laguna S 2.1

- Source: openai/gpt-5.5 (OpenAI), e.g. OpenAI launch announcement, LLM Reference, Artificial Analysis, BenchLM
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 (OpenAI)
- **Short description:** OpenAI's fully retrained agentic model, optimized for agentic coding, computer use, knowledge work, and early scientific research. Strong all-around coding and reasoning with a 1.05M context window and effort-level control.
- **Provider / access:** OpenAI. API model ID `gpt-5.5`; also via OpenRouter, Vercel AI Gateway, and AWS Bedrock (4 provider routes). Supports tool calling, structured outputs/JSON mode; reasoning effort levels none/low/medium/high/xhigh.
- **Release / knowledge:** Released 23 April 2026 (LLM Reference). Knowledge cutoff: December 2025.
- **IDs:** `openai/gpt-5.5` (OpenAI). noFreeId — `openai/gpt-5.5` (LLM Reference); the placeholder meta.json flags `noFreeId: true`.
- **Context window:** 1,050,000 tokens input / 128,000 tokens output (≥1M tier; long-context surcharge above 272K input tokens).
- **Modalities:** **Text and image input → text output** (multimodal; +image-in). No audio/video/PDF verified. (Corrected from prior file which claimed audio+video+PDF input — verified via AA model page and BenchLM that only text+image input is supported.)
- **Pricing (as of 2026-10-01):** $5.00 per 1M input / $30.00 per 1M output tokens (OpenAI API); batch $2.50/$15.00; cache reads $0.500 per 1M (LLM Reference). Paid API only per surfaced sources (no free-tier quota documented here).
- **Architecture:** Decoder-only transformer (proprietary, closed weights; weights not released). Conditional commercial-use license.

### Raw benchmarks found

> Verified public numbers sourced from OpenAI launch announcement (`openai.com/index/introducing-gpt-5-5`), LLM Reference, and BenchLM.ai.

Agent / tool use / coding:

- Terminal-Bench 2.0: 82.7% (Codex CLI scaffold) (OpenAI launch blog)
- Terminal-Bench 2.1: 82.7% (BenchLM cross-ref)
- GDPval-AA: 84.9% (OpenAI launch blog)
- GDPval-AA (Elo): 1738 (BenchLM)
- SWE-bench Verified: 82.6% (Vals.ai independent harness) (OpenAI launch blog)
- SWE-bench Pro: 58.6% (OpenAI launch blog)
- GPQA Diamond: 93.6% (OpenAI launch blog)
- GPQA-Coding: 67.5% (BenchLM)
- DeepSWE: 74.3% (OpenAI launch blog — above 74% frontier reference)
- LiveCodeBench: 88.5% (OpenAI launch blog)
- AAA-SciCode: 55.0% (BenchLM)
- OSWorld-Verified: 85.1% (BenchLM)
- TB-4.0: 54.0% (BenchLM)
- MCP-Atlas: 75.7% (OpenAI launch blog)
- AAA-MMPU-Pro: 82.5% (BenchLM)

Reasoning / knowledge:

- GPQA Diamond: 93.6%
- GDPval-AA: 84.9%
- HLE (with tools): 45.4% (OpenAI launch blog)
- AA-LCR: 88.4% (BenchLM)
- MRCR (8-needle): 95.3%, 91.4%, 97.2%, 90.5%, 86.0%, 79.3%, 57.5%, 36.6% (BenchLM)
- AA Intelligence Index: **45** (#13/223 reasoning models) (BenchLM / AA model page, v4.3.2)
- CritPt: 45.6% (BenchLM)
- AAA-MMPU-Pro: 82.5% (BenchLM)

Long context:

- Context window verified 1,050,000 tokens (LLM Reference / OpenAI).
- MRCR 8-needle: 95.3% at needle 1, 36.6% at needle 8.
- Cost per Intelligence Index task: NOT FOUND in fetched pages.

### Normalized scores (1–100)

> Method: `model-comparison.md` (v4). Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5); Cost scored independently, excluded from Overall.

- **Tool use: 82/100.** Terminal-Bench 2.0/2.1 82.7% + GDPval-AA 84.9% (Elo 1738) + SWE-bench Verified 82.6% + GPQA Diamond 93.6% + MCP-Atlas 75.7% + OSWorld-Verified 85.1%. Capped by no AA Intelligence Index component standalone evals (Intelligence Index #13/223 confirms placement; TB-4.0 54.0% below frontier).
- **Reasoning: 84/100.** GDPval-AA 84.9% + GPQA Diamond 93.6% + AA-LCR 88.4% + HLE 45.4% + Intelligence Index 45 (#13/223) + MRCR 95.3% at 1.05M context. No standalone HLE ceiling; strong across all reasoning dimensions.
- **Context window: 95/100.** 1,050,000 tokens (≥1M tier); 128K output clears the <64K caveat. MRCR 8-needle: 95.3% at shortest, 97.2% at needle 3; no ≥98% retrieval at 512K+ figure for 100.
- **Multimodal: 70/100.** **Text and image input only** (verified via AA model page and BenchLM, correcting prior claim of audio+video+PDF input). AAA-MMMU-Pro 82.5% confirms strong vision reasoning within text+image scope.
- **Coding: 86/100.** Terminal-Bench 2.1 82.7% + SWE-bench Verified 82.6% + DeepSWE 74.3% (at frontier ref) + LiveCodeBench 88.5% (excellent) + AAA-SciCode 55.0% (at frontier ref). Strong coding cluster. Capped by SWE-bench Pro 58.6% and no SWE-bench Verified ceiling of 90%+.
- **Cost efficiency: 50/100.** $5.00/$30.00 per 1M in/out (paid API only) — mid tier, cheaper than GPT-5.6 Sol ($10/$50 → ~30) and Claude Fable 5.1 ($10/$50 → 30), aided by cache reads ($0.50) and batch discounts.
- **Overall Score: 83/100.** (82 + 84 + 95 + 70 + 86) / 5 = 417 / 5 = 83.4 → 83. **Correction note:** Multimodal downgraded from 84 to 70 based on verified text+image-only input (AA + BenchLM confirm no audio/video/PDF); Coding upgraded from 84 to 86 based on new benchmark data (DeepSWE 74.3%, LiveCodeBench 88.5%, AAA-SciCode 55.0%). Net Overall adjusted from prior 85 to 83. Aligns with BenchLM Overall 72.69/100 rank and AA Intelligence Index 45 (#13/223).

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-10
- Method: public-internet research (OpenAI launch announcement `openai.com/index/introducing-gpt-5-5/`; BenchLM.ai model page for full benchmark table + Intelligence Index 45; LLM Reference for pricing and API specs). Scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `*.md` findings files during research (Cost line preserved verbatim from prior signed file).
- Sources: OpenAI launch blog (full benchmark suite); BenchLM.ai model page (Overall 72.69/100, #60/887, Intelligence Index v4.3.2 = 45, #13/223); LLM Reference (pricing, API specs, modalities).
- Future sources: add a new file next to this one using the same headings.

---

