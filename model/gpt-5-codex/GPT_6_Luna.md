# GPT-5 Codex — findings by GPT-6 Luna

- Source: OpenAI / GPT-5 Codex, `openai/gpt-5-codex`
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5 Codex
- **Short description:** OpenAI's Sep 2025 coding-specialist GPT-5 (400K/128K, $1.25/$10): SWE-bench Verified 74.5%, code-refactor 51.3%, 93.7% fewer tokens - removed from Codex 2026-04.
- **Provider / access:** OpenAI API `gpt-5-codex` (ChatGPT, API, Codex); Azure; Microsoft Foundry.
- **Release / knowledge:** Released 2025-09-15; knowledge cutoff (GPT-5 base) 2025-04-01 (approx).
- **IDs:** `opencode/gpt-5-codex` (the exact tracked route; alternate hosts are listed in the provider line).
- **Context window:** 400,000 total; 128,000 max out
- **Modalities:** Text, image in; text out; reasoning/tool support as documented in the raw model card.
- **Pricing (as of 2026-10-30):** $1.25/$10.00 per 1M native ($0.125 cached); OpenCode Zen $1.07/$8.50
- **Architecture:** Proprietary; params undisclosed.

### Raw benchmarks found

Coding:
- SWE-bench Verified: **74.5%** (OpenAI-reported)
- Terminal-Bench 2.0: **64.0%** (estimated)
- LiveCodeBench: not individually published.

Reasoning / knowledge:
- GPQA Diamond: **85.0%** (GPT-5 base, approx)
- HLE: not published for Codex variant.

Long context:
- 400K window; MRCR not published for Codex variant.

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal-Bench 64%, SWE-bench 74.5%; caps at no published Toolathlon.
- **Reasoning: 80/100.** GPQA ~85%; caps at no HLE.
- **Context window: 76/100.** 400K window; caps at no published retrieval benchmark.
- **Multimodal: 74/100.** Text/image in; caps at no published MMMU.
- **Coding: 80/100.** SWE-bench Verified 74.5%, Terminal-Bench 64%.
- **Cost efficiency: 70/100.** Paid $1.25/$10.
- **Overall Score: 78/100.** Half-up mean of the five non-cost quality dimensions: (78 + 80 + 76 + 74 + 80) / 5 = 77.6, rounded to 78. Cost efficiency is excluded. Best fit is historical coding-agent work; the first-party route is no longer available.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-30 UTC
- Method: Public web research using the official model card/API documentation and the independent benchmark pages retained in the research extract; conflicting harnesses and inherited variant results are labelled in the raw section. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Source 1](https://openai.com/index/introducing-upgrades-to-codex/)
  - [Source 2](https://developers.openai.com/api/docs/models/gpt-5-codex)
  - [Source 3](https://opencode.ai/docs/zen)
  - [Source 4](https://artificialanalysis.ai/models/gpt-5-codex)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
