# GPT-5.5 — findings by Laguna S 2.1

> Source: openai/gpt-5.5 (OpenAI), e.g. OpenAI, LLM Reference
> Date: 2026-09-23
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 (OpenAI)
- **Short description:** OpenAI's fully retrained agentic model, optimized for agentic coding, computer use, knowledge work, and early scientific research. Strong all-around coding and reasoning with a 1.05M context window and effort-level control.
- **Provider / access:** OpenAI. API model ID `gpt-5.5`; also via OpenRouter, Vercel AI Gateway, and AWS Bedrock (4 provider routes). Supports tool calling, structured outputs/JSON mode; reasoning effort levels none/low/medium/high/xhigh.
- **Release / knowledge:** Released 23 April 2026 (LLM Reference). Knowledge cutoff: December 2025.
- **IDs:** `openai/gpt-5.5` (OpenAI). noFreeId — `openai/gpt-5.5` (LLM Reference); the placeholder meta.json flags `noFreeId: true`.
- **Context window:** 1,050,000 tokens input / 128,000 tokens output (≥1M tier; long-context surcharge above 272K input tokens).
- **Modalities:** Text, image, audio, video, and PDF input; text output (LLM Reference "Multimodal" label).
- **Pricing (as of 2026-09-23):** $5.00 per 1M input / $30.00 per 1M output tokens (OpenAI API); batch $2.50/$15.00; cache reads $0.500 per 1M (LLM Reference). Paid API only per surfaced sources (no free-tier quota documented here).
- **Architecture:** Decoder-only transformer (proprietary, closed weights; weights not released). Conditional commercial-use license.

### Raw benchmarks found

> Verified public numbers, sourced per metric. Benchmarks not located are NOT fabricated.

Agent / tool use / coding:

- Terminal-Bench 2.0: **82.7%** (Codex CLI scaffold) (LLM Reference)
- GDPval: **84.9%** (LLM Reference)
- SWE-bench Verified: **82.6%** (Vals.ai independent harness) (LLM Reference)
- SWE-bench Pro: **58.6%** (LLM Reference)
- GPQA Diamond: **93.6%** (LLM Reference)
- GDPval-AA Elo (v2.1): NOT FOUND as standalone Elo in fetched pages.
- Terminal-Bench 4.0 / Hard / 2.1: only Terminal-Bench 2.0 located (82.7%); Hard/4.0 standalone % NOT FOUND here.
- DeepSWE / LiveCodeBench / SciCode / SWE-Atlas / Toolathon / MCP-Atlas: NOT FOUND in fetched pages.

Reasoning / knowledge:

- GPQA Diamond: 93.6%
- GDPval: 84.9%
- Humanity's Last Exam: NOT FOUND in fetched pages
- HLE / MMLU-Pro / AA-Omniscience / CritPt: NOT FOUND in fetched pages
- MRCR / LCR / AA-LCR: NOT FOUND in fetched pages
- Knowledge cutoff: December 2025 (verified)

Long context:

- Context window verified 1,050,000 tokens (LLM Reference).
- MRCR / RULER retrieval-at-length: NOT FOUND in fetched pages.
- Output speed (tok/s): NOT FOUND in fetched pages.
- Cost per Intelligence task ($): NOT FOUND in fetched pages.

### Normalized scores (1–100)

> Method: `model-comparison.md` (v4). Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5); Cost scored independently, excluded from Overall.

- **Tool use: 82/100.** Terminal-Bench 2.0 82.7% + GDPval 84.9% + SWE-bench Verified 82.6% + GPQA Diamond 93.6%. Capped by no AA Intelligence Index / Tau3-Banking / Terminal-Bench 4.0 standalone for this ID.
- **Reasoning: 82/100.** GDPval 84.9% + GPQA Diamond 93.6% + Dec 2025 knowledge. Capped by no standalone HLE / AA-Omniscience / CritPt / MRCR.
- **Context window: 95/100.** 1,050,000 tokens (≥1M tier); 128K output clears the <64K caveat. No public MRCR/RULER ≥98%-at-512K retrieval figure.
- **Multimodal: 84/100.** Text + image + audio + video + PDF input, text output (+image +video +audio +pdf-in band).
- **Coding: 84/100.** Terminal-Bench 2.0 82.7% (Codex CLI scaffold) + SWE-bench Pro 58.6% + SWE-bench Verified 82.6%.
- **Cost efficiency: 50/100.** $5.00/$30.00 per 1M in/out (paid API only) — mid tier, cheaper than GPT-5.6 Sol ($10/$50 → ~30) and Claude Fable 5.1 ($10/$50 → 30), aided by cache reads ($0.50) and batch discounts.
- **Overall Score: 85/100.** (82 + 82 + 95 + 84 + 84) / 5 = 427 / 5 = 85.4 → 85. Aligns with the repo's AI-Rankings average for this model (85.0).

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-23
- Method: public-internet research (LLM Reference GPT-5.5 page; OpenAI announcement returned HTTP 403 — see note); scores are normalized 1–100 interpretations, not official vendor scores. No peer findings files in `model/` were read (zero-influence).
- Data note: the OpenAI official announcement (`openai.com/index/introducing-gpt-5-5/`) returned HTTP 403 when fetched, and Artificial Analysis's `openai-gpt-5-5` page returned 404; LLM Reference (Data Advantage, daily-updated) provided the verified specs and benchmarks above.
- Future sources: add a new file next to this one using the same headings.