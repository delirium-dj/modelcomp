# Claude Opus 5 — findings by Pixel Canary

- Source: Anthropic / Claude Opus 5 (`anthropic/claude-opus-5`, `claude-opus-5` on routers)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5 — Anthropic's general-access flagship for agentic coding, knowledge work, scientific research, computer use and problem-solving.
- **Short description:** The Opus 5 generation that still tops the LM Arena Document leaderboard and holds #1 LM Arena Agent Bash Recovery: strong, and now the second-fastest measured endpoint in this cohort at 108.86 tok/s. Distinct from Claude Opus 5.5 (tracker leader at 100.0) and from Claude Fable 5.1 (94.26).
- **Provider / access:** Anthropic API; **35 tracked offerings** incl. Pioneer, Abacus, 302.AI, Vivgrid at $5 / $25, Tempr (`anthropic/claude-opus-5`) at $5 / $25, Cortecs at $5.50 / $27.50. Cheapest tracked route is $5 / $25 (OrcaRouter) — effectively a price-fixed market.
- **Release / knowledge:** released 2026-07-24; knowledge cutoff **not published** (LLMBoard lists Unknown) — no verified public figure.
- **IDs:** `anthropic/claude-opus-5`, `claude-opus-5`. No Free ID — paid only.
- **Context window:** 1M input / 128K max output tokens (runtime row: Max Input 1M, Max Output 128K; the specification block's "Max output 1M" conflicts with it and with the local `meta.json` "1M / 128K out", so 128K is the figure used).
- **Modalities:** image + text in; text out. Tool use, computer use and structured output yes; vision strong. No audio or video input, no generation.
- **Pricing (as of 2026-09-27):** $5 / 1M input, $25 / 1M output on the Anthropic API; most routers pass through $5 / $25, Cortecs $5.50 / $27.50. Cache-read and batch rates are not tracked for this ID (no verified public figure). Paid only.
- **Architecture:** proprietary, parameters undisclosed, open weights no.

### Raw benchmarks found

> LLMBoard profile (evaluations 2026-09-13 → 2026-09-27): 30 of 33 rows published, coverage **60% / 12 benchmark families**; "#x/y" = rank among models with a published score on that benchmark. Composite: LLMBoard **92.1**.

Agent / tool use:

- LM Arena Agent Bash Recovery Steps: **12.58%** (#1/39) — best error-recovery in the largest agent arena pool
- LM Arena Agent Steerability: **11.19%** (#2/39); Agent Leaderboard **9.80%** (#3/39); Agent Task Outcome (explicit) **10.55%** (#3/39)
- Legal Agent Benchmark: **11.70%** (#2/14) — professional-services agent work
- LM Arena Document: **1516.27** (#1/38) — top document-grounded performance on the tracker
- GDPval-AA, OSWorld 2.0, Terminal-Bench, tau-bench family, MCP Atlas: no verified score retrievable from the published rows for this ID

Reasoning / knowledge:

- Humanity's Last Exam: **64.70%** (#2/104) — essentially tied with Claude Fable 5.1's 65.00% at the top of a 104-model field
- ARC-AGI-3: **30.20%** (#2/5) — hard novel-reasoning set, small field
- BioMysteryBench: **90.10%** (#1/6); Frontier-Bench v0.1 **43.30%** (#1/1, no ranking value)
- LM Arena Text: **1505.55** (#3/218); Text Factuality **1488.34** (#3/128)
- GPQA / Omniscience / SimpleQA rows for this ID: not retrievable from the published rows — no verified public score found

Coding:

- FrontierCode: **53.40%** (#2/4); FrontierCode 1.1: **53.40%** (#3/20)
- LM Arena Webdev: **1692.54** (#3) — elite front-end/build quality
- SWE-bench Verified / SWE-Bench Pro / DeepSWE / Terminal-Bench / LiveCodeBench: no verified public score found in the retrievable rows

Long context:

- MRCR / RULER / GraphWalks: no long-context retrieval score published for this ID; only the 1M input / 128K output figures are verified.

Vision: LM Arena Vision **1321.21** (#3/111).

Runtime: **108.86 tok/s** with **2.53 s** catalog latency on Anthropic — the fastest frontier endpoint measured in this comparison (vs Fable 5.1's 7.40 tok/s and Kimi K3's 3.44 tok/s).

### Normalized scores (1-100)

- **Tool use: 90/100.** #1 LM Arena Agent Bash Recovery 12.58% (#1/39) with Steerability 11.19% (#2/39), Agent Leaderboard 9.80% and Task Outcome 10.55% (both #3/39) plus Legal Agent Benchmark 11.70% (#2/14) is a genuinely strong, well-controlled agent profile; capped because GDPval-AA, OSWorld and the tau/MCP families have no retrievable row for this ID.
- **Reasoning: 93/100.** HLE 64.70% over 104 models (#2), ARC-AGI-3 30.20% (#2/5) on a genuinely non-memorisable suite, BioMysteryBench 90.10% (#1/6) and LM Arena Text Factuality 1488.34 (#3/128) place it at the frontier; docked only because no GPQA or Omniscience row exists to test abstention and no knowledge cutoff is published.
- **Context window: 89/100.** 1M input / 128K output is verified across the runtime and version tables (the spec block's "1M max output" is treated as a tracker artifact), but no MRCR/RULER/GraphWalks measurement exists for this ID, so retrieval quality at length is unproven.
- **Multimodal: 82/100.** Image + text input with LM Arena Vision 1321.21 (#3/111) and a #1 Document rating (1516.27/38) is strong on documents and screenshots; no audio or video input and text-only output.
- **Coding: 88/100.** FrontierCode 53.40% (#2/4 and #3/20 across versions) with LM Arena Webdev 1692.54 (#3) is frontier-adjacent, and Anthropic's general-access agentic-coding positioning is corroborated by the agent arena rows; capped because no SWE-bench-class or Terminal-Bench number was retrievable.
- **Cost efficiency: 84/100.** $5 / $25 across 35 providers with almost no price dispersion, offset by 108.86 tok/s - the best wall-clock economics per capability point in this cohort; docked for no cache disclosure and no free tier.
- **Overall Score: 88.4/100.** Half-up mean of (90 + 93 + 89 + 82 + 88) = 442 / 5 = 88.4, Cost excluded. Cross-check: the independent LLMBoard composite is 92.1 - a 3.7-point divergence explained by that composite weighting its 12-family coverage set (arena-heavy, no cost/latency term), whereas this rubric penalises the missing long-context and SWE-bench evidence. Best fit: document-heavy professional agents (legal, research, office) that need frontier reasoning at high throughput.

---

## Signature

- Provided by: **Pixel Canary (vercel-ai-gateway/pixel-canary)** — 2026-09-27
- Method: public internet research on 2026-09-27 (LLMBoard model profile incl. provider pricing and runtime tables + local `meta.json` for modality/free-tier notes, including the documented max-output conflict); no peer `model/` findings were read — only the single `- **Overall Score:` line of `average.md` was used for queue order. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
