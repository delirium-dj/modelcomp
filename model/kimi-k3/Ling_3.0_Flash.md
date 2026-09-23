# Kimi K3 — findings by Ling 3.0 Flash

- Source: Moonshot AI (`moonshotai/kimi-k3`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's 2.8T-parameter multimodal MoE flagship with 1M input and output context; strong document reasoning, math, and terminal-agent coding; open weights with premium pricing.
- **Provider / access:** Moonshot AI API, OpenRouter, various providers. API. No Zen Free ID; paid pricing. Open weights available (availability pending per BenchLM).
- **Release / knowledge:** July 16, 2026 release. Knowledge cutoff not explicitly stated.
- **IDs:** `moonshotai/kimi-k3` (Moonshot AI API)
- **Context window:** 1,048,576 (1M) input / 1M output
- **Modalities:** Text, image, document in; text out; reasoning enabled; tool calls
- **Pricing (as of 2026-09-23):** Paid only — $3.00/1M input, $15.00/1M output ($0.30 cached) (no Zen Free ID)
- **Architecture:** Proprietary/Open-weight, 2.8T-parameter MoE; Moonshot AI's flagship model

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **88.3%** (BenchLM)
- Terminal-Bench 2.1 (Best Reported Harness): **88.3%** (BenchmarkList, rank 2/27)
- Terminal-Bench 2.1 (temperature2): **85.0%** (temperature2 max)
- Terminal-Bench 3.0: not directly found
- Terminal-Bench Science 0.1: not directly found

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (temperature2 max) / **84.2%** (temperature2 low)
- HLE: **56%** (BenchLM) / **46.9%** (temperature2 max)
- LongContext Reasoning: **88.7%** (temperature2 max) / **79.3%** (temperature2 low)
- BrowseComp: **91.2%** (BenchLM)
- MathVision: **97.8%** (llm-stats)
- DeepSearchQA: **95.0%** (llm-stats)
- CharXiv-R: **91.3%** (llm-stats)
- Intelligence Index (AA): **50.2** (temperature2 max)

Coding:

- SWE-bench Verified: **93.4%** (BenchmarkList, rank 4/72) / **92%** (vals.ai)
- LiveCodeBench: **86.8%** (pricepertoken)
- FrontierSWE: **81.2%** (llm-stats, rank 2/16)
- DeepSWE 1.1: **67.5%** (BenchLM)
- Coding Index (AA): **76.2** (temperature2 max)
- ProgramBench: **77.8%** (BenchLM)
- E-Bench-Code (Tencent): **77.6**
- CursorBench 3.2: **60.8%**
- Convex Coding: **65.8%**
- Hy-SWE Max Verified: **65.6%**
- SciCode: **59.5%** (temperature2 max)

Multimodal:

- Text, image, document in; text out
- MMMU-Pro: **81.6%** (BenchLM)
- OfficeQA Pro: **63.3%** (BenchLM)
- MathVision: **97.8%** (llm-stats)

Long context:

- 1M input / 1M output context window
- LongContext Reasoning: 88.7% (temperature2 max)

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 2.0 at 88.3% and TB2.1 at 88.3% (rank 2/27) are strong; strong on terminal-based coding and agentic tasks.
- **Reasoning: 90/100.** GPQA Diamond at 93.5% is exceptional; BrowseComp at 91.2%, MathVision at 97.8%, LongContext Reasoning at 88.7% show elite reasoning; HLE at 56% is strong. Intelligence Index of 50.2 (AA) confirms frontier-level reasoning.
- **Context window: 97/100.** 1M input and 1M output context window; LongContext Reasoning at 88.7% confirms strong long-context capability; among the largest context windows available.
- **Multimodal: 78/100.** Text, image, and document input supported; text output; MMMU-Pro at 81.6%; OfficeQA Pro at 63.3%; MathVision at 97.8%. Strong document and multimodal reasoning but narrower than audio/video models.
- **Coding: 89/100.** SWE-bench Verified at 93.4% (rank 4/72); LiveCodeBench at 86.8%; FrontierSWE at 81.2% (rank 2/16); Coding Index 76.2; DeepSWE 67.5%. Strong coding and agentic coding capability.
- **Cost efficiency: 50/100.** No Zen Free ID; paid-only pricing at $3.00/$15.00 per 1M. Moderately priced among frontier models.
- **Overall Score: 88/100.** Mean of the five non-cost dimensions (88 + 90 + 97 + 78 + 89) / 5 = 88.4, rounded half-up to 88. Moonshot AI's 2.8T MoE flagship with exceptional GPQA Diamond (93.5%), 1M bidirectional context, strong FrontierSWE (81.2%) and SWE-bench Verified (93.4%), and open-weight availability at premium pricing.

---

## Signature

- Provided by: **Ling 3.0 Flash (inclusionai/ling-3-0-flash-fin-free)** — 2026-09-23
- Method: Public internet research via BenchLM, temperature2, BenchmarkList, llm-stats.com, Vals.ai, and pricepertoken.com; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.

---

## Submission checklist (delete before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/kimi-k3/Ling_3.0_Flash.md` (folder name = filesystem-safe slug, see `model/README.md`).
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/kimi-k3/`.
4. No raw benchmark invented — "no verified public score found" used where missing.
5. Zero verified benchmarks for this model -> file saved as `Ling_3.0_Flash.md.excluded`, not `.md` (see SELF-EXCLUSION above).
