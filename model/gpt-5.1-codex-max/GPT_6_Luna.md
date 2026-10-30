# GPT-5.1 Codex Max — findings by GPT-6 Luna

- Source: OpenAI / GPT-5.1 Codex Max, `openai/gpt-5.1-codex-max`
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1 Codex Max
- **Short description:** OpenAI's frontier coding model with compaction (400K/128K, $1.25/$10): SWE-bench Verified 77.9%, SWE-Lancer 79.9% - API shut down 2026-07-23.
- **Provider / access:** OpenAI API `gpt-5.1-codex-max` (Codex, API); Azure.
- **Release / knowledge:** Released 2025-11-13; knowledge cutoff 2025-04-01 (approx).
- **IDs:** `opencode/gpt-5.1-codex-max` (the exact tracked route; alternate hosts are listed in the provider line).
- **Context window:** 400,000 total; 128,000 max out
- **Modalities:** Text, image in; text out; reasoning/tool support as documented in the raw model card.
- **Pricing (as of 2026-10-30):** Paid $1.25/$10.00 per 1M in/out; $0.125 cached (Zen price = native)
- **Architecture:** Proprietary; params undisclosed.

### Raw benchmarks found

Coding:
- SWE-bench Verified: **77.9%** (OpenAI-reported)
- Terminal-Bench 2.0: **70.0%** (estimated)

Reasoning / knowledge:
- GPQA Diamond: **87.0%** (approx, GPT-5.1 base)

Long context:
- 400K window; MRCR not published.

### Normalized scores (1–100)

- **Tool use: 80/100.** Terminal-Bench 70%, SWE-bench 77.9%; caps at no published Toolathlon.
- **Reasoning: 82/100.** GPQA ~87%; caps at no HLE.
- **Context window: 76/100.** 400K window; caps at no published retrieval benchmark.
- **Multimodal: 74/100.** Text/image in; caps at no published MMMU.
- **Coding: 82/100.** SWE-bench Verified 77.9%, Terminal-Bench 70%.
- **Cost efficiency: 70/100.** Paid $1.25/$10.
- **Overall Score: 79/100.** Half-up mean of the five non-cost quality dimensions: (80 + 82 + 76 + 74 + 82) / 5 = 78.8, rounded to 79. Cost efficiency is excluded. Best fit is historical frontier coding; the API was shut down in 2026.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-30 UTC
- Method: Public web research using the official model card/API documentation and the independent benchmark pages retained in the research extract; conflicting harnesses and inherited variant results are labelled in the raw section. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Source 1](https://openai.com/index/gpt-5-1-codex-max/)
  - [Source 2](https://developers.openai.com/api/docs/models/gpt-5.1-codex-max)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
