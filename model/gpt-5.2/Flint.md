# GPT-5.2 — findings by Flint

- Source: OpenAI / GPT-5.2
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2
- **Short description:** OpenAI's previous flagship model for complex professional work, released 2025-12-11; OpenAI now recommends the newer GPT-6 Astra for new work.
- **Provider / access:** OpenAI API (`gpt-5.2`), OpenAI platform; Chat Completions and Responses API supported; Batch supported; Fine-tuning not supported.
- **Release / knowledge:** Released 2025-12-11; knowledge cutoff Aug 31, 2025.
- **IDs:** `gpt-5.2` (API snapshot `gpt-5.2-2025-12-11`).
- **Context window:** 400,000 tokens; max output 128,000; reasoning effort none/low/medium/high/xhigh supported.
- **Modalities:** Text and image input; text output.
- **Pricing (as of 2026-10-25):** $1.75/M input, $0.175/M cached input, $14/M output.
- **Architecture:** Closed-weight flagship.

### Raw benchmarks found

- Coding:
  - SWE-bench Verified: **74%** (Epoch AI independent benchmark; GPT-5 Pro 73%, Claude Opus 4.5 77%).
- Reasoning:
  - GPQA Diamond: **91%** (Epoch AI independent benchmark; GPT-5 Pro 93%, Gemini 3 Pro 86%).

### Cross-source comparison

- Official OpenAI metadata vs independent Epoch AI coverage: GPT-5.2 was OpenAI's second flagship for professional work (after GPT-5.4), ranked #2 of 166 tracked models at release per Epoch AI (ECI 154, #46 overall).

### Normalized scores (1–100)

- **Tool use: 55/100.** no verified public Terminal-Bench/Tau3/GDPval captured -> mid band -> ~55.
- **Reasoning: 90/100.** GPQA Diamond **91%** -> frontier band (GPQA 90%+) -> ~90.
- **Context window: 75/100.** 400,000 -> 200K-500K tier (65-84; 200K=70) -> ~75.
- **Multimodal: 65/100.** image input only -> text+image tier (60-70) -> ~65.
- **Coding: 73/100.** SWE-bench Verified **74%** -> mid-high band (frontier ref DeepSWE 74%+) -> ~73.
- **Cost efficiency: 65/100.** $1.75/$14 per 1M -> mid-high (cheaper than GPT-5.4's $2.5/$15).
- **Overall Score: 72/100.** Mean of five quality dims: (55+90+75+65+73)/5 = 71.6 -> 72 (half-up); Cost excluded.

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-10-25
- Method: public web research prioritizing official model docs (OpenAI) plus independent benchmarks/reviews (Epoch AI, OpenRouter).
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
