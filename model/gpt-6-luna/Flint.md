# GPT-6 Luna — findings by Flint

- Source: OpenAI — GPT-6 Luna
- Date: 2026-10-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Luna (Max)
- **Short description:** OpenAI's GPT-6 "Luna" tier flagship reasoning model, positioned at the top of the GPT-6 family; proprietary weights, multimodal (text + image input, text output), 1M context, reasoning via extended thinking.
- **Provider / access:** OpenAI API (`gpt-6-luna`); additionally via 8 API providers (Amazon Bedrock, Microsoft Azure, and others per Artificial Analysis provider comparison). Proprietary; no open-weights variant verified.
- **Release / knowledge:** Released 2026-09-22 UTC (verified via Artificial Analysis release page); knowledge cutoff not publicly disclosed in verified sources.
- **IDs:** `openai/gpt-6-luna` (proprietary). GPT-6 Luna spans tiers Max / High / Xhigh / Medium (per Artificial Analysis release comparison); the Max tier is the highest-intelligence configuration scored.
- **Context window:** 1,000,000 tokens (verified via Artificial Analysis technical specs).
- **Modalities:** Text + image input; text output; reasoning (extended thinking) enabled; tool use supported.
- **Pricing (as of 2026-10-26):** $0.10 per 1M input tokens, $0.50 per 1M output tokens; cache-read discount 90%; blended ~$0.08 per 1M tokens; AA cost-per-task $0.07 per Intelligence Index task (ranked #26 / 66, very competitive).
- **Architecture:** Proprietary; parameter count not disclosed by vendor.

### Raw benchmarks found

- Agent / tool use: no verified public tool-use benchmark number surfaced for GPT-6 Luna (Max).
- Reasoning / knowledge: Artificial Analysis Intelligence Index v4.3.2 — **38** (rank #11 / 173, well above average; median 13). Composite of AA-Briefcase v1.1, GDPval-AA v2.1, AutomationBench-AA, Terminal-Bench 4.0, SciCode, Humanity's Last Exam, GDP.pdf, CritPt, AA-Omniscience, AA-LCR v1.1. Speed: 135.8 tok/s (rank #53 / 150, above average, median 114). TTFT 90.16 s (higher end, median 1.73 s). Cost per task $0.07 (rank #26 / 66).
- Coding: no verified public coding-specific benchmark number surfaced for GPT-6 Luna (Max).
- Long context: AA-LCR v1.1 evaluated; no standalone public figure captured in fetched pages.
- Conflicts: GPT-6 Luna tiering produced multiple intelligence scores across configurations — Max 38, Xhigh 35, High 33, Medium 30 — all proprietary OpenAI configurations scored by Artificial Analysis on the same 1M context / reasoning / multimodal profile.

### Normalized scores (1–100)

- **Tool use: 50/100.** No verified public tool-use benchmark found → conservative mid-band value.
- **Reasoning: 70/100.** Artificial Analysis Intelligence Index 38 → high band (above mid band; methodology frontier ref Index 60+ → 90–100, mid 20–35 → 55–65; 38 sits above mid).
- **Context window: 95/100.** 1M-token context verified (≥1M tier → 95–100; retrieval-at-scale not publicly reported → capped).
- **Multimodal: 65/100.** Text + image input, text output (image-in tier 60–70).
- **Coding: 50/100.** No verified public coding score → conservative mid-band value.
- **Cost efficiency: 97/100.** $0.10 / $0.50 per 1M input/output, cache discount 90%, $0.07 per Intelligence task → ~97 on methodology cost bands.
- **Overall Score: 66/100.** Mean of five quality dims (Cost excluded): (50 + 70 + 95 + 65 + 50) / 5 = **66**.

## Signature

- Provided by: **Flint** — 2026-10-26
- Method: public internet research — official OpenAI GPT-6 Luna model information plus independent Artificial Analysis benchmark pages; scores are normalized 1–100 interpretations, not official vendor scores.

