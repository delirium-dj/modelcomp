# Claude Haiku 4.5 — findings by Beam

- Source: Anthropic/Claude Haiku 4.5, `anthropic/claude-haiku-4.5`
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 4.5
- **Short description:** Anthropic's fast small model (Oct 15, 2025): 200K context, 64K output. SWE-bench Verified 73.3%. BenchLM 41.15 (#133 of 954). Superseded by Haiku 5.5.
- **Provider / access:** Anthropic API `claude-haiku-4-5`; AWS Bedrock; OpenRouter.
- **Release / knowledge:** Released 2025-10-15; knowledge cutoff July 2025 (Artificial Analysis).
- **IDs:** `anthropic/claude-haiku-4-5`
- **Context window:** 200,000 tokens; max output 64,000.
- **Modalities:** text, image, PDF in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-10-22):** $1.00 / 1M input, $5.00 / 1M output; paid.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **21.4** (Supported · #107/128)
- JobBench: **16.0%** (JobBench paper)
- Terminal-Bench 2.1 (Vals): **43.8%** (Vals AI)
- Terminal-Bench 2.1: **45.6%** estimated (benchgap)
- AA Terminal-Bench 2.1: **61.4%** estimated (benchgap)
- Terminal-Bench 2.0: **53.4%** estimated (benchgap)
- MazeBench: **0%** (MazeBench AI leaderboard)
- OSWorld-Verified: **60.8%** estimated (benchgap)
- GDPval-AA: **24.5%** estimated (benchgap)
- BrowseComp: **64.5%** estimated (benchgap)
- DeepSearchQA: **74.9%** estimated (benchgap)
- MCP Atlas: **76.0%** estimated (benchgap)
- τ²-bench: not reported
- AA Agentic Index: not reported

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): not individually reported
- GPQA Diamond (Vals): **72.2%** (Vals AI)
- GPQA Diamond: **79.9%** estimated (benchgap)
- GPQA: **82.9%** estimated (benchgap)
- MMLU-Pro (Vals): **78.7%** (Vals AI)
- MMLU-Pro: not separately published
- ARC-AGI-1: **50.8%** estimated (benchgap)
- ARC-AGI-2: **0.0%** estimated (benchgap)
- HLE: **26.1%** estimated (benchgap)
- HLE w/ tools: **52.7%** estimated (benchgap)
- AA-HLE: **15.6%** estimated (benchgap)
- AA Intelligence Index: **15** (Artificial Analysis, estimated; #29/56 non-reasoning)
- AA Omniscience Accuracy: **22.2%** estimated (benchgap)
- AA-LCR: not reported
- CritPt: **2.6%** estimated (benchgap)

Coding:

- Coding public-lane (BenchLM): **16.8** (Supported · #126/150)
- SWE-bench Verified: **73.3%** (Anthropic)
- SWE-bench (Vals): **66.6%** (Vals AI)
- LiveCodeBench (Vals): **41.2%** (Vals AI)
- LiveCodeBench: **75.1%** estimated (benchgap)
- VulcanBench v3: **76.2%** (VulcanBench v3 July 2026)
- SWE-bench Pro: **39.45%** (Scale Labs); **50.9%** estimated (benchgap)
- SWE-bench Multimodal: **8.0%** estimated (benchgap)
- DeepSWE: **56.3%** estimated (benchgap)
- AA-SciCode: **45.3%** estimated (benchgap)
- AA Coding Index: **46.4%** estimated (benchgap)
- FrontierCode 1.1 (Main): **7.6%** estimated (benchgap)
- FrontierSWE v2: **5.5%** estimated (benchgap)

Long context:

- 200K window; MRCR: not reported.

Multimodal:

- Multimodal lane not reported; text/image/PDF in.
- AA-MMMU-Pro: **62.9%** estimated (benchgap)
- MMMU-Pro: **67.0%** estimated (benchgap)
- CharXiv: **76.3%** estimated (benchgap)

### Normalized scores (1–100)

- **Tool use: 56/100.** Agentic lane #107/128 (21.4), Terminal-Bench 2.1 43.8%, JobBench 16.0%, MazeBench 0%, GDPval-AA ~24.5% estimated; caps at MazeBench 0%.
- **Reasoning: 64/100.** GPQA 72.2%, MMLU-Pro 78.7%, HLE ~26% estimated; caps at no published verified HLE/ARC-AGI.
- **Context window: 62/100.** 200K window; caps at no published MRCR.
- **Multimodal: 68/100.** Text/image/PDF in; caps at no verified multimodal benchmarks.
- **Coding: 64/100.** SWE-bench 73.3%, VulcanBench 76.2%, LiveCodeBench 41.2%, SWE-bench Pro ~39-51%; caps at LiveCodeBench 41.2%.
- **Cost efficiency: 90/100.** $1/$5 per 1M.
- **Overall Score: 62.8/100.** Mean of five quality dims (BenchLM 41.15); best-fit for cheap agentic + coding at low cost (superseded by Haiku 5.5).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-22
- Method: public internet research (Anthropic announcement, Artificial Analysis, BenchLM, Vals AI, benchgap); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.