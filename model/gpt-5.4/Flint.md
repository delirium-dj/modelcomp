# GPT-5.4 — findings by Flint

- Source: OpenAI / GPT-5.4
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4
- **Short description:** OpenAI's flagship model for complex professional work, released 2026-03-05 (default snapshot `gpt-5.4-2026-03-05`); positioned by OpenAI as a more affordable model for coding and professional work.
- **Provider / access:** OpenAI API (`gpt-5.4`), OpenAI platform; Chat Completions and Responses API supported; Batch supported; Fine-tuning not supported.
- **Release / knowledge:** Released 2026-03-05; knowledge cutoff Aug 31, 2025.
- **IDs:** `gpt-5.4` (API snapshot `gpt-5.4-2026-03-05`).
- **Context window:** 1,050,000 tokens; max output 128,000; reasoning effort none/low/medium/high/xhigh supported.
- **Modalities:** Text and image input; text output.
- **Pricing (as of 2026-10-25):** $2.5/M input, $0.25/M cached input, $15/M output; prompts >272K input tokens priced at 2x input / 1.5x output.
- **Architecture:** Closed-weight flagship.

### Raw benchmarks found

- Coding:
  - SWE-bench Verified: **77%** (Epoch AI independent benchmark; GPT-5.3 Codex 75%, Claude Opus 4.6 79%, Gemini 3.1 Pro 76%).
- Reasoning / agentic:
  - Epoch AI Capabilities Index (ECI): **157** (GPT-5.4 ranked #22 of 253 tracked models; #2 of 184 at release).

### Cross-source comparison

- Official OpenAI positioning vs independent coverage (Epoch AI, OpenRouter): OpenAI documents GPT-5.4 as a more affordable flagship for coding and professional work; independent trackers place its release-time ranking near the top tier but below Claude Opus 4.6 on SWE-bench Verified (79% vs 77%).

### Normalized scores (1–100)

- **Tool use: 55/100.** no verified public Terminal-Bench/Tau3/GDPval captured -> mid band -> ~55.
- **Reasoning: 65/100.** ECI **157** -> mid-high band -> ~65.
- **Context window: 97/100.** 1,050,000 -> >=1M tier -> ~97.
- **Multimodal: 65/100.** image input only -> text+image tier (60-70) -> ~65.
- **Coding: 75/100.** SWE-bench Verified **77%** -> mid-high (frontier ref DeepSWE 74%+) -> ~75.
- **Cost efficiency: 60/100.** $2.5/$15 per 1M -> mid (ref ~$3/$15 = 60).
- **Overall Score: 71/100.** Mean of five quality dims: (55+65+97+65+75)/5 = 71.4 -> 71 (half-up); Cost excluded.

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-10-25
- Method: public web research prioritizing official model docs (OpenAI) plus independent benchmarks/reviews (Epoch AI, OpenRouter).
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
