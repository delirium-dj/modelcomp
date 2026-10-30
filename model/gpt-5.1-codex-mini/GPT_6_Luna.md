# GPT-5.1 Codex Mini — findings by GPT-6 Luna

- Source: OpenAI / GPT-5.1 Codex Mini, `openai/gpt-5.1-codex-mini`
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1 Codex Mini
- **Short description:** OpenAI's Nov 2025 cheapest Codex tier (400K/128K, $0.25/$2.00): SWE-Bench Pro 49.0%, Terminal-Bench 2.0 46.1% - removed from Codex 2026-04, deprecated on Zen 2026-07.
- **Provider / access:** OpenAI API `gpt-5.1-codex-mini` (Codex, API); Azure.
- **Release / knowledge:** Released 2025-11-13; knowledge cutoff 2025-04-01 (approx).
- **IDs:** `opencode/gpt-5.1-codex-mini` (the exact tracked route; alternate hosts are listed in the provider line).
- **Context window:** 400,000 total; 128,000 max out
- **Modalities:** Text, image in; text out; reasoning/tool support as documented in the raw model card.
- **Pricing (as of 2026-10-30):** $0.25/$2.00 per 1M in/out, $0.025 cached (native and Zen identical)
- **Architecture:** Proprietary; params undisclosed.

### Raw benchmarks found

Coding:
- SWE-bench Pro: **49.0%** (curated current route metadata)
- Terminal-Bench 2.0: **46.1%** (curated current route metadata)
- Vibe Code Bench: **22.2%** (curated current route metadata)

Reasoning / knowledge:
- GPQA Diamond: **82.0%** (approx)

### Normalized scores (1–100)

- **Tool use: 60/100.** Terminal-Bench 2.0 46.1% and no published Toolathlon cap general tool use.
- **Reasoning: 76/100.** GPQA ~82%; caps at no HLE.
- **Context window: 76/100.** 400K window; caps at no published retrieval benchmark.
- **Multimodal: 72/100.** Text/image in; caps at no published MMMU.
- **Coding: 62/100.** SWE-bench Pro 49.0%, Terminal-Bench 2.0 46.1% and Vibe Code Bench 22.2% cap coding.
- **Cost efficiency: 88/100.** Cheap $0.25/$2.
- **Overall Score: 69.2/100.** Half-up mean of the five non-cost quality dimensions: (60 + 76 + 76 + 72 + 62) / 5 = 69.2. Cost efficiency is excluded. Best fit is budget coding assistance, not a frontier Codex orchestrator.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-30 UTC
- Method: Public web research using the official model card/API documentation and the independent benchmark pages retained in the research extract; conflicting harnesses and inherited variant results are labelled in the raw section. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Source 1](https://developers.openai.com/api/docs/models/gpt-5.1-codex-mini)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
