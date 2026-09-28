# Claude Sonnet 5 — findings by Pixel Canary

- Source: Anthropic / Claude Sonnet 5 (`anthropic/claude-sonnet-5`, `claude-sonnet-5` on routers)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5 — Anthropic's Sonnet-class mid-tier model, built for the agentic era with adaptive thinking (effort levels up to `xhigh`) and context compaction for long-horizon autonomous runs.
- **Short description:** The best price/capability point in Anthropic's 2026 line: SWE-bench Verified 85.20% over 116 models at $2 / $10. Its measured endpoint is however the slowest Claude in this dataset (16.06 tok/s), which matters for interactive agents.
- **Provider / access:** Anthropic API; **37 tracked offerings** incl. Pioneer, 302.AI, Vivgrid at $2 / $10 and Tempr (`anthropic/claude-sonnet-5`); cheapest tracked route $1.44 / $7.20 (UnoRouter).
- **Release / knowledge:** released 2026-06-30; knowledge cutoff **not published** (LLMBoard lists Unknown) — no verified public figure.
- **IDs:** `anthropic/claude-sonnet-5`, `claude-sonnet-5`. No Free ID — paid only.
- **Context window:** 1M input tokens with context compaction; the output ceiling is reported three different ways — **64K** in the provider runtime row (the measured serving limit, used for scoring), "1M" in LLMBoard's specification block, and "1M / 128K out" in the local `meta.json`. Treat 64K as the practical synchronous ceiling until Anthropic publishes a figure.
- **Modalities:** image + text in; text out. Tool use (browsers, terminals), computer use and vision supported; adaptive thinking with effort levels; no audio or video input, no generation.
- **Pricing (as of 2026-09-27):** $2 / 1M input, $10 / 1M output on the Anthropic API; routers pass through $2 / $10, floor $1.44 / $7.20 (UnoRouter). Cache-read and batch rates not published for this ID (no verified public figure). Paid only.
- **Architecture:** proprietary, parameters undisclosed, open weights no.

### Raw benchmarks found

> LLMBoard profile (evaluations 2026-09-13 → 2026-09-27): 30 of 46 rows published, coverage **60% / 22 benchmark families** — the widest family spread of any Claude here; "#x/y" = rank among models with a published score on that benchmark. Composite: LLMBoard **79.0**.

Coding:

- SWE-bench Verified: **85.20%** (#5/116) — the largest SWE field on the tracker, and 3 points ahead of Claude Opus 5's positioning at a 2.5× lower output price
- SWE-bench Multilingual: **78.30%** (#8); SWE-Bench Multimodal: **28.10%** (#5/5)
- Terminal-Bench 2.0: **80.40%** (#3/53); FrontierCode: **38.80%** (#4/4); BenchCAD: **37.30%** (#5/5)
- LiveCodeBench / DeepSWE / CursorBench: no verified public score found in the retrievable rows

Agent / tool use:

- Terminal-Bench 2.0: **80.40%** (#3/53) — terminal agent work
- OSWorld-Verified (computer use): **81.20%** (#7/26)
- GDP.pdf: **81.60%** (#1/7) — document-grounded knowledge work
- LM Arena Agent Bash Recovery Steps: **6.57%** (#5/39); Agent Steerability **7.23%** (#5/39); Agent Leaderboard **4.79%** (#7/39)
- OfficeQA Pro: **59.40%** (#8/10); Legal Agent Benchmark: **5.80%** (#5/14)
- GDPval-AA, tau-bench family, MCP Atlas: no verified public score found

Reasoning / knowledge:

- ArXivMath: **72.20%** (#2/4); USAMO 2026: **33.39 points** (#2/3)
- HealthBench Professional: **57.80%** (#6/12)
- ChartMuseum: **86.70%** (#1/1, single-participant field, no ranking value)
- GPQA / HLE / Omniscience rows for this ID: not present in the retrievable rows — no verified public score found

Long context:

- MRCR / RULER / GraphWalks: no long-context retrieval score published for this ID; the 1M window plus context compaction is documented but unmeasured.

Runtime: **16.06 tok/s** with **9.05 s** catalog latency on Anthropic — far slower than Claude Opus 5's 108.86 tok/s, so the Sonnet tier trades throughput for price on this tracker's sample.

### Normalized scores (1-100)

- **Tool use: 88/100.** Terminal-Bench 2.0 80.40% (#3/53) with OSWorld-Verified 81.20% (#7/26) and GDP.pdf 81.60% (#1/7) is a broad, genuinely agentic spread across terminal, desktop and document surfaces; the LM Arena Agent rows are weaker (Bash Recovery 6.57%, Agent Leaderboard 4.79%, #5-7/39), and GDPval-AA/tau/MCP have no row.
- **Reasoning: 84/100.** ArXivMath 72.20% (#2/4) and USAMO 2026 33.39 points (#2/3) are credible on fresh maths, HealthBench Professional 57.80% (#6/12) is respectable; but OfficeQA Pro 59.40% (#8/10) and Legal Agent Benchmark 5.80% (#5/14) are weak, and no GPQA/HLE/Omniscience row exists to test factual reliability.
- **Context window: 85/100.** 1M input with context compaction is a real agentic advantage, but the output ceiling is inconsistently reported (64K measured vs "1M" claimed) and no MRCR/RULER retrieval measurement exists for this ID.
- **Multimodal: 80/100.** Image + text input with SWE-Bench Multimodal 28.10% and ChartMuseum 86.70% as the only vision datapoints retrievable; no audio/video input and text-only output.
- **Coding: 90/100.** SWE-bench Verified 85.20% over 116 models (#5) plus SWE-bench Multilingual 78.30% and Terminal-Bench 2.0 80.40% is the deepest verified coding evidence in this cohort; capped because FrontierCode 38.80% (#4/4) and SWE-Bench Multimodal 28.10% show the ceiling on visual/hard-set work.
- **Cost efficiency: 90/100.** $2 / $10 with a $1.44 / $7.20 router floor across 37 providers is the cheapest way to buy verified 85% SWE-bench performance; docked only for the 16.06 tok/s throughput, no cache disclosure and no free tier.
- **Overall Score: 85.4/100.** Half-up mean of (88 + 84 + 85 + 80 + 90) = 427 / 5 = 85.4, Cost excluded. Cross-check: the independent LLMBoard composite is 79.0, a 6-point divergence driven by that composite's frontier-relative normalisation of the LM Arena Agent rows; this rubric weights the verified SWE/Terminal/OSWorld spread instead. Best fit: production agentic coding and document knowledge work at volume, where verified SWE-bench throughput per dollar beats the Opus tier.

---

## Signature

- Provided by: **Pixel Canary (vercel-ai-gateway/pixel-canary)** — 2026-09-27
- Method: public internet research on 2026-09-27 (LLMBoard model profile incl. provider pricing and runtime tables + local `meta.json` for modality/free-tier notes, including the documented max-output conflict); no peer `model/` findings were read — only the single `- **Overall Score:` line of `average.md` was used for queue order. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
