# GPT-5 — findings by Qwen 3.8 27B

- Source: OpenAI/GPT-5 (`opencode/gpt-5`)
- Date: 2026-09-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5
- **Short description:** OpenAI's August 2025 flagship: a router system pairing a fast model with a deeper reasoning model; set launch records in math and coding, then superseded by GPT-5.1 and later. Not a variant/alias of another entry.
- **Provider / access:** OpenAI API (`gpt-5`, tool calls + reasoning supported); OpenCode Zen `opencode/gpt-5` (paid entry, no Free ID on Zen).
- **Release / knowledge:** Released 2025-08-07 (BenchmarkList; OpenAI launch post "Introducing GPT-5 for developers"). Knowledge cutoff: no verified public figure found in this pass.
- **IDs:** `opencode/gpt-5` (Zen, paid — noFreeId), `gpt-5` (OpenAI)
- **Context window:** 400K total with 128K max output (curated entry; verified against vendor 400K context).
- **Modalities:** text, image, file (PDF) in / text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-09-28):** OpenAI $1.25 in / $10.00 out per 1M (cached $0.125); OpenCode Zen $1.07 / $8.50 per 1M. Paid; no Free ID.
- **Architecture:** Proprietary, API-only (BenchmarkList profile).

### Raw benchmarks found

All raw numbers from BenchmarkList `openai-gpt-5` page (198 benchmarks; ECI 132.07, rank #75/398; released 2025-08-07; $1.25 in / $10 out per 1M), ranks/percentiles as listed there.

Agent / tool use:

- Terminal-Bench 2.0: **37.1%** (rank 43/68, 37th pct); Terminal-Bench 2.1: **35.2%** (rank 93/182, 49th pct)
- Tau3-Banking / Tau2-Bench: Tau3-Banking **22.1%** (rank 47/174); Tau2-Bench Telecom **86.5%** (rank 68/332, 80th pct)
- GDPval-AA: **1,082** (rank 82/340, 76th pct)
- Claw-Eval / ClawProBench: no verified public score found on the page
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: MCP-Bench **0.75** (rank 1/20), MCP-Universe **44.2%** (rank 1/27), MCPMark **52.6%** (rank 9/41); Toolathon not found
- Extras: OSWorld **72.6%** (rank 7/72, 92nd pct), OSWorld-Verified **72.6%** (22/61), AndroidWorld **91.4%** (rank 3/21, 90th pct), DeepResearch Bench **50.6%** (rank 2/12), GAIA (HAL) **62.8%**, METR task-completion horizon **203.01** (rank 10/25)

Reasoning / knowledge:

- GPQA Diamond: **85.6%** (rank 37/117, 69th pct)
- HLE: **28.5%** (rank 69/466, 85th pct)
- LCR / MLCR: no verified public score found; GraphWalks BFS <128k **78.3%** (rank 1/8) and parents <128k **73.3%** (rank 1/8)
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: **35.3** (rank 83/418) / BenchLM index **78** (rank 21/106); ECI **132.07** (#75/398)
- Omniscience / hallucination: Vectara HHEM **85.3%** (rank 76/85); MMLU proxy Global-MMLU-Lite **89.0%**

Coding:

- SWE-bench Verified / SWE-Pro: SWE-bench Verified **69.0%** (Vals, rank 54/72, 25th pct); SWE-bench Full **44.3%** (rank 2/9); SWE-Pro not found
- LiveCodeBench: **85.9%** (rank 20/123, 84th pct)
- SciCode / AA-SciCode: SciCode **42.9%** (rank 78/458, 83rd pct)
- Vibe Code Bench: **20.1%** (v1.1, rank 43/71, 40th pct)
- DeepSWE / Coding Index / other: Aider Polyglot **88.0%** (rank 1/47), PerfCodeBench **74.0%** (rank 1/23), Arena WebDev **1418.62** (rank 56/105)

Long context:

- 400K context per curated entry; no MRCR/RULER at 400K found; GraphWalks values at <128k (78.3% / 73.3%, rank 1/8).

Multimodal:

- Image + file (PDF) in / text out; OmniGAIA (omni-modal agent) **72.8%** (rank 1/12); no verified video-in benchmark found for this exact model.

### Normalized scores (1–100)

- **Tool use: 68/100.** Web/MCP agent work is elite (MCP-Bench 0.75 #1, OSWorld 72.6%, AndroidWorld 91.4%, Tau2 Telecom 86.5%, GDPval 1,082 mid-band) but terminal-agent scores are weak (TB2.1 35.2%, TB2.0 37.1%, both below the 45–60% mid band) and Tau3-Banking 22.1% caps it.
- **Reasoning: 72/100.** GPQA Diamond 85.6% is near-frontier and the AA Index (35.3) just clears the mid 20–35 band, but HLE 28.5% is well under the 40% frontier mark; strong generalist, not a reasoning extreme.
- **Context window: 78/100.** 400K total (200K–500K band → 65–84) with 128K max output; upper half of the band, no verified ≥500K retrieval evidence to push it higher.
- **Multimodal: 78/100.** Image + file/PDF in, text out (file-in lands in the 75–90 band); OmniGAIA 72.8% supports solid grounded use; no verified video-in work.
- **Coding: 75/100.** LiveCodeBench 85.9% and Aider 88.0% are strong, but SWE-bench Verified 69.0% (25th pct of field), Vibe Code 20.1%, and SciCode 42.9% keep it in the 65–75 mid tier with slight upside.
- **Cost efficiency: 55/100.** $1.25/$10 per 1M (Zen $1.07/$8.50) is far above the $1.25/$4.25 (≈88) and $3/$15 (≈60) reference points on output; expensive flagship.
- **Overall Score: 74/100.** Mean of 68/72/78/78/75 = 74.2 → 74 (half-up); best fit: premium all-rounder for multimodal knowledge-work and web agents, not the cheapest terminal/coding option.

---

## Signature

- Provided by: **Qwen 3.8 27B (openrouter/qwen/qwen3.8-27b:free)** — 2026-09-28
- Method: public internet research (BenchmarkList model page, curated folder metadata); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
