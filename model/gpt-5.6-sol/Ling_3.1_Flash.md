# GPT 5.6 Sol — findings by Ling 3.1 Flash

- Source: OpenAI (`openai/gpt-5.6-sol`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.6 Sol
- **Short description:** OpenAI's GPT-5.6 flagship tier (launched 2026-07-09) — the `gpt-5.6` alias routes here; new state of the art on the AA Coding Agent Index (80) and Terminal-Bench 2.1 at launch, at roughly one-third of Claude Fable 5's cost per task.
- **Provider / access:** OpenAI API (`gpt-5.6-sol`), Azure, AWS Bedrock; ChatGPT Plus/Pro/Business/Enterprise. Reasoning effort none/low/medium (default)/high/xhigh/max.
- **Release / knowledge:** 2026-07-09; price cut 2026-08-21 (promotional pricing runs at least through 2026-11-21); knowledge cutoff not stated in the launch materials reviewed.
- **IDs:** `openai/gpt-5.6-sol`. No Free ID on OpenCode Zen (`noFreeId`).
- **Context window:** 1M tokens total; 128,000 max output (extended-context pricing applies above 272K input).
- **Modalities:** text and image in; text out; tool calls, structured outputs, code execution.
- **Pricing (as of 2026-10-02):** promotional $4/$20 per 1M input/output (through at least 2026-11-21); list $5/$30; cache reads 90% off ($0.40/M), cache writes 1.25x uncached input; site meta.json lists a Zen price of $1.25/$10 per 1M.
- **Architecture:** proprietary MoE (OpenAI); parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (vendor, max effort, launch table); **91.9%** (launch post, best-reported-harness, rank 1/1 on BenchmarkList); 89.5% (BenchmarkList best-reported-harness, xhigh/max); 87.4% (Artificial Analysis run)
- Artificial Analysis Coding Agent Index v1.1: **80** (Codex harness, max — new SOTA at launch, +2.8 over Fable 5's 77.2; leads DeepSWE, Terminal-Bench v2, and SWE-Atlas-QnA within the index)
- MCP Atlas: **83.6%** (BenchmarkList); Toolathlon: **79.3%** (rank 1/1, small field)
- AutomationBench: **79.8%** (rank 1/1, small field); AutomationBench-AA: **51.2%**
- GDPval-AA: **1748** (rank 2/2); AA-Briefcase: **1502**
- τ³-Banking: **44.3%** (rank 12/174)
- BrowseComp: **92.2%** (rank 1/44)
- Agents' Last Exam: **27.6%** (rank 1/8, one board) / **53.6%** (rank 3/32, another board version)
- Terminal-Bench 3.0: **34.6%** (self-reported, 2026-08-14); Terminal-Bench 4.0: **37.3%**; Terminal-Bench-Science: **22.4%**
- ClawEval-MM: **81.2%**; WildClawBench: **67.2%**
- Claw-Eval / ClawProBench: no verified public score found under those exact names

Reasoning / knowledge:

- GPQA Diamond: **95.2%** (Artificial Analysis, rank 2/117; vendor 94.6%)
- Humanity's Last Exam (no tools): **49.5%** (BenchmarkList); with tools: **64.5%**; HLE-Verified (1,811 items): **54.5%** (rank 2/6)
- AA Intelligence Index: **59** (AA launch article, max — 1 point below Fable 5's 60); BenchmarkList reads 61 (rank 5/418)
- FrontierMath (v2): Tiers 1–3 **89%**, Tier 4 **83%** (vendor)
- ARC-AGI-2: **92.5%** verified (rank 3/99); ARC-AGI-1: 97.5%; ARC-AGI-3: 29.3%
- MMLU-Pro: **89.1%**; MMMU-Pro: **88.8%**; SimpleQA: **71.6%**
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **96.2%** (BenchmarkList, max effort, std. error 0.86, rank 2/72; field leader Opus 5 at 97.0)
- SWE-bench Pro: **64.6%** (vendor, max; vs Mythos 5 80.3%, Fable 5 80.0%)
- DeepSWE v1.1: **72.7%** (vendor, max) / **73.0%** (BenchmarkList, rank 1/24)
- LiveCodeBench: **82.6%**; SciCode: **56.9%**; Vibe Code Bench v1.1: **80.5%**
- ProgramBench: **77.6%** raw pass rate; Code Migration: **52.9%**; FrontierCode: **60.6%**
- CursorBench 3.1/3.2: **67.2%**; SWE Atlas Codebase QnA: **53.5%**; SWE Atlas Test Writing: **45.9%**
- SWE-Marathon: **35.9%**; SkillsBench: **73.5%**

Long context:

- 1M-token window; no MRCR / RULER / GraphWalks retrieval score published

Multimodal:

- Vals Multimodal Index: **72.2%**; ScreenSpot-Pro: **76.9%** (GUI grounding)

### Normalized scores (1–100)

- **Tool use: 92/100.** Terminal-Bench 2.1 88.8–91.9% across harnesses (rank 1) clears the frontier bar, with MCP Atlas 83.6%, Toolathlon 79.3% and GDPval-AA 1748 (just under the 1750 frontier ref); τ³-Banking 44.3% and the divergent Agents' Last Exam rows cap it.
- **Reasoning: 93/100.** GPQA 95.2% (AA), HLE 49.5% no-tools / 64.5% with tools, FrontierMath T4 83% and ARC-AGI-2 92.5% all clear the frontier references; the AA Intelligence Index of 59–61 (borderline against the 60+ bar) caps it below 95.
- **Context window: 95/100.** 1M tokens / 128K out; no ≥98% retrieval-at-512K+ figure published, so 100 is not justified.
- **Multimodal: 65/100.** text + image in, text out — the +image-in band (Vals Multimodal Index 72.2% corroborates solid vision).
- **Coding: 93/100.** AA Coding Agent Index 80 (SOTA), SWE-bench Verified 96.2%, DeepSWE 72.7–73.0% and LiveCodeBench 82.6% are top-of-set; DeepSWE sits just under the 74% frontier reference and SWE-bench Pro 64.6% trails Mythos 5/Fable 5.
- **Cost efficiency: 56/100.** verified public promotional pricing $4/$20 per 1M (~56 tier; list $5/$30 would be ~51); cache reads at 90% off help long agent loops. Note: site meta.json lists $1.25/$10 per 1M — if that Zen rate is the evaluated tier, cost efficiency would score ~88 instead.
- **Overall Score: 88/100.** (92+93+95+65+93)/5 = 87.6 → 88 — the efficiency frontier flagship: SOTA coding-agent index and Terminal-Bench 2.1 at roughly one-third of Fable 5's cost per task.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02
- Method: public internet research (OpenAI GPT-5.6 launch page and API docs, Artificial Analysis, BenchmarkList, ARMES docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
