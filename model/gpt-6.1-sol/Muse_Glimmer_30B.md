# GPT-6.1 Sol — findings by Muse Glimmer 30B

- Source: OpenAI / gpt-6.1-sol
- Date: 2026-10-20
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol
- **Short description:** OpenAI's 1.05M-context 6.1 Sol upgrade replacing Sol for agentic coding at ~1/5 Astra cost; DeepSWE 75.2% leads Astra, cached input $0.10/M.
- **Provider / access:** OpenAI API `gpt-6.1-sol`; ChatGPT Work / Codex, Plus/Pro/Business/Enterprise/Edu.
- **Release / knowledge:** 2026-09-17 announcement; knowledge cutoff not published.
- **IDs:** `opencode/gpt-6.1-sol`
- **Context window:** 1,050,000 total (128K output) — verified in meta.json and OpenAI announcement.
- **Modalities:** Text, image in; text out; reasoning yes; tool calls yes; JSON mode.
- **Pricing (as of 2026-10-20):** $2.00 / 1M input, $10.00 / 1M output, cached input $0.10 / 1M. Batch/Flex 50% below standard, Fast mode 2× standard per meta.json.
- **Architecture:** proprietary.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- GDP.pdf (Surge AI, Max reasoning): 35% — GPT-6.1 Sol (Max reasoning) 35%, GPT-6 Astra 34.2% (surgehq.ai/benchmarks/gdp-pdf)
- sudo L7 (Surge AI, Max): 28.9% — GPT-6.1 Sol (Max) 28.9% (surgehq.ai/benchmarks/sudo-l7)
- Tuesday Work Index (Surge AI, Max composite): 67.6 — GPT-6.1 Sol Max 67.6, GPT-6 Astra Max 74 (surgehq.ai/benchmarks)

Reasoning / knowledge:

- Factuality error rate low effort: 7.7% errors, down from 11.4% on GPT-6 Sol — OpenAI announcing post introducing-gpt-6-1-sol
- No verified public score found for GPQA Diamond / HLE / LCR / MLCR / CritPt.

Coding:

- DeepSWE v1.1 claim: ~matches GPT-6 Astra; meta.json short notes DeepSWE 75.2% leads Astra. DeepSWE public leaderboard shows GPT-6 Astra 74% ±3% (datacurve.ai). OpenAI post states matches Astra at ~1/5 cost and eclipses GPT-6 Sol best by 6.4 pp.
- No independent DeepSWE public entry for gpt-6.1-sol found on 2026-10-20.

Long context:

- no long-context retrieval reported independent of vendor.

### Normalized scores (1–100)

- **Tool use: 55/100.** GDP.pdf 35% and sudo L7 28.9% indicate solid professional document/tool workflows but below frontier leaders; Tuesday Work Index 67.6 supports mid-high tooling capability. Capped by lack of Terminal-Bench / AutomationBench independent numbers.
- **Reasoning: 70/100.** Tuesday Work Index 67.6 composite and factuality error reduction to 7.7% suggest strong mid-tier reasoning; GDP.pdf 35% is below top multimodal reasoning models. No GPQA/HLE numbers verified.
- **Context window: 100/100.** 1.05M total / 128K output meets ≥1M tier with vendor verified spec.
- **Multimodal: 65/100.** Image in / text out confirmed; no video/audio input documented. Image-in tier = 60-70.
- **Coding: 92/100.** DeepSWE parity claim with Astra ~74% and meta note 75.2% places it in frontier coding band; sudo L7 28.9% is modest for agentic coding. Score capped pending independent DeepSWE entry.
- **Cost efficiency: 75/100.** $2/$10 standard with $0.10 cached is ~1/5 Astra pricing; paid tier, not $0. Efficiency high relative to capability class but not free.
- **Overall Score: 76/100.** Mean of Tool 55 + Reasoning 70 + Context 100 + Multimodal 65 + Coding 92 = 76.4 → 76. Near-Astra intelligence for coding/agentic work at a fraction of cost; reasoning and tool use lag flagship.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
