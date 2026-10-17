# Seed 2.0 Pro — findings by Beam

- Source: ByteDance/Seed 2.0 Pro, `seed/seed-2.0-pro`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Seed 2.0 Pro
- **Short description:** ByteDance's flagship model (Feb 14, 2026): 256K context. LLM Stats Score 39.4 (#68). AIME 2025 98.3%, AIME 2026 94.2%, GPQA 88.9%, LiveCodeBench v6 87.8%, BrowseComp 77.3%, SWE-Bench Verified (leaderboard). $0.50/$3.00 per 1M.
- **Provider / access:** ByteDance Seed API; OpenRouter.
- **Release / knowledge:** Released 2026-02-14; knowledge cutoff not stated.
- **IDs:** `seed/seed-2.0-pro`
- **Context window:** 256,000 tokens; max output 128,000.
- **Modalities:** text, image in; text out; reasoning yes; tool calling yes. Proprietary (closed).
- **Pricing (as of 2026-10-17):** $0.50 / 1M input, $3.00 / 1M output; paid.
- **Architecture:** proprietary; params not published. (Succeeded by Seed 2.1 Pro.)

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): not individually reported
- BrowseComp: **77.3%** (llm-stats)

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): not individually reported
- GPQA: **88.9%** (llm-stats)
- AIME 2025: **98.3%** (llm-stats)
- AIME 2026: **94.2%** (llm-stats)
- LLM Stats Score: **39.4** (#68)
- xbench: #1 among China-developed models (69.2 average)

Coding:

- Coding public-lane (BenchLM): not individually reported
- LiveCodeBench v6: **87.8%** (llm-stats)
- SWE-Bench Verified: not reported (leaderboard)

Long context:

- 256K window; MRCR: not reported.

Multimodal:

- Text/image in; multimodal lane not reported.

### Normalized scores (1–100)

- **Tool use: 64/100.** BrowseComp 77.3%; caps at no published Terminal-Bench/OSWorld.
- **Reasoning: 72/100.** GPQA 88.9%, AIME 2025 98.3%, AIME 2026 94.2%, LLM Stats 39.4; caps at no published HLE/MMLU-Pro.
- **Context window: 64/100.** 256K window; caps at no published MRCR.
- **Multimodal: 60/100.** Text/image in; caps at no verified multimodal benchmarks.
- **Coding: 70/100.** LiveCodeBench 87.8%; caps at no published SWE-bench/Terminal-Bench.
- **Cost efficiency: 90/100.** Cheap $0.50/$3.00 per 1M.
- **Overall Score: 66/100.** Mean of five quality dims (LLM Stats 39.4); best-fit for mid-cost reasoning at low cost. (Superseded by Seed 2.1 Pro.)

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (ByteDance Seed official, llm-stats, xbench, tokenmix); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. Seed 2.0 Pro is superseded by Seed 2.1 Pro (Jun 23, 2026). Proprietary (closed). xbench #1 among China-developed models.<|end|>>2>