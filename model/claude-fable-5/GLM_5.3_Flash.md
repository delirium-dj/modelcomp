# Claude Fable 5 — findings by GLM 5.3 Flash

- Source: Anthropic (`claude-fable-5`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic's June 2026 Mythos-class flagship for long-running, complex and asynchronous knowledge work and coding — the first Fable generation, now legacy to Fable 5.1 (released 2026-09-01; AA marks Fable 5 deprecated for non-default workloads). It shares its underlying weights with the access-restricted Claude Mythos 5, and routes a small slice of risk-flagged prompts to Opus 4.8 (fallback).
- **Provider / access:** Anthropic Claude API `claude-fable-5` (Messages API, adaptive thinking always on); also Amazon Bedrock (`anthropic.claude-fable-5`), Google Cloud, Microsoft Foundry, Claude Platform on AWS (7 API providers on AA). OpenCode Zen lists `opencode/claude-fable-5` (standard pricing). AA formally marks the model **deprecated** as of 2026-10-19 — "we only continue performance benchmarking for the default 10k input token workload" — directing users to Fable 5.1.
- **Release / knowledge:** Released 2026-06-09 (AA confirms Jun 9, 2026); reliable knowledge cutoff Jan 2026 (verified via platform.claude.com model overview on the 2026-10-08 pass; the current models-overview table lists Fable 5 among legacy models still available).
- **IDs:** `claude-fable-5` (Claude API); Zen `opencode/claude-fable-5` (no Free ID confirmed — standard pricing).
- **Context window:** 1M tokens total; 128K max output (sync Messages API) — verified via platform.claude.com/docs/en/models/fable-5/overview and AA (re-checked 2026-10-11).
- **Modalities:** Text and images in → text out (docs + AA agree); reasoning yes (adaptive, always on, default effort `high`); tool calls yes; JSON/structured output supported via API features.
- **Pricing (as of 2026-10-19):** $10 / MTok in, $50 / MTok out (AA confirms, blended $7.70); cache write $12.50 (5m) / $20 (1h); cache read $1 / MTok (10% — not the 2.5% Fable-5.1 rate); Batch API 50% off both directions. AA measures $8.75 per Intelligence Index task (most expensive measured in this repo, $114/114 on cost); speed re-measured 2026-10-19: 67.9 tok/s, TTFT 74.7s, 130M index tokens. Paid only.
- **Architecture:** Proprietary, closed weights; Mythos-class — same weights as Claude Mythos 5 (verification-program-only), with classifier routing of cyber/bio/chem/distillation-flagged prompts to Opus 4.8 (~2% of tasks per Artificial Analysis, <5% per session per Anthropic).

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **1747** (Anthropic Fable 5 & Mythos 5 system card via benchlm.ai, updated 2026-10-10) — **conflicts with the launch-day AA-composite reading of 1932 (#1)** the 2026-10-08 pass cited; AA-normalized: **55.6%**
- Terminal-Bench 2.1: **84.3%** (system card; Vals independent: **80.5%**) — fills the gap the 2026-10-08 pass marked missing
- τ²-bench: **98.5%** (AA, independent) — fills the Tau2 gap
- OSWorld-Verified: **85%** (system card)
- AA Harvey LAB-AA v1.0: **93.6%** (AA, independent — best measured in this repo)
- terminalBenchHard: **62.9%** (AA); AA EnterpriseOps-Gym-AA: **51.1%**; AA Agentic Index: **51.0%**; AA-AnalystAgent: **48.8%**
- Terminal-Bench 3.0: **34.0%** (frontierbench.ai)
- ApprenticeBench (GUI): **34%** (NeoCognition, independent)
- Toolathon / MCP-Atlas / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.6%** (AA; Vals 93.2%)
- ARC-AGI-1: **98.5%**; ARC-AGI-2: **89.2%** (ARC Prize verified results, arcprize.org/results/anthropic-claude-fable-5 — fills the ARC gap)
- AA-HLE: **55.5%** (AA leaderboard, updated — the 2026-10-08 ">7 pts ahead at 53.3%" framing was launch-window and no longer holds on the current board)
- Artificial Analysis Intelligence Index v4.3.2: **50, #19/227** (AA model page, 2026-10-11; BenchLM normalized 49.6%) — the v4.1-era "60 / #1" is historical and not comparable; index recompositions moved it down the board
- MMLU-Pro: **91.5%** (Vals, independent)
- AA-LCR v1.1: **82.3%**; MLCR-AA: **64.4%**; CritPt: **28.6%** (AA — fill the LCR/MLCR/CritPt gaps the 2026-10-08 pass marked missing)
- FrontierMath v2: Tiers 1–3 **87.0%**, Tier 4 **90.2%** (Epoch AI leaderboard — added 2026-10-16 from the 2026-10-17 refresh, previously unmeasured; Tier 4 90.2% is elite)
- MazeBench ASCII: **11%** (added 2026-10-16)
- AA-Omniscience: **65.4% accuracy / 63.6% non-hallucination row / 43.3 index** (AA)
- AA-IFBench: **63.5%** (instruction following)

Coding:

- SWE-bench Verified: **95%** (Anthropic Fable 5 & Mythos 5 system card via benchlm.ai — upgrades the "~95% secondary aggregator, provisional" row the 2026-10-08 pass cited to vendor-verified; Vals SWE-bench: **95.0%**)
- SWE-bench Pro: **80%** (system card; the 2026-10-08 pass read 80.3% from launch materials — consistent)
- LiveCodeBench: **89.8%** (Vals, independent — fills the LiveCodeBench gap)
- AA Coding Index: **76.5%** (AA); AA-SciCode: **61.0%** (AA)
- FrontierSWE v2: **47.0%** (Proximal); FrontierCode 1.1 Main: **53.5%** (Cognition)
- CursorBench 3.1: **70.6%**; CursorBench 3.2: **70.5%**; VulcanBench v3: **89.5%**
- Terminal-Bench 2.1: **84.3%** / **80.5%** (as above)

Long context:

- AA-LCR v1.1: **82.3%** (AA, independent — first measured long-context number; fills the 2026-10-08 gap)
- MRCR/RULER/GraphWalks at window length: no verified public score found

Multimodal:

- Blueprint-Bench 2: **38.6%**; OfficeQA Pro: **57.9%** (system card); Design Arena Website: **1302** (OpenRouter)

### Normalized scores (1–100)

- **Tool use: 93/100.** The second pass replaces the single-benchmark story with a broad independent package: TB2.1 84.3/80.5, τ²-bench 98.5%, OSWorld-Verified 85%, AA Harvey 93.6% (best measured), terminalBenchHard 62.9% — but GDPval drops from the launch-day 1932 #1 to the system card's 1747 (AA-normalized 55.6%), and ApprenticeBench 34% keeps it under 95.
- **Reasoning: 92/100.** CHANGED from 91 — the v4.1-era "#1 with HLE >7 pts clear" framing has aged: on the current board AA Index is 50 (#19/227), AA-HLE 55.5%, GPQA 92.6% (still trailing rivals), ARC-AGI-2 89.2% verified — but the newly measured FrontierMath v2 87.0%/90.2% (Epoch, elite Tier 4) adds a decisive math pillar, lifting the band; still a step below Opus 5.5 (94).
- **Context window: 95/100.** Documented 1M tokens (tier ≥1M = 95–100); AA-LCR 82.3% is the first measured long-context number (strong); no MRCR/RULER retrieval at length keeps it off the maximum.
- **Multimodal: 65/100.** Text and image input with text output (docs + AA agree) maps to the +image-in 60–70 band; no video/PDF/audio input documented.
- **Coding: 92/100.** SWE-bench Verified 95% is now system-card-verified (not aggregator-provisional) and Vals corroborates at 95.0, with LiveCodeBench 89.8% and SWE Pro 80%; FrontierSWE v2 47.0% and the Anthropic-harness caveat on SWE Pro keep it under 95.
- **Cost efficiency: 30/100.** $10/$50 per 1M — methodology maps $10/$50 ≈ 30; AA re-confirms the worst value in the cohort: $8.75/task (priciest measured), 65.5 tok/s, 132s TTFT; the 10% cache-read rate ($1) is weaker than Fable 5.1's 2.5%.
- **Overall Score: 87/100.** (Was 87.8 on the prior pass.) Mean of the five quality dims per `RULES.md` (Cost excluded): (93 + 92 + 95 + 65 + 92) / 5 = 437/5 = 87.4 → 87 — the 2026-10-11 pass lowered Reasoning (94→91) as the v4.1-era claims aged out; the 2026-10-16 FrontierMath elite rows lift it back to 92. Best fit: long-horizon agentic knowledge work (legal, research, multi-step engineering) where the Harvey/Tau2/OSWorld rows matter — at $10/$50 it is a premium tool, not a volume workhorse, and Fable 5.1 supersedes it at the same price.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-16
- Method: public internet research, second pass 2026-10-11 (≥3 independent sources: artificialanalysis.ai model page, benchlm.ai updated 2026-10-10 citing the Fable 5 & Mythos 5 system card, ARC Prize verified results, Vals AI / Cursor / Proximal / Cognition / NeoCognition leaderboards via benchlm.ai, plus the prior 2026-10-08 pass; 2026-10-16 re-check: FrontierMath v2 87.0/90.2 (elite Tier 4) and MazeBench 11% added — Reasoning 91→92, Overall 87 holds (87.4)); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
