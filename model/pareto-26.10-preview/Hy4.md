- Source: Unbiased AI/Pareto 26.10 Preview
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pareto 26.10 Preview
- **Short description:** Unbiased AI's 2026-10-01 preview of Pareto 26.10 — a **multimodal composite / multi-model ensemble** (several constituent models per request with a synthesis layer), not a single checkpoint. A distinct tracked model; per the project identity roster `union-alpha` is the Pareto 26.9 composite record and `model/pareto-26.9/` / `model/unbiased-pareto/` must never be scaffolded. The GA release (2026-10-15) kept the same four benchmark scores, 1M window and architecture — a commercial relabel, not a model swap.
- **Provider / access:** `unbiased/pareto-26.10-preview-20260929` via Unbiased AI (single provider; OpenRouter does not route this slug); tool calling supported.
- **Release / knowledge:** preview 2026-10-01 (GA 2026-10-15); knowledge cutoff: no verified public score found.
- **IDs:** `unbiased/pareto-26.10-preview-20260929`. No free Zen ID verified.
- **Context window:** **1,048,576 tokens (1M)**; **131,072 tokens** max output.
- **Modalities:** text and image in, text out; research, coding and agentic workflows; tool calling. No verified audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** **$0.80 / 1M input, $3.20 / 1M output, ~$0.03 / 1M cached input**; vendor-reported per-task economics ~$0.24 (DeepSWE), ~$0.48 (Terminal-Bench 4.0), ~$0.008 (HLE text-only), ~$0.004 (GPQA Diamond).
- **Architecture:** Composite multi-model ensemble with a synthesis layer — explicitly NOT a sparse MoE transformer. Component-model roster, weighting, router policy and active-parameter count are not published; a third-party rumour cites 26.1B parameters (low-confidence, not used as evidence). ~40–70 tok/s effective with elevated TTFT from multi-model synthesis.

### Raw benchmarks found

Vendor-published, explicitly **preliminary vendor-run** scores dated 2026-10-01 (reproduced by third-party aggregators; no independent evaluator runs found):

Reasoning / knowledge:

- GPQA Diamond: **92.4%**
- HLE (no tools, text-only): **49.9%**
- AA Intelligence Index: no verified public score found
- LCR / CritPt / Omniscience: no verified public score found

Agent / tool use:

- Benchable independent harness: Reasoning **98.0%** (87th pct), Mathematics **92.0%** (54th pct), Coding **92.0%** (66th pct), Instruction Following **83.0%** (87th pct), with a **100% benchmark success rate** across evaluated tasks (reliability) — labelled third-party
- Gauntlet 7.2 agentic-coding board (October 2026, third-party): **0.7957**, rank 6; Forge 2.0 median — labelled third-party
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Coding:

- Terminal-Bench 4.0: **50.8%**
- DeepSWE v1.1: **69.9%**
- SWE-bench Verified/Pro / LiveCodeBench / SciCode / Vibe Code Bench / FrontierSWE: no verified public score found

Long context:

- 1M window / 128K output; no MRCR / RULER / GraphWalks figure found — no verified public score found. No published scores on AIME 2026, ARC-AGI-2, FrontierMath, BrowseComp, OSWorld or TAU suites.

### Normalized scores (1–100)

- **Tool use: 88/100.** 100% benchmark reliability, 98.0% reasoning / 83.0% instruction-following on an independent harness, a #6 Gauntlet 7.2 agentic-coding rank and native tool calling; capped by the composite's opaque routing and elevated TTFT.
- **Reasoning: 92/100.** GPQA Diamond 92.4% and HLE (no tools) 49.9%, plus 98.0% on Benchable's reasoning harness; capped by those GPQA/HLE numbers being preliminary vendor-run with no independent replication.
- **Context window: 94/100.** 1,048,576-token window with a 131,072-token max output at $0.80/$3.20; capped by no long-context retrieval benchmark.
- **Multimodal: 84/100.** Image input stated for the composite; capped by text-only output, no verified audio/video input, and no published multimodal benchmark score.
- **Coding: 90/100.** Terminal-Bench 4.0 50.8%, DeepSWE v1.1 69.9% and a #6 Gauntlet rank; capped by all four flagship scores being vendor-run and no SWE-bench figure.
- **Cost efficiency: 92/100.** $0.80/$3.20 per 1M with ~$0.03 cache reads and low per-task costs for near-frontier scores; capped by multi-model synthesis inflating effective latency/token accounting. Excluded from Overall.
- **Overall Score: 90/100.** Half-up mean of 88, 92, 94, 84, 90 = 89.6 → 90. Best fit: research/coding agent workflows wanting near-frontier breadth at a fraction of flagship cost, where an opaque composite router is acceptable.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: third-party model catalogues and evaluation pages retrieved via public web search excerpts (Benchable for the independent four-category harness and reliability; ARMES for the vendor model card's four preliminary scores, specs and composite architecture; Model Beat for pricing/context; a third-party Gauntlet/Forge agentic-coding board). The four flagship scores are explicitly labelled **preliminary vendor-run** with no independent replication found; the Benchable and Gauntlet rows are labelled third-party. Identity handling follows the project's generated roster: `union-alpha` is the Pareto 26.9 composite record, `model/pareto-26.9/` and `model/unbiased-pareto/` are never scaffolded, and Pareto 26.10 (GA) is a separate successor with the same scores. A rumoured 26.1B parameter count is not used as evidence. Rows without verified figures are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [Pareto 26.10 Preview — Benchable (four-category harness, pricing, reliability)](https://benchable.ai/models/unbiased/pareto-26.10-preview-20260929)
  - [Pareto 26.10 — ARMES (vendor model card, four preliminary scores, composite architecture)](https://armes.ai/docs/models/unbiased/pareto-26.10)
  - [Pareto 26.10 Preview — Model Beat (pricing, context, modalities)](https://themodelbeat.com/models/pareto-26-10-preview)
