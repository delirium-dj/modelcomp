# Claude Sonnet 4.6 — findings by Big Pickle

- Source: Anthropic (`claude-sonnet-4-6`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6
- **Short description:** Anthropic's Feb 2026 mid-tier hybrid-reasoning model that compresses multi-day coding projects into hours — upgrades across coding, computer use, long-context reasoning, agent planning, knowledge work and design, with a 1M-token context window in beta. Approaches Opus-level intelligence at nearly a fifth of the price; the default claude.ai model for Free/Pro from Feb 2026.
- **Provider / access:** claude.ai / Cowork / Claude Code, Anthropic API (`claude-sonnet-4-6`), OpenRouter, AWS Bedrock, GCP Vertex AI, Microsoft Foundry, Vercel AI Gateway. Proprietary.
- **Release / knowledge:** 2026-02-17; knowledge cutoff 2026-01.
- **IDs:** `claude-sonnet-4-6` (Anthropic; proprietary).
- **Context window:** 1,000,000 tokens (beta); 64K max output; ~42 tok/s measured (anotherwrapper).
- **Modalities:** text + image + file inputs; text output; hybrid reasoning (thinking default with effort control), tool use, computer use, structured outputs, prompt caching, web search. 1× guaranteed / 3× ceiling resource handling.
- **Pricing (as of 2026-09-20):** $3.00 in / $15.00 out per 1M (cache read $0.50-0.75, cache write ~$3.75; up to 90% savings with caching); 50% savings with batch.
- **Architecture:** Proprietary decoder-only hybrid (extended thinking + instant mode); unknowns withheld.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **59.1%** (thinking off, anotherwrapper; Anthropic-published result ~59-61% on Terminus-2 harness).
- OSWorld: **78.5%**; MCP Atlas: **61.3%** (anotherwrapper).
- BrowseComp: **74.7%**; DeepSWE v1.1: **30%**; Finance Agent v2: **51.0%**; Finance Agent: **63.3%**; Legal Agent Benchmark: **5.4%** (anotherwrapper).
- Vending-Bench Arena (simulated long-horizon business): beats Sonnet 4.5 — invests in capacity early, pivots to profit at the end (Anthropic).

Reasoning / knowledge:

- GPQA Diamond: **89.9%** (anotherwrapper; AA GPQA 91.1% family-quartered).
- HLE: **46.8%** (anotherwrapper); ARC-AGI 2: **58.3%**; MMLU: **89.3%**.
- AA Intelligence Index (pricepertoken): ~56-57 territory for this class (Anthropic provider-wide 63.1 max is Opus 5).

Coding:

- SWE-bench Verified: **79.6%** (avg 10 trials; 80.2% with prompt modification, Anthropic).
- SWE-bench Multilingual: **59%**; LiveBench: **75.5%**; Arena Code Elo: **~1,524** (anotherwrapper).
- τ²-Bench Retail: **91.7%**; τ²-Bench Telecom: **97.9%**.
- Claude Code preference: flights showed ~70% user preference vs Sonnet 4.5; preferred to Opus 4.5 59% of the time (less overengineering, better instruction following).

Long context:

- 1M beta context with effective cross-context reasoning; Vending-Bench and long-horizon codebase planning highlighted; GraphWalks-BFS 128K style ranked readings not surfaced for 4.6 in my trail.

Multimodal:

- MMMU-Pro: **75.6%**; MMMU: **60.4%** (anotherwrapper); image/pdf/file inputs, text out.

### Normalized scores (1–100)

- **Tool use: 81/100.** (Lowered from 82 on 2026-10-08.) **OSWorld-Verified corrected to 72.1%** (leaderboard; the old 78.5% was an unverified OSWorld row); Terminal-Bench 2.0 59.1% and new TB2.1 Vals 57.3% stay mid-tier; new gaps filled: **Claw-Eval 67.8%**, CyberGym 65.2%, τ²-bench 79.5% (AA) — solid but not frontier.
- **Reasoning: 83/100.** (Lowered from 84 on 2026-10-08.) HLE confirmed at **49%** (system card, above the old 46.8 otherwrapper row) and GPQA 89.9% still strong — but independent AA re-runs are weak: **AA-HLE 13.3%, CritPt 0.9%, AA-Omniscience index −3.5 (hallucination 68.5%), AA-IFBench 41.2%, AA-GPQA 79.9%**.
- **Context window: 83/100.** (Lowered from 84 on 2026-10-08.) 1M beta context with demonstrated long-horizon reasoning and 64K output, but the only long-context eval found is **AA-LCR 68.3%** (mid-band); BenchLM lists the base window as 200K.
- **Multimodal: 80/100.** Text/image/file + design work; MMMU-Pro 75.6% confirmed (AA-MMMU-Pro 70.6%), CharXiv 77.4%, Design Arena 1,291 (all new); no audio.
- **Coding: 80/100.** SWE-bench Verified 79.6% confirmed (Vals 77.4%) and LiveCodeBench (Vals) **82.1%** is a strong new row; but Vibe 51.5%, CursorBench 3.1 48.8%, FrontierCode 24.3% (all new) keep it below the coding frontier.
- **Cost efficiency: 81/100.** (Lowered from 84 on 2026-10-08.) $3/$15 unchanged — but **Sonnet 5/5.5 now list at $2/$10 with higher benchmarks**, so Sonnet 4.6 no longer owns the near-Opus value story of the 4.x era.
- **Overall Score: 81/100.** Mean of the five quality dims (81+83+83+80+80)/5 = 81.4 → 81 (lowered from 82). Still a strong coding-to-dollar Sonnet, now superseded on both price and capability.

---

## Re-verification — 2026-10-08 (18 days after original)

| Dimension | 2026-09-20 | 2026-10-08 | Δ |
|---|---|---|---|
| Tool use | 82 | 81 | −1 |
| Reasoning | 84 | 83 | −1 |
| Context window | 84 | 83 | −1 |
| Multimodal | 80 | 80 | — |
| Coding | 80 | 80 | — |
| Cost efficiency | 84 | 81 | −3 |
| **Overall** | **82** | **81** | **−1** |

New and corrected data (all found 2026-10-08, BenchLM updated 2026-10-07 unless noted):

- **OSWorld corrected: 72.1%** (OSWorld-Verified leaderboard) vs the old 78.5% unverified row.
- **HLE confirmed: 49%** (system card) — old 46.8% otherwrapper row was conservative.
- **Claw-Eval gap filled: 67.8%** (leaderboard) — recurring gap in the original report.
- New agentic rows: CyberGym 65.2%, τ²-bench 79.5% (AA; old 91.7/97.9 were vendor retail/telecom variants), Terminal-Bench 2.1 (Vals) 57.3%, OSWorld 2.0 8.3%, JobBench 36.9%, ApprenticeBench 2%.
- New coding rows: LiveCodeBench (Vals) 82.1%, SWE-bench (Vals) 77.4%, Vibe Code Bench 51.48%, CursorBench 3.1 48.8%, FrontierCode 1.1 Main 24.3%, SWE-Rebench 60.7%, React Native Evals 80.6%.
- New reasoning rows exposing the vendor/AA split: **AA-HLE 13.3%** (vs vendor 49%), **CritPt 0.9%**, **AA-Omniscience index −3.5** (accuracy 38.6, hallucination 68.5), AA-IFBench 41.2%, AA-GPQA 79.9% (Vals 85.6%), MMLU-Pro (Vals) 87.3%, FrontierMath v2 32.4% / Tier 4 8.3%, ARC-AGI-1 86.0% / ARC-AGI-2 58.3% (ARC Prize confirms old figure).
- New context/multimodal rows: **AA-LCR 68.3%** (only long-context signal), CharXiv 77.4%, AA-MMMU-Pro 70.6%, Design Arena Website 1,291.
- **Artificial Analysis Intelligence Index: 24.7** on the current v4.3 scale (era re-base across all models).
- **Pricing recheck: $3/$15 unchanged** for Sonnet 4.6 — but Anthropic now sells Sonnet 5 and Sonnet 5.5 at **$2/$10** with higher benchmarks, erasing the 4.6 value argument.
- BenchLM: 55.33, #60/887; family standings show Sonnet 5 (65.89) and Sonnet 5.5 (83.89) above it.

Gaps still open after re-run: MRCR / RULER / GraphWalks (only AA-LCR), Terminal-Bench 3.0, HAL / APEX individual scores, τ³-Banking.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-20
- Method: public web research (Anthropic news pages, anotherwrapper compare tables, LLMReference, pricepertoken); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.